---
title: Object Storage Swift - Gestion de vos archives avec Rsync
slug: pca/rsync
excerpt: Découvrez comment accéder à vos archives Public Cloud avec Rsync
section: Spécificités de la classe de stockage d'archive OpenStack Swift
order: 090
---

**Dernière mise à jour le 8 décembre 2020**

## Objectif

OVHcloud Public Cloud Archive est une solution de stockage gérée principalement via l'API OpenStack. Nous avons cependant développé une passerelle qui permet de se connecter à votre conteneur PCA avec Rsync.

**Découvrez les informations nécessaires pour activer la connexion à vos données stockées à l'aide de Rsync.**

## Prérequis

### Rsync

[Rsync](https://rsync.samba.org/) est un utilitaire Open Source qui permet un transfert de fichiers incrémentiel rapide.<br>
Les fichiers binaires précompilés sont disponibles dans la plupart des distributions de systèmes d'exploitation récentes. Par conséquent, vous devez d'abord vérifier si vous pouvez installer un package Rsync à l'aide de vos outils d'installation de packages standard pour votre système d'exploitation.

### ID OpenStack

Vous pouvez générer votre identifiant et votre mot de passe OpenStack à l'aide de ce [guide](https://docs.ovh.com/fr/public-cloud/creer-un-acces-a-horizon/).

### TenantName

Le TenantName correspond au nom de votre projet Horizon. Pour obtenir le TenantName, vous devez vous connecter à l'interface web OpenStack : [https://horizon.cloud.ovh.net/](https://horizon.cloud.ovh.net/){.external}.

Une fois connecté, le TenantName est visible en haut de la page.

![horizon](images/image1.png){.thumbnail}

## En pratique

### Détails de la connexion

- Host Name: gateways.storage.{region}.cloud.ovh.net
- User Name: pca
- Password: {TenantName}.{Username_Openstack}.{Password_Openstack}
- Port: 22

### Téléversement de données

Exemple de ligne de commande si vous avez créé un conteneur PCA dans la région GRA :

```bash
user@host:~$ rsync -a /path/to/my/dir pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Téléchargement des données

OVHcloud Public Cloud Archive propose un stockage de données à faible coût, en échange d'une latence accrue dans le processus de récupération. Pour accéder à votre archive, une demande d'extraction doit être reçue avec les noms de conteneur et d'archive auxquels elle se rapporte.

Une fois votre archive extraite, vous pouvez la télécharger pendant 24 heures avec un débit illimité et une fréquence d'accès illimitée. Après cette période de récupération, l'archive sera de nouveau verrouillée.

```bash
user@host:~$ rsync -a pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Informations supplémentaires: Options Rsync

Puisque le serveur Rsync a été patché pour fonctionner avec l'API Swift, ces options seront appliquées côté serveur pour correspondre au comportement du serveur principal de stockage d'objets :

> --inplace : Au lieu de la méthode par défaut qui consiste à créer une nouvelle copie du fichier puis à la déplacer une fois le processus terminé, Rsync écrit les données mises à jour directement dans le fichier de destination.
>

En outre, seul un sous-ensemble d'options est autorisé côté client:

> -a, --archive: Active le mode d'archivage.
>
> -r, --recursive: Copie les répertoires de manière récursive.
>
> -v, --verbose: Augmente la quantité d'informations qui vous sont fournies lors du transfert.
>
> --del, --delete: Supprime les fichiers superflus du répertoire de destination.
>
> -P, --progress: Imprime les informations indiquant la progression du transfert.


## Aller plus loin

[Particularités de l’API Openstack Swift sur Cloud Archive](https://docs.ovh.com/ca/fr/storage/pca/api/)

[Page d'accueil de Rsync](https://linux.die.net/man/1/rsync)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
