---
title: 'Configurer un disque additionnel'
excerpt: "Découvrez comment ajouter et configurer de l'espace de stockage supplémentaire sur un VPS"
slug: configurer-disque-additionnel
section: 'Sauvegarde'
order: 3
---

**Dernière mise à jour le 24 février 2021**

## Objectif

Avec les VPS OVHcloud, vous avez la possibilité d'ajouter un espace de stockage sécurisé en tant qu'option de service. Ce stockage est séparé de la capacité de stockage interne de la solution VPS, ce qui en fait un endroit sûr pour vos sauvegardes ou autres données statiques. Le disque additionnel sera uniquement accessible à partir de l'adresse IP du serveur et les données qu'il contient ne seront pas affectées, même si le VPS est réinstallé ou doit subir une perte de données.

**Découvrez comment activer l'option de disque additionnel et configurer l'espace de stockage pour l'utiliser avec le VPS.**

## Prérequis

- Disposer d'un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Disposer d'un accès administratif via SSH ou RDP à votre VPS

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur privés virtuels`{.action}.

### Commander un disque additionnel

Après avoir sélectionné votre VPS, cliquez sur l'onglet `Disque additionnel`{.action} dans le menu horizontal. Cliquez sur `Commander un disque supplémentaire`{.action} et choisissez une taille de disque dans la sélection qui s'affiche.

![adddiskvps](images/disk_vps01.png){.thumbnail}

Prenez note des informations de tarification, puis cliquez sur `Commander`{.action}. Vous serez guidé dans le processus de commande et recevrez un e-mail de confirmation dès que le disque sera installé.

### Monter le nouvel espace de stockage

> [!warning]
> OVHcloud vous fournit des services dont vous êtes responsable en ce qui concerne leur configuration et leur gestion. Vous êtes donc responsable de leur bon fonctionnement.
>
>Si vous rencontrez des difficultés pour effectuer ces actions, veuillez contacter un prestataire de services spécialisé et/ou discuter du problème avec notre communauté d'utilisateurs sur https://community.ovh.com/. OVHcloud ne peut pas vous fournir de support technique sur ce sujet.
>

#### Sur un VPS Linux

Si une distribution GNU/Linux est installée sur votre VPS, établissez une connexion SSH à votre serveur à partir du terminal de ligne de commande ou en utilisant une application cliente SSH.

Les exemples ci-dessous supposent que vous êtes connecté en tant qu'utilisateur avec des droits élevés.

Vous pouvez utiliser la commande suivante pour vérifier le nom du nouveau périphérique :

```
$ lsblk

sda       8:0    0   80G  0 disk
├─sda1    8:1    0 79.9G  0 part /
├─sda14   8:14   0    4M  0 part
└─sda15   8:15   0  106M  0 part /boot/efi
sdb       8:16   0   50G  0 disk
```

Dans cet exemple, le disque supplémentaire est nommé `sdb`.

Exécutez `fdisk` pour créer une partition sur le disque. Lorsque vous y êtes invité, entrez `n` pour une nouvelle partition et acceptez les valeurs par défaut suivantes en appuyant sur Entrée (« ↩ »). Enfin, utilisez la commande `w` pour écrire les modifications sur le disque.

```
$ sudo fdisk /dev/sdb

Welcome to fdisk (util-linux 2.34).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.
```

```
Command (m for help): n

Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)

Select (default p):
```

```
Partition number (1-4, default 1): 

First sector (2048-104857599, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-104857599, default 104857599):

Created a new partition 1 of type 'Linux' and of size 50 GiB.
```

```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Maintenant que la partition `sdb1` est créée, vous pouvez la formater avec ext4 :

```
$ sudo mkfs.ext4 /dev/sdb1

Creating filesystem with 13106944 4k blocks and 3276800 inodes
Filesystem UUID: a667d351-cf36-49f2-94b4-daf03d7a86a6
Superblock backups stored on blocks:
32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
4096000, 7962624, 11239424

Allocating group tables: done                           
Writing inode tables: done                           
Creating journal (65536 blocks): done
Writing superblocks and filesystem accounting information: done  
```

La dernière étape consiste à monter le disque :

```
$ sudo mkdir /mnt/disk
$ sudo mount /dev/sdb1 /mnt/disk
```

Vous pouvez voir sur la dernière ligne que le disque additionnel est maintenant monté à `/mnt/disk` :

```
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            1.9G     0  1.9G   0% /dev
tmpfs           385M  1.1M  384M   1% /run
/dev/sda1        78G  2.4G   75G   4% /
tmpfs           1.9G     0  1.9G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           1.9G     0  1.9G   0% /sys/fs/cgroup
/dev/sda15      105M  3.9M  101M   4% /boot/efi
/dev/loop1       68M   68M     0 100% /snap/lxd/18150
/dev/loop3       32M   32M     0 100% /snap/snapd/10707
/dev/loop4       56M   56M     0 100% /snap/core18/1944
/dev/loop5       70M   70M     0 100% /snap/lxd/19188
tmpfs           385M     0  385M   0% /run/user/0
/dev/loop6       56M   56M     0 100% /snap/core18/1988
/dev/loop2       32M   32M     0 100% /snap/snapd/11036
tmpfs           385M     0  385M   0% /run/user/1000
/dev/sdb1        49G   53M   47G   1% /mnt/disk
```

> [!primary]
>
Cette étape précédente n'est pas persistante car le disque sera détaché si le VPS est redémarré. Pour automatiser le processus de montage, le fichier « fstab » doit être modifié.
>

Tout d'abord, récupérez l'UUID (ID de bloc) du périphérique :

```
$ sudo blkid
/dev/sda1: LABEL="cloudimg-rootfs" UUID="e616a2cd-3c02-4c79-9823-9b1bb5c13b26" TYPE="ext4" PARTUUID="a44089a3-f407-41e6-b7a5-1ed7672cef20"
/dev/sda15: LABEL_FATBOOT="UEFI" LABEL="UEFI" UUID="4411-1580" TYPE="vfat" PARTUUID="e1746ac7-80c1-4859-9b4d-fa6ce11b3ae9"
/dev/loop1: TYPE="squashfs"
/dev/loop2: TYPE="squashfs"
/dev/loop3: TYPE="squashfs"
/dev/loop4: TYPE="squashfs"
/dev/loop5: TYPE="squashfs"
/dev/loop6: TYPE="squashfs"
/dev/sda14: PARTUUID="7d19a2c9-75df-443e-8301-0bb85931df7d"
/dev/sdb1: UUID="87571b68-30e1-498b-a64c-49ec5cd4f31c" TYPE="ext4" PARTUUID="c965cbdf-01"
```

Ouvrez `/etc/fstab` avec un éditeur de texte :

```
$ sudo nano /etc/fstab
```

Ajoutez la ligne ci-dessous au fichier et remplacez l'UUID par le vôtre :

```
UUID=87571b68-30e1-498b-a64c-49ec5cd4f31c /mnt/disk ext4 nofail 0 0
```

Enregistrez et quittez l'éditeur. Dès lors, le disque devrait être automatiquement monté après chaque redémarrage.

#### Sur un VPS Windows

Si un système d'exploitation Windows est installé sur votre VPS, établissez une connexion Bureau à distance (RDP) à votre serveur.

Une fois connecté, faites un clic droit sur le bouton `Menu Démarrer`{.action} et ouvrez l'outil de `Gestion des disques`{.action}.

![winmountdiskvps](images/disk_vps_win01.png){.thumbnail}

Le nouveau disque s'affiche sous la forme d'un volume inconnu avec de l'espace non alloué.

![winmountdiskvps](images/disk_vps_win02.png){.thumbnail}

Si le disque est marqué comme hors connexion, il doit d'abord être initialisé. Pour ce faire, vous pouvez utiliser l'[interface graphique Windows](#initDiskManagement) ou l'[utilitaire DISKPART](#initDiskpart). Sinon, procédez au [formatage du disque dans l'outil « Gestion des disques »](#formatDiskManagement).

##### **Initialiser le disque dans l'outil « Gestion des disques »** <a name="initDiskManagement"></a>

 Faites un clic droit sur le disque et sélectionnez `En ligne`{.action}. 

![winmountdiskvps](images/disk_vps_win03.png){.thumbnail}

 Faites un nouveau clic droit sur le disque et sélectionnez cette fois `Initialiser le disque`{.action}.

![winmountdiskvps](images/disk_vps_win04.png){.thumbnail}

Sélectionnez `MBR`{.action} (Secteur de démarrage principal) dans la nouvelle fenêtre et cliquez sur `OK`{.action}.

![winmountdiskvps](images/disk_vps_win05.png){.thumbnail}

##### **Initialiser le disque avec DISKPART** <a name="initDiskpart"></a>

 Faites un clic droit sur le `Menu Démarrer`{.action} et ouvrez `Exécuter`{.action}.

![winmountdiskvps](images/disk_vps_win06.png){.thumbnail}

Tapez `cmd` et cliquez sur `OK`{.action} pour ouvrir l'application de ligne de commande.

![winmountdiskvps](images/disk_vps_win07.png){.thumbnail}

Dans l'invite de commandes, ouvrez DISKPART :

```
C:\> diskpart
```

Utilisez la série de commandes DISKPART suivante pour configurer le disque en ligne :

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system.

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

Current Read-only State : No
Read-only : No
Boot Disk : No
Pagefile Disk : No
Hibernation File Disk : No
Crashdump Disk : No
Clustered Disk : No
```

```
DISKPART> online disk

DiskPart successfully onlined the selected disk.
```

##### **Formater le disque dans l'outil « Gestion des disques »** <a name="formatDiskManagement"></a>

Dans `Gestion des disques`{.action}, faites un clic droit sur le nouveau disque et sélectionnez `Nouveau volume simple...`{.action}.

![winmountdiskvps](images/disk_vps_win08.png){.thumbnail}

Dans l'Assistant, cliquez sur `Suivant`{.action} pour spécifier la taille du volume. Il devrait être défini par défaut sur le maximum. Cliquez sur `Suivant`{.action} pour continuer.

![winmountdiskvps](images/disk_vps_win09.png){.thumbnail}

Conservez la nouvelle lettre de lecteur par défaut ou sélectionnez-en une autre, puis cliquez sur `Suivant`{.action}.

![winmountdiskvps](images/disk_vps_win10.png){.thumbnail}

Nommez le volume (facultatif) et confirmez les options de formatage en cliquant sur `Suivant`{.action}.

![winmountdiskvps](images/disk_vps_win11.png){.thumbnail}

Dans la dernière fenêtre, cliquez sur `Terminer`{.action} pour formater le disque. Il sera disponible en tant que lecteur dans l'Explorateur de fichiers après l'opération.

### Résilier l'option de disque additionnel

Sous l'onglet `Accueil`{.action}, faites défiler l'écran jusqu'à la zone intitulée **Résumé des options**. Cliquez sur `...`{.action} en face de l'option « Disques additionnels ». Cliquez  sur `Résilier`{.action} dans le menu contextuel.

![résiliation disque additionnel](images/disk_vps02.png){.thumbnail}

## Allez plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
