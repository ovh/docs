---
title: Configurare un RAID software
excerpt: Come configurare il software RAID di un server
updated: 2023-08-21
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>



## Obiettivo

Il RAID (Redundant Array of Independent Disks) consiste in un insieme di tecniche che consentono di limitare la perdita delle informazioni presenti su un server grazie alla replica dei dati su più dischi.

Il livello RAID implementato di default sui server OVHcloud è RAID 1, un sistema che raddoppia lo spazio occupato dai dati dimezzando quindi quello utile.

**Questa guida ti mostra come configurare il volume RAID del tuo server nel caso in cui sia necessario ricostruirlo in seguito alla corruzione o guasto del disco.**

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/){.external} con configurazione RAID software
- Avere accesso al server via SSH con l’utente root

## Procedura

### Rimozione del disco

Per verificare lo stato corrente del RAID è necessario eseguire questo comando:

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

Il comando mostra due volumi RAID configurati. La partizione più grande è “md4” ed è composta dai due dischi “sda4” e “ sdb4”. [UU] indica che i dischi funzionano normalmente: in caso di disco difettoso sarebbe infatti presente una “`_`”.

In questo modo è possibile visualizzare i volumi RAID, ma non la dimensione delle partizioni. È possibile ottenere questa informazione utilizzando un altro comando:

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

Il comando `fdisk -l` ti permette anche di identificare il tuo tipo di partizione. È un'informazione importante da conoscere quando si tratta di ricostruire il tuo RAID in caso di guasto di un disco.

Per le partizioni **GPT**, il comando restituisce: `Disklabel type: gpt`.

```sh
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
'Disklabel type: gpt'
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F
```

Per le partizioni **MBR**, il comando restituisce: `Disklabel type: dos`.

```sh
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Disk model: QEMU HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
'Disklabel type: dos'             
Disk identifier: 0x150f6797
```

Questo comando mostra che `/dev/md2` è composto da 888,8 GB e `/dev/md4` contiene 973,5 GB. Eseguire il comando "mount" mostra la disposizione del disco.

Per visualizzare lo stato del disco utilizza il comando “mount”:

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

In alternativa, il comando `lsblk` offre una vista differente delle partizioni:

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

Al momento i dischi sono montati di default. Per rimuovere un disco dal RAID è necessario effettuarne l’unmount, indicarlo come difettoso e infine eliminarlo. Ad esempio, per rimuovere `/dev/sda4` dal RAID esegui il comando:

```sh
umount /dev/md4
```

> [!warning]
> Se sei connesso come utente `root`, puoi ottenere questo messaggio quando cerchi di smontare la partizione (nel nostro caso, la partizione md4 è montata in /home):
>
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">umount: /home: target is busy</span> </pre></div>
>
> In questo caso, dovrai disconnetterti come utente root e connetterti come utente locale (nel nostro caso, `debian`) utilizzando il comando:
>
> <div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">debian@ns000000:/$ sudo umount /dev/md4</span> </pre></div>
>
> Se non disponi di un utente locale, è necessario crearne uno.

Il risultato restituito sarà di questo tipo:

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

A questo punto la partizione `/dev/md4` non è più montata, ma il RAID è ancora attivo. Per rimuovere il disco è necessario indicarlo come difettoso con il comando:

```sh
sudo mdadm --fail /dev/md4 /dev/sda4
```

In questo modo abbiamo simulato un malfunzionamento del RAID. Lo step successivo consiste nella rimozione della partizione dal RAID:

```sh
sudo mdadm --remove /dev/md4 /dev/sda4
```

Per verificare che l’operazione sia stata effettuata correttamente, utilizza il comando:

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

Per verificare la corretta rimozione della partizione esegui il comando:

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

### Ricostruzione del RAID

Una volta sostituito il disco, copia la tabella delle partizioni da un disco funzionante (nell’esempio, “sdb”) in quello nuovo (“sda”) con il comando:

**Per le partizioni GPT**

```sh
sgdisk -R /dev/sda /dev/sdb 
```

L'ordine deve essere nel seguente formato: `sgdisk -R /dev/newdisk /dev/healthydisk`.

Una volta effettuata questa operazione, lo step successivo consiste nel rendere aleatoria la guida del nuovo disco per evitare qualsiasi conflitto di GUID con gli altri dischi:

```sh
sgdisk -G /dev/sda
```

**Per le partizioni MBR**

Una volta sostituito il disco, copia la tabella delle partizioni da un disco funzionante (nell’esempio, “sdb”) in quello nuovo (“sda”) con il comando:

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

L'ordine deve essere nel seguente formato: `sfdisk -d /dev/healthydisk | sfdisk /dev/newdisk`.

A questo punto è possibile ricostruire il volume RAID. Il codice seguente mostra come ricostruire la partizione `/dev/md4` tramite la tabella di “sda” copiata precedentemente:

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

Per verificare i dettagli del RAID, utilizza il comando:

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

Una volta che il RAID è stato ricostruito, effettua il mount della partizione (nell’esempio, `/dev/md4`) con il comando:

```sh
mount /dev/md4 /home
```

## Per saperne di più

[Hot Swap – RAID Software](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft){.external}

[Hot Swap - RAID Hardware](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard){.external}

[Gestire il RAID Hardware](/pages/bare_metal_cloud/dedicated_servers/raid_hard){.external} (in inglese)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
