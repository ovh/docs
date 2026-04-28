# Connect My WAN to OVHcloud — Resilient Architecture

This tutorial describes how to connect your WAN (MPLS or SD-WAN) to OVHcloud using **two independent OVHcloud Connect links** for high availability and automatic failover.

## Architecture

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" font-family="Arial, sans-serif" font-size="12">
  <rect width="800" height="300" fill="#f8f9fa" rx="8"/>

  <!-- Branch offices -->
  <rect x="15" y="80" width="120" height="140" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="75" y="110" text-anchor="middle" font-weight="bold" fill="#1565c0" font-size="11">Branches</text>
  <text x="75" y="135" text-anchor="middle" fill="#555" font-size="10">Office A</text>
  <text x="75" y="155" text-anchor="middle" fill="#555" font-size="10">Office B</text>
  <text x="75" y="175" text-anchor="middle" fill="#555" font-size="10">Office C</text>

  <!-- WAN -->
  <rect x="175" y="90" width="120" height="120" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="235" y="125" text-anchor="middle" font-weight="bold" fill="#6a1b9a" font-size="11">WAN</text>
  <text x="235" y="145" text-anchor="middle" fill="#555" font-size="10">SD-WAN /</text>
  <text x="235" y="160" text-anchor="middle" fill="#555" font-size="10">MPLS</text>

  <!-- PoP A -->
  <rect x="345" y="45" width="110" height="65" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="400" y="70" text-anchor="middle" font-weight="bold" fill="#e65100">PoP A</text>
  <text x="400" y="90" text-anchor="middle" fill="#555" font-size="10">Primary</text>

  <!-- PoP B -->
  <rect x="345" y="185" width="110" height="65" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="400" y="210" text-anchor="middle" font-weight="bold" fill="#e65100">PoP B</text>
  <text x="400" y="230" text-anchor="middle" fill="#555" font-size="10">Backup</text>

  <!-- OVHcloud AZ1 -->
  <rect x="510" y="30" width="250" height="85" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="635" y="58" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 1</text>
  <text x="635" y="78" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · 172.16.1.0/24</text>

  <!-- OVHcloud AZ2 -->
  <rect x="510" y="180" width="250" height="85" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="635" y="208" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 2</text>
  <text x="635" y="228" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · 172.16.2.0/24</text>

  <!-- Arrows -->
  <line x1="135" y1="150" x2="175" y2="150" stroke="#555" stroke-width="1.5" marker-end="url(#t4)"/>
  <line x1="295" y1="120" x2="345" y2="77" stroke="#2e7d32" stroke-width="2" marker-end="url(#t4)"/>
  <line x1="295" y1="180" x2="345" y2="217" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t4)"/>
  <line x1="455" y1="77" x2="510" y2="72" stroke="#2e7d32" stroke-width="2" marker-end="url(#t4)"/>
  <line x1="455" y1="217" x2="510" y2="222" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t4)"/>

  <defs>
    <marker id="t4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## When to use this architecture

- **Business-critical WAN connectivity** — Multiple branches depend on OVHcloud access.
- **SLA requirements ≥ 99.99%** — Dual links needed for premium uptime guarantees.
- **SD-WAN with diverse paths** — SD-WAN platforms can automatically route over the best available path.

## Step-by-step

### 1. Order two OVHcloud Connect links

Order at **different PoPs** for physical diversity. You can mix Direct and Provider connections.

### 2. Provision both WAN circuits

Coordinate with your WAN provider to deliver circuits to both PoPs. If using an SD-WAN platform, configure both paths as underlay connections.

### 3. Configure BGP with failover

Set up two BGP sessions with appropriate routing policies:

- **Active/Standby:** Use Local Preference and AS-path prepending (see [Resilient On-Prem](../4.1.2_onprem_resilient/guide.en-gb.md) for detailed BGP examples).
- **Active/Active:** Use ECMP for load balancing across both links.
- **SD-WAN integration:** Many SD-WAN platforms can detect link quality and switch traffic automatically, supplementing BGP failover.

### 4. Associate both links with your vRack

Both OVHcloud Connect services should be associated with the same vRack.

### 5. Configure subnets across AZs

Distribute subnets across both AZs for full redundancy. See [Set up your vRack network](../../3.6_vrack_network_setup/guide.en-gb.md).

### 6. Test failover

1. Verify both BGP sessions are Established.
2. Shut down the primary link and confirm traffic switches to the backup.
3. Restore the primary and verify traffic returns.
4. Repeat for the backup link.

### 7. Monitor both paths

Set up independent monitoring for each link, each BGP session, and each WAN circuit. See [Monitor](../../3.9_monitor/guide.en-gb.md).

## SD-WAN considerations

If you use an SD-WAN overlay:

- Configure OVHcloud Connect links as **underlay transports** in your SD-WAN controller.
- The SD-WAN platform can perform **path selection** based on latency, jitter, and packet loss — faster than BGP convergence.
- Ensure BGP and SD-WAN policies are **aligned** (avoid conflicting routing decisions).

## What's next?

- [Simple WAN connection](../../4.1_simple/4.2.1_wan_simple/guide.en-gb.md) for non-critical use cases
- Connect to other clouds: [AWS](../../4.1_simple/4.3.1_aws_simple/guide.en-gb.md) · [Azure](../../4.1_simple/4.4.1_azure_simple/guide.en-gb.md) · [GCP](../../4.1_simple/4.5.1_gcp_simple/guide.en-gb.md)
