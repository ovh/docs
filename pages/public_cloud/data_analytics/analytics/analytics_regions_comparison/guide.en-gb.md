---
title: "Comparison of Analytics Engines Deployment Modes - Understanding 3-AZ / 1-AZ"
excerpt: "Explore OVHcloud's Public Cloud Analytics deployment modes"
updated: 2025-06-11
---

## Objective

OVHcloud offers two deployment modes for its [Analytics](/links/public-cloud/analytics) service, each tailored to specific needs regarding resilience, availability, performance, and latency. This document provides a detailed explanation of the characteristics of each deployment mode, followed by a comprehensive comparison to help users choose the best option for their requirements.

## Concepts

OVHcloud managed Analytics services offer two main deployment modes, each optimized for specific use cases and offering various levels of resilience and failover:

1. **1-AZ Region**: for standard Analytics workloads, offering basic resilience with optimized cost.
2. **3-AZ Region**: suitable for highly availability Analytics workloads with low RTO/RPO and resilience to availability zone outage.

## Deployment modes

> [!primary]
>
> The following information pertains to the different deployment modes available in OVHcloud’s Analytics services. Select the mode that best suits your needs based on resilience, availability, and performance.

### 1-AZ Region

A 1-AZ Region consists of a **single availability zone covering multiple data centers within the same geographical region**. When a multi-node Analytics service is deployed, this single AZ setup offers resilience against node and disk failures but may be vulnerable to a complete OpenStack region outage. Note that in a 1-AZ region, the Analytics service is located in a specific OpenStack region that spans over multiple data centers. The nodes of a multi-node Analytics service are scattered in different hosts that **may be** located in different data centers. If an outage occurs in a specific data center hosting one or multiple nodes of the Analytics service, access to data could be impacted, even if other data centers in the zone remain operational.

#### Characteristics

- **Cost-Effectiveness:** Deploying in a 1-AZ region is generally more affordable, making it suitable for development, testing, and non-critical workloads where cost considerations are paramount.
- **Host antiaffinity:** The nodes of a multi-node Analytics service are deployed in different physical hosts offering resilience to host outage.

#### Limitations

- **Single Point of Failure:** In a 1-AZ region, the Analytics service nodes **may be** deployed within a single data center. If this data center experiences an outage, access to your Analytics service could be impacted, even if other data centers within the same availability zone remain operational.

<a name="3azregion"></a>

### 3-AZ Region

3-AZ Regions consist of **three independent availability zones**, each isolated in terms of power, cooling, and network systems, providing true fault isolation. This architecture ensures **service availability** even if an entire availability zone experiences an outage.

#### Characteristics

- **High Availability:** Multi-node Analytics service is deployed across three independent availability zones, ensuring service continuity even if one zone experiences an outage.
- **Low Latency:** The architecture offers ultra-low latency between availability zones, ensuring performance of Analytics operations accross all the nodes of the cluster.

#### Ideal Use Cases

3-AZ Regions are particularly suited to mission-critical and availability-sensitive applications, where data governance requires continuous availability. This includes sectors such as e-commerce, healthcare platforms, financial services or live streaming applications.

## Go Further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case.

Join our [community of users](/links/community) and visit our [Discord channel](https://discord.gg/ovhcloud).