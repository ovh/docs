---
title: 'Quick Start: Connection to OVHcloud with a Provider'
excerpt: 'Walk through the steps to connect to OVHcloud using a third-party network provider'
updated: 2026-02-18
---

## Objective

This guide walks you through connecting to OVHcloud using a **third-party network provider** (such as Megaport, Equinix Fabric, or Console Connect). A provider handles the physical connectivity on your behalf, so you don't need to be present in the same data centre as OVHcloud.

## Before you begin

Make sure you have:

- ✅ An **OVHcloud account** with billing configured
- ✅ A contract or account with a **supported provider** (see [Providers](../1.3_providers))
- ✅ A **router** that supports BGP peering (OVHcloud Connect Provider is always a Layer 3 service)
- ✅ A planned **IP addressing scheme** and **ASN**

## Steps overview

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 370" font-family="Arial, sans-serif" font-size="12">
  <rect width="800" height="370" fill="#f8f9fa" rx="8"/>

  <!-- Step 1 -->
  <circle cx="60" cy="45" r="20" fill="#e65100"/>
  <text x="60" y="50" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">1</text>
  <text x="95" y="50" fill="#333" font-weight="bold">Order OVHcloud Connect Provider</text>

  <!-- Step 2 -->
  <circle cx="60" cy="105" r="20" fill="#e65100"/>
  <text x="60" y="110" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">2</text>
  <text x="95" y="110" fill="#333" font-weight="bold">Share the pairing key with your provider</text>

  <!-- Step 3 -->
  <circle cx="60" cy="165" r="20" fill="#e65100"/>
  <text x="60" y="170" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">3</text>
  <text x="95" y="170" fill="#333" font-weight="bold">Provider provisions the connection</text>

  <!-- Step 4 -->
  <circle cx="60" cy="225" r="20" fill="#e65100"/>
  <text x="60" y="230" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">4</text>
  <text x="95" y="230" fill="#333" font-weight="bold">Verify BGP session and routing</text>

  <!-- Step 5 -->
  <circle cx="60" cy="285" r="20" fill="#e65100"/>
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

### Step 1 — Order OVHcloud Connect Provider

1. Log in to the **OVHcloud Control Panel**.
2. Navigate to **Network** → **OVHcloud Connect**.
3. Select **Provider Connection**.
4. Choose your **provider**, **PoP location**, and **bandwidth**.
5. Review pricing and submit the order.
6. OVHcloud generates a **pairing key** (also called a service key) for your provider.

For detailed steps, see [Order OVHcloud Connect Provider](../3.2_order_provider).

### Step 2 — Share the pairing key

Give the **pairing key** to your provider. This key allows the provider to identify and activate the connection to OVHcloud on your behalf.

- On **Megaport**: create a VXC (Virtual Cross Connect) to OVHcloud and enter the pairing key.
- On **Equinix Fabric**: create a connection to OVHcloud and provide the service key.
- On **Console Connect**: initiate a connection to OVHcloud and use the pairing key.

### Step 3 — Provider provisions the connection

The provider sets up the physical and logical link between their infrastructure and OVHcloud's PoP. This is usually fast (minutes to hours for on-demand providers like Megaport), but timing varies.

You can track the connection status in both the **OVHcloud Control Panel** and your **provider's portal**.

### Step 4 — Associate with your vRack

Link the OVHcloud Connect service to your **vRack**:

1. In the OVHcloud Control Panel, go to **vRack**.
2. Add your OVHcloud Connect service.
3. Configure the required VLANs and subnets.

See [Associate an OVHcloud Connect to your vRack](../3.5_associate_vrack).

### Step 5 — Verify BGP session and routing

OVHcloud Connect Provider is always a Layer 3 service — BGP peering is established between your router (or your provider's router, depending on your provider offering) and the OVHcloud PoP. Verify in the OVHcloud Control Panel and in your provider's portal that the session is established and routes are being exchanged.

See [Configure OCC L3 with BGP](../3.7_occ_l3_bgp) for detailed guidance.

### Step 6 — Test and verify

| Check | How |
|---|---|
| **Connection status** | Shows "Active" in OVHcloud Control Panel and provider portal |
| **BGP session** | Established — check on your router and in the OVHcloud Control Panel |
| **Routes** | Your prefixes visible on OVHcloud side; OVHcloud routes visible on your side |
| **Ping** | Ping an OVHcloud resource from your network |
| **Traceroute** | Verify traffic goes through the private link, not the internet |

## Troubleshooting

| Issue | What to check |
|---|---|
| Connection stuck in "Pending" | Verify the pairing key was entered correctly on the provider's side |
| Provider shows "Active" but OVHcloud shows "Down" | Contact OVHcloud support — there may be a provisioning delay |
| BGP session not establishing | Check peering IPs, ASN, and VLAN ID on both your router and the OVHcloud PoP configuration |
| High latency or packet loss | Check provider's network status page; run traceroute to identify where delays occur |

## What's next?

- For a self-managed connection, see [Quick Start: Direct Connection](../2.1_quick_start_direct)
- Set up [monitoring](../3.9_monitor)
- Explore [resilient architectures](../4.2_resilient/4.1.2_onprem_resilient)

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
