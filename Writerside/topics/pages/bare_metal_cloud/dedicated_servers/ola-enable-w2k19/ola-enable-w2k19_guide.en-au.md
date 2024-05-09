---
title: How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019
excerpt: Enable OVHcloud Link Aggregation in your "Windows Server 2019" server
updated: 2021-03-25
---

## Objective

OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server’s availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link.

## Requirements

- [Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](ola-enable-manager1.)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

## Instructions

Because you have a private-private configuration for your NICs in OLA, you will be unable to SSH into the server. Thus, you will need to leverage the IPMI tool to access the server.
<br>To do so, first log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au). In the `Bare Metal Cloud`{.action} section, select your server from `Dedicated Servers`{.action} and click the `IPMI`{.action} tab (1).

Next, click the `From a Java applet (KVM)`{.action} button (2).

![remote kvm](ola-enable-w2k19_images_remote_kvm2022.png){.thumbnail}

A JNLP program will download. Open the program once it is finished to enter the IPMI. Log in using valid credentials for the server.

Once you are in the server, open Server Manager. If it is not already open by default, you will see it pinned to the Start menu.

![server manager](local_server.png){.thumbnail}

Once you have opened Server Manager, click the **Local Server** tab on the left-hand sidebar. Next, click the **Disabled** button next to "NIC Teaming."

![local server](server_manager.png){.thumbnail}

In the NIC Teaming pop-up, click the **New Team** button from the **TASKS** dropdown menu under the "TEAMS" section.

![nic teaming](nic_teaming.png){.thumbnail}

Give your team a name and check the NICs you wish to use with OLA. Click the dropdown arrow next to "Additional properties" and change the "Teaming mode" to LACP. Click **OK** once you have confirmed that the information is correct.

![new team](new_team.png){.thumbnail}

It could take up to a couple of minutes for the NIC team to come online. Once it is finished, click the network connection icon in the bottom-right corner.  Next, click the **Network &amp; Internet settings** button.  Then click the **Ethernet** button on the left-hand sidebar of the ensuing popup.

![network button](network_button.png){.thumbnail}

Click the **Change adapter options** button.

![ethernet](ethernet.png){.thumbnail}

Next, right-click on your NIC team and select **Properties** from the drop-down menu.

![properties](properties.png){.thumbnail}

On the ensuing pop-up window, double-click the **Internet Protocol Version 4 (TCP/IPv4)** button.

![ipv4](ipv4.png){.thumbnail}

Click the button next to "Use the following IP address" and add your chosen private IP and subnet. Click the **OK** button once you have confirmed that your settings are correct.

![ipv42](ipv42.png){.thumbnail}

To test that your NIC team is working, ping another server on the same vRack.  If it works, you are all set. If it does not, double-check your configurations or try rebooting the server.

## Go further

[Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](ola-enable-manager1.).

[How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9](ola-enable-debian91.).

[How to Configure Your NIC for OVHcloud Link Aggregation in CentOS 7](ola-enable-centos71.).

[How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](ola-enable-sles151.).

Join our community of users on <https://community.ovh.com/en/>.
