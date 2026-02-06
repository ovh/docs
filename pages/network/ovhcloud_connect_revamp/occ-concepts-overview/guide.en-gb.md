---
title: Concepts overview
excerpt: 'Concepts overview - OVHcloud Connect'
updated: 2025-10-29
---
# What is OVHcloud Connect?

OVHcloud Connect is a **dedicated, private network connection** between your infrastructure and OVHcloud. Instead of routing traffic over the public internet, OVHcloud Connect establishes a direct link that offers better security, lower latency, and guaranteed bandwidth.

## Who is it for?

OVHcloud Connect is designed for organisations that need:

- **Reliable connectivity** for business-critical applications (ERP, databases, backups)
- **Enhanced security** by keeping traffic off the public internet
- **Predictable performance** with dedicated bandwidth (no shared bottlenecks)
- **Multi-cloud or hybrid-cloud** architectures connecting on-premises data centres, AWS, Azure, GCP, or WAN networks to OVHcloud

## How does it work?

OVHcloud Connect links your network to OVHcloud through a **Point of Presence (PoP)** — a physical location where OVHcloud has networking equipment. You can establish this link in two ways:

| Connection type | How it works | Best for |
|---|---|---|
| **OVHcloud Connect Direct** | You manage a physical cable (cross-connect) between your equipment and OVHcloud's equipment in a shared data centre. | Organisations already present in an OVHcloud PoP data centre. |
| **OVHcloud Connect Provider** | A third-party network provider (e.g. Megaport, Equinix Fabric, Console Connect) handles the physical connection on your behalf. | Organisations that are not co-located with OVHcloud or prefer a managed connectivity service. |

Once the physical link is established, routing is configured using **BGP (Border Gateway Protocol)**, and the connection is associated with your **vRack** — OVHcloud's virtual private network — so your OVHcloud resources can communicate privately with your external infrastructure.

## Architecture overview

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" font-family="Arial, sans-serif" font-size="13">
  <!-- Background -->
  <rect width="800" height="320" fill="#f8f9fa" rx="8"/>

  <!-- Your Infrastructure -->
  <rect x="30" y="40" width="200" height="240" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
  <text x="130" y="70" text-anchor="middle" font-weight="bold" fill="#1565c0">Your Infrastructure</text>
  <rect x="55" y="90" width="150" height="40" rx="5" fill="#fff" stroke="#90caf9"/>
  <text x="130" y="115" text-anchor="middle" fill="#333">On-Premises DC</text>
  <rect x="55" y="145" width="150" height="40" rx="5" fill="#fff" stroke="#90caf9"/>
  <text x="130" y="170" text-anchor="middle" fill="#333">WAN / SD-WAN</text>
  <rect x="55" y="200" width="150" height="40" rx="5" fill="#fff" stroke="#90caf9"/>
  <text x="130" y="225" text-anchor="middle" fill="#333">AWS / Azure / GCP</text>

  <!-- PoP -->
  <rect x="300" y="80" width="200" height="160" rx="8" fill="#fff3e0" stroke="#e65100" stroke-width="2"/>
  <text x="400" y="110" text-anchor="middle" font-weight="bold" fill="#e65100">PoP (Point of Presence)</text>
  <rect x="325" y="125" width="150" height="35" rx="5" fill="#fff" stroke="#ffcc80"/>
  <text x="400" y="148" text-anchor="middle" fill="#333">Cross-Connect</text>
  <rect x="325" y="175" width="150" height="35" rx="5" fill="#fff" stroke="#ffcc80"/>
  <text x="400" y="198" text-anchor="middle" fill="#333">BGP Session</text>

  <!-- OVHcloud -->
  <rect x="570" y="40" width="200" height="240" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="670" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
  <rect x="595" y="90" width="150" height="40" rx="5" fill="#fff" stroke="#a5d6a7"/>
  <text x="670" y="115" text-anchor="middle" fill="#333">vRack</text>
  <rect x="595" y="145" width="150" height="40" rx="5" fill="#fff" stroke="#a5d6a7"/>
  <text x="670" y="170" text-anchor="middle" fill="#333">Bare Metal Servers</text>
  <rect x="595" y="200" width="150" height="40" rx="5" fill="#fff" stroke="#a5d6a7"/>
  <text x="670" y="225" text-anchor="middle" fill="#333">Public Cloud VMs</text>

  <!-- Arrows -->
  <line x1="230" y1="160" x2="300" y2="160" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="500" y1="160" x2="570" y2="160" stroke="#555" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="265" y="150" text-anchor="middle" fill="#555" font-size="11">Direct or</text>
  <text x="265" y="165" text-anchor="middle" fill="#555" font-size="11">Provider</text>
  <text x="535" y="150" text-anchor="middle" fill="#555" font-size="11">Private</text>
  <text x="535" y="165" text-anchor="middle" fill="#555" font-size="11">Link</text>

  <!-- Arrow marker -->
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## Key benefits

- **Security** — Traffic stays on a private link, reducing exposure to internet-based threats.
- **Performance** — Dedicated bandwidth means no congestion from other users.
- **Reliability** — SLA-backed uptime with options for redundant, multi-path architectures.
- **Flexibility** — Works with on-premises, WAN, and major public cloud providers (AWS, Azure, GCP).
- **Integration** — Connects seamlessly with OVHcloud's vRack private networking and all vRack-compatible services (Bare Metal, Hosted Private Cloud, Public Cloud).

## What's next?

- Review the [Glossary](1.2_glossary.md) to understand key terms
- See the list of [Providers](1.3_providers.md) available for managed connectivity
- Jump to the [Quick Start guides](../docs_opus46/2.1_quick_start_direct.md) to get connected
