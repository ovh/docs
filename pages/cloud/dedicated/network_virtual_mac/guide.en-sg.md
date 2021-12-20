---
title: Assigning a Virtual MAC to a Failover IP
slug: network-virtual-mac
excerpt: This guide will show you how to create a virtual MAC address and assign it to a failover IP address.
section: Network Management
---

**Last updated 16th December 2021**

## Objective

OVHcloud allows you to associate a virtual MAC address with an IP address, so that you can set up virtual machines with a bridge configuration on your server.

**This guide will show you how to create a virtual MAC address and assign it to a failover IP address.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-sg/bare-metal/) that supports [virtual MACs](https://docs.ovh.com/sg/en/dedicated/network-support-virtual-mac/)
- A [failover IP address](https://www.ovhcloud.com/en-sg/bare-metal/ip/){.external} or a failover IP block (RIPE)
- Access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg){.external}
- Your server must support virtual MACs. To determine this, consult [this guide](https://docs.ovh.com/sg/en/dedicated/network-support-virtual-mac/).


## Instructions

### Assign a MAC address

To assign a virtual MAC address to a failover IP, you first need to connect to your OVHcloud Control Panel.

Once connected, click the `Bare Metal Cloud`{.action} menu and then click the `IP`{.action} section on the left side of the page.

![IPFO](images/ipsection.png){.thumbnail}

Once you're in the IP section, locate your failover IP address (or block) in the list and then click the `...`{.action} button to bring up the list of options.

![IPFO](images/addvmac.png){.thumbnail}

When the 'Add a virtual MAC' box appears, select a type from the dropdown list, enter a virtual machine name, and then click `Confirm`{.action}.

> [!primary]
>
> **Type:** Refers to the virtual MAC address type ('VmWare' will be a MAC address made for the VmWare ESXi system, while 'OVHcloud' will be for any other type of virtualisation system).
>
> **Name of virtual machine:** Refers to the desired name for the virtual MAC address, in order to make it easy to identify this IP/MAC pair in the future.
>

![IPFO](images/virtual_mac_03.png){.thumbnail}


> [!primary]
>
> Do not forget to assign the virtual MAC address created in your virtual machine configuration.
> 

### Delete a MAC address

> [!warning]
>
> When a MAC address is deleted, it will not be recoverable.
> 

To remove a virtual MAC address associated with a failover IP, you must first connect to your [control panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg){.external}. Once connected, click the `Bare Metal Cloud`{.action} menu and then click the `IP`{.action} section on the left side of the page. Select the correct server, so that the failover IP (or IP block) attached to it appears.

Finally, click on the `...`{.action} button on the right, then click `Delete a Virtual MAC`{.action}.

## Go further

Join our community of users on <https://community.ovh.com/en/>
