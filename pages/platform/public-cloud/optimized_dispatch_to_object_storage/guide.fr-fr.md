---
title: Optimiser les envois vers l’Object Storage
slug: optimiser-les-envois-vers-lobject-storage
legacy_guide_number: 1951
section: Stockage
order: 2
---


## Préambule
Lors d'envoi de fichiers volumineux vers l'Object Storage (vidéos/images), il est possible d'utiliser le client OpenStack Swift afin d'optimiser les transferts en segmentant ces fichiers.
Ce guide vous explique comment améliorer la vitesse de vos envois vers l'Object Storage grâce à cette fonctionnalité.

### Prérequis
- [Préparer l'environnement pour utiliser l'API OpenStack]({legacy}1851){.ref} avec le client python-swiftclient
- [Charger les variables d'environnement OpenStack]({legacy}1852){.ref}


## Optimisation d'envoi
OpenStack Swift vous permet de stocker des fichiers sans limite de taille en les découpant en plusieurs segments.

En effet, lorsqu'un client Swift est utilisé pour l'envoi de fichier, le nœud de stockage est déterminé par le proxy Swift en utilisant un hachage du nom de l'objet.
Par conséquent, il y a une grande possibilité que les segments soient stockés dans différents nœuds de stockage, ce qui permettra donc d'écrire vos données avec une vitesse supérieure.
On peut alors envoyer un fichier de 10Go en 100 segments de 100Mo :


```bash
swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```


|Argument|Description|
|---|---|
|--segment-size|Taille des segments en bytes|
|--segment-threads|Nombre d’envoi concurrents|


> [!success]
>
> Il est possible de mesurer la vitesse d'envoi en utilisant des programmes comme iftop.
> 
