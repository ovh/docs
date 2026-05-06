---
title: "Configure a pfSense Network Bridge on a Dedicated Server"
excerpt: "Set up IP bridging on a pfSense virtual machine running on an OVHcloud dedicated server for network routing."
updated: 2025-04-28
---

## Objective

Bridged networking can be used to configure your pfSense virtual machine to be a NAT firewall for other virtual machines on the same host or could even be used as an extra filter for a web server for example. Specific steps and configurations are needed to allow the pfSense router to work on our network and this guide will show you how a basic pfSense NAT configuration is done.

## Requirements

- A dedicated server with a hypervisor installed (e.g. [VMware ESXi](https://www.vmware.com/products/cloud-infrastructure/vsphere), [Citrix Xenserver](https://www.citrix.com/products/citrix-hypervisor/), [Proxmox](https://www.proxmox.com/en/proxmox-ve), etc.)
- At least one [Additional IP](/links/network/additional-ip) address attached to the server

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Dedicated Servers](/links/control-panel/baremetal-dedicated-servers)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Dedicated servers`{.action} > Select your server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Recommendations for your pfSense virtual machine

- A dedicated server with the [AES instruction set](https://en.wikipedia.org/wiki/AES_instruction_set)
- 2 virtual cores for the virtual machine
- 2GB(2048MB) of RAM for the virtual machine
- Hypervisor with console access to virtual machines

> [!warning]
>This tutorial will show you how to use one or more OVHcloud solutions with external tools, and will describe the actions to be carried out in a specific context. Please remember to adapt these actions to fit your situation.
>
If you encounter any difficulties performing these actions, please contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Instructions

### First steps

For the pfSense virtual machines network configuration, we will use the following values which should be replaced with your own values:

- ADDITIONAL_IP = The address of your Additional IP
- Virtual MAC address = The MAC address created in the OVHcloud Control Panel
- GATEWAY_IP = The address of your default gateway

#### Assigning a virtual MAC address

<!-- CP-STEPS-START:assign-virtual-mac -->
Log in to the [OVHcloud Control Panel](/links/manager), open the `Network`{.action} menu in the left-hand sidebar and click `Public IP Addresses`{.action}.

Click the `Additional IP`{.action} tab.

![Additional IP tab in OVHcloud Control Panel](images/manageIPs.png){.thumbnail}

Next, locate your Additional IP address in the table and click the `...`{.action} button to open the menu. Select `Add a virtual MAC`{.action}.

![Context menu with Add a virtual MAC option](images/addvmac.png){.thumbnail}

Select `ovh`{.action} from the `Type`{.action} dropdown box, type a name in the `Name of virtual machine`{.action} field, and then confirm your options.

![Virtual MAC type and name configuration dialog](images/addvmac2.png){.thumbnail}
<!-- CP-STEPS-END:assign-virtual-mac -->

#### Determining the gateway address

To configure your virtual machines for internet access, you will need to know the gateway of your host machine (i.e. your dedicated server). The gateway address is made up of the first three octets of your server’s main IP address, with 254 as the last octet. For example, if your server’s main IP address is:

- 123.456.789.012

Your gateway address would therefore be:

- 123.456.789.254

### Configuring pfSense

> [!primary]
>
Concerning external software, please note that the proper procedure to configure your services may be subject to change. We recommend to consult the manuals and knowledge resources of the respective software if you experience any issues.
> 

When you’re setting up pfSense on our network, the usual place to start would be the console of pfSense. Because our network does require the public IP to be using a /32(255.255.255.255) subnet mask plus gateway is outside the scope of the public IP, the console will in fact not allow you to do this. To do this, you are going to have to start by setting up the LAN side first.

#### The hypervisor 

Since pfSense or most routers require two network interfaces to separate the public and private network, it’ll be necessary to have two bridge interfaces on your hypervisor. In this demonstration we’re using Proxmox VE 6.

In this example, we have two interfaces `enp1s0` and `enp2s0` but the interface `enp1s0` is already bridged with the interface with `vmbr0`. So we will need to make an additional bridge interface `vmbr1` with `enp2s0`:

![Proxmox network interfaces list with existing bridge](images/hypervisor-1_1.png){.thumbnail}

![Creating a second bridge interface vmbr1 in Proxmox](images/hypervisor-1_2.png){.thumbnail}

Note that if your server doesn’t have a second network interface, it’s not necessary to bridge it to an interface, the bridge will work fine but would only be able to route internally on the server. Using an interface on a network bridge can allow you to route to other virtual machines, dedicated servers, Public Cloud instances and even Hosted Private Cloud infrastructures using vRack. 

#### Creating the virtual machines: pfSense

Now we’re going to start creating the pfSense virtual machine, 

- Under the OS tab, choose: Other OS type
- Under the Hard Disk tab, Bus/Device should be: VirtIO
- First item under the Network tab, make sure the bridge is vmbr0 
- Second item under the Network tab, Model should be: VirtIO (paravirtualized)
- If your CPU has the AES instruction set, this should be enabled

![Proxmox VM creation wizard OS type selection](images/pfsense-vm-1.png){.thumbnail}

If your CPU has the AES instruction set, it must be enabled (from the `CPU`{.action} tab)

![Enabling AES instruction set in VM CPU settings](images/pfsense-vm-2.png){.thumbnail}

When you’re at the Network tab of creating the virtual machine, make sure you enter the `Virtual MAC` address that is created in the OVHcloud Control Panel.

![Entering the virtual MAC address in VM network settings](images/pfsense-vm-3.png){.thumbnail}

After creating the virtual machine, you’ll need to make sure that a second network interface is created on your second bridge interface:

![Adding a second network interface to the pfSense VM](images/pfsense-vm-4_1.png){.thumbnail}

![Second network interface assigned to vmbr1 bridge](images/pfsense-vm-4_2.png){.thumbnail}

#### Creating the virtual machines: Virtual desktop 

Since some of the settings on pfSense are accessible using its web GUI, the easy way would be to set up a virtual desktop. In this demonstration, we’re using an Ubuntu 20.04 ISO. When creating the virtual desktop, make sure the bridge interface being chosen is the secondary one and not the bridge interface to your public network.

![Ubuntu desktop VM creation with secondary bridge selected](images/desktop-vm-1.png){.thumbnail}

We’ll be starting the virtual desktop before starting up the pfSense virtual machine. For the demonstration, we’ll just select `Try Ubuntu`{.action} just to start working on pfSense, might install later.

![Ubuntu live desktop with Try Ubuntu option selected](images/desktop-vm-2.png){.thumbnail}

#### The pfSense console

We’ll now be starting the pfSense virtual machine and proceeding with the OS installation.

![pfSense OS installation welcome screen](images/pfsense-vm-5.png){.thumbnail}

After the OS installation is completed, first thing pfSense will ask is setting up VLANs. Since pfSense is being installed into a hypervisor, we wouldn’t suggest configuring it on the virtual machine but if you need VLANs, this should be done on the virtual interface at the hypervisor level.

![pfSense VLAN configuration prompt after installation](images/pfsense-vm-6.png){.thumbnail}

Next step is choosing which interface will be your `WAN` and which will be your `LAN`. We’ll be able to see which should be the `WAN` by seeing that it has the `virtual MAC address` that was created in the OVHcloud Control Panel.

![pfSense WAN and LAN interface selection by MAC address](images/pfsense-vm-7.png){.thumbnail}

![pfSense console confirming WAN and LAN assignments](images/pfsense-vm-8.png){.thumbnail}

This example we chose `vtnet0` as our `WAN` and `vtnet1` as our `LAN`. After this step, pfSense will ask if you’d like to proceed and confirm which interface is `WAN` and `LAN.` After confirming, it’ll automatically configure `192.168.1.1` on its `LAN` interface.

#### The pfSense web GUI

Now that there’s a private IP assigned to the `LAN` interface of our pfSense virtual machine, we’re going to go ahead and make a DHCP request so we can access the pfSense web GUI.

Go to the Wired settings on the Ubuntu VM.

![Ubuntu VM wired network settings panel](images/desktop-vm-3_1.png){.thumbnail}

Now we enable the network, if it was already enabled simple disable then enable it again.

![Enabling the wired network connection on Ubuntu VM](images/desktop-vm-3_2.png){.thumbnail}

Open a web browser and enter `192.168.1.1`{.action} into the URL, there will be a security warning about the interface but it’s not something to be concerned about. Be sure to open advanced select `Accept and Continue`{.action}.

![Browser security warning when accessing pfSense web GUI](images/desktop-vm-4_1.png){.thumbnail}

![Accepting the security exception to proceed to pfSense](images/desktop-vm-4_2.png){.thumbnail}

Default username and password should be `admin` as the username and `pfsense` as the password, be sure to login. We’ll now be going through the general setup, the important thing to do would be to set `SelectedType` as `Static` under `Configure WAN Interface`, this would be at step 4 of 9. All the other settings shouldn’t be changed with the exception of the DNS can be up to you but in this use case we had put `213.186.33.99` since it’s our resolver within our network.

![pfSense general setup wizard with WAN set to Static](images/pfsense-vm-9.png){.thumbnail}

At the stage, the pfSense VM doesn’t have a public IP. Click on the menu icon on the top right corner, under `Interfaces`{.action} select `WAN`{.action}.

![pfSense Interfaces menu selecting WAN configuration](images/pfsense-vm-10_1.png){.thumbnail}

Make sure the settings are matching from what is shown in the below screenshots and enter your `Additional IP`. `The IPv4 Upstream gateway` will be configured later.

![WAN interface settings with Additional IP and /32 subnet](images/pfsense-vm-10_2.png){.thumbnail}

![Saving WAN interface configuration changes](images/pfsense-vm-10_3.png){.thumbnail}

Now that we have a public IP on the interface, we’ll need to make sure it’ll route correctly on our network. Click on the menu icon on the top right corner, under `System`{.action} select `Routing`{.action}.

![pfSense System menu selecting Routing configuration](images/pfsense-vm-11_1.png){.thumbnail}

Make sure the settings are matching from what is shown in the below screenshot, then select the `Add`{.action} icon to create our gateway.

![Routing gateways page with Add button highlighted](images/pfsense-vm-11_2.png){.thumbnail}

![New gateway creation form in pfSense](images/pfsense-vm-11_3.png){.thumbnail}

Make sure the settings are matching from what is shown in the below screenshots and enter your `Gateway IP`. Make sure to open the advanced settings.

![Gateway IP address and interface settings](images/pfsense-vm-11_4.png){.thumbnail}

![Gateway advanced settings with upstream configuration](images/pfsense-vm-11_5.png){.thumbnail}

![Saving the new gateway configuration](images/pfsense-vm-11_6.png){.thumbnail}

![Gateway list showing the newly created upstream gateway](images/pfsense-vm-11_7.png){.thumbnail}

Now that we have an Upstream gateway, we’ll need to assign the gateway to the `WAN` interface. Again we click on the menu icon on the top right corner, under `Interfaces`{.action} select `WAN`{.action}. 

![Navigating back to WAN interface to assign the gateway](images/pfsense-vm-10_1.png){.thumbnail}

![Selecting the upstream gateway on the WAN interface](images/pfsense-vm-11_8.png){.thumbnail}

Since we’re running pfSense as a virtual machine and it doesn’t have it’s own dedicated network card, some changes should be done. Click on the menu icon on the top right corner, under `System`{.action} select `Advanced`{.action}.

![pfSense System menu selecting Advanced settings](images/pfsense-vm-trouble-1_1.png){.thumbnail}

In this menu, select the `Networking`{.action} tab. At the bottom of this menu, make sure the settings are matching from what is shown in the below screenshots.

![Advanced Networking tab with hardware checksum offloading disabled](images/pfsense-vm-trouble-1_2.png){.thumbnail}

![Saving advanced networking optimizations for VM environment](images/pfsense-vm-trouble-1_3.png){.thumbnail}

Now we should be done! You should see that web browsing can be done just like a desktop behind a NAT firewall.

## External resources

For choosing the correct virtual interfaces, OS type, etc. for Proxmox, we were following Netgate’s recommendations. If you’re not going to be using Proxmox, we’d suggest to review the following links to their documentation on the subject.

[Virtualizing with Proxmox VE](https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-proxmox-ve.html)

[https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-esxi.html#installing-pfsense-software-on-vsphere-6-x-using-vsphere-web-client](https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-esxi.html#installing-pfsense-software-on-vsphere-6-x-using-vsphere-web-client)

[https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-hyper-v.html](https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-hyper-v.html)

## Go further

[Dedicated Server - Configuring Additional IPs in Bridge Mode](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

[Edge Network Firewall for Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

Join our [community of users](/links/community).
