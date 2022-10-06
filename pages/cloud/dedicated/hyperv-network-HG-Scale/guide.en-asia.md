---
title: 'Configuring the network on Windows Server with Hyper-V on the High Grade & SCALE ranges'
slug: hyperv-network-hg-scale
excerpt: 'Find out how to configure the network on  Windows Server with Hyper-V on the High Grade & SCALE ranges'
section: 'Advanced use'
order: 5
---

**Last updated 15th November 2021**

## Objective

On the High Grade & SCALE ranges, it is not possible to operate Additional IPs in *bridged* mode (via virtual MACs). It is therefore necessary to configure Additional IPs in routed mode or via the vRack.

**This guide explains how to configure the network in  Windows Server with Hyper-V.**

## Requirements

- An [OVHcloud dedicated server](https://www.ovhcloud.com/asia/bare-metal/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
- An [Additional IP](https://www.ovhcloud.com/asia/bare-metal/ip/)

> [!warning]
>
> No virtual MACs should be applied to Additional IPs in the OVHcloud Control Panel.
>

## Instructions

> [!primary]
>
> On these server ranges, there are 4 network cards. The first two for the public, the last two for the private network. To get all the bandwidth, aggregates must be created.
>

### Additional IP in routed mode on public network interfaces

#### Explanations

You need to:

- Set up NIC Teaming.
- Install the Hyper-V and RRAS roles.
- Setup RRAS to act as a router.

#### Identify Interfaces and Configure NIC teaming

Open Windows Powershell and execute the command `Get-NetAdapter`:

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

In our example:

- The public interfaces are `Ehernet 3` and `Ethernet 4`.
- The private interfaces are `Ethernet` and `Ethernet 2`.

> [!primary]
>
> Check that your configuration is similar. You can access information on MACs and public or private interfaces in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) or via the OVHcloud API.
>

Now go back to the Server Manager and go to `Local Server`{.action} and click on `Disabled`{.action} opposite `NIC Teaming`.

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

On the following page, right-click one of public interfaces identified earlier and click `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Next, give your team a name, add the second interface to the team, then expand the Additional Properties and set "Teaming Mode" to `LACP`, and finally click `OK`{.action}.

#### Configure a static IP

In order to prevent a connection loss on a reboot we will need to configure the IP statically on the team.

Press `Windows Key` \+ `R` to open a "Run" window. Enter `ncpa.cpl` and click `OK`{.action}. This will open your Network Connections control panel.

![Static IP](images/static_ip_1.png){.thumbnail}

Right click on your team that you created and click `Properties`{.action}.

![Static IP](images/static_ip_2.png){.thumbnail}

Next, double-click on `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Static IP](images/static_ip_3.png){.thumbnail}

Select `Use the following IP address` and insert your IP address.

The "Subnet mask" and "Default gateway" will be: 255.255.255.255 and 100.64.0.1 as shown below.

For DNS servers, you can choose your own. For our example we are using 213.186.33.99 and 8.8.8.8.

Once done, click `OK`{.action} to close the Window, and `OK`{.action} again to close the adapter properties Window.

![Static IP](images/static_ip_4.png){.thumbnail}

#### Installing the Hyper-V and RRAS Roles

Go to the Server Manager and open the `Dashboard`{.action}, then click on `Add roles and features`{.action}

![Install roles](images/install_roles_1.png){.thumbnail}

Go through the Wizard until you reach the `Server Roles` section and select `Hyper-V` and `Remote Access`.

![Install roles](images/install_roles_2.png){.thumbnail}

Next, proceed to the `Virtual Switches` subsection of `Hyper-V` and select your NIC team that you created earlier.

![Install roles](images/install_roles_3.png){.thumbnail}

Next, proceed to the `Role Services` subsection of `Remote Access` and select `Routing`.

![Install roles](images/install_roles_4.png){.thumbnail}

Finally, proceed to the `Confirmation` section, select `Restart the destination server automatically if required` and click `Install`{.action}.

#### Configure Routing and Remote Access

Open the new application called `Routing and Remote Access` and right click on your server and choose `Configure and Enable Routing and Remote Access`{.action}.

![Configure RRAS](images/configure_rras_1.png){.thumbnail}

Now, choose `Custom configuration` and click `Next`{.action}.

![Configure RRAS](images/configure_rras_2.png){.thumbnail}

Next, you need to select `LAN routing` and then click `Next`{.action}.

![Configure RRAS](images/configure_rras_3.png){.thumbnail}

Finally, click on `Finish`{.action} and then `Start Service`{.action} on the popup that will appear.

![Configure RRAS](images/configure_rras_4.png){.thumbnail}

#### Set Primary and Additional IP statically on Hyper-V interface

We must now move the IP configuration to the Hyper-V interface.

Press `Windows Key` \+ `R` to open a "Run" window. Enter `ncpa.cpl` and click `OK`{.action}. This will open your Network Connections control panel.

![Static IP](images/static_ip_1.png){.thumbnail}

Right click on your vEthernet Adapter and click `Properties`{.action}.

![Static IP](images/static_ip_5.png){.thumbnail}

Next, double-click on `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Static IP](images/static_ip_3.png){.thumbnail}

Select `Use the following IP address` and insert your IP address.

The "Subnet mask" and "Default gateway" will be: 255.255.255.255 and 100.64.0.1 as shown below.

For DNS servers, you can choose your own. For our example we are using 213.186.33.99 and 8.8.8.8.

![Static IP](images/static_ip_4.png){.thumbnail}

Next click on the `Advanced...`{.action} button and in the new Window click `Add...`{.action} under IP addresses.

Add your IP address and subnet mask for your Additional IP and click `Add`{.action}.

![Static IP](images/static_ip_6.png){.thumbnail}

Once done, click `OK`{.action} to close the Advanced Window, click `OK`{.action} again to close the TCP/IPv4 settings, and finally click `OK`{.action}, to close the adapter properties Window.

> [!warning]
>
> This step can cause a connection loss. If it occurs, please connect using the [IPMI](../use-ipmi-dedicated-servers) and edit the configuration again. You will find that your default gateway is reverted back to blank. You would need to re-add the gateway of 100.64.0.1.
>


#### Add a static route

Open a command prompt as administrator and run the command `route print interface`:

```powershell
C:\Users\admin>route print interface
===========================================================================
Interface List
 22...0c 42 a1 dd 37 b2 ......Hyper-V Virtual Ethernet Adapter
 10...04 3f 72 d5 c3 38 ......Mellanox ConnectX-5 Adapter
  7...04 3f 72 d5 c3 39 ......Mellanox ConnectX-5 Adapter #2
  1...........................Software Loopback Interface 1
===========================================================================
```

In our example you will see that our Hyper-V adapter has the ID of 22.<br>
Take note of your Hyper-V adapter then run the command `route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 if 22` (replace the IP and interface ID with the one you received).<br>
You should have the result `OK!`

```powershell
PS C:\Users\admin> route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 if 22
 OK!
```

Your VM, once created and configured, should now have internet access.

#### Configuration example of a client VM on Ubuntu

File contents of `/etc/netplan/ip.yaml`:

```yaml
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 192.xxx.xxx.16
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 100.64.0.1
                                  on-link: true
```

### Additional IP via vRack

#### Requirements

- A public block of IP addresses in your account, with a minimum of four addresses
- Your chosen private IP address range
- A [vRack compatible server](https://www.ovhcloud.com/asia/bare-metal/){.external}
- A [vRack](https://www.ovh.com/asia/solutions/vrack/){.external} service activated in your account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)

#### Explanations

You need to:

- Create an aggregate.
- Create a bridge connected to the aggregate.

#### Identify Interfaces and Configure NIC teaming

Open Windows Powershell and Execute the command `Get-NetAdapter`:

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

In our example:

- The public interfaces are `Ehernet 3` and `Ethernet 4`.
- The private interfaces are `Ethernet` and `Ethernet 2`.

> [!primary]
>
> Check that your configuration is similar. You can access information on MACs and public or private interfaces in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) or via the OVHcloud API.
>

Now go back to the Server Manager, go to `Local Server` and click on `Disabled`{.action} besides NIC Teaming.

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

On the following page, right-click one of private interfaces identified earlier and click `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Next, give your team a name, add the second interface to the team, then expand the Additional Properties and set "Teaming Mode" to `LACP`, and finally click `OK`{.action}.

#### Create the Virtual Switch in Hyper-V Manager

We will need to create a virtual switch that will link our VMs to the Team that we created.

First, open the Hyper-V Manager and click on `Virtual Switch Manager`{.action}.

![Create v-switch](images/create_vswitch_1.png){.thumbnail}

On this page, make sure you have `External` selected and click `Create Virtual Switch`{.action}.

![Create v-switch](images/create_vswitch_2.png){.thumbnail}

Now, give your switch a name, choose your new Team adapter , then click `Apply`{.action} and then `OK`{.action}.

![Create v-switch](images/create_vswitch_3.png){.thumbnail}

You are now ready to create your VM and configure the network for it.

#### Configure a usable IP address

For vRack, the first, penultimate, and last addresses in a given IP block are always reserved for the network address, network gateway, and network *broadcast* respectively. This means that the first usable address is the second address in the block, as shown below:

```console
46.105.135.96 # Reserved: network address
46.105.135.97 # First usable IP
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109 # Last usable IP
46.105.135.110 # Reserved: network gateway
46.105.135.111 # Reserved: network broadcast
```

To configure the first usable IP address, you must edit the network configuration file as shown below. In this example, we use a subnet mask of **255.255.255.240**.

> [!primary]
>
> The subnet mask used in this example is appropriate for our IP block. Your subnet mask may differ depending on the size of your block. When you purchase your IP block, you will receive an email notifying you of the subnet mask to use.
>

#### Configuration example of a client VM on Ubuntu

Content of the file `/etc/netplan/vrack.yaml`:

```yaml
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 46.105.135.97/28
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 46.105.135.110
                                  on-link: true
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
