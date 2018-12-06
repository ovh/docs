---
title: Getting started with NGC on OpenStack
excerpt: Use NVIDIA GPU Cloud to speed up your GPU accelerated development
slug: getting_started_with_ngc
---

**Last updated 18th October 2018**

## Objective

The goal is to gather in one place the information to guide you to your first NVIDIA GPU Cloud container instance.

NGC is available via Virtual Machine on OVH Public Cloud which is based on OpenStack.

The first part of the guide will be OVH specific while the second part will be generic to OpenStack in order to automate NGC instance management.


## Prerequisites

You'll need an OVH account. You can create one here [OVH Manager](https://www.ovh.com/auth/?action=gotomanager). 

## Create an NGC instance via OVH Manager

The first step will be to create a Public Cloud project https://docs.ovh.com/gb/en/public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project/

The second step will be to create an instance into the newly created project https://docs.ovh.com/gb/en/public-cloud/create_an_instance_in_your_ovh_customer_account/.

In the case of NGC, be sure to pick:

- `NVIDIA GPU Cloud (NGC)` as your image
- a GPU enabled flavor like `t1-45` or `t1-90` for 1 or 2 NVIDIA® Tesla® V100.

## Create an NGC instance via CLI

One of the benefit of using OVH is to have access to industry standard API and protocols.

You can manage your OVH Public Cloud instances using standard OpenStack API and tools: `terraform`, `ansible`, ...

For now, we'll focus on the command line client `openstack`.

### Configure your environment

You need first to create a user access like describe here https://docs.ovh.com/gb/en/public-cloud/configure_user_access_to_horizon/ and 
then click on the three-dot icon at the end of the line (`...`{.action}). Next, click the `Download OpenStack configuration file`{.action} link.

Save the file as `openrc.sh` somewhere you can access it.

#### Under Windows

If you are under Windows, please follow this link to setup the OpenStack client https://github.com/naturalis/openstack-docs/wiki/Howto:-Installing-and-configuring-the-OpenStack-commandline-tools-on-Windows

#### Under Linux

If you are under an Unix-like OS, use your favorite package manager `apt`, `yum`, `emerge`, ... to install the `python-openstackclient` package and source the configuration file previously saved `. ./openrc.sh`.

### Create a NGC VM from command line

The first step is to have a SSH Key pair. You can create one with:

```shell
openstack keypair create mykey > mykey.pem
```

Then, we need to gather information such as:

- the SOURCE ID `openstack image list --name 'NVIDIA GPU Cloud (NGC)'`
- the FLAVOR `'t1-45'`
- the NETWORK ID `openstack network list --name 'Ext-Net'`

Finally, create the VM with

```shell
openstack server create --key-name mykey --image $SOURCE_ID --flavor $FLAVOR --network $NETWORK_ID my_vm
```

> [!warning]
>
> The billing starts as soon as the virtual machine is up.
>

You can get the VM status with `openstack server show my_vm` and delete it with `openstack server delete my_vm`.

### SSH to the VM

Get the VM IP with `openstack server show my_vm` and SSH into it with

```shell
ssh -i ./mykey.pem ubuntu@<VM IP>
```

### Your first NGC docker

Once you are log in the VM, you can start pulling and running docker container.

The list of available image is available here https://ngc.nvidia.com/catalog/containers

If you would like to try something visual, try NVIDIA DIGITS here https://github.com/NVIDIA/DIGITS/tree/master/examples/semantic-segmentation and pull your first container

```shell
docker pull nvcr.io/nvidia/digits:18.11-tensorflow
docker run -p 8888:5000 nvcr.io/nvidia/digits:18.11-tensorflow
```

Then navigate to `http://your_vm_ip:8888`. More options and explanations here https://ngc.nvidia.com/catalog/containers/nvidia%2Fdigits.

## Go further

If you would like to automated the above steps, look at the `-f json` option of the openstack client and the [`jq`](https://stedolan.github.io/jq/manual/) JSON command line tool parser.

Ex:

```shell
SOURCE_ID=`openstack image list --name 'NVIDIA GPU Cloud (NGC)' -f json | jq -r '.[0].ID'`
```

Join our community of users on <https://community.ovh.com/en/>.
