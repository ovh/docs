# Multi-AZ

**Multi-AZ (Multiple Availability Zones)** is an architecture strategy where your resources and network connections are distributed across two or more physically separated data centres (Availability Zones) within a region. This protects against the failure of a single site.

## Why Multi-AZ matters for OVHcloud Connect

A single OVHcloud Connect link through a single PoP is a **single point of failure**. If that PoP, the cross-connect, or the physical link experiences an outage, your private connectivity is lost.

Multi-AZ designs address this by establishing **redundant connections through different PoPs or Availability Zones**, so that traffic can automatically reroute if one path fails.

## Single vs. Multi-AZ comparison

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 380" font-family="Arial, sans-serif" font-size="12">
  <rect width="800" height="380" fill="#f8f9fa" rx="8"/>

  <!-- Title: Single AZ -->
  <text x="200" y="30" text-anchor="middle" font-weight="bold" font-size="14" fill="#c62828">Single AZ (not resilient)</text>

  <!-- Your Network (Single) -->
  <rect x="30" y="50" width="130" height="60" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="95" y="75" text-anchor="middle" font-weight="bold" fill="#1565c0">Your</text>
  <text x="95" y="92" text-anchor="middle" font-weight="bold" fill="#1565c0">Network</text>

  <!-- PoP A (Single) -->
  <rect x="210" y="50" width="100" height="60" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="260" y="85" text-anchor="middle" fill="#e65100" font-weight="bold">PoP A</text>

  <!-- OVHcloud (Single) -->
  <rect x="360" y="50" width="130" height="60" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="425" y="85" text-anchor="middle" fill="#2e7d32" font-weight="bold">OVHcloud AZ 1</text>

  <line x1="160" y1="80" x2="210" y2="80" stroke="#555" stroke-width="2" marker-end="url(#ar2)"/>
  <line x1="310" y1="80" x2="360" y2="80" stroke="#555" stroke-width="2" marker-end="url(#ar2)"/>

  <!-- X mark -->
  <text x="260" y="135" text-anchor="middle" fill="#c62828" font-size="11">⚠ Single point of failure</text>

  <!-- Title: Multi-AZ -->
  <text x="200" y="185" text-anchor="middle" font-weight="bold" font-size="14" fill="#2e7d32">Multi-AZ (resilient)</text>

  <!-- Your Network (Multi) -->
  <rect x="30" y="210" width="130" height="120" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="95" y="260" text-anchor="middle" font-weight="bold" fill="#1565c0">Your</text>
  <text x="95" y="278" text-anchor="middle" font-weight="bold" fill="#1565c0">Network</text>

  <!-- PoP A -->
  <rect x="210" y="210" width="100" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="260" y="240" text-anchor="middle" fill="#e65100" font-weight="bold">PoP A</text>

  <!-- PoP B -->
  <rect x="210" y="280" width="100" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="260" y="310" text-anchor="middle" fill="#e65100" font-weight="bold">PoP B</text>

  <!-- OVHcloud AZ1 -->
  <rect x="360" y="210" width="130" height="50" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="425" y="240" text-anchor="middle" fill="#2e7d32" font-weight="bold">OVHcloud AZ 1</text>

  <!-- OVHcloud AZ2 -->
  <rect x="360" y="280" width="130" height="50" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="425" y="310" text-anchor="middle" fill="#2e7d32" font-weight="bold">OVHcloud AZ 2</text>

  <!-- Arrows -->
  <line x1="160" y1="248" x2="210" y2="235" stroke="#555" stroke-width="2" marker-end="url(#ar2)"/>
  <line x1="160" y1="282" x2="210" y2="305" stroke="#555" stroke-width="2" marker-end="url(#ar2)"/>
  <line x1="310" y1="235" x2="360" y2="235" stroke="#555" stroke-width="2" marker-end="url(#ar2)"/>
  <line x1="310" y1="305" x2="360" y2="305" stroke="#555" stroke-width="2" marker-end="url(#ar2)"/>

  <!-- Check mark -->
  <text x="260" y="355" text-anchor="middle" fill="#2e7d32" font-size="11">✓ If one path fails, the other takes over</text>

  <defs>
    <marker id="ar2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## How Multi-AZ works with OVHcloud Connect

1. **Order two OVHcloud Connect services** terminating at **different PoPs** (or at least different physical paths).
2. **Configure BGP on both links** with appropriate route priorities (using BGP attributes like Local Preference, MED, or AS-path prepending) so that traffic prefers one path but can fall back to the other.
3. **Distribute your OVHcloud resources** across multiple Availability Zones within the same region.
4. **Test failover** by simulating a link outage and verifying that traffic switches to the backup path.

## Recommended Multi-AZ topologies

| Topology | Description | Typical SLA |
|---|---|---|
| **Active/Standby** | One link carries all traffic; the second activates only when the primary fails. Simple to manage. | 99.9%+ |
| **Active/Active** | Both links carry traffic simultaneously and share the load. BGP routing balances traffic. Higher throughput and faster failover. | 99.99%+ |

## Multi-AZ and BGP configuration

For automatic failover, your BGP configuration must distinguish between the primary and backup paths. Common approaches:

- **Local Preference** — Set a higher Local Preference on routes learned from the primary link.
- **AS-path prepending** — Make the backup path's AS-path longer so it is less preferred.
- **MED (Multi-Exit Discriminator)** — Use MED values to influence inbound routing from OVHcloud.

See [Define your PoP configuration (BGP session)](3.5_define_pop_bgp.md) for detailed configuration guidance.

## When to use Multi-AZ

| Scenario | Recommendation |
|---|---|
| Test / development workloads | Single connection is usually sufficient |
| Non-critical production | Single connection with monitoring |
| Business-critical production | **Multi-AZ strongly recommended** |
| Regulated / compliance workloads | **Multi-AZ required** |

## What's next?

- Learn about [SLAs](1.7_slas.md) and how Multi-AZ affects your uptime guarantees
- See the [AZ configuration guide](3.6_define_az_subnets.md) to set up subnets across zones
- Explore [resilient architecture tutorials](4.1.2_onprem_resilient.md) for step-by-step examples
