---
title: 'Configuring vRack on the Public Cloud'
excerpt: 'Find out how to configure the vRack on the Public Cloud'
slug: public-cloud-vrack
section: vRack
order: 1
---

**Last updated 22nd July 2020**

## Objective

The [vRack]({ovh_www}/solutions/vrack/) is a private network that allows you to configure addressing between multiple compatible  OVHcloud services. It also allows you to add [Public Cloud instances]({ovh_www}/public-cloud/) to your private network to create an infrastructure of physical and virtual resources.

**The purpose of this guide is to help you configure your Public Cloud instances within your vRack.**

## Requirements

- Have a Public Cloud project
- Be connected to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}
- Create an OpenStack user (optional)
- Basic networking knowledge

## Understanding interfaces

Whether you want to create your vRack or add an instance within this network, you can use the OVHcloud client space, the OVHcloud APIv6, the OpenStack APIs, or the Horizon interface.

Depending on your technical profile and your needs, you will have to choose which interface or method to use. For each action, we will propose you the various possible steps.

**Here is a quick description of the possible actions according to the chosen method/interface:**

### OVHcloud Client Space

The [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager) is a completely visual interface, making it an ideal interface if you have only one vLan to manage. You will not be able to customize the private IP range that will only be in 10.x.x.x/16.

The vLan will be deployed by default to all zones. You will only have the option of activating the gateways or not.

You can also manage billing for your services through your OVHcloud Control Panel.

### Horizon Interface

This is a interface not apart of OVHcloud, [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} is the original implementation of the OpenStack dashboard, which provides a web user interface to OpenStack services, including Nova, Swift, Keystone, etc...

This complete and technical interface allows you to manage almost all Openstack actions. This will be one of the necessary interfaces if you want to manage more than two vLan, add private network interfaces to your instances, manage custom images, etc...

See the guide [Go to the Horizon interface](../horizon/) to familiarize yourself with Horizon.

> [!primary]
> Horizon working by zone, remeber to choose your geographic working area at the top left of your interface (GRA5, SBG3, BHS1, etc...)
>

### APIv6 OVHcloud

Each action you take in the OVHcloud client space calls on the [OVHcloud API](https://ca.api.ovh.com/).
You can even go further in APIs than in your client space.

The interface is less visual than the OVHcloud client space but will allow you to perform a lot of actions. You can manage and customize your vLan, add interfaces to your instances, or create highly customized servers.

You may need to retrieve multiple information before using a specific API.

You can simply access APIs from [our web page](https://ca.api.ovh.com/), but also create your PHP or Python scripts to use them.

This way, you can freely automate basic tasks with scripts, optimize your own functions, etc...

See the guide [First Steps with OVHcloud APIs](../../api/first-steps-with-ovh-api/s/) to learn how to use the OVHcloud API.

### OpenStack API

It is possible to manage Public Cloud Services using Linux or Windows command lines after downloading and installing OpenStack tools.

This method requires a good knowledge of Linux or Windows to take advantage of it, but it allows you to take advantage of all the power of OpenStack by doing so.

Depending on the layer you want to manage, you will need to use the Nova (Compute), Neutron (network), Glance (Image) or Swift (Object Storage) client. The latest addition to the family, the Openstack client, allows you to manage almost all Openstack layers directly.

With the OpenStack API, you can also easily automate this management through your scripts.

To get familiar with the OpenStack API, first see the following guides:

- [Prepare the environment to use the OpenStack API](../prepare_the_environment_for_using_the_openstack_api/)
- [Setting OpenStack environment variables](../set-openstack-environment-variables/)

You will then be able to use the APIs dedicated to OpenStack, depending on your needs:

- Nova (compute)
- Glance (image)
- Cinder (image)
- Neutron (network)

> [!primary]
>In some cases, it will be easier to use OpenStack APIs and in others, Nova APIs, Neutron APIs, etc...
>
> Also, some features may be missing from the OpenStack API depending on the version of your client and operating system.
As part of this guide, the choice has been made to offer you the simplest and most intuitive alternatives.
You can consult the [OpenStack official documentation](https://docs.openstack.org//){.external} at any time if you wish to go further in their use.

## Instructions

### Step 1: Activate and manage a vRack

First of all, you need to create a vRack.

This product is free and it only takes a few minutes to make it available. However, it requires the creation and validation of an order form.

Once the vRack is activated, you will find this service under the name "pn-xxxxxx".

#### From OVHcloud Client Space

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}, go to the `Public Cloud' section{.action} and then select the Public Cloud project of your choice at the top left.

![project selection](images/vrack1.png){.thumbnail}

Then click `Private network'{.action} in the left side menu.

![Private Network](images/vrack2.png){.thumbnail}

Click the `To start, create a vRack`{.action} button. You will then have to choose to create a new vRack or to use an existing vRack. In our example, we will create a new vRack. Once you have made your choice, click `Create`{.action}.

![vRack creation](images/vrack3.png){.thumbnail}

To continue configuring the vRack from the OVHcloud client space, continue reading this guide from [Create a vLan in the vRack from the OVHcloud client space](./#from-client-space-ovhcloud_2)

#### From the OVHcloud API

To enable and manage a vRack from the OVHcloud APIv6, click [here](../public-cloud-vrack-apiv6/) to consult the[method-specific guide.

### Step 2: Create a vLan in the vRack

It is necessary to create a vLan (or virtual local area network) so that the vRack instances can communicate with each other.

On the Public Cloud, you can create up to 4,000 vLan within a single vRack. This means that you can use each private IP address up to 4,000 times.
Thus, for example, IP 192.168.0.10 of vLan 2 is different from IP 192.168.0.10 of vLan 42.

This can be useful for segmenting your vRack between multiple virtual networks.

From the OVHcloud Control Panel, you can assign the vLan of your choice, but you won't be able to customize the IP range. The vRack will be active in all zones.

From the OVHcloud API, you can customize all settings: IP range (e.g. 10.0.0.0/16), deployment zone, DCHP, Gateway...

> [!primary]
> On dedicated servers, by default, you are using vLan0. The  OpenStack infrastructure requires that you  to specify your vLan number directly at the infrastructure level.
>
> Unlike dedicated servers, it is not necessary to make tagged vLan directly on the instance.
>
> For more information about vRack vLan management for dedicated servers, see this guide: [Create multiple VLANs in vRack](../../dedicated/multiple-vlans/)

> [!warning]
> Because vRack is a managed infrastructure at the OVHcloud level, you can only administer it through the OVHcloud client space and the OVHcloud API.
>
Since OpenStack is not located at the same level of the infrastructure, you will not be able to customize vLan through the Horizon interface or the OpenStack APIs.
>

#### Create a vLan from the OVHcloud client space

Once the vRack is created, click `Private network'{.action} again on the left side menu.

![VLAN creation](images/vrack4.png){.thumbnail}

Now click `Create Private Network'{.action}. The following page will allow you to customize multiple settings.

![add private network](images/vrack5.png){.thumbnail}

If you select the `Set VLAN' check box, you will need to choose a vLan number from 2 to 4000.

If you do not check the `Set VLAN' check box, you will be in vLan 0 by default.

If you need to have dedicated OVHcloud servers communicate with tagged vLan, see the following guide: [Create multiple VLANs in the vRack](../../dedicated/multiple-vlans/).

The default DHCP range is 10.0.0.0/16. To change this IP range, you must use the OVHcloud API.

Validate the different regions you want, enter a name for your private network, and then click `Create`{.action} to start creating it.

> [!primary]
> Creating the private network can take several minutes.
>

#### Create a vLan from the OVHcloud APIv6

To create a vLan from the OVHcloud APIv6, click [here](../public-cloud-vrack-apiv6/) to view the specific guide.


### Step 3: Add an instance to the vRack

Two situations may arise:

- The instance does not exist yet.
- The instance already exists and you must add it to the vRack.

#### Cases of a new instance

##### **From the OVHcloud Control Panel** 

See the guide [Creating your first Public Cloud instance](../public-cloud-first-steps/). When creating an instance, you can specify, in Step 4, a private network to integrate your instance into. Choose your previously created vRack from the drop-down menu.

![attach new instance](images/vrack6.png){.thumbnail}

> [!warning]
> You can connect your instance to only one vRack from the OVHcloud client space.
> To add several different interfaces, you will need to go through the OpenStack or Horizon APIs.
>

##### **From the OVHcloud API**

Click [here](../public-cloud-vrack-apiv6/) to consult the specific guide.

###### **From the  OpenStack** API

To use the OpenStack APIs, if you have not already done so, consider preparing your working environment as indicated in the [first part of this guide](./#api-openstack).

In order to create an instance directly in the vRack, you will need to do this.

###### Obtaining the required information

Identifying public and private networks:

openstack network list

+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVlan_0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

or

```bash
nova net-list

+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42 | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MtVlan_0  | None |
+--------------------------------------+------------+------+
```

> [!primary]
> You will need to note the network IDs of interest to you:
> ExtNet to have a public IP
> One of the vLan(s) needed for your configuration

Also remember to note the following information, as indicated in the [Nova API User's Guide](../starting-with-nova/):

- ID or name of OpenStack SSH key
- Instance Type ID (flavor)
- ID of the desired image (OS, snapshot...)

###### Instance Deployment

With previously obtained information, an instance can be created by including it directly in the vRack:

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [name-of-instance]

Ex :
nova boot --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_vLan] name_of_instance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Key Name]                                      |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                  |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```
or

```bash
openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance_name]

Ex :
openstack server create --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_vLan] instance_name

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Nom de la clé]                                      |
| metadata                             | {}                                                   |
| name                                 | [Nom de l'instance]                                  |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

You can set the IP address of the instance of your vRack interface at the OpenStack level.

To do this, you can add a simple argument to the function '—nic':

—nic net-id=[ID-Network],v4-fixed-ip=[IP_fix_vRack]

Example:

—nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42

####### Verifying the Instance

After a few moments you can check the list of existing instances to find the server you created:

+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| ID                                   |       Name          | Status | Networks                                         |     Image Name     |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [instance_name] | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack] | [instance_name]|
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
```

```bash
nova list
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| ID                                   | Name               | Status | Task State | Power State | Networks                                         |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [instance_name]| ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack] |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
```

#### Cases of an already existing instance

The OVHcloud Control Panel allows you to attach an instance to a private network but does not provide advanced configuration of network interfaces. If you want to further customize these, you will need to manage them either from OVHcloud APIv6, OpenStack APIs or Horizon.

The action will be to simply add a new network interface to your server, in addition to the existing one.

So, for example, if you have a eth0 public interface, you will also have an eth1 interface.

> [!warning]
> The configuration of this new interface is rarely automatic.
> You will need to configure it in DHCP or Fixed IP depending on your infrastructure.
>


##### **From OVHcloud** Client Space

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}, go to the `Public Cloud' section{.action} and then select the relevant Public Cloud project in the top left.

Then click `Instances`{.action} in the left side menu. Then click the button `...`{.action} to the right of the instance concerned and then to `Instance Detail`{.action}.

![detail instance](images/vrack7.png){.thumbnail}

The dashboard of your instance is presented to you. Click the button `...`{.action} to the right of "Private Network(s)" and then on `Attach a network`{.action}.

![attach network](images/vrack8.png){.thumbnail}

In the pop-up that appears, select the private network to attach to your instance and click `Attach`{.action}.

![attach network](images/vrack9.png){.thumbnail}

##### **Managing Network Interfaces from OVHcloud APIv6**

Click [here](../public-cloud-vrack-apiv6 to consult the specific guide

##### **Managing Network Interfaces from OpenStack Horizon**

Log in to the [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} interface using the method specified in the [first part of this guide](./#interface-horizon).

Select your regiona:

![Horizon connection](images/horizon1.png){.thumbnail}

Then go to 'Compute', then `Instances':

![Horizon compute instances](images/horizon2.png){.thumbnail}

###### Add a private interface

To add an interface, in the "Actions" column, click the arrow to access the possible actions on the instance. Then click `Attach Interface`{.action}:

![Horizon attach interface](images/horizon3.png{.thumbnail}

Select your interface and validate:

![Horizon attach interface](images/horizon4.png{.thumbnail}

> [!primary]
> Your OVHcloud instance will have a new network interface in addition to the public interface (Ext-net).
><br>You can see in the instance summary the private IP address automatically assigned to your interface.
><br>It is your responsibility to use it by configuring your interface through DHCP or by using your own IP through a static IP configuration.
>

###### Deleting a Private Interface

> [!warning]
> Removing an interface is permanent.
>
>In case you remove the "Ext-Net" interface (public IP), this address would be released and recycled. So you couldn't reassign it to yourself.
>This action is only to be performed if you want to isolate your server in the vRack (Ext-Net interface) or exit it from a vLan.
>

To remove an interface, in the "Actions" column, click the arrow to access the actions that can be taken on the instance. Then click `Detach Interface`{.action}:

![Horizon detach interface](images/horizon5.png{.thumbnail}

Select the interface you want to remove and validate:

![Horizon detach interface](images/horizon6.png{.thumbnail}

##### **Managing Network Interfaces from OpenStack APIs**

To use the OpenStack APIs, if you have not already done so, consider preparing your working environment as indicated in the [first part of this guide](./#api-openstack).

In order to integrate an existing instance into the vRack, you will need to do this.

####### Retrieving required information

Identify your instances:

```bash
openstack server list

+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| ID                                   | Name         | Status | Networks                                                               | Image Name |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124 | Debian 9   |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
```

or

```bash
nova list

+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MyVrack=192.168.0.124 |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
```
Identifying public et private networks :

```bash
openstack network list

+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVlan-0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

or

```bash

nova net-list

+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42 | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVlan-0  | None |
+--------------------------------------+------------+------+
```

> [!primary]
> You will need to copy the ID of the networks you need to manager:
> - Ext-Net for the public IP
> - One or more of the vLans needed for your configuration
>

###### Adding a private interface

To attach a new interface, you can perform the following command:

```bash
nova interface-attach --net-id <ID-vLan> <ID-instance>
```

For example:

```bash
nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
```

You can verify that the action has been taken into account:

```bash
nova show <ID-instance>

+--------------------------------------+----------------------------------------------------------+
| Property                             | Value                                                    |
+--------------------------------------+----------------------------------------------------------+
| Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => Your public IP
| MyVLAN-42 network                   | 192.168.0.x                                              | => Your Private IP
[...]
```

or

```bash
openstack server show <ID-instance>
+--------------------------------------+-------------------------------------------------------------------------+
| Field                                | Value                                                                   |
+--------------------------------------+-------------------------------------------------------------------------+
[...]
| addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MyVLAN-42=192.168.0.x  | => Your public IP ; Your private IP
[...]
```

###### Deleting an Interface

> [!warning]
> Removing an interface is permanent.
>
>In case you remove the "Ext-Net" interface (public IP), this  address would be released and recycled. So you couldn't reassign it to yourself.
><br>This action is only to be performed if you want to isolate your server in the vRack (Ext-Net interface) or exit it from a vLan.
>

In order to detach an interface, you will first need to identify the Neutron port that has been created.

To do this, you can use the following commands:

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

or

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Once the port to remove is identified, you can perform the following command:

```bash
nova interface-detach <ID_instance> <port_id>
```

For example :

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

## Go further


Join our community of users on <https://community.ovh.com/en/>.
