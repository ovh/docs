---
title: 'Configuring the vRack between the Public Cloud and a Dedicated Server'
excerpt: 'Find out how to configure private networking between a Public Cloud instance and a Dedicated Server'
updated: 2026-02-16
---

## Objective

The OVHcloud [vRack](/links/network/vrack) allows you to configure private network addressing between two or more OVHcloud [Dedicated Servers](/links/bare-metal/bare-metal). But it also allows you to add [Public Cloud instances](/links/public-cloud/compute) to your private network so that you can create an infrastructure of both physical and virtual resources.

**This guide will show you how to configure private networking between a [Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps) and a [Dedicated Server](/links/bare-metal/bare-metal).**

## Requirements

- An [OVHcloud Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps)
- A [vRack](/links/network/vrack) service activated in your account
- A [Dedicated Server](/links/bare-metal/bare-metal) compatible with the vRack
- Access to the [OVHcloud Control Panel](/links/manager)
- A private IP address range of your choice

 - Both services must be in the same vRack.

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](/links/bare-metal/eco-about).
>
> Please visit our [comparison page](/links/bare-metal/eco-compare) for more information.

## Instructions

### Add a Public Cloud project to the vRack

> [!primary]
> This does not apply to newly created projects, which are automatically delivered with a vRack. Once the project has been created, you can view the vRack by opening the `Network`{.action} menu in the left-hand sidebar and selecting `vRack Private Network.`{.action}.
>
> You can also remove the project from its allocated vRack and attach it to another vRack if you wish, particularly if you already had an existing vRack with your dedicated server(s).

From the list of eligible services, select the project you want to add to the vRack and click the `Add`{.action} button.

![add project to vrack](images/addprojectvrack.png){.thumbnail}

### Integrating an instance into the vRack

> [!primary]
> This guide focuses on a simple vRack configuration between a Public Cloud instance and a dedicated server.
> If you have set up your instance(s) with a deployment mode such as local zones or multi AZ, note that local zones do not support the vRack for now.
> Additionally, the **vRack** is a global L2 network and does not support "zone" or "region" level resilience.
>

Two situations may arise:

- The instance does not exist yet.
- The instance already exists and you must attach a private network to it.

#### In case of a new instance

If you need assistance, follow this guide first: [Creating your first Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps). When creating an instance, you can choose, in Step 5, a network mode, followed by a private network to integrate your instance into.

#### In case of an existing instance

Once your project is linked to a vRack, you can create a private network and attach it to an existing instances.

Go to the `Public Cloud`{.action} tab, then click `Private Network`{.action} under **Network** in the left sidebar.

Click on `Add Private Network`{.action}.

![create private network](images/vrack2022-03.png){.thumbnail}

The following page allows you to customise multiple settings.

- Select the region in which you want the private network to be located. Make sure it is in the same region as the existing instance.

![select region](images/vrack2024-01.png){.thumbnail}

For both services to communicate with each other, they have to be tagged with the same **VLAN ID**.

This can be configured in the next step.

![configure network](images/configure_private_network.png){.thumbnail}

This section offers several configuration options. For the purpose of this guide, we will focus on the necessary ones. Click on the tabs below to view the details:

> [!tabs]
> **Private Network Name**
>>
>> Enter a name for your private network.<br>
>>
> **Layer 2 network options**
>>
>> By default, the VLAN ID for dedicated servers is **0**. To use this VLAN ID for an instance, it will be necessary to tag the private network with VLAN **0** as well.
>> Tick the **Set a VLAN ID** box and select VLAN ID **0**.
>>
>> If you do not tick the box, the system will assign a random VLAN ID to your private network.
>>
> **Using a different VLAN ID**
>>
>> If you do not intend to use VLAN ID 0, you may select a different ID between 1 and 4000. In this case:
>>
>> - When configuring the vRack on the dedicated server, this VLAN ID must be included in the network configuration file(s).
>> 
>> > [!primary]
>> > It is possible to use the same VLAN ID for multiple private networks; however, this requires careful management of private IP addresses. Using non-overlapping DHCP pool allocations is one way to resolve this issue.
>> >
>>
>> > [!primary]
>> > Unlike dedicated servers (when you use a VLAN ID other than 0), there is no need to include the VLAN ID directly in the Public Cloud instance's network configuration file once it has been defined in the OVHcloud Control Panel.
>> >
>>
>> If the private network of the instance is tagged with VLAN 2, this VLAN ID must be included only in the network configuration of the dedicated server. For further information, please consult the following guide: [Create multiple VLANs in the vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).<br>
>>
> **DHCP address distribution options**
>>
>> You can keep the default private IP range or use a different one.
>>

Once done, click on `Configure your private network`{.action}. This will take a few minutes.

In the dashboard of the instance concerned, locate the "Networks" section and click on the `...`{.action} button next to "Private networks". Select `Attach a network`{.action}.

![attach network](images/vrack2021-01.png){.thumbnail}

In the popup window, select the private network(s) to attach to your instance and click on `Attach`{.action}.

![attach network](images/attach_network.png){.thumbnail}

### Configure your network interfaces

Next, configure the private network on the Dedicated Server.

> [!tabs]
> **Debian (excluding Debian 12)**
>>
>> The configuration below is based on Debian 11 (Bullseye).
>>
>> - Before you begin, establish an SSH connection to your server and run the following command to install the VLAN package:
>>
>> ```sh
>> sudo apt-get install vlan
>> ```
>>
>> - Next, load the 8021q kernel module:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - To verify that the module is loaded:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Retrieve the interface names and identify the private interface:
>>
>> ```sh
>> ip a
>> ```
>> 
>> In this example, the private interface is `eno2`.
>>
>> - Next, create a VLAN subinterface for the network interface (non-persistent configuration) and assign (tag) it the VLAN ID. In this example, the VLAN ID is 10.
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> - Next, assign a private IP address to the newly created VLAN subinterface:
>>
>> ```sh
>> sudo ip addr add 192.168.0.14/16 dev eno2.10
>> ```
>>
>> - Next, activate the VLAN subinterface:
>>
>> ```sh
>> sudo ip link set dev eno2.10 up
>> ```
>> 
>> - To make the configuration persistent, add the following entries to the configuration file:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> ```console
>> auto eno2.10
>> iface eno2.10 inet static
>>    address 192.168.0.14
>>    netmask 255.255.0.0
>>    broadcast 192.168.255.255
>>    vlan-raw-device eno2
>> ```
>>
>> - Example:
>>
>> IMAGE
>>
>> - Run the following command to ensure the modules are permanently loaded at boot:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Restart the network to apply the changes:
>>
>> ```sh
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu 20.04+ and Debian 12+**
>>
>> The configuration below is based on Ubuntu 25.10.
>>
>> - Before you begin, establish an SSH connection to your server and run the following command to install the VLAN package:
>>
>> ```sh
>> sudo apt-get install vlan
>> ```
>>
>> - Next, load the 8021q kernel module:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - To verify that the module is loaded:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Create or edit the `cloud.cfg` configuration file to prevent automatic changes to the network configuration:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> - Add this line:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Save and exit the file.
>>
>> - To obtain the network interface name and it's MAC address:
>>
>> ```sh
>> ip a
>> ```
>>
>> - Here, the interface we want to configure is `eno2` with MAC address: `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-01.png){.thumbnail}
>>
>> - Add the network configuration for this interface and the VLAN declaration to the configuration file, ensuring it is placed directly beneath the `version: 2` line. Replace the values with your own:
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         eno2:
>>              match:
>>                macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                          # VLAN ID
>>             link: eno2                  # Interface name
>>             addresses:
>>             - 192.168.0.14/16
>> ```
>>
>> - Save and close the file, then run the following command:
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> If you receive the following message:
>>
>> ```console
>> WARNING:root:Cannot call Open vSwitch: ovsdb-server.service is not running.
>> ```
>>
>> You can resolve this by installing the following package:
>>
>> ```sh
>> sudo apt install openvswitch-switch
>> ```
>>
>> - Verify that the configuration has been properly applied:
>>
>> ```sh
>> ip a
>> ```
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-02.png){.thumbnail}
>>
>> - Run the following command to ensure the modules are permanently loaded at boot:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
> **AlmaLinux and Rocky Linux (8/9)**
>>
>> The configuration below is based on Almalinux 9.
>>
>> - Before you begin, establish an SSH connection to your server and run the following command to load the 8021q kernel module:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - To verify that the module is loaded:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Retrieve the interface names and identify the private interface:
>>
>> ```sh
>> ip  a
>> ```
>>
>> In this example, the private interface is `eno2`.
>>
>> - Next, create a subinterface configuration file for the VLAN in the main network configuration file. In this example, the file is named ifcfg-eno2.10, where eno2 refers to the private network interface and `10` the VLAN ID.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts-ifcfg-eno2.10
>> ```
>> 
>> - Add the following entries to the configuration file, ensuring you replace the values with your own:
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.14
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> - Save and exit the file.
>>
>> - Run the following command to ensure the modules are permanently loaded at boot:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Restart the network interface:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux & Rocky Linux (10)**
>>
>> The configuration below is based on Fedora 43.
>>
>> - Before you begin, establish an SSH connection to your server and run the following command to load the 8021q kernel module:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - To verify that the module is loaded:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - To obtain the network interface name and it's MAC address:
>>
>> ```sh
>> ip  a
>> ```
>>
>> In this example, the interface is called `enp1s0f1`. We will need to create a VLAN subinterface before assigning a private IP address to it.
>>
>> - Use the following command to create the VLAN interface:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Replace `vlan-name` with the name of the VLAN subinterface, `parent-interface` with the name of the private interface and `vlan-id` with the VLAN ID.
>>
>> In this example:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name enp1s0f1.10 dev enp1s0f1 id 10
>> Connection 'enp1s0f1.10' successfully added.
>> ```
>>
>> - Assign a private IP address to the VLAN subinterface:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> In this example:
>>
>> ```sh
>> sudo nmcli con mod enp1s0f1.10 ipv4.addresses 192.168.0.14/16 ipv4.method manual
>> ```
>>
>> - Run the following command to ensure the modules are permanently loaded at boot:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Next, bring the up the vlan subinterface:
>>
>> ```sh
>> sudo nmcli con up <vlan-name>.
>> ```
>>
>> In this example:
>>
>> ```sh
>> sudo nmcli con up enp1s0f1.10
>> # Connection successfully activated
>> ```
>>
>> The steps above create a configuration file for the VLAN interface. This file is located at `/etc/NetworkManager/system-connections/` and follows the naming format `vlan_interface_name.nmconnection`.
>>
>> In this example, the file is called `enp1s0f1.10.nmconnection`.
>>

## Go further

Join our [community of users](/links/community).
