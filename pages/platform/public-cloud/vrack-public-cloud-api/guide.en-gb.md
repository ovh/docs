---
title: 'Configuring vRack for Public Cloud using OVHcloud APIv6'
excerpt: 'Find out how to set up vRack for your Public Cloud instances with the OVHcloud APIv6'
slug: public-cloud-vrack-apiv6
section: vRack
order: 2
---

**Last updated 20th July 2020**

## Objective

OVHcloud [vRack](https://www.ovh.co.uk/solutions/vrack/) is a private network solution that enables our customers to route traffic between OVHcloud dedicated servers as well as other OVHcloud services. At the same time, it allows you to add [Public Cloud instances](https://www.ovhcloud.com/en-gb/public-cloud/) to your private network to create an infrastructure of physical and virtual resources.

**This guide explains how to configure Public Cloud instances within your vRack using the OVHcloud APIv6.**

## Requirements

- a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- an OpenStack user
- basic networking knowledge
- consulting the guide [Configuring vRack for Public Cloud](../public-cloud-vrack) to know the various methods available for managing a vRack for Public Cloud
- consulting the guide [First steps with the OVHcloud API](../../api/first-steps-with-ovh-api/) to familiarise yourself with the OVHcloud APIv6

## Instructions

### Step 1: Activating and managing a vRack

Log in to the OVHcloud APIv6 interface according to the relvant guide ([First steps with the OVHcloud API](../../api/first-steps-with-ovh-api/)) and follow these steps:

#### Creating the cart

> [!api]
>
> @api {POST} /order/cart
>

> [!primary]
> This call will create an ID for your 'shopping cart'. You can add as many articles as you want before you validate it.
>
> In this case, the order of a vRack alone is free. Remember your cart number (cartId), it will be required for the rest.
>

#### Retrieving the necessary information for the vRack order

> [!api]
>
> @api {GET} /order/cart/{cartId}/vrack
>

> [!primary]
> This call will allow you to retrieve all the information needed to order the vRack. Copy the following:
>
> *cartId*, *duration*, *planCode*, and *pricingMode*.

#### Adding the vRack to the cart

> [!api]
>
> @api {POST} /order/cart/{cartId}/vrack
>

> [!primary]
> This call allows you to add the vRack to the cart by adding all the necessary information to the order.
>
> For a vRack, this would be, for example:
>
> cartId : [your cart identifier]
>
> duration : « P1M »
>
> planCode : « vrack »
>
> pricingMode : « default »
>
> quantity : 1
>

Once you have validated the order, you will receive an item number ("itemId"). Keep this information, it will be useful if you wish to make changes before the validation of the cart.

#### Validating the cart

Once you have put all the items in your cart, you will need to validate it:

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout
>

> [!primary]
> This call will validate the cart and create a purchase order ("orderId"). Keep this information, it will be necessary to validate the order.
>

#### Validating the final order

To validate the order, you have two possibilities:

- Pass through the visible URL when the cart is validated. Example:
> URL : https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=12345678&orderPassword=xxxxxxxxxx

- Validate using this call:

> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

> [!primary]
> Even if it is a €0 purchase order, it is necessary to simulate a purchase order payment (orderId). Your order form will then be validated and processing will begin.
>

Once the free order has been validated, it may take a few minutes for the vRack to be activated.

### Step 2: Adding your Public Cloud project to the vRack

Once the vRack is active, you will need to integrate your Public Cloud project(s) into the vRack.

Log in to the OVHcloud APIv6 interface according to the relvant guide ([First steps with the OVHcloud API](../../api/first-steps-with-ovh-api/)).

In case the project ID is unknown, the calls below allow you to retrieve it.

#### Identifying the project

> [!api]
>
> @api {GET} /cloud/project
>

> [!primary]
> This call retrieves the list of projects.
>

> [!api]
>
> @api {GET} /cloud/project/{serviceName}
>

> [!primary]
> This call identifies the project via the "description" field.
>

#### Adding the project to the vRack

Once the project ID and the vRack name are known, their association is made through the following call:

> [!api]
>
> @api {POST} /vrack/{serviceName}/cloudProject
>

Fill in the fields with the information previously retrieved:

**serviceName** : vRack name in the form "pn-xxxxxx"
<br>**project** : The Public Cloud project ID in the form of a 32-character string

> [!primary]
> This call initialises the association of the project and the vRack. The task ID must then be retrieved to check the progress.
>

#### Checking the progress of the task

You can view the progress of the task with this call:

> [!api]
>
> @api {GET} /vrack/{serviceName}/cloudProject/{project}
>

> [!primary]
> This call is optional and only allows you to check the status of the task. Once it is complete, you can proceed to the next step.
>

### Step 3: Creating a VLAN in the vRack

It is necessary to create a VLAN so that instances connected to the vRack can communicate with each other.

With the Public Cloud service, you can create up to 4,000 VLANs within one vRack. This means that you can use each private IP address up to 4,000 times.
Thus, for example, 192.168.0.10 of VLAN 2 is different from IP 192.168.0.10 of VLAN 42.

This can be useful in order to segment your vRack between multiple virtual networks.

Using the OVHcloud APIv6, you can customise all settings: IP range (10.0.0.0/16 for example), deployment zone, DCHP, Gateway, etc.

> [!primary]
> On dedicated servers, you are using VLAN 0 by default. The OpenStack infrastructure requires to specify your VLAN ID directly at the infrastructure level.
>
> Unlike dedicated servers, there is no need to tag a VLAN directly on a Public Cloud instance.
>
> To learn more about this topic, please refer to the guide [Creating multiple vLANs in a vRack](../../dedicated/multiple-vlans/)

> [!warning]
> vRack is managed at the OVHcloud infrastructure level, meaning you can only administrate it in the OVHcloud Control Panel and the OVHcloud APIv6.
>
> Because OpenStack is not located at the same level, you will not be able to customise VLANs through the Horizon interface or OpenStack APIs.
>

Once logged in to the [OVHcloud APIv6 interface](https://api.ovh.com/), follow these steps:

#### Retrieving the required information

##### **Public Cloud project**

> [!api]
>
> @api {GET} /cloud/project
>

> [!primary]
> This call retrieves the list of projects.
>

> [!api]
>
> @api {GET} /cloud/project/{serviceName}
>

> [!primary]
> This call identifies the project via the "description" field.
>

##### **vRack**

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/vrack
>

> [!primary]
> In the field "serviceName", specify the ID of your project. Save the vRack ID information in the form "pn-xxxxx".
>

#### Creating the private network

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/network/private
>

> [!primary]
> Fill in the fields with the information previously obtained:
>
> **serviceName** : project ID
>
> **name** : name of your VLAN
>
> You can leave the "Region" field blank in order to enable it for all regions.
>
> The VLAN identifier (vlanId) is required if you want to create a specific VLAN.
>

The creation will take a few moments.

You can check your VLAN information with the following call

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

> [!primary]
> This call retrieves the "networkId" in this form: name-vrack_vlanId.
>
> For example, VLAN 42: pn-xxxxxx_42
>

#### Creating a subnet

By default, if you do not add a subnet, the IP range used is:

```
10.0.0.0/16
```

If you want to manage IP assignments yourself, you will need to create a subnet.

To do this, once the VLAN is created, you will need to create the subnet for each affected area by the following call:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/network/private/{networkId}/subnet
>

Fill in the fields according the following table.

|Field|Description| 
|---|---| 
|serviceName|ID of the project|
|networkId|Your network ID, retrieved with previous steps. Example: pn-xxxxxx_42 for VLAN 42|
|dhcp|Check box for enabling / uncheck for disabling DHCP in the VLAN|
|end|Last address of the subnet in this region. Example: 192.168.1.50|
|network|Subnet IP block. Example: 192.168.1.0/24|
|region|Example: SBG3|
|start|First address of the subnet in this region. Example: 192.168.1.15|

> [!primary]
> This is the stage of creating the subnet by region. You can enable or disable private IP address assignment dynamically through DHCP.
>
> You will need to do the same for each region where your instances are present.
>

> [!warning]
> Be careful to separate your IP address pools for different regions. For example:
>
> From 192.168.0.2 to 192.168.0.254 for SBG1
>
> From 192.168.1.2 to 192.168.1.254 for GRA1
>

### Step 4: Integrating an instance into the vRack

There are two possible scenarios:

- The instance to be integrated does not exist yet.
- An existing instance needs to be added to the vRack.

#### In case of a new instance

Once logged in to the [OVHcloud APIv6 interface](https://api.ovh.com/), follow these steps:

##### **Retrieving the required information**

###### Retrieving the project ID

> [!api]
>
> @api {GET} /cloud/project
>

###### Retrieving the networkID of the public network (EXT-NET)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/public
>

###### Retrieving the networkID of the private network (vRack interface previously created)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

> [!primary]
> The identifier will have the form: "pn-xxxxx_yy" in which yy is the VLAN number.

###### Retrieving the ID of the chosen instance type (flavorId)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/flavor
>

> [!primary]
> You can limit the list by specifying the creation region of your instance.

###### Retrieving the ID of the chosen image (imageId)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/image
>

> [!primary]
> Vous pouvez limiter la liste en indiquant la zone de création de votre instance

###### Retrieving your OpenStack SSH key ID (sshKeyId)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/sshkey
>

If you have not added an SSH key to your OVHcloud Control Panel yet, you can do so using the following call:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/sshkey
>

##### **Deploying the instance**

Once all the elements necessary for the deployment are gathered, you can use the following call:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance
>

You will need to fill in at least the following fields:

|Field|Description| 
|---|---| 
|serviceName|ID of the Public Cloud project|
|flavorId|ID of the instance type (example: S1-2, B2-7, WIN-R2-15...)|
|imageId|ID of the image for the deployment (example: Debian 9, Centos 7...)|
|name|name for your instance.|
|networks|In the "networkId" section, indicate the public network identifier (Ext-net) or your VLAN (pn-xxxxxx_yy). You can click the "+" button to add more networks.|
|region|Region for your instance deployment (example: GRA5)|
|sshKeyId|ID of your OpenStack SSH key|

Once the call is complete, if all information is correctly filled in, the instance will be created with one or more network interfaces.

> [!warning]
>
> Depending on operating systems, you will need to manually configure your private network interfaces to be considered.
><br>Because OpenStack is unable to prioritise the public interface of the vRack interface, the vRack interface may sometimes pass as the default route.
><br>The direct consequence is that the instance is unreachable from a public IP.
><br>One or more reboots of the instance from the client space can resolve this situation.
><br>The other solution is to connect to the instance via from another of your servers in the same private network. You can also correct the network configuration of the instance through Rescue mode.
>

#### In case of an existing instance

If you need to integrate an existing instance into the vRack, it is not possible to do so from your OVHcloud Control Panel. You will need to use Horizon, the OpenStack API or the OVHcloud APIv6.

The required action is simply to add a new network interface to your server, in addition to the existing one.

For example, if you have a public interface *eth0*, you will add the interface *eth1*.

> [!warning]
> The configuration of this new interface is rarely automatic.
> You will therefore need to set a static IP or configure DHCP, depending on your infrastructure.
>

**The steps below describe how to manage your instances' network interfaces.**

##### **Retrieving the required information**

###### Retrieving the project ID

> [!api]
>
> @api {GET} /cloud/project
>

###### Retrieving the instance ID

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/instance
>

###### Retrieving the networkID of the public network (EXT-NET)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/public
>

###### Retrieving the networkID of the private network (vRack interface previously created)

> [!api]
>
> @api {GET} /cloud/project/{serviceName}/network/private
>

> [!primary]
> The identifier will have the form: "pn-xxxxx_yy" in which yy is the VLAN number.

##### **Adding an interface to your instance**

Once all the elements necessary are gathered, you can use the following call:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/interface
>

You will need to fill in at least the following fields:

|Field|Description| 
|---|---| 
|serviceName|ID of the Public Cloud project|
|instanceId|ID of the instance|
|networkId|Enter the public network identifier (Ext-net) or your VLAN (pn-xxxxxx_yy)|
|ip|Define a specific IP (only works for private interfaces)|

Once the call is complete, if all information is correctly filled in, a new interface will be added to your instance.

> [!primary]
> Your OVHcloud instance will have a new network interface in addition to the public interface (Ext-net).
><br>In the instance summary, you can see the private IP address that is automatically assigned to your interface.
><br>It is your responsibility to correctly configure the interface through DHCP or by using the proper IP addresses through a static IP configuration.
>

##### **Removing an interface from your instance**

> [!warning]
> Deleting an interface is permanent.
>
> If you remove the "Ext-Net" interface (public IP), this address will be released and put back into circulation. It is not possible to just reassign it.
><br>This action is only necessary if you want to isolate your server in the vRack (Ext-Net interface) or remove it from a VLAN.
>

Once all the necessary information is retrieved, you can use the following call to remove an interface:

> [!api]
>
> @api {DELETE} /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
>

You will need to fill in at least the following fields:

|Field|Description| 
|---|---| 
|serviceName|ID of the Public Cloud project|
|instanceId|ID of the instance|
|networkId|Enter the public network identifier (Ext-net) or your VLAN (pn-xxxxxx_yy)|


## Go further

[Configuring vRack for Public Cloud](../public-cloud-vrack)

[First steps with the OVHcloud API](../../api/first-steps-with-ovh-api/)

Join our community of users on <https://community.ovh.com/en/>.
