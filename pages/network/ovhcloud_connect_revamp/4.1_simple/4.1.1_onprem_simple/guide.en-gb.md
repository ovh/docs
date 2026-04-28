# Connect My On-Premises to OVHcloud — Simple Connection

This tutorial guides you through connecting a single on-premises site to OVHcloud using **one OVHcloud Connect link**. This is the simplest architecture, suitable when you need private connectivity but can accept a single path (no built-in redundancy).

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 200" font-family="Arial, sans-serif" font-size="12">
  <rect width="750" height="200" fill="#f8f9fa" rx="8"/>

  <!-- On-Premises -->
  <rect x="20" y="50" width="180" height="100" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
  <text x="110" y="80" text-anchor="middle" font-weight="bold" fill="#1565c0">On-Premises</text>
  <text x="110" y="100" text-anchor="middle" fill="#555" font-size="10">Your data centre</text>
  <text x="110" y="118" text-anchor="middle" fill="#555" font-size="10">Router + BGP</text>
  <text x="110" y="136" text-anchor="middle" fill="#555" font-size="10">10.0.0.0/16</text>

  <!-- PoP -->
  <rect x="270" y="60" width="140" height="80" rx="8" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="340" y="90" text-anchor="middle" font-weight="bold" fill="#e65100">PoP</text>
  <text x="340" y="110" text-anchor="middle" fill="#555" font-size="10">Cross-connect</text>
  <text x="340" y="126" text-anchor="middle" fill="#555" font-size="10">BGP peering</text>

  <!-- OVHcloud -->
  <rect x="480" y="40" width="240" height="120" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="600" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
  <text x="600" y="92" text-anchor="middle" fill="#555" font-size="10">vRack</text>
  <text x="600" y="110" text-anchor="middle" fill="#555" font-size="10">Servers / VMs</text>
  <text x="600" y="128" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>

  <!-- Arrows -->
  <line x1="200" y1="100" x2="270" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t1)"/>
  <line x1="410" y1="100" x2="480" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t1)"/>
  <text x="235" y="90" text-anchor="middle" fill="#555" font-size="10">1 Gbps or</text>
  <text x="235" y="120" text-anchor="middle" fill="#555" font-size="10">10 Gbps</text>

  <defs>
    <marker id="t1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## When to use this architecture

| ✅ Good for | ❌ Not recommended for |
|---|---|
| Development and test environments | Business-critical production workloads |
| Non-critical production workloads | Regulated / compliance-heavy environments |
| Proof of concept or pilot projects | Applications requiring 99.99% uptime |
| Small offices with a single site | Multi-site organisations needing failover |

## Prerequisites

- An OVHcloud account with a vRack
- A router in a data centre with OVHcloud PoP presence (for Direct) or a provider account (for Provider)
- BGP-capable network equipment
- An IP addressing plan with no overlaps between your network and OVHcloud subnets

## Step-by-step

### 1. Order OVHcloud Connect

Choose **Direct** or **Provider** depending on your situation:

- **Direct** — You have equipment in the same data centre as an OVHcloud PoP. See [Order Direct](../../3.1_order_direct/guide.en-gb.md).
- **Provider** — You prefer a managed connection. See [Order Provider](../../3.2_order_provider/guide.en-gb.md).

### 2. Install the physical connection

- **Direct:** Provide the LOA to the data centre operator to install a cross-connect. See [Cross Connect LOA](../../3.11_cross_connect_loa/guide.en-gb.md).
- **Provider:** Share the pairing key with your provider and wait for activation.

### 3. Configure BGP

Set up a single BGP session between your on-premises router and OVHcloud:

- Advertise your on-premises prefixes (e.g. `10.0.0.0/16`) to OVHcloud.
- Accept OVHcloud prefixes (e.g. `172.16.0.0/16`) from OVHcloud.

See [Configure OCC L3 with BGP](../../3.7_occ_l3_bgp/guide.en-gb.md) for detailed instructions and configuration examples.

### 4. Associate with vRack

Link your OVHcloud Connect service to your vRack. See [Associate with vRack](../../3.5_associate_vrack/guide.en-gb.md).

### 5. Configure AZ subnets

Define the private subnets in OVHcloud that your on-premises network should reach. See [Set up your vRack network](../../3.6_vrack_network_setup/guide.en-gb.md).

### 6. Test connectivity

| Test | Command |
|---|---|
| Ping from on-prem to OVHcloud VM | `ping 172.16.1.10` |
| Ping from OVHcloud VM to on-prem | `ping 10.0.0.1` |
| Traceroute | `traceroute 172.16.1.10` (should not go via internet) |
| BGP verification | `show ip bgp summary` |

### 7. Set up monitoring

Configure monitoring alerts for link status, BGP session, and bandwidth. See [Monitor](../../3.9_monitor/guide.en-gb.md).

## Limitations of a simple connection

- **Single point of failure** — If the link, PoP, or cross-connect fails, connectivity is lost.
- **No automatic failover** — You need to manually intervene or rely on internet-based backup.
- **Lower SLA** — A single connection typically supports up to 99.9% SLA (see [SLAs](../../1.7_slas/guide.en-gb.md)).

> **Recommendation:** For production workloads, consider upgrading to a [resilient architecture](../../4.2_resilient/4.1.2_onprem_resilient/guide.en-gb.md).

## What's next?

- [Resilient On-Prem architecture](../../4.2_resilient/4.1.2_onprem_resilient/guide.en-gb.md) for high availability
- [Monitor your connection](../../3.9_monitor/guide.en-gb.md)
