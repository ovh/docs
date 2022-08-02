---
title: Migration de données d'un NAS vers un autre via NFS
slug: nas/nas-migration
excerpt: Decouvrez ici comment migrer vos données d'un Nas à un autre via un partage NFS.
section: NAS
order: 05
---

**Dernière mise à jour le 09/02/2021**

## Objectif

Ce guide détaille comment transférer les données d'un NAS vers un autre. 

## Prérequis

Pour effectuer le transfert de vos données, il vous faut :

- Un NAS OVHcloud / mini-NAS OVHcloud / NAS-HA OVHcloud
- Une distribution compatible NFS
- Avoir monté votre NAS au préalable en suivant le guide pour [monter votre NAS via un partage NFS](https://docs.ovh.com/ca/fr/storage/nas/nas-nfs/){.external}.

## En pratique

Compatibilité : Debian 6/7/8 & Ubuntu 12/13/14

Pour transférer vos données, nous utiliserons la commande `rsync`. Il existe plusieurs solutions pour transférer vos données. Libre à vous d'en utiliser une plutôt qu'une autre.

L'exemple présenté ci-dessous permet de transférer vos données d'un point de montage Source vers un point de montage de Destination.

```sh
rsync -Pva /mnt/SrcNas /mnt/DstNas
```

|Argument|Description|
|---|---|
|SrcNas|Point de montage source|
|DstNas|Point de montage de destination|

> [!alert]
>
> Attention si vous ajoutez d'autres options à rsync, celles-ci pourraient ne pas être compatibles avec le système de droits et de permissions des NAS-HA.
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/){.external}.