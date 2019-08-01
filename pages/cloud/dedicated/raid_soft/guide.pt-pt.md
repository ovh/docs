---
title: 'RAID por software'
slug: raid-soft
excerpt: 'Saiba como configurar o RAID de um servidor em caso de avaria ou de falha de disco'
section: 'RAID e discos'
---

**Última atualização: 22/07/2019**

## Sumário

O RAID (Redundant Array of Independent Disks) é um conjunto de técnicas concebidas para atenuar a perda de dados num servidor através da replicação dos dados em vários discos.

O nível de RAID predefinido nos servidores da OVH é RAID 1, ou seja, o dobro do espaço ocupado pelos dados, reduzindo assim para metade o espaço de disco utilizável.

**Este manual explica-lhe como configurar a matriz RAID de um servidor em caso de ter de ser reconstruída por motivos de corrupção ou de avaria de disco.**

## Requisitos

* Dispor de um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external} com uma configuração RAID por software.
* Ter acesso ao servidor através de SSH enquanto administrador (root).

## Instruções

A verificação do estado atual do RAID pode ser efetuado através do seguinte comando:

```sh
cat /proc/mdstat

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 
md2 : active raid1 sdb2[1] sdc2[2]
       96211904 blocks [3/2] [_UU]
      
 md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
       20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

Este comando mostra as duas matrizes RAID que estão configuradas, sendo que “md2” é a maior partição. Uma partição é composta por três discos, chamados “sda2”, “sdb2” e ”sdc2”. “\[UUU]” significa que todos os discos funcionam normalmente. Um “_” indicará um disco defeituoso.

Embora este comando mostre os volumes RAID, este não indica o tamanho das próprias partições. Para obter esta informação, utilize o seguinte comando:

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

Este comando mostra que `/dev/md1` é composto por 21 GB e `/dev/md2` contém 98,5 GB. Para mostrar a disposição do disco, execute o comando “mount”.

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
Os discos estão montados por predefinição. Para retirar um disco, em primeiro lugar deve desmontar o disco e, a seguir, simular uma falha para o poder eliminar.
De seguida, elimine `/dev/sda2` do RAID com o seguinte comando:

```sh
umount /dev/md2
```
O resultado deverá ser este:

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

A entrada de `/dev/md2` já não está montada. No entanto, o RAID ainda está ativo. Assim, é necessário simular uma falha para retirar o disco, o que pode ser efetuado graças ao seguinte comando:

```sh
mdadm --fail /dev/md2 /dev/sda2
```

Uma vez simulada a falha no RAID, pode eliminar a partição com o seguinte comando:

```sh
mdadm --remove /dev/md2 /dev/sda2
```

Poderá verificar que a partição foi eliminada com o seguinte comando:

```sh
cat /proc/mdstat 

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 

md2 : active raid1 sdb2[1] sdc2[2]
       96211904 blocks [3/2] [_UU]
      
 md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
       20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

O comando abaixo verifica que a partição foi eliminada:

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

Uma vez substituído o disco, copie a tabela de partição a partir de um disco são (“sdb”) para a nova (“sda”), com o seguinte comando: 

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```
Já pode reconstruir a matriz RAID. O seguinte extrato do código mostra como reconstruir a disposição da partição `/dev/md2` com a tabela de partição “sda” que acaba de copiar: 

```sh
mdadm --add /dev/md2 /dev/sda2
cat /proc/mdstat
```
Verifique os detalhes do RAID com o seguinte comando:

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

O RAID foi reconstruído. Para montar a partição (`/dev/md2`, no exemplo), utilize o seguinte comando: 

```sh
mount /dev/md2 /home
```


## Quer saber mais?

* [Hot Swap – RAID por hardware](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/){.external}
* [Hot Swap – RAID por software](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-soft/){.external}
* [RAID por hardware](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}
* Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.