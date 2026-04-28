# Connect AWS to OVHcloud — Simple Connection

This tutorial explains how to set up a **private connection between AWS and OVHcloud** using OVHcloud Connect and AWS Direct Connect, through a shared provider or direct peering.

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" font-family="Arial, sans-serif" font-size="12">
  <rect width="800" height="200" fill="#f8f9fa" rx="8"/>

  <!-- AWS -->
  <rect x="20" y="40" width="180" height="120" rx="8" fill="#fff3e0" stroke="#ff9800" stroke-width="2"/>
  <text x="110" y="70" text-anchor="middle" font-weight="bold" fill="#e65100">AWS</text>
  <text x="110" y="95" text-anchor="middle" fill="#555" font-size="10">VPC: 10.1.0.0/16</text>
  <text x="110" y="115" text-anchor="middle" fill="#555" font-size="10">Direct Connect</text>
  <text x="110" y="135" text-anchor="middle" fill="#555" font-size="10">Virtual Interface (VIF)</text>

  <!-- Provider / Exchange -->
  <rect x="270" y="50" width="200" height="100" rx="8" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="370" y="80" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Interconnection Provider</text>
  <text x="370" y="100" text-anchor="middle" fill="#555" font-size="10">Megaport / Equinix Fabric</text>
  <text x="370" y="118" text-anchor="middle" fill="#555" font-size="10">Bridging AWS ↔ OVHcloud</text>

  <!-- OVHcloud -->
  <rect x="540" y="40" width="220" height="120" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="650" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
  <text x="650" y="95" text-anchor="middle" fill="#555" font-size="10">vRack: 172.16.0.0/16</text>
  <text x="650" y="115" text-anchor="middle" fill="#555" font-size="10">OVHcloud Connect</text>
  <text x="650" y="135" text-anchor="middle" fill="#555" font-size="10">Servers / VMs</text>

  <!-- Arrows -->
  <line x1="200" y1="100" x2="270" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t5)"/>
  <line x1="470" y1="100" x2="540" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t5)"/>

  <defs>
    <marker id="t5" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## How it works

The connection between AWS and OVHcloud is typically routed through a **shared provider** (such as Megaport or Equinix Fabric) that has physical presence at both AWS Direct Connect locations and OVHcloud PoPs.

1. **On the AWS side**, you create a Direct Connect connection (or hosted connection) and a Virtual Interface (VIF) that connects your AWS VPC.
2. **On the provider side**, you create a virtual cross-connect (VXC) that bridges the AWS VIF to the OVHcloud Connect service.
3. **On the OVHcloud side**, you configure BGP and associate the connection with your vRack.

## Prerequisites

- An **AWS account** with a VPC configured
- An **OVHcloud account** with a vRack
- An account with a **shared provider** (Megaport, Equinix Fabric, or similar) that supports both AWS Direct Connect and OVHcloud Connect
- Non-overlapping IP ranges between AWS VPC and OVHcloud subnets

## Step-by-step

### 1. Set up AWS Direct Connect

1. In the **AWS Console**, go to **Direct Connect** → **Connections**.
2. Create a new connection (or use a hosted connection via your provider).
3. Select the **AWS Direct Connect location** closest to your OVHcloud PoP.
4. Create a **Private Virtual Interface (VIF)** associated with your VPC or Virtual Private Gateway.
5. Note the BGP ASN, peer IPs, and VLAN ID.

> AWS Direct Connect documentation: [docs.aws.amazon.com/directconnect](https://docs.aws.amazon.com/directconnect/)

### 2. Order OVHcloud Connect Provider

1. In the **OVHcloud Control Panel**, order OVHcloud Connect Provider.
2. Select the same provider you're using for AWS (e.g. Megaport).
3. Choose the PoP location.
4. Copy the **pairing key**.

See [Order OVHcloud Connect Provider](../../3.2_order_provider/guide.en-gb.md).

### 3. Create the bridge on the provider

In your provider's portal, create connections that bridge AWS and OVHcloud:

**Example with Megaport:**

1. Create a **Megaport port** or use an existing one.
2. Create a **VXC to AWS** using the AWS Direct Connect hosted connection details.
3. Create a **VXC to OVHcloud** using the OVHcloud pairing key.
4. Optionally, use a **Megaport MCR (Cloud Router)** to route between the two VXCs if you need Layer 3 routing at the provider level.

### 4. Configure BGP

You need BGP sessions on three segments:

| Segment | Your side | Remote side |
|---|---|---|
| **AWS VIF** | AWS VPC (via VGW/TGW) | Provider or your router |
| **Provider bridge** | Handled by provider (if using MCR) | — |
| **OVHcloud Connect** | OVHcloud router | Your router or provider MCR |

If using a provider MCR:
- The MCR peers with AWS via the VIF.
- The MCR peers with OVHcloud via OVHcloud Connect.
- Routes are exchanged automatically between the two peers.

If **not** using a provider MCR:
- You need your own router (physical or virtual) co-located with the provider to handle BGP routing between AWS and OVHcloud.

### 5. Associate OVHcloud Connect with vRack

See [Associate with vRack](../../3.5_associate_vrack/guide.en-gb.md).

### 6. Test connectivity

| Test | Details |
|---|---|
| **From AWS EC2 to OVHcloud** | `ping 172.16.1.10` from an EC2 instance |
| **From OVHcloud to AWS** | `ping 10.1.0.10` from an OVHcloud VM |
| **Traceroute** | Verify traffic stays on private paths (no internet hops) |
| **BGP routes** | Check that AWS VPC routes and OVHcloud routes appear in each other's routing tables |

## Important considerations

- **Routing domains:** Ensure there are no overlapping IP ranges between AWS VPCs and OVHcloud subnets.
- **Costs:** You will be billed by AWS (Direct Connect), the provider (VXC/MCR), and OVHcloud (Connect). Review all three pricing models.
- **Latency:** The total latency depends on the distance between the AWS region and OVHcloud region, plus any intermediate provider hops.

## What's next?

- [Resilient AWS-to-OVHcloud architecture](../../4.2_resilient/4.3.2_aws_resilient/guide.en-gb.md)
- [AWS Direct Connect documentation](https://docs.aws.amazon.com/directconnect/)
