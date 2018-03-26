---
title: Network Bridging
slug: network-bridging
excerpt: Bridged networking can be used to configure your Virtual Machines. Some tweaking is necessary to make the network configuration work on our network.
section: Network Management
---


## Requirements
- A dedicated server with an hypervisor installed (Ex: [VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox, etc.)
- Have assigned a mac to a virtual IP FailOver
- Knowledge about [SSH](http://en.wikipedia.org/wiki/Secure_Shell){.external}

The configuration examples keywords in capital letters that you must change for your own values. For example; IP_FAIL_OVER which you must change for your failover IP.

The primary IP of your dedicated server.

The Failover IP you want to configure

Your server IP with the last octet replaced by 254


## Procedure

### Step 1 &#58; Determining the gateway
To configure Virtual Machines, you need to know the gateway of your host machine (*nsxxx.ovh.net*; *ksxxx.ovh.net*; *nsxxxxxxx.ip-xxxxxx.eu*; ...). To do this, you must replace the last octet of the IP address assigned to your server with .254.

You can find the IP of your server in the [OVH Manager](https://www.ovh.com/manager/){.external}.

**For example**:

- IP of your server : 123.456.789.012
- Gateway's IP is your server's main IP ending in .254
- So the gateway's IP is: 123.456.789.254


### Step 2 &#58; Applying the configuration


> [!warning]
>
> The gateway you need to use in your virtual machine should not be,
> The IP of your dedicated server or IP failover but you must use the gateway
> provides for your dedicated server. You must in no case use:
> ```sh
> route add default gw dev eth0
> ```
> Otherwise you may cut your IP for the virtual server. To determine the correct gateway to use:
> - IP failover is: YYY.YYY.YYY.YYY
> - Main IP of your dedicated server: XXX.XXX.XXX.XXX
> - So the IP of the gateway for your virtual machine (GATEWAY_VM) : **XXX.XXX.XXX**.254
> 
> This gateway will be referred as GATEWAY_VM later in the guide.
> 


#### Debian &amp; derivatives (Ubuntu, CrunchBang, SteamOS...)
**File: /etc/network/interfaces**


```bash
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address IP.FAIL.OVER
    netmask 255.255.255.255
    broadcast IP.FAIL.OVER
    post-up route add GATEWAY_VM dev eth0
    post-up route add default gw GATEWAY_VM
    pre-down route del GATEWAY_VM dev eth0
    pre-down route del default gw GATEWAY_VM
```

**File: /etc/resolv.conf**


```bash
nameserver 213.186.33.99 # OVH DNS Server
```



> [!primary]
>
> For Debian 6, dns server configuration is done directly in the
> file /etc/network/interfaces where you have to find this section:
> 
> ```bash
> # dns-* options are implemented by the resolvconf package, if installed (default)
> dns-nameservers 213.186.33.99 # OVH DNS Server
> dns-search ovh.net # For faster hosts resolution on the OVH network
> ```
>
Don't hesitate to check this [guide](https://wiki.debian.org/fr/Bind9){.external} provided by **Debian** for a advanced configuration.


#### Redhat &amp; derivatives (CentOS 6, Scientific Linux, ClearOS...)
**File: /etc/sysconfig/network-scripts/ifcfg-eth0**


```bash
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=IP.FAIL.OVER
GATEWAY=GATEWAY_VM
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

**File : /etc/sysconfig/network-scripts/route-eth0**


```bash
GATEWAY_VM dev eth0
default via GATEWAY_VM dev eth0
```

**File : /etc/resolv.conf**


```bash
nameserver 213.186.33.99 # OVH DNS Server
```


#### CentOS 7


> [!warning]
>
> For CentOS 7, the network adapter will vary depending on the installation.
> You will need to verify what is the adapter name and use it to configure your Virtual Machine. Use the command ipaddr to find your interface name.
> 

**File: /etc/sysconfig/network-scripts/ifcfg-(insert interface Name)**


```bash
DEVICE=(insert interface Name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=IP.FAIL.OVER
GATEWAY=GATEWAY_VM
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```



> [!primary]
>
> 
> > [!faq]
> >
> > If the file route-(insert interface Name) does not exist, you'll have to create it.
> >> 
> For CentOS 7, NETWORK_GW_VM is the main IP of your server where you replace the last octet by 0.
> >
> 

**File: /etc/sysconfig/network-scripts/route-(insert interface Name)**


```bash
GATEWAY_VM - 255.255.255.255 (insert interface Name)
NETWORK_GW_VM - 255.255.255.0 (insert interface Name)
default GATEWAY_VM
```

**File: /etc/resolv.conf**


```bash
nameserver 213.186.33.99
```


#### OpenSUSE


> [!primary]
>
> For OpenSUSE, NETWORK_GW_VM is the main IP of your server where you replace the last octet by 0.
> 

If the file ifcfg-ens32 does not exist, you'll have to create it.

**File : /etc/sysconfig/network/ifcfg-ens32**


```bash
DEVICE=ens32
BOOTPROTO=static
ONBOOT=yes
ARP=yes
USERCTL=no
IPV6INIT=no
TYPE=Ethernet
STARTMODE=auto
IPADDR=IP.FAIL.OVER
NETMASK=255.255.255.255
GATEWAY=GATEWAY_VM
HWADDR=MY:VI:RT:UA:LM:AC
```

If the file ifroute-ens32 does not exist, you'll have to create it.

**File : /etc/sysconfig/network/ifroute-ens32**


```bash
GATEWAY_VM - 255.255.255.255 ens32
NETWORK_GW_VM - 255.255.255.0 ens32
default GATEWAY_VM
```

In /etc/sysconfig/network/config, you need to have:


```bash
NETCONFIG_DNS_STATIC_SERVERS=”213.186.33.99”
```


#### FreeBSD 8.0
**File : /etc/rc.conf**


```bash
ifconfig_em0="inet IP.FAIL.OVER netmask 255.255.255.255 broadcast IP.FAIL.OVER"
static_routes="net1 net2"
route_net1="-net GATEWAY_VM/32 IP.FAIL.OVER"
route_net2="default GATEWAY_VM"
```

**File : /etc/resolv.conf**


```bash
nameserver 213.186.33.99 # OVH DNS Server
```


#### Windows Server 2012 / Hyper-V
First you need to create Virtual Switch.

1. On the command line of the host server run IPconfig /ALL
1. Note the name of the network adapter that contains the IP address of the server's assigned IP.
1. In Hyper-V manager create the a new virtual switch.
- Connection Type is **External**
- Select the adapter with the server's IP
- Check Allow management OS to share this network adapter


![Virtual Switch Manager](images/network-bridging-windows-2012-1.jpg){.thumbnail}



> [!primary]
>
> This step only is required once for a hyper-v server. For all VMs, a virtual switch is required to connect the VM's virtual network adapters to the server's physical adapter.
> 

Then select the VM that you wish to add the Failover IP. Use the Hyper-V Manager to change the settings of the VM (it needs to be shutdown).

1. Expand the Network Adapter and click on **Advanced Features**.
1. Change the MAC address to Static and enter the Virtual MAC address for Failover IP.
1. Press **OK** to apply changes.

![Hyper-V Manager](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Start the VM and log in as an administrator.

1. Control Panel > Network and Share Center
1. Click on the **Connections: Ethernet** link
1. Click on **Properties** Button to show Ethernet Properties
1. Select **Internet Protocol Version 4 (TCP/IPv4)**
1. Click on **Properties** Button to show IP V4 Properties

![Ethernet Properties](images/network-bridging-windows-2012-3.jpg){.thumbnail}

On the IPv4 Properties window:

1. Select the **Use the following IP address**
1. Enter the Failover IP into the IP Address
1. Enter 255.255.255.255 into the Subnet Mask
1. Enter your server's gateway IP address into the Default Gateway (your server's IP ending with 254)
1. Enter 213.186.33.99 into the Preferred DNS Server.
1. Press **OK** and ignore the warning message about the gateway IP and Assigned IP not being in the same subnet.

![Ethernet Properties](images/network-bridging-windows-2012-4.jpg){.thumbnail}

Finally, reboot server and the VM should be connected to the internet using the failover IP.


#### Other distributions
Here is the network configuration required in the Virtual Machine:

- **ip**: IP_FAIL_OVER
- **netmask**: 255.255.255.255

It is also required to add a default gateway to the Virtual Machine:

```sh
route add GATEWAY_VM dev eth0
route add default gw GATEWAY_VM
```
You will then need to configure the DNS of your machine so that it can make domain resolution. The IP of the OVH DNS server is 213.186.33.99.