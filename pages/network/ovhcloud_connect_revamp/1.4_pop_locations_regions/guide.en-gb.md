---
title: 'OVHcloud Connect - PoPs and Regions'
excerpt: 'Understand how OCC works with PoPs and Regions, and find out which ones are the most suitable for your infrastructure'
updated: 2026-02-18
---

## Introduction

When setting up OVHcloud Connect, you choose one or more **Points of Presence (PoP)** as the hand-off point between your network or your provider's network, and OVHcloud. Each PoP is tied to a specific geographic zone; consequently, it can only access OVHcloud regions within that same zone.

This guide explains how OVHcloud PoPs and regions interact with OVHcloud Connect, and provides a framework for selecting the most suitable PoP for your specific infrastructure needs.

## Understanding Regions and PoPs

### Regions

OVHcloud organises its infrastructure into **regions** — geographical areas where data centres and services are hosted. Each region may contain one or more PoPs where OVHcloud Connect is available.

### Points of Presence (PoP)

OVHcloud PoPs are located inside major carrier-neutral datacenters managed by our partners. If you are ordering a **Direct** connection, you need to be present (or arrange a circuit) in the same datacenter to install a cross-connect.

If you are using a **Provider**, the provider handles the physical connectivity and may reach the PoP from a different facility.

> [!primary]
> OVHcloud regularly adds new locations. Always check the [OVHcloud Connect webpage](https://www.ovhcloud.com/en-gb/network/ovhcloud-connect/) for the most up-to-date list.
>

## How to choose a PoP

When selecting a PoP for your OVHcloud Connect service, please consider the following:

### 1. Proximity (latency)

Choose the PoP that is geographically closest to your infrastructure to minimise network delay. For example, if your data centre is in Paris, a French PoP will provide the lowest latency.

### 2. Provider availability

If you are using OVHcloud Connect Provider, verify that your chosen provider has a presence at the PoP. Not all providers are available at every PoP.

### 3. Redundancy

For high-availability architectures, select **two PoPs in different locations** so that a single site failure does not take down your connection. Follow one of the resilient architecture tutorials for details:
- [On-prem](../4.2_resilient/4.1.2_onprem_resilient/guide.en-gb.md)
- [WAN](../4.2_resilient/4.2.2_wan_resilient/guide.en-gb.md)
- [AWS](../4.2_resilient/4.3.2_aws_resilient/guide.en-gb.md)
- [Azure](../4.2_resilient/4.4.2_azure_resilient/guide.en-gb.md)
- [GCP](../4.2_resilient/4.5.2_gcp_resilient/guide.en-gb.md)

### 4. Regulatory / data residency requirements

Some industries or countries require data to stay within a specific geography. Choose a PoP and region that comply with your data residency obligations.

### 5. Target OVHcloud region

To ensure the best performance, your OVHcloud Connect service should terminate in the region where your OVHcloud workloads are running (or will run). Verify that the PoP serves the region you need.

## PoP and Region Mapping Tables

The following tables list the regions accessible from each PoP, the corresponding low-latency OVHcloud region, and the available OCC Direct bandwidth, by geographic zone:

> [!tabs]
> Europe
>>
>> | List of accessible regions |
>> | :--- |
>> | Germany - Limburg (`eu-west-lim`) |
>> | England - Erith (`eu-west-eri`) |
>> | France - Gravelines (`eu-west-gra`) |
>> | France - Paris (`eu-west-par`) |
>> | France - Roubaix (`eu-west-rbx`) |
>> | France - Strasbourg (`eu-west-sbg`) |
>> | Poland - Warsaw (`eu-central-waw`) |
>> 
>> PoP / Low-latency Region Mapping Table
>> 
>> | City | PoP | Low-latency OVHcloud Region | 1 Gbps | 10 Gbps | 100 Gbps |
>> | :--- | :--- | :--- | :--- | :--- | :--- |
>> | **Frankfurt** | Equinix - FR5 | Limburg (`eu-west-lim`) | X | X | X |
>> | **Lille** | ETIX - ETX2 | Roubaix (`eu-west-rbx`) | X | X | |
>> | **London** | Equinix - LD5 | Erith (`eu-west-eri`) | X | X | |
>> | **London** | Telehouse - West | Erith (`eu-west-eri`) | X | X | |
>> | **Madrid** | Digital Realty - MAD2 | - | X | X | |
>> | **Paris** | Equinix - PA3 | Paris (`eu-west-par`) | X | X | X |
>> | **Paris** | GlobalSwitch | Paris (`eu-west-par`) | X | X | |
>> | **Paris** | Telehouse - TH2 | Paris (`eu-west-par`) | X | X | X |
>> | **Warsaw** | Equinix - WA2 | Warsaw (`eu-central-waw`) | X | X | |
>>
> North America
>>
>> | List of accessible regions |
>> | :--- |
>> | Canada - Beauharnois (`ca-east-bhs`) |
>> | Canada - Toronto (`ca-east-tor`) |
>> 
>> PoP / Low-latency Region Mapping Table
>> 
>> | City | PoP | Low-latency OVHcloud Region | OCC Direct Bandwidth (Gbps) |
>> | :--- | :--- | :--- | :--- | :--- | :--- |
>> | **Montreal** | Cologix - MTL3 | Beauharnois (`ca-east-bhs`) | X | X | |
>> | **Toronto** | Equinix - TR1 | Toronto (`ca-east-tor`) | X | X | |
>>
> Asia-Pacific
>>
>> | List of accessible regions |
>> | :--- |
>> | Singapore - Singapore (`ap-southeast-sgp`) |
>> | India - Mumbai (`ap-south-mum`) |
>> 
>> PoP / Low-latency Region Mapping Table
>> 
>> | City | PoP | Low-latency OVHcloud Region | OCC Direct Bandwidth (Gbps) |
>> | :--- | :--- | :--- | :--- | :--- | :--- |
>> | **Mumbai** | Equinix - MB2 | Mumbai (`ap-south-mum`) | X | X | |
>> | **Singapore** | Equinix - SG1 | Singapore (`ap-southeast-sgp`) | X | X | |

## What's next?

- Understand [Multi-AZ](../1.5_multi_az/guide.en-gb.md) for resilient architectures
- Review [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md) for technical setup

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
