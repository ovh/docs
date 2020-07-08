---
title: Add IP Block
slug: add-ip-block
excerpt: Order an IP block on your Private Cloud
legacy_guide_number: '7766457'
section: OVH Features
order: 01
---

**Last updated 8th July 2020**

## Objective

Un bloc IP peut vous servir à rendre vos services accessibles sur Internet. 

**Ce guide explique comment commander un bloc IP associé à votre Private Cloud.**

## Requirements

- a [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)

## Instructions

To order an additional IP block for your **Private Cloud**, head to your OVHcloud client area. In the `Server` section, click on `IP` in the left column and then click on `Order additional IPs`{.action}. Then select your **Private Cloud** from the drop-down menu before proceeding to the next step.

Several fields will be required to create your IP block

- IP Block Size (from /28 to /24)

> [!primary]
>
> As a reminder, here is an array of IPs in a block, and the number of IPs that can be used.
> 

|Block size|IP in block|IP usable in OVHcloud|
|:---:|:---:|:---:|
|28|16|11|
|27|32|27|
|26|64|59|
|25|128|123|
|24|256|251|

> [!primary]
>
> Feel free to consult our guide ["OVH Network plugin"](https://docs.ovh.com/gb/en/private-cloud/plugin-ovh-network/){.external-link} to find out which IPs are reserved for your block as well as their use.
>


- Country of IP block, important in some cases for the SEO of your services (an English-language website will have a better SEO in England if the IP is also English)
- Network name (Information visible in the whois of ip block).
- Number of clients estimated (How many end clients will be hosted on these IPs).
- Network description (Information visible in the whois of the ip block).
- Use (Using information (Web, SSL, Cloud...)).


> [!success]
>
> The activation fee for a block is 2€ HT/IP. For a block in '/28' with 16 IPs, you will have a purchase order of 32€HT to pay before delivery.
>  
> IP renewal fees are free of charge.
>

After confirming the last step, you get the order form for your IP block. If the payment is in accordance with your wishes, you only have to pay it with the payment methods offered at the bottom of the page in order for it to be delivered.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
