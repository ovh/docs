---
title: Software-RAID
slug: soft-raid
excerpt: 'Erfahren Sie hier, wie Sie das RAID Array Ihres Servers rekonfigurieren'
section: 'RAID & Festplatten'
updated: 2022-10-11
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 21.02.2023**

## Ziel

RAID (Redundant Array of Independent Disks) ist ein System, das Datenverlust auf Servern entgegenwirkt, indem es diese Daten auf mehreren Disks speichert.

Das RAID Level für OVHcloud Server-Installationen ist standardmäßig RAID-1, was den von Ihren Daten verbrauchten Speicherplatz verdoppelt und somit den nutzbaren Platz halbiert.

**Diese Anleitung erklärt, wie Sie das RAID Array Ihres Servers konfigurieren, falls dieses aufgrund von Störungen oder Beschädigung neu eingerichtet werden muss.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) mit Software-RAID-Konfiguration.
- Sie haben administrativen Zugriff (Root) auf Ihren Server über SSH.

## In der praktischen Anwendung

Den aktuellen Status des RAID erhalten Sie über folgenden Befehl:

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

Dieser Befehl zeigt, dass aktuell zwei RAID Arrays eingerichtet sind, wobei "md4" die größte Partition ist. Diese Partition besteht aus zwei Disks: “sda4” und “sdb4”. `[UU]` zeigt an, dass alle Disks normal funktionieren. Ein “`_`” an dieser Stelle bedeutet, dass eine Disk defekt ist.

Dieser Befehl zeigt zwar die RAID Disks an, jedoch nicht die Größe der Partitionen selbst. Diese Information erhalten Sie mit folgendem Befehl:

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

Mit dem Befehl `fdisk -l` können Sie auch Ihren Partitionstyp identifizieren. Dies ist eine wichtige Information, die Sie bei der Rekonstruktion Ihres RAID im Falle eines Ausfalls beachten müssen.

Für **GPT** Partitionen wird zurückgegeben: `Disklabel type: gpt`.

```sh
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
'Disklabel type: gpt'
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F
```

Für **MBR** Partitionen wird zurückgegeben: `Disklabel type: dos`.

```sh
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Disk model: QEMU HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
'Disklabel type: dos'              
Disk identifier: 0x150f6797
```


Die Ausgabe zeigt, das `/dev/md2` 888,8 GB und `/dev/md4` 973,5 GB enthält. Über den Befehl “mount” erhalten Sie das Layout der Disk.

```sh
mount

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

Alternativ kann mit dem Befehl `lsblk` eine andere Ansicht zu den Partitionen angezeigt werden:

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

Die Disks sind aktuell standardmäßig gemountet. Um eine Disk aus dem RAID zu entfernen, muss diese zuerst ausgehängt und dann ein Fehler simuliert werden, um sie endgültig zu entfernen. Um `/dev/sda4` aus dem RAID zu entfernen, folgen Sie den nachstehenden Schritten und verwenden Sie zunächst folgenden Befehl:

```sh
umount /dev/md4
```

> [!warning]
> Beachten Sie, dass, falls Sie mit dem Account `root` eingeloggt sind, folgende Nachricht erhalten können, wenn Sie versuchen, die Partition zu unmounten (in unserem Fall wird die Partition md4 in /home gemountet):
> 
> `umount: /home target is busy`
>
> Wechseln Sie in diesem Fall zu einem anderen Root-Benutzer (in diesem Fall `debian`) und verwenden Sie folgenden Befehl:
> 
> `debian@ns000000:/$ sudo umount /dev/md4`
>
> Wenn Sie noch keine anderen User-Accounts haben, erstellen Sie einen.


Als Ergebnis erhalten Sie:

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

`/dev/md4` ist nicht länger gemountet. Das RAID ist jedoch noch aktiv. Daher ist es notwendig, einen Fehler zu simulieren, um die Disk zu entfernen. Dies geschieht über folgenden Befehl:

```sh
sudo mdadm --fail /dev/md4 /dev/sda4
```

Somit wurde ein Fehler des RAID simuliert. Im nächsten Schritt wird die Partition mit folgendem Befehl aus dem RAID entfernt:

```sh
sudo mdadm --remove /dev/md4 /dev/sda4
```

Um zu überprüfen, ob die Partition entfernt wurde, verwenden Sie folgenden Befehl:

```sh
cat /proc/mdstat 

Persönlichkeiten: [raid1] [Linear] [Multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2: active raid1 sda2[1] sdb2[0]
      931954688 Super-Blöcke 1.2 [2/2] [UU]
      bitmap: 4/7 Seiten [16KB], 65536KB chunk

md4: active raid1 sdb4[1]
      1020767232 Super-Blöcke 1.2 [2/1] [_U]
      bitmap: 0/8 Seiten [0KB], 65536KB chunk
      
unused devices: <none>
```

Die Ausgabe des nachfolgenden Befehls bestätigt, dass die Partition entfernt wurde.

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

### RAID neu einrichten

Wenn die Disk ersetzt wurde, kopieren Sie die Partitionstabelle einer funktionsfähigen Disk (in unserem Beispiel “sdb”) zur neuen Disk (“sda”): 

**Für GPT Partitionen**

```sh
sgdisk -R /dev/sda /dev/sdb 
```

Der Befehl muss im folgenden Format sein: `sgdisk -R /dev/newdisk /dev/healthydisk`.

Nach diesem Vorgang ist der nächste Schritt, die GUID für die neue Disk zu randomisieren, um Konflikte mit anderen Disks zu vermeiden:

```sh
sgdisk -G /dev/sda
```

**Für MBR Partitionen**

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

Der Befehl muss im folgenden Format sein: `sfdisk -d /dev/healthydisk | sfdisk /dev/newdisk`

Jetzt können Sie das RAID Array neu konfigurieren. Der nachstehende Code zeigt, wie das Layout der Partition `/dev/md4` mit der zuvor kopierten Partitionstabelle von “sda” wiederhergestellt werden kann: 

``sh
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

Überprüfen Sie die Details des RAID mit folgendem Befehl:

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

Das RAID wurde neu eingerichtet. Mounten Sie die Partition (in diesem Beispiel `/dev/md4`) mit folgendem Befehl: 

```sh
mount /dev/md4 /home
```


## Weiterführende Informationen

[Hot Swap – Hardware RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/){.external} (Englisch)

[Hot Swap – Software RAID](https://docs.ovh.com/de/dedicated/hotswap-software-raid/){.external}

[Hardware RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (Englisch)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
