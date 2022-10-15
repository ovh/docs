---
title: Object Storage - Utiliser S3 Object Storage avec Rclone
slug: s3/rclone
excerpt: Découvrez comment configurer Rclone afin de synchroniser vos fichiers vers et depuis S3 Object Storage
section: Configurer Object Storage avec vos solutions
order: 005
---

**Dernière mise à jour le 03/01/2022**

## Objectif

Rclone est un outil de sauvegarde qui peut se synchroniser vers et depuis divers backends de stockage, et peut être utilisé sur Windows, macOS et Linux.

**Ce guide explique comment configurer Rclone afin de synchroniser vos fichiers vers et depuis S3 Object Storage.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du logiciel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Avoir créé un bucket
- Avoir créé un utilisateur et avoir défini les droits d'accès requis sur le bucket
- Connaître vos informations d'identification S3 (access_key et secret_access_key).

Consultez notre guide « [Débuter avec S3 Object Storage](https://docs.ovh.com/fr/storage/s3/debuter-avec-s3/) » pour plus de détails.

## En pratique

Pour configurer Rclone, éditez ou créez le fichier `~/.config/rclone/rclone.conf` et ajoutez-y ceci :

```bash
[<profile_name>]
type = s3
provider = Other
env_auth = false
access_key_id = <access_key>
secret_access_key = <secret_key>
endpoint = https://s3.<region_in_lowercase>.perf.cloud.ovh.net
acl = private
region = <region_in_lowercase>
location_constraint = <region_in_lowercase>
```

RClone est maintenant prêt à être utilisé.

**Exemples de commande**

Lister tous les buckets :

```bash
$ rclone lsd <profile_name>:
```

Créer un nouveau bucket :

```bash
$ rclone mkdir <profile_name>:mybucket
```

Lister le contenu d'un bucket :

```bash
$ rclone ls <profile_name>:mybucket
```

Synchroniser `/home/user/documents` vers un bucket :

```bash
$ rclone sync /home/user/documents <profile_name>:mybucket
```

Copier un fichier `/home/user/file.txt` dans un bucket :

```bash
$ rclone copy /home/user/file.txt <profile_name>:mybucket
```

Télécharger un fichier `file.txt` depuis un bucket :

```bash
$ rclone copy <profile_name>:mybucket/file.txt fichier.txt
```

Vous trouverez sur le site officiel de Rclone une documentation précise des actions possibles: [Documentation officielle rClone](https://rclone.org/docs/){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
