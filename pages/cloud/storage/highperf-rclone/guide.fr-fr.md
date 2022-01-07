---
<<<<<<< HEAD
title: Utilisez High Performance avec rClone
=======
title: Utilisez High Pperformance avec rClone
>>>>>>> abcbfbfc1371d5ed8fe6e1b5f01663200139053f
slug: s3/rclone
excerpt:
section: Object Storage S3 High Performance
order: 110
---

<<<<<<< HEAD
**Dernière mise à jour le 3/01/2022**
=======
**Dernière mise à jour le 9/12/2021**
>>>>>>> abcbfbfc1371d5ed8fe6e1b5f01663200139053f

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
<<<<<<< HEAD
[<remote_name>]
=======
[<profile_name>]
>>>>>>> abcbfbfc1371d5ed8fe6e1b5f01663200139053f
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
<<<<<<< HEAD
$ rclone lsd <remote_name>:
=======
$ rclone lsd <profile_name>:
>>>>>>> abcbfbfc1371d5ed8fe6e1b5f01663200139053f
```

Créer un nouveau bucket
```bash
<<<<<<< HEAD
$ rclone mkdir <remote_name>:mybucket
=======
$ rclone mkdir <profile_name>:mybucket
>>>>>>> abcbfbfc1371d5ed8fe6e1b5f01663200139053f
```

Lister le contenu d'un bucket
```bash
<<<<<<< HEAD
$ rclone ls <remote_name>:mybucket
=======
$ rclone ls <profile_name>:mybucket
>>>>>>> abcbfbfc1371d5ed8fe6e1b5f01663200139053f
```

Synchroniser /home/user/documents vers un bucket
```bash
<<<<<<< HEAD
$ rclone sync /home/user/documents <remote_name>:mybucket
=======
$ rclone sync /home/user/documents <profile_name>:mybucket
>>>>>>> abcbfbfc1371d5ed8fe6e1b5f01663200139053f
```

Copier un fichier /home/user/file.txt dans un bucket
```bash
<<<<<<< HEAD
$ rclone copy /home/user/file.txt <remote_name>:mybucket
=======
$ rclone copy /home/user/file.txt <profile_name>:mybucket
>>>>>>> abcbfbfc1371d5ed8fe6e1b5f01663200139053f
```

Télécharger un fichier file.txt depuis un bucket
```bash
<<<<<<< HEAD
$ rclone copy <remote_name>:mybucket/file.txt fichier.txt
=======
$ rclone copy <profile_name>:mybucket/file.txt fichier.txt
>>>>>>> abcbfbfc1371d5ed8fe6e1b5f01663200139053f
```

Vous trouverez sur le site officiel de rClone une documentation précise des actions possibles: [Documentation officielle rClone](https://rclone.org/docs/){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
