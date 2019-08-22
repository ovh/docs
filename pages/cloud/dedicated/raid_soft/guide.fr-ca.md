---
title: 'Le RAID logiciel'
slug: raid-soft
excerpt: 'Apprenez à configurer la baie RAID de votre serveur en cas de panne ou de corruption de disque'
section: 'RAID & disques'
---

**Dernière mise à jour le 23/05/2019**

## Objectif

Le RAID (Redundant Array of Independent Disks) est un ensemble de techniques prévues pour atténuer la perte de données sur un serveur en répliquant celles-ci sur plusieurs disques.

Le niveau RAID par défaut pour les installations de serveurs OVH est RAID 1, ce qui double l'espace occupé par vos données, réduisant ainsi de moitié l'espace disque utilisable.

**Ce guide va vous aider à configurer la matrice RAID de votre serveur dans l'éventualité où elle doit être reconstruite en raison d'une corruption ou d'une panne de disque.**

## Prérequis

* Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external} avec une configuration RAID logiciel.
* Avoir accès à votre serveur via SSH en tant qu'administrateur (root).

## En pratique

La vérification de l’état actuel du RAID s’effectue via la commande suivante :

```sh
cat /proc/mdstat

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 
md2 : active raid1 sdb2[1] sda2[0] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

Cette commande montre deux matrices RAID actuellement configurées, « md2 » étant la plus grande partition. Une partition se compose de trois disques, appelés « sda2 », « sdb2 » et « sdc2 ». Le \[UUU] signifie que tous les disques fonctionnent normalement. Un « F » indiquerait un disque défectueux.

Bien que cette commande affiche les volumes RAID, elle n'indique pas la taille des partitions elles-mêmes. Vous pouvez obtenir cette information via la commande suivante :

```sh
fdisk -l

Disk /dev/sda: 120.0 GB, 120034123776 bytes
255 heads, 63 sectors/track, 14593 cylinders, total 234441648 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x000e9ae1

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        4096    40962047    20478976   fd  Linux RAID autodetect
/dev/sda2        40962048   233385983    96211968   fd  Linux RAID autodetect
/dev/sda3       233385984   234432511      523264   82  Linux swap / Solaris

Disk /dev/sdb: 120.0 GB, 120034123776 bytes
255 heads, 63 sectors/track, 14593 cylinders, total 234441648 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00001af8

   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1   *        4096    40962047    20478976   fd  Linux RAID autodetect
/dev/sdb2        40962048   233385983    96211968   fd  Linux RAID autodetect
/dev/sdb3       233385984   234432511      523264   82  Linux swap / Solaris

Disk /dev/sdc: 120.0 GB, 120034123776 bytes
255 heads, 63 sectors/track, 14593 cylinders, total 234441648 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x0000da80

   Device Boot      Start         End      Blocks   Id  System
/dev/sdc1   *        4096    40962047    20478976   fd  Linux RAID autodetect
/dev/sdc2        40962048   233385983    96211968   fd  Linux RAID autodetect
/dev/sdc3       233385984   234432511      523264   82  Linux swap / Solaris

Disk /dev/md1: 21.0 GB, 20970405888 bytes
2 heads, 4 sectors/track, 5119728 cylinders, total 40957824 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000

Disk /dev/md1 doesn't contain a valid partition table

Disk /dev/md2: 98.5 GB, 98520989696 bytes
2 heads, 4 sectors/track, 24052976 cylinders, total 192423808 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000

Disk /dev/md2 doesn't contain a valid partition table
```

Cette commande montre que `/dev/md1` se compose de 21 Go et `/dev/md2` contient 98,5 Go. Exécuter la commande « mount » montre la disposition du disque.

```sh
/dev/root on / type ext4 (rw,relatime,discard,errors=remount-ro,data=ordered)
devtmpfs on /dev type devtmpfs (rw,relatime,size=16417956k,nr_inodes=4104489,mode=755)
sysfs on /sys type sysfs (rw,relatime)
none on /dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
none on /proc type proc (rw,nosuid,nodev,noexec,relatime)
none on /proc/sys/fs/binfmt_misc type binfmt_misc (rw,nosuid,nodev,noexec,relatime)
none on /sys/fs/cgroup type tmpfs (rw,relatime,size=4k,mode=755)
none on /sys/fs/fuse/connections type fusectl (rw,relatime)
none on /sys/kernel/security type securityfs (rw,relatime)
none on /run type tmpfs (rw,nosuid,noexec,relatime,size=3283700k,mode=755)
none on /sys/fs/pstore type pstore (rw,relatime)
none on /run/lock type tmpfs (rw,nosuid,nodev,noexec,relatime,size=5120k)
none on /run/shm type tmpfs (rw,nosuid,nodev,relatime)
none on /run/user type tmpfs (rw,nosuid,nodev,noexec,relatime,size=102400k,mode=755)
systemd on /sys/fs/cgroup/systemd type cgroup (rw,nosuid,nodev,noexec,relatime,name=systemd)
gvfsd-fuse on /run/user/109/gvfs type fuse.gvfsd-fuse (rw,nosuid,nodev,relatime,user_id=109,group_id=117)
gvfsd-fuse on /run/user/0/gvfs type fuse.gvfsd-fuse (rw,nosuid,nodev,relatime,user_id=0,group_id=0)
/dev/md2 on /home type ext4 (rw,relatime,data=ordered)
```
Les disques sont actuellement montés par défaut. Pour retirer un disque du RAID, vous devez dans un premier temps démonter le disque, puis simuler un échec pour enfin le supprimer.
Supprimez ensuite `/dev/sda2` du RAID avec la commande suivante :

```sh
umount /dev/md2
```
Le résultat obtenu sera le suivant :

```sh
/dev/root on / type ext4 (rw,relatime,discard,errors=remount-ro,data=ordered)
devtmpfs on /dev type devtmpfs (rw,relatime,size=16417956k,nr_inodes=4104489,mode=755)
sysfs on /sys type sysfs (rw,relatime)
none on /dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
none on /proc type proc (rw,nosuid,nodev,noexec,relatime)
none on /proc/sys/fs/binfmt_misc type binfmt_misc (rw,nosuid,nodev,noexec,relatime)
none on /sys/fs/cgroup type tmpfs (rw,relatime,size=4k,mode=755)
none on /sys/fs/fuse/connections type fusectl (rw,relatime)
none on /sys/kernel/security type securityfs (rw,relatime)
none on /run type tmpfs (rw,nosuid,noexec,relatime,size=3283700k,mode=755)
none on /sys/fs/pstore type pstore (rw,relatime)
none on /run/lock type tmpfs (rw,nosuid,nodev,noexec,relatime,size=5120k)
none on /run/shm type tmpfs (rw,nosuid,nodev,relatime)
none on /run/user type tmpfs (rw,nosuid,nodev,noexec,relatime,size=102400k,mode=755)
systemd on /sys/fs/cgroup/systemd type cgroup (rw,nosuid,nodev,noexec,relatime,name=systemd)
gvfsd-fuse on /run/user/109/gvfs type fuse.gvfsd-fuse (rw,nosuid,nodev,relatime,user_id=109,group_id=117)
gvfsd-fuse on /run/user/0/gvfs type fuse.gvfsd-fuse (rw,nosuid,nodev,relatime,user_id=0,group_id=0)
```

L'entrée de `/dev/md2` n'est maintenant plus montée. Cependant, le RAID est toujours actif. Il est donc nécessaire de simuler un échec pour retirer le disque, ce qui peut être effectué grâce à la  commande suivante :

```sh
mdadm --fail /dev/md2 /dev/sda2
```

Nous avons maintenant simulé un échec du RAID. L'étape suivante consiste à supprimer la partition du RAID avec la commande suivante :

```sh
mdadm --remove /dev/md2 /dev/sda2
```

Vous pouvez vérifier que la partition a été supprimée avec la commande suivante :

```sh
cat /proc/mdstat 

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 

md2 : active raid1 sda2[0] sdb2[1] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

La commande ci-dessous vérifie que la partition a été supprimée :

```sh
mdadm --detail /dev/md2

/dev/md2:
        Version : 0.90
  Creation Time : Wed Apr 29 16:58:08 2015
     Raid Level : raid1
     Array Size : 96211904 (91.75 GiB 98.52 GB)
  Used Dev Size : 96211904 (91.75 GiB 98.52 GB)
   Raid Devices : 3
  Total Devices : 2
Preferred Minor : 2
    Persistence : Superblock is persistent

    Update Time : Sat Jun 20 12:55:24 2015
          State : clean, degraded 
 Active Devices : 2
Working Devices : 2
 Failed Devices : 0
  Spare Devices : 0

           UUID : 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events : 0.90

    Number   Major   Minor   RaidDevice State
 0 0 0 0 removed
       1       8       18        1      active sync   /dev/sdb2
       2       8       34        2      active sync   /dev/sdc2
```

Une fois le disque remplacé, copiez la table de partition à partir d'un disque sain, « sdb » dans cet exemple, à la nouvelle, « sda » avec la commande suivante : 

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```
Il est maintenant possible de reconstruire la matrice RAID. L'extrait de code ci-dessous montre comment reconstruire la disposition de la partition `/dev/md2` avec la table de partition « sda » copiée récemment : 

```sh
mdadm --add /dev/md2 /dev/sda2
cat /proc/mdstat
```
Vérifiez les détails du RAID avec la commande suivante :

```sh
mdadm --detail /dev/md2

/dev/md2:
        Version : 0.90
  Creation Time : Mon Mar 05 16:58:08 2018
     Raid Level : raid1
     Array Size : 96211904 (91.75 GiB 98.52 GB)
  Used Dev Size : 96211904 (91.75 GiB 98.52 GB)
   Raid Devices : 3
  Total Devices : 3
Preferred Minor : 2
    Persistence : Superblock is persistent

    Update Time : Tue Mar 06 16:58:08 2018
          State : clean, degraded, recovering 
 Active Devices : 2
Working Devices : 3
 Failed Devices : 0
  Spare Devices : 1

 Rebuild Status : 21% complete

           UUID : 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events : 0.95

    Number   Major   Minor   RaidDevice State
       3       8        2        0      spare rebuilding   /dev/sda2
       1       8       18        1      active sync   /dev/sdb2
       2       8       34        2      active sync   /dev/sdc2
```

Le RAID a maintenant été reconstruit. Montez la partition (`/dev/md2` dans cet exemple) avec cette commande : 

```sh
mount /dev/md2 /home
```


## Aller plus loin

* [Hot Swap – RAID Matériel](https://docs.ovh.com/fr/dedicated/hotswap-raid-hard/){.external}
* [Hot Swap – RAID Logiciel](https://docs.ovh.com/fr/dedicated/hotswap-raid-soft/){.external}
* [RAID Matériel](https://docs.ovh.com/fr/dedicated/raid-hard/){.external}
* Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.