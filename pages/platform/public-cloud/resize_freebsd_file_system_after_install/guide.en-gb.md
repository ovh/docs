---
title: Resize file system of a FreeBSD 12 instance
slug: resize-file-system-freebsd-12-instance
section: Tutorials
---

## Objective

The purpose of this guide is to explain how to resize your file system after installing or resizing your instance under FreeBSD 12. After that your instance can take advantage of all the disk space.

## Requirements

 * Having an instance with FreeBSD 12 on the Public Cloud
 * Having freshly installed the instance or having resized it

> [!primary]
>
> In this tutorial an r2-15 instance is used. Initially the file system is `5G`, at the end it will be `50G`
>

## Instructions

In order to size your file system, you must first repair the partitions.
Connect to your instance and watch the status of your partitions.

```
freebsd@freebsd:~ % sudo gpart show
=>      40  10239920  vtbd0  GPT  (50G) [CORRUPT]
        40      1024      1  freebsd-boot  (512K)
      1064       984         - free -  (492K)
      2048  10235904      2  freebsd-zfs  (4.9G)
  10237952      2008         - free -  (1.0M)
```

You may find that the file system is corrupted. This state is normal due to the instalation of the image on the instance or to its resizing. So we will fix it.

```
freebsd@freebsd:~ % sudo gpart recover vtbd0
vtbd0 recovered
```

By redoing the first step, you can see that the system is now repaired.

```
freebsd@freebsd:~ % sudo gpart show
=>       40  104857520  vtbd0  GPT  (50G)
         40       1024      1  freebsd-boot  (512K)
       1064        984         - free -  (492K)
       2048   10235904      2  freebsd-zfs  (4.9G)
   10237952   94619608         - free -  (45G)
```

You can now resize the `freebsd-zfs` partition, to do this, use this command.

```
freebsd@freebsd:~ % sudo gpart resize -i 2 vtbd0
vtbd0p2 resized
```

> [!primary]
>
> The partition number may be different. To find the correct number, check the `vtbd0` column and the number in front of the` freebsd-zfs` line.
>

You have now resized your file system. ZFS is configured to spread automatically. To check, make this order.

```
freebsd@freebsd:~ % zpool list
NAME    SIZE  ALLOC   FREE  CKPOINT  EXPANDSZ   FRAG    CAP  DEDUP  HEALTH  ALTROOT
zroot  49.5G   854M  48.7G        -         -     0%     1%  1.00x  ONLINE  -
```

You will notice that my `zroot` is now` 50G`. ZFS is therefore well extended.