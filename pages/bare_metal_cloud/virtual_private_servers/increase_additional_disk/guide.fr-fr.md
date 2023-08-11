---
title: "Augmenter la taille d’un disque additionnel"
excerpt: "Découvrez comment augmenter la taille d'un volume additionnel et agrandir sa partition principale"
updated: 2023-03-14
---

**Dernière mise à jour le 14/03/2023**

## Objectif

Si vous avez atteint la capacité maximale de votre disque additionnel, vous pouvez ajouter du stockage en augmentant sa taille.

**Ce guide explique comment augmenter la taille d'un disque additionnel et étendre la partition principale en conséquence.**

## Prérequis

- Un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud.
- Un [disque additionnel](/pages/bare_metal_cloud/virtual_private_servers/config_additional_disk) configuré sur le VPS.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Avoir accès à votre VPS en SSH ou en RDP pour l'administration.

## En pratique

Les étapes ci-dessous supposent que vous avez configuré un disque additionnel en suivant les instructions de [ce guide](/pages/bare_metal_cloud/virtual_private_servers/config_additional_disk).

### Modifier la taille du disque <a name="extend"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur parmi les `Serveurs Privés Virtuels`{.action}.

Dans le cadre **Résumé des options**, cliquez sur le bouton `...`{.action} dans la section `Disques additionnels`. Sélectionnez `Augmenter la taille du disque`{.action}.

![size-disk-vps](images/increase_disk_vps01.png){.thumbnail}

Choisissez la nouvelle taille de disque dans la fenêtre qui apparaît, puis cliquez sur `Augmenter`{.action}.

![size-disk-vps](images/increase_disk_vps02.png){.thumbnail}

Un message apparaîtra pour confirmer votre demande. Cliquez sur le lien à l'intérieur du message et suivez le processus de commande. Il est possible qu'un nouvel onglet de navigation pour la commande se soit ouvert automatiquement.

![size-disk-vps](images/increase_disk_vps03.png){.thumbnail}

L'augmentation de capacité du disque prendra quelques minutes après la validation du paiement. Vous pouvez vérifier la progression dans l'onglet `Disques additionnel`{.action} : si la nouvelle taille choisie est affichée, le disque est prêt.

![size-disk-vps](images/increase_disk_vps04.png){.thumbnail}

> [!warning]
>
> Sauvegardez vos données situées sur le disque additionnel avant de continuer.
>

### Extension de la partition

> [!warning]
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Nous mettons ce guide à votre disposition afin de vous accompagner au mieux sur les tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) ou de faire appel à [notre communauté](https://community.ovh.com/) si vous éprouvez des difficultés.
>

#### Sur un VPS Linux

> [!primary]
>
> Notez que cette section décrit une approche générale des étapes nécessaires, basée sur un système d'exploitation Ubuntu Server. Certaines commandes peuvent nécessiter une personnalisation pour la distribution que vous utilisez.
>

Si une distribution GNU/Linux est installée sur votre VPS, établissez une connexion SSH à votre serveur à partir du terminal de ligne de commande ou en utilisant une application cliente SSH.

Les exemples ci-dessous supposent que vous êtes connecté en tant qu'utilisateur avec des autorisations élevées.

Assurez-vous que le disque n'est pas monté à l'aide de la commande suivante :

```bash
ubuntu@server:~$ sudo umount /mnt/disk
```

Remplacez `/mnt/disk` par votre chemin de montage réel vers le disque additionnel, si nécessaire.

Déterminez les noms des disques et des partitions :

```bash
ubuntu@server:~$ lsblk
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
loop0     7:0    0  63.2M  1 loop /snap/core20/1623
loop1     7:1    0  63.3M  1 loop /snap/core20/1828
loop2     7:2    0 111.9M  1 loop /snap/lxd/24322
loop3     7:3    0  49.8M  1 loop /snap/snapd/18357
loop4     7:4    0   103M  1 loop /snap/lxd/23541
sda       8:0    0   160G  0 disk
├─sda1    8:1    0 159.9G  0 part /
├─sda14   8:14   0     4M  0 part
└─sda15   8:15   0   106M  0 part /boot/efi
sdc       8:32   0   100G  0 disk
└─sdc1    8:33   0    50G  0 part 
```

Dans cet exemple, le disque est nommé `sdc` et il a la nouvelle taille de disque correcte de 100 Go après la mise à niveau expliquée dans la [première partie](#extend) de ce guide. La partition `sdc1` existe sur le disque et utilise 50 Go.

Recréez la partition sur le disque en exécutant `fdisk` :

```bash
ubuntu@server:~$ sudo fdisk /dev/sdc
```

Entrez les commandes suivantes à l'invite `fdisk` :

```console
Welcome to fdisk (util-linux 2.37.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Command (m for help): d
Selected partition 1
Partition 1 has been deleted.

Command (m for help): n
```

Confirmez chacune des valeurs par défaut en appuyant sur `Entrée` :

```console
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
Select (default p):

Using default response p.
Partition number (1-4, default 1):
First sector (2048-209715199, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-209715199, default 209715199):

Created a new partition 1 of type 'Linux' and of size 100 GiB.
```

Saisissez `n` et enfin `w` :

```console
Partition #1 contains a ext4 signature.

Do you want to remove the signature? [Y]es/[N]o: n

Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Vérifiez la partition et étendez le système de fichiers :

```bash
ubuntu@server:~$ sudo e2fsck -f /dev/sdc1
e2fsck 1.46.5 (30-Dec-2021)
/dev/sdc1: recovering journal
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sdc1: 11/3276800 files (0.0% non-contiguous), 284558/13106944 blocks
```
```bash
ubuntu@server:~$ sudo resize2fs /dev/sdc1
resize2fs 1.46.5 (30-Dec-2021)
Resizing the filesystem on /dev/sdc1 to 26214144 (4k) blocks.
The filesystem on /dev/sdc1 is now 26214144 (4k) blocks long.
```

Enfin, montez le disque :

```bash
ubuntu@server:~$ sudo mount /dev/sdc1 /mnt/disk/
```

La partition 1 utilise maintenant la taille maximale du disque.

```bash
ubuntu@server:~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           776M  992K  776M   1% /run
/dev/sda1       155G  2.2G  153G   2% /
tmpfs           3.8G     0  3.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
/dev/sda15      105M  5.3M  100M   5% /boot/efi
tmpfs           776M  4.0K  776M   1% /run/user/1000
/dev/sdc1        99G   24K   94G   1% /mnt/disk
```

#### Sur un VPS Windows

Si un OS Windows est installé sur votre VPS, établissez une connexion RDP (Remote Desktop) avec votre serveur.

Une fois connecté, faites un clic droit sur le bouton `Menu Démarrer`{.action} et ouvrez `Gestion des disques`{.action}.

![winmountdiskvps](images/increase_disk_vps05.png){.thumbnail}

Le [disque étendu](#extend) affiche la capacité supplémentaire sous forme d'espace non alloué. Faites un clic droit sur le volume de votre disque additionnel et sélectionnez `Étendre le volume`{.action} dans le menu contextuel.

![winmountdiskvps](images/increase_disk_vps06.png){.thumbnail}

Dans l'assistant d'extension de volume, cliquez sur `Suivant`{.action} pour continuer.

Vous pourrez modifier l'espace disque à cette étape si cela est nécessaire. Cliquez sur `Suivant`{.action}.

![winmountdiskvps](images/increase_disk_vps07.png){.thumbnail}

Cliquez sur `Terminer`{.action} pour terminer le processus.

Le volume redimensionné inclut désormais l'espace disque additionnel.

![winmountdiskvps](images/increase_disk_vps08.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
