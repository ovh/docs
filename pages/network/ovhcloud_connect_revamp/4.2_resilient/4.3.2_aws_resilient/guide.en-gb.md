# Connect AWS to OVHcloud — Resilient Architecture

This tutorial covers a **highly available connection between AWS and OVHcloud** using redundant links through different locations.

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" font-family="Arial, sans-serif" font-size="11">
  <rect width="800" height="310" fill="#f8f9fa" rx="8"/>

  <!-- AWS -->
  <rect x="15" y="60" width="160" height="190" rx="8" fill="#fff3e0" stroke="#ff9800" stroke-width="2"/>
  <text x="95" y="85" text-anchor="middle" font-weight="bold" fill="#e65100">AWS</text>
  <rect x="30" y="100" width="130" height="40" rx="4" fill="#fff" stroke="#ffcc80"/>
  <text x="95" y="125" text-anchor="middle" fill="#555" font-size="10">Direct Connect 1</text>
  <rect x="30" y="155" width="130" height="40" rx="4" fill="#fff" stroke="#ffcc80"/>
  <text x="95" y="180" text-anchor="middle" fill="#555" font-size="10">Direct Connect 2</text>
  <text x="95" y="230" text-anchor="middle" fill="#555" font-size="10">VPC: 10.1.0.0/16</text>

  <!-- Provider -->
  <rect x="230" y="80" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider A</text>
  <text x="300" y="125" text-anchor="middle" fill="#555" font-size="10">VXC / MCR</text>

  <rect x="230" y="170" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="300" y="195" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider B</text>
  <text x="300" y="215" text-anchor="middle" fill="#555" font-size="10">VXC / MCR</text>

  <!-- OVHcloud -->
  <rect x="440" y="50" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="505" y="75" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
  <text x="505" y="95" text-anchor="middle" fill="#2e7d32" font-size="10">PoP A / AZ 1</text>

  <rect x="440" y="180" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="505" y="205" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
  <text x="505" y="225" text-anchor="middle" fill="#2e7d32" font-size="10">PoP B / AZ 2</text>

  <!-- vRack -->
  <rect x="620" y="100" width="150" height="110" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="695" y="130" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
  <text x="695" y="150" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
  <text x="695" y="170" text-anchor="middle" fill="#555" font-size="10">Servers / VMs</text>
  <text x="695" y="190" text-anchor="middle" fill="#555" font-size="10">Multi-AZ</text>

  <!-- Arrows -->
  <line x1="160" y1="120" x2="230" y2="112" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t6)"/>
  <line x1="160" y1="175" x2="230" y2="202" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t6)"/>
  <line x1="370" y1="112" x2="440" y2="85" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t6)"/>
  <line x1="370" y1="202" x2="440" y2="215" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t6)"/>
  <line x1="570" y1="85" x2="620" y2="135" stroke="#555" stroke-width="1.5" marker-end="url(#t6)"/>
  <line x1="570" y1="215" x2="620" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#t6)"/>

  <text x="80" y="40" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary path ───</text>
  <text x="260" y="40" text-anchor="middle" fill="#e65100" font-size="10">Backup path - - -</text>

  <defs>
    <marker id="t6" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## Resilience strategy

For maximum availability between AWS and OVHcloud:

1. **Two AWS Direct Connect connections** in different AWS Direct Connect locations.
2. **Two provider VXCs** (or separate providers) bridging to two OVHcloud PoPs.
3. **Two OVHcloud Connect services** at different PoPs, both associated with your vRack.
4. **BGP failover** configured across both paths.

## Step-by-step

### 1. Order redundant AWS Direct Connect connections

In the **AWS Console**, create two Direct Connect connections at **different locations**:

- Connection 1: AWS Direct Connect location A
- Connection 2: AWS Direct Connect location B

Create a **Private VIF** on each connection pointing to your VPC (via Virtual Private Gateway or Transit Gateway).

> AWS recommends using **Transit Gateway** with multiple Direct Connect Gateways for resilient multi-region architectures.

### 2. Order two OVHcloud Connect Provider services

Order at **two different OVHcloud PoPs**. Get two separate pairing keys.

### 3. Create redundant provider bridges

On your provider platform:

- **Bridge 1:** AWS Direct Connect 1 ↔ OVHcloud PoP A
- **Bridge 2:** AWS Direct Connect 2 ↔ OVHcloud PoP B

If using MCR (Cloud Router), create separate MCR instances or peering sessions for each path.

### 4. Configure BGP failover

Ensure BGP routing preferences are set so traffic prefers the primary path and falls back to the backup:

- Use **Local Preference** on the OVHcloud side.
- Use **AS-path prepending** on the backup path.
- On AWS, use **Direct Connect Gateway** with appropriate route priorities.

### 5. Test failover

1. Verify both paths are active and passing traffic.
2. Disable the primary AWS Direct Connect VIF — confirm traffic flows via the backup.
3. Disable the primary OVHcloud Connect — confirm traffic flows via the backup.
4. Restore both and verify traffic returns to the preferred path.

## Cost considerations

Resilient AWS-to-OVHcloud requires:
- 2× AWS Direct Connect connections (AWS billing)
- 2× Provider VXCs or MCR sessions (provider billing)
- 2× OVHcloud Connect services (OVHcloud billing)

Plan your budget accordingly. The cost of redundancy is typically justified by the risk reduction for production workloads.

## What's next?

- [Simple AWS connection](../../4.1_simple/4.3.1_aws_simple/guide.en-gb.md) for non-critical workloads
- [AWS Direct Connect documentation](https://docs.aws.amazon.com/directconnect/)
- [Connect Azure to OVHcloud](../../4.1_simple/4.4.1_azure_simple/guide.en-gb.md) for multi-cloud setups
