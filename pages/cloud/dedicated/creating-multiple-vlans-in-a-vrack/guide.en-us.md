---
title: Creating multiple vLANs in a vRack
slug: multiple-vlans
excerpt: This guide will show you how to create multiple vLANs within the vRack
section: Network Management
---

**Last updated 2018/06/21**

## Objective

The standard [vRack configuration](https://docs.ovh.com/worlddedicated/configuring-vrack-on-dedicated-servers/){.external} enables you to create only one vLAN. This means that you can only use each IP address once. However, with the vRack version 2.0 configuration, you can create up to 4,000 vLANs within a single vRack. This means that you can use each IP address up to 4,000 times.

**This guide will show you how to create multiple vLANs within the vRack.**

## Requirements

* an active [vRack](https://www.ovh.com/world/solutions/vrack/){.external} service in your account
* two or more [vRack-compatible servers](https://www.ovh.com/world/dedicated-servers/){.external}
* administrative (root) access to the server via SSH
* access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}
* your chosen private IP address range
* You must have completed the [vRack configuration guide](../configuring-vrack-on-dedicated-servers/){.external}.


## Instructions

### Linux

> [!primary]
>
> As an example, we'll use **eth1** as the network interface, **10** as the vLAN tag, and **192.168.0.0/16** as the IP address range.
>

First, you need to establish an SSH connection to your server, and run the following commands from the command line. This will install the vLAN package on your server:

```sh
# sudo apt-get install vlan
```

Next, we need to create a vLAN tag. The tag is an identifier that allows you differentiate between multiple vLANs:

```sh
# vconfig add eth1 10

Added VLAN with VID == 10 to IF -:eth1:-
```

Next, we need to declare the IP address range within the vRack and tag it with our identifier. We can do this with the following command:

```sh
# ip addr add 192.168.0.0/16 dev eth1.10
```

Lastly, we need to amend the configuration of our network interface so that it takes into account the vLAN tag. For this step, you will need to open your network interface configuration file for editing, and amend it as shown below:

```sh
# sudo /etc/network/interfaces

auto eth1.10
iface eth1.10 inet static
address 192.168.0.50
netmask 255.255.0.0
broadcast 192.168.255.255
```

### Windows

Log on to your server via a remote desktop connection, and open the Server Manager app. Then select `Local Server`{.action}. Now click the `Disabled`{.action} link next to **NIC Teaming**:

![Windows vLAN](images/vrack2-windows-01.png){.thumbnail}

Next, create a new team by selecting a network interface, and typing a team name into the **Team name** field. When you have finished, click `OK`{.action}:

![Windows vLAN](images/vrack2-windows-02.png){.thumbnail}

Next, we need to define the vLAN tag. In the **Adapters and Interfaces** pane of the **NIC Teaming** screen, right-click the interface you have just added to the new team, then click `Properties`{.action}. Now click `Specific VLAN`{.action}, and define the tag:

![Windows vLAN](images/vrack2-windows-03.png){.thumbnail}

Next, we need to configure the IP address of the vLAN. Click the `Start`{.action} button on your keyboard, then click `Control Panel`{.action}:

![Windows vLAN](images/vrack2-windows-04.png){.thumbnail}

Next, click `Network and Internet`{.action}:

![Windows vLAN](images/vrack2-windows-05.png){.thumbnail}

Then `Network and Sharing Center`{.action}:

![Windows vLAN](images/vrack2-windows-06.png){.thumbnail}

Then click `Change adapter settings`{.action}:

![Windows vLAN](images/vrack2-windows-07.png){.thumbnail}

Next, right-click the vLAN interface, and click `Properties`{.action}:

![Windows vLAN](images/vrack2-windows-08.png){.thumbnail}

Then double-click `Internet Protocol Version 4 (TCP/IP/IPv4)`{.action}:

![Windows vLAN](images/vrack2-windows-09.png){.thumbnail}

Next, click `Use the following IP address`{.action}. For **IP address**, type in an IP from your internal range. For **Subnet mask**, type in 255.255.0.0.

![Windows vLAN](images/vrack2-windows-10.png){.thumbnail}

Finally, click the `OK`{.action} button to save the changes, then reboot your server.

## Go further

[Configuring the vRack on your Dedicated Servers](../configuring-vrack-on-dedicated-servers/){.external}

Join our community of users on <https://community.ovh.com/en/>.
