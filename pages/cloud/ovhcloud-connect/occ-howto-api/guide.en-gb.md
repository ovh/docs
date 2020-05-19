---
title: Configuration using API
slug: api
excerpt: 'Using API - OVHcloud Connect'
section: How To
---

**Last updated 13th May 2020**

## Objective

We will describe how to proceed with API to configure OVHcloud Connect. 

## Requirements

* Being connected on [OVHcloud API](https://api.ovh.com/console){.external}.
* Having [created your credentials for OVHcloud API](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.

## Vrack insertion

This first step is mandatory: the service must be configured within a vRack to enable the configuration. 

The following call check that service is available:

> [!api]
>
> @api {GET} /vrack/{serviceName}/ovhCloudConnect
>

It will return uuid of eligible services.
Then you can insert OVHcloud Connect in vRack:

> [!api]
>
> @api {POST} /vrack/{serviceName}/ovhCloudConnect
>

uuid of OVHcloud Connect is needed.

## Configure service

POP is the second step. It's an important step because you have to choose between L2 and L3. You will have to delete the whole configuration to switch between L2 and L3 so choice is important.

### Get InterfaceId

Your service is attached to an interface with an id,

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/interface
>

Will return the id of interface dedicated to your service.

The following call give your more details:

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/interface/{id}
>

LightStatus is refreshed every 5 minutes for monitoring purpose.

### Layer 2

It's the simplest :

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop
>

* InterfaceId
* Type: 'l2'

### Layer 3

Is more complex because of BGP settings:

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop
>

* InterfaceId
* Type: 'l3'
* customerBgpArea: your BGP ASN, the one configured on your device which will be used to peer
* ovhBgpArea: BGP ASN to be configured on OVHcloud routing instance. Such ASN will appear in BGP session and as-path.
* subnet: an /30 IPv4 block  

## Datacenter Configuration

This is the third step. If an OVHcloud Connect is already configured in the same vRack, the second service will inherit datacenter configuration.

### Get Available Datacenter

You can list available datacenter for configuration using following calls:

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/datacenter
>

and then

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/datacenter/{id}
>

To have datacenter name.

### Layer 2

L2 is still the simplest because only id of the datacenter is needed:

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
>

* datacenterId

### Layer 3

Again, we have more arguments to provide:

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
>

* datacenterId
* ovhBgpArea: like POP, you must assign an ASN for OVHcloud routing instance. It will appear in as-path. It can be different from POP.
* subnet: an IPv4 block, any size is accepted from /28

By default, datacenter will be configured with a VRRP instance. You have to proceed with next steps for static routing or dynamic routing using BGP.

### Layer 3 option: static route

A static route is needed when you have one or more subnets behind a gateway. Such gateway could be a linux (with ip forward enabled), a NSX edge or any routing capable instance.

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

* nextHop: IP address in the subnet range acting as gateway
* subnet: a prefix using the CIDR notation.
* type: 'network'

### Layer 3 option: BGP session

A BGP session enable dynamic routing from your routing instance with OVHcloud Connect. Announces are dynamically managed using BGP protocol. Enabling a BGP session disable VRRP configuration. You can not have a BGP session and a static route in the same datacenter configuration. 

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

* bgpNeighborArea: your BGP ASN
* bgpNeighborIp: your IP address in the subnet range
* type: 'bgp'


## Remove

Each ressources can be deleted individually, but deleting a parent ressources like DC or POP will delete automatically all sub-ressources. However, recursive deletion is slower than sequential deletion of each ressource.

### Global deletion

Following call recursively delete all the configuration of an OVHcloud Connect

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId} 
>

Each sub-ressource's status will change from 'active' to 'toDelete' but it takes time to see status change.

Only one taskid is created.

### Delete by ressource

Each ressource can be delete individually by using DELETE 

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId} 
>

Extra Configuration is the smallest ressource without any child.

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
>

If Extra Configuration is present, it will be immediatly deleted.

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId} 
>

When all children have been delete, POP can be deleted safely.

### Adherences

If a DC configuration is shared between two or more OVHcloud Connect, deleting POP configuration of only one OVHcloud Connect will not affect DC ressource. 


