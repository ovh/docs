---
title: Créer et configurer un disque supplementaire sur une instance
excerpt: Découvrez comment attacher un nouveau volume à votre instance Public Cloud
updated: 2024-12-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Vous pouvez créer des disques supplémentaires pour vos instances Public Cloud.
Cela peut être utile dans les cas suivants :

- Si vous souhaitez augmenter votre capacité de stockage sans avoir à changer le modèle d’instance.
- Si vous souhaitez disposer d’un espace de stockage hautement disponible et performant.
- Si vous souhaitez déplacer votre stockage et vos données vers une autre instance.
- Si vous souhaitez préparer l'environnement pour utiliser [Terraform](/pages/public_cloud/compute/how_to_use_terraform), vous devez préparer l'environnement.

**Découvrez comment créer un disque supplémentaire et le configurer sur votre instance.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager)
- Disposer d'une instance [Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps){.external} dans votre compte OVHcloud
- Avoir un accès administrateur (sudo) à votre instance via SSH
- Préparer l'environnement si vous souhaitez utiliser [Terraform](/pages/public_cloud/compute/how_to_use_terraform)

> [!warning]
> Cette fonctionnalité n'est actuellement pas disponible pour les instances Metal.
>

## En pratique

### Attacher un nouveau volume

> [!tabs]
> **Via l'espace client OVHcloud**
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Ensuite, ouvrez `Block Storage`{.action} dans le menu de gauche.
>>
>> Dans cette partie, cliquez sur le bouton `Créer un volume`{.action}.
>>
>> ![sélectionner le projet](images/avolume01.png){.thumbnail}
>>
>> Suivez les étapes de configuration afin de sélectionner les options d'emplacement, de type de disque et de capacité de disque. Renseignez un nom pour le volume et validez en cliquant sur `Créer le volume`{.action}.
>>
>> ![create disk](images/avolume02.png){.thumbnail}
>>
>> Le nouveau disque s’affichera alors dans l’espace client.
>>
>> ![configure disk](images/avolume03.png){.thumbnail}
>>
>> À droite du volume, cliquez sur le bouton `...`{.action} puis sélectionnez `Attacher à l'instance`{.action}.
>>
>> ![attach disk 01](images/avolume04.png){.thumbnail}
>>
>> Dans la fenêtre qui apparaît, choisissez une instance dans la liste et cliquez sur `Confirmer`{.action} pour attacher le disque.
>>
>> ![attach disk 02](images/avolume05.png){.thumbnail}
>>
>> Le processus d’attachement du disque à votre instance va alors commencer. L'opération peut prendre quelques minutes.
>>
>> > [!warning]
>> > Veillez à ne pas quitter la page actuelle de votre espace client OVHcloud lorsque le disque est en cours de connexion. Cela pourrait interrompre le processus.
>> >
>>
> **Via Terraform**
>> Pour créer un volume block storage simple, vous avez besoin de 3 éléments :
>>
>> * Le nom du volume
>> * La région
>> * La taille du volume en GB
>>
>> Dans notre exemple, nous allons créer un block storage dans la région **GRA11** d'une taille de **10 GB**. Ajoutez les lignes suivantes dans un fichier nommé *simple_blockstorage.tf* :
>>
>> ```python
>> # Création d'un volume block storage
>> resource "openstack_blockstorage_volume_v3" "terraform_blockstorage" {
>>   name   = "terraform_blockstorage" # Nom du volume block storage
>>   size   = 10                       # Taille du volume
>>   region = "GRA11"                  # Région ou le volume doit être crée
>> }
>> ```
>>
>> Puis nous allons l'attacher à l'instance cible.
>>
>> > [!warning]
>> > L'instance et le volume doivent se trouver dans la même région.
>> >
>>
>> Ajoutez les lignes suivantes sous les précédentes :
>>
>> ```python
>> # Attacher le volume à l'instance
>> resource "openstack_compute_volume_attach_v2" "volume_attach" {
>>   instance_id = "<votre_instance_id>"
>>   volume_id   = openstack_blockstorage_volume_v3.terraform_volume.id
>> }
>> ```
>>
>> Vous pouvez créer votre volume de type block storage et l'attacher à l'instance voulue en entrant la commande suivante : 
>>
>> ```console
>> terraform apply
>> ```
>>
>> La sortie devrait ressembler à ceci :
>> 
>> ```console
>> $ terraform apply
>> Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
>>   + create
>>
>> Terraform will perform the following actions:
>>
>>   # openstack_blockstorage_volume_v3.terraform_blockstorage will be created
>>   + resource "openstack_blockstorage_volume_v3" "terraform_blockstorage" {
>>       + attachment        = (known after apply)
>>       + availability_zone = (known after apply)
>>       + id                = (known after apply)
>>       + metadata          = (known after apply)
>>       + name              = "terraform_blockstorage"
>>       + region            = "GRA11"
>>       + size              = 10
>>       + volume_type       = (known after apply)
>>     }
>>
>>   # openstack_compute_volume_attach_v2.volume_attach will be created
>>   + resource "openstack_compute_volume_attach_v2" "volume_attach" {
>>       + device      = (known after apply)
>>       + id          = (known after apply)
>>       + instance_id = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780"
>>       + region      = (known after apply)
>>       + volume_id   = (known after apply)
>>     }
>>
>> Plan: 2 to add, 0 to change, 0 to destroy.
>>
>> Do you want to perform these actions in workspace "test_terraform"?
>>   Terraform will perform the actions described above.
>>   Only 'yes' will be accepted to approve.
>>
>>   Enter a value: yes
>>
>> openstack_blockstorage_volume_v3.terraform_blockstorage: Creating...
>> openstack_blockstorage_volume_v3.terraform_blockstorage: Still creating... [10s elapsed]
>> openstack_blockstorage_volume_v3.terraform_blockstorage: Creation complete after 12s [id=daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>> openstack_compute_volume_attach_v2.volume_attach: Creating...
>> openstack_compute_volume_attach_v2.volume_attach: Still creating... [10s elapsed]
>> openstack_compute_volume_attach_v2.volume_attach: Creation complete after 14s [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>>
>> Apply complete! Resources: 2 added, 0 changed, 0 destroyed.
>> ```

### Configuration du nouveau disque

Les exemples ci-dessous supposent que vous êtes connecté en tant qu'utilisateur avec des autorisations suffisantes.

#### Sous Linux

Ouvrez une [connexion SSH à votre instance](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance), puis utilisez la commande ci-dessous pour lister les disques attachés.

```bash
lsblk
```

```console
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

Si votre disque additionnel est inférieur à 2TB:

```bash
sudo fdisk /dev/vdb
```

```console
Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.

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

Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Si votre disque additionnel est supérieur à 2TB:

```bash
sudo parted /dev/vdb
```

```console
GNU Parted 3.5
Using /dev/vdb
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) help                                                             
  align-check TYPE N                       check partition N for TYPE(min|opt) alignment
  help [COMMAND]                           print general help, or help on COMMAND
  mklabel,mktable LABEL-TYPE               create a new disklabel (partition table)
  mkpart PART-TYPE [FS-TYPE] START END     make a partition
  name NUMBER NAME                         name partition NUMBER as NAME
  print [devices|free|list,all]            display the partition table, or available devices, or free space, or all found partitions
  quit                                     exit program
  rescue START END                         rescue a lost partition near START and END
  resizepart NUMBER END                    resize partition NUMBER
  rm NUMBER                                delete partition NUMBER
  select DEVICE                            choose the device to edit
  disk_set FLAG STATE                      change the FLAG on selected device
  disk_toggle [FLAG]                       toggle the state of FLAG on selected device
  set NUMBER FLAG STATE                    change the FLAG on partition NUMBER
  toggle [NUMBER [FLAG]]                   toggle the state of FLAG on partition NUMBER
  unit UNIT                                set the default unit to UNIT
  version                                  display the version number and copyright information of GNU Parted
(parted) mklabel pt                                                      
(parted) mkpart primary 0 3750G                                           
Warning: The resulting partition is not properly aligned for best performance: 34s % 2048s != 0s
Ignore/Cancel? I                                                          
(parted) quit
```

Formatez ensuite la nouvelle partition `vdb1` à l’aide de la commande ci-dessous :

```bash
sudo mkfs.ext4 /dev/vdb1
```

```console
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
sudo mkdir /mnt/disk
sudo mount /dev/vdb1 /mnt/disk/
```

Enfin, vérifiez le point de montage à l’aide de cette commande :

```bash
df -h
```

```console
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
sudo blkid
```

```console
/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Ouvrez `/etc/fstab` avec un éditeur de texte :

```bash
sudo nano /etc/fstab
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

Ensuite, sélectionnez `MBR`{.action} si votre disque additionnel est inférieur à 2TB, ou `GPT`{.action} s'il est supérieur à 2TB, puis cliquez sur `OK`{.action}.

![Alt text](images/initialize_disk.png){.thumbnail}

##### **Initialiser le disque avec DISKPART** <a name="initDiskpart"></a>

Faites un clic-droit sur le bouton `Démarrer`{.action} et ouvrez `Exécuter`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Tapez `cmd` et cliquez sur `OK`{.action} pour ouvrir l'application de ligne de commande.

![run prompt](images/run-prompt.png){.thumbnail}

À l'invite de commande, ouvrez DISKPART :

```console
C:\> diskpart
```

Utilisez la série de commandes DISKPART suivante pour mettre le disque `en ligne` :

```console
DISKPART> san

SAN Policy : Offline Shared

DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system .

- Implementation of the strategy on the extra disk:
[Code] DISKPART> list disk

Disk ### Status Size Free Dyn Gpt
-------- ------------- ------- ------- --- ---
Disk 0 Online 200 GB 0 B
* Disk 1 Offline 10 GB 1024 KB

DISKPART> select disk 1

Disk 1 is now the selected disk.

DISKPART> attributes disk clear readonly

Disk attributes cleared successfully.

DISKPART> attributes disk

Current Read-only State : No
Read-only : No
Boot Disk : No
Pagefile Disk : No
Hibernation File Disk : No
Crashdump Disk : No
Clustered Disk : No

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

### Détacher un volume

Si vous souhaitez détacher un volume de votre instance, la meilleure pratique est de démonter le volume du système d'exploitation avant de le détacher de l'instance.

> [!warning]
>
> Un message d'erreur peut s'afficher si des logiciels ou processus sont en cours d'exécution sur le disque supplémentaire. Dans ce cas, il est recommandé d'arrêter tous les processus avant de continuer.
>

Voici comment **démonter le volume** du système d'exploitation avant de le détacher de l'instance :

> [!tabs]
> **Sous Linux**
>>
>> Ouvrez une [connexion SSH à votre instance](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) puis utilisez la commande ci-dessous pour lister les disques attachés.
>>
>> ```bash
>> lsblk
>> ```
>>
>> ```console
>> NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
>> vda 254:0 0 10G 0 disk
>> └─vda1 254:1 0 10G 0 part /
>> vdb       8:0    0   10G  0 disk
>> └─vdb1    8:1    0   10G  0 part /mnt/disk
>> ```
>>
>> Démontez la partition en utilisant la commande ci-dessous :
>>
>> ```bash
>> sudo umount /dev/vdb1
>> ```
>>
>> Supprimez l'ID de périphérique du fstab pour terminer le processus de démontage. Si ce n'est pas fait, la partition sera remontée après un redémarrage.
>>
>> ```bash
>> sudo nano /etc/fstab
>> ```
>>
>> Enregistrez et quittez l'éditeur.
>>
> **Sous Windows**
>>
>> Établissez une connexion RDP (Remote Desktop) avec votre instance Windows.
>>
>> Une fois connecté faites un clic-droit sur le menu `Démarrer`{.action} et ouvrez `Gestion du disque`{.action}.
>>
>> ![gestion des disques](images/start-menu.png){.thumbnail}
>>
>> Faites un clic-droit sur le volume que vous souhaitez démonter et sélectionnez `Modifier la lettre de lecteur et les chemins d'accès...`{.action}.
>>
>> ![unmount disk](images/unmountdisk.png){.thumbnail}
>>
>> Cliquez sur `Supprimer`{.action} pour retirer le disque.
>>
>> ![remove disk](images/changedriveletter.png){.thumbnail}
>>
>> Cliquez ensuite sur `Oui`{.action} pour confirmer la suppression de la lettre du lecteur de disque.
>>
>> ![confirm remove disk](images/confirmunmounting.png){.thumbnail}
>>
>> Lorsque vous avez terminé, vous pouvez fermer la fenêtre de gestion de disque.

Pour finir, nous allons détacher le volume de l'instance : 

> [!tabs]
> **Via l'espace client OVHcloud**
>> Rendez-vous dans la rubrique `Public Cloud`{.action} de votre espace client OVHcloud et cliquez sur `Block Storage`{.action} dans le menu de gauche sous **Storage**.
>> Cliquez sur le bouton `...`{.action} à côté du volume correspondant et sélectionnez `Détacher de l'instance`{.action}.
>>
>> ![detach disk](images/detachinstance.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action} dans la fenêtre qui s'affiche pour lancer le processus.
>>
>> ![confirm disk detach](images/confirminstancedetach.png){.thumbnail}
>>
> **Via Terraform**
>> 
>> Commencez par supprimer ces lignes précédemment crées dans votre fichier Terraform : 
>>
>> ```python
>> # Attacher le volume à l'instance
>> resource "openstack_compute_volume_attach_v2" "volume_attach" {
>>   instance_id = "<votre_instance_id>"
>>   volume_id   = openstack_blockstorage_volume_v3.terraform_volume.id
>> }
>> ```
>>
>> Veuillez entrer la commande suivante pour vérifier si la ressource correcte va être supprimée :
>>
>> ```console
>> terraform plan
>> ```
>>
>> La sortie devrait ressembler à ceci :
>>
>> ```console
>> $ terraform plan
>> openstack_compute_volume_attach_v2.va_1: Refreshing state... [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>> openstack_blockstorage_volume_v3.terraform_volume: Refreshing state... [id=daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>>
>> Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
>>   - destroy
>>
>> Terraform will perform the following actions:
>>
>>   # openstack_compute_volume_attach_v2.va_1 will be destroyed
>>   # (because openstack_compute_volume_attach_v2.va_1 is not in configuration)
>>   - resource "openstack_compute_volume_attach_v2" "va_1" {
>>       - device      = "/dev/sdb" -> null
>>       - id          = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806" -> null
>>       - instance_id = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780" -> null
>>       - region      = "GRA11" -> null
>>       - volume_id   = "daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806" -> null
>>     }
>> 
>> Plan: 0 to add, 0 to change, 1 to destroy.
>> ```
>>
>> Puis appliquer les changements en entrant cette commande :
>>
>> ```console
>> terraform apply
>> ```
>>
>> La sortie devrait ressembler à ceci :
>>
>> ```console
>> $ terraform apply
>> openstack_compute_volume_attach_v2.va_1: Refreshing state... [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>> openstack_blockstorage_volume_v3.terraform_volume: Refreshing state... [id=daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>>
>> Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
>>   - destroy
>>
>> Terraform will perform the following actions:
>>
>>   # openstack_compute_volume_attach_v2.va_1 will be destroyed
>>   # (because openstack_compute_volume_attach_v2.va_1 is not in configuration)
>>   - resource "openstack_compute_volume_attach_v2" "va_1" {
>>       - device      = "/dev/sdb" -> null
>>       - id          = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806" -> null
>>       - instance_id = "11cc1279-xxxx-xxxx-xxxx-3ace4c954780" -> null
>>       - region      = "GRA11" -> null
>>       - volume_id   = "daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806" -> null
>>     }
>>
>> Plan: 0 to add, 0 to change, 1 to destroy.
>> 
>> Do you want to perform these actions in workspace "test_terraform"?
>>   Terraform will perform the actions described above.
>>   Only 'yes' will be accepted to approve.
>>
>>   Enter a value: yes
>>
>> openstack_compute_volume_attach_v2.va_1: Destroying... [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806]
>> openstack_compute_volume_attach_v2.va_1: Still destroying... [id=11cc1279-xxxx-xxxx-xxxx-3ace4c954780/daf3a86e-xxxx-xxxx-xxxx-ac7b6ffbb806, 10s elapsed]
>> openstack_compute_volume_attach_v2.va_1: Destruction complete after 17s
>>
>> Apply complete! Resources: 0 added, 0 changed, 1 destroyed.
>> ```

## Aller plus loin

[Augmenter la taille d’un disque supplémentaire](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk)

Échangez avec notre [communauté d'utilisateurs](/links/community).
