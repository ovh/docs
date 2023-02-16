---
title: 'Repairing the GRUB bootloader'
slug: repairing-the-grub-bootloader
excerpt: 'Guide to repair the GRUB bootloader on an instance'
section: Tutorials
updated: 2020-11-23
---

**Last updated 23rd November 2020**

## Objective

In some cases you might need to repair the GRUB bootloader. This guide will show you how to easily repair the bootloader and successfully reboot your instance.

## Requirements

- The instance must be in rescue mode (see [Putting an instance in rescue mode](../put_an_instance_in_rescue_mode)).

## Instructions

Connect to the instance, either via VNC in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) or via SSH.

Type the following commands to mount the remote file system and start GRUB repairs:

```sh
mount /dev/sdb1 /mnt
mount -o bind /proc /mnt/proc
mount -o bind /sys /mnt/sys
mount -o bind /dev /mnt/dev
chroot /mnt /bin/bash
```

### Update GRUB (or GRUB2)

For GRUB installs:

```sh
grub-install /dev/sdb
update-grub
```

For GRUB2 installs:

```sh
grub2-install /dev/sdb
grub2-mkconfig -o /boot/grub2/grub.cfg
```

You can now leave the rescue mode and boot normally (see [Putting an instance in rescue mode](../put_an_instance_in_rescue_mode)).

## Go further

Join our community of users on <https://community.ovh.com/en/>.