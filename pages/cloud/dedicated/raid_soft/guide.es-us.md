---
title: 'RAID por software'
slug: raid-software
excerpt: 'Cómo configurar el RAID de un servidor en caso de fallo del disco'
section: 'RAID y discos'
---

**Última actualización: 23/05/2019**

## Objetivo

El RAID (Redundant Array of Independent Disks) es un conjunto de técnicas diseñadas para prevenir la pérdida de datos en un servidor, replicándolos en varios discos.

El nivel de RAID por defecto en los servidores de OVHcloud es RAID 1. Con este nivel de RAID, el volumen que ocupan los datos se duplica, por lo que el espacio en disco útil se reduce a la mitad.

**Esta guía explica cómo configurar el RAID de un servidor en caso de que sea necesario reconstruirlo por corrupción o fallo del disco.**

## Requisitos

* Tener un [servidor dedicado](https://www.ovh.com/world/es/servidores_dedicados/){.external} con RAID por software.
* Tener acceso al servidor por SSH como administrador (root).

## Procedimiento

Para comprobar el estado actual del RAID, utilice el siguiente comando:

```sh
cat /proc/mdstat

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 
md2 : active raid1 sdb2[1] sda2[0] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

Este comando muestra dos conjuntos RAID configurados actualmente. La partición de mayor tamaño es **md2**, y está formada por tres discos llamados **sda2**, **sdb2** y **sdc2**. **[UUU]** significa que todos los discos funcionan con normalidad. Un guion bajo (**_**) indicaría un fallo en un disco.

Aunque este comando muestra los volúmenes RAID, no indica el tamaño de las particiones. Para obtener esta información, utilice el siguiente comando:

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

Este comando muestra que **/dev/md1** contiene 21 GB y **/dev/md2**, 98,5 GB. Para ver la disposición del disco, ejecute el comando `mount`.

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
Ahora los discos están montados. Para sacar un disco del RAID, es necesario desmontar el disco en primer lugar y luego marcarlo como defectuoso para poder eliminarlo.
A continuación, podrá sacar **/dev/sda2** del RAID.

```sh
umount /dev/md2
```
Obtendrá la siguiente respuesta:

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

La entrada **/dev/md2** ya no está montada. Sin embargo, el RAID sigue activo. Para poder retirar el disco, debe marcarlo como defectuoso con el siguiente comando:

```sh
mdadm --fail /dev/md2 /dev/sda2
```

De este modo, hemos simultado un fallo del RAID. Ya puede proceder a eliminar la partición del RAID con el siguiente comando:

```sh
mdadm --remove /dev/md2 /dev/sda2
```

Para comprobar el nuevo estado del RAID, utilice el siguiente comando:

```sh
cat /proc/mdstat 

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 

md2 : active raid1 sdb2[1] sdc2[2]
      96211904 blocks [3/2] [_UU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

El siguiente comando permite comprobar que la partición se ha eliminado:

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

Una vez sustituido el disco, copie la tabla de particiones desde un disco «sano» (**sdb** en el ejemplo) a la nueva partición (**sda**) con el siguiente comando: 

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```
Ya puede reconstruir el RAID. El siguiente fragmento de código muestra cómo reconstruir la disposición de la partición **/dev/md2** con la tabla de particiones «sda» anteriormente copiada: 

```sh
mdadm --add /dev/md2 /dev/sda2
cat /proc/mdstat
```
Para comprobar los detalles del RAID, utilice el siguiente comando:

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

Una vez reconstruido el RAID, monte la partición (**/dev/md2**, en el ejemplo) con el siguiente comando: 

```sh
mount /dev/md2 /home
```


## Más información

[Sustituir un disco en caliente en un servidor con RAID por software](../hotswap-raid-soft/){.external}

[RAID por hardware](../raid-hardware/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.
