---
title: Utilisez High Performance avec Owncloud
slug: s3/owncloud
excerpt:
section: Object Storage S3 High Performance
order: 170
---

**Dernière mise à jour le 3/01/2022**

## Objectif

Owncloud est une suite de logiciels client-serveur pour créer et utiliser des services d'hébergement de fichiers.

Ce guide explique comment configurer le stockage dans Owncloud pour utiliser un bucket High Performance.

## Prérequis

- Avoir créé un bucket
- Avoir créé un utilisateur et avoir défini les droits d'accès requis sur le bucket
- Connaître vos informations d'identification S3 (access_key et secret_access_key).

cf : [Débuter avec S3 High Performance](https://docs.ovh.com/fr/storage/s3/debuter-avec-s3-high-performance)

## En pratique

Si besoin, installez le plugin `External Storage: S3` depuis le `Market`{.action}

![Owncloud open Market](images/HighPerf-Owncloud-20211209131331778.png)

Rechercher le plugin `External Storage: S3`

![Owncloud plugin External Storage S3](images/HighPerf-Owncloud-20211209131556714.png)

Et `installez le`{.action}

![Owncloud install plugin](images/HighPerf-Owncloud-20211209131648711.png)

Allez dans les `Paramètres`{.action}

![Owncloud open Settings](images/HighPerf-Owncloud-20211209131942821.png)

Puis :
1. dans `Storage`{.action}
2. activez `Enable external storage `{.action}
3. nommez votre dossier
4. ajoutez un stockage de type `Amazon S3 compatible (SDK v3)`{.action}

![Owncloud create AWS S3 storage](images/HighPerf-Owncloud-20211209143008822.png)

Renseignez les informations suivantes:

1. Indiquez le nom de votre bucket
2. Définissez l'hôte comme tel : `s3.<region>.perf.cloud.ovh.net`
3. Définissez le port : 443
4. Indiquez la région
5. Activez SSL
6. Renseigner votre clé d'accès
7. Renseigner votre clé secrète

![Owncloud complete AWS S3 storage](images/HighPerf-Owncloud-20211209133630272.png)

Allez dans `Files`{.action}

![Ownclopud open Files](images/HighPerf-Owncloud-20211209133730832.png)

Puis dans `External storage`{.action}

![Ownclopud Files External Storage](images/HighPerf-Owncloud-2021120913382299.png)

Résultat

![Ownclopud Bucket listing](images/HighPerf-Owncloud-20211209140757288.png)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
