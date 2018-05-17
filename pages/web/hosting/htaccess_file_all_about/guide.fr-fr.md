---
title: Tout sur le fichier .htaccess
slug: mutualise-tout-sur-le-fichier-htaccess
legacy_guide_number: 1967
excerpt: Ce guide va vous permettre de vous familiariser avec le fichier .htaccess
section: Réécriture et authentification
---

> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

Les fichiers .htaccess sont des fichiers de configuration (Apache) permettant de définir des règles bien spécifiques dans un répertoire. Ce type de fichier peut être utilisé pour réaliser des redirections ou protéger un répertoire par un mot de passe.

Avant de procéder, il est nécessaire de préciser quelques petites choses par rapport aux fichiers .htaccess. Tout d'abord, il faut savoir qu'il s'agit de fichiers particuliers pour le serveur web, et que ces fichiers n'apparaissent pas dans l'arborescence du répertoire concerné si un internaute fait un accès à un répertoire listable (qui ne contient pas de page index, et dont le listage n'est pas interdit). Ensuite, il faut bien prendre en compte que les paramétrages indiqués par un fichier .htaccess s'appliquent au répertoire où le fichier est installé, ainsi qu'à tout ses sous-répertoires.


## Les cas d'utilisations

### Comment protéger l'acces à un répertoire par une authentification ?
- Retrouvez notre guide vous expliquant comment protéger un répertoire par une authentification par mot de passe : [https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification/](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification/){.external}


### Comment bloquer certaines IP au niveau de mon site ?
- Retrouvez notre guide vous expliquant comment bloquer certaines IP : [https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site/](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site/){.external}


### Réecriture d'URL grâce au mod_rewrite
- Retrouvez notre guide vous expliquant comment faire de la réécriture d'URL : [https://docs.ovh.com/fr/hosting/htaccess-reecriture-url-mod-rewrite/](https://docs.ovh.com/fr/hosting/htaccess-reecriture-url-mod-rewrite/){.external}


### Les autres opérations réalisables avec des fichiers .htaccess
- Ce guide détaille d'autres opérations qui peuvent être mises en place grâce au fichier .htaccess : [https://docs.ovh.com/fr/hosting/mutualise-htaccess-les-autres-operations-realisables-avec-des-fichiers-htaccess/](https://docs.ovh.com/fr/hosting/mutualise-htaccess-les-autres-operations-realisables-avec-des-fichiers-htaccess/){.external}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.