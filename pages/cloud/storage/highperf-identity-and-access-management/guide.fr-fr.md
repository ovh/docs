---
title: Gestion des identités et des accès
slug: highperf/gestion-des-identites-et-des-acces
excerpt:
section: Object Storage S3 High Performance
---

**Dernière mise à jour le**

## Objectif

Ce guide a pour objectif de vous montrer la gestion de vos identité et accès à vos ressources High Performance.

## Prérequis

- Être connecté à votre [espace client](https://www.ovh.com/manager/#/){.external}
- Avoir créé un [utilisateur S3](https://docs.ovh.com/fr/storage/highperf/debuter-avec-s3-high-performance){.external}.

## En pratique

### Actions possibles via l'espace client'

#### Gestion des accès à un bucket via un profil

Vous avez la possibilité de définir l'accès à vos buckets via des profils prédéfinis.

Cliquez sur les `...`{.action} à la fin de la ligne de votre bucket puis sur `Add a user to a container`{.action}

![Add a user to a container](images/HighPerf-Identity-and-Access-Management-20211110113315479.png)

Sélectionnez l'utilisateur à ajouter à votre bucket et cliquez sur `Next`{.action} :

![Add a user to my container](images/HighPerf-Identity-and-Access-Management-20211110113404779.png)

Définissez les accès à votre bucket pour cet utilisateur et cliquez sur `Confirm`{.action} :

![Add a user to my container - Role](images/HighPerf-Identity-and-Access-Management-20211110113419531.png)

#### Gestion des accès à un objet via un profil

Vous pouvez également définir l'accès à vos objets via des profils prédéfinis.

Cliquez sur les `...`{.action} à la fin de la ligne de votre objet puis sur `Add a user to a container`{.action}

![object menu](images/HighPerf-Identity-and-Access-Management-20211110120219742.png)

Sélectionnez l'utilisateur et cliquez sur `Next`{.action} :

![add user to my object](images/HighPerf-Identity-and-Access-Management-20211110120309990.png)

Sélectionnez le profil d'accès pour cet utilisateur et cliquez sur `Confirm`{.action} :

![add role to my object](images/HighPerf-Identity-and-Access-Management-20211110120401943.png)

#### Gestion avancée des accès aux ressources

Vous pouvez cependant affiner les droits via l'import d'un fichier de configuration JSON. Pour cela, rendez-vous dans l'onglet `S3 Users`

![](images/HighPerf-Identity-and-Access-Management-20211110113756874.png)

puis sur `Import JSON file`

> [!primary]
>
> Si vous souhaitez modifier les droits d'un utilisateur, téléchargez éventuellement le fichier de configuration JSON au préalable en cliquant sur `Download JSON file`{.action}
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


### Liste de actions supportées

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
