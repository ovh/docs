# PoP Locations & Regions

A **Point of Presence (PoP)** is a physical location where OVHcloud operates networking equipment that allows you to connect to OVHcloud's backbone. When setting up OVHcloud Connect, you choose one or more PoPs as the hand-off point between your network and OVHcloud.

## Understanding regions and PoPs

OVHcloud organises its infrastructure into **regions** — geographical areas where data centres and services are hosted. Each region may contain one or more PoPs where OVHcloud Connect is available.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 260" font-family="Arial, sans-serif" font-size="12">
  <rect width="750" height="260" fill="#f8f9fa" rx="8"/>

  <!-- Europe -->
  <rect x="20" y="20" width="340" height="220" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="190" y="45" text-anchor="middle" font-weight="bold" fill="#1565c0" font-size="14">Europe</text>

  <rect x="35" y="60" width="145" height="55" rx="5" fill="#fff" stroke="#90caf9"/>
  <text x="107" y="80" text-anchor="middle" font-weight="bold" fill="#333">France</text>
  <text x="107" y="100" text-anchor="middle" fill="#555" font-size="10">GRA · SBG · PAR</text>

  <rect x="200" y="60" width="145" height="55" rx="5" fill="#fff" stroke="#90caf9"/>
  <text x="272" y="80" text-anchor="middle" font-weight="bold" fill="#333">Germany</text>
  <text x="272" y="100" text-anchor="middle" fill="#555" font-size="10">FRA · LIM</text>

  <rect x="35" y="130" width="145" height="55" rx="5" fill="#fff" stroke="#90caf9"/>
  <text x="107" y="150" text-anchor="middle" font-weight="bold" fill="#333">United Kingdom</text>
  <text x="107" y="170" text-anchor="middle" fill="#555" font-size="10">LON</text>

  <rect x="200" y="130" width="145" height="55" rx="5" fill="#fff" stroke="#90caf9"/>
  <text x="272" y="150" text-anchor="middle" font-weight="bold" fill="#333">Netherlands / Poland</text>
  <text x="272" y="170" text-anchor="middle" fill="#555" font-size="10">AMS · WAW</text>

  <!-- North America -->
  <rect x="390" y="20" width="170" height="110" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="475" y="45" text-anchor="middle" font-weight="bold" fill="#2e7d32" font-size="14">North America</text>
  <rect x="405" y="60" width="140" height="55" rx="5" fill="#fff" stroke="#a5d6a7"/>
  <text x="475" y="80" text-anchor="middle" font-weight="bold" fill="#333">Canada</text>
  <text x="475" y="100" text-anchor="middle" fill="#555" font-size="10">BHS</text>

  <!-- Asia-Pacific -->
  <rect x="390" y="145" width="170" height="95" rx="8" fill="#fce4ec" stroke="#c62828" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="475" y="170" text-anchor="middle" font-weight="bold" fill="#c62828" font-size="14">Asia-Pacific</text>
  <rect x="405" y="185" width="140" height="40" rx="5" fill="#fff" stroke="#ef9a9a"/>
  <text x="475" y="210" text-anchor="middle" fill="#555" font-size="10">SGP · SYD</text>

  <!-- Note -->
  <text x="590" y="120" fill="#888" font-size="10" font-style="italic">Availability may vary.</text>
  <text x="590" y="135" fill="#888" font-size="10" font-style="italic">Check the OVHcloud</text>
  <text x="590" y="150" fill="#888" font-size="10" font-style="italic">Control Panel for the</text>
  <text x="590" y="165" fill="#888" font-size="10" font-style="italic">latest PoP list.</text>
</svg>
```

> **Note:** The PoP list above is indicative. OVHcloud regularly adds new locations. Always check the [OVHcloud Connect webpage](https://www.ovhcloud.com/fr/network/ovhcloud-connect/) or the OVHcloud Control Panel for the most up-to-date list.

## How to choose a PoP

When selecting a PoP for your OVHcloud Connect service, consider:

### 1. Proximity (latency)

Choose the PoP that is geographically closest to your infrastructure to minimise network delay. For example, if your data centre is in Paris, a French PoP (PAR, GRA) will provide the lowest latency.

### 2. Provider availability

If you are using OVHcloud Connect Provider, verify that your chosen provider has a presence at the PoP. Not all providers are available at every PoP.

### 3. Redundancy

For high-availability architectures, select **two PoPs in different locations** so that a single site failure does not take down your connection. See [Multi-AZ](1.5_multi_az.md) for details.

### 4. Regulatory / data residency requirements

Some industries or countries require data to stay within a specific geography. Choose a PoP and region that comply with your data residency obligations.

### 5. Target OVHcloud region

Your OVHcloud Connect service should terminate in the region where your OVHcloud workloads are running (or will run). Verify that the PoP serves the region you need.

## PoPs and data centres

OVHcloud PoPs are located inside major carrier-neutral data centre campuses (such as Equinix, Interxion/Digital Realty, Telehouse, and others). If you are ordering a **Direct** connection, you need to be present (or arrange a circuit) in the same campus to install a cross-connect.

If you are using a **Provider**, the provider handles the physical connectivity and may reach the PoP from a different facility.

## What's next?

- Understand [Multi-AZ](1.5_multi_az.md) for resilient architectures
- Review [PoP configuration and BGP](3.5_define_pop_bgp.md) for technical setup
