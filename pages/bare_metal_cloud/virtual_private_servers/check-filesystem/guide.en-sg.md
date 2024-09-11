---
title: Checking the file system on a VPS
excerpt: Find out how to check a file system for errors in rescue mode
updated: 2023-09-20
---

## Objective

**This guide explains how to diagnose file systems on OVHcloud Virtual Private Servers using rescue mode.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en-sg/directory/) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- A [VPS](https://www.ovhcloud.com/en-sg/vps/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### GNU/Linux VPS

Log in to the [OVHcloud Control Panel](/links/manager) and initiate a server reboot in rescue mode. Follow our [rescue mode guide](/pages/bare_metal_cloud/virtual_private_servers/rescue) if necessary.

You can then verify the configuration of the disks:

```bash
lsblk
```

The partition corresponding to rescue mode (`sda1` in this example) is mounted in the directory `/` and the disk of the VPS is named `sdb` and should have no mount point.

Example:

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1   8:17   0   80G  0 part  
```

If your result looks similar to the output above and the column `MOUNTPOINT` is empty in the corresponding line (`sdb1`), you can proceed with the [next step](#fscheck).

However, if your result shows that there is a mount point for the VPS partition, it needs to be unmounted first.

Example:

```console
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

In the example output above, the partition `sdb1` is mounted at `/mnt/`. In order to check the partition, this partition must not be mounted.

To unmount your partition, use the following command:

```bash
umount /dev/partition_name
```

In this example configuration, the command would be:

```bash
umount /dev/sdb1
```

<a name="fscheck"></a>

Now you can check the partition with "fsck":

```bash
fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 files, 849881/6525179 blocks
```

If the result is empty, it usually means that the file system is clean. You can also force a check:

```bash
fsck /dev/sdb1 -f
```

### Windows VPS

The instructions above do generally not apply to a Windows VPS, because the file system check does not support NTFS. You can however perform a NTFS consistency check on the partitions.

Log in to the [OVHcloud Control Panel](/links/manager) and initiate a server reboot in rescue mode. Follow our [rescue mode guide](/pages/bare_metal_cloud/virtual_private_servers/rescue) if necessary.

You can then verify the configuration of the disks:

```bash
lsblk
```

The partition corresponding to rescue mode (`sda1` in this example) is mounted in the directory `/` and the disk of the VPS is named `sdb` and should have no mount point.

Example:

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part 
├─sdb2   8:18   0 99.7G  0 part 
```

If your result looks similar to the output above and the column `MOUNTPOINT` is empty in the corresponding line, you can proceed with the [next step](#fscheckwin).

However, if your result shows that there is a mount point for the VPS partition, it needs to be unmounted first.

Example:

```console
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

In the example output above, the partition concerned `sdb2` is mounted at `/mnt/`. In order to check the partition, this partition must not be mounted.

To unmount your partition, use the following command:

```bash
umount /dev/partition_name
```

In this example configuration, the command would be:

```bash
umount /dev/sdb2
```

<a name="fscheckwin"></a>

The following command checks the partition for consistency and tries to resolve errors if any are found:

```bash
ntfsfix /dev/partition_name
```

In this example configuration, the command would be:

```bash
ntfsfix /dev/sdb2
```

## Go further

[Activating Rescue Mode on VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Join our [community of users](/links/community).