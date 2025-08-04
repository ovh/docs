---
title: How to configure and rebuild software RAID
excerpt: Find out how to verify the state of the software RAID of your server and rebuild it after a disk replacement
updated: 2023-08-21
---

## Objective

Redundant Array of Independent Disks (RAID) is a technology that mitigates data loss on a server by replicating data across two or more disks.

The default RAID level for OVHcloud server installations is RAID 1, which doubles the space taken up by your data, effectively halving the useable disk space.

**This guide explains how to configure your server’s RAID array in the event that it needs to be rebuilt due to corruption or disk failure.**

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) with a software RAID configuration
- Administrative (sudo) access to the server via SSH
- Understanding of RAID, partitions and GRUB

## Instructions

When you purchase a new server, you might feel the need to perform a series of tests and actions. One of those actions could be simulating a disk failure in order to understand the process of rebuilding the raid and prepare yourself in case this happens.

#### Basic Information

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

Disk /dev/nvme0n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 18EFC16E-F711-4858-8298-9FAA9218E309

Device              Start        End   Sectors   Size Type
/dev/nvme0n1p1       2048    1048575   1046528   511M EFI System
/dev/nvme0n1p2    1048576    3145727   2097152     1G Linux RAID
/dev/nvme0n1p3    3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme0n1p4  999161856 1000210431   1048576   512M Linux filesystem
/dev/nvme0n1p5 1000211120 1000215182      4063     2M Linux filesystem


Disk /dev/nvme1n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: A99678B9-49B0-44E1-B411-52FA2879B617

Device             Start        End   Sectors   Size Type
/dev/nvme1n1p1      2048    1048575   1046528   511M EFI System
/dev/nvme1n1p2   1048576    3145727   2097152     1G Linux RAID
/dev/nvme1n1p3   3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme1n1p4 999161856 1000210431   1048576   512M Linux filesystem


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
udev on /dev type devtmpfs (rw,nosuid,relatime,size=16348308k,nr_inodes=4087077,mode=755)
devpts on /dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /run type tmpfs (rw,nosuid,nodev,noexec,relatime,size=3275192k,mode=755)
/dev/md3 on / type ext4 (rw,relatime)
securityfs on /sys/kernel/security type securityfs (rw,nosuid,nodev,noexec,relatime)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev)
tmpfs on /run/lock type tmpfs (rw,nosuid,nodev,noexec,relatime,size=5120k)
cgroup2 on /sys/fs/cgroup type cgroup2 (rw,nosuid,nodev,noexec,relatime,nsdelegate,memory_recursiveprot)
pstore on /sys/fs/pstore type pstore (rw,nosuid,nodev,noexec,relatime)
efivarfs on /sys/firmware/efi/efivars type efivarfs (rw,nosuid,nodev,noexec,relatime)
none on /sys/fs/bpf type bpf (rw,nosuid,nodev,noexec,relatime,mode=700)
systemd-1 on /proc/sys/fs/binfmt_misc type autofs (rw,relatime,fd=30,pgrp=1,timeout=0,minproto=5,maxproto=5,direct,pipe_ino=10895)
hugetlbfs on /dev/hugepages type hugetlbfs (rw,relatime,pagesize=2M)
mqueue on /dev/mqueue type mqueue (rw,nosuid,nodev,noexec,relatime)
debugfs on /sys/kernel/debug type debugfs (rw,nosuid,nodev,noexec,relatime)
tracefs on /sys/kernel/tracing type tracefs (rw,nosuid,nodev,noexec,relatime)
fusectl on /sys/fs/fuse/connections type fusectl (rw,nosuid,nodev,noexec,relatime)
configfs on /sys/kernel/config type configfs (rw,nosuid,nodev,noexec,relatime)
/dev/md2 on /boot type ext4 (rw,relatime)
/dev/nvme1n1p1 on /boot/efi type vfat (rw,relatime,fmask=0022,dmask=0022,codepage=437,iocharset=ascii,shortname=mixed,utf8,errors=remount-ro)
tmpfs on /run/user/1000 type tmpfs (rw,nosuid,nodev,relatime,size=3275188k,nr_inodes=818797,mode=700,uid=1000,gid=1000)
```

Alternatively, the `lsblk` command offers a different view of the partitions:

```sh
lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme0n1     259:0    0 476.9G  0 disk
├─nvme0n1p1 259:6    0   511M  0 part
├─nvme0n1p2 259:7    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme0n1p3 259:8    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
├─nvme0n1p4 259:9    0   512M  0 part  [SWAP]
└─nvme0n1p5 259:10   0     2M  0 part
nvme1n1     259:1    0 476.9G  0 disk
├─nvme1n1p1 259:2    0   511M  0 part  /boot/efi
├─nvme1n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme1n1p3 259:4    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
└─nvme1n1p4 259:5    0   512M  0 part  [SWAP]
```

We take note of the devices, partitions and their mount points.

From the above commands and results, we have:

- Two RAID arrays: `/dev/md2` and `/dev/md3`.
- Partitions part of the RAID: `/boot` and `/`.
- Partitions not part of the RAID: `/boot/efi` and [SWAP].

> [!primary]
> Most modern motherboards use UEFI mode (EFI). When a server is intalled, two ESPs partitions (labelled EFI_SYSPART by OVHcloud) are created on the disks used for RAID, however, only one partition is automatically mounted in `/boot/efi` by the system after install. It is important to understand the role of this partition and how to manage it.
>
> For more information on UEFI, consult the following [guide](https://uefi.org/about){.external}

To check whether a server runs on BIOS mode or UEFI mode, run the following command:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

### Simulating a disk failure

Now that we have all the necessary information, we can simulate a disk failure and proceed with the tests. In this example, we will fail the disk `nvme0n1`.

The preferred to do this is via the OVHcloud rescue environment.

First reboot in rescue menu and log in with the credentials provided.

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

From the above output, nvme0n1 consists of two partitions in raid which are **nvme0n1p2** and **nvme0n1p3**. 

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

As we can see above, the [F] next to the partitions indicates that the disk has failed or is faulty. Next, we remove these partitions from the RAID arrays to completely remove the disk from RAID.

```sh
sudo mdadm --manage /dev/md2 --remove /dev/nvme0n1p2

# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
sudo mdadm --manage /dev/md3 --remove /dev/nvme0n1p3

# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```


If we runnthe following command:

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

We see that our disk has been successfully wiped.

Our RAID status should now look like this:

```sh
root@rescue12-customer-ca (ns5009452.ip-51-222-254.net) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>n
```

From the results above, we can see that only two partitions now appear in the RAID arrays. We have successfully failed the disk nvme0n1 and we can now proceed with the replacement. 

For more information on how to prepare and request a disk replacement, consult this [guide](/pages/bare_metal_cloud/dedicated_servers/disk_replacement)

If you run the following command, you can have more details on the raid array.


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

> [!primary]
> This process might be different depending on the operating system you have installed on your server. We recommend that you consult the official documentation of your operating system to have access to the proper commands.
>

In this situation, we will explore two cases

- Dedicated servers with UEFI
- Dedicated servers with BIOS


> [!warning]
>
> With most cases, after a disk replacement, the server is able to reboot in normal mode (on the healthy disk) and these steps can be done in normal mode. However, if the server is not able to reboot after a disk replacement, it will be rebooted in rescue mode to proceed with the raid rebuild. These steps apply as well.
>

#### Dedicated server with UEFI

The steps described in this section apply to servers whose main disk containing the EFI partition mounted on /boot/efi failed, was replaced, and the server no longer boots in normal mode. If the main disk containing this partition was not replaced and the server boots in normal mode, please follow the steps for [Dedicated servers with BIOS]() and recreate an EFI partition in the secondary disk as described below.

**Understanding the EFI partition**

An EFI partition, is a partition which can contain the boot loaders, boot managers, or kernel images of an installed operating system. It also contains system utility programs designed to be run before the operating system boots, as well as data files such as error logs.

By default, this partition is duplicated when one of our installation template is installed in RAID, but this partition is not included in the RAID.

During installation, this partition is mounted on `/boot/efi` and the disk on which it is mounted is selected randomly by the operating system. Thus, your system has two EFI partitions, but only one is mounted in the RAID.

Example:

```sh
lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme0n1     259:0    0 476.9G  0 disk
├─nvme0n1p1 259:6    0   511M  0 part
├─nvme0n1p2 259:7    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme0n1p3 259:8    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
├─nvme0n1p4 259:9    0   512M  0 part  [SWAP]
└─nvme0n1p5 259:10   0     2M  0 part
nvme1n1     259:1    0 476.9G  0 disk
├─nvme1n1p1 259:2    0   511M  0 part  /boot/efi
├─nvme1n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme1n1p3 259:4    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
└─nvme1n1p4 259:5    0   512M  0 part  [SWAP]
```

From the example above, we see that we have two identical partitions (nvme0n1p1 and nvme1n1p1) but only nvme1n1p1 is mounted on `/boot/efi`.

We can also use the following command to confirm that two EFI partitions were actually created after install:

```sh
lsblk -f

NAME        FSTYPE FSVER LABEL     UUID                   FSAVAIL     FSUSE%  MOUNTPOINT
nvme0n1
│
├─nvme0n1p1 vfat  FAT16 EFI_SYSPART 461C-DB56
├─nvme0n1p2
│    linux_ 1.2         md2   83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2
│    ext4   1.0         boot  4de80ae0-dd90-4256-9135-1735e7be4b4d  851.8M     7% /boot
├─nvme0n1p3
│    linux_ 1.2         md3   b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3
│    ext4   1.0         root  9bf386b6-9523-46bf-b8e5-4b8cc7c5786f  441.3G     0% /
├─nvme0n1p4
│    swap   1     swap-nvme0n1p4 356439fe-0539-45ce-9eff-40b616689b0c                [SWAP]
└─nvme0n1p5
     iso966 Jolie config-2
                        2025-08-01-14-51-51-00
nvme1n1
│
├─nvme1n1p1 vfat   FAT16 EFI_SYSPART 4629-D183                504.9M     1% /boot/efi
├─nvme1n1p2
│    linux_ 1.2   md2   83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2
│    ext4   1.0   boot  4de80ae0-dd90-4256-9135-1735e7be4b4d  851.8M     7% /boot
├─nvme1n1p3
│    linux_ 1.2   md3   b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3
│    ext4   1.0   root  9bf386b6-9523-46bf-b8e5-4b8cc7c5786f  441.3G     0% /
└─nvme1n1p4
     swap   1     swap-nvme1n1p4
                        9bf292e8-0145-4d2f-b891-4cef93c0d209                [SWAP]
```

From the results above, we can see two partitions (**nvme0n1p1** and **nvme1n1p1**), with identical size (504.9M). Both partitions have the LABEL: `EFI_SYSPART` but only one is mounted on `/boot/efi`.

In general, this is a partition whose contents do not change much, except when there is a GRUB or the kernel updated. In this case, we recommend running an automatic or manual script to synchronise both partitions often.

The script below can be used:

```sh
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

Once the disk has been replaced, we need to copy the partition table from the healthy disk (in this example, nvme1n1) to the new one (nvme0n1).

**For GPT partitions**

```sh
sudo sgdisk -R /dev/sda /dev/sdb 
```

The command should be in this format: `sgdisk -R /dev/newdisk /dev/healthydisk`

In our example:

```sh
sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Once this is done, the next step is to randomize the GUID of the new disk to prevent GUID conflicts with other disks:

```sh
sudo sgdisk -G /dev/nvme0n1
```

If you receive a message like this:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

You can simply run the `partprobe` command or reboot the server when the raid rebuilt is done.

**For MBR partitions**

```sh
sudo sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

The command should be in this format: `sfdisk -d /dev/healthydisk | sfdisk /dev/newdisk`.

We can now rebuild the RAID array. The following code snippet shows how we can add the new partitions (nvme0n1p2 and nvme0n1p3) back in the RAID array.


```sh
sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3

cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[2] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      [>....................]  recovery =  0.1% (801920/497875968) finish=41.3min speed=200480K/sec
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]
```

Once the raid rebuild is complete, run the following command to make sure that the partitions were properly added to the raid:

```sh
```

The next step is to recreated the EFI partition on the newly added disk and format it. Please keep in mind that the content of this partition on the remaining drive (in our exmaple: nvme1n1) will be replicated to the new disk in order to enable our server to boot back into normal mode. This is possible because we kept the partition in sync while the server was running normally before the disk failure. 

It is possible that this process does not work if there was a kernel or grub update and both partitions were not synchronized. 



#### Dedicated servers with BIOS

Use the appropriate commands:

**For GPT partitions**

```sh
sudo sgdisk -R /dev/sda /dev/sdb 
```

The command should be in this format: `sgdisk -R /dev/newdisk /dev/healthydisk`

In our example:

```sh
sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Once this is done, the next step is to randomize the GUID of the new disk to prevent GUID conflicts with other disks:

```sh
sudo sgdisk -G /dev/nvme0n1
```

If you receive a message like this:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

You can simply run the `partprobe` command or reboot the server when the raid rebuilt is done.

**For MBR partitions**

```sh
sudo sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

The command should be in this format: `sfdisk -d /dev/healthydisk | sfdisk /dev/newdisk`

We can now rebuild the RAID array. The following code snippet shows how we can add the new partitions (nvme0n1p2 and nvme0n1p3) back in the RAID array.


```sh
sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3

cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 nvme0n1p3[0] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      [============>........]  recovery = 64.8% (322969856/497875968) finish=7.2min speed=401664K/sec
      bitmap: 4/4 pages [16KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

We can verify the RAID details with the following command:

```sh
sudo mdadm --detail /dev/md3 & sudo mdadm --detail /dev/md2
[1] 2096
/dev/md3:
           Version : 1.2
     Creation Time : Fri Aug  1 14:51:13 2025
        Raid Level : raid1
        Array Size : 497875968 (474.81 GiB 509.82 GB)
     Used Dev Size : 497875968 (474.81 GiB 509.82 GB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Fri Aug  1 16:48:03 2025
             State : clean
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md3
              UUID : b383c3d5:7fb1bb5e:6b7c4d96:6ea817ff
            Events : 538

    Number   Major   Minor   RaidDevice State
       0     259        8        0      active sync   /dev/nvme0n1p3
       1     259        4        1      active sync   /dev/nvme1n1p3
/dev/md2:
           Version : 1.2
     Creation Time : Fri Aug  1 14:51:13 2025
        Raid Level : raid1
        Array Size : 1046528 (1022.00 MiB 1071.64 MB)
     Used Dev Size : 1046528 (1022.00 MiB 1071.64 MB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

       Update Time : Fri Aug  1 16:45:59 2025
             State : clean
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : resync

              Name : md2
              UUID : 83719c5c:2a272a56:52687d49:d8a1d84f
            Events : 26

    Number   Major   Minor   RaidDevice State
       2     259        7        0      active sync   /dev/nvme0n1p2
       1     259        3        1      active sync   /dev/nvme1n1p2
```

The RAID has now been rebuilt.

Next, mount the partitions

```sh
sudo mount /dev/md2 /boot
sudo mount /dev/md3 /
```





> [!primary]
> While this process helps understand what to do when a disk fails, it is a but simplistic. For further diagnostics, you can consult this section of the guide.
>






## Go Further

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Join our [community of users](/links/community).
