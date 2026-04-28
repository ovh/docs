# Connect GCP to OVHcloud — Simple Connection

This tutorial explains how to **bridge Google Cloud Platform (GCP) and OVHcloud** using GCP Dedicated or Partner Interconnect and an OVHcloud Connect Provider service, linked through a shared network provider.

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 230" font-family="Arial, sans-serif" font-size="11">
  <rect width="820" height="230" fill="#f8f9fa" rx="8"/>

  <!-- GCP -->
  <rect x="15" y="55" width="150" height="130" rx="8" fill="#e8eaf6" stroke="#4285f4" stroke-width="2"/>
  <text x="90" y="80" text-anchor="middle" font-weight="bold" fill="#4285f4">Google Cloud</text>
  <rect x="30" y="90" width="120" height="35" rx="4" fill="#fff" stroke="#c5cae9"/>
  <text x="90" y="112" text-anchor="middle" fill="#555" font-size="10">Interconnect</text>
  <text x="90" y="150" text-anchor="middle" fill="#555" font-size="10">VPC: 10.3.0.0/16</text>
  <text x="90" y="170" text-anchor="middle" fill="#555" font-size="9">Cloud Router</text>

  <!-- Provider -->
  <rect x="240" y="65" width="150" height="100" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="315" y="90" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider</text>
  <text x="315" y="110" text-anchor="middle" fill="#555" font-size="10">Megaport / Equinix</text>
  <text x="315" y="130" text-anchor="middle" fill="#555" font-size="10">VXC or Fabric</text>
  <text x="315" y="148" text-anchor="middle" fill="#555" font-size="9">Pairing Key bridge</text>

  <!-- OVHcloud PoP -->
  <rect x="465" y="65" width="130" height="100" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="530" y="90" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud PoP</text>
  <text x="530" y="115" text-anchor="middle" fill="#555" font-size="10">OCC Provider</text>
  <text x="530" y="135" text-anchor="middle" fill="#555" font-size="10">BGP peering</text>
  <text x="530" y="150" text-anchor="middle" fill="#555" font-size="9">ASN 35540</text>

  <!-- vRack -->
  <rect x="660" y="55" width="140" height="130" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="730" y="85" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
  <text x="730" y="110" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
  <text x="730" y="130" text-anchor="middle" fill="#555" font-size="10">Bare Metal</text>
  <text x="730" y="150" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>
  <text x="730" y="170" text-anchor="middle" fill="#555" font-size="10">Public Cloud</text>

  <!-- Arrows -->
  <line x1="165" y1="115" x2="240" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t9)"/>
  <line x1="390" y1="115" x2="465" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t9)"/>
  <line x1="595" y1="115" x2="660" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t9)"/>

  <text x="200" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
  <text x="428" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
  <text x="628" y="105" text-anchor="middle" fill="#555" font-size="9">vRack</text>

  <!-- Title -->
  <text x="410" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">GCP ↔ Provider ↔ OVHcloud Connect ↔ vRack</text>

  <defs>
    <marker id="t9" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## When to use

| Scenario | Recommendation |
|---|---|
| Data transfer from GCP to OVHcloud | ✅ Simple connection |
| Hybrid AI/ML pipeline (GCP compute + OVHcloud storage) | ✅ Simple connection |
| Production multi-cloud with SLA requirements | Use the [resilient tutorial](../../4.2_resilient/4.5.2_gcp_resilient/guide.en-gb.md) |
| Disaster recovery | Use the [resilient tutorial](../../4.2_resilient/4.5.2_gcp_resilient/guide.en-gb.md) |

## GCP Interconnect types

GCP offers two main interconnect options:

| Type | Description | Use when |
|---|---|---|
| **Dedicated Interconnect** | Direct physical connection to Google's network | You have a presence in a GCP colocation facility |
| **Partner Interconnect** | Connection through a supported service provider | You use Megaport, Equinix, or another GCP partner |

> **For this tutorial**, we use **Partner Interconnect** since the shared provider (Megaport or Equinix) acts as a bridge between GCP and OVHcloud.

## Prerequisites

| Requirement | Details |
|---|---|
| GCP project | With **Compute Network Admin** role |
| GCP Cloud Router | Created in the region nearest to the provider location |
| Provider account | Megaport or Equinix (present at both GCP and OVHcloud locations) |
| OVHcloud Connect Provider | Ordered and active ([How to order](../3.2_order_provider.md)) |
| Non-overlapping subnets | GCP VPC and OVHcloud vRack must use different ranges |

## Step-by-step

### 1. Create a GCP Cloud Router

In the **GCP Console** → **Hybrid Connectivity** → **Cloud Routers** → **Create**:

- **Name**: `router-ovhcloud`
- **Network**: Your VPC
- **Region**: Region closest to the provider PoP (e.g., `europe-west1` for Paris)
- **ASN**: Use a private ASN (e.g., `65001`) or Google's default (`16550`)

### 2. Create a Partner Interconnect VLAN attachment

Go to **Hybrid Connectivity** → **Interconnect** → **VLAN attachments** → **Create**:

1. Select **Partner Interconnect connection**.
2. Choose your Cloud Router.
3. Select the appropriate region and edge availability domain.
4. Set the **MTU** to 1500 (standard) or 1440 for VPN interworking.
5. Note the **pairing key** generated by GCP.

> **GCP pairing key format**: A string like `<random>/<region>/<edge-availability-domain>`

### 3. Create the provider bridge

On the provider platform, create connections to bridge GCP and OVHcloud:

**Megaport example:**

1. Create an **MCR** (Megaport Cloud Router) in a metro with both GCP and OVHcloud presence.
2. **VXC 1**: MCR → Google Cloud Partner Interconnect (use GCP pairing key).
3. **VXC 2**: MCR → OVHcloud Connect (use OVHcloud pairing key).

**Equinix Fabric example:**

1. Create a connection from your Fabric port → GCP Partner Interconnect (use GCP pairing key).
2. Create a connection from your Fabric port → OVHcloud Connect (use OVHcloud pairing key).

### 4. Activate the GCP VLAN attachment

After the provider provisions the connection:

1. Return to **GCP Console** → **VLAN attachments**.
2. The attachment should show **"Waiting for provider"** → then **"Pending customer"**.
3. Click **Activate** to enable the attachment.
4. GCP will automatically configure BGP between the Cloud Router and the provider.

### 5. Configure OVHcloud BGP peering

[Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md).

Ensure the provider MCR:
- Advertises GCP VPC prefixes (`10.3.0.0/16`) toward OVHcloud (ASN 35540).
- Advertises OVHcloud prefixes (`172.16.0.0/16`) toward GCP Cloud Router.

### 6. Associate your vRack

[Associate the OVHcloud Connect service with your vRack](../3.5_associate_vrack/guide.en-gb.md).

### 7. Verify connectivity

| Check | How to verify |
|---|---|
| GCP VLAN attachment | GCP Console → VLAN attachments → **Status: Active** |
| GCP Cloud Router BGP | GCP Console → Cloud Routers → BGP peers → **Status: Established** |
| Provider VXC | Provider portal → VXC → **Active / Up** |
| OVHcloud BGP | OVHcloud API → service status = **active** |
| End-to-end | Ping from GCP VM → OVHcloud server private IP |

## BGP route flow

| Segment | Endpoints | ASNs |
|---|---|---|
| GCP ↔ Provider | Cloud Router (ASN 16550) ↔ MCR (Provider ASN) | 16550 ↔ Provider |
| Provider ↔ OVHcloud | MCR (Provider ASN) ↔ OVHcloud (ASN 35540) | Provider ↔ 35540 |
| OVHcloud ↔ vRack | Internal OVHcloud routing | N/A |

> **Note:** GCP Cloud Router uses ASN **16550** by default. You can configure a custom ASN during Cloud Router creation.

## Troubleshooting

| Symptom | Likely cause | Action |
|---|---|---|
| VLAN attachment stuck in "Waiting for provider" | Provider VXC not yet provisioned | Check provider portal; ensure the GCP pairing key is correct |
| VLAN attachment in "Pending customer" | Not yet activated in GCP Console | Click **Activate** on the VLAN attachment |
| Cloud Router BGP not established | ASN mismatch or incorrect peering IPs | Verify Cloud Router ASN matches what the provider expects |
| No routes to GCP VPC | Missing route advertisement | Ensure Cloud Router advertises VPC subnets and MCR forwards them |
| OVHcloud BGP down | Pairing key not consumed or VLAN mismatch | Check OVHcloud service status and provider VXC config |

## What's next?

- [Resilient GCP connection](../../4.2_resilient/4.5.2_gcp_resilient/guide.en-gb.md) for production workloads
- [GCP Interconnect documentation](https://cloud.google.com/network-connectivity/docs/interconnect)
- [Monitor your OVHcloud Connect](../3.9_monitor.md) service
- [FAQ](../5_faq.md) for common questions
