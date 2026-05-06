---
title: 'Set up the vRack network for OVHcloud Connect'
excerpt: 'Create an AZ configuration for OVHcloud Connect L3 and understand IP addressing and VRRP'
updated: 2026-04-15
---

## Objective

Before configuring OVHcloud Connect L3 routing (BGP or static), you must prepare the **AZ configuration** that creates a virtual router inside the vRack, connecting your OVHcloud Connect link to the OVHcloud AZ(s) where your services run.

**This guide explains how to:**

- Create an **AZ configuration** (virtual router) inside your vRack
- Understand the **IP addressing rules** for the AZ subnet (reserved addresses, VRRP)
- Understand the **limitations** of this router (no VLAN, no trunk)

> [!primary]
> This guide covers the **basic vRack configuration for OVHcloud Connect compatibility**. For advanced vRack networking configuration, see:
>
> - [Configure OVHcloud Connect L3 with BGP](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_bgp)
> - [Configure OVHcloud Connect L3 with static routing](/pages/network/ovhcloud_connect_revamp/3.8_occ_l3_static)
>
> For general vRack networking, see the [vRack service presentation](/pages/network/vrack/global).
>

<!-- vRack networking doit explique au client comment il peut monter un L3 sur son vRack, un L3 avec des subnets dans une ou plusieurs régions, des routeurs qu'ils manage et configure on top d'un dedicated server, d'une instance PCI, d'une gateway PCI ou voir comment ça se passe côté PCC. Une fois que le client a créé son L3, il peut faire le lien avec OCC soit via des routes statiques, soit avec une annonce BGP vers les routeurs déployés par AZ -->

## Requirements

You need to have cleared steps 1 through 3 of one of the following guides:

- [Quick Start: Direct Connection to OVHcloud](/pages/network/ovhcloud_connect_revamp/2.1_quick_start_direct)
- [Quick Start: Connection to OVHcloud with a Provider](/pages/network/ovhcloud_connect_revamp/2.2_quick_start_provider)

## Instructions

### Overview

When you use OVHcloud Connect in L3 mode, traffic flows through three stages:

```
Your Network ──── [ PoP BGP/Static ] ──── [ vRack Router ] ──── OVHcloud AZ(s)
                    (OCC-specific)          (this guide)
```

The **AZ configuration** creates an L3 routing instance inside the vRack. This routing instance is composed of two physical OVHcloud devices (labelled "A" and "B") for redundancy. You must create one AZ configuration per AZ you want to reach.

### AZ subnet — IP addressing rules

When you create an AZ configuration, you assign a **private subnet** to it. Within this subnet, several IP addresses are reserved by OVHcloud:

| IP address | Role |
|---|---|
| First address (e.g. `.0`) | Network address |
| Second address (e.g. `.1`) | OVHcloud virtual router (VRRP gateway) |
| Third address (e.g. `.2`) | OVHcloud router A |
| Fourth address (e.g. `.3`) | OVHcloud router B |
| Remaining addresses | Available for your services |

**Subnet planning guidelines:**

| Guideline | Why |
|---|---|
| **Minimum /28 per AZ** | The API enforces this minimum. |
| **Avoid IP overlaps** | Subnets must not overlap with your on-premises network, WAN, or other cloud providers. |
| **Use private (RFC 1918) addresses** | Use `10.0.0.0/8`, `172.16.0.0/12`, or `192.168.0.0/16` ranges. |
| **Use different subnets per AZ** | One subnet cannot be stretched between two AZs. |

### VRRP — Gateway redundancy

The OVHcloud AZ routing instance uses **VRRP (Virtual Router Redundancy Protocol)** to provide gateway redundancy between devices A and B.

| Property | Detail |
|---|---|
| **Virtual IP** | The second address of the AZ subnet (e.g. `172.16.1.1`) |
| **VRID** | Assigned by OVHcloud (not configurable) |
| **Master device** | Device A by default |
| **Instances per AZ** | One VRRP instance per AZ configuration |
| **Interaction with BGP** | Enabling BGP on the AZ endpoint **disables** VRRP |

> [!primary]
> When you use **static routing** at the AZ level (extra configuration type `static`), VRRP is active and provides automatic failover between devices A and B. Your services should point their default gateway to the VRRP virtual IP.
>
> When you use **BGP** at the AZ level (extra configuration type `bgp`), VRRP is disabled. BGP handles failover instead. You must establish a BGP session with **both** device A and device B (up to 4 BGP peers per AZ).

### vRack router limitations

> [!warning]
> The virtual router created by the AZ configuration has the following limitations:
>
> - **No VLAN support** — The router does not handle 802.1Q VLAN tagging. All traffic is untagged.
> - **No trunk support** — The router cannot carry multiple VLANs over a single trunk interface.
>
> Plan your subnet architecture accordingly. Use separate AZ configurations if you need to isolate different traffic types across AZs.

### Step 1 — Identify available AZs

Before creating an AZ configuration, check which AZs are available for your OVHcloud Connect service.

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/datacenter
>

**Example response:**

```json
{
  "id": 1234,
  "name": "GRA-DC1",
  "region": "eu-west-gra",
  "regionType": "3-AZ",
  "available": true
}
```

Only AZs where `available` is `true` can receive a new configuration.

### Step 2 — Create the AZ configuration

The AZ configuration creates a virtual router in the vRack for the specified AZ. You need the `popId` from your existing PoP configuration.

List your existing PoP configurations to get the `popId`:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop
>

Create the AZ configuration:

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
>

**Request parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `datacenterId` | long | Yes | ID of the AZ (from Step 1) |
| `ovhBgpArea` | long | No | OVHcloud private AS number for the AZ BGP session (assigned automatically if omitted) |
| `subnet` | ipv4Block | No | Private subnet for the AZ (/28 minimum). Example: `172.16.1.0/28` |


**Example response:**

```json
{
  "id": 9012,
  "function": "addDatacenterConfiguration",
  "resourceId": 3456,
  "status": "todo"
}
```

The `resourceId` is the ID of the new AZ configuration. The task progresses through `todo` → `doing` → `done`.

### Step 3 — Verify the configuration

Once the task completes, verify the AZ configuration:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
>

**Example response:**

```json
{
  "id": 3456,
  "datacenterId": 1234,
  "subnet": "172.16.1.0/28",
  "ovhBgpArea": 65501,
  "status": "active"
}
```

Monitor task progress with:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/task/{taskId}
>

### Step 4 — Repeat for additional AZs (optional)

For a **multi-AZ resilient setup**, create an AZ configuration for each AZ:

```python
# AZ 1
client.post(
    f"/ovhCloudConnect/{service_name}/config/pop/{pop_id}/datacenter",
    datacenterId=1234,
    subnet="172.16.1.0/28"
)

# AZ 2
client.post(
    f"/ovhCloudConnect/{service_name}/config/pop/{pop_id}/datacenter",
    datacenterId=1235,
    subnet="172.16.2.0/28"
)
```

> [!primary]
> One subnet cannot be stretched between two AZs. Each AZ configuration must use a distinct subnet.

For more information, refer to our guide on [Multi-AZ](/pages/network/ovhcloud_connect_revamp/1.5_multi_az).

### Delete an AZ configuration

> [!api]
>
> @api {v1} DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
>

> [!warning]
> Deleting an AZ configuration immediately stops private traffic to and from that AZ. Remove any dependent extra configurations (BGP or static) first.

## Go further

Now that your AZ configuration is ready, configure the OVHcloud Connect L3 routing:

- [Configure OVHcloud Connect L3 with BGP](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_bgp)
- [Configure OVHcloud Connect L3 with static routing](/pages/network/ovhcloud_connect_revamp/3.8_occ_l3_static)
- [Monitor your connection](/pages/network/ovhcloud_connect_revamp/3.9_monitor)

Join our [community of users](/links/community).