---
title: 'Configuring the network on Proxmox VE on the High Grade & SCALE ranges'
slug: proxmox-network-hg-scale
excerpt: 'Find out how to configure the network on Proxmox VE on the High Grade & SCALE ranges'
section: 'Advanced use'
order: 5
---

**Last updated 9th January 2023**

> [!primary]
>
> Since October 6th, 2022 our service "Failover IP" is named [Additional IP](https://www.ovhcloud.com/en-sg/network/additional-ip/). This renaming has no effect on its technical features.
>

## Objective

On the High Grade & SCALE ranges, it is not possible to operate Additional IPs in *bridged* mode (via virtual MACs). It is therefore necessary to configure Additional IPs in routed mode or via the vRack.

**This guide explains how to configure the network in Proxmox VE.**

## Requirements

- An [OVHcloud dedicated server](https://www.ovhcloud.com/en-sg/bare-metal/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)
- An [Additional IP](https://www.ovhcloud.com/en-sg/bare-metal/ip/)

> [!warning]
>
> No virtual MACs should be applied to Additional IPs in the OVHcloud Control Panel.
>

## Instructions

> [!primary]
>
> On these server ranges, there are 4 network cards. The first two for the public, the last two for the private network. To get all the bandwidth, aggregates must be created.
>

### Additional IP in routed mode on public network interfaces

This configuration offers a better performance in terms of bandwidth, but is less flexible. With this configuration, the Additional IP has to be attached to a dedicated server. If you have multiple Proxmox hosts and want to migrate a VM from one host to another, you must also migrate the Additional IP linked to the VM. This can be done via the OVHcloud control panel or the OVHcloud API (you can automate this task by creating script).

#### Target configuration schema

![route diagram](images/schema_route2022.png){.thumbnail}

#### Explanations

Since Proxmox is based on debian distribution, we will update the network configuration file using SSH and not the web-ui.

You need to:

- administrative access (root) via SSH
- create an aggregation (linux bond)
- create a bridge
- allow forwarding 
- allow proxy_arp
- add routes

#### Configure the hypervisor

Login using ssh on Proxmox host:

```bash
ssh root@IPv4_of_your_server
# you can also use a private IP on vRack if you have a jumphost
```

The entire configuration is done in the `/etc/network/interfaces` file:

```bash
vi /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback
  # Enable IP forwarding and proxy-arp
  up echo "1" > /proc/sys/net/ipv4/ip_forward
  up echo "1" > /proc/sys/net/ipv4/conf/all/proxy_arp

# public interface 1
auto ens33f0
iface ens33f0 inet manual
	bond-master bond0

# public interface 2
auto ens33f1
iface ens33f1 inet manual
	bond-master bond0

# private interface 1
auto ens35f0
iface ens35f0 inet manual

# private interface 2
auto ens35f1
iface ens35f1 inet manual

# LACP aggregate on public interfaces
# configured in static mode on this example
# Has the server's public IP
auto bond0
iface bond0 inet static
    address PUB_IP_DEDICATED_SERVER/24
	gateway PUB_GW
	bond-slaves ens33f0 ens33f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer2+3
	# Use the mac address of the first public interface
	hwaddress AB:CD:EF:12:34:56

#Private
auto bond1
iface bond1 inet static
	bond-slaves ens35f0 ens35f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer2+3
	# Use the mac address of the first private interface
	hwaddress GH:IJ:KL:12:34:56

# Configure the bridge with a private address and add route(s) to send the Additional IPs to it
# A.B.C.D/X => Subnet of Additional IPs assigned to the server, this can be a host with /32
# By default Proxmox creates vmbr0.
# You can use it or create another one 
auto vmbr0
iface vmbr0 inet dhcp
	# Define a private IP, it should not overlap your existing private networks on the vrack for example 
	address 192.168.0.1/24
	bridge-ports none
	bridge-stp off
	bridge-fd 0
	# Add single additional
	up ip route add A.B.C.D/32 dev vmbr0
	# Add block IP
	up ip route add A.B.C.D/28 dev vmbr0

# Bridge used for private networks on vRack
# The VLAN feature is enabled
auto vmbr1
iface vmbr1 inet manual
        bridge-ports bond1
        bridge-stp off
        bridge-fd 0
        bridge-vlan-aware yes
        bridge-vids 2-4094
```

At this point, restart the network services or restart the server.
```bash
systemctl restart networking.service
```

When you restart `networking.service`, the bridges (for example: vmbr0) may be in a shutdown state. This is because Proxmox disconnects each VM from the bridges and does not reconnect them. To force the VMs to reconnect to the bridges, you can reboot the VMs.

#### Configuration example of a client VM on Debian

File contents `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address ADDITIONAL_IP       # this should match with the IP A.B.C.D/32
    netmask 255.255.255.255
    gateway 192.168.0.1			# this sould match with the private IP set on bridge
```

#### Test and validation

Now, your VMs should be able to reach a public service over internet. In addition, your VMs can also be reached directly over the internet through the Additional IP. The bandwith available corresponds to the bandwith available on the Public interfaces of your server and will not impact the private interfaces used for the vRack. This bandwidth is shared with other VMs on the same host that are using Additional IPs and the Proxmox host for public access.

To check your public IP, from the VM:
```bash
curl ifconfig.io
ADDITIONAL_IP    				# should return your additional ip
```

### Additional IP via vRack

This configuration is more flexible, you don't have to associate an Additional IP to a server but rather to a vRack. This means that if a VM wants to use an additional IP, it can claim it directly without any additional configuration and independently of the host it is hosted on.

> [!warning]
>
> This configuration is limited to 600 Mb/s for egress traffic.
>

#### Requirements

- A public block of IP addresses in your account, with a minimum of four addresses. The block must be pointed to the vRack.
- Your chosen private IP address range
- A [vRack compatible server](https://www.ovhcloud.com/en-sg/bare-metal/){.external}
- A [vRack](https://www.ovh.com/sg/solutions/vrack/){.external} service activated in your account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)


#### Target configuration schema

![vrack diagram](images/schema_vrack2022.png){.thumbnail}

#### Explanations

You need to:

- create an aggregate
- create a bridge connected to the aggregate

First, add your public block of IP addresses to the vRack. To do so, go to the `Bare Metal Cloud`{.action} section of your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) and open the `vRack`{.action} menu.

Select your vRack from the list to display the list of eligible services. Click on the IP block you want to add to the vRack and then click the `Add`{.action} button.

#### Configure a usable IP address

For vRack, the first, penultimate, and last addresses in a given IP block are always reserved for the network address, network gateway, and network *broadcast* respectively. This means that the first usable address is the second address in the block, as shown below:

```sh
46.105.135.96 # Reserved: network address
46.105.135.97 # First usable IP
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
46.105.135.109 # Last usable IP
46.105.135.110 # Reserved: network gateway
46.105.135.111 # Reserved: network broadcast
```

To configure the first usable IP address, you must edit the network configuration file as shown below. In this example, we use a subnet mask of **255.255.255.240**.

> [!primary]
>
> The subnet mask used in this example is appropriate for our IP block. Your subnet mask may differ depending on the size of your block. When you purchase your IP block, you will receive an email notifying you of the subnet mask to use.
>

#### Configure the hypervisor

The entire configuration is done in the `/etc/network/interfaces` file:

```bash
vi /etc/network/interfaces
```

What matters here is the `bond1` and `vmbr1` configuration:

```bash
auto lo
iface lo inet loopback

# public interface 1
auto ens33f0
iface ens33f0 inet manual

# public interface 2
auto ens33f1
iface ens33f1 inet manual

# private interface 1
auto ens35f0
iface ens35f0 inet manual
	bond-master bond1

# private interface 2
auto ens35f1
iface ens35f1 inet manual
	bond-master bond1

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
    bond-miimon 100
	bond-mode 802.3ad

auto bond1
# LACP Aggregate on private interfaces
# No IPs on it
iface bond1 inet manual
	bond-slaves ens35f0 ens35f1
    bond-miimon 100
	bond-mode 802.3ad


#Private

auto vmbr1
# Bridge connected to bond1 aggregate
# No need for IP
iface vmbr1 inet manual
	bridge-ports bond1
	bridge-stp off
	bridge-fd 0

post-up echo 1 > /proc/sys/net/ipv4/ip_forward

```

At this point, restart the network services or restart the server.

#### Configuration example of a client VM on Debian

Content of the file `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
