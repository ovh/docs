---
title: "Augmenter la taille d’un disque supplémentaire"
excerpt: "Découvrez comment augmenter la taille d'un volume supplémentaire et agrandir sa partition principale"
updated: 2022-03-29
---


## Objectif

Si vous avez atteint la capacité maximale de votre disque supplémentaire, vous pouvez ajouter du stockage en augmentant sa taille. 

**Ce guide explique comment augmenter la taille d'un disque supplémentaire et comment étendre la partition principale en conséquence.**

## Prérequis

- Une [instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre projet Public Cloud.
- Un [disque supplémentaire](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) créé dans votre projet.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Avoir un accès administratif (root) à votre instance via SSH (Linux) ou RDP (Windows).

## En pratique

Les étapes suivantes supposent que vous avez déjà configuré un disque supplémentaire selon les intrusctions de [notre guide](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance).

### Modifier la taille du disque

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et ouvrez votre projet `Public Cloud`{.action}. Cliquez ensuite sur `Block Storage`{.action} dans le menu de gauche.

Si le volume est attaché à une **instance Windows**, cliquez sur le bouton `...`{.action} à droite du volume concerné et sélectionnez `Détacher de l'instance`{.action}.

Cliquez sur le bouton `...`{.action} à droite du volume concerné et sélectionnez `Editer`{.action}.

![tableau de bord](images/increase-disk-02.png){.thumbnail}

Dans la fenêtre qui apparaît, indiquez la nouvelle taille du volume et cliquez sur `Modifier le volume`{.action}.

![tableau de bord](images/increase-disk-03.png){.thumbnail}

Assurez-vous que le volume est attaché à votre instance avant de continuer. Si ce n'est pas le cas, cliquez sur `...`{.action} dans la ligne du volume et sélectionnez `Attacher à l'instance`{.action}.

### Etendre la partition (instance Linux)

Ouvrez une connexion SSH à votre instance pour ajuster la partition au disque redimensionné.

Démontez d’abord le disque en utilisant cette commande :

```bash
admin@server:~$ sudo umount /mnt/disk
```

Recréez la partition :

```bash
admin@server:~$ sudo fdisk /dev/vdb
```

```console
Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command
```

```console
Command (m for help): d

Selected partition 1
Partition 1 has been deleted.
```

```console
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-146800639, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-146800639, default 146800639):

Created a new partition 1 of type 'Linux' and of size 70 GiB.
```

```console
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Vérifiez la partition :

```bash
admin@server:~$ sudo e2fsck -f /dev/vdb1

e2fsck 1.42.12 (29-août-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdb: 12/3276800 files (0.0% non-contiguous), 251700/13107200 blocks
```

```bash
admin@server:~$ sudo resize2fs /dev/vdb1

resize2fs 1.42.12 (29-Aug-2014)
Resizing the filesystem on /dev/vdb to 18350080 (4k) blocks.
The filesystem on /dev/vdb is now 18350080 (4k) blocks long.
```

Enfin, remontez et vérifiez le disque :

```bash
admin@server:~$ sudo mount /dev/vdb1 /mnt/disk/
```

```bash
admin@server:~$ df -h
Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 69G 52M 66G 1% /mnt/disk
```

### Etendre la partition (instance Windows)

Établissez une connexion RDP (Remote Desktop) sur votre instance Windows.

Une fois connecté, faites un clic-droit sur le bouton `Démarrer`{.action} et ouvrez la `Gestion des disques`{.action}.

![windows](images/resize-win-01.png){.thumbnail}

Le disque étendu affiche désormais la capacité supplémentaire sous forme d'espace non alloué.

![windows](images/resize-win-02.png){.thumbnail}

Faites un clic-droit sur le volume et sélectionnez `Étendre le volume`{.action} dans le menu contextuel.

![windows](images/resize-win-03.png){.thumbnail}

Dans l'assistant d'extension de volume, cliquez sur `Suivant`{.action} pour continuer.

Vous pouvez modifier l'espace disque à cette étape si vous souhaitez ajouter une capacité moindre que la totalité de la partition.

Cliquez sur `Suivant`{.action}.

![windows](images/resize-win-04.png){.thumbnail}

Cliquez sur `Terminer`{.action} pour terminer le processus.

Le volume redimensionné inclut désormais l'espace disque supplémentaire.

![windows](images/resize-win-05.png){.thumbnail}

## Aller plus loin

[Créer et configurer un disque additionnel sur une instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.