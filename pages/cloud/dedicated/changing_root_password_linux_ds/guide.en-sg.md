---
title: Changing the root password on a dedicated server
slug: root-password
excerpt: Find out how to change the root or admin password of a dedicated server
section: Server Management
order: 1
---

**Last updated 16th February 2021**

## Objective

It may become necessary to change the root password (or the one of your admin/sudo user) on your GNU/Linux operating system. There are two possible scenarios:

- You are still able to log in via SSH
- You are unable to log in via SSH because you have lost your password

**This guide will explain how to proceed with changing your admin password depending on the initial situation.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-sg/bare-metal/) in your OVHcloud account
- Login credentials received via email after the installation (if still valid)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) (for using rescue mode)


> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-sg/directory/) if you have difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Instructions

### Changing the password if you still have access (sudo user or root)

Log in to your server via SSH. Switch to the root user, if necessary:

```
~$ sudo su -
~#
```

To change the password of the current user, type `passwd`:

```
~# passwd

New password:
Retype new password:
passwd: password updated successfully
```


> [!primary]
>
> On a GNU/Linux distribution, the password you enter **will not appear**.
>

### Changing the password if you have lost it

#### Step 1: Identify the system partition

After restarting your server into [rescue mode](../ovh-rescue/), you will need to identify the system partition. You can do this with the following command:

```
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
If your server has a RAID configuration, you will need to mount your raid volume.
>
> - If you are using Softraid, your root partition will be /dev/mdX.
> - If you are using Hardraid, your root partition will be /dev/sdX.


#### Step 2: Mount the system partition

Once you have identified the system partition, you can mount it with the following command:

```
# mount /dev/hda1 /mnt/
```

#### Step 3: Edit the root partition

The system partition is locked for editing by default so you need to open it for write access first, which you can do with the following command:

```
# chroot /mnt
```

#### Step 4: Change the root password

The final step is to change the password with the following command:

```
# passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

When this is done, change the boot mode of your server back to `Boot from the hard disk`{.action} and restart it. Your root password will now be changed.

## Go further

[Securing a dedicated server](../securing-a-dedicated-server/)

Join our community of users on <https://community.ovh.com/en/>.
