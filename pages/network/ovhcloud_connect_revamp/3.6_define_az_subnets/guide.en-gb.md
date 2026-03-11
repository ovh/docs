---
title: 'Define Your AZ Configuration (Private Subnets)'
excerpt: 'Learn how to configure private subnets within OVHcloud Availability Zones for OVHcloud Connect'
updated: 2026-02-18
---

## Objective

This guide explains how to configure **private subnets** within OVHcloud Availability Zones (AZs) for use with your OVHcloud Connect service. Proper subnet planning ensures that your OVHcloud resources can communicate privately with your external infrastructure.

## What is an AZ configuration?

When you connect to OVHcloud via OVHcloud Connect, your traffic reaches OVHcloud resources through the **vRack** private network. Within a vRack, your resources are distributed across **Availability Zones (AZs)** — physically separated data centres within a region.

You need to define which **private IP subnets** are used in each AZ, so that routing works correctly between your infrastructure and OVHcloud.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 220" font-family="Arial, sans-serif" font-size="12">
  <rect width="700" height="220" fill="#f8f9fa" rx="8"/>

  <!-- Your Network -->
  <rect x="20" y="70" width="130" height="80" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="85" y="100" text-anchor="middle" font-weight="bold" fill="#1565c0">Your Network</text>
  <text x="85" y="120" text-anchor="middle" fill="#555" font-size="10">10.0.0.0/16</text>

  <!-- OVHcloud Connect -->
  <rect x="200" y="70" width="110" height="80" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="255" y="100" text-anchor="middle" font-weight="bold" fill="#e65100" font-size="11">OVHcloud</text>
  <text x="255" y="115" text-anchor="middle" font-weight="bold" fill="#e65100" font-size="11">Connect</text>

  <!-- AZ 1 -->
  <rect x="380" y="20" width="280" height="80" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="520" y="42" text-anchor="middle" font-weight="bold" fill="#2e7d32">AZ 1</text>
  <rect x="395" y="52" width="110" height="35" rx="4" fill="#fff" stroke="#a5d6a7"/>
  <text x="450" y="74" text-anchor="middle" fill="#555" font-size="10">172.16.1.0/24</text>
  <rect x="520" y="52" width="120" height="35" rx="4" fill="#fff" stroke="#a5d6a7"/>
  <text x="580" y="74" text-anchor="middle" fill="#555" font-size="10">Servers / VMs</text>

  <!-- AZ 2 -->
  <rect x="380" y="120" width="280" height="80" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="520" y="142" text-anchor="middle" font-weight="bold" fill="#2e7d32">AZ 2</text>
  <rect x="395" y="152" width="110" height="35" rx="4" fill="#fff" stroke="#a5d6a7"/>
  <text x="450" y="174" text-anchor="middle" fill="#555" font-size="10">172.16.2.0/24</text>
  <rect x="520" y="152" width="120" height="35" rx="4" fill="#fff" stroke="#a5d6a7"/>
  <text x="580" y="174" text-anchor="middle" fill="#555" font-size="10">Servers / VMs</text>

  <!-- Arrows -->
  <line x1="150" y1="110" x2="200" y2="110" stroke="#555" stroke-width="1.5" marker-end="url(#a6)"/>
  <line x1="310" y1="90" x2="380" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a6)"/>
  <line x1="310" y1="130" x2="380" y2="160" stroke="#555" stroke-width="1.5" marker-end="url(#a6)"/>

  <defs>
    <marker id="a6" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## Planning your subnets

### Guidelines

| Guideline | Why |
|---|---|
| **Avoid IP overlaps** | Subnets used in OVHcloud AZs must not overlap with subnets in your on-premises network, WAN, or other cloud providers. |
| **Use private (RFC 1918) addresses** | Stick to 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16 ranges. |
| **Leave room for growth** | Don't allocate excessively small subnets. A /24 per AZ per workload is a good starting point. |
| **Separate by function** | Consider using different subnets for production, management, and backup traffic. |
| **Document everything** | Maintain a clear IP address plan that maps subnets to AZs and workloads. |

### Example IP plan

| Subnet | AZ | Purpose |
|---|---|---|
| 172.16.1.0/24 | AZ 1 | Production servers |
| 172.16.2.0/24 | AZ 2 | Production servers (redundant) |
| 172.16.10.0/24 | AZ 1 | Management / monitoring |
| 172.16.20.0/24 | AZ 2 | Management / monitoring |
| 10.0.0.0/16 | — | Your on-premises network (not used in OVHcloud) |

## Steps to configure

### 1. Define subnets in your vRack

1. Log in to the [OVHcloud Control Panel](https://www.ovh.com/manager/).
2. Navigate to **Network** → **vRack**.
3. Select your vRack.
4. Under the **Private Network** section, create or edit subnets for each AZ.
5. Assign **VLAN IDs** if using VLAN-based isolation.
6. Specify the **IP range** and **gateway** for each subnet.

### 2. Assign resources to subnets

When deploying OVHcloud services (Bare Metal servers, Public Cloud instances, etc.):

- Attach the service to your vRack.
- Assign it to the appropriate subnet/VLAN in the desired AZ.

### 3. Ensure routing is correct

- Your OVHcloud Connect BGP session should advertise OVHcloud's subnets (172.16.x.x) back to your network.
- Your router should advertise your on-premises subnets (10.0.x.x) to OVHcloud.
- Verify there are no overlapping routes or conflicts.

### 4. Update security policies

- Review any **firewall rules** on your router and OVHcloud-side security groups.
- Ensure that the required traffic (application ports, management protocols) is allowed between subnets.

## Multi-AZ subnet configuration

For a **resilient setup** across multiple AZs:

- Use **different subnets per AZ** (avoid stretching a single /24 across zones).
- Configure BGP to advertise both AZ subnets, with appropriate failover preferences.
- Deploy resources in both AZs and test that traffic can reach each zone independently.

See [Multi-AZ](1.5_multi_az.md) for architecture guidance.

## What's next?

- [Associate OVHcloud Connect with your vRack](3.7_associate_vrack.md)
- [Monitor your connection](3.8_monitor.md)

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
