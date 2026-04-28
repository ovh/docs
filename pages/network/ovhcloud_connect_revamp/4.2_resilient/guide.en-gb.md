---
title: Setting up a resilient OVHcloud Connect architecture
excerpt: Connect your infrastructure to OVHcloud through two redundant OVHcloud Connect links for high availability and automatic failover.
updated: 2026-02-18
---

## Objective

This tutorial guides you through connecting your infrastructure to OVHcloud using **two independent OVHcloud Connect links** for high availability. If one link fails, traffic automatically switches to the other.

## Instructions

Below, you will find prerequisites and instructions for five separate use-cases, which you may choose depending on desired architecture.

> [!tabs]
> On-Premises
>>### Prerequisites
>>
>>- Two OVHcloud Connect services (Direct, Provider, or a mix) terminating at **different PoPs**
>>- A router (or two routers) capable of running **multiple BGP sessions** with failover
>>- An IP plan covering **two AZs** in OVHcloud
>>- A vRack with resources in both AZs
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="800" height="300" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- On-Premises -->
>>  <rect x="20" y="70" width="180" height="160" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
>>  <text x="110" y="100" text-anchor="middle" font-weight="bold" fill="#1565c0">On-Premises</text>
>>  <text x="110" y="125" text-anchor="middle" fill="#555" font-size="10">Router 1</text>
>>  <text x="110" y="145" text-anchor="middle" fill="#555" font-size="10">(or dual-homed router)</text>
>>  <text x="110" y="175" text-anchor="middle" fill="#555" font-size="10">ASN: 65001</text>
>>  <text x="110" y="195" text-anchor="middle" fill="#555" font-size="10">10.0.0.0/16</text>
>>
>>  <!-- PoP A -->
>>  <rect x="280" y="40" width="140" height="70" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="350" y="65" text-anchor="middle" font-weight="bold" fill="#e65100">PoP A</text>
>>  <text x="350" y="85" text-anchor="middle" fill="#555" font-size="10">Primary link</text>
>>
>>  <!-- PoP B -->
>>  <rect x="280" y="180" width="140" height="70" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="350" y="205" text-anchor="middle" font-weight="bold" fill="#e65100">PoP B</text>
>>  <text x="350" y="225" text-anchor="middle" fill="#555" font-size="10">Backup link</text>
>>
>>  <!-- OVHcloud AZ 1 -->
>>  <rect x="500" y="30" width="260" height="90" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="630" y="55" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 1</text>
>>  <text x="630" y="78" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · VMs</text>
>>  <text x="630" y="98" text-anchor="middle" fill="#555" font-size="10">172.16.1.0/24</text>
>>
>>  <!-- OVHcloud AZ 2 -->
>>  <rect x="500" y="170" width="260" height="90" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="630" y="195" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 2</text>
>>  <text x="630" y="218" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · VMs</text>
>>  <text x="630" y="238" text-anchor="middle" fill="#555" font-size="10">172.16.2.0/24</text>
>>
>>  <!-- Arrows -->
>>  <line x1="200" y1="120" x2="280" y2="75" stroke="#2e7d32" stroke-width="2" marker-end="url(#t2)"/>
>>  <line x1="200" y1="180" x2="280" y2="215" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t2)"/>
>>  <line x1="420" y1="75" x2="500" y2="75" stroke="#2e7d32" stroke-width="2" marker-end="url(#t2)"/>
>>  <line x1="420" y1="215" x2="500" y2="215" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t2)"/>
>>
>>  <!-- Labels -->
>>  <text x="240" y="85" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary</text>
>>  <text x="240" y="210" text-anchor="middle" fill="#e65100" font-size="10">Backup</text>
>>
>>  <defs>
>>    <marker id="t2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### When to use this architecture
>>
>>| ✅ Recommended for | Details |
>>|---|---|
>>| Business-critical production | Workloads that cannot tolerate downtime |
>>| Regulated environments | Compliance frameworks requiring high availability |
>>| SLA requirements ≥ 99.99% | Multi-path architecture needed for premium SLA |
>>| Disaster recovery | Automatic failover without manual intervention |
>>
>>#### 1. Order two OVHcloud Connect links
>>
>>Order two separate OVHcloud Connect services at **different PoPs** for physical diversity:
>>
>>- **Link 1 (Primary):** Order at PoP A — See [Order Direct](../3.1_order_direct) or [Order Provider](../3.2_order_provider).
>>- **Link 2 (Backup):** Order at PoP B — Same process, different PoP.
>>
>>> **Diversity tip:** Use different data centres or at minimum different physical paths to avoid a shared failure point.
>>
>>#### 2. Install both physical connections
>>
>>For each link:
>>- **Direct:** Install cross-connects at each PoP. See [Cross Connect LOA](../3.11_cross_connect_loa).
>>- **Provider:** Share the respective pairing keys with your provider(s).
>>
>>#### 3. Configure BGP with failover
>>
>>Set up **two BGP sessions** — one per link — with routing policies that define which path is preferred.
>>
>>##### Active/Standby example (Cisco IOS)
>>
>>```
>>router bgp 65001
>> ! Primary link via PoP A
>> neighbor 192.0.2.1 remote-as 35540
>> neighbor 192.0.2.1 description OVHcloud-Primary
>> neighbor 192.0.2.1 route-map PRIMARY-IN in
>> neighbor 192.0.2.1 route-map PRIMARY-OUT out
>>
>> ! Backup link via PoP B
>> neighbor 198.51.100.1 remote-as 35540
>> neighbor 198.51.100.1 description OVHcloud-Backup
>> neighbor 198.51.100.1 route-map BACKUP-IN in
>> neighbor 198.51.100.1 route-map BACKUP-OUT out
>>
>>! Prefer primary path using Local Preference
>>route-map PRIMARY-IN permit 10
>> set local-preference 200
>>
>>route-map BACKUP-IN permit 10
>> set local-preference 100
>>
>>! Influence OVHcloud's return traffic using AS-path prepending on backup
>>route-map PRIMARY-OUT permit 10
>>
>>route-map BACKUP-OUT permit 10
>> set as-path prepend 65001 65001
>>```
>>
>>##### Key BGP attributes for failover
>>
>>| Attribute | Effect | Use case |
>>|---|---|---|
>>| **Local Preference** | Controls outbound path preference (higher = preferred) | Make primary path preferred for traffic leaving your network |
>>| **AS-path prepending** | Makes a path look longer (less preferred) | Influence OVHcloud's choice of return path |
>>| **MED** | Suggests preference to the remote side | May not be honoured in all OVHcloud configurations |
>>
>>#### 4. Associate both links with your vRack
>>
>>Associate both OVHcloud Connect services with the **same vRack**. See [Associate with vRack](../3.5_associate_vrack).
>>
>>#### 5. Configure subnets in both AZs
>>
>>Set up private subnets in both Availability Zones. See [Set up your vRack network](../3.6_vrack_network_setup).
>>
>>#### 6. Test failover
>>
>>**This is critical.** Do not skip failover testing.
>>
>>1. **Verify normal operation:**
>>   - Both BGP sessions are Established.
>>   - Traffic flows through the primary link.
>>
>>2. **Simulate primary failure:**
>>   - Shut down the primary BGP session or physically disconnect the primary link.
>>   - Verify traffic switches to the backup link within the BGP convergence time (typically 30–90 seconds; can be faster with BFD).
>>   - Confirm no packet loss beyond the convergence window.
>>
>>3. **Restore primary:**
>>   - Bring the primary link back up.
>>   - Verify traffic returns to the primary path.
>>
>>4. **Test the reverse:**
>>   - Simulate failure of the backup link while the primary is up. This confirms both links work independently.
>>
>>#### 7. Set up monitoring
>>
>>Monitor **both links** independently. Set alerts for:
>>- BGP session drops on either link
>>- Traffic imbalance (all traffic on one link may indicate a failure on the other)
>>- Bandwidth approaching capacity on either link
>>
>>See [Monitor](../3.9_monitor).
>>
>>### Advanced: Active/Active configuration
>>
>>For maximum throughput and faster failover, you can run both links in **Active/Active** mode:
>>
>>- Set **equal Local Preference** on both paths.
>>- Use **ECMP (Equal-Cost Multi-Path)** if supported.
>>- Traffic is load-balanced across both links.
>>- If one link fails, all traffic immediately flows through the surviving link.
>>
>>> Active/Active provides higher aggregate bandwidth but requires careful capacity planning — each link must be able to handle the full traffic load alone during a failure.
>>
> WAN
>>### Prerequisites
>>
>>- An OVHcloud account with a vRack
>>- Two OVHcloud Connect services (Direct, Provider, or a mix) terminating at **different PoPs**
>>- A WAN backbone (MPLS or SD-WAN) with circuits reaching both PoPs
>>- BGP-capable WAN edge devices
>>- An IP addressing plan with no overlaps between your WAN and OVHcloud subnets
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="800" height="300" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- Branch offices -->
>>  <rect x="15" y="80" width="120" height="140" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
>>  <text x="75" y="110" text-anchor="middle" font-weight="bold" fill="#1565c0" font-size="11">Branches</text>
>>  <text x="75" y="135" text-anchor="middle" fill="#555" font-size="10">Office A</text>
>>  <text x="75" y="155" text-anchor="middle" fill="#555" font-size="10">Office B</text>
>>  <text x="75" y="175" text-anchor="middle" fill="#555" font-size="10">Office C</text>
>>
>>  <!-- WAN -->
>>  <rect x="175" y="90" width="120" height="120" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="235" y="125" text-anchor="middle" font-weight="bold" fill="#6a1b9a" font-size="11">WAN</text>
>>  <text x="235" y="145" text-anchor="middle" fill="#555" font-size="10">SD-WAN /</text>
>>  <text x="235" y="160" text-anchor="middle" fill="#555" font-size="10">MPLS</text>
>>
>>  <!-- PoP A -->
>>  <rect x="345" y="45" width="110" height="65" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="400" y="70" text-anchor="middle" font-weight="bold" fill="#e65100">PoP A</text>
>>  <text x="400" y="90" text-anchor="middle" fill="#555" font-size="10">Primary</text>
>>
>>  <!-- PoP B -->
>>  <rect x="345" y="185" width="110" height="65" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="400" y="210" text-anchor="middle" font-weight="bold" fill="#e65100">PoP B</text>
>>  <text x="400" y="230" text-anchor="middle" fill="#555" font-size="10">Backup</text>
>>
>>  <!-- OVHcloud AZ1 -->
>>  <rect x="510" y="30" width="250" height="85" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="635" y="58" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 1</text>
>>  <text x="635" y="78" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · 172.16.1.0/24</text>
>>
>>  <!-- OVHcloud AZ2 -->
>>  <rect x="510" y="180" width="250" height="85" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="635" y="208" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 2</text>
>>  <text x="635" y="228" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · 172.16.2.0/24</text>
>>
>>  <!-- Arrows -->
>>  <line x1="135" y1="150" x2="175" y2="150" stroke="#555" stroke-width="1.5" marker-end="url(#t4)"/>
>>  <line x1="295" y1="120" x2="345" y2="77" stroke="#2e7d32" stroke-width="2" marker-end="url(#t4)"/>
>>  <line x1="295" y1="180" x2="345" y2="217" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t4)"/>
>>  <line x1="455" y1="77" x2="510" y2="72" stroke="#2e7d32" stroke-width="2" marker-end="url(#t4)"/>
>>  <line x1="455" y1="217" x2="510" y2="222" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t4)"/>
>>
>>  <defs>
>>    <marker id="t4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### When to use this architecture
>>
>>- **Business-critical WAN connectivity** — Multiple branches depend on OVHcloud access.
>>- **SLA requirements ≥ 99.99%** — Dual links needed for premium uptime guarantees.
>>- **SD-WAN with diverse paths** — SD-WAN platforms can automatically route over the best available path.
>>
>>### Step-by-step
>>
>>#### 1. Order two OVHcloud Connect links
>>
>>Order at **different PoPs** for physical diversity. You can mix Direct and Provider connections.
>>
>>#### 2. Provision both WAN circuits
>>
>>Coordinate with your WAN provider to deliver circuits to both PoPs. If using an SD-WAN platform, configure both paths as underlay connections.
>>
>>#### 3. Configure BGP with failover
>>
>>Set up two BGP sessions with appropriate routing policies:
>>
>>- **Active/Standby:** Use Local Preference and AS-path prepending (see the On-Premises tab for detailed BGP examples).
>>- **Active/Active:** Use ECMP for load balancing across both links.
>>- **SD-WAN integration:** Many SD-WAN platforms can detect link quality and switch traffic automatically, supplementing BGP failover.
>>
>>#### 4. Associate both links with your vRack
>>
>>Both OVHcloud Connect services should be associated with the same vRack.
>>
>>#### 5. Configure subnets across AZs
>>
>>Distribute subnets across both AZs for full redundancy. See [Set up your vRack network](../3.6_vrack_network_setup).
>>
>>#### 6. Test failover
>>
>>1. Verify both BGP sessions are Established.
>>2. Shut down the primary link and confirm traffic switches to the backup.
>>3. Restore the primary and verify traffic returns.
>>4. Repeat for the backup link.
>>
>>#### 7. Monitor both paths
>>
>>Set up independent monitoring for each link, each BGP session, and each WAN circuit. See [Monitor](../3.9_monitor).
>>
>>### SD-WAN considerations
>>
>>If you use an SD-WAN overlay:
>>
>>- Configure OVHcloud Connect links as **underlay transports** in your SD-WAN controller.
>>- The SD-WAN platform can perform **path selection** based on latency, jitter, and packet loss — faster than BGP convergence.
>>- Ensure BGP and SD-WAN policies are **aligned** (avoid conflicting routing decisions).
>>
> AWS
>>### Prerequisites
>>
>>- An **AWS account** with a VPC configured
>>- An **OVHcloud account** with a vRack
>>- Two AWS Direct Connect connections at **different locations**
>>- Two OVHcloud Connect Provider services at **different PoPs**
>>- A shared provider (Megaport or Equinix) present at both locations
>>- Non-overlapping IP ranges between AWS VPC and OVHcloud subnets
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="800" height="310" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- AWS -->
>>  <rect x="15" y="60" width="160" height="190" rx="8" fill="#fff3e0" stroke="#ff9800" stroke-width="2"/>
>>  <text x="95" y="85" text-anchor="middle" font-weight="bold" fill="#e65100">AWS</text>
>>  <rect x="30" y="100" width="130" height="40" rx="4" fill="#fff" stroke="#ffcc80"/>
>>  <text x="95" y="125" text-anchor="middle" fill="#555" font-size="10">Direct Connect 1</text>
>>  <rect x="30" y="155" width="130" height="40" rx="4" fill="#fff" stroke="#ffcc80"/>
>>  <text x="95" y="180" text-anchor="middle" fill="#555" font-size="10">Direct Connect 2</text>
>>  <text x="95" y="230" text-anchor="middle" fill="#555" font-size="10">VPC: 10.1.0.0/16</text>
>>
>>  <!-- Provider -->
>>  <rect x="230" y="80" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider A</text>
>>  <text x="300" y="125" text-anchor="middle" fill="#555" font-size="10">VXC / MCR</text>
>>
>>  <rect x="230" y="170" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="195" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider B</text>
>>  <text x="300" y="215" text-anchor="middle" fill="#555" font-size="10">VXC / MCR</text>
>>
>>  <!-- OVHcloud -->
>>  <rect x="440" y="50" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="75" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="95" text-anchor="middle" fill="#2e7d32" font-size="10">PoP A / AZ 1</text>
>>
>>  <rect x="440" y="180" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="205" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="225" text-anchor="middle" fill="#2e7d32" font-size="10">PoP B / AZ 2</text>
>>
>>  <!-- vRack -->
>>  <rect x="620" y="100" width="150" height="110" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="695" y="130" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="695" y="150" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="695" y="170" text-anchor="middle" fill="#555" font-size="10">Servers / VMs</text>
>>  <text x="695" y="190" text-anchor="middle" fill="#555" font-size="10">Multi-AZ</text>
>>
>>  <!-- Arrows -->
>>  <line x1="160" y1="120" x2="230" y2="112" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t6)"/>
>>  <line x1="160" y1="175" x2="230" y2="202" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t6)"/>
>>  <line x1="370" y1="112" x2="440" y2="85" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t6)"/>
>>  <line x1="370" y1="202" x2="440" y2="215" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t6)"/>
>>  <line x1="570" y1="85" x2="620" y2="135" stroke="#555" stroke-width="1.5" marker-end="url(#t6)"/>
>>  <line x1="570" y1="215" x2="620" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#t6)"/>
>>
>>  <text x="80" y="40" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary path ───</text>
>>  <text x="260" y="40" text-anchor="middle" fill="#e65100" font-size="10">Backup path - - -</text>
>>
>>  <defs>
>>    <marker id="t6" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Resilience strategy
>>
>>For maximum availability between AWS and OVHcloud:
>>
>>1. **Two AWS Direct Connect connections** in different AWS Direct Connect locations.
>>2. **Two provider VXCs** (or separate providers) bridging to two OVHcloud PoPs.
>>3. **Two OVHcloud Connect services** at different PoPs, both associated with your vRack.
>>4. **BGP failover** configured across both paths.
>>
>>### Step-by-step
>>
>>#### 1. Order redundant AWS Direct Connect connections
>>
>>In the **AWS Console**, create two Direct Connect connections at **different locations**:
>>
>>- Connection 1: AWS Direct Connect location A
>>- Connection 2: AWS Direct Connect location B
>>
>>Create a **Private VIF** on each connection pointing to your VPC (via Virtual Private Gateway or Transit Gateway).
>>
>>> AWS recommends using **Transit Gateway** with multiple Direct Connect Gateways for resilient multi-region architectures.
>>
>>#### 2. Order two OVHcloud Connect Provider services
>>
>>Order at **two different OVHcloud PoPs**. Get two separate pairing keys. See [Order Provider](../3.2_order_provider).
>>
>>#### 3. Create redundant provider bridges
>>
>>On your provider platform:
>>
>>- **Bridge 1:** AWS Direct Connect 1 ↔ OVHcloud PoP A
>>- **Bridge 2:** AWS Direct Connect 2 ↔ OVHcloud PoP B
>>
>>If using MCR (Cloud Router), create separate MCR instances or peering sessions for each path.
>>
>>#### 4. Configure BGP failover
>>
>>Ensure BGP routing preferences are set so traffic prefers the primary path and falls back to the backup:
>>
>>- Use **Local Preference** on the OVHcloud side.
>>- Use **AS-path prepending** on the backup path.
>>- On AWS, use **Direct Connect Gateway** with appropriate route priorities.
>>
>>See [Configure OCC L3 with BGP](../3.7_occ_l3_bgp) for detailed instructions.
>>
>>#### 5. Associate both links with your vRack
>>
>>Associate both OVHcloud Connect services with the same vRack. See [Associate with vRack](../3.5_associate_vrack).
>>
>>#### 6. Test failover
>>
>>1. Verify both paths are active and passing traffic.
>>2. Disable the primary AWS Direct Connect VIF — confirm traffic flows via the backup.
>>3. Disable the primary OVHcloud Connect — confirm traffic flows via the backup.
>>4. Restore both and verify traffic returns to the preferred path.
>>
>>### Cost considerations
>>
>>Resilient AWS-to-OVHcloud requires:
>>- 2× AWS Direct Connect connections (AWS billing)
>>- 2× Provider VXCs or MCR sessions (provider billing)
>>- 2× OVHcloud Connect services (OVHcloud billing)
>>
>>Plan your budget accordingly. The cost of redundancy is typically justified by the risk reduction for production workloads.
>>
>> For more information, please consult [AWS Direct Connect documentation](https://docs.aws.amazon.com/directconnect/)
>>
> Azure
>>### Prerequisites
>>
>>- An **Azure subscription** with permissions to create ExpressRoute circuits
>>- An **OVHcloud account** with a vRack
>>- Two Azure ExpressRoute circuits at **different peering locations**
>>- Two OVHcloud Connect Provider services at **different PoPs**
>>- A shared provider (Megaport or Equinix) present at both locations
>>- A vRack with Multi-AZ enabled ([Multi-AZ guide](../1.5_multi_az))
>>- Non-overlapping IP ranges between Azure VNet and OVHcloud vRack
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="800" height="310" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- Azure -->
>>  <rect x="15" y="60" width="160" height="190" rx="8" fill="#e3f2fd" stroke="#0078d4" stroke-width="2"/>
>>  <text x="95" y="85" text-anchor="middle" font-weight="bold" fill="#0078d4">Azure</text>
>>  <rect x="30" y="100" width="130" height="40" rx="4" fill="#fff" stroke="#90caf9"/>
>>  <text x="95" y="125" text-anchor="middle" fill="#555" font-size="10">ExpressRoute 1</text>
>>  <rect x="30" y="155" width="130" height="40" rx="4" fill="#fff" stroke="#90caf9"/>
>>  <text x="95" y="180" text-anchor="middle" fill="#555" font-size="10">ExpressRoute 2</text>
>>  <text x="95" y="230" text-anchor="middle" fill="#555" font-size="10">VNet: 10.2.0.0/16</text>
>>
>>  <!-- Provider A -->
>>  <rect x="230" y="80" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider A</text>
>>  <text x="300" y="125" text-anchor="middle" fill="#555" font-size="10">Location 1</text>
>>
>>  <!-- Provider B -->
>>  <rect x="230" y="170" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="195" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider B</text>
>>  <text x="300" y="215" text-anchor="middle" fill="#555" font-size="10">Location 2</text>
>>
>>  <!-- OVHcloud PoP A -->
>>  <rect x="440" y="50" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="75" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="95" text-anchor="middle" fill="#2e7d32" font-size="10">PoP A / AZ 1</text>
>>
>>  <!-- OVHcloud PoP B -->
>>  <rect x="440" y="180" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="205" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="225" text-anchor="middle" fill="#2e7d32" font-size="10">PoP B / AZ 2</text>
>>
>>  <!-- vRack -->
>>  <rect x="630" y="100" width="150" height="110" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="705" y="130" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="705" y="150" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="705" y="170" text-anchor="middle" fill="#555" font-size="10">Multi-AZ Servers</text>
>>  <text x="705" y="190" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>
>>
>>  <!-- Arrows -->
>>  <line x1="160" y1="120" x2="230" y2="112" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t8)"/>
>>  <line x1="160" y1="175" x2="230" y2="202" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t8)"/>
>>  <line x1="370" y1="112" x2="440" y2="85" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t8)"/>
>>  <line x1="370" y1="202" x2="440" y2="215" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t8)"/>
>>  <line x1="570" y1="85" x2="630" y2="140" stroke="#555" stroke-width="1.5" marker-end="url(#t8)"/>
>>  <line x1="570" y1="215" x2="630" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#t8)"/>
>>
>>  <text x="80" y="40" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary ───</text>
>>  <text x="230" y="40" text-anchor="middle" fill="#e65100" font-size="10">Backup - - -</text>
>>
>>  <defs>
>>    <marker id="t8" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Resilience strategy
>>
>>Microsoft recommends **two ExpressRoute circuits in different peering locations** for maximum availability. Combined with two OVHcloud Connect Provider services at different PoPs, this provides end-to-end redundancy:
>>
>>| Component | Primary | Backup |
>>|---|---|---|
>>| Azure ExpressRoute | Circuit 1 (Location A) | Circuit 2 (Location B) |
>>| Provider VXC | VXC set 1 | VXC set 2 |
>>| OVHcloud Connect | Service 1 (PoP A) | Service 2 (PoP B) |
>>| OVHcloud AZ | AZ 1 | AZ 2 |
>>
>>### Step-by-step
>>
>>#### 1. Create two ExpressRoute circuits
>>
>>In the **Azure Portal** → **Create ExpressRoute** (repeat for each circuit):
>>
>>| Setting | Circuit 1 | Circuit 2 |
>>|---|---|---|
>>| Provider | Megaport (or Equinix) | Megaport (or Equinix) |
>>| Peering location | Location A (e.g., Paris) | Location B (e.g., Frankfurt) |
>>| Bandwidth | 1 Gbps | 1 Gbps |
>>| SKU | Standard or Premium | Standard or Premium |
>>
>>Note each circuit's **Service Key**.
>>
>>> **Tip:** Use **ExpressRoute Premium** if your VNets are in different Azure regions than the peering locations.
>>
>>#### 2. Order two OVHcloud Connect Provider services
>>
>>[Order two OVHcloud Connect Provider services](../3.2_order_provider) at different PoPs that correspond to the ExpressRoute peering locations:
>>
>>- OVHcloud Connect 1 → PoP A
>>- OVHcloud Connect 2 → PoP B
>>
>>Retrieve both **pairing keys**.
>>
>>#### 3. Create provider bridges for each path
>>
>>**Path 1 (Primary):**
>>
>>1. Create MCR or port at Location A.
>>2. VXC: Azure ExpressRoute 1 (Service Key 1) → MCR A.
>>3. VXC: MCR A → OVHcloud Connect 1 (Pairing Key 1).
>>
>>**Path 2 (Backup):**
>>
>>1. Create MCR or port at Location B.
>>2. VXC: Azure ExpressRoute 2 (Service Key 2) → MCR B.
>>3. VXC: MCR B → OVHcloud Connect 2 (Pairing Key 2).
>>
>>#### 4. Configure Azure Private Peering on both circuits
>>
>>For each ExpressRoute circuit, configure **Azure Private Peering**:
>>
>>| Parameter | Circuit 1 | Circuit 2 |
>>|---|---|---|
>>| Peer ASN | Provider ASN | Provider ASN |
>>| Primary /30 | 169.254.100.0/30 | 169.254.101.0/30 |
>>| Secondary /30 | 169.254.100.4/30 | 169.254.101.4/30 |
>>| VLAN ID | Assigned by provider | Assigned by provider |
>>
>>#### 5. Link both circuits to your VNet
>>
>>In Azure:
>>
>>1. Go to **Virtual Network Gateways** → **Connections**.
>>2. Add Connection 1 → ExpressRoute Circuit 1 (weight: **100**).
>>3. Add Connection 2 → ExpressRoute Circuit 2 (weight: **50** — lower = backup).
>>
>>Azure uses **connection weight** to prefer one path over the other.
>>
>>#### 6. Configure OVHcloud BGP with failover
>>
>>On the OVHcloud side, use [Configure OCC L3 with BGP](../3.7_occ_l3_bgp) to prefer the primary path:
>>
>>| Path | Local Preference | AS-path prepend |
>>|---|---|---|
>>| OVHcloud Connect 1 (primary) | 200 | None |
>>| OVHcloud Connect 2 (backup) | 100 | 1× prepend |
>>
>>#### 7. Associate both services with your vRack
>>
>>[Associate both OVHcloud Connect services](../3.5_associate_vrack) with the same vRack. Both will inject routes; the vRack will use the higher Local Preference path.
>>
>>#### 8. Test failover
>>
>>| Test | Action | Expected result |
>>|---|---|---|
>>| Primary link failure | Disable ExpressRoute 1 VIF in Azure | Traffic shifts to ExpressRoute 2 within BGP convergence time |
>>| Primary OCC failure | Disable OVHcloud Connect 1 | Traffic shifts to OVHcloud Connect 2 |
>>| Provider failure | Take down MCR A VXCs | Traffic shifts to MCR B path |
>>| Full recovery | Re-enable all links | Traffic returns to primary path |
>>
>>> **Convergence time:** BGP failover typically completes in **30–90 seconds** depending on hold timers and BFD configuration.
>>
>>### Azure-specific considerations
>>
>>- **ExpressRoute Global Reach**: If both OVHcloud PoPs are in different Azure regions, consider enabling [Global Reach](https://learn.microsoft.com/en-us/azure/expressroute/expressroute-global-reach) for direct circuit-to-circuit communication.
>>- **FastPath**: For Ultra Performance or ErGw3AZ gateways, enable [FastPath](https://learn.microsoft.com/en-us/azure/expressroute/about-fastpath) for improved network performance.
>>- **Route limits**: Azure Private Peering supports up to **4,000 routes** per circuit. Aggregate OVHcloud prefixes to stay within limits.
>>
>> For more information, please consult [Azure ExpressRoute documentation](https://learn.microsoft.com/en-us/azure/expressroute/)
>>
> GCP
>>### Prerequisites
>>
>>- A **GCP project** with the Compute Network Admin role
>>- Two Cloud Routers (one per region or availability domain)
>>- An **OVHcloud account** with a vRack
>>- Two OVHcloud Connect Provider services at **different PoPs**
>>- A shared provider (Megaport or Equinix) at both locations
>>- A vRack with Multi-AZ enabled
>>- **Non-overlapping IP ranges** between GCP VPC and OVHcloud vRack
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="800" height="310" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- GCP -->
>>  <rect x="15" y="60" width="160" height="190" rx="8" fill="#e8eaf6" stroke="#4285f4" stroke-width="2"/>
>>  <text x="95" y="85" text-anchor="middle" font-weight="bold" fill="#4285f4">Google Cloud</text>
>>  <rect x="30" y="100" width="130" height="40" rx="4" fill="#fff" stroke="#c5cae9"/>
>>  <text x="95" y="125" text-anchor="middle" fill="#555" font-size="10">Interconnect 1</text>
>>  <rect x="30" y="155" width="130" height="40" rx="4" fill="#fff" stroke="#c5cae9"/>
>>  <text x="95" y="180" text-anchor="middle" fill="#555" font-size="10">Interconnect 2</text>
>>  <text x="95" y="230" text-anchor="middle" fill="#555" font-size="10">VPC: 10.3.0.0/16</text>
>>
>>  <!-- Provider A -->
>>  <rect x="230" y="80" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider A</text>
>>  <text x="300" y="125" text-anchor="middle" fill="#555" font-size="10">Edge domain 1</text>
>>
>>  <!-- Provider B -->
>>  <rect x="230" y="170" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="195" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider B</text>
>>  <text x="300" y="215" text-anchor="middle" fill="#555" font-size="10">Edge domain 2</text>
>>
>>  <!-- OVHcloud PoP A -->
>>  <rect x="440" y="50" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="75" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="95" text-anchor="middle" fill="#2e7d32" font-size="10">PoP A / AZ 1</text>
>>
>>  <!-- OVHcloud PoP B -->
>>  <rect x="440" y="180" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="205" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="225" text-anchor="middle" fill="#2e7d32" font-size="10">PoP B / AZ 2</text>
>>
>>  <!-- vRack -->
>>  <rect x="630" y="100" width="150" height="110" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="705" y="130" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="705" y="150" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="705" y="170" text-anchor="middle" fill="#555" font-size="10">Multi-AZ Servers</text>
>>  <text x="705" y="190" text-anchor="middle" fill="#555" font-size="10">Cloud Instances</text>
>>
>>  <!-- Arrows -->
>>  <line x1="160" y1="120" x2="230" y2="112" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t10)"/>
>>  <line x1="160" y1="175" x2="230" y2="202" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t10)"/>
>>  <line x1="370" y1="112" x2="440" y2="85" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t10)"/>
>>  <line x1="370" y1="202" x2="440" y2="215" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t10)"/>
>>  <line x1="570" y1="85" x2="630" y2="140" stroke="#555" stroke-width="1.5" marker-end="url(#t10)"/>
>>  <line x1="570" y1="215" x2="630" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#t10)"/>
>>
>>  <text x="80" y="40" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary ───</text>
>>  <text x="230" y="40" text-anchor="middle" fill="#e65100" font-size="10">Backup - - -</text>
>>
>>  <defs>
>>    <marker id="t10" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Resilience strategy
>>
>>Google Cloud recommends using VLAN attachments in **different edge availability domains** to achieve 99.9%–99.99% SLA. Combined with dual OVHcloud Connect links, you get full end-to-end resilience:
>>
>>| Component | Primary | Backup |
>>|---|---|---|
>>| GCP VLAN attachment | Edge domain zone1 | Edge domain zone2 |
>>| Provider VXC | VXC set 1 | VXC set 2 |
>>| OVHcloud Connect | Service 1 (PoP A) | Service 2 (PoP B) |
>>| OVHcloud AZ | AZ 1 | AZ 2 |
>>
>>##### GCP SLA tiers
>>
>>| Configuration | GCP SLA |
>>|---|---|
>>| Single VLAN attachment | No SLA |
>>| Two attachments in different edge domains, same metro | 99.9% |
>>| Four attachments in two different metros | 99.99% |
>>
>>### Step-by-step
>>
>>#### 1. Create two Cloud Routers
>>
>>Create a Cloud Router in each region or for each edge availability domain:
>>
>>| Router | Region | ASN |
>>|---|---|---|
>>| `router-ovhcloud-1` | `europe-west1` | 16550 (default) |
>>| `router-ovhcloud-2` | `europe-west3` | 16550 (default) |
>>
>>#### 2. Create two VLAN attachments
>>
>>For each Cloud Router, create a **Partner Interconnect VLAN attachment**:
>>
>>| Attachment | Cloud Router | Edge availability domain |
>>|---|---|---|
>>| `attachment-1` | `router-ovhcloud-1` | `zone1` |
>>| `attachment-2` | `router-ovhcloud-2` | `zone2` |
>>
>>Note both **GCP pairing keys**.
>>
>>#### 3. Order two OVHcloud Connect Provider services
>>
>>[Order two OVHcloud Connect Provider services](../3.2_order_provider) at different PoPs:
>>
>>- OVHcloud Connect 1 → PoP A
>>- OVHcloud Connect 2 → PoP B
>>
>>Retrieve both **OVHcloud pairing keys**.
>>
>>#### 4. Create provider bridges for each path
>>
>>**Path 1 (Primary):**
>>
>>1. MCR or port at Location A.
>>2. VXC: GCP Partner Interconnect (GCP pairing key 1) → MCR A.
>>3. VXC: MCR A → OVHcloud Connect 1 (OVHcloud pairing key 1).
>>
>>**Path 2 (Backup):**
>>
>>1. MCR or port at Location B.
>>2. VXC: GCP Partner Interconnect (GCP pairing key 2) → MCR B.
>>3. VXC: MCR B → OVHcloud Connect 2 (OVHcloud pairing key 2).
>>
>>#### 5. Activate both GCP VLAN attachments
>>
>>In the GCP Console:
>>
>>1. Go to **Hybrid Connectivity** → **VLAN attachments**.
>>2. For each attachment: click **Activate** once it shows "Pending customer".
>>3. Verify BGP sessions are established in both Cloud Routers.
>>
>>#### 6. Configure BGP failover
>>
>>**GCP side:**
>>
>>GCP Cloud Router uses **MED (Multi-Exit Discriminator)** to influence path selection. Set different MED values:
>>
>>| Attachment | Advertised MED |
>>|---|---|
>>| `attachment-1` (primary) | 100 (lower = preferred) |
>>| `attachment-2` (backup) | 200 |
>>
>>You can configure MED via custom route advertisements in the Cloud Router BGP peer settings.
>>
>>**OVHcloud side:**
>>
>>Use [Configure OCC L3 with BGP](../3.7_occ_l3_bgp):
>>
>>| Path | Local Preference | AS-path prepend |
>>|---|---|---|
>>| OVHcloud Connect 1 (primary) | 200 | None |
>>| OVHcloud Connect 2 (backup) | 100 | 1× prepend |
>>
>>#### 7. Associate both services with your vRack
>>
>>[Associate both OVHcloud Connect services](../3.5_associate_vrack) with the same vRack.
>>
>>#### 8. Test failover
>>
>>| Test | Action | Expected result |
>>|---|---|---|
>>| GCP link failure | Disable VLAN attachment 1 | Traffic shifts to attachment 2 |
>>| OCC link failure | Disable OVHcloud Connect 1 | Traffic shifts to OVHcloud Connect 2 |
>>| Provider failure | Take down MCR A | Traffic shifts to MCR B path |
>>| Full recovery | Re-enable all | Traffic returns to primary |
>>
>>### GCP-specific considerations
>>
>>- **Custom route advertisements**: Use Cloud Router custom route advertisements to control which subnets are announced to OVHcloud. Avoid advertising the entire VPC if only specific subnets are needed.
>>- **Dataplane v2**: If using GKE with Dataplane v2, ensure Pod CIDR ranges are included in route advertisements if GKE pods need to communicate with OVHcloud.
>>- **Shared VPC**: If using Shared VPC, create the Interconnect in the host project and share with service projects.
>>- **MTU**: GCP Interconnect supports **1440 MTU** for Partner Interconnect. Ensure OVHcloud Connect and provider VXCs use matching MTU settings.
>>
>> For more information, please consult [GCP Interconnect documentation](https://cloud.google.com/network-connectivity/docs/interconnect) and [GCP Cloud Router documentation](https://cloud.google.com/network-connectivity/docs/router)

### What's next?

- [Simple architecture](../4.1_simple) for non-critical use cases
- [Monitor your connections](../3.9_monitor)
- [Multi-AZ configuration](../1.5_multi_az) for OVHcloud side resilience

### Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
