---
title: 'Configuring a network bridge'
excerpt: 'Find out how to configure your virtual machines for access to the public internet'
updated: 2024-07-15
---

> [!primary]
>
> Since October 6th, 2022 our service "Failover IP" is named [Additional IP](/links/network/additional-ip). This renaming has no effect on its technical features.
>

## Objective

Bridged networking can be used to configure your virtual machines. Some tweaking is necessary to make the network configuration work on our network.

**This guide will explain how to use network bridging to configure internet access for your virtual machines.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/TZZbPe9hCOk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requirements

- A dedicated server with a hypervisor installed (e.g. [VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox, etc.)
- At least one [Additional IP address](/links/network/additional-ip) attached to the server
- Access to the [OVHcloud Control Panel](/links/manager)

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](/links/bare-metal/eco-about).
>
> Please visit our [comparison page](/links/bare-metal/eco-compare) for more information.
>
> This guide is not applicable to servers of the ranges [Scale](https://www.ovhcloud.com/en-ie/bare-metal/scale/) and [High Grade](https://www.ovhcloud.com/en-ie/bare-metal/high-grade/). The same goes for the latest Advance server range (since July 2024), based on CPU AMD Epyc 4K and 8K CPUs.
> 
> Refer to the following guides instead: [Configuring the network on ESXi on the High Grade & SCALE ranges](/pages/bare_metal_cloud/dedicated_servers/esxi-network-HG-Scale), [Configuring the network on Proxmox VE on the High Grade & SCALE ranges](/pages/bare_metal_cloud/dedicated_servers/proxmox-network-HG-Scale) and [Configuring the network on Windows Server with Hyper-V on the High Grade & SCALE ranges](/pages/bare_metal_cloud/dedicated_servers/hyperv-network-HG-Scale).
>

## Instructions

The basic steps are always the same, independent of the underlying system:

- creating a virtual MAC address for an Additional IP
- creating a VM on a host
- setting the MAC address of the VM to that new virtual MAC address
- configuring the **IP address**, **netmask**, **gateway** and **route to the gateway** inside the VM

Code samples in the following instructions have to be replaced with your own values:

- SERVER_IP = The main IP address of your server
- ADDITIONAL_IP = The address of your Additional IP
- GATEWAY_IP = The address of your default gateway

### Step 1: Assign a virtual MAC address

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Bare Metal Cloud`{.action} section and click on `Network`{.action}. Next, open the `IP`{.action} menu.

Click the `Additional IP`{.action} tab.

![manage IPs](images/manageIPs2022.png){.thumbnail} 

Next, locate your Additional IP address in the table and click the `...`{.action} button to open the menu. Select `Add a virtual MAC`{.action}.

![Add a virtual MAC (1)](images/addvmac.png){.thumbnail}

Choose `ovh`{.action} from the "Type" drop-down menu unless you are using VMware ESXi - in that case choose `vmware`{.action}. Type a name in the “Name of virtual machine” field, and click on `Confirm`{.action}.

![Add a virtual MAC (2)](images/addvmac2.png){.thumbnail}

After a few seconds, a virtual MAC will appear in the "Virtual MAC" column of your Additional IP row. This virtual MAC will be required when configuring your VM on the host.

### Step 2: Determine the gateway address <a name="determinegateway"></a>

To configure your virtual machines for internet access, you will need to know the gateway of your host machine (i.e. your dedicated server). The gateway IP address is made up of the first three octets of your server's main IP address, with 254 as the last octet. For example, if your server's main IP address was:

- 203.0.113.1

Your gateway address would therefore be:

- 203.0.113.**254**

You can also retrieve the gateway via the [OVHcloud Control Panel](#viacontrolpanel) or the [OVHcloud API](#viaapi).

#### Via the OVHcloud Control Panel <a name="viacontrolpanel"></a>

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Bare Metal Cloud`{.action} section and select your server from `Dedicated servers`{.action}.

The IPv4 gateway assigned to your server will appear in the `Network` section of the `General Information`{.action} tab. Once you have copied it, continue with applying the configuration.

![gateway](images/ipv4_information.png){.thumbnail}

#### Via the OVHcloud API <a name="viaapi"></a>

On the [OVHcloud API page](https://eu.api.ovh.com/console/), click on `Login`{.action} in the top right-hand corner. On the next page, enter your OVHcloud credentials.

Execute the following API call, indicating the internal server name (example: `ns3956771.ip-169-254-10.eu`):

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

###  Step 3: Prepare the host

> [!primary]
>
For all operating systems and distributions, you **must** configure your virtual machine with the virtual MAC address you have created in the OVHcloud Control Panel.
>

#### Proxmox

> [!warning]
>
> The following instructions apply to a previously created VM with an OS already installed. If you have not created a VM, please review the options on the [Qemu/KVM Virtual Machine](https://pve.proxmox.com/wiki/Qemu/KVM_Virtual_Machines){.external} page by Proxmox.
>

After creating the VM and while it is still powered off, right-click the VM and click `Edit settings`.

1. Select the VM.
2. Open the `Hardware` section.
3. Select `Network Device`.
4. Click the `Edit` button.

![navigate to Network Device](images/proxmox_01.png){.thumbnail}

Then add the virtual MAC address created previously.

![open Network Device](images/proxmox_02.png){.thumbnail}

Now you can start the VM and proceed with the [configuration steps](#configurationsteps), depending on the operating system installed.

#### VMware ESXi

> [!warning]
>
> The following instructions apply to a previously created VM with an OS already installed. If you have not created a VM, please review the guide [Create a Virtual Machine in the VMware Host Client](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-77AB6625-F968-4983-A230-A020C0A70326.html){.external} on the VMware page.
>

After you've created the virtual machine and while it's powered off, right click the VM and click `Edit settings`.

![VM context menu](images/vmware_01.png){.thumbnail}

Fold out `Network Adapter 1`, change the value in the `MAC Address` drop-down menu to `Manual` and enter the virtual MAC address created previously.

![Edit settings](images/vmware_02.png){.thumbnail}

Now you can start the VM and proceed with the [configuration steps](#configurationsteps), depending on the operating system installed.

### Step 4: Configure the virtual machines <a name="configurationsteps"></a>

> [!warning]
>
> Please note that the following examples assume that you are logged in as a user with limited privileges, hence the use of *sudo* in front of each command. If you are logged in as *root*, you will not need to do this.
>

#### Debian

By default, the virtual machine's network configuration file is located in `/etc/network/interfaces`.

Once you are connected to the shell of your virtual machine, run the following command to identify your interface name:

```bash
ls /sys/class/net
```

Next, make a copy of the configuration file, so that you can revert at any time:

```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak
```

In case of a mistake, you will be able to revert the changes, using the commands below:

```bash
sudo rm -f /etc/network/interfaces
sudo cp /etc/network/interfaces.bak /etc/network/interfaces
```

Edit the file so that it reflects the configuration below, replace `INTERFACE_NAME`, `ADDITIONAL_IP` and `GATEWAY_IP` with your own values.

```bash
sudo nano /etc/network/interfaces
```

```console
auto lo
iface lo inet loopback

# The primary network interface
auto INTERFACE_NAME
iface INTERFACE_NAME inet static
address ADDITIONAL_IP
netmask 255.255.255.255
gateway GATEWAY_IP
```

**Example**

```console
auto lo
iface lo inet loopback

# The primary network interface
auto ens192
iface ens192 inet static
address 192.0.2.1
netmask 255.255.255.255
gateway 203.0.113.254
```

Save and close the file.<br>
Next, edit or create the file `/etc/resolv.conf`:

```bash
sudo nano /etc/resolv.conf
```

Add the following line:

```console
nameserver 213.186.33.99
```

Save and close the file.<br>
Now you will need to bring your network interface online. To do so, enter the following command (replace `ens192` with your own values):

```bash
sudo ip link set ens192 up
```

Finally, restart your networking service using the following command:

```bash
sudo systemctl restart networking
```

To verify that the virtual machine is fully connected to the Internet, use the following command:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24,925/28,028/30,840/2,254 ms
```

If you receive a response, this means that the Additional IP has been correctly configured. If not, reboot your virtual machine and retry the ping command.

#### Red Hat and Red Hat-based operating systems (CentOS, Rocky Linux 8, Alma Linux 8, etc.)

By default, the virtual machine's network configuration file is located in `/etc/sysconfig/network-scripts/`. For demonstration purposes, our file is called `ifcfg-eth0`:

Once you are connected to the shell of your virtual machine, run the following command to identify your interface name:

```bash
ls /sys/class/net
```

Next, make a copy of the configuration file, so that you can revert at any time:

```bash
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

In case of a mistake, you will be able to revert the changes, using the commands below:

```bash
sudo rm -f etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0.bak etc/sysconfig/network-scripts/ifcfg-eth0
```

Edit the file so that it reflects the configuration below, replace `ADDITIONAL_IP`, `GATEWAY_IP` and `MY:VI:RT:UA:LM:AC` with your own values. Additionally, the parameters `BOOTPROTO`, `ONBOOT` and `DNS` have to be adjusted (or added if missing). You do not need to edit any other lines.

```bash
sudo vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

```console
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=eth0
UUID=120ae2c6-4aa6-xxxx-xxxx-xxxxxxxxxx
DEVICE=eth0
ONBOOT=yes
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
HWADDR=MY:VI:RT:UA:LM:AC
DNS=213.186.33.99
```

> [!primary]
> 
> The DNS name server listed is that of OVHcloud. Feel free to use the name server(s) you prefer.
>

Save and close the file.<br>
Next, create a new file, `route-(interface_name)`, in the `/etc/sysconfig/network-scripts/` directory and define the following default routes for the interface using the gateway defined in [Step 2](#determinegateway). 

In our example our file is called `route-eth0` (replace `eth0` with your own values):

```bash
sudo vi /etc/sysconfig/network-scripts/route-eth0
```

Edit the file so that it reflects the configuration below, replace `GATEWAY_IP` with your own value.

```console
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Save and close the file.<br>

Restart your network using the following command:

```bash
sudo systemctl restart network
```

To verify that the virtual machine is fully connected to the Internet, use the following command:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24,925/28,028/30,840/2,254 ms
```

If you receive a response, this means that the Additional IP has been correctly configured. If not, reboot your virtual machine and retry the ping command.

#### Rocky Linux 9 and Alma Linux 9

In the previous versions of Rocky Linux and Alma Linux, network profiles were stored in ifcfg format in this directory: `/etc/sysconfig/network-scripts/`. However, the ifcfg format is now deprecated and has been replaced with keyfiles. By default, NetworkManager no longer creates new profiles in this format. The configuration file is now found in this directory: `/etc/NetworkManager/system-connections/`.

Once you are connected to the shell of your virtual machine, run the following command to identify your interface name:

```bash
ls /sys/class/net
```

Next, make a copy of the configuration file, so that you can revert at any time. For demonstration purposes, our file is called `ens18-nmconnection`:

```bash
sudo cp /etc/NetworkManager/system-connections/ens18-nmconnection /etc/NetworkManager/system-connections/ens18-nmconnection.bak
```

In case of a mistake, you will be able to revert the changes, using the commands below:

```bash
sudo rm -f /etc/NetworkManager/system-connections/ens18-nmconnection
sudo cp /etc/NetworkManager/system-connections/ens18-nmconnection.bak /etc/NetworkManager/system-connections/ens18-nmconnection
```

Edit the file so that it reflects the configuration below, replace `ADDITIONAL_IP` and `GATEWAY_IP` with your own values. In this example, the interface name is `ens18`. Replace this value if it does not apply.

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
gateway=GATEWAY_IP
```

Save and close the file.<br>
Restart your network interface with the following command:

```bash
sudo systemctl restart NetworkManager
```

To verify that the virtual machine is fully connected to the Internet, use the following command:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24,925/28,028/30,840/2,254 ms
```

If you receive a response, this means that the Additional IP has been correctly configured. If not, reboot your virtual machine and retry the ping command.

#### FreeBSD

By default, the virtual machine's network configuration file is located in `/etc/rc.conf`.

Once you are connected to the shell of your virtual machine, run the following command to identify your interface name:

```bash
ls /sys/class/net
```

Next, make a copy of the configuration file, so that you can revert at any time:

```bash
sudo cp /etc/rc.conf /etc/rc.conf.bak
```

In case of a mistake, you will be able to revert the changes, using the commands below:

```bash
sudo rm -f /etc/rc.conf
sudo cp /etc/rc.conf.bak /etc/rc.conf
```

Edit the file so that it reflects the configuration below, replace `ADDITIONAL_IP` and `GATEWAY_IP` with your own values. In this example, the interface name is `em0`. Replace this value if it does not apply.

```console
ifconfig_em0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"
static_routes="net1 net2"
route_net1="-net GATEWAY_IP/32 -interface em0"
route_net2="default GATEWAY_IP"
```

Save and close the file.<br>
Next, edit or create the file `/etc/resolv.conf` and add this line.

```console
nameserver 213.186.33.99
```

Save and close the file, then reboot your virtual machine.


To verify that the virtual machine is fully connected to the Internet, use the following command:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24,925/28,028/30,840/2,254 ms
```

If you receive a response, this means that the Additional IP has been correctly configured. If not, reboot your virtual machine and retry the ping command.

#### Ubuntu

By default, the virtual machine's network configuration file is located in `/etc/netplan/`.

First, access the console to connect to your virtual machine and run the following command to identify your interface name:

```bash
ip addr
```

Next, make a copy of the configuration file, so that you can revert at any time. For demonstration purposes, our file is called `00-installer-config.yaml`:

```bash
sudo cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak
```

In case of a mistake, you will be able to revert the changes, using the commands below:

```bash
sudo rm -f /etc/netplan/00-installer-config.yaml
sudo cp /etc/netplan/00-installer-config.yaml.bak /etc/netplan/00-installer-config.yaml
```

Next, open the network configuration file located in `/etc/netplan/` with the following command:

```bash
sudo nano /etc/netplan/00-installer-config.yaml
```

Once the file is open for editing, amend it with the following code, replacing `INTERFACE-NAME`, `ADDITIONAL_IP` and `GATEWAY_IP` with your own values.

```yaml
network:
  ethernets:
    INTERFACE-NAME:
      dhcp4: true
      addresses:
          - ADDITIONAL_IP/32
      nameservers:
          addresses:
              - 213.186.33.99   
      routes:
           - to: 0.0.0.0/0
             via: GATEWAY_IP
             on-link: true
  version: 2
```

**For example**

```yaml
network:
  ethernets:
    ens18:
      dhcp4: true
      addresses:
          - 192.0.2.1/32
      nameservers:
          addresses:
              - 213.186.33.99
      routes:
           - to: 0.0.0.0/0
             via: 203.0.113.254
             on-link: true
  version: 2
```

Save and close the file. You can test the configuration with the following command:

```bash
sudo netplan try
```

If it is correct, apply it using the following command:

```bash
sudo netplan apply
```

To verify that the virtual machine is fully connected to the Internet, use the following command:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24,925/28,028/30,840/2,254 ms
```

If you receive a response, this means that the Additional IP has been correctly configured. If not, reboot your virtual machine and retry the ping command.

#### Windows Servers / Hyper-V

Before configuring your virtual machine, you need to create a virtual switch.

From the command line of your dedicated server, run the following command and note the name of the network adapter that contains the server's main IP address:

```powershell
ipconfig /all
```

In the Hyper-V Manager, create a new virtual switch and set the connection type to `External`{.action}.

Select the adapter with the server’s IP, then tick the option `Allow management operating system to share this network adapter`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
>This step is only required once for a Hyper-V server. For all VMs, a **virtual switch** is required to connect the VM’s **virtual network adapters** to the server’s **physical adapter**.
> 

Next, select the VM you wish to add the Additional IP to. Use the Hyper-V Manager to change the settings of the VM and shut it down.

Expand the network adapter in the left-hand menu and click on `Advanced Features`{.action}. Change the MAC address to `Static`{.action}, and enter the virtual MAC address for the Additional IP. Once you have entered these settings, press `OK`{.action} to apply the changes.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Next, start the VM and log in as an administrator, then go to the `Control Panel`{.action}'s `Network and Sharing Center`{.action}. Click on `Ethernet`{.action} to open the settings and click on the `Properties`{.action} button to view the `Ethernet Properties`.

Select `Internet Protocol Version 4 (TCP/IPv4)`{.action}, and then click on the `Properties`{.action} button.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

In the IPv4 Properties window, select `Use the following IP address`{.action}. Enter the Additional IP into the IP address field, and enter 255.255.255.255 into the subnet mask.

Fill in your server’s gateway IP address in the appropriate field below and enter 213.186.33.99 into the `Preferred DNS Server`{.action} field.

Finally, click `OK`{.action}, and ignore the warning message about the gateway IP and the assigned IP not being in the same subnet.

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

After rebooting the server, the VM should be connected to the internet using the Additional IP.

### Troubleshooting

If you are unable to establish a connection from your VM to the public network and you suspect a networking problem, please reboot the server in rescue mode and set up the bridging network interface directly on the host.

Enter the following command in the rescue mode terminal, in which you replace MAC_ADDRESS with the vMAC address that you have generated in the Control Panel and ADDITIONAL_IP with your Additional IP address:

```bash
ip link add name test-bridge link eth0 type macvlan
ip link set dev test-bridge address MAC_ADDRESS
ip link set test-bridge up
ip addr add ADDITIONAL_IP/32 dev test-bridge
```

Next, ping your Additional IP address from an external device.

- If it responds, that probably means that there is a configuration error either on the VM or the host that prevents the Additional IP from working in normal mode.

- If the IP address is still not working, please open a support ticket via the [help center](https://help.ovhcloud.com/csm?id=csm_cases_requests) to relay your test results to our support teams.

## Go further

Join our [community of users](/links/community).
