---
title: Affichage du bootlog dans le KVM
slug: affichage-bootlog-dans-kvm
section: Diagnostic et mode Rescue
---

**Dernière mise à jour le 2018/01/26**

## Préambule

Si votre VPS ne répond pas comme vous le souhaitez, la manière la plus rapide d'obtenir un diagnostic est de vérifier ce qui apparaît dans le KVM. Ce guide vous explique ainsi comment modifier l'affichage pour que tout s'affiche dans la console et le KVM.

À noter pour certains environnements, le KVM ne vous fournira aucune information utile puisque la séquence de démarrage apparaît dans le port série où le GRUB est configuré en mode silencieux.


## Prérequis

- Avoir accès au VPS ou à l'instance Public Cloud en [mode rescue](../mode-rescue-vps/)


## En pratique

Si votre VPS fonctionne normalement, passez directement à la quatrième partie.

> [!warning]
>
> Ces modifications vont changer la configuration du GRUB. Veillez à bien effectuer des sauvegardes avant toute modification, OVH ne pouvant être tenu responsable de l'endommagement ou de la perte des données suite à ces manipulations.
>


### Étape 1 : réaliser la vérification initiale


Une fois connecté, il convient de vérifier le nom du disque avec la commande `lsblk` :

```sh

lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 8:0 0 3G 0 disk
└─sda1 8:1 0 3G 0 part /
sdb 8:16 0 10G 0 disk
└─sdb1 8:17 0 10G 0 part
```

Ici, le disque principal est `sdb` et la partition principale est `sdb1` (`sda` est le disque rescue et `sda1` est la partition principale en rescue montée sur `/`).


Si le résultat est le suivant, votre disque principal est `vdb` et votre partition principale est `vdb1` (`vda` est le disque rescue et `vda1` est la partition principale en rescue montée sur `/`) :

```sh
lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 8:0 0 3G 0 disk
└─vda1 8:1 0 3G 0 part /
vdb 8:16 0 10G 0 disk
└─vdb1 8:17 0 10G 0 part
```

>
>[!primary]
>
> Pour ce guide, nous utiliserons `sdb`. Si votre disque est `vdb`, il suffira de remplacer cette information pour chaque commande.
>

### Étape 1 bis : pour les VPS uniquement

Sur un VPS en mode rescue, le disque principal est déjà monté. Dans un premier temps, Il faut donc le démonter puis le remonter avec les bons paramètres :

```sh
umount /dev/sdb1
```

### Étape 2 : monter le disque

Maintenant que le nom du disque est identifié, il est possible de le monter avec les bons paramètres :

```sh
mount /dev/sdb1 /mnt
mount -t proc none /mnt/proc
mount -o bind /dev /mnt/dev
mount -t sysfs none /mnt/sys/
```

Ces commandes vont permettre ensuite d'effectuer la commande `chroot` et d'initier des commandes qui nécessitent l'accès aux répertoires `sys`, `dev` et `proc`.

### Étape 3 : lancer la commande CHROOT

Pour agir directement sur le système, il vous faut taper la commande suivante :

```sh
chroot /mnt
```

Désormais, toutes les commandes vont s'appliquer sur votre VPS et non sur le mode rescue.

> [!primary]
>
> Quand vous êtes en mode rescue, vous voyez l'écran suivant :
> 
> ```sh 
> root@serveur-3:~#
> ```
> 
> Une fois le `chroot` effectué, vous aurez alors :
> 
> ```sh
> [root@serveur-3 ~]#
> ```
> 
> Notez le [ ] qui confirme que vous êtes désormais dans un environnement en CHROOT.
>

### Étape 4 : effectuer les modifications

Afin d'accéder au bootlog dans le KVM, il faut être sûr d'avoir les valeurs suivantes dans le fichier /etc/default/grub :

- Pour CentOS 6 et 7 :

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

Si vous n'obtenez pas ces valeurs, éditez et modifiez votre fichier puis enregistrez-le.

Utilisez ensuite la commande suivante pour régénérer le fichier de configuration GRUB (les valeurs seront enregistrées pour le prochain redémarrage) :

```sh
grub2-mkconfig -o "$(readlink /etc/grub2.cfg)"
```

- Pour Debian et Ubuntu :

```sh
GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"
```

Si vous n'obtenez pas ces valeurs, éditez et modifiez votre fichier puis enregistrez-le..

Utilisez ensuite la commande suivante pour régénérer le fichier de configuration GRUB (les valeurs seront enregistrées pour le prochain redémarrage) :

```sh
update-grub
```

Une fois la modification effectuée, redémarrez le VPS ou l'instance en mode normal et vérifiez le KVM : les informations du bootlog apparaîtront.


## Aller plus loin

[KVM sur VPS](../utilisation-kvm-sur-vps)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.