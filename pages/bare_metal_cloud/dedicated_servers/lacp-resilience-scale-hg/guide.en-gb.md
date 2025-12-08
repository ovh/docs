---
title: Improving Network Resilience on Bare Metal servers
excerpt: Discover how to reinforce the resilience of public and private interfaces on your OVHcloud Bare Metal servers with the new network aggregation architecture
updated: 2025-10-28
---

> [!primary]
>
> This document is related to a deployment planned for **November 25, 2025**, which will change the way link aggregation (LACP) functions within OVHcloud infrastructures.
> OVHcloud customers affected by these changes will also receive a communication by e-mail.

## Objective

This guide presents the new network aggregation architecture implemented on OVHcloud Bare Metal servers. This evolution aims to strengthen fault tolerance and improve service continuity for your critical environments.

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) with 4 network interfaces (High Grade & SCALE ranges).
- Link aggregation (LACP) configured on its public or private interfaces (excluding OLA).

## Instructions

### What's changing

Until now, the aggregation (LACP) of network interfaces was performed on ports belonging to the **same Network Interface Card (NIC)**. This configuration already ensured redundancy in case of a ToR (Top-of-Rack) switch failure but did not cover the risk of a NIC failure.

From now on:

- Logical aggregations will be spread across **two distinct network cards** (with no physical cabling modification).
- Existing aggregations **are not modified**.

![Before/after resilience comparison](images/resilience_comparison.svg){.thumbnail}

If you do not use LACP link aggregation on your server, **no action is required** and **no change will be visible for your services**.

### How to apply the change on your servers

To activate the new rule, you need to [switch to **OLA** mode](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager), then revert to the default mode.
Once the new rule is activated, it will no longer be possible to revert to the old configuration. Servers delivered after the deployment date will immediately benefit from this new rule.

> [!warning]
> If you plan on switching to the new aggregation rule, you will need to update the MAC addresses assigned to each bond in your operating system.
>
> In case of incorrect configuration in the OS, resilience might not be effective.

### Benefits

Subject to correct configuration on the OS side, this development provides:

- **Enhanced Availability**: better tolerance to hardware failures (network cards, switches, connectivity).
- **Uninterrupted Connectivity**: your services remain accessible even in the event of a network card failure.
- **Transparent Evolution**: no modification required for existing aggregations, apart from specific cases mentioned above.

## Go Further

Join our [user community](/links/community).
