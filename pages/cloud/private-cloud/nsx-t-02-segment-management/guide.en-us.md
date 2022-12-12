---
title: Segment management
slug: nsx-t-segment-management
excerpt: How to create and use segments
section: NSX-T
order: 02
---

**Last updated 12th November 2022**

> [!warning]
> Guides for **NSX-T** in the VMware solution are not final, they will be modified when the BETA version is released and finalised when the final version is ready.
>


## Objectif

**Découvrir la création et l'utilisation des segment dans l'interface NSX-T et vCenter**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Prérequis

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en/enterprise/products/hosted-private-cloud/) to receive login credentials.
- Having a user account with access to vSphere as well as the specific rights for NSX-T (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we))
- **NSX-T** deployed.

## Presentation

In an NSX-T solution a segment is a virtual level 2 domain (previously named logical switch) it can be of two types :

- **VLAN-backed segments**: communication between hosts and VMs must be done through VLANs and a level 2 switch.
- **Overlay-backed segments**: the connection is made using a software layer that establishes tunnels between the hosts and the VMs.

Les segments sont liés à des zones de transports qui sont prédéfinies par OVHcloud. 

Les segments peuvent être connectés à **ovh-T1-gw** dans ce cas il faut créer un réseau avec une passerelle afin de permettre un trafic sortant au dela de ce segment, soit avec un autre segment soit à l'extérieur du cluster.

## Instructions

### Creating a segment in the NSX-T interface

We will create an *Overlay-backed segment* connected to **ovh-T1-gw** in a subnet in 192.168.1.0/24 with gateway 192.168.1.254.

From the NSX-T interface go to the `Networking`{.action} tab.

![01 Create Segment 01](images/01-create-segment01.png)

Click on `Segments`{.action} on the left.

![01 Create Segment 02](images/01-create-segment02.png)

Click on `ADD SEGMENT`{.action} on the right.

![01 Create Segment 03](images/01-create-segment03.png)

Choose this information:

***Name**: Your segment name.
***Connected Gateway**: predefined gateway ovh-T1-gw | Tier1.
* **Transport Zone**: ovh-tz-overlay predefined zone.
* **Subnet**: The gateway address of the segment in this format 192.168.1.254/24.

Then click on `SAVE`{.action} on the right.

![01 Create Segment 04](images/01-create-segment04.png)

Cliquez sur `NO`{.action}.

![01 Create Segment 05](images/01-create-segment05.png)

The new segment appears in the list.

![01 Create Segment 06](images/01-create-segment06.png)

In the Networking tab, click on `Network Topology`{.action} on the left to see the new segment and its location in the network.

![02 Display Network Topology 01](images/02-display-network-topology-with-onesegment01.png)

### Connecting a virtual machine to this segment.

Go to the vCenter interface of your Hosted Private Cloud cluster.

Right-click on `virtual machine`{.action} and click `Change settings`{.action}.

![03 Connect Network Card to Segment 01](images/03-connect-network-card-vm-to-segment01.png)

Scroll to the right of your network adapter and choose `Browse`{.action}.

![03 Connect Network Card to Segment 02](images/03-connect-network-card-vm-to-segment02.png)

Select the `network`{.action} that is named after your segment. and click `OK`{.action}.

![03 Connect Network Card to Segment 03](images/03-connect-network-card-vm-to-segment03.png)

Click `OK`{.action}.

![03 Connect Network Card to Segment 04](images/03-connect-network-card-vm-to-segment04.png)

Now that your virtual machine is connected to the segment, go back to the NSX-T interface.

Go to the `Networking`{.action} tab, choose `Network Topology`{.action}.

![04 display network topology with one segment and one vm 01](images/04-display-network-topology-with-onesegment-and-one-vm01.png)

The virtual machine associated with the network appears in the network topology.

Use the first part of the guide to create a second segment named ov2-segment with these parameters **192.168.2.254/24** in order to have two segments connected to **ovh-T1-gw**.

![05 display four VM on two segment01](images/05-display-four-vm-on-two-segment01.png)

Then from the **vCenter** console, put two virtual machines on the first segment and two more on the second segment.

Return to the NSX-T interface in `Network Topology`{.action} to bring up the new network configuration.

![05 display four VM on two segment02](images/05-display-four-vm-on-two-segment02.png)

Both segments are connected to the gateway **ovh-T1-gw**, routing between the two subnets is enabled without any network restrictions by default.

## Go further <a name="gofurther"></a>

Join our community of users on <https://community.ovh.com/en/>.
