# Connect GCP to OVHcloud — Resilient Architecture

This tutorial covers a **highly available multi-cloud connection between Google Cloud Platform and OVHcloud** using redundant Interconnect attachments and OVHcloud Connect links.

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" font-family="Arial, sans-serif" font-size="11">
  <rect width="800" height="310" fill="#f8f9fa" rx="8"/>

  <!-- GCP -->
  <rect x="15" y="60" width="160" height="190" rx="8" fill="#e8eaf6" stroke="#4285f4" stroke-width="2"/>
  <text x="95" y="85" text-anchor="middle" font-weight="bold" fill="#4285f4">Google Cloud</text>
  <rect x="30" y="100" width="130" height="40" rx="4" fill="#fff" stroke="#c5cae9"/>
  <text x="95" y="125" text-anchor="middle" fill="#555" font-size="10">Interconnect 1</text>
  <rect x="30" y="155" width="130" height="40" rx="4" fill="#fff" stroke="#c5cae9"/>
  <text x="95" y="180" text-anchor="middle" fill="#555" font-size="10">Interconnect 2</text>
  <text x="95" y="230" text-anchor="middle" fill="#555" font-size="10">VPC: 10.3.0.0/16</text>

  <!-- Provider A -->
  <rect x="230" y="80" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider A</text>
  <text x="300" y="125" text-anchor="middle" fill="#555" font-size="10">Edge domain 1</text>

  <!-- Provider B -->
  <rect x="230" y="170" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="300" y="195" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider B</text>
  <text x="300" y="215" text-anchor="middle" fill="#555" font-size="10">Edge domain 2</text>

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
  <text x="705" y="190" text-anchor="middle" fill="#555" font-size="10">Cloud Instances</text>

  <!-- Arrows -->
  <line x1="160" y1="120" x2="230" y2="112" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t10)"/>
  <line x1="160" y1="175" x2="230" y2="202" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t10)"/>
  <line x1="370" y1="112" x2="440" y2="85" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t10)"/>
  <line x1="370" y1="202" x2="440" y2="215" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t10)"/>
  <line x1="570" y1="85" x2="630" y2="140" stroke="#555" stroke-width="1.5" marker-end="url(#t10)"/>
  <line x1="570" y1="215" x2="630" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#t10)"/>

  <text x="80" y="40" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary ───</text>
  <text x="230" y="40" text-anchor="middle" fill="#e65100" font-size="10">Backup - - -</text>

  <defs>
    <marker id="t10" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## Resilience strategy

Google Cloud recommends using VLAN attachments in **different edge availability domains** to achieve 99.9%–99.99% SLA. Combined with dual OVHcloud Connect links, you get full end-to-end resilience:

| Component | Primary | Backup |
|---|---|---|
| GCP VLAN attachment | Edge domain zone1 | Edge domain zone2 |
| Provider VXC | VXC set 1 | VXC set 2 |
| OVHcloud Connect | Service 1 (PoP A) | Service 2 (PoP B) |
| OVHcloud AZ | AZ 1 | AZ 2 |

### GCP SLA tiers

| Configuration | GCP SLA |
|---|---|
| Single VLAN attachment | No SLA |
| Two attachments in different edge domains, same metro | 99.9% |
| Four attachments in two different metros | 99.99% |

## Prerequisites

- GCP project with **Compute Network Admin** role
- Two Cloud Routers (one per region or availability domain)
- Two OVHcloud Connect Provider services at different PoPs
- Shared provider (Megaport or Equinix) at both locations
- A vRack with Multi-AZ enabled
- Non-overlapping IP address ranges

## Step-by-step

### 1. Create two Cloud Routers

Create a Cloud Router in each region or for each edge availability domain:

| Router | Region | ASN |
|---|---|---|
| `router-ovhcloud-1` | `europe-west1` | 16550 (default) |
| `router-ovhcloud-2` | `europe-west3` | 16550 (default) |

### 2. Create two VLAN attachments

For each Cloud Router, create a **Partner Interconnect VLAN attachment**:

| Attachment | Cloud Router | Edge availability domain |
|---|---|---|
| `attachment-1` | `router-ovhcloud-1` | `zone1` |
| `attachment-2` | `router-ovhcloud-2` | `zone2` |

Note both **GCP pairing keys**.

### 3. Order two OVHcloud Connect Provider services

[Order two OVHcloud Connect Provider services](../3.2_order_provider.md) at different PoPs:

- OVHcloud Connect 1 → PoP A
- OVHcloud Connect 2 → PoP B

Retrieve both **OVHcloud pairing keys**.

### 4. Create provider bridges for each path

**Path 1 (Primary):**

1. MCR or port at Location A.
2. VXC: GCP Partner Interconnect (GCP pairing key 1) → MCR A.
3. VXC: MCR A → OVHcloud Connect 1 (OVHcloud pairing key 1).

**Path 2 (Backup):**

1. MCR or port at Location B.
2. VXC: GCP Partner Interconnect (GCP pairing key 2) → MCR B.
3. VXC: MCR B → OVHcloud Connect 2 (OVHcloud pairing key 2).

### 5. Activate both GCP VLAN attachments

In the GCP Console:

1. Go to **Hybrid Connectivity** → **VLAN attachments**.
2. For each attachment: click **Activate** once it shows "Pending customer".
3. Verify BGP sessions are established in both Cloud Routers.

### 6. Configure BGP failover

**GCP side:**

GCP Cloud Router uses **MED (Multi-Exit Discriminator)** to influence path selection. Set different MED values:

| Attachment | Advertised MED |
|---|---|
| `attachment-1` (primary) | 100 (lower = preferred) |
| `attachment-2` (backup) | 200 |

You can configure MED via custom route advertisements in the Cloud Router BGP peer settings.

**OVHcloud side:**

Use [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md):

| Path | Local Preference | AS-path prepend |
|---|---|---|
| OVHcloud Connect 1 (primary) | 200 | None |
| OVHcloud Connect 2 (backup) | 100 | 1× prepend |

### 7. Associate both services with your vRack

[Associate both OVHcloud Connect services](../3.5_associate_vrack/guide.en-gb.md) with the same vRack.

### 8. Test failover

| Test | Action | Expected result |
|---|---|---|
| GCP link failure | Disable VLAN attachment 1 | Traffic shifts to attachment 2 |
| OCC link failure | Disable OVHcloud Connect 1 | Traffic shifts to OVHcloud Connect 2 |
| Provider failure | Take down MCR A | Traffic shifts to MCR B path |
| Full recovery | Re-enable all | Traffic returns to primary |

## GCP-specific considerations

- **Custom route advertisements**: Use Cloud Router custom route advertisements to control which subnets are announced to OVHcloud. Avoid advertising the entire VPC if only specific subnets are needed.
- **Dataplane v2**: If using GKE with Dataplane v2, ensure Pod CIDR ranges are included in route advertisements if GKE pods need to communicate with OVHcloud.
- **Shared VPC**: If using Shared VPC, create the Interconnect in the host project and share with service projects.
- **MTU**: GCP Interconnect supports **1440 MTU** for Partner Interconnect. Ensure OVHcloud Connect and provider VXCs use matching MTU settings.

## What's next?

- [Simple GCP connection](../../4.1_simple/4.5.1_gcp_simple/guide.en-gb.md) for non-critical workloads
- [GCP Interconnect documentation](https://cloud.google.com/network-connectivity/docs/interconnect)
- [GCP Cloud Router documentation](https://cloud.google.com/network-connectivity/docs/router)
- [Monitor your OVHcloud Connect](../3.9_monitor.md) service
- [FAQ](../5_faq.md) for common questions
