---
title: Network Bridging
slug: network-bridging
excerpt: This guide will show you how to use network bridging to configure internet access for your virtual machines.
section: Network Management
---

**Last updated 16th May, 2018**

 
## Objective

Bridged networking can be used to configure your Virtual Machines. Some tweaking is necessary to make the network configuration work on our network.

**This guide will show you how to use network bridging to configure internet access for your virtual machines.**
 
## Requirements

- A dedicated server with a hypervisor installed (Ex: [VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox, etc.)
- At least one failover IP address attached to the server
- Knowledge of SSH

## Instructions

For example purposes, we will use the following values in our code samples, which should be replaced with your own values:

- SERVER_IP = The main IP address of your server
- FAILOVER_IP = The address of your failover IP
- GATEWAY_IP = The address of your default gateway

### Assign a virtual MAC address

1. Log in to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} and click on the `Dedicated`{.action} menu
2. Click on the `IP`{.action} menu on the left side of the page and then locate your failover IP address in the table
3. Click on the three dots to open the Context menu
4. Click `Add a virtual MAC`{.action}
5. Select **OVH** from the `Type`{.action} dropdown box
6. Type a name in the `Name of virtual machine`{.action} field and then confirm your options

![networkbridging](images/virtual_mac.png){.thumbnail}

### Determine the gateway address

To configure your virtual machines for internet access, you will need to know the gateway of your host machine (dedicated server). The gateway address is made up of the first three octets of your server's main IP address, plus 254 as the last octect. For example, if your server's main IP address is:

- 123.456.789.012

Then, your gateway address would be:

- 123.456.789.254

### Apply the configuration

#### Debian and Debian based operating systems (Ubuntu, CrunchBang, SteamOS, etc)

1. Open up an SSH connection to your virtual machine
2. Open the virtual machine's network configuration file, which is located in **/etc/network/interfaces**
3. Edit the file so that it reflects the configuration below (please remember to replace our variables with your own values)
4. Save and close the file
5. Reboot the virtual machine

**Network configuration file**

```bash
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address FAILOVER_IP
    netmask 255.255.255.255
    broadcast FAILOVER_IP
    post-up route add GATEWAY_IP dev eth0
    post-up route add default gw GATEWAY_IP
    pre-down route del GATEWAY_IP dev eth0
    pre-down route del default gw GATEWAY_IP
```

**Debian 9**

```bash
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address FAILOVER_IP
    netmask 255.255.255.255
    broadcast FAILOVER_IP
    post-up ip route add GATEWAY_IP dev eth0
    post-up ip route add default via GATEWAY_IP dev eth0
    pre-down ip route del GATEWAY_IP dev eth0
    pre-down ip route del default via GATEWAY_IP dev eth0
```



#### Redhat and Redhat based operating systems (CentOS 6, Scientific Linux, ClearOS, etc)

1. Open up an SSH connection to your virtual machine
2. Open the virtual machine's network configuration file, which is located in **/etc/sysconfig/network-scripts/ifcfg-eth0**
3. Edit the file so that it reflects the configuration below (please remember to replace our variables with your own values)
4. Save and close the file
5. Open the virtual machine's routing file, which is located in **/etc/sysconfig/network-scripts/route-eth0**
6. Edit the file so that it reflects the configuration below (please remember to replace our variables with your own values)
7. Save and close the file
8. Reboot the virtual machine

 **Network configuration file**

```bash
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=FAILOVER_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

**Routing File**

```bash
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

#### CentOS 7

> [!primary]
> 
> For CentOS 7, the name of the network adapter will vary, depending on the installation options. You will need to verify the adapter name and use it to configure your virtual machine. Use the command `ipaddr`{.action} to find your interface name.
> 

1. Open up an SSH connection to your virtual machine
2. Open the virtual machine's network configuration file, which is located in **/etc/sysconfig/network-scripts/ifcfg-(interface name)**
3. Edit the file so that it reflects the configuration below (please remember to replace our variables with your own values)
4. Save and close the file
5. Open the virtual machine's routing file, which is located in **/etc/sysconfig/network-scripts/route-(interface-name)**
6. Edit the file so that it reflects the configuration below (please remember to replace our variables with your own values)
7. Save and close the file
8. Reboot the virtual machine

**Network configuration file**

```bash
DEVICE=(insert interface Name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=FAILOVER_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

**Routing File**

```bash
GATEWAY_IP - 255.255.255.255 (insert interface Name)
NETWORK_GW_VM - 255.255.255.0 (insert interface Name)
default GATEWAY_IP
```

#### OpenSUSE

1. Open up an SSH connection to your virtual machine
2. Open the virtual machine's network configuration file, which is located in **/etc/sysconfig/network/ifcfg-ens32**. If the file doesn't exist, you'll have to create it
3. Edit the file so that it reflects the configuration below (please remember to replace our variables with your own values)
4. Save and close the file
5. Open the virtual machine's routing file, which is located in **/etc/sysconfig/network-scripts/ifroute-ens32**. If the file doesn't exist, you'll have to create it
6. Edit the file so that it reflects the configuration below (please remember to replace our variables with your own values)
7. Open the virtual machine's DNS configuration file, which is located in **/etc/sysconfig/network/resolv.conf**. If the file doesn't exist, you'll have to create it
8. Edit the file so that it reflects the configuration below
9. Save and close the file
10. Reboot the virtual machine

**Network configuration file**

```bash
DEVICE=ens32
BOOTPROTO=static
ONBOOT=yes
ARP=yes
USERCTL=no
IPV6INIT=no
TYPE=Ethernet
STARTMODE=auto
IPADDR=FAILOVER_IP
NETMASK=255.255.255.255
GATEWAY=GATEWAY_IP
HWADDR=MY:VI:RT:UA:LM:AC
```

**Routing file**

```bash
GATEWAY_IP - 255.255.255.255 ens32
NETWORK_GW_VM - 255.255.255.0 ens32
default GATEWAY_IP
```

**DNS configuration file**

```bash
nameserver 213.186.33.99 # OVH DNS Server
```

#### FreeBSD 8.0

1. Open up an SSH connection to your virtual machine
2. Open the virtual machine's network configuration file, which is located in **/etc/rc.conf**
3. Edit the file so that it reflects the configuration below (please remember to replace our variables with your own values)
4. Save and close the file
5. Reboot the virtual machine

**Network configuration file**

```bash
ifconfig_em0="inet FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP"
static_routes="net1 net2"
route_net1="-net GATEWAY_IP/32 FAILOVER_IP"
route_net2="default GATEWAY_IP"
```

#### Windows Server 2012 / Hyper-V

Before configuring your virtual machine, you'll need to create a virtual switch:

1. From the command line of your dedicated server, run `IPconfig /ALL`{.action}
2. Note the name of the network adapter that contains the server's main IP address
3. In the Hyper-V Manager, create a new virtual switch
4. Set the connection type to `External`{.action}
5. Select the adapter with the server’s IP
6. Check `Allow management OS to share this network adapter`{.action}

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
> This step is only required once for a hyper-v server. For all VMs, a virtual switch is required to connect the VM’s virtual network adapters to the server’s physical adapter.
> 

Then select the VM that you wish to add the failover IP. Use the Hyper-V Manager to change the settings of the VM (it needs to be shutdown):

1. Expand the network adapter and click on `Advanced Features`{.action}
2. Change the MAC address to 'static' and enter the virtual MAC address for the failover IP
3. Press `OK`{.action} to apply changes

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Start the VM and log in as an administrator.

1. Control Panel > Network and Share Center
2. Click on the `Connections: Ethernet`{.action} link
3. Click on `Properties`{.action} button to show the ethernet properties
4. Select **Internet Protocol Version 4 (TCP/IPv4)**
5. Click on `Properties`{.action} button to show IP V4 properties

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

In the IPv4 Properties window:

1. Select **Use the following IP address**
2. Enter the failover IP into the IP address
3. Enter 255.255.255.255 into the subnet mask
4. Enter your server’s gateway IP address into the default gateway (your server’s IP, ending with 254)
5. Enter 213.186.33.99 into the Preferred DNS Server
6. Press `OK`{.action} and ignore the warning message about the gateway IP and assigned IP not being in the same subnet
7. Finally, reboot the server. The VM should then be connected to the internet using the failover IP

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

## Go further

 Join our community of users on <https://community.ovh.com/en/>.
