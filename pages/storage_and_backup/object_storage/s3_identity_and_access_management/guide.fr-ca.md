---
title: Object Storage - Gestion des identités et des accès
excerpt: Ce guide a pour objectif de vous montrer la gestion de vos identités et accès à vos ressources Object Storage
updated: 2025-09-25
---

## Objectif

Ce guide a pour objectif de vous montrer la gestion de vos identités et accès à vos ressources Object Storage.

## Prérequis

- Un [projet Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

Connectez-vous à [l'espace client OVHcloud](/links/manager), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Cliquez ensuite sur `Object Storage`{.action} dans le menu de gauche.

### Création d'un utilisateur

Cliquez sur `Créer un utilisateur`{.action}.

Si vous avez déjà des utilisateurs OpenStack, vous pouvez selectionner l'un d'entre eux :

![Add Object Storage user](images/highperf-identity-and-access-management-20220928085304931.png){.thumbnail}

Puis :

![Add Object Storage user](images/highperf-identity-and-access-management-2022092808554688.png){.thumbnail}

> [!primary]
>
> Si vous faites le choix de sélectionner un utilisateur existant, assurez-vous que celui-ci dispose du rôle `ObjectStore operator` ou `Administrator`.
>

Sinon, créez un nouvel utilisateur :

![Add Object Storage user](images/highperf-identity-and-access-management-20220928085501719.png){.thumbnail}

Une fois votre utilisateur créé, vous verrez les informations d'identification :

![Credentials](images/highperf-identity-and-access-management-20220928085714656.png){.thumbnail}

> [!primary]
>
> En cliquant sur le bouton `...`{.action} à droite d'un utilisateur, vous pouvez notamment télécharger le fichier de configuration rClone, voir la clé secrète de l'utilisateur, ou supprimer l'utilisateur.
>

### Gestion des accès à un bucket via un profil

Vous avez la possibilité de définir l'accès à vos buckets via des profils prédéfinis.

Cliquez sur le bouton `...`{.action} à droite de votre bucket puis sur `Ajouter un utilisateur à un conteneur`{.action}

![Add a user to a container](images/highperf-identity-and-access-management-20220928090844174.png){.thumbnail}

Sélectionnez l'utilisateur à ajouter à votre bucket et cliquez sur `Suivant`{.action}.

![Add a user to my container](images/highperf-identity-and-access-management-20220928083641625.png){.thumbnail}

Définissez les accès à votre bucket pour cet utilisateur et cliquez sur `Confirmer`{.action}.

![Add a user to my container - Role](images/highperf-identity-and-access-management-20220928083800300.png){.thumbnail}

### Gestion des accès à un objet via un profil

Vous pouvez également définir l'accès à vos objets via des profils prédéfinis.

Cliquez sur le bouton `...`{.action} à droite de votre objet puis sur `Ajouter un utilisateur à mon objet`{.action}.

![object menu](images/highperf-identity-and-access-management-20220928084137918.png){.thumbnail}

Sélectionnez l'utilisateur et cliquez sur `Suivant`{.action}.

![add user to my object](images/highperf-identity-and-access-management-20220928084222940.png){.thumbnail}

Sélectionnez le profil d'accès pour cet utilisateur et cliquez sur `Confirmer`{.action}.

![add role to my object](images/highperf-identity-and-access-management-20220928084308265.png){.thumbnail}

### Gestion avancée des accès aux ressources

#### Aperçu

Par défaut, toutes les ressources (buckets, objets) et sous-ressources (configuration de cycle de vie, configuration de site web, etc.) sont privées dans Object Storage. Seul le propriétaire de la ressource, c'est-à-dire le compte utilisateur qui l'a créée, dispose d'un contrôle total.

L'accès aux ressources privées peut être accordé via des politiques d'accès. Les politiques d'accès peuvent être classées en deux grandes catégories :

- basées sur l'utilisateur : les politiques d'accès associées à un utilisateur spécifique sont appelées politiques utilisateur. Une politique utilisateur est évaluée à l'aide des autorisations IAM d'Object Storage et s'applique uniquement à l'utilisateur spécifique auquel elle est associée.
- basées sur les ressources : les bucket policies et les ACLs sont des politiques directement associées à des ressources spécifiques.

> [!primary]
>
> Les bucket policies ne sont pas encore disponibles sur Object Storage. Cet article traite des politiques utilisateur.
>

Vous pouvez cependant affiner les droits via l'import d'un fichier de configuration JSON. Pour cela, rendez-vous dans l'onglet `Utilisateurs de stratégies Object Storage `{.action}.

![Object Storage users](images/highperf-identity-and-access-management-20220928084435242.png){.thumbnail}

Cliquez sur le bouton  `...`{.action} à droite de votre utilisateur puis sur `Importer un fichier JSON`{.action}.

> [!primary]
>
> Si vous souhaitez modifier les droits d'un utilisateur, téléchargez éventuellement le fichier de configuration JSON au préalable en sélectionnant `Télécharger le fichier JSON`{.action}.
>

#### Comprendre le processus d'évaluation des politiques utilisateur

Actuellement, les autorisations utilisateur sont évaluées comme suit :

1. si elle existe, évaluer la politique utilisateur sinon se référer aux ACLs
    1. vérifier s'il existe un refus explicite : s'il existe un refus explicite, refuser l'autorisation, sinon, vérifier s'il existe une autorisation explicite
    1. vérifier s'il existe une autorisation explicite : s'il existe une autorisation explicite, accorder l'autorisation
    1. s'il n'existe ni refus explicite ni autorisation explicite, se référer aux ACL
2. se référer aux ACLs

> [!primary]
>
> Ce processus d'évaluation sera susceptible d'être modifié avec la mise en œuvre prochaine des bucket policies.
>

#### Quelques exemples de fichiers de configuration JSON :

**Accès en lecture / écriture à un bucket et à ses objets**

```json
{
  "Statement":[{
    "Sid":"RWContainer",
    "Effect":"Allow",
    "Action":["s3:GetObject","s3:PutObject","s3:DeleteObject","s3:ListBucket","s3:ListMultipartUploadParts","s3:ListBucketMultipartUploads","s3:AbortMultipartUpload","s3:GetBucketLocation"],
    "Resource":["arn:aws:s3:::hp-bucket","arn:aws:s3:::hp-bucket/*"]
  }]
}
```

**Accès en lecture seule à un bucket et à ses objets**

```json
{
  "Statement":[{
    "Sid":"ROContainer",
    "Effect":"Allow",
    "Action":["s3:GetObject","s3:ListBucket","s3:ListMultipartUploadParts","s3:ListBucketMultipartUploads"],
    "Resource":["arn:aws:s3:::hp-bucket","arn:aws:s3:::hp-bucket/*"]
  }]
}
```

**Refuser l'affichage de tous les buckets appartenant au compte.**

> [!primary]
>
> L'action (`s3:ListAllMyBuckets`) est autorisée par défaut pour un utilisateur donné. Ajouter explicitement un `deny`{.action} si vous souhaitez refuser l'utilisation de l'opération d'API `ListBuckets`{.action}.
>  

```json
{
  "Statement":[{
    "Sid": "DenyListBucket",
    "Effect": "Deny",
    "Action":["s3:ListAllMyBuckets"],
    "Resource":["*"]
  }]
}
```

**Autoriser toutes les opérations sur toutes les ressources d'un projet**

```json
{
  "Statement":[{
    "Sid":"FullAccess",
    "Effect":"Allow",
    "Action":["s3:*"],
    "Resource":["*"]
  }]
}
```

**Accès en lecture / écriture à tous les objets d'un dossier spécifique ("/home/user2") d'un bucket spécifique ("companybucket")**

```json
{
  "Statement":[{
    "Sid":"RWContainer",
    "Effect":"Allow",
    "Action":["s3:GetObject","s3:PutObject","s3:DeleteObject","s3:ListBucket","s3:ListMultipartUploadParts","s3:ListBucketMultipartUploads","s3:AbortMultipartUpload","s3:GetBucketLocation"],
    "Resource":["arn:aws:s3:::companybucket","arn:aws:s3:::companybucket/home/user2/*"]
  }]
}
```

**Autoriser l’accès à toutes les opérations uniquement depuis certaines adresses IP en utilisant une liste blanche des adresses autorisées**

```json
{
  "Statement": [{
    "Sid": "ExampleStatement01",
    "Effect": "Allow",
    "Action": "s3:*",
    "Resource": [
      "arn:aws:s3:::companybucket",
      "arn:aws:s3:::companybucket/*"
    ],
    "Condition": {
      "IpAddress": {
        "aws:SourceIp": "10.0.0.5/16"
      }
    }
  }]
} 
```


> [!primary]
>
> En raison du processus d'autorisation actuel, le refus **implicite** n'est **pas** pris en charge par OVHcloud Object Storage si l'utilisateur est le propriétaire du bucket, c'est-à-dire que puisque les ACLs sont évaluées par défaut et que le propriétaire du bucket dispose d'une ACL FULL_CONTROL, si l'utilisateur est le propriétaire du bucket, il sera autorisé même s'il n'y a pas d'autorisation explicite dans le fichier policy.
> 

La politique suivante visant à autoriser l'accès en lecture aux objets uniquement à des adresses IP spécifiques ne fonctionnera **pas** dans les conditions actuelles si elle est associée au **propriétaire du bucket**, c'est-à-dire que même si le propriétaire du bucket effectue ses requêtes à partir d'adresses IP qui ne se trouvent **pas** dans la plage spécifiée, il sera **autorisé**.

```json
{
  "Statement": [{
    "Sid": "ExampleStatement01",
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:ListBucket",
      "s3:ListBucketVersions"
    ],
    "Resource": [
      "arn:aws:s3:::companybucket/*"
    ],
    "Condition": {
      "IpAddress": {
        "aws:SourceIp": "10.0.0.5/16"
      }
    }
  }]
}
```

La politique suivante visant à refuser l'accès en lecture à des objets à des adresses IP spécifiques en mettant sur liste noire les adresses IP non autorisées ne fonctionnera **pas** dans les conditions actuelles si elle est associée au **propriétaire du bucket**, car il n'y a pas de refus explicite et les requêtes provenant des adresses IP spécifiées ne correspondront pas à l'autorisation. Par conséquent, nous nous rabattons sur les ACLs.

```json
{
  "Statement": [{
    "Sid": "ExampleStatement01",
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:ListBucket",
      "s3:ListBucketVersions"
    ],
    "Resource": [
      "arn:aws:s3:::companybucket/*"
    ],
    "Condition": {
      "NotIpAddress": {
        "aws:SourceIp": "10.0.0.5/16"
      }
    }
  }]
}
```


### Liste des actions supportées

| Action | Scope |
|------|:------|
| s3:AbortMultipartUpload | Object |
| s3:BypassGovernanceRetention | Object |
| s3:CreateBucket | Bucket |
| s3:DeleteBucket | Bucket |
| s3:DeleteObject | Object |
| s3:DeleteBucketTagging | Bucket |
| s3:DeleteBucketWebsite | Bucket |
| s3:DeleteObject | Object |
| s3:DeleteObjectTagging | Object |
| s3:GetBucketAcl | Bucket |
| s3:GetBucketCORS | Bucket |
| s3:GetBucketLocation | Bucket |
| s3:GetBucketLogging" | Bucket |
| s3:GetBucketObjectLockConfiguration | Bucket |
| s3:GetBucketTagging | Bucket |
| s3:GetBucketVersioning | Bucket |
| s3:GetBucketWebsite | Bucket |
| s3:GetEncryptionConfiguration | Bucket |
| s3:GetIntelligentTieringConfiguration | Bucket |
| s3:GetLifecycleConfiguration | Bucket |
| s3:GetObject | Object |
| s3:GetObjectAcl | Object |
| s3:GetObjectLegalHold | Object |
| s3:GetObjectRetention | Object |
| s3:GetObjectTagging | Object |
| s3:GetReplicationConfiguration | Bucket |
| s3:ListAllMyBuckets | Bucket |
| s3:ListBucket | Bucket |
| s3:ListBucketMultipartUploads | Bucket |
| s3:ListMultipartUploadParts | Object |
| s3:ListBucketMultipartUploads | Bucket |
| s3:ListBucketVersions | Bucket |
| s3:ListMultipartUploadParts | Object |
| s3:PutBucketAcl | Bucket |
| s3:PutBucketCORS | Bucket |
| s3:PutBucketLogging | Bucket |
| s3:PutBucketObjectLockConfiguration | Bucket |
| s3:PutBucketTagging | Bucket |
| s3:PutBucketVersioning | Bucket |
| s3:PutBucketWebsite | Bucket |
| s3:PutEncryptionConfiguration | Bucket |
| s3:PutIntelligentTieringConfiguration | Bucket |
| s3:PutLifecycleConfiguration | Bucket |
| s3:PutObject | Object |
| s3:PutObjectAcl | Object |
| s3:PutObjectLegalHold | Object |
| s3:PutObjectRetention | Object |
| s3:PutObjectTagging | Object |
| s3:PutReplicationConfiguration | Object |

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
