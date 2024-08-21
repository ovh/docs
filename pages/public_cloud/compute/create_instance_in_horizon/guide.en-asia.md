---
title: 'Creating an Instance via the Horizon interface'
excerpt: 'Find out how to create an Instance via the Horizon interface'
updated: 2024-07-20
---

## Objective

You can create multiple Instances directly in the Horizon interface, and also configure a security group to apply to your Instances.

**Find out how to create an Instance via the Horizon interface.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account
- [Access to the Horizon interface](/pages/public_cloud/compute/introducing_horizon)

## Instructions

### Create a private network

As a general rule, we recommend creating a private network before creating an instance. You can later attach this network to your instance.

To begin, log in to the Horizon interface. If you are unsure about how to do this, please refer to our [guide](/pages/public_cloud/compute/introducing_horizon).

Next, click on `Network`{.action} in the left-hand menu, then `Networks`{.action}.

![network](images/create-network.png){.thumbnail}

Click on `Create Network`{.action}

![network](images/create-network-1.png){.thumbnail}

> [!tabs]
> 1. **Network**
>>
>> **Network Name:** Enter a name for your network.<br>
>> **Enable Admin State:** Leave this option checked to activate the network.<br>
>> **Create Subnet:** Leave this option checked to create the subnet.<br>
>> **Availability Zone Hints:** Leave the default option.<br><br>
>>![network](images/network_information.png){.thumbnail}<br>
>>
> 2. **Subnet**
>>
>> **Subnet Name:** Enter a name for your subnet.<br>
>> **Network Address:** Choose a private network range. For example: `192.168.0.0/24`.<br>
>> **IP Version:** Leave this value at IPv4.<br>
>> **Gateway IP:** This option is optional. If it is not defined, a Gateway IP is automatically selected.<br>
>> **Disable Gateway:** Leave this unchecked.<br><br>
>>![subnet](images/subnet_information.png){.thumbnail}<br>
>>
> 3. **Subnet Details**
>>
>> **Enable DHCP:** Leave this option checked.<br>
>> **Allocation Pools:** Optional. You can specify the range from which IPs are selected.<br>
>> **DNS Name Servers:** Optional. You can specify any DNS name servers.<br>
>> **Host Routes:** Optional. You can specify any host routes.<br><br>
>>![KVM](images/subnetdetails_information.png){.thumbnail}<br>
>>

### Create Instance

In the horizon interface, click on `Compute`{.action} in the left-hand menu, then `Instances`{.action}.

![createinstance](images/create-instance-step1.png){.thumbnail}

The page that opens can be used to view the Instances that are currently launched. To launch a new one, click the `Launch Instance`{.action} button.

![createinstance](images/create-instance-step2.png){.thumbnail}

You will then need to fill in the information requested. Please note that this grid is not exhaustive.

**Details**

![createinstance](images/create-instance-step3.png){.thumbnail}

|Information|Details|
|---|---|
|Instance name|Specify the name you want for the Instance that will be launched.|
|Description|This is Optional. Set a description if applicable.|
|Availability zone|Leave "nova" (default choice).|
|Count|Specify the number of Instances to launch.|

**Source**

![createinstance](images/create-instance-step4.png){.thumbnail}


|Information|Details|
|---|---|
|Select Boot Source|Click on the drop-down arrown to select the source for launching an instance (e.g. "Image" or "Instance snapshot").|
|Create New Volume|You may choose to check this option if you wish to create a volume into which the specified operating system image is copied.|
|Volume size (GB)|If you have choosen to create a volume, allo the system to determine the size for you.|
|Delete Volume on Instance Delete|You can leave the default option **No**. If **Yes** is selected, when the instance is deleted, so is the volume.|
|Image name (only when launching from an image)|Select the Instance image by clicking on the upward arrow next to the image of your choice. In our example, we use selected Centos 7.|
|Instance snapshot (only for launching from a snapshot)|Choose an Instance snapshot by clicking on the upward arrow next to the instance snapshot image of your choice.|

**Flavor**

![createinstance](images/create-instance-step5.png){.thumbnail}

Pre-built flavors are available for you, select the flavor of your choice underneath the `Available` tab.

**Networks**

![createinstance](images/create-instance-step6.png){.thumbnail}

|Information|Details|
|---|---|
|Network|Select the network(s) for the Instance you want to create, from the list of available networks.|
|Ext-Net|Represents the Public Network.|
|Mynewnetwork|Represents the Private network created at the beginning of this guide.|

**Security Groups**

![createinstance](images/create-instance-step7.png){.thumbnail}

For more information, consult the following [guide](/pages/public_cloud/compute/setup_security_group).

**Key Pair**

> [!warning]
>
> Although the "Key Pair" field is not mandatory in the Horizon interface when creating an instance, registering an SSH key is absolutely necessary to be able to connect to an instance. Without an SSH key, you will be required to reboot the instance in rescue mode to either create a password or add an SSH key to the appropriate file (for more information, please refer to the guide on [Replacing your lost SSH key pair](/pages/public_cloud/compute/replacing_lost_ssh_key#instructions)).
>

![createinstance](images/create-instance-step8.png){.thumbnail}

In this section, you have the option to create a keypair, import a keypair or use an existing key pair.

For more information on how to create an SSH key, consult this [guide](/pages/public_cloud/compute/public-cloud-first-steps#step-1-creating-ssh-keys).

> [!tabs]
> **+ Create Key Pair**
>> 
>> To create a Keypair, click on the `+ Create Key Pair`{.action} button. Please note that with this option, additional steps have to be made before you are able to connect to the instance, especially if you are using the software Putty to connect to your instance. 
>>
>> **Key Pair Name:** Enter a name for your key.<br>
>> **Key Type:** Click on the `drop down arrow` and select `SSH Key`.<br>
>> Next, click on `Create Keypair`{.action} to begin the creation of the key pair.<br>
>>
>> Once the Key Pair is created, click on `Copy Private Key to Clipboard`{.action}, then on `Done`{.action}.<br><br>
>>![create ssh key](images/create-ssh-key-1.png){.thumbnail}<br>
>>
>> Once done, the newly created key will be automatically selected. Click on `Launch Instance`{.action} to begin the creation of your instance.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>
>> 
> **Import Key Pair**
>> If you prefer to import a previously created SSH key, click on the `Import Key Pair`{.action} button.
>>
>> **Key Pair Name:** Enter a name for your key.<br>
>> **Key Type:** Click on the `drop down arrow` and select `SSH Key`.<br>
>> **Load Public Key from a file:**  Click on `Browse`{.action} to specify the location of the public key on your computer.<br>
>> **Public Key:** Copy and paste your public key here.<br>
>> Click on `Import Key Pair`{.action} to import the key.<br><br>
>>![import key pair](images/import-ssh-key.png){.thumbnail}<br>
>>
>> Once done, the imported key will be automatically selected. Click on `Launch Instance`{.action} to begin the creation of your instance.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>

**Other options**

Please note that these options are not mandatory for the creation of a basic instance. If you wish to explore these options further, consult the official Openstack documentation.

|Information|Details|
|---|---|
|Custom script source|Specify the source between a "direct entry" or a "file".|
|Script data|Enter the script code in the input field (16KB maximum).|
|Script file|Click ‘browse’ to select the post-installation script.|
|Disk partitioning|Choose between "automatic" or "manual".|
|Configuration disk|Configure OpenStack to write metadata on to a specific configuration disk that will be attached to the Instance when it is launched.|


## Go further

Join our community of users on <https://community.ovh.com/en/>.
