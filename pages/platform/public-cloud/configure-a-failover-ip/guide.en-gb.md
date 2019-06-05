---
title: 'Configure a failover IP'
slug: configure_a_failover_ip
excerpt: 'This guide will show you how to configure a failover IP on various Linux distributions and on Windows'
section: Networking
---

**Last updated 31st January 2019**

## Objective

You may need to configure a failover IP address on your instances for one of the following reasons:

* you have a large number of websites on your instance
* you host international projects

In order to do this you can either buy or [import a failover IP address](https://docs.ovh.com/gb/en/public-cloud/import_a_failover_ip/){.external} for your [Public Cloud instances](https://www.ovh.co.uk/public-cloud/instances/){.external}.

However, failover IPs will not be automatically configured on your instance.

**This guide will show you how to configure a failover IP on various Linux distributions and on Windows.**

## Requirements

* access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
* a [Public Cloud Instance](https://www.ovh.co.uk/public-cloud/instances/){.external} in your OVH account
* a [failover IP address](https://www.ovh.co.uk/dedicated_servers/ip_failover.xml){.external} in your OVH account
* administrative (root) access to your instance with SSH (Linux only)
* administrative access to your instance via RDP (Windows only)

## Instructions

### Using Linux

#### Configure a failover IP with CentOS

##### Configuring the network interface

> [!primary]
>
For example purposes, we're using the following variables:
>
Network interface = eth0
>
Failover IP address = your_ip_address
>
IP alias = 1
>

First, connect to your instance via the command line and open up your the network configuration file.

```
vi /etc/sysconfig/network-scripts/ifcfg-eth0:1
```

Next, edit the network configuration file and add these lines:

```
DEVICE="eth0:1"
BOOTPROTO=static
IPADDR="your_ip_address"
NETMASK="255.255.255.255"
BROADCAST="your_ip_address"
ONBOOT=yes
```

##### Restarting the network service

Finally, restart the network service with the following command:

```
ifup ethX:1
```

#### Configure a failover IP with Debian

##### Configuring the network interface

> [!primary]
>
For example purposes, we're using the following variables:
>
Network interface = ens3
>
Failover IP address = your_ip_address
>
IP alias = 1
>

First, connect to your instance via the command line and open up your the network configuration file.

```
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Next, edit the file with the configuration shown below. This will prevent changes from being made to your network configuration automatically.

```
# network: {config: disabled}
```

Next, open the network configuration file for editing with the following command:

```
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```

Then edit the file with the following configuration:

```
auto ens3
iface ens3 inet dhcp

auto ens3:0
iface ens3:0 inet static
address your_ip_address 0
netmask 255.255.255.255

auto ens3:1
iface ens3:1 inet static
address your_ip_address 1
netmask 255.255.255.255
```

##### Restarting the network service

Finally, restart the network service with the following command:

```
service networking restart
```

#### Configure a failover IP with Fedora

##### Configuring the network interface

> [!primary]
>
For example purposes, we're using the following variables:
>
Network interface = eth0
>
Failover IP address = your_ip_address
>
IP alias = 1
>

First, connect to your instance via the command line and open up your the network configuration file.

```
vi /etc/sysconfig/network-scripts/ifcfg-eth0:1
```

Next, edit the network configuration file and add these lines:

```
DEVICE="eth0:1"
BOOTPROTO=static
IPADDR="your_ip_address"
NETMASK="255.255.255.255"
BROADCAST="your_ip_address"
ONBOOT=yes
```

##### Restarting the network service

Finally, restart the network service with the following command:

```
ifup eth0:1
```

### Using Windows

##### Configuring the network interface

> [!warning]
>
Windows does not allow you to configure a failover IP address in addition to configuring a main IP address in DHCP. You therefore have to reconfigure your network card with a manually-assigned IP address.
>

First, connect to your server using RDP. Once you have connected, open up the command prompt and run the following command to retrieve your network information:

```
C:\>ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : 
   Link-local IPv6 Address . . . . . : your_ipv6_address
   IPv4 Address. . . . . . . . . . . : your_ipv4_address
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : your_gateway_address
```
Make a note of your IPv4 address and subnet mask.

Go to your server's Control Panel and click `Network and Sharing Centre`{.action}.

![network and sharing centre](images/network-and-sharing-centre.jpg){.thumbnail}

Next, click `Change adapter settings`{.action}

![change adapter settings](images/adapter-settings.jpg){.thumbnail}

Now right-click on your network interface and then click `Properties`{.action}.

![modify network interface](images/network-interface.jpg){.thumbnail}

Now select `Internet Protocol Version 4`{.action} and click `OK`{.action}.

![IP settings](images/ip-settings.jpg){.thumbnail}

Manually edit your IP configuration, using the details you noted down from the `ipconfig` command earlier. When you have finished, click `Advanced`{.action}.

![configure static IP](images/static-ip.jpg){.thumbnail}

Finally, add your failover IP address to the configuration.

![advanced IP settings](images/advanced-ip-settings.jpg){.thumbnail}

## Go further

[Import a failover IP](https://docs.ovh.com/gb/en/public-cloud/import_a_failover_ip/){.external}

[Migrating a failover IP](https://docs.ovh.com/gb/en/public-cloud/migrating_a_failover_ip/){.external}

Join our community of users on <https://community.ovh.com/en/>.