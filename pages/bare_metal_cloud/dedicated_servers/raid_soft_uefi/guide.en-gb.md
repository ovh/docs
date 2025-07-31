---
title: How to configure and rebuild software RAID on a Dedicated server with UEFI boot mode
excerpt: Find out how to verify the state of your software RAID and rebuild it after a disk replacement
updated: 2023-08-21
---

## Objective

Redundant Array of Independent Disks (RAID) is a technology that mitigates data loss on a server by replicating data across two or more disks.

The default RAID level for OVHcloud server installations is RAID 1, which doubles the space taken up by your data, effectively halving the useable disk space.

**This guide explains how to configure your server’s RAID array in the event that it needs to be rebuilt due to corruption or disk failure.**

Before we begin, please note that this guide focuses on Dedicated servers that use UEFI as the boot mode. This is the case with modern motherboards. If your server uses the BIOS mode (old motherboards), refer to this guide [How to configure and rebuild software RAID on a Dedicated server with BIOS boot mode]().

For more information on UEFI, consult the following [guide](https://uefi.org/about){.external}

## Requirements

- A [Dedicated server](/links/bare-metal/bare-metal) with a software RAID configuration
- Administrative (sudo) access to the server via SSH
- Understanding of RAID, partitions and GRUB

## Instructions

Over the course of this guide, we will explore three scenarios:

- Disk failure simulation (preventive measure)
- Dealing with a faulty disk that is still present in RAID.
- Dealing with a faulty disk that is no longer present in RAID.

### System verification

To check whether a server runs on BIOS mode or UEFI mode, run the following command:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

#### Basic information

To begin, type the following code in a command line session to determine the current RAID status:

```sh
cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 sda3[0] sdb3[1]
      3904786432 blocks super 1.2 [2/2] [UU]
      bitmap: 2/30 pages [8KB], 65536KB chunk

md2 : active raid1 sda2[0] sdb2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

This command shows us that we have two software RAID devices currently set up, with **md3** being the largest one. This array consists of two partitions, which are known as sda3 and sdb3. The [UU] means that all the disks are working normally. A `_` would indicate a failed disk.

Although this command returns our RAID volumes, it doesn't tell us the size of the partitions themselves. We can find this information with the following command:

```sh
sudo fdisk -l

Disk /dev/sdb: 3.64 TiB, 4000787030016 bytes, 7814037168 sectors
Disk model: HGST HUS726T4TAL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 3253EEB9-DC20-4887-9E64-69655C758811

Device          Start        End    Sectors  Size Type
/dev/sdb1        2048    1048575    1046528  511M EFI System
/dev/sdb2     1048576    3145727    2097152    1G Linux RAID
/dev/sdb3     3145728 7812982783 7809837056  3.6T Linux RAID
/dev/sdb4  7812982784 7814031359    1048576  512M Linux filesystem


Disk /dev/sda: 3.64 TiB, 4000787030016 bytes, 7814037168 sectors
Disk model: HGST HUS726T4TAL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 5D8AF9B0-E363-40AF-A3CA-FADB7B3C6A10

Device          Start        End    Sectors  Size Type
/dev/sda1        2048    1048575    1046528  511M EFI System
/dev/sda2     1048576    3145727    2097152    1G Linux RAID
/dev/sda3     3145728 7812982783 7809837056  3.6T Linux RAID
/dev/sda4  7812982784 7814031359    1048576  512M Linux filesystem
/dev/sda5  7814033072 7814037134       4063    2M Linux filesystem


Disk /dev/md2: 1022 MiB, 1071644672 bytes, 2093056 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/md3: 3.64 TiB, 3998501306368 bytes, 7809572864 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

The `fdisk -l` command also allows you to identify your partition type. This is an important information when it comes to rebuilding your RAID in case of a disk failure.

For **GPT** partitions, the command will return: `Disklabel type: gpt`.

```sh
Disk /dev/sdb: 3.64 TiB, 4000787030016 bytes, 7814037168 sectors
Disk model: HGST HUS726T4TAL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 3253EEB9-DC20-4887-9E64-69655C758811
```

For **MBR** partitions, the command will return: `Disklabel type: dos`.

```sh
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Disk model: QEMU HARDDISK
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
'Disklabel type: dos'            
Disk identifier: 0x150f6797
```

Still going by the results of `fdisk -l`, we can see that `/dev/md2` consists of 1022 MiB and `/dev/md3` contains 3.64 TiB. If we were to run the mount command we can also find out the layout of the disk.

```sh
mount

sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime)
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime)
udev on /dev type devtmpfs (rw,nosuid,relatime,size=16288028k,nr_inodes=4072007,mode=755,inode64)
devpts on /dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /run type tmpfs (rw,nosuid,nodev,noexec,relatime,size=3263252k,mode=755,inode64)
/dev/md3 on / type ext4 (rw,relatime)
securityfs on /sys/kernel/security type securityfs (rw,nosuid,nodev,noexec,relatime)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev,inode64)
tmpfs on /run/lock type tmpfs (rw,nosuid,nodev,noexec,relatime,size=5120k,inode64)
cgroup2 on /sys/fs/cgroup type cgroup2 (rw,nosuid,nodev,noexec,relatime,nsdelegate,memory_recursiveprot)
pstore on /sys/fs/pstore type pstore (rw,nosuid,nodev,noexec,relatime)
efivarfs on /sys/firmware/efi/efivars type efivarfs (rw,nosuid,nodev,noexec,relatime)
bpf on /sys/fs/bpf type bpf (rw,nosuid,nodev,noexec,relatime,mode=700)
systemd-1 on /proc/sys/fs/binfmt_misc type autofs (rw,relatime,fd=30,pgrp=1,timeout=0,minproto=5,maxproto=5,direct,pipe_ino=926)
hugetlbfs on /dev/hugepages type hugetlbfs (rw,relatime,pagesize=2M)
mqueue on /dev/mqueue type mqueue (rw,nosuid,nodev,noexec,relatime)
debugfs on /sys/kernel/debug type debugfs (rw,nosuid,nodev,noexec,relatime)
tracefs on /sys/kernel/tracing type tracefs (rw,nosuid,nodev,noexec,relatime)
fusectl on /sys/fs/fuse/connections type fusectl (rw,nosuid,nodev,noexec,relatime)
configfs on /sys/kernel/config type configfs (rw,nosuid,nodev,noexec,relatime)
ramfs on /run/credentials/systemd-sysctl.service type ramfs (ro,nosuid,nodev,noexec,relatime,mode=700)
ramfs on /run/credentials/systemd-sysusers.service type ramfs (ro,nosuid,nodev,noexec,relatime,mode=700)
ramfs on /run/credentials/systemd-tmpfiles-setup-dev.service type ramfs (ro,nosuid,nodev,noexec,relatime,mode=700)
/dev/md2 on /boot type ext4 (rw,relatime)
/dev/sda1 on /boot/efi type vfat (rw,relatime,fmask=0022,dmask=0022,codepage=437,iocharset=ascii,shortname=mixed,utf8,errors=remount-ro)
ramfs on /run/credentials/systemd-tmpfiles-setup.service type ramfs (ro,nosuid,nodev,noexec,relatime,mode=700)
binfmt_misc on /proc/sys/fs/binfmt_misc type binfmt_misc (rw,nosuid,nodev,noexec,relatime)
tmpfs on /run/user/1000 type tmpfs (rw,nosuid,nodev,relatime,size=3263248k,nr_inodes=815812,mode=700,uid=1000,gid=1000,inode64)
```

Alternatively, the `lsblk` command offers a different view of the partitions:

```sh
lsblk

NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
sda       8:0    0   3.6T  0 disk
├─sda1    8:1    0   511M  0 part  /boot/efi
├─sda2    8:2    0     1G  0 part
│ └─md2   9:2    0  1022M  0 raid1 /boot
├─sda3    8:3    0   3.6T  0 part
│ └─md3   9:3    0   3.6T  0 raid1 /
├─sda4    8:4    0   512M  0 part  [SWAP]
└─sda5    8:5    0     2M  0 part
sdb       8:16   0   3.6T  0 disk
├─sdb1    8:17   0   511M  0 part
├─sdb2    8:18   0     1G  0 part
│ └─md2   9:2    0  1022M  0 raid1 /boot
├─sdb3    8:19   0   3.6T  0 part
│ └─md3   9:3    0   3.6T  0 raid1 /
└─sdb4    8:20   0   512M  0 part  [SWAP]
sdc       8:32   1     0B  0 disk
sr0      11:0    1  1024M  0 rom
```

With UEFI mode, ESPs (lablled EFI_SYSPART by OVHcloud) partitions are created on the disks used for RAID, however, only one partition is automatically mounted in `/boot/efi` by the system after install. It is important to understand the role of this partition and how to manage it.

Unfortunately, at this time, `/boot/efi` is not mirrored in our RAID installations, therefore, if you need to have the content of this partition up dated to the other disk(s), you will need sync these partitions.

The command `lsblk -f` offers a more detailed output:

```sh
lsblk -f

NAME    FSTYPE            FSVER            LABEL       UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
sda
├─sda1  vfat              FAT16            EFI_SYSPART 7A52-33BE                             504.8M     1% /boot/efi
├─sda2  linux_raid_member 1.2              md2         aa1265ff-d8a7-9b64-0109-1086e78a451c
│ └─md2 ext4              1.0              boot        857b98e6-a5d8-4126-95c8-1451cea76a5b  850.3M     7% /boot
├─sda3  linux_raid_member 1.2              md3         7eb971ad-6f31-0998-50f2-50f330c34361
│ └─md3 ext4              1.0              root        4b8782be-3bd4-4b96-8129-491806a54b46    3.4T     0% /
├─sda4  swap              1                swap-sda4   da546332-ea7c-4f0d-969c-5b8818c8dc81                [SWAP]
└─sda5  iso9660           Joliet Extension config-2    2025-07-23-17-11-22-00
sdb
├─sdb1  vfat              FAT16            EFI_SYSPART 7A68-19BC
├─sdb2  linux_raid_member 1.2              md2         aa1265ff-d8a7-9b64-0109-1086e78a451c
│ └─md2 ext4              1.0              boot        857b98e6-a5d8-4126-95c8-1451cea76a5b  850.3M     7% /boot
├─sdb3  linux_raid_member 1.2              md3         7eb971ad-6f31-0998-50f2-50f330c34361
│ └─md3 ext4              1.0              root        4b8782be-3bd4-4b96-8129-491806a54b46    3.4T     0% /
└─sdb4  swap              1                swap-sdb4   37dda653-4074-4c28-953c-ae627fe53816                [SWAP]
sdc
sr0
nvme0n1
nvme1n1
```

From the above output, we can see that two partitions (sda1 and sdb1) with the label `EFI_SYSPART` were created on both disks. However, the OS selected **sda1** to mount the partition in `/boot/efi`.

This partition contains the boot loaders (and sometimes kernel images and drivers), which helps the server to boot but it is not protected through the software RAID. In general, the content of this partition remains the same **unless** there is a kernel update, in this case you must sync both partitions to keep them up to date.

In case of the failure of the main disk containing this partition, the server will be rebooted in rescue mode for you to recreate the partition on the new disk and copy the files from the healthy disk to the new disk (More information on this later in the guide.). It is therefore important keep the duplicated partition up to date when necessary, since it is not present in the RAID. 

Alternatively, you can explore another premptive option such as keeping these partitions synchronised by either running a manual script daily (or when needed) or running an automatic script to sync both partitions on boot. You must be the user **root** to run this script.

Scrip example:

```bash
#!/bin/bash
set -euo pipefail

MAIN_PARTITION="$(findmnt -n -o SOURCE /boot/efi)"
MOUNTPOINT="/var/lib/grub/esp"

mkdir -p "${MOUNTPOINT}"

while read -r partition; do
    if [[ "${partition}" == "${MAIN_PARTITION}" ]]; then
        continue
    fi
    echo "Working on ${partition}"
    mount "${partition}" "${MOUNTPOINT}"
    rsync -ax "/boot/efi/" "${MOUNTPOINT}/"
    umount "${MOUNTPOINT}"
done < <(blkid -o device -t LABEL=EFI_SYSPART) 
```

The script above can be run manually to keep them synchronized, the difficulty being knowing when to execute it. The ideal solution would probably be to use dpkg triggers to only do this when updating the `grub-efi-amd64` package.


> [!warning]
> If you are on an Ubuntu system, you can easily keep these partitions synchronised with a grub installation, but this ONLY works for Ubuntu system. For other linux systems, this must been done manually or when using a sync. For more information consult this article.
> 

### Simulating a Disk failure

When you purchase a new server, you might feel the need to perform a series of tests and actions. One of those actions could be simulating a disk failure in order to understand the process of rebuilding the raid and prepare yourself in case this happens. 

#### Removing the Dis

As the disks are currently mounted by default, to remove a disk from the RAID, we first need to unmount the disk, then simulate a failure, and finally remove it. We will remove `/dev/sda4` from the RAID with the following command:

```sh
umount /dev/md4
```

> [!warning]
> Please note that if you are connected as the user `root`, you may get the following message when you try to unmount the partition (in our case, where our md4 partition is mounted in /home):
>
> <pre class="highlight language-console"><code class="language-console">umount: /home: target is busy</code></pre>
>
> In this case, you must log out as the user root and connect as a local user (in our case `debian`), and use the following command:
>
> <pre class="highlight language-console"><code class="language-console">debian@ns000000:/$ sudo umount /dev/md4</code></pre>
>
> If you do not have a local user, you need to [create one](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

This will provide us with the following output:

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

As we can see the, entry of `/dev/md4` is no longer mounted. However, the RAID is still active, so we need to simulate a failure to remove the disk. We can do this with the following command:

```sh
sudo mdadm --fail /dev/md4 /dev/sda4
```

We have now simulated a failure of the RAID. The next step is to remove the partition from the RAID array with the following command:

```sh
sudo mdadm --remove /dev/md4 /dev/sda4
```

You can verify that the partition has been removed with the following command:

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

The following command will verify that the partition has been removed:

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

### Rebuilding the RAID

Once the disk has been replaced, we need to copy the partition table from a healthy disk (in this example, sdb) to the new one (sda) with the following command:

**For GPT partitions**n n

```sh
sgdisk -R /dev/sda /dev/sdb nmnn
```

The command should be in this format: `sgdisk -R /dev/newdisk /dev/healthydisk`

Once this is done, the next step is to randomize the GUID of the new disk to prevent GUID conflicts with other disks:

```sh
sgdisk -G /dev/sda
```

**For MBR partitions**

Once the disk has been replaced, we need to copy the partition table from a healthy disk (in this example, sdb) to the new one (sda) with the following command:

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

The command should be in this format: `sfdisk -d /dev/healthydisk | sfdisk /dev/newdisk`

We can now rebuild the RAID array. The following code snippet shows how we can rebulid the `/dev/md4` partition layout with the recently-copied sda partition table:

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

We can verify the RAID details with the following command:

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

The RAID has now been rebuilt, but we still need to mount the partition (`/dev/md4` in this example) with the following command:

```sh
mount /dev/md4 /home
```

## Go Further

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Join our [community of users](/links/community).
