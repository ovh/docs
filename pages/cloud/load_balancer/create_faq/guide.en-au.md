---
title: 'Load Balancer FAQ'
slug: iplb-faq
excerpt: 'FAQ Load Balancer'
section: FAQ
---

## How do I configure my Firewall to accept traffic from the OVHcloud Load Balancer?
When using the Load Balancer, your clients do not connect directly to your servers. A good practice is to setup a firewall to allow only traffic from the OVHcloud Load Balancer service.

- To determine which IPs to allow in your firewall, you can use the following API call:

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/natIp
> 


## How do I know the status of my service?
Sometimes it may be useful to know the status of your OVHcloud Load Balancer.

- To determine the status of your service, you can use the following API call :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/instancesState
> 

The different statuses of the OVHcloud Load Balancer can be `running`{.action} (Active), `reload`{.action} (Refresh in progress), `unknown`{.action} (Not yet started), or `dead`{.action} (inactive).


## How to add a failover IP to the OVHcloud Load Balancer?
A failover IP is an additional IP in which can be joined with your primary IP. The failover IP can be switched from one server to another in seconds.

- To add a failover IP to an OVHcloud Load Balancer service :

> [!api]
>
> @api {POST} /ip/{ip}/move
> 

- Apply the change :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 


## How to list the failover IPs routed to the OVHcloud Load Balancer?

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/failover
> 


## How do I order a free SSL certificate ?
It is possible to order a free SSL ceritificate for the OVHcloud Load Balancer..

- To order a free SSL certificate, you can use the following API call and entering your doman in the `fqdn` field:

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/freeCertificate
> 

It is possible to order a multi-domain certificate; the `fqdn` fields accepts a sting type input.

For the orer to be completed, it is required that the domain name points to your OVHcloud Load Balancer.


## How to list the SSL certificates assocatiated with the OVHcloud Load Balancer ?

- To list the SSL certificates associated with the OVHcloud Load Balancer, you can use the following API call:

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/ssl
>

The SSL certificates that have been ordered (free or not) will appear as `built`. Those added by yourself are will appear as `custom`.

A SSL certificate appearing as `built_not_routed` is a certificate that has been order and delivered, but whose domain cannot be validated. Usually, this is becasue the domain to longer points to the OVHcloud Load Balancer.

- To retrieve the details of an SSL certificate, you can use the following API call :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/ssl/{id}
>

