---
title: Displaying boot log in the KVM
slug: displaying-boot-log-in-the-kvm
section: Diagnostic and rescue mode
---

**Last updated 15th June, 2019**

## Overview

If your VPS isn’t responding as you would like, the quickest way to diagnose the problem is to check what appears in the KVM. This guide explains how to modify the display so that everything is displayed in the console and the KVM.

Please note that for some environments, the KVM won’t provide any useful information because the boot sequence occurs in the serial console, or the GRUB is configured in silent mode.


## Requirements

- You must have access to a VPS in [rescue mode](https://docs.ovh.com/gb/en/vps/rescue/){.external}


## Instructions

If your VPS is working normally, go directly to step 4.

> [!warning]
>
> These modifications will change the GRUB configuration. Be sure to perform backups before making any modifications. OVH cannot be held responsible for damage or loss of data following these operations.
>

### Step 1: ensure VPS is in rescue mode

If you have not rebooted the VPS into rescue mode yet, you may use the [rescue mode](https://docs.ovh.com/gb/en/vps/rescue/){.external} guide to help you to reboot it into rescue mode.

### Step 2: perform initial verification

After connecting, you should check the name of the disk with the command `lsblk`:

```sh

lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 8:0 0 3G 0 disk
└─sda1 8:1 0 3G 0 part /
sdb 8:16 0 10G 0 disk
└─sdb1 8:17 0 10G 0 part
```

Here, the primary disk is `sdb` and the primary partition is `sdb1` (`sda`is the rescue disk and `sda1` is the primary rescue partition mounted on `/`).


If the result is the following, your primary disk is `vdb` and your primary partition is `vdb1` (`vda` is the rescue disk and `vda1` is the primary rescue partition mounted on `/`):

```sh
lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   40G  0 disk
└─sdb1   8:17   0   40G  0 part /mnt/sdb1
```

> [!primary]
>
> For this guide, we will use `sdb`. If your disk is `vdb`, simply replace sdb with vdb for each command.
>

### Step 3: Unmount and remount the partition correctly

On a VPS in rescue mode, the primary disk is already mounted. Therefore, it first needs to be unmounted and then remounted with the correct settings:

```sh
umount /dev/sdb1
```

### Step 4: mount the disk

Now that the name of the disk has been identified, you can mount it with the correct settings. Since in step 1 we found the disk was mounted under "/mnt/sdb1", we will mount it again in the same folder with these commands:

```sh
mount /dev/sdb1 /mnt/sdb1
mount -t proc none /mnt/sdb1/proc
mount -o bind /dev /mnt/sdb1/dev
mount -t sysfs none /mnt/sdb1/sys/
```

These commands will then allow you to use the `chroot` command and initiate the commands that require access to the `sys`, `dev` and `proc` directories.

### Step 5: launch the CHROOT command

To apply it directly to the system, type the following command:

```sh
chroot /mnt/sdb1
```

From now on, all commands will be applied to your VPS and not to your rescue mode.

### Step 4: make the modifications in GRUB

#### For CentOS 6 (grub):

Edit the file /boot/grub/grub.conf and remove the rhgb and quiet arguments from the kernel lines and and the "console=ttyS0" "loglevel=7" parameter instead if missing:

Before:
```sh
title CentOS (2.6.32-754.12.1.el6.x86_64)
        root (hd0,0)
        kernel /boot/vmlinuz-2.6.32-754.12.1.el6.x86_64 ro root=UUID=7e192559-d669-4919-840b-4c9a846fafa7 rd_NO_LUKS rd_NO_LVM LANG=en_US.UTF-8 rd_NO_MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd_NO_DM rhgb quiet
        initrd /boot/initramfs-2.6.32-754.12.1.el6.x86_64.img
title CentOS (2.6.32-642.15.1.el6.x86_64)
        root (hd0,0)
        kernel /boot/vmlinuz-2.6.32-642.15.1.el6.x86_64 ro root=UUID=7e192559-d669-4919-840b-4c9a846fafa7 rd_NO_LUKS rd_NO_LVM LANG=en_US.UTF-8 rd_NO_MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd_NO_DM rhgb quiet
        initrd /boot/initramfs-2.6.32-642.15.1.el6.x86_64.img
title CentOS 6 (2.6.32-642.el6.x86_64)
        root (hd0,0)
        kernel /boot/vmlinuz-2.6.32-642.el6.x86_64 ro root=UUID=7e192559-d669-4919-840b-4c9a846fafa7 rd_NO_LUKS rd_NO_LVM LANG=en_US.UTF-8 rd_NO_MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd_NO_DM rhgb quiet
        initrd /boot/initramfs-2.6.32-642.el6.x86_64.img
```

After:
```sh
title CentOS (2.6.32-754.12.1.el6.x86_64)
        root (hd0,0)
        kernel /boot/vmlinuz-2.6.32-754.12.1.el6.x86_64 ro root=UUID=7e192559-d669-4919-840b-4c9a846fafa7 rd_NO_LUKS rd_NO_LVM LANG=en_US.UTF-8 rd_NO_MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd_NO_DM console=ttyS0 loglevel=7
        initrd /boot/initramfs-2.6.32-754.12.1.el6.x86_64.img
title CentOS (2.6.32-642.15.1.el6.x86_64)
        root (hd0,0)
        kernel /boot/vmlinuz-2.6.32-642.15.1.el6.x86_64 ro root=UUID=7e192559-d669-4919-840b-4c9a846fafa7 rd_NO_LUKS rd_NO_LVM LANG=en_US.UTF-8 rd_NO_MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd_NO_DM console=ttyS0 loglevel=7
        initrd /boot/initramfs-2.6.32-642.15.1.el6.x86_64.img
title CentOS 6 (2.6.32-642.el6.x86_64)
        root (hd0,0)
        kernel /boot/vmlinuz-2.6.32-642.el6.x86_64 ro root=UUID=7e192559-d669-4919-840b-4c9a846fafa7 rd_NO_LUKS rd_NO_LVM LANG=en_US.UTF-8 rd_NO_MD SYSFONT=latarcyrheb-sun16 crashkernel=auto  KEYBOARDTYPE=pc KEYTABLE=us rd_NO_DM console=ttyS0 loglevel=7
        initrd /boot/initramfs-2.6.32-642.el6.x86_64.img
```

Save the file and exit. The change will reflect on the next reboot.

#### For CentOS 7 (grub2):

In order to access the boot log in the KVM, make sure you have the following values in the /etc/default/grub file:

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

If you don’t have these values, edit and modify your file, then save it.

Then use the following command to regenerate the GRUB configuration file (the values will be saved for the next reboot):

```sh
grub2-mkconfig -o "$(readlink /etc/grub2.cfg)"
```

#### For Debian (7/8/9) and Ubuntu (16.04/18.04):

In order to access the boot log in the KVM, make sure you have the following values in the /etc/default/grub file:

```sh
GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"
```

If you don’t have these values, edit and modify your file, then save it.

Then use the following command to regenerate the GRUB configuration file (the values will be saved for the next reboot):

```sh
update-grub
```

Once you have made the modifications, reboot the VPS or the instance in normal mode and check the KVM: the boot log information should appear.


## Go further

Join our community of users at <https://community.ovh.com/en/>.
