---
title: Limits
slug: occ-limits
excerpt: 'Limits - OVHcloud Connect'
section: Technical Ressources
---

**Last updated 16th April 2020**

## Link Capabilities

* 1000Base-LX/LH for 1Gb
* 10GBase-LR for 10Gb
* Jumbo Frame: up to 9000 bytes
* Autonegotiation not supported

## Unsupported Features

### Layer-2 Mode

* 802.1p CoS-based
* DCBX and related protocols (802.1Qbb, 
802.1Qaz, 802.1Qau)
* TRILL, SPF and FabricPath
* FCoE
* Spannning-tree
* IGMP and Multicast
* EtherChannel, PaGP for aggregation

### Layer-3 Mode

* Any QoS mechanism
* 802.1q tag
* Multi-VRF
* eBGP Multi-Hop
* iBGP
* Static routing in EntryPoint/POP

## Features on roadmap

* IPv6

## Known issues

Following issues apply on OVHcloud Connect.

| Issue | Detail | Cause | Workaround | Affected sites |
|:-----:|:------:|:-----:|:----------:|:--------------:|
| BGP Session rejected | Error message "Bad AS" and NeighborID is configured in 169.254.0.0/16 range | Bug identified with device vendor | Change NeighborID | DC: RBX, SBG, GRA, LIM; POP: PAR-TH2, PAR-GSW, PAR-PA3, FRA-FR5 |
| DC routes not propagated to POP | When using AS65501, routes announced using BGP in vRack are not propagated to POP | OVHcloud internal configuration | Do not use AS65501 | ALL |
| ECMP not working | When ECMP is configured on a single POP with 2 or more links, traffic is not load-balanced for a given destination | Limitation | Divide destination with more specific prefixes | ALL POP |
| Light received but port is down | Device fail to change interface status to UP despite optical levels on RX are correct | Autonegotiation is configured | Unconfigure autonegotiation | ALL POP |

