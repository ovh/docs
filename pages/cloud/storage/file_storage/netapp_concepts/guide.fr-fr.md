---
title: Enterprise File Storage - Concepts
slug: netapp/concepts
excerpt: "Découvrez les principes de fonctionnement de l'offre Enterprise File Storage" 
section: Enterprise File Storage
order: 1
---

**Dernière mise à jour le 06/04/2022**

## Objectif

Enterprise File Storage vous permet de bénéficier de volumes de stockage NFS entièrement managés par OVHcloud. Dans ce guide de démarrage rapide, découvrez les concepts liés à votre service Enterprise File Storage, ainsi que ses limites.

**Découvrez comment fonctionne l'offre Enterprise File Storage.**

## En pratique

### Enterprise File Storage, c'est quoi ?

Enterprise File Storage est une offre de système de fichiers managée par OVHcloud et basée sur la solution NetApp&#174; ONTAP.

Vous pouvez commander un ou plusieurs espaces de stockage entre 1TiB et 58TiB sur votre compte, avec une granularité de 1 TiB.

### Principe de fonctionnement des services

Lorsque vous commandez, via votre compte OVHcloud, un service Enterprise File Storage entre 1 et 58 TiB, vous recevez un espace de stockage NFS.

Le compte OVHcloud est par défaut le contact administrateur, technique et facturation du service. Retrouvez plus d’informations sur notre guide « [Gérer les contacts de ses services»](https://docs.ovh.com/fr/customer/gestion-des-contacts/) ».

![Enterprise File Storage 1](images/Netapp_Concept_1.png)

> [!primary]
>
> Chaque service ne peut appartenir qu'à un seul compte OVHcloud (NIC-handle). Toutefois, les contacts technique et facturation peuvent être modifiés au profit d'autres comptes.
>

### Principe de fonctionnement de vos volumes

Une fois votre service Enterprise File Storage commandé, vous avez à votre disposition un service correspondant à une capacité de stockage. Dans ce service, vous pouvez créer un ou plusieurs volumes, chaque volume correspond à une partition.  
<br>Ces volumes vous permettent de stocker des fichiers et sont accessibles en réseau via une adresse IP fournie par OVHcloud. 

![Enterprise File Storage 2](images/Netapp_Concept_2.png)

> [!primary]
>
> - Chaque volume appartient à un service, mais un service peut contenir plusieurs volumes.
>
> - La taille d'un volume ne peut pas dépasser la taille totale du service moins l'espace alloué aux snapshots qu'il contient.
>
> - La taille d'un volume est évolutive, tant à la hausse qu'à la baisse.
>

Retrouvez plus d'informations sur le guide [« Gérer vos volumes »](https://docs.ovh.com/fr/storage/file-storage/netapp/volumes/).

### Principe de fonctionnement des ACL

Par sécurité, un volume n'est pas immédiatement accessible via son chemin d'accès. Il est nécessaire de créer des règles dans la liste de contrôle d'accès (ACL) du volume afin d'autoriser des utilisateurs à y accéder.

Ces règles sont constituées d'une adresse IP source de votre réseau au format x.x.x.x/x et d'un type de droits, soit lecture seule (RO) soit lecture/écriture (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.png)

> [!primary]
>
> Vous pouvez créer une ou plusieurs règles par volume.
>

Retrouvez plus d'informations sur le guide [« Gérer les ACL d'un volume »](https://docs.ovh.com/fr/storage/file-storage/netapp/volume-acl/).

### Principe de fonctionnement des snapshots

La technologie des snapshots de Enterprise File Storage fournit une solution de protection locale des données sur le même équipement pour les restaurations de fichiers uniques.

Un snapshot Enterprise File Storage est une image d'un volume à une date et une heure précises.

La création ne prend que quelques secondes, quelle que soit la taille du volume, la capacité utilisée ou le niveau d’activité sur le volume.

Le snapshot est une copie des métadonnées du volume à un instant donné (instantané de la table des inodes).

La consommation quotidienne constatée des snapshots est comprise entre 1 et 5 % de la capacité du volume pour de nombreuses applications. Par conséquent, à chaque création de volume, OVHcloud réserve 5% de sa capacité pour les snapshots de celui-ci.

![Enterprise File Storage 4](images/Netapp_Concept_4.png)

Retrouvez plus d'informations sur le guide [« Gérer les snapshots d'un volume »](https://docs.ovh.com/fr/storage/file-storage/netapp/volume-snapshots/).

### Limites de l'offre Enterprise File Storage 

#### Limites de l’offre Enterprise File Storage :

- Un service a une taille allouée et dédiée comprise entre 1 TiB et 58 Ti
- La granularité d’un service est de 1 TiB
- Le nombre de volumes par service est limité à 10 volumes par TiB (par exemple 50 volumes pour un service de 5TiB)

#### Limites des volumes :

- Un volume ne peut pas dépasser la taille de 29 TiB moins les 5% réservés pour les snapshots (1.45TiB) soit 27,55 TiB
- La taille minimale d'un volume est de 100 GiB
    - Granularité de taille pour un volume : 1 GiB
    - Taille maximale d’un fichier : 16 TiB

#### Limites des snapshots : 

- Un volume ne peut pas avoir plus de 200 snapshots.
- Nombre maximum de politiques de snapshot par volume : 1
- Nombre maximum de règles par politique de snapshot : 4

#### Limites liées aux ACL :

- Un volume a une adresse IP sur le réseau interne en 10.x.x.x de OVHcloud.
- Nombre maximum de vRack (private network service) attachés au service : 0 (le support de la technologie vRack n’est pas encore disponible)
- Nombre maximum d’access list : 1 par volume
- Nombre maximum d’IP par access list : 16 IP par access list

#### Limites des performances :

- Bande-passante minimum par TiB : pas de minimum
- Bande-passante maximum par TiB : 64 MiB/s et 4000 IOPS

### Calcul d'un volume 

> [!primary]
>
> Quelle est la difference entre Terabyte (TB) et Tebibyte (TiB) ?
>
> - T, le préfixe “tera-” , est une métrique et un standard IT qui utilise la base-10. Donc 1 TB = 10^12 bytes = 1000000000000 bytes = 1000 GB.
>
> - Ti, le préfixe “Tebi-”, a été créé plus tard en tant qu'un des préfixes binaires qui sont maintenant des standards IEC/ISO et qui utilisent la base-2. Cela signifie 1024^4=2^40. Donc 1 TiB = 1099511627776 bytes= 1024 GiB.
>
> - Les ordinateurs utilisent la base 2, de sorte que la quantité de stockage que vous pouvez voir dans votre système d'exploitation est exprimée en TiB. Les fournisseurs de stockage ont tendance à utiliser le TB car il s'agit d'un nombre plus important que le TiB.
>
> - Le problème est qu'ils sont similaires (2,4%) au niveau du KB, mais au niveau du TB, on a une différence de 10% et l'augmentation est exponentielle.
>
> - Pour Enterprise File Storage, parce que nous voulons être transparents avec vous, nous livrerons le volume en TiB même si vous voyez le TB comme unité, parce que le grand public utilise le TB.
>
> - Ainsi, si vous commandez un service Enterprise File Storage de 1 TB, vous disposerez en réalité de 1 TiB = 1,09951 TB.
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur Discord : <https://discord.gg/jW2FgBJ72h>
