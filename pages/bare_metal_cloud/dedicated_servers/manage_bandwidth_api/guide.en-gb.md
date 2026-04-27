---
title: "Manage Dedicated Server Bandwidth via the OVHcloud API"
excerpt: "Upgrade or downgrade the public bandwidth allocation on your dedicated server using the OVHcloud API."
updated: 2025-01-20
---

## Objective

Each of our dedicated servers includes a minimum public bandwidth of 500Mbps. If you have specific download or mass distribution requirements, such as software updates, you can upgrade the bandwidth. And if you need less bandwidth, you can also downgrade to a lower bandwidth.

**In this guide, we explain how you can easily upgrade or downgrade the bandwidth of a dedicated server.**

> [!warning]
> Please note that this option is available on most dedicated servers, but not all. Although our servers come with a minimum public bandwidth of 500Mbps, the public bandwidth upgrade option is not available on all dedicated server ranges.
>

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) in your OVHcloud account
- Access to the [OVHcloud API](/pages/manage_and_operate/api/first-steps)

## Instructions

### Find available services

Use the following API call to list all the available services for upgrade (or downgrade) and verify that the service you wish to upgrade/downgrade is listed:

> [!api]
>
> @api {v1} /order GET /order/upgrade/baremetalPublicBandwidth
>

![API call listing available public bandwidth services](images/bandwidth_01.png){.thumbnail}

### Find the plan code

List available offers and find the **planCode** of your choice with the API call below:

> [!api]
>
> @api {v1} /order GET /order/upgrade/baremetalPublicBandwidth/{serviceName}
>

Enter the variables:

- serviceName: the name of your dedicated server, for example `ns1234567.ip-203.0.113.eu`

![API call to list available bandwidth plan codes](images/bandwidth_02.png){.thumbnail}

The `RESPONSE` field should display information similar to the following:

![API response showing available bandwidth plan codes](images/bandwidth_02_1.png){.thumbnail}

### Review your order

Use the following API call for a preview of your order, including pricing:

> [!api]
>
> @api {v1} /order GET /order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}
>

Enter the variables:

- planCode: the reference retrieved in the previous step
- serviceName: the name of your dedicated server
- quantity: 1

![API call to preview the bandwidth order with pricing](images/bandwidth_03.png){.thumbnail}

The `RESPONSE` field should display information similar to the following:

![API response with bandwidth order pricing details](images/bandwidth_03_1.png){.thumbnail}

### Submit your order

To officially submit the order, use the following API call:

> [!api]
>
> @api {v1} /order POST /order/upgrade/baremetalPublicBandwidth/{serviceName}/{planCode}
>

![API call to submit the public bandwidth order](images/bandwidth_4.png){.thumbnail}

The order will be processed once you have clicked `Execute`{.action}. The amount displayed corresponds to your option’s first billing month, calculated on a pro rata basis for the current month.

## Go further

[Managing vRack Private Bandwidth via the OVHcloud API](/pages/bare_metal_cloud/dedicated_servers/manage_bandwidth_vRack_api)

[How to get started with a Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

Join our [community of users](/links/community).
