---
title: Setting up a simple OVHcloud Connect architecture
excerpt: Connect a single on-premises site, branch WAN, or public cloud (AWS, Azure, GCP) environment to OVHcloud through one OVHcloud Connect link.
updated: 2026-02-18
---

## Objective

This tutorial guides you through connecting a single on-premises site to OVHcloud using **one OVHcloud Connect link**. This is the simplest architecture, suitable when you need private connectivity but can accept a single path (no built-in redundancy).

## Instructions

Below, you will find prerequisites and instructions for five separate use-cases, which you may choose depending on desired architecture.

> [!tabs]
> On-Premises
>>### Prerequisites
>>
>>- An OVHcloud account with a vRack
>>- A router in a data centre with OVHcloud PoP presence (for Direct) or a provider account (for Provider)
>>- BGP-capable network equipment
>>- An IP addressing plan with no overlaps between your network and OVHcloud subnets
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 200" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="750" height="200" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- On-Premises -->
>>  <rect x="20" y="50" width="180" height="100" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
>>  <text x="110" y="80" text-anchor="middle" font-weight="bold" fill="#1565c0">On-Premises</text>
>>  <text x="110" y="100" text-anchor="middle" fill="#555" font-size="10">Your data centre</text>
>>  <text x="110" y="118" text-anchor="middle" fill="#555" font-size="10">Router + BGP</text>
>>  <text x="110" y="136" text-anchor="middle" fill="#555" font-size="10">10.0.0.0/16</text>
>>
>>  <!-- PoP -->
>>  <rect x="270" y="60" width="140" height="80" rx="8" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="340" y="90" text-anchor="middle" font-weight="bold" fill="#e65100">PoP</text>
>>  <text x="340" y="110" text-anchor="middle" fill="#555" font-size="10">Cross-connect</text>
>>  <text x="340" y="126" text-anchor="middle" fill="#555" font-size="10">BGP peering</text>
>>
>>  <!-- OVHcloud -->
>>  <rect x="480" y="40" width="240" height="120" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="600" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="600" y="92" text-anchor="middle" fill="#555" font-size="10">vRack</text>
>>  <text x="600" y="110" text-anchor="middle" fill="#555" font-size="10">Servers / VMs</text>
>>  <text x="600" y="128" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>
>>  <!-- Arrows -->
>>  <line x1="200" y1="100" x2="270" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t1)"/>
>>  <line x1="410" y1="100" x2="480" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t1)"/>
>>  <text x="235" y="90" text-anchor="middle" fill="#555" font-size="10">1 Gbps or</text>
>>  <text x="235" y="120" text-anchor="middle" fill="#555" font-size="10">10 Gbps</text>
>>
>>  <defs>
>>    <marker id="t1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### When to use this architecture
>>
>>| ✅ Good for | ❌ Not recommended for |
>>|---|---|
>>| Development and test environments | Business-critical production workloads |
>>| Non-critical production workloads | Regulated / compliance-heavy environments |
>>| Proof of concept or pilot projects | Applications requiring 99.99% uptime |
>>| Small offices with a single site | Multi-site organisations needing failover |
>>
>>#### 1. Order OVHcloud Connect
>>
>>Choose **Direct** or **Provider** depending on your situation:
>>
>>- **Direct** — You have equipment in the same data centre as an OVHcloud PoP. See [Order Direct](../3.1_order_direct).
>>- **Provider** — You prefer a managed connection. See [Order Provider](../3.2_order_provider).
>>
>>#### 2. Install the physical connection
>>
>>- **Direct:** Provide the LOA to the data centre operator to install a cross-connect. See [Cross Connect LOA](../3.11_cross_connect_loa).
>>- **Provider:** Share the service key with your provider and wait for activation.
>>
>>#### 3. Configure BGP
>>
>>Set up a single BGP session between your on-premises router and OVHcloud:
>>
>>- Advertise your on-premises prefixes (e.g. `10.0.0.0/16`) to OVHcloud.
>>- Accept OVHcloud prefixes (e.g. `172.16.0.0/16`) from OVHcloud.
>>
>>See [Configure OCC L3 with BGP](../3.7_occ_l3_bgp) for detailed instructions and configuration examples.
>>
>>#### 4. Associate with vRack
>>
>>Link your OVHcloud Connect service to your vRack. See [Associate with vRack](../3.5_associate_vrack).
>>
>>#### 5. Configure AZ subnets
>>
>>Define the private subnets in OVHcloud that your on-premises network should reach. See [Set up your vRack network](../3.6_vrack_network_setup).
>>
>>#### 6. Test connectivity
>>
>>| Test | Command |
>>|---|---|
>>| Ping from on-prem to OVHcloud VM | `ping 172.16.1.10` |
>>| Ping from OVHcloud VM to on-prem | `ping 10.0.0.1` |
>>| Traceroute | `traceroute 172.16.1.10` (should not go via internet) |
>>| BGP verification | `show ip bgp summary` |
>>
>>#### 7. Set up monitoring
>>
>>Configure monitoring alerts for link status, BGP session, and bandwidth. See [Monitor](../3.9_monitor).
>>
>>### Limitations of a simple connection
>>
>>- **Single point of failure** — If the link, PoP, or cross-connect fails, connectivity is lost.
>>- **No automatic failover** — You need to manually intervene or rely on internet-based backup.
>>- **Lower SLA** — A single connection typically supports up to 99.9% SLA (see [SLAs](../1.7_slas)).
>>
>>**Recommendation:** For production workloads, consider upgrading to a [resilient architecture](../4.2_resilient).
>>
> WAN
>>### Prerequisites
>>
>>- An OVHcloud account with a vRack
>>- A router in a data centre with OVHcloud PoP presence (for Direct) or a provider account (for Provider)
>>- BGP-capable network equipment
>>- An IP addressing plan with no overlaps between your network and OVHcloud subnets
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="800" height="200" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- Branch offices -->
>>  <rect x="20" y="30" width="140" height="140" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
>>  <text x="90" y="55" text-anchor="middle" font-weight="bold" fill="#1565c0">Branch Offices</text>
>>  <text x="90" y="80" text-anchor="middle" fill="#555" font-size="10">Office A</text>
>>  <text x="90" y="100" text-anchor="middle" fill="#555" font-size="10">Office B</text>
>>  <text x="90" y="120" text-anchor="middle" fill="#555" font-size="10">Office C</text>
>>  <text x="90" y="145" text-anchor="middle" fill="#555" font-size="10">10.x.x.x/16</text>
>>
>>  <!-- WAN -->
>>  <rect x="210" y="50" width="150" height="100" rx="8" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="285" y="80" text-anchor="middle" font-weight="bold" fill="#6a1b9a">WAN / SD-WAN</text>
>>  <text x="285" y="100" text-anchor="middle" fill="#555" font-size="10">MPLS backbone</text>
>>  <text x="285" y="118" text-anchor="middle" fill="#555" font-size="10">or SD-WAN fabric</text>
>>
>>  <!-- PoP -->
>>  <rect x="410" y="55" width="110" height="90" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="465" y="85" text-anchor="middle" font-weight="bold" fill="#e65100">PoP</text>
>>  <text x="465" y="105" text-anchor="middle" fill="#555" font-size="10">BGP session</text>
>>  <text x="465" y="120" text-anchor="middle" fill="#555" font-size="10">VLAN</text>
>>
>>  <!-- OVHcloud -->
>>  <rect x="570" y="40" width="200" height="120" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="670" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="670" y="95" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · VMs</text>
>>  <text x="670" y="115" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>
>>  <!-- Arrows -->
>>  <line x1="160" y1="100" x2="210" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#t3)"/>
>>  <line x1="360" y1="100" x2="410" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#t3)"/>
>>  <line x1="520" y1="100" x2="570" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#t3)"/>
>>
>>  <defs>
>>    <marker id="t3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### How it differs from on-premises
>>
>>In a WAN scenario, your traffic typically originates from **multiple branch offices** or sites and is aggregated through a WAN backbone (MPLS or SD-WAN) before reaching the OVHcloud PoP. The WAN edge device (router or SD-WAN gateway) is the equipment that peers with OVHcloud via BGP.
>>
>>### When to use this architecture
>>
>>| ✅ Good for | ❌ Not recommended for |
>>|---|---|
>>| Connecting multiple branch offices to OVHcloud through a single WAN exit | Critical workloads needing 99.99% uptime |
>>| Branch consolidation to a cloud environment | Multi-cloud setups requiring diverse paths |
>>| Hybrid SD-WAN deployments | Highly regulated environments |
>>
>>### Step-by-step
>>
>>#### 1. Coordinate with your WAN provider
>>
>>Contact your WAN/MPLS/SD-WAN provider and request:
>>
>>- A **circuit** or **virtual connection** from your WAN backbone to the OVHcloud PoP.
>>- The circuit should terminate at a facility where OVHcloud has a PoP (see [PoP Locations](../1.4_pop_locations_regions)).
>>
>>If your WAN provider is also an OVHcloud Connect provider (e.g. Megaport, Equinix), they can handle both the WAN handoff and the OVHcloud Connect provisioning.
>>
>>#### 2. Order OVHcloud Connect
>>
>>- **Direct:** If your WAN edge router is co-located at the OVHcloud PoP. See [Order Direct](../3.1_order_direct).
>>- **Provider:** If the connection is managed by a provider. See [Order Provider](../3.2_order_provider).
>>
>>#### 3. Configure BGP on the WAN edge
>>
>>Set up a BGP session between your **WAN edge device** and OVHcloud:
>>
>>- Advertise aggregated branch prefixes (e.g. `10.0.0.0/8` or more specific per-branch subnets).
>>- Accept OVHcloud routes.
>>- Ensure your WAN routing propagates the OVHcloud routes back to all branch offices.
>>
>>See [Configure OCC L3 with BGP](../3.7_occ_l3_bgp).
>>
>>#### 4. Associate with vRack and configure subnets
>>
>>Link to your vRack and set up the required subnets. See [Associate with vRack](../3.5_associate_vrack) and [Set up your vRack network](../3.6_vrack_network_setup).
>>
>>#### 5. Test end-to-end connectivity
>>
>>From a branch office, verify you can reach OVHcloud resources:
>>
>>```
>>ping 172.16.1.10           ## Ping an OVHcloud VM
>>traceroute 172.16.1.10     ## Should go: branch → WAN → PoP → OVHcloud (private)
>>```
>>
>>Verify from OVHcloud back to a branch:
>>
>>```bash
>>ping 10.1.0.1              ## Ping a branch IP from an OVHcloud VM
>>```
>>
>>#### 6. Set up monitoring
>>
>>Monitor the WAN edge BGP session and OVHcloud Connect link. See [Monitor](../3.9_monitor).
>>
> AWS
>>### Prerequisites
>>
>>- An **AWS account** with a VPC configured
>>- An **OVHcloud account** with a vRack
>>- An account with a **shared provider** that supports both AWS Direct Connect and OVHcloud Connect
>>- Non-overlapping IP ranges between AWS VPC and OVHcloud subnets
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="800" height="200" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- AWS -->
>>  <rect x="20" y="40" width="180" height="120" rx="8" fill="#fff3e0" stroke="#ff9800" stroke-width="2"/>
>>  <text x="110" y="70" text-anchor="middle" font-weight="bold" fill="#e65100">AWS</text>
>>  <text x="110" y="95" text-anchor="middle" fill="#555" font-size="10">VPC: 10.1.0.0/16</text>
>>  <text x="110" y="115" text-anchor="middle" fill="#555" font-size="10">Direct Connect</text>
>>  <text x="110" y="135" text-anchor="middle" fill="#555" font-size="10">Virtual Interface (VIF)</text>
>>
>>  <!-- Provider / Exchange -->
>>  <rect x="270" y="50" width="200" height="100" rx="8" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="370" y="80" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Interconnection Provider</text>
>>  <text x="370" y="100" text-anchor="middle" fill="#555" font-size="10">Megaport / Equinix Fabric</text>
>>  <text x="370" y="118" text-anchor="middle" fill="#555" font-size="10">Bridging AWS ↔ OVHcloud</text>
>>
>>  <!-- OVHcloud -->
>>  <rect x="540" y="40" width="220" height="120" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="650" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="650" y="95" text-anchor="middle" fill="#555" font-size="10">vRack: 172.16.0.0/16</text>
>>  <text x="650" y="115" text-anchor="middle" fill="#555" font-size="10">OVHcloud Connect</text>
>>  <text x="650" y="135" text-anchor="middle" fill="#555" font-size="10">Servers / VMs</text>
>>
>>  <!-- Arrows -->
>>  <line x1="200" y1="100" x2="270" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t5)"/>
>>  <line x1="470" y1="100" x2="540" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t5)"/>
>>
>>  <defs>
>>    <marker id="t5" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### How it works
>>
>>The connection between AWS and OVHcloud is typically routed through a **shared provider** (such as Megaport or Equinix Fabric) that has physical presence at both AWS Direct Connect locations and OVHcloud PoPs.
>>
>>1. **On the AWS side**, you create a Direct Connect connection (or hosted connection) and a Virtual Interface (VIF) that connects your AWS VPC.
>>2. **On the provider side**, you create a virtual cross-connect (VXC) that bridges the AWS VIF to the OVHcloud Connect service.
>>3. **On the OVHcloud side**, you configure BGP and associate the connection with your vRack.
>>
>>### Step-by-step
>>
>>#### 1. Set up AWS Direct Connect
>>
>>1. In the **AWS Console**, go to **Direct Connect** → **Connections**.
>>2. Create a new connection (or use a hosted connection via your provider).
>>3. Select the **AWS Direct Connect location** closest to your OVHcloud PoP.
>>4. Create a **Private Virtual Interface (VIF)** associated with your VPC or Virtual Private Gateway.
>>5. Note the BGP ASN, peer IPs, and VLAN ID.
>>
>> For more information, please consult [AWS Direct Connect documentation](https://docs.aws.amazon.com/directconnect/)
>>
>>#### 2. Order OVHcloud Connect Provider
>>
>>1. In the **OVHcloud Control Panel**, order OVHcloud Connect Provider.
>>2. Select the same provider you're using for AWS (e.g. Megaport).
>>3. Choose the PoP location.
>>4. Copy the **service key**.
>>
>>See [Order OVHcloud Connect Provider](../3.2_order_provider).
>>
>>#### 3. Create the bridge on the provider
>>
>>In your provider's portal, create connections that bridge AWS and OVHcloud:
>>
>>**Example with Megaport:**
>>
>>1. Create a **Megaport port** or use an existing one.
>>2. Create a **VXC to AWS** using the AWS Direct Connect hosted connection details.
>>3. Create a **VXC to OVHcloud** using the OVHcloud service key.
>>4. Optionally, use a **Megaport MCR (Cloud Router)** to route between the two VXCs if you need Layer 3 routing at the provider level.
>>
>>#### 4. Configure BGP
>>
>>You need BGP sessions on three segments:
>>
>>| Segment | Your side | Remote side |
>>|---|---|---|
>>| **AWS VIF** | AWS VPC (via VGW/TGW) | Provider or your router |
>>| **Provider bridge** | Handled by provider (if using MCR) | — |
>>| **OVHcloud Connect** | OVHcloud router | Your router or provider MCR |
>>
>>If using a provider MCR:
>>- The MCR peers with AWS via the VIF.
>>- The MCR peers with OVHcloud via OVHcloud Connect.
>>- Routes are exchanged automatically between the two peers.
>>
>>If **not** using a provider MCR:
>>- You need your own router (physical or virtual) co-located with the provider to handle BGP routing between AWS and OVHcloud.
>>
>>#### 5. Associate OVHcloud Connect with vRack
>>
>>See [Associate with vRack](../3.5_associate_vrack).
>>
>>#### 6. Test connectivity
>>
>>| Test | Details |
>>|---|---|
>>| **From AWS EC2 to OVHcloud** | `ping 172.16.1.10` from an EC2 instance |
>>| **From OVHcloud to AWS** | `ping 10.1.0.10` from an OVHcloud VM |
>>| **Traceroute** | Verify traffic stays on private paths (no internet hops) |
>>| **BGP routes** | Check that AWS VPC routes and OVHcloud routes appear in each other's routing tables |
>>
>>### Important considerations
>>
>>- **Routing domains:** Ensure there are no overlapping IP ranges between AWS VPCs and OVHcloud subnets.
>>- **Costs:** You will be billed by AWS (Direct Connect), the provider (VXC/MCR), and OVHcloud (Connect). Review all three pricing models.
>>- **Latency:** The total latency depends on the distance between the AWS region and OVHcloud region, plus any intermediate provider hops.
>>
> Azure
>>### Prerequisites
>>
>>- An **Azure subscription** with permissions to create ExpressRoute circuits
>>- An **OVHcloud account** with a vRack
>>- An account with a **shared provider** that supports both Azure ExpressRoute and OVHcloud Connect
>>- Non-overlapping IP ranges between Azure VNet and OVHcloud vRack
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 230" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="820" height="230" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- Azure -->
>>  <rect x="15" y="55" width="150" height="130" rx="8" fill="#e3f2fd" stroke="#0078d4" stroke-width="2"/>
>>  <text x="90" y="80" text-anchor="middle" font-weight="bold" fill="#0078d4">Azure</text>
>>  <rect x="30" y="90" width="120" height="35" rx="4" fill="#fff" stroke="#90caf9"/>
>>  <text x="90" y="112" text-anchor="middle" fill="#555" font-size="10">ExpressRoute Circuit</text>
>>  <text x="90" y="155" text-anchor="middle" fill="#555" font-size="10">VNet: 10.2.0.0/16</text>
>>  <text x="90" y="170" text-anchor="middle" fill="#555" font-size="9">Private Peering</text>
>>
>>  <!-- Provider -->
>>  <rect x="240" y="65" width="150" height="100" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="315" y="90" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider</text>
>>  <text x="315" y="110" text-anchor="middle" fill="#555" font-size="10">Megaport / Equinix</text>
>>  <text x="315" y="130" text-anchor="middle" fill="#555" font-size="10">VXC or Fabric</text>
>>  <text x="315" y="148" text-anchor="middle" fill="#555" font-size="9">Service Key ↔ Service Key</text>
>>
>>  <!-- OVHcloud PoP -->
>>  <rect x="465" y="65" width="130" height="100" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="530" y="90" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud PoP</text>
>>  <text x="530" y="115" text-anchor="middle" fill="#555" font-size="10">OCC Provider</text>
>>  <text x="530" y="135" text-anchor="middle" fill="#555" font-size="10">BGP peering</text>
>>  <text x="530" y="150" text-anchor="middle" fill="#555" font-size="9">ASN varies by PoP</text>
>>
>>  <!-- vRack -->
>>  <rect x="660" y="55" width="140" height="130" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="730" y="85" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="730" y="110" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="730" y="130" text-anchor="middle" fill="#555" font-size="10">Bare Metal</text>
>>  <text x="730" y="150" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>
>>  <text x="730" y="170" text-anchor="middle" fill="#555" font-size="10">Public Cloud</text>
>>
>>  <!-- Arrows -->
>>  <line x1="165" y1="115" x2="240" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t7)"/>
>>  <line x1="390" y1="115" x2="465" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t7)"/>
>>  <line x1="595" y1="115" x2="660" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t7)"/>
>>
>>  <text x="200" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
>>  <text x="428" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
>>  <text x="628" y="105" text-anchor="middle" fill="#555" font-size="9">vRack</text>
>>
>>  <!-- Labels -->
>>  <text x="410" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Azure ↔ Provider ↔ OVHcloud Connect ↔ vRack</text>
>>
>>  <defs>
>>    <marker id="t7" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### When to use
>>
>>| Scenario | Recommendation |
>>|---|---|
>>| Migrate VMs from Azure to OVHcloud | ✅ Simple connection |
>>| Burst compute from Azure to OVHcloud | ✅ Simple connection |
>>| Production multi-cloud (high availability) | Use the [resilient tutorial](../4.2_resilient/4.4.2_azure_resilient) |
>>| DR between Azure and OVHcloud | Use the [resilient tutorial](../4.2_resilient/4.4.2_azure_resilient) |
>>
>>### Step-by-step
>>
>>#### 1. Create an Azure ExpressRoute circuit
>>
>>1. In the **Azure Portal** → **Create a resource** → **ExpressRoute**.
>>2. Select:
>>   - **Provider**: Megaport or Equinix
>>   - **Peering location**: Choose a location shared with your OVHcloud PoP
>>   - **Bandwidth**: Match your OVHcloud Connect bandwidth (1 Gbps / 10 Gbps)
>>3. Complete the creation. Note the **Service Key** (a GUID).
>>
>>#### 2. Order your OVHcloud Connect Provider
>>
>>If not already done, [order an OVHcloud Connect Provider](../3.2_order_provider) at a PoP served by the same provider.
>>
>>Retrieve your **service key** from the OVHcloud Control Panel or API.
>>
>>#### 3. Create the provider bridge
>>
>>On the provider platform, create **two VXCs** (or equivalent connections):
>>
>>| VXC | Source | Destination |
>>|---|---|---|
>>| VXC 1 | Azure ExpressRoute (Service Key) | Provider MCR / Port |
>>| VXC 2 | Provider MCR / Port | OVHcloud Connect (Service Key) |
>>
>>If the provider supports it, an MCR (Cloud Router) acts as a transit point between Azure and OVHcloud.
>>
>>**Megaport example:**
>>
>>1. Create a **Megaport Cloud Router (MCR)** in the same metro.
>>2. Add VXC from MCR → Azure ExpressRoute using the Azure Service Key.
>>3. Add VXC from MCR → OVHcloud Connect using the OVHcloud service key.
>>
>>**Equinix Fabric example:**
>>
>>1. Create a connection from your Fabric port → Azure ExpressRoute using the Service Key.
>>2. Create a connection from your Fabric port → OVHcloud Connect using the service key.
>>
>>#### 4. Configure Azure Private Peering
>>
>>On the Azure ExpressRoute circuit:
>>
>>1. Go to **Peerings** → **Azure private**.
>>2. Configure:
>>   - **Peer ASN**: Your MCR or provider ASN
>>   - **Primary subnet**: A /30 for BGP (e.g., `169.254.100.0/30`)
>>   - **Secondary subnet**: A /30 for BGP (e.g., `169.254.100.4/30`)
>>   - **VLAN ID**: Provided by the provider
>>
>>#### 5. Configure OVHcloud BGP peering
>>
>>[Configure OCC L3 with BGP](../3.7_occ_l3_bgp) for the OVHcloud Connect service.
>>
>>Ensure the MCR or provider router advertises Azure prefixes (`10.2.0.0/16`) toward OVHcloud, and OVHcloud prefixes (`172.16.0.0/16`) toward Azure.
>>
>>#### 6. Associate your vRack
>>
>>[Associate the OVHcloud Connect service with your vRack](../3.5_associate_vrack).
>>
>>#### 7. Verify connectivity
>>
>>| Check | Command / Action |
>>|---|---|
>>| Azure circuit status | Azure Portal → ExpressRoute → Overview → **Provider status: Provisioned** |
>>| Azure BGP peering | Azure Portal → ExpressRoute → Peerings → **State: Enabled** |
>>| OVHcloud BGP status | OVHcloud API: `GET /ovhCloudConnect/{serviceName}` → `status: active` |
>>| Provider VXC status | Provider portal → VXC → **Active / Up** |
>>| End-to-end ping | From Azure VM → OVHcloud server private IP |
>>
>>### BGP route flow
>>
>>There are **three BGP segments** in this architecture:
>>
>>| Segment | Endpoints | ASNs |
>>|---|---|---|
>>| Azure ↔ Provider | Azure (ASN 12076) ↔ MCR/Provider ASN | 12076 ↔ Provider |
>>| Provider ↔ OVHcloud | MCR/Provider ASN ↔ OVHcloud BGP AS [TODO: per-PoP — 65501 EU / 65502 CA / 65519 Asia] | Provider ↔ [TODO: per-PoP] |
>>| OVHcloud ↔ vRack | Internal routing within OVHcloud | N/A |
>>
>> **Note:** Azure uses ASN **12076** for ExpressRoute Private Peering.
>>
>>### Troubleshooting
>>
>>| Symptom | Likely cause | Action |
>>|---|---|---|
>>| ExpressRoute circuit stuck in "Enabling" | Provider has not completed provisioning | Check provider portal; contact provider support |
>>| Azure private peering not established | Subnet or ASN mismatch | Verify /30 subnets and peer ASN match provider settings |
>>| OVHcloud BGP session down | Service key not activated or VLAN mismatch | Check OVHcloud API and provider VXC configuration |
>>| No route to Azure VNet | Missing route advertisement | Verify MCR forwards Azure prefixes toward OVHcloud |
>>| Asymmetric routing | Different paths for outbound/inbound | Ensure both sides prefer the same path; check BGP attributes |
>>
> GCP
>>### Prerequisites
>>
>>- A **GCP project** with the Compute Network Admin role
>>- A **GCP Cloud Router** created in the region nearest to the provider location
>>- An **OVHcloud account** with a vRack
>>- An account with a **shared provider** that supports both GCP Cross-Cloud Interconnect and OVHcloud Connect
>>- **Non-overlapping IP ranges** between GCP VPC and OVHcloud vRack
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 230" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="820" height="230" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- GCP -->
>>  <rect x="15" y="55" width="150" height="130" rx="8" fill="#e8eaf6" stroke="#4285f4" stroke-width="2"/>
>>  <text x="90" y="80" text-anchor="middle" font-weight="bold" fill="#4285f4">Google Cloud</text>
>>  <rect x="30" y="90" width="120" height="35" rx="4" fill="#fff" stroke="#c5cae9"/>
>>  <text x="90" y="112" text-anchor="middle" fill="#555" font-size="10">Interconnect</text>
>>  <text x="90" y="150" text-anchor="middle" fill="#555" font-size="10">VPC: 10.3.0.0/16</text>
>>  <text x="90" y="170" text-anchor="middle" fill="#555" font-size="9">Cloud Router</text>
>>
>>  <!-- Provider -->
>>  <rect x="240" y="65" width="150" height="100" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="315" y="90" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider</text>
>>  <text x="315" y="110" text-anchor="middle" fill="#555" font-size="10">Megaport / Equinix</text>
>>  <text x="315" y="130" text-anchor="middle" fill="#555" font-size="10">VXC or Fabric</text>
>>  <text x="315" y="148" text-anchor="middle" fill="#555" font-size="9">Service Key bridge</text>
>>
>>  <!-- OVHcloud PoP -->
>>  <rect x="465" y="65" width="130" height="100" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="530" y="90" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud PoP</text>
>>  <text x="530" y="115" text-anchor="middle" fill="#555" font-size="10">OCC Provider</text>
>>  <text x="530" y="135" text-anchor="middle" fill="#555" font-size="10">BGP peering</text>
>>  <text x="530" y="150" text-anchor="middle" fill="#555" font-size="9">ASN varies by PoP</text>
>>
>>  <!-- vRack -->
>>  <rect x="660" y="55" width="140" height="130" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="730" y="85" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="730" y="110" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="730" y="130" text-anchor="middle" fill="#555" font-size="10">Bare Metal</text>
>>  <text x="730" y="150" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>
>>  <text x="730" y="170" text-anchor="middle" fill="#555" font-size="10">Public Cloud</text>
>>
>>  <!-- Arrows -->
>>  <line x1="165" y1="115" x2="240" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t9)"/>
>>  <line x1="390" y1="115" x2="465" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t9)"/>
>>  <line x1="595" y1="115" x2="660" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t9)"/>
>>
>>  <text x="200" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
>>  <text x="428" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
>>  <text x="628" y="105" text-anchor="middle" fill="#555" font-size="9">vRack</text>
>>
>>  <!-- Title -->
>>  <text x="410" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">GCP ↔ Provider ↔ OVHcloud Connect ↔ vRack</text>
>>
>>  <defs>
>>    <marker id="t9" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### When to use
>>
>>| Scenario | Recommendation |
>>|---|---|
>>| Data transfer from GCP to OVHcloud | ✅ Simple connection |
>>| Hybrid AI/ML pipeline (GCP compute + OVHcloud storage) | ✅ Simple connection |
>>| Production multi-cloud with SLA requirements | Use the [resilient tutorial](../4.2_resilient) |
>>| Disaster recovery | Use the [resilient tutorial](../4.2_resilient) |
>>
>>### GCP Interconnect types
>>
>>GCP offers two main interconnect options:
>>
>>| Type | Description | Use when |
>>|---|---|---|
>>| **Dedicated Interconnect** | Direct physical connection to Google's network | You have a presence in a GCP colocation facility |
>>| **Partner Interconnect** | Connection through a supported service provider | You use Megaport, Equinix, or another GCP partner |
>>
>> **For this tutorial**, we use **Partner Interconnect** since the shared provider (Megaport or Equinix) acts as a bridge between GCP and OVHcloud.
>>
>>### Step-by-step
>>
>>#### 1. Create a GCP Cloud Router
>>
>>In the **GCP Console** → **Hybrid Connectivity** → **Cloud Routers** → **Create**:
>>
>>- **Name**: `router-ovhcloud`
>>- **Network**: Your VPC
>>- **Region**: Region closest to the provider PoP (e.g., `europe-west1` for Paris)
>>- **ASN**: Use a private ASN (e.g., `65001`) or Google's default (`16550`)
>>
>>#### 2. Create a Partner Interconnect VLAN attachment
>>
>>Go to **Hybrid Connectivity** → **Interconnect** → **VLAN attachments** → **Create**:
>>
>>1. Select **Partner Interconnect connection**.
>>2. Choose your Cloud Router.
>>3. Select the appropriate region and edge availability domain.
>>4. Set the **MTU** to 1500 (standard) or 1440 for VPN interworking.
>>5. Note the **pairing key** generated by GCP.
>>
>> **GCP pairing key format**: A string like `<random>/<region>/<edge-availability-domain>`
>>
>>#### 3. Create the provider bridge
>>
>>On the provider platform, create connections to bridge GCP and OVHcloud:
>>
>>**Megaport example:**
>>
>>1. Create an **MCR** (Megaport Cloud Router) in a metro with both GCP and OVHcloud presence.
>>2. **VXC 1**: MCR → Google Cloud Partner Interconnect (use GCP pairing key).
>>3. **VXC 2**: MCR → OVHcloud Connect (use OVHcloud service key).
>>
>>**Equinix Fabric example:**
>>
>>1. Create a connection from your Fabric port → GCP Partner Interconnect (use GCP pairing key).
>>2. Create a connection from your Fabric port → OVHcloud Connect (use OVHcloud service key).
>>
>>#### 4. Activate the GCP VLAN attachment
>>
>>After the provider provisions the connection:
>>
>>1. Return to **GCP Console** → **VLAN attachments**.
>>2. The attachment should show **"Waiting for provider"** → then **"Pending customer"**.
>>3. Click **Activate** to enable the attachment.
>>4. GCP will automatically configure BGP between the Cloud Router and the provider.
>>
>>#### 5. Configure OVHcloud BGP peering
>>
>>[Configure OCC L3 with BGP](../3.7_occ_l3_bgp).
>>
>>Ensure the provider MCR:
>>- Advertises GCP VPC prefixes (`10.3.0.0/16`) toward OVHcloud (BGP AS [TODO: per-PoP — 65501 EU / 65502 CA / 65519 Asia]).
>>- Advertises OVHcloud prefixes (`172.16.0.0/16`) toward GCP Cloud Router.
>>
>>#### 6. Associate your vRack
>>
>>[Associate the OVHcloud Connect service with your vRack](../3.5_associate_vrack).
>>
>>#### 7. Verify connectivity
>>
>>| Check | How to verify |
>>|---|---|
>>| GCP VLAN attachment | GCP Console → VLAN attachments → **Status: Active** |
>>| GCP Cloud Router BGP | GCP Console → Cloud Routers → BGP peers → **Status: Established** |
>>| Provider VXC | Provider portal → VXC → **Active / Up** |
>>| OVHcloud BGP | OVHcloud API → service status = **active** |
>>| End-to-end | Ping from GCP VM → OVHcloud server private IP |
>>
>>### BGP route flow
>>
>>| Segment | Endpoints | ASNs |
>>|---|---|---|
>>| GCP ↔ Provider | Cloud Router (ASN 16550) ↔ MCR (Provider ASN) | 16550 ↔ Provider |
>>| Provider ↔ OVHcloud | MCR (Provider ASN) ↔ OVHcloud BGP AS [TODO: per-PoP — 65501 EU / 65502 CA / 65519 Asia] | Provider ↔ [TODO: per-PoP] |
>>| OVHcloud ↔ vRack | Internal OVHcloud routing | N/A |
>>
>> **Note:** GCP Cloud Router uses ASN **16550** by default. You can configure a custom ASN during Cloud Router creation.
>>
>>### Troubleshooting
>>
>>| Symptom | Likely cause | Action |
>>|---|---|---|
>>| VLAN attachment stuck in "Waiting for provider" | Provider VXC not yet provisioned | Check provider portal; ensure the GCP pairing key is correct |
>>| VLAN attachment in "Pending customer" | Not yet activated in GCP Console | Click **Activate** on the VLAN attachment |
>>| Cloud Router BGP not established | ASN mismatch or incorrect peering IPs | Verify Cloud Router ASN matches what the provider expects |
>>| No routes to GCP VPC | Missing route advertisement | Ensure Cloud Router advertises VPC subnets and MCR forwards them |
>>| OVHcloud BGP down | Service key not consumed or VLAN mismatch | Check OVHcloud service status and provider VXC config |

### What's next?

- [Resilient On-Prem architecture](../4.2_resilient) for high availability
- [Monitor your connection](../3.9_monitor)

### Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).