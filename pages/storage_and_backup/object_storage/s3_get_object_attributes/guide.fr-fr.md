---
title: "Object Storage - GetObjectAttributes"
excerpt: "Apprenez à récupérer les attributs de métadonnées de vos objets (ETag, taille, classe de stockage, checksum, parties multipart) sans télécharger le corps de l'objet"
updated: 2026-05-05
---

## Objectif

**Ce guide explique comment utiliser l'opération API S3 `GetObjectAttributes` pour récupérer les attributs de métadonnées des objets de vos buckets OVHcloud Object Storage sans télécharger le corps de l'objet.**

## Prérequis

- [Un projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud
- [Un utilisateur Object Storage](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) déjà créé
- [AWS CLI installé et configuré](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

## En pratique

### Pourquoi utiliser GetObjectAttributes ?

L'inspection des métadonnées d'un objet nécessite traditionnellement au moins deux appels API distincts : `HeadObject` pour récupérer l'ETag, la taille et la classe de stockage, et `ListParts` pour énumérer les parties des objets multipart. Chaque appel supplémentaire ajoute de la latence, ce qui devient significatif à grande échelle dans les pipelines de données, les workflows de vérification d'intégrité ou les systèmes d'audit de stockage.

`GetObjectAttributes` consolide la récupération de tous les attributs en un **seul appel API sélectif**. Vous demandez exactement les attributs dont vous avez besoin, le service retourne uniquement ces champs - aucun corps d'objet n'est transféré.

**Bénéfices clés :**

- **Aucun transfert de corps :** récupérez uniquement les métadonnées, quelle que soit la taille de l'objet.
- **Réponse sélective :** recevez uniquement les attributs que vous demandez.
- **Consolidation en un seul appel :** remplace le schéma `HeadObject` + `ListParts`.
- **Tout client compatible S3 :** fonctionne avec AWS CLI, n'importe quel SDK S3 et les appels HTTP directs.

---

### Attributs supportés

Vous sélectionnez les attributs à récupérer en les listant dans le header de requête `x-amz-object-attributes` (séparés par des espaces pour AWS CLI, par des virgules pour HTTP brut). Les attributs non listés sont absents de la réponse.

| Attribut | Description |
|---|---|
| `ETag` | Identifiant opaque représentant une version spécifique du contenu de l'objet |
| `Checksum` | Valeur de checksum calculée avec l'algorithme stocké avec l'objet lors du téléversement |
| `ObjectParts` | Structure multipart de l'objet : liste des parties avec leur numéro, taille et checksum optionnel |
| `StorageClass` | Classe de stockage de l'objet (`STANDARD`, `STANDARD_IA`, `GLACIER_IR`, `DEEP_ARCHIVE`, `EXPRESS_ONEZONE`) |
| `ObjectSize` | Taille totale de l'objet en octets |

Le header de réponse `Last-Modified` est toujours retourné, quels que soient les attributs demandés.

> [!primary]
>
> Le header `x-amz-object-attributes` est **obligatoire**. Une requête sans ce header retourne `400 Bad Request`. Les noms d'attributs sont sensibles à la casse.
>

---

### Récupérer les attributs d'un objet

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Récupérer l'ETag et la taille
>> aws s3api get-object-attributes \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --object-attributes ETag ObjectSize
>> ```
>>
>> **Réponse en cas de succès :**
>>
>> ```json
>> {
>>     "LastModified": "2026-04-15T10:23:45+00:00",
>>     "ETag": "d41d8cd98f00b204e9800998ecf8427e",
>>     "ObjectSize": 1048576
>> }
>> ```
>>
>> Pour demander tous les attributs à la fois :
>>
>> ```sh
>> aws s3api get-object-attributes \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --object-attributes ETag Checksum ObjectParts StorageClass ObjectSize
>> ```
>>
> Via curl (API REST S3)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: ETag,ObjectSize" \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>?attributes"
>> ```
>>
>> **Succès :** HTTP `200 OK` avec un corps XML contenant les attributs demandés.
>>

---

### Attribut Checksum

Lorsque `Checksum` est demandé, la réponse inclut l'algorithme et la valeur stockés avec l'objet lors du téléversement. Si l'objet a été téléversé sans checksum, l'élément `Checksum` est absent de la réponse - ce n'est pas une erreur.

**Algorithmes de checksum supportés sur OVHcloud Object Storage :**

| Algorithme | Élément XML dans la réponse |
|---|---|
| CRC-32 | `ChecksumCRC32` |
| CRC-32C | `ChecksumCRC32C` |
| CRC-64/NVME | `ChecksumCRC64NVME` |
| SHA-1 | `ChecksumSHA1` |
| SHA-256 | `ChecksumSHA256` |

> [!tabs]
> Via AWS CLI
>> ```sh
>> aws s3api get-object-attributes \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --object-attributes Checksum
>> ```
>>
>> **Réponse (l'objet a un checksum CRC32) :**
>>
>> ```json
>> {
>>     "LastModified": "2026-04-15T10:23:45+00:00",
>>     "Checksum": {
>>         "ChecksumCRC32": "aGVsbG8="
>>     }
>> }
>> ```
>>
>> **Réponse (l'objet n'a pas de checksum) :**
>>
>> ```json
>> {
>>     "LastModified": "2026-04-15T10:23:45+00:00"
>> }
>> ```
>>
> Via curl (API REST S3)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: Checksum" \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>?attributes"
>> ```
>>

---

### Attribut ObjectParts (objets multipart)

Lorsque `ObjectParts` est demandé sur un objet multipart, la réponse liste toutes les parties avec leur numéro, taille et checksum optionnel. Pour les objets en une seule partie (non-multipart), `ObjectParts` est retourné comme un élément vide.

**Pagination :** les résultats sont paginés à 1000 parties par réponse maximum.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Lister toutes les parties (par défaut : jusqu'à 1000)
>> aws s3api get-object-attributes \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --object-attributes ObjectParts
>> ```
>>
>> **Réponse :**
>>
>> ```json
>> {
>>     "LastModified": "2026-04-20T08:10:00+00:00",
>>     "ObjectParts": {
>>         "TotalPartsCount": 3,
>>         "MaxParts": 1000,
>>         "IsTruncated": false,
>>         "Parts": [
>>             { "PartNumber": 1, "Size": 5242880 },
>>             { "PartNumber": 2, "Size": 5242880 },
>>             { "PartNumber": 3, "Size": 1048576 }
>>         ]
>>     }
>> }
>> ```
>>
> Via curl (API REST S3)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: ObjectParts" \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>?attributes"
>> ```
>>

/// details | Paginer à travers ObjectParts (objets avec plus de 1000 parties)

Lorsqu'un objet possède plus de 1000 parties, `IsTruncated` vaut `true` et `NextPartNumberMarker` indique où reprendre. Utilisez `--part-number-marker` pour récupérer les pages suivantes.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Première page
>> aws s3api get-object-attributes \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --object-attributes ObjectParts \
>>   --max-parts 1000
>>
>> # Page suivante - utilisez NextPartNumberMarker de la réponse précédente
>> aws s3api get-object-attributes \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --object-attributes ObjectParts \
>>   --max-parts 1000 \
>>   --part-number-marker <marqueur_de_partie_suivante>
>> ```
>>
> Via curl (API REST S3)
>> ```sh
>> # Première page
>> curl -X GET \
>>   -H "x-amz-object-attributes: ObjectParts" \
>>   -H "x-amz-max-parts: 1000" \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>?attributes"
>>
>> # Page suivante
>> curl -X GET \
>>   -H "x-amz-object-attributes: ObjectParts" \
>>   -H "x-amz-max-parts: 1000" \
>>   -H "x-amz-part-number-marker: <marqueur_de_partie_suivante>" \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>?attributes"
>> ```
>>

///

---

### Objets versionnés

Par défaut, `GetObjectAttributes` opère sur la **version courante** de l'objet. Pour récupérer les attributs d'une version spécifique, ajoutez `--version-id` à la requête.

> [!tabs]
> Via AWS CLI
>> ```sh
>> aws s3api get-object-attributes \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --version-id <id_de_version> \
>>   --object-attributes ETag ObjectSize StorageClass
>> ```
>>
>> Le header de réponse `x-amz-version-id` retourne l'identifiant de version de l'objet récupéré.
>>
> Via curl (API REST S3)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: ETag,ObjectSize" \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>?attributes&versionId=<id_de_version>"
>> ```
>>

> [!primary]
>
> **Permissions IAM avec versionId :** l'utilisation de `--version-id` requiert les permissions `s3:GetObjectVersion` et `s3:GetObjectVersionAttributes`, à la place des permissions par défaut `s3:GetObject` + `s3:GetObjectAttributes`.
>

---

### Objets chiffrés (SSE-C)

Pour les objets chiffrés avec SSE-C (clés fournies par le client), vous devez fournir les trois headers de chiffrement à chaque requête `GetObjectAttributes`. Le service ne stocke pas la clé.

> [!tabs]
> Via AWS CLI
>> ```sh
>> aws s3api get-object-attributes \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --object-attributes ETag ObjectSize \
>>   --sse-customer-algorithm AES256 \
>>   --sse-customer-key <clé_256_bits_encodée_base64> \
>>   --sse-customer-key-md5 <md5_de_la_clé_encodé_base64>
>> ```
>>
> Via curl (API REST S3)
>> ```sh
>> curl -X GET \
>>   -H "x-amz-object-attributes: ETag,ObjectSize" \
>>   -H "x-amz-server-side-encryption-customer-algorithm: AES256" \
>>   -H "x-amz-server-side-encryption-customer-key: <clé_encodée_base64>" \
>>   -H "x-amz-server-side-encryption-customer-key-MD5: <md5_encodé_base64>" \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>?attributes"
>> ```
>>

> [!warning]
>
> Les trois headers SSE-C sont obligatoires pour les objets SSE-C. L'omission de l'un d'eux retourne `400 Bad Request`. Fournir une clé incorrecte retourne `403 Forbidden`.
>
> Pour les objets non chiffrés et SSE-S3, n'incluez **pas** les headers SSE-C - les inclure retourne `400 Bad Request`.
>

---

### Permissions IAM

| Situation | Permissions requises |
|---|---|
| Sans `versionId` | `s3:GetObject` + `s3:GetObjectAttributes` |
| Avec `versionId` | `s3:GetObjectVersion` + `s3:GetObjectVersionAttributes` |

Aucune permission supplémentaire n'est requise au-delà des permissions de lecture standard.

---

### Codes d'erreur

| Code HTTP | Code d'erreur | Condition |
|---|---|---|
| `200 OK` | - | Requête réussie |
| `400 Bad Request` | `InvalidArgument` | `x-amz-object-attributes` manquant, nom d'attribut invalide, ou combinaison de headers SSE-C invalide |
| `403 Forbidden` | `AccessDenied` | Permission IAM manquante, ou clé SSE-C incorrecte |
| `404 Not Found` | `NoSuchKey` | L'objet n'existe pas et le demandeur a `s3:ListBucket` |
| `403 Forbidden` | `AccessDenied` | L'objet n'existe pas et le demandeur n'a PAS `s3:ListBucket` |
| `405 Method Not Allowed` | - | La version cible est un marqueur de suppression |

> [!primary]
>
> **Marqueurs de suppression :** dans un bucket versionné, si la version courante d'un objet (ou la version spécifiée par `--version-id`) est un marqueur de suppression, le service retourne `405 Method Not Allowed` avec le header de réponse `x-amz-delete-marker: true`.
>

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
