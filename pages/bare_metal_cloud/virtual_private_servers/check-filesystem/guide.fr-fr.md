---
title: Vérifier le système de fichiers sur un VPS
excerpt: Découvrez comment rechercher des erreurs dans un système de fichiers en mode rescue
updated: 2023-09-20
---

## Objectif

**Découvrez comment diagnostiquer les systèmes de fichiers sur les VPS OVHcloud à l'aide du mode rescue.**

> [!warning]
>OVHcloud vous fournit des services dont vous êtes responsable en ce qui concerne leur configuration et leur gestion. Vous êtes donc responsable de leur bon fonctionnement.
>
>Si vous rencontrez des difficultés pour effectuer ces actions, veuillez contacter un prestataire de services spécialisé et/ou échanger avec notre communauté d'utilisateurs sur <https://community.ovh.com/>. OVHcloud ne pourra pas vous fournir de support technique à cet égard.
>

## Prérequis

- un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- disposer d'un accès à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### VPS GNU/Linux

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et lancez un redémarrage du serveur en mode rescue. Si nécessaire, consultez notre [guide du mode rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Vous pourrez ensuite vérifier la configuration des disques :

```bash
lsblk
```

La partition correspondant au mode rescue (`sda1` dans cet exemple) est montée dans le répertoire `/`. Quant à lui, le disque du VPS est nommé `sdb` et ne doit avoir aucun point de montage.

Par exemple :

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1   8:17   0   80G  0 part  
```

Si votre résultat ressemble à l'exemple ci-dessus et que la colonne `MOUNTPOINT` est vide dans la ligne correspondante (`sdb1`), vous pouvez passer à [l'étape suivante](#fscheck).

Cependant, si votre résultat montre qu'il y a un point de montage pour la partition VPS, elle doit d'abord être démontée.

Par exemple :

```console
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

Dans l'exemple de sortie ci-dessus, la partition `sdb1` est montée à `/mnt/`. Pour vérifier la partition, celle-ci ne doit pas être montée.

Pour démonter votre partition, utilisez la commande suivante :

```bash
umount /dev/partition_name
```

Dans cet exemple de configuration, la commande serait :

```bash
umount /dev/sdb1
```

<a name="fscheck"></a>

Vous pouvez maintenant vérifier la partition avec « fsck » :

```bash
fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 files, 849881/6525179 blocks
```

Si le résultat est vide, cela signifie généralement que le système de fichiers est propre. Vous pouvez cependant forcer une vérification :

```bash
fsck /dev/sdb1 -f
```

### VPS Windows

Les instructions ci-dessus ne s'appliquent généralement pas à un VPS sous Windows, car la vérification du système de fichiers ne prend pas en charge NTFS. Vous pouvez cependant effectuer une vérification de cohérence NTFS sur les partitions.

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et lancez un redémarrage du serveur en mode rescue. Si nécessaire, consultez notre [guide du mode rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Vous pourrez ensuite vérifier la configuration des disques :

```bash
lsblk
```

La partition correspondant au mode rescue (`sda1` dans cet exemple) est montée dans le répertoire `/`. Quant à lui, le disque du VPS est nommé `sdb` et ne doit avoir aucun point de montage.

Par exemple :

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part 
├─sdb2   8:18   0 99.7G  0 part 
```

Si votre résultat ressemble à l'exemple ci-dessus et que la colonne `MOUNTPOINT` est vide dans la ligne correspondante, vous pouvez passer à [l'étape suivante](#fscheckwin).

Cependant, si votre résultat montre qu'il y a un point de montage pour la partition VPS, elle doit d'abord être démontée.

Par exemple :

```console
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

Dans l'exemple de sortie ci-dessus, la partition concernée `sdb2` est montée à `/mnt/`. Pour vérifier la partition, celle-ci ne doit pas être montée.

Pour démonter votre partition, utilisez la commande suivante :

```bash
umount /dev/partition_name
```

Dans cet exemple de configuration, la commande serait :

```bash
umount /dev/sdb2
```

<a name="fscheckwin"></a>

La commande suivante vérifie la cohérence de la partition et tente de résoudre les erreurs éventuelles :

```bash
ntfsfix /dev/partition_name
```

Dans cet exemple de configuration, la commande serait :

```bash
ntfsfix /dev/sdb2
```

## Aller plus loin

[Activer le mode rescue sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Echangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
