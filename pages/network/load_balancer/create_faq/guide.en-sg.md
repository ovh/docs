---
title: 'OVHcloud Load Balancer FAQ'
excerpt: 'Frequently Asked Questions on the OVHcloud Load Balancer'
updated: 2025-11-12
---

## Objective

This document provides a set of the most frequently asked questions and their corresponding OVHcloud API calls for performing common management and configuration tasks on your OVHcloud Load Balancer service.

## FAQ

### How do I configure my Firewall to accept traffic from the OVHcloud Load Balancer?

When using the Load Balancer, your clients do not connect directly to your servers. A good practice is to set up a firewall to allow only traffic from the OVHcloud Load Balancer service.

#### Via the OVHcloud API

To determine which IP addresses you need to allow in your firewall, you can use the following API call:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/natIp
> 

#### Via the OVHcloud Control Panel

In your Load Balancer service, navigate to the `Home`{.action} tab, and find the **Information** section. On the **Outbound IPv4** line, click the ellipsis, and select "Read".
A window will open, listing the IP addresses you need to allow in your firewall.

### How do I know the status of my service?

Sometimes it may be useful to know the status of your OVHcloud Load Balancer.

#### Via the OVHcloud API

To determine the status of your service, you can use the following API call:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/instancesState
> 

The different statuses of the OVHcloud Load Balancer can be `running`{.action} (Active), `reload`{.action} (Refresh in progress), `unknown`{.action} (Not yet started), or `dead`{.action} (inactive).

#### Via the OVHcloud Control Panel

In your Load Balancer service dashboard, navigate to the `Home`{.action} tab, and find the **Status** section, which lists the internal service name of your Load Balancer and its status.

### How to add an Additional IP to the OVHcloud Load Balancer?

An Additional IP is an secondary IP address which can be associated to your service in addition to your primary IP. The Additional IP can be switched from one server to another in seconds.

#### Via the OVHcloud API

- To add an Additional IP to an OVHcloud Load Balancer service:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

- Apply the change:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

#### Via the OVHcloud Control Panel

In your Load Balancer service dashboard, click on `Front-ends`{.action}, then on `Add a front-end`{.action}.
Then, expand the `Advanced settings`{.action}, and select the Additional IPs you would like to add to your front-end *(listed on the interface as "Dedicated failover IP")*.

### How to list the Additional IPs routed to the OVHcloud Load Balancer?

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/failover
> 

### How do I order a free SSL certificate?

#### Via the OVHcloud Control Panel

In your Load Balancer service dashboard, navigate to the `SSL certificates`{.action} tab, and click on `Order an SSL certificate`{.action}.
Fill in the FQDN in the dedicated field, then click on `Order`{.action}.

For the order to be completed, it is required that the domain name points to your OVHcloud Load Balancer.

#### Via the OVHcloud API

It is possible to order a free SSL certificate for the OVHcloud Load Balancer.

- To order a free SSL certificate, you can use the following API call and enter your domain in the ‘fqdn’ field:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/freeCertificate
> 

It is possible to order a multi-domain certificate; the `fqdn` field accepts a string type input.

For the order to be completed, it is required that the domain name points to your OVHcloud Load Balancer.

### How to list the SSL certificates associated with the OVHcloud Load Balancer?

#### Via the OVHcloud Control Panel

In your Load Balancer service dashboard, navigate to the `SSL certificates`{.action} section, where you will find a table listing the certificates associated to that Load Balancer.

To retrieve the details of an SSL certificate, click the ellipsis button to the right of the desired certificate, then click on `See a preview`{.action}.

#### Via the OVHcloud API

- To list the SSL certificates associated with the OVHcloud Load Balancer, you can use the following API call:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl
>

The SSL certificates that have been ordered (free or not) will appear as `built`. Those added by yourself will appear as `custom`.

An SSL certificate appearing as `built_not_routed` is a certificate that has been ordered and delivered, but whose domain cannot be validated. Usually, this is because the domain no longer points to the OVHcloud Load Balancer.

- To retrieve the details of an SSL certificate, you can use the following API call:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl/{id}
>

## Go further

Find details about all the API calls related to the OVHcloud Load Balancer in [this guide](/pages/network/load_balancer/use_api_details).

Join our [community of users](/links/community).