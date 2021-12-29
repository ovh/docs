---
title: Utilisez High Pperformance avec rClone
slug: s3/rclone
excerpt:
section: Object Storage S3 High Performance
order: 110
---

**Dernière mise à jour le 9/12/2021**

## Objectif


Rclone est un outil de sauvegarde qui peut se synchroniser vers et depuis divers backends de stockage, et peut être utilisé sur Windows, macOS et Linux.

Ce guide explique comment configurer RClone afin de synchroniser vos fichier vers et depuis High Performance.

## Prérequis

- Avoir créé un bucket
- Avoir créé un utilisateur et avoir défini les droits d'accès requis sur le bucket
- Connaître vos informations d'identification S3 (access_key et secret_access_key).

cf : [Débuter avec S3 High Performance](https://docs.ovh.com/fr/storage/highperf/debuter-avec-s3-high-performance)

## En pratique

Pour configurer rclone, éditez ou créez le fichier `~/.config/rclone/rclone.conf` et ajoutez-y ceci :

```bash
[<remote_name>]
type = s3
provider = Other
env_auth = false
access_key_id = <access_key>
secret_access_key = <secret_key>
endpoint = https://s3.<region>.perf.cloud.ovh.net
acl = private
region = <region>
location_constraint = <region>
```

RClone est maintenant prêt à être utilisé.

**Exemples de commande**

Lister tous les buckets
```bash
$ rclone lsd <remote_name>:
```

Créer un nouveau bucket
```bash
$ rclone mkdir <remote_name>:mybucket
```

Lister le contenu d'un bucket
```bash
$ rclone ls <remote_name>:mybucket
```

Synchroniser /home/user/documents vers un bucket
```bash
$ rclone sync /home/user/documents <remote_name>:mybucket
```

Copier un fichier /home/user/file.txt dans un bucket
```bash
$ rclone copy /home/user/file.txt <remote_name>:mybucket
```

Télécharger un fichier file.txt depuis un bucket
```bash
$ rclone copy <remote_name>:mybucket/file.txt fichier.txt
```

Vous trouverez sur le site officiel de rClone une documentation précise des actions possibles: [Documentation officielle rClone](https://rclone.org/docs/){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
