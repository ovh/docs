---
title: Object Storage Swift - Méthode optimisée pour le téléchargement de fichiers vers Object Storage
legacy_guide_number: g1951
updated: 2021-10-27
---

**Dernière mise à jour le 27/10/2021**

## Objectif

Lorsque vous souhaitez télécharger des fichiers volumineux vers Object Storage (incluant des vidéos ou des images de disques par exemple), vous pouvez utiliser le client Swift OpenStack afin d'optimiser le transfert de fichiers en décomposant les fichiers.

**Ce guide explique comment vous pouvez utiliser cette fonction pour télécharger plus rapidement vos fichiers sur Object Storage.**

## Prérequis

- [Préparer l'environnement pour utiliser l'API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api){.ref} avec le client python-swiftclient.
- [Charger les variables d'environnement OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables){.ref}

## En pratique

Swift OpenStack vous permet de stocker des fichiers de toutes tailles en les décomposant en plusieurs segments.

Lorsqu'un client Swift est utilisé pour télécharger un fichier, le serveur proxy Swift détermine le nœud de stockage correct responsable des données (sur la base d'un hachage du nom de l'objet). Il est donc très probable que les segments seront stockés dans plusieurs nœuds de stockage, ce qui signifie que vous pouvez écrire vos données à une vitesse plus élevée.

Vous pouvez ainsi téléverser un fichier de 10 GB en segments de 100 X 100 MB:

```bash
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```

|Argument|Description|
|---|---|
|--segment-size|Taille du segment en octets|
|--segment-threads|Nombre de segments|

Vous pouvez mesurer la vitesse de téléchargement en utilisant iftop.

## Aller plus loin
 
Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
