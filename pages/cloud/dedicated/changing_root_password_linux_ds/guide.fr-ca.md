---
title: 'Changer le mot de passe root sur un serveur dédié'
slug: changer-mot-passe-root-linux-sur-serveur-dedie
excerpt: 'Découvrez comment modifier le mot de passe root de votre serveur dédié'
section: 'Diagnostic et mode Rescue'
updated: 2021-02-16
---

**Dernière mise à jour le 16/02/2021**

## Objectif

Il peut s'avérer nécessaire de changer le mot de passe root (ou celui de votre utilisateur admin/sudo) sur votre système d'exploitation GNU/Linux. 
<br>Deux scénarios sont possibles :

- Vous pouvez toujours vous connecter via SSH
- Vous ne pouvez pas vous connecter via SSH car vous avez perdu votre mot de passe

**Découvrez comment modifier votre mot de passe administrateur en fonction de la situation initiale.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Posséder un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/){.external}.
- Disposer des identifiants de connexion reçus par e-mail suite à l'installation (si ceux-ci sont toujours valides).
- Avoir accès à l’[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} (pour utiliser le mode rescue).

> [!warning]
>OVHcloud vous fournit des services dont vous êtes responsable en ce qui concerne leur configuration et leur gestion. Vous êtes donc responsable de leur bon fonctionnement.
>
>Ce guide est conçu pour vous aider le plus possible dans les tâches courantes. Néanmoins, nous vous recommandons de contacter un prestataire de services spécialisé si vous rencontrez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en oeuvre des services sur un serveur.
>

## En pratique

### Modifier le mot de passe si vous avez toujours accès (utilisateur sudo ou root)

Connectez-vous à votre serveur via SSH. Basculez vers l'utilisateur root, si nécessaire :

```
~$ sudo su -
~#
```

Pour modifier le mot de passe de l'utilisateur actuel, tapez `passwd`. Vous devrez alors indiquer votre nouveau mot de passe à deux reprises, comme indiqué ci-dessous :

```
~# passwd

New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Veuillez noter que sur une distribution GNU/Linux, les caractères de votre mot de passe **n'apparaissent pas** au fur et à mesure que vous les tapez.
>

### Modifier le mot de passe si vous l'avez perdu

#### Étape 1 : identifier la partition système

Après avoir redémarré votre serveur en [mode rescue](../ovh-rescue/), vous devez identifier la partition système. Pour ce faire, exécutez la commande suivante :

```
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

Dans l'exemple ci-dessus, la partition système est /dev/hda1.

> [!primary]
>
> Si votre serveur dispose d'une configuration RAID, vous devez monter votre volume raid :
> - avec un RAID logiciel, votre partition racine sera `/dev/mdX` ;
> - avec un RAID matériel, votre partition racine sera `/dev/sdX`.
>

#### Étape 2 : monter la partition système

Une fois la partition système identifiée, vous pouvez la monter avec la commande suivante :

```
# mount /dev/hda1 /mnt/
```

#### Étape 3 : modifier la partition root

Par défaut, la partition système est verrouillée pour l'édition. Vous devez donc l'ouvrir pour un accès en écriture, via la commande suivante :

```
# chroot /mnt
```

#### Étape 4 : modifier le mot de passe root

La dernière étape consiste à modifier votre mot de passe, avec la commande suivante :

```
# passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Une fois cette étape effectuée, changez le mode de démarrage sur votre serveur pour `Booter sur le disque dur`{.action} et redémarrez-le. Votre mot de passe root est maintenant modifié.

## Aller plus loin

[Activer et utiliser le mode rescue](../ovh-rescue/)

[Sécuriser un serveur dédié](../securiser-un-serveur-dedie/)

[Changer le mot de passe administrateur sur un serveur dédié Windows](../changer-mot-passe-admin-windows/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.