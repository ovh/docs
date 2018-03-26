---
title: Increase the size of an additional disk
excerpt: Increase the size of an additional disk
slug: increase_the_size_of_an_additional_disk
legacy_guide_number: g1865
section: Storage
---


## 
If you have reached the maximum storage capacity on your additional disk, you can still increase its size. 

This guide explains how to increase the size of an additional disk as well as enlarging the partition.


## Prerequisites

- An instance
- Additional disk




## 

- Connect to 
[the OVH control panel](https://www.ovh.com/manager/cloud/)
- Click the arrow at the bottom right of your drive:



![](images/img_2744.jpg){.thumbnail}

- Select "Edit", a new menu appears:



![](images/img_2745.jpg){.thumbnail}
From this new menu you can:

- Change the disk name
- Change the size of your disk



- Click on "Apply"



## Warning :
Under Linux, so that the title does not change during this operation (vdb > VDC for example), we advise that you unmount your drive before performing this operation:

```
admin@server-1:~$ sudo umount /point/de/montage
```




## With Linux

- Unmount the disk:

```
admin@server-1:~$ sudo umount /mnt/disk
```




- Recreate the partition:

```
admin@server-1:~$ sudo fdisk /dev/vdb
Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command
```



```
Command (m for help): d

Selected partition 1
Partition 1 has been deleted.
```



```
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-146800639, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-146800639, default 146800639):

Created a new partition 1 of type 'Linux' and of size 70 GiB.
```



```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```


- Verify and recheck the partition:


```
admin@server-1:~$ sudo e2fsck -f /dev/vdb1

e2fsck 1.42.12 (29-Aug-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdb: 12/3276800 files (0.0% non-contiguous), 251700/13107200 blocks
```



```
admin@server-1:~$ sudo resize2fs /dev/vdb1

resize2fs 1.42.12 (29-Aug-2014)
Resizing the filesystem on /dev/vdb to 18350080 (4k) blocks.
The filesystem on /dev/vdb is now 18350080 (4k) blocks long.
```


- Monter et vérifier le disque :

```
admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```



```
admin@server-1:~$ df -h
Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 69G 52M 66G 1% /mnt/disk
```





## With Windows

- Run Disk Manager and right click on your drive:



![](images/img_2748.jpg){.thumbnail}
Click on Extend Volume


## 
[Go back to the index of Cloud guides]({legacy}1785)

