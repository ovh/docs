---
title: Storage Benchmarking
slug: ceph/io-benchmarking
excerpt: Evaluating performance of Cloud Disk Array
section: Cloud Disk Array
---


## Before you start
Before starting benchmarks get familiar with your environment. Even small missed detail can make your benchmark invalid. For example, there is no point in testing performance of Cloud Disk Array from different DC. While it will be working, latencies between DC are too high for such setup.

Selecting proper metrics for your use case is also very important. If you are planning to run a database, total available IOPS of 8KiB block size will probably be more important than total bandwidth with big IOs. If you plan to use Hadoop then storage requirements will be totally different.

In our case we try to find balance between different workloads. We use *fio* -- very popular benchmarking tool. It provides a lot of tunable options to simulate desired workload and gives detailed statistics about storage behaviour under load. It's also available on a wide range of operating systems and is free to use.


## First benchmark
Make sure that client used for testing has access to your Cloud Disk Array. You can verify that by running:


```bash
$ ceph -s
cluster 3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 health HEALTH_OK
 monmap e1: 3 mons at {mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.x:6789/0,mon-02-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10..a.b.y:6789/0,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.z:6789/0}
        election epoch 50, quorum 0,1,2 mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-02-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 osdmap e52: 3 osds: 3 up, 3 in
  pgmap v2709: 64 pgs, 1 pools, 83255 MB data, 1300 kobjects
        261 GB used, 16401 GB / 16662 GB avail
              64 active+clean
```

If you can see output similar to above then you can start preparing image for testing:


```bash
rbd -p rbd create --size 1024 --image-format 2 test-image
```

You can can test performance in three different situations:

- directly use RBD
- map image to */dev/rbd** device
- run benchmark inside VM running on RBD image

Using first method run *fio* as in example below:


```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```

When doing benchmark on */dev/rbd** device or from inside VM there are few factors than can affect performance:

- operating system cache -- it can make your system look like super--fast for a while and then slowing down -- make sure to use direct IO to avoid this
- support for FLUSH/FUA requests in storage stack used for tests
- hypervisor/driver (virtio/scsi) used for virtualization
- "warm up" your storage before starting benchmark or run benchmark multiple times


## Real benchmark
Depending on the size of your cluster you may want to test bigger number of images or using different parameters. Usually you might want to change number of images, their size, queue depth, number of fio workers, workload type (read/write/random/sequential), test duration, etc.


### Mixed random read/write with 4k block size

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Sequential reads with 1M block size

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=read --bs=1M --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Random writes with 4k block size
This test will spawn 4 *fio* processess, each writing to a separate image using two threads.


```bash
fio --runtime=600 --time_based --group_reporting \
    --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image-1 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-2 --ioengine=rbd --pool=rbd --rbdname=test-image-2 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-3 --ioengine=rbd --pool=rbd --rbdname=test-image-3 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-4 --ioengine=rbd --pool=rbd --rbdname=test-image-4 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32
```


### Mixed read/write with different block sizes

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 \
    --bssplit=64k/47:4k/22:16k/12:8k/6:512/5:32k/4:12k/3:256k/1,8k/89:4k/11 \
    --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


## How we measure Cloud Disk Array performance
To measure Cloud Disk Array performance we are running test on a 32 images, each of 32GiB size, running for a few hours. Using big data set during test ensures us that performance will stay on a specified level.