---
title: Guide OVHcloud : Sécuriser vos données avec le chiffrement CSE ou SSE
excerpt: Découvrez comment sécuriser vos données stockées avec les options de chiffrement CSE, SSE-C, et SSE-S3 chez OVHcloud, et choisissez la meilleure solution pour vos besoins.
updated: 2024-03-06
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
# 1. Introduction

Chez OVHcloud, nous comprenons l'importance cruciale de la protection des données dans l'écosystème numérique actuel. Face à des menaces de sécurité en constante évolution et à des exigences réglementaires de plus en plus strictes, il est essentiel de mettre en place des mesures robustes pour sécuriser les données à tout moment. Cela inclut non seulement les données en transit mais également les données au repos.

La protection des données "at rest", c'est-à-dire des données stockées sur des dispositifs physiques ou dans le cloud, est un élément crucial de la stratégie de sécurité informatique de toute organisation. Dans ce contexte, deux approches principales se distinguent pour le chiffrement de ces données : le chiffrement côté client (Client-Side Encryption, CSE) et le chiffrement côté serveur (Server-Side Encryption, SSE).

## Le chiffrement côté client (Client-Side Encryption, CSE)

Le chiffrement côté client permet à nos clients de chiffrer leurs données sur leur propre dispositif avant de les envoyer vers nos serveurs pour stockage. Cette méthode assure que les données restent cryptées tout au long de leur cycle de vie, offrant un haut degré de sécurité, puisque les clés de chiffrement sont gérées par le client et jamais partagées avec OVHcloud ou tout autre tiers. Bien que cette approche exige une gestion rigoureuse des clés de la part du client, elle représente une solution idéale pour ceux qui requièrent un contrôle total sur la sécurité de leurs données.

## Le chiffrement côté serveur (Server-Side Encryption, SSE)

Le chiffrement côté serveur propose une alternative où les données sont chiffrées à leur arrivée sur nos serveurs. Cette responsabilité incombe à OVHcloud, ce qui allège considérablement la charge de gestion de la sécurité pour nos clients. Deux méthodes de chiffrement côté serveur sont disponibles :

- **SSE-C (Server-Side Encryption with Customer Keys):** Avec SSE-C, vous pouvez fournir et gérer vos propres clés de chiffrement, vous offrant ainsi une maîtrise complète sur la sécurité de vos données. Cette option est particulièrement adaptée aux organisations ayant des besoins spécifiques en matière de conformité et de sécurité des données, puisqu'elle permet une gestion exclusive des clés de chiffrement.
  
- **SSE-S3 (Server-Side Encryption with OVHcloud-Managed Keys):** D'autre part, SSE-S3 simplifie le processus de chiffrement en utilisant des clés gérées par OVHcloud. Cette méthode est idéale pour les clients qui souhaitent bénéficier d'une solution de chiffrement robuste sans les complexités liées à la gestion des clés.

L'objectif final, c'est de vous aider à choisir le meilleur type de chiffrement pour vous. On vous donne toutes les infos nécessaires pour faire un choix éclairé. Que vous préfériez gérer vous-même avec SSE-C ou opter pour la facilité de SSE-S3, on s'engage à offrir des solutions flexibles et sûres pour protéger vos données quand elles sont stockées.

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

Consultez notre guide « [Débuter avec S3 Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) » pour plus de détails.

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

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
