---
title: Gestion des identités et des accès
slug: s3/identity-and-access-management
excerpt:
section: Object Storage S3 High Performance
order: 030
---

**Dernière mise à jour le 27/09/2022**

## Objectif

Ce guide a pour objectif de vous montrer la gestion de vos identités et accès à vos ressources S3 Object Storage.

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

Connectez-vous à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Cliquez ensuite sur `Object Storage`{.action} dans le menu de gauche.

### Création d'un utilsateur

Cliquez sur `Créer un utilisateur`{.action}.

Si vous avez déjà des utilisateurs OpenStack, vous pouvez selectionner l'un d'entre eux :

![Add S3 user](images/highperf-identity-and-access-management-20220928085304931.png)

Puis :

![Add S3 user](images/highperf-identity-and-access-management-2022092808554688.png)

> [!primary]
>
> Si vous faites le choix de sélectionner un utilisateur existant, assurez-vous que celui-ci dispose du rôle `ObjectStore operator` ou `Administrator`.
>

Sinon, créez un nouvel utilisateur :

![Add S3 user](images/highperf-identity-and-access-management-20220928085501719.png)

Une fois votre utilisateur créé, vous verrez les informations d'identification :

![Credentials](images/highperf-identity-and-access-management-20220928085714656.png)

> [!primary]
>
> En cliquant sur le bouton `...`{.action} à droite d'un utilisateur, vous pouvez notamment télécharger le fichier de configuration rClone, voir la clé secrète de l'utilisateur, ou supprimer l'utilisateur.
>


### Gestion des accès à un bucket via un profil

Vous avez la possibilité de définir l'accès à vos buckets via des profils prédéfinis.

Cliquez sur le bouton `...`{.action} à droite de votre bucket puis sur `Ajouter un utilisateur à un conteneur`{.action}

![Add a user to a container](images/highperf-identity-and-access-management-20220928090844174.png)

Sélectionnez l'utilisateur à ajouter à votre bucket et cliquez sur `Suivant`{.action}.

![Add a user to my container](images/highperf-identity-and-access-management-20220928083641625.png)

Définissez les accès à votre bucket pour cet utilisateur et cliquez sur `Confirmer`{.action}.

![Add a user to my container - Role](images/highperf-identity-and-access-management-20220928083800300.png)

### Gestion des accès à un objet via un profil

Vous pouvez également définir l'accès à vos objets via des profils prédéfinis.

Cliquez sur le bouton `...`{.action} à droite de votre objet puis sur `Ajouter un utilisateur à mon objet`{.action}.

![object menu](images/highperf-identity-and-access-management-20220928084137918.png)

Sélectionnez l'utilisateur et cliquez sur `Suivant`{.action}.

![add user to my object](images/highperf-identity-and-access-management-20220928084222940.png)

Sélectionnez le profil d'accès pour cet utilisateur et cliquez sur `Confirmer`{.action}.

![add role to my object](images/highperf-identity-and-access-management-20220928084308265.png)

### Gestion avancée des accès aux ressources

Vous pouvez cependant affiner les droits via l'import d'un fichier de configuration JSON. Pour cela, rendez-vous dans l'onglet `Utilisateurs de stratégies S3`{.action}.

![S3 users](images/highperf-identity-and-access-management-20220928084435242.png)

Cliquez sur le bouton  `...`{.action} à droite de votre utilisateur puis sur `Importer un fichier JSON`{.action}.

> [!primary]
>
> Si vous souhaitez modifier les droits d'un utilisateur, téléchargez éventuellement le fichier de configuration JSON au préalable en sélectionnant `Télécharger le fichier JSON`{.action}.
>

Quelques exemples de fichiers de configuration JSON :

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


### Liste des actions supportées

| Action  | Scope  |
|:--|:--|
| s3:AbortMultipartUpload | Object |
| s3:CreateBucket | Bucket |
| s3:DeleteBucket | Bucket |
| s3:DeleteObject | Object |
| s3:GetBucketLocation | Bucket |
| s3:GetObject | Object |
| s3:ListBucket | Bucket |
| s3:ListBucketMultipartUploads | Bucket |
| s3:ListMultipartUploadParts | Object |
| s3:PutObject | Object |

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
