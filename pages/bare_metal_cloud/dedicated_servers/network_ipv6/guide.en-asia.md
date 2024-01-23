---
title: 'Configuring IPv6 on dedicated servers'
excerpt: 'Find out how to configure IPv6 addresses on our infrastructure'
updated: 2024-01-16
---

## Objective

Internet Protocol version 6 (IPv6) is the latest version of the Internet Protocol (IP). It is designed to address the long-anticipated address exhaustion of its predecessor, IPv4, by using 128-bit addresses instead of 32-bit addresses. Most OVHcloud dedicated servers are delivered with a /64 IPv6 block, with the exception of High Grade and Scale servers, which are delivered with a /56 IPv6 block. This represents over 18 quintillion IP addresses that you can use at your convenience.

**This guide explains how to configure IPv6 addresses on your server using various examples.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/asia/directory/) and/or discuss the issue with [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Requirements

- A [dedicated server](https://www.ovhcloud.com/asia/bare-metal/) in your OVHcloud account
- All your IPv6 information (prefix, gateway etc.)
- Basic knowledge of [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) and networking

> [!warning]
> Please note that Kimsufi servers are only provided with a single IPV6 block (/128). IPv6 will be configured automatically when installing the OS.
>

## Instructions

The following sections contain configurations for the distributions we currently offer and the most commonly used distributions/operating systems. The first step is always to log in to your server via SSH or a GUI login session (RDP for a Windows server).

If you are using an OVHcloud-provided Linux OS template to install your server, you will need to configure the first (main) IPv6 on the server.

For example, if we have assigned to your server the IPv6 range: `2607:5300:xxxx:xxxx::/64` you may use as main IPv6 of your server the IPv6: `2607:5300:xxxx:xxxx::1/64`.

If the main IPv6 is configured upon installation, proceed with the next one.

Please take note of the following terminology that will be used in code examples and instructions of the guide sections below:

|Term|Description|Example|
|---|---|---|
|YOUR_IPV6|An IPv6 address from the IPv6 block assigned to your server|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|The prefix (or *netmask*) of your IPv6 block, usually 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|The gateway of your IPv6 block|2607:5300:xxxx:ff:ff:ff:ff:ff or fe80::1|

### Default Gateway

The first step is to identify the IPv6 block and gateway assigned to your server. There are two ways of doing this:

  - [retrieving the network information via the OVHcloud Control Panel](#viacontrolpanel)
  - [retrieving the network information via the OVHcloud API](#viaapi)

#### Via the OVHcloud Control Panel <a name="viacontrolpanel"></a>

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), go to the `Bare Metal Cloud`{.action} section and select your server from `Dedicated servers`{.action}.

The IPv6 block and gateway assigned to your server will appear in the `Network` section of the `General Information`{.action} tab. Once you have copied them, continue with applying the IPv6 configuration.

![configureipv6](images/ipv6_information.png){.thumbnail}

#### Via the OVHcloud API <a name="viaapi"></a>

Another way to retrieve the networking information for your server is to [use the OVHcloud API](/pages/manage_and_operate/api/first-steps).

Execute the following API call, indicating the internal server name (example: `ns3956771.ip-169-254-10.eu`):

> [!api]
>
> @api {v1} /dedicated/server/ {GET} /dedicated/server/{serviceName}/specifications/network
>

> [!warning]
>
> Before modifying a configuration file, always create a backup of the original.
>

### Debian and Debian-based operating systems (excluding Debian 12)

> [!warning]
>
> Before following the steps below, we strongly suggest that you disable IPv6 autoconf and router advertising to prevent known issues. You can do so by adding the following lines to your `sysctl.conf` file, which is located in /etc/sysctl.conf:
> 
> `net.ipv6.conf.all.autoconf=0`
> 
> `net.ipv6.conf.all.accept_ra=0`
> 
> Once this has been done, you can apply those rules by executing the following command: `sh sysctl -p`.
> 

#### Step 1: Use SSH to connect to your server

Find more information in [this guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#logging-on-to-your-server).

#### Step 2: Create a backup

Your server's network configuration file is either located in `/etc/network/interfaces` or `/etc/network/interfaces.d`. Before proceeding, create a backup of your file using one of the following commands:

```sh
cp /etc/network/interfaces/50-cloud-init /etc/network/interfaces/50-cloud-init.bak
```

Or

```sh
cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### Step 3: Amend the network configuration file

Amend the file so that it looks like the example below, replacing `YOUR_IPv6` and `IPv6_GATEWAY` with your own values. In this example, the network interface is called `eth0`. The interface on your server may differ.

```console
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 64

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```

Additional IPv6 addresses can be added using the following command:

```sh
~# sudo /sbin/ifconfig eth0 inet6 add YOUR_2nd_IPv6/64
```

**Configuration example:**

If we want to configure the main IPV6 `2607:5300:adce:f2cd::1/64` in the block `2607:5300:adce:f2cd::/64` with gateway `2607:5300:adce:ff:ff:ff:ff:ff`.

First we open our configuration file with an editor tool, in this example, we are using `nano`:

```sh
~# sudo nano /etc/network/interfaces.d/50-cloud-init
```

Next, we amend the configuration file:

```console
iface eth0 inet6 static 
    address 2607:5300:adce:f2cd::1/64 
    netmask 64

post-up /sbin/ip -f inet6 route add 2607:5300:adce:ff:ff:ff:ff:ff dev eth0 
post-up /sbin/ip -f inet6 route add default via 2607:5300:adce:ff:ff:ff:ff:ff
pre-down /sbin/ip -f inet6 route del 2607:5300:adce:ff:ff:ff:ff:ff dev eth0
pre-down /sbin/ip -f inet6 route del default via 2607:5300:adce:ff:ff:ff:ff:ff
```

For multiple IPv6 addresses:

```sh
~# sudo /sbin/ifconfig eth0 inet6 add YOUR_2nd_IPv6/64
~# sudo /sbin/ifconfig eth0 inet6 add YOUR_3rd_IPv6/64
~# sudo /sbin/ifconfig eth0 inet6 add YOUR_4th_IPv6/64
```

#### Step 4: Save the file and apply the changes

Save your changes to the file and then restart the network or reboot your server to apply the changes.

```sh
~# sudo /etc/init.d/networking restart
```

#### Step 5: Test the IPv6 connectivity

You can test the IPv6 connectivity by running the commands shown below:

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

If you are not able to ping this IPv6 address, check your configuration and try again. Also ensure that the machine you are testing from is connected with IPv6. If it still does not work, please test your configuration in [Rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Fedora 37 and later

Fedora now uses keyfiles. NetworkManager previously stored network profiles in ifcfg format in this directory: `/etc/sysconfig/network-scripts/`. However, the ifcfg format is now deprecated. By default, NetworkManager no longer creates new profiles in this format. The configuration file is now found in `/etc/NetworkManager/system-connections/`. 

In this example, our file is called `cloud-init-eno1.nmconnection`.

#### Step 1: Use SSH to connect to your server

```sh
~# ssh user@serverIP
```

#### Step 2: Create a backup

> [!primary]
> 
> Note that the name of the network file in our example may differ from your own. Please adjust to your appropriate name.
>

First, make a copy of the configuration file, so that you can revert at any time:

```sh
~# cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

#### Step 3: Amend the network configuration file

Amend the file by adding the following lines to it, do not modify any thing in the original file. Replace the generic elements (i.e. YOUR_IPV6, PREFIX and IPV6_GATEWAY) with your specific values. Also, we have omitted the IPv4 configuration to avoid confusion, but the IPv6 configuration is made in the same configuration file.

```bash
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/PREFIX
gateway=IPv6_GATEWAY
```

If you need to configure more IPv6 addresses, your configuration should look like this:

```bash
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/PREFIX
address2=YOUR_2nd_IPV6/PREFIX
address3=YOUR_3rd_IPV6/PREFIX
gateway=IPv6_GATEWAY
```

**Configuration example:**

If we want to configure the main IPV6 `2607:5300:adce:f2cd::1/64` in the block `2607:5300:adce:f2cd::/64` with gateway `2607:5300:adce:ff:ff:ff:ff:ff`.

First we open our configuration file with an editor tool, in this example, we are using `nano`:

```sh
~# sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

Next, we amend the configuration file:

```bash
[ipv6]
method=auto
may-fail=true
address1=2607:5300:adce:f2cd::1/64
gateway=2607:5300:adce:ff:ff:ff:ff:ff
```

For multiple IPV6 addresses:

```bash
[ipv6]
method=auto
may-fail=true
address1=2607:5300:adce:f2cd::1/64
address2=2607:5300:adce:f2cd::2/64
address3=2607:5300:adce:f2cd::3/64
gateway=2607:5300:adce:ff:ff:ff:ff:ff
```

#### Step 4: Save the file and apply the changes

Save your changes to the file and then restart the network or reboot your server to apply the changes.

```sh
~# sudo systemctl restart NetworkManager
```

#### Step 5: Test the IPv6 connectivity

You can test the IPv6 connectivity by running the commands shown below:

```bash
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

If you are not able to ping this IPv6 address, check your configuration and try again. Also ensure that the machine you are testing from is connected with IPv6. If it still does not work, please test your configuration in [Rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Debian 12, Ubuntu 20.04 and following

The network configuration files are located in the directory `/etc/netplan/`. By default, the main configuration file is called `50-cloud-init.yaml`.

#### Step 1: Use SSH to connect to your server

```sh
~# ssh user@serverIP
```

#### Step 2: Create the network configuration file

The best approach is to create a separate configuration file with a .yaml extension for setting up IPv6 addresses in the `/etc/netplan/` directory. This way, you can easily revert the changes in case of an error.

In our example, our file is named `51-cloud-init-ipv6.yaml`:

```sh
~# sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
```

#### Step 3: Amend the network configuration file

Using a text editor, amend the `51-cloud-init-ipv6.yaml` file by adding the following lines to the file as shown in the example below.

Replace the generic elements (i.e. YOUR_IPV6, IPV6_PREFIX and IPV6_GATEWAY) as well as the network interface (if your server is not using **eno3**) with your specific values.

The configuration file should look like the example below:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

If you need to configure more IPv6 addresses, your configuration should look like this:


```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
              - YOUR_2nd_IPV6/IPv6_PREFIX
              - YOUR_3rd_IPV6/IPv6_PREFIX
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

> [!warning]
> It is important to respect the alignment of each element in this file as represented in the example above. Do not use the tab key to create your spacing. Only the space key is needed.
>

**Configuration example:**

If we want to configure the main IPV6 `2607:5300:adce:f2cd::1/64` in the block `2607:5300:adce:f2cd::/64` with gateway `2607:5300:adce:ff:ff:ff:ff:ff`.

First we open our configuration file with an editor tool, in this example, we are using `nano`:

```sh
~# sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

Next, we amend the configuration file:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

For multiple IPV6 addresses:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
              - 2607:5300:adce:f2cd::2/64
              - 2607:5300:adce:f2cd::3/64
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

#### Step 4: Test and apply the configuration

You can test your configuration using this command:

```sh
~# sudo netplan try
```

If it is correct, apply it using the following command:

```sh
~# sudo netplan apply
```

#### Step 5: Test the IPv6 connectivity

You can test the IPv6 connectivity by running the command shown below:

```bash
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### CentOS 7, AlmaLinux (8 & 9) and Rocky Linux (8 & 9)

The network configuration file is located in the directory `/etc/sysconfig/network-scripts`. In our example, it is called `ifcfg-eth0`.

#### Step 1: Use SSH to connect to your server

```sh
~# ssh user@serverIP
```

#### Step 2: Create a backup

> [!primary]
> 
> Note that the name of the network file in our example may differ from your own. Please adjust to your appropriate name.
>

First, make a copy of the configuration file, so that you can revert at any time:

```sh
~# cp -r /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```
#### Step 3: Amend the network configuration file

Amend the file by adding the following lines if they are missing. Replace the generic elements (i.e. YOUR_IPV6 and IPV6_GATEWAY) with your specific values. Also, we have omitted the IPv4 configuration to avoid confusion, but the IPv6 configuration is made in the same configuration file.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6
IPV6_DEFAULTGW=IPV6_GATEWAY
```

If you need to configure more IPv6 addresses, add the following line:

```console
IPV6ADDR_SECONDARIES=YOUR_2nd_IPV6 YOUR_3rd_IPV6 etc..."
```

**Configuration example:**

If we want to configure the main IPV6 `2607:5300:adce:f2cd::1/64` in the block `2607:5300:adce:f2cd::/64` with gateway `2607:5300:adce:ff:ff:ff:ff:ff`.

First we open our configuration file with an editor tool, in this example, we are using `nano`:

```sh
~# sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
```

Next, we amend the configuration file:

```console
BOOTPROTO=dhcp
DEVICE=eth0
HWADDR=00:3a:de:45:Cs:22
ONBOOT=yes
STARTMODE=auto
TYPE=Ethernet
USERCTL=no
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::1
IPV6_DEFAULTGW=2607:5300:adce:ff:ff:ff:ff:ff
```

For multiple IPV6 addresses:

```console
BOOTPROTO=dhcp
DEVICE=eth0
HWADDR=00:3a:de:45:Cs:22
ONBOOT=yes
STARTMODE=auto
TYPE=Ethernet
USERCTL=no
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::1
IPV6_DEFAULTGW=2607:5300:adce:ff:ff:ff:ff:ff
IPV6ADDR_SECONDARIES="2607:5300:adce:f2cd::2 2607:5300:adce:f2cd::3"
```

#### Step 4: Save the file and apply the changes

Save your changes to the file and then restart the network or reboot your server to apply the changes.

```sh
~# sudo systemctl restart network
```

#### Step 5: Test the IPv6 connectivity

You can test the IPv6 connectivity by running the command shown below:

```bash
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### Windows Server 2016 and later

#### Step 1: Use RDP to connect to your server

Find more information in [this guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#logging-on-to-your-server).

#### Step 2: Open your server's network configuration

First, right-click on the network icon in the notification area to go to the `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/ipv6_network_sharing_center.png){.thumbnail}

Click `Change adapter settings`{.action}.

![Change adapter settings](images/ipv6_change_adapter_settings.png){.thumbnail}

Right-click your network adapter, then click `Properties`{.action}.

![Network Adapter Properties](images/ipv6_network_adapter_properties.png){.thumbnail}

Select `Internet Protocol Version 6`{.action}, then click `Properties`{.action}.

![Properties](images/ipv6_properties.png){.thumbnail}

#### Step 3: Amend the network configuration 

Enter your IPv6 configuration (`IPv6 address` and `Default Gateway`) and click `OK`{.action}.

![Properties](images/ipv6_configuration.png){.thumbnail}

### Troubleshooting

If after testing your connection you are still experiencing problems, please create a support request to review your configurations. It is necessary to provide:

- The operating system name and version you are using on your server.
- The name and directory of the network configuration file.
- The content of that file.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
