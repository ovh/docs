---
title: Order a free SSL certificate
excerpt: Order a free SSL certificate for your web services behind a Load Balancer
updated: 2025-10-24
---

## Objective

The OVHcloud Load Balancer service can be configured to support SSL termination.

The purpose of SSL termination is to decrypt the incoming encrypted stream before forwarding it to the appropriate service, such as a web server.

Handling SSL termination on the Load Balancer reduces the computational load on your backend servers and centralizes certificate management. This makes maintenance and security updates easier.

**Discover how to order a free SSL certificate via the OVHcloud Control Panel or the API.**

## Requirements

- You must have an [OVHcloud Load balancer](/links/network/load-balancer) in your OVHcloud account.
- You must be logged in to the [OVHcloud Control Panel](/links/manager).

## Instructions

### Via the OVHcloud Control Panel

#### Configure the frontend for SSL termination

To enable SSL termination, you must first configure your frontend.

You can configure your SSL termination from the [OVHcloud Control Panel](/links/manager) in the `Bare Metal Cloud`{.action} section, then `Load Balancer`{.action}.

After selecting the Load Balancer you wish to modify, create a new frontend or edit an existing one.

In the `Frontends`{.action} section, click on the `Add Frontend`{.action} button to create a new frontend. <br>
In the configuration window that opens, select the `HTTPS` protocol. Then, select the `Default server cluster`. <br>
Finally, open the advanced settings and fill in the `HTTPS Redirection` field.

![Configuring the SSL termination of a Frontend](images/enable_ssl_terminaison.png){.thumbnail}

Once the frontend has been created, a banner will appear prompting you to `Apply the configuration` to deploy your changes in the appropriate zone.

#### Order the free SSL certificate

In the `SSL Certificates` section of your Control Panel, click the `Order SSL Certificate`{.action} button to create a new one. An edit window will appear with an `FQDN` field to be filled in.

![Add a free SSL certificate](images/iplb-order-ssl.png){.thumbnail}

#### Follow-up of the order

In the `Tasks`{.action} section of your Control Panel, the tasks related to ordering a free SSL Certificate are of the type `orderFreeCertificate`.

### Via the OVHcloud API

#### Configuring the frontend for SSL termination

In the API, the SSL termination is specified by the `ssl` boolean. To enable SSL termination, set this parameter to `true`, then set the `defaultFarmId` or `redirectLocation` to the corresponding values.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
>

Then apply the changes:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

#### Order the free SSL certificate

In the API, the call is as follows:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/freeCertificate
>

For the order to be finalized, the chosen domain name must point to your OVHcloud Load Balancer service.

#### Follow-up of the order

- Returning the task list

You can specify the action type `orderFreeCertificate` to refine the search:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task
>

- Returning the status of a particular task:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task/{id}
>

Once the order is complete, the SSL Certificate is automatically installed on your OVHcloud Load Balancer service.

## Go further

Join our [community of users](/links/community).