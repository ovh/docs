# Connect My On-Premises to OVHcloud — Resilient Architecture

This tutorial guides you through connecting your on-premises infrastructure to OVHcloud using **two independent OVHcloud Connect links** for high availability. If one link fails, traffic automatically switches to the other.

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" font-family="Arial, sans-serif" font-size="12">
  <rect width="800" height="300" fill="#f8f9fa" rx="8"/>

  <!-- On-Premises -->
  <rect x="20" y="70" width="180" height="160" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
  <text x="110" y="100" text-anchor="middle" font-weight="bold" fill="#1565c0">On-Premises</text>
  <text x="110" y="125" text-anchor="middle" fill="#555" font-size="10">Router 1</text>
  <text x="110" y="145" text-anchor="middle" fill="#555" font-size="10">(or dual-homed router)</text>
  <text x="110" y="175" text-anchor="middle" fill="#555" font-size="10">ASN: 65001</text>
  <text x="110" y="195" text-anchor="middle" fill="#555" font-size="10">10.0.0.0/16</text>

  <!-- PoP A -->
  <rect x="280" y="40" width="140" height="70" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="350" y="65" text-anchor="middle" font-weight="bold" fill="#e65100">PoP A</text>
  <text x="350" y="85" text-anchor="middle" fill="#555" font-size="10">Primary link</text>

  <!-- PoP B -->
  <rect x="280" y="180" width="140" height="70" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="350" y="205" text-anchor="middle" font-weight="bold" fill="#e65100">PoP B</text>
  <text x="350" y="225" text-anchor="middle" fill="#555" font-size="10">Backup link</text>

  <!-- OVHcloud AZ 1 -->
  <rect x="500" y="30" width="260" height="90" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="630" y="55" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 1</text>
  <text x="630" y="78" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · VMs</text>
  <text x="630" y="98" text-anchor="middle" fill="#555" font-size="10">172.16.1.0/24</text>

  <!-- OVHcloud AZ 2 -->
  <rect x="500" y="170" width="260" height="90" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="630" y="195" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 2</text>
  <text x="630" y="218" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · VMs</text>
  <text x="630" y="238" text-anchor="middle" fill="#555" font-size="10">172.16.2.0/24</text>

  <!-- Arrows -->
  <line x1="200" y1="120" x2="280" y2="75" stroke="#2e7d32" stroke-width="2" marker-end="url(#t2)"/>
  <line x1="200" y1="180" x2="280" y2="215" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t2)"/>
  <line x1="420" y1="75" x2="500" y2="75" stroke="#2e7d32" stroke-width="2" marker-end="url(#t2)"/>
  <line x1="420" y1="215" x2="500" y2="215" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t2)"/>

  <!-- Labels -->
  <text x="240" y="85" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary</text>
  <text x="240" y="210" text-anchor="middle" fill="#e65100" font-size="10">Backup</text>

  <defs>
    <marker id="t2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## When to use this architecture

| ✅ Recommended for | Details |
|---|---|
| Business-critical production | Workloads that cannot tolerate downtime |
| Regulated environments | Compliance frameworks requiring high availability |
| SLA requirements ≥ 99.99% | Multi-path architecture needed for premium SLA |
| Disaster recovery | Automatic failover without manual intervention |

## Prerequisites

- Two OVHcloud Connect services (Direct, Provider, or a mix) terminating at **different PoPs**
- A router (or two routers) capable of running **multiple BGP sessions** with failover
- An IP plan covering **two AZs** in OVHcloud
- A vRack with resources in both AZs

## Step-by-step

### 1. Order two OVHcloud Connect links

Order two separate OVHcloud Connect services at **different PoPs** for physical diversity:

- **Link 1 (Primary):** Order at PoP A — See [Order Direct](../../3.1_order_direct/guide.en-gb.md) or [Order Provider](../../3.2_order_provider/guide.en-gb.md).
- **Link 2 (Backup):** Order at PoP B — Same process, different PoP.

> **Diversity tip:** Use different data centres or at minimum different physical paths to avoid a shared failure point.

### 2. Install both physical connections

For each link:
- **Direct:** Install cross-connects at each PoP. See [Cross Connect LOA](../../3.11_cross_connect_loa/guide.en-gb.md).
- **Provider:** Share the respective pairing keys with your provider(s).

### 3. Configure BGP with failover

Set up **two BGP sessions** — one per link — with routing policies that define which path is preferred.

#### Active/Standby example (Cisco IOS)

```
router bgp 65001
 ! Primary link via PoP A
 neighbor 192.0.2.1 remote-as 35540
 neighbor 192.0.2.1 description OVHcloud-Primary
 neighbor 192.0.2.1 route-map PRIMARY-IN in
 neighbor 192.0.2.1 route-map PRIMARY-OUT out

 ! Backup link via PoP B
 neighbor 198.51.100.1 remote-as 35540
 neighbor 198.51.100.1 description OVHcloud-Backup
 neighbor 198.51.100.1 route-map BACKUP-IN in
 neighbor 198.51.100.1 route-map BACKUP-OUT out

! Prefer primary path using Local Preference
route-map PRIMARY-IN permit 10
 set local-preference 200

route-map BACKUP-IN permit 10
 set local-preference 100

! Influence OVHcloud's return traffic using AS-path prepending on backup
route-map PRIMARY-OUT permit 10

route-map BACKUP-OUT permit 10
 set as-path prepend 65001 65001
```

#### Key BGP attributes for failover

| Attribute | Effect | Use case |
|---|---|---|
| **Local Preference** | Controls outbound path preference (higher = preferred) | Make primary path preferred for traffic leaving your network |
| **AS-path prepending** | Makes a path look longer (less preferred) | Influence OVHcloud's choice of return path |
| **MED** | Suggests preference to the remote side | May not be honoured in all OVHcloud configurations |

### 4. Associate both links with your vRack

Associate both OVHcloud Connect services with the **same vRack**. See [Associate with vRack](../../3.5_associate_vrack/guide.en-gb.md).

### 5. Configure subnets in both AZs

Set up private subnets in both Availability Zones. See [Set up your vRack network](../../3.6_vrack_network_setup/guide.en-gb.md).

### 6. Test failover

**This is critical.** Do not skip failover testing.

1. **Verify normal operation:**
   - Both BGP sessions are Established.
   - Traffic flows through the primary link.

2. **Simulate primary failure:**
   - Shut down the primary BGP session or physically disconnect the primary link.
   - Verify traffic switches to the backup link within the BGP convergence time (typically 30–90 seconds; can be faster with BFD).
   - Confirm no packet loss beyond the convergence window.

3. **Restore primary:**
   - Bring the primary link back up.
   - Verify traffic returns to the primary path.

4. **Test the reverse:**
   - Simulate failure of the backup link while the primary is up. This confirms both links work independently.

### 7. Set up monitoring

Monitor **both links** independently. Set alerts for:
- BGP session drops on either link
- Traffic imbalance (all traffic on one link may indicate a failure on the other)
- Bandwidth approaching capacity on either link

See [Monitor](../../3.9_monitor/guide.en-gb.md).

## Advanced: Active/Active configuration

For maximum throughput and faster failover, you can run both links in **Active/Active** mode:

- Set **equal Local Preference** on both paths.
- Use **ECMP (Equal-Cost Multi-Path)** if supported.
- Traffic is load-balanced across both links.
- If one link fails, all traffic immediately flows through the surviving link.

> Active/Active provides higher aggregate bandwidth but requires careful capacity planning — each link must be able to handle the full traffic load alone during a failure.

## What's next?

- [Monitor your connections](../../3.9_monitor/guide.en-gb.md)
- Learn about [Multi-AZ architecture](../../1.5_multi_az/guide.en-gb.md)
- Explore cloud interconnection: [AWS](../../4.1_simple/4.3.1_aws_simple/guide.en-gb.md) · [Azure](../../4.1_simple/4.4.1_azure_simple/guide.en-gb.md) · [GCP](../../4.1_simple/4.5.1_gcp_simple/guide.en-gb.md)
