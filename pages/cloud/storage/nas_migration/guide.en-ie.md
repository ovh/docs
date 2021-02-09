---
title: Data migration from one NAS to another via NFS
slug: nas/nas-migration
excerpt: Find out here how to migrate your data from one NAS to another via NFS.
section: NAS
---


## Requirements

This guide explains how to transfer data from one NAS to another. In order to transfer your data, you need:

- An OVHcloud NAS / miniNAS / HA-NAS
- NFS compatible distribution
- a NAS mounted beforehand by following the guide to [mounting your NAS via NFS share](https://docs.ovh.com/ie/en/storage/nas-nfs/){.external}.


## Settings

Compatibility: Debian 6/7/8 & Ubuntu 12/13/14


There are several solutions to transfer your data. This example will use the "rsync" command. However, you can choose another method for the data transfer.

The example command below allows you to transfer your data from a Source mount point to a Destination mount point.

```sh
rsync -Pvah /mnt/SrcNas /mnt/DstNas
```

|Argument|Description|
|---|---|
|SrcNas|Source mount point|
|DstNas|Destination mount point|

> [!alert]
>
> Be careful if you add other options to rsync, they may not be compatible with the HA-NAS rights and permissions system.
>
