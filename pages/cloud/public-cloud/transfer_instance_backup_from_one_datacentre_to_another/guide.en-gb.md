---
title: 'Transfer an instance backup from one datacentre to another'
slug: transfer_instance_backup_from_one_datacentre_to_another
excerpt: 'This guide will show you how to transfer an instance backup from one datacentre to another while preserving the configuration and state of the instance'
legacy_guide_number: g1853
section: 'Resource management'
---

**Last updated 25th January 2019**

## Objective

A situation may arise where you need to move your [Public Cloud Instance](https://www.ovh.co.uk/public-cloud/instances/){.external} from one datacentre to another, either because you would prefer to move to a newly available datacentre or because you want to migrate from OVH Labs to Public Cloud. 

**This guide will show you how to transfer an instance backup from one datacentre to another while preserving the configuration and state of the instance.**

## Requirements

Before following this guide, it's recommended that you first complete this guide:

* [Prepare the environment to use the OpenStack API](https://docs.ovh.com/gb/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/){.external}

You will also need the following:

* a [Public Cloud Instance](https://www.ovh.co.uk/public-cloud/instances/){.external} in your OVH account
* administrative (root) access to your datacentre via SSH

## Instructions

### Create a backup

First, establish an SSH connection to your datacentre and then run the following command to list your existing instances.

```
#root@serveur:~$ nova list

+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Serveur1 | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.254 |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
```

Next, run the following command to create a backup of your instance.

```
#root@serveur:~$ nova image-create aa7115b3-83df-4375-b2ee-19339041dcfa snap_serveur1
```

### Download the backup

Next, run this command to list available instances.

```
#root@serveur:~$ glance image-list
+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
| ID | Name | Disk Format | Container Format | Size | Status |
+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
| c17f13b5-587f-4304-b550-eb939737289a | Centos 7 | raw | bare | 2149580800 | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7 | raw | bare | 2149580800 | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8 | raw | bare | 2149580800 | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19 | raw | bare | 2149580800 | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20 | raw | bare | 2149580800 | active |
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_serveur1 | qcow2 | bare | 1598029824 | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04 | raw | bare | 2149580800 | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04 | raw | bare | 10737418240 | active |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2 | raw | bare | 21474836480 | active |
+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
```

Now identify the instance backup from the list.

```
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_serveur1 | qcow2 | bare | 1598029824 | active |
```

Finally, run this command to download the backup.

```
#root@serveur:~$ glance image-download --file snap_serveur1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

### Transfer the backup to another datacentre

To start the transfer process, you first need to load new environment variables.

> [!warning]
>
If you are transfering your backup to a datacentre within the same project, you will need to change the OS_REGION_NAME variable.
>

```
#root@serveur:~$ export OS_REGION_NAME=SBG1
```

If you are transfering your backup to another project or account, you will have to reload the environment variables linked to that account using the following command.

```
#root@serveur:~$ source openrc.sh
```

To transfer the backup to the new datacentre, use this command.

```
#root@serveur:~$ glance image-create --name snap_serveur1 --disk-format qcow2 --container-format bare --file snap_serveur1.qcow

+------------------+--------------------------------------+
| Property | Value |
+------------------+--------------------------------------+
| checksum | 6cebb4104eadde099bb2721ec8c574fb |
| container_format | bare |
| created_at | 2015-10-21T13:26:42 |
| deleted | False |
| deleted_at | None |
| disk_format | qcow2 |
| id | 0a3f5901-2314-438a-a7af-ae984dcbce5c |
| is_public | False |
| min_disk | 0 |
| min_ram | 0 |
| name | snap_serveur1 |
| owner | b3e269xxxxxxxxxxxxxxxxxxxxxxba29 |
| protected | False |
| size | 319356928 |
| status | active |
| updated_at | 2015-10-21T13:26:51 |
| virtual_size | None |
+------------------+--------------------------------------+
```

### Create an instance from your backup

To create an instance from your backup, use the backup ID as the image with this command.

```
#root@serveur:~$ nova boot --key_name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Serveur1_from_snap
+--------------------------------------+------------------------------------------------------+
| Property | Value |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig | MANUAL |
| OS-EXT-AZ:availability_zone | nova |
| OS-EXT-STS:power_state | 0 |
| OS-EXT-STS:task_state | scheduling |
| OS-EXT-STS:vm_state | building |
| OS-SRV-USG:launched_at | - |
| OS-SRV-USG:terminated_at | - |
| accessIPv4 | |
| accessIPv6 | |
| adminPass | 2Rxxvb4wx2iS |
| config_drive | |
| created | 2015-10-21T13:31:41Z |
| flavor | vps-ssd-1 (98c1e679-5f2c-4069-b4da-4a4f7179b758) |
| hostId | |
| id | 68d38ef7-1b25-40bb-a629-4f91f4b24b59 |
| image | snap_serveur1 (0a3f5901-2314-438a-a7af-ae984dcbce5c) |
| key_name | SSHKEY |
| metadata | {} |
| name | Serveur1_from_snap |
| os-extended-volumes:volumes_attached | [] |
| progress | 0 |
| security_groups | default |
| status | BUILD |
| tenant_id | b3e269f057d14af594542d6312b0ba29 |
| updated | 2015-10-21T13:31:41Z |
| user_id | 01e3c1c9c3584311931233798e411ba4 |
+--------------------------------------+------------------------------------------------------+
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
