---
title: 'Transfer an Instance backup from one datacentre to another'
slug: transfer_instance_backup_from_one_datacentre_to_another
excerpt: 'This guide will show you how to transfer an Instance backup from one datacentre to another while preserving the configuration and state of the Instance'
legacy_guide_number: g1853
section: API reference/CLI
---

**Last updated 29th March 2019**

## Objective

A situation may arise where you need to move your [Public Cloud Instance](https://www.ovh.co.uk/public-cloud/instances/){.external} from one datacentre to another, either because you would prefer to move to a newly available datacentre or because you want to migrate from OVH Labs to Public Cloud. 

**This guide will show you how to transfer an Instance backup from one datacentre to another while preserving the configuration and state of the Instance.**

## Requirements

Before following these steps, it's recommended that you first complete this guide:

* [Prepare the environment to use the OpenStack API](https://docs.ovh.com/gb/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/){.external}

You will also need the following:

* a [Public Cloud Instance](https://www.ovh.co.uk/public-cloud/instances/){.external} in your OVH account
* administrative (root) access to your datacentre via SSH

> [!primary]
>
The commands in this guide are based on the OpenStack CLI, as opposed to the `NOVA` and `GLANCE` APIs.
>

## Instructions

### Create a backup

First, establish an SSH connection to your datacentre and then run the following command to list your existing Instances:

```
#root@server:~$ openstack server list
 
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID                                   | Name      | Status | Networks                                         | Image Name   |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```

Next, run the following command to create a backup of your Instance:

```
#root@server:~$ openstack image create --id aa7115b3-83df-4375-b2ee-19339041dcfa snap_server1
```

### Download the backup

Next, run this command to list available Instances:

```
#root@server:~$ openstack image list
+--------------------------------------+-----------------------------------------------+--------+
| ID                                   | Name                                          | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1                                 | active |
| 3ff877dc-1a62-43e7-9655-daff37a0c355 | NVIDIA GPU Cloud (NGC)                        | active |
| a14a7c1e-3ac5-4a61-9d36-1abc4ab4d5e8 | Centos 7                                      | active |
| f720a16e-543b-42e5-af45-cc188ad2dd34 | Debian 8 - GitLab                             | active |
| d282e7aa-332c-4dc7-90a9-d49641fa7a95 | CoreOS Stable                                 | active |
| 2519f0fb-18cc-4915-9227-7754292b9713 | Ubuntu 16.04                                  | active |
| b15789f8-2e2f-4f6c-935d-817567319627 | Windows Server 2012 R2 Standard - UEFI        | active |
| ed2f327f-dbae-4f9e-9754-c677a1b76fa3 | Ubuntu 14.04                                  | active |
| 9c9b3772-5320-414a-90bf-60307ff60436 | Debian 8 - Docker                             | active |
```

Now identify the Instance backup from the list:

```
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Finally, run this command to download the backup:

```
#root@server:~$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

### Transfer the backup to another datacentre

To start the transfer process, you first need to load new environment variables.

> [!warning]
>
If you are transfering your backup to a datacentre within the same project, you will need to change the OS_REGION_NAME variable.
>

```
#root@server:~$ export OS_REGION_NAME=SBG1
```

If you are transfering your backup to another project or account, you will have to reload the environment variables linked to that account using the following command:

```
#root@server:~$ source openrc.sh
```

To transfer the backup to the new datacentre, use this command:

```
#root@server:~$ openstack image create --disk-format qcow2 --container-format bare --file snap_server1.qcow snap_server1
 
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                     |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 82cb7d57ec7278818bba0afcf802f0fb                                                                                                                                                          |
| container_format | bare                                                                                                                                                                                      |
| created_at       | 2019-03-22T14:26:22Z                                                                                                                                                                      |
| disk_format      | qcow2                                                                                                                                                                                     |
| file             | /v2/images/1bf21cf3-8d39-40ae-b088-5549c31b7905/file                                                                                                                                      |
| id               | 0a3f5901-2314-438a-a7af-ae984dcbce5c                                                                                                                                                    |
| min_disk         | 0                                                                                                                                                                                         |
| min_ram          | 0                                                                                                                                                                                         |
| name             | snap_server1                                                                                                                                                                             |
| owner            | 4e03fd164d504aa3aa03938f0bf4ed90                                                                                                                                                          |
| properties       | direct_url='swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', locations='[{u'url': u'swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', u'metadata': {}}]' |
| protected        | False                                                                                                                                                                                     |
| schema           | /v2/schemas/image                                                                                                                                                                         |
| size             | 3004956672                                                                                                                                                                                |
| status           | active                                                                                                                                                                                    |
| tags             |                                                                                                                                                                                           |
| updated_at       | 2019-03-22T14:41:05Z                                                                                                                                                                      |
| virtual_size     | None                                                                                                                                                                                      |
| visibility       | private                                                                                                                                                                                   |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Create an Instance from your backup

To create an Instance from your backup, use the backup ID as the image with this command:

```
#root@server:~$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Go further

* Join our community of users on <https://community.ovh.com/en/>.
* [Transfer a volume backup from one datacentre to another](https://docs.ovh.com/gb/en/public-cloud/transfer_volume_backup_from_one_datacentre_to_another/){.external}