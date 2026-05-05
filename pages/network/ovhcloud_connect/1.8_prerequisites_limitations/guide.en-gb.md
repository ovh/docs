---
title: 'OVHcloud Connect - Prerequisites & Limitations'
excerpt: 'Review the requirements and current limitations before ordering OVHcloud Connect'
updated: 2026-02-18
---

## Objective

Before ordering OVHcloud Connect, review the requirements below to ensure your environment is ready. Also be aware of the current limitations to plan your implementation effectively.

## General

### Requirements

- A valid **OVHcloud account** with billing set up.
- Sufficient permissions to manage network services (Network / vRack).
- A **vRack** service provisioned (or ready to be created) to associate with OVHcloud Connect.
- You (or your network team) should be familiar with basic IP networking (subnets, routing), BGP concepts, VLAN configuration

> **Tip:** If you are not comfortable with BGP or network configuration, consider working with a managed service provider or engaging OVHcloud Professional Services.

### Limits

- An OVHcloud Connect service can be associated to one vRack only.
- Maximum number of OVHcloud Connect services per PoP and per vRack: 16.
- Maximum MTU (Jumbo frame): up to 9000 bytes

## OVHcloud Connect Direct

### Requirements

#### Administrative requirements

- Access to a **co-location facility** where OVHcloud has a PoP (see [PoP Locations & Regions](../1.4_pop_locations_regions/guide.en-gb.md)).
- Ability to order a **cross-connect** inside the data centre (or arrange one through the facility operator).

#### Technical requirements

- Your equipment interface should be supported (refer to below table).

| Bandwidth | Interface Type |
|---|---|
| 1 Gb | 1000Base-LX/LH | 
| 10 Gb | 10GBase-LR | 
| 100 Gb | 100GBase-LR4 |

- Auto-negotiation shall be disabled (not supported).

### Limits

#### Layer 2 mode

- The number of client-side MAC addresses is limited to 512 per port.
- The maximum bandwidth is 10Gb per port.
- Only one OVHcloud Connect Direct Layer 2 can be attached per vRack. 
  - This mode does not allow to deploy redundant PoP architectures.
  - You may deploy redundant links in the same PoP by enabling LACP.

- The following features are not supported:
  - 802.1p CoS-based
  - DCBX and related protocols (802.1Qbb, 802.1Qaz, 802.1Qau)
  - TRILL, SPF and FabricPath
  - FCoE
  - Spanning Tree
  - IGMP and Multicast
  - EtherChannel, PaGP for aggregation

#### Layer 3 mode

If you chose an OVHcloud Connect Direct Layer 3, please read the [Layer 3 section](#id-l3) below.

## OVHcloud Connect Provider

### Requirements

- A contract with a **supported provider** (see [Providers](../1.3_providers/guide.en-gb.md)).
- The provider must have a presence at your chosen OVHcloud PoP.

### Limits

#### Layer 3 mode

OVHcloud Connect Provider is always a Layer 3 network service: please read the [Layer 3 section](#id-l3) below.

## <a id="id-l3"></a>Layer 3 mode

### Limits

- Maximum one BGP session between your equipment and the OVHcloud Point of Presence router (no eBGP Multihop). More details in the [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md).
- Each Availability Zone supports up to 4 BGP peers. More details in the [Set up your vRack network](../3.6_vrack_network_setup/guide.en-gb.md).
- Up to 100 prefixes can be announced per BGP session.

- The following features are not supported:
  - IPv6
  - Any QoS mechanism
  - 802.1q tag
  - Multi-VRF
  - eBGP Multi-Hop
  - iBGP
  - Static routing in PoP configuration

## What's next?

- Jump to the [Quick Start: Direct Connection](../2.1_quick_start_direct/guide.en-gb.md) or [Quick Start: Provider Connection](../2.2_quick_start_provider/guide.en-gb.md)

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).