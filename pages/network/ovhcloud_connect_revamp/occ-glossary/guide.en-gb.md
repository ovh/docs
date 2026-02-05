---
title: 'OVHcloud Connect - Glossary'
excerpt: 'Discover the vocabulary related to the technologies used by OVHcloud Connect'
updated: 2026-01-12
---

## Objective

OVHcloud Connect is a private and dedicated connection between your on-premises network and your OVHcloud vRack. It is designed to extend your network and securely connect you to your cloud resources, bypassing the public internet.

![OVHcloud Connect](images/VrackConnectDedicated2025.png){.thumbnail}

This guide is intended as a reference resource to help you understand the essential technical terms for a good understanding of the OVHcloud Connect guides.

## Glossary

### A

**ASN (Autonomous System Number) :** Unique identification number for your network required for BGP exchanges.

**AZ (Availability Zone) :** Availability zone within a region, containing the one or more datacenters hosting your services. AZs are both sufficiently geographically distant from each other to be isolated in the event of a disaster, and sufficiently close to ensure low latency.

### B

**Bandwidth :** Subscribed throughput capacity for your link (from 50 Mbps to 10 Gbps). Unlike the internet, this throughput is dedicated and guarantees consistent performance.

**BGP (Border Gateway Protocol) :** Dynamic routing protocol used in Layer 3 (L3) configurations. It allows your router and OVHcloud's router to inform each other of the networks they serve.

**BGP-ECMP (Equal-Cost Multi-Path) :** Routing technique that distributes traffic across multiple active physical links simultaneously, thus optimizing load and redundancy.

### C

**Cross-connect:** Physical link (single-mode fiber) managed by the installation teams in the PoP. The interconnection is established in the MMR (Meet-Me-Room) between the position provided by OVHcloud and the position held by the customer. In the case of an OVHcloud Connect Direct offer, the customer must order and manage the interconnection. 

### D

**Direct :** Connection type where you (or your ISP) run a physical fiber directly to an OVHcloud rack.

### I

**Isolation :** Physical or logical separation of your data, protecting it from external threats (DDoS, interceptions) related to the public web.

### L

**LACP (Link Aggregation Control Protocol) :** Protocol that allows multiple physical interfaces to be grouped into a single logical link, useful for redundancy and increasing throughput.

**L2 Link (Layer 2) :** "Bridge" mode (Ethernet), similar to a cable connection. You manage the IP addressing and routing yourself.

**L3 Link (Layer 3) :** "Routed" mode, where OVHcloud participates in routing your packets via the IP and BGP protocols.

**LOA (Letter of Authorization) :** Official document authorizing the physical connection of your fiber in a data center.

### P

**PoP (Point of Presence) :** Physical location (third-party data center) where the OVHcloud network is available for connection. It is also the entry point of your data into OVHcloud's private network. The accessible PoPs are listed on [this link on our website](/links/network/ovhcloud-connect).

**Provider (Partner) :** Connection via a third-party operator who already has a physical link to OVHcloud's infrastructure.

### R

**Region :** Physical location in the world, composed of one or more AZs where OVHcloud services are hosted. OVHcloud regions are deployed around the world, including in Europe, North America, and Asia-Pacific.

### S

**Service Key :** Unique activation key to provide to your partner operator to establish the connection.

**SLA (Service Level Agreement) :** Contractual commitment on the availability rate (e.g., 99.9%).

### V

**VLAN (Virtual Local Area Network) :** Independent logical network created on a shared physical infrastructure, allowing a local network to be segmented into several isolated groups to improve security and performance.

**vRack :** Isolated virtual private network that allows you to interconnect your OVHcloud services, regardless of their location. It is this that ensures the final distribution of the connection to your services. For more information, you can consult the [product page on our website](/links/network/vrack).

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click on [this link](/links/professional-services) to obtain a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).