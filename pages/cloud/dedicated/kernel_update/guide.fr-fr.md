---
title: Mettre à jour le kernel sur un serveur dédié
excerpt: Découvrez comment mettre à jour le kernel d’une distribution utilisant un noyau OVH
slug: mettre-a-jour-kernel-serveur-dedie
section: Utilisation avancée
---

**Dernière mise à jour le 16/01/2018**

## Objectif

OVH vous donne la possibilité de garder facilement un kernel à jour sur votre système Linux grâce au système de démarrage *netboot*. 

Il est cependant fortement recommandé de mettre à jour sur le disque votre système d’exploitation (OS) auquel est lié votre kernel.

**Ce guide vous explique comment mettre à jour le kernel dans le cadre d’une distribution utilisant un noyau OVH.**

Par défaut, l’ensemble des images système proposées sur les serveurs dédiés OVH utilisent un noyau OVH optimisé. Les utilisateurs ayant remplacé ces images par leur propre distribution sont invités à consulter la documentation officielle de cette dernière.


> [!warning]
>
> OVH met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d'en assurer la gestion logicielle et la sécurisation au quotidien. 
> 
> Nous mettons ce guide à votre disposition afin de vous accompagner sur cette mise à jour. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur.
>

## Prérequis

- Avoir l'accès root au serveur (SSH).
- Avoir effectué au préalable une sauvegarde des données (consultez la documentation officielle de votre distribution).

## En pratique

### Identifier le kernel

Afin d'identifier votre version de kernel, il convient d’entrer la commande suivante :

```sh
uname -r
```

Par exemple :

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

La version du kernel est dans ce cas **4.09.76-xxxx-std-ipv6-64**.

### Mettre à jour le kernel

#### Étape 1 : se placer dans le bon répertoire

L'image du kernel doit être placée dans le répertoire suivant :

```sh
cd /boot
```

#### Étape 2 : récupérer l'image

Sans recompilation du kernel, il suffit de télécharger la version bzImage souhaitée, idéalement la dernière version. Vous trouverez les images à l'adresse suivante : <ftp://ftp.ovh.net/made-in-ovh/bzImage/>. 

Les kernels sont monolithiques, c’est-à-dire qu'ils ne prennent pas en compte les modules Kernel : CEPH, NBD, ZFS...

Reprenons notre exemple. Nous avions en version de kernel : **4.09.76-xxxx-std-ipv6-64**.

Il faudra donc télécharger l'image suivante avec la commande ci-dessous :

```sh
wget ftp://ftp.ovh.net/made-in-ovh/bzImage/4.14.13/bzImage-4.14.13-xxxx-std-ipv6-64
```

#### Étape 3 : mettre à jour le programme d'amorçage (GRUB)

Enfin, mettez à jour le programme d'amorçage (GRUB) avec la commande suivante :

```sh
update-grub
```

Vous aurez alors ce retour de commande :

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Vérifiez bien la présence du fichier suivant (nécessaire à la mise à jour) dans votre configuration : `06_OVHkernel`. Vous pouvez vérifier la présence de ce fichier avec la commande suivante :
>
> `ls /etc/grub.d/`
>

#### Étape 4 : redémarrer le serveur

Afin que les modifications soient prises en compte, il vous reste à redémarrer le serveur :

```sh
reboot
```

### Revenir en arrière

En cas de mauvaise manipulation ou d'erreur, vous avez la possibilité de revenir en arrière. Pour cela, il convient de passer le serveur en [mode Rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}. Il faudra ensuite monter votre système avec les commandes ci-dessous :

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> Dans cet exemple la racine (ou slash `/`) est nommée *md1*. Le nom peut cependant être différent. Pour vous assurer du nom de votre racine il suffit d’entrer la commande suivante :
>
> `fdisk`ou `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Placez-vous ensuite dans le répertoire `/boot` et supprimez les derniers fichiers installés (commande `rm`). Dans notre exemple, il convient de faire :

```sh
rm bzImage-4.14.13-xxxx-std-ipv6-64
```

Il faut à nouveau mettre à jour le système d'amorçage :

```sh
update-grub
```

Il convient enfin de quitter le mode Rescue (redémarrage sur le disque) et d’effectuer un reboot logiciel avec la commande :

```sh
reboot
```

### Vérifier que la mise à jour est correctement appliquée

Une fois la mise à jour effectuée, il est possible de vérifier la version du kernel nouvellement installée via la commande :

```sh
uname –r
```

> [!primary]
>
> Dans le cadre des vulnérabilités Meltdown et Spectre, vous pouvez consulter le site de l’éditeur de votre distribution afin de vérifier que cette nouvelle version du kernel est patchée pour vous prémunir contre ces dernières.
>
> En cas de besoin, il existe un certain nombre d’outils (par exemple celui-ci : <https://github.com/speed47/spectre-meltdown-checker>) vous permettant de savoir si le kernel utilisé est vulnérable ou non.
>
> **OVH ne peut garantir la fiabilité d’outils externes, vous utilisez ces derniers à vos risques et périls.**
>

## Aller plus loin

[Mode Rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}.

[Informations sur les vulnérabilités Meltdown et Spectre -EN-](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}.

[Mise à jour suite à vulnérabilité Meltdown et Spectre par système d'exploitation -EN-](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.