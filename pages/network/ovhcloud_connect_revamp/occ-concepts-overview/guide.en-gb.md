---
title: Introduction to OVHcloud Connect
excerpt: Overview of the concepts required to understand the OVHcloud Connect offer
updated: 2026-01-29
---

## What is OVHcloud Connect ?

OVHcloud Connect is a network connectivity service that allows you to connect your infrastructure (datacenter, on-premise site, operator network or enterprise WAN) directly to an OVHcloud private network (vRack), without going through the internet.

![OVHcloud Connect](images/VrackConnectDedicated2025.png){.thumbnail}

The solution is designed for hybrid and multi-cloud architectures requiring :
- guaranteed network performance,
- low latency,
- a high level of security,
- high availability.

OVHcloud Connect provides a physical (OVHcloud Connect Direct) or logical (OVHcloud Connect Provider) dedicated link between the customer network and OVHcloud, with guaranteed bandwidth ranging from 50 Mbit/s to 100 Gbit/s.

> [!primary]
> For detailed technical definitions, refer to the [OVHcloud Connect Glossary](/pages/network/ovhcloud_connect_revamp/occ-glossary).
>

### Benefits of the offer

#### Performance and high availability
OVHcloud Connect offers a guaranteed bandwidth ranging from 50 Mbps up to 100 Gbps, with improved latency and stability compared to traditional internet connections.

#### Security
Your network traffic flows outside the public internet, thus reducing exposure to external threats.

#### Flexibility and automation
The service allows for quick deployment and configuration via [the OVHcloud Control Panel](/links/manager), [the OVHcloud API](/links/api), or via [our Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest/docs).

#### Global reach
OVHcloud Connect allows you to interconnect your infrastructures via a vast network of Points of Presence (PoPs) around the world, thanks to OVHcloud and its partners. By using dynamic routing protocols, you ensure maximum resilience for your distributed services.

#### Hybrid & Multi-Cloud
Our offering seamlessly and privately interconnects enterprise WAN networks with OVHcloud resources and those of our partners.

### Service architecture

The operation of OVHcloud Connect is based on the creation of a link between several key components :

- **Point of Presence (PoP) :** The physical point of presence where your network connects to OVHcloud's network, directly or [via a Provider](/links/network/ovhcloud-connect).
- **Region :** A local entity composed of one or more availability zones (AZ), hosting OVHcloud infrastructures.
- **Availability Zone (AZ) :** An availability zone within a region, which contains the one or more datacenters hosting your services. AZs are both sufficiently geographically distant from each other to be isolated in case of a disaster, and sufficiently close to ensure low latency.
- **vRack :** A private virtual network that allows you to interconnect your OVHcloud services, regardless of their location. It is this network that ensures the final distribution of the connection to your services. For more information, you can consult the [product page on our website](/links/network/vrack).

In the case of the OVHcloud Connect Direct offer, an additional component comes into play: the **Cross-connect**, which is a physical fiber link established within the PoP to connect your equipment to ours.

### Operating principles

OVHcloud Connect connects a PoP to at least one OVHcloud AZ.

#### Layer 2 (L2)

The virtual link operates like an Ethernet tunnel (bridge mode) :
- Direct extension of your local network.
- Strict point-to-point link (**one PoP** and **one AZ** only).
- Redundancy possible via link aggregation (LACP) on the same PoP.
- Use case: simple hybrid topologies, "Lift & Shift" migrations without IP changes, applications requiring L2 adjacency or VLAN transparency.

#### Layer 3 (L3)

The virtual link relies on dynamic IP routing (BGP) :
- Routing by IP subnets.
- Full Mesh architecture allowing multiple PoPs and availability zones (AZ) to be interconnected within a region.
- Network resilience via BGP sessions (multi-peers) and ECMP, with the possibility of automatic failover between multiple PoPs.
- Use case: Enterprise WAN integration (Cloud as a Branch), critical multi-PoP architectures and large-scale complex deployments.

## Providers, PoP and Regions

To offer OVHcloud Connect, we collaborate with many cloud service providers. You will find the list of PoPs accessible via our partners on [the OVHcloud Connect product page](/links/network/ovhcloud-connect).

To choose the most appropriate PoP for your infrastructure, please refer to our [PoP and regions mapping table](/pages/network/ovhcloud_connect_revamp/occ-pop-table).

## Requirements and limitations

To check whether OVHcloud Connect meets your use case and to better understand the operational requirements and limitations of this product, please refer to [this guide](/pages/network/ovhcloud_connect_revamp/occ-limits).

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).