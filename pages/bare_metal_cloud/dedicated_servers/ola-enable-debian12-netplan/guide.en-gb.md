---
title: How to Configure Your NIC for OVHcloud Link Aggregation in Debian 12 (Netplan)
excerpt: Enable OVHcloud Link Aggregation in your Debian 12 server
updated: 2024-10-03
---

## Objective

OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server’s availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link.

**This guide explains how to bond your NICs to use them for OLA in Debian 12 (Netplan configuration).**

## Requirements

- [Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)
- Access to the [OVHcloud Control Panel](/links/manager)

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

To do so, first log in to your [OVHcloud Control Panel](/links/manager). In the `Bare Metal Cloud`{.action} section, select your server from `Dedicated Servers`{.action} and click the `IPMI`{.action} tab (1).

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

Once we have determined the names of our two NICs, we will configure NIC bonding in the OS. 

### Fixed IP configuration

Replace the contents of `/etc/netplan/50-cloud-init.yaml` with:

```bash
vi /etc/netplan# cat 50-bond.yaml
```

To configure the bond interface, insert the following configuration:

```bash
network: 
    version: 2
    ethernets: 
        ens22f0np0:
            match: 
                macaddress: a1:b2:c3:d4:e5:c6
        ens22f1np1:
            match: 
                macaddress: a1:b2:c3:d4:e5:c7
    bonds: 
        bond0:
            # MAC address of the server's main interface
            macaddress: a1:b2:c3:d4:e5:c6
            accept-ra: false
            addresses: 
                - 141.94.154.196/32
                - 2001:41d0:254:c400::/56
            routes: 
                - on-link: true
                  to: default
                  via: 100.64.0.1
                - on-link: true
                  to: default
                  via: fe80::1
            nameservers: 
                addresses: 
                - 2001:41d0:3:163::1
            interfaces: 
                - ens22f0np0
                - ens22f1np1
            parameters: 
                mode: 802.3ad
                mii-monitor-interval: 100
                down-delay: 200
                lacp-rate: slow
                transmit-hash-policy: layer3+4
```

### DHCP configuration

Create the interfaces file in a text editor of your choice using the following command:

```bash
vi /etc/netplan# cat 50-cloud-init.yaml_dhcp
```

To configure the bond interface, insert the following configuration:

```bash
network: 
    version: 2
    ethernets: 
        ens22f0np0:
            match: 
                macaddress: a1:b2:c3:d4:e5:c6
        ens22f1np1:
            match: 
                macaddress: a1:b2:c3:d4:e5:c7
    bonds: 
        bond0:
            # MAC address of the server's main interface
            macaddress: a1:b2:c3:d4:e5:c6
            accept-ra: false
            dhcp4: true
            addresses: 
                - 2001:41d0:254:c400::/56
            routes: 
                - on-link: true
                  to: default
                  via: fe80::1
            nameservers: 
                addresses: 
                - 2001:41d0:3:163::1
            interfaces: 
                - ens22f0np0
                - ens22f1np1
            parameters: 
                mode: 802.3ad
                mii-monitor-interval: 100
                down-delay: 200
                lacp-rate: slow
                transmit-hash-policy: layer3+4
```

### Testing and applying the configuration

You can test your configuration using this command:

```bash
sudo netplan try
```

If it is correct, apply it using the following command:

```bash
sudo netplan apply
```

It may take several seconds for the bond interface to come up.

## Go further

[Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager).

[How to Configure Your NIC for OVHcloud Link Aggregation in Debian 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

[How to Configure Your NIC for OVHcloud Link Aggregation in CentOS 7](/pages/bare_metal_cloud/dedicated_servers/ola-enable-centos7).

[How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).

[How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Join our [community of users](/links/community).
