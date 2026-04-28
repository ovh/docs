---
title: 'OVHcloud Connect - Configure L3 with BGP'
excerpt: 'Configure OVHcloud Connect L3 using BGP for dynamic route exchange between your network and OVHcloud'
updated: 2026-04-14
---

## Objective

**This guide explains how to** configure OVHcloud Connect in L3 mode with BGP. This involves two levels of configuration:

1. **PoP configuration** — The eBGP session between your router and OVHcloud at the Point of Presence.
2. **AZ extra configuration (BGP)** — BGP peering within the OVHcloud AZ for route distribution.

> [!primary]
> If you prefer static routing instead of BGP, see [Configure OVHcloud Connect L3 with static routing](/pages/network/ovhcloud_connect_revamp/3.8_occ_l3_static).

## Requirements

- An active [OVHcloud account](/links/manager)
- An active OVHcloud Connect service (status `active`)
- OVHcloud Connect associated with a vRack — see [Associate OVHcloud Connect with your vRack](/pages/network/ovhcloud_connect_revamp/3.5_associate_vrack)
- An AZ configuration created — see [Set up vRack networking](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup)
- Your ASN (a public ASN or a private ASN in the range 64512–65534)
- A /30 peering subnet (e.g. `192.0.2.0/30`)
- OVHcloud API credentials (Application Key, Application Secret, Consumer Key). Refer to the [First steps with the OVHcloud API](/pages/manage-and-operate/api/first-steps) guide.

## Instructions

### Overview

```
Your Router ── [ eBGP at PoP ] ── OVHcloud PoP Router ── [ iBGP at DC ] ── vRack Router ── Services
   ASN 65001        /30 peering         ASN 35540           AZ        (172.16.x.x)
                                                           extra config
```

- **PoP level**: An eBGP session between your router (your ASN) and OVHcloud (ASN 35540) over a /30 peering subnet.
- **AZ level**: A BGP neighbour configured inside the AZ to distribute routes to your OVHcloud services.

### Step 1 — Identify your interface ID

Retrieve the interface ID for your OVHcloud Connect service:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/interface
>


### Step 2 — Create the PoP configuration (L3)

The PoP configuration establishes the L3 BGP session at the Point of Presence.

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop
>

**Request parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `interfaceId` | long | Yes | ID of the OVHcloud Connect interface |
| `type` | string | Yes | `l3` for Layer 3 mode |
| `customerBgpArea` | long | No | Your private AS number (e.g. `65001`) |
| `ovhBgpArea` | long | No | OVHcloud private AS (usually left empty — assigned automatically) |
| `subnet` | ipv4Block | No | /30 peering subnet (e.g. `192.0.2.0/30`). First IP is OVHcloud, second is yours. |

**Example request:**


The `resourceId` in the response is your new `popId`.

### Step 3 — Verify the PoP configuration

Once the task completes:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}
>


**Example response:**

```json
{
  "id": 5678,
  "interfaceId": 101,
  "type": "l3",
  "customerBgpArea": 65001,
  "ovhBgpArea": 35540,
  "subnet": "192.0.2.0/30",
  "status": "active"
}
```

From this response, note:

| Parameter | Value | Meaning |
|---|---|---|
| **OVHcloud peer IP** | `192.0.2.1` | First IP of the /30 — OVHcloud side |
| **Your peer IP** | `192.0.2.2` | Second IP of the /30 — your router |
| **OVHcloud ASN** | `35540` | The `ovhBgpArea` value |
| **Your ASN** | `65001` | The `customerBgpArea` value |

Check the BGP session state:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/status
>


### Step 4 — Create AZ extra configuration (BGP)

After the PoP configuration and the [AZ configuration](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup), create a **BGP extra configuration** to enable BGP route distribution within the AZ.

> [!warning]
> Enabling BGP at the AZ level **disables VRRP** on that AZ configuration. BGP handles failover instead. You must establish a BGP session with **both** OVHcloud device A and device B (up to 4 BGP peers per AZ). By default, BFD (Bidirectional Forwarding Detection) is activated on all AZ BGP sessions — enabling BFD on your side as well is strongly recommended for faster convergence.

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

**Request parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | `bgp` for BGP routing |
| `bgpNeighborArea` | long | No | BGP AS number for the AZ neighbour |
| `bgpNeighborIp` | ipv4 | No | Router IP for the BGP session within the AZ |

**Example request:**


Verify the extra configuration:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}
>

**Example response:**

```json
{
  "id": 4567,
  "type": "bgp",
  "bgpNeighborArea": 65501,
  "bgpNeighborIp": "172.16.1.1",
  "nextHop": null,
  "subnet": null,
  "status": "active"
}
```

### Step 5 — Configure BGP on your router

Configure your physical router to establish the eBGP session with OVHcloud at the PoP. **Replace the example values** with your actual parameters from Step 3.

#### Cisco IOS / IOS-XE

```
! Interface facing OVHcloud
interface GigabitEthernet0/0
 description OVHcloud Connect
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

#### Juniper JunOS

```
interfaces {
    ge-0/0/0 {
        description "OVHcloud Connect";
        unit 0 {
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

### Step 6 — Verify the BGP session

#### From your router

**Cisco:**

```
show ip bgp summary
show bgp ipv4 unicast neighbors 192.0.2.1
show ip route bgp
```

**Juniper:**

```
show bgp summary
show bgp neighbor 192.0.2.1
show route protocol bgp
```

**Expected results:**

| Check | Expected output |
|---|---|
| **BGP state** | `Established` |
| **Prefixes received** | At least 1 route from OVHcloud (your AZ subnets) |
| **Prefixes sent** | Your advertised prefixes visible |

#### From the OVHcloud API

Check PoP statistics (accepted prefixes):

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/statistics
>


#### Run a diagnostic

If the session does not come up, run a peering diagnostic:

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/diagnostic
>


Available diagnostic names: `diagPeering`, `diagPeeringExtra`, `diagRoutes`, `diagMacs`.

### Best practices

- **Only advertise prefixes you own.** Do not leak third-party routes through OVHcloud Connect.
- **Apply prefix filters.** Use prefix-lists on both import and export to prevent accidental route leaks.
- **Set maximum-prefix limits.** Protect your router from receiving an unexpected number of routes.
- **Use MD5 authentication.** If required, configure MD5 on the BGP session for added security.
- **Monitor the session.** Set up alerts for BGP flaps and session drops — see [Monitor your connection](/pages/network/ovhcloud_connect_revamp/3.9_monitor).
- **For redundant setups.** Use Local Preference or AS-path prepending to control primary/backup path selection — see [Multi-AZ](/pages/network/ovhcloud_connect_revamp/1.5_multi_az).

### Troubleshooting

| Issue | Possible cause | Solution |
|---|---|---|
| BGP stuck in `Active` | Incorrect peer IP or ASN | Verify IP addresses and ASN on both sides. Use `GET .../config/pop/{popId}` to check OVHcloud-side values. |
| BGP stuck in `Idle` | Interface down or firewall blocking TCP 179 | Check physical link and firewall rules. Use `GET .../interface/{id}/status` to check link status. |
| No routes received | Missing `network` statement or prefix filter too restrictive | Verify export policy and `network` commands. Run `diagRoutes` diagnostic. |
| Session drops frequently (flapping) | Unstable physical link or MTU mismatch | Check interface errors and MTU settings. Use `GET .../interface/{id}/statistics` to check error counters. |
| PoP config stuck in `init` status | Task still in progress or failed | Check `GET .../task` for pending tasks. |

### Delete configurations

To remove the BGP configuration, delete in reverse order:

> [!api]
>
> @api {v1} DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}
>

> [!api]
>
> @api {v1} DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}
>


## Go further

- [Set up vRack networking](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup) — If you have not configured AZ subnets yet
- [Associate OVHcloud Connect with your vRack](/pages/network/ovhcloud_connect_revamp/3.5_associate_vrack)
- [Monitor your connection](/pages/network/ovhcloud_connect_revamp/3.9_monitor)

Join our [community of users](/links/community).
