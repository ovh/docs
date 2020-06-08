---
title: Manage services
slug: ovh-api-service
excerpt: Manage the life cycle of your OVH Service after delivery
section: APIv6
---

**Last updated January 2 2020**

## Objective

We will describe part of the services lifecycle at OVHcloud through the API routes /service and /services.

The **/service** API route consists of actions common to all types of services at OVHcloud:

* Invoices
* Lifecycle management
* Related contacts
* API entry point for possible technical management

## Requirements

* Being connected on [OVHcloud API](https://api.ovh.com/console){.external}.
* Having [created your credentials for OVHcloud API](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.
* Having a customer account wih Reseller Tag (contact your sales representative for eligibility if applicable).


## Instructions

### Ressources

* service : Core entity contractualised to OVHcloud
* serviceId : OVHcloud service unique ID

### Operation process

#### Suspend

> [!api]
>
> @api {POST} /service/{serviceId}/suspend
>

The call changes service status into suspend :

* state : expired

The invoice is then blocked.

#### Reopen

Where applicable:

> [!api]
>
> @api {POST} /service/{serviceId}/reopen
>

The call will reopen the service and issue the invoice for the period between the suspension date and the reopen date.

#### Terminate

Finally:

> [!api]
>
> @api {POST} /service/{serviceId}/terminate
>

The call will delete the service and data and issue the invoice for the period between the date of suspension and the date of deletion.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
