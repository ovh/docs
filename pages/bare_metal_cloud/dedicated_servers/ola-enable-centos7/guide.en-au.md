---
title: How to Configure Your NIC for OVHcloud Link Aggregation in CentOS 7
excerpt: Enable OVHcloud Link Aggregation in your CentOS 7 server
updated: 2021-03-25
---

## Objective

OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server’s availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link.

**This guide explains how to bond your NICs to use them for OLA in CentOS 7.**  

## Requirements

- [Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

## Instructions

Because you have a private-private configuration for your NICs in OLA, you will be unable to SSH into the server. Thus, you will need to leverage the IPMI tool to access the server.
<br>To do so, first log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au). In the `Bare Metal Cloud`{.action} section, select your server from `Dedicated Servers`{.action} and click the `IPMI`{.action} tab (1).

Next, click the `From a Java applet (KVM)`{.action} button (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

 A JNLP program will download. Open the program to enter the IPMI. Log in using valid credentials for the server.

By default, using an OVHcloud template, the NICs will be named *eth0* and *eth1*. If you are not using an OVHcloud template, you can find the names of your interfaces using the following command:

```bash
ip a
```

> [!primary]
>
> This command will yield numerous "interfaces." If you are having trouble determining which ones are your physical NICs, the first interface will still have the server's public IP address attached to it by default.
>

Once we have determined the names of our two NICs, we will configure NIC bonding in the OS. The first step is to create a bond interface. To do so, create the following configuration file in a text editor of your choice:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-bond0
```

This will open an empty text file. To configure the bond interface, insert the following into the text file:

```bash
DEVICE=bond0
TYPE=Bond
NAME=bond0
BOOTPROTO=none
ONBOOT=yes
BONDING_MASTER=yes
IPADDR=10.0.0.1
NETMASK=255.255.255.0
BONDING_OPTS="mode=802.3ad miimon=100"
```

> [!primary]
>
> You can use any private IP address and subnet you wish you to use.
>

Save and exit the file once you have confirmed that the information is correct.  Next, we need to configure both physical interfaces. By default, on an OVH server, only *eth0* will have a configuration file. Open it using the following command:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

By default, the file will appear as follows:

```bash
DEVICE=eth0
BOOTPROTO=static
IPADDR=203.0.113.1
NETMASK=255.255.255.0
ONBOOT=yes
GATEWAY=203.0.113.254
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6ADDR=2001:0db8:0000:0001::/64
```

> [!warning]
>
> The IP addresses will be different for each server.
>

We will change the file to appear as follows:

```bash
DEVICE=eth0
BOOTPROTO=static
#IPADDR=203.0.113.1
#NETMASK=255.255.255.0
ONBOOT=yes
#GATEWAY=203.0.113.254
#IPV6INIT=yes
#IPV6_AUTOCONF=no
#IPV6ADDR=2001:0db8:0000:0001::/64
TYPE=Ethernet
HWADDR=00:53:00:00:00:00
MASTER=bond0
SLAVE=yes
```

> [!primary]
>
> The hardware address (MAC address) of the NIC can be found using the *ip a* command that we used earlier.  It will be the number next to "link/ether" in the output.
>

The *#* in front of a line means that the server will ignore this line when reading the file. Thus, we will ignore these lines entirely when creating our interface file for *eth1*. We will create the *eth1* configuration file using the following command:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

This time, the file will be blank so add the following content to the file:

```bash
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
TYPE=Ethernet
HWADDR=00:53:00:00:00:01
MASTER=bond0
SLAVE=yes
```

Finally, we will restart the network daemon using the following command:

```bash
systemctl restart network
```

To test that our bond is working, ping another server on the same vRack. If it works, you are all set. If it does not, double-check your configurations or try rebooting the server.

## Go further

[Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager).

[How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

[How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).

[How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).

Join our community of users on <https://community.ovh.com/en/>.
