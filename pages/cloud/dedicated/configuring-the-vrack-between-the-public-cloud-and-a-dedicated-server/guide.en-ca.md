---
title: 'Configuring the vRack between the Public Cloud and a Dedicated Server'
slug: vrack-pci-ds
excerpt: 'Find out how to configure private networking between a Public Cloud instance and a Dedicated Server'
section: 'Network Management'
---

**Last updated 15th October 2021**

## Objective

The OVHcloud [vRack](https://www.ovh.com/ca/en/solutions/vrack/) allows you to configure private network addressing between two or more OVHcloud [Dedicated Servers](https://www.ovhcloud.com/en-ca/bare-metal/). But it also allows you to add [Public Cloud instances](https://www.ovh.com/ca/en/public-cloud/instances/) to your private network so that you can create an infrastructure of both physical and virtual resources.

**This guide will show you how to configure private networking between a [Public Cloud instance](https://docs.ovh.com/ca/en/public-cloud/public-cloud-first-steps/#step-3-creating-an-instance/) and a [Dedicated Server](https://www.ovhcloud.com/en-ca/bare-metal/).**


## Requirements

- An [OVHcloud Public Cloud instance](https://docs.ovh.com/ca/en/public-cloud/public-cloud-first-steps/)
- A [vRack](https://www.ovh.com/ca/en/solutions/vrack/) service activated in your account
- A [Dedicated Server](https://www.ovhcloud.com/en-ca/bare-metal/){.external} compatible with the vRack
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- A private IP address range of your choice

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-ca/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-ca/compare/) for more information.

## Instructions

### Add a Public Cloud project to the vRack

Once your [Public Cloud project](https://docs.ovh.com/ca/en/public-cloud/create_a_public_cloud_project) is set up, you will need to add it to the vRack. This can be done in two ways:

1. By ordering a vRack service if you do not have one yet, this service is free of charge. 

Go to the `Bare Metal Cloud`{.action} menu and click on the `Order`{.action} button. Under this menu, click on `vRack`{.action}.

![Order vrack](images/orderingvrack.png){.thumbnail}

You will be redirected to another page to validate the order, it will take a few minutes for the vRack to be setup in your account.

Once the vRack service is delivered to your account, you can now add your project to it.

Go to the `Bare Metal Cloud`{.action} menu, click on `Network`{.action}, then on `vRack`{.action}. Select your vRack from the list.


From the list of eligible services, select the project you want to add to the vRack and then click on the `Add`{.action} button.

![add project to vrack](images/addprojectvrack.png){.thumbnail}

<ol start="2">
  <li>By <a href="https://docs.ovh.com/ca/en/public-cloud/public-cloud-vrack/#instructions_1">creating or adding an existing vRack service</a> in the Public Cloud section.</li>
</ol>


### Add an Instance to the vRack 

Two situations may arise:

- The instance does not exist yet.
- The instance already exists and you must add it to the vRack.

#### In case of a new instance

If you need assistance, follow this guide first: [Creating your first Public Cloud instance](../../public-cloud/public-cloud-first-steps/#step-3-creating-an-instance). When creating an instance, you can specify, in Step 4, a private network to integrate your instance into. Choose your previously created vRack from the drop-down menu.

#### In case of an existing instance

You can attach an existing instance to a private network. For more information, please refer to [this section](https://docs.ovh.com/ca/en/public-cloud/public-cloud-vrack/#cases-of-an-already-existing-instance_2) of the corresponding guide.

### Create a VLAN ID

For both services to communicate with each other, they have to be tagged with the same **VLAN ID**. 

#### Using the default VLAN ID

By default, the VLAN ID for dedicated servers is **0**. To use this VLAN ID, it will be necessary to tag the private network linked to your instance with VLAN **0**. To do this, do not check the `Set VLAN` box when adding a private network to your instance.

For more information, consult [this section](https://docs.ovh.com/ca/en/public-cloud/public-cloud-vrack/#step-2-create-a-vlan-in-the-vrack_1) of the corresponding guide. 

> [!primary]
> For Public Cloud, you set a unique VLAN ID per private network.
> 
> It is not possbile to set the same VLAN ID on two different private networks.

#### Using a different VLAN ID

To use a different VLAN ID:

- The private network linked to the Public Cloud instance must be tagged with this VLAN ID.
- In the network configuration file on the dedicated server, the private network interface should be tagged with this VLAN ID.


> [!primary]
> 
> Unlike dedicated servers, there is no need to tag a VLAN directly on a Public Cloud instance.
>

An example: If your instance private network is tagged with VLAN 2, the private network interface on your dedicated server should be tagged with VLAN 2. For more information consult the following guide: [Create multiple VLANs in the vRack](https://docs.ovh.com/ca/en/dedicated/multiple-vlans/).

### Configure your network interfaces

Next, configure the network interfaces on your new [Public Cloud instance](https://www.ovh.com/ca/en/public-cloud/instances/) and [Dedicated Server](https://www.ovhcloud.com/en-ca/bare-metal/) using this guide: [Configuring the vRack on your Dedicated Servers](../configuring-vrack-on-dedicated-servers/){.external}.

## Go further

Join our community of users on <https://community.ovh.com/en/>.