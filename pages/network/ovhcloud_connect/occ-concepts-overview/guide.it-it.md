---
title: Concepts overview
excerpt: 'Concepts overview - OVHcloud Connect'
updated: 2025-10-29
---

## What is OVHcloud Connect?

OVHcloud Connect is a private, dedicated connection between your on-premises network and your OVHcloud vRack. It is designed to extend your network and securely connect to your cloud resources, bypassing the public internet.

![OVHcloud Connect](images/VrackConnectDedicated2025.png){.thumbnail}

## Benefits of OVHcloud Connect

### Dedicated service

Dedicated Mode is a direct connection with OVHcloud devices. You can manage different configurations, from a single connection to a multiple one using LACP (Layer 2) or BGP-ECMP (Layer 3) with port speed at 1Gb or 10Gb. Interface and bandwidth are not shared with other customers.

### Private connection

Your traffic is isolated from the Internet. You manage your own VLANs (Layer 2) and/or your own IP addresses (Layer 3). BGP instances are private, and you can configure the ASN you want.

OVHcloud Connect is connected to your vRack with all compatible services.

### Network extension

OVHcloud Connect can be connected either to your WAN or your data centre network, allowing seamless extension to the cloud. This eases hybrid cloud strategies and migrations by keeping your existing VLAN topology or IP addresses.

### High availability

Using BGP, you can interconnect your network through multiple Points-of-Presence (PoPs) and reach several OVHcloud data centres. From your vRack, you can configure BGP to enable maximum resiliency with distributed services.

## Components of OVHcloud Connect

### PoP - EntryPoint

Points of Presence are facilities like Equinix, InterXion, Telehouse or Global Switch. The OVHcloud Connect service entry PoP is called *EntryPoint*.

### DC - EndPoint

The OVHcloud data centre is the service *EndPoint* of OVHcloud Connect.

### Cross-connect

A cross-connection is a physical link (monomode fiber) managed by the local facility team in the PoP. The cross-connection is established in the MMR (Meet-Me Room) between the position given by OVHcloud and the position owned by the customer. The customer must order and manage the cross-connect for OVHcloud Connect Direct. 

### vRack

The OVHcloud Private Network, available on compute resources between all OVHcloud data centres. It allows you to connect compatible services into a single private network.

### BGP

BGP (Border Gateway Protocol) is the routing protocol used in Layer 3 mode to manage routes between your network and the OVHcloud vRack.

## Principles of OVHcloud Connect

OVHcloud Connect is based on a virtual link between an *EntryPoint* and an *EndPoint*. The *EntryPoint* is where you want to make the interconnection with OVHcloud. The *EndPoint* is the OVHcloud data centre with your services. You can choose any data centre in the same region as the PoP. 

### Layer 2 Mode (L2)

The virtual link is a L2 tunnel for OVHcloud Connect L2. Only one PoP/*EntryPoint* with one DC/*EndPoint* can be configured.

### Layer 3 Mode (L3)

The virtual link is a full mesh IP network between any PoP/*EntryPoint* and any DC/*EndPoint* of the same region.

## Accessible PoPs per provider

The OVHcloud Points of Presence (PoPs) available through each of our cloud service provider partners are outlined in the list present at [this link on our website](/links/network/ovhcloud-connect).

## Accessible Regions per PoP

When you establish a connection to OVHcloud Connect, your traffic enters the OVHcloud network through a specific PoP. Each PoP is associated with a geographic zone, and the OVHcloud regions that can be reached from that PoP are limited to the zone in which it is located. Depending on the PoP you select, only a defined set of regions will be available for interconnection.

The following table lists regions that can be accessed from each PoP location:

| Zone | OVHcloud Connect PoPs | Accessible OVHcloud Regions |
| :--- | :--- | :--- |
| **Europe** | &bull;Paris: Equinix - PA3, GlobalSwitch, Telehouse - TH2<br>&bull;Frankfurt: Equinix - FR5<br>&bull;London: Equinix - LD5, Telehouse - West<br>&bull;Madrid: Digital Realty - MAD2<br>&bull;Warsaw: Equinix - WA2<br>&bull;Lille: ETIX - ETX2 | &bull;Strasbourg (`eu-west-sbg`),<br>&bull;Gravelines (`eu-west-gra`),<br>&bull;Roubaix (`eu-west-rbx`),<br>&bull;Paris (`eu-west-par`),<br>&bull;Limburg (`eu-west-lim`),<br>&bull;Warsaw (`eu-central-waw`),<br>&bull;Erith (`eu-west-eri`) |
| **North America** | &bull;Montreal: Cologix - MTL3<br>&bull;Toronto: Equinix - TR1 | &bull;Beauharnois (`ca-east-bhs`),<br>&bull;Toronto (`ca-east-tor`) |
| **Asia-Pacific** | &bull;Singapore: Equinix - SG1<br>&bull;Mumbai: Equinix - MB2 | &bull;Singapore (`ap-southeast-sgp`),<br>&bull;Mumbai (`ap-south-mum`) |

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
