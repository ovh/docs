---
title: Vérifier le système de fichiers sur un VPS
excerpt: Découvrez comment rechercher des erreurs dans un système de fichiers en mode rescue
updated: 2021-04-20
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

#### VPS GNU/Linux

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et lancez un redémarrage du serveur en mode rescue. Si nécessaire, consultez notre [guide du mode rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Sur les anciennes gammes de VPS, vos partitions seront automatiquement montées en mode rescue. Vous pouvez le vérifier à l'aide de la commande suivante :

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

L'exemple de résultat ci-dessus affiche un point de montage existant. Cela signifie que la partition à vérifier doit d'abord être démontée :

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Si votre VPS est récent, la colonne `MOUNTPOINT` devrait être vide et vous pouvez ignorer l'étape précédente.

Vous pouvez maintenant vérifier la partition avec « fsck » :

```bash
$ fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 files, 849881/6525179 blocks
```

Si le résultat est vide, cela signifie généralement que le système de fichiers est propre. Vous pouvez cependant forcer une vérification :

```bash
$ fsck /dev/sdb1 -f
```

### VPS Windows

Les instructions ci-dessus ne s'appliquent généralement pas à un VPS sous Windows, car la vérification du système de fichiers ne prend pas en charge NTFS. Vous pouvez cependant effectuer une vérification de cohérence NTFS sur les partitions.

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et lancez un redémarrage du serveur en mode rescue. Si nécessaire, consultez notre [guide du mode rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Sur les anciennes gammes de VPS, vos partitions seront automatiquement montées en mode rescue. Vous pouvez le vérifier à l'aide de la commande suivante :

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part /mnt/sdb1
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

L'exemple de résultat ci-dessus affiche les points de montage existants. Cela signifie que la partition à vérifier doit d'abord être démontée :

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Si votre VPS est récent, la colonne `MOUNTPOINT` devrait être vide et vous pouvez ignorer l'étape précédente.

La commande suivante vérifie la cohérence de la partition et tente de résoudre les erreurs éventuelles :

```bash
$ ntfsfix /dev/sdb1
```

## Aller plus loin

[Activer le mode rescue sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Echangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
