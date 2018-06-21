---
title: 'Configuring the vRack on your dedicated servers'
slug: configuring-vrack-on-dedicated-servers
excerpt: 'Help on how to configure the vRack on two or more dedicated servers'
section: 'Network Management'
---

**Last updated 21st June 2018**

## Objective

The vRack or virtual rack allows multiple servers to be grouped together (regardless of number and physical location in our datacentre) and connects them to a virtual switch within the same private network. Your servers can communicate privately and securely between each other (within a dedicated VLAN).

**This guide will help you to configure the vRack on two or more dedicated servers.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requirements

- a [vRack](https://www.ovh.co.uk/solutions/vrack/){.external} service activated in your account
- two or more [vRack compatible servers](https://www.ovh.co.uk/dedicated_servers/){.external}
- administrative (root) access to the server via SSH
- access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
- your chosen private IP address range


## Instructions

### Step 1: Add your servers to the vRack

Once the vRack is in your account go to the `Cloud`{.action} section of your control panel and select the `vRack`{.action} menu on the left.

Select your vRack from the list and then, from the list of eligible services, select the servers you want to add to the vRack and then click the `Add`{.action} button.

![vRack selection](images/vrack_selection.png){.thumbnail}

### Step 2: Configure your network interfaces

For example purposes, we’ll use an internal IP address range of *192.168.0.0/16*.

Also, we’ve used the names of eth1 and eno4 for the secondary network interface. Your servers may use a different naming convention. To be sure, please check with the following commands.

List your network interfaces with the following command:

```sh
ifconfig -a | grep eth | awk '{print $ 1}'
```

The first interface in the list is your primary network connection. you can check which one is active with the following command:

```sh
ifconfig eth1 up
```

```sh
ethtool eth1 | grep "Link detected"
```

If the command returns **Link detected**: no then this is the network interface you should use for your vRack configuration after running this command:

```sh
ifconfig eth1 down
```

#### CentOS 6 and 7

Open the network interface configuration file with the following command:

```sh
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Press the `I` key on your keyboard to enter Insert Mode.

Configure the secondary network interface as follows: 

```sh
DEVICE=eth1
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

In the example above, you can use any private IP range of your choice and any address within that range.

Save your changes to the network config file and exit the editor. Then repeat the process for your other server(s) and assign a unique IP address from your internal range. Once you have done this, your servers will be able to communicate with each other on the private network.

#### Linux (Debian 7, 8)

Open the network interface configuration file with the following command:

```sh
nano /etc/network/interfaces
```

Configure the secondary network interface as follows:

```sh
auto eth1
iface eth1 inet static
           address 192.168.0.1
           netmask 255.255.0.0
```

In the example above you can use any private IP range of your choice and any address within that range.

Save your changes to the network config file and exit the editor. Then repeat the process for your other server(s) and assign a unique IP address from your internal range. Once you have done this, your servers will be able to communicate with each other on the private network.

#### Linux (Debian 9)

Open the network interface configuration file with the following command:

```sh
nano /etc/network/interfaces
```

Configure the secondary network interface as follows:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

In the example above you can use any private IP range of your choice and any address within that range.

Save your changes to the network config file and exit the editor. Then repeat the process for your other server(s) and assign a unique IP address from your internal range. After doing this, your servers will be able to communicate with each other on the private network.

Repeat this process for your other server(s) and assign a unique IP address from your internal range. After doing this, your servers will be able to communicate with each other on the private network.

#### Ubuntu Server 16

Open the network interface configuration file with the following command:

```sh
vi /etc/network/interfaces
```

Press the `I` key on your keyboard to enter Insert Mode and then configure the secondary network interface as follows:

```sh
auto eth1
iface eth1 inet static
           address 192.168.0.1
           netmask 255.255.0.0
```

In the example above you can use any private IP range of your choice and any address within that range.

Save your changes to the network config file and exit the editor. Then repeat the process for your other server(s) and assign a unique IP address from your internal range. Once you have done this, your servers will be able to communicate with each other on the private network.

#### Ubuntu Server 17

Open the network interface configuration file with the following command:

```sh
nano /etc/network/interfaces
```

Configure the secondary network interface as follows:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

In the example above, you can use any private IP range of your choice and any address within that range.

Save your changes to the network config file and exit the editor. Then repeat the process for your other server(s) and assign a unique IP address from your internal range. Once you have done this, your servers will be able to communicate with each other on the private network.

#### Windows

For example purposes, we’ll use an internal IP address range of 192.168.0.0/16.

Log on to your Windows server by remote desktop and go to the **Control Panel**.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

Click `Network and Internet`{.action}

![Network and Internet](images/windows_network_and_internet.png){.thumbnail}


Click `Network and Sharing Centre`{.action}

![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}


`Change Adapter Settings`{.action}

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}


Right-click the secondary network interface and then click `Properties`{.action}

![Windows Properties](images/windows_properties_button.png){.thumbnail}

Double-click `Internet Protocol Version 4 (TCP/IP/IPv4)`{.action}

![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}

Click **Use the following IP address**. For **IP address**, type in an IP from your internal range. For **Subnet mask**, type in 255.255.0.0.

![Use the following IP address](images/windows_use_following_ip_address.png){.thumbnail}

Click the OK button to save the changes and the reboot your server.

Repeat this process for your other server(s) and assign a unique IP address from your internal range. Once you have done this, your servers will be able to communicate with each other on the private network.

## Go further

Join our community of users on <https://community.ovh.com/en/>.