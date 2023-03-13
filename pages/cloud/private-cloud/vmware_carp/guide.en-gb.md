---
title: 'Enabling promiscuous mode'
excerpt: 'Learn how to enable promiscuous mode'
slug: promiscuous-mode
section: 'VMware vSphere features'
order: 08
updated: 2023-03-13
---

**Last updated xx/xx/xxxx**

## Objective

Promiscuous mode removes any inbound filtering that the virtual machine network card can perform so that the guest operating system receives all observed traffic on the network. By default, the virtual machine network card cannot operate in promiscuous mode.

It may be necessary in some cases to enable promiscuous mode for the proper operation of certain HA protocols such as CARP.


## Requirements

- a [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/)
- a user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
 
## Instructions

A distinction should be made between two situations, depending on the Distributed Virtual Switch (DVS) involved, the solutions will be different:

- dvs public (name: pcc-xxx-xx-xxx-xx_DCxxx-dvs, vmnetwork or vxlan)

- dvs vrack (name: pcc-xxx-xx-xxx-xx_DCxxx-vrack, vlan vrack)

 
### DVS Public

Due to a recent change, customers are now autonomous to perform this action through our API. Here are all the API customers are now able to use:

- Enable Carp on Virtual Machine with the POST

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableCarp
>

- Disable Carp on Virtual Machine with POST

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableCarp
>

- On VM info, we can see if it's activated or not with the GET

Get this object properties: 
    
> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>


You can still use our manageCarpOnVm robot if needed (requires the role-pcc-client-information-admin). If you don't have the necessary role, please ask your Tech Lead.

You must indicate:

- the datacenter ID
- the mac adress of the interface on wich to enable promiscuous mode

### DVS vRack

In this case, the customer can do the manipulation directly from vSphere by following the procedure below.

If you want to test for the client, you need an "admin" support user (requires the role-pcc-client-information-admin).

 
Enabling promiscuous mode on a port in vSphere:

First of all you have to check that the DVS allows the possibility of having a different configuration on the port (by default it is the DVS one that is applied).

To do this, right click on the portgroup, click on `Edit Settings`{.action}, then on `Advanced`{.action} and check that the "Security Policy" line is set to "Allowed":

![security policy](images/Securitypolicy.png){.thumbnail}

You can then select the port where the VM is connected and click on the pencil at the top left:

![port](images/Port.png){.thumbnail}

You can then, in the "Security" section, check "Replace" and change the security policy to "Accept" for all three options, if it is not already the case:

![security policy](images/Securitypolicy.png){.thumbnail}

#### Enabling promiscuous mode on an entire portgroup in vSphere

This manipulation should never be done on a public DVS, only possible on the vrack DVS.

It is possible to do the modification directly on the portgroup, this will have the advantage of applying the configuration to all ports (and thus avoid having to do it at VM creation/restoration).

However, this can be a security risk, as promiscuous adapters have access to packets, even if some of those packets are only received by a specific network adapter. This means that an administrator or root user in a virtual machine can potentially see traffic destined for other host or guest operating systems.
 

It is therefore important to do so with full knowledge of the circumstances.
In this case, simply right-click on the portgroup in question, then click on `Change settings`{.action}. Then go to the `Security` section and change the security policy to `Accept` for all three options, if it is not already the case:

![security policy](images/Security.png){.thumbnail}

#### Enabling promiscuous mode on an entire portgroup in vSphere

This manipulation should never be done on a public DVS, only possible on the vrack DVS.

It is possible to do the modification directly on the portgroup, this will have the advantage of applying the configuration to all ports (and thus avoid having to do it at VM creation/restoration).

However, this can be a security risk, as promiscuous adapters have access to packets, even if some of those packets are only received by a specific network adapter. This means that an administrator or root user in a virtual machine can potentially see traffic destined for other host or guest operating systems.
 

It is therefore important to do so with full knowledge of the circumstances.
In this case, simply right-click on the portgroup in question, then click on `Change settings`{.action}. Then go to the `Security` section and change the security policy to `Accept` for all three options, if it is not already the case:

![port group](images/Portgroup.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.