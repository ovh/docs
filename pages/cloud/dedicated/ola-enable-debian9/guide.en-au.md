---
title: How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9
slug: ola-debian9
excerpt: Enable OVHcloud Link Aggregation in your Debian 9 server
section: 'Advanced use'
order: 2
updated: 2022-01-07
---

**Last updated January 7th, 2022**

## Objective

OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server’s availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link.

**This guide explains how to bond your NICs to use them for OLA in Debian 9.**  

## Requirements

- [Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](../ola-manager)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

> [!warning]
>
> You will need to download the ifenslave package on the server before enabling OLA in the OVHcloud Control Panel or API. To do so, please use the following command:
>
> ```
> apt install ifenslave
> ```
>

## Instructions

Because you have a private-private configuration for your NICs in OLA, you will be unable to SSH into the server. Thus, you will need to leverage the IPMI tool to access the server.
<br>To do so, first log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au). In the `Bare Metal Cloud`{.action} section, select your server from `Dedicated Servers`{.action} and click the `IPMI`{.action} tab (1).

Next, click the `From a Java applet (KVM)`{.action} button (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

 A JNLP program will download. Open the program to enter the IPMI. Log in using valid credentials for the server.

By default, using an OVHcloud template, the NICs will be named either *ethX* or *enoX*. If you are not using an OVHcloud template, you can find the names of your interfaces using the following command:

```bash
ip a
```

> [!primary]
>
> This command will yield numerous "interfaces." If you are having trouble determining which ones are your physical NICs, the first interface will still have the server's public IP address attached to it by default.
>

Once we have determined the names of our two NICs, we will configure NIC bonding in the OS. Create the interfaces file in a text editor of your choice using the following command:

```bash
vi /etc/network/interfaces
```

This will open an empty text file. To configure the bond interface, insert the following at the bottom of the text file:

```bash
auto bond0
  iface bond0 inet static
  address 10.0.0.1/24
  bond-mode 802.3ad
  bond-slaves eno1 eno2
  bond-miimon 100
  bond-downdelay 200
  bond-lacp-rate 1
  bond-xmit_hash_policy layer2+3

  up ip -6 addr add fc10:0000:0000:0001::/64 dev bond0
```

> [!primary]
>
> You only need to add the last line to this file if you are planning on configuring private networking via IPv6.
>

Finally, we will restart the networking daemon using the following command:

```bash
systemctl restart networking
```

This restart may take several minutes since it is building the bond interface.  To test that our bond is working, ping another server on the same vRack. If it works, you are all set. If it does not, double check your configurations or try rebooting the server.

## Go further

[Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](../ola-manager/).

[How to Configure Your NIC for OVHcloud Link Aggregation in CentOS 7](../ola-centos7/).

[How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019](../ola-w2k19/).

Join our community of users on <https://community.ovh.com/en/>.
