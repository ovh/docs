---
title: Starting with Nova API
excerpt: Find out how to use Nova with the OpenStack API
slug: starting-with-nova-api
section: OpenStack
order: 3
---

**Last updated 18th June 2020**

## Objective

In order to automate your operations on the Public Cloud, it is possible to use OpenStack APIs to generate different scripts. The OpenStack Nova client will allow you to interact and manage your instances and their disks.

For example, you can start creating an additional instance when your monitoring tools detect a peak load in order to avoid saturation on your infrastructure. It is also possible to schedule snapshot creation on a regular basis at the same time.

**This guide will help you take the OpenStack APIs into your hands to manage your instances using the Python Nova client.**

## Requirements

Please refer to the following guides:

[Preparing an environment for using the OpenStack API](../prepare_the_environment_for_using_the_openstack_api/){.external}
[Setting OpenStack environment variables](../set-openstack-environment-variables/){.external}

## Nova Documentation

You can obtain the list of possible commands by reading the embedded documentation:

```sh
admin@server-1~$: nova help
```

It is also possible to get information about a command by adding "help" in front of it:

``bash
admin@serverr-1:~$ nova help flavor-list

usage: nova flavor-list [--extra-specs] [--all]

Print a list of available 'flavors' (sizes of servers).

Optional arguments:
  --extra-specs  Get extra-specs of each flavor.
  --all          Display all flavors (Admin only).
```

> [!success]
>
> It is also possible to obttain the Nova Client documentation from the Openstack Website.> 
>

## Basic Operations

### Adding an SSH Public Key
As a first step, it is necessary to a Public SSH key to connect to the instances.

- List commands associated with SSH keys

```sh
admin@server-1:~$ nova help | grep keypair
    keypair-add                 Create a new key pair for use with servers.
    keypair-delete              Delete keypair given by its name.
    keypair-list                Print a list of keypairs for a user
    keypair-show                Show details about the given keypair.
```

- Add a Public SSH key

```sh
admin@server-1:~$ nova keypair-add --pub-key .ssh.id_rsa.pub SSHKEY

- List available SSH Keys:

```sh
admin@server-1:~$ nova keypair-list
+--------+-------------------------------------------------+
| Name   | Fingerprint                                     |
+--------+-------------------------------------------------+
| SSHKEY | 0e:93:fb:90:82:xx:xx:xx:xx:xx:xx:6e:22:42:c3:ea |
+--------+-------------------------------------------------+
```

### List the instance models
Next, you will need to obtain the ID of the model that we would like to use:

```sh
admin@server-1"~$ nova flavor-list
+--------------------------------------+-----------------+-----------+------+-----------+------+-------+-------------+-----------+
| ID                                   | Name            | Memory_MB | Disk | Ephemeral | Swap | VCPUs | RXTX_Factor | Is_Public |
+--------------------------------------+-----------------+-----------+------+-----------+------+-------+-------------+-----------+
| 0032b17b-75a1-4120-9b44-755331729979 | win-r2-15-flex  | 15000     | 50   | 0         |      | 2     | 1.0         | True      |
| 003d504f-289d-48d1-ac83-1796e44927b7 | c2-15           | 15000     | 100  | 0         |      | 4     | 1.0         | True      |
| 021296e6-0004-4ee5-bb73-52ac2d16bd79 | b2-120-flex     | 120000    | 50   | 0         |      | 32    | 1.0         | True      |
| 30614907-f5dd-4c83-8c08-986ce20fe282 | b2-60           | 60000     | 400  | 0         |      | 16    | 1.0         | True      |
| 307f3bd0-bcaf-4415-9479-29f0dda9381e | win-c2-30       | 30000     | 200  | 0         |      | 8     | 1.0         | True      |
| 36efce42-d885-4a09-b4dc-a321a1a0c92e | r2-15           | 15000     | 50   | 0         |      | 2     | 1.0         | True      |
| 3ff106e4-92d9-4f6f-95b2-be88b70dbd05 | c2-7            | 7000      | 50   | 0         |      | 2     | 1.0         | True      |
| 52e13ee4-8bc3-4e65-9464-6dccdc3d861d | win-b2-15       | 15000     | 100  | 0         |      | 4     | 1.0         | True      |
| 539c1407-46a4-43c4-96c3-32e645dd815d | win-r2-240      | 240000    | 400  | 0         |      | 16    | 1.0         | True      |
| 58fef987-cf20-4d19-956d-c44451cff1c7 | win-c2-7        | 7000      | 50   | 0         |      | 2     | 1.0         | True      |
| 59f4794c-f909-4b8f-8b07-26720ba5d521 | r2-120-flex     | 120000    | 50   | 0         |      | 8     | 1.0         | True      |
| 5b3b14a7-8cad-4821-8d7c-ba1b0525728c | c2-7-flex       | 7000      | 50   | 0         |      | 2     | 1.0         | True      |
| 5bbf9a5a-041a-451f-84a3-105c37e385dd | win-c2-60       | 60000     | 400  | 0         |      | 16    | 1.0         | True      |
| 778aba94-608e-438d-a1b8-2c9a04ef6f75 | r2-30-flex      | 30000     | 50   | 0         |      | 2     | 1.0         | True      |
| 7d0b03ec-ed60-4d74-a224-e3494c1d39f0 | c2-120-flex     | 120000    | 50   | 0         |      | 32    | 1.0         | True      |
| 88503fd4-a913-4801-8fb3-a1a37a97496c | win-r2-15       | 15000     | 50   | 0         |      | 2     | 1.0         | True      |
| a762797b-fcd3-4d69-86f7-a1fcbd313c4a | b2-7            | 7000      | 50   | 0         |      | 2     | 1.0         | True      |
| b6c0e144-51cf-4aa6-ab7f-99b4c3a1e958 | b2-7-flex       | 7000      | 50   | 0         |      | 2     | 1.0         | True      |
| b76066de-fb05-4832-b188-c958a534380a | r2-120          | 120000    | 200  | 0         |      | 8     | 1.0         | True      |
| b77011ce-d7a0-47f0-bf63-38770fcb0998 | r2-60-flex      | 60000     | 50   | 0         |      | 4     | 1.0         | True      |
| ...                                  | ...             | ...       | ..   | ...       |      | ...   | ...         | ...       |
+--------------------------------------+-----------------+-----------+------+-----------+------+-------+-------------+-----------+
```

### List the available images
Finally, we will need to obtain the ID of the image we want to use on the instance:

```sh
admin@server-1:~$ nova image-list
+--------------------------------------+------------------------+--------+--------+
| ID                                   | Name                   | Status | Server |
+--------------------------------------+------------------------+--------+--------+
| c17f13b5-587f-4304-b550-eb939737289a | Centos 7               | ACTIVE |        |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7               | ACTIVE |        |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8               | ACTIVE |        |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19              | ACTIVE |        |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20              | ACTIVE |        |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04           | ACTIVE |        |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04           | ACTIVE |        |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2 | ACTIVE |        |
+--------------------------------------+------------------------+--------+--------+
```

### Creating an instance
With the information that we previousl obtained, it is now possible to create an instance:

```sh
admin@server-1:~$ nova boot --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image bdcb5042-3548-40d0-b06f-79551d3b4377 Instance1
```

After a few moments we can verify the list of instanes to find the created instance:

```
admin@server-1:~$ nova list
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| ID                                   | Name                                   | Status | Task State | Power State | Networks                |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| 81d01a19-b2d5-454d-98d9-bd8992ec2037 | Instance1                              | ACTIVE | -          | Running     | Ext-Net=149.xxx.xxx.192 |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
```

### Deleting an instance
It is possible to delete an instance with the following command:

```sh
admin@server-1:~$ nove delete Instance1
Request to delete server Instance1 has been accepted.
```
## Go further

Join our community of users on <https://community.ovh.com/en/>.
