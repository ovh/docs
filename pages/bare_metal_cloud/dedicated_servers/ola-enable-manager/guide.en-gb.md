---
title: "OVHcloud Link Aggregation via Control Panel (Dedicated)"
excerpt: "Enable OVHcloud Link Aggregation (OLA) on your dedicated server directly from the OVHcloud Control Panel."
updated: 2026-04-20
---

## Objective

OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server’s availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link.<br>
Aggregation is based on IEEE 802.3ad, Link Aggregation Control Protocol (LACP) technology.

**This guide explains how to configure OLA in the OVHcloud Control Panel.**

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) from the Advance, Scale, or High Grade ranges in your OVHcloud account
- An Operating System / Hypervisor that supports the 802.3ad aggregation protocol (LACP)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Dedicated Servers](/links/control-panel/baremetal-dedicated-servers)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Dedicated servers`{.action} > Select your server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instructions

> [!warning]
>
> OLA is configured on all network interfaces. They will form a “private aggregation”.
>
> Following the implementation of OLA, the public IP will no longer be accessible.
>

### Configuring OLA in the OVHcloud Control Panel

<!-- CP-STEPS-START:configure-ola -->
To start configuring OLA, open the `Network interfaces`{.action} tab on your server's management page.

Click the `Network Aggregation`{.action} button in the **Network Interface Controllers (NICs)** section.

You will be shown two tables:
- On the left, the current configuration of your network interfaces;
- On the right, the simulated configuration of your aggregated network interfaces.

In the field below the tables, enter a name for your link aggregation.

Once you have verified that the aggregation layout matches your network requirements, click `Enable Aggregation`{.action} to proceed.
<!-- CP-STEPS-END:configure-ola -->

This may take a few minutes. Once it is complete, the next step is to configure the interfaces in your operating system via a NIC link or NIC team. For the method to use, refer to the following guides for the most popular operating systems:

- [How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9 using ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
- [How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).
- [How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).
- [How to configure Your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).

### Checking the OLA status

<!-- CP-STEPS-START:check-ola-status -->
You can verify your Link Aggregation (OLA) status in the `Network interfaces`{.action} tab. At the bottom of the **Bandwidth** section, locate the **OVHcloud Link Aggregation** row.

There are four possible status tags:
- **Unavailable**: OLA is not supported on this dedicated server model.
- **Available**: OLA is supported but is not configured.
- **Active - Fully Private**: OLA is enabled; all physical interfaces are aggregated into a single private link for vRack use.
- **Active - Double LAG**: OLA is pre-enabled; physical interfaces are split into two separate aggregates (one public, one private).

> [!primary]
> **Note:** The **Active - Double LAG** status is a specific configuration typically reserved for Scale and High-Grade server ranges, which feature four physical network interfaces.
>
<!-- CP-STEPS-END:check-ola-status -->

### Restoring OLA to default values

<!-- CP-STEPS-START:restore-ola -->
To restore OLA to the default values, click on the `Disaggregate networks`{.action} button at the top of the **Network Interface Controllers** section. Click `Confirm`{.action} in the popup menu.

This may take a few minutes.
<!-- CP-STEPS-END:restore-ola -->


## Go further

[How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9 using ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[How to configure Your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

Join our [community of users](/links/community).
