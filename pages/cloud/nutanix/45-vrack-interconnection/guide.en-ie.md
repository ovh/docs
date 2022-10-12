---
title: Interconnect clusters through the vRack
slug: nutanix-vrack-interconnection
excerpt: Setting up a two-cluster interconnection through an OVHcloud vRack
section: Disaster Recovery Plan
order: 03
---

**Last updated 28th September 2022**

## Objective

**This guide will show you how to interconnect two Nutanix clusters Provided by OVHcloud across the same vRack in two remote OVHcloud sites. In this guide, the connection is made between the Gravelines and Roubaix datacentres.** 

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Requirements

- You must be logged in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).
- You must be connected to your clusters via Prism Central.

## Instructions

We are going to interconnect two remote Nutanix clusters, one in Gravelines and the other in Roubaix through the same vRack.<br>
See our [vRack overview](https://www.ovh.ie/solutions/vrack/) to learn more about the OVHcloud vRack solution.

### Preparing both clusters before interconnection

Before connecting the two clusters, ensure that they use different IP addresses (except for the gateway) on the same IP address range.<br>
In our guide, we will use the address range `192.168.0.0/22`.

 The Gravelines cluster uses these addresses:

- Server 1: **CVM** VM address `192.168.2.1`, **AHV** hypervisor IP address `192.168.2.21`.
- Server 2: **CVM** VM address `192.168.2.2`, **AHV** hypervisor IP address `192.168.2.22`.
- Server 3: **CVM** VM address '192.168.2.3', **AHV** hypervisor IP address `192.168.2.23`.
- Virtual address of **Prism Element**: `192.168.2.100`.
- **Prism Central** IP address:`192.168.2.101`.
- Gateway: `192.168.2.254`.
- Cluster version: `6.1`.

The Roubaix cluster uses these addresses:

- Server 1: **CVM** VM address `192.168.1.1`, **AHV** hypervisor IP address `192.168.1.21`.
- Server 2: **CVM** VM address `192.168.1.2`, **AHV** hypervisor IP address `192.168.1.22`.
- Server 3: **CVM** VM address `192.168.1.3`, **AHV** hypervisor IP address `192.168.1.23`.
- Virtual address of **Prism Element**: `192.168.1.100`.
- **Prism Central** IP address:`192.168.1.101`.
- Gateway: `192.168.2.254`.
- Cluster version: `6.1`.

Use our guide on [customised redeployment of your Cluster](https://docs.ovh.com/ie/en/nutanix/cluster-custom-redeployment/).

> [!primary]
> The guide mentioned above will help you redeploy both clusters. However, you can only redeploy one, the most important thing is not to have the same identical IP addresses across the network, except for the OVHgateway.
>

### Shutting down the OVHgateway virtual machine.

The outgoing internet connection is provided by OVHgateway virtual machines with the same private IP address on both sites. We will stop the OVHcloud Virtual Machine Gateway in Roubaix. This virtual machine will no longer be needed.

The outgoing internet connection will be restored when the connection through the **vRack** is made.

Log in to the cluster **Prism Central** interface located in Roubaix. 

Go to the virtual machine management section, select `OVHgateway` from the `Actions`{.action} menu and click `Guest Shutdown`{.action}.

![01 OVHgateway Shutdown 01](images/01-ovhgateway-shutdown01.png){.thumbnail}

Access to Prism Central is maintained using the Load Balancer.

### Configuring vRacks

This operation involves deleting the vRack assignment in Roubaix and then extending the vRack from Gravelines to Roubaix. You can modify the vRack via the OVHcloud Control Panel. 

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie). 

#### Deleting Roubaix vRack elements.

From the `Hosted Private Cloud`{.action} menu, select the Roubaix cluster on the left in the `Nutanix` category and note the name of the vRack which is under `Private network (vRack)`.

![02 Remove services from vrack 01](images/02-remove-services-fromvrack01.png){.thumbnail}

Go to the `Bare Metal Cloud` menu, click on the `vRack`{.action} concerned below the `vRack`{.action} option (in the `Network`{.action} submenu).

![02 Remove services from vrack 02](images/02-remove-services-fromvrack02.png){.thumbnail}

Select all the elements that are in your vRack:

 - Dedicated servers
 - IPs
 - the Load Balancer

 Write them down and click `Remove`{.action}

> [!warning]
> 
> This operation may take a few minutes, please wait during this period.
> 

![02 Remove services from vrack 03](images/02-remove-services-fromvrack03.png){.thumbnail}

### Adding deleted items from the Roubaix vRack into the Gravelines vRack

Go back to the `Hosted Private Cloud`{.action} menu, choose the Gravelines cluster from the `Nutanix` category and note the name of the vRack under `Private network (vRack)`.

![03 Add to vrack 01](images/03-addtovrack01.png){.thumbnail}

Go to the `Bare Metal Cloud` menu, select the `vRack`{.action} from Gravelines below the `vRack`{.action} option (from the `Network`{.action} submenu).

![03 Add to vrack 02](images/03-addtovrack02.png){.thumbnail}

Select these elements from the Roubaix cluster: 

- Physical servers 
- the public IP.

Then click `Add`{.action}.

> [!warning]
> 
> This operation may take a few minutes, please wait during this period. 
> 

> [!primary]
> 
> Adding the public address is not mandatory but it will make it available for future needs.
> 

![03 Add to vrack 03](images/03-addtovrack03.png){.thumbnail}

The **vRack** that was only used by the servers in the Gravelines cluster is now used on both sites and contains:

- The physical servers of the two clusters.
- The public IP addresses of the two clusters.
- The Gravelines Load Balancer, used for Prism Central.

Outgoing internet access on the Roubaix website is again available through the vRack and the OVHgateway virtual machine in Gravelines. Access to Prism Central for the Roubaix cluster is currently inaccessible.

### Modifying the Roubaix Load Balancer

We will reconfigure the Roubaix Load Balancer to work with the vRack shared by both sites, so that it can access Prism Central for the Roubaix cluster.

In the `Bare Metal Cloud` menu, select the Roubaix Load Balancer from the `Load Balancer`{.action} submenu.

Go to `Private networks`{.action}, click on the `...`{.action} to the right of the existing **private network**.

![04 Modify Load Balancer 01](images/04-modify-loadbalancer01.png){.thumbnail}

Click `Delete`{.action}.

![04 Modify Load Balancer 02](images/04-modify-loadbalancer02.png){.thumbnail}

Click `Delete`{.action} again at the confirmation request.

![04 Modify Load Balancer 03](images/04-modify-loadbalancer03.png){.thumbnail}

Click `Enable`{.action} to the right of **vRack**.

![04 Modify Load Balancer 04](images/04-modify-loadbalancer04.png){.thumbnail}

Select `Existing`, select the vRack that is common to both sites, and click on `Enable`{.action}.

![04 Modify Load Balancer 05](images/04-modify-loadbalancer05.png){.thumbnail}

Click `Add Private Network`{.action}.

![04 Modify Load Balancer 06](images/04-modify-loadbalancer06.png){.thumbnail}

Choose these values:

- **Name (optional)**: Private network name.
- **VLAN ID**: Nutanix management network VLAN, normally 1.
- **Subnet**: Private network LAN 192.168.0.0/22.
- **NatIP**: Address range used by the Load Balancer 192.168.2.128/27.
- **Name**: NutaCluster-all.

> [!warning]
> 
> The range chosen by **NatIp** should not be used by other elements of the private network, particularly the range taken by the Gravelines Load Balancer.
> 

Then click `Add`{.action}.

![04 Modify Load Balancer 07](images/04-modify-loadbalancer07.png){.thumbnail}

A yellow banner appears, indicating that the configuration has not been applied. Click `Apply Configuration`{.action}.

![04 Modify Load Balancer 08](images/04-modify-loadbalancer08.png){.thumbnail}

Select the `Roubaix(RBX)`{.action} datacentre and click on `Apply configuration`{.action}.

![04 Modify Load Balancer 09](images/04-modify-loadbalancer09.png){.thumbnail}

The Load Balancer is connected to the vRack shared by both sites, and access to Prism Central for the Roubaix cluster is then available.

![04 Modify Load Balancer 10](images/04-modify-loadbalancer10.png){.thumbnail}

## Go further

[Disaster Recovery Plan on Nutanix](https://docs.ovh.com/ie/en/nutanix/disaster-recovery-plan-overview/)

[Asynchronous or NearSync replication through Prism Element](https://docs.ovh.com/ie/en/nutanix/prism-element-nutanix-replication/)

[Advanced replication with Leap](https://docs.ovh.com/ie/en/nutanix/leap-replication/)

[Introduction to vRacks](https://www.ovh.ie/solutions/vrack/)

Join our community of users on <https://community.ovh.com/en/>.

