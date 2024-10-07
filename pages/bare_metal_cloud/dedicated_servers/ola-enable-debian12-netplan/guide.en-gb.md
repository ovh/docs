---
title: "How to Configure Your NIC for Link Aggregation in Debian 12 or Ubuntu 24.04 (Netplan)"
excerpt: "Enable Link Aggregation in your Debian 12 or Ubuntu 24.04 server"
updated: 2024-10-07
---

## Objective

OVHcloud Link Aggregation technology is designed by our teams to increase your server’s availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link. The available bandwidth is also doubled thanks to aggregation.

**This guide explains how to bond your NICs to use them for Link Aggregation in Debian 12 / Ubuntu 24.04 (Netplan configuration).**

## Requirements

- [Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

## Instructions

> [!primary]
>
> If you lose network connection to your server, follow the "**Open KVM via Java applet**" steps from [this guide](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

By default, using an OVHcloud template, the NICs will be named either *ethX* or *enoX*. If you are not using an OVHcloud template, you can find the names of your interfaces using the following command:

```bash
ip a
```

> [!primary]
>
> This command will yield numerous "interfaces." If you are having trouble determining which ones are your physical NICs, the first interface will still have the server's public IP address attached to it by default.
>

Once we have determined the names of our two NICs, we will configure NIC bonding in the OS.

### Static IP configuration

Replace the content of `/etc/netplan/50-cloud-init.yaml` with the following content:

```yaml
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
                - 203.0.113.1/32
                - 2001:db8:1:1b00:203:0:112:0/56
            routes: 
                - on-link: true
                  to: default
                  via: 100.64.0.1
                - on-link: true
                  to: default
                  via: fe80::1
            nameservers: 
                addresses: 
                - 203.0.113.20
                - 2001:db8:1:1b00:203:0:112:1
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

Replace the content of `/etc/netplan/50-cloud-init.yaml` with the following content:

```yaml
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
                - 2001:db8:1:1b00:203:0:112:0/56
            routes: 
                - on-link: true
                  to: default
                  via: fe80::1
            nameservers: 
                addresses: 
                - 2001:db8:1:1b00:203:0:112:1
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

### Applying the configuration

> [!primary]
> The `netplan try` command can't be used when configuring bonds.

Apply the configuration using the following command:

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
