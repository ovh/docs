---
title: "OPCP - How to install an instance from the Horizon interface"
excerpt: "Learn how to install an OPCP instance via Horizon by configuring networks, subnets, instances, and SSH keys."
updated: 2025-11-10
---

## Objective

Before deploying services on your **OPCP** arrays, you must have an installed and active instance.

This guide details the steps to install an OPCP instance from the **Horizon** interface.

## Requirements

- Have an active [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) service.
- Have a **user account** with sufficient permissions to access Horizon for the OPCP offer.

## Instructions

### 1. Log in to Horizon

Log in to the **Horizon** interface of your OPCP environment.

![horizon-interface](images/01-log-to-horizon-step01.png){.thumbnail}

Once connected, select the **project** where you want to install your instance.

![horizon-select-project](images/01-log-to-horizon-step02.png){.thumbnail}

### 2. Creating a private network

Before deploying your instance, it is generally necessary to create a **private network** so that it can be accessed within your local infrastructure.

In the left-hand menu, click on `Network`{.action}, then on `Networks`{.action}.

![horizon-network-networks](images/02-create-network-step01.png){.thumbnail}

Click on `Create Network`{.action}.

![horizon-network-networks](images/02-create-network-step02.png){.thumbnail}

> [!tabs]
> **Network**
>>
>> ![horizon-network-setup-network](images/02-create-network-setup-network.png){.thumbnail}
>>
>> | Field | Description |
>> |--------|--------------|
>> |**Network Name**|Enter a name for your network.|
>> |**Enable Admin State**|Leave this option checked to activate the network.|
>> |**Shared**|Check this box if you want to make the network available to multiple projects.|
>> |**Create Subnet**|Leave this option checked to create a subnet.|
>> |**Availability Zone Hints**|Leave the default value.|
>>
> **Subnet**
>>
>> ![horizon-network-setup-subnet](images/02-create-network-setup-subnet.png){.thumbnail}
>>
>> > [!primary]
>> >  Although it is possible to create a network without a subnet, it cannot be attached to an instance unless it has one.
>> >
>>
>> | Field | Description |
>> |--------|--------------|
>> |**Subnet Name**|Enter a name for your subnet.|
>> |**Network Address**|Define a private IP range, for example `192.168.100.0/24`.|
>> |**IP Version**|Leave the default value **IPv4**.|
>> |**Gateway IP**|Optional. If not specified, an address will be automatically selected.|
>> |**Disable Gateway**|Check this box to not assign a gateway address.|
>>
> **Subnet Details**
>>
>> ![horizon-network-setup-subnet](images/02-create-network-setup-subnet-details.png){.thumbnail}
>>
>> | Field | Description |
>> |--------|--------------|
>> |**Enable DHCP**|Keep enabled if you want IP addresses to be automatically assigned.|
>> |**Allocation Pools**|Optional. Allows you to define a specific IP address range.|
>> |**DNS Name Servers**|Optional. Lets you specify one or more DNS servers.|
>> |**Host Routes**|Optional. Allows you to add static routes.|
>>

### 3. Creating an instance

In the left-hand menu, click on `Compute`{.action}, then on `Instances`{.action}.<br><br>
![horizon-compute-instances](images/03-create-instance-horizon-step01.png){.thumbnail}

Click on `Launch Instance`{.action} to create a new instance.<br><br>
![horizon-compute-instances-launch-instance](images/03-create-instance-horizon-step02.png){.thumbnail}

#### Details

![horizon-compute-instances-launch-instance-details](images/03-create-instance-horizon-details.png){.thumbnail}

| Field | Description |
|--------|--------------|
|**Instance Name**|Enter the name of the instance to create.|
|**Description**|Optional. Add a description if needed.|
|**Availability Zone**|Leave the default value **nova**.|
|**Count**|Specify the number of instances to deploy.|

#### Source

![horizon-compute-instances-launch-instance-source](images/03-create-instance-horizon-source.png){.thumbnail}

| Field | Description |
|--------|--------------|
|**Boot Source**|Select the boot source: *Image* or *Instance Snapshot*.|
|**Image Name**|Choose the image to use (e.g. *Debian 12 BMPOD*).|

#### Flavor

![horizon-compute-instances-launch-instance-flavor](images/03-create-instance-horizon-flavor.png){.thumbnail}

Select the appropriate **hardware configuration** (vCPU, memory, storage).

#### Networks

![horizon-compute-instances-launch-instance-network](images/03-create-instance-horizon-networks.png){.thumbnail}

Select the **private network** previously created. You can also attach an existing **network port** from the *Network Ports* tab.

### 4. Managing SSH key pairs

> [!warning]
> Although selecting an SSH key in Horizon is not mandatory, it is **essential for connecting to the instance** once it has been created.

![horizon-compute-instances-launch-instance-key-pairs](images/03-create-instance-horizon-key-pairs.png){.thumbnail}

> [!tabs]
> **Create a new key pair**
>>
>> Click `+ Create Key Pair`{.action} and fill in the following fields:
>>
>> | Field | Description |
>> |--------|--------------|
>> |**Key Pair Name**|Enter a name for the key.|
>> |**Key Type**| Select `SSH Key`{.action}.|
>>
>> Next, click on `Create Keypair`{.action}.
>> Copy the private key with **Copy Private Key to Clipboard**, then click on `Done`{.action}.<br><br>
>> ![horizon-compute-instances-launch-instance-key-pairs-create-step01](images/03-create-instance-horizon-key-pairs-create-step01.png){.thumbnail}
>>
>> The key is now selected by default. Click on `Launch Instance`{.action} to start creating the instance.<br><br>
>> ![horizon-compute-instances-launch-instance-key-pairs-create-step02](images/03-create-instance-horizon-key-pairs-create-step02.png){.thumbnail}
>>
> **Import an existing key**
>>
>> Click on `Import Key Pair`{.action} and fill in the following fields:
>>
>> | Field | Description |
>> |--------|--------------|
>> |**Key Pair Name**|Name of the key.|
>> |**Key Type**|Select **SSH Key**.|
>> |**Public Key**|Paste your public key or upload the corresponding file.|
>>
>> Click on `Import Key Pair`{.action}.<br><br>
>> ![horizon-compute-instances-launch-instance-key-pairs-import-step01](images/03-create-instance-horizon-key-pairs-import-step01.png){.thumbnail}
>>
>> The key is now selected by default. Click on `Launch Instance`{.action} to start creating the instance.<br><br>
>> ![horizon-compute-instances-launch-instance-key-pairs-import-step02](images/03-create-instance-horizon-key-pairs-import-step02.png){.thumbnail}
>>

### 5. Other options

The other configuration tabs (Security Groups, Configuration, Metadata, etc.) are not required for a standard installation.<br>
To learn more, refer to the [official OpenStack documentation](https://docs.openstack.org/).

### 6. References

- [OpenStack Official Documentation – Horizon](https://docs.openstack.org/horizon/latest/)
- [OpenStack Networking Guide (Neutron)](https://docs.openstack.org/neutron/latest/)
- [OpenStack Compute Guide (Nova)](https://docs.openstack.org/nova/latest/)
- [OpenStack Key Pairs](https://docs.openstack.org/nova/latest/user/ssh-keys.html)
- [Debian 12 Official Site](https://www.debian.org/releases/book/)

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).
