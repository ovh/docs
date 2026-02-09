# Prerequisites & Limitations

Before ordering OVHcloud Connect, review the requirements below to ensure your environment is ready. Also be aware of the current limitations to plan your implementation effectively.

## Prerequisites

### Account requirements

- A valid **OVHcloud account** with billing set up.
- Sufficient permissions to manage network services (Network / vRack).
- A **vRack** service provisioned (or ready to be created) to associate with OVHcloud Connect.

### Technical requirements

### For Direct connections

- Access to a **co-location facility** where OVHcloud has a PoP (see [PoP Locations & Regions](../1.4_pop_locations_regions/guide.en-gb.md)).
- Ability to order a **cross-connect** inside the data centre (or arrange one through the facility operator).

#### Supported interfaces & features

| Bandwidth | Interface Type |
|---|---|
| 1 Gb | 1000Base-LX/LH | 
| 10 Gb | 10GBase-LR | 
| 100 Gb | 100GBase-LR4 | 

- Jumbo frame up to 9000 bytes
- Auto-negotiation disabled (not supported)


### For Provider connections

- A contract with a **supported provider** (see [Providers](../1.3_providers/guide.en-gb.md)).
- The provider must have a presence at your chosen OVHcloud PoP.

### Knowledge requirements

You (or your network team) should be familiar with:

- Basic IP networking (subnets, routing)
- BGP concepts (ASN, peering, route advertisement)
- VLAN configuration
- Your network equipment's CLI or management interface

> **Tip:** If you are not comfortable with BGP or network configuration, consider working with a managed service provider or engaging OVHcloud Professional Services.

### Scaling limitations

- Maximum number of OVHcloud Connect services per account (check with OVHcloud support if you need many connections).
- Maximum number of vRack associations per OVHcloud Connect service.

## What's next?

- Jump to the [Quick Start: Direct Connection](2.1_quick_start_direct.md) or [Quick Start: Provider Connection](2.2_quick_start_provider.md)
- Start [ordering your connection](3.1_order_direct.md)
