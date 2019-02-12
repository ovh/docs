---
title: 'Tracking connections'
slug: iplb-stickiness
excerpt: 'This guide will show you a number of ways you can track connections on the OVH Load Balancer.'
section: Configuration
---

## Objective

The [OVH Load Balancer](https://www.ovh.co.uk/solutions/load-balancer/){.external} service offers a number of ways of tracking connections to your services.

Each session on the OVH Load Balancer service is maintained by a persistent connection system. The system is configured on the application layer of the OVH Load Balancer service, and it maintains a persistent connection to the server.

This guide provides an introduction to the ways in which you can configure these options for the OVH Load Balancer.

**This guide will show you a number of ways you can configure this option on the OVH Load Balancer.**

## Requirements

- an [OVH Load Balancer](https://www.ovh.co.uk/solutions/load-balancer/){.external}
- access to the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, or the [OVH API](https://api.ovh.com/){.external}


## Instructions

### The different types of connection tracking.

There are two main connection tracking methods that can be configured on your services:

|Tracking connections|Details|
|---|---|
|Cookie|Configures a session cookie, which will be used to distribute traffic from a single HTTP session to the same server in the farm.|
|SourceIp|A hash algorithm will be applied to the source IP address of the request received by the OVH Load Balancer.

The following elements will affect traffic redirection:

- if the configured weight changes
- if a server in the farm is re-enabled
- if a server in the farm is no longer responding


> [!warning]
>
> Once you have refreshed your configuration, the connections will be rebalanced, and your HTTP sessions will be lost as a result.
> 


### Modify a server farm’s connection tracking method via the OVH Control Panel.

To modify connection tracking for a farm, you need to edit it by going to the `Server clusters`{.action} section (*1* on the screenshot below), then click the `...`{.action} edit button (*2* on the screenshot below) for the farm you want to edit, and click `Edit`{.action} (*3* on the screenshot below):

![Modify a farm](images/farm_edit.png){.thumbnail}

In the `Advanced settings`, you will be able to access the `Track session` section:

![Modifying connection tracking](images/tracking_session.png){.thumbnail}


Once you have configured the farm, click `Add`{.action} or `Edit`{.action}, depending on whether you are configuring a new or existing farm.
Please remember to deploy the configuration.

There are two ways of doing this:

- via the `Status`{.action} section of the OVH Control Panel, by clicking on your Load Balancer’s `...`{.action} button, then selecting `Apply configuration`{.action}

- via the reminder box in the OVH Control Panel, notifying you that the configuration has not been applied, by clicking `Apply configuration`{.action}

![Apply a Load Balancer configuration](images/apply_configuration.png){.thumbnail}


### Modify a server farm’s connection tracking method via the API.

#### View details on a server farm.

With this call instruction, you can view details on a server farm if you know its ID. In this example, we will work on a HTTP farm.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Setting|Meaning|
|---|---|
|serviceName*|Your Load Balancer service ID|
|farmId*|The farm’s ID number|

|Response (BackendHttp)|Meaning|
|---|---|
|farmId|The farm’s ID number|
|balance|Balance type currently enabled for the farm|
|zone|Name of the zone in which the farm is configured|
|port|Port used to contact the servers configured on the farm|
|probe|Type of probe currently configured on the farm|
|displayName|Name given to this farm|
|stickiness|Connection tracking method currently set for the farm|


#### Modify a server farm’s connection tracking method.

With this call instruction, you can edit the settings of a server farm if you know its ID. In this example, we will work on a HTTP farm. To modify the tracking method, the BackendHttp.stickiness field must be updated with an available connection tracking method:


> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{id}
> 


|Setting|Meaning|
|---|---|
|serviceName*|Your Load Balancer service ID|
|farmId*|The farm’s ID number|
|BackendHttp.stickiness|Connection tracking method chosen for the farm|


#### Apply the modifications.

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

|Setting|Meaning|
|---|---|
|serviceName*|Your Load Balancer service ID|
|zone|Name of the zone in which to deploy the configuration, e.g. "all" or "rbx"|


## Go further

Join our community of users on <https://community.ovh.com/en/>.
