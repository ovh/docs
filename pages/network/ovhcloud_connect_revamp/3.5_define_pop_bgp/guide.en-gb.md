---
title: 'Define Your PoP Configuration (BGP Session)'
excerpt: 'Learn how to configure the BGP session between your router and OVHcloud at the Point of Presence'
updated: 2026-02-18
---

## Objective

This guide explains how to configure the **BGP (Border Gateway Protocol) session** between your router and OVHcloud at the Point of Presence (PoP). BGP is the routing protocol that tells each side which IP networks are reachable through the OVHcloud Connect link.

## Overview

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 160" font-family="Arial, sans-serif" font-size="12">
  <rect width="700" height="160" fill="#f8f9fa" rx="8"/>

  <!-- Your Router -->
  <rect x="30" y="40" width="180" height="80" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="120" y="65" text-anchor="middle" font-weight="bold" fill="#1565c0">Your Router</text>
  <text x="120" y="85" text-anchor="middle" fill="#555" font-size="10">ASN: 65001</text>
  <text x="120" y="100" text-anchor="middle" fill="#555" font-size="10">IP: 192.0.2.2/30</text>

  <!-- OVHcloud Router -->
  <rect x="470" y="40" width="180" height="80" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="560" y="65" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud Router</text>
  <text x="560" y="85" text-anchor="middle" fill="#555" font-size="10">ASN: 35540</text>
  <text x="560" y="100" text-anchor="middle" fill="#555" font-size="10">IP: 192.0.2.1/30</text>

  <!-- BGP Arrow -->
  <line x1="210" y1="80" x2="470" y2="80" stroke="#e65100" stroke-width="2" stroke-dasharray="8,4"/>
  <text x="340" y="70" text-anchor="middle" fill="#e65100" font-weight="bold">BGP Session (eBGP)</text>
  <text x="340" y="95" text-anchor="middle" fill="#555" font-size="10">Routes exchanged</text>
</svg>
```

## What you need

Before configuring BGP, gather the following information from your OVHcloud Connect provisioning details:

| Parameter | Example value | Where to find it |
|---|---|---|
| **OVHcloud ASN** | 35540 | OVHcloud Connect service details in Control Panel |
| **OVHcloud peer IP** | 192.0.2.1 | PoP configuration in Control Panel |
| **Your peer IP** | 192.0.2.2 | Assigned from the /30 peering subnet |
| **Your ASN** | 65001 (private) or your public ASN | You choose this during ordering |
| **VLAN ID** | 100 | PoP configuration in Control Panel |

## Step 1 — Create the PoP configuration in OVHcloud

1. Log in to the [OVHcloud Control Panel](https://www.ovh.com/manager/).
2. Navigate to **Network** → **OVHcloud Connect** → select your service.
3. Go to the **PoP configuration** section.
4. Click **Add a configuration**.
5. Enter:
   - Your **ASN**
   - The **peering subnet** (e.g. 192.0.2.0/30)
   - The **VLAN ID** for this connection
6. Save the configuration.

OVHcloud will display the peer IP addresses and ASN to use on your router.

## Step 2 — Configure BGP on your router

Below are example configurations for common platforms. **Replace the example values** with your actual parameters.

### Cisco IOS / IOS-XE

```
! Interface facing OVHcloud
interface GigabitEthernet0/0
 description OVHcloud Connect
 encapsulation dot1Q 100
 ip address 192.0.2.2 255.255.255.252
 no shutdown

! BGP configuration
router bgp 65001
 bgp log-neighbor-changes
 neighbor 192.0.2.1 remote-as 35540
 neighbor 192.0.2.1 description OVHcloud-Peer
 !
 address-family ipv4 unicast
  neighbor 192.0.2.1 activate
  network 10.0.0.0 mask 255.255.0.0
  ! Only advertise your own prefixes
  neighbor 192.0.2.1 prefix-list MY-PREFIXES out
  neighbor 192.0.2.1 prefix-list OVH-PREFIXES in
  neighbor 192.0.2.1 maximum-prefix 100

ip prefix-list MY-PREFIXES seq 10 permit 10.0.0.0/16
ip prefix-list OVH-PREFIXES seq 10 permit 172.16.0.0/12 le 24
```

### Juniper JunOS

```
interfaces {
    ge-0/0/0 {
        description "OVHcloud Connect";
        vlan-tagging;
        unit 100 {
            vlan-id 100;
            family inet {
                address 192.0.2.2/30;
            }
        }
    }
}

protocols {
    bgp {
        group OVHcloud {
            type external;
            peer-as 35540;
            local-address 192.0.2.2;
            neighbor 192.0.2.1 {
                description "OVHcloud Peer";
                import OVH-IMPORT;
                export MY-EXPORT;
            }
        }
    }
}

policy-options {
    policy-statement MY-EXPORT {
        term allow {
            from {
                route-filter 10.0.0.0/16 exact;
            }
            then accept;
        }
        term reject {
            then reject;
        }
    }
    policy-statement OVH-IMPORT {
        term accept-ovh {
            from {
                route-filter 172.16.0.0/12 orlonger;
            }
            then accept;
        }
        term reject {
            then reject;
        }
    }
}
```

## Step 3 — Verify the BGP session

After configuring both sides, verify the session is established:

### Cisco

```
show ip bgp summary
show bgp ipv4 unicast neighbors 192.0.2.1
show ip route bgp
```

### Juniper

```
show bgp summary
show bgp neighbor 192.0.2.1
show route protocol bgp
```

Expected results:

| Check | Expected output |
|---|---|
| **BGP state** | `Established` |
| **Prefixes received** | At least 1 route from OVHcloud |
| **Prefixes sent** | Your advertised prefixes visible |

## Best practices

- **Only advertise prefixes you own** — Do not leak third-party routes through OVHcloud Connect.
- **Apply prefix filters** — Use prefix-lists on both import and export to prevent accidental route leaks.
- **Set maximum-prefix limits** — Protect your router from receiving an unexpected number of routes.
- **Use MD5 authentication** — If required, configure MD5 on the BGP session for added security.
- **Monitor the session** — Set up alerts for BGP flaps and session drops (see [Monitor](3.8_monitor.md)).
- **For redundant setups** — Use Local Preference or AS-path prepending to control primary/backup path selection (see [Multi-AZ](1.5_multi_az.md)).

## Troubleshooting

| Issue | Possible cause | Solution |
|---|---|---|
| BGP stuck in `Active` | Incorrect peer IP or ASN | Verify IP addresses and ASN on both sides |
| BGP stuck in `Idle` | Interface down or firewall blocking TCP 179 | Check physical link, VLAN config, and firewall rules |
| No routes received | Missing `network` statement or prefix filter | Verify export policy and `network` commands |
| Session drops frequently (flapping) | Unstable physical link or MTU mismatch | Check interface errors, SFP, and MTU settings |

## What's next?

- [Define your AZ configuration (private subnets)](3.6_define_az_subnets.md)
- [Associate with your vRack](3.7_associate_vrack.md)

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
