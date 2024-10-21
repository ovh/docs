---
title: Adding an IP block
excerpt: Find out how to order an IP block on your Private Cloud
updated: 2022-04-06
---

## Objective

An IP address block can be used to make your services available over the Internet.

**This guide explains how to order and migrate an IP block for your Private Cloud.**

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/asia/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia))

## Instructions

To order an additional IP block for your **Private Cloud**, log in to your OVHcloud Control Panel. In the `Hosted Private Cloud` section, click on `IP` in the left column and then click on `Order additional IPs`{.action}. Then select your **Private Cloud** from the drop-down menu before proceeding to the next step.

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
> Please consult our guide ["Using the OVHcloud Network plugin"](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/plugin_ovh_network) to find out which IP addresses are reserved in a block as well as their use.
>

- Country of IP block, important in some cases for the SEO of your services (an English-language website will have a better SEO in England if the IP is also English)
- Network name (information visible in the Whois of an IP block).
- Number of clients estimated (how many end clients will be hosted on these IPs).
- Network description (information visible in the Whois of an IP block).
- Use (information about the general usage (Web, SSL, Cloud...)).

> [!success]
>
> There is a one time setup fee for an IP block that will be due before delivery.
>

After confirming the last step, you can view the order form for your IP block. If the order is in accordance with your wishes, you only have to pay it with the payment methods offered at the bottom of the page in order for it to be delivered.

### Migrate an IP block between two Hosted Private Cloud services

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Migrating an IP block requires manually moving blocks through the OVHcloud APIv6.

Use the following API call:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

The fields must be completed as follows:

- ip: IP block with /mask
- nexthop "newPrimaryIp" (case sensitive)
- to: Destination Hosted Private Cloud in the form pcc-XXX-XXX-XXX-XXX

![nexthop field](images/move-api.png){.thumbnail}

The result will be in this form:

![nexthop field](images/api-result.png){.thumbnail}

If you need to detach the IP block, you can use the following API call to move the IP into the "IP parking" section:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/park
> 

> [!warning]
>
> This call cuts the network on VMs that use the IPs in question.
>

You can track the IP block movement from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external} in the `Hosted Private Cloud`{.action} part and then `Private Cloud`{.action}. Click on your Hosted Private Cloud service and then click the `Operations`{.action} tab.

The operation name is removeIpRipeBlock.

![operations manager](images/operations.png){.thumbnail}

The IP will then appear in the `IP parking`{.action}.

![IP parking](images/ip-parking.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
