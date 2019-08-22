---
title: Comment éviter le disque en lecture seule sous linux ?
slug: comment-eviter-le-disk-en-read-only-sous-linux
excerpt: Eviter le passage en lecture seule du disque de votre VM linux
section: Gestion des machines virtuelles
order: 10
---

**Dernière mise à jour le 29/01/2019**

## Objectif

Il arrive que, suite à un évènement lié au stockage, certaines partitions d'une machine linux soient en lecture seule.

**Ce guide explique comment corriger cet état et réduire ce risque**


## En pratique

Lorsque des partitions sont en lecture seule, plus aucune écriture n'est alors possible sur le système de fichier.

```sh
>     $ touch test
>
>     touch: cannot touch 'test': Read-only file system
```

Il est possible de confirmer l'état du système de fichier par la commande `mount`

```sh
> $ mount
>
> **/dev/sda1 on / type ext3 (ro,errors=remount-ro)**
> tmpfs on /lib/init/rw type tmpfs (rw,nosuid,mode=0755)
> proc on /proc type proc (rw,noexec,nosuid,nodev)
> sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)
> procbususb on /proc/bus/usb type usbfs (rw)
> udev on /dev type tmpfs (rw,mode=0755)
> tmpfs on /dev/shm type tmpfs  (rw,nosuid,nodev)
> devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=620)
```

Pour remonter la `/` en *lecture-ecriture*, il faut redémarrer la machine virtuelle.

## Solution de contournement

Par default sous linux le *timeout* des périphériques scsi est à 30 secondes.

Les VMware Tools montent cette durée à 180 secondes.

Il est recommandé d'augmenter cette durée à 3600 secondes. Cette commande permettra de le monter à 3600 dans la session courante.

```sh
>     $ echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
```

Pour que cette valeur soit prise au démarrage de la machine

```sh
>   $ nano /etc/rc.local 
	
	#!/bin/sh -e
	#
	# rc.local
	#
	# This script is executed at the end of each multiuser runlevel.
	#
	# Make sure that the script will "exit 0" on success or any other value on error.
	#
	# In order toenable or disable this script just change the execution
	# bits.
	#
	# By default this script does nothing.

	echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
	exit 0
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.