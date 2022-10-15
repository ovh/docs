---
title: Sistema de arquivos distribuído CephFS (EN)
slug: ceph/cephfs
excerpt: 'This guide will show how to enable and manage CephFS on your CDA'
section: Cloud Disk Array
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/block-storage/ceph/cephfs/'
---


## What is CephFS?

CephFS is a distributed POSIX filesystem built on top of Ceph. To use CephFS you need a client with support for it - all modern Linux distributions include CephFS driver by default.

You can enable and manage CephFS on your CDA through API. After enabling CephFS you can use in a similar manner to CDA - it's a private, dedicated filesystem for your own use. You can use both RBD and CephFS at the same time - just keep in mind that they share the same hardware underneath.

## Enabling CephFS

Enabling and management is possible only through API. For now it's only possible to enable single filesystem which must be named ```fs-default```.

First step is to list your current CephFS:

```bash
GET /dedicated/ceph/{serviceName}/cephfs
[ ]
```

By default you'll get an empty list. Let's enable (create) a filesystem:

```bash
GET /dedicated/ceph/{serviceName}/cephfs/{fsName}/enable
"352f999d-a191-4420-825d-0cae0980baae"
```

Your CephFS should be available within few minutes. You can verify that directly on your cluster by using:

```bash
ceph --id CEPH_USER fs ls
```

If you would like to get some details about you CephFS, use:

```bash
ceph --id CEPH_USER fs get fs-default
```


## Disabling and removing CephFS

You can remove your filesystem when no longer needed. There are two steps here:

 * disable your filesystem - this will block access to CephFS but your data will be intact, if you change your mind you can just enable it again
```bash
POST /dedicated/ceph/{serviceName}/cephfs/{fsName}/disable
```
 * purge filesystem data - this can only be done on disabled filesystem
```bash
DELETE /dedicated/ceph/{serviceName}/cephfs/{fsName}
```


## CephFS access management

To manage access to CephFS, the same set of IP ACL is used as for whole CDA. However, you'll need a user to write to a CephFS. Use the following API call to create a user:

```bash
POST /dedicated/ceph/{serviceName}/user
```

You'll also need to grant that user read and write access to CephFS data and metadata pools, called ```cephfs.fs-default.data``` and ```cephfs.fs-default.meta``` respectively. Do it using the following API call:

```bash
POST /dedicated/ceph/{serviceName}/user/{userName}/pool
```

Grants you need are ```read```, ```write```.


## Mounting CephFS on your host

Install the ```ceph-common``` package that contains ```/sbin/mount.ceph``` binary. The package name may be different for your disribution. In the example below we use a Debian-based one:

```bash
apt install --no-install-recommends ceph-common
```

Now we need to point client to CDA cluster. Edit (or create) ```/etc/ceph/ceph.conf```. It should look like below:

```bash
[global]
  fsid = 12345678-dead-beef-cafe-0123456789ab
  mon host = A.B.X.6 A.B.Y.6 A.B.Z.6
```

FSID is the service name of your CDA. ```mon host``` IPs can be fetched using the following API call:

```bash
GET /dedicated/ceph/{serviceName}
```

You will also need a second file with key for the user used to connect to the cluster. Fetch his key using:

```bash
GET /dedicated/ceph/{serviceName}/user/{userName}
```

Create a file called ```/etc/ceph/ceph.client.CEPHFS_USER.keyring``` with following content:

```bash
[client.CEPHFS_USER]
	key = AQBm7o8fhns1HBAAgaLzICzJfjgU/U2lkVy+zA==
```

Finally you can mount your filesystem:
```bash
mkdir /mnt/cephfs
mount -t ceph -o name=CEPHFS_USER :/ /mnt/cephfs/
```
