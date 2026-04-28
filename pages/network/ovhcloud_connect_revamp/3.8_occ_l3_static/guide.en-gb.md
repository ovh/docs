---
title: 'OVHcloud Connect - Configure L3 with static routing'
excerpt: 'Configure OVHcloud Connect L3 using static IP routes for predictable routing between your network and OVHcloud'
updated: 2026-04-14
---

## Objective

**This guide explains how to** configure OVHcloud Connect in L3 mode with static routing. This involves two levels of configuration:

1. **PoP configuration** — The L3 session between your router and OVHcloud at the Point of Presence.
2. **AZ extra configuration (network)** — Static routes within the OVHcloud AZ for route distribution.

> [!primary]
> If you prefer dynamic routing with BGP, see [Configure OVHcloud Connect L3 with BGP](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_bgp).

### When to use static routing vs BGP

| Criteria | Static routing | BGP |
|---|---|---|
| **Number of prefixes** | Small (1–5 routes) | Large or growing |
| **Network topology** | Simple, single-path | Complex, multi-path, multi-AZ |
| **Failover** | Manual — you must update routes yourself | Automatic — BGP reconverges |
| **Maintenance** | Routes must be updated manually when subnets change | Routes update dynamically |
| **Complexity** | Low — no routing protocol to manage | Higher — requires BGP configuration |

Use static routing when you have a simple setup with a small number of stable prefixes and do not require automatic failover.

## Requirements

- An active [OVHcloud account](/links/manager)
- An active OVHcloud Connect service (status `active`)
- OVHcloud Connect associated with a vRack — see [Associate OVHcloud Connect with your vRack](/pages/network/ovhcloud_connect_revamp/3.5_associate_vrack)
- An AZ configuration created — see [Set up vRack networking](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup)
- A /30 peering subnet (e.g. `192.0.2.0/30`)
- OVHcloud API credentials (Application Key, Application Secret, Consumer Key). Refer to the [First steps with the OVHcloud API](/pages/manage-and-operate/api/first-steps) guide.

## Instructions

### Overview

```
Your Router ── [ L3 at PoP ] ── OVHcloud PoP Router ── [ Static routes at DC ] ── vRack Router ── Services
                 /30 peering                                next-hop + subnet       (172.16.x.x)
```

- **PoP level**: An L3 session with a /30 peering subnet between your router and OVHcloud.
- **AZ level**: Static routes defined with a next-hop IP and destination subnet.

### Step 1 — Identify your interface ID

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/interface
>


### Step 2 — Create the PoP configuration (L3)

The PoP configuration establishes the L3 session at the Point of Presence. This step is the same whether you use BGP or static routing at the AZ level.

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop
>

**Request parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `interfaceId` | long | Yes | ID of the OVHcloud Connect interface |
| `type` | string | Yes | `l3` for Layer 3 mode |
| `customerBgpArea` | long | No | Your AS number (still required for L3 — used for PoP-level peering) |
| `subnet` | ipv4Block | No | /30 peering subnet. First IP is OVHcloud, second is yours. |

**Example request:**


### Step 3 — Verify the PoP configuration

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

From this response:

| Parameter | Value | Meaning |
|---|---|---|
| **OVHcloud peer IP** | `192.0.2.1` | First IP of the /30 |
| **Your peer IP** | `192.0.2.2` | Second IP of the /30 |

### Step 4 — Create AZ extra configuration (static)

After the PoP configuration and a [AZ configuration](/pages/network/ovhcloud_connect_revamp/3.6_vrack_network_setup), create a **network extra configuration** to define static routes within the AZ.

> [!primary]
> With static routing, **VRRP remains active** on the AZ endpoint. OVHcloud devices A and B share a virtual IP (the second address of the AZ subnet, e.g. `172.16.1.1`). Point your services' default gateway to this VRRP virtual IP for automatic failover between devices.

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

**Request parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | `network` for static routing |
| `nextHop` | ipv4 | No | Next-hop IP address for the static route |
| `subnet` | ipv4Block | No | Destination subnet for the static route |

**Example request — route your on-premises subnet through the OVHcloud Connect link:**


#### Add multiple static routes

Create one extra configuration per destination subnet:


#### Verify the extra configuration

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}
>

**Example response:**

```json
{
  "id": 4568,
  "type": "network",
  "bgpNeighborArea": null,
  "bgpNeighborIp": null,
  "nextHop": "172.16.1.1",
  "subnet": "10.0.0.0/16",
  "status": "active"
}
```

#### List all extra configurations for an AZ

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>


### Step 5 — Configure static routes on your router

Configure your physical router with static routes pointing OVHcloud AZ subnets towards the OVHcloud Connect peering IP.

#### Cisco IOS / IOS-XE

```
! Interface facing OVHcloud
interface GigabitEthernet0/0
 description OVHcloud Connect
 ip address 192.0.2.2 255.255.255.252
 no shutdown

! Static routes to OVHcloud AZ subnets
ip route 172.16.1.0 255.255.255.0 192.0.2.1 name OVH-DC1-Production
ip route 172.16.2.0 255.255.255.0 192.0.2.1 name OVH-DC2-Production
ip route 172.16.10.0 255.255.255.0 192.0.2.1 name OVH-DC1-Management
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

routing-options {
    static {
        route 172.16.1.0/24 next-hop 192.0.2.1;
        route 172.16.2.0/24 next-hop 192.0.2.1;
        route 172.16.10.0/24 next-hop 192.0.2.1;
    }
}
```

### Step 6 — Verify connectivity

#### From your router

**Cisco:**

```
show ip route static
ping 172.16.1.1 source 192.0.2.2
traceroute 172.16.1.1 source 192.0.2.2
```

**Juniper:**

```
show route protocol static
ping 172.16.1.1 source 192.0.2.2
traceroute 172.16.1.1 source 192.0.2.2
```

**Expected results:**

| Check | Expected output |
|---|---|
| **Static routes present** | Routes to 172.16.x.x via 192.0.2.1 in routing table |
| **Ping succeeds** | Reply from OVHcloud AZ subnet gateway |
| **Traceroute** | Traffic goes through 192.0.2.1 (OVHcloud PoP) |

#### From the OVHcloud API

Check interface status:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/interface/{id}/status
>

Check PoP configuration status:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/status
>

#### Run a diagnostic

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/diagnostic
>


Available diagnostic names: `diagPeering`, `diagPeeringExtra`, `diagRoutes`, `diagMacs`.

### Limitations of static routing

> [!warning]
> Static routing has significant limitations compared to BGP:
>
> - **No automatic failover.** If a link goes down, traffic is blackholed until you manually update routes. For automatic failover, use [BGP](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_bgp).
> - **Manual updates required.** When you add or change subnets, you must update both the OVHcloud extra configuration and your router configuration.
> - **No load balancing.** Static routes do not support ECMP or traffic engineering. Traffic follows a single path.
> - **Not recommended for multi-AZ.** For resilient multi-AZ setups, BGP is strongly recommended — see [Multi-AZ](/pages/network/ovhcloud_connect_revamp/1.5_multi_az).

### Delete configurations

Delete in reverse order:

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
