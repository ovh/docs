---
title: Utiliser S3 Object Storage avec Rubrik
slug: s3/rubrik
excerpt: Découvrez comment configurer le stockage dans Rubrik pour utiliser un bucket S3 Object Storage
section: Object Storage S3 High Performance
order: 171
---

**Dernière mise à jour le 21/07/2022**

## Objectif

Rubrik est une solution de sauvegarde robuste et sécurisé qui autorise l'archivage sur un stockage High Performance Object Storage OVHcloud.

**Ce guide explique comment configurer High Performance Object Storage OVHcloud en tant qu'archive du logiciel Rubrik.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du logiciel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Avoir créé un projet public au travers de l'espace client OVHcloud.

Consultez notre guide « [Débuter avec S3 Object Storage](https://docs.ovh.com/fr/storage/s3/debuter-avec-s3/) » pour plus de détails.

## En pratique

Pour pouvoir utiliser **High Performance Storage** en tant qu'archive du logiciel Rubrik il est nécessaire d'avoir au préalable :

- Un utilisateur dans un compte public OVHcloud avec la possibilité de gérer de créer des Bucket ;
- Une clé RSA 2048 bits.

### Création d'un utilisateur sur un projet public OVHcloud

Nous allons créer un compte dans un projet public qui sera capable de créer des buckets sur un stockage **High Performance Object Storage**

Connectez-vous à l'espace client OVHcloud au travers de l'url [OVHcloud](https://www.ovhcloud.com)

Cliquez en haut à gauche sur le `menu principal`{.action}.

![01 Create User 01](images/01-createuser01.png)

Choisissez `Public Cloud`{.action}.

![01 Create User 01](images/01-createuser02.png)

Cliquez en haut à droite sur la `flêche vers la droite`{.action}.

![01 Create User 03](images/01-createuser03.png)

Cliquez sur votre `projet`{.action}.

![01 Create User 03](images/01-createuser03.png)

Cliquez en haut à gauche sur le `menu principal`{.action}.

![01 Create User 04](images/01-createuser04.png)

Cliquez en haut à gauche sur le `menu principal`{.action}.

![01 Create User 05](images/01-createuser06.png)

Sélectionnez `Public Cloud`{.action}.

![01 Create User 06](images/01-createuser06.png)

Utilisez la `barre de défilement`{.action} et cliquez sur `Users & Roles`{.action}.

![01 Create User 07](images/01-createuser07.png)

cliquez sur `Create user`{.action}.

![01 Create User 08](images/01-createuser08.png)

Saisissez un `nom d'utilisateur` dans **User description** et cliquez sur `Next`{.action}.

![01 Create User 09](images/01-createuser09.png)

Cochez la case `ObjectStore operator`{.action} et cliquez sur `Confirm`{.action}.

![01 Create User 10](images/01-createuser10.png)

Un compte est crée avec son mot de passe mais il ne servira pas pour la sauvegarde, il faut créer un accés S3 , pour cela cliquez sur `l'icône rond avec 3 petits points`{.action} à droite.

![01 Create User 11](images/01-createuser11.png)

Choisissez sur `Generate S3 credentials`{.action} à droite.

![01 Create User 12](images/01-createuser12.png)

L'accès S3 a été créé ils est composé de ces éléments :

- **access key** ;
- **secret key** .

### Création d'une clé privé RSA

Nous allons utilser l'outils openssl disponible sous Linux ou Windows 

Lancer cette commande dans un terminal

```bash
openssl genrsa -out rubrik_encryption_key.pem 2048
```

Le contenu du fichier est de cette forme :

```console
-----BEGIN RSA PRIVATE KEY-----
tbEH9hP4TVC6ZRdxqL59hEuKMLQru93sW1b4uZ/S8W7y5Ip1WwnqJPNqUbwOto/f
LhsVAoGBAOnHOBJeUabERcur4It6NJdwQ/TPSrOkLnW5WMjEOcbwZr0Pq7GaW6l/
tbEH9hP4TVC6ZRdxqL59hEuKMLQru93sW1b4uZ/S8W7y5Ip1WwnqJPNqUbwOto/f
LhsVAoGBAOnHOBJeUabERcur4It6NJdwQ/TPSrOkLnW5WMjEOcbwZr0Pq7GaW6l/
oic8XYh0OdAA5aY1kIy33Gg8NVarnGMe+ezc9NhF6AHIhAgwXZ+NBLdcUujPBaqx
7p3lZs1vEEBX4ouHX93qz7ymNJ+MTeQtCNX4tQfE4kcLT0pY+DtW
-----END RSA PRIVATE KEY-----
```


### Configuration du stockage dans le logiciel Rubrik

Lors de la configuration du dépot d'archive veuillez saisir ces informations :

** Acces Key** : `Acces key généré au travers de l'espace client OVHcloud` ;
** Secret Key** : `Secret key généré au travers de l'espace client OVHcloud` ;
** hostname** : `s3.gra.perf.cloud.ovh.net` pour le Datacenter de Graveline ou `s3.sbg.perf.cloud.ovh.net` pour celui de Strasbourg ;
** bucket Prefix** : `prefixe du bucket` en minuscule ;
** Number of Buckets** : prenez `1` ;
** Archival Location Name** : `S3Compatible`
** RSA Key** : `copiez la clé RSA -----BEGIN RSA PRIVATE KEY----- ... -----END RSA PRIVATE KEY-----`

Ensuite cliquez sur `Add`{.action}

Un bucket sera créé dans le projet public OVHcloud avec comme préfixe le nom dans **bucket Prefix**

## Aller plus loin

Site Officiel [Rubrik](https://www.rubrik.com/)

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.

