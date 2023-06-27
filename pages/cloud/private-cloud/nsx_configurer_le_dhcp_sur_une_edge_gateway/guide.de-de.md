---
title: DHCP auf Edge NSX-v konfigurieren (EN)
routes:
    canonical: '/pages/cloud/private-cloud/nsx_configurer_le_dhcp_sur_une_edge_gateway'
excerpt: Assign IPs to your VMs through DHCP
updated: 2021-11-22
---

**Last Updated on 22nd November 2021**

## Objective

DHCP allows automatic assignment of private IPs to VMs behind your NSX Edge Services Gateway.

**This guide explains how to setup the DHCP service.**

## Requirements

- being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) to receive login credentials
- a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de))
- a deployed [NSX Edge Services Gateway](/pages/cloud/private-cloud/nsx_deploying_edge_gateway)

## Instructions

### Interface access

In the vSphere interface menu, go to the `Networking and Security`{.action} dashboard.

![Menu](images/en01dash.png){.thumbnail}

On the left side, navigate to the `NSX Edges`{.action} section then click on the appliance you're setting up.

![NSX](images/en02nsx.png){.thumbnail}

In the `DHCP`{.action} tab, you'll see 3 options:

- Pools
- Bindings
- Relay

We'll set up those 3 services in this guide.    

Let's start with `Pools`{.action}. Click on it.

![NSX](images/en03dhcpadd.png){.thumbnail}

### Pools menu

The `Pools`{.action} menu allows the traditional setup of the DHCP service.    
We'll set up a scope for it and will start the service.

Click on `+ Add`{.action}.

In the New DHCP Pool window, fill in the informations you need:

- Start IP is the first usable IP for the DHCP service
- End IP is the first usable IP for the DHCP service
- Domain Name is optional but can be useful for your DNS
- Primary and Secondary Name Server are your personalized DNS settings (can be auto configured if the slider above is turned on)
- Default Gateway is optional
- Subnet Mask is self explanatory
- You can set never ending leases or mofify lease times if that's a requirement
- You have more advanced options in the `DHCP Options`{.action} tab but those are outside of the scope of this guide

![Pool](images/en04pool.png){.thumbnail}

Click on `Add`{.action} when done.

The DHCP pool is ready but you need to click `Start`{.action} and then `Publish`{.action} to start the service and register the changes.

![Pool](images/en05publish.png){.thumbnail}

The DHCP is now operational.
You can see the service status and the basic information on the pool.

![Pool](images/en05started.png){.thumbnail}

### Bindings menu

Now on the left side, click on `Bindings`{.action}.

Bindings will always assign the same DHCP address to a specific network interface, depending on a specific information.    
Click on `+ Add`{.action} when ready.

![Bind](images/en06bind.png){.thumbnail}

There are 2 ways to create bindings:

- VM NIC Binding: the IP address will be set for a specific VM network interface
- MAC Binding: the IP address will be set for a specific MAC address

For VM NIC Binding, type in the information as follows:

- Interface: Edge Services Gateway interface that will be distributing the address
- VM Name: VM that will receive the address
- VM vNIC Index: Which network adapter on the VM will be assigned the address
- Host Name: DNS name of the VM (optional)
- IP Address: Address reserved for the NIC
- Subnet Mask: Subnet mask
- Domain Name: Domain name (optional)
- Default Gateway: Default Gateway
- You can set never ending leases or mofify lease times if that's a requirement

![Bind](images/en07vnicbind.png){.thumbnail}

Don't forget your `DNS Settings`{.action}.
They can be put manually or configured automatically.

Click on `Save`{.action} when done.

![Bind](images/en08binddns.png){.thumbnail}

Now click on `+ Add`{.action} again and choose `Use MAC Binding`{.action}.

- MAC Address: Target NIC MAC address 
- Host Name: DNS name of the VM (optional)
- IP Address: Address reserved for the NIC
- Subnet Mask: Subnet mask
- Domain Name: Domain name (optional)
- Default Gateway: Default Gateway
- You can set never ending leases or mofify lease times if that's a requirement

![Bind](images/en09macbind.png){.thumbnail}

Again, do not forget your `DNS Settings`{.action}.

Click on `Save`{.action} when done.

![Bind](images/en10autodns.png){.thumbnail}

You can now `Publish`{.action} our changes.

![Bind](images/en11publish.png){.thumbnail}

The DHCP Bindings and their basic settings are now visible.

![Bind](images/en12done.png){.thumbnail}


### Relay menu

Click on `Relay`{.action}.

> [!primary]
> The set up of a DCHP relay implies the existence of routes to the target DHCP servers.

First, create the Global Configuration by clicking `Edit`{.action}.    

![Relay](images/en13relay.png){.thumbnail}

You can add:

- Pre-existing IP sets set up in your NSX Edge Services Gateway
- IP adresses of DHCP servers
- Domain Names

Click `Save`{.action} when ready.

![Relay](images/en14relayset.png){.thumbnail}

Now click `+ Add`{.action} to set up an agent.     

![Relay](images/en15agentadd.png){.thumbnail}

The vNIC will be the Edge Services Gateway interface that will forward the DHCP requests.    
The Gateway Address is the address that will forward the requests. 

Click `Add`{.action}.

![Relay](images/en16agent.png){.thumbnail}

You can now `Publish`{.action} the changes.

![Relay](images/en17publish.png){.thumbnail}

Your DHCP Relay will be functional after a short wait.

![Relay](images/en18done.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
