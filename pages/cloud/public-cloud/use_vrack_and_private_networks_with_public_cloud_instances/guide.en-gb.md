---
title: 'Use vRack and private networks with Public Cloud instances'
excerpt: 'Use vRack and private networks with Public Cloud instances'
slug: use_vrack_and_private_networks_with_public_cloud_instances
section: Networking
hidden: true
---

## 
To use private networks with Public Cloud instances you have to connect the project to a vRack. 

Follow these steps to put two Public Cloud instances into the network:


- Create vRack 3
- Attach the Public Cloud project to the vRack
- Create a private network
- Attach instances to the private network


## 
Run the following commands in order from [OVH APIv6](https://eu.api.ovh.com/console/#/):

> [!api]
>
> @api {post} /order/vrack/new
>

Notes:
This call will create a purchase order for a vRack. It is free to order a vRack.Get the order number (orderId).

> [!api]
>
> @api {post} /me/order/{orderId}/payWithRegisteredPaymentMean
>

|Value|Description|
|---|---|
|orderID|the one you got from the previous call|
|paymentMean|fidelityAccount|


Notes:
Even if it is for a €0 purchase order, you still need to simulate a payment for a purchase order. 
Your purchase order will then be confirmed and processing will begin.

> [!api]
>
> @api {get} /me/order/{orderId}/status
>

> [!primary]
>
> You have to wait until the order is in "delivered" status.
>

> [!api]
>
> @api {get} /me/order/{orderId}/details/{orderDetailId}
>

|Value|Description|
|---|---|
|orderID|the one retrieved from the first call|
|orderDetailId|the one retrieved from the previous call|

> [!primary]
>
> The important information here is the *domain* which must have following format: **pn-XXXX**.
>

> [!api]
>
> @api {get} /me/order/{orderId}/details
>

|Value|Description|
|---|---|
|orderID|the one retrieved from the first call|


> [!primary]
>
> You need this call the get the name of the vRack created afterwards. A table with an item is returned.
>

##

If the Public Cloud project ID is unknown, proceed as follows:

> [!api]
>
> @api {get} /cloud/project
>

This retrieves the list of projects.

> [!api]
>
> @api {get} /cloud/project/{serviceName}
>

|Value|Description|
|---|---|
|serviceName|one of the IDs retrieved from the previous call|

This lets you identify the project using the "description" field.
Once you know the project ID and the name of the vRack, they can be linked as follows:

> [!api]
>
> @api {post} /vrack/{serviceName}/cloudProject
>

|Value|Description|
|---|---|
|serviceName|the "domain" retrieved in the previous step, it's the name of the vRack|
|project|The cloud project ID, it should be a 32 character chain|


This call begins the process of linking the project to the vRack, you have to retrieve the task ID.

> [!api]
>
> @api {get} /vrack/{serviceName}/task/{taskId}
>

|Value|Description|
|---|---|
|serviceName|the "domain" retrieved in the previous step. It's the name of the vRack|
|taskID|The task ID retrieved from the previous call|

This call lets you check the status of the order. Once the taskhas finished, go to the next call.


## 

> [!api]
>
> @api {post} /cloud/project/{serviceName}/network/private
>

|Value|Description|
|---|---|
|serviceName|your project ID|
|name|private network name|
|region|example: SBG1|
|vlandID|New VLAN ID, choose between 1 and 4000|

> [!primary]
>
> This step created the VLAN. 
> You can leave the "Region" field blank if you want it to be enabled for all regions
> The VLAN ID is mandatory. It will be used to establish communication between other OVH services which are compatible with vRack.
>

> [!api]
>
> @api {get} /cloud/project/{serviceName}/network/private
>

|Value|Description|
|---|---|
|serviceName|your project ID|


> [!primary]
>
> This call retrieves the networkId. This will be look like this: nom-vrack_vlanId.
>

> [!api]
>
> @api {post} /cloud/project/{serviceName}/network/private/{networkId}/subnet
>

|Value|Description|
|---|---|
|serviceName|Your project ID|
|networkId|Your network ID retrieved during the previous command|
|dhcp|true or false|
|end|last address for the subdomain|
|network|subdomain IP block|
|region|example : SBG1|
|start|first address of the subdomain|

> [!primary]
>
> This step creates the subnet per region. 
> You can enable the assigning of private IP addresses dynamically via DHCP.
> Make sure that you separate your IP addresses according to the different regions.
> 
> For example:
> 
> - From 192.168.0.2 to 192.168.0.254 for SBG1
> - From 192.168.1.2 to 192.168.1.254 for GRA1
>

To get the private IP address for your instance, you can use the call:

> [!api]
>
> @api {get} /cloud/project/{serviceName}/instance/{instanceId}
>


## With OVH APIv6

We will create a new instance connected to our private network. 

> [!api]
>
> @api {get} /cloud/project/{serviceName}/network/public
>

|Value|Description|
|---|---|
|serviceName|Your project ID|

This step retrieves the public network networkID in order to configure your instance.

> [!api]
>
> @api {get} /cloud/project/{serviceName}/network/private
>

|Value|Description|
|---|---|
|serviceName|Your project ID|

This step retrieved the networkID for your private network so it can be configured on your instance.

> [!api]
>
> @api {post} /cloud/project/{serviceName}/instance
>


|Value|Description|
|---|---|
|ip|not to be entered for the public network or if using DHCP|
|networkId|network ID|
|+|lets you add an additional interface|

In addition to classic settings to launch an instance, you can configure your instance network interfaces.
You cannot link an existing instance to the private network via the OVH APIv6 at this point in time, you will have to create a new one.


## With the OpenStack API

List the available networks:


```
admin@serveur-1:~$ nova net-list

+--------------------------------------+-------------------+------+
| ID | Label | CIDR |
+--------------------------------------+-------------------+------+
| 8d3e91fd-xxxx-xxxx-xxxx-4252de201489 | Ext-Net | None |
| b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 | private_network_1 | None |
+--------------------------------------+-------------------+------+
```



- Create a new instance with 2 interfaces:


```
admin@serveur-1:~$ nova boot --flavor vps-ssd-1 --image "Debian 8" --nic net-id=8d3e91fd-xxxx-xxxx-xxxx-4252de201489 --nic net-id=b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 --key_name SSH_KEY test_vrack
```


- Check your instance:



```
admin@serveur-1:~$ nova list
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| 0b4be30f-b21f-4cba-a51b-c2024ab20ae8 | test_vrack | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.48; private_network_1=192.168.0.5 |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
```



This interface therefore has two network interfaces:

- Public: 149.xxx.xxx.48
- Private: 192.168.0.5


With the OpenStack APIs, you can add the private network interface to an existing instance. 

Here is the procedure to follow:


```
admin@serveur-1:~$ nova interface-attach --net-id b19cb941-xxxx-xxxx-xxxx-581e8e7e4f54 Instance1
```



```
admin@serveur-1:~$ nova list
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
| 0952355f-cc8b-45b7-b011-d20415adc9f5 | Instance1 | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.83; private_network_1=192.168.0.6 |
| 0b4be30f-b21f-4cba-a51b-c2024ab20ae8 | test_vrack | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.48; private_network_1=192.168.0.5 |
+--------------------------------------+-------------------+--------+------------+-------------+--------------------------------------------------------+
```




## 
You can check that your 2 interfaces are on your instance using the following command:


```
root@test-vrack:~$ ip addr list
```


You will normally see three network interfaces:

- lo: Loopback
- eth0: your public interface
- eth1: your private interface


You then just have to configure your private IP:


```
root@test-vrack:~$ ip addr add 192.168.0.5/16 dev eth1
```


And then enable your network interface:


```
root@test-vrack:~$ ip link set eth1 up
```




## 

- [Configure user access to Horizon]({legacy}1773)

