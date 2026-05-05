---
title: 'OVHcloud Connect - Glossary'
excerpt: 'Discover the vocabulary related to the technologies used by OVHcloud Connect'
updated: 2026-01-12
---

## OVHcloud Connect Glossary

This page defines the key terms you will encounter throughout the OVHcloud Connect documentation. Terms are listed alphabetically.

### A

**ASN (Autonomous System Number)**
A unique number that identifies a network on the internet for the purpose of exchanging routing information via BGP. Your network has its own ASN, and OVHcloud has its own ASN. These numbers are used when configuring BGP sessions.

**AZ (Availability Zone)**
A physically separate datacenter within a region, containing the one or more datacenters hosting your services. AZs are both sufficiently geographically distant from each other to be isolated in the event of a disaster, and sufficiently close to ensure low latency.

### B

**Bandwidth**
The subscribed throughput capacity for your link (from 50 Mbps to 10 Gbps). Unlike a connection established over the Internet, this throughput is guaranteed and ensures consistent performance.

**BGP (Border Gateway Protocol)**
The standard routing protocol used to exchange network routes between different networks. In the context of OVHcloud Connect, BGP is used in L3 mode to tell each side (your network and OVHcloud) which IP address ranges are reachable through the connection.

**BGP-ECMP (Equal-Cost Multi-Path)**
Routing technique that distributes traffic across multiple active physical links simultaneously, thus optimising load and redundancy.

**BGP Session**
An active connection between two BGP routers (called "peers") that allows them to share routing information. You will configure at least one BGP session between your router and OVHcloud's router at the PoP.

### C

**Cross-connect**
A physical cable that connects your equipment (or your provider's equipment) to OVHcloud's equipment inside a Point of Presence. Cross-connects are typically fibre-optic cables.

### D

**Direct Connection (OVHcloud Connect Direct)**
A connection type where you manage the physical link yourself, typically through a cross-connect in a co-location facility where OVHcloud has a PoP.

### I

**Isolation**
Physical or logical separation of your data, protecting it from external threats (DDoS, interceptions) related to the public web.

### L

**LACP (Link Aggregation Control Protocol)**
Protocol that allows multiple physical interfaces to be grouped into a single logical link, useful for redundancy and increasing throughput.

**Layer 2 (L2) Connectivity**
A connection mode where OVHcloud Connect acts as a transparent bridge. You manage your own routing and IP addressing on top of the link. This gives maximum flexibility.

**Layer 3 (L3) Connectivity**
A connection mode where routing is handled at the network layer. BGP sessions are established to exchange routes between your network and OVHcloud.

**LOA (Letter of Authorization)**
An official document provided by OVHcloud that authorises a data centre operator to set up or remove a cross-connect on your behalf. You hand the LOA to the facility operator to complete the physical patching.

### M

**Multi-AZ**
A deployment strategy that spreads your resources and connections across multiple Availability Zones. This protects against the failure of a single data centre or network path.

### P

**PoP (Point of Presence)**
A physical location (third-party data center) where the OVHcloud network is available for connection. It is also the entry point of your data into OVHcloud's private network. The accessible PoPs are listed on [this link on our website](/links/network/ovhcloud-connect).

**Provider (OVHcloud Connect Provider)**
A third-party network operator that facilitates the physical connectivity between your network and OVHcloud's network. Using a provider means you do not need to be physically present in the same data centre as OVHcloud.

### R

**Region**
A geographical area where OVHcloud operates one or more data centres and Availability Zones. OVHcloud regions are deployed around the world, including in Europe, North America, and Asia-Pacific. Find out more on OVHcloud regions on [this link to our website](https://www.ovhcloud.com/en/about-us/global-infrastructure/expansion-regions-az/).

### S

**Service Key**
A unique activation key you need to provide to your partner operator to establish the connection.

**SLA (Service Level Agreement)**
A contractual commitment from OVHcloud that defines the guaranteed level of service — typically expressed as a percentage of uptime (e.g. 99.9%) along with support response times.


### V

**VLAN (Virtual Local Area Network)**
Independent logical network created on a shared physical infrastructure, allowing a local network to be segmented into several isolated groups to improve security and performance.

**vRack**
Isolated virtual private network provided by OVHcloud that allows you to interconnect your other OVHcloud services (Bare Metal servers, Public Cloud instances, Hosted Private Cloud, etc) in an isolated private network, regardless of their location. OVHcloud Connect is associated with a vRack to extend your private network into OVHcloud. For more information, please consult the [product page on our website](/links/network/vrack).

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).