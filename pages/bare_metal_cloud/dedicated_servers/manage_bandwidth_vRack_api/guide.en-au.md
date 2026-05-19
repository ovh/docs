---
title: "Manage vRack Private Bandwidth via the OVHcloud API"
excerpt: "Upgrade or downgrade the private vRack bandwidth on your dedicated server using the OVHcloud API."
updated: 2025-01-20
---

## Objective

With the private network, compatible dedicated servers benefit from a guaranteed minimum bandwidth of 1 Gbps. In the event of increased activity, this bandwidth can be increased on compatible servers.

**In this guide, we explain how you can easily increase or decrease the private bandwidth of a dedicated server.**

## Requirements

- A [vRack](/links/network/vrack) service activated in your account
- A [Dedicated Server](/links/bare-metal/bare-metal) compatible with the vRack
- Access to the [OVHcloud API](/pages/manage_and_operate/api/first-steps)

> [!warning]
> Please note that this option is not available on dedicated servers located in the APAC (Asia-Pacific) region, which come with an unmetered 25Gbit/s private bandwidth.
> 

## Instructions

### Find available services

Use the following API call to list all the available services for upgrade (or downgrade) and verify that the service you wish to upgrade/downgrade is listed:

> [!api]
>
> @api {v1} /order GET /order/upgrade/baremetalPrivateBandwidth
>

![API call listing available private bandwidth services](images/bandwidth_01.png){.thumbnail}

### Find the plan code

List available offers and find the **planCode** of your choice with the API call below:

> [!api]
>
> @api {v1} /order GET /order/upgrade/baremetalPrivateBandwidth/{serviceName}
>

Enter the variables:

- serviceName: the name of your dedicated server, for example `ns1234567.ip-203.0.113.eu`

![API call to list available vRack bandwidth plan codes](images/private-bandwidth-1.png){.thumbnail}

The `RESPONSE` field should display information similar to the following:

![API response showing available vRack bandwidth plan codes](images/private-bandwidth-2.png){.thumbnail}

### Review your order

Use the following API call for a preview of your order, including pricing:

> [!api]
>
> @api {v1} /order GET /order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}
>

Enter the variables:

- planCode: the reference retrieved in the previous step
- serviceName: the name of your dedicated server
- quantity: 1

![API call to preview vRack bandwidth order with pricing](images/private-bandwidth-3.png){.thumbnail}

The `RESPONSE` field should display information similar to the following:

![API response with vRack bandwidth order pricing details](images/private-bandwidth-4.png){.thumbnail}

### Submit your order

To officially submit the order, use the following API call:

> [!api]
>
> @api {v1} /order POST /order/upgrade/baremetalPrivateBandwidth/{serviceName}/{planCode}
>

![API call to submit the vRack private bandwidth order](images/private-bandwidth-5.png){.thumbnail}

The order will be processed once you have clicked `Execute`{.action}. The amount displayed corresponds to your option’s first billing month, calculated on a pro rata basis for the current month.

## Go further

[Managing Dedicated Server Bandwidth via the OVHcloud API](/pages/bare_metal_cloud/dedicated_servers/manage_bandwidth_api)

[Configuring the vRack on your Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

Join our [community of users](/links/community).
