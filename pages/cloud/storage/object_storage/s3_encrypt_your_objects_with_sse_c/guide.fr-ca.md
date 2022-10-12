---
title: Object Storage - Chiffrez vos objets côté serveur avec SSE-C
slug: s3/encrypt-your-objects-with-sse-c
excerpt:
section: Tutoriels
order: 005
---

<style>
td:nth-of-type(1) {
  vertical-align: top;
  white-space: nowrap;
}
.optional {
  font-style:italic;
  margin-top:10px;
  text-align:center;
}
</style>

**Dernière mise à jour le 15 Avril 2022**

## Objectif

L'utilisation du chiffrement côté serveur avec des clés de chiffrement fournies par le client (SSE-C) vous permet de définir vos propres clés de chiffrement.  

Lorsque vous téléchargez un objet, S3 Object Storage utilise la clé de chiffrement que vous fournissez pour appliquer le chiffrement AES-256 à vos données. Lorsque vous récupérez un objet, vous devez fournir la même clé de cryptage dans le cadre de votre demande. S3 Object Storage vérifie d'abord que la clé de chiffrement que vous avez fournie correspond, puis déchiffre l'objet avant de vous renvoyer les données de l'objet.

**Ce guide explique comment chiffrer vos objets côté serveur avec SSE-C.**

> [!warning]
>
> S3 Object Storage ne stocke pas la clé de chiffrement que vous fournissez. Cela signifie que si vous perdez la clé de chiffrement, vous perdez l'objet. La seule chose qui reste à faire est de le supprimer.
>

## Prérequis

- Avoir créé un bucket
- Avoir créé un utilisateur et avoir défini les droits d'accès requis sur le bucket
- Avoir installé et configuré aws-cli

Consultez notre guide « [Débuter avec S3 Object Storage](https://docs.ovh.com/ca/fr/storage/s3/debuter-avec-s3/) » pour plus de détails.

## En pratique

Lorsque vous utilisez SSE-C, vous devez fournir des informations sur la clé de chiffrement à l'aide des en-têtes de requête suivants.

| Name | Description |
|:-----|:------------|
| --sse​-customer-algorithm | Utilisez cet en-tête pour spécifier l'algorithme du chiffrement. La valeur de l'en-tête doit être *AES256*.  |
| --sse-customer-key | Utilisez cet en-tête pour fournir la clé de chiffrement de 256 bits encodée en Base64 pour chiffrer ou déchiffrer les données. |
| --sse​-customer-key-md5<p class="optional">Optional</p>| Utilisez cet en-tête pour fournir la valeur de hachage MD5 128 bits encodée en Base64 de la clé de chiffrement conformément à la norme RFC 1321. Cet en-tête est utilisé pour vérifier l'intégrité du message et veiller à ce que la clé de chiffrement ait été transmise sans erreur. |

### Création d'une clé de chiffrement

Exemple de création d'une clé de chiffrement ( *--sse-customer-key* ) :

```bash
$ encKey=$(openssl rand -base64 32)
```

et de la clé MD5 ( *--sse-customer-key-md5* ):

```bash
$ md5Key=$(echo $encKey | md5sum | awk '{print $1}' | base64 -w0)
```

### Envoi d'un objet avec SSE-C

Pour envoyer un objet avec SSE-C et aws-cli, procédez comme suit:

```bash
$ aws s3api put-object \
  --body /etc/magic \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key
```

### Réception d'un objet avec SSE-C

Pour recevoir un objet avec SSE-C et aws-cli, procédez comme suit:

```bash
$ aws s3api get-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key \
  decrypt_magic
```

Sans les en-têtes de chiffrement, vous obtiendrez une erreur `Bad Request`:

```bash
$ aws s3api get-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  decrypt_magic

$ An error occurred (400) when calling the HeadObject operation: Bad Request
```

### Obtenir les métadonnées d'un objet avec SSE-C

Pour obtenir les métadonnées d'un objet avec SSE-C et aws-cli, procédez comme suit:

```bash
$ aws s3api head-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key
```

La sortie devrait ressembler à ça:

```json
{
    "LastModified": "Tue, 19 Apr 2022 09:38:47 GMT",
    "ContentLength": 111,
    "ETag": "\"272913026300e7ae9b5e2d51f138e674\"",
    "VersionId": "1650376416551536",
    "ContentType": "binary/octet-stream",
    "Metadata": {},
    "StorageClass": "STANDARD"
}
```

Sans les en-têtes de chiffrement, vous obtiendrez une erreur `Bad Request`.

### Suppression d'un objet chiffré avec SSE-C

Pour supprimer un objet chiffré avec SSE-C et aws-cli, procédez comme suit:

```bash
$ aws s3 rm s3://<bucket_name>/encrypt_magic
```

### URLs présignées et SSE-C

Les URL pré-signées, qui peuvent être utilisées pour des opérations telles que l'envoi d'un nouvel objet, la récupération d'un objet existant ou des métadonnées d'un objet, prennent en charge le SSE-C comme suit:

- Lorsque vous créez une URL pré-signée, vous devez spécifier l'algorithme en utilisant l'en-tête `x-amz-server-side-encryption-customer-algorithm` dans le calcul de la signature.

- Lorsque vous utilisez l'URL pré-signée pour envoyer un nouvel objet, récupérer un objet existant ou récupérer uniquement les métadonnées d'un objet, vous devez fournir tous les en-têtes de chiffrement dans votre application client.

> [!primary]
>
> Vous pouvez donc utiliser l'URL pré-signée pour les objets SSE-C uniquement par programmation, car en plus de l'URL pré-signée, vous devez également inclure des en-têtes HTTP spécifiques aux objets SSE-C.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
