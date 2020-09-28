---
title: 'Créer et configurer un disque supplementaire sur une instance'
slug: creer-et-configurer-un-disque-supplementaire-sur-une-instance
excerpt: 'Découvrez comment créer et configurer un disque supplémentaire sur une de vos instances.'
legacy_guide_number: 1863
section: 'Stockage'
order: 3
---

**Dernière mise à jour le 14 novembre 2019**

## Objectif

Vous pouvez créer des disques supplémentaires pour vos instances Public Cloud.
Cela peut être utile dans les cas suivants :

* Si vous souhaitez augmenter votre capacité de stockage sans avoir à changer le modèle d’instance.
* Si vous souhaitez disposer d’un espace de stockage hautement disponible et performant.
* Si vous souhaitez déplacer votre stockage et vos données vers une autre instance.

**Découvrez comment créer et configurer un disque supplémentaire sur une de vos instances.**

## Prérequis

* Avoir accès à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
* Avoir une [Instance Public Cloud](https://www.ovh.com/ca/fr/public-cloud/){.external}dans votre compte OVHcloud.
* Avoir accès à votre instance via SSH en tant qu'administrateur (root).

## En pratique

Tout d’abord, connectez-vous à votre [Espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} et cliquez sur le menu `Public Cloud`{.action}. Cliquez ensuite sur le `Projet`{.action} dans lequel vous souhaitez créer l’instance.

Cliquez sur le bouton `Actions`{.action} puis sélectionnez `Créer un volume`{.action}.

![sélectionner le projet](images/attach-disk-01.png){.thumbnail}

Configurez maintenant vos options concernant le type, la taille et l’emplacement du disque. Lorsque vous avez terminé, cliquez sur le bouton `Ajouter`{.action}.

![create disk](images/attach-disk-02.png){.thumbnail}

Le nouveau disque sera maintenant affiché sur votre espace client.

![configure disk](images/attach-disk-03.png){.thumbnail}

Pour attacher un disque à une instance, cliquez sur les trois points à droite puis sélectionnez `Attacher à l’instance`{.action}.

![attach disk 01](images/attach-disk-04.png){.thumbnail}

Sélectionnez maintenant l’instance et cliquez sur `Confirmer`{.action} pour attacher le disque.

![attach disk 02](images/attach-disk-05.png){.thumbnail}

Le processus d’attachement du disque à votre instance va maintenant commencer et peut prendre quelques minutes.

![attach disk 03](images/attach-disk-06.png){.thumbnail}

> [!warning]
Vous devez éviter la navigation en dehors de l’onglet Infrastructure pendant l’attachement du disque. Cela peut interrompre le processus.
>

### Sous Linux

En premier lieu, connectez-vous en SSH à votre instance et utilisez la commande suivante pour afficher la liste des disques de l’instance :

```
# admin@serveur-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
VDA correspond généralement au disque dur principal de votre instance. VDB sera donc le disque supplémentaire.
>

Ensuite, créez une partition sur le disque supplémentaire à l’aide de la commande suivante :

```
# admin@serveur-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
```



```
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-20971519, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-20971519, default 20971519):

Created a new partition 1 of type 'Linux' and of size 10 GiB.
```



```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Formatez la partition à l’aide de la commande suivante :

```
# admin@serveur-1:~$ sudo mkfs.ext4 /dev/vdb1
mke2fs 1.42.12 (29-Aug-2014)
Creating filesystem with 2621184 4k blocks and 655360 inodes
Filesystem UUID: 781be788-c4be-462b-b946-88429a43c0cf
Superblock backups stored on blocks:
32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

Utilisez cette commande pour monter la partition :

```
admin@serveur-1:~$ sudo mkdir /mnt/disk
admin@serveur-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```


Et finalement, vérifiez le point de montage avec cette commande :

```
admin@serveur-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

Si vous voulez créer un point de montage persistant, vous devrez changer le /etc/fstab. Pour cela, utilisez la commande suivante pour récupérer l’identifiant du bloc (block ID).

```
admin@serveur-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Maintenant vous pouvez utiliser le block ID pour changer le fichier /etc/fstab.

```
admin@serveur-1:~$ vim /etc/fstab

/etc/fstab: static file system information.

# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
# # #
# <file system> <mount point> <type> <options> <dump> <pass>
UUID=51ba13e7-398b-45f3-b5f3-fdfbe556f62c / ext4 defaults 0 0
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

### Sous Windows

En premier lieu, faites un clic droit sur le `Menu Démarrer`{.action} puis cliquez sur `Gestion des disques`{.action}.

![](images/start-menu.png){.thumbnail}

Lorsque l’outil de gestion des disques s’ouvre, vous verrez votre nouveau disque comme un volume inconnu avec de l'espace non alloué, comme indiqué ci-dessous :

![disk management](images/disk-management-01.png){.thumbnail}

#### Initialiser le disque avec l’outil de gestion des disques

Si le disque est hors ligne, une politique en place sur l’instance en est probablement la cause. Pour résoudre ce problème, faites un clic droit sur le disque et sélectionnez`En ligne`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Effectuez à nouveau un clic droit et sélectionnez cette fois-ci `Initialiser le disque`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

Ensuite, sélectionnez `MBR`{.action} puis cliquez sur `OK`{.action}.

![initialise disk](images/initialise-disk.png){.thumbnail}

#### Initialiser le disque avec DISKPART

En premier lieu, faites un clic droit sur le `Menu Démarrer`{.action} puis cliquez sur `Exécuter`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Ensuite, tapez `cmd` puis cliquez sur `OK`{.action}

![run prompt](images/run-prompt.png){.thumbnail}

Dans l’invite de commande qui s’ouvre, tapez la commande suivante pour ouvrir l’outil DISKPART :

```
C:\> diskpart
```

Ensuite, changez la politique du disque à l’aide des commandes suivantes :

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system . [/ Code]

- Implementation of the strategy on the extra disk:
[Code] DISKPART> list disk

Disk ### Status Size Free Dyn Gpt
-------- ------------- ------- ------- --- ---
Disk 0 Online 200 GB 0 B
* Disk 1 Offline 10 GB 1024 KB
```

```
DISKPART> select disk 1

Disk 1 is now the selected disk.
```

```
DISKPART> attributes disk clear readonly

Disk attributes cleared successfully.
```

```
DISKPART> attributes disk

Current Read-only State : Non
Read-only : Non
Boot Disk : Non
Pagefile Disk : Non
Hibernation File Disk : Non
Crashdump Disk : Non
Clustered Disk : Non
```

```
DISKPART> online disk

DiskPart successfully onlined the selected disk.
```

#### Formater le disque

Ouvrez l’outil Gestion des disques à nouveau, faites un clic droit sur le volume, puis cliquez sur `Nouveau volume simple...`{.action}

![format disk](images/format-disk-01.png){.thumbnail}

Cliquez ensuite sur `Suivant`{.action}.

![format disk](images/format-disk-02.png){.thumbnail}

Spécifiez la taille du volume souhaitée. En général, vous souhaiterez la totalité de l’espace disponible. Une fois cela fait, cliquez sur Suivant.

![format disk](images/format-disk-03.png){.thumbnail}

Choisissez une lettre de lecteur de la liste déroulante pour identifier le volume, puis cliquez sur `Suivant`{.action}.

![format disk](images/format-disk-04.png){.thumbnail}

Sélectionnez les options que vous souhaitez pour le volume puis cliquez sur `Suivant`{.action} pour formater le disque.

![format disk](images/format-disk-05.png){.thumbnail}

Finalement, cliquez sur `Terminer`{.action} pour effectuer le formatage.

![format disk](images/format-disk-06.png){.thumbnail}

Une fois le disque formaté, vous pouvez y accéder simplement depuis l’explorateur de fichiers.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
