---
title: Technical capabilities and limitations
slug: occ-limits
excerpt: 'Learn the technical capabilities and limitations of the OVHcloud Connect solution'
section: Technical resources
order: 1
---

**Last updated 14th September 2020**

## Objective

**This page provides an overview of the technical capabilities and limitations of the OVHcloud Connect solution.**

## Instructions

### Link capabilities

- 1000Base-LX/LH for 1Gb
- 10GBase-LR for 10Gb
- Jumbo frame up to 9000 bytes
- Autonegotiation not supported

### Unsupported features

#### Layer 2 mode

- 802.1p CoS-based
- DCBX and related protocols (802.1Qbb, 802.1Qaz, 802.1Qau)
- TRILL, SPF and FabricPath
- FCoE
- Spannning-tree
- IGMP and Multicast
- EtherChannel, PaGP for aggregation

#### Layer 3 mode

- Any QoS mechanism
- 802.1q tag
- Multi-VRF
- eBGP Multi-Hop
- iBGP
- Static routing in EntryPoint/PoP

### Features on roadmap

- IPv6

### Known issues

| Description | Detail | Cause | Workaround | Affected sites |
|:-----:|:------:|:-----:|:----------:|:--------------:|
| DC routes not propagated to PoP | When using AS65501, routes announced using BGP in vRack are not propagated to PoP | OVHcloud internal configuration | Do not use AS65501 | ALL |
| ECMP not working | When ECMP is configured on a single PoP with 2 or more links, traffic is not load-balanced for a given destination | Limitation | Divide destination with more specific prefixes | ALL PoPs |
| Light received but port is down | Device fails to change interface status to UP despite optical levels on RX are correct | Autonegotiation is configured | Unconfigure autonegotiation | ALL PoPs |

## Go further

Join our community of users on <https://community.ovh.com/en/>.
