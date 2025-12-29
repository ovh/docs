---
title: Managing and rebuilding software RAID on servers using UEFI boot mode
excerpt: Find out how to manage and rebuild software RAID after a disk replacement on a server using UEFI boot mode
updated: 2025-12-11
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

Redundant Array of Independent Disks (RAID) is a technology that mitigates data loss on a server by replicating data across two or more disks.

The default RAID level for OVHcloud server installations is RAID 1, which doubles the space taken up by your data, effectively halving the useable disk space.

**This guide explains how to manage and rebuild software RAID after a disk replacement on a server using UEFI boot mode**

Before we begin, please note that this guide focuses on Dedicated servers that use UEFI as the boot mode. This is the case with modern motherboards. If your server uses the legacy boot (BIOS) mode, refer to this guide: [Managing and rebuilding software RAID on servers in legacy boot (BIOS) mode](/pages/bare_metal_cloud/dedicated_servers/raid_soft).

To check whether a server runs on legacy BIOS mode or UEFI boot mode, run the following command:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

For more information on UEFI, consult the following [article](https://uefi.org/about).

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) with a software RAID configuration
- Administrative (sudo) access to the server via SSH
- Understanding of RAID, partitions and GRUB

Throughout this guide, we use the terms **primary disk** and **secondary disk**. In this context:

- The primary disk is the disk whose ESP (EFI System Partition) is mounted by Linux
- The secondary disk(s) are all the other disks in the RAID

## Instructions

When you purchase a new server, you may feel the need to perform a series of tests and actions. One such test could be to simulate a disk failure in order to understand the RAID rebuild process and prepare yourself in case it ever happens.

### Content overview

- [Basic Information](#basicinformation)
- [Understanding the EFI System Partition (ESP)](#efisystemparition)
- [Simulating a disk failure](#diskfailure)
    - [Removing the failed disk](#diskremove)
- [Rebuilding the RAID](#raidrebuild)
    - [Rebuilding the RAID after the main disk is replaced (rescue mode)](#rescuemode)
    - [Recreating the EFI System Partition](#recreateesp)
    - [Rebuilding RAID when EFI partitions are not synchronized after major system updates (e.g GRUB)](#efiraidgrub)
    - [Adding the label to the SWAP partition (if applicable)](#swap-partition)
    - [Rebuilding the RAID in normal mode](#normalmode)

<a name="basicinformation"></a>

### Basic Information

In a command line session, type the following code to determine the current RAID status:

```sh
[user@server_ip ~]# cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 nvme1n1p3[1] nvme0n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1] nvme0n1p2[0]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

This command shows us that we currently have two software RAID devices configured, **md2** and **md3**, with **md3** being the larger of the two. **md3** consists of two partitions, called **nvme1n1p3** and **nvme0n1p3**. 

The [UU] means that all the disks are working normally. A `_` would indicate a failed disk.

If you have a server with SATA disks, you would get the following results:

```sh
[user@server_ip ~]# cat /proc/mdstat
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
[user@server_ip ~]# sudo fdisk -l

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
This information can only been seen when the server is in normal mode.

Still going by the results of `fdisk -l`, we can see that `/dev/md2` consists of 1022 MiB and `/dev/md3` contains 474.81 GiB. If we were to run the `mount` command we can also find out the layout of the disk.

Alternatively, the `lsblk` command offers a different view of the partitions:

```sh
[user@server_ip ~]# lsblk
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

Furthermore, if we run `lsblk -f`, we obtain more information about these partitions, such as the LABEL and UUID:

```sh
[user@server_ip ~]# sudo lsblk -f
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

Take note of the devices, partitions, and their mount points; this is important, especially after replacing a disk.

From the above commands and results, we have:

- Two RAID arrays: `/dev/md2` and `/dev/md3`.
- Four partitions are part of the RAID: **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2**, **nvme0n1p3** with the mount points `/boot` and `/`.
- Two partitions not part of the RAID, with mount points: `/boot/efi` and [SWAP].
- One partition does not have a mount point: **nvme1n1p1**

The `nvme0n1p5` partition is a configuration partition, i.e. a read-only volume connected to the server that provides it with the initial configuration data.

<a name="efisystempartition"></a>

### Understanding the EFI System Partition (ESP)

***What is an EFI System Partition?***

An EFI System Partition is a partition which can contain the boot loaders, boot managers, or kernel images of an installed operating system. It may also contain system utility programs designed to be run before the operating system boots, as well as data files such as error logs.

***Is the EFI System Partition mirrored in RAID?***

No, as of August 2025, when the OS installation is performed by OVHcloud, the ESP is not included in the RAID. When you use our OS templates to install your server with software RAID, several EFI System Partitions are created: one per disk. However, only one EFI partition is mounted at once. All ESPs created at the time of installation contain the same files.

The EFI System Partition is mounted at `/boot/efi` and the disk on which it is mounted is selected by Linux at boot.

Example:

```sh
[user@server_ip ~]# sudo lsblk -f
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

From the output above, we see that we have two identical EFI System Partitions (nvme0n1p1 and nvme1n1p1) but only **nvme0n1p1** is mounted on `/boot/efi`. Both partitions have the LABEL: `EFI_SYSPART` (this naming is specific to OVHcloud).

***Does the content of the EFI System Partition change regularly?***

In general, the contents of this partition do not change much, its content should only change on bootloader (e.g. GRUB) updates.

However, we recommend running an automatic or manual script to synchronise all ESPs, so that they all contain the same up-to-date files. This way, if the drive on which this partition is mounted fails, the server will be able to restart on the ESP of one of the other drives.

***What if the primary disk mounted on `boot/efi` fails?***

> [!primary]
> Please note that we explore the most common cases below, but there are several other reasons why a server may not start in normal mode after a disk replacement.
> 

**Case study 1** - There have been no changes or major system updates (e.g GRUB) to the OS

- The server is able to boot in normal mode and you can proceed with the RAID rebuild.
- The server is unable to boot in normal mode, the server is rebooted into rescue mode, where you can rebuild the RAID and recreate the EFI partition on the new disk.

**Case study 2** - There have been major system updates (e.g GRUB) to the OS and the ESPs have been synchronised

- The server is able to boot in normal mode because all the ESPs contain up-to-date information and the RAID rebuild can be carried out in normal mode.
- The server is unable to boot in normal mode, the server is rebooted into rescue mode, where you can rebuild the RAID and recreate the EFI partition on the new disk.

**Case study 3** - There have been major system updates (e.g GRUB) to the OS and the ESPs partitions have not been synchronised

- The server is unable to boot in normal mode, the server is rebooted in rescue mode, where you can rebuild the RAID, recreate the EFI System partition on the new disk and reinstall the bootloader (e.g. GRUB) on it.
- The server is able to boot in normal mode (this can occur when an operating system is updated to a newer version, but the version of GRUB remains unchanged) and you can proceed with the RAID rebuild.

Indeed, in some cases, booting from an out-of-date ESP may not work. For instance, a major GRUB update could cause the old GRUB binary present in the ESP to be incompatible with newer GRUB modules installed in the `/boot` partition.

***How can I synchronise my EFI System Partitions, and how often should I synchronise them?***

> [!primary]
> Please note that depending on your operating system, the process might be different. Ubuntu for example is able to keep several EFI System Partitions synchronized at every GRUB update. However, it is the only operating system doing so. We recommend that you consult the official documentation of your operating system to understand how to manage ESPs.
>
> In this guide, the operating system used is Debian.

We recommend that you synchronise your ESPs regularly or after each major system update. By default, all the EFI System partitions contain the same files after installation. However, if a major system update is involved, synchronising the ESPs is essential to keep the content up-to-date.

<a name="script"></a>

#### Script

Below is a script that you can use to manually synchronise them. You can also run an automated script to synchronise the partitions daily or whenever the service boots up.

Before you execute the script, make sure `rsync` is installed on your system:

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat and Fedora**

```sh
sudo yum install rsync
```

To execute a script in linux, you need an executable file:

- Start by creating a .sh file in the directory of your choice, replacing `script-name` with the name of your choice

```sh
sudo touch script-name.sh
```

- Open the file with a text editor and include the following lines

```sh
sudo nano script-name.sh
```

```sh
#!/bin/bash

set -euo pipefail

MOUNTPOINT="/var/lib/grub/esp"
MAIN_PARTITION=$(findmnt -n -o SOURCE /boot/efi)

echo "${MAIN_PARTITION} is the main partition"

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

Save and exit the file.

- Make the script executable

```sh
sudo chmod +x script-name.sh
```

- Run the script

```sh
sudo ./script-name.sh
```

- If you are not in the folder

```sh
./path/to/folder/script-name.sh
```

When the script is executed, the contents of the mounted EFI partition will be synchronised with the others. To access the contents, you can mount any of these unmounted EFI partitions on the mount point: `/var/lib/grub/esp`.

<a name="diskfailure"></a>

### Simulating a disk failure

Now that we have all the necessary information, we can simulate a disk failure and proceed with the tests. In this first example, we will fail the primary disk `nvme0n1`.

The preferred way to do this is via the OVHcloud rescue mode environment.

First reboot the server in rescue mode and log in with the provided credentials.

To remove a disk from the RAID, the first step is to mark it as **Failed** and remove the partitions from their respective RAID arrays.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

From the above output, nvme0n1 consists of two partitions in RAID which are **nvme0n1p2** and **nvme0n1p3**.

<a name="removedisk"></a>

#### Removing the failed disk

First we mark the partitions **nvme0n1p2** and **nvme0n1p3** as failed. 

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/nvme0n1p2
# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --fail /dev/nvme0n1p3
# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

When we run the `cat /proc/mdstat` command, we have the following output:

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
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

Our RAID status should now look like this:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

From the results above, we can see that only two partitions now appear in the RAID arrays. We have successfully failed the disk **nvme0n1**.

To make sure that we get a disk that is similar to an empty disk, we use the following command on each partition, then on the disk:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1p5
shred -s10M -n1 /dev/nvme0n1
```

The disk now appears as a new, empty drive:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

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

For more information on how to prepare and request for a disk replacement, consult this [guide](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

If you run the following command, you can have more details on the RAID arrays:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md3

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

We can now proceed with the disk replacement.

<a name="raidrebuild"></a>

### Rebuilding the RAID

> [!primary]
> This process might be different depending on the operating system you have installed on your server. We recommend that you consult the official documentation of your operating system to have access to the proper commands.
>

> [!warning]
>
> For most servers in software RAID, after a disk replacement, the server is able to boot in normal mode (on the healthy disk) and the rebuild can be done in normal mode. However, if the server is not able to boot in normal mode after a disk replacement, it will be rebooted in rescue mode to proceed with the RAID rebuild.
>
> If your server is able to boot in normal mode after the disk replacement, simply proceed with the steps from [this section](#rebuilding-the-raid-in-normal-mode).

<a name="rescuemode"></a>

#### Rebuilding the RAID in rescue mode

Once the disk has been replaced, the next step is to copy the partition table from the healthy disk (in this example, nvme1n1) to the new one (nvme0n1).

**For GPT partitions**

The command should be in this format: `sgdisk -R /dev/new disk /dev/healthy disk`

In our example:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Run `lsblk` to make sure the partition tables have been properly copied:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
├─nvme0n1p1 259:10   0   511M  0 part
├─nvme0n1p2 259:11   0     1G  0 part
├─nvme0n1p3 259:12   0 474.9G  0 part
└─nvme0n1p4 259:13   0   512M  0 part
```

Once this is done, the next step is to randomize the GUID of the new disk to prevent GUID conflicts with other disks:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

If you receive the message below:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Simply run the `partprobe` command.

We can now rebuild the RAID array. The following code snippet shows how to add the new partitions (nvme0n1p2 and nvme0n1p3) back in the RAID array.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
# mdadm: added /dev/nvme0n1p2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
# mdadm: re-added /dev/nvme0n1p3
```

To check the rebuild process:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
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
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
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

Based on the above results, the partitions on the new disk have been correctly added to the RAID. However, the EFI System Partition and the SWAP partition (in some cases) have not been duplicated, which is normal as they are not included in the RAID.

> [!warning]
> The examples above are merely illustrating the necessary steps based on a default server configuration. The information in the output table depends on your server's hardware and its partition scheme. When in doubt, consult the documentation of your operating system.
> 
> If you require professional assistance with server administration, consider the details in the [Go further](#go-further) section of this guide.
>

<a name="recreateesp"></a>

#### Recreating the EFI System Partition

To recreate the EFI system partition, we need to format **nvme0n1p1** and then replicate the contents of the healthy partition (in our example: nvme1n1p1) onto it.

Here, we assume that both partitions have been synchronised and contain up-to-date files.

> [!warning]
> If there was a major system update such as kernel or grub and both partitions were not synchronised, consult this [section](#rebuilding-raid-when-efi-partitions-are-not-synchronized-after-major-system-updates-eg-grub) once you are done creating the new EFI System Partition.
>

First, we format the partition:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Next, we label the partition as `EFI_SYSPART` (this naming is specific to OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Next, we duplicate the contents of nvme1n1p1 to nvme0n1p1. We start by creating two folders, We start by creating two folders, which we name "old" and "new" in our example:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Next, we mount **nvme1n1p1** in the 'old' folder and **nvme0n1p1** in the 'new' folder to make the distinction:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Next, we copy the files from the 'old' folder to 'new' one:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # rsync -axv old/ new/
sending incremental file list
EFI/
EFI/debian/
EFI/debian/BOOTX64.CSV
EFI/debian/fbx64.efi
EFI/debian/grub.cfg
EFI/debian/grubx64.efi
EFI/debian/mmx64.efi
EFI/debian/shimx64.efi

sent 6,099,848 bytes  received 165 bytes  12,200,026.00 bytes/sec
total size is 6,097,843  speedup is 1.00
```

Once this is done, we unmount both partitions:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Next, we mount the partition containing the root of our operating system on `/mnt`. In our example, that partition is **md3**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

We mount the following directories to make sure any manipulation we make in the `chroot` environment works properly:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
mount --types proc /proc /mnt/proc
mount --rbind /sys /mnt/sys
mount --make-rslave /mnt/sys
mount --rbind /dev /mnt/dev
mount --make-rslave /mnt/dev
mount --bind /run /mnt/run
mount --make-slave /mnt/run
```

Next, we use the `chroot` command to access the mount point and make sure the new EFI System Partition has been properly created and the system recongnises both ESPs:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

To view the ESP partitions, we run the command `blkid -t LABEL=EFI_SYSPART`:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

The above results show that the new EFI partition has been created correctly and that the LABEL has been applied correctly.

<a name="efiraidgrub"></a>

#### Rebuilding RAID when EFI partitions are not synchronized after major system updates (GRUB)

/// details | **Unfold this section**

> [!warning]
> Please only follow the steps in this section if it applies to your case.
> 

When EFI system partitions are not synchronised after major system updates that modify/affect the GRUB, and the primary disk on which the partition is mounted is replaced, booting from a secondary disk containing an out-of-date ESP may not work. 

In this case, in addition to rebuilding the RAID and recreating the EFI system partition in rescue mode, you must also reinstall GRUB on it.

So once we have recreated the EFI partition and made sure the system recognises both partitions (previous steps in `chroot`), we create the `/boot/efi` folder in order to mount the new EFI System Partition **nvme0n1p1**:

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Next, we reinstall the GRUB bootloader:

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Once done, run the following command:

```sh
root@rescue12-customer-eu:/# update-grub
```
///

<a name="swap-partition"></a>

#### Adding the label to the SWAP partition (if applicable)

Once we are done with the EFI partition, we move to the SWAP partition.

We exit the `chroot` environment with `exit` in order to recreate our [SWAP] partition **nvme0n1p4** and add the label `swap-nvmenxxx`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

We verify that the label has been properly applied:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
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

We then access the `chroot` environment again:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

We retrieve the UUID of both SWAP partitions:

```sh
root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"

root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Next, we replace the old UUID of the SWAP partition (**nvme0n1p4**) with the new one in the `/etc/fstab` file:

```sh
root@rescue12-customer-eu:/# nano /etc/fstab
```

Example:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Based on the above results, the old UUID is `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` and should be replaced with the new one `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Make sure you replace the correct UUID.

Next, we verify that everything is properly mounted with the following command:

```sh
root@rescue12-customer-eu:/# mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

We activate the SWAP partition:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

We exit the chroot environment with `exit` and reload the system:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

We umount all the disks:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
```

We have now successfully completed the RAID rebuild on the server and we can now reboot it in normal mode.

<a name="normalmode"></a>

#### Rebuilding the RAID in normal mode

/// details | **Unfold this section**

If your server is able to boot in normal mode after a disk replacement, you can proceed with the following steps to rebuild the RAID.

Once the disk has been replaced, we copy the partition table from the healthy disk (in this example, nvme1n1) to the new one (nvme0n1).

**For GPT partitions**

```sh
sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

The command should be in this format: `sgdisk -R /dev/new disk /dev/healthy disk`.

Once this is done, the next step is to randomize the GUID of the new disk to prevent GUID conflicts with other disks:

```sh
sgdisk -G /dev/nvme0n1
```

If you receive the following message:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Simply run the `partprobe` command. If you still cannot see the newly-created partitions (e.g. with `lsblk`), you need to reboot the server before continuing.

Next, we add the partitions to the RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Use the following command to follow the RAID rebuild: `cat /proc/mdstat`.

**Recreating the EFI System Partition on the disk**

First, we install the necessary tools:

**Debian and Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

Next, we format the partition. In our example `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

Next, we label the partition as `EFI_SYSPART` (this naming is specific to OVHcloud)

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Once done, you can synchronize both partitions using the script we provided [here](#script).

We verify that the new EFI System Partition has been properly created and the system recongnises it:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Lastly, we activate the [SWAP] partition (if applicable):


- We create and add the label:

```sh
[user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
```

- We retrieve the UUIDs of both SWAP partitions:

```sh
[user@server_ip ~]# sudo blkid -s /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -s /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

- We replace the old UUID of the SWAP partition (**nvme0n1p4)** with the new one in `/etc/fstab`:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
```

Example:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Based on the above results, the old UUID is `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` and should be replaced with the new one `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 

Make sure you replace the correct UUID.

Next, we run the following command to activate the SWAP partition:

```sh
[user@server_ip ~]# sudo swapon -av
swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Next, we reload the system:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```
///

We have now successfully completed the RAID rebuild.

## Go Further

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).