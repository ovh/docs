---
title: 'Starting an instance on a attached volume'
excerpt: 'Find out how to start an instance on an attached volume'
slug: start-instance-on-a-volume
section: Getting started
order: 6
---

## Objective

Cloud servers come with an original disk that is copied from a system image (Debian 8, Windows 10...). It is also possible to use additional volumes, these are persistent disks that will allow to store data.

It is also possible to deploy an operating system to and from a volume. The cloud server will then start on this volume instead of the original disk.

**This guide provides you with instructions on how to start an instance on a attached volume.**

![public-cloud](images/3704.png){.thumbnail}

> [!success]
>
> Openstack natively allows you to boot from a volume. 
> It involves making the volume bootable and starting the instance from this volume.
> The changes will call the original disk to disappear as the new volume is taking over.
> The option described in this guide avoids you from having access to the original disk and to take advantage of the volume.
>

## Requirements

- A volume with an installed image
- [Setting OpenStack environment variables][../set-openstack-environment-variables/){.external}

## Configuring the volume

### Making the volume as priority device in the boot order.
A metadata must be added to the volume so that the instance can priorise the volume during the boot phase.

```sh
cinder metadata 897ec71d-bae2-4394-b8c1-4d8fd373a725 set boot_from=True
```

### Attacheing the volume
Once the volume has been configured with the metadta boot_from to true, the volume needs to be attached to the instance.

```sh
nova volume-attach myinstance01 897ec71d-bae2-4394-b8c1-4d8fd373a72
```

## Rebooting the instance
In order for the installed to start on the volume, it will need to be rebooted.

This can but done by a nova stop, and then nova start, or by a forced reboot.

```sh
nova reboot --hard myinstance01
```

> [!alert}
>
> A "soft" reboot is not sufficient for this task.
>

To verify the right boot order, you can look at the mount points.

```sh
$ lsblk
NAME   MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda    252:0    0  10G  0 disk
└─vda1 252:1    0  10G  0 part
vdb    252:16   0  15G  0 disk
└─vdb1 252:17   0  15G  0 part /
```

The mount point / is mounted well from /dev/vdb1.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
