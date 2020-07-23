---
title: Configurer un volume additionnel
slug: configurer-un-volume-additionnel
excerpt: Tutoriel de configuration d'un disque additionnel sur un serveur cloud dans l'offre Public Cloud
section: Stockage
order: 5
---


## Préambule
Vous avez probablement [créé un nouveau volume additionnel](../guide.fr-fr.md){.ref}, ou disque additionnel.

Ce guide vous explique comment créer un disque supplémentaire puis le rattacher sur l'une de vos instances.


### Prérequis
- Une [instance](../guide.fr-fr.md){.ref}
- Un [volume additionnel](../guide.fr-fr.md){.ref} rattaché


## Montage du disque

### Depuis une instance sous Linux
- Lister les disques

```bash
sudo fdisk -l /dev/vd*
```



> [!success]
>
> /dev/vda correspond généralement au disque de votre instance, /dev/vdb sera
> donc le premier volume supplémentaire.
> Certains systèmes d'exploitation reconnaissent les disques en utilisant un
> autre driver, ils apparaitront alors en /dev/sd*.
> 

- Créer une partition avec parted

```bash
sudo parted /dev/vdb
mktable gpt
mkpart primary ext4 512 100%
quit
```

- Formater la partition

```bash
sudo mkfs.ext4 /dev/vdb1
```

- Monter la partition

```bash
sudo mount /dev/vdb1 /mnt
```

- Vérification du montage

```bash
mount /dev/vdb1
```

> [!success]

**Pour un montage de disque persistant, il faudra modifier le fichier `/etc/fstab` :**

- Récupérer l'ID du bloc

```bash
$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

- Ajouter votre disque dans le fichier `/etc/fstab` :

```bash
$ sudo vim /etc/fstab

/etc/fstab: static file system information.
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point> <type> <options> <dump> <pass>
UUID=51ba13e7-398b-45f3-b5f3-fdfbe556f62c / ext4 defaults 0 0
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt ext4 nofail 0 0
```

### Depuis une instance sous Windows
- Accéder au l'outil de gestion de disque

![public-cloud](images/2736.png){.thumbnail}

- Formater le disque

![public-cloud](images/2737.png){.thumbnail}


Attention : Si le message "offline (the disk is offline because of policy set by an administrator)" apparaît, il faudra modifier les attributs des disques en effectuant un clic droit sur votre disque, puis sélectionner "Online" puis "Initialize" ou en utilisant Diskpart :

- Lancer Powershell ou une invite de commande
- Vérification de la stratégie appliquée
- Changer la stratégie
- Application de la stratégie sur le disque supplémentaire
- Initialiser le disque depuis le gestionnaire de disques puis procéder au formatage du disque.

Une fois le disque formaté, vous pourrez y accéder simplement depuis votre explorateur de fichiers.


![public-cloud](images/2738.png){.thumbnail}
