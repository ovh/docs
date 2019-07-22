---
title: Software-RAID
slug: soft-raid
excerpt: 'Hier erfahren Sie, wie Sie das RAID-Array Ihres Servers im Fall von Störungen oder Festplattenschaden konfigurieren.'
section: 'RAID & Festplatten'
---

**Stand 11.07.2019**

## Einleitung

Das RAID (Redundant Array of Independent Disks) ist ein System, das Datenverlust auf Servern entgegenwirkt, indem es diese Daten auf mehreren Festplatten speichert.

Das RAID-Level für OVH Server-Installationen ist standardmäßig RAID-1, was den von Ihren Daten verbrauchten Speicherplatz verdoppelt und somit den nutzbaren Festplattenplatz halbiert.

**In dieser Anleitung erfahren Sie, wie Sie das Matrix-RAID Ihres Servers konfigurieren, falls dieses aufgrund von Störungen oder Festplattenschaden neu eingerichtet werden muss.**

## Voraussetzungen

* Sie verfügen über einen [dedizierten Server](https://www.ovh.de/dedicated_server/){.external} mit Software-RAID-Konfiguration.
* Sie haben als Administrator (Root) via SSH Zugriff auf Ihren Server.

## Beschreibung

Den aktuellen Status des RAID erhalten Sie über folgenden Befehl:

```sh
cat /proc/mdstat

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 
md2 : active raid1 sdb2[1] sda2[0] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

Dieser Befehl zeigt, dass aktuell zwei Matrix-RAIDs eingerichtet sind, wobei „md2“ die größere Partition ist. Eine Partition besteht aus den drei Festplatten „sda2“, „sdb2“ und „sdc2“. \[UUU] zeigt an, dass alle Festplatten normal funktionieren. Ein „F“ würde bedeuten, dass eine Festplatte defekt ist.

Dieser Befehl zeigt zwar die RAID-Festplatten an, jedoch nicht die Größe der Partitionen selbst. Diese Information erhalten Sie mit folgendem Befehl:

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

Der Befehl zeigt, das `/dev/md1` 21 GB und `/dev/md2` 98,5 GB enthält. Durch den Befehl „mount“ erhalten Sie das Layout der Festplatte.

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
Die Festplatten sind aktuell standardmäßig gemountet. Um eine Festplatte aus dem RAID zu entfernen, muss diese zuerst ausgehängt und dann ein Fehler simuliert werden, um sie endgültig zu entfernen.
Um `/dev/sda2` aus dem RAID zu entfernen, folgen Sie den nachstehenden Schritten und verwenden Sie zunächst folgenden Befehl:

```sh
umount /dev/md2
```
Als Ergebnis erhalten Sie:

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

`/dev/md2` ist nicht länger gemountet. Das RAID ist jedoch noch aktiv. Daher ist es notwendig, einen Fehler zu simulieren, um die Festplatte zu entfernen. Dies geschieht über folgenden Befehl:

```sh
mdadm --fail /dev/md2 /dev/sda2
```

Somit wurde ein Fehler des RAID simuliert. Im nächsten Schritt wird die Partition mit folgendem Befehl aus dem RAID entfernt:

```sh
mdadm --remove /dev/md2 /dev/sda2
```

Um zu überprüfen, ob die Partition entfernt wurde, verwenden Sie folgenden Befehl:

```sh
cat /proc/mdstat 

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 

md2 : active raid1 sdb2[1] sdc2[2]
      96211904 blocks [3/2] [_UU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

Der nachfolgende Befehl bestätigt, dass die Partition entfernt wurde.

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

Wenn die Festplatte ersetzt wurde, kopieren Sie die Partitionstabelle einer funktionsfähigen Festplatte (in unserem Beispiel „sdb“) mit folgendem Befehl in die neue („sda“): 

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```
Jetzt können Sie das Matrix-RAID erneut einrichten. Der nachstehende Ausschnitt des Codes zeigt, wie das Layout der Partition `/dev/md2` mit der zuvor kopierten Partitionstabelle von „sda“ wiederhergestellt werden kann: 

```sh
mdadm --add /dev/md2 /dev/sda2
cat /proc/mdstat
```
Überprüfen Sie die Details des RAID mit folgendem Befehl:

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

Das RAID wurde neu eingerichtet. Mounten Sie die Partition (in unserem Beispiel `/dev/md2`) mit folgendem Befehl: 

```sh
mount /dev/md2 /home
```


## Weiterführende Informationen

* [Hot Swap – Hardware RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/){.external} (Englisch)
* [Hot Swap – Software RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-soft/){.external} (Englisch)
* [Hardware RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (Englisch)
* Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.