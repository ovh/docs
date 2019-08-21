---
title: Configure an additional volume
slug: configure-an-additional-volume
excerpt: Tutorial on configuring an additional disk on a cloud server from the Public Cloud offer
section: Storage
---


## Preamble
You have probably [created a new additional volume](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/){.ref}, or an additional disk.

This guide will explain how to create an additional disk, and then how to attach it to one of your instances.


### Prerequisites
- An [instance](https://docs.ovh.com/gb/en/public-cloud/create_an_instance_in_your_ovh_customer_account/){.external}
- An [additional volume](https://docs.ovh.com/gb/en/public-cloud/create-an-additional-volume-and-attach-it-to-an-instance/){.external} attached


## Disk mount

### From an instance on Linux
- List disks

```bash
sudo fdisk -l /dev/vd*
```



> [!success]
>
> /dev/vda generally corresponds to the disk of your instance, /dev/vdb
> will thus be the first additional volume.
> Some operating systems recognize disks using
> another driver. In this case, they appear as /dev/sd*.
> 

- Create a partition with parted

```bash
sudo parted /dev/vdb
mktable gpt
mkpart primary ext4 512 100%
quit
```

- Format the partition

```bash
sudo mkfs.ext4 /dev/vdb1
```

- Mount the partition

```bash
sudo mount /dev/vdb1 /mnt
```

- Checking the mount

```bash
mount /dev/vdb1
```

> [!success]

**For a persisting disk mount, you will need to change the `/etc/fstab` file:**

- Retrieve the block ID

```bash
$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

- Add your disk in the `/etc/fstab` file:

```bash
$ sudo vim /etc/fstab

/etc/fstab: static file system information.
# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point> <type> <options> <dump> <pass>
UUID=51ba13e7-398b-45f3-b5f3-fdfbe556f62c / ext4 defaults 0 0
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt ext4 nofail 0 0
```

### From an instance on Windows
- Access the disk management tool

![public-cloud](images/2736.png){.thumbnail}

- Format the disk

![public-cloud](images/2737.png){.thumbnail}


Please note:

If the message "offline" appears (the disk is offline because of policy set by an administrator), you will need to change the disk attributes by right-clicking your disk, and then selecting "Online" and "Initialize" or by using Diskpart:

- Launch Powershell or the command prompt
- Checking the strategy followed
- Change the strategy
- Applying the strategy on the additional disk
- Initialize the disk from the disk manager and then format the disk.

Once the disk is formated, you can easily access it from your file explorer.


![public-cloud](images/2738.png){.thumbnail}
