---
title: Adding an IP block
excerpt: Find out how to order an IP block for a Hosted Private Cloud project
updated: 2022-04-06
---

## Objective

IP blocks can be used to make your services accessible online. 

**This guide will explain how to order, add and migrate an IP block linked to your Hosted Private Cloud.**

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))

## Instructions

### Order an IP block

To order an IP block for your **Hosted Private Cloud**, go to the OVHcloud Control Panel. In the `Hosted Private Cloud` section, click on the `IP` section in the left-hand column, then click `Order additional IP addresses`{.action}. Then select your **Hosted Private Cloud** in the dropdown menu before moving on to the next step.

You will need to fill in several fields in order to create your IP block.

- Size of IP block (from /28 to /24)

> [!primary]
>
> As a reminder, here is a table listing the number of IPs present in a block, and the number of usable IPs.
> 

|Block size|IPs in the block|IPs usable with OVHcloud|
|:---:|:---:|:---:|
|28|16|11|
|27|32|27|
|26|64|59|
|25|128|123|
|24|256|251|

> [!primary]
>
> Please feel free to refer to our guide on the [OVHcloud Network plugin](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/plugin_ovh_network){.external-link} to find out which IPs are reserved for your block, as well as how they are used.
>

- The country an IP block is hosted in is important in some cases, for your services’ SEO ranking (a website based in France will have a higher SEO ranking in France if the IP address is French, too).
- Network name (information visible in the WHOIS profile for the IP block).
- Estimated number of customers (how many end-users or customers will be hosted on these IPs).
- Network description (information visible in the WHOIS profile for the IP block).
- Usage (information on the usage (web, SSL, cloud, etc.)).

> [!success]
>
> There is a one time setup fee for an IP block that will be due before delivery.
>

Once you have confirmed the final step, you will receive the purchase order for your IP block. If everything looks correct in the purchase order, you will simply need to pay the total using one of the payment methods listed at the bottom of the page, and your order will then be delivered.

### Migrate an IP block between two Hosted Private Cloud solutions

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To migrate an IP block, you will need to move the blocks manually via the OVHcloud APIv6.

Use the following API call:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

You will need to fill in the fields as follows:

- ip: IP block with the /mask
- nexthop “newPrimaryIp” (case-sensitive)
- to: Target Hosted Private Cloud in the following form: pcc-XXX-XXX-XXX-XXX

![nexthop field](images/move-api.png){.thumbnail}

The result should look like this:

![nexthop field](images/api-result.png){.thumbnail}

If you need to detach the IP block, you can use the following API call to move the IP into the "IP parking" section:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/park
> 

> [!warning]
>
> This call cuts the network on the VMs that use the IPs concerned.
>

You can track the movement of your IP block via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} in the `Hosted Private Cloud`{.action} section, then `Private Cloud`{.action}. Click on your Hosted Private Cloud service, then on the `Operations`{.action} tab.

The operation reference is “removeIpRipeBlock”.

![operations manager](images/operations.png){.thumbnail}

The IP will then appear in the `IP parking`{.action}.

![IP parking](images/ip-parking.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
