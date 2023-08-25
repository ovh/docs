---
title: Redimensionner le système de fichiers sur FreeBSD 12
excerpt: Découvrez comment redimensionner le système de fichiers d'une instance Public Cloud ou d'un VPS sous FreeBSD 12
updated: 2020-10-27
---


## Objectif

Ce guide a pour but de vous expliquer comment redimensionner votre système de fichiers après l'installation ou le redimensionnent sous FreeBSD 12. Cela permettra à votre système de profiter de tout l'espace disque.

## Prérequis

 * Avoir une instance avec FreeBSD 12 dans votre projet [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) ou un [VPS](https://www.ovhcloud.com/fr/vps/) sous FreeBSD 12
 * Avoir récemment installé l'instance/le VPS ou [l'avoir redimensionnée](/pages/public_cloud/compute/resize_of_an_instance)

> [!primary]
>
> Dans ce tutoriel, une instance r2-15 est utilisé. Les instructions sont valables pour un VPS ou une instance Public Cloud. Initialement le système de fichiers fait `5 GB`. A l'issue du processus, il fera `50 GB`.
>

## En pratique

Afin de dimensionner votre système de fichiers, vous devez d'abord réparer les partitions.

Connectez-vous à votre instance et regardez l'état de vos partitions :

```
freebsd@freebsd:~ % sudo gpart show
=>      40  10239920  vtbd0  GPT  (50G) [CORRUPT]
        40      1024      1  freebsd-boot  (512K)
      1064       984         - free -  (492K)
      2048  10235904      2  freebsd-zfs  (4.9G)
  10237952      2008         - free -  (1.0M)
```

Vous pouvez constater ici que le système de fichiers est corrompu. Cet état est normal car il est dû à l'installation de l'image sur l'instance ou à son redimensionnement. Il vous faut donc le réparer :

```
freebsd@freebsd:~ % sudo gpart recover vtbd0
vtbd0 recovered
```

En répétant la première commande, vous pouvez maintenant constater que le système de fichiers est réparé :

```
freebsd@freebsd:~ % sudo gpart show
=>       40  104857520  vtbd0  GPT  (50G)
         40       1024      1  freebsd-boot  (512K)
       1064        984         - free -  (492K)
       2048   10235904      2  freebsd-zfs  (4.9G)
   10237952   94619608         - free -  (45G)
```

Vous pouvez à présent redimensionner la partition `freebsd-zfs`. Pour ce faire, utilisez cette commande :

```
freebsd@freebsd:~ % sudo gpart resize -i 2 vtbd0
vtbd0p2 resized
```

> [!primary]
>
> Il se peut que le numéro de partition soit différent, pour trouver le bon numéro, vérifiez la colonne `vtbd0` et le numéro devant la ligne `freebsd-zfs`.
>

Vous avez maintenant redimensionné votre système de fichiers. ZFS est configuré pour s'étendre automatiquement. Pour vérifier, exécutez cette commande :

```
freebsd@freebsd:~ % zpool list
NAME    SIZE  ALLOC   FREE  CKPOINT  EXPANDSZ   FRAG    CAP  DEDUP  HEALTH  ALTROOT
zroot  49.5G   854M  48.7G        -         -     0%     1%  1.00x  ONLINE  -
```

Vous remarquerez que, dans cet exemple, `zroot` fait maintenant `50 GB`. ZFS est donc bien étendu.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
