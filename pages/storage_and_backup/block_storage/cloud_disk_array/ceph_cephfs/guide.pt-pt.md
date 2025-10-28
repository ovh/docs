---
title: Sistema de arquivos distribuído CephFS (EN)
excerpt: 'Learn how to create, manage, and mount a CephFS file system on OVHcloud using the API'
updated: 2025-09-18
---

## Objective

This guide provides detailed instructions on how to create, manage, and mount a CephFS file system for your OVHcloud services. It covers the full setup process using the OVHcloud API, ensuring you can efficiently integrate CephFS into your cloud environment.

## Requirements

- A [Cloud Disk Array](/links/storage/cloud-disk-array) solution
- Access to the [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](/links/api)

### What is CephFS?

CephFS is a distributed POSIX-compliant file system built on top of Ceph. To use CephFS, you need a client that supports it—modern Linux distributions include the CephFS driver by default.

You can enable and manage CephFS on your Cloud Disk Array (CDA) via the OVHcloud API. Once enabled, CephFS functions like a private, dedicated file system for your use. You can use both RBD and CephFS simultaneously, but note that they share the same underlying hardware.

## Instructions

### Enabling CephFS

> [!primary]
>
> Enabling and managing CephFS is only possible through the OVHcloud API.
>
> If you are not familiar with the OVHcloud API, see our [First Steps with the OVHcloud API guide](/pages/manage_and_operate/api/first-steps).
>

Currently, only a single file system can be enabled, and it must be named fs-default.

The first step is to list your existing CephFS instances. Here, `serviceName` corresponds to the fsid of your cluster:

> [!api]
>
> @api {v1} /dedicated/ceph GET /dedicated/ceph/{serviceName}/cephfs
>

![api request 01](images/api_request_01.png){.thumbnail}

By default, this request returns an empty list. To create your first file system, you need to enable it:

> [!api]
>
> @api {v1} /dedicated/ceph GET /dedicated/ceph/{serviceName}/cephfs/{fsName}/enable
>

![api request 02](images/api_request_02.png){.thumbnail}

Your CephFS should be available within a few minutes. You can verify its status directly on your cluster by running:

> [!primary]
>
> To access your Ceph cluster directly, please refer to [this guide](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_access_cluster).
>

```bash
sudo ceph --id [USERID] fs ls
```

The result should look similar to:

```bash
name: fs-default, metadata pool: cephfs.fs-default.meta, data pools: [cephfs.fs-default.data ]
```

If you want to retrieve more details about your CephFS, run:

```bash
sudo ceph --id [USERID] fs get fs-default
```

The result should look similar to:

```bash
Filesystem 'fs-default' (1)
fs_name fs-default
epoch   16
flags   33 allow_snaps allow_multimds_snaps allow_standby_replay
created 2025-08-19T10:53:19.756188+0000
modified    2025-08-19T11:01:14.983793+0000
tableserver 0
root    0
session_timeout 60
session_autoclose   300
max_file_size   1099511627776
required_client_features    {}
last_failure    0
last_failure_osd_epoch  926
compat  compat={},rocompat={},incompat={1=base v0.20,2=client writeable ranges,3=default file layouts on dirs,4=dir inode in separate object,5=mds uses versioned encoding,6=dirfrag is stored in omap,7=mds uses inline data,8=no anchor table,9=file layout v2,10=snaprealm v2}
max_mds 1
in  0
up  {}
failed  0
damaged
stopped
data_pools  [5]
metadata_pool   6
inline_data disabled
balancer   
standby_count_wanted    2
```

### Disabling and removing CephFS

When your file system is no longer needed, you can remove it in two steps:

- **Disable your file system** - This blocks access to CephFS, but your data remains intact. If needed, you can re-enable it later.

> [!api]
>
> @api {v1} /dedicated/ceph POST /dedicated/ceph/{serviceName}/cephfs/{fsName}/disable
>

![api request 03](images/api_request_03.png){.thumbnail}

- **Purge file system data** – This permanently deletes all data, and can only be done on a disabled file system.

> [!api]
>
> @api {v1} /dedicated/ceph DELETE /dedicated/ceph/{serviceName}/cephfs/{fsName}
>

![api request 04](images/api_request_04.png){.thumbnail}

### CephFS access management

To manage access to CephFS, the same IP ACL rules used for your CDA apply. However, to write to CephFS, you must create a dedicated user. You can follow [this guide](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_create_a_user).

Next, grant this user read and write access to the CephFS data and metadata pools:

- cephfs.fs-default.data
- cephfs.fs-default.meta

For details, see [this guide](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_change_user_rights).

> [!primary]
>
> Required permissions: read and write on both the data and metadata pools.
>

### Mounting CephFS on your host

Install the **ceph-common** package, which provides the **/sbin/mount.ceph** binary. The package name may vary depending on your Linux distribution.

In the example below, we use a Debian-based system:

```bash
sudo apt install --no-install-recommends ceph-common
```

Next, configure your client to connect to the CDA cluster by editing (or creating) the **/etc/ceph/ceph.conf** file.

1\. Create the Ceph configuration directory:

```bash
sudo mkdir -p /etc/ceph
```

2\. Create and edit the ceph.conf file:

```bash
sudo nano /etc/ceph/ceph.conf
```

3\. Add the `[global]` section with the public IP addresses of your monitors. You can find these IPs on the main page of your Cloud Disk Array in the OVHcloud Control Panel.

```bash
[global]

#Specific fsid   
fsid = aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee

#Force use secure protocol
ms_client_mode = secure

#Force the messenger v2 protocol
ms_bind_msgr2 = true

# Use the PUBLIC IPs provided for your Cloud Disk Array
mon_host =A.B.X.Y:6789,A.B.X.Y:6789,A.B.X.Y:6789
```

The FSID corresponds to the service name of your CDA. The monitor host IPs can be retrieved using the following API call:

> [!api]
>
> @api {v1} /dedicated/ceph GET /dedicated/ceph/{serviceName}
>

![api request 05](images/api_request_05.png){.thumbnail}

4\. Save and close the file.

You will also need a second file containing the key for the user that connects to the cluster. Fetch the user key with the following API call:

> [!api]
>
> @api {v1} /dedicated/ceph GET /dedicated/ceph/{serviceName}/user/{userName}
>

![api request 06](images/api_request_06.png){.thumbnail}

Then, create a secret file for this user:

1\. Create a file called /etc/ceph/[USERID].secret

```bash
sudo nano /etc/ceph/[USERID].secret
```

2\. Add the user key to the file in the correct format:

```bash
YOUR_SECRET_KEY_FOR_USER
```

3\. Set strict permissions on the secret file to ensure security:

```bash
sudo chmod 600 /etc/ceph/[USERID].secret
```

Finally you can mount your filesystem:

```bash
mkdir /mnt/cephfs
mount -t ceph -o name=[USERID],secretfile=/etc/ceph/[USERID].secret :/ /mnt/cephfs/
```

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Storage and Backup services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
