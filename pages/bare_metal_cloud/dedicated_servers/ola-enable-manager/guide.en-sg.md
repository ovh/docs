---
title: "OVHcloud Link Aggregation via Control Panel (Dedicated)"
excerpt: "Enable OVHcloud Link Aggregation (OLA) on your dedicated server directly from the OVHcloud Control Panel."
updated: 2022-05-18
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

To start configuring OLA, open the `Network interfaces`{.action} tab on your server's management page.

![Network interfaces tab showing OLA configuration](images/network_interfaces2022.png){.thumbnail}

In the tab `Network interfaces`{.action} (1), click on the `...`{.action} button (2) to the right of "Mode" in the **OLA: OVHcloud Link Aggregation** box. Next, click `Configure private aggregation`{.action}  (2).

![interface select](images/interface_select2021.png){.thumbnail}

Make sure that both your interfaces, or interface groups, are selected and give the OLA a name. Click `Confirm`{.action} when your checks are complete.

This may take a few minutes. Once it is complete, the next step is to configure the interfaces in your operating system via a NIC link or NIC team. For the method to use, refer to the following guides for the most popular operating systems:

- [How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9 using ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
- [How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).
- [How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).
- [How to configure Your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

### Restoring OLA to default values

To restore OLA to the default values, click on the `...`{.action} button to the right of "Mode" in the **OLA: OVHcloud Link Aggregation** box. Then click `Unconfigure private aggregation`{.action}. Click `Confirm`{.action} in the popup menu.

![Unconfigure private aggregation option in OLA box](images/default_settings2021.png){.thumbnail}

This may take a few minutes.

## Go further

[How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9 using ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[How to configure Your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

Join our [community of users](/links/community).
