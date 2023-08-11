---
title: Migration de données d'un NAS-HA vers un autre via NFS
excerpt: Decouvrez ici comment migrer vos données d'un NAS-HA à un autre via un partage NFS.
updated: 2021-02-09
---

**Dernière mise à jour le 09/02/2021**

## Objectif

Ce guide détaille comment transférer les données d'un NAS-HA vers un autre. 

## Prérequis

Pour effectuer le transfert de vos données, il vous faut :

- Un NAS-HA OVHcloud
- Une distribution compatible NFS
- Avoir monté votre NAS-HA au préalable en suivant le guide pour [monter votre NAS-HA via un partage NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs){.external}.

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

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/){.external}.