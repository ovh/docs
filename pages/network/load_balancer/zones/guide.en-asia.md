---
title: Working with zones
excerpt: Use zones to increase availability and decrease latency
updated: 2022-04-04
---

## Introduction

The OVH Load Balancer service is located in one or more availability area(s),
defined when subscribing to the service.

You have the possibility to order additional zones for your service.
This increases the availability of your Load Balancer service in case a zone is unavailable.

It is also possible, if configured appropriately, to use multiple zones to minimize latency for your visitors.

## Add a zone

### From the API

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

## Use multiple zones

### For high availability

If you want to use multiple zones to achieve high availability, you can use the special `all` zone when you declare a `frontend` and a `farm`.

This special `all` zone will allow you to deploy the same configuration on all zones subscribed to your Load Balancer service, and avoids you to duplicate the configuration for all zones.

### To reduce latency

If the goal is to reduce latency, we can imagine directing requests coming from the zone1 load balancer to backend servers geographically close to zone1, and similarly, directing requests coming from the zone2 load balancer to backend servers close to zone2.

To achieve this, you need to specify a frontend in each zone that uses a farm in the same zone.
This will allow us to declare backend servers in different farms per zone and to control which backend servers are used in which zone.

![Operation with several zones and several farms](images/multi_zones_multi_backends.png){.thumbnail}

For example, if we have backend servers in the data centers of Gravelines (gra) and Beauharnois (bhs),
you can order a Load Balancer service in the `gra` and `bhs` areas and configure :

- A frontend in the gra zone with as default farm in the gra zone which contains servers in the Gravelines datacenter
- A frontend in the bhs zone with a default farm in the bhs zone that contains servers in the Beauharnois datacenter
