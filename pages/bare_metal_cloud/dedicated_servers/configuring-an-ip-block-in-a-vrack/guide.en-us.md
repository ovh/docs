---
title: Configuring an IP block in a vRack
excerpt: This guide will show you how to configure a block of public IP addresses for use with the vRack.
updated: 2023-08-31
---

## Objective

As well as private IP addressing, the [vRack](https://www.ovh.com/ca/en/solutions/vrack/){.external} also allows you to route public IP traffic through your server's [vRack](https://www.ovh.com/ca/en/solutions/vrack/){.external} port using a public IP address block.

**This guide will show you how to configure a block of public IP addresses for use with the vRack.**

## Requirements

- A public block of IP addresses in your account, with a minimum of four addresses
- Your chosen private IP address range
- A [vRack compatible server](https://www.ovh.com/ca/en/solutions/vrack/){.external}
- A [vRack](https://www.ovh.com/ca/en/solutions/vrack/){.external} service activated in your account
- Access to the OVHcloud [Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we){.external}

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en/compare/) for more information.

## Instructions

> [!primary]
>
> For example purposes we'll be using an IP block of 46.105.135.96/28 and eth1 for the secondary network interface, which is dedicated to the [vRack](https://www.ovh.co.uk/solutions/vrack/){.external}.
> 
> Also for example purposes, the network configuration file we refer to is located in `/etc/network/interfaces`. The equivalent file on your server may be located somewhere else, depending on your operating system. The file content may also be different. If you encounter any difficulties, please refer to the official documentation for your distribution.

### Add the IP block to the vRack

> [!warning]
>
> Once an IP block is added to the vRack, it is no longer attached to a physical server.
>
> This setup allows you to configure IPs of the same block on multiple servers, provided that these servers are all in the same vRack as the IP block. The IP block must have at least 2 usable IPs or more for this to be possible.
>

In your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), go to the `Bare Metal Cloud`{.action} section and click on `Network`{.action}. Next, open the `vRack`{.action} menu.

Select your vRack from the list to display the list of eligible services. Click the IP block you wish to add to the vRack and click on the `Add`{.action} button.

![vrack](images/addIPblock.png){.thumbnail}

### Configure a usable IP address

For vRack purposes, the first, penultimate, and last addresses in any given IP block are always reserved for the network address, network gateway, and network broadcast respectively. This means that the first useable address is the second address in the block, as shown below:

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

To configure the first usable IP address, we need to edit the network configuration file, as shown below. In this example, we need to use a subnet mask of **255.255.255.240**.

> [!primary]
>
The subnet mask we've used in our example is appropriate for our IP block. Your subnet mask may differ depending on the size of your block. When you purchase your IP block, you'll receive an email that will tell you which subnet mask to use.
>

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

Next, we need to create a new IP route for the vRack. We'll be adding a new traffic rule by amending the file, as shown below:

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

Finally, we need to amend the network configuration file to account for the new traffic rule and route the vRack traffic through the network gateway address of **46.105.135.110**.

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

Now reboot your server to apply the changes.

## Go further

[Configuring the vRack on your dedicated servers](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server){.external}

[Creating multiple vLANs in a vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack){.external}

[Configuring the vRack between the Public Cloud and a Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server){.external}

Join our community of users on <https://community.ovh.com/en/>.
