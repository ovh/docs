---
title: Load balancing methods
excerpt: Discover the various load balancing algorithms available with the OVHcloud Load Balancer
updated: 2025-10-24
---

## Objective

The OVHcloud Load Balancer service supports a variety of load balancing algorithms for your services. This setting dictates how the Load Balancer distributes incoming client requests among the servers in a farm.

**This guide introduces the various load balancing methods and explains how to modify them.**

## Requirements

- An [OVHcloud Load Balancer](/links/network/load-balancer) service in your OVHcloud account.
- Access to the [OVHcloud Control Panel](/links/manager).
- You need to have created a server farm.

## Instructions

### Available Load Balancing Algorithms

The load balancing setting is applied at the server farm level and defines the method by which client requests are distributed among the servers within that farm.

For an overview of the OVHcloud Load Balancer service components, please refer to the [Load Balancer Introduction](/pages/network/load_balancer/use_presentation) guide.

|Algorithm|Features|
|---|---|
|**First**|Directs the connection to the first available server based on its ID (smallest to largest).|
|**LeastConn**|Selects the server with the lowest number of active connections. This is recommended for long-duration sessions with light traffic. The *RoundRobin* algorithm is used for tie-breaking among equally loaded servers.|
|**RoundRobin**|Distributes connections sequentially, one after the other, for each new request. **This is the default algorithm.**|
|**Source**|Uses a hash of the source IP address to consistently redirect the same client IP to the same server, provided the server remains operational.|
|**URI**|Uses a hash of part or all of the URI path to consistently redirect identical URIs to the same server, provided the server remains operational. *(Applicable to HTTP/HTTPS farms only.)*|

### Modify a server farm’s load balancing method via the OVHcloud Control Panel

- In the `Server farms`{.action} section (1), locate the desired farm. You can edit it by clicking the three dots on the right-hand side (2), then on `Change`{.action}.

![Modify a farm](images/server_cluster_change.png){.thumbnail}

In `Advanced settings`{.action}, modify the `Load balancing method`{.action}.

![Modify a farm](images/distrib_mode_edit.png){.thumbnail}

Once your preferred method is selected, click `Update`{.action}, then click `Apply configuration`{.action} in the yellow banner that appears.

![Apply configuration](images/apply_config.png){.thumbnail}

### Modify a server farm’s load balancing method via the OVHcloud API

The load balancing method is changed by updating the corresponding field within the server farm configuration.

#### View details on a server farm

Use this api call to view the details of a server farm given its ID. In this example, we work with an HTTP farm:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

|Setting|Meaning|
|---|---|
|serviceName*|Your Load Balancer service ID|
|farmId*|The farm’s ID number|

|Response (BackendHttp)|Meaning|
|---|---|
|farmId|The farm’s ID number|
|balance|The load balancing algorithm currently set for the farm|
|zone|Name of the zone in which the farm is configured|
|port|Port used to contact the servers configured on the farm|
|probe|Type of probe currently configured on the farm|
|displayName|Name given to this farm|
|stickiness|Connection monitoring method currently set for the farm|

#### Modify a server farm’s load balancing method

Use this api call to edit the settings of a server farm given its ID. In this example, we work with an HTTP farm. To modify the balancing method, update the `BackendHttp.balance` field with an available algorithm:

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{id}
>

|Setting|Meaning|
|---|---|
|serviceName*|Your Load Balancer service ID|
|farmId*|The farm’s ID number|
|BackendHttp.balance|Preferred balancing method for this farm|

#### Apply the modifications

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

|Setting|Meaning|
|---|---|
|serviceName*|Your Load Balancer service ID|
|zone*|Name of the zone in which to deploy the configuration|

## Go further

Join our [community of users](/links/community).