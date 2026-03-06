---
title: 'Configuring an Additional IP block in a vRack'
excerpt: 'This guide will show you how to configure a block of public IP addresses for use with the vRack.'
updated: 2025-06-04
---

## Objective

As well as private IP addressing, the [vRack](/links/network/vrack) also allows you to route public IP traffic through your server's [vRack](/links/network/vrack) port using a public IP address block.

**This guide will show you how to configure a block of public IP addresses for use with the [vRack](/links/network/vrack).**

> [!primary]
>
> vRack supports both IPv4 and IPv6 public routing with Additional IP address blocks. You can find the instructions on how to configure IPv6 blocks in this guide: "[Configuring an IPv6 block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)".
>

> [!primary]
>
> This article is focusing on Additional IP configuration over a vRack network. If you look for guidance on Additional IP configuration together with primary IP (on public network interface), read the following articles:
>
> - IPv4:
>     - [Configuring IP aliasing on dedicated servers](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Configuring IP aliasing on a VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>     - [Configuring IPv6 on dedicated servers](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Configuring IPv6 on a VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Configuring IPv6 on a Public Cloud instance](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Requirements

- A public block of IP addresses in your account, with a minimum of four addresses
- Your chosen private IP address range
- A [vRack compatible server](/links/bare-metal/bare-metal)
- A [vRack](/links/network/vrack) service activated in your account
- Access to the [OVHcloud Control Panel](/links/manager)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](/links/bare-metal/eco-about).
>
> Please visit our [comparison page](/links/bare-metal/eco-compare) for more information.

## Instructions

> [!primary]
>
> For example purposes we'll be using an IP block of 46.105.135.96/28 and eth1 for the secondary network interface, which is dedicated to the [vRack](/links/network/vrack).
> 
> Also for example purposes, the network configuration file we refer to is located in `/etc/network/interfaces`. The equivalent file on your server may be located somewhere else, depending on your operating system. The file content may also be different. If you encounter any difficulties, please refer to the official documentation for your distribution.

### Add the IP block to the vRack

> [!warning]
>
> Once an IP block is added to the vRack, it is no longer attached to a physical server.
>
> This setup allows you to configure IPs of the same block on multiple servers, provided that these servers are all in the same vRack as the IP block. The IP block must have at least 2 usable IPs or more for this to be possible.
>

In your [OVHcloud Control Panel](/links/manager), go to the `Bare Metal Cloud`{.action} section and click on `Network`{.action}. Next, open the `vRack`{.action} menu.

Select your vRack from the list to display the list of eligible services. Click the IP block you wish to add to the vRack and click on the `Add`{.action} button.

![vrack](images/addIPblock.png){.thumbnail}

### Managing public IP bandwidth on vRack

By default, Additional IP blocks routed via a vRack benefit from a standard public bandwidth of 5Gbps in Europe/Canada/US and 100Mbps in APAC regions. For a detailed overview of availability, please refer to public routing options on our [vRack product page](/links/network/vrack). 

As infrastructure requirements scale, users may require broader bandwidth to support high-traffic public-oriented services, for which OVHcloud provides paid bandwidth options. It is important to note that bandwidth options are applied **per-vRack and per-region**. Since Additional IP addresses are tied to a region, any bandwidth modification will affect all IP addresses (both IPv4 and IPv6) routed to the specific vRack within that particular region.

/// details | During the Additional IP ordering process

#### Choosing public bandwidth during an Additional IP order

The default selection of public bandwidth can be modified at the order time of a new Additional IP block, when a vRack network is selected as a backend service.

To order a new Additional IP block:
- Log in to the [OVHcloud Control Panel](/links/manager).
- Open the `Network`{.action} section in the left-hand sidebar.
- Select `Public IP addresses`{.action}.
- Click on the `Order IPs`{.action} button, near the top of the page.
- Select the IP version, then the vRack you want to attach your Additional IP to.
- Select the region you want your Additional IP to be in.
- Choose the public bandwidth you want to apply to your vRack for that specific region.
- Fill in the other options as necessary, then proceed with your order.

///

/// details | From the vRack management page

#### Modifying vRack public bandwidth on management page

For Additional IP blocks already attached to a vRack, bandwidth can be managed directly through the service configuration page.

To access the management interface:
- Open `Network`{.action} in the left-hand sidebar of your Control Panel.
- Select `vRack private network`{.action}.
- In the "Public IP & bandwidth" column, click the `Manage`{.action} button for the corresponding vRack.

The management page is organized into two tabs:
* **All attached services**: For the time being, it redirects to the classic vRack management page. Soon, it will list all the products (Servers, Cloud Projects, etc.) currently linked to the vRack, in a new way.
* **Public IP routing**: Manages the public IP routing options of your vRack, including public bandwidth.

To modify the public bandwidth:
- Navigate to the `Public IP routing`{.action} tab.
- The interface displays individual management windows for each region (e.g., `eu-west-par`) associated with the vRack, listing all IP addresses attached to that specific region.
- Within the window for the relevant region, click the `Modify bandwidth`{.action} button.
- Select the desired bandwidth option in the panel that appears on the right-hand side, then click `Proceed to order`{.action} to validate the order.
- Once paid, the selected bandwidth should be available to your vRack in the chosen region after a few minutes.

> [!primary]
>
> Please note that charges for the initial month are pro-rated based on the remaining days, with the full rate effective the next billing cycle.
>

The selected bandwidth upgrade will apply to all IP addresses in that region for the chosen vRack.

///

### Configure a usable IP address

For [vRack](/links/network/vrack) purposes, the first, penultimate, and last addresses in any given IP block are always reserved for the network address, network gateway, and network broadcast respectively. This means that the first useable address is the second address in the block, as shown below:

```sh
46.105.135.96   Reserved: Network address
46.105.135.97   First usable IP
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109  Last usable IP
46.105.135.110  Reserved: Network gateway
46.105.135.111  Reserved: Network broadcast
```

To configure the first usable IP address, we need to edit the network configuration file, as shown below. In this example, we need to use a subnet mask of *255.255.255.240*.

> [!primary]
>
The subnet mask we've used in our example is appropriate for our IP block. Your subnet mask may differ depending on the size of your block. When you purchase your IP block, you'll receive an email that will tell you which subnet mask to use.
>

###Debian/Ubuntu

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```
### Create a new IP routing table

First, we need to download and install iproute2, which is a package that will enable us to manually configure IP routing on the server.

Establish an SSH connection to your server and run the following command from the command line. This will download and install iproute2.

```sh
# apt-get install iproute2
```

Next, we need to create a new IP route for the [vRack](/links/network/vrack). We'll be adding a new traffic rule by amending the file, as shown below:

```sh
/etc/iproute2/rt_tables

#
# reserved values
#
255	local
254	main
253	default
0	unspec
#
# local
#
#1	inr.ruhep
1 vrack
```

### Amend the network configuration file

> [!primary]
>
For example purposes, the network configuration file we refer to is located in /etc/network/interfaces. The equivalent file on your server may be located somewhere else, depending on your operating system.
>

Finally, we need to amend the network configuration file to account for the new traffic rule and route the [vRack](/links/network/vrack) traffic through the network gateway address of **46.105.135.110**.

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
post-up ip route add 46.105.135.96/28 dev eth1 table vrack
post-up ip route add default via 46.105.135.110 dev eth1 table vrack
post-up ip rule add from 46.105.135.96/28 table vrack
post-up ip rule add to 46.105.135.96/28 table vrack
```

Now reboot your server to apply the changes or alternatively enable simply the new network interface:

```sh
ip link set eth1 up
```

### CentOS 6/7

#### Create the file for the secondary network interface

First we can copy and use the configuration being used for the primary network interface and adjust it as per our needs:

```sh
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
```
Then we access to the new file:

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
```
And we define the IP settings:
```sh
# Created by cloud-init on instance boot automatically, do not edit.
#
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.240
IPADDR=46.105.135.97
ARP=yes
```

### Create a new IP routing table

Next, we need to create a new IP route for the [vRack](/links/network/vrack). We'll be adding a new traffic rule by amending the file, as shown below:

```sh
/etc/iproute2/rt_tables

#
# reserved values
#
255	local
254	main
253	default
0	unspec
#
# local
#
#1	inr.ruhep
1 vrack
```

Next, create the  file needed to apply the new rules:
```sh
nano /etc/sysconfig/network-scripts/rule-eth1
```

And paste the following content (please remember to replace our variables with your own values):

```sh
from 46.105.135.96/28 table vrack
to 46.105.135.96/28 table vrack
```

### Amend the network configuration file

Finally, we need to amend the network configuration file to account for the new traffic rule and route the [vRack](/links/network/vrack) traffic through the network gateway address of **46.105.135.110**.

We can achieve it by editing the following file in order to add persistent and static routes:

```sh
nano /etc/sysconfig/network-scripts/route-eth1
```

Paste the following content (please remember to replace our variables with your own values):

```sh
46.105.135.96/28 dev eth1 table vrack
default via 46.105.135.110 dev eth1 table vrack
```

Now reboot your server to apply the changes or alternatively enable simply the new network interface:

```sh
ip link set eth1 up
```

### Windows Server 2012/2016

#### Step 1: Check and configure the secondary network interface

First we must access to the new network interface information:

![check the second network interface](images/win-ip-vrack-1.png){.thumbnail}

Then we must check the properties:

![properties of the second network interface](images/win-ip-vrack-2.png){.thumbnail}

![properties of the second network interface](images/win-ip-vrack-3.png){.thumbnail}

#### Step 2: IP Configuration

We must select the ```Use the following IP address``` option:

![ip configuration](images/win-ip-vrack-4.png){.thumbnail}

And we can finally define the IP information:

![ip configuration](images/win-ip-vrack-5b.png){.thumbnail}

#### Step 3: Rebooting the network interface

First we do the disabling process

![disabling network](images/win-ip-vrack-6.png){.thumbnail}

Then we do the enabling process

![enabling network](images/win-ip-vrack-7.png){.thumbnail}

### Troubleshooting

If you are unable to establish a connection from your VM or server to the private network, please send us a ticket from your control panel with the following :

* IP source and IP destination
* Ifconfig -a or ipconfig /all from both servers or VMs (setup network configuration interface)
* ping in both ways
* arp -a
* Routing table

Please, include the results from above into your ticket.

## Go further

[Configuring the vRack on your dedicated servers](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Creating multiple vLANs in a vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Configuring the vRack between the Public Cloud and a Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

Join our [community of users](/links/community).
