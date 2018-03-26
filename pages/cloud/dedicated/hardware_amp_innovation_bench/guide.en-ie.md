---
title: Hardware & Innovation Bench
excerpt: How to carry out performance tests on the Hardware & Innovation Bench server.
slug: hardware_amp_innovation_bench
legacy_guide_number: g1517
---

Different types of RAID are split between the server and two DAS systems. You can therefore test RAID hardware with an LSI MegaRAID 9271-4i card, but you can also test RAID software, and hardware with different types of disk.

## RAID hardware with an LSI MegaRAID 9271-4i card
|Devices|Composition of hardRAID|Type|
|---|---|---|
|/dev/sda|2 x 120 GB SSD DC S3500 disks (OS pre-installed)|RAID 1|
|/dev/sdb|2 x 240 GB SSD DC S3500 disks|RAID 1|
|/dev/sdc|2 x 600 GB SSD DC S3500 disks|RAID 1|
|/dev/sdd|2 x SAS 15K rpm HGST disks|RAID 1|
|/dev/sde|2 x 900Go SAS 10K rpm HGST disks|RAID 1|
|/dev/sdf|2 x 4 TB SAS 7200 rpm HGST disks|RAID 1|



## System:
The system is installed on the /dev/sda device


## RAID hardware with an LSI Megaraid 9271-4i card with CacheCade and FastPath
|Devices|Composition of RAID|Type|
|---|---|---|
|/dev/sdg|2 x 240 GB SSD DC S3500 disks|RAID 1 FastPath|
|/dev/sdh|2 x 600 GB SSD DC S3500 disks|RAID 1 FastPath|
|/dev/sdi|2 x 600 GB SAS 15K rpm HGST disks|RAID 1 CacheCade|
|/dev/sdj|2 x 900 GB SAS 10K rpm HGST disks|RAID 1 CacheCade|
|/dev/sdk|2 x 4 TB SAS 7200 rpm HGST disks|RAID 1 CacheCade|



## CacheCade disk:
For CacheCade: 1 x 480 GB SSD DC S3500 disk is configured.


## RAID software
|Devices|Composition of RAID|type|
|---|---|---|
|/dev/md1|2 x 240 GB SSD DC S3500 disks (/dev/sdl1, /dev/sdm1)|RAID 1|
|/dev/md2|2 x 600 GB SSD DC S3500 disks (/dev/sdn1 & /dev/sdo1)|RAID 1|
|/dev/md3|2 x 600 GB SAS disks (/dev/sdp1 & /dev/sdq1)|RAID 1|
|/dev/md4|2 x 900 GB SAS 10K rpm HGST disks (/dev/sdr1 & /dev/sds1)|RAID 1|
|/dev/md5|2 x 4 TB SAS 7200 rpm HGST disks (/dev/sdt1, /dev/sdu1))|RAID 1|



To test different performances of different RAID types:

## Read test
The hdparm command allows you to measure the disk's read level:


```
hdparm -Tt /dev/DEVICE
```


DEVICE is the device to test.

Example: (device to test/dev/sda)


```
hdparm -Tt /dev/sda

/dev/sda:
Timing cached reads: 24358 MB in 2.00 seconds = 12191.84 MB/sec
Timing buffered disk reads: 844 MB in 3.00 seconds = 281.19 MB/sec
```




## Write test
The dd command allows you to measure the disk's write level:


```
dd if=/dev/zero of=/DOSSIER/test.data bs=8k count=128k
```


FOLDER is the folder where the hardware partition to test has mounted to.

Example: (partition /dev/sda2 mounted to /home)


```
dd if=/dev/zero of=/home/test.data bs=8k count=128k
131072+0 records in
131072+0 records out
1073741824 bytes (1.1 GB) copied, 0.702882 s, 1.5 GB/s
```




## 
All RAIDs come in RAID 1 by default. You can choose to upgrade them to RAID 2.

## Deleting RAID
All existing data will be deleted when you delete RAID.


## Changing RAID software
To change the RAID, you will firstly need to delete it. Then:


- Retrieve the RAID information:


```
mdadm --detail /dev/mdX
```


Example:


```
mdadm --detail /dev/md1
/dev/md1:
Version: 1.2
Creation Time: Fri Jul 4 21:14:12 2014
Raid Level: raid1
Array Size: 234298176 (223.44 GiB 239.92 GB)
Used Dev Size: 234298176 (223.44 GiB 239.92 GB)
Raid Devices: 2
Total Devices: 2
Persistence: Superblock is persistent

Update Time: Fri Jul 11 13:05:01 2014
State: clean
Active Devices: 2
Working Devices: 2
Failed Devices: 0
Spare Devices: 0

Name: ns6427926.ip-5-135-134.eu:1 (local to host ns6427926.ip-5-135-134.eu)
UUID: 299015e1:50b4554c:faf58dbc:74d3c2a4
Events: 20

Number Major Minor RaidDevice State
0 8 177 0 active sync /dev/sdl1
1 8 193 1 active sync /dev/sdm1
```


- You must change the status of each of these partitions to "fail" before removing them from the RAID software:


```
mdadm --manage /dev/md0 --fail /dev/sdX
```


Example:


```
mdadm --manage /dev/md1 --fail /dev/sdl1
mdadm --manage /dev/md1 --fail /dev/sdm1
```


- Stop the RAID


```
mdadm --manage --stop /dev/mdX[/code

[u]Example:[/u]

[code]mdadm --manage --stop /dev/md1
```


- Remove the superblock:


```
mdadm --zero-superblock /dev/sdX
```


Example:


```
mdadm --zero-superblock /dev/sdl1
mdadm --zero-superblock /dev/sdm1
```


- Set up the RAID:


```
mdadm --create /dev/mdZ --level=L --assume-clean --raid-devices=N /dev/sdX1 /dev/sdY1
```


/dev/mdZ: the RAID volume that you're going to set up (it must not/no longer be present).
--level=: the RAID type (0,1).
--raid-devices=: the number of devices in the RAID system.
/dev/sdX1 /dev/sdY1: the partition(s) in software RAID.

Example: (/dev/md1 in RAID 0 with /dev/sdl1 and /dev/sdm1 partitions)


```
mdadm --create /dev/md1 --level=0 --assume-clean --raid-devices=2 /dev/sdl1 /dev/sdm1
```



Don't forget to format the /dev/mdX partition and mount it before you perform write tests.

