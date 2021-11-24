---
title: Enterprise File Storage - Concepts
slug: netapp-concepts
excerpt: "Découvrez les principes de fonctionnement de l'offre Enterprise File Storage" 
section: Enterprise File Storage
order: 1
---

**Dernière mise à jour le 27/10/2021**

## Objectif

L'offre OVHcloud Enterprise File Storage vous permet de commander des pools de capacité et de gérer ainsi des volumes de fichiers accessibles sur un réseau.
Dans ce guide de démarrage rapide, découvrez les concepts liés à votre offre Enterprise File Storage ainsi que les limites de l'offre.

**Découvrez comment fonctionne l'offre Enterprise File Storage.**

## En pratique

### Enterprise File Storage, c'est quoi ?

Enterprise File Storage est une offre de système de fichiers gérée par OVHcloud et basée sur la solution NetApp&#174; ONTAP Software-Defined Storage.

Vous pouvez commander un ou plusieurs espaces de stockage entre 1TiB et 29TiB sur votre compte.

> [!primary]
>
> Quelle est la difference entre Terabyte (TB) et Tebibyte (TiB) ?
>
> - T, le préfixe “tera-” , est une métrique et un standard IT qui utilise la base-10. Donc 1 TB = 10^12 bytes = 1000000000000 bytes = 1000 GB.
>
> - Ti, le préfixe “Tebi-”, a été créé plus tard en tant qu'un des préfixes binaires qui sont maintenant des standards IEC/ISO et qui utilise la base-2. Cela signifie 1024^4=2^40. Donc 1 TiB = 1099511627776 bytes= 1024 GiB.
>
> - Les ordinateurs utilisent la base 2, de sorte que la quantité de stockage que vous pouvez voir dans votre système d'exploitation est exprimée en TiB. Les fournisseurs de stockage ont tendance à utiliser le TB car il s'agit d'un nombre plus important que le TiB.
>
> - Le problème est qu'ils sont similaires (2,4%) au niveau du KB, mais au niveau du TB, on a une différence de 10% et l'augmentation est exponentielle.
>
> - Pour Enterprise File Storage, parce que nous voulons être transparents avec vous, nous livrerons le volume en TiB même si vous voyez le TB comme unité, parce que le grand public utilise le TB.
>
> - Ainsi, si vous commandez un service Enterprise File Storage de 1 TB, vous disposerez en réalité de 1 TiB = 1,09951 To ;-).
>

### Principe de fonctionnement des capacity pools

Lorque vous commandez, via votre compte OVHcloud, un service Enterprise File Storage entre 1 et 29 TB, vous recevez un capacity pool NetApp&#174;.

Le compte OVHcloud est par défaut le contact administrateur, technique et facturation du service. Retrouvez plus d'informations sur notre guide [«Gérer les contacts de ses services»](https://docs.ovh.com/fr/customer/gestion-des-contacts/).

![Enterprise File Storage 1](images/Netapp_Concept_1.PNG)

> [!primary]
>
> Chaque capacity pool ne peut appartenir qu'à un seul compte OVHcloud (NIC-handle). Toutefois, les contacts technique et facturation peuvent être modifiés au profit d'autres comptes.
>

### Principe de fonctionnement de vos volumes

Une fois votre offre Enterprise File Storage en service, vous pouvez créer un ou plusieurs volumes dans votre capacity pool.
<br>Ces volumes vous permettent de stocker des fichiers et sont accessibles en réseau via une adresse IP fournie par OVHcloud.
<br>La création d'un volume déclenche automatiquement la création d'un chemin d'accès principal ainsi que trois chemins d'accès secondaires.

![Enterprise File Storage 2](images/Netapp_Concept_2.PNG)

> [!primary]
>
> - Chaque volume appartient à un unique capacity pool, mais un capacity pool peut contenir plusieurs volumes.
>
> - La taille d'un volume ne peut pas dépasser la taille totale du capacity pool moins l'espace alloué aux snapshots qu'il contient.
>
> - La taille d'un volume est évolutive, tant à la hausse qu'à la baisse.
>

Retrouvez plus d'informations sur le guide [« Gérer vos volumes »](../netapp-volumes).

### Principe de fonctionnement des ACL

Par sécurité, un volume n'est pas immédiatement accessible via son chemin d'accès. Il est nécessaire de créer des règles dans la liste de contrôle d'accès (ACL) du volume afin d'autoriser des utilisateurs à y accéder.

Ces règles sont constituées d'une adresse IP source de votre réseau au format x.x.x.x/x et d'un type de droits, soit lecture seule (RO) soit lecture/écriture (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.PNG)

> [!primary]
>
> Vous pouvez créer une ou plusieurs règles par volume.
>

Retrouvez plus d'informations sur le guide [« Gérer les ACL d'un volume »](../netapp-volume-acl).

### Principe de fonctionnement des snapshots

La technologie des snapshots de Enterprise File Storage fournit une solution de protection locale des données sur le même équipement pour les restaurations de fichiers uniques.

Un snapshot Enterprise File Storage est une image d'un volume à une date et une heure précises.

La création ne prend que quelques secondes, quelle que soit la taille du volume, la capacité utilisée ou le niveau d’activité sur le volume.

Le snapshot est une copie des métadonnées du volume à un instant donné (instantané de la table des inodes).

La consommation quotidienne constatée des snapshots est comprise entre 1 et 5 % de la capacité du volume pour de nombreuses applications. Par conséquent, à chaque création de volume, OVHcloud réserve 5% de sa capacité pour les snapshots de celui-ci.

![Enterprise File Storage 4](images/Netapp_Concept_4.PNG)

Retrouvez plus d'informations sur le guide [« Gérer les snapshots d'un volume »](../netapp-volume-snapshots).

### Limites de l'offre Enterprise File Storage pour la phase de tests externes (Beta)

Voici ci-dessous les limites des capacity pools de l'offre Enterprise File Storage :

- Un capacity pool a une taille allouée et dédiée comprise entre 1TiB et 29TiB.
- Un capacity pool est limité à 20 volumes par TiB.

Voici ci-dessous les limites des volumes :

- Un volume ne peut pas dépasser la taille de 29TiB moins les 5% réservés pour les snapshots (1.45TiB) soit 27,55 TiB.
- La taille minimale d'un volume est de 1GiB.
- Un volume ne peut pas avoir plus de 255 snapshots.
- Un volume a une adresse IP sur le réseau interne en 10.x.x.x de OVHcloud.

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
