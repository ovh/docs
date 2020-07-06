---
title: Redimensionner le système de fichier d'une instance FreeBSD 12
slug: redimensionner-systeme-de-fichier-freebsd-12
section: Tutoriels
---

## Objectifs

Ce guide a pour but de vous expliquer comment redimensionner votre système de fichier après avoir installée ou redimensionné votre instance. Afin que votre instance puisse profiter de tout l'espace disque.

## Prérequis

 * Avoir une instance avec FreeBSD 12 sur le Public Cloud
 * Avoir fraîchement installé l'instance ou [l'avoir redimensionné](https://docs.ovh.com/fr/public-cloud/redimensionner-une-instance/)

> [!primary]
>
> Dans ce tutoriel une instance r2-15 est utilisé. Initialement le système de fichier fait `5G`, à la fin il fera `50G`.
>

## En pratique

Afin de dimensionner votre système de fichier, il faut dans un premier temps réparer les partitions.
Connectez vous sur votre instance et regarder l'état de vos partitions.

```
freebsd@freebsd:~ % sudo gpart show
=>      40  10239920  vtbd0  GPT  (50G) [CORRUPT]
        40      1024      1  freebsd-boot  (512K)
      1064       984         - free -  (492K)
      2048  10235904      2  freebsd-zfs  (4.9G)
  10237952      2008         - free -  (1.0M)
```

Vous pouvez constater que le système de fichier est corrompu. Cet état est normal dû à l'installation de l'image sur l'instance ou à son redimensionnement. Nous allons donc le réparer.

```
freebsd@freebsd:~ % sudo gpart recover vtbd0
vtbd0 recovered
```

En refaisant la première commande, vous pouvez constater que le système est maintenant réparé.

```
freebsd@freebsd:~ % sudo gpart show
=>       40  104857520  vtbd0  GPT  (50G)
         40       1024      1  freebsd-boot  (512K)
       1064        984         - free -  (492K)
       2048   10235904      2  freebsd-zfs  (4.9G)
   10237952   94619608         - free -  (45G)
```

Vous pouvez maintenant redimensionner la partition `freebsd-zfs`, pour ce faire, utilisez cette commande.

```
freebsd@freebsd:~ % sudo gpart resize -i 2 vtbd0
vtbd0p2 resized
```

> [!primary]
>
> Il se peut que le numéro de partition soit différent, pour trouver le bon numéro, vérifiez la colonne `vtbd0` et le numéro devant la ligne `freebsd-zfs`.
>

Vous avez maintenant redimensionné votre système de fichier. ZFS est configurer pour s'étendre automatiquement. Pour vérifier, faite cette commande.

```
freebsd@freebsd:~ % zpool list
NAME    SIZE  ALLOC   FREE  CKPOINT  EXPANDSZ   FRAG    CAP  DEDUP  HEALTH  ALTROOT
zroot  49.5G   854M  48.7G        -         -     0%     1%  1.00x  ONLINE  -
```

Vous remarquerez que mon `zroot` fait maintenant `50G`. ZFS est donc bien étendu.
