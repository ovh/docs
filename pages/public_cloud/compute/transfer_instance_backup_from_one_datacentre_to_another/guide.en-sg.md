---
title: Transferring an instance backup from one OpenStack region to another
excerpt: Find out how to transfer an instance backup from one OpenStack region to another while preserving the configuration and state of the instance
updated: 2023-09-25
---

## Objective

A situation may arise where you need to move your [Public Cloud instance](https://www.ovhcloud.com/en-sg/public-cloud/){.external} from one OpenStack region to another, either because you would prefer to move to a newly available OpenStack region or because you want to migrate from OVHcloud Labs to Public Cloud. 

**This guide explains how to transfer an instance backup from one OpenStack region to another while preserving the configuration and state of the instance.**

## Requirements

In order to do the transfer, you will need an environment with:

- OpenStack CLI. Use [our guide to know how to prepare the environment to use the OpenStack API](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api){.external}.
- Connectivity to OVHCloud OpenStack APIs.
- Available storage that matches the instance disk size (for temporary backup storage).

This environment will be used as a "jump host" to transfer the backup from one region to another. This environment can be an instance hosted on OVHCloud or your local machine. 

You will also need a [Public Cloud instance](https://www.ovhcloud.com/en-sg/public-cloud/){.external} in your OVHcloud account.


## Instructions

### Create a backup


```bash
$ openstack server list
 
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID                                   | Name      | Status | Networks                                         | Image Name   |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```

Next, run the following command to create a backup of your instance:

```bash 
$ openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Download the backup

Next, run this command to list available instances:

```bash
$ openstack image list
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

Now identify the instance backup from the list:

```text
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Finally, run this command to download the backup on the jump host:

```bash
$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

<a name="transfer"></a>

### Transfer the backup to another OpenStack region

To start the transfer process, you first need to load new environment variables.

> [!warning]
>
If you are transferring your backup to an OpenStack region within the same project, you will need to change the variable `OS_REGION_NAME`.
>

```bash
$ export OS_REGION_NAME=SBG1
```

If you are transferring your backup to another project or account, you will have to reload the environment variables linked to that account using the following command:

```bash
$ source openrc.sh
```

To transfer the backup to the new OpenStack region, use this command:

```bash
$ openstack image create --disk-format qcow2 --container-format bare --file snap_server1.qcow snap_server1
```

```text
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

### Create an instance from your backup

To create an instance from your backup, use the backup ID as the image with this command:

```bash
$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.