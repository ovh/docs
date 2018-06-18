---
title: 'Configuring software RAID'
slug: raid-soft
excerpt: 'This guide will help you configure your server’s RAID array in the event that it needs to be rebuilt due to corruption or disk failure.'
section: 'Server Management'
---

**Last updated 18th June 2018**

## Objective

Redundant Array of Independent Disks (RAID) is a utility that mitigates data loss on a server by replicating data across two or more disks.

The default RAID level for OVH server installations is RAID 1, which doubles the space taken up by your data, effectively halving the useable disk space.

**This guide will help you configure your server’s RAID array in the event that it needs to be rebuilt due to corruption or disk failure.**

## Requirements

* a [dedicated server](https://www.ovh.co.uk/dedicated_servers/){.external} with a software RAID configuration
* administrative (root) access to the server via SSH

## Instructions

In a command line session, type the following code to determine the current RAID status:

```sh
cat /proc/mdstat

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 
md2 : active raid1 sdb2[1] sda2[0] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

This command shows us that we have two RAID arrays currently set up, with md2 being the largest partition. The partition consists of all three disks, which are known as sda2, sdb2 and sdc2. The [UUU] means that all the disks are working normally. An F would indicate a failed disk.

Although this command returns our RAID volumes, it doesn't tell us the size of the partitions themselves. We can find this information with the following command:

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

We can see that `/dev/md1` consists of 21GB and `/dev/md2` contains 98.5GB. If we were to run the mount command we can also find out the layout of the disk.

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

As the disks are currently mounted by default, to remove a disk from the RAID, we first need to unmount the disk, then simulate a failure, and finally remove it. We will remove `/dev/sda2` from the RAID with the following command:

```sh
umount /dev/md2
```

This will provide us with the following output:

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

As we can see the, entry of `/dev/md2` is no longer mounted. However, the RAID is still active, so we need to simulate a failure to remove the disk. We can do this with the following command:

```sh
mdadm --fail /dev/md2 /dev/sda2
```

We have now simulated a failure of the RAID. The next step is to remove the partition from the RAID array with the following command:

```sh
mdadm --remove /dev/md2 /dev/sda2
```

You can verify that the partition has been removed with the following command:

```sh
cat /proc/mdstat 

Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty] 

md2 : active raid1 sda2[0] sdb2[1] sdc2[2]
      96211904 blocks [3/3] [UUU]
      
md1 : active raid1 sdc1[2] sdb1[1] sda1[0]
      20478912 blocks [3/3] [UUU]
      
unused devices: <none>
```

The following command will verify that the partition has been removed:

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

Once the disk has been replaced, we need to copy the partition table from a healthy disk (in this example, sdb) to the new one (sda) with the following command: 

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

We can now rebuild the RAID array. The following code snippet shows how we can rebulid the `/dev/md2` partition layout with the recently-copied sda partition table: 

```sh
mdadm --add /dev/md2 /dev/sda2
cat /proc/mdstat
```

We can verify the RAID details with the following command:

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

The RAID has now been rebuilt, but we still need to mount the partition (`/dev/md2` in this example) with the following command: 

```sh
mount /dev/md2 /home
```

## Go Further

* [Hot Swap – Hardware RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/){.external}
* [Hot Swap – Software RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-soft/){.external}
* [Hardware RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}
* Join our community of users on <https://community.ovh.com/en/>.