---
title: Changing the root password on a Linux dedicated server
slug: root-password
excerpt: This guide will show you how to change the root password on a Linux dedicated server.
section: Server Management
---

**Last updated 20th June 2018**

## Objective

When you install or reinstall a distribution or operating system, you are given a root access password. We strongly recommend that you change it, as detailed in our guide to [securing a Dedicated Server](https://docs.ovh.com/gb/en/dedicated/securing-a-dedicated-server/#change-the-password-associated-with-the-root-user){.external}. You may also find that you have lost this password, and need to change it.

**This guide will take you through both scenarios and show you how to change the root password of your sever.**

## Requirements

* a [dedicated server](https://www.ovh.co.uk/dedicated_servers/){.external}
* administrative (root) access to the server via SSH
* access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}

## Instructions

### Changing the password with root access

If you have root access with your current password and simply want to change it, then establish an SSH connection to the server via the command line and type the following command:

```sh
# passwd
```
Next, enter your new password twice, as shown below:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


> [!primary]
>
> Please note that on a Linux distribution, the characters of your password **will not appear** as you type them.
>

### Changing a password after you have lost it

#### Step 1: Identify the system partition

After putting your server into [rescue mode](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}, you will need to identify the system partition. You can do this with the following command:

```sh
# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

In the example above, the system partition is /dev/hda1. 

> [!primary]
>
If your server has a software RAID configuration, you will need to mount your raid volume (usually /dev/mdX). 
>

#### Step 2: Mount the system partition

Once you've identified the system partition, you can mount it with the following command:

```sh
# mount /dev/hda1 /mnt/
```

#### Step 3: Edit the root partition

The system partition is locked for editing by default so you'll need to open it for write access, which you can do with the following command:

```sh
# chroot /mnt
```

#### Step 4: Change the root password

The final step is to change the password with the following command:

```sh
# passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

When this is done, change the boot mode on your server back to `boot from hard disk`{.action} and restart it. Your root password will now be changed.

## Go further

Join our community of users on <https://community.ovh.com/en/>.