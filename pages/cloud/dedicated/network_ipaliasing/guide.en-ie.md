---
title: 'Configuring IP aliasing'
slug: network-ipaliasing
excerpt: 'Find out how to add Additional IP addresses to your server configuration'
section: 'Network Management'
---

**Last updated 16th September 2021**

> [!primary]
>
> Since October 6th, 2022 our service "Failover IP" is named [Additional IP](https://www.ovhcloud.com/en-ie/network/additional-ip/). This has no further impact on any of its features or the functioning of your services.
>

## Objective

IP aliasing is a special network configuration for your OVHcloud dedicated servers, which allows you to associate multiple IP addresses with a single network interface.

**This guide explains how to add Additional IP addresses to your network configuration.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-ie/directory/) if you have difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-ie/bare-metal/) in your OVHcloud account
- An [Additional IP address](https://www.ovhcloud.com/en-ie/bare-metal/ip/) or an Additional IP block (RIPE)
- Administrative access (root) via SSH or GUI to your server
- Basic networking and administration knowledge

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en-ie/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en-ie/compare/) for more information.

## Instructions

The following sections contain the configurations for the most commonly used distributions/operating systems.

> [!primary]
>
> Concerning different distribution releases, please note that the proper procedure to configure your network interface as well as the file names may have been subject to change. We recommend to consult the manuals and knowledge resources of the respective OS versions if you experience any issues.
> 

### Debian 10/11

#### Step 1: Create a backup

First, make a copy of the config file, so that you can revert at any time:

```sh
cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### Step 2: Edit the config file

> [!primary]
> 
> Note that the names of the network interfaces in our examples may differ from your own. Please adjust to your appropriate interface names.
>

You can now modify the config file:

```sh
editor /etc/network/interfaces.d/50-cloud-init
```

You then need to add a secondary interface:

```bash
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

To ensure that the secondary interface is enabled or disabled whenever the `eth0` interface is enabled or disabled, you need to add the following line to the eth0 configuration:

```bash
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

If you have two Additional IPs to configure, the /etc/network/interfaces.d/50-cloud-init file should look like this:

```bash
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address ADDITIONAL_IP2
netmask 255.255.255.255
```
Or like this:

```bash
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IP 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
pre-down /sbin/ifconfig eth0:1 down
```

#### Step 3: Restart the interface

You now need to restart your interface:

```sh
/etc/init.d/networking restart
```

### Debian 6/7/8 and derivatives

#### Step 1: Create a backup

First, make a copy of the config file, so that you can revert at any time:

```sh
cp /etc/network/interfaces /etc/network/interfaces.bak
```

#### Step 2: Edit the config file

> [!primary]
>
Note that the names of the network interfaces in our examples may differ from your own. Please adjust to your appropriate interface names.
>

You can now modify the config file:

```sh
editor /etc/network/interfaces
```

You then need to add a secondary interface:

```bash
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

To ensure that the secondary interface is enabled or disabled whenever the `eth0` interface is enabled or disabled, you need to add the following line to the eth0 configuration:

```bash
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

If you have two Additional IPs to configure, the /etc/network/interfaces file should look like this:

```bash
auto eth0
iface eth0 inet static
address SERVER_IP
netmask 255.255.255.0
broadcast xxx.xxx.xxx.255
gateway xxx.xxx.xxx.254

auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address ADDITIONAL_IP2
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

# IP 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IP 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
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

You can now add your Additional IP to the config file, as follows:

```sh
editor /etc/systemd/network/50-default.network
```
```sh
[Address]
Address=ADDITIONAL_IP/32
Label=failover1 # optional
```

The label is optional. It’s just for distinguishing between your various Additional IPs.

#### Step 3: Restart the interface

You now need to restart your interface:

```sh
systemctl restart systemd-networkd
```
### Ubuntu 17.10 and following

Each Additional IP address will need its own line in the configuration file. The configuration file is called "50-cloud-init.yaml" and is located in /etc/netplan.


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

Next, edit the file with the content below, replacing `INTERFACE_NAME` `MAC_ADDRESS` and `ADDITIONAL_IP`:

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
            - ADDITIONAL_IP/32
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

First, replace the name of the `device`, then replace the existing IP with the Additional IP you have received:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # For CentOS use "static"
IPADDR="ADDITIONAL_IP"
NETMASK="255.255.255.255"
BROADCAST="ADDITIONAL_IP"
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

Now you have to edit the file to add the Additional IP. In Gentoo, an alias is added directly in the eth0 interface. You do not need to create an eth0:0 interface like in other distributions.

> [!warning]
>
> The server’s default IP and config_eth0= should stay on the same line. This is to ensure that certain OVHcloud-specific operations work properly.
> 

All you need to do is add a line break after the netmask **255.255.255.0** and add your Additional IP (SERVER_IP must be replaced by your server’s primary IP).

```sh
editor /etc/conf.d/net
```

You therefore need to add the following:

```bash
config_eth0=( "SERVER_IP netmask 255.255.255.0" "ADDITIONAL_IP netmask 255.255.255.255 brd ADDITIONAL_IP" )
```

The `/etc/conf.d/net` file must contain the following:


```bash
#This blank configuration will automatically use DHCP for any net.
# scripts in /etc/init.d. To create a more complete configuration,
# please review /etc/conf.d/net.example and save your configuration
# in /etc/conf.d/net (this file :]!).
config_eth0=( "SERVER_IP netmask 255.255.255.0"
"ADDITIONAL_IP netmask 255.255.255.255 brd ADDITIONAL_IP" )
routes_eth0=( "default gw SERVER_IP.254" )
```

In order to ping your Additional IP, simply restart the network interface.

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
IPADDR_1=ADDITIONAL_IP
NETMASK_1=255.255.255.255
LABEL_1=ens32:0
```

Finally, reboot your server to apply the changes.


### cPanel (on CentOS 6)

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
Then add the Additional IP to the file:

```bash
ADDITIONAL_IP:255.255.255.255:ADDITIONAL_IP
```
Next, add the IP in `/etc/ipaddrpool``:

```bash
ADDITIONAL_IP
```

#### Step 3: Restart the interface

You now need to restart your interface:

```sh
/etc/init.d/ipaliases restart
```


### Windows Servers

Windows servers are often DHCP-enabled in the network configuration. If you have already set up an Additional IP or switched your configuration to a fixed IP, go directly to the next step.

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
|ADDITIONAL_IP| Address of Additional IP you want to add|

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
3. Add an Additional IP
```sh
netsh interface ipv4 add address "NETWORK_ADAPTER" ADDITIONAL_IP 255.255.255.255
```

Your Additional IP is now functional.

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

Type in your Additional IP and the subnet mask **255.255.255.255**.

![TCP/IP Address](images/guides-network-ipaliasing-windows-2008-4.png){.thumbnail}

Click on `Add`{.action}.

Your Additional IP is now functional.


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

Then add this line at the end of the file: `ifconfig_INTERFACE_alias0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"`.

Replace **INTERFACE** and **ADDITIONAL_IP** with the name of your interface (identified in the first step) and your Additional IP, respectively. Here is an example:


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
In this file, enter the following: **ADDITIONAL_IP/32 up**, where **ADDITIONAL_IP** is your Additional IP. For example:

```bash
188.165.171.40/32 up
```

#### Step 3: Restart the interface

You now need to restart your interface:

```sh
svcadm restart svc:/network/physical:default
```

### Troubleshooting

First, restart your server from the command line or its GUI. If you are still unable to establish a connection from the public network to your alias IP and suspect a network problem, you need to reboot the server in [rescue mode](../rescue_mode/). Then you can set up the Additional IP address directly on the server.

Once you are connected to your server via SSH, enter the following command:

```bash
ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

To test the connection, simply ping your Additional IP from the outside. If it responds in rescue mode, that probably means that there is a configuration error. If, however, the IP is still not working, please inform our support teams by creating a support request in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) for further investigations.
 
## Go further

[Activating and using rescue mode](../rescue_mode/)

Join our community of users on <https://community.ovh.com/en/>.