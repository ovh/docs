---
title: 'How to configure SMTP on a Load Balancer service'
excerpt: 'Find out how to use SMTP with the OVHcloud Load Balancer'
updated: 2025-10-24
---

## Objective

**This guide outlines how to configure the OVHcloud Load Balancer to distribute traffic across multiple SMTP servers.**

## Requirements

- An [OVHcloud Load balancer](/links/network/load-balancer) service in your OVHcloud account.
- Access to the [OVHcloud Control Panel](/links/manager).
- A Postfix-type SMTP service installed and configured on your servers.

## Instructions

> [!warning]
>
> This guide assumes a working knowledge of SMTP protocol and service operation.
> 

As a reminder, each protocol (HTTP, TCP and UDP) in the OVHcloud Load Balancer service has its own associated front-ends, farms and servers.

> [!warning]
>
> The order in which elements are created is important. In particular, the server farms must be configured before servers can be attached to them.
> 

In the Control Panel, you will see the features detailed below:

![OVHcloud Load Balancer service](images/iplb_service.png){.thumbnail}

Via the OVHcloud API, use the following call:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing
> 

For more information on the API features, you can refer to [the following guide](/pages/network/load_balancer/use_api_reference).

### Add a server farm

A TCP server farm must be added to the service; this component manages traffic balancing across the servers.

#### Via the OVHcloud Control Panel

In the `Farms`{.action} tab for servers, click on the `+TCP/TLS`{.action} button.

Fill in the fields. The mandatory fields for a basic configuration are *Port* and *Zone*. For SMTP, port 25 is used. If no ports are specified, your OVHcloud Load Balancer will automatically use the same port as the corresponding front-end.

Optionally, you can add an SMTP probe on your farm.

![Add a server farm via the Control Panel](images/add_farm.png){.thumbnail}

Click on `Add`{.action} once you have filled in the fields.

Your server farm should appear in the list, in the `Farms`{.action} tab.

![Details of the server farm created](images/resume_farm.png){.thumbnail}

#### Via the OVHcloud API

- List of TCP server farms:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm
> 

- Details of a specific TCP server farm:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 

- Add a new TCP server farm:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
> 

- Modify a specific server farm:

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 

- Delete a specific server farm:

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 

### Add a server

A server must now be added to the server farm.

#### Via the OVHcloud Control Panel

In the `Farms`{.action} tab, select the farm you want to add a server to by clicking on the corresponding line. The list of servers already configured in the farm will appear beneath the list of farms, along with the `Add a server`{.action} button. Click this button to add a new server.

The mandatory fields are the *IPv4 address*, *Status*, and *ProxyProtocol version*. If a server port is configured, it will override the port defined in the farm. To keep the configuration as standard as possible and easy to maintain, we recommend only using this parameter in advanced cases.

> [!warning]
>
> It is important to configure ProxyProtocol in version v1 so that you can retrieve the real source IP on your SMTP service. Postfix is compatible with this protocol.
> 

![Add a server to a farm.](images/add_server.png){.thumbnail}

Click on `Add`{.action} once you have filled in the fields.

Your server should appear in the server list, in the `Farms`{.action} tab, just below the list of farms.

![Details of the server created.](images/resume_server.png){.thumbnail}

#### Via the OVHcloud API

- List of servers in the farm:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

- Details of a specific server:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> 

- Add a new server:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

- Modify a specific server:

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

- Delete a specific server:

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

### Add a front-end

A `front-end`{.action} must now be added to the service and connected to the server farm. The front-end is the component of your OVHcloud Load Balancer that exposes your service to the internet.

#### Via the OVHcloud Control Panel

Go to the `+ Front-ends`{.action} tab, and click `+TCP/TLS`{.action}.

Fill in the fields. The mandatory fields for a basic configuration are *Port* (25 for a standard SMTP service), *Zone*, *Default farm* and *Probe* (if a probe was configured on your farm). If you want your service to be available across several ports at once, you can specify a list of ports, separated by commas, or a port range, in the format "<start\_port>-<end\_port>".

If you have routed Additional IPs to your OVHcloud Load Balancer service, you can also attach a front-end to one or more specific Additional IPs.

Ensure the farm you created earlier is specified as the “default farm”.

![Add a front-end](images/add_frontend.png){.thumbnail}

Click `Add`{.action} once the fields are filled.

Your front-end must appear in the list, in the `Front-ends`{.action} tab.

![Details of the front-end created](images/resume_frontend.png){.thumbnail}

#### Via the OVHcloud API

- List of TCP front-ends:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend
> 

- Details of a specific front-end:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 

- Add a new front-end:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
> 

- Modify a specific front-end:

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 

- Delete a specific front-end:

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 

### Apply the modifications

Modifications made to your OVHcloud Load Balancer must be **explicitly applied** in each of the zones configured for your service. They will only become visible to your users at this point. This process allows for complex configuration changes to be prepared and applied only when fully ready.

If you have several zones, the same configuration must be applied to each.

#### Via the OVHcloud Control Panel

Go to the homepage for the OVHcloud Load Balancer, and click `Apply:Zone`{.action} for each of the zones concerned.

#### Via the OVHcloud API

- Refresh a zone:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

### Postfix configuration

To make Postfix compatible with HAProxy *ProxyProtocol*, an option is required in the postfix main.cf configuration file:

```bash
smtp_upstream_proxy_protocol = haproxy
```

The Postfix daemon must then be restarted.

### Confirmation

Upon completing these steps, you will have a functional Load Balancer service for your SMTP servers. The service status can now be checked by requesting your IP Load Balancer as an SMTP server.

![Connection to SMTP via telnet](images/resume_validate.png){.thumbnail}

## Go further

Join our [community of users](/links/community).
