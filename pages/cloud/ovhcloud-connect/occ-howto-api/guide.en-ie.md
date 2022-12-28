---
title: Configuration of OVHcloud Connect using OVHcloud APIv6
slug: api
excerpt: 'Find out how to set up OVHcloud Connect using OVHcloud APIv6'
section: Configuration
order: 2
---

**Last updated 14th September 2020**

## Objective

Configuring the OVHcloud Connect solution can be done via API.

**Find out how to set up OVHcloud Connect using OVHcloud APIv6.**

## Requirements

> [!warning]
> To ensure correct operation of this service, you must be aware of the [technical capabilities and limitations of the OVHcloud Connect solution](../occ-limits/) and configure your network devices accordingly.
>

- an [OVHcloud Connect service](https://www.ovh.ie/solutions/ovhcloud-connect/)
- access to the [OVHcloud APIv6](https://api.ovh.com/){.external} (create your credentials by consulting [this guide](../../api/first-steps-with-ovh-api/))

## Instructions

### Step 1: Configuring vRack

As a mandatory first step, the service must be interconnected with a vRack to enable the configuration. 

Verify that the service is available with the following call:

> [!api]
>
> @api {GET} /vrack/{serviceName}/ovhCloudConnect
>

It will return UUIDs of eligible services. Then you can link OVHcloud Connect with the vRack:

> [!api]
>
> @api {POST} /vrack/{serviceName}/ovhCloudConnect
>

Enter the vRack name as well as the UUID of OVHcloud Connect.

### Step 2: Configuring the PoP

This step is important because you have to choose between L2 and L3.

> [!warning]
> Please be aware of the ramifications of this decision. To switch between L2 and L3 later, you will have to delete the whole configuration.
>

#### Obtaining the interface ID

Your service is attached to an interface with an ID. Use this call to obtain the ID:

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/interface
>

It will return the ID of the interface dedicated to your service.

The following call provides more service details:

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/interface/{id}
>

The LightStatus parameter is refreshed every 5 minutes for monitoring purposes.

#### Configuration with Layer 2 (L2)

This is the simplest configuration. Use this call:

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop
>

- interface ID: enter the ID previously obtained.
- type: select L2.

#### Configuration with Layer 3 (L3)

This configuration is more complex because of the required BGP settings:

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop
>

- interface ID: enter the ID previously obtained.
- type: select L3.
- customerBgpArea: your BGP ASN, configured on your device which will be used for peering.
- ovhBgpArea: BGP ASN to be configured on the OVHcloud routing instance, pertaining to BGP session and AS path.
- subnet: a /30 IPv4 block.

### Step 3: Data centre (DC) configuration

> [!primary]
> If an OVHcloud Connect service is already configured in the vRack, the second service will inherit the data centre configuration.
>


#### Obtaining available data centres

You can list available data centres for configuration using the following calls:

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/datacenter
>

> [!api]
>
> @api {GET} /ovhCloudConnect/{serviceName}/datacenter/{id}
>


#### Configuration with Layer 2 (L2)

Only the ID of the data centre is needed for the L2 configuration:

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
>

- datacenterId: enter the DC ID previously obtained.

#### Configuration with Layer 3 (L3)

More parameters have to be provided for the L3 configuration:

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
>

- datacenterId: enter the DC ID previously obtained.
- ovhBgpArea: as with the PoP, you need to assign an ASN for the OVHcloud routing instance. It will appear in AS path. (It can be different from the PoP ASN.)
- subnet: an IPv4 block, any size is accepted from /28.

By default, the data centre will be configured with a VRRP instance. You have to proceed with the next steps for static routing or dynamic routing using BGP.

#### Layer 3 option: static route

A static route is needed when you have one or more subnets behind a gateway. This may be Linux gateway (with IP forwarding enabled), a NSX edge or any instance capable of routing.

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

- nextHop: IP address in the subnet range acting as gateway.
- subnet: a prefix using the CIDR notation.
- type: 'network'

#### Layer 3 option: BGP session

A BGP session enables dynamic routing from your routing instance with OVHcloud Connect. Announcements are dynamically managed using the BGP protocol. Enabling a BGP session disables the VRRP configuration. You cannot have a BGP session and a static route in the same DC configuration. 

> [!api]
>
> @api {POST} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
>

- bgpNeighborArea: your BGP ASN.
- bgpNeighborIp: your IP address in the subnet range.
- type: 'bgp'


### Removing resources

Each resource can be deleted individually, but deleting a parent resource like DC or PoP will automatically delete all sub-resources. However, recursive deletion is slower than a sequential deletion of each resource.

#### Global deletion

The following call recursively deletes the entire configuration of an OVHcloud Connect service:

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId} 
>

Each sub-resource's status will change from 'active' to 'toDelete' but it takes some time to see the status change.

Only one task ID is created.

#### Deleting by resource

Each resource can be deleted individually using the following call that will delete the smallest resource (extra):

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId} 
>

The following call removes the DC configuration and recursively deletes any additional sub-resources:

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
>

When all sub-resources have been deleted, the PoP configuration can be safely removed:

> [!api]
>
> @api {DELETE} /ovhCloudConnect/{serviceName}/config/pop/{popId} 
>


> [!primary]
> If a DC configuration is shared between two or more OVHcloud Connect services, deleting the PoP configuration of only one will not affect the DC ressource. 
>


## Go further

Join our community of users on <https://community.ovh.com/en/>.
