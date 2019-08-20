---
title: 'Configurare un RAID software'
slug: raid-software
excerpt: 'Come ripristinare il volume RAID di un server in seguito al malfunzionamento di un disco'
section: 'RAID e dischi'
---

**Ultimo aggiornamento: 05/08/2019**

## Obiettivo

Il RAID (Redundant Array of Independent Disks) consiste in un insieme di tecniche che consentono di limitare la perdita delle informazioni presenti su un server grazie alla replica dei dati su più dischi.

Il livello RAID implementato di default sui server OVH è RAID 1, un sistema che raddoppia lo spazio occupato dai dati dimezzando quindi quello utile.

**Questa guida ti mostra come configurare il volume RAID del tuo server nel caso in cui sia necessario ricostruirlo in seguito alla corruzione o guasto del disco.**

## Prerequisiti

* Disporre di un [server dedicato](https://www.ovh.it/server_dedicati/){.external} con configurazione RAID software
* Avere accesso al server via SSH con l’utente root

## Procedura

Per verificare lo stato corrente del RAID è necessario eseguire questo comando:

```sh
cat /proc/mdstat

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 
md2 : active raid1 sdb2[1] sda2[0] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

Il comando mostra due volumi RAID configurati. La partizione più grande è “md2” ed è composta dai tre dischi “sda2”, “ sdb2” e “sdc2”. \[UUU] indica che i dischi funzionano normalmente: in caso di disco difettoso sarebbe infatti presente una “F”.

In questo modo è possibile visualizzare i volumi RAID, ma non la dimensione delle partizioni. È possibile ottenere questa informazione utilizzando un altro comando:

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

In questo modo è possibile sapere che `/dev/md1` contiene 21 GB e `/dev/md2` 98,5 GB.

Per visualizzare lo stato del disco utilizza il comando “mount”:

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
Al momento i dischi sono montati di default. Per rimuovere un disco dal RAID è necessario effettuarne l’unmount, indicarlo come difettoso e infine eliminarlo. Ad esempio, per rimuovere `/dev/sda2` dal RAID esegui il comando:

```sh
umount /dev/md2
```
Il risultato restituito sarà di questo tipo:

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

A questo punto la partizione`/dev/md2` non è più montata, ma il RAID è ancora attivo. Per rimuovere il disco è necessario indicarlo come difettoso con il comando:

```sh
mdadm --fail /dev/md2 /dev/sda2
```

In questo modo abbiamo simulato un malfunzionamento del RAID. Lo step successivo consiste nella rimozione della partizione dal RAID:

```sh
mdadm --remove /dev/md2 /dev/sda2
```

Per verificare che l’operazione sia stata effettuata correttamente, utilizza il comando:

```sh
cat /proc/mdstat 

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 

md2 : active raid1 sda2[0] sdb2[1] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

Per verificare la corretta rimozione della partizione esegui il comando:

```sh
mdadm --detail /dev/md2

/dev/md2:
        Versione: 0.90
  Creation Time: Wed Apr 29 16:58:08 2015
     Raid Level: raid1
     Array Size: 96211904 (91.75 GiB 98.52 GB)
  Used Dev Size: 96211904 (91.75 GiB 98.52 GB)
   Raid Devices: 3
  Total Devices: 2
Preferred Minor: 2
    Persistence: Superblock is persistent

    Update Time: Sat Jun 20 12:55:24 2015
          State : clean, degraded 
 Active Devices: 2
Working Devices: 2
 Failed Devices : 0
  Spare Devices: 0

           UUID 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events: 0.90

    Number   Major   Minor   RaidDevice State
 0 0 0 0 removed
       1       8       18        1      active sync   /dev/sdb2
       2       8       34        2      active sync   /dev/sdc2
```

Una volta sostituito il disco, copia la tabella delle partizioni da un disco funzionante (nell’esempio, “sdb”) in quello nuovo (“sda”) con il comando: 

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```
A questo punto è possibile ricostruire il volume RAID. Il codice seguente mostra come ricostruire la partizione`/dev/md2` tramite la tabella di “sda” copiata precedentemente: 

```sh
mdadm --add /dev/md2 /dev/sda2
cat /proc/mdstat
```
Per verificare i dettagli del RAID, utilizza il comando:

```sh
mdadm --detail /dev/md2

/dev/md2:
        Versione: 0.90
  Creation Time: Mon Mar 05 16:58:08 2018
     Raid Level: raid1
     Array Size: 96211904 (91.75 GiB 98.52 GB)
  Used Dev Size: 96211904 (91.75 GiB 98.52 GB)
   Raid Devices: 3
  Total Devices: 3
Preferred Minor: 2
    Persistence: Superblock is persistent

    Update Time: Tue Mar 06 16:58:08 2018
          State : clean, degraded, recovering 
 Active Devices: 2
Working Devices: 3
 Failed Devices : 0
  Spare Devices: 1

 Rebuild Status : 21% complete

           UUID 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events: 0.95

    Number   Major   Minor   RaidDevice State
       3       8        2        0      spare rebuilding   /dev/sda2
       1       8       18        1      active sync   /dev/sdb2
       2       8       34        2      active sync   /dev/sdc2
```

Una volta che il RAID è stato ricostruito, effettua il mount della partizione (nell’esempio, `/dev/md2`) con il comando: 

```sh
mount /dev/md2 /home
```


## Per saperne di più

* [Hot Swap – RAID Software](https://docs.ovh.com/it/dedicated/hotswap-raid-soft/){.external}
* [Hot Swap - RAID Hardware](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/){.external} (in inglese)
* [Gestire il RAID Hardware](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (in inglese)
* Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.