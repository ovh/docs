---
title: Resizing the file system in FreeBSD 12
excerpt: Find out how resize the file system of an OVHcloud Public Cloud instance or VPS with FreeBSD 12
updated: 2020-10-27
---


## Objective

The purpose of this guide is to explain how to resize your file system after installing FreeBSD 12 or resizing the service. By doing this, your system will be able to take advantage of all the disk space.

## Requirements

- Having an instance with FreeBSD 12 in your [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) or a [Virtual Private Server](https://www.ovhcloud.com/en-au/vps/) with FreeBSD 12
- Having freshly installed the instance/VPS or having resized it

> [!primary]
>
> In this tutorial a Public Cloud r2-15 instance is used. The instruction steps are valid for a VPS or a Public Cloud instance. In the examples below, the file system size is initially 5 GB and then 50 GB after applying the actions.
>

## Instructions

In order to size your file system, you must first repair the partitions.

Connect to your instance and watch the status of your partitions:

```
freebsd@freebsd:~ % sudo gpart show
=>      40  10239920  vtbd0  GPT  (50G) [CORRUPT]
        40      1024      1  freebsd-boot  (512K)
      1064       984         - free -  (492K)
      2048  10235904      2  freebsd-zfs  (4.9G)
  10237952      2008         - free -  (1.0M)
```

You may find that the file system is corrupted. This state is normal due to the installation of the image on the service or after resizing it. So we will fix it:

```
freebsd@freebsd:~ % sudo gpart recover vtbd0
vtbd0 recovered
```

By repeating the first step, you can see that the system is now repaired:

```
freebsd@freebsd:~ % sudo gpart show
=>       40  104857520  vtbd0  GPT  (50G)
         40       1024      1  freebsd-boot  (512K)
       1064        984         - free -  (492K)
       2048   10235904      2  freebsd-zfs  (4.9G)
   10237952   94619608         - free -  (45G)
```

You can now resize the `freebsd-zfs` partition. To do this, use this command:

```
freebsd@freebsd:~ % sudo gpart resize -i 2 vtbd0
vtbd0p2 resized
```

> [!primary]
>
> The partition number may be different. To find the correct number, check the `vtbd0` column and the number in front of the `freebsd-zfs` line.
>

You have now resized your file system. ZFS is configured to spread automatically. Use this command to verify:

```
freebsd@freebsd:~ % zpool list
NAME    SIZE  ALLOC   FREE  CKPOINT  EXPANDSZ   FRAG    CAP  DEDUP  HEALTH  ALTROOT
zroot  49.5G   854M  48.7G        -         -     0%     1%  1.00x  ONLINE  -
```

In the example output above, `zroot` now has a size of 50 GB. ZFS is therefore well extended.


## Go further

Join our community of users on <https://community.ovh.com/en/>.
