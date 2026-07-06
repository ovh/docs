---
title: "Object Storage - Chargement de fichiers depuis le navigateur via HTTP POST"
excerpt: "Apprenez à permettre aux utilisateurs de charger des fichiers directement depuis leur navigateur vers un bucket OVHcloud Object Storage via un formulaire HTML signé côté serveur"
updated: 2026-07-06
---

## Objectif

**Ce guide explique comment implémenter des chargements de fichiers directs depuis le navigateur vers OVHcloud Object Storage en utilisant la méthode HTTP POST, avec génération d'une POST Policy côté serveur et authentification SigV4.**

## Prérequis

- [Un projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud
- [Un utilisateur Object Storage](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) déjà créé
- [AWS CLI installé et configuré](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

## En pratique

### Présentation

Les chargements POST depuis le navigateur permettent aux applications web de laisser les utilisateurs finaux envoyer des fichiers directement dans un bucket OVHcloud Object Storage, sans faire transiter les données par votre serveur applicatif. Votre backend génère une politique et une signature, l'utilisateur sélectionne un fichier, et le navigateur envoie le chargement directement au bucket.

Le flux de chargement comprend les étapes suivantes :

1. Votre backend génère une **POST Policy** (un document JSON définissant les contraintes de chargement) et la signe avec une signature HMAC-SHA256 SigV4.
2. Votre page HTML contient un formulaire intégrant la politique, la signature et les métadonnées de l'objet sous forme de champs cachés.
3. L'utilisateur sélectionne un fichier et soumet le formulaire.
4. Le navigateur envoie la requête POST `multipart/form-data` directement au endpoint OVHcloud Object Storage.
5. OVHcloud valide la politique, vérifie la signature et stocke l'objet.
6. Le navigateur reçoit une réponse : une redirection HTTP ou un code de statut selon la configuration du formulaire.

> [!primary]
> OVHcloud Object Storage exige le format d'URL **virtual-hosted style** pour les chargements POST :
>
> ```
> https://<nom_bucket>.s3.<region>.io.cloud.ovh.net/
> ```
>
> Remplacez `<region>` par l'identifiant de région OVHcloud (par exemple : `gra`, `rbx`, `sbg`, `bhs`, `de`, `uk`).

> [!warning]
> **HTTPS est obligatoire.** La POST Policy, les informations d'identification et la signature sont transmises en clair dans le formulaire HTML. L'utilisation de HTTP les expose en transit et ne doit pas être utilisée.

Les objets écrits via POST sont immédiatement visibles dans le bucket (cohérence forte en lecture après écriture). La taille maximale d'objet par chargement POST est de 5 Go.

### Configurer le CORS du bucket

Les chargements POST depuis le navigateur déclenchent toujours une requête de pré-vérification CORS (`OPTIONS`) avant tout envoi de données. Sans règle CORS correspondante sur le bucket, le navigateur bloque silencieusement le chargement.

Enregistrez le JSON suivant dans un fichier nommé `cors.json` :

```json
{
  "CORSRules": [
    {
      "AllowedOrigins": ["https://votre-application.com"],
      "AllowedMethods": ["POST"],
      "AllowedHeaders": ["*"],
      "ExposeHeaders": ["ETag", "x-amz-version-id"],
      "MaxAgeSeconds": 3000
    }
  ]
}
```

Puis appliquez-le à votre bucket :

```sh
aws s3api put-bucket-cors --bucket <nom_bucket> --cors-configuration file://cors.json
```

**Explications :**

- `--bucket <nom_bucket>` : remplacez par le nom de votre bucket.
- `--cors-configuration file://cors.json` : chemin vers le fichier de configuration CORS.

> [!primary]
> - Définissez `AllowedOrigins` avec l'origine exacte de votre application web. L'utilisation de `*` est acceptée mais n'est pas recommandée en production.
> - Supprimez `"x-amz-version-id"` de `ExposeHeaders` si le versioning n'est pas activé sur le bucket.

### Générer la POST Policy

La POST Policy est un document JSON UTF-8 généré côté serveur. Elle définit les contraintes qu'OVHcloud valide avant d'accepter le chargement. Le document doit être encodé en base64 avant d'être placé dans le formulaire.

#### Structure de la politique

```json
{
  "expiration": "2026-07-07T12:00:00.000Z",
  "conditions": [
    {"bucket": "<nom_bucket>"},
    ["starts-with", "$key", "uploads/"],
    {"x-amz-algorithm": "AWS4-HMAC-SHA256"},
    {"x-amz-credential": "<cle_acces>/20260706/<region>/s3/aws4_request"},
    {"x-amz-date": "20260706T000000Z"},
    ["content-length-range", 1, 10485760]
  ]
}
```

**Explications :**

- `expiration` : horodatage ISO 8601 obligatoire en GMT. La politique est rejetée avec un HTTP 403 une fois ce délai dépassé. Évaluée par rapport à l'heure du serveur OVHcloud.
- `conditions` : chaque champ de formulaire inclus dans la requête (sauf `x-amz-signature`, `file` et `policy` lui-même) doit avoir une condition correspondante dans ce tableau.
- `content-length-range` : restreint la taille de fichier acceptée en octets (ici, 1 octet à 10 Mo).

#### Types de conditions

| Type | Syntaxe | Description |
|---|---|---|
| Correspondance exacte | `{"field": "value"}` | La valeur du champ doit exactement correspondre à la valeur donnée |
| Correspondance exacte (tableau) | `["eq", "$field", "value"]` | Équivalent à la forme objet ci-dessus |
| Commence par | `["starts-with", "$field", "prefix"]` | La valeur du champ doit commencer par le préfixe donné |
| Commence par (valeur quelconque) | `["starts-with", "$field", ""]` | Toute valeur est acceptée pour ce champ |
| Plage de taille de contenu | `["content-length-range", min, max]` | La taille du fichier doit être dans la plage en octets donnée |

#### Conditions

| Condition | Description | Types de correspondance supportés |
|---|---|---|
| `acl` | ACL S3 à appliquer à l'objet. Valeurs : `private`, `public-read`, `public-read-write`, `authenticated-read`, `bucket-owner-read`, `bucket-owner-full-control` | Correspondance exacte, commence par |
| `bucket` | Nom du bucket cible. La requête est rejetée si le bucket ne correspond pas. | Correspondance exacte |
| `content-length-range` | Taille de fichier autorisée en octets, définie par une valeur minimale et une valeur maximale. | Plage de taille de contenu |
| `key` | Clé de l'objet ou préfixe de clé autorisé. Accepte la variable `${filename}`, substituée par le nom de fichier fourni par le navigateur avant validation. | Correspondance exacte, commence par |
| `success_action_redirect` | URL vers laquelle le navigateur est redirigé après un chargement réussi. | Correspondance exacte, commence par |
| `success_action_status` | Code de statut HTTP retourné en cas de succès sans redirection. Valeurs : `200`, `201`, `204`. | Correspondance exacte |
| `x-amz-algorithm` | Algorithme de signature. Toujours `AWS4-HMAC-SHA256`. | Correspondance exacte |
| `x-amz-credential` | Portée des informations d'identification : `<cle_acces>/<date>/<region>/s3/aws4_request`. | Correspondance exacte |
| `x-amz-date` | Date de signature au format ISO 8601 (`YYYYMMDDTHHMMSSZ`). Doit correspondre à la date contenue dans `x-amz-credential`. | Correspondance exacte |

> [!primary]
> - La variable `${filename}` dans le champ `key` est substituée par le nom de fichier fourni par le navigateur avant la validation de la politique. Utilisez une condition `starts-with` sur `$key` pour restreindre les noms de fichiers acceptés.
> - Les champs préfixés par `x-ignore-` sont exclus de la validation de la politique et ne sont pas stockés sur l'objet.
> - Les valeurs Unicode doivent être échappées sous la forme `\uXXXX`. Les caractères barre oblique inverse `\` et signe dollar `$` doivent également être échappés.
> - OVHcloud normalise tous les noms de champs de formulaire en minuscules avant la validation.

### Calculer la signature SigV4

La signature est calculée côté serveur en utilisant HMAC-SHA256. L'entrée de la signature est le document de politique encodé en base64.

**Étape 1 - Encoder la politique**

Encodez le JSON de la politique en tant que chaîne d'octets UTF-8, puis encodez ces octets en base64. La chaîne résultante est à la fois la valeur du champ de formulaire `policy` et l'entrée de la signature (StringToSign).

**Étape 2 - Dériver la clé de signature**

```
dateKey              = HMAC-SHA256("AWS4" + <cle_secrete>, <date>)
dateRegionKey        = HMAC-SHA256(dateKey, <region>)
dateRegionServiceKey = HMAC-SHA256(dateRegionKey, "s3")
signingKey           = HMAC-SHA256(dateRegionServiceKey, "aws4_request")
```

**Explications :**

- `<cle_secrete>` : la clé d'accès secrète de votre utilisateur Object Storage.
- `<date>` : date de signature au format `YYYYMMDD` (par exemple : `20260706`). Doit être dans les 7 jours de la date actuelle du serveur OVHcloud.
- `<region>` : identifiant de région OVHcloud (par exemple : `gra`, `rbx`, `bhs`). Doit correspondre à la région utilisée dans `x-amz-credential`.
- Les entrées et sorties de HMAC-SHA256 sont des octets bruts, pas des chaînes hexadécimales, à chaque étape intermédiaire.

**Étape 3 - Calculer la signature**

```
signature = hex( HMAC-SHA256(signingKey, StringToSign) )
```

Le résultat est une chaîne hexadécimale en minuscules. Utilisez cette valeur comme champ de formulaire `x-amz-signature`.

### Construire le formulaire HTML d'envoi

Le formulaire d'envoi doit utiliser `method="POST"` et `enctype="multipart/form-data"`. L'attribut `action` doit être l'URL du bucket en format virtual-hosted.

> [!warning]
> Le champ de saisie `file` doit être le **dernier champ** du formulaire. Tout champ placé après `file` est ignoré par OVHcloud Object Storage.

#### Exemple de formulaire

```html
<form action="https://<nom_bucket>.s3.<region>.io.cloud.ovh.net/"
      method="POST"
      enctype="multipart/form-data">

  <!-- Champs d'authentification requis -->
  <input type="hidden" name="key"               value="uploads/${filename}">
  <input type="hidden" name="policy"            value="<politique_encodee_base64>">
  <input type="hidden" name="x-amz-algorithm"  value="AWS4-HMAC-SHA256">
  <input type="hidden" name="x-amz-credential" value="<cle_acces>/20260706/<region>/s3/aws4_request">
  <input type="hidden" name="x-amz-date"       value="20260706T000000Z">
  <input type="hidden" name="x-amz-signature"  value="<signature_hex>">

  <!-- Champs optionnels (exemples) -->
  <input type="hidden" name="Content-Type"              value="image/jpeg">
  <input type="hidden" name="success_action_status"     value="201">
  <input type="hidden" name="x-amz-meta-uploaded-by"   value="utilisateur-123">

  <!-- Le champ file doit toujours être en dernier -->
  <input type="file" name="file">
  <button type="submit">Envoyer</button>
</form>
```

#### Champs de formulaire requis

| Champ | Description |
|---|---|
| `key` | Clé de l'objet. Accepte la variable `${filename}`, substituée par le nom de fichier fourni par le navigateur |
| `policy` | Document JSON de la POST Policy encodé en base64 |
| `x-amz-algorithm` | Toujours `AWS4-HMAC-SHA256` |
| `x-amz-credential` | `<cle_acces>/<date>/<region>/s3/aws4_request` |
| `x-amz-date` | Date de signature au format `YYYYMMDDTHHMMSSZ` |
| `x-amz-signature` | Signature HMAC-SHA256 de la politique, encodée en hexadécimal minuscule |
| `file` | Contenu du fichier - doit être le dernier champ du formulaire |

#### Champs de formulaire optionnels

| Champ | Description |
|---|---|
| `acl` | ACL de l'objet : `private`, `public-read`, `public-read-write`, `authenticated-read`, `bucket-owner-read`, `bucket-owner-full-control` |
| `Content-Type` | Type MIME de l'objet |
| `Content-Disposition` | En-tête HTTP `Content-Disposition` de l'objet |
| `Cache-Control` | En-tête HTTP `Cache-Control` de l'objet |
| `Expires` | Date d'expiration HTTP de l'objet |
| `success_action_redirect` | URL HTTPS absolue vers laquelle rediriger le navigateur après un chargement réussi |
| `success_action_status` | Code de statut HTTP retourné en cas de succès sans redirection : `200`, `201`, ou `204` (défaut) |
| `x-amz-meta-*` | Champs de métadonnées utilisateur personnalisées (par exemple : `x-amz-meta-auteur`) |
| `tagging` | Balises d'objet au format XML |
| `x-amz-storage-class` | Classe de stockage de l'objet |

> [!primary]
> Les données totales du formulaire, **en excluant le contenu du fichier**, ne doivent pas dépasser 20 480 octets (20 Ko). Un seul fichier peut être envoyé par requête POST.

### Gérer les réponses

#### Réponses de succès

| Valeur de `success_action_status` | Statut HTTP | Corps de réponse |
|---|---|---|
| `204` (défaut) | 204 | Vide |
| `200` | 200 | Vide |
| `201` | 201 | XML avec `Location`, `Bucket`, `Key`, `ETag` |

Si `success_action_redirect` est défini et que le chargement réussit, le navigateur est redirigé vers cette URL. Les paramètres de requête `bucket`, `key` et `etag` sont ajoutés automatiquement. `success_action_redirect` a la priorité sur `success_action_status` lorsque les deux champs sont présents.

> [!warning]
> OVHcloud n'applique aucune restriction de domaine sur la cible de `success_action_redirect`. Restreignez toujours ce champ côté serveur lors de la génération du formulaire pour éviter les vulnérabilités de redirection ouverte.

#### Réponses d'erreur

En cas d'échec, OVHcloud retourne un corps d'erreur XML compatible S3 :

```xml
<Error>
  <Code>AccessDenied</Code>
  <Message>...</Message>
  <RequestId>...</RequestId>
</Error>
```

Conditions d'erreur courantes :

| Condition | Statut HTTP | Code d'erreur XML |
|---|---|---|
| Politique expirée | 403 | `AccessDenied` |
| Signature invalide | 403 | `SignatureDoesNotMatch` |
| Champ de formulaire absent des conditions de la politique | 403 | `AccessDenied` |
| Discordance du MD5 de la clé SSE-C | 400 | `InvalidDigest` |
| Champ `file` absent ou non en dernier | 400 | `InvalidArgument` |
| Fichier plus petit que le minimum de `content-length-range` | 400 | `EntityTooSmall` |
| Fichier plus grand que le maximum de `content-length-range` | 400 | `EntityTooLarge` |

### Chiffrement côté serveur

#### SSE-S3 - Clé gérée par OVHcloud

Pour demander un chiffrement côté serveur avec une clé AES-256 gérée par OVHcloud, ajoutez le champ caché suivant au formulaire :

| Champ de formulaire | Valeur |
|---|---|
| `x-amz-server-side-encryption` | `AES256` |

Ajoutez la condition correspondante à la POST Policy :

```json
{"x-amz-server-side-encryption": "AES256"}
```

> [!primary]
> Si le bucket possède une configuration SSE-S3 par défaut, le chiffrement est appliqué automatiquement sans ajouter ce champ au formulaire.

#### SSE-C - Clé fournie par le client

Pour chiffrer l'objet avec une clé que vous fournissez, ajoutez les trois champs suivants au formulaire. Tous les trois doivent avoir des conditions correspondantes dans la POST Policy.

| Champ de formulaire | Description |
|---|---|
| `x-amz-server-side-encryption-customer-algorithm` | Toujours `AES256` |
| `x-amz-server-side-encryption-customer-key` | Votre clé AES 256 bits (32 octets), encodée en base64 (44 caractères avec rembourrage) |
| `x-amz-server-side-encryption-customer-key-MD5` | MD5 encodé en base64 des 32 octets bruts de la clé (RFC 1321) |

> [!warning]
> - Les champs SSE-C dans la requête ont la priorité sur toute configuration SSE-S3 par défaut du bucket.
> - Avec SSE-C, l'`ETag` retourné est une valeur opaque générée par le serveur et ne peut pas être utilisée pour la vérification de l'intégrité du contenu.

### Comportement avec le versioning

L'état du versioning du bucket cible affecte la réponse au chargement :

| État du bucket | Comportement |
|---|---|
| Versioning désactivé (défaut) | Les écritures simultanées sur la même clé résultent en dernier-écrit-gagne sans garantie d'ordre |
| Versioning activé | OVHcloud génère un identifiant de version unique par chargement. La réponse inclut l'en-tête `x-amz-version-id` avec une valeur non nulle |
| Versioning suspendu | L'en-tête de réponse `x-amz-version-id` est présent avec la valeur littérale `null` |

Pour plus d'informations, consultez le [guide Object Storage Versioning](/pages/storage_and_backup/object_storage/s3_versioning).

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
