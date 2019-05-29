---
title: 'Transfer a volume backup from one datacentre to another'
slug: transfer_volume_backup_from_one_datacentre_to_another
excerpt: 'This guide will show you how to transfer a volume backup from one datacentre to another'
section: API reference/CLI
---

**Last updated 29th March 2019**

## Objective

It may become necessary to move additional volumes from one datacentre to another, either because you would prefer to move to a newly-available datacentre, or because you want to migrate from [OVH Labs](https://labs.ovh.com/){.external} (formerly RunAbove) to the [Public Cloud](https://www.ovh.co.uk/public-cloud/instances/){.external}.

**This guide will show you how to transfer a volume backup from one datacentre to another.**

## Requirements

Before following these steps, it’s recommended that you first complete this guide:

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

First, establish an SSH connection to your datacentre and then run the following command to list your existing volumes:

```
root@serveur:~$ openstack volume list
+--------------------------------------+--------------+--------+------+------------------------------------+
| ID                                   | Display Name | Status | Size | Attached to                        |
+--------------------------------------+--------------+--------+------+------------------------------------+
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | volume       | in-use |   10 | Attached to Serveur 1 on /dev/sdb  |
+--------------------------------------+--------------+--------+------+------------------------------------+
```

Next, run the following command to detatch the volume from its instance:

```
root@serveur:~$ openstack server remove volume a8b6b51-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```

Next, create a backup in the form of an image, using the following command:

```
root@serveur:~$ openstack image create --disk-format qcow2 --container-format bare --volume 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 snap_volume
+---------------------+------------------------------------------------------+
|       Property      |                         Value                        |
+---------------------+------------------------------------------------------+
|   container_format  |                          bare                        |
|     disk_format     |                         qcow2                        |
| display_description |                                                      |
|          id         |           673b0ad9-1fca-485c-ae2b-8ee271b71dc7       |
|       image_id      |           8625f87e-8248-4e62-a0ce-a89c7bd1a9be       |
|      image_name     |                      snap_volume                     |
|         size        |                          10                          |
|        status       |                       uploading                      |
|      updated_at     |               2015-10-21T08:33:34.000000             |
|     volume_type     |                      [..........]                    |
+---------------------+------------------------------------------------------+
```

### Download the backup

Now, run this command to list the available images:

```
root@serveur:~$ openstack image list
+--------------------------------------+-----------------------------------------------+--------+
| ID                                   | Name                                          | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume                                   | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7                                      | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8                                      | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19                                     | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20                                     | active |
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume                                   | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04                                  | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04                                  | active |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2                        | active |
+--------------------------------------+-----------------------------------------------+--------+
```

Next, identify the volume backup from the list:

```
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2 | bare | 319356928 | active |
```

Finally, run this command to download the backup:

```
root@serveur:~$ openstack image save --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```

### Transfer the backup to another datacentre

To start the transfer process, you first need to load new environment variables.

> [!warning]
>
If you are transfering to a datacentre within the same project, just change the OS_REGION_NAME variable.
>

```
root@serveur:~$ export OS_REGION_NAME=SBG1
```

If you are transfering your backup to another project or account, you will have to reload the environment variables linked to that account using the following command:

```
root@serveur:~$ source openrc.sh
```

To transfer the backup to the new datacentre, use this command:

```
#root@serveur:~$ openstack image create --disk-format qcow2 --container-format bare --file snap_volume.qcow snap-volume
+------------------+------------------------------------------------------+
| Field            | Value                                                |
+------------------+------------------------------------------------------+
| checksum         | None                                                 |
| container_format | bare                                                 |
| created_at       | 2019-03-22T15:26:04Z                                 |
| disk_format      | qcow2                                                |
| file             | /v2/images/783136d3-365a-49c6-9024-1e2f9c2db51a/file |
| id               | aa2a39c6-433c-4e94-995a-a12c4398d457                 |
| min_disk         | 0                                                    |
| min_ram          | 0                                                    |
| name             | snap_volume                                          |
| owner            | b3e26xxxxxxxxxxxxxxxxxxx12b0ba29                     |
| properties       | locations='[]'                                       |
| protected        | False                                                |
| schema           | /v2/schemas/image                                    |
| size             | None                                                 |
| status           | queued                                               |
| tags             |                                                      |
| updated_at       | 2019-03-22T15:26:04Z                                 |
| virtual_size     | None                                                 |
| visibility       | private                                              |
+------------------+------------------------------------------------------+
```

### Create a volume from your backup

To create a volume from your backup, use the backup ID as the image with this command:

```
root@serveur:~$ volume create --type classic --image aa2a39c6-433c-4e94-995a-a12c4398d457 --size 10 volume_from_snap
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2019-03-22T15:39:39.880479           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | 938b13c9-414e-45b5-b0fc-cfea743f54e1 |
| multiattach         | False                                |
| name                | volume_from_snap                     |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 10                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | classic                              |
| updated_at          | None                                 |
| user_id             | f63a1d2f27df455bb306bb79b0f2e2aa     |
+---------------------+--------------------------------------+
```

## Go further

* Join our community of users on <https://community.ovh.com/en/>.
* [Transfer an instance backup from one datacentre to another](https://docs.ovh.com/gb/en/public-cloud/transfer_instance_backup_from_one_datacentre_to_another/){.external}