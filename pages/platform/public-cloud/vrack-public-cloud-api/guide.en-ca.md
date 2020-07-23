---
title: 'Configuring vRack on the Public Cloud using the OVHcloud API'
excerpt: 'Find out how to activate and configure a vRack on the Public Cloud using the OVHcloud API'
slug: public-cloud-vrack-apiv6
section: vRack
order: 2
---

**Last updated 22nd July 2020**

## Objective

The [vRack]({ovh_www}/solutions/vrack/){.external} us a private network that allows you to configure addressing between two or more compatible OVHcloud services. It also allows you to add [Public Cloud instances]({ovh_www}/public-cloud/) to your private network to create an infrastructure of physical and virtual resources.

**This guide provides some basic information on creating and configuring the vRack on Public Cloud using the OVHcloud API.**

## Requirements

* Have a Pubblic Cloud Project
* Create an Openstack user
* Have basic networking knowledge
* Consult the guide [Configuring the vRack on Public Cloud](../public-cloud-vrack) to understand the different methods to manage the vRack with the Public Cloud.
* Consult the guide [First steps to use the OVHcloud API](../../api/first-steps-with-ovh-api/) to familiarize yourself with using the OVHcloud API.

## Instructions

### Step 1: Activate and manage a vRack

Connect to the OVhcloud API using the following guide [First steps with the OVHcloud API](../../api/first-steps-with-ovh-api).

Once logged in, follow the steps described below:

#### Create a cart

> [!api]
>
> @api {POST} /order/cart
>

> [!primary]
> This call will create an ID for your "Cart". You will be able to add products to it before checking out.
>
> For this case, ordering a vRack is free. Copy the ID for your cart (cartId), you will need it further down.
>

#### Obtaining required information to order the vRack

> [!api]
>
> @api {GET} /order/cart/{cartId}/vrack
>

> [!primary]
> This call will allow you to obtain the information required to order the vRack. Copy the following:
>
> *cartId*, *duration*, *planCode*, et *pricingMode*.

#### Adding the vRack to the cart

> [!api]
>
> @api {POST} /order/cart/{cartId}/vrack
>

> [!primary]
> This call allows you to add the vRack to the card by filling in the required information.
>
> For vRack:
>
> cartId : [The ID copied from the first step]
>
> duration : « P1M »
>
> planCode : « vrack »
>
> pricingMode : « default »
>
> quantity : 1
>

Once you have added the vRack to the cart, you should receive an itemID. Copy this, it will be useful for making modifications before checking out.

#### Checking Out

Once the items have been placed in the card, you will need to checkout:

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout
>

> [!primary]
> This call will checkout the card and will genearte a purchase order (orderID). Save this ID, it will be required to validate the order.
>

#### Final validation of the order

To validate the order, there are 2 possible methods:

* Go to the URL given when checking out. Example:
> url: https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=12345678&orderPassword=xxxxxxxxxx

* Validate using the following API call:

> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

> [!primary]
>  Even if it is a $0 purchase order, it is necessary to simulate a purchase order payment (orderId). Your order form will then be validated and processing will begin.
>

Once the free order has been validated, it may take a few minutes for the vRack to be activated.

### Step 2: Add your Public Cloud project to the vRack

Once the vRack is active, you will need to assign your Public Cloud projects to the vRack.

Connect to the OVHcloud API using the following guide [First steps with the OVHcloud API](../../api/first-steps-with-ovh-api){.external}

If you do not know your Public Cloud project ID, the following calls will allow you to obtain it.

#### Identifying the project

> [!api]
>
> @api {GET} /cloud/project
>

> [!primary]
> This call will generate a list of your projects IDs
>

> [!api]
>
> @api {GET} /cloud/project/{serviceName}
>

> [!primary]
> This will help identify the project by displaying the description
>

#### Adding the project to the vRack

Once you have identified the project and vRack, you can associate them with the following API call:

> [!api]
>
> @api {POST} /vrack/{serviceName}/cloudProject
>

Fill in the fields with the information previously collected:
**serviceName** : name of the  vRack in the form:  « pn-xxxxxx »
**project** : The Public Cloud project ID, in a string of  32 caractères.

> [!primary]
> This call initialises the assignment of the project to the vRack, you will need to copy the task ID to verify its progress.
>

#### Verifying the progrss of the assignment task

You can verify the progress of the assignment task with the help of the following API call:

> [!api]
>
> @api {GET} /vrack/{serviceName}/cloudProject/{project}
>

> [!primary]
> This call allows you only verify the status of the task. Once the task is done, you can proceed to the following step.
>

### Step 3:  Create a VLAN on the vRack

A VLAN (Virtual Local Area Network) will need to be created so that your instances can communicate with each other over the vRack.

With the Public Cloud, you can create up to 4,000 vLANs in a single vRack. This means that you can use each private IP up to 4000 times.
Thus, for example, the IP 192.168.0.10 on VLAN 2, will be different than 192.168.0.10 on vLAN 42.

This can be useful for segmenting your vRack between multiple virtual networks.

From the OVHcloud API, you can customize the settings: IP range (e.g 10.0.0.0/16), deployment zones, DHCP, Gateway...

> [!primary]
> On dedicated servers, by default, you are using VLAN 0. The OpenStack infrastructure requires that you specify your VLAN number directly at the hardware level.
>
> Unlike dedicated servers, it is not necessary to tag a VLAN directly on the instance.
>
> For more information on managing VLANs and the vRack with dedicated server, you can consul the following guide: [Creating muliple vLANs in a vRack](../dedicated/multiple-vlans)

> [!warning]
> The vRack is an infrastructure completely managed by OVHcloud, you can only configure it through the OVHcloud Control Panel and the API.
>
> As OpenStack is not located on the same infrastructure level as the vRack, you will not be able to customize VLANs through the Horizon interface or OpenStack APIs.
>  

Once logged into the the [API](https://ca.api.ovh.com/){.external}, execute the calls the following in order.

#### Obtaining the required infomration :

##### **Public Cloud Project**

> [!api]
>
> @api {GET} /cloud/project
>

> [!primary]
> This call will generate a list of your projects IDs
>

> [!api]
>
> @api {GET} /cloud/project/{serviceName}
>

> [!primary]
> This will help identify the project by displaying the description
>

##### **vRack**

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/vrack
>

> [!primary]
> In the serviceName field, enter your Project ID. Save the serviceName of the vRack in the form of "pn-XXXXX:..
>


#### Creating a private network:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/network/private
>

> [!primary]
> Fill in the field with the previously obtained information :
>
> **serviceName** : ID du projet
>
> **name** : le nom que vous voulez donner au vLan.
>
> You can leave the "Region" field empty if you want it to be active in all regions..
>
> The "vLanID" is required to create a specific vLAN.
>

The creation will take a few minutes.

To verify the details of your VLANs, you can us the following API call :

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

> [!primary]
> This call will retrive the networkId. It will appear as: pn-XXXXXX__vlanId.
>
> For example, for VLAN 42 it would appear as: pn-xxxxxx_42
>

#### Creating a subnet:

By default, if you do not specify a subnet, the IP range used is the following:

```
10.0.0.0/16
```

If you wan to manage the IP assignments yourself, you will need to create a subnet.

To do this, once the VLAN is created, you will need to create the subnet for each affected area using the following API call:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/network/private/{networkId}/subnet
>

You can fill our the fields like the following:

|Field|Description|
|---|---|
|serviceName|'The ID of your project'|
|networkId|'ID that was retrived previously. Ex : pn-xxxxxx_42 pour le vLan 42'|
|dhcp|Checked to activate / Unchecked to leave deactivated on the vLan|
|end|Last address in the subnet in the region Ex : 192.168.1.50|
|network|Subnet IP block. Ex : 192.168.1.0/24|
|region|Example : SBG3|
|start|First address in the subnet in the region Ex : 192.168.1.15|

> [!primary]
> This is the step of creating the subnet by region. You can enable or disable private IP address assignment dynamically through DHCP.
>
> You will have to do the same for each area where your instances are present.
>

> [!warning]
> Be careful to separate your IP address pools for different regions. For example:
>
> From 192.168.0.2 to 192.168.0.254 for SBG1
>
> From 192.168.1.2 to 192.168.1.254 for GRA1
>

### Step 4 : Adding an instance to the vRack


Two situations may exist::

- The instance does not exist yet.
- The instance already exists and you must add it to the vRack.

#### Cases of a new instance

Once connected to the [API](https://ca.api.ovh.com/), execute the following commands in order.

##### **Retrieving required information**

####### Retrieving project ID:

> [!api]
>
> @api {GET} /cloud/project
>

####### Retrieving the public networkID (EXT-NET)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/public
>

###### Retrieving the network ID from the private network (previously created vRack interface)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

> [!primary]
> The networkID  obtained is in the form: "pn-xxxxx_yy" where yy is the vLan number.

###### Retrieving the ID of the chosen instance type (flavorId)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/flavor
>

> [!primary]
> You can limit the list by specifying the creation zone of your instance


###### Retrieving the ID of the chosen image (imageId)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/image
>

> [!primary]
> You can limit the list by specifying the creation zone of your instance

####### Retrieving your OpenStack SSH Key ID (sshKeyId)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/sshkey
>

If you haven't added an SSH key to your client space yet, you can do so through the following API:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/sshkey
>

###### **Instance Deployment***

Once all the elements necessary for the deployment are gathered, you can use the following call

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance
>

You will need to enter at least the following fields:

|Field|Description|
|—|—|
|serviceName|ID of the relevant Public Cloud project|
|flavorId|Instance Type ID (e.g. S1-2, B2-7, WIN-R2-15...)|
|imageId|Deployment Image ID (ex: Debian 9, Centos 7..)|
|name|Name you give to your instance.|
|networks|In the "networkId" part, enter the public network ID (ext-net) or your vLan ID (pn-xxxxxx_yy). You can click the "+" button to add more networks.|
|region|Instance Deployment Regions (for example, GRA5)|
|sshKeyId|Your OpenStack SSH Key ID|

Once the call is executed, if all information is correctly filled in, the instance will be created with one or more network interfaces.

> [!warning]
>
> Depending on operating systems, you will need to manually configure your private network interfaces for consideration.
>OpenStack is unable to prioritize the public interface of the vRack interface, so the vRack interface may pass as the default route.
>The direct consequence is that the instance is unreachable from a public IP.
>One or more reboots of the instance from the client space can restore the situation.
>The other solution is to connect to the SSH instance through another of your servers in the same private network. You can also correct the network configuration of the instance through Rescue mode.
>

#### Cases of an already existing instance

If you need to integrate an existing instance into vRack, you will not be able to do so from your OVHcloud client space. To do this, you will have to go through Horizon, the Openstack APIs or the OVHcloud API.

The action will simply be to add a new network interface to your server, in addition to the existing one.

So, for example, if you have a eth0 public interface, you will also have an eth1 interface.

> [!primary]
> The configuration of this new interface is rarely automatic.
>You'll need to configure it as DHCP or Fixed IP depending on your infrastructure.
>

**The steps below describe how to manage your instances' network interfaces.**

##### **Retrieving required information**

####### Retrieving project ID:

> [!api]
>
> @api {GET} /cloud/project
>

####### Retrieving Instance ID:

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/instance
>

####### Retrieving the public networkID (EXT-NET):

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/public
>

###### Retrieving the network ID from the private network (previously created vRack interface):

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

> [!primary]
> The ID obtained is in the form of: "pn-xxxxx_yy" where yy is the vLan number.

##### **Adding an interface to your instance**

Once all the necessary information is retrieved, you can use the following call:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/interface
>

You will need to enter at least the following fields:

|Field|Description|
|—|—|
|serviceName|ID of the relevant Public Cloud project|
|instanceId|ID of the instance concerned|
|networkId|Specify the public network ID (ext-net) or your vLan ID (pn-xxxxxx_yy)|
|ip|Set a specific IP (only works for private interfaces)|

Once the call is complete, if all information is correctly filled in, a new interface will be added to your instance.

> [!primary]
> Your OVHcloud instance will have a new network interface in addition to the public interface (Ext-net).
>You can see in the instance summary the private IP address automatically assigned to your interface.
>It is your responsibility to use it by configuring your interface through DHCP or by using your own IP through a static IP configuration.
>

##### **Removing an interface from your instance**

> [!warning]
> Removing an interface is permanent.
>
>In case you remove the "Ext-Net" interface (public IP), this address would be released and recycled. So you couldn't reassign it to yourself.
><br>This action is only to be performed if you want to isolate your server in the vRack (Ext-Net interface) or exit it from a vLan.
>

Once all the necessary information is retrieved, you can use the following call to remove an interface:

> [!api]
>
> @api {DELETE} /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
>

You will need to enter at least the following fields:

|Field|Description|
|—|—|
|serviceName|ID of the relevant Public Cloud project|
|instanceId|Id of the instance concerned|
|networkId|Specify the public network ID (ext-net) or your vLan ID (pn-xxxxxx_yy)|
## Go further

[Configuring vRack with the Public Cloud](../public-cloud-vrack)

[First steps with the API](../../first-steps-with-ovh-api/)

Join our community of users on <https://community.ovh.com/en/>.
