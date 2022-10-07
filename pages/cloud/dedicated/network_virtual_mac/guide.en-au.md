---
title: Assigning a Virtual MAC to an Additional IP
slug: network-virtual-mac
excerpt: This guide will show you how to create a virtual MAC address and assign it to an Additional IP address.
section: Network Management
---

**Last updated 26th July 2022**

## Objective

OVHcloud allows you to associate a virtual MAC address with an IP address, so that you can set up virtual machines with a bridge configuration on your server.

**This guide will show you how to create a virtual MAC address and assign it to an Additional IP address.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-au/bare-metal/) that supports [virtual MACs](https://docs.ovh.com/au/en/dedicated/network-support-virtual-mac/)
- An [Additional IP address](https://www.ovhcloud.com/en-au/bare-metal/ip/){.external} or an Additional IP block (RIPE)
- Access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au){.external} or to the [OVHcloud API](https://ca.api.ovh.com/console/).
- Your server must support virtual MACs. To determine this, consult [this guide](https://docs.ovh.com/au/en/dedicated/network-support-virtual-mac/).

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-au/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-au/compare/) for more information.

> [!primary]
> If you are not familiar with using the OVHcloud API, please refer to our guide on [First steps with the OVHcloud APIs](https://docs.ovh.com/au/en/api/first-steps-with-ovh-api/).

## Instructions

> [!warning]
>
> If an IP block has been moved to the vRack, it is no longer assigned to a physical server, as such, you cannot assign a virtual MAC address to any IP.
>

#### Via the OVHcloud Control Panel

To assign a virtual MAC address to an Additional IP, you first need to connect to your OVHcloud Control Panel. Next, go to the `Bare Metal Cloud`{.action} section and open the `IP`{.action} menu.

![IP](images/manageIPOVHcloud.png){.thumbnail}

Once you're in the IP section, locate your Additional IP address (or block) in the list and then click the `...`{.action} button to bring up the list of options.

![IP](images/addvmac.png){.thumbnail}

When the 'Add a virtual MAC' box appears, select a type from the dropdown list, enter a virtual machine name, and then click `Confirm`{.action}.

> [!primary]
>
> **Type:** Refers to the virtual MAC address type ('VmWare' will be a MAC address made for the VmWare ESXi system, while 'ovh' will be for any other type of virtualisation system).
>
> **Name of virtual machine:** Refers to the desired name for the virtual MAC address, in order to make it easy to identify this IP/MAC pair in the future.
>

![IP](images/addvmac2.png){.thumbnail}


> [!primary]
>
> Do not forget to assign the virtual MAC address created in your virtual machine configuration.
>

#### Via the OVHcloud API

Use the following API call:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}

### Delete a MAC address

> [!warning]
>
> When a MAC address is deleted, it will not be recoverable.
> 

#### Via the OVHcloud Control Panel

To remove a virtual MAC address associated with an Additional IP, you must first connect to your [control panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au){.external}. Once connected, go to the `Bare Metal Cloud`{.action} section and open the `IP`{.action} menu. Select the correct server, so that the Additional IP (or IP block) attached to it appears.

Finally, click on the `...`{.action} button on the right, then click `Delete a Virtual MAC`{.action}.

#### Via the OVHcloud API

Use the following API call:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
