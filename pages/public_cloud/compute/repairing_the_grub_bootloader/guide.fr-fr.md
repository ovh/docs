---
title: 'Réparer le bootloader GRUB'
excerpt: 'Guide de réparation du bootloader GRUB sur une instance'
updated: 2020-11-23
---

## Objectif

Il est possible que vous deviez réparer le bootloader GRUB. Ce guide va vous permettre de facilement réparer le bootloader et rétablir le fonctionnement de votre instance.

## Prérequis

- Une [instance Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud

## En pratique

> [!warning]
> L'instance doit être en mode rescue (Vous pouvez consulter le guide [Comment activer le mode rescue sur une instance Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)).

Connectez-vous sur l'instance, soit via le VNC de [l'espace client OVHcloud](/links/manager) ou via SSH.

Tapez les commandes suivantes pour monter le système de fichiers distant et démarrer la réparation de GRUB :

```sh
mount /dev/sdb1 /mnt
mount -o bind /proc /mnt/proc
mount -o bind /sys /mnt/sys
mount -o bind /dev /mnt/dev
chroot /mnt /bin/bash
```

> [!primary]
>
> Si votre partition de boot se situe ailleurs que sur sdb1, voud devrez la monter également. 
> Par exemple, si la partition de boot de votre système est /dev/sdb2, tapez les commandes ci-dessous.
>

```sh
mount /dev/sdb1 /mnt
mount /dev/sdb2 /mnt/boot
mount -o bind /proc /mnt/proc
mount -o bind /sys /mnt/sys
mount -o bind /dev /mnt/dev
chroot /mnt /bin/bash
```

### Mettre a jour GRUB (ou GRUB2)

Mettre à jour GRUB :

```sh
grub-install /dev/sdb
update-grub
```

Mettre à jour GRUB2 :

```sh
grub2-install /dev/sdb
grub2-mkconfig -o /boot/grub2/grub.cfg
```

Vous pouvez maintenant sortir l'instance du mode rescue. (Voir le guide [Comment activer le mode rescue sur une instance Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode))

## Aller plus loin

Rejoignez la communauté de nos utilisateurs à l'adresse <https://community.ovh.com/>.
