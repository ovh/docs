---
title: Migrating data from one HA-NAS to another via NFS
slug: nas/nas-migration
excerpt: Find out how to migrate your data from one HA-NAS to another via an NFS share
section: NAS
order: 05
---

**Last updated 9th February 2021**

## Objective

This guide details how to transfer data from one HA-NAS to another. 

## Requirements

- An OVHcloud HA-NAS
- An NFS-compatible distribution
- You need to have mounted your HA-NAS beforehand by following the guide to [mount your HA-NAS via an NFS](https://docs.ovh.com/gb/en/storage/nas-nfs/){.external} share.

## Instructions

Compatibility: Debian 6/7/8 & Ubuntu 12/13/14

To transfer your data, we will use the `rsync` command. There are several ways to transfer your data. It's up to you to use one over another.

The following example moves your data from a Source mount point to a Destination mount point.

```sh
rsync -Pva /mnt/SrcNas /mnt/DstNas
```

|Argument|Description|
|---|---|
|SrcNas|Source mount point|
|DstNas|Destination mount point|

> [!alert]
>
> Warning: if you add other options to `rsync`, these may not be compatible with the rights and permissions system of HA-NAS.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
