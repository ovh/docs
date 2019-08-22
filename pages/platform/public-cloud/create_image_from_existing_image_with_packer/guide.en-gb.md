---
title: 'Create a custom OpenStack image with Packer'
slug: packer-openstack-builder
excerpt: 'Create and customize an OpenStack image from an existing one with Packer'
section: Packer
order: 10
---

**Last updated 24th October 2018**

## Objective

This guide will show you how to create a Packer configuration file to create your own OpenStack image.

## Requirements

You'll need an [OVH Public Cloud](https://www.ovh.com/public-cloud/instances/) OpenStack project and a terminal.

### Install Packer

Packer can be downloaded from the official website (curently [here](https://www.packer.io/downloads.html) ) and you'll need to `unzip` it.

For Linux 64bits

```shell
wget https://releases.hashicorp.com/packer/1.3.1/packer_1.3.1_linux_amd64.zip
unzip packer_1.3.1_linux_amd64.zip
```

### Install jq

`jq` is a command line tool for [parsing JSON document](https://stedolan.github.io/jq/manual/). It'll be used to automate the configuration file creation.

```shell
apt-get install jq
```

### Fetch your openrc.sh configuration

From [OVH Cloud manager](https://www.ovh.com/manager/cloud/index.html), fetch your `openrc.sh` configuration file. You can fetch it from OpenStack menu entry in the left panel and under the `...` button on the right `Download an OpenStack configuration file`. You might need to create an OpenStack user before.

### Install openstack command line client

The easier way is to use a python virtual environment

```shell
python3 -m venv venv3 # creates a virtualenv named venv3
. ./venv3/bin/activate # enter the virtualenv
pip install --upgrade pip
pip install python-openstackclient
```

or install your distribution package `apt-get install python-openstackclient`

#### Verification

Sourcing the `openrc.sh` configuration file retrieved before, try your local setup with

```shell
. ./openrc.sh
openstack token issue
```

## Packer configuration

First, source your `openrc.sh` file with

```shell
. ./openrc.sh
```

Next, let's find some needed ID. You'll need the ID of the image, flavor and network. We'll build our image from `Ubuntu 16.04` on a `vps-ssd-1` hardware, with a interface connected on public network `Ext-Net`

```shell
SOURCE_ID=`openstack image list -f json | jq -r '.[] | select(.Name == "Ubuntu 16.04") | .ID'`
FLAVOR_ID=`openstack flavor list -f json | jq -r '.[] | select(.Name == "vps-ssd-1") | .ID'`
NETWORK_ID=`openstack network list -f json | jq -r '.[] | select(.Name == "Ext-Net") | .ID'`
```

**INFO**: for `FLAVOR_ID`, you can directly use the name, ie `vps-ssd-1`

Finaly, create a `packer.json` file

```shell
cat > packer.json <<EOF
{
    "builders": [
        {
            "type": "openstack",
            "username": "$OS_USERNAME",
            "password": "$OS_PASSWORD",
            "identity_endpoint": "$OS_AUTH_URL",
            "region": "$OS_REGION_NAME",
            "tenant_id": "$OS_TENANT_ID",
            "image_name": "My Custom Image",
            "ssh_username": "ubuntu",
            "source_image": "$SOURCE_ID",
            "flavor": "$FLAVOR_ID",
            "ssh_ip_version": "4",
            "networks": [
                "$NETWORK_ID"
            ]
        }
    ],
    "provisioners": [
        {
            "script": "setup_vm.sh",
            "type": "shell"
        }
    ]
}
EOF
```

In the last selection of the configuration file, we specify a `setup_vm.sh` shell script to be ran.

```sh
#!/bin/sh

set -ex

if [ `id -u` -ne 0 ]; then
     sudo $0
    exit 0
fi

## your custom code below
apt-get install git
git clone ...

```

## Building the image

Using the configuration file create above, check it and build the image with

```shell
packer validate packer.json
packer build packer.json
```

If all went ok, you should have a new image available. You can check with

```shell
openstack image list | grep 'My Custom Image'
```

> [!primary]
> 
> **Tip**: To enable debug information: `export PACKER_LOG=1`
> 


## Go further

Join our community of users on <https://community.ovh.com/en/>.

