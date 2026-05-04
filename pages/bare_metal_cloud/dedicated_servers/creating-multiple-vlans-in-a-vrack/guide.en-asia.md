---
title: "Create Multiple vLANs in a vRack on a Dedicated Server"
excerpt: "Create and manage multiple vLANs within your OVHcloud vRack to segment network traffic between dedicated servers."
updated: 2026-02-20
---

## Objective

The standard [vRack configuration](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server) enables you to create only one VLAN. This means that you can only use each IP address once. However, with the vRack version 2.0 configuration, you can create up to 4,000 VLANs within a single vRack. This means that you can use each IP address up to 4,000 times.

**This guide will show you how to create multiple vLANs within the vRack.**

## Requirements

* An active [vRack](/links/network/vrack) service in your account
* Two or more [vRack-compatible servers](/links/bare-metal/bare-metal)
* Administrative (sudo) access to your server via SSH (Linux) or RDP (Windows)
* Your chosen private IP address range
* You must have completed the [vRack configuration guide](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](/links/bare-metal/eco-about).
>
> Please visit our [comparison page](/links/bare-metal/eco-compare) for more information.

## Instructions

### Linux

> [!primary]
>
> As an example, we'll use **eno2** as the network interface, **10** and **11** as the VLAN tags, and **192.168.0.0/16** and **10.0.0.0/16** as the private IP address ranges.
>
> All commands must be adapted to the distribution used. Please refer to the official documentation for your distribution if you have any doubts.
>

> [!tabs]
> **Debian 11**
>>
>> First, establish an SSH connection to your server and run the following commands from the command line to install the VLAN package on your server:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> Next, load the 8021q kernel module:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> To verify that the module is loaded:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Run the following command to ensure the modules are permanently loaded at boot:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Next, retrieve your interface names and identify the private interface:
>>
>> ```sh
>> ip a
>> ```
>>
>> Next, create a VLAN tag. The tag serves as an identifier, allowing you to differentiate between multiple VLANs:
>>
>> ```sh
>> sudo ip link add link <parent-interface> name <vlan-identifier> type vlan id <ID>
>> ```
>>
>> **In this example:**
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> Use the same command for each VLAN tag you wish to add.
>>
>> Next, declare the private IP address range within the vRack and tag it with the identifier using the following command:
>>
>> ```sh
>> sudo ip addr add 192.168.0.10/16 dev eno2.10
>> ```
>>
>> Amend the configuration of your network interface to incorporate the VLAN tag. Open your network interface configuration file and add the following entries:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eno2.10
>> iface eno2.10 inet static
>> address 192.168.0.10
>> netmask 255.255.0.0
>> broadcast 192.168.255.255
>> vlan-raw-device eno2
>> ```
>>
>> For multiple configured VLANs, your network configuration should look like this:
>>
>> ![Debian network config file with multiple VLAN entries](images/multiple_vlan_debian.png){.thumbnail}
>>
> **Ubuntu and Debian 12+**
>>
>> These commands were executed under Ubuntu 24.04 (Noble Numbat).
>>
>> First, establish an SSH connection to your server and run the following commands from the command line to install the VLAN package on your server:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> Next, load the 8021q kernel module:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> To verify that the module is loaded:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Run the following command to ensure the modules are permanently loaded at boot:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Create or edit the `cloud.cfg` configuration file to prevent automatic changes to your network configuration:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Add the following line:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Retrieve the network interface name and its MAC address:
>>
>> ```sh
>> ip a
>> ```
>>
>> Here the interface that we want to configure is `eno2` with MAC address: `d0:50:99:d6:6b:14`.
>>
>> ![Ubuntu ip a output showing eno2 private interface and MAC](images/vrack3-ubuntu-01.png){.thumbnail}
>>
>> Add the network configuration for this network interface and the VLAN information in the following file, ensuring it is placed directly beneath the `version: 2` line. Replace the values with your own:
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
>>             match:
>>                 macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                      # VLAN ID    
>>             link: eno2                  # Interface name
>>             addresses:
>>             - 192.168.0.10/16
>>     ethernets:                    
>>         eno1:
>>             ...
>>             ...
>> ```
>>
>> For multiple configured VLANs, your network configuration should look like this:
>>
>> ![Ubuntu Netplan YAML with multiple VLAN subinterfaces](images/multiple_vlan_ubuntu.png){.thumbnail}
>>
>> Save and close the file, then run the following command:
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> Use the following command to ensure the configuration has been applied correctly:
>>
>> ```sh
>> ip a
>> ```
>>
>> ![Ubuntu ip a output confirming VLAN interfaces are active](images/vrack3-ubuntu-02.png){.thumbnail}
>>
> **AlmaLinux and Rocky Linux (8/9)**
>>
>> Before you begin, establish an SSH connection to your server and run the following command to load the 8021q kernel module:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> To verify that the module is loaded:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Next, run the following command to ensure the modules are permanently loaded at boot:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Retrieve the interface names and identify the private interface:
>>
>> ```sh
>> ip a
>> ```
>> 
>> Next, create a subinterface configuration file for the VLAN in the main network configuration file.
>>
>> In this example, the file is named `ifcfg-eno2.10`, where eno2 refers to the private network interface and `10` the VLAN ID.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eno2.10
>> ```
>> 
>> Add the following entries to the configuration file, ensuring you replace the values with your own:
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.10
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> Save and exit the file.
>>
>> To have multiple configured VLANs, you should have a new file created for each VLAN identifier:
>>
>> ![AlmaLinux directory listing with multiple VLAN config files](images/multiple_vlan_alma.png){.thumbnail}
>>
>> Restart the network interface:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux and Rocky Linux (10)**
>>
>> The configuration below is based on Fedora 43.
>>
>> Before you begin, establish an SSH connection to your server and run the following command to load the 8021q kernel module:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> To verify that the module is loaded:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Run the following command to ensure the modules are permanently loaded at boot:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> To obtain the name of the private network interface:
>>
>> ```sh
>> ip a
>> ```
>>
>> In this example, the interface is called `eno2`. We will need to create a VLAN subinterface before assigning a private IP address to it.
>>
>> Use the following command to create the VLAN interface:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Replace `vlan-name` with the name of the VLAN subinterface, `parent-interface` with the name of the private interface and `vlan-id` with the VLAN ID.
>>
>> **In this example:**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> Assign a private IP address to the VLAN subinterface:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **In this example:**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.10/16 ipv4.method manual
>> ```
>>
>> Next, bring the up the VLAN subinterface:
>>
>> ```sh
>> sudo nmcli con up <vlan-name>.
>> ```
>>
>> **In this example:**
>>
>> ```sh
>> sudo nmcli con up eno2.10
>> # Connection successfully activated
>> ```
>>
>> Use the same commands for each VLAN interface you wish to add.
>>
>> Once done, a configuration file for the VLAN interface is created. This file is located at `/etc/NetworkManager/system-connections/` and follows the naming format `vlan-name.nmconnection`.
>>
>> For multiple VLANs, multiple configuration files will be created:
>>
>> - Overview:
>>
>> ![Fedora directory with multiple VLAN nmconnection files](images/multiple_vlan_fedora.png){.thumbnail}
>>
>> ![Fedora VLAN nmconnection file contents for VLAN 10](images/multiple_vlan_fedora_1.png){.thumbnail}
>>

### Windows

Log on to your server via a remote desktop connection, and open the Server Manager app. Then select `Local Server`{.action}. Now click the `Disabled`{.action} link next to **NIC Teaming**:

![Server Manager Local Server with NIC Teaming disabled](images/vrack2-windows-01.png){.thumbnail}

Next, right-click on the network interface and select `Add to New Team`{.action}.

![Right-click context menu to add interface to new team](images/vrack2-windows-02.0.png){.thumbnail}

In the popup window, create a new team by typing a team name into the **Team name** field. When you have finished, click `OK`{.action}.

![New Team dialog with team name and OK button](images/vrack2-windows-02.png){.thumbnail}

Next, we need to define the vLAN tag. In the **ADAPTERS AND INTERFACES** pane of the **NIC Teaming** screen, go to the `Team Interfaces`{.action} tab and right-click the interface you have just added to the new team, then click `Properties`{.action}. Now click `Specific VLAN`{.action}, and define the tag:

![NIC Teaming interface properties with Specific VLAN tag](images/vrack2-windows-03.png){.thumbnail}

Next, we need to configure the IP address of the vLAN. Click the `Start`{.action} button on your keyboard, then click `Control Panel`{.action}:

![Windows Start menu showing Control Panel option](images/vrack2-windows-04.png){.thumbnail}

Next, click `Network and Internet`{.action}:

![Control Panel with Network and Internet category](images/vrack2-windows-05.png){.thumbnail}

Then `Network and Sharing Center`{.action}:

![Network and Sharing Center link in Windows](images/vrack2-windows-06.png){.thumbnail}

Then click `Change adapter settings`{.action}:

![Change adapter settings in Network and Sharing Center](images/vrack2-windows-07.png){.thumbnail}

Next, right-click the vLAN interface, and click `Properties`{.action}:

![Right-click on VLAN interface to open Properties](images/vrack2-windows-08.png){.thumbnail}

Note that in our example `Ethernet 2` is the interface used for the vRack. However, it is possible that the vRack NIC is a different interface in your configuration. The correct one to select will be the interface that does not have the server's main IP address or has a self-assigned IP.

Then double-click `Internet Protocol Version 4 (TCP/IPv4)`{.action}:

![Adapter properties with IPv4 protocol highlighted](images/vrack2-windows-09.png){.thumbnail}

Next, click `Use the following IP address`{.action}. For **IP address**, type in an IP from your internal range. For **Subnet mask**, type in 255.255.0.0.

![IPv4 settings with VLAN IP address and subnet mask](images/vrack2-windows-10.png){.thumbnail}

Finally, click the `OK`{.action} button to save the changes, then reboot your server.

## Go further

[Configuring the vRack on your Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Configuring vRack Between Public Cloud and Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

Join our [community of users](/links/community).