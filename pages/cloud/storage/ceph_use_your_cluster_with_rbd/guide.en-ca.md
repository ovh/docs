---
title: Access the cluster using rbd client
slug: ceph/use-your-cluster-with-rbd
excerpt: This guide shows you how to access your cluster using rbd client.
section: Cloud Disk Array
---

There are different ways to use your Ceph cluster. We'll describe how to map your cluster using **rbd client**.

You must first ensure that you have done those steps :

- [Create a pool](../guide.en-gb.md){.ref}
- [Create a user](../guide.en-gb.md){.ref}
- [Add rights to a user on a pool](../guide.en-gb.md){.ref}
- [Add an IP ACL](../guide.en-gb.md){.ref} to allow your server to contact the cluster


## Ceph installation
For **deb based** distributions:


```bash
ubuntu@server:~$ sudo apt-get -y install ceph ceph-common
[...]
Setting up ceph-common (10.2.0-0ubuntu0.16.04.2) ...
Setting up ceph (10.2.0-0ubuntu0.16.04.2) ...
```

For **rpm based** distributions:


```bash
[centos@server ~]$ sudo yum install -y ceph-common
[...]
Installed:
ceph-common.x86_64 1:0.80.7-3.el7
```


## Ceph configuration
Create file /etc/ceph/ceph.conf


```ini
1. [global]
2. mon_host = <mon_1_IP>,<mon_2_IP>,<mon_3_IP>
```

Create the file /etc/ceph/ceph.client.<ceph_user_name>.keyring


```ini
1. [client.<ceph_user_name>]
2. key = <my_user_key>
```

<mon_X_IP> has to be replaced by monitors IP you can find on the [Cloud Disk Array manager](https://www.ovh.com/manager/cloud/index.html){.external}. Under 'Platforms and services' select your Ceph cluster.

<my_user_key> has to be replaced by the users's key you can find on your Cloud Disk Array manager.


## Configuration check
You can check the configuration by listing the images inside your pool.


```bash
ubuntu@server:~$ rbd -n client.myuser list mypool
```

In this case, the result is empty because we have not have created an image yet. If you have an error, please double check your configuration.


## Image creation
You can't directly mount a pool, you have to **mount an image** that exists on the pool.


```bash
ubuntu@server:~$ rbd -n client.myuser create mypool/myimage -s $((10*1024*1024)) --image-format 2 --image-feature layering
ubuntu@server:~$ rbd -n client.myuser list mypool
myimage
```

We make sure that the image was created correctly by listing the pool content.


## Map the image

```bash
ubuntu@server:~$ sudo rbd -n client.myuser map mypool/myimage
/dev/rbd0
```

My rbd image is not mapped to /dev/rbd0, it's a block storage. Therefore we have to **setup a filesystem**.


## Setup the filesystem

```bash
ubuntu@server:~$ sudo mkfs.xfs /dev/rbd0
meta-data=/dev/rbd0              isize=512    agcount=33, agsize=83885056 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=0
data     =                       bsize=4096   blocks=2684354560, imaxpct=5
         =                       sunit=1024   swidth=1024 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal log           bsize=4096   blocks=521728, version=2
         =                       sectsz=512   sunit=8 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
```


## Mount the filesystem

```bash
ubuntu@server:~$ sudo mkdir /mnt/rbd
ubuntu@server:~$ sudo mount /dev/rbd0 /mnt/rbd
ubuntu@server:~$ df -h /mnt/rbd
Filesystem      Size  Used Avail Use% Mounted on
/dev/rbd0        10T   34M   10T   1% /mnt/rbd
```

You can now use your Ceph cluster!