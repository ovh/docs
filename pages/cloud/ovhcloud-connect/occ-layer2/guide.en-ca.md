---
title: Layer 2 mode
slug: layer2
excerpt: 'Details about using Layer 2 (L2) with OVHcloud Connect'
section: Concepts
order: 2
updated: 2020-09-14
---

**Last updated 14th September 2020**

## Objective

**Learn more about Layer 2 implementation and connection for the OVHcloud Connect solution.**

## Instructions

### Layer 2 implementation

![L2 Implementation](images/occ-l2-implementation.png){.thumbnail}

The L2 tunnel is forwarded directly to/from the vRack, so all L2 traffic is forwarded to/from the customer inter-connection.

L2 traffic refers to Ethernet frames, with an 802.1q header, if applicable:

- Ethernet broadcast is forwarded.
- Unknown Ethernet unicast is forwarded.
- Multicast is forwarded (considered broadcast, limited to 20pps).
- Specific point-to-point Ethernet frames (like LLDP or LACP) are not forwarded

Only one OVHcloud Connect L2 is supported per vRack: each PoP/EntryPoint can only be associated with one DC/EndPoint.

![Supported and unsupported L2 Design](images/occ-l2-supported-unsupported.png){.thumbnail}

With L2 mode, redundancy cannot be exploited between two PoP/EntryPoint. The only solution is to use a LAG on a PoP/EntryPoint.

### Connection mode details

L2 operates at the Ethernet level. The customer's vRack is extended "as-is" from OVHcloud and forwarded to the customer link. Transparent to VLANs, this mode is the best way to inter-connect the customer's legacy network with an OVHcloud vRack.

![L2 Trafic](images/occ-l2-trafic.png){.thumbnail}

The L2 mode is limited to a point-to-point topology: a backup link through a second PoP is not supported.

![L2 Topologies](images/occ-l2-topologies.png){.thumbnail}

LACP is mandatory for aggregation when 2 links are configured with PoP.

Jumbo frames up to 9000 bytes are supported.

Connections between a PoP and a DC benefit from the OVHcloud backbone. An internal link failure is therefore supported and will not impact customer traffic.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
