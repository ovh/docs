---
title: 'Quick Start: Direct Connection to OVHcloud'
excerpt: 'Walk through the essential steps to establish a direct, private connection to OVHcloud'
updated: 2026-02-18
---

## Objective

This guide walks you through the essential steps to establish a **direct, private connection** between your infrastructure and OVHcloud — without using a third-party provider.

## Before you begin

Make sure you have:

- ✅ An **OVHcloud account** with billing configured
- ✅ Equipment (or a circuit) in a **data centre where OVHcloud has a PoP** (see [PoP Locations](../1.4_pop_locations_regions/guide.en-gb.md))
- ✅ A **router** that supports BGP and single-mode fibre optic interfaces
- ✅ A planned **IP addressing scheme** (peering IPs and prefixes to advertise)
- ✅ A private or public **ASN** (Autonomous System Number)

## Steps overview

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" font-family="Arial, sans-serif" font-size="12">
  <rect width="800" height="400" fill="#f8f9fa" rx="8"/>

  <!-- Step 1 -->
  <circle cx="60" cy="45" r="20" fill="#1565c0"/>
  <text x="60" y="50" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">1</text>
  <text x="95" y="50" fill="#333" font-weight="bold">Order OVHcloud Connect Direct</text>

  <!-- Step 2 -->
  <circle cx="60" cy="105" r="20" fill="#1565c0"/>
  <text x="60" y="110" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">2</text>
  <text x="95" y="110" fill="#333" font-weight="bold">Receive the LOA (Letter of Authorization)</text>

  <!-- Step 3 -->
  <circle cx="60" cy="165" r="20" fill="#1565c0"/>
  <text x="60" y="170" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">3</text>
  <text x="95" y="170" fill="#333" font-weight="bold">Install the physical cross-connect</text>

  <!-- Step 4 -->
  <circle cx="60" cy="225" r="20" fill="#1565c0"/>
  <text x="60" y="230" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">4</text>
  <text x="95" y="230" fill="#333" font-weight="bold">Configure your PoP (BGP session)</text>

  <!-- Step 5 -->
  <circle cx="60" cy="285" r="20" fill="#1565c0"/>
  <text x="60" y="290" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">5</text>
  <text x="95" y="290" fill="#333" font-weight="bold">Associate with your vRack</text>

  <!-- Step 6 -->
  <circle cx="60" cy="345" r="20" fill="#2e7d32"/>
  <text x="60" y="350" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">6</text>
  <text x="95" y="350" fill="#333" font-weight="bold">Test and verify connectivity</text>

  <!-- Vertical line -->
  <line x1="60" y1="65" x2="60" y2="85" stroke="#ccc" stroke-width="2"/>
  <line x1="60" y1="125" x2="60" y2="145" stroke="#ccc" stroke-width="2"/>
  <line x1="60" y1="185" x2="60" y2="205" stroke="#ccc" stroke-width="2"/>
  <line x1="60" y1="245" x2="60" y2="265" stroke="#ccc" stroke-width="2"/>
  <line x1="60" y1="305" x2="60" y2="325" stroke="#ccc" stroke-width="2"/>
</svg>
```

### Step 1 — Order OVHcloud Connect Direct

1. Log in to the **OVHcloud Control Panel**.
2. Navigate to **Network** → **OVHcloud Connect**.
3. Select **Direct Connection**.
4. Choose your **PoP location** and **bandwidth** (e.g. 1 Gbps or 10 Gbps).
5. Fill in technical details: your ASN, contact information, and any special instructions for the data centre.
6. Review pricing and confirm the order.

For detailed ordering steps, see [Order OVHcloud Connect Direct](../3.1_order_direct/guide.en-gb.md).

### Step 2 — Receive the LOA

After your order is validated, OVHcloud sends you a **Letter of Authorization (LOA)** by email. This document contains:

- The data centre and rack/cage reference for OVHcloud's equipment
- The port designation on OVHcloud's side
- Instructions for the data centre operator

### Step 3 — Install the physical cross-connect

Give the LOA to your **data centre operator** (or handle it yourself if you manage your own cage). They will install a fibre-optic patch cable between your router port and OVHcloud's designated port.

This step may take a few days depending on the data centre's processes.

### Step 4 — Associate with your vRack

Link your OVHcloud Connect service to your **vRack** so that your OVHcloud resources (servers, VMs, etc.) can communicate over the private connection.

See [Associate an OVHcloud Connect to your vRack](../3.5_associate_vrack/guide.en-gb.md).

### Step 5 — Configure BGP

Once the physical link is up:

1. In the OVHcloud Control Panel, go to your OVHcloud Connect service and **create a PoP configuration** with the BGP session parameters.
2. On **your router**, configure a BGP neighbour using the peering IP and OVHcloud's ASN provided in the configuration details.
3. Advertise the IP prefixes you want to reach from OVHcloud.

For detailed BGP configuration, see [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md).

### Step 6 — Test and verify

Run these checks to confirm everything is working:

| Check | How |
|---|---|
| **Physical link** | Confirm the port shows as "up" in the OVHcloud Control Panel and on your router (`show interfaces`). |
| **BGP session** | Verify the session is **Established**: `show ip bgp summary` (Cisco) or `show bgp summary` (Juniper). |
| **Route exchange** | Confirm routes from OVHcloud appear in your routing table and vice versa. |
| **Connectivity** | Ping a known OVHcloud resource (e.g. a VM in your vRack) from your on-premises network. |
| **Traceroute** | Run `traceroute` to confirm traffic takes the private path (not the internet). |

## Troubleshooting

| Issue | What to check |
|---|---|
| Port shows "down" | Physical cable, SFP/transceiver compatibility, data centre cross-connect status |
| BGP session stuck in "Active" or "Idle" | Peer IP addresses, ASN configuration, firewall rules (TCP port 179) |
| No routes exchanged | BGP prefix filters, route-map configuration, maximum-prefix limits |
| Cannot ping OVHcloud resources | vRack association, VLAN ID, subnet configuration in AZ |

If you cannot resolve the issue, [open a support ticket](../3.10_incident_followup/guide.en-gb.md) with your BGP output, interface status, and traceroute results.

## What's next?

- For a managed connection, see [Quick Start: Provider Connection](../2.2_quick_start_provider/guide.en-gb.md)
- For resilient setups, see [Resilient On-Prem tutorial](../4.2_resilient/4.1.2_onprem_resilient/guide.en-gb.md)
- Set up [monitoring](../3.9_monitor/guide.en-gb.md) for your connection

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
