---
title: 'Réparer le bootloader GRUB'
excerpt: 'Guide de réparation du bootloader GRUB sur une instance'
updated: 2020-11-23
---

**Dernière mise à jour le 22/11/2020**

## Objectif

Il est possible que vous deviez réparer le bootloader GRUB. Ce guide va vous permettre de facilement réparer le bootloader et rétablir le fonctionnement de votre instance.

## Prérequis

- L'instance doit être en mode rescue (Vous pouvez consulter le guide [Passer une instance en mode rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode))

## En pratique

Connectez-vous sur l'instance, soit via le VNC de [l'espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) ou via SSH.

Tapez les commandes suivantes pour monter le système de fichiers distant et démarrer la réparation de GRUB :

```sh
mount /dev/sdb1 /mnt
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

Vous pouvez maintenant sortir l'instance du mode rescue. (Voir le guide [Passer une instance en mode rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode))

## Aller plus loin

Rejoignez la communauté de nos utilisateurs à l'adresse <https://community.ovh.com/>.
