---
title: 'Create a custom OpenStack image with Packer (EN)'
excerpt: 'Create and customize an OpenStack image from an existing one with Packer'
updated: 2024-11-12
---

## Objective

This guide will show you how to create a Packer configuration file to create your own OpenStack image.

## Requirements

You'll need an [OVHcloud Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) and a terminal.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Caminho de navegação:** `Public Cloud`{.action} > Selecione o seu projeto

---
<!-- CP-NAV-END:publiccloud-projects -->

### Install Packer

Packer can be downloaded from the official website (currently [here](https://www.packer.io/downloads.html) ) and you'll need to `unzip` it.

For Linux 64bits

```shell
wget https://releases.hashicorp.com/packer/1.11.2/packer_1.11.2_linux_amd64.zip
unzip packer_1.11.2_linux_amd64.zip
```

### Install the OpenStack plugin for Packer

```shell
packer plugins install github.com/hashicorp/openstack
```

### Install jq

`jq` is a command line tool for [parsing JSON document](https://stedolan.github.io/jq/manual/). It'll be used to automate the configuration file creation.

```shell
apt-get install jq
```

### Fetch your openrc.sh configuration

From [OVHcloud Control Panel](/links/manager), fetch your `openrc.sh` configuration file. You can fetch it from OpenStack menu entry in the left panel and under the `...` button on the right `Download an OpenStack configuration file`. You might need to create an OpenStack user before.

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

Next, let's find some needed ID. You'll need the ID of the image, flavor and network. We'll build our image from `Ubuntu 24.04` on a `b2-7` hardware, with a interface connected on public network `Ext-Net`

```shell
export SOURCE_ID=`openstack image list -f json | jq -r '.[] | select(.Name == "Ubuntu 24.04") | .ID'`
export FLAVOR_ID=`openstack flavor list -f json | jq -r '.[] | select(.Name == "b2-7") | .ID'`
export NETWORK_ID=`openstack network list -f json | jq -r '.[] | select(.Name == "Ext-Net") | .ID'`
```

**INFO**: for `FLAVOR_ID`, you can directly use the name, ie `b2-7`

Finally, create a `packer.json` file

```shell
cat > packer.json <<EOF
{
    "variables": {
        "os_region_name": "{{env `OS_REGION_NAME`}}",
        "os_tenant_id": "{{env `OS_TENANT_ID`}}",
        "source_id": "{{env `SOURCE_ID`}}",
        "flavor_id": "{{env `FLAVOR_ID`}}",
        "network_id": "{{env `NETWORK_ID`}}"
    },
    "builders": [
        {
            "type": "openstack",
            "region": "{{user `os_region_name`}}",
            "tenant_id": "{{user `os_tenant_id`}}",
            "image_name": "My Custom Image",
            "ssh_username": "ubuntu",
            "source_image": "{{user `source_id`}}",
            "flavor": "{{user `flavor_id`}}",
            "ssh_ip_version": "4",
            "networks": [
                "{{user `network_id`}}"
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

In the last selection of the configuration file, we specify a `setup_vm.sh` shell script to be run.

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

Using the configuration file created above, check it and build the image with

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

Join our [community of users](/links/community).

