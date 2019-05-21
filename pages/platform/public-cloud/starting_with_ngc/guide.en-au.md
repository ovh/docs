---
title: 'Getting started with NGC on OpenStack'
excerpt: 'Use NVIDIA GPU Cloud to speed up your GPU-accelerated development'
slug: getting_started_with_ngc
---

**Last updated 11/12/2018**

## Objective

**The purpose of this guide is to show you how to set up your first NVIDIA GPU Cloud container instance.**

The first part of the guide will be OVH specific for basic usage. The second part will be more advanced, using OpenStack client to automate NGC instance management.

## Prerequisites

* Access to the [OVH Control Panel](https://ca.ovh.com/auth/?action=gotomanager). 

## Instructions

### Create an NGC instance via OVH Manager

The first step will be to [create a Public Cloud project](https://docs.ovh.com/au/en/public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project/){.external}

The second step will be to [create an instance](https://docs.ovh.com/au/en/public-cloud/create_an_instance_in_your_ovh_customer_account/){.external} into the newly created project.

In the case of NGC, be sure to pick:

- `NVIDIA GPU Cloud (NGC)` as your image
- a GPU enabled flavor like `t1-45` or `t1-90` for 1 or 2 NVIDIA® Tesla® V100.

### Create an NGC instance via the Command Line Interface

You can manage your OVH Public Cloud instances using the standard OpenStack API and tools: `terraform`, `ansible`, ...

For now, we'll focus on the command line client `openstack`.

#### Configure your local environment

First, [configure access to the Horizon interface](https://docs.ovh.com/au/en/public-cloud/configure-user-access-to-horizon/){.external}.

Next, click on the `...`{.action} icon at the end of the line and then click the `Download OpenStack configuration file`{.action} link.

Save the file as `openrc.sh`.

##### From Windows

If you are using Windows, please follow this link to setup the OpenStack client:

<https://github.com/naturalis/openstack-docs/wiki/Howto:-Installing-and-configuring-the-OpenStack-commandline-tools-on-Windows>

##### From Linux

If you are using a Unix-based OS, use your preferred package manager (i.e. `apt`, `yum`, `emerge`, etc) to install the `python-openstackclient` package and source the configuration file you previously saved (`. ./openrc.sh`).

#### Create a NGC VM

The first step is to have a SSH Key pair. You can create one with:

```shell
openstack keypair create mykey > mykey.pem
```

Then, you'll need to gather the following information:

- the SOURCE ID: `openstack image list --name 'NVIDIA GPU Cloud (NGC)'`
- the FLAVOR: `'t1-45'`
- the NETWORK ID: `openstack network list --name 'Ext-Net'`

Finally, create the VM with the following command:

```shell
openstack server create --key-name mykey --image $SOURCE_ID --flavor $FLAVOR --network $NETWORK_ID my_vm
```

> [!warning]
>
> The billing starts as soon as the virtual machine is up.
>

You can get the VM status with `openstack server show my_vm` and delete it with `openstack server delete my_vm`.

#### SSH to the VM

Get the VM IP with `openstack server show my_vm` and SSH into it with

```shell
ssh -i ./mykey.pem ubuntu@<VM IP>
```

### Your first NGC container

Once you are logged into the VM, you can start pulling and running the container.

The list of available containers (TensorFlow, Caffe2, DIGITS, Matab, MXNet, PyTorch, TensorFlow, RAPIDS, ...) is available here:

<https://ngc.nvidia.com/catalog/containers>

Please click the link below to see an example of semantic segmentation with NVIDIA DIGITS:

<https://github.com/NVIDIA/DIGITS/tree/master/examples/semantic-segmentation>

```shell
docker pull nvcr.io/nvidia/digits:18.11-tensorflow
docker run -p 8888:5000 nvcr.io/nvidia/digits:18.11-tensorflow
```

Then navigate to `http://your_vm_ip:8888`. 

Please click the link below for more options and explanations:

<https://ngc.nvidia.com/catalog/containers/nvidia%2Fdigits>.

If you would like to automated the above steps, look at the `-f json` option of the openstack client and the `jq` [JSON command line tool parser](https://stedolan.github.io/jq/manual/){.external}.

Example:

```shell
SOURCE_ID=`openstack image list --name 'NVIDIA GPU Cloud (NGC)' -f json | jq -r '.[0].ID'`
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
