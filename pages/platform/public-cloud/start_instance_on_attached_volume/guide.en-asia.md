---
title: 'Starting an instance on an attached volume'
excerpt: 'Find out how to start an instance on an attached volume'
updated: 2021-11-01
---

**Last updated 1st November 2021**

## Objective

Cloud servers come with an original disk that is copied from a system image (Debian 8, Windows 10, etc.). It is also possible to use additional volumes, these are persistent disks that will allow data to be stored.

It is also possible to deploy an operating system to and from a volume. The cloud server will then start on this volume instead of the original disk.

**This guide provides you with instructions on how to start an instance on an attached volume.**

![public-cloud](images/3704.png){.thumbnail}

> [!success]
>
> Openstack natively allows you to boot from a volume. 
> It involves making the volume bootable and starting the instance from this volume.
> The changes will cause the original disk to disappear as the new volume is taking over.
> The functionality described in this guide eliminates the need to access the original disk and therefore takes advantage of the volume.
>

## Requirements

- A volume with an installed image
- [Setting OpenStack environment variables](/pages/platform/public-cloud/loading_openstack_environment_variables){.external}

### Configuring the volume

#### Making the volume as the priority device in the boot order.

A metadata must be added to the volume so that the instance can prioritize the volume during the boot phase.

```bash
cinder metadata 897ec71d-bae2-4394-b8c1-4d8fd373a725 set boot_from=True
```

### Attaching the volume
Once the volume has been configured with the metadata `boot_from` to `True`, the volume needs to be attached to the instance.

```bash
nova volume-attach myinstance01 897ec71d-bae2-4394-b8c1-4d8fd373a72
```

### Rebooting the instance
In order for the instance to start on the volume, it will need to be rebooted.
<br> This can be done by using `nova stop` and `nova start` commands, or by a forced reboot.

```bash
nova reboot --hard myinstance01
```

> [!alert]
>
> A "soft" reboot is not sufficient for this task.
>

To make sure the boot order has been properly set on the volume, you can verify the mount points with the following command:

```bash
$ lsblk
NAME   MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda    252:0    0  10G  0 disk
└─vda1 252:1    0  10G  0 part
vdb    252:16   0  15G  0 disk
└─vdb1 252:17   0  15G  0 part /
```

The mount point **/** is properly mounted from **/dev/vdb1**.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
