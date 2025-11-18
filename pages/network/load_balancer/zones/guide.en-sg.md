---
title: Working with zones
excerpt: Use zones to increase availability and decrease latency
updated: 2025-07-30
---

## Introduction

The OVH Load Balancer service is located in one or more availability area(s),
defined when subscribing to the service.

You have the possibility to order additional zones for your service.
This increases the availability of your Load Balancer service in case a zone is unavailable.

It is also possible, if configured appropriately, to use multiple zones to minimize latency for your visitors.

## Instructions

### Add a zone

#### From the OVHcloud Control Panel

You can order an additional zone from the [OVHcloud Control Panel](/links/manager). In the `Bare Metal Cloud`{.action} section, click `Network`{.action}, then `Load Balancer`{.action}.

Select your Load Balancer, then in the `Home`{.action} tab and the `Configuration`{.action} menu, click `Add`{.action} in the "Availability zones" section.

![Add a Load Balancer zone from the manager](images/add_Zone_IPLB.png){.thumbnail}

Then select the zone(s) you wish to order and click `Add`{.action}.
 
![Selection of a Load Balancer zone from the manager](images/Select_Zone_IPLB.png){.thumbnail}

A purchase order will be generated, which you'll need to pay.

![Pay the Load Balancer zone order from the manager](images/Paybill_Zone_IPLB.png){.thumbnail}

#### From the API

To order a zone via the API, you first need to create a cart.

> [!api]
>
> @api {v1} /order POST /order/cart
>

Please make a note of the cart number ("cart"), it will be useful for the rest.

Then you assign it via

> [!api]
>
> @api {v1} /order POST /order/cart/{cartId}/assign
>

You can list the options available on your Load Balancer service via

> [!api]
>
> @api {v1} /order GET /order/cartServiceOption/ipLoadbalancing/{serviceName}
>

When you have found the option corresponding to the desired area, you can add it to your shopping cart ("cart") via

> [!api]
>
> @api {v1} /order POST /order/cartServiceOption/ipLoadbalancing/{serviceName}
>

Finally, you can validate your cart ("cart") via

> [!api]
> @api {v1} /order POST /order/cart/{cartId}/checkout
>

Don't forget to pay the order form thus generated.

### Add a zone

Once your zone order is finalized, you can add it from your OVHcloud Control Panel.

Select the Load Balancer you wish to modify, then create a new frontend, or edit an existing one, via the `Frontends`{.action} tab.

In the `Datacenter`{.action} field, choose the zone you wish to associate with your frontend.

![Zone selection](images/Select-Datacenter.png){.thumbnail}

Once the frontend is configured, click `Add`{.action} or `Modify`{.action} depending on whether you are configuring a new frontend or an existing one.

Don't forget to deploy the configuration. To do this, click `Apply configuration`{.action} in the reminder banner stating that the configuration is not applied.

![Applying a Load Balancer Configuration](images/apply-configuration.PNG){.thumbnail}

## Use multiple zones

### For high availability

If you want to use multiple zones to achieve high availability, you can use the special `all` zone when you declare a `frontend` and a `farm`.

This special `all` zone will allow you to deploy the same configuration on all zones subscribed to your Load Balancer service, and avoids you to duplicate the configuration for all zones.

### To reduce latency

If the goal is to reduce latency, we can imagine directing requests coming from the zone1 load balancer to backend servers geographically close to zone1, and similarly, directing requests coming from the zone2 load balancer to backend servers close to zone2.

To achieve this, you need to specify a frontend in each zone that uses a cluster in the same zone.
This will allow us to declare backend servers in different clusters per zone and to control which backend servers are used in which zone.

![Operation with several zones and several clusters](images/multi_zones_multi_backends.png){.thumbnail}

For example, if we have backend servers in the data centers of Gravelines (gra) and Beauharnois (bhs),
you can order a Load Balancer service in the `gra` and `bhs` areas and configure :

- A frontend in the gra zone with as default cluster in the gra zone which contains servers in the Gravelines datacenter
- A frontend in the bhs zone with a default cluster in the bhs zone that contains servers in the Beauharnois datacenter

## Go further

Join our [community of users](/links/community).