---
title: 'Changer le mot de passe root sur un serveur dédié sous Linux'
slug: changer-mot-passe-root-linux-sur-serveur-dedie
excerpt: 'Découvrez comment modifier le mot de passe root de votre serveur, pour des raisons de sécurité ou suite à un oubli'
section: 'Diagnostic et mode Rescue'
---

**Dernière mise à jour le 20/06/2018**

## Objectif

Lors de l’installation ou de la réinstallation d’une distribution ou d’un système d’exploitation, un mot de passe pour l’accès root vous est fourni. Nous vous conseillons vivement de le modifier, comme expliqué dans notre guide [« Sécuriser un serveur dédié »](https://docs.ovh.com/fr/dedicated/securiser-un-serveur-dedie/){.external}. Il est également possible que vous ne retrouviez plus ce mot de passe et que vous ayez donc besoin de le changer.

**Ce guide détaille ces deux situations et vous montre comment modifier le mot de passe root de votre serveur.**

## Prérequis

* Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.
* Être connecté en SSH avec l’identifiant root.
* Avoir accès à l’[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Changer le mot de passe pour l’accès root

Si vous êtes déjà connecté via votre accès root avec votre mot de passe actuel et que vous souhaitez simplement le modifier, établissez une connexion SSH au serveur via la ligne de commande et tapez la commande suivante :

```sh
# passwd
```
Vous devrez alors indiquer votre nouveau mot de passe à deux reprises, comme indiqué ci-dessous :

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


> [!primary]
>
> Veuillez noter que sur une distribution Linux, les caractères de votre mot de passe **n'apparaissent pas** au fur et à mesure que vous les tapez.
>

### Changer un mot de passe perdu ou oublié

#### Étape 1 : identifier la partition système

Après avoir activé le [mode rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external} sur votre serveur, vous devez identifier la partition système. Vous pouvez le faire via la commande suivante :

```sh
# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Dans l'exemple ci-dessus, la partition système est `/dev/hda`.

> [!primary]
>
Si votre serveur dispose d'une configuration RAID, vous devez monter votre volume :
- avec un RAID logiciel, votre partition racine sera `/dev/md` ;
- avec un RAID matériel, votre partition racine sera `/dev/sd`.

>

#### Étape 2 : monter la partition système

Une fois la partition système identifiée, vous pouvez la monter avec la commande suivante :

```sh
# mount /dev/hda1 /mnt/
```

#### Étape 3 : modifier la partition root

Par défaut, la partition système est verrouillée pour l'édition. Vous devez donc l'ouvrir pour un accès en écriture, via la commande suivante :

```sh
# chroot /mnt
```

#### Étape 4 : changer le mot de passe root

La dernière étape consiste à modifier votre mot de passe, avec la commande suivante :

```sh
# passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Ensuite, changez le mode de démarrage sur votre serveur pour `Booter sur le disque dur`{.action} et redémarrez-le. Votre mot de passe root est maintenant modifié.



## Aller plus loin

[« Activer et utiliser le mode rescue. »](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}

[« Changer le mot de passe administrateur sur un serveur dédié Windows. »](https://docs.ovh.com/fr/dedicated/changer-mot-passe-admin-windows/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.