# Glossary

This page defines the key terms you will encounter throughout the OVHcloud Connect documentation. Terms are listed alphabetically.

## A

**AS / ASN (Autonomous System / Autonomous System Number)**
A unique number that identifies a network on the internet for the purpose of exchanging routing information via BGP. Your network has its own ASN, and OVHcloud has its own ASN. These numbers are used when configuring BGP sessions.

**Availability Zone (AZ)**
A physically separate data centre (or section of a data centre) within an OVHcloud region. Distributing your resources across multiple AZs increases resilience — if one zone experiences a problem, the others keep running.

## B

**BGP (Border Gateway Protocol)**
The standard routing protocol used to exchange network routes between different networks. In the context of OVHcloud Connect, BGP is used to tell each side (your network and OVHcloud) which IP address ranges are reachable through the connection.

**BGP Session**
An active connection between two BGP routers (called "peers") that allows them to share routing information. You will configure at least one BGP session between your router and OVHcloud's router at the PoP.

## C

**Cross-Connect**
A physical cable that connects your equipment (or your provider's equipment) to OVHcloud's equipment inside a Point of Presence. Cross-connects are typically fibre-optic cables.

## D

**Direct Connection (OVHcloud Connect Direct)**
A connection type where you manage the physical link yourself, typically through a cross-connect in a co-location facility where OVHcloud has a PoP.

## L

**Layer 2 (L2) Connectivity**
A connection mode where OVHcloud Connect acts as a transparent bridge. You manage your own routing and IP addressing on top of the link. This gives maximum flexibility.

**Layer 3 (L3) Connectivity**
A connection mode where routing is handled at the network layer. BGP sessions are established to exchange routes between your network and OVHcloud.

**LOA (Letter of Authorization)**
A document provided by OVHcloud that authorises a data centre operator to set up or remove a cross-connect on your behalf. You hand the LOA to the facility operator to complete the physical patching.

## M

**Multi-AZ**
A deployment strategy that spreads your resources and connections across multiple Availability Zones. This protects against the failure of a single data centre or network path.

## P

**PoP (Point of Presence)**
A physical location (usually inside a major data centre campus) where OVHcloud has networking equipment that you can connect to. The PoP is where the hand-off between your network and OVHcloud happens.

**Provider (OVHcloud Connect Provider)**
A third-party network operator (such as Megaport, Equinix Fabric, or Console Connect) that facilitates the physical connectivity between your network and OVHcloud's network. Using a provider means you do not need to be physically present in the same data centre as OVHcloud.

## R

**Region**
A geographical area where OVHcloud operates one or more data centres and Availability Zones. Find out more on [OVHcloud regions](https://www.ovhcloud.com/en/about-us/global-infrastructure/expansion-regions-az/) .

## S

**SLA (Service Level Agreement)**
A contractual commitment from OVHcloud that defines the guaranteed level of service — typically expressed as a percentage of uptime (e.g. 99.9%) along with support response times.

## V

**VLAN (Virtual Local Area Network)**
A logical subdivision of a network that allows traffic separation on a single physical link. VLANs are identified by a numeric tag (VLAN ID) and are used in OVHcloud Connect to isolate different traffic flows.

**vRack (Virtual Rack)**
OVHcloud's private networking service that allows you to connect multiple OVHcloud products (Bare Metal servers, Public Cloud instances, Hosted Private Cloud, etc.) together in an isolated private network. OVHcloud Connect is associated with a vRack to extend your private network into OVHcloud.