---
title: IPv6 Configuration
slug: network-ipv6
excerpt: This guide explains how to configure IPv6 addresses on our infrastructure.
section: Network Management
---


## Requirements
- A dedicated server
- IP failover(s) with associated vMAC
- Knowledge about [SSH](http://en.wikipedia.org/wiki/Secure_Shell){.external}
- Basic knowledge in networking

Internet Protocol version 6 (IPv6) is the latest version of the Internet Protocol (IP).

It is designed to address the long-anticipated address exhaustion of its predecessor, IPv4, by using 128-bits addresses instead of 32-bits addresses.

Every dedicated servers comes with a /64 IPv6 block. This represent 18,446,744,073,709,551,616 IPs addresses that you can use at your convenience.

IPv6 block assigned to your service

The IPv6 you want to configure

The prefix of your IPv6 Block (Ex: 2607:5300:60:62ac::/64 -> netmask = 64)

The gateway of your IPv6 Block


## Applying the configuration


> [!primary]
>
> OVH DNS server is able to resolve IPv6 domain names ! You may refer to this guide <docs/cloud/dedicated/network_bridging>
> to know how to add our DNS server in your
> configuration.
> 

Every dedicated server comes with a /64 IPv6 block to use for your convenience.

If you are using an OVH-provided OS template to install your server, you will see that you already have the first (MAIN) IPv6 configured right out of the box.

If you want to use more than one IPv6 configured on your server (or want to use it on a VM) you will need to have a failover IP configured with a vMAC. Otherwise, the IPv6 won’t be routed by our routers/switches.



> [!primary]
>
> The default Gateway for your IPv6 block (IPV6_GATEWAY) is always IP:v:6FF:FF:FF:FF:FF.
> Some examples :
> - The IPv6 of the server is 2607:5300:60:62ac::/64. The IPv6_GATEWAY will then be 2607:5300:60:62FF:FF:FF:FF:FF.
> - The IPv6 of the server is 2001:41D0:1:46e::/64. The IPV6_GATEWAY will then be 2001:41D0:1:4FF:FF:FF:FF:FF.
>

### Debian &amp; derivatives
**File: /etc/network/interfaces**

Assuming that your interface is eth0, the configuration should be like:


```bash
iface eth0 inet6 static
    address YOUR_IPV6
    netmask IPV6_PREFIX

    post-up /sbin/ip -f inet6 route add IPV6_GATEWAY dev eth0
    post-up /sbin/ip -f inet6 route add default via IPV6_GATEWAY
    pre-down /sbin/ip -f inet6 route del IPV6_GATEWAY dev eth0
    pre-down /sbin/ip -f inet6 route del default via IPV6_GATEWAY
```



> [!warning]
>
> Pre-emptively, we strongly suggest our customers to disable IPv6 autoconf and
> router advertising to prevent known issues.
> You can do so by adding the following lines to your sysctl.conf file:
> 
> ```bash
> net.ipv6.conf.eth0.autoconf=0
> net.ipv6.conf.eth0.accept_ra=0
> ```
> 
> Once this has been done, you can apply those rules by executing the following command:
> ```sh
> sysctl -p
> ```
> 

Once this has been configured, restart the network interface (or restart the Virtual Machine):

```sh
service networking restart
```
Finally to test the IPv6 connectivity, simply ping another IPv6 address:

```sh
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```
If you are not able to ping this IPv6 address, don't hesitate to [contact our support](https://www.ovh.co.uk/support/){.external} !


### Redhat &amp; derivatives


> [!warning]
>
> This example has been made with CentOS 7.0. Some result may differ in other redhat
> derivatives.
> 

Assuming that your interface is eth0, the configuration should be like:

**File: /etc/sysconfig/network-scripts/ifcfg-eth0**



> [!primary]
>
> In this example, I avoided the IPv4 Failover configuration to avoid confusion, but
> the IPv6 configuration is made in the same configuration file.
> 


```bash
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX ---> (basically your IPV6 in CIDR notation)
IPV6_DEFAULTGW=IPV6_GATEWAY
```


### FreeBSD 10
**File: /etc/rc.conf**

Assuming that your interface is em0, the configuration should be like:


```bash
ipv6_activate_all_interfaces="YES"
ipv6_defaultrouter="IPV6_GATEWAY"
ifconfig_em0_ipv6="inet6 YOUR_IPV6 prefixlen 64"
```



> [!warning]
>
> if you are using FreeBSD 8.3 or earlier version, the configure should look like:
> 
> ```bash
> ipv6_enable="YES"
> ipv6_defaultrouter="IPV6_GATEWAY"
> ipv6_ifconfig_em0="YOUR_IPV6 prefixlen 64"
> ```
>

### Windows 2008/2012/Hyper-V


> [!primary]
>
> Work in progress..
> 