---
title: 'RAID por software'
slug: raid-software
excerpt: 'Cómo configurar el RAID de un servidor en caso de fallo del disco'
section: 'RAID y discos'
updated: 2022-10-11
---

**Última actualización: 21/02/2023**

## Objetivo

El RAID (Redundant Array of Independent Disks) es un conjunto de técnicas diseñadas para prevenir la pérdida de datos en un servidor, replicándolos en varios discos.

El nivel de RAID por defecto en los servidores de OVHcloud es RAID 1. Con este nivel de RAID, el volumen que ocupan los datos se duplica, por lo que el espacio en disco útil se reduce a la mitad.

**Esta guía explica cómo configurar el RAID de un servidor en caso de que sea necesario reconstruirlo por corrupción o fallo del disco.**

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/){.external} con RAID por software.
- Tener acceso al servidor por SSH como administrador (root).

## Procedimiento

### Eliminación del disco

Para comprobar el estado actual del RAID, utilice el siguiente comando:

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

Este comando muestra dos conjuntos RAID configurados actualmente. La partición de mayor tamaño es **md4**, y está formada por dos discos llamados **sda4** y **sdb4**. **[UU]** significa que todos los discos funcionan con normalidad. Un guion bajo (**_**) indicaría un fallo en un disco.

Aunque este comando muestra los volúmenes RAID, no indica el tamaño de las particiones. Para obtener esta información, utilice el siguiente comando:

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

El comando `fdisk -l` también le permite identificar su tipo de partición. Esta es una información importante que deberá conocer cuando se trate de reconstruir su RAID en caso de fallo de un disco.

Para las particiones GPT, el comando devolverá: `Disklabel type: gpt`.

```sh
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
`Disklabel type: gpt`
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F
```

Para las particiones MBR, el comando devolverá: `Disklabel type: dos`.

```sh
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Disk model: QEMU HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
`Disklabel type: dos`              
Disk identifier: 0x150f6797
```

Este comando muestra que **/dev/md2** contiene 888,8 GB y **/dev/md4** contiene 973,5 GB. Para ver la disposición del disco, ejecute el comando `mount`.

```sh
# mount

sysfs on /sys type sysfs (rw,nosed,nodev,noexec,relatime)
proc on /proc type proc (rw,nosed,nodev,noexec,relatime)
udev on /dev type devtmpfs (rw,nosed,relatime,size=16315920k,nr_inodes=4078980,mode=755)
devpts on /dev/pts type devpts (rw,nosed,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /run type tmpfs (rw,nosed,noexec,relatime,size=326656k,mode=755)
/dev/md2 on / type ext4 (rw,relatime)
securityfs on /sys/kernel/security type securityfs (rw,nosed,nodev,noexec,relatime)
tmpfs on /dev/shm type tmpfs (rw,nosed,nodev)
tmpfs on /run/lock type tmpfs (rw,nosed,nodev,noexec,relatime,size=5120k)
tmpfs on /sys/fs/cgroup type tmpfs (ro,nosed,nodev,noexec,mode=755)
cgroup2 on /sys/fs/cgroup/unified tipo cgroup2 (rw,nosed,nodev,noexec,relatime,nsdelegate)
cgroup on /sys/fs/cgroup/systemd type cgroup (rw,nosed,nodev,noexec,relatime,xlute,name=systemd)
pstore on /sys/fs/pstore tipo pstore (rw,nosed,nodev,noexec,relatime)
bpf on /sys/fs/bpf type bpf (rw,nosed,nodev,noexec,relatime,mode=700)
cgroup on /sys/fs/cgroup/pids type cgroup (rw,nosed,nodev,noexec,relatime,pids)
cgroup on /sys/fs/cgroup/memory type cgroup (rw,nosed,nodev,noexec,relatime,memory)
cgroup on /sys/fs/cgroup/perf_event type cgroup (rw,nosed,nodev,noexec,relatime,perf_event)
cgroup on /sys/fs/cgroup/rdma type cgroup (rw,nosed,nodev,noexec,relatime,rdma)
cgroup on /sys/fs/cgroup/net_cls,net_prio type cgroup (rw,nosed,nodev,noexec,relatime,net_cls,net_prio)
cpuacct on /sys/fs/cgroup/cpu,cpuacct type cgroup (rw,nosed,nodev,noexec,relatime,cpu,cpuacct)
cgroup on /sys/fs/cgroup/freezer type cgroup (rw,nosed,nodev,noexec,relatime,freezer)
cgroup on /sys/fs/cgroup/blkio type cgroup (rw,nosed,nodev,noexec,relatime,blkio)
cgroup on /sys/fs/cgroup/devices type cgroup (rw,nosed,nodev,noexec,relatime,devices)
cgroup on /sys/fs/cgroup/cpuset type cgroup (rw,nosed,nodev,noexec,relatime,cpuset)
debugfs on /sys/kernel/debug type debugfs (rw,relatime)
hugetlbfs on /dev/hugepages type hugetlbfs (rw, relatime, pagesize=2M)
mqueue on /dev/mqueue type mqueue (rw,relatime)
systemd-1 on /proc/sys/fs/binfmt_misc type autofs (rw,relatime,fd=45,pgrp=1,timeout=0,minproto=5,maxproto=5,direct,pipe_ino=10340)
/dev/md4 on /home type ext3 (rw,relatime)
tmpfs on /run/user/1000 type tmpfs (rw,nosed,nodev,relatime,size=326652k,mode=700,uid=1000,gid=1000)
```

Como alternativa, el comando `lsblk` ofrece una vista diferente de las particiones:

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

Ahora los discos están montados. Para sacar un disco del RAID, es necesario desmontar el disco en primer lugar y luego marcarlo como defectuoso para poder eliminarlo.
A continuación, podrá sacar **/dev/sda4** del RAID.

```sh
umount /dev/md4
```

> [!warning]
> Tenga en cuenta que, si está conectado como usuario root, puede obtener el siguiente mensaje cuando intente desmontar la partición (en nuestro caso, la partición md4 está montada en /home):
> 
> `umount: /home: target is busy`
>
> En ese caso, deberá desconectarse como usuario root y conectarse como usuario local (en nuestro caso, `debian`) y utilizar el siguiente comando:
> 
> `debian@ns000000:/$ sudo umount /dev/md4`
>
> Si no tiene un usuario local, debe crear uno.


Obtendrá la siguiente respuesta:

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

La entrada **/dev/md4** ya no está montada. Sin embargo, el RAID sigue activo. Para poder retirar el disco, debe marcarlo como defectuoso con el siguiente comando:

```sh
sudo mdadm --fail /dev/md4 /dev/sda4
```

De este modo, hemos simultado un fallo del RAID. Ya puede proceder a eliminar la partición del RAID con el siguiente comando:

```sh
sudo mdadm --remove /dev/md4 /dev/sda4
```

Para comprobar el nuevo estado del RAID, utilice el siguiente comando:

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

El siguiente comando permite comprobar que la partición se ha eliminado:

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

### Reconstrucción del RAID

Una vez sustituido el disco, copie la tabla de particiones desde un disco « sano » (**sdb** en el ejemplo) a la nueva partición (**sda**) con el siguiente comando:

**Para las particiones GPT**

```sh
sgdisk -R /dev/sda /dev/sdb 
```

El comando debe tener el siguiente formato: `sgdisk -R /dev/nuevodisco /dev/discosano`

Una vez realizada esta operación, podrá aleatoriamente utilizar el GUID del nuevo disco para evitar cualquier conflicto de GUID con el resto de discos:

```sh
sgdisk -G /dev/sda
```

**Para las particiones MBR**

Una vez sustituido el disco, copie la tabla de particiones desde un disco sano (**sdb** en el ejemplo) en la nueva partición (**sda**) con el siguiente comando: 

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

El comando debe tener el siguiente formato: `sfdisk -d /dev/discosano | sfdisk /dev/nuovodisco`.

Ya puede reconstruir el RAID. El siguiente fragmento de código muestra cómo reconstruir la disposición de la partición **/dev/md4** con la tabla de particiones « sda » anteriormente copiada: 

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

Para comprobar los detalles del RAID, utilice el siguiente comando:

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

Una vez reconstruido el RAID, monte la partición (**/dev/md4**, en el ejemplo) con el siguiente comando: 

```sh
mount /dev/md4 /home
```


## Más información

[Sustituir un disco en caliente en un servidor con RAID por software](https://docs.ovh.com/es/dedicated/hotswap-raid-soft/){.external}

[Hot Swap - RAID Hardware (EN)](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/){.external}

[RAID por hardware](https://docs.ovh.com/es/dedicated/raid-hardware/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.