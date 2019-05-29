---
title: 'Test disk speed'
slug: test_disk_speed
excerpt: 'This guide will show you how to test the number of input/output operations per second (IOPS) that your disks are able to achieve, whether for instances or additional disks.'
section: Knowledge Base
---

**Last updated 4th April 2019**

## Objective

You'll probably be called upon to check the speed of your disks when you carry out your tests. Whether you want to compare the performance of different disks or just check if they are satisfactory.

**This guide will show you how to test the number of input/output operations per second (IOPS) that your disks are able to achieve, whether for instances or additional disks.**

## Requirements

- a [Public Cloud Instance](https://www.ovh.co.uk/public-cloud/instances/){.external} in your OVH account
- administrative (root) access to your instance via SSH

## Instructions

### Install the test command

The command that you need to test your disk speed is called `fio`, and is not installed on your server by default.

To install `fio`, establish an SSH connection to your Instance and then run the following command:

```
root@server:~$ apt-get install fio
```

### Test your disk speed

To test your disk speed, run the following command:

```
root@serveur:~$ fio 
--name=rand-write --ioengine=libaio --iodepth=32 --rw=randwrite --invalidate=1 --bsrange=4k:4k,4k:4k --size=512m --runtime=120 --time_based --do_verify=1 --direct=1 --group_reporting --numjobs=1
```

> [!primary]
>
Please note that you will need to modify the `--numjobs` argument to reflect the number of CPUs that your instance has.
>
You can retrieve a list of arguments and their functions directly from the [fio guide](https://github.com/axboe/fio/blob/master/HOWTO).
>

To test the speed of an additional disk, you will need to mount the disk with the following command: 

```
root@serveur:~$ cd /mnt/disk
```

### Analyse the data

Once the test is finished, you will get a result similar to the following:

```
fio-2.1.11
Starting 1 process
test: Laying out IO file(s) (1 file(s) / 1024MB)
Jobs: 1 (f=1): [w(1)] [40.9% done] [0KB/3580KB/0KB /s] [0/895/0 iops] [eta 02m:55s]
test: (groupid=0, jobs=1): err= 0: 
pid=12376: Thu Oct 29 14:46:37 2015
write: io=428032KB, bw=3566.2KB/s, 
iops=891, runt=120031msec
slat (usec): min=4, max=4640, avg=22.57, stdev=62.14
clat (usec): min=299, max=181699, avg=34778.45, stdev=7857.92
lat (usec): min=324, max=181769, 
avg=34801.55, stdev=7843.84
clat percentiles (usec):
| 1.00th=[ 708], 5.00th=[30848], 10.00th=[33536], 20.00th=[34560],
| 30.00th=[35072], 40.00th=[35072], 50.00th=[35072], 60.00th=[35584],
| 70.00th=[36096], 80.00th=[36608], 90.00th=[37632], 95.00th=[39680],
| 99.00th=[47360], 99.50th=[51968], 99.90th=[125440], 99.95th=[146432],
| 99.99th=[181248]
bw (KB /s): min= 2646, max= 4232, 
per=100.00%, avg=3567.77, stdev=136.56
lat (usec) : 500=0.23%, 750=1.26%, 
1000=1.22%
lat (msec) : 2=0.37%, 4=0.03%, 10=0.01%, 20=0.11%, 50=96.05%
lat (msec) : 100=0.58%, 250=0.14%
cpu : usr=0.34%, sys=1.80%, ctx=9281, 
majf=0, minf=8
IO depths : 1=0.1%, 2=0.1%, 4=0.1%, 
8=0.1%, 16=0.1%, 32=100.0%, >=64=0.0%
submit : 0=0.0%, 4=100.0%, 8=0.0%, 
16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
complete : 0=0.0%, 4=100.0%, 8=0.0%, 
16=0.0%, 32=0.1%, 64=0.0%, >=64=0.0%
issued : total=r=0/w=107008/d=0, 
short=r=0/w=0/d=0
latency : target=0, window=0, percentile=100.00%, depth=32

Run status group 0 (all jobs):
WRITE: io=428032KB, aggrb=3566KB/s, minb=3566KB/s, maxb=3566KB/s, 
mint=120031msec, maxt=120031msec

Disk stats (read/write):
vda: ios=0/300294, merge=0/1455, ticks=0/7431952, in_queue=7433124, 
util=99.05%
```

The line we're interested in is line six, which contains the IOPS:

```
write: io=428032KB, bw=3566.2KB/s, iops=891, runt=120031msec
```

We can see that disk performance is approximately 891 IOPS.


## Go further

[Create and configure an additional disk on an Instance](https://docs.ovh.com/gb/en/public-cloud/create_and_configure_an_additional_disk_on_an_instance/){.external}

[Add storage space](https://docs.ovh.com/gb/en/public-cloud/add_storage_space/){.external}

Join our community of users on https://community.ovh.com/en/.


