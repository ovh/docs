# Prerequisites & Limitations

Before ordering OVHcloud Connect, review the requirements below to ensure your environment is ready. Also be aware of the current limitations to plan your implementation effectively.

## Prerequisites

### Account requirements

- A valid **OVHcloud account** with billing set up.
- Sufficient permissions to manage network services (Network / vRack).
- A **vRack** service provisioned (or ready to be created) to associate with OVHcloud Connect.

### Technical requirements

| Requirement | Details |
|---|---|
| **Network equipment** | A router or firewall that supports BGP and the required physical interface (single-mode fibre for Direct connections). |
| **BGP support** | Your device must support external BGP (eBGP). You need a public or private ASN. |
| **VLAN support** | Your device must support IEEE 802.1Q VLAN tagging. |
| **Physical interface** | For Direct connections: 1 Gbps (1000BASE-LX) or 10 Gbps (10GBASE-LR) single-mode fibre optic. |
| **IP addressing plan** | Plan the subnets you will advertise over BGP and the point-to-point IPs for the BGP peering. |

### For Direct connections

- Access to a **co-location facility** where OVHcloud has a PoP (see [PoP Locations & Regions](1.4_pop_locations_regions.md)).
- Ability to order a **cross-connect** inside the data centre (or arrange one through the facility operator).

### For Provider connections

- A contract with a **supported provider** (see [Providers](1.3_providers.md)).
- The provider must have a presence at your chosen OVHcloud PoP.
- Technical specifications from the provider (port speed, VLAN handling, Layer 2 or Layer 3 mode).

### Knowledge requirements

You (or your network team) should be familiar with:

- Basic IP networking (subnets, routing)
- BGP concepts (ASN, peering, route advertisement)
- VLAN configuration
- Your network equipment's CLI or management interface

> **Tip:** If you are not comfortable with BGP or network configuration, consider working with a managed service provider or engaging OVHcloud Professional Services.

## Limitations

### Geographic availability

- OVHcloud Connect is available only at **supported PoPs and regions**. Not all OVHcloud data centres have a PoP.
- Some features or bandwidth options may not be available in all locations.

### Bandwidth

- Available bandwidth tiers depend on the connection type and PoP. Common options include **1 Gbps** and **10 Gbps**.
- Bandwidth cannot be changed dynamically on Direct connections — a new order may be required.

### Technical limitations

| Limitation | Details |
|---|---|
| **Maximum prefixes** | There is a limit on the number of IP prefixes you can advertise via BGP. Exceeding this limit may cause the BGP session to drop. |
| **VLAN IDs** | Certain VLAN ID ranges may be reserved. Check the configuration guide. |
| **MTU** | Default Ethernet MTU is 1500 bytes. Jumbo frames (e.g. 9000 bytes) may not be supported on all paths — verify with OVHcloud and your provider. |
| **IPv6** | IPv6 support may be available but should be confirmed during ordering. Plan for dual-stack if needed. |
| **No MED support (some modes)** | In certain configurations, the MED BGP attribute may not be honoured. Use Local Preference or AS-path prepending instead. |

### Operational limitations

- **Lead times** — Provisioning a new connection can take from a few days to several weeks, depending on the PoP and whether a physical cross-connect is needed.
- **Minimum contract term** — OVHcloud Connect may require a minimum commitment period. Check the commercial terms during ordering.
- **Change management** — Significant changes (e.g. bandwidth upgrade, PoP change) may require a new order rather than an in-place modification.

### Scaling limitations

- Maximum number of OVHcloud Connect services per account (check with OVHcloud support if you need many connections).
- Maximum number of vRack associations per OVHcloud Connect service.

## Planning checklist

Before ordering, confirm the following:

- [ ] OVHcloud account created and billing configured
- [ ] Target PoP identified and provider chosen (if applicable)
- [ ] Network equipment compatible (BGP, VLAN, fibre interfaces)
- [ ] IP addressing plan ready (subnets to advertise, peering IPs)
- [ ] ASN available (public or private)
- [ ] Redundancy requirements defined (single vs. Multi-AZ)
- [ ] vRack service provisioned or planned
- [ ] Commercial terms reviewed (bandwidth, contract duration, pricing)

## What's next?

- Jump to the [Quick Start: Direct Connection](2.1_quick_start_direct.md) or [Quick Start: Provider Connection](2.2_quick_start_provider.md)
- Start [ordering your connection](3.1_order_direct.md)
