---
title: 'Order or cancel a Cross Connect with an LOA'
excerpt: 'Learn how to order or cancel a physical cross-connect using a Letter of Authorization'
updated: 2026-02-18
---

## Objective

A **cross-connect** is a physical fibre-optic cable that links your equipment (or your provider's equipment) to OVHcloud's equipment inside a data centre. A **Letter of Authorization (LOA)** is the document that authorises the data centre operator to install or remove this cable.

## What is an LOA?

An LOA is a formal document that contains:

- **Data centre name and address** — The facility where the cross-connect will be installed or removed.
- **OVHcloud's rack/cage reference** — The exact location of OVHcloud's equipment.
- **Port designation** — The specific port on OVHcloud's patch panel or router.
- **Authorised party** — Who is allowed to perform the work (you, your provider, or the facility operator).
- **Cable specifications** — Type of fibre (single-mode), connector type (LC/SC), and length.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 180" font-family="Arial, sans-serif" font-size="12">
  <rect width="650" height="180" fill="#f8f9fa" rx="8"/>

  <!-- Your Equipment -->
  <rect x="20" y="50" width="150" height="80" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="95" y="80" text-anchor="middle" font-weight="bold" fill="#1565c0">Your Equipment</text>
  <text x="95" y="100" text-anchor="middle" fill="#555" font-size="10">Cage / Cabinet A</text>

  <!-- Cross-connect -->
  <line x1="170" y1="90" x2="320" y2="90" stroke="#e65100" stroke-width="3"/>
  <text x="245" y="80" text-anchor="middle" fill="#e65100" font-weight="bold">Cross-Connect</text>
  <text x="245" y="110" text-anchor="middle" fill="#555" font-size="10">(fibre patch cable)</text>

  <!-- OVHcloud Equipment -->
  <rect x="320" y="50" width="150" height="80" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="395" y="80" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud Equipment</text>
  <text x="395" y="100" text-anchor="middle" fill="#555" font-size="10">Cage / Cabinet B</text>

  <!-- LOA document -->
  <rect x="510" y="35" width="120" height="110" rx="6" fill="#fff" stroke="#888" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="570" y="60" text-anchor="middle" font-weight="bold" fill="#333" font-size="11">LOA</text>
  <text x="570" y="80" text-anchor="middle" fill="#555" font-size="9">DC: Equinix PA3</text>
  <text x="570" y="95" text-anchor="middle" fill="#555" font-size="9">Rack: OVH-FR-01</text>
  <text x="570" y="110" text-anchor="middle" fill="#555" font-size="9">Port: Gi0/0/1</text>
  <text x="570" y="125" text-anchor="middle" fill="#555" font-size="9">Type: SM LC</text>
</svg>
```

## Ordering a cross-connect

### Step 1 — Obtain the LOA from OVHcloud

After you order **OVHcloud Connect Direct**, OVHcloud will provide the LOA:

- **Automatically by email** after your order is confirmed.
- **Through the OVHcloud Control Panel** — in your OVHcloud Connect service details, look for a "Download LOA" option.
- **Via support** — If you haven't received it, contact OVHcloud support with your service reference.

### Step 2 — Submit the LOA to the data centre operator

1. Contact the **data centre operator** (e.g. Equinix, Interxion/Digital Realty, Telehouse) and submit a cross-connect order.
2. Attach the **LOA from OVHcloud**.
3. Specify:
   - **Your cage/cabinet reference** (A-end)
   - **OVHcloud's cage/cabinet reference** (Z-end, from the LOA)
   - **Cable type** — Typically single-mode fibre with LC connectors
   - **Requested completion date**
4. The data centre operator may charge a **cross-connect installation fee** and a **monthly recurring fee**.

### Step 3 — Confirm installation

1. The data centre operator installs the physical cable (typically within a few business days).
2. Verify in the **OVHcloud Control Panel** that the port status changes to "Up".
3. Proceed with [BGP configuration](../3.7_occ_l3_bgp/guide.en-gb.md).

## Cancelling a cross-connect

### Step 1 — Cancel the OVHcloud Connect service first

Before removing the physical cable, cancel the OVHcloud Connect service (see [Cancel Direct](../3.3_cancel_direct/guide.en-gb.md) or [Cancel Provider](../3.4_cancel_provider/guide.en-gb.md)).

### Step 2 — Request cross-connect removal

1. Contact the **data centre operator**.
2. Submit a **de-installation order** for the cross-connect.
3. Some data centres require an **LOA for removal** — check with the operator. If needed, request one from OVHcloud support.
4. Confirm the physical cable has been removed.

### Step 3 — Verify billing

- Confirm with the data centre operator that the **monthly cross-connect fee** has been stopped.
- Verify on the OVHcloud side that the service is no longer billed.

## Important tips

| Tip | Details |
|---|---|
| **Keep copies of all LOAs** | Store them in your documentation for future reference and audits. |
| **Track lead times** | Cross-connect installation timelines vary by data centre (1–10 business days is typical). |
| **Coordinate with your provider** | If using OVHcloud Connect Provider, the provider typically handles the cross-connect for you. |
| **Match cable types** | Ensure your side uses the same fibre type (single-mode) and connector (LC) as specified in the LOA. |
| **Test after installation** | Once the cable is patched, verify optical light levels and port status before configuring BGP. |

## What's next?

- [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md) after the cross-connect is installed
- [Order OVHcloud Connect Direct](../3.1_order_direct/guide.en-gb.md) if you haven't started the process yet

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
