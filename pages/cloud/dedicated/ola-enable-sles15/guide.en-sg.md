---
title: How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15
excerpt: Enable OVHcloud Link Aggregation in your SLES 15 server
updated: 2023-03-07
---

**Last updated March 7th, 2023**

## Objective

The OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server’s availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, the traffic is automatically redirected to another available link.

**This guide explains how to bond your NICs to use them for OLA in SLES 15.**  

## Requirements

- [Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/cloud/dedicated/ola-enable-manager)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

## Instructions

Because you have a private-private configuration for your NICs in OLA, you will be unable to SSH into the server. Thus, you will need to leverage the IPMI tool to access the server.
<br>To do so, first log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg). In the `Bare Metal Cloud`{.action} section, select your server from `Dedicated Servers`{.action} and click the `IPMI`{.action} tab (1).

Next, click the `From a Java applet (KVM)`{.action} button (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

A JNLP program will be downloaded. Open the program to enter the IPMI. Log in using valid credentials for the server.

By default, using an OVHcloud template, the NICs will be named *eth1* and *eth2*. If you are not using an OVHcloud template, you can find the names of your interfaces using the following command:

```bash
ip a
```

> [!primary]
>
> This command will yield numerous "interfaces." If you are having trouble determining which ones are your physical NICs, the first interface will still have the server's public IP address attached to it by default.
>

Once you have determined the names of your two NICs, you need to configure NIC bonding in the OS. The first step is to create a bond interface. To do so, create the following configuration file in a text editor of your choice:

```bash
vi /etc/sysconfig/network/ifcfg-bond0
```

This will open an empty text file. To configure the bond interface, insert the following into the text file:

```bash
STARTMODE='onboot'
BOOTPROTO='static'
IPADDR='10.0.0.1/24'
BONDING_MASTER='yes'
BONDING_SLAVE_0='eth1'
BONDING_SLAVE_1='eth2'
BONDING_MODULE_OPTS='mode=802.3ad miimon=100 xmit_hash_policy=layer3+4'
```

> [!primary]
>
> You can use any private IP address and subnet you wish.
> If your server has more than 2 network interfaces, you can add them in the configuration, by incrementing the number of the `BONDING_SLAVE_` parameter, for example, `BONDING_SLAVE_2='eth3'`.
>

Save and exit the file once you have confirmed that the information is correct.  Next, you need to configure both physical interfaces. By default, on an OVHcloud server, only *eth1* will have a configuration file. Open it using the following command:

```bash
vi /etc/sysconfig/network/ifcfg-eth1
```

By default, the file will appear as follows:

```bash
BOOTPROTO=dhcp4
IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE=auto
```

> [!warning]
>
> The IP addresses will be different for each server.
>

Edit the file to make it appear as follows:

```bash
BOOTPROTO='none'
#IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE='hotplug'
```

> [!primary]
>
> The hardware address (MAC address) of the NIC can be found using the `ip a` command that you used earlier.  It will be the number next to `link/ether` in the output.
>

The *#* in front of a line means that the server will ignore this line when reading the file. Thus, please ignore these lines entirely when creating your interface file for *eth1*.

Create the *eth2* configuration file using the following command:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth2
```

This time, the file will be blank so add the following content to the file:

```bash
BOOTPROTO='none'
STARTMODE='hotplug'
LLADDR=0c:42:a1:a7:29:c2
```

Finally, restart the network daemon using the following command:

```bash
wicked ifreload all
```

To test that your bond is working, ping another server on the same vRack. If it works, you are all set. If it does not, double-check your configurations or try rebooting the server.

You can also check the used parameters by your ifcfg-bond0 interface using the following command:

```bash
/proc/net/bonding/bond0
```

## Go further

[Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/cloud/dedicated/ola-enable-manager).

[How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9](/pages/cloud/dedicated/ola-enable-debian9).

[How to Configure Your NIC for OVHcloud Link Aggregation in CentOS 7](/pages/cloud/dedicated/ola-enable-centos7).

[How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019](/pages/cloud/dedicated/ola-enable-w2k19).

Join our community of users on <https://community.ovh.com/en/>.
