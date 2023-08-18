---
title: Gestion du RAID logiciel
slug: raid-soft
excerpt: Apprenez à vérifier l'état de votre RAID logiciel
section: RAID & disques
updated: 2023-08-21
---

<!-- markdownlint-disable-next-line MD036 -->
**Dernière mise à jour le 21/08/2023**

## Objectif

Le RAID (Redundant Array of Independent Disks) est un ensemble de techniques prévues pour atténuer la perte de données sur un serveur en répliquant celles-ci sur plusieurs disques.

Le niveau RAID par défaut pour les installations de serveurs OVHcloud est RAID 1, ce qui double l'espace occupé par vos données, réduisant ainsi de moitié l'espace disque utilisable.

**Ce guide va vous aider à configurer la matrice RAID de votre serveur dans l'éventualité où elle doit être reconstruite en raison d'une corruption ou d'une panne de disque.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/t_BL_uOXQVA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Posséder un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/){.external} avec une configuration RAID logiciel.
- Avoir accès à votre serveur via SSH en tant qu'administrateur (root).

## En pratique

### Retrait du disque

La vérification de l’état actuel du RAID s’effectue via la commande suivante :

```sh
cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Cette commande montre deux matrices RAID actuellement configurées, « md4 » étant la plus grande partition. La partition se compose de deux disques, appelés « sda4 » et « sdb4 ». Le [UU] signifie que tous les disques fonctionnent normalement. Un « _ » indiquerait un disque défectueux.

Bien que cette commande affiche les volumes RAID, elle n'indique pas la taille des partitions elles-mêmes. Vous pouvez obtenir cette information via la commande suivante :

```sh
fdisk -l

Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F

Device          Start        End    Sectors   Size Type
/dev/sdb1        2048       4095       2048     1M BIOS boot
/dev/sdb2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sdb3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sdb4  1865226240 3907024895 2041798656 973.6G Linux RAID


Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 2E1DCCBA-8808-4D2B-BA33-9FEC3B96ADA8

Device          Start        End    Sectors   Size Type
/dev/sda1        2048       4095       2048     1M BIOS boot
/dev/sda2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sda3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sda4  1865226240 3907024895 2041798656 973.6G Linux RAID
/dev/sda5  3907025072 3907029134       4063     2M Linux filesystem


Disk /dev/md4: 973.5 GiB, 1045265645568 bytes, 2041534464 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/md2: 888.8 GiB, 954321600512 bytes, 1863909376 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

La commande `fdisk -l` vous permet également d'identifier votre type de partition. C'est une information importante à connaître lorsqu'il s'agit de reconstruire votre RAID en cas de défaillance d'un disque.

Pour les partitions **GPT**, la commande retournera : `Disklabel type: gpt`.

```sh
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
'Disklabel type: gpt'
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F
```

Pour les partitions **MBR**, la commande retournera : `Disklabel type: dos`.

```sh
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Disk model: QEMU HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
'Disklabel type: dos'              
Disk identifier: 0x150f6797
```

Cette commande montre que `/dev/md2` se compose de 888,8 Go et `/dev/md4` contient 973,5 Go. Exécuter la commande « mount » montre la disposition du disque.

```sh
# mount

sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime)
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime)
udev on /dev type devtmpfs (rw,nosuid,relatime,size=16315920k,nr_inodes=4078980,mode=755)
devpts on /dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /run type tmpfs (rw,nosuid,noexec,relatime,size=3266556k,mode=755)
/dev/md2 on / type ext4 (rw,relatime)
securityfs on /sys/kernel/security type securityfs (rw,nosuid,nodev,noexec,relatime)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev)
tmpfs on /run/lock type tmpfs (rw,nosuid,nodev,noexec,relatime,size=5120k)
tmpfs on /sys/fs/cgroup type tmpfs (ro,nosuid,nodev,noexec,mode=755)
cgroup2 on /sys/fs/cgroup/unified type cgroup2 (rw,nosuid,nodev,noexec,relatime,nsdelegate)
cgroup on /sys/fs/cgroup/systemd type cgroup (rw,nosuid,nodev,noexec,relatime,xattr,name=systemd)
pstore on /sys/fs/pstore type pstore (rw,nosuid,nodev,noexec,relatime)
bpf on /sys/fs/bpf type bpf (rw,nosuid,nodev,noexec,relatime,mode=700)
cgroup on /sys/fs/cgroup/pids type cgroup (rw,nosuid,nodev,noexec,relatime,pids)
cgroup on /sys/fs/cgroup/memory type cgroup (rw,nosuid,nodev,noexec,relatime,memory)
cgroup on /sys/fs/cgroup/perf_event type cgroup (rw,nosuid,nodev,noexec,relatime,perf_event)
cgroup on /sys/fs/cgroup/rdma type cgroup (rw,nosuid,nodev,noexec,relatime,rdma)
cgroup on /sys/fs/cgroup/net_cls,net_prio type cgroup (rw,nosuid,nodev,noexec,relatime,net_cls,net_prio)
cgroup on /sys/fs/cgroup/cpu,cpuacct type cgroup (rw,nosuid,nodev,noexec,relatime,cpu,cpuacct)
cgroup on /sys/fs/cgroup/freezer type cgroup (rw,nosuid,nodev,noexec,relatime,freezer)
cgroup on /sys/fs/cgroup/blkio type cgroup (rw,nosuid,nodev,noexec,relatime,blkio)
cgroup on /sys/fs/cgroup/devices type cgroup (rw,nosuid,nodev,noexec,relatime,devices)
cgroup on /sys/fs/cgroup/cpuset type cgroup (rw,nosuid,nodev,noexec,relatime,cpuset)
debugfs on /sys/kernel/debug type debugfs (rw,relatime)
hugetlbfs on /dev/hugepages type hugetlbfs (rw,relatime,pagesize=2M)
mqueue on /dev/mqueue type mqueue (rw,relatime)
systemd-1 on /proc/sys/fs/binfmt_misc type autofs (rw,relatime,fd=45,pgrp=1,timeout=0,minproto=5,maxproto=5,direct,pipe_ino=10340)
/dev/md4 on /home type ext3 (rw,relatime)
tmpfs on /run/user/1000 type tmpfs (rw,nosuid,nodev,relatime,size=3266552k,mode=700,uid=1000,gid=1000)
```

Alternativement, la commande `lsblk` offre une vue différente des partitions :

```sh
lsblk

NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
├─sda1    8:1    0     1M  0 part
├─sda2    8:2    0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sda3    8:3    0   512M  0 part  [SWAP]
├─sda4    8:4    0 973.6G  0 part
│ └─md4   9:4    0 973.5G  0 raid1 /home
└─sda5    8:5    0     2M  0 part
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Les disques sont actuellement montés par défaut. Pour retirer un disque du RAID, vous devez dans un premier temps démonter le disque, puis simuler un échec pour enfin le supprimer.
Nous allons supprimer `/dev/sda4` du RAID avec la commande suivante :

```sh
umount /dev/md4
```

> [!warning]
> Veuillez noter que si vous êtes connecté en tant qu'utilisateur `root`, vous pouvez obtenir le message suivant lorsque vous essayez de démonter la partition (dans notre cas, où notre partition md4 est montée dans /home) :
>
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">umount: /home: target is busy</span> </pre></div>
>
> Dans ce cas, vous devez vous déconnecter en tant qu'utilisateur root et vous connecter en tant qu'utilisateur local (dans notre cas, `debian`) et utiliser la commande suivante :
>
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">debian@ns000000:/$ sudo umount /dev/md4</span> </pre></div>
>
> Si vous ne disposez pas d'utilisateur local, vous devez en créer un.

Le résultat obtenu sera le suivant :

```sh
sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime)
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime)
udev on /dev type devtmpfs (rw,nosuid,relatime,size=16315920k,nr_inodes=4078980,mode=755)
devpts on /dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /run type tmpfs (rw,nosuid,noexec,relatime,size=3266556k,mode=755)
/dev/md2 on / type ext4 (rw,relatime)
securityfs on /sys/kernel/security type securityfs (rw,nosuid,nodev,noexec,relatime)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev)
tmpfs on /run/lock type tmpfs (rw,nosuid,nodev,noexec,relatime,size=5120k)
tmpfs on /sys/fs/cgroup type tmpfs (ro,nosuid,nodev,noexec,mode=755)
cgroup2 on /sys/fs/cgroup/unified type cgroup2 (rw,nosuid,nodev,noexec,relatime,nsdelegate)
cgroup on /sys/fs/cgroup/systemd type cgroup (rw,nosuid,nodev,noexec,relatime,xattr,name=systemd)
pstore on /sys/fs/pstore type pstore (rw,nosuid,nodev,noexec,relatime)
bpf on /sys/fs/bpf type bpf (rw,nosuid,nodev,noexec,relatime,mode=700)
cgroup on /sys/fs/cgroup/pids type cgroup (rw,nosuid,nodev,noexec,relatime,pids)
cgroup on /sys/fs/cgroup/memory type cgroup (rw,nosuid,nodev,noexec,relatime,memory)
cgroup on /sys/fs/cgroup/perf_event type cgroup (rw,nosuid,nodev,noexec,relatime,perf_event)
cgroup on /sys/fs/cgroup/rdma type cgroup (rw,nosuid,nodev,noexec,relatime,rdma)
cgroup on /sys/fs/cgroup/net_cls,net_prio type cgroup (rw,nosuid,nodev,noexec,relatime,net_cls,net_prio)
cgroup on /sys/fs/cgroup/cpu,cpuacct type cgroup (rw,nosuid,nodev,noexec,relatime,cpu,cpuacct)
cgroup on /sys/fs/cgroup/freezer type cgroup (rw,nosuid,nodev,noexec,relatime,freezer)
cgroup on /sys/fs/cgroup/blkio type cgroup (rw,nosuid,nodev,noexec,relatime,blkio)
cgroup on /sys/fs/cgroup/devices type cgroup (rw,nosuid,nodev,noexec,relatime,devices)
cgroup on /sys/fs/cgroup/cpuset type cgroup (rw,nosuid,nodev,noexec,relatime,cpuset)
debugfs on /sys/kernel/debug type debugfs (rw,relatime)
hugetlbfs on /dev/hugepages type hugetlbfs (rw,relatime,pagesize=2M)
mqueue on /dev/mqueue type mqueue (rw,relatime)
systemd-1 on /proc/sys/fs/binfmt_misc type autofs (rw,relatime,fd=45,pgrp=1,timeout=0,minproto=5,maxproto=5,direct,pipe_ino=10340)
tmpfs on /run/user/1000 type tmpfs (rw,nosuid,nodev,relatime,size=3266552k,mode=700,uid=1000,gid=1000)
```

L'entrée de `/dev/md4` n'est maintenant plus montée. Cependant, le RAID est toujours actif. Il est donc nécessaire de simuler un échec pour retirer le disque, ce qui peut être effectué grâce à la commande suivante :

```sh
sudo mdadm --fail /dev/md4 /dev/sda4
```

Nous avons maintenant simulé un échec du RAID. L'étape suivante consiste à supprimer la partition du RAID avec la commande suivante :

```sh
sudo mdadm --remove /dev/md4 /dev/sda4
```

Vous pouvez vérifier que la partition a été supprimée avec la commande suivante :

```sh
cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/7 pages [16KB], 65536KB chunk

md4 : active raid1 sdb4[1]
      1020767232 blocks super 1.2 [2/1] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

La commande ci-dessous vérifie que la partition a été supprimée :

```sh
mdadm --detail /dev/md4

/dev/md4:
           Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 16:28:03 2023
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md4
              UUID : 7b5c1d80:0a7ab4c2:e769b5e5:9c6eaa0f
            Events : 21

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1       8       20        1      active sync   /dev/sdb4
```

### Reconstruction du RAID

Une fois le disque remplacé, copiez la table de partition à partir d'un disque sain (« sdb » dans cet exemple) dans la nouvelle (« sda ») avec la commande suivante :

**Pour les partitions GPT**

```sh
sgdisk -R /dev/sda /dev/sdb 
```

La commande doit être au format suivant : `sgdisk -R /dev/nouveaudisque /dev/disquesain`

Une fois cette opération effectuée, l’étape suivante consiste à rendre aléatoire le GUID du nouveau disque afin d’éviter tout conflit de GUID avec les autres disques :

```sh
sgdisk -G /dev/sda
```

**Pour les partitions MBR**

Une fois le disque remplacé, copiez la table de partition à partir d'un disque sain (« sdb » dans cet exemple) dans la nouvelle (« sda ») avec la commande suivante :

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

La commande doit être au format suivant : `sfdisk -d /dev/disquesain | sfdisk /dev/nouveaudisque`

Il est maintenant possible de reconstruire la matrice RAID. L'extrait de code ci-dessous montre comment reconstruire la disposition de la partition `/dev/md4` avec la table de partition « sda » copiée récemment :

```sh
mdadm --add /dev/md4 /dev/sda4
cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 1/7 pages [4KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk

unused devices: <none>
```

Vérifiez les détails du RAID avec la commande suivante :

```sh
mdadm --detail /dev/md4

/dev/md4:
        Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 17:02:55 2023
             State : clean
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

 Rebuild Status : 21% complete

           UUID : 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events : 0.95

    Number   Major   Minor   RaidDevice State
       0       8        2        0      spare rebuilding   /dev/sda4
       1       8       18        1      active sync   /dev/sdb4
```

Le RAID a maintenant été reconstruit. Montez la partition (`/dev/md4` dans cet exemple) avec cette commande :

```sh
mount /dev/md4 /home
```

## Aller plus loin

[Remplacement à chaud - RAID logiciel](/pages/cloud/dedicated/hotswap_raid_soft)

[API OVHcloud & Partitionnement](/pages/cloud/dedicated/partitioning_ovh)

[Gestion du RAID matériel](/pages/cloud/dedicated/raid_hard)

[Remplacement à chaud - RAID Matériel](/pages/cloud/dedicated/hotswap_raid_hard)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
