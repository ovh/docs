---
title: 'Troubleshoot OVHcloud Connect'
excerpt: 'Diagnose and resolve the most common issues encountered with OVHcloud Connect'
updated: 2026-02-18
---

## Objective

This guide helps you diagnose and resolve the most common issues encountered with OVHcloud Connect. Each section describes a known issue, its possible causes, and the steps to fix it.

## Before you begin

### General considerations

- **Always check both sides** — Most OVHcloud Connect issues involve configuration or physical elements on both your side and OVHcloud's side. Verify your router, cross-connect (or provider virtual circuit), and the OVHcloud Control Panel before opening a ticket.
- **Collect diagnostics first** — Before making changes, gather interface status, BGP state, traceroute, and optical values. This information speeds up resolution whether you solve the issue yourself or need to contact support.
- **Check for scheduled maintenance** — Some issues may be caused by planned work on OVHcloud infrastructure or at your provider. Always check the status page before deep-diving into troubleshooting.

### Useful resources

| Resource | Link |
|---|---|
| **FAQ** | [Frequently Asked Questions](../5_faq/guide.en-gb.md) |
| **Glossary** | [Glossary of OVHcloud Connect terms](../1.2_glossary/guide.en-gb.md) |
| **OVHcloud services status** | [status.ovhcloud.com](https://www.status-ovhcloud.com/) |
| **Prerequisites & Limitations** | [Prerequisites & Limitations](../1.8_prerequisites_limitations/guide.en-gb.md) |
| **Monitoring guide** | [Monitor Your OVHcloud Connect](../3.9_monitor/guide.en-gb.md) |
| **Incident follow-up** | [Declare and Follow Up Upon an Incident](../3.10_incident_followup/guide.en-gb.md) |

---

## Issue 1 — No light on the physical link (OVHcloud Connect Direct)

After ordering OVHcloud Connect Direct, the physical link shows no optical signal on one or both sides.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Cross-connect not yet installed** | Contact your data centre operator and provide the LOA. See [Ordering a Cross Connect with an LOA](../3.11_cross_connect_loa/guide.en-gb.md). |
| 2 | **LOA misinterpreted by the data centre** | Verify the LOA details with the PoP operator: cabinet, cage, patch panel, port, fibre termination. See [How to read LOA information](#how-to-read-loa-information) below. |
| 3 | **Tx/Rx fibre inversion** | The transmit and receive fibres may be swapped, causing light to arrive on the wrong port. Ask the data centre operator to check for a Tx/Rx inversion on the cross-connect. |
| 4 | **SFP module issue** | Ensure the SFP matches the ordered bandwidth: 1000Base-LX/LH for 1 Gbps, 10GBase-LR for 10 Gbps, 100GBase-LR4 for 100 Gbps. Replace the SFP if faulty. See [Prerequisites & Limitations](../1.8_prerequisites_limitations/guide.en-gb.md). |
| 5 | **Port disabled or locked** | Check the OVHcloud Control Panel — the port may be administratively locked. If the OUT optical value is DOWN, the port may also be in the process of being cancelled. |
| 6 | **Faulty cross-connect cable** | Ask the data centre operator to test the cable or provision a new one. |

### How to read LOA information

A typical LOA contains information formatted like this:

```
Equipment: 103 PA3:OG:00GMC3:OVH Patch Panel: PP:0103:1132697
Port: P16/FO31-32/BCK Fiber Termination: SC/PC
```

Interpretation:

| Field | Value | Meaning |
|---|---|---|
| Cabinet | 103 | Position of the bay where the rack is located |
| Cage | PA3:OG:00GMC3:OVH | Rack reference |
| Patch Panel (Z-side) | PP:0103:1132697 | Switch position on OVHcloud side |
| Port | 16 | Position on the switch |
| FibreOptic Port A | 31 | Fibre A identifier |
| FibreOptic Port B | 32 | Fibre B identifier |
| Side | BCK (Back) | Front or back of the equipment |
| Fibre Termination | SC/PC | Connector type |

### Checking optical values

In the OVHcloud Control Panel, navigate to **Network** → **OVHcloud Connect** → select your service, and check the IN/OUT optical values:

- **OUT is DOWN** — The OVHcloud-side port is not emitting light. Possible reasons: port issue, service being cancelled, port locked, SFP failure.
- **IN is DOWN** — OVHcloud is not receiving light from your side. Possible reasons: cross-connect not installed, your equipment not connected, your port disabled, Tx/Rx fibre inversion.

### Diagnostic flowchart

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" font-family="Arial, sans-serif" font-size="11">
  <rect width="720" height="520" fill="#f8f9fa" rx="8"/>

  <!-- Start -->
  <rect x="260" y="10" width="200" height="36" rx="18" fill="#1565c0" stroke="none"/>
  <text x="360" y="33" text-anchor="middle" fill="#fff" font-weight="bold">No light on the link</text>

  <!-- Check OUT -->
  <rect x="245" y="70" width="230" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="360" y="93" text-anchor="middle" fill="#1565c0">Is OUT (OVHcloud → You) UP?</text>
  <line x1="360" y1="46" x2="360" y2="70" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- OUT = No -->
  <rect x="30" y="140" width="250" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="155" y="158" text-anchor="middle" fill="#e65100" font-weight="bold">OUT is DOWN</text>
  <text x="155" y="175" text-anchor="middle" fill="#555" font-size="10">Check: port locked? Cancellation? SFP issue?</text>
  <line x1="300" y1="106" x2="155" y2="140" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="210" y="118" fill="#c62828" font-size="10">No</text>

  <!-- OUT = Yes → Check IN -->
  <rect x="440" y="140" width="230" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="555" y="163" text-anchor="middle" fill="#1565c0">Is IN (You → OVHcloud) UP?</text>
  <line x1="420" y1="106" x2="555" y2="140" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="500" y="118" fill="#2e7d32" font-size="10">Yes</text>

  <!-- IN = No -->
  <rect x="440" y="210" width="250" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="565" y="228" text-anchor="middle" fill="#e65100" font-weight="bold">IN is DOWN</text>
  <text x="565" y="245" text-anchor="middle" fill="#555" font-size="10">Check: cross-connect, Tx/Rx swap, your port</text>
  <line x1="555" y1="176" x2="565" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="545" y="195" fill="#c62828" font-size="10">No</text>

  <!-- IN = Yes -->
  <rect x="200" y="210" width="200" height="36" rx="18" fill="#2e7d32" stroke="none"/>
  <text x="300" y="233" text-anchor="middle" fill="#fff" font-weight="bold">Light OK on both sides ✓</text>
  <line x1="480" y1="176" x2="400" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="425" y="195" fill="#2e7d32" font-size="10">Yes</text>

  <!-- Contact support -->
  <rect x="30" y="210" width="150" height="36" rx="6" fill="#fce4ec" stroke="#c62828" stroke-width="1.5"/>
  <text x="105" y="233" text-anchor="middle" fill="#c62828" font-size="10">Contact OVHcloud support</text>
  <line x1="155" y1="190" x2="105" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow marker -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#888"/>
    </marker>
  </defs>
</svg>
```

---

## Issue 2 — Ethernet link down (no peering) despite light being UP

Optical values show UP on both sides, but the Ethernet interface remains DOWN and no peering can be established.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **SFP type mismatch** | The SFP must match the ordered bandwidth. Use **1000Base-LX/LH** for 1 Gbps, **10GBase-LR** for 10 Gbps, **100GBase-LR4** for 100 Gbps. |
| 2 | **Auto-negotiation enabled** | Auto-negotiation is **not supported** on OVHcloud Connect. Disable it on your router (see commands below). |
| 3 | **Speed mismatch** | Your interface speed must match the ordered link speed. Configure it explicitly. |
| 4 | **Faulty SFP or transceiver** | Try replacing the SFP module on your side. |

### Disabling auto-negotiation

**Cisco IOS:**

```
interface GigabitEthernet0/0
 no negotiate auto
```

or:

```
interface GigabitEthernet0/0
 speed nonegotiate
```

**Cisco NX-OS:**

```
interface Ethernet1/1
 speed 1000
 no negotiate auto
```

**Juniper JunOS:**

```
set interfaces ge-0/0/0 ether-options no-auto-negotiation
```

---

## Issue 3 — BGP session stuck in Active or Idle state

The physical link is up, but the BGP session does not reach the `Established` state.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Incorrect peer IP address** | Verify that the peer IP configured on your router matches exactly the IP assigned by OVHcloud in the Control Panel. The PoP peering subnet is a /30: OVHcloud takes the first IP, you take the second. See [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md). |
| 2 | **Incorrect ASN** | Check that you are peering with OVHcloud ASN **35540** and that your own ASN is correctly configured (private ASN range 64512–65534 recommended). Avoid reserved ASNs: **65501** (EU PoP), **65502** (CA PoP), **65519** (Asia PoP). |
| 3 | **VLAN ID mismatch** | The VLAN tag on your interface must match the VLAN ID configured in the OVHcloud Control Panel PoP configuration. Verify with `show interfaces` or `show vlans`. |
| 4 | **Firewall blocking TCP port 179** | BGP uses TCP port 179. Ensure no firewall or ACL is blocking this port between the two peers. |
| 5 | **Interface not configured with correct encapsulation** | For L3 connections, the interface must use 802.1Q encapsulation with the correct VLAN ID. See configuration examples in the [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md). |
| 6 | **PoP configuration not created in OVHcloud** | Verify in the OVHcloud Control Panel that a PoP configuration has been created for your service. Without it, OVHcloud's router will not peer. |
| 7 | **MD5 authentication mismatch** | If MD5 is configured, the password must match on both sides. Check with your OVHcloud Connect service details. |

### Verification commands

**Cisco IOS:**

```
show ip bgp summary
show bgp ipv4 unicast neighbors 192.0.2.1
show interfaces GigabitEthernet0/0
show ip interface brief
```

**Juniper JunOS:**

```
show bgp summary
show bgp neighbor 192.0.2.1
show interfaces terse
```

### Diagnostic flowchart

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 480" font-family="Arial, sans-serif" font-size="11">
  <rect width="720" height="480" fill="#f8f9fa" rx="8"/>

  <!-- Start -->
  <rect x="240" y="10" width="240" height="36" rx="18" fill="#1565c0" stroke="none"/>
  <text x="360" y="33" text-anchor="middle" fill="#fff" font-weight="bold">BGP stuck in Active / Idle</text>

  <!-- Check interface -->
  <rect x="230" y="70" width="260" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="360" y="93" text-anchor="middle" fill="#1565c0">Is the physical interface UP?</text>
  <line x1="360" y1="46" x2="360" y2="70" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>

  <!-- No → fix link -->
  <rect x="30" y="140" width="220" height="40" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="140" y="155" text-anchor="middle" fill="#e65100" font-weight="bold" font-size="10">Fix physical link first</text>
  <text x="140" y="170" text-anchor="middle" fill="#555" font-size="9">See Issue 1 &amp; Issue 2</text>
  <line x1="290" y1="106" x2="140" y2="140" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="200" y="120" fill="#c62828" font-size="10">No</text>

  <!-- Yes → check IP/ASN -->
  <rect x="430" y="140" width="260" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="560" y="163" text-anchor="middle" fill="#1565c0">Do peer IP and ASN match?</text>
  <line x1="430" y1="106" x2="560" y2="140" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="500" y="120" fill="#2e7d32" font-size="10">Yes</text>

  <!-- No → fix config -->
  <rect x="480" y="210" width="220" height="36" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="590" y="233" text-anchor="middle" fill="#e65100" font-size="10">Fix IP/ASN/VLAN configuration</text>
  <line x1="610" y1="176" x2="590" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="615" y="195" fill="#c62828" font-size="10">No</text>

  <!-- Yes → check firewall -->
  <rect x="210" y="210" width="240" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="330" y="233" text-anchor="middle" fill="#1565c0">Is TCP 179 allowed (no FW block)?</text>
  <line x1="490" y1="176" x2="330" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="395" y="195" fill="#2e7d32" font-size="10">Yes</text>

  <!-- No → fix firewall -->
  <rect x="30" y="280" width="200" height="36" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="130" y="303" text-anchor="middle" fill="#e65100" font-size="10">Open TCP 179 on both sides</text>
  <line x1="270" y1="246" x2="130" y2="280" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="185" y="260" fill="#c62828" font-size="10">No</text>

  <!-- Yes → check PoP config -->
  <rect x="310" y="280" width="280" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="450" y="303" text-anchor="middle" fill="#1565c0">Is PoP configuration created in OVHcloud?</text>
  <line x1="385" y1="246" x2="450" y2="280" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="420" y="260" fill="#2e7d32" font-size="10">Yes</text>

  <!-- No → create PoP config -->
  <rect x="475" y="340" width="220" height="36" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="585" y="363" text-anchor="middle" fill="#e65100" font-size="10">Create PoP config in Control Panel</text>
  <line x1="530" y1="316" x2="585" y2="340" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="565" y="330" fill="#c62828" font-size="10">No</text>

  <!-- Yes → contact support -->
  <rect x="230" y="340" width="200" height="36" rx="6" fill="#fce4ec" stroke="#c62828" stroke-width="1.5"/>
  <text x="330" y="363" text-anchor="middle" fill="#c62828" font-size="10">Contact OVHcloud support</text>
  <line x1="395" y1="316" x2="330" y2="340" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="350" y="330" fill="#2e7d32" font-size="10">Yes</text>

  <defs>
    <marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#888"/>
    </marker>
  </defs>
</svg>
```

---

## Issue 4 — BGP session established but no routes received

The BGP session shows `Established`, but no prefixes are being received from OVHcloud (or from your network).

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Missing `network` statement or export policy** | On your router, ensure you are advertising the correct prefixes using `network` commands (Cisco) or export policies (Juniper). See [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md). |
| 2 | **Prefix filter blocking routes** | Your import prefix-list may be too restrictive, filtering out OVHcloud routes. Check your prefix-lists and route policies. |
| 3 | **vRack not associated** | OVHcloud routes are only exchanged if the OVHcloud Connect service is associated with a vRack. Verify the association in the Control Panel. See [Associate with vRack](../3.5_associate_vrack/guide.en-gb.md). |
| 4 | **AZ subnets not configured** | If no subnets are defined in the Availability Zone configuration, there will be no routes to exchange. See [Set up your vRack network](../3.6_vrack_network_setup/guide.en-gb.md). |
| 5 | **Maximum prefix limit reached** | OVHcloud supports up to **100 prefixes** per BGP session. If you exceed this limit, the session may stop accepting new routes. Aggregate your prefixes. |
| 6 | **Route not in the routing table** | The prefix you are trying to advertise must exist in your router's routing table (via a connected network, static route, or IGP). |

### Verification commands

**Cisco IOS:**

```
show ip bgp summary
show ip bgp neighbors 192.0.2.1 received-routes
show ip bgp neighbors 192.0.2.1 advertised-routes
show ip route bgp
```

**Juniper JunOS:**

```
show bgp summary
show route receive-protocol bgp 192.0.2.1
show route advertising-protocol bgp 192.0.2.1
show route protocol bgp
```

---

## Issue 5 — BGP session keeps flapping (repeatedly going up and down)

The BGP session oscillates between `Established` and `Active`/`Idle` states, causing intermittent connectivity.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Unstable physical link** | Check interface error counters (`show interfaces`) for CRC errors, input errors, or output drops. Inspect the SFP, cross-connect cable, and patch panel. |
| 2 | **MTU mismatch** | An MTU mismatch between your equipment and OVHcloud can cause large BGP update packets to be dropped. The default MTU is **1500 bytes**. Confirm MTU settings on both sides. |
| 3 | **BGP hold timer expiry** | Default BGP hold time is 90 seconds. If keepalives are lost due to link instability, the session drops. Consider adjusting BGP timers, but fix the root cause first. |
| 4 | **CPU or memory overload on your router** | BGP processing may be delayed if the router is under high load. Check CPU and memory usage. |
| 5 | **Aggressive prefix changes** | Rapidly withdrawing and re-advertising routes can trigger flap dampening. Stabilise your routing announcements. |

### Verification commands

**Cisco IOS:**

```
show interfaces GigabitEthernet0/0
show ip bgp summary
show ip bgp flap-statistics
show log | include BGP
```

**Juniper JunOS:**

```
show interfaces ge-0/0/0 extensive
show bgp summary
show log messages | match BGP
```

---

## Issue 6 — Traffic not flowing despite BGP session established and routes exchanged

BGP is up, routes appear in the routing table on both sides, but actual traffic (ping, application data) does not flow.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Firewall or ACL blocking traffic** | Check firewall rules and access control lists on your router, your OVHcloud resources (security groups, iptables), and any intermediate devices. |
| 2 | **VLAN tagging mismatch** | The VLAN ID on your interface must match the VLAN configured in OVHcloud. A mismatch results in tagged traffic being silently dropped. |
| 3 | **Incorrect subnet configuration** | Verify that source and destination IPs belong to the correct subnets and that there are no overlapping ranges. See [Set up your vRack network](../3.6_vrack_network_setup/guide.en-gb.md). |
| 4 | **Asymmetric routing** | If you have multiple paths (e.g. internet + OVHcloud Connect), return traffic may take a different path. Ensure symmetric routing using BGP attributes (Local Preference, AS-path prepending). |
| 5 | **vRack resource not attached** | The target OVHcloud resource (Bare Metal server, Public Cloud instance, Hosted Private Cloud) must be attached to the same vRack as OVHcloud Connect. Verify in the Control Panel. |
| 6 | **MTU mismatch causing fragmentation** | Large packets may be silently dropped if MTU differs between segments. Test with varying packet sizes: `ping -s 1472 -M do <destination>` (Linux) to check for fragmentation issues. |

### Verification commands

**From your side:**

```
ping 172.16.1.1
traceroute 172.16.1.1
```

**From a Linux host in OVHcloud:**

```bash
ping -c 10 10.0.0.1
traceroute 10.0.0.1
mtr -r -c 50 10.0.0.1
```

---

## Issue 7 — Slow performance or high latency

The connection is working, but throughput is lower than expected or latency is higher than normal.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Bandwidth saturation** | Check interface utilisation in the OVHcloud Control Panel and on your router. If you consistently exceed 80% of the provisioned bandwidth, plan an upgrade. |
| 2 | **MTU mismatch causing fragmentation** | Fragmented packets reduce effective throughput. Verify MTU end-to-end and run path MTU discovery: `ping -s 1472 -M do <destination>`. |
| 3 | **Interface errors (CRC, FCS, drops)** | Check `show interfaces` for error counters. Physical issues (dirty fibre, bad SFP, loose connector) cause retransmissions and degrade performance. |
| 4 | **Sub-optimal routing** | Traffic may be taking a longer path than expected. Check `traceroute` and BGP attributes (Local Preference, AS-path) to ensure optimal path selection. |
| 5 | **Congestion at the provider** | If using OVHcloud Connect Provider, check the provider's portal (Megaport, Equinix Fabric, Console Connect) for utilisation and alerts on the virtual circuit. |
| 6 | **TCP window size misconfiguration** | For high-bandwidth, high-latency links, ensure TCP window scaling is enabled on hosts to maximise throughput. |

### Verification commands

**Cisco IOS:**

```
show interfaces GigabitEthernet0/0 | include rate|error|drop|CRC
show ip route 172.16.1.0
```

**From a Linux host:**

```bash
iperf3 -c <destination> -t 30
mtr -r -c 100 <destination>
```

---

## Issue 8 — Provider virtual circuit not connecting (OVHcloud Connect Provider)

You have ordered an OVHcloud Connect Provider service, but the connection through your provider (Megaport, Equinix Fabric, or Console Connect) is not coming up.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Incorrect pairing key / service key** | Verify that the pairing key (or service key) entered in your provider's portal exactly matches the key from the OVHcloud Control Panel. |
| 2 | **Provider virtual circuit not provisioned** | Check the status of the VXC (Megaport), virtual connection (Equinix), or connection (Console Connect) in the provider's portal. It should show as "Active" or "Provisioned". |
| 3 | **Provider does not have presence at the PoP** | The provider must be available at the OVHcloud PoP you selected. Verify PoP availability in [Providers](../1.3_providers/guide.en-gb.md) and [PoP Locations](../1.4_pop_locations_regions/guide.en-gb.md). |
| 4 | **Bandwidth mismatch** | The bandwidth ordered on the provider side must match or be compatible with the OVHcloud Connect service bandwidth. |
| 5 | **Provider-side maintenance or outage** | Check your provider's status page for ongoing incidents or planned maintenance. |

> **Tip:** If the provider portal shows the connection as "Active" but OVHcloud still shows it as "Pending", wait a few minutes for the provisioning to complete. If it persists beyond 30 minutes, contact OVHcloud support.

---

## Issue 9 — Service ordered but not delivered / not configurable

Your OVHcloud Connect service appears in the Control Panel but cannot be configured.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Cross-connect not yet installed (Direct)** | The service becomes configurable once OVHcloud detects light on the port. Order the cross-connect from your data centre operator using the LOA and ensure your equipment is connected. |
| 2 | **60-day interconnection window (Direct)** | After the order, you have **60 days** to finalize the interconnection (order the cross-connect and interconnect your equipment). Beyond 60 days — even without detected light — the service is considered operational and billing starts. |
| 3 | **Provider circuit not yet linked (Provider)** | Ensure the provider virtual circuit is provisioned and linked to the OVHcloud service using the correct pairing key. |
| 4 | **Provisioning in progress** | New services may take a few minutes to become configurable after ordering. Wait and refresh the Control Panel. |
| 5 | **Order issue** | If the service remains in "Pending" state for an extended period, contact OVHcloud support with your order reference. |

---

## Issue 10 — Failover not working in Multi-AZ setup

You have two OVHcloud Connect links for redundancy, but traffic does not failover when one link goes down.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Both links in the same PoP** | For true Multi-AZ resilience, the two links must terminate at **different PoPs** and **different Availability Zones**. See [Multi-AZ](../1.5_multi_az/guide.en-gb.md). |
| 2 | **BGP failover not configured** | Configure BGP attributes to control path selection: use **Local Preference** to prefer the primary path and **AS-path prepending** on the backup. See [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md). |
| 3 | **BFD not enabled** | Without BFD, BGP failover relies on hold timers (default 90 seconds). Enable **BFD (Bidirectional Forwarding Detection)** to reduce failover time to under 1 second. Contact OVHcloud support to confirm BFD availability for your service. |
| 4 | **vRack not shared between both services** | Both OVHcloud Connect services must be associated with the **same vRack** for failover to work. Verify in the Control Panel. See [Associate with vRack](../3.5_associate_vrack/guide.en-gb.md). |
| 5 | **Prefix-list filtering backup routes** | Ensure your import/export prefix filters allow the same prefixes on both links. |

### Verification commands

**Cisco IOS:**

```
show ip bgp
show ip bgp summary
show ip route bgp
show ip bgp neighbors 192.0.2.1
show ip bgp neighbors 198.51.100.1
```

Check that both BGP sessions are `Established` and that routes are received from both peers with different attributes (Local Preference, AS-path length).

---

## Issue 11 — IP address conflict in PoP or DC configuration

BGP session may not establish, or traffic may be routed incorrectly due to IP address conflicts.

### Possible causes and solutions

| # | Possible cause | Solution |
|---|---|---|
| 1 | **Using OVHcloud reserved IPs** | In the PoP /30 subnet, the **first IP** is reserved for OVHcloud. In the DC /28 (minimum) subnet, the **first three IPs** are reserved for OVHcloud. Ensure you are using the correct IPs. |
| 2 | **Overlapping subnets** | Your on-premises subnets must not overlap with subnets used in the OVHcloud vRack. Plan your IP addressing carefully. See [Set up your vRack network](../3.6_vrack_network_setup/guide.en-gb.md). |
| 3 | **Duplicate ASN** | Your BGP ASN must differ from OVHcloud's ASN (35540) and from the reserved ASNs (65501, 65502, 65519). |

---

## Issue 12 — Unsupported features or unexpected behaviour

Certain features may not work as expected due to current platform limitations.

### Known limitations

| Feature | Status | Notes |
|---|---|---|
| **IPv6** | Not supported | OVHcloud Connect currently supports IPv4 only. |
| **QoS / CoS** | Not supported | No quality of service or 802.1p class of service mechanisms. |
| **802.1q VLAN tagging (L2 mode)** | Supported | But L2 mode is available on OVHcloud Connect Direct only. |
| **Multi-VRF** | Not supported | Only a single routing instance per OVHcloud Connect service. |
| **eBGP Multi-Hop** | Not supported | BGP peering must be directly connected (single hop). |
| **iBGP** | Not supported | Only eBGP is supported. |
| **Static routing at PoP** | Not supported | All routing is done via BGP. |
| **Spanning Tree (L2)** | Not supported | L2 mode does not pass BPDUs. |
| **Multicast / IGMP (L2)** | Not supported | Only unicast traffic is supported in L2 mode. |
| **FCoE (L2)** | Not supported | Fibre Channel over Ethernet is not supported. |
| **LACP (L2)** | Supported | Can be used for link aggregation in L2 mode within a single PoP. |

For the full list of prerequisites and limitations, see [Prerequisites & Limitations](../1.8_prerequisites_limitations/guide.en-gb.md).

---

## Quick reference: diagnostic commands

### Cisco IOS / IOS-XE

| Purpose | Command |
|---|---|
| Interface status | `show interfaces GigabitEthernet0/0` |
| Interface brief | `show ip interface brief` |
| BGP session summary | `show ip bgp summary` |
| BGP neighbour details | `show bgp ipv4 unicast neighbors <peer-IP>` |
| Routes received from peer | `show ip bgp neighbors <peer-IP> received-routes` |
| Routes advertised to peer | `show ip bgp neighbors <peer-IP> advertised-routes` |
| BGP routing table | `show ip route bgp` |
| BGP flap statistics | `show ip bgp flap-statistics` |
| Logs | `show log \| include BGP` |

### Juniper JunOS

| Purpose | Command |
|---|---|
| Interface status | `show interfaces ge-0/0/0 extensive` |
| Interface summary | `show interfaces terse` |
| BGP session summary | `show bgp summary` |
| BGP neighbour details | `show bgp neighbor <peer-IP>` |
| Routes received from peer | `show route receive-protocol bgp <peer-IP>` |
| Routes advertised to peer | `show route advertising-protocol bgp <peer-IP>` |
| BGP routing table | `show route protocol bgp` |
| Logs | `show log messages \| match BGP` |

### Linux host

| Purpose | Command |
|---|---|
| Connectivity test | `ping -c 10 <destination>` |
| Path trace | `traceroute <destination>` |
| Combined ping + trace | `mtr -r -c 50 <destination>` |
| MTU test (no fragmentation) | `ping -s 1472 -M do <destination>` |
| Throughput test | `iperf3 -c <destination> -t 30` |

---

## When to contact support

If you have followed the troubleshooting steps above and the issue persists, open a support ticket:

1. From the [OVHcloud Control Panel](/links/manager), go to **Support** → **Create a ticket**.
2. Select **Network** → **OVHcloud Connect**.
3. Include:
   - Your OVHcloud Connect **service name/ID**
   - **Timestamp** of the issue (UTC)
   - **Symptoms** observed
   - **Diagnostic outputs** (BGP summary, interface status, traceroute, optical values)
   - **Steps already taken** to troubleshoot
4. See [Declare and Follow Up Upon an Incident](../3.10_incident_followup/guide.en-gb.md) for the full incident management process.

---

## What's next?

- Set up proactive [monitoring](../3.9_monitor/guide.en-gb.md) to detect issues before they impact your users
- Review [Prerequisites & Limitations](../1.8_prerequisites_limitations/guide.en-gb.md) to avoid known pitfalls
- Consult the [FAQ](../5_faq/guide.en-gb.md) for answers to common questions
- Check [SLAs](../1.7_slas/guide.en-gb.md) for uptime guarantees and service credits

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
