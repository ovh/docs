---
title: Segment management in NSX
excerpt: How to create and use segments
updated: 2023-02-27
---

**Last updated 27th February 2023**

## Objective

In an NSX solution a segment is a virtual level 2 domain, it can be of two types :

- **VLAN-backed segments** : Communication between hosts and virtual machines is done through VLANs and a Layer 2 switch of the OSI model. In order for these segments to communicate with the elements of NSX (Internet and other segments), an interface must be added to the **Tier-1 Gateways** or **Tier-0 Gateways** gateways.
- **Overlay-backed segments**: The connection is made using a software overlay that establishes tunnels between hosts. You must add an address to a subnet that will be used for routing outside this segment. They must be connected to a **Tier-1 Gateways** gateway such as **ovh-T1-gw**.

The segments are linked to transport zones that are predefined by OVHcloud.

- **system-owned-vlan-transport-zone-for-rtep | VLAN** : Area for extended RTEP networks.
- **system-owned-vlan-transport-zone-for-evpn | VLAN** : Zone for VPNs.
- **ovh-tz-overlay | VLAN** : Zone for Overlay segments behind the **ovh-t1-gw** gateway.
- **ovh-tz-public | VLAN** : Area connected to the public network on a single VLAN provided by OVHcloud.
- **ovh-tz-vrack | VLAN** : Area connected to the OVHcloud vRack where it is possible to create segments with a particular VLAN.

**Discover the creation and use of segments in the NSX and vCenter interfaces.**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en/directory/) if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en/enterprise/products/hosted-private-cloud/) to receive login credentials.
- A user account with access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).
- **NSX** deployed.

## Instructions

### Creating a segment in the NSX interface

We will create an *Overlay-backed segment* connected to **ovh-T1-gw** in a subnet in 192.168.1.0/24 with gateway 192.168.1.254.

From the NSX interface go to the `Networking`{.action} tab.

![01 Create Segment 01](images/01-create-segment01.png)

Click on `Segments`{.action} on the left.

![01 Create Segment 02](images/01-create-segment02.png)

Click on `ADD SEGMENT`{.action} on the right.

![01 Create Segment 03](images/01-create-segment03.png)

Fill-in this information:

- **Name**: Your segment name.
- **Connected Gateway**: Predefined gateway ovh-T1-gw | Tier1.
- **Transport Zone**: ovh-tz-overlay predefined zone.
- **Subnet**: The gateway address of the segment in this format 192.168.1.254/24.

Then click on `SAVE`{.action} on the right.

![01 Create Segment 04](images/01-create-segment04.png)

Click `NO`{.action} when prompted.

![01 Create Segment 05](images/01-create-segment05.png)

The new segment appears in the list.

![01 Create Segment 06](images/01-create-segment06.png)

In the Networking tab, click on `Network Topology`{.action} on the left to see the new segment and its location in the network.

![02 Display Network Topology 01](images/02-display-network-topology-with-onesegment01.png)

### Connecting a virtual machine to this segment.

Go to the vCenter interface of your Hosted Private Cloud cluster.

Right-click the virtual machine and click `Edit Settings`{.action}.

![03 Connect Network Card to Segment 01](images/03-connect-network-card-vm-to-segment01.png)

Scroll to the right of your network adapter and choose `Browse`{.action}.

![03 Connect Network Card to Segment 02](images/03-connect-network-card-vm-to-segment02.png)

Select the `network`{.action} that is named after your segment and click `OK`{.action}.

![03 Connect Network Card to Segment 03](images/03-connect-network-card-vm-to-segment03.png)

Click `OK`{.action}.

![03 Connect Network Card to Segment 04](images/03-connect-network-card-vm-to-segment04.png)

Now that your virtual machine is connected to the segment, go back to the NSX interface.

Go to the `Networking`{.action} tab, choose `Network Topology`{.action}.

![04 display network topology with one segment and one vm 01](images/04-display-network-topology-with-onesegment-and-one-vm01.png)

The virtual machine associated with the network appears in the network topology.

Use the first part of the guide to create a second segment named ov2-segment with these parameters **192.168.2.254/24** in order to have two segments connected to **ovh-T1-gw**.

![05 display four VM on two segment01](images/05-display-four-vm-on-two-segment01.png)

Then, from the **vCenter** console, put two virtual machines on the first segment and two more on the second segment.

Return to the NSX interface in `Network Topology`{.action} to bring up the new network configuration.

![05 display four VM on two segment02](images/05-display-four-vm-on-two-segment02.png)

Both segments are connected to the gateway **ovh-T1-gw**. Routing between the two subnets is enabled without any network restrictions by default.

### Creating a segment on a VLAN 

Through the NSX interface, click on the `Networking`{.action} tab and click on `Segments`{.action} on the left in the **Connectivity** section. Then click `ADD SEGMENT`{.action}.

![06 Add vlan segment 01](images/06-add-vlan-segment01.png){.thumbnail}

Fill in this information :

- **Name** : Type `vlan100-vrack-segment`.
- **Transport Zone** : Select `ovh-tz-vrack`.
- **VLAN** : Write the number `100`.
- **Subnets** : Enter the gateway address and range on this segment `192.168.100.254/24`

Then click `SAVE`{.action}.

![06 Add vlan segment 02](images/06-add-vlan-segment02.png){.thumbnail}

Click `NO`{.action} when prompted.

![06 Add vlan segment 03](images/06-add-vlan-segment03.png){.thumbnail}

### Connecting a VLAN segment to the ovh-T1-gw gateway

You can route the network from a VLAN segment to the Internet and other segments by creating an interface on the **ovh-T1-gw** gateway. When creating the interface, use the same IP address as the one specified in the segment subnet.

Through the NSX interface go to the `Networking`{.action} tab and click on `Tier-1 Gateways`{.action} on the left in the **Connectivity** section.

Then click on the `three vertical points`{.action} and choose `Edit`{.action} from the menu.

![07 add interfaces to ovh-T1-gw with vlan 01](images/07-add-interface-on-ovh-t1-gw01.png){.thumbnail}

Click on the `Down Arrow`{.action} to the left of **SERVICE INTERFACES** and click the `Set`{.action} button that just appeared to the right of **Service Interfaces**.

![07 add interfaces to ovh-T1-gw with vlan 02](images/07-add-interface-on-ovh-t1-gw02.png){.thumbnail}

Click `ADD INTERFACE`{.action}.

![07 add interfaces to ovh-T1-gw with vlan 03](images/07-add-interface-on-ovh-t1-gw03.png){.thumbnail}

Choose this information :

- **Name** : Type `vlan100-interface` as the name of your interface.
- **IP Address / Mask** : Enter the IP address of the interface `192.168.100.254/24` that should match the gateway.
- **Connected To(Segment)** : Take the segment that is on vlan 100 on the vRack named `vlan100-vrack-segment`.

Then click `SAVE`{.action} to confirm the creation of the interface on **ovh-T1-gw**.

![07 add interfaces to ovh-T1-gw with vlan 04](images/07-add-interface-on-ovh-t1-gw04.png){.thumbnail}

Click `CLOSE`{.action}.

![07 add interfaces to ovh-T1-gw with vlan 05](images/07-add-interface-on-ovh-t1-gw05.png){.thumbnail}

The number `1` next to **Service Interfaces** indicates that the interface is created, click `CLOSE EDITING`{.action} to complete the creation of the interface.

![07 add interfaces to ovh-T1-gw with vlan 05](images/07-add-interface-on-ovh-t1-gw06.png){.thumbnail}

You can now connect outside this segment through the interface with gateway 192.168.100.254/24.

### Assigning a VLAN Segment to a Virtual Machine

Go to your vSphere interface; right-click your virtual machine and choose `Change settings`{.action}.

![08 connect VM to VLAN segment 01](images/08-connect-vm-to-vlan-segment01.png){.thumbnail}

Go to your network adapter and click `Browse`{.action}.

![08 connect VM to VLAN segment 02](images/08-connect-vm-to-vlan-segment02.png){.thumbnail}

Click the `segment`{.action} associated with your VLAN and click `OK`{.action}.

![08 connect VM to VLAN segment 03](images/08-connect-vm-to-vlan-segment03.png){.thumbnail}

Click `OK`{.action} to commit the changes.

![08 connect VM to VLAN segment 04](images/08-connect-vm-to-vlan-segment04.png){.thumbnail}

### Displaying a network topology with overlay segments and other segments on VLANs

Go back to the NSX interface, go to the `Networking`{.action} tab and click on `Network Topology`{.action} on the left to view a graphical view of the network. You will see networks of type Overlay and those of type VLAN connected through an interface on **ovh-t1-gw**.

![09 display network topology vlan overlay01](images/09-display-network-topology-vlan-overlay01.png){.thumbnail}

## Go further <a name="gofurther"></a>

[Getting started with NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
