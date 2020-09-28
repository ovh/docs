---
title: 'Augmenter la taille d’un disque supplémentaire'
excerpt: 'Découvrez comment augmenter la taille d’un disque supplémentaire ainsi que celle de la partition principale.'
slug: augmenter-la-taille-dun-disque-supplementaire
legacy_guide_number: 1865
section: 'Stockage'
order: 6
---

**Dernière mise à jour le 14 novembre 2019**

## Objectif

Si vous avez atteint la capacité de stockage maximale de votre disque supplémentaire, vous pouvez toujours en augmenter la taille. 

**Ce guide vous explique comment augmenter la taille d’un disque supplémentaire ainsi que celle de la partition principale.**

## Prérequis

* Une [Instance Public Cloud](https://www.ovhcloud.com/fr/public-cloud/){.external} dans votre compte OVHcloud.
* Un [disque supplémentaire](https://www.ovhcloud.com/fr/public-cloud/block-storage/){.external} attaché à votre instance.
* Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
* Disposer d’un accès administratif (root) à votre instance via SSH (pour Linux uniquement).
* Disposer d’un accès administratif à votre instance via RDP (pour Windows uniquement).

## Intructions

### Utiliser l’espace client

Pour déployer une instance public cloud, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} et sélectionnez `Public Cloud`{.action} en haut à gauche. Sur l’écran qui s’affiche, cliquez sur la flèche à côté du nom par défaut de votre projet, en haut à gauche. Maintenant sélectionnez le projet dont vous souhaitez modifier la taille du disque supplémentaire.

![tableau de bord](images/select_project.png){.thumbnail}

Repérez votre disque Block Storage dans la section «Stockage» du menu de gauche.

![tableau de bord](images/increase-disk-02.png){.thumbnail}

Ensuite, cliquez sur les trois points à droite du disque et cliquez sur Modifier. Vous serez alors redirigé vers cette page où vous pourrez modifier la capacité du volume.

![tableau de bord](images/increase-disk-03.png){.thumbnail}

Lorsque vous avez terminé, cliquez sur le bouton `Modifier le volume`{.action}.


### Sous Linux

Vous devez tout d’abord démonter le disque en utilisant cette commande :

```
admin@server-1:~$ sudo unmount /mnt/disk
```

Recréez ensuite la partition.

```
admin@server-1:~$ sudo fdisk /dev/vdb
Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command
```

```
Command (m for help): d

Selected partition 1
Partition 1 has been deleted.
```

```
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

```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Ensuite, vérifiez à nouveau la partition.

```
#admin@server-1:~$ sudo e2fsck -f /dev/vdb1

e2fsck 1.42.12 (29-août-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdb: 12/3276800 files (0.0% non-contiguous), 251700/13107200 blocks
```

```
#admin@server-1:~$ sudo resize2fs /dev/vdb1

resize2fs 1.42.12 (29-Aug-2014)
Resizing the filesystem on /dev/vdb to 18350080 (4k) blocks.
The filesystem on /dev/vdb is now 18350080 (4k) blocks long.
```

Enfin, montez et vérifiez le disque.

```
#admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```

```
#admin@server-1:~$ df -h
Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 69G 52M 66G 1% /mnt/disk
```

### Sous Windows

Établissez une connexion RDP avec votre instance. Une fois connecté, faites un clic droit sur le `Menu Démarrer`{.action} puis cliquez sur `Gestion des disques`{.action}.

![windows](images/increase-disk-04.png){.thumbnail}

Lorsque l’outil de gestion des disques s’ouvre, vous verrez votre nouveau disque comme un volume inconnu avec de l'espace non alloué, comme indiqué ci-dessous :

![windows](images/increase-disk-05.png){.thumbnail}

Si le disque est hors ligne, une politique mise en œuvre sur l’instance en est probablement la cause. Pour résoudre ce problème, faites un clic droit sur le disque et sélectionnez En ligne.

![windows](images/increase-disk-06.png){.thumbnail}

> [!primary]
>
Selon votre version de Windows, vous devrez peut-être initialiser votre disque supplémentaire avant de pouvoir l'utiliser. Pour initialiser votre disque, faites à nouveau un clic droite sur celui-ci et sélectionnez cette fois `Initialiser le disque`{.action}.
>

Si le volume principal de votre disque est inférieur à la capacité totale du disque, faites un clic droit sur le volume puis cliquez sur `Étendre le volume`{.action}

![windows](images/increase-disk-07.png){.thumbnail}

L'Assistant Extension du volume s'affiche. Cliquez sur `Suivant`{.action} pour lancer l’assistant.

![windows](images/increase-disk-08.png){.thumbnail}

Augmentez maintenant le volume à la taille souhaitée et cliquez sur `Suivant`{.action} lorsque vous avez terminé.

![windows](images/increase-disk-09.png){.thumbnail}

Enfin, cliquez sur `Terminer`{.action} pour terminer la procédure.

![windows](images/increase-disk-10.png){.thumbnail}

## Aller plus loin

* [Créer et configurer un disque supplémentaire sur une instance](https://docs.ovh.com/fr/public-cloud/creer-et-configurer-un-disque-supplementaire-sur-une-instance/){.external}
* Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.
