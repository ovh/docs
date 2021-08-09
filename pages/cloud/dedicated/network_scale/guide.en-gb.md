---
title: 'Configuring network bridging on Scale and HG servers'
slug: network-bridging-scale
excerpt: 'Find out how to configure your virtual machines for access to the public internet'
section: 'Network management'
hidden: true
---

**Last updated 6th August 2021**

## Objective

Bridged networking can be used to configure virtual machines on OVHcloud dedicated servers. The IP configurations need to be manually set up in order for it to work.

**This guide explains how to use network bridging to configure internet access for your virtual machines.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a specialist service provider if you have difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Requirements

- a [dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/) in your OVHcloud account
- a [failover IP address](https://www.ovhcloud.com/en-gb/bare-metal/ip/) or a failover IP block (RIPE)
- administrative access (root) via SSH or GUI to your server
- basic networking and administration knowledge

## Instructions

The following sections contain the configurations for the most commonly used distributions / operating systems.

> [!primary]
> Concerning different distribution releases, please note that the proper procedure to configure your network interface as well as the file names may have been subject to change. We recommend to consult the manuals and knowledge resources of the respective OS versions if you experience any issues.
> 

Code samples in the following instructions have to be replaced with your own values:

- SERVER_IP = The main IP address of your server
- FAILOVER_IP = The address of your failover IP
- GATEWAY_IP = The address of your default gateway
- NETWORK_INTERFACE = The name of the network interface (example: ens33f0)

### Determining the gateway address

To configure your virtual machines for internet access, you will need the gateway of your host machine (i.e. your dedicated server). The gateway IP address is made up of the first three octets of your server's main IP address, with 254 as the last octet. For example, if your server's main IP address was:

- 169.254.10.20

Your gateway address would be:

- 169.254.10.**254**


#### Debian

##### **Step 1: Edit the configuration file**

Open the network configuration file for editing:

```bash
nano /etc/network/interfaces.d/50-cloud-init
```

Once the file is open, amend it with the following entries:

```bash
auto NETWORK_INTERFACE
iface NETWORK_INTERFACE inet static
  address FAILOVER_IP/32
  dns-nameservers 213.186.33.99
  gateway GATEWAY_IP
```

##### **Step 2: Configure DNS**

Open `/etc/resolv.conf` and add the following line:

```bash
nameserver 213.186.33.99
```

Save and exit, then add write protection to the file with this command:

```bash
chattr +i /etc/resolv.conf
```

##### **Step 3: Restart the interface**

Apply the changes with the following command:

```bash
systemctl restart networking
```

#### Ubuntu

##### **Step 1: Edit the configuration file**

Open the network configuration file located in `/etc/netplan/` for editing. Here the file is called `50-cloud-init.yaml`.

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Once the file is open, add the IP configuration:

```yaml
network:
    version: 2
    ethernets:
        NETWORK_INTERFACE:
            accept-ra: false
            addresses:
            - FAILOVER_IP/32
            dhcp4: false
            gateway4: GATEWAY_IP
            nameservers:
                addresses:
                - 213.186.33.99
```

Save and close the file.

##### **Step 2: Apply the new network configuration**

You can test your configuration using this command:

```bash
netplan try
```

If it is correct, apply it using the following command:

```bash
netplan apply
```

#### Proxmox

##### **Step 1: Configure the Linux bridge**

Add the following line in `/etc/network/interfaces`:

```
source /etc/network/interfaces.d/*
```

Save and close the file.

Add the following lines in `/etc/network/interfaces.d/50-cloud-init`.

In this example, the network bridge (virtual NIC) used is `vmbr0`. Change this value if necessary.

```bash
auto lo
iface lo inet loopback
  dns-nameservers 213.186.33.99
 
auto NETWORK_INTERFACE
iface NETWORK_INTERFACE inet manual
  mtu 1500
 
iface NETWORK_INTERFACE inet static
  address FAILOVER_IP/32
  dns-nameservers 213.186.33.99
  gateway GATEWAY_IP
  
iface vmbr0 inet static
  address FAILOVER_IP/32
  dns-nameservers 213.186.33.99
  gateway GATEWAY_IP
  bridge-ports NETWORK_INTERFACE
  bridge-stp off
  bridge-fd 0
```

##### **Step 2: Apply the configuration**

Apply the changes with the following command:

```bash
systemctl restart networking
```

#### Red Hat EL 7

##### **Step 1: Edit the configuration file**

Add the following lines in `/etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE`:

```bash
TYPE=Ethernet
BOOTPROTO=none
IPADDR=FAILOVER_IP/32
GATEWAY=GATEWAY_IP
IPV4_FAILURE_FATAL=no
PEERDNS=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
IPV6_FAILURE_FATAL=no
DEVICE=NETWORK_INTERFACE
ONBOOT=yes
USERCTL=no
```

##### **Step 2: Configure DNS**

Open `/etc/resolv.conf` and add the following line:

```bash
nameserver 213.186.33.99
```

##### **Step 3: Restart the interface**

Apply the changes with the following command:

```bash
systemctl restart network
```


### Troubleshooting

First, restart your server from the command line or its GUI. If you are still unable to establish a connection from the public network to your VM and suspect a network problem, you need to reboot the server in [rescue mode](../ovh-rescue/). Then you can set up the bridging network interface directly on the host.

Once you are connected to your server via SSH, enter the following command:

```bash
ip address add FAILOVER_IP dev eth0
ip route add default via GATEWAY_IP dev eth0
```

To test the connection, ping your failover IP from the outside. If it responds in rescue mode, that probably means that there is a configuration error on the VM or the host. If, however, the IP is still not working, please create a ticket in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) to relay your test results to our support teams.
 
## Go further

[Activating and using rescue mode](../ovh-rescue/)

Join our community of users on <https://community.ovh.com/en/>.
