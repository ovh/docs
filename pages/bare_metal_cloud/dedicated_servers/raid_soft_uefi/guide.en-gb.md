---
title: Managing and rebuilding software RAID on servers in UEFI boot mode
excerpt: Find out how to manage and rebuild software RAID after a disk replacement on your server in UEFI mode
updated: 2025-08-xx
---

## Objective

Redundant Array of Independent Disks (RAID) is a technology that mitigates data loss on a server by replicating data across two or more disks.

The default RAID level for OVHcloud server installations is RAID 1, which doubles the space taken up by your data, effectively halving the useable disk space.

**This guide explains how to manage and rebuild software RAID after a disk replacement on your server in UEFI mode**

Before we begin, please note that this guide focuses on Dedicated servers that use UEFI as the boot mode. This is the case with modern motherboards. If your server uses the BIOS mode (old motherboards), refer to this guide [How to configure and rebuild software RAID on a Dedicated server with BIOS boot mode](Managing and rebuilding software RAID on servers in BIOS boot mode).

For more information on UEFI, consult the following [guide](https://uefi.org/about){.external}

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) with a software RAID configuration
- Administrative (sudo) access to the server via SSH
- Understanding of RAID, partitions and GRUB

## Instructions

When you purchase a new server, you may feel the need to perform a series of tests and actions. One of these actions could be to simulate a disk failure in order to understand the RAID rebuild process and prepare yourself in case it ever happens.

### Basic Information

In a command line session, type the following code to determine the current RAID status:

```sh
cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 nvme1n1p3[1] nvme0n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1] nvme0n1p2[0]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

This command shows us that we have two software RAID devices currently set up, with **md3** being the largest one. This array consists of two partitions, which are known as **nvme1n1p3** and **nvme0n1p3**. 

The [UU] means that all the disks are working normally. A `_` would indicate a failed disk.

If you have a server with SATA disks, you would get the following results:

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

Although this command returns our RAID volumes, it doesn't tell us the size of the partitions themselves. We can find this information with the following command:

```sh
sudo fdisk -l

Disk /dev/nvme1n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: A11EDAA3-A984-424B-A6FE-386550A92435

Device             Start        End   Sectors   Size Type
/dev/nvme1n1p1      2048    1048575   1046528   511M EFI System
/dev/nvme1n1p2   1048576    3145727   2097152     1G Linux RAID
/dev/nvme1n1p3   3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme1n1p4 999161856 1000210431   1048576   512M Linux files


Disk /dev/nvme0n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F03AC3C3-D7B7-43F9-88DB-9F12D7281D94

Device              Start        End   Sectors   Size Type
/dev/nvme0n1p1       2048    1048575   1046528   511M EFI System
/dev/nvme0n1p2    1048576    3145727   2097152     1G Linux RAID
/dev/nvme0n1p3    3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme0n1p4  999161856 1000210431   1048576   512M Linux file
/dev/nvme0n1p5 1000211120 1000215182      4063     2M Linux file


Disk /dev/md2: 1022 MiB, 1071644672 bytes, 2093056 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/md3: 474.81 GiB, 509824991232 bytes, 995751936 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

The `fdisk -l` command also allows you to identify your partition type. This is an important information when it comes to rebuilding your RAID in case of a disk failure.

For **GPT** partitions, line 6 will display: `Disklabel type: gpt`.

For **MBR** partitions, line 6 will display: `Disklabel type: dos`.

Still going by the results of `fdisk -l`, we can see that `/dev/md2` consists of 1022 MiB and `/dev/md3` contains 474.81 GiB. If we were to run the mount command we can also find out the layout of the disk.

```sh
mount

sysfs on /sys type sysfs (rw,nosuid,nodev,noexec,relatime)
proc on /proc type proc (rw,nosuid,nodev,noexec,relatime)
udev on /dev type devtmpfs (rw,nosuid,relatime,size=16348288k,nr_inodes=4087072,mode=755)
devpts on /dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /run type tmpfs (rw,nosuid,nodev,noexec,relatime,size=3275188k,mode=755)
/dev/md3 on / type ext4 (rw,relatime)
securityfs on /sys/kernel/security type securityfs (rw,nosuid,nodev,noexec,relatime)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev)
tmpfs on /run/lock type tmpfs (rw,nosuid,nodev,noexec,relatime,size=5120k)
cgroup2 on /sys/fs/cgroup type cgroup2 (rw,nosuid,nodev,noexec,relatime,nsdelegate,memory_recursiveprot)
pstore on /sys/fs/pstore type pstore (rw,nosuid,nodev,noexec,relatime)
efivarfs on /sys/firmware/efi/efivars type efivarfs (rw,nosuid,nodev,noexec,relatime)
none on /sys/fs/bpf type bpf (rw,nosuid,nodev,noexec,relatime,mode=700)
systemd-1 on /proc/sys/fs/binfmt_misc type autofs (rw,relatime,fd=30,pgrp=1,timeout=0,minproto=5,maxproto=5,direct,pipe_ino=1462)
hugetlbfs on /dev/hugepages type hugetlbfs (rw,relatime,pagesize=2M)
mqueue on /dev/mqueue type mqueue (rw,nosuid,nodev,noexec,relatime)
debugfs on /sys/kernel/debug type debugfs (rw,nosuid,nodev,noexec,relatime)
tracefs on /sys/kernel/tracing type tracefs (rw,nosuid,nodev,noexec,relatime)
fusectl on /sys/fs/fuse/connections type fusectl (rw,nosuid,nodev,noexec,relatime)
configfs on /sys/kernel/config type configfs (rw,nosuid,nodev,noexec,relatime)
/dev/md2 on /boot type ext4 (rw,relatime)
/dev/nvme0n1p1 on /boot/efi type vfat (rw,relatime,fmask=0022,dmask=0022,codepage=437,iocharset=ascii,shortname=mixed,utf8,errors=remount-ro)
tmpfs on /run/user/1000 type tmpfs (rw,nosuid,nodev,relatime,size=3275184k,nr_inodes=818796,mode=700,uid=1000,gid=1000)
```

Alternatively, the `lsblk` command offers a different view of the partitions:

```sh
lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:7    0   511M  0 part
├─nvme1n1p2 259:8    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme1n1p3 259:9    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
└─nvme1n1p4 259:10   0   512M  0 part  [SWAP]
nvme0n1     259:1    0 476.9G  0 disk
├─nvme0n1p1 259:2    0   511M  0 part  /boot/efi
├─nvme0n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme0n1p3 259:4    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
├─nvme0n1p4 259:5    0   512M  0 part  [SWAP]
└─nvme0n1p5 259:6    0     2M  0 part
```

We take note of the devices, partitions and their mount points.

From the above commands and results, we have:

- Two RAID arrays: `/dev/md2` and `/dev/md3`.
- Partitions part of the RAID: `/boot` and `/`.
- Partitions not part of the RAID: `/boot/efi` and [SWAP].

### System verification

To check whether a server runs on BIOS mode or UEFI mode, run the following command:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

### Understanding the EFI partition

To begin let's understand what is UEFI mode. 

> [!primary]
> Please note that depending on your operating system, the process might be different. Ubuntu for example is able to keep both partitions synchronized at every GRUB update. However, it is the only operating system doing so. We recommend that you consult the official documentation of your operating system to understand how to manage this partition.
>
> In the guide, the operating system used is Debian.
> 

***What is an EFI partition?***

An EFI partition, is a partition which can contain the boot loaders, boot managers, or kernel images of an installed operating system. It also contains system utility programs designed to be run before the operating system boots, as well as data files such as error logs.

***Is the EFI partition mirrored in RAID?***

No, by default, the EFI partition is a partition that cannot be included in the RAID. When you use one of our default installation templates to install your server in a software RAID, two EFI partitions are created, one on each disk. However, only one EFI partition is mounted and used for the operating system installation.

The partition is mounted on the mount point: `/boot/efi` and the disk on which it is mounted is selected randomly by the operating system during installation.

Example:

```sh
lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:7    0   511M  0 part
├─nvme1n1p2 259:8    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme1n1p3 259:9    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
└─nvme1n1p4 259:10   0   512M  0 part  [SWAP]
nvme0n1     259:1    0 476.9G  0 disk
├─nvme0n1p1 259:2    0   511M  0 part  /boot/efi
├─nvme0n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme0n1p3 259:4    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
├─nvme0n1p4 259:5    0   512M  0 part  [SWAP]
└─nvme0n1p5 259:6    0     2M  0 part
```

From the example above, we see that we have two identical EFI partitions (nvme0n1p1 and nvme1n1p1) but only **nvme0n1p1** is mounted on `/boot/efi`.

We can also use the following command to confirm that two EFI partitions have been created after installation:

```sh
sudo lsblk -f
NAME        FSTYPE            FSVER            LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINT
nvme1n1
├─nvme1n1p1 vfat              FAT16            EFI_SYSPART    B493-9DFA
├─nvme1n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme1n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
└─nvme1n1p4 swap              1                swap-nvme1n1p4 483b9b41-ada3-4143-8cac-5bff7afb73c7                [SWAP]
nvme0n1
├─nvme0n1p1 vfat              FAT16            EFI_SYSPART    B486-9781                             504.9M     1% /boot/efi
├─nvme0n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme0n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
├─nvme0n1p4 swap              1                swap-nvme0n1p4 51e7172b-adb0-4729-b0f8-613e5dede38b                [SWAP]
└─nvme0n1p5 iso9660           Joliet Extension config-2       2025-08-05-14-55-41-00
```

From the results above, we can see two partitions (**nvme0n1p1** and **nvme1n1p1**), with identical size (504.9M). Both partitions have the LABEL: `EFI_SYSPART` but only one is mounted.

***Does the content of EFI partition change regularly?***

In general, the contents of this partition do not change much, except when there are relevant updates such as grub/kernel updates or even simple `apt` or `yum` updates.

In this case, we recommend running an automatic or manual script to synchronise the partitions. This is because if the main disk on which this partition is mounted fails, you can use rescue mode to recover it by recreating a new EFI partition on the new disk and copying the contents of the second partition to it.

***What happens if my main disk fails and is replaced?***

If your server's main disk fails and is replaced, the server will be restarted in rescue mode so that you can rebuild the RAID. Since the EFI partition is not mirrored, the server will not be able to boot from the secondary disk (in most cases). You can rebuild the RAID in rescue mode, recreate the EFI partition, and the drive should be able to boot.

***What if the main disk fails and I did not synchronise my EFI partitions after a major update (kernel/grub)?*** 

If this is the case, you will have to rebuild the RAID in rescue mode, create an EFI partition on the new disk and install the grub/kernel update in rescue mode. If you are not able to perform some manipulations, we recommend contacting a professional service.

***How can I keep my EFI partitions synchronized or how often should I sychronize them?***

We recommend synchronizing both partitions daily or whenever there are major updates on your system. Below is a script you can use to manually synchronize your EFI partitions. You can also run an automated script to synchronize the partitions daily or when the service is booted.

```sh
set -euo pipefail

findmnt -n -o SOURCE /boot/efi
MAIN_PARTITION=/dev/ # sdX or nvmeXnXpX
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

In the script above, the `MAIN_PARTITION` is the one mounted on /boot/efi and `MOUNTPOINT` is where you want to sync the contents.

Before you run the script, make sure `rsync` is installed:

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat and Fedora**

```sh
sudo yum install rsync
```

Example:

```sh
set -euo pipefail

findmnt -n -o SOURCE /boot/efi
MAIN_PARTITION=/dev/nvme0n1p1
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

In the example above, the main partition is `nvme0n1p1` and the mountpoint we use is `/var/lib/grub/esp`.

### Simulating a disk failure

Now that we have all the necessary information, we can simulate a disk failure and proceed with the tests. In this example, we will fail the main disk `nvme0n1`.

The preferred way to do this is via the OVHcloud rescue mode environment.

First reboot the server in rescue menu and log in with the credentials provided.

To remove a disk from the RAID, the first step is to mark it as **Failed** and remove the partitions from their respective RAID arrays.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

From the above output, nvme0n1 consists of two partitions in RAID which are **nvme0n1p2** and **nvme0n1p3**. 

#### Removing the failed disk

First we mark the partitions **nvme0n1p2** and **nvme0n1p3** as failed. 

```sh
sudo mdadm --manage /dev/md2 --fail /dev/nvme0n1p2

# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
sudo mdadm --manage /dev/md3 --fail /dev/nvme0n1p3

# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

We have now simulated a failure of the RAID, when we run the `cat /proc/mdstat` command, we have the following output

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0](F) nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2](F) nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

As we can see above, the [F] next to the partitions indicates that the disk has failed or is faulty.

Next, we remove these partitions from the RAID arrays to completely remove the disk from RAID.

```sh
sudo mdadm --manage /dev/md2 --remove /dev/nvme0n1p2

# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
sudo mdadm --manage /dev/md3 --remove /dev/nvme0n1p3

# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

To make sure that we get a disk that is similar to an empty disk, we use the following command on each partition, then on the disk:

```sh
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1
```

The disk now appears as a new one:

```sh
lsblk -A

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
```

If we run the following command, we see that our disk has been successfully "wiped":

```sh
parted /dev/nvme0n1
GNU Parted 3.5
Using /dev/nvme0n1
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/nvme0n1: unrecognised disk label
Model: WDC CL SN720 SDAQNTW-512G-2000 (nvme)
Disk /dev/nvme0n1: 512GB
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

Our RAID status should now look like this:

```sh
root@rescue12-customer-ca (ns5009452.ip-51-222-254.net) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Based on the above results, we can see that only two partitions now appear in the RAID arrays. We have successfully failed the **nvme0n1** drive and can now proceed with replacing the drive.

For more information on how to prepare and request for a disk replacement, consult this [guide](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

If you run the following command, you can have more details on the RAID array (s):

```sh
mdadm --detail /dev/md3

/dev/md3:
           Version : 1.2
     Creation Time : Fri Aug  1 14:51:13 2025
        Raid Level : raid1
        Array Size : 497875968 (474.81 GiB 509.82 GB)
     Used Dev Size : 497875968 (474.81 GiB 509.82 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Fri Aug  1 15:56:17 2025
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md3
              UUID : b383c3d5:7fb1bb5e:6b7c4d96:6ea817ff
            Events : 215

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1     259        4        1      active sync   /dev/nvme1n1p3
```

### Rebuilding the RAID

The following steps document the RAID rebuild in rescue mode.

> [!primary]
> This process might be different depending on the operating system you have installed on your server. We recommend that you consult the official documentation of your operating system to have access to the proper commands.
>

> [!warning]
>
> For most servers in software RAID, after a disk replacement, the server is able to reboot in normal mode (on the healthy disk) and the rebuild can be done in normal mode. However, if the server is not able to reboot in normal mode after a disk replacement, it will be rebooted in rescue mode to proceed with the raid rebuild.
>
> If your server is able to boot in normal mode after the RAID rebuilding, simply proceed with the steps from [this section]().

#### Rebuilding the RAID after the main disk is replaced

Here, we assume that the EFI partitions have been kept in sync (including after GRUB/kernel updates. If that is not your case, we have provided additional information on how to proceed).

Once the disk has been replaced, we need to copy the partition table from the healthy disk (in this example, nvme1n1) to the new one (nvme0n1).

> [!tabs]
> **For GPT partitions**
>>
>> ```sh
>> sgdisk -R /dev/nvmeXnX /dev/nvmeAnA
>> ```
>>
>> The command should be in this format: `sgdisk -R /dev/newdisk /dev/healthydisk`
>>
>> In our example:
>>
>> ```sh
>> sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> We run `lsblk` to make sure the partition tables have been properly copied:
>>
>> ```sh
>> lsblk
>>
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme1n1     259:0    0 476.9G  0 disk
>> ├─nvme1n1p1 259:1    0   511M  0 part
>> ├─nvme1n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1
>> ├─nvme1n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1
>> └─nvme1n1p4 259:4    0   512M  0 part
>> nvme0n1     259:5    0 476.9G  0 disk
>> ├─nvme0n1p1 259:10   0   511M  0 part
>> ├─nvme0n1p2 259:11   0     1G  0 part
>> ├─nvme0n1p3 259:12   0 474.9G  0 part
>> └─nvme0n1p4 259:13   0   512M  0 part
>> ```
>>
>> Once this is done, the next step is to randomize the GUID of the new disk to prevent GUID conflicts with other disks:
>>
>> ```sh
>> sgdisk -G /dev/nvme0n1
>> ```
>> 
>> If you receive a message like this:
>> 
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> You can simply run the `partprobe` command or reboot the server when the raid rebuilt is done.
>>
> **For MBR partitions**
>>
>> ```sh
>> sudo sfdisk -d /dev/sdX | sfdisk /dev/sdX 
>> ```
>>
>> The command should be in this format: `sfdisk -d /dev/healthydisk | sfdisk /dev/newdisk`.
>>

We can now rebuild the RAID array. The following code snippet shows how we can add the new partitions (nvme0n1p2 and nvme0n1p3) back in the RAID array. You need to replace the appropriate values with your own.

```sh
sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

To check the rebuild process:

```sh
cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[2] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      [>....................]  recovery =  0.1% (801920/497875968) finish=41.3min speed=200480K/sec
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]
```

Once the RAID rebuild is complete, run the following command to make sure that the partitions have been properly added to the RAID:

```sh
lsblk -fA
NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme1n1
├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    4629-D183
├─nvme1n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme1n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme1n1p4 swap              1     swap-nvme1n1p4 9bf292e8-0145-4d2f-b891-4cef93c0d209
nvme0n1
├─nvme0n1p1
├─nvme0n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme0n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme0n1p4
```

Based on the above results, we can see that the partitions on our newly added drive have been successfully added to the RAID. However, the EFI partition has not been duplicated, which is normal since it is not included in the RAID. We also note that the [SWAP] partition **nvme0n1p4** no longer has a label (this will not be the case in all situations, especially if you customise your partitions before installing your server).

> [!warning]
> The examples above are merely illustrating the necessary steps based on a default server configuration. The information in the output table depends on your server's hardware and its partition scheme. When in doubt, consult the documentation of your operating system.
> 
> If you require professional assistance with server administration, consider the details in the [Go further]() section of this guide.
>

#### Recreating the EFI partition

The next step is to format **nvme0n1p1** to recreate the EFI partition, then copy the content of the secondary EFI partition (in our example: nvme1n1) to this one.

We have an updated version of the partition, as we assume that both partitions have been synchronised. If the two partitions have not been synchronised after major updates (particularly GRUB), you are copying an older version of the partition to the new one. In this case, it is imperative to install these updates before restarting the server in normal mode.

> [!warning]
> If there was a kernel or grub update or a major update and both partitions were not synchronized, consult the following guide [Repairing the GRUB bootloader](/pages/public_cloud/compute/repairing_the_grub_bootloader) once you are done creating the new EFI partition.
>

First, we format the partition:

```sh
mkfs.vfat /dev/nvme0n1p1
```

Next, we label the partition as `EFI_SYSPART` (this naming is proper to OVHcloud)

```sh
fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

We now need to duplicate the contents of the nvme1n1p1 partition (the partition in good condition) to nvme0n1p1 (the new partition). To do this, we start by creating two folders named ‘old’ and ‘new’.

```sh
mkdir old new
```

Next, we mount **nvme1n1p1** in the `old` folder and **nvme0n1p1** in the `new` folder to make the distinction:

```sh
mount /dev/nvme1n1p1 old
mount /dev/nvme0n1p1 new
```

Next, we copy the files from the `old` folder to the `new` folder. Depending on your operating system, you will have a similar output. Here we are using debian:

```sh
rsync -axv old/ new/
```

Once this is done, we unmount the **nvme0n1p1** partition.

```sh
umount /dev/nvme0n1p1
```

Next, we mount the partition containing our files on `/mnt`. In our example, that partition is `md3`.

```sh
mount /dev/md3 /mnt
```

We mount the following directories to make sure any manipulation we make in the chroot environment works properly:

```sh
mount --types proc /proc /mnt/proc
mount --rbind /sys /mnt/sys
mount --make-rslave /mnt/sys
mount --rbind /dev /mnt/dev
mount --make-rslave /mnt/dev
mount --bind /run /mnt/run
mount --make-slave /mnt/run
```

Next, we use the `chroot` command to access the mount point and ensure that the new EFI partition has been created correctly and that the system recognises both EFI partitions:

```sh
chroot /mnt
```

```sh
blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

/// details | **GRUB/kernel update with EFI partitions not synchronized**

If GRUB/kernel updates have been performed and the EFI partitions were not synchronised, this additional step may be necessary.

Still in the `chroot` environment, we create the `/boot/efi` folder in order to mount the EFI partition **nvme0n1p1**:

```sh
cd /mnt
mkdir /boot/efi
mount /dev/nvme0n1p1 /boot/efi
```

Next, we install the grub bootloader to make sure the server can reboot in normal mode on the new disk (you won't have to do this if the disk replaced is the secondary disk. Simply duplicate the EFI partition and proceed to the RAID rebuild, then enable the [SWAP] partition (if applicable)):

```sh
grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```
///

<a name="swap-partition"></a>

#### Adding the label to the SWAP partition

We exit the `chroot` environment, then we recreate our [SWAP] partition **nvme0n1p4** and add the label `swap-nvmenxxx`:

```sh
mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
mkswap: /dev/nvme0n1p4: warning: wiping old swap signature.
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

We verify that the label has been properly applied:

```sh
lsblk -fA
NAME FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme1n1

├─nvme1n1p1
│    vfat   FAT16 EFI_SYSPART
│                       BA77-E844                             504.9M     1% /root/old
├─nvme1n1p2
│    linux_ 1.2   md2   53409058-480a-bc65-4e1d-6acc848fe233
│ └─md2
│    ext4   1.0   boot  f925a033-0087-40ec-817e-44efab0351ac
├─nvme1n1p3
│    linux_ 1.2   md3   a3b8816c-a5c3-7f01-ee17-e1aa9685c35c
│ └─md3
│    ext4   1.0   root  6abfaa3b-e630-457a-bbe0-e00e5b4b59e5  441.2G     0% /mnt
└─nvme1n1p4
     swap   1     swap-nvme1n1p4
                        d6af33cf-fc15-4060-a43c-cb3b5537f58a
nvme0n1

├─nvme0n1p1
│    vfat   FAT16 EFI_SYSPART
│                       477D-6658
├─nvme0n1p2
│    linux_ 1.2   md2   53409058-480a-bc65-4e1d-6acc848fe233
│ └─md2
│    ext4   1.0   boot  f925a033-0087-40ec-817e-44efab0351ac
├─nvme0n1p3
│    linux_ 1.2   md3   a3b8816c-a5c3-7f01-ee17-e1aa9685c35c
│ └─md3
│    ext4   1.0   root  6abfaa3b-e630-457a-bbe0-e00e5b4b59e5  441.2G     0% /mnt
└─nvme0n1p4
     swap   1     swap-nvme0n1p4
                        b3c9e03a-52f5-4683-81b6-cc10091fcd15
```

Next, we access the `chroot` environment again:

```sh
chroot /mnt
```

We retrieve the UUIDs of both swap partitions:

```sh
blkid /dev/nvme0n1p4
blkid /dev/nvme1n1p4
```

Example:

```sh
blkid /dev/nvme0n1p4
/dev/nvme0n1p4: LABEL="swap-nvme0n1p4" UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15" TYPE="swap" PARTLABEL="logical" PARTUUID="cb6022d9-7631-449c-956a-116bcd0e2119"
```

```sh
blkid /dev/nvme1n1p4
/dev/nvme1n1p4: LABEL="swap-nvme1n1p4" UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a" TYPE="swap" PARTLABEL="logical" PARTUUID="d037c35f-2ddb-40d5-be33-31cc496fe54b"
```

Next, we replace the old UUID of the swap partition (**nvme0n1p4)** with the new one in `/etc/fstab`:

```sh
nano etc/fstab
```

Example:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Make sure you replace the proper UUID. In our example above, the UUID to replace is `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` with the new one `b3c9e03a-52f5-4683-81b6-cc10091fcd15` since the other one belongs to **nvme1n1p4**.

Next, we make sure everything is properly mounted:

```sh
mount -av
/                        : ignored
mount: (hint) your fstab has been modified, but systemd still uses
       the old version; use 'systemctl daemon-reload' to reload.
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

We enable the swap partition:

```sh
swapon -av

swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

We exit the Chroot environment with `Exit` and unmount all the disks:

```sh
umount -a
```

We have now successfully completed the RAID rebuild on the server and we can now reboot the server in normal mode.

/// details | **Rebuilding the RAID after the secondary disk is replaced**

The following steps must be followed in normal mode, as it is the secondary disk that is being replaced and the server will be started in normal mode. Our secondary disk is called **nvme1n1**.

Once the disk has been replaced, we need to copy the partition table from the healthy disk (in this example, nvme0n1) to the new one (nvme1n1).

> [!tabs]
> **For GPT partitions**
>>
>> ```sh
>> sgdisk -R /dev/nvmeXnX /dev/nvmeAnA
>> ```
>>
>> The command should be in this format: `sgdisk -R /dev/newdisk /dev/healthydisk`.
>>
>> Once this is done, the next step is to randomize the GUID of the new disk to prevent GUID conflicts with other disks:
>>
>> ```sh
>> sgdisk -G /dev/nvmeXnX
>> ```
>> 
>> If you receive a message like this:
>> 
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> You can simply run the `partprobe` command or reboot the server when the raid rebuilt is done.
>>
> **For MBR partitions**
>>
>> ```sh
>> sudo sfdisk -d /dev/sdX | sfdisk /dev/sdX 
>> ```
>>
>> The command should be in this format: `sfdisk -d /dev/healthydisk | sfdisk /dev/newdisk`.
>>

Next, we add the partitions to the RAID:

```sh
sudo mdadm --add /dev/md2 /dev/nvme1n1p2

# mdadm: added /dev/nvme1n1p2

sudo mdadm --add /dev/md3 /dev/nvme1n1p3

# mdadm: re-added /dev/nvme1n1p3
```

Use the following command to follow the RAID rebuild: `cat /proc/mdstat`.

**Recreating the EFI partition on the disk**

First, we install the necessary tools:

**Debian and Ubuntu**

```sh
sudo apt install dosfstools
```

**CentOS**

```sh
sudo yum install dosfstools
```

Next, we format the partition. In our example nvme1n1p1:

```sh
sudo mkfs.vfat /dev/nvme1n1p1
```

Next, we label the partition as `EFI_SYSPART` (this naming is proper to OVHcloud)

```sh
sudo fatlabel /dev/nvme1n1p1 EFI_SYSPART
```

We sync both partitions using a script.

Example:

```sh
set -euo pipefail

findmnt -n -o SOURCE /boot/efi
MAIN_PARTITION=/dev/nvme0n1p1
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

Lastly, we enable the [SWAP] partition (if applicable):

```sh
sudo mkswap /dev/nvme1n1p4 -L swap-nvme1n1p4
```

We retrieve the UUIDs of both swap partitions:

```sh
sudo blkid /dev/nvme0n1p4
sudo blkid /dev/nvme1n1p4
```

We replace the old UUID of the swap partition (**nvme1n1p4)** with the new one in `/etc/fstab`:

```sh
sudo nano /etc/fstab
```
Make sure you replace the correct UUID. Reload the system with the following command:

```sh
sudo systemctl daemon-reload
```

Next, run the following command to enable it:

```sh
sudo swapon -av
```

We have now successfully completed the RAID rebuild.

## Go Further

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Join our [community of users](/links/community).
