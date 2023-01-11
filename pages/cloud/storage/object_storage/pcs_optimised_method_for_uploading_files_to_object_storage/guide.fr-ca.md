---
title: Object Storage Swift - Méthode optimisée pour le téléchargement de fichiers vers Object Storage
slug: pcs/optimised-method-for-uploading-files-to-object-storage
section: Spécificités de la classe de stockage OpenStack Swift
legacy_guide_number: g1951
order: 130
---

**Dernière mise à jour le 27/10/2021**

## Objectif

Lorsque vous souhaitez télécharger des fichiers volumineux vers Object Storage (incluant des vidéos ou des images de disques par exemple), vous pouvez utiliser le client Swift OpenStack afin d'optimiser le transfert de fichiers en décomposant les fichiers.

**Ce guide explique comment vous pouvez utiliser cette fonction pour télécharger plus rapidement vos fichiers sur Object Storage.**

## Prérequis

- [Préparer l'environnement pour utiliser l'API OpenStack](https://docs.ovh.com/ca/fr/public-cloud/prepare_the_environment_for_using_the_openstack_api/){.ref} avec le client python-swiftclient.
- [Charger les variables d'environnement OpenStack](https://docs.ovh.com/ca/fr/public-cloud/set-openstack-environment-variables/){.ref}

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
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
