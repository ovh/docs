---
title: 'Starting with Cinder API
excerpt: Find out how to you use the Cinder API client with Openstack
slug: starting-with-cinder
section: OpenStack
order: 6
---

## Objective

In order to automate your operations on the Public Cloud, it is possible to use OpenStack APIs to generate different scripts. OpenStack's Cinder client will allow you to interact with your additional volumes.

For example, you can create a new high-performance volume to attach it to a Public Cloud instance (requires the Nova client)

This guide will help you take the OpenStack APIs into your hands to manage your volumes using the Python Cinder client.

## Requirements

- [Preparing an environment for using the OpenStack API](../prepare_the_environment_for_using_the_openstack_api/){.external}
- [Setting OpenStack environment variables](../set-openstack-environment-variables/){.external}

## Cinder Documentation
You can obtain a list of possible commands by using the embedded documentation:

```sh
admin@server-1:~$ cinder help
```

Here is a list of the main commands:

|create|Create a new volume|
|delete|Delete a volume|
|list||List all volumes|
|snapshot-create|Create a volume snapshot|

You can get more information about a specific command by adding "help" in front of it:

```
admin@server-1:~$ cinder help snapshot-create
usage: cinder snapshot-create [--force <True|False>]
                              [--display-name <display-name>]
                              [--display-description <display-description>]
                              <volume>

Add a new snapshot.

Positional arguments:
  <volume>              Name or ID of the volume to snapshot

Optional arguments:
  --force <True|False>  Optional flag to indicate whether to snapshot a volume
                        even if it's attached to an instance. (Default=False)
  --display-name <display-name>
                        Optional snapshot name. (Default=None)
  --display-description <display-description>
                        Optional snapshot description. (Default=None)
```

> [!success]
>
> You can also see the documentation regarding the Cinder client directly from the OpenStack website
>

## Basic Operations

### Creating a high performance volume
- List the volume types:

```sh
admin@server-1:~$ cinder type-list
+--------------------------------------+------------+ 
|                  ID                  |    Name    |
+--------------------------------------+------------+
| 07673884-d6f0-49b0-8bfb-1cec1b6f3905 | high-speed |
| 28b78be3-5e7b-480a-b20d-3c0d3e144c70 |  classic   |
+--------------------------------------+------------+
```

- Create a high-speed volume of 10GB named volume1:

```sh
admin@server-1:~$ cinder create --volume-type high-speed --display_name volume1 10

+---------------------+--------------------------------------+
|       Property      |                Value                 |
+---------------------+--------------------------------------+
|     attachments     |                  []                  |
|  availability_zone  |                 nova                 |
|       bootable      |                false                 |
|      created_at     |      2016-01-13T15:56:44.676098      |
| display_description |                 None                 |
|     display_name    |               volume1                |
|      encrypted      |                False                 |
|          id         | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
|       metadata      |                  {}                  |
|     multiattach     |                false                 |
|         size        |                  10                  |
|     snapshot_id     |                 None                 |
|     source_volid    |                 None                 |
|        status       |               creating               |
|     volume_type     |              high-speed              |
+---------------------+--------------------------------------+
```
It is possible to install an image on a volume with the argument --image id:

```sh
admin@server-1:~$ cinder create --volume-type high-speed --image-id bdcb5042-3548-40d0-b06f-79551d3b4377 --display_name volume_debian 20
```

Where **bdcb5042-3548-40d0-b06f-79551d3b4377** is the ID beloging to the Debian 8 image.

### Attaching an volume to an instance
- List the additional volumes:

```sh
admin@server-1:~$ cinder list
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
|                  ID                  |   Status  |  Display Name | Size | Volume Type | Bootable |     Attached to     |
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
| 1dd5fa60-6346-465a-ac8f-eb848da97f7f | available |    volume1    |  10  |  high-speed |  false   |                     |
| fe78323f-9e6c-4a8c-9e51-06a112a467c2 | available | volume_debian |  20  |  high-speed |   true   |                     |
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
```

> [!success]
>
> Most of the following commands will require the Volume ID and not the name
>

- Mount the volume to an instance with the Nova client:

```bash
admin@server-1:~$ nova volume-attach 84f5dde4-cf64-40f5-8499-75d6849fc5d6 1dd5fa60-6346-465a-ac8f-eb848da97f7f auto
+----------+--------------------------------------+
| Property | Value                                |
+----------+--------------------------------------+
| device   | /dev/vdb                             |
| id       | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
| serverId | 84f5dde4-cf64-40f5-8499-75d6849fc5d6 |
| volumeId | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
+----------+--------------------------------------+
```

Syntax: **nova volume-attach <instance_id> <volume_id> auto**

### Deleting a volume
- Detaching the volume from the instance

```bash
admin@server-1:~$ nova volume-detach 84f5dde4-cf64-40f5-8499-75d6849fc5d6 1dd5fa60-6346-465a-ac8f-eb848da97f7f
```

- Deleting the volume:

```bash
admin@serveur-1:~$ cinder delete 1dd5fa60-6346-465a-ac8f-eb848da97f7f
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
