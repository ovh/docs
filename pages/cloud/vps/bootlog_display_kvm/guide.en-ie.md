---
title: Displaying boot logs in the KVM
slug: displaying-boot-log-in-the-kvm
excerpt: Find out how to diagnose a VPS by checking the boot log
section: 'Diagnostics and rescue mode'
---

**Last updated 5th July 2021**

## Objective

If your VPS has become unresponsive, you still have the possibility to access it from your Control Panel via [KVM](../use-kvm-for-vps/). The quickest way to diagnose the problem is to check the boot log of the server. However, the GRUB configuration needs to be modified in order for these logs to appear. 

> [!primary]
>
> Please note that for some environments, the KVM is unable to provide any useful information because the boot sequence occurs in the serial console, or GRUB is configured in silent mode.
>

**This guide explains how to activate boot logs that can help with troubleshooting a VPS.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en-ie/directory/) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- A [VPS](https://www.ovhcloud.com/en-ie/vps/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)


## Instructions

> [!warning]
>
> These modifications will change the GRUB configuration. OVHcloud cannot be held responsible for any loss or damage to your data caused by these operations. Be sure to perform backups of all your important data before any modifications.
>

If you still have access to your VPS via SSH, you can skip to [step 6](#step6).

### Step 1: Restart the VPS into rescue mode

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and initiate a server reboot in rescue mode. Refer to our [rescue mode guide](../rescue/) if necessary.

### Step 2: Perform initial verification

On older VPS ranges, your partitions will be automatically mounted in rescue mode. You can use the following commands to verify this and identify where your partition is mounted:

#### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

#### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

The example output above shows that the system partition is mounted on **/mnt/sdb1**. (The primary disk is **sdb**, whereas **sda** is the rescue disk and **sda1** is the primary rescue partition mounted on **/**).

If your VPS is of the [**current ranges**](https://www.ovhcloud.com/en-ie/vps/), no automatic mounting will occur and the `MOUNTPOINT` column should be empty. In that case, proceed with [step 4](#step4).


### Step 3: Unmount the partition (older ranges only)

On a legacy VPS in rescue mode, the primary disk is already mounted. Therefore, it first needs to be unmounted before remounting it in step 4:

```sh
~$ umount /dev/sdb1
```

### Step 4: Mount the partition with the correct settings <a name="step4"></a>

If your VPS is of the [**current ranges**](https://www.ovhcloud.com/en-ie/vps/), first make sure the mount folder is created:

```sh
~$ mkdir -p /mnt/sdb1
```

Enter the following commands to mount the partition with the appropriate settings:

```sh
~$ mount /dev/sdb1 /mnt/sdb1
~$ mount -t proc none /mnt/sdb1/proc
~$ mount -o bind /dev /mnt/sdb1/dev
~$ mount -t sysfs none /mnt/sdb1/sys/
```

The system partition is now mounted for use with the `chroot` command, in order to carry out actions that require access to the `sys`, `dev` and `proc` directories.

### Step 5: Use the CHROOT command to configure your system files

You now need to access and edit the GRUB files of your system. You can do this by using the `chroot` command:

```sh
~$ chroot /mnt/sdb1
```

From now on, all commands that you enter will be applied to your VPS instead of the temporary rescue mode environment.

### Step 6: Modify the GRUB configuration <a name="step6"></a>

#### **For Debian 8 or higher and Ubuntu 18 or higher**

Create a backup copy of the config file:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

In order to access the boot log with the KVM console, make sure you have the following value inside the file `/etc/default/grub`:

```sh
GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"
```

If this line is missing or different, modify the file with an editor and save it.

Then use the following command to regenerate the GRUB configuration file (the changes will be saved for the next reboot):

```sh
~$ update-grub
```

#### **For CentOS 7 or higher (grub2)**

Create a backup copy of the config file:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

In order to access the boot log with the KVM console, make sure you have the following values inside the file `/etc/default/grub`:

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 no_timer_check net.ifnames=0 crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

If these lines are missing or different, modify the file with an editor and save it.

Then use the following command to regenerate the GRUB configuration file (the values will be saved for the next reboot):

```sh
~$ grub2-mkconfig -o "$(readlink /etc/grub.cfg)"
```

Once you have done the modifications, reboot your VPS in 'normal' mode in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie). Boot log information should now appear when using the [KVM console](../use-kvm-for-vps/).


## Go further

[Using the KVM for a VPS](../use-kvm-for-vps/)

[Activating rescue mode on a VPS](../rescue/)

Join our community of users at <https://community.ovh.com/en/>.
