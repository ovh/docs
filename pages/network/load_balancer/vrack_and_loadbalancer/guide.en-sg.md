---
title: Configuring the vRack on the load balancer
excerpt: How to configure vRack on a Load Balancer
updated: 2022-04-04
---

## Introduction

The purpose of this guide is to help you link and configure your Load Balancer in vRack via the APIv6 OVH.

The vRack is a dedicated private network that creates a link between all your cloud products. For more information please visit the page on [vRack](https://www.ovh.com/sg/solutions/vrack/)

Before starting, if you haven't read it yet, we advise you to read the general presentation of the [Load Balancer](/pages/network/load_balancer/use_presentation) service.

> [!warning]
>
> Warning, once linked to your vRack, the farms of your Load Balancer will be unable to communicate with your servers via their public IP addresses. You will then be forced to use their private IP address inside the vRack.***
>

## Listing Load Balancer services eligible for vRack

You can consult the list of your Load Balancer services that can be connected to a vRack.

The `serviceName` in the API below is the one for your vRack, ex : `pn-1234`.

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/allowedServices
>

You will find your Load Balancer services in the index : `ipLoadbalancing`.

You can also see the eligibility of a particular Load Balancer service through the `vrackEligibility' attribute of the call response :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}
>
>

## Linking a Load Balancer service to a vRack

To attach your Load Balancer service to your vRack, here is the relevant API call:

> [!api]
>
> @api {v1} /vrack POST /vrack/{serviceName}/ipLoadbalancing
>

As previously mention, the `serviceName` here is the name of your vRack, ex: `pn-1234`.

## Configuring a vRack network

In order to work, your Load Balancer needs to know the network topology that you use within your vRack and have a range of IP addresses specifically dedicated to it within that network. This IP address range will be used to contact your servers in your vRack. No other IP addresses will be used to communicate with your servers.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/vrack/network
>

Example configuration :

-  serviceName : loadbalancer-1234...
-  subnet : 192.168.0.0/16
- natIp : 192.168.100.0/24
- vlan : 42

The natIp beach must of course be contained in your subnet.

Once your network is created, you will need to retrieve its `vrackNetworkId` for the configuration of your farms.

To find out the minimum range size to be assigned to natIp, an API call is available.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/vrack/networkCreationRules
>

## Setting up a farm linked to a vRack

You can now create your server farm in the vRack. To do so, configure your TCP or HTTP farm as usual and simply fill in the `vrackNetworkId` you previously obtained in the field of the same name.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
>

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
>

## Continuing the configuration

You can now use the usual API call or even the client area to continue configuring the Load Balancer.

As a reminder, a configuration guide for the Load Balancer is available: [Here](/pages/network/load_balancer/create_http_https).
