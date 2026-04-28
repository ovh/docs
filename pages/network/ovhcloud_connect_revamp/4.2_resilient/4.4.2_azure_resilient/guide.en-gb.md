# Connect Azure to OVHcloud — Resilient Architecture

This tutorial covers a **highly available multi-cloud connection between Microsoft Azure and OVHcloud** using redundant ExpressRoute circuits and OVHcloud Connect links.

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" font-family="Arial, sans-serif" font-size="11">
  <rect width="800" height="310" fill="#f8f9fa" rx="8"/>

  <!-- Azure -->
  <rect x="15" y="60" width="160" height="190" rx="8" fill="#e3f2fd" stroke="#0078d4" stroke-width="2"/>
  <text x="95" y="85" text-anchor="middle" font-weight="bold" fill="#0078d4">Azure</text>
  <rect x="30" y="100" width="130" height="40" rx="4" fill="#fff" stroke="#90caf9"/>
  <text x="95" y="125" text-anchor="middle" fill="#555" font-size="10">ExpressRoute 1</text>
  <rect x="30" y="155" width="130" height="40" rx="4" fill="#fff" stroke="#90caf9"/>
  <text x="95" y="180" text-anchor="middle" fill="#555" font-size="10">ExpressRoute 2</text>
  <text x="95" y="230" text-anchor="middle" fill="#555" font-size="10">VNet: 10.2.0.0/16</text>

  <!-- Provider A -->
  <rect x="230" y="80" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider A</text>
  <text x="300" y="125" text-anchor="middle" fill="#555" font-size="10">Location 1</text>

  <!-- Provider B -->
  <rect x="230" y="170" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="300" y="195" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider B</text>
  <text x="300" y="215" text-anchor="middle" fill="#555" font-size="10">Location 2</text>

  <!-- OVHcloud PoP A -->
  <rect x="440" y="50" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="505" y="75" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
  <text x="505" y="95" text-anchor="middle" fill="#2e7d32" font-size="10">PoP A / AZ 1</text>

  <!-- OVHcloud PoP B -->
  <rect x="440" y="180" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="505" y="205" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
  <text x="505" y="225" text-anchor="middle" fill="#2e7d32" font-size="10">PoP B / AZ 2</text>

  <!-- vRack -->
  <rect x="630" y="100" width="150" height="110" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="705" y="130" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
  <text x="705" y="150" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
  <text x="705" y="170" text-anchor="middle" fill="#555" font-size="10">Multi-AZ Servers</text>
  <text x="705" y="190" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>

  <!-- Arrows -->
  <line x1="160" y1="120" x2="230" y2="112" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t8)"/>
  <line x1="160" y1="175" x2="230" y2="202" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t8)"/>
  <line x1="370" y1="112" x2="440" y2="85" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t8)"/>
  <line x1="370" y1="202" x2="440" y2="215" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t8)"/>
  <line x1="570" y1="85" x2="630" y2="140" stroke="#555" stroke-width="1.5" marker-end="url(#t8)"/>
  <line x1="570" y1="215" x2="630" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#t8)"/>

  <text x="80" y="40" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary ───</text>
  <text x="230" y="40" text-anchor="middle" fill="#e65100" font-size="10">Backup - - -</text>

  <defs>
    <marker id="t8" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## Resilience strategy

Microsoft recommends **two ExpressRoute circuits in different peering locations** for maximum availability. Combined with two OVHcloud Connect Provider services at different PoPs, this provides end-to-end redundancy:

| Component | Primary | Backup |
|---|---|---|
| Azure ExpressRoute | Circuit 1 (Location A) | Circuit 2 (Location B) |
| Provider VXC | VXC set 1 | VXC set 2 |
| OVHcloud Connect | Service 1 (PoP A) | Service 2 (PoP B) |
| OVHcloud AZ | AZ 1 | AZ 2 |

## Prerequisites

- Two Azure ExpressRoute circuits at different peering locations
- Two OVHcloud Connect Provider services at different PoPs
- A shared provider (Megaport or Equinix) present at both locations
- A vRack with Multi-AZ enabled ([Multi-AZ guide](../1.5_multi_az.md))
- Non-overlapping IP ranges across Azure VNet and OVHcloud vRack

## Step-by-step

### 1. Create two ExpressRoute circuits

In the **Azure Portal** → **Create ExpressRoute** (repeat for each circuit):

| Setting | Circuit 1 | Circuit 2 |
|---|---|---|
| Provider | Megaport (or Equinix) | Megaport (or Equinix) |
| Peering location | Location A (e.g., Paris) | Location B (e.g., Frankfurt) |
| Bandwidth | 1 Gbps | 1 Gbps |
| SKU | Standard or Premium | Standard or Premium |

Note each circuit's **Service Key**.

> **Tip:** Use **ExpressRoute Premium** if your VNets are in different Azure regions than the peering locations.

### 2. Order two OVHcloud Connect Provider services

[Order two OVHcloud Connect Provider services](../3.2_order_provider.md) at different PoPs that correspond to the ExpressRoute peering locations:

- OVHcloud Connect 1 → PoP A
- OVHcloud Connect 2 → PoP B

Retrieve both **pairing keys**.

### 3. Create provider bridges for each path

**Path 1 (Primary):**

1. Create MCR or port at Location A.
2. VXC: Azure ExpressRoute 1 (Service Key 1) → MCR A.
3. VXC: MCR A → OVHcloud Connect 1 (Pairing Key 1).

**Path 2 (Backup):**

1. Create MCR or port at Location B.
2. VXC: Azure ExpressRoute 2 (Service Key 2) → MCR B.
3. VXC: MCR B → OVHcloud Connect 2 (Pairing Key 2).

### 4. Configure Azure Private Peering on both circuits

For each ExpressRoute circuit, configure **Azure Private Peering**:

| Parameter | Circuit 1 | Circuit 2 |
|---|---|---|
| Peer ASN | Provider ASN | Provider ASN |
| Primary /30 | 169.254.100.0/30 | 169.254.101.0/30 |
| Secondary /30 | 169.254.100.4/30 | 169.254.101.4/30 |
| VLAN ID | Assigned by provider | Assigned by provider |

### 5. Link both circuits to your VNet

In Azure:

1. Go to **Virtual Network Gateways** → **Connections**.
2. Add Connection 1 → ExpressRoute Circuit 1 (weight: **100**).
3. Add Connection 2 → ExpressRoute Circuit 2 (weight: **50** — lower = backup).

Azure uses **connection weight** to prefer one path over the other.

### 6. Configure OVHcloud BGP with failover

On the OVHcloud side, use [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md) to prefer the primary path:

| Path | Local Preference | AS-path prepend |
|---|---|---|
| OVHcloud Connect 1 (primary) | 200 | None |
| OVHcloud Connect 2 (backup) | 100 | 1× prepend |

### 7. Associate both services with your vRack

[Associate both OVHcloud Connect services](../3.5_associate_vrack/guide.en-gb.md) with the same vRack. Both will inject routes; the vRack will use the higher Local Preference path.

### 8. Test failover

| Test | Action | Expected result |
|---|---|---|
| Primary link failure | Disable ExpressRoute 1 VIF in Azure | Traffic shifts to ExpressRoute 2 within BGP convergence time |
| Primary OCC failure | Disable OVHcloud Connect 1 | Traffic shifts to OVHcloud Connect 2 |
| Provider failure | Take down MCR A VXCs | Traffic shifts to MCR B path |
| Full recovery | Re-enable all links | Traffic returns to primary path |

> **Convergence time:** BGP failover typically completes in **30–90 seconds** depending on hold timers and BFD configuration.

## Azure-specific considerations

- **ExpressRoute Global Reach**: If both OVHcloud PoPs are in different Azure regions, consider enabling [Global Reach](https://learn.microsoft.com/en-us/azure/expressroute/expressroute-global-reach) for direct circuit-to-circuit communication.
- **FastPath**: For Ultra Performance or ErGw3AZ gateways, enable [FastPath](https://learn.microsoft.com/en-us/azure/expressroute/about-fastpath) for improved network performance.
- **Route limits**: Azure Private Peering supports up to **4,000 routes** per circuit. Aggregate OVHcloud prefixes to stay within limits.

## What's next?

- [Simple Azure connection](../../4.1_simple/4.4.1_azure_simple/guide.en-gb.md) for non-critical workloads
- [Azure ExpressRoute documentation](https://learn.microsoft.com/en-us/azure/expressroute/)
- [Multi-AZ configuration](../1.5_multi_az.md) for OVHcloud side resilience
- [Incident follow-up](../3.10_incident_followup.md) if issues arise during failover testing
