---
title: "Configure OVHcloud Link Aggregation on a Dedicated Server (Windows)"
excerpt: "Enable OVHcloud Link Aggregation in your \"Windows Server 2019\" server"
updated: 2026-04-20
---

## Objective

OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server's availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link. The available bandwidth is also doubled thanks to aggregation.
Aggregation is based on IEEE 802.3ad, Link Aggregation Control Protocol (LACP) technology.

**This guide explains how to configure NIC Teaming for OLA in Windows Server 2019.**

## Requirements

- [Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Dedicated Servers](/links/control-panel/baremetal-dedicated-servers)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Dedicated servers`{.action} > Select your server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instructions

Because you have a private-private configuration for your NICs in OLA, you will be unable to SSH into the server. Thus, you will need to leverage the IPMI tool to access the server.
<br>To do so, click the `IPMI`{.action} tab (1).

Next, click the `From a Java applet (KVM)`{.action} button (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

A JNLP program will download. Open the program once it is finished to enter the IPMI. Log in using valid credentials for the server.

Once you are in the server, open Server Manager. If it is not already open by default, you will see it pinned to the Start menu.

![server manager](images/local_server.png){.thumbnail}

Once you have opened Server Manager, click the **Local Server** tab on the left-hand sidebar. Next, click the **Disabled** button next to "NIC Teaming."

![local server](images/server_manager.png){.thumbnail}

In the NIC Teaming pop-up, click the **New Team** button from the **TASKS** dropdown menu under the "TEAMS" section.

![nic teaming](images/nic_teaming.png){.thumbnail}

Give your team a name and check the NICs you wish to use with OLA. Click the dropdown arrow next to "Additional properties" and change the "Teaming mode" to LACP. Click **OK** once you have confirmed that the information is correct.

![new team](images/new_team.png){.thumbnail}

It could take up to a couple of minutes for the NIC team to come online. Once it is finished, click the network connection icon in the bottom-right corner.  Next, click the **Network &amp; Internet settings** button.  Then click the **Ethernet** button on the left-hand sidebar of the ensuing popup.

![network button](images/network_button.png){.thumbnail}

Click the **Change adapter options** button.

![ethernet](images/ethernet.png){.thumbnail}

Next, right-click on your NIC team and select **Properties** from the drop-down menu.

![properties](images/properties.png){.thumbnail}

On the ensuing pop-up window, double-click the **Internet Protocol Version 4 (TCP/IPv4)** button.

![Internet Protocol Version 4 TCP/IPv4 properties](images/ipv4.png){.thumbnail}

Click the button next to "Use the following IP address" and add your chosen private IP and subnet. Click the **OK** button once you have confirmed that your settings are correct.

![ipv42](images/ipv42.png){.thumbnail}

To test that your NIC team is working, ping another server on the same vRack.  If it works, you are all set. If it does not, double-check your configurations or try rebooting the server.

## Go further

[Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[How to configure your NIC for OVHcloud Link Aggregation in Debian 9 to 11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Join our [community of users](/links/community).
