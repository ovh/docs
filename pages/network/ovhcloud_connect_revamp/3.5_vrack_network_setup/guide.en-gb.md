---
title: 'OVHcloud Connect - Set up vRack networking'
excerpt: 'Create a data centre configuration for OVHcloud Connect L3 and understand IP addressing and VRRP'
updated: 2026-04-15
---

## Objective

Before configuring OVHcloud Connect L3 routing (BGP or static), you must prepare the **data centre configuration** that creates a virtual router inside the vRack, connecting your OVHcloud Connect link to the OVHcloud data centre(s) where your services run.

**This guide explains how to:**

- Create a **data centre configuration** (virtual router) inside your vRack
- Understand the **IP addressing rules** for the data centre subnet (reserved addresses, VRRP)
- Understand the **limitations** of this router (no VLAN, no trunk)

> [!primary]
> This guide covers **data centre configuration only**. For the OVHcloud Connect-specific L3 configuration (PoP BGP session, route exchange), see:
>
> - [Configure OVHcloud Connect L3 with BGP](/pages/network/ovhcloud_connect_revamp/3.6_occ_l3_bgp)
> - [Configure OVHcloud Connect L3 with static routing](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_static)
>
> For general vRack networking (VLANs, private IP addressing, compatible products), see the [vRack service presentation](/pages/network/vrack/global).

## Requirements

- An active [OVHcloud account](/links/manager)
- An active OVHcloud Connect service (status `active` in the [OVHcloud Control Panel](/links/manager) or via `GET /ovhCloudConnect/{serviceName}`)
- A vRack associated with your OVHcloud Connect service — see [Associate OVHcloud Connect with your vRack](/pages/network/ovhcloud_connect_revamp/3.8_associate_vrack)
- A PoP configuration (L3) already created — see [Configure OVHcloud Connect L3 with BGP](/pages/network/ovhcloud_connect_revamp/3.6_occ_l3_bgp) or [Configure OVHcloud Connect L3 with static routing](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_static)
- OVHcloud API credentials (Application Key, Application Secret, Consumer Key). Refer to the [First steps with the OVHcloud API](/pages/manage-and-operate/api/first-steps) guide.

## Instructions

### Overview

When you use OVHcloud Connect in L3 mode, traffic flows through three stages:

```
Your Network ──── [ PoP BGP/Static ] ──── [ vRack Router ] ──── OVHcloud Data Centre(s)
                    (OCC-specific)          (this guide)
```

The **data centre configuration** creates an L3 routing instance inside the vRack. This routing instance is composed of two physical OVHcloud devices (labelled "A" and "B") for redundancy. You must create one data centre configuration per data centre you want to reach.

### Data centre subnet — IP addressing rules

When you create a data centre configuration, you assign a **private subnet** to it. Within this subnet, several IP addresses are reserved by OVHcloud:

| IP address | Role |
|---|---|
| First address (e.g. `.0`) | Network address |
| Second address (e.g. `.1`) | OVHcloud virtual router (VRRP gateway) |
| Third address (e.g. `.2`) | OVHcloud router A |
| Fourth address (e.g. `.3`) | OVHcloud router B |
| Remaining addresses | Available for your services |

**Example with subnet `172.16.1.0/28`:**

| IP address | Role |
|---|---|
| `172.16.1.0` | Network address |
| `172.16.1.1` | OVHcloud virtual router (VRRP) |
| `172.16.1.2` | OVHcloud router A |
| `172.16.1.3` | OVHcloud router B |
| `172.16.1.4` – `172.16.1.14` | Available for your services |
| `172.16.1.15` | Broadcast address |

> [!warning]
> The API enforces a minimum subnet size of **/28**. Do not use the first four addresses — they are reserved by OVHcloud as described above.

**Subnet planning guidelines:**

| Guideline | Why |
|---|---|
| **Minimum /28 per data centre** | The API enforces this minimum. |
| **Avoid IP overlaps** | Subnets must not overlap with your on-premises network, WAN, or other cloud providers. |
| **Use private (RFC 1918) addresses** | Use `10.0.0.0/8`, `172.16.0.0/12`, or `192.168.0.0/16` ranges. |
| **Use different subnets per data centre** | One subnet cannot be stretched between two data centres. |

### VRRP — Gateway redundancy

The OVHcloud data centre routing instance uses **VRRP (Virtual Router Redundancy Protocol)** to provide gateway redundancy between devices A and B.

| Property | Detail |
|---|---|
| **Virtual IP** | The second address of the data centre subnet (e.g. `172.16.1.1`) |
| **VRID** | Assigned by OVHcloud (not configurable) |
| **Master device** | Device A by default |
| **Instances per data centre** | One VRRP instance per data centre configuration |
| **Interaction with BGP** | Enabling BGP on the data centre endpoint **disables** VRRP |

> [!primary]
> When you use **static routing** at the data centre level (extra configuration type `network`), VRRP is active and provides automatic failover between devices A and B. Your services should point their default gateway to the VRRP virtual IP.
>
> When you use **BGP** at the data centre level (extra configuration type `bgp`), VRRP is disabled. BGP handles failover instead. You must establish a BGP session with **both** device A and device B (up to 4 BGP peers per data centre).

### vRack router limitations

> [!warning]
> The virtual router created by the data centre configuration has the following limitations:
>
> - **No VLAN support** — The router does not handle 802.1Q VLAN tagging. All traffic is untagged.
> - **No trunk support** — The router cannot carry multiple VLANs over a single trunk interface.
>
> Plan your subnet architecture accordingly. Use separate data centre configurations if you need to isolate different traffic types across data centres.

### Step 1 — Identify available data centres

Before creating a data centre configuration, check which data centres are available for your OVHcloud Connect service.

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/datacenter
>

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

service_name = "your-occ-service-uuid"

# List available data centres
datacenters = client.get(f"/ovhCloudConnect/{service_name}/datacenter")
print("Available data centre IDs:", datacenters)

# Get details for each data centre
for dc_id in datacenters:
    dc = client.get(f"/ovhCloudConnect/{service_name}/datacenter/{dc_id}")
    print(f"  ID: {dc['id']}, Name: {dc['name']}, Region: {dc['region']}, Available: {dc['available']}")
```

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

Only data centres where `available` is `true` can receive a new configuration.

### Step 2 — Create the data centre configuration

The data centre configuration creates a virtual router in the vRack for the specified data centre. You need the `popId` from your existing PoP configuration.

List your existing PoP configurations to get the `popId`:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop
>

Create the data centre configuration:

> [!api]
>
> @api {v1} POST /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
>

**Request parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `datacenterId` | long | Yes | ID of the data centre (from Step 1) |
| `ovhBgpArea` | long | No | OVHcloud private AS number for the data centre BGP session (assigned automatically if omitted) |
| `subnet` | ipv4Block | No | Private subnet for the data centre (/28 minimum). Example: `172.16.1.0/28` |

**Example request:**

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

service_name = "your-occ-service-uuid"
pop_id = 5678  # Your PoP configuration ID

# Create a data centre configuration
result = client.post(
    f"/ovhCloudConnect/{service_name}/config/pop/{pop_id}/datacenter",
    datacenterId=1234,
    subnet="172.16.1.0/28"
)

print("Task created:", result)
```

**Example response:**

```json
{
  "id": 9012,
  "function": "addDatacenterConfiguration",
  "resourceId": 3456,
  "status": "todo"
}
```

The `resourceId` is the ID of the new data centre configuration. The task progresses through `todo` → `doing` → `done`.

### Step 3 — Verify the configuration

Once the task completes, verify the data centre configuration:

> [!api]
>
> @api {v1} GET /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
>

```python
dc_config = client.get(
    f"/ovhCloudConnect/{service_name}/config/pop/{pop_id}/datacenter/{result['resourceId']}"
)
print("Data centre config:", dc_config)
```

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

### Step 4 — Repeat for additional data centres (optional)

For a **multi-AZ resilient setup**, create a data centre configuration for each AZ:

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
> One subnet cannot be stretched between two data centres. Each data centre configuration must use a distinct subnet.

For more information, refer to our guide on [Multi-AZ](/pages/network/ovhcloud_connect_revamp/1.5_multi_az).

### Delete a data centre configuration

> [!api]
>
> @api {v1} DELETE /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
>

```python
client.delete(
    f"/ovhCloudConnect/{service_name}/config/pop/{pop_id}/datacenter/{dc_config_id}"
)
```

> [!warning]
> Deleting a data centre configuration immediately stops private traffic to and from that data centre. Remove any dependent extra configurations (BGP or static) first.

## Go further

Now that your data centre configuration is ready, configure the OVHcloud Connect L3 routing:

- [Configure OVHcloud Connect L3 with BGP](/pages/network/ovhcloud_connect_revamp/3.6_occ_l3_bgp)
- [Configure OVHcloud Connect L3 with static routing](/pages/network/ovhcloud_connect_revamp/3.7_occ_l3_static)
- [Monitor your connection](/pages/network/ovhcloud_connect_revamp/3.9_monitor)

Join our [community of users](/links/community).
