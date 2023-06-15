---
title: Afficher les logs de boot dans le KVM
slug: affichage-bootlog-dans-kvm
excerpt: 'Découvrez comment diagnostiquer un VPS en consultant les logs de démarrage (boot logs)'
section: Diagnostic et mode Rescue
updated: 2021-07-05
---

**Dernière mise à jour le 05/07/2021**

## Objectif

Si votre VPS ne répond plus, vous devriez toujours pouvoir y accéder depuis votre espace client via le [KVM](../utilisation-kvm-sur-vps/). Le moyen le plus rapide de diagnostiquer le problème est de vérifier les logs de démarrage (boot logs) du serveur. Toutefois, la configuration GRUB doit être modifiée pour que ces logs apparaissent. 

> [!primary]
>
> Veuillez noter que dans certains environnements, le KVM ne vous fournira aucune information utile car la séquence de démarrage apparaît dans le port série où le GRUB est configuré en mode silencieux.
>

**Ce guide explique comment activer les logs de boot qui peuvent vous aider à dépanner un VPS.**

> [!warning]
> OVHcloud vous fournit des services dont vous êtes responsable en ce qui concerne leur configuration et leur gestion. Vous êtes donc responsable de leur bon fonctionnement.
>
>Si vous rencontrez des difficultés pour effectuer ces actions, veuillez contacter un prestataire de services spécialisé et/ou échanger avec notre communauté d'utilisateurs sur <https://community.ovh.com/>. OVHcloud ne pourra pas vous fournir de support technique à cet égard.
>

## Prérequis

- disposer d'un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- disposer d'un accès à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

> [!warning]
>
> Ces modifications vont changer la configuration du GRUB. Veillez à effectuer des sauvegardes de toutes vos données importantes avant toute modification, OVHcloud ne pouvant être tenu responsable de l’endommagement ou de la perte des données suite à ces manipulations.
>

Si vous avez toujours accès à votre VPS via SSH, vous pouvez passer à [l'étape 6](#step6).

### Étape 1 : redémarrer le VPS en mode rescue

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et lancez un redémarrage du serveur en mode rescue. Si nécessaire, consultez notre [guide sur le mode rescue](../mode-rescue-vps/).

### Étape 2 : effectuer la vérification initiale

Sur les anciennes gammes de VPS, vos partitions seront automatiquement montées en mode rescue. Vous pouvez utiliser les commandes suivantes pour le vérifier et identifier l'emplacement de montage de votre partition :

#### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

#### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

L'exemple obtenu ci-dessus montre que la partition système est montée sur **/mnt/sdb1**. (Le disque principal est **sdb**. Le disque rescue est **sda** et **sda1** est la partition principale en rescue montée sur **/**).

Si votre VPS appartient aux [**gammes VPS actuelles**](https://www.ovhcloud.com/fr/vps/), aucun montage automatique ne sera effectué et la colonne "MOUNTPOINT" devrait être vide. Dans ce cas, passez à [l'étape 4](#step4).

### Étape 3 : démonter la partition (uniquement pour les anciennes gammes VPS)

Sur un VPS appartenant aux anciennes gammes placé en mode rescue, le disque principal est déjà monté. Par conséquent, il doit d'abord être démonté avant de le remonter à l'étape 4 :

```sh
~$ umount /dev/sdb1
```

### Étape 4 : monter la partition avec les paramètres appropriés <a name="step4"></a>

Si votre VPS appartient aux [**gammes VPS actuelles**](https://www.ovhcloud.com/fr/vps/), vérifiez d'abord que le dossier de montage est créé :

```sh
~$ mkdir -p /mnt/sdb1
```

Entrez les commandes suivantes pour monter la partition avec les paramètres appropriés:

```sh
~$ mount /dev/sdb1 /mnt/sdb1
~$ mount -t proc none /mnt/sdb1/proc
~$ mount -o bind /dev /mnt/sdb1/dev
~$ mount -t sysfs none /mnt/sdb1/sys/
```

La partition système est maintenant montée pour être utilisée avec la commande `chroot`, afin d'exécuter des actions qui nécessitent l'accès aux répertoires `sys`, `dev` et `proc`.

### Étape 5 : utiliser la commande CHROOT pour configurer vos fichiers système

Vous devez maintenant accéder aux fichiers GRUB de votre système et les modifier. Pour ce faire, utilisez la commande `chroot` :

```sh
~$ chroot /mnt/sdb1
```

À partir de maintenant, toutes les commandes que vous entrez seront appliquées à votre VPS au lieu de l'environnement temporaire du mode rescue.

### Étape 6 : modifier la configuration GRUB <a name="step6"></a>

#### **Pour Debian 8 ou supérieur et Ubuntu 18 ou supérieur**

Créez une copie de sauvegarde du fichier de configuration :

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Pour accéder aux logs de boot à l'aide de la console KVM, assurez-vous que vous disposez de la valeur suivante dans le fichier `/etc/default/grub` :

```sh
GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"
```

Si cette ligne est manquante ou différente, modifiez le fichier avec un éditeur et enregistrez-le.

Utilisez ensuite la commande suivante pour régénérer le fichier de configuration GRUB (les modifications seront enregistrées pour le prochain redémarrage) :

```sh
~$ update-grub
```

#### **Pour CentOS 7 ou supérieur (grub2)**

Créez une copie de sauvegarde du fichier de configuration :

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Pour accéder aux logs de boot à l'aide de la console KVM, assurez-vous que vous disposez des valeurs suivantes dans le fichier `/etc/default/grub` :

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 no_timer_check net.ifnames=0 crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

Si ces lignes sont manquantes ou différentes, modifiez le fichier avec un éditeur et enregistrez-le.

Utilisez ensuite la commande suivante pour régénérer le fichier de configuration GRUB (les valeurs seront enregistrées pour le prochain redémarrage) :

```sh
~$ grub2-mkconfig -o "$(readlink /etc/grub.cfg)"
```

Une fois les modifications effectuées, redémarrez votre VPS en mode « normal » depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Les logs de boot doivent maintenant apparaître lors de l'utilisation de la [console KVM](../utilisation-kvm-sur-vps/).

## Aller plus loin

[Utiliser le KVM pour les VPS](../utilisation-kvm-sur-vps/)

[Activer le mode rescue sur un VPS](../mode-rescue-vps/)

Echangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
