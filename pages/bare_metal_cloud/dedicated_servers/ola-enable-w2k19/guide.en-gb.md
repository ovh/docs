---
title: "How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019"
excerpt: "Enable Link Aggregation in your Windows Server 2019 server to increase your server's availability and boost the efficiency of your network connections"
updated: 2026-04-17
---

## Objective

OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server's availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link. The available bandwidth is also doubled thanks to aggregation.
Aggregation is based on IEEE 802.3ad, Link Aggregation Control Protocol (LACP) technology.

**This guide explains how to configure NIC Teaming for OLA in Windows Server 2019.**

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) from the Advance, Scale, or High Grade ranges in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!primary]
> The values (MAC addresses, IP addresses, etc.) shown in the configurations and examples below are provided as examples. Of course, you must replace these values with your own.
>

### Retrieving MAC addresses

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Bare Metal Cloud`{.action} section and select your server from **Dedicated Servers**.

Switch to the tab `Network Interfaces`{.action} and take note of the MAC addresses for each interface (public/private) which are displayed at the bottom of the menu.

![OVHcloud Control Panel](images/ControlPanel.png){.thumbnail}

> [!primary]
> Please note that the MAC address of the **main public** interface is the one receiving DHCP offers, both in the server's operating system and in rescue mode. This interface handles public connectivity in the default configuration.
>
> Additionally, the MAC address of the **main private** interface is the one with the lowest value. In the example image above, this is the address `a1:b2:c3:d4:e5:d6`.
>

### Accessing the server

Because you have a private-private configuration for your NICs in OLA, you will be unable to RDP into the server via its public IP. You will need to use the KVM/IPMI tool to access it.

Log in to your [OVHcloud Control Panel](/links/manager). In the `Bare Metal Cloud`{.action} section, select your server from `Dedicated Servers`{.action} and click the `IPMI`{.action} tab.

> [!primary]
>
> For detailed instructions on using KVM, follow the "**Open KVM**" steps from [this guide](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

### Configuring NIC Teaming

Select the tab below that matches your server configuration:

- **Two interfaces**: Advance servers with two physical NICs.
- **Four interfaces - Double LAG**: Scale and High-Grade servers with OLA in **Active - Double LAG** mode (public + private aggregates). This requires [OLA to be enabled](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) in the OVHcloud Control Panel.
- **Four interfaces - Fully Private**: Scale and High-Grade servers with OLA in **Active - Fully Private** mode (single private aggregate for vRack). This requires [OLA to be enabled](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) in the OVHcloud Control Panel.

> [!tabs]
> Two interfaces
>> Once you are in the server, open **Server Manager**. If it is not already open by default, you will see it pinned to the Start menu.
>>
>> ![server manager](images/local_server.png){.thumbnail}
>>
>> Once you have opened Server Manager, click the **Local Server** tab on the left-hand sidebar. Next, click the **Disabled** button next to "NIC Teaming."
>>
>> ![local server](images/server_manager.png){.thumbnail}
>>
>> In the NIC Teaming pop-up, click the **New Team** button from the **TASKS** dropdown menu under the "TEAMS" section.
>>
>> ![nic teaming](images/nic_teaming.png){.thumbnail}
>>
>> Give your team a name and check both NICs you wish to use with OLA. Click the dropdown arrow next to "Additional properties" and change the "Teaming mode" to **LACP**. Click **OK** once you have confirmed that the information is correct.
>>
>> ![new team](images/new_team.png){.thumbnail}
>>
>> It could take up to a couple of minutes for the NIC team to come online. Once it is finished, click the network connection icon in the bottom-right corner. Next, click the **Network & Internet settings** button. Then click the **Ethernet** button on the left-hand sidebar of the ensuing popup.
>>
>> ![network button](images/network_button.png){.thumbnail}
>>
>> Click the **Change adapter options** button.
>>
>> ![ethernet](images/ethernet.png){.thumbnail}
>>
>> Next, right-click on your NIC team and select **Properties** from the drop-down menu.
>>
>> ![properties](images/properties.png){.thumbnail}
>>
>> On the ensuing pop-up window, double-click the **Internet Protocol Version 4 (TCP/IPv4)** button.
>>
>> ![ipv4](images/ipv4.png){.thumbnail}
>>
>> Click the button next to "Use the following IP address" and add your server's public IP and subnet. Click the **OK** button once you have confirmed that your settings are correct.
>>
>> ![ipv42](images/ipv42.png){.thumbnail}
>>
> Four interfaces - Double LAG
>> This configuration creates two NIC teams: one for the public interfaces (with public IP) and one for the private interfaces (for vRack).
>>
>> Once you are in the server, open **Server Manager** and click the **Local Server** tab. Click the **Disabled** button next to "NIC Teaming."
>>
>> **Create the public team:**
>>
>> In the NIC Teaming pop-up, click **New Team** from the **TASKS** dropdown menu. Give the team a name (e.g. "Public"), check the **two public NICs** (identified by their MAC addresses in the OVHcloud Control Panel), change the "Teaming mode" to **LACP**, and click **OK**.
>>
>> **Create the private team:**
>>
>> Click **New Team** again. Give the team a different name (e.g. "Private"), check the **two private NICs**, change the "Teaming mode" to **LACP**, and click **OK**.
>>
>> Wait for both teams to come online, then configure their IP addresses:
>>
>> - **Public team**: Right-click > **Properties** > **Internet Protocol Version 4 (TCP/IPv4)** > assign your server's public IP and subnet.
>> - **Private team**: Right-click > **Properties** > **Internet Protocol Version 4 (TCP/IPv4)** > assign a private IP address (e.g. `10.0.0.1` with subnet mask `255.255.255.0`).
>>
> Four interfaces - Fully Private
>> This configuration aggregates all physical interfaces into a single NIC team for vRack use only. There is no public IP connectivity.
>>
>> > [!warning]
>> >
>> > Following the implementation of OLA in Fully Private mode, the public IP is no longer accessible. Make sure you have an alternative means of access (e.g. through another server in the vRack, or via KVM/IPMI) before applying this configuration.
>> >
>>
>> Once you are in the server, open **Server Manager** and click the **Local Server** tab. Click the **Disabled** button next to "NIC Teaming."
>>
>> In the NIC Teaming pop-up, click **New Team** from the **TASKS** dropdown menu. Give the team a name, check **all four NICs**, change the "Teaming mode" to **LACP**, and click **OK**.
>>
>> Wait for the team to come online, then configure its IP address:
>>
>> Right-click on the NIC team > **Properties** > **Internet Protocol Version 4 (TCP/IPv4)** > Click "Use the following IP address" and assign a private IP address for vRack communication (e.g. `10.0.0.1` with subnet mask `255.255.255.0`).
>>
>> > [!primary]
>> >
>> > In Fully Private mode, the NIC team should be assigned a private IP address for vRack communication only.
>> >

### Verifying the configuration

To test that your NIC team is working, ping another server on the same vRack. If it works, you are all set. If it does not, double-check your configurations or try rebooting the server.

## Go further

[Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[How to configure Your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[How to configure your NIC for OVHcloud Link Aggregation in Debian 9 to 11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Join our [community of users](/links/community).
