---
title: Introduction to OVHcloud Connect
excerpt: Overview of the concepts required to understand the OVHcloud Connect offer
updated: 2026-02-18
---

## What is OVHcloud Connect?

OVHcloud Connect is a **dedicated, private network connection** between your infrastructure and OVHcloud. Instead of routing traffic over the public internet, OVHcloud Connect establishes a direct link that offers better security, lower latency, and guaranteed bandwidth.

## Who is it for?

OVHcloud Connect is designed for organisations that need:

- **Reliable connectivity** for business-critical applications (ERP, databases, backups).
- **Enhanced security** by keeping traffic off the public internet.
- **Predictable performance** with dedicated bandwidth (no shared bottlenecks).
- **Multi-cloud or hybrid-cloud** architectures connecting on-premises data centres, different cloud infrastructures, or WAN networks to OVHcloud.

## How does it work?

OVHcloud Connect links your network to OVHcloud through a **Point of Presence (PoP)** — a physical location where OVHcloud has networking equipment. You can establish this link in two ways:

| Connection type | How it works | Best for |
|---|---|---|
| **OVHcloud Connect Direct** | You manage a physical cable (cross-connect) between your equipment and OVHcloud's equipment in a common Point of Presence. | Organisations already present in an OVHcloud PoP. |
| **OVHcloud Connect Provider** | A third-party network provider among our [partners](https://www.ovhcloud.com/en/network/ovhcloud-connect/#partenaires) handles the physical connection on your behalf. | Organisations that are not co-located with OVHcloud or prefer a managed connectivity service. |

### Layer 2 (L2) service - OVHcloud Connect Direct only

OVHcloud Connect L2 links your infrastructure to OVHcloud services at the data link layer (Layer 2). It allows you to extend your private network to OVHcloud datacenters, creating a seamless bridge between your local network and cloud resources, no routing involved. As opposed to Layer 3 service, it is transparent to VLANs (802.1q).

**Key points:**
- It is a strict point-to-point link (**one PoP** and **one AZ** only).
- Redundancy is possible via link aggregation (LACP) on the same PoP.

**Potential use cases:**
- Simple hybrid topologies
- "Lift & Shift" migrations without IP changes
- Applications requiring L2 adjacency or VLAN transparency

### Layer 3 (L3) service

OVHcloud Connect L3 links your infrastructure to OVHcloud services at the network layer (Layer 3). It allows routing and requires routes exchange.

Once the physical link is established, routing is configured using **BGP (Border Gateway Protocol)**, and the connection is associated with your **vRack** — OVHcloud's virtual private network — so your OVHcloud resources can communicate privately with your external infrastructure.

**Key points:**
- It is supported by a Full Mesh architecture allowing multiple PoPs and availability zones (AZ) to be interconnected within a region.
- Network resilience can be created via BGP sessions (multi-peers) and ECMP, with the possibility of automatic failover between multiple PoPs.

**Potential use cases:**
- Enterprise WAN integration (Cloud as a Branch)
- Critical multi-PoP architectures
- Large-scale complex deployments.

## Architecture overview

![Global design](image.png)

## What's next?

- Review the [Glossary](../1.2_glossary) to understand key terms.
- See the list of [Providers](../1.3_providers) available for managed connectivity.
- Read the [prerequisites and limitations](../1.8_prerequisites_limitations) to verify whether OVHcloud Connect meets your use case.
- Jump to the [Quick Start guides: Direct](../2.1_quick_start_direct) to get connected.
- Jump to the [Quick Start guides: Provider](../2.2_quick_start_provider) to get connected.

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).