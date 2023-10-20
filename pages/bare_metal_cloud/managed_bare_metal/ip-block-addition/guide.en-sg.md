---
title: Adding an IP block
excerpt: Find out how to order an IP block on your Managed Bare Metal
updated: 2020-11-18
---

## Objective

An IP address block can be used to make your services available over the Internet.

**This guide explains how to order and migrate an IP block for your Managed Bare Metal.**

## Requirements

- a [Managed Bare Metal infrastructure](https://www.ovhcloud.com/en-sg/managed-bare-metal/)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

## Instructions

To order an additional IP block for your **Managed Bare Metal**, log in to your OVHcloud Control Panel. In the `Bare Metal Cloud` section, click on `IP` in the left column and then click on `Order additional IPs`{.action}. Then select your **Managed Bare Metal** from the drop-down menu before proceeding to the next step.

Several fields will be required to create your IP block:

- IP block size (from /28 to /24)

> [!primary]
>
> As a reminder, here is an array of IP addresses in a block, and the number of IPs that can be used:
> 

|Block size|IPs in block|IPs usable in OVHcloud|
|:---:|:---:|:---:|
|28|16|11|
|27|32|27|
|26|64|59|
|25|128|123|
|24|256|251|

> [!primary]
>
> Please consult our guide ["Using the OVHcloud Network plugin"](/pages/bare_metal_cloud/managed_bare_metal/plugin_ovh_network) to find out which IP addresses are reserved in a block as well as their use.
>

- Country of IP block, important in some cases for the SEO of your services (an English-language website will have a better SEO in England if the IP is also English)
- Network name (information visible in the Whois of an IP block).
- Number of clients estimated (how many end clients will be hosted on these IPs).
- Network description (information visible in the Whois of an IP block).
- Use (information about the general usage (Web, SSL, Cloud...)).

After confirming the last step, you can view the order form for your IP block. If the order is in accordance with your wishes, you only have to pay it with the payment methods offered at the bottom of the page in order for it to be delivered.

### Migrate an IP block between two Managed Bare Metal services

Migrating an IP block requires manually moving blocks through the OVHcloud APIv6.

Use the following API call:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

The fields must be completed as follows:

- ip: IP block with /mask
- nexthop "newPrimaryIp" (case sensitive)
- to: Destination Managed Bare Metal in the form pcc-XXX-XXX-XXX-XXX

![nexthop field](images/move-api.png){.thumbnail}

The result will be in this form:

![nexthop field](images/api-result.png){.thumbnail}

Then use this API call to move the IP addresses to "IP parking":

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/park
> 

> [!warning]
>
> This call cuts the network on VMs that use the IPs in question.
>

You can track the IP block movement from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg){.external} in the `Bare Metal Cloud`{.action} part and then `Managed Bare Metal`{.action}. Click on your Managed Bare Metal service and then click the `Operations`{.action} tab.

The operation name is removeIpRipeBlock.

![operations manager](images/operations.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
