---
title: VLAN creation
excerpt: Find out how to create VLANs (vRack)
updated: 2020-11-18
---

**Last updated 18th November 2020**

## Objective

In a Managed Bare Metal infrastructure, you have a base of 11 VLANs provided with the vRack.

**This guide shows how to create additional VLANs**

## Requirements

- access to the vSphere Web client (HTML5)

## Instructions

### Create VLANs

In the Managed Bare Metal solutions, you get two virtual distributed switches (vDS). 

These *vDS* have several different *portGroups*, each with their own purpose.

The first vDS has a single *portGroup* type, the VMnetwork being used to communicate to the internet.

The second vDS also has a single *portGroup* type, with VLANs that can be used to isolate private communications within the Managed Bare Metal interface, and between different OVHcloud services that are vRack-compatible(Dedicated Server, Public Cloud...). 

On this switch, 11 VLANs are created as standard (VLAN10 to VLAN20). By giving the `administrator` right on `Access to the V(x)LAN` in [the users management tab of your Control Panel](/pages/bare_metal_cloud/managed_bare_metal/manager-ovhcloud#users-tab), you can create additional VLANs.

First, go to your vSphere client's `networking` view. Deploy the **vrack** folder then right-click on the **dVS** ending in *-vrack* and finally click on `New Distributed Port Group`{.action}.

![vRack](images/07network.png){.thumbnail}

![New Distributed Port Group](images/08network1.png){.thumbnail}

The next step is to name your **PortGroup**:

![nominate portgroup](images/09network2.png){.thumbnail}

Then configure the settings recommended by OVHcloud:

- **Port binding**: Static (reserving and assigning the port to a virtual machine)
- **Port allocation**: Elastic (Allows the number of ports to be hot-wired)
- **Number of ports**: 24
- **VLAN type**: VLAN (The others are [PVLAN](https://kb.vmware.com/s/article/1010691){.external} and Trunk)
- **VLAN ID**: 21 (Knowing that the ID can be configured from 1 to 4096)
- Check the option *Customize default policies configuration*.

![portgroup configuration](images/10network3.png){.thumbnail}

You have 3 security settings that can be activated according to your need: 

- *Promiscuous mode*: Eliminates any filtering that the VM adapter can perform so that the guest operating system receives all observed traffic on the network.
- *MAC address changes*: When set to **Accept**, ESXi will accept requests to change the effective MAC address to an address other than the initial MAC address.
- *Forged transmits*: Affects traffic transmitted from a virtual machine. When set to **Accept**, ESXi does not compare the source and effective MAC addresses.

> [!primary]
>
> The most frequent use of these 3 parameters is the CARP, especially used on **pfSense**.
> 

![security settings](images/11network4.png){.thumbnail}

We leave [Traffic shaping](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-CF01515C-8525-4424-92B5-A982489BACE2.html){.external} disabled.

![traffic shaping](images/12network5.png){.thumbnail}

In terms of load balancing, select *Route Based on IP hash*, which is the best method for redundancy and load balancing.

> [!warning]
>
> Be careful when configuring the failover order: It is necessary to set the `lag1` uplink to *Active* (connection between the virtual network and the physical network), otherwise no communication between the hosts will be possible.
>

![load balancing](images/13network6.png){.thumbnail}

The `NetFlow` is disabled (traffic flow activity report).

![netflow](images/14network7.png){.thumbnail}

Leave the `Block All Ports` value at "No".

![portgroup finalisation](images/15network9.png){.thumbnail}

You will then be presented with a summary of the changes. Click `Finish` to confirm the creation.

![portgroup finalisation](images/16network10.png){.thumbnail}

Here we can see that **VLAN21** is available and functional.

![vlan created](images/17network11.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.