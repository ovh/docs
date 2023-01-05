---
title: 'Créer et configurer un disque supplementaire sur une instance'
slug: creer-et-configurer-un-disque-supplementaire-sur-une-instance
excerpt: 'Découvrez comment attacher un nouveau volume à votre instance Public Cloud'
legacy_guide_number: 1863
section: 'Stockage'
order: 1
---

**Dernière mise à jour le 04/01/2023**

## Objectif

Vous pouvez créer des disques supplémentaires pour vos instances Public Cloud.
Cela peut être utile dans les cas suivants :

- Si vous souhaitez augmenter votre capacité de stockage sans avoir à changer le modèle d’instance.
- Si vous souhaitez disposer d’un espace de stockage hautement disponible et performant.
- Si vous souhaitez déplacer votre stockage et vos données vers une autre instance.

**Découvrez comment créer un disque supplémentaire et le configurer sur votre instance.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Disposer d'une instance [Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/){.external} dans votre compte OVHcloud
- Avoir un accès administrateur (root) à votre instance via SSH

> [!warning]
> Cette fonctionnalité n'est actuellement pas disponible pour les instances Metal.
>

## En pratique

### Attacher un nouveau volume

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Ensuite, ouvrez `Block Storage`{.action} dans le menu de gauche.

Dans cette partie, cliquez sur le bouton `Créer un volume`{.action}.

![sélectionner le projet](images/avolume01.png){.thumbnail}

Suivez les étapes de configuration afin de sélectionner les options d'emplacement, de type de disque et de capacité de disque. Renseignez un nom pour le volume et validez en cliquant sur `Créer le volume`{.action}.

![create disk](images/avolume02.png){.thumbnail}

Le nouveau disque s’affichera alors dans l’espace client.

![configure disk](images/avolume03.png){.thumbnail}

À droite du volume, cliquez sur le bouton `...`{.action} puis sélectionnez `Attacher à l'instance`{.action}.

![attach disk 01](images/avolume04.png){.thumbnail}

Dans la fenêtre qui apparaît, choisissez une instance dans la liste et cliquez sur `Confirmer`{.action} pour attacher le disque.

![attach disk 02](images/avolume05.png){.thumbnail}

Le processus d’attachement du disque à votre instance va alors commencer. L'opération peut prendre quelques minutes.

> [!warning]
> Veillez à ne pas quitter la page actuelle de votre espace client OVHcloud lorsque le disque est en cours de connexion. Cela pourrait interrompre le processus.
>

### Configuration du nouveau disque

Les exemples ci-dessous supposent que vous êtes connecté en tant qu'utilisateur avec des autorisations suffisantes.

#### Sous Linux

Ouvrez une [connexion SSH à votre instance](https://docs.ovh.com/fr/public-cloud/premiers-pas-instance-public-cloud/#etape-4-connexion-a-votre-instance), puis utilisez la commande ci-dessous pour lister les disques attachés.

```bash
~$ admin@server-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
> Dans cet exemple, `vda` fait référence au disque par défaut de l'instance. Le disque additionnel sera alors nommé `vdb`.
>

Créez une partition sur le disque supplémentaire via les commandes ci-dessous.

```bash
~$ admin@server-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
```

```bash
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

```bash
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Formatez ensuite la nouvelle partition `vdb1` à l’aide de la commande ci-dessous :

```bash
~$ admin@server-1:~$ sudo mkfs.ext4 /dev/vdb1
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

Montez la partition avec les commandes suivantes :

```bash
admin@server-1:~$ sudo mkdir /mnt/disk
admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```

Enfin, vérifiez le point de montage à l’aide de cette commande :

```bash
~$ admin@server-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

> [!primary]
>
> Le montage n'est pas persistant car le disque sera détaché au redémarrage de l'instance. Afin d'automatiser le montage, il est nécessaire d'éditer le fichier `fstab`.
>

Récupérez tout d'abord l'UUID (block ID) du nouveau volume :

```bash
~$ admin@server-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Ouvrez `/etc/fstab` avec un éditeur de texte :

```
~$ sudo nano /etc/fstab
```

Ajoutez la ligne ci-dessous au fichier et remplacez l'UUID par le vôtre :

```console
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

Enregistrez et quittez l'éditeur. Le disque devrait alors être automatiquement monté à chaque redémarrage.

#### Sous Windows

Établissez une connexion RDP (Remote Desktop) avec votre instance Windows.

Une fois connecté, faites un clic-droit sur le bouton `Démarrer`{.action} et ouvrez `Gestion des disques`{.action}.

![disk management](images/start-menu.png){.thumbnail}

Le nouveau disque sera affiché en tant que volume inconnu avec de l'espace non alloué.

![volume inconnu](images/disk-management-01.png){.thumbnail}

Si le disque est indiqué ici comme étant hors-ligne, il doit d'abord être initialisé. Pour ce faire, vous pouvez utiliser l'[interface utilisateur Windows](#initDiskManagement) ou l'[utilitaire DISKPART](#initDiskpart). Sinon, procédez au [formatage du disque dans Gestion des disques](#formatDiskManagement).

##### **Initialiser le disque dans Gestion des disques** <a name="initDiskManagement"></a>

Faites un clic-droit sur le disque et sélectionnez `En ligne`{.action}. 

Si le disque est indiqué ici comme étant hors-ligne, cela est probablement dû à une politique en place sur l'instance. Pour résoudre ce problème, faites un clic-droit sur le disque et sélectionnez `En ligne`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Effectuez à nouveau un clic-droit et sélectionnez cette fois-ci `Initialiser le disque`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

Ensuite, sélectionnez `MBR`{.action} puis cliquez sur `OK`{.action}.

![initialise disk](images/initialise-disk.png){.thumbnail}

##### **Initialiser le disque avec DISKPART** <a name="initDiskpart"></a>

Faites un clic-droit sur le bouton `Démarrer`{.action} et ouvrez `Exécuter`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Tapez `cmd` et cliquez sur `OK`{.action} pour ouvrir l'application de ligne de commande.

![run prompt](images/run-prompt.png){.thumbnail}

À l'invite de commande, ouvrez DISKPART :

```
C:\> diskpart
```

Utilisez la série de commandes DISKPART suivante pour mettre le disque `en ligne` :

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system .

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

##### **Formatage du disque** <a name="formatDiskManagement"></a>

Dans l'outil `Gestion des disques`{.action}, faites un clic droit sur le nouveau disque et sélectionnez `Nouveau volume simple...`{.action}.

![format disk](images/format-disk-01.png){.thumbnail}

Dans l'assistant, cliquez sur `Suivant`{.action} pour spécifier la taille du volume. Par défaut, il doit être au maximum. Cliquez sur `Suivant`{.action} pour continuer.

![format disk](images/format-disk-03.png){.thumbnail}

Laissez la nouvelle lettre de lecteur par défaut ou sélectionnez-en une autre, puis cliquez sur `Suivant`{.action}.

![format disk](images/format-disk-04.png){.thumbnail}

Nommez le volume (facultatif) et confirmez les options de formatage en cliquant sur `Suivant`{.action}.

![format disk](images/format-disk-05.png){.thumbnail}

Dans la dernière fenêtre, cliquez sur `Terminer`{.action} pour formater le disque.

![format disk](images/format-disk-06.png){.thumbnail}

Le disque sera par la suite disponible en tant que lecteur dans l'explorateur de fichiers.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
