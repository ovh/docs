---
title: 'Configuring IP aliasing'
slug: network-ipaliasing-vps
excerpt: 'This guide explains how to add failover IPs to your configuration'
section: 'Network Management'
---

**Last updated 4th September 2018**

## Objective

IP aliasing is a special network configuration for your OVH servers, which allows you to associate multiple IP addresses with a single network interface.

**This guide explains how to add failover IPs to your VPS configuration.**

## Requirements

* a [Virtual Private Server](https://www.ovh.co.uk/vps/){.external}
* a failover IP address or a failover IP block (RIPE)
* administrative (root) access to the server via SSH

## Instructions

### Debian 9

#### Step 1: Disable automatic network configuration

First, open the following file, as shown below:

```sh
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```
Next, edit the file with the configuration shown below. This will prevent changes from being made to your network configuration automatically.

```sh
network: {config: disabled}
```

### Step 2: Edit the network configuration file

Next, open the network configuration file for editing with the following command:

```sh
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```
Then edit the file with the following configuration:

> [!primary]
>
Note that then names of the network interfaces in our example may differ from your own. Please substitute your own interfaces.
>

```sh
auto ens3
iface ens3 inet dhcp

auto ens3:0
iface ens3:0 inet static
address FailoverIP 0
netmask 255.255.255.255

auto ens3:1
iface ens3:1 inet static
address FailoverIP 1
netmask 255.255.255.255
```

### Ubuntu 18.04

Each failover IP address will need its own line within this file. The configuration file for your failover IP addresses should be called `50-cloud-init.yaml`.

#### Step 1: Create the configuration file

Connect to your server via SSH and run the following command:

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

Next, edit the file with the content below:

```sh
network:
    version: 2
    ethernets:
        your_network_interface:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: your_network_interface
            addresses:
            - your_failover_ip/32
```
Finally, save and close the file.

Then apply config:

```sh
# netplan apply
# netplan try
```

Repeat this procedure for each failover IP address.

### Windows Server 2016

#### Step 1: Check the main IP configuration

First of all we need to recover the information of the main IP:

![check main IP configuration](images/image1.png){.thumbnail}

#### Step 2: Change the IPv4 Properties

Now we must change the IP properties from 'automatically configuration' to a 'static' configuration manually

![change the ip configuration](images/image2.png){.thumbnail}

Now we can define the IP information obtained previously

![change the ip configuration](images/image3.png){.thumbnail}

#### Step 3: Add the IP Fail Over in the 'Advanced configuration' section

![advance configuration section](images/image4.png){.thumbnail}

Here we must to define the IP FailOver information and the correspond netmask (normally the netmask is -> 255.255.255.255)

![IP fail over configuration](images/image5.png){.thumbnail}

#### Step 4: Rebooting the network interface

First we do the disabling process

![disabling network](images/image6.png){.thumbnail}

Then we do the enabling process

![enabling network](images/image7.png){.thumbnail}

#### Step 5: Checking the new network configuration

Using the console and the ___ipconfig___ command we can check the new network configuration

![check current network configuration](images/image8.png){.thumbnail}



## Go further

Join our community of users on <https://community.ovh.com/en/>.
