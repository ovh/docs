---
title: Increasing the size of an additional disk
excerpt: 'Find out how to increase the size of an additional volume and enlarge its main partition'
updated: 2022-03-29
---


## Objective

If you have reached the maximum capacity on your additional disk, you can add more storage by increasing its size. 

**This guide explains how to increase the size of an additional disk and extend the main partition accordingly.**

## Requirements

- A [Public Cloud instance](https://www.ovhcloud.com/en-ie/public-cloud/) in your Public Cloud project
- An [additional disk](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) created in your project
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)
- Administrative (root) access to your instance via SSH (Linux) or RDP (Windows)

## Instructions

The following steps presume that you have configured an additional disk according to [our guide](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance).

### Modifying the size of the disk

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and open your `Public Cloud`{.action} project. Then click on `Block Storage`{.action} in the left-hand menu.

If the volume is attached to a **Windows instance**, click on `...`{.action} in the row of the volume and select `Detach from instance`{.action}.

Click on `...`{.action} in the row of the volume and select `Edit`{.action}.

![control panel](images/increase-disk-02.png){.thumbnail}

In the popup window, enter the new size for the volume and click on `Modify the volume`{.action}.

![control panel](images/increase-disk-03.png){.thumbnail}

Ensure that the volume is attached to your instance before continuing. If not, click on `...`{.action} in the row of the volume and select `Attach to instance`{.action}.

### Extending the partition (Linux instance)

Establish an SSH connection to your instance in order to adjust the partition to the resized disk.

Unmount the disk first by using this command:

```bash
admin@server:~$ sudo umount /mnt/disk
```

Recreate the partition:

```bash
admin@server:~$ sudo fdisk /dev/vdb
```
```console
Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command
```
```console
Command (m for help): d

Selected partition 1
Partition 1 has been deleted.
```
```console
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-146800639, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-146800639, default 146800639):

Created a new partition 1 of type 'Linux' and of size 70 GiB.
```
```console
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Verify and check the partition:

```bash
admin@server:~$ sudo e2fsck -f /dev/vdb1

e2fsck 1.42.12 (29-Aug-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdb: 12/3276800 files (0.0% non-contiguous), 251700/13107200 blocks
```

```bash
admin@server:~$ sudo resize2fs /dev/vdb1

resize2fs 1.42.12 (29-Aug-2014)
Resizing the filesystem on /dev/vdb to 18350080 (4k) blocks.
The filesystem on /dev/vdb is now 18350080 (4k) blocks long.
```

Finally, re-mount and check the disk:

```bash
admin@server:~$ sudo mount /dev/vdb1 /mnt/disk/
```

```bash
admin@server:~$ df -h
Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 69G 52M 66G 1% /mnt/disk
```

### Extending the partition (Windows instance)

Establish a remote desktop (RDP) connection to your Windows instance.

Once logged in, right-click on the `Start Menu`{.action} button and open `Disk Management`{.action}.

![windows](images/resize-win-01.png){.thumbnail}

The extended disk now displays the additional capacity as unallocated space.

![windows](images/resize-win-02.png){.thumbnail}

Right-click on the volume and select `Extend Volume`{.action} from the context menu.

![windows](images/resize-win-03.png){.thumbnail}

In the "Extend Volume Wizard", click on `Next`{.action} to proceed.

You can modify the disk space in this step if you want to add less than the entire amount to the partition. Click on `Next`{.action}.

![windows](images/resize-win-04.png){.thumbnail}

Click on `Finish`{.action} to complete the process.

The resized volume now includes the additional disk space.

![windows](images/resize-win-05.png){.thumbnail}

## Go further

[Creating and configuring an additional disk on an instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

Join our community of users on <https://community.ovh.com/en/>.