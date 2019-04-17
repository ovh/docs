---
title: 'Configuring IP aliasing'
slug: network-ipaliasing
excerpt: 'This guide explains how to add failover IPs to your configuration'
section: 'Network Management'
---

**Last updated 4th April 2019**

## Objective

IP aliasing is a special network configuration for your OVH Dedicated Server, which allows you to associate multiple IP addresses with a single network interface.

**This guide explains how to make this addition.**

## Requirements

* a [Dedicated Server](https://www.ovh.co.uk/dedicated_servers/){.external}
* a [failover IP address](https://www.ovh.co.uk/dedicated_servers/ip_failover.xml){.external} or a failover IP block (RIPE)
* administrative (root) access to the server via SSH (Linux, Unix) or remote desktop (Windows)

## Instructions

Here are the configurations for the main distributions/operating systems:


### Debian 6/7/8 and derivatives

#### Step 1: Create a backup

First, make a copy of the config file, so that you can revert at any time:

```sh
cp /etc/network/interfaces /etc/network/interfaces.bak
```

#### Step 2: Edit the config file

You can now modify the config file:

```sh
editor /etc/network/interfaces
```

You then need to add a secondary interface:

```bash
auto eth0:0
iface eth0:0 inet static
address FAILOVER_IP
netmask 255.255.255.255
```

To ensure that the secondary interface is enabled or disabled whenever the `eth0` interface is enabled or disabled, you need to add the following line to the eth0 configuration:

```bash
post-up /sbin/ifconfig eth0:0 FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP
pre-down /sbin/ifconfig eth0:0 down
```

If you have two failover IPs to configure, the /etc/network/interfaces file should look like this:

```bash
auto eth0
iface eth0 inet static
address SERVER_IP
netmask 255.255.255.0
broadcast xxx.xxx.xxx.255
gateway xxx.xxx.xxx.254

auto eth0:0
iface eth0:0 inet static
address FAILOVER_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address FAILOVER_IP2
netmask 255.255.255.255
```
Or like this:
```bash
auto eth0
iface eth0 inet static
address SERVER_IP
netmask 255.255.255.0
broadcast xxx.xxx.xxx.255
gateway xxx.xxx.xxx.254

# IPFO 1
post-up /sbin/ifconfig eth0:0 FAILOVER_IP1 netmask 255.255.255.255 broadcast FAILOVER_IP1
pre-down /sbin/ifconfig eth0:0 down

# IPFO 2
post-up /sbin/ifconfig eth0:1 FAILOVER_IP2 netmask 255.255.255.255 broadcast FAILOVER_IP2
pre-down /sbin/ifconfig eth0:1 down
```

#### Step 3: Restart the interface

You now need to restart your interface:

```sh
/etc/init.d/networking restart
```


### Debian 9+, Ubuntu 17.04, Fedora 26+ and Arch Linux

On these distributions, the naming of interfaces as eth0, eth1 (and so on) is abolished. We will therefore use `systemd-network` more generally.

#### Step 1: Create a backup

First, make a copy of the config file, so that you can revert at any time:

```sh
cp /etc/systemd/network/50-default.network /etc/systemd/network/50-default.network.bak
```

#### Step 2: Edit the config file

You can now add your failover IP to the config file, as follows:

```sh
editor /etc/systemd/network/50-default.network
```
```sh
[Address]
Address=FAILOVER_IP/32
Label=failover1 # optional
```

The label is optional. It’s just for distinguishing between your various failover IPs.

#### Step 3: Restart the interface

You now need to restart your interface:

```sh
systemctl restart systemd-networkd
```
### Ubuntu 17.10 and following

Each failover IP address will need its own line in the configuration file. The configuration file is called 50-cloud-init.yaml and is located in /etc/netplan.


#### Step 1: Determine the interface

```sh
ifconfig
```
Note the interface name and its MAC address


#### Step 2: Create the configuration file

Connect to your server via SSH and run the following command:

```sh
editor /etc/netplan/50-cloud-init.yaml
```

Next, edit the file with the content below, replacing `INTERFACE_NAME` `MAC_ADDRESS` and `FAILOVER_IP`:

```sh
network:
    version: 2
    ethernets:
        INTERFACE_NAME:
            dhcp4: true
            match:
                macaddress: MAC_ADDRESS
            set-name: INTERFACE_NAME
            addresses:
            - FAILOVER_IP/32
```

Save and close the file. You can test the configuration with the following command:

```sh
netplan try
```

#### Step 3: Apply the change

Next, run the following commands to apply the configuration:

```sh
netplan apply
```


### CentOS and Fedora (25 and earlier)

#### Step 1: Create the config file

First, make a copy of the source file so that you can use it as a template:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Step 2: Edit the config file

You can now modify the eth0:0 file in order to replace the IP:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

First, replace the name of the `device`, then replace the existing IP with the failover IP you have received:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # For CentOS use "static"
IPADDR="FAILOVER_IP"
NETMASK="255.255.255.255"
BROADCAST="FAILOVER_IP"
```

#### Step 3: Start the alias interface

You now need to start your alias interface:

```sh
ifup eth0:0
```


### Gentoo

#### Step 1: Create a backup

First, make a copy of the config file, so that you can revert at any time:

```sh
cp /etc/conf.d/net /etc/conf.d/net.bak
```

#### Step 2: Edit the config file

Now you have to edit the file to add the failover IP. In Gentoo, an alias is added directly in the eth0 interface. You do not need to create an eth0:0 interface like in other distributions.

> [!warning]
>
> The server’s default IP and config_eth0= should stay on the same line. This is to ensure that certain OVH-specific operations work properly.
> 

All you need to do is add a line break after the netmask **255.255.255.0** and add your failover IP (SERVER_IP must be replaced by your server’s primary IP).

```sh
editor /etc/conf.d/net
```

You therefore need to add the following:

```bash
config_eth0=( "SERVER_IP netmask 255.255.255.0" "FAILOVER_IP netmask 255.255.255.255 brd FAILOVER_IP" )
```

The `/etc/conf.d/net` file must contain the following:


```bash
#This blank configuration will automatically use DHCP for any net.
# scripts in /etc/init.d. To create a more complete configuration,
# please review /etc/conf.d/net.example and save your configuration
# in /etc/conf.d/net (this file :]!).
config_eth0=( "SERVER_IP netmask 255.255.255.0"
"FAILOVER_IP netmask 255.255.255.255 brd FAILOVER_IP" )
routes_eth0=( "default gw SERVER_IP.254" )
```

In order to ping your failover IP, simply restart the network interface.

#### Step 3: Restart the interface

You now need to restart your interface:

```sh
/etc/init.d/net.eth0 restart
```


### openSUSE

#### Step 1: Create a backup

First, make a copy of the config file, so that you can revert at any time:

```sh
cp /etc/sysconfig/network/ifcfg-ens32 /etc/sysconfig/network/ifcfg-ens32.bak
```

#### Step 2: Edit the config file

Open the file:

```sh
editor /etc/sysconfig/network/ifcfg-ens32
```

Then add the following:

```bash
IPADDR_1=FAILOVER_IP
NETMASK_1=255.255.255.255
LABEL_1=ens32:0
```

Finally, reboot your server to apply the changes.


### cPanel

#### Step 1: Create a backup

First, make a copy of the config file, so that you can revert at any time:

```sh
cp /etc/ips /etc/ips.bak
```

#### Step 2: Edit the config file

You then need to edit the /etc/ips file:

```sh
editor /etc/ips
```
Then add the failover IP to the file:

```bash
FAILOVER_IP:255.255.255.255:FAILOVER_IP
```
Next, add the IP in `/etc/ipaddrpool``:

```bash
FAILOVER_IP
```

#### Step 3: Restart the interface

You now need to restart your interface:

```sh
/etc/init.d/ipaliases restart
```


### Windows Servers

Windows servers are often DHCP-enabled in the network configuration. If you have already set up a failover IP or switched your configuration to a fixed IP, go directly to the next step.

Otherwise, you need to first switch from a network-level DHCP configuration to a fixed IP configuration.

Open the command prompt `cmd`{.action} or `powershell`{.action}, then type the following command:


```sh
ipconfig /all
```

This will return a result similar to the following example:

![Result of "ipconfig /all" command](images/guides-network-ipaliasing-windows-2008-1.png){.thumbnail}

Identify and write down your IPv4, subnet mask, default gateway and the name of the network interface controller (network adapter).

In our example, the server IP is **94.23.229.151**.

You can perform the next steps via either a command-line interface or the graphical user interface.

#### Via a command-line interface (recommended)

In the commands below, you need to replace:

|Command|Value|
|---|---|
|NETWORK_ADAPTER| Name of the network adapter (in our example: Local Area Connection)|
|IP_ADDRESS| Server IP address (in our example: 94.23.229.151)|
|SUBNET_MASK| Subnet mask (in our example: 255.255.255.0)|
|GATEWAY| Default gateway (in our example: 94.23.229.254)|
|IP_ADDRESS_FAILOVER| Address of failover IP you want to add|

> [!warning]
>
> Be careful – the server will no longer be accessible if you enter incorrect information. You will then have to make the corrections in Winrescue mode or via the KVM.
> 

In the command prompt:

1. Switch to a fixed IP
```sh
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```
2. Set the DNS server
```sh
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```
3. Add a failover IP
```sh
netsh interface ipv4 add address "NETWORK_ADAPTER" IP_ADDRESS_FAILOVER 255.255.255.255
```

Your failover IP is now functional.

#### Via the graphical user interface

1. Go to `Start`{.action}> `Control Panel`{.action}>` Network and Internet`{.action}> `Network and Sharing Centre`{.action}> `Change Adapter Settings `{.action}(in the left-hand menu).
2. Right-click on `Local Area Connection`{.action}.
3. Click on `Properties`{.action}.
4. Select `Internet Protocol Version 4 (TCP/IPv4)`{.action}, then click on `Properties`{.action}.
5. Click on `Use the following IP address`{.action} and type in your server’s primary IP, subnet mask and default gateway information obtained by using the `ipconfig`{.action} command above. In the "Preferred DNS Server" box, type 213.186.33.99.

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}


> [!warning]
>
> Be careful – the server will no longer be accessible if you enter incorrect information. You will then have to make the corrections in Winrescue mode or via the KVM.
> 

Then click on `Advanced`{.action} (still in the `TCP/IP Settings`{.action}).

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}

In the `IP Address`{.action} section, click `Add`{.action}:

![Advanced TCP/IPv4 Settings](images/guides-network-ipaliasing-windows-2008-3.png){.thumbnail}

Type in your failover IP and the subnet mask **255.255.255.255**.

![TCP/IP Address](images/guides-network-ipaliasing-windows-2008-4.png){.thumbnail}

Click on `Add`{.action}.

Your failover IP is now functional.


### FreeBSD

#### Step 1: Determine the interface

Determine the name of your primary network interface. You can use the `ifconfig`{.action} command for this operation:

```sh
ifconfig
```

This will return the following:

```sh
ifconfig
>>> nfe0: flags=8843 metric 0 mtu 1500
>>> options=10b
>>> ether 00:24:8c:d7:ba:11
>>> inet 94.23.196.18 netmask 0xffffff00 broadcast 94.23.196.255
>>> inet 87.98.129.74 netmask 0xffffffff broadcast 87.98.129.74
>>> media: Ethernet autoselect (100baseTX )
>>> status: active
>>> lo0: flags=8049 metric 0 mtu 16384
>>> options=3
>>> inet6 fe80::1%lo0 prefixlen 64 scopeid 0x2
>>> inet6 ::1 prefixlen 128
>>> inet 127.0.0.1 netmask 0xff000000 v comsdvt#
```

In our example, the name of the interface is therefore **nfe0**.

#### Step 2: Create a backup

Next, make a copy of the config file, so that you can revert at any time:

```sh
cp /etc/rc.conf /etc/rc.conf.bak
```

#### Step 3: Edit the config file

Edit the /etc/rc.conf file:

```sh
editor /etc/rc.conf
```

Then add this line at the end of the file: `ifconfig_INTERFACE_alias0="inet FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP"`.

Replace **INTERFACE** and **FAILOVER_IP** with the name of your interface (identified in the first step) and your failover IP, respectively. Here is an example:


```bash
ifconfig_nfe0_alias0="inet 87.98.129.74 netmask 255.255.255.255 broadcast 87.98.129.74"
```

#### Step 4: Restart the interface

You now need to restart your interface:

```sh
/etc/rc.d/netif restart && /etc/rc.d/routing restart
```


### Solaris

#### Step 1: Determine the interface

Determine the name of your primary network interface. You can use the `ifconfig`{.action} command for this operation:

```sh
ifconfig -a
```

This will return the following:

```sh
ifconfig -a
lo0:     flags=2001000849 mtu 8232 index 1 
         inet 127.0.0.1 netmask ff000000 
e1000g0: flags=1000843 mtu 1500 index 2 
         inet 94.23.41.167 netmask ffffff00 broadcast 94.23.41.255 
         ether 0:1c:c0:f2:be:42
```

In our example, the name of the interface is therefore **e1000g0**.

#### Step 2: Create the config file

```sh
editor /etc/hostname.e1000g0:1
```
In this file, enter the following: **FAILOVER_IP/32 up**, where **FAILOVER_IP** is your failover IP. For example:

```bash
188.165.171.40/32 up
```

#### Step 3: Restart the interface

You now need to restart your interface:

```sh
svcadm restart svc:/network/physical:default
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
