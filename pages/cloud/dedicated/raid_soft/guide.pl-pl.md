---
title: 'Programowa macierz RAID'
slug: raid-soft
excerpt: 'Dowiedz się, jak odbudować macierz RAID Twojego serwera w przypadku awarii lub uszkodzenia dysku'
section: 'RAID & dyski'
---

**Ostatnia aktualizacja z dnia 03-07-2019**

## Wprowadzenie

RAID (Redundant Array of Independent Disks) to narzędzie pozwalające zminimalizować ryzyko utraty danych zapisanych na serwerze poprzez ich replikację na wielu dyskach.

Domyślny poziom RAID dla serwerów OVH to RAID 1. Dzięki temu przestrzeń zajmowana przez dane zwiększa się dwukrotnie, natomiast wielkość użytkowanej przestrzeni dyskowej zmniejsza się o połowę. 

**W tym przewodniku wyjaśniamy, jak skonfigurować macierz RAID Twojego serwera w przypadku, gdy musi ona zostać odtworzona z powodu awarii lub uszkodzenia dysku.**

## Wymagania początkowe

* Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external} ze skonfigurowaną programową macierzą RAID
* Dostęp do serwera przez SSH przy użyciu uprawnień administratora (root)

## W praktyce

Weryfikacja aktualnego stanu RAID za pomocą polecenia:

```sh
cat /proc/mdstat

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 
md2 : active raid1 sdb2[1] sda2[0] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

Polecenie wskazuje dwie aktualnie skonfigurowane macierze RAID, przy czym „md2” jest największą partycją. Partycja składa się z trzech dysków o nazwach: „sda2”, „sdb2” i „sdc2”. \[UUU] oznacza, że wszystkie dyski działają prawidłowo. „F” wskazuje wadliwy dysk.

W poleceniu ukazane są wielkości macierzy RAID, nie podane są jednak rozmiary samych partycji. Informację tę można uzyskać za pomocą polecenia:

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

Polecenie pokazuje, że `/dev/md1` ma wielkość 21 GB, a `/dev/md2` 98,5 GB. Zastosuj polecenie „mount”, aby zobaczyć stan dysku.

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
Aktualnie dyski są zamontowane domyślnie. Aby usunąć dysk z macierzy RAID, najpierw odmontuj dysk, po czym wykonaj symulację błędu, aby ostatecznie go usunąć.
Następnie usuń `/dev/sda2` z macierzy RAID za pomocą polecenia:

```sh
umount /dev/md2
```
Wynik będzie następujący:

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

Wpis `/dev/md2` nie jest już zamontowany. Jednak macierz RAID jest nadal aktywna. Konieczna jest zatem symulacja błędu umożliwiająca usunięcie dysku. W tym celu zastosuj polecenie:

```sh
mdadm --fail /dev/md2 /dev/sda2
```

Symulacja błędu RAID została wykonana. Następny krok to usunięcie partycji z macierzy RAID za pomocą polecenia:

```sh
mdadm --remove /dev/md2 /dev/sda2
```

Możesz sprawdzić, czy partycja została usunięta, stosując polecenie:

```sh
cat /proc/mdstat 

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 

md2 : active raid1 sda2[0] sdb2[1] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

Poniższe polecenie pozwala upewnić się, czy partycja została usunięta:

```sh
mdadm --detail /dev/md2

/dev/md2:
        Wersja: 0.90                    |
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
         Events : 0.90                    |

    Number   Major   Minor   RaidDevice State
 0 0 0 0 removed
       1       8       18        1      active sync   /dev/sdb2
       2       8       34        2      active sync   /dev/sdc2
```

Po wymianie dysku skopiuj tablicę partycji ze zdrowego dysku, (w tym przykładzie dysk „sdb”) do nowego dysku „sda” za pomocą następującego polecenia: 

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```
Teraz możesz odtworzyć macierz RAID. Poniższy fragment kodu pokazuje, jak odtworzyć układ partycji `/dev/md2` za pomocą skopiowanej tablicy partycji „sda”: 

```sh
mdadm --add /dev/md2 /dev/sda2
cat /proc/mdstat
```
Sprawdź szczegóły dotyczące RAID za pomocą polecenia:

```sh
mdadm --detail /dev/md2

/dev/md2:
        Wersja: 0.90                    |
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

Macierz RAID została odtworzona. Zamontuj partycję (w tym przykładzie `/dev/md2`) za pomocą polecenia: 

```sh
mount /dev/md2 /home
```

## Sprawdź również

* [Wymiana dysku bez wyłączania serwera – Sprzętowa macierz RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/){.external}
* [Wymiana dysku bez wyłączania serwera – Programowa macierz RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-soft/){.external}
* [Sprzętowa macierz RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}
* Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.