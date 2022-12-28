---
title: How to determine if your dedicated server supports virtual MAC addresses
slug: network-support-virtual-mac
excerpt: Find out how to use the OVHcloud API to determine whether the virtual MAC feature is supported on a dedicated server 
section: Network management
---

**Last updated 9th December 2021**

## Objective

In order to use virtual MAC (vMAC) addresses on a dedicated server, you first need to make sure your server supports this feature.

Support for the vMAC function is a prerequisite for all actions concerning virtual MACs.

**This guide explains how to check in the OVHcloud API if your dedicated server supports the virtual MAC feature.**

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/) in your OVHcloud account
- Access to the OVHcloud [API](https://api.ovh.com/)

> [!primary]
> If you are not familiar with using the OVHcloud API, please refer to our guide on [Getting started with the OVHcloud API](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/) .

## Instructions

Open the following API endpoint in the API console:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/network
>

Enter the internal server name into the `serviceName` field, then click `Execute`{.action}.

![SVMAC](images/support_virtual_mac_02.png){.thumbnail}

The result will show a "vmac / supported" entry which can be "true" or "false" (boolean value).

![SVMAC](images/support_virtual_mac_04.png){.thumbnail}

> [!primary]
> **Interpretation of the result**
>
> - **false**: You cannot use the virtual MAC feature on this server.
>
> - **true**: You can use the virtual MAC feature on this server.
>


## Go further

[First Steps with the OVHcloud API](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/)

Join our community of users on <https://community.ovh.com/en/>.