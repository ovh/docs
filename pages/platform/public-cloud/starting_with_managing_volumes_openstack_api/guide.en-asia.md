---
title: 'Starting with Cinder API'
excerpt: 'Find out how to you use the Cinder API client with Openstack'
slug: get-started-with-openstack-api-volumes
section: OpenStack
order: 6
---

**Last updated 19th May 2021**

## Objective

You can use the OpenStack API to generate various scripts in order to automate your actions on the Public Cloud. 
<br>For example, you can create a new high-performance volume to attach to a Public Cloud instance.

**This guide will help you manage manage your volumes using the OpenStack API and the Python client.**

## Requirements

- Preparing the environment to [use the OpenStack API](../prepare_the_environment_for_using_the_openstack_api/) by installing *python-cinderclient* and *python-novaclient*
- Setting the [OpenStack environment variables](../set-openstack-environment-variables/)

## Instructions

### Cinder documentation

You can get a list of possible commands by reading the OpenStack client documentation:

```bash
admin@server-1:~$ openstack help
```

Here is the list of the main commands:

|Command|Description|
|---|---|
|volume create|Create a new volume|
|volume delete|Delete a volume|
|list volume|List volumes|
|volume snapshot create|Create a snapshot of a volume|

You can also get information about a specific command by adding `help` to it:

```bash
admin@server-1:~$ openstack help volume snapshot create
usage: openstack volume snapshot create [-h] [-f {json,shell,table,value,yaml}] [-c COLUMN] [------noindent] [------prefix PREFIX] [------max-width <integer>] [------fit-width] [------print-empty] [------volume <volume>] [------description <description>] [------force] [------property <key=value]
                                        [--remote-source <key=value>]
                                        <snapshot-name>

Create new volume snapshot

positional arguments:
  <snapshot-name> Name of the new snapshot

optional arguments:
  -h, ------help show this help message and exit
  --volume <volume>     Volume to snapshot (name or ID) (default is <snapshot-name>)
  ------description <description>
                        Description of the snapshot
  ------force Create a snapshot attached to an instance. Default is False
```

> [!primary]
>
> You can also consult the OpenStack documentation available on the [OpenStack website](https://docs.openstack.org/python-openstackclient/latest/){.external}.
>

### Basic operations

#### Creating a high-performance volume

- List the volume types:

```bash
admin@server-1:~$ openstack volume type list
+--------------------------------------+------------+-----------+
| ID                                   | Name       | Is Public |
+--------------------------------------+------------+-----------+
| e9551830-6362-4bf8-92e5-391829456b03 | classic    | True      |
| 6fc8e512-3cac-4f39-b9a8-af098d710506 | high-speed | True      |
+--------------------------------------+------------+-----------+
```

- Create the 10GB high-speed volume named **volume1**:

``` bash
admin@server-1:~$ openstack volume create --type high-speed --size 10 volume1

+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:16:28.658308           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 |
| multiattach         | False                                |
| name                | volume1                              |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 10                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

You can install an image on a volume using the `--image` argument:

```bash
admin@server-1:~$ openstack volume create --type high-speed --image be66762f-b849-43e1-b57c-005d9fe28088 --size 20 volume_debian
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:26:38.887508           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | 442d9dff-7df5-41b2-95e9-fa8ac5f4784a |
| multiattach         | False                                |
| name                | volume_debian                        |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 20                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

In this command, **be66762f-b849-43e1-b57c-005d9fe28088** is the Debian 10 image ID.

#### Attaching a volume to an instance

- List the additional volumes:

```bash
admin@server-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-------------+
| ID                                   | Name          | Status    | Size | Attached to |
+--------------------------------------+---------------+-----------+------+-------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |             |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | available |   10 |             |
+--------------------------------------+---------------+-----------+------+-------------+
```

> [!primary]
>
> The majority of subsequent commands will require the volume ID rather than the name.
>

- Mount the volume on an instance with the OpenStack client:

```bash
admin@server-1:~$ openstack server add volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a166 82f8
```

- Check that the volume has been properly attached to the instance with the OpenStack client:

```bash
admin@serveur-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| ID                                   | Name          | Status    | Size | Attached to                             |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |                                         |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | in-use    |   10 | Attached to cli-playground on /dev/sdb  |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
```

#### Deleting a volume

- Detach volume from instance:

```bash
admin@server-1:~$ openstack server remove volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Delete volume:

```bash
admin@server-1:~$ openstack volume delete f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
