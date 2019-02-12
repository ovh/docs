---
title: 'Routing a failover IP'
slug: routing-foip
excerpt: 'Find out how to route a failover IP and link it to the OVH Load Balancer'
section: Configuration
---

**Last updated 06th April 2018**

## Objective

A failover IP (FOIP) is an IP address that can be switched from one service to another. In doing so, it helps you avoid a wide range of issues for your infrastructure (hardware failures, overload for your services, maintenance, etc.).

For more information on failover IPs, you can consult our [webpage](https://www.ovh.co.uk/dedicated_servers/ip_failover.xml){.external}.

The OVH Load Balancer solution offers load balancing features for a range of different protocols: HTTP, HTTPS, TCP and UDP. When you link it to a failover IP, you can switch over your existing infrastructure to a Load Balancer without disturbing or interrupting services for your customers. Effectively, you will not need to change the IP address any longer if you are still using the failover IP, so you will not need to wait for your DNS zone to propagate any changes.

For more information on the OVH Load Balancer solution, you can read our [Introduction to the OVH Load Balancer](https://docs.ovh.com/gb/en/load-balancer/loadbalancer-introduction/){.external}.

**This guide will explain how to use the failover IP with the OVH Load Balancer service.**


## Requirements

- a correctly configured [OVH Load Balancer](https://www.ovh.co.uk/solutions/load-balancer/){.external}
- a [failover IP](https://www.ovh.co.uk/dedicated_servers/ip_failover.xml){.external}

> [!primary]
>
> **The required Load Balancer configuration.**
>
> Once you have confirmed the changes in the list of failover IPs associated with the Load Balancer, you need to be able to refresh them. Several conditions need to be met for this to work.
> 
> - If the Load Balancer is in a vRack, all of the farms must also be in the vRack. The Load Balancer must also have its vLAN. Otherwise, there should not be any farms in a vRack.
>
> - At least one existing front-end. All of the front-ends must be valid. They can be enabled and disabled, with either:
>    - a valid route (with routing rules)
>    - a redirection (`redirectLocation`{.action})
>    - a default farm
>
> - Nothing else should be refreshed for the Load Balancer. A Load Balancer cannot be refreshed several times at once. Doing so would not make any changes to the resulting configuration.
>

## Instructions

In this document, we will look at two distinct uses:

- linking a failover IP to the OVH Load Balancer service
- linking a failover IP to a single front-end of the OVH Load Balancer service


### Add a failover IP.

You can link these IPs to your OVH Load Balancer via the [OVH API](https://api.ovh.com){.external}.
The API call for this is as follows:


> [!api]
>
> @api {POST} /ip/{ip}/move
> 

You can then list the failover IPs linked to your OVH Load Balancer with the following API call:


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/failover
>

The failover IPs linked to your Load Balancer will be available for all of your front-ends. This is contrary to the following case, in which we will link a failover IP to a single front-end.


## Dedicated failover IP.

No matter what kind of front-end you wish to use, you can define a list of dedicated failover IPs that will be linked to them. Please note that in this particular case, your FOIP will be attached to only one single front-end. As a result, it will only give access to the service provided by this front-end. The services for your other front-ends will be accessible via your IP Load Balancer’s IP address.

### Via the API.

#### If you are creating a front-end:

From the [OVH API](https://api.ovh.com){.external}, you can use the following call to define one or more failover IPs on a front-end as you create it:


* HTTP protocol

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/frontend
> 

* TCP protocol

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/frontend
> 

* UDP protocol

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/udp/frontend
> 


#### If you are updating an existing front-end:

From the [OVH API](https://api.ovh.com){.external}, you can use the following call to define one or more failover IPs on an existing front-end:


* HTTP protocol

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

* TCP protocol

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 

* UDP protocol

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 


### Via the OVH Control Panel.

You can define dedicated FOIPs via the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} by going to the `Cloud`{.action} section, then `Load Balancer`{.action}.

Once you have selected the Load Balancer you want to modify, create a new front-end, or edit an existing one.

In `Advanced settings`{.action}, you can select the failover IPs you would like to add to your front-end.


![Configure the front-end by associating a failover IP](images/iplb_frontend.png){.thumbnail}

Once the front-end has been configured, click `Add`{.action} or `Edit`{.action}, depending on whether you are configuring a new or existing front-end.

Please remember to deploy the configuration. There are two ways of doing this:

- via the `Status`{.action} section of the OVH Control Panel, by clicking on your Load Balancer’s `...`{.action} button, then selecting `Apply configuration`{.action}

- via the reminder box in the OVH Control Panel, notifying you that the configuration has not been applied, by clicking `Apply configuration`{.action}

![Apply a Load Balancer configuration](images/apply_configuration.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
