---
title: 'Bare Metal 3-AZ Region - Service presentation'
excerpt: 'Discover Bare Metal 3-AZ service, offering unparalleled high availability and redundancy across three data centers'
updated: 2025-06-04
---

## Objective

OVHcloud offers its innovative Bare Metal service in the [3-AZ region](/links/bare-metal/regions), a significant development in the company's regionalization strategy. This service, available in the Paris metropolitan area, sets a new industry standard for reliability and performance in Bare Metal servers.

Bare Metal in the 3-AZ region caters to customers requiring high availability and redundancy in their business continuity plans. This service provides Bare Metal servers across three proximal data centers in Paris, connected by a low-latency network. It ensures enhanced security, improved performance, and uninterrupted functionality, even in the event of localized incidents.

> [!primary]
>
> **Important Notice - Evolution of Bare Metal 3-AZ Offering**
>
> Starting May 2025, the delivery model for Bare Metal servers in the Paris 3-AZ region is significantly evolving. The previous paradigm of mandatory delivery in clusters of 3 servers (one in each availability zone) will be discontinued.
>
> **Key changes:**
>
> - Customers will now be able to freely select the exact number of servers they require.
> - The distribution of servers across different availability zones (AZ) will be fully customizable.
> - No obligation to deploy in all three zones simultaneously.
>
> **Important:** The information presented in this guide, particularly concerning the mandatory cluster deployment and potentially the user experience reflecting this model, primarily applies to customers whose servers were delivered *before May 2025* under the previous cluster model. New deployments starting from May 2025 will benefit from the flexibility of the new model, and potentially an adapted interface experience. For any questions regarding this evolution or to adapt your existing infrastructure, please contact your account manager or OVHcloud support.
>

## Overview

### Purpose of the Service

The 3-AZ region's value lies in offering several identical servers distributed across three availability zones within the same region. This setup ensures high availability and data redundancy, maintaining operational continuity and reducing the risk of data loss. The strategic distribution of servers minimizes latency and boosts application performance.

### Regionalization at OVHcloud

OVHcloud's global presence includes several regions across the world, such as Europe, the US, Canada, and APAC. The introduction of the Region concept and support of Availability Zones is a strategic initiative to provide customers with optimal performance and resilience. The Paris region is the first to adopt the 3-AZ model.

### Region Selection Tips

For optimal performance, a region should be selected closest to its users. For global availability, services should be spread across multiple regions. The 3-AZ Region is ideal for customers seeking the highest resilience and should be used to build multi-AZ application designs.

In the [OVHcloud Control Panel](/links/manager), you can see your clusters in the list of `Dedicated servers`{.action} of the `Bare Metal Cloud`{.action} menu by switching to the tab `3-AZ clusters`{.action}.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters1.png){.thumbnail}

Click the cluster name in the table to see the details.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters2.png){.thumbnail}

Click the tab `Nodes`{.action} to open the server list of the cluster.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters3.png){.thumbnail}

Clicking on a server/node name in this list opens the `General information`{.action} tab of the server. You can find the details on this Control Panel section in our guide:

[How to get started with a dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

## Go further

Join our [community of users](/links/community).
