---
title: "Object Storage - Écritures conditionnelles"
excerpt: "Apprenez à utiliser les en-têtes conditionnels If-Match et If-None-Match pour prévenir les écrasements, éviter les conditions de course et contrôler les lectures sur vos buckets OVHcloud Object Storage"
updated: 2026-04-29
---

## Objectif

**Ce guide explique comment utiliser les en-têtes HTTP conditionnels `If-Match` et `If-None-Match` sur les requêtes `PutObject`, `DeleteObject`, `GetObject`, `HeadObject` et `CompleteMultipartUpload` de vos buckets OVHcloud Object Storage.**

## Prérequis

- [Un projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud
- [Un utilisateur Object Storage](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) déjà créé
- [AWS CLI installé et configuré](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

## En pratique

### Pourquoi utiliser les écritures conditionnelles ?

L'Object Storage est par nature concurrent — plusieurs instances d'application, microservices ou traitements en arrière-plan peuvent lire et écrire le même objet simultanément. Sans coordination, ces écritures concurrentes peuvent s'écraser silencieusement, entraînant des pertes de données difficiles à détecter et à reproduire.

Les écritures conditionnelles résolvent ce problème **au niveau de la couche de stockage**, sans nécessiter de service de coordination externe comme une base de données ou un gestionnaire de verrous distribués. En associant une précondition à un appel API S3, vous garantissez que l'opération ne se déroule que si l'objet est dans l'état attendu au moment où la requête est évaluée.

**Bénéfices clés :**

- **Intégrité des données en environnement concurrent :** Évitez qu'une écriture n'écrase silencieusement les modifications d'un autre processus survenues entre votre lecture et votre écriture (la classique *race condition* de type *vérifier-puis-agir*).
- **Primitive de verrouillage distribué :** Implémentez un verrou léger natif au stockage avec `If-None-Match: *` sur `PutObject` — seul le premier écrivain réussit ; tous les autres reçoivent `412 Precondition Failed`.
- **Comparer-et-échanger atomique :** Lisez l'ETag d'un objet, modifiez-le, puis réécrivez-le avec `If-Match: <etag_original>`. L'écriture est rejetée si l'objet a été modifié entre-temps — un modèle de concurrence optimiste sûr.
- **Aucune infrastructure supplémentaire :** La coordination s'effectue directement au sein du service Object Storage — pas besoin de bases de données, files de messages ou gestionnaires de verrous supplémentaires.
- **Tout client compatible S3 :** Les en-têtes conditionnels font partie du standard HTTP ([RFC 7232](https://datatracker.ietf.org/doc/rfc7232/)) et de l'API S3 — ils fonctionnent avec AWS CLI, n'importe quel SDK S3 et les appels HTTP directs.

---

### Vue d'ensemble

Les requêtes conditionnelles vous permettent d'associer une précondition à un appel API S3, basée sur l'état actuel de l'objet cible. L'Object Storage OVHcloud évalue la condition de manière **atomique** avant d'exécuter l'opération. Si la condition n'est pas satisfaite, la requête est rejetée sans modifier aucune donnée.

Deux en-têtes HTTP sont supportés, conformément à la [RFC 7232](https://datatracker.ietf.org/doc/rfc7232/) :

| En-tête | Valeur acceptée | Signification |
|---------|----------------|---------------|
| `If-Match` | Valeur ETag brute ou `*` | Exécute **uniquement si** l'ETag courant de l'objet correspond |
| `If-None-Match` | `*` uniquement | Exécute **uniquement si** l'objet n'existe pas |

Opérations supportées :

| Opération | `If-Match` | `If-None-Match` |
|-----------|-----------|----------------|
| `PutObject` | ✅ | ✅ |
| `DeleteObject` | ✅ | ❌ |
| `GetObject` | ✅ | ✅ |
| `HeadObject` | ✅ | ✅ |
| `CompleteMultipartUpload` | ✅ | ✅ |

> [!primary]
>
> **Format de l'ETag :** Lors de l'utilisation de `If-Match`, fournissez l'ETag sous forme de **chaîne brute sans guillemets** — par exemple `d41d8cd98f00b204e9800998ecf8427e`, et non `"d41d8cd98f00b204e9800998ecf8427e"`.
>
> Pour récupérer l'ETag courant d'un objet, utilisez `aws s3api head-object --bucket <nom_du_bucket> --key <clé_de_l_objet>` et lisez le champ `ETag` dans la réponse en supprimant les guillemets entourants.
>

> [!warning]
>
> Il n'est pas possible d'envoyer à la fois `If-Match` et `If-None-Match` dans la même requête. Cela retourne une erreur HTTP `400 Bad Request`.
>

#### Codes de réponse

| Code HTTP | Signification |
|-----------|--------------|
| `200 OK` / `204 No Content` | La condition est satisfaite — opération exécutée |
| `412 Precondition Failed` | La condition n'est pas satisfaite — opération rejetée, objet inchangé |
| `409 ConditionalRequestConflict` | Une opération concurrente est en conflit — nouvelle tentative requise |

#### Versioning et marqueurs de suppression

Toutes les conditions sont évaluées par rapport à la **version courante** de l'objet, que le versioning soit activé ou non sur le bucket.

> [!primary]
>
> Un **marqueur de suppression** (delete marker) dans un bucket versionné n'est **pas** considéré comme un objet existant :
> - `If-Match` (avec un ETag ou `*`) → `412 Precondition Failed` lorsque la version courante est un marqueur de suppression.
> - `If-None-Match: *` → **réussit** lorsque la version courante est un marqueur de suppression (traité comme inexistant).
>

> [!primary]
>
> **Support du chiffrement :** Les écritures conditionnelles sont supportées pour les objets non chiffrés et les objets chiffrés avec SSE-S3. Le support des objets chiffrés avec SSE-C sera disponible dans une prochaine release.
>

---

### PutObject — écriture conditionnelle

Ajoutez une précondition à l'upload d'un objet pour éviter les écrasements accidentels ou implémenter une logique de premier arrivé, premier servi.

**Cas d'usage :**

- **Premier arrivé, premier servi / verrou distribué :** Plusieurs processus tentent de créer le même objet simultanément. Seul le premier appel avec `If-None-Match: *` réussit — tous les autres reçoivent `412`.
- **Écrasement sécurisé :** Lisez un objet, modifiez-le, puis réécrivez-le avec `If-Match: <etag_original>`. Si un autre client a modifié l'objet entre-temps, l'écriture est rejetée.
- **Initialisation idempotente :** Créez un objet de configuration sans risque d'écraser une version existante.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Écrire uniquement si l'objet n'existe pas (premier arrivé, premier servi)
>> aws s3api put-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --body <chemin_fichier_local> \
>>   --if-none-match "*"
>>
>> # Écrire uniquement si l'ETag courant correspond (écrasement sécurisé)
>> aws s3api put-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --body <chemin_fichier_local> \
>>   --if-match <etag_courant>
>>
>> # Écrire uniquement si l'objet existe (n'importe quel ETag)
>> aws s3api put-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --body <chemin_fichier_local> \
>>   --if-match "*"
>> ```
>>
>> **Téléversement réussi :**
>>
>> ```json
>> {
>>     "ETag": "d41d8cd98f00b204e9800998ecf8427e"
>> }
>> ```
>>
>> **Téléversement refusé (condition non satisfaite) :**
>>
>> ```
>> An error occurred (PreconditionFailed) when calling the PutObject operation:
>> At least one of the pre-conditions you specified did not hold
>> ```
>>
> Via curl (API REST S3)
>> ```sh
>> # Écrire uniquement si l'objet n'existe pas
>> curl -X PUT \
>>   -H "If-None-Match: *" \
>>   -H "Content-Type: application/octet-stream" \
>>   --data-binary @<chemin_fichier_local> \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>"
>>
>> # Écrire uniquement si l'ETag courant correspond
>> curl -X PUT \
>>   -H "If-Match: <etag_courant>" \
>>   -H "Content-Type: application/octet-stream" \
>>   --data-binary @<chemin_fichier_local> \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>"
>> ```
>>
>> **Succès :** HTTP `200 OK`
>>
>> **Condition non satisfaite :** HTTP `412 Precondition Failed`
>>

/// details | Comportement selon l'état du versioning pour PutObject

| État du bucket | `If-None-Match: *` | `If-Match: <etag>` | `If-Match: *` |
|---|---|---|---|
| Non versionné | Réussit uniquement si aucun objet n'existe | Réussit uniquement si l'ETag courant correspond | Réussit uniquement si l'objet existe |
| Versionné — version courante existante | `412 Precondition Failed` | Réussit si l'ETag correspond → crée une nouvelle version | Réussit → crée une nouvelle version |
| Versionné — version courante est un marqueur de suppression | Réussit → crée une nouvelle version | `412 Precondition Failed` | `412 Precondition Failed` |
| Versionné — aucune version | Réussit → crée la première version | `412 Precondition Failed` | `412 Precondition Failed` |

///

---

### DeleteObject — suppression conditionnelle

Supprimez un objet uniquement si la condition ETag est satisfaite. Seul `If-Match` est supporté pour `DeleteObject` — `If-None-Match` n'est pas applicable à la suppression.

**Cas d'usage :**

- **Suppression sécurisée :** Lisez l'ETag d'un objet, puis supprimez-le avec `If-Match: <etag>`. La suppression est rejetée si l'objet a été modifié entre votre lecture et votre suppression.
- **Supprimer-si-existe :** Utilisez `If-Match: *` pour supprimer un objet uniquement s'il existe actuellement.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Supprimer uniquement si l'ETag courant correspond
>> aws s3api delete-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --if-match <etag_courant>
>>
>> # Supprimer uniquement si l'objet existe (n'importe quel ETag)
>> aws s3api delete-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --if-match "*"
>>
>> # Supprimer une version spécifique uniquement si son ETag correspond
>> aws s3api delete-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --version-id <id_de_version> \
>>   --if-match <etag_de_la_version>
>> ```
>>
>> Lorsque `--version-id` est spécifié, l'ETag est évalué par rapport à cette **version spécifique**, et non par rapport à la version courante.
>>

> [!primary]
>
> Dans un **bucket versionné**, une suppression réussie via `DeleteObject` crée un marqueur de suppression comme nouvelle version courante — elle ne supprime pas définitivement l'objet. Pour supprimer définitivement une version spécifique, incluez `--version-id` dans la requête.
>

/// details | Comportement selon l'état du versioning pour DeleteObject

| État du bucket | `If-Match: <etag>` | `If-Match: *` |
|---|---|---|
| Non versionné | Suppression définitive si l'ETag correspond | Suppression définitive si l'objet existe |
| Versionné — version courante existante | Crée un marqueur de suppression si l'ETag de la version courante correspond | Crée un marqueur de suppression si une version courante existe |
| Versionné — version courante est un marqueur de suppression | `412 Precondition Failed` | `412 Precondition Failed` |

///

---

### GetObject — lecture conditionnelle

Récupérez un objet uniquement si la condition ETag est satisfaite. Utilisé principalement pour la validation de cache.

**Cas d'usage :**

- **Validation de cache :** Stockez l'ETag d'un objet téléchargé. Au prochain accès, envoyez `If-Match: <etag_en_cache>` — le téléchargement s'effectue uniquement si l'objet n'a pas changé.
- **Garde lecture-si-inexistant :** Utilisez `If-None-Match: *` pour lire un objet uniquement s'il n'existe pas encore.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Télécharger uniquement si l'ETag correspond à la valeur en cache
>> aws s3api get-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --if-match <etag_en_cache> \
>>   <fichier_de_sortie>
>>
>> # Télécharger uniquement si l'objet existe (n'importe quel ETag)
>> aws s3api get-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --if-match "*" \
>>   <fichier_de_sortie>
>> ```
>>

Les conditions pour `GetObject` et `HeadObject` sont toujours évaluées par rapport à la **version courante**. Pour cibler une version spécifique, ajoutez `--version-id <id_de_version>` — la condition est alors évaluée par rapport à cette version.

---

### HeadObject — lecture conditionnelle des métadonnées

Vérifiez les métadonnées d'un objet et son ETag sans télécharger le contenu. La sémantique est identique à `GetObject`, mais aucun contenu n'est retourné.

**Cas d'usage :**

- **Vérification légère d'existence :** Confirmez qu'un objet existe et récupérez son ETag courant avant d'effectuer une écriture conditionnelle.
- **Vérification de fraîcheur :** Confirmez qu'un ETag en cache est toujours valide sans engager de coût de téléchargement.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Vérifier l'existence de l'objet (n'importe quel ETag) et récupérer ses métadonnées
>> aws s3api head-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --if-match "*"
>>
>> # Vérifier les métadonnées uniquement si l'ETag correspond
>> aws s3api head-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --if-match <etag_en_cache>
>> ```
>>

---

### CompleteMultipartUpload — finalisation conditionnelle

Associez une précondition à l'étape finale d'un upload multipart. La condition est évaluée **au moment de l'appel à `CompleteMultipartUpload`**, et non lors de l'initiation avec `CreateMultipartUpload`.

**Cas d'usage :**

- **Remplacement atomique de fichier volumineux :** Démarrez un upload multipart d'un fichier de remplacement. À la finalisation, utilisez `If-Match: <etag>` pour vous assurer que l'objet cible n'a pas été modifié pendant l'upload.
- **Premier arrivé, premier servi pour les fichiers volumineux :** Utilisez `If-None-Match: *` à la finalisation pour qu'un seul upload multipart concurrent crée définitivement l'objet.

> [!tabs]
> Via AWS CLI
>> ```sh
>> # Finaliser uniquement si l'objet n'existe pas encore
>> aws s3api complete-multipart-upload \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --upload-id <id_upload> \
>>   --multipart-upload file://parts.json \
>>   --if-none-match "*"
>>
>> # Finaliser uniquement si l'ETag courant correspond
>> aws s3api complete-multipart-upload \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --upload-id <id_upload> \
>>   --multipart-upload file://parts.json \
>>   --if-match <etag_courant>
>> ```
>>

> [!warning]
>
> En cas d'erreur `409 ConditionalRequestConflict` sur `CompleteMultipartUpload`, vous devez redémarrer entièrement la séquence d'upload multipart :
>
> 1. Appelez `AbortMultipartUpload` pour nettoyer l'upload en cours.
> 2. Récupérez l'ETag courant avec `HeadObject`.
> 3. Appelez `CreateMultipartUpload` pour démarrer un nouvel upload.
> 4. Re-téléversez toutes les parties avec `UploadPart`.
> 5. Relancez `CompleteMultipartUpload` avec la condition mise à jour.
>

/// details | Comportement selon l'état du versioning pour CompleteMultipartUpload

| État du bucket | `If-None-Match: *` | `If-Match: <etag>` | `If-Match: *` |
|---|---|---|---|
| Non versionné | Réussit uniquement si aucun objet n'existe au moment de la finalisation | Réussit uniquement si l'ETag courant correspond au moment de la finalisation | Réussit uniquement si l'objet existe au moment de la finalisation |
| Versionné — version courante existante | `412 Precondition Failed` | Réussit si l'ETag correspond → crée une nouvelle version | Réussit → crée une nouvelle version |
| Versionné — version courante est un marqueur de suppression | Réussit → crée une nouvelle version | `412 Precondition Failed` | `412 Precondition Failed` |
| Versionné — aucune version | Réussit → crée la première version | `412 Precondition Failed` | `412 Precondition Failed` |

///

---

### Considérations importantes

- **Atomicité :** La vérification de la condition et l'opération s'exécutent en une seule unité atomique. Aucune opération concurrente ne peut modifier l'objet entre la vérification et l'écriture.
- **Un seul en-tête par requête :** Vous ne pouvez pas combiner `If-Match` et `If-None-Match` dans la même requête — cela retourne une erreur `400 Bad Request`.
- **Nouvelle tentative sur 409 pour PutObject / DeleteObject :** En cas de `409 ConditionalRequestConflict`, récupérez l'ETag courant de l'objet avec `HeadObject` et relancez votre requête avec la valeur mise à jour.
- **Aucune modification IAM requise :** Aucune permission supplémentaire n'est nécessaire. Les permissions existantes `s3:PutObject`, `s3:DeleteObject` et `s3:GetObject` sont suffisantes.
- **Compatibilité avec Object Lock :** Les en-têtes conditionnels sont évalués indépendamment des règles Object Lock (WORM). Les deux contraintes s'appliquent.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).


## Objectif

**Ce guide explique comment utiliser les écritures conditionnelles pour contrôler si une requête PUT doit aboutir en fonction de l'état actuel de l'objet dans votre bucket Object Storage OVHcloud.**

## Prérequis

- [Un projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud
- [Un utilisateur Object Storage](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) déjà créé
- [AWS CLI installé et configuré](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

## En pratique

### Concept

Les écritures conditionnelles vous permettent d'associer des préconditions à une requête PUT. L'Object Storage OVHcloud évalue la condition par rapport à l'état actuel de l'objet cible avant de traiter l'écriture. Si la condition n'est pas satisfaite, la requête est rejetée avec une réponse HTTP `412 Precondition Failed`, sans modifier l'objet.

La condition supportée est l'en-tête HTTP `If-None-Match` :

| En-tête | Valeur | Effet |
|---------|--------|-------|
| `If-None-Match` | `*` | L'écriture réussit **uniquement si l'objet n'existe pas déjà** |

Cela permet d'obtenir une sémantique **écriture-si-inexistant** (aussi appelée *premier arrivé, premier servi*) : le premier client à envoyer un PUT sur la clé gagne ; les tentatives ultérieures d'écrasement sont rejetées.

> [!primary]
>
> Les écritures conditionnelles opèrent au niveau de l'objet et sont évaluées de manière atomique. Elles ne nécessitent pas l'activation du versioning.
>

### Cas d'usage

- **Prévention des doublons** : garantir qu'un objet n'est écrit qu'une seule fois, même si plusieurs processus tentent de téléverser simultanément la même clé.
- **Coordination distribuée** : utiliser les écritures conditionnelles comme primitive de verrouillage légère — le processus dont l'écriture réussit « revendique » la clé.
- **Initialisation idempotente** : initialiser en toute sécurité un objet de configuration ou d'état sans risquer d'écraser une version déjà existante.

### Fonctionnement des écritures conditionnelles

Lorsque vous incluez l'en-tête `If-None-Match: *` dans une requête PUT :

1. L'Object Storage OVHcloud vérifie si un objet existe déjà à la clé spécifiée.
2. **Si l'objet n'existe pas** → l'écriture se déroule normalement et retourne HTTP `200 OK`.
3. **Si l'objet existe déjà** → l'écriture est rejetée et retourne HTTP `412 Precondition Failed`. L'objet existant est conservé tel quel.

> [!warning]
>
> La condition `If-None-Match: *` ne prend pas en compte le versioning. Si le versioning est activé sur le bucket, la condition vérifie l'existence de la *version courante* de l'objet. Un marqueur de suppression (delete marker) versionné n'est pas considéré comme un objet existant.
>

### Utiliser les écritures conditionnelles

> [!tabs]
> Via AWS CLI
>> La commande `s3api put-object` de l'AWS CLI supporte le flag `--if-none-match` :
>>
>> ```sh
>> aws s3api put-object \
>>   --bucket <nom_du_bucket> \
>>   --key <clé_de_l_objet> \
>>   --body <chemin_fichier_local> \
>>   --if-none-match "*"
>> ```
>>
>> **Explications :**
>>
>> - `--bucket <nom_du_bucket>` : remplacez par le nom de votre bucket cible.
>> - `--key <clé_de_l_objet>` : la clé (chemin) de l'objet à écrire.
>> - `--body <chemin_fichier_local>` : fichier local à téléverser.
>> - `--if-none-match "*"` : l'en-tête d'écriture conditionnelle — n'écrire que si l'objet n'existe pas.
>>
>> **Téléversement réussi (l'objet n'existait pas) :**
>>
>> ```json
>> {
>>     "ETag": "\"d41d8cd98f00b204e9800998ecf8427e\""
>> }
>> ```
>>
>> **Téléversement refusé (l'objet existe déjà) :**
>>
>> ```
>> An error occurred (PreconditionFailed) when calling the PutObject operation:
>> At least one of the pre-conditions you specified did not hold
>> ```
>>
> Via curl (API REST S3)
>> Vous pouvez utiliser l'en-tête `If-None-Match: *` directement dans une requête PUT signée :
>>
>> ```sh
>> curl -X PUT \
>>   -H "If-None-Match: *" \
>>   -H "Content-Type: application/octet-stream" \
>>   --data-binary @<chemin_fichier_local> \
>>   --aws-sigv4 "aws:amz:<région>:s3" \
>>   --user "<clé_accès>:<clé_secrète>" \
>>   "https://s3.<région>.io.cloud.ovh.net/<nom_du_bucket>/<clé_de_l_objet>"
>> ```
>>
>> Remplacez `<région>`, `<clé_accès>`, `<clé_secrète>`, `<nom_du_bucket>` et `<clé_de_l_objet>` par vos valeurs réelles.
>>
>> **Téléversement réussi** — HTTP `200 OK`
>>
>> **Téléversement refusé** — HTTP `412 Precondition Failed`
>>

### Vérifier l'existence d'un objet avant d'écrire

Pour vérifier si un objet existe déjà sans le télécharger, utilisez une requête HEAD :

```sh
aws s3api head-object --bucket <nom_du_bucket> --key <clé_de_l_objet>
```

- Retourne les métadonnées de l'objet s'il **existe**.
- Retourne une erreur `404 Not Found` si l'objet **n'existe pas**.

Utilisez cette commande pour inspecter l'état avant d'effectuer une écriture conditionnelle, ou pour confirmer le résultat d'une écriture.

### Considérations importantes

- **Atomicité** : l'évaluation de la condition et l'écriture sont atomiques. Il n'existe pas de fenêtre entre la vérification et l'écriture pendant laquelle un autre client pourrait intervenir.
- **Téléversements multipart** : les écritures conditionnelles avec `If-None-Match` ne sont pas supportées pour les téléversements multipart. Utilisez des opérations PUT classiques en une seule partie pour les écritures conditionnelles.
- **Interaction avec le versioning** : si le versioning est activé et que la version courante est un marqueur de suppression, l'objet est considéré comme inexistant et l'écriture conditionnelle réussira.
- **Coût** : un PUT rejeté (`412 Precondition Failed`) n'engendre pas de coût de stockage, mais peut être comptabilisé comme une requête à des fins de facturation.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
