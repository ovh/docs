---
title: 'How to route an Additional IP'
excerpt: 'Find out how to route an Additional IP and link it to the OVHcloud Load Balancer'
updated: 2025-11-27
---

## Objective

An **Additional IP** is an IP address that can be switched from one service to another. This capability helps you maintain infrastructure continuity by mitigating issues such as hardware failures, service overload, or maintenance downtime.

For more information on Additional IPs, please consult our [webpage](/links/bare-metal/ip).

The OVHcloud Load Balancer solution provides load balancing features for various protocols, including HTTP, HTTPS, TCP, and UDP. Linking it to an Additional IP allows you to switch your existing infrastructure to the Load Balancer without service interruption. Since you continue using the Additional IP, you avoid the need to change your public IP address and wait for DNS zone propagation. Using an additional IP means you avoid the need to change your service's IP address, and no longer have to wait for your DNS zone to propagate changes.

For more information on the OVHcloud Load Balancer solution, please read our [Introduction to the OVHcloud Load Balancer](/pages/network/load_balancer/use_presentation) guide.

**This guide explains how to use an Additional IP with the OVHcloud Load Balancer service.**

## Requirements

- A configured [OVHcloud Load Balancer](/links/network/load-balancer)
- An [Additional IP](/links/bare-metal/ip)
- Access to the [OVHcloud Control Panel](/links/manager)
- Access to the [OVHcloud API](/links/api)

> [!primary]
>
> **Required Load Balancer configuration**
>
> Once you confirm the changes in the list of Additional IPs associated with the Load Balancer, the configuration needs to be refreshed. Several conditions must be met for this to work:
> 
> - **vRack configuration:** If the Load Balancer is in a vRack, all farms must also be in the vRack, and the Load Balancer must have its vLAN defined. Otherwise, there should be no farms in a vRack.
>
> - **Front-end validity:** At least one front-end must exist, and all front-ends must be valid. They can be enabled or disabled, but must have either:
>    - a valid route (with routing rules)
>    - a redirection (`redirectLocation`{.action})
>    - a default farm
>
> - **Configuration state:** The Load Balancer must not be undergoing any other refresh process. A Load Balancer cannot be refreshed several times at once, as this would prevent changes from being applied to the resulting configuration.
>

## Instructions

In this document, we will cover two distinct use cases:

- linking an Additional IP to the overall OVHcloud Load Balancer service
- linking an Additional IP to a single front-end of the OVHcloud Load Balancer service

### Add an Additional IP to the OVHcloud Load Balancer

You can link these IPs to your OVHcloud Load Balancer via the [OVHcloud API](/links/api).
The API call for this is:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

You can then list the Additional IPs linked to your OVHcloud Load Balancer with the following API call:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/failover
>

Additional IPs linked this way are available for **all** your front-ends. This differs from the next case, where an Additional IP is linked to a single front-end.

### Add a dedicated Additional IP to a front-end

Regardless of the front-end type, you can define a list of dedicated Additional IPs to be linked to it. In this specific case, your Additional IP will be attached to **only one** single front-end. As a result, it will only grant access to the service provided by that front-end. Services for your other front-ends will remain accessible via your IP Load Balancer’s primary IP address.

#### Via the API

**If you are creating a front-end:**

From the [OVHcloud API](/links/api), you can use the following calls to define one or more Additional IPs on a front-end during its creation:

- HTTP protocol

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> 

- TCP protocol

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
> 

- UDP protocol

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/frontend
> 

**If you are updating an existing front-end:**

From the [OVHcloud API](/links/api), you can use the following calls to define one or more Additional IPs on an existing front-end:

- HTTP protocol

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

- TCP protocol

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 

- UDP protocol

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

#### Via the OVHcloud Control Panel

You can define dedicated Additional IPs via the [OVHcloud Control Panel](/links/manager) by navigating to the `Network`{.action} section, then `Load Balancer`{.action}.

Once you have selected the Load Balancer you want to modify, navigate to the `Front-ends`{.action} tab, where you can either create a new front-end or edit an existing one.

In `Advanced settings`{.action}, you can select the Additional IPs you would like to associate with your front-end.

![Configure the front-end by associating an Additional IP](images/iplb_frontend.png){.thumbnail}

Once the front-end has been configured, click `Add`{.action} or `Modify`{.action}, depending on whether you are configuring a new or existing front-end.

Remember to deploy the configuration. There are two ways to do this:

- via the `Status`{.action} section of the `Home`{.action} tab of your OVHcloud Control Panel, by clicking on the `...`{.action} button next to your Load Balancer's ID and selecting `Apply configuration`{.action}

- via the reminder box in the OVHcloud Control Panel, which notifies you that the configuration has not been applied, by clicking `Apply configuration`{.action}.

![Apply a Load Balancer configuration](images/apply_configuration.png){.thumbnail}

## Go further

Join our [community of users](/links/community).