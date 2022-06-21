---
title: Checking the file system on a VPS
excerpt: Find out how to check a file system for errors in rescue mode
slug: check-file-system-vps
section: 'Diagnostics and rescue mode'
order: 5
---

**Last updated 20th April 2021**

## Objective

**This guide explains how to diagnose file systems on OVHcloud Virtual Private Servers using rescue mode.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en-sg/directory/) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- A [VPS](https://www.ovhcloud.com/en-sg/vps/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

## Instructions


#### GNU/Linux VPS

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) and initiate a server reboot in rescue mode. Follow our [rescue mode guide](../rescue/) if necessary.

On older VPS ranges, your partitions will be automatically mounted in rescue mode. You can verify this by using the following command:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

The example output above displays an existing mount point. This means that the partition to check must be unmounted first:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> If your VPS is of a current range, the `MOUNTPOINT` column should be empty and you can skip the previous step.

Now you can check the partition with "fsck":

```bash
$ fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 files, 849881/6525179 blocks
```

If the result is empty, it usually means that the file system is clean. You can also force a check:

```bash
$ fsck /dev/sdb1 -f
```

### Windows VPS

The instructions above do generally not apply to a Windows VPS, because the file system check does not support NTFS. You can however perform a NTFS consistency check on the partitions.

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) and initiate a server reboot in rescue mode. Follow our [rescue mode guide](../rescue/) if necessary.

On older VPS ranges, your partitions will be automatically mounted in rescue mode. You can verify this by using the following command:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part /mnt/sdb1
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

The example output above displays existing mount points. This means that the partition to check must be unmounted first:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> If your VPS is of a current range, the `MOUNTPOINT` column should be empty and you can skip the previous step.


The following command checks the partition for consistency and tries to resolve errors if any are found:

```bash
$ ntfsfix /dev/sdb1
```


## Go further

[Activating Rescue Mode on VPS](../rescue/)

Join our community of users on <https://community.ovh.com/en/>.