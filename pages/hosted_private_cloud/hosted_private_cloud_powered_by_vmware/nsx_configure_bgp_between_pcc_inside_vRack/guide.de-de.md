---
title: "Configure BGP between two PCCs via NSX-T (EN)"
excerpt: "Find out how to configure your BGP network to interconnect two virtual machines from two different Dedicated Cloud servers"
updated: 2024-02-26
---

## Objective

**This guide details how to configure your BGP network to interconnect two virtual machines from two different Dedicated Cloud servers**

## Requirements

- Two Dedicated Cloud services.
- You need to have created a VLAN.

## Instructions

### PCC Configuration

For our example configuration, two PCCs are used:

- DE
- UK

For the connection between our two PCCs, we will use VLAN 12.

> [!primary]
> To configure PCCs, please access your NSX interface in the `Networking`{.action} section. Then follow the steps below.
> Also note that for each step of the configuration, it is done on both environments.

#### Segment Creation

In the `Segments` > `Add Segment` section, create a segment in the transport region **ovh-tz-vrack** on VLAN 12. Assign any IP address to the gateway, as we do not intend to use it.

> [!tabs]
> **De**
>>![SegmentCreationDE](images/segment_creation_de.png){.thumbnail}
> **UK**
>> ![SegmentCreationUK](images/segment_creation_uk.png){.thumbnail}

#### Overlay Segment

Create an overlay segment in the location where we plan to deploy our virtual machine. Use 172.16.0.254 (DE) or 192.168.0.254 (UK) as the gateway IP address on this segment. Optionally, configure a DHCP server to simplify deployment, although this is not required. Please note that we are currently connecting our segment to the ovh-T1-gw T1, but this configuration will be modified later.

> [!tabs]
> **DE**
>>![OverlaySegmentDE](images/segment_overlay_de.png){.thumbnail}
>>![OverlaySegmentDE2](images/segment_overlay_de_2.png){.thumbnail}
> **UK** 
>>![OverlaySegmentUK](images/segment_overlay_uk.png){.thumbnail}
>>![OverlaySegmentUK2](images/segment_overlay_uk_2.png){.thumbnail}

#### VRF Creation DE

1\. To create a Virtual Routing Firewall (VRF), go to `Connectivity` > `Tier-0 Gateways` > `Add Gateway` > `VRF`.

> [!tabs]
> **DE**
>> ![VRFCreationDE](images/vrf_creation_de.png){.thumbnail}
> **UK**
>> ![VRFCreationUK](images/vrf_creation_uk.png){.thumbnail}

2\. Name your VRF as needed and connect it to the gateway **ovh-T0-gw**, save and continue the configuration.

> [!tabs]
> **DE**
>> ![VRFCreationDE2](images/vrf_creation_de_2.png){.thumbnail}
>> ![VRFCreationDE3](images/vrf_creation_de_3.png){.thumbnail}
> **UK**
>> ![VRFCreationUk2](images/vrf_creation_uk_2.png){.thumbnail}
>> ![VRFCreationUk2](images/vrf_creation_uk_3.png){.thumbnail}

3\. Configure two interfaces, one for each edge. Choose two free addresses from your VLAN IP range (for example, we will take 10.0.0.1/.2/.3/.4), then connect them to the VLAN12 segment you have created.

> [!tabs]
> **DE**
>> ![VRFCreationDE4](images/vrf_creation_de_4.png){.thumbnail}
>> ![VRFCreationDE5](images/vrf_creation_de_5.png){.thumbnail}
> **UK**
>> ![VRFCreationUK4](images/vrf_creation_uk_4.png){.thumbnail}
>> ![VRFCreationUK5](images/vrf_creation_uk_5.png){.thumbnail}

4\. Verify that your two interfaces are created and that their status is in `Success` (section `Tier-0 Gateway`).

> [!tabs]
> **DE**
>> ![VRFCreationDE6](images/vrf_creation_de_6.png){.thumbnail}
> **UK**
>> ![VRFCreationUK6](images/vrf_creation_uk_6.png){.thumbnail}

#### T1 Creation

In the `Tier-1 Gateways` > `Add Tier-1 Gateway` section, create a new T1 gateway. Choose a name that suits your needs, then connect it to the VRF you have created and finally, connect it to your Edge cluster.

> [!tabs]
> **DE**
>> ![T1CreationDE](images/t1_creation_de.png){.thumbnail}
> **UK**
>> ![T1CreationUK](images/t1_creation_uk.png){.thumbnail}

#### Connection Segment & T1

Change the DE Segment you just created and change the gateway **GW** to **T1**.

You should get that result:

> [!tabs]
> **DE**
>> ![ConnectionSegmentT1DE](images/connection_segment_de_to_t1.png){.thumbnail}.
>> ![ResultSegmentDE](images/result_segment_de.png){.thumbnail}
> **UK**
>> ![ConnectionSegmentT1UK](images/result_segment_uk.png){.thumbnail}

#### Create Virtual Machines

Create a virtual machine in the respective portgroup **DE Segment** or **UK Segment**. If you have deployed a DHCP service, the IP address should be assigned automatically. Otherwise, configure a static IP address for your virtual machine.

> [!tabs]
> **DE**
>> ![CreationVMDE](images/creation_vm_de.png){.thumbnail}
> **UK**
>> ![CreationVMUK](images/creation_vm_uk.png){.thumbnail}

### Preparing NSX for BGP routing

>[!primary]
> Currently, AS number functionality is not available at the VRF level. It will be compatible with NSX version 4.1.1. The AS is 65000 on both PCCs if you do not modify anything, as it is natively configured at level T0 by automation.

You can view your BGP configurations by editing your T0 gateway.

> [!tabs]
> **DE**
>> AS of DE environment is 65000, the IPs of the Edges are 10.0.0.1 and 10.0.0.2
>> ![ASEdgeDE](images/as_edge_de.png){.thumbnail}
> **UK**
>> AS from the UK environment is 65000, the IPs of the Edges are 10.0.0.3 and 10.0.0.4
>> ![ASEdgeUK](images/as_edge_uk.png){.thumbnail}

#### VRF configuration

Still on your VRF edition, enable BGP and add the environment to attach.

> [!tabs]
> **DE**
>> ![UPBGPDE](images/bgp_up_de.png){.thumbnail}
>> ![BGPNeighborsDE](images/bgp_up_neighbors_de.png){.thumbnail}
> **UK**
>> ![UPBGPUK](images/bgp_up_uk.png){.thumbnail}
>> ![BGPNeighborsUK](images/bgp_up_neighbors_uk.png){.thumbnail}

**Configure a route redistribution**

You need to redistribute the routes of the connected segments.
To do this, go to the `Route Redistribution` section of your VRF (below that of the BGP).

![BGPRouteRedistribution](images/bgp_set_route_redistribution.png){.thumbnail}

Add a redistribution route rule that will be connected to your T1 segment.

> [!tabs]
> **DE**
>> ![BGPRouteRedistributionDE](images/bgp_set_route_redistribution_de.png){.thumbnail}
>> ![BGPRouteRedistributionDE2](images/bgp_set_route_redistribution_de_2.png){.thumbnail}
>> ![BGPRouteRedistributionDE3](images/bgp_set_route_redistribution_de_3.png){.thumbnail}
> **UK**
>> ![BGPRouteRedistributionUK](images/bgp_set_route_redistribution_uk.png){.thumbnail}
>> ![BGPRouteRedistributionUK2](images/bgp_set_route_redistribution_uk_2.png){.thumbnail}
>> ![BGPRouteRedistributionUK3](images/bgp_set_route_redistribution_uk_3.png){.thumbnail}

**On your T1 Gateway**

In the `Route Advertisement` section of your T1 gateway, authorize `All Connected Segments & Service Ports`.

> [!tabs]
> **DE**
>> ![RouteAdvertisementDE](images/t1_route_advertisement_de.png){.thumbnail}
> **UK**
>> ![RouteAdversitementUK](images/t1_route_advertisement_uk.png){.thumbnail}

### Results

To check that your configurations and link are working properly, perform a ping test between the different virtual machines.

> [!tabs]
> **DE**
>> ![PingDEtoUK](images/ping_DE_to_UK.png){.thumbnail}
> **UK**
>> ![PingUKtoDE](images/ping_Uk_to_DE.png){.thumbnail}

### Topology View

You can find the topology view of your configuration in the different NSX in the `Networking` > `Networking Topology` section.

> [!tabs]
> **DE**
>> ![TopologyDE](images/topology_de.png){.thumbnail}
> **UK**
>> ![TopologyUK](images/topology_uk.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.