# Connect My WAN to OVHcloud — Simple Connection

This tutorial explains how to connect your **Wide Area Network (WAN)** to OVHcloud using a single OVHcloud Connect link. This is ideal for organisations that use a managed WAN (MPLS, SD-WAN) and want to extend it to OVHcloud.

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" font-family="Arial, sans-serif" font-size="12">
  <rect width="800" height="200" fill="#f8f9fa" rx="8"/>

  <!-- Branch offices -->
  <rect x="20" y="30" width="140" height="140" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
  <text x="90" y="55" text-anchor="middle" font-weight="bold" fill="#1565c0">Branch Offices</text>
  <text x="90" y="80" text-anchor="middle" fill="#555" font-size="10">Office A</text>
  <text x="90" y="100" text-anchor="middle" fill="#555" font-size="10">Office B</text>
  <text x="90" y="120" text-anchor="middle" fill="#555" font-size="10">Office C</text>
  <text x="90" y="145" text-anchor="middle" fill="#555" font-size="10">10.x.x.x/16</text>

  <!-- WAN -->
  <rect x="210" y="50" width="150" height="100" rx="8" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="285" y="80" text-anchor="middle" font-weight="bold" fill="#6a1b9a">WAN / SD-WAN</text>
  <text x="285" y="100" text-anchor="middle" fill="#555" font-size="10">MPLS backbone</text>
  <text x="285" y="118" text-anchor="middle" fill="#555" font-size="10">or SD-WAN fabric</text>

  <!-- PoP -->
  <rect x="410" y="55" width="110" height="90" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="465" y="85" text-anchor="middle" font-weight="bold" fill="#e65100">PoP</text>
  <text x="465" y="105" text-anchor="middle" fill="#555" font-size="10">BGP session</text>
  <text x="465" y="120" text-anchor="middle" fill="#555" font-size="10">VLAN</text>

  <!-- OVHcloud -->
  <rect x="570" y="40" width="200" height="120" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="670" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
  <text x="670" y="95" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · VMs</text>
  <text x="670" y="115" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>

  <!-- Arrows -->
  <line x1="160" y1="100" x2="210" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#t3)"/>
  <line x1="360" y1="100" x2="410" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#t3)"/>
  <line x1="520" y1="100" x2="570" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#t3)"/>

  <defs>
    <marker id="t3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## How it differs from on-premises

In a WAN scenario, your traffic typically originates from **multiple branch offices** or sites and is aggregated through a WAN backbone (MPLS or SD-WAN) before reaching the OVHcloud PoP. The WAN edge device (router or SD-WAN gateway) is the equipment that peers with OVHcloud via BGP.

## When to use this architecture

| ✅ Good for | ❌ Not recommended for |
|---|---|
| Connecting multiple branch offices to OVHcloud through a single WAN exit | Critical workloads needing 99.99% uptime |
| Branch consolidation to a cloud environment | Multi-cloud setups requiring diverse paths |
| Hybrid SD-WAN deployments | Highly regulated environments |

## Step-by-step

### 1. Coordinate with your WAN provider

Contact your WAN/MPLS/SD-WAN provider and request:

- A **circuit** or **virtual connection** from your WAN backbone to the OVHcloud PoP.
- The circuit should terminate at a facility where OVHcloud has a PoP (see [PoP Locations](../../1.4_pop_locations_regions/guide.en-gb.md)).

If your WAN provider is also an OVHcloud Connect provider (e.g. Megaport, Equinix), they can handle both the WAN handoff and the OVHcloud Connect provisioning.

### 2. Order OVHcloud Connect

- **Direct:** If your WAN edge router is co-located at the OVHcloud PoP. See [Order Direct](../../3.1_order_direct/guide.en-gb.md).
- **Provider:** If the connection is managed by a provider. See [Order Provider](../../3.2_order_provider/guide.en-gb.md).

### 3. Configure BGP on the WAN edge

Set up a BGP session between your **WAN edge device** and OVHcloud:

- Advertise aggregated branch prefixes (e.g. `10.0.0.0/8` or more specific per-branch subnets).
- Accept OVHcloud routes.
- Ensure your WAN routing propagates the OVHcloud routes back to all branch offices.

See [Configure OCC L3 with BGP](../../3.7_occ_l3_bgp/guide.en-gb.md).

### 4. Associate with vRack and configure subnets

Link to your vRack and set up the required subnets. See [Associate with vRack](../../3.5_associate_vrack/guide.en-gb.md) and [Set up your vRack network](../../3.6_vrack_network_setup/guide.en-gb.md).

### 5. Test end-to-end connectivity

From a branch office, verify you can reach OVHcloud resources:

```
ping 172.16.1.10           # Ping an OVHcloud VM
traceroute 172.16.1.10     # Should go: branch → WAN → PoP → OVHcloud (private)
```

Verify from OVHcloud back to a branch:

```bash
ping 10.1.0.1              # Ping a branch IP from an OVHcloud VM
```

### 6. Set up monitoring

Monitor the WAN edge BGP session and OVHcloud Connect link. See [Monitor](../../3.9_monitor/guide.en-gb.md).

## What's next?

- [Resilient WAN architecture](../../4.2_resilient/4.2.2_wan_resilient/guide.en-gb.md) for high availability
- [Monitor your connection](../../3.9_monitor/guide.en-gb.md)
