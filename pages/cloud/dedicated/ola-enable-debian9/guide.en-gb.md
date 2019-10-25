---
title: 'How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9'
slug: ola-debian9
excerpt: 'Enable OVHcloud Link Aggregation in your Debian 9 server'
section: 'Advanced use'
---

**Last updated October 24th, 2019**

## Objective

OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server’s availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link. In this article, we will discuss how to bond your NICs to use them for OLA in Debian 9.  

## Requirements

[How to Configure Your NIC for OVHcloud Link Aggregation in the OVH Manager](https://docs.ovh.com/gb/en/dedicated/ola-manager){.external}

> [!warning]
>
> You will need to download the ifenslave package on the server before enabling OLA in the OVH Manager or API. To do so, please use the following command:
>
> ```
> apt install ifenslave
> ```
>

## Instructions

Because we have a private-private configuration for our NICs in OLA, we will be unable to SSH into the server. Thus, we will need to leverage the IPMI tool to access the server. To do so, first log in to the [OVH Manager](https://www.ovh.com/manager/){.external}.  Then select the server you wish to configure on the left-hand sidebar and click the **IPMI** tab.

![remote kvm](images/remote_kvm.png){.thumbnail}

Next, click the **From a Java applet (KVM)** button. A JNLP program will download. Open the program to enter the IPMI. Log in using valid credentials for the server.

By default, using an OVH template, the NICs will be named either *ethX* or *enoX*. If you are not using an OVH template, you can find the names of your interfaces using the following command:

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
  bond-xmit_hash_policy layer3+4

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

## Conclusion

OVHcloud gives our customers the freedom and flexibility to leverage their hardware in the way that best fits their needs. Now that you have read this article, you should be able to configure OVHcloud Link Aggregation (OLA) in Debian 9 in order to use both of your NICs as bonded private interfaces. 
