# Prerequisites & Limitations

Before ordering OVHcloud Connect, review the requirements below to ensure your environment is ready. Also be aware of the current limitations to plan your implementation effectively.

## General

### Account requirements

- A valid **OVHcloud account** with billing set up.
- Sufficient permissions to manage network services (Network / vRack).
- A **vRack** service provisioned (or ready to be created) to associate with OVHcloud Connect.

### Technical requirements

### Scaling limitations

- An OVHcloud Connect service can be associated to one vRack only.
- Maximum number of OVHcloud Connect services per PoP and per vRack: 16.
- Maximum MTU (Jumbo frame): up to 9000 bytes

### Knowledge requirements

You (or your network team) should be familiar with:

- Basic IP networking (subnets, routing)
- BGP concepts (ASN, peering, route advertisement)
- VLAN configuration
- Your network equipment's CLI or management interface


> **Tip:** If you are not comfortable with BGP or network configuration, consider working with a managed service provider or engaging OVHcloud Professional Services.

## OVHcloud Connect Direct

### Administrative requirements

- Access to a **co-location facility** where OVHcloud has a PoP (see [PoP Locations & Regions](../1.4_pop_locations_regions/guide.en-gb.md)).
- Ability to order a **cross-connect** inside the data centre (or arrange one through the facility operator).

### Interfaces

| Bandwidth | Interface Type |
|---|---|
| 1 Gb | 1000Base-LX/LH | 
| 10 Gb | 10GBase-LR | 
| 100 Gb | 100GBase-LR4 |

- Auto-negotiation shall be disabled (not supported)

### Features



### Layer 2 mode

- The number of client-side MAC addresses is limited to 512 per port
- Maximum bandwidth: 10Gb per port
- Only one OVHcloud Connect Direct Layer can be attached per vRack. 
  - This mode does not allow to deploy redundant PoP architectures.
  - You may deploy redundant links in the same PoP by enabling LACP.

- The following features are not supported:
  - 802.1p CoS-based
  - DCBX and related protocols (802.1Qbb, 802.1Qaz, 802.1Qau)
  - TRILL, SPF and FabricPath
  - FCoE
  - Spannning-tree
  - IGMP and Multicast
  - EtherChannel, PaGP for aggregation

### Layer 3 mode

If you chose an OVHcloud Connect Direct Layer 3, please read the [Layer 3 section](#id-l3) below.

## OVHcloud Connect Provider

### Administrative requirements

- A contract with a **supported provider** (see [Providers](../1.3_providers/guide.en-gb.md)).
- The provider must have a presence at your chosen OVHcloud PoP.

### Layer 3 mode

OVHcloud Connect Provider is always a Layer 3 network service: please read the [Layer 3 section](#id-l3) below.

The following features are not supported:
- IPv6
- Any QoS mechanism
- 802.1q tag
- Multi-VRF
- eBGP Multi-Hop
- iBGP
- Static routing in EntryPoint/PoP

## <a id="id-l3"></a>Layer 3 mode

### Scaling limitations
- Maximum one BGP session between your equipment and the OVHcloud Point of Presence router (no eBGP Multihop). More details in the [Define PoP BGP session guide](../3.5_define_pop_bgp/guide.en-gb.md).
- Each Availability Zone supports up to 4 BGP peers. More details in the [Define AZ network guide](../3.6_define_az_subnets/guide.en-gb.md).
- Up to 100 prefixes can be announced per BGP session



## What's next?

- Jump to the [Quick Start: Direct Connection](2.1_quick_start_direct.md) or [Quick Start: Provider Connection](2.2_quick_start_provider.md)
