# Connect Azure to OVHcloud — Simple Connection

This tutorial explains how to **bridge Microsoft Azure and OVHcloud** using Azure ExpressRoute and an OVHcloud Connect Provider service, linked through a shared network provider.

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 230" font-family="Arial, sans-serif" font-size="11">
  <rect width="820" height="230" fill="#f8f9fa" rx="8"/>

  <!-- Azure -->
  <rect x="15" y="55" width="150" height="130" rx="8" fill="#e3f2fd" stroke="#0078d4" stroke-width="2"/>
  <text x="90" y="80" text-anchor="middle" font-weight="bold" fill="#0078d4">Azure</text>
  <rect x="30" y="90" width="120" height="35" rx="4" fill="#fff" stroke="#90caf9"/>
  <text x="90" y="112" text-anchor="middle" fill="#555" font-size="10">ExpressRoute Circuit</text>
  <text x="90" y="155" text-anchor="middle" fill="#555" font-size="10">VNet: 10.2.0.0/16</text>
  <text x="90" y="170" text-anchor="middle" fill="#555" font-size="9">Private Peering</text>

  <!-- Provider -->
  <rect x="240" y="65" width="150" height="100" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="315" y="90" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider</text>
  <text x="315" y="110" text-anchor="middle" fill="#555" font-size="10">Megaport / Equinix</text>
  <text x="315" y="130" text-anchor="middle" fill="#555" font-size="10">VXC or Fabric</text>
  <text x="315" y="148" text-anchor="middle" fill="#555" font-size="9">Service Key ↔ Pairing Key</text>

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
  <line x1="165" y1="115" x2="240" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t7)"/>
  <line x1="390" y1="115" x2="465" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t7)"/>
  <line x1="595" y1="115" x2="660" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t7)"/>

  <text x="200" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
  <text x="428" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
  <text x="628" y="105" text-anchor="middle" fill="#555" font-size="9">vRack</text>

  <!-- Labels -->
  <text x="410" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Azure ↔ Provider ↔ OVHcloud Connect ↔ vRack</text>

  <defs>
    <marker id="t7" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## When to use

| Scenario | Recommendation |
|---|---|
| Migrate VMs from Azure to OVHcloud | ✅ Simple connection |
| Burst compute from Azure to OVHcloud | ✅ Simple connection |
| Production multi-cloud (high availability) | Use the [resilient tutorial](../../4.2_resilient/4.4.2_azure_resilient/guide.en-gb.md) |
| DR between Azure and OVHcloud | Use the [resilient tutorial](../../4.2_resilient/4.4.2_azure_resilient/guide.en-gb.md) |

## Prerequisites

| Requirement | Details |
|---|---|
| Azure subscription | With permissions to create ExpressRoute circuits |
| ExpressRoute provider | Megaport or Equinix (must serve both Azure and OVHcloud) |
| OVHcloud Connect Provider | Ordered and active ([How to order](../3.2_order_provider.md)) |
| Pairing key | From the OVHcloud Control Panel |
| Non-overlapping subnets | Azure VNet and vRack must use different address ranges |

## Step-by-step

### 1. Create an Azure ExpressRoute circuit

1. In the **Azure Portal** → **Create a resource** → **ExpressRoute**.
2. Select:
   - **Provider**: Megaport or Equinix
   - **Peering location**: Choose a location shared with your OVHcloud PoP
   - **Bandwidth**: Match your OVHcloud Connect bandwidth (1 Gbps / 10 Gbps)
3. Complete the creation. Note the **Service Key** (a GUID).

### 2. Order your OVHcloud Connect Provider

If not already done, [order an OVHcloud Connect Provider](../3.2_order_provider.md) at a PoP served by the same provider.

Retrieve your **pairing key** from the OVHcloud Control Panel or API.

### 3. Create the provider bridge

On the provider platform, create **two VXCs** (or equivalent connections):

| VXC | Source | Destination |
|---|---|---|
| VXC 1 | Azure ExpressRoute (Service Key) | Provider MCR / Port |
| VXC 2 | Provider MCR / Port | OVHcloud Connect (Pairing Key) |

If the provider supports it, an MCR (Cloud Router) acts as a transit point between Azure and OVHcloud.

**Megaport example:**

1. Create a **Megaport Cloud Router (MCR)** in the same metro.
2. Add VXC from MCR → Azure ExpressRoute using the Azure Service Key.
3. Add VXC from MCR → OVHcloud Connect using the OVHcloud pairing key.

**Equinix Fabric example:**

1. Create a connection from your Fabric port → Azure ExpressRoute using the Service Key.
2. Create a connection from your Fabric port → OVHcloud Connect using the pairing key.

### 4. Configure Azure Private Peering

On the Azure ExpressRoute circuit:

1. Go to **Peerings** → **Azure private**.
2. Configure:
   - **Peer ASN**: Your MCR or provider ASN
   - **Primary subnet**: A /30 for BGP (e.g., `169.254.100.0/30`)
   - **Secondary subnet**: A /30 for BGP (e.g., `169.254.100.4/30`)
   - **VLAN ID**: Provided by the provider

### 5. Configure OVHcloud BGP peering

[Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md) for the OVHcloud Connect service.

Ensure the MCR or provider router advertises Azure prefixes (`10.2.0.0/16`) toward OVHcloud, and OVHcloud prefixes (`172.16.0.0/16`) toward Azure.

### 6. Associate your vRack

[Associate the OVHcloud Connect service with your vRack](../3.5_associate_vrack/guide.en-gb.md).

### 7. Verify connectivity

| Check | Command / Action |
|---|---|
| Azure circuit status | Azure Portal → ExpressRoute → Overview → **Provider status: Provisioned** |
| Azure BGP peering | Azure Portal → ExpressRoute → Peerings → **State: Enabled** |
| OVHcloud BGP status | OVHcloud API: `GET /ovhCloudConnect/{serviceName}` → `status: active` |
| Provider VXC status | Provider portal → VXC → **Active / Up** |
| End-to-end ping | From Azure VM → OVHcloud server private IP |

## BGP route flow

There are **three BGP segments** in this architecture:

| Segment | Endpoints | ASNs |
|---|---|---|
| Azure ↔ Provider | Azure (ASN 12076) ↔ MCR/Provider ASN | 12076 ↔ Provider |
| Provider ↔ OVHcloud | MCR/Provider ASN ↔ OVHcloud (ASN 35540) | Provider ↔ 35540 |
| OVHcloud ↔ vRack | Internal routing within OVHcloud | N/A |

> **Note:** Azure uses ASN **12076** for ExpressRoute Private Peering.

## Troubleshooting

| Symptom | Likely cause | Action |
|---|---|---|
| ExpressRoute circuit stuck in "Enabling" | Provider has not completed provisioning | Check provider portal; contact provider support |
| Azure private peering not established | Subnet or ASN mismatch | Verify /30 subnets and peer ASN match provider settings |
| OVHcloud BGP session down | Pairing key not activated or VLAN mismatch | Check OVHcloud API and provider VXC configuration |
| No route to Azure VNet | Missing route advertisement | Verify MCR forwards Azure prefixes toward OVHcloud |
| Asymmetric routing | Different paths for outbound/inbound | Ensure both sides prefer the same path; check BGP attributes |

## What's next?

- [Resilient Azure connection](../../4.2_resilient/4.4.2_azure_resilient/guide.en-gb.md) for production workloads
- [Azure ExpressRoute documentation](https://learn.microsoft.com/en-us/azure/expressroute/)
- [Monitor your OVHcloud Connect](../3.9_monitor.md) service
- [Connect GCP to OVHcloud](../4.5.1_gcp_simple/guide.en-gb.md) for additional multi-cloud links
