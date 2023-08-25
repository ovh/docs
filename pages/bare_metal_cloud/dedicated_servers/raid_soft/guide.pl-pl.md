---
title: Programowa macierz RAID
excerpt: Dowiedz się, jak konfiguracja software RAID Twojego serwera
updated: 2023-08-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>



## Wprowadzenie

RAID (Redundant Array of Independent Disks) to narzędzie pozwalające zminimalizować ryzyko utraty danych zapisanych na serwerze poprzez ich replikację na wielu dyskach.

Domyślny poziom RAID dla serwerów OVHcloud to RAID 1. Dzięki temu przestrzeń zajmowana przez dane zwiększa się dwukrotnie, natomiast wielkość użytkowanej przestrzeni dyskowej zmniejsza się o połowę.

**W tym przewodniku wyjaśniamy, jak skonfigurować macierz RAID Twojego serwera w przypadku, gdy musi ona zostać odtworzona z powodu awarii lub uszkodzenia dysku.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/){.external} ze skonfigurowaną programową macierzą RAID
- Dostęp do serwera przez SSH przy użyciu uprawnień administratora (root)

## W praktyce

### Usuwanie dysku

Weryfikacja aktualnego stanu RAID za pomocą polecenia:

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

Polecenie wskazuje dwie aktualnie skonfigurowane macierze RAID, przy czym “md4” jest największą partycją. Partycja składa się z dwóch dysków o nazwach: “sda4” i “sdb4”. [UU] oznacza, że wszystkie dyski działają prawidłowo. “`_`” wskazuje wadliwy dysk.

W poleceniu ukazane są wielkości macierzy RAID, nie podane są jednak rozmiary samych partycji. Informację tę można uzyskać za pomocą polecenia:

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

Komenda `fdisk -l` pozwala również na zidentyfikowanie partycji. Pamiętaj, że w przypadku awarii dysku możesz odtworzyć RAID.

W przypadku partycji **GPT** komenda zwróci: `Disklabel type: gpt`.

```sh
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
'Disklabel type: gpt'
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F
```

W przypadku partycji **MBR** polecenie zwróci: `Disklabel type: dos`.

```sh
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Disk model: QEMU HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
'Disklabel type: dos'            
Disk identifier: 0x150f6797
```

Polecenie pokazuje, że `/dev/md2` ma wielkość 888,8 GB, a `/dev/md4` 973,5 GB. Zastosuj polecenie “mount”, aby zobaczyć stan dysku.

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

Komenda `lsblk` oferuje inny widok na partycje:

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

Aktualnie dyski są zamontowane domyślnie. Aby usunąć dysk z macierzy RAID, najpierw odmontuj dysk, po czym wykonaj symulację błędu, aby ostatecznie go usunąć.
Następnie usuń `/dev/sda4` z macierzy RAID za pomocą polecenia:

```sh
umount /dev/md4
```

> [!warning]
> Pamiętaj, że jeśli jesteś zalogowany jako użytkownik `root`, możesz uzyskać następujący komunikat podczas próby odmontowania partycji (w naszym przypadku, kiedy nasza partycja md4 jest zamontowana w /home):
>
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">umount: /home: target is busy</span> </pre></div>
>
> W tym przypadku należy wylogować się jako użytkownik root i zalogować się jako użytkownik lokalny (w naszym przypadku, `debian`) i użyć następującej komendy:
>
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">debian@ns000000:/$ sudo umount /dev/md4</span> </pre></div>
>
> Jeśli nie posiadasz lokalnego użytkownika, musisz go utworzyć.

Wynik będzie następujący:

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

Wpis `/dev/md4` nie jest już zamontowany. Jednak macierz RAID jest nadal aktywna. Konieczna jest zatem symulacja błędu umożliwiająca usunięcie dysku. W tym celu zastosuj polecenie:

```sh
sudo mdadm --fail /dev/md4 /dev/sda4
```

Symulacja błędu RAID została wykonana. Następny krok to usunięcie partycji z macierzy RAID za pomocą polecenia:

```sh
sudo mdadm --remove /dev/md4 /dev/sda4
```

Możesz sprawdzić, czy partycja została usunięta, stosując polecenie:

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

Poniższe polecenie pozwala upewnić się, czy partycja została usunięta:

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

### Rekonstrukcja RAID

Po wymianie dysku skopiuj tablicę partycji ze zdrowego dysku, (w tym przykładzie dysk “sdb”) do nowego dysku “sda” za pomocą następującego polecenia:

**Dla partycji GPT**

```sh
sgdisk -R /dev/sda /dev/sdb 
```

Polecenie musi mieć następujący format: `sgdisk -R /dev/newdisk /dev/healthydisk`.

Po wykonaniu tej operacji kolejny krok polega na losowym odwzorowaniu GUID nowego dysku, aby uniknąć konfliktu GUID z innymi dyskami:

```sh
sgdisk -G /dev/sda
```

**Dla partycji MBR**

Po wymianie dysku skopiuj tablicę partycji ze zdrowego dysku, (w tym przykładzie dysk “sdb”) do nowego dysku “sda” za pomocą następującego polecenia:

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

Polecenie musi mieć następujący format: `sfdisk -d /dev/healthydisk | sfdisk /dev/newdisk`.

Teraz możesz odtworzyć macierz RAID. Poniższy fragment kodu pokazuje, jak odtworzyć układ partycji `/dev/md4` za pomocą skopiowanej tablicy partycji “sda”:

```sh
mdadm —add /dev/md4 /dev/sda4
cat /proc/mdstat

Personalities: [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2: active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 1/7 stron [4KB], 65536KB chunk

md4: active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 stron [0KB], 65536KB chunk

unused devices: <none>
```

Sprawdź szczegóły dotyczące RAID za pomocą polecenia:

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

Macierz RAID została odtworzona. Zamontuj partycję (w tym przykładzie `/dev/md4`) za pomocą polecenia:

```sh
mount /dev/md4 /home
```

## Sprawdź również

* [Wymiana dysku bez wyłączania serwera – Programowa macierz RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft){.external}
* [Sprzętowa macierz RAID (EN)](/pages/bare_metal_cloud/dedicated_servers/raid_hard){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
