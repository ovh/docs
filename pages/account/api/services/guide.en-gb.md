---
title: Manage services
slug: ovh-api-service
excerpt: Manage the life cycle of your OVH Service after delivery
section: OVH APIv6
---

**Last updated January 2 2020**

## Objective

We will describe a par of services life cycle at OVH over API routes /service & /services

API **/service** have commons actions to all kinds of OVH services:

* Bills
* Manage life cycle
* Associate contacts
* API entrypoint for technical management if necessary.

## Requirements

* Be connected on [API OVH](https://api.ovh.com/console){.external}.
* Have [created your credentials for OVH API](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.
* Have a customer account wih Reseller Tag (Please contact your sale to know how to be eligible).

## Instructions

### Ressources

* service : Core entity contracted to OVH
* serviceId : Unique identifier of the service at OVH 

### Operation process

#### Suspend

> [!api]
>
> @api {POST} /service/{serviceId}/suspend
>

The call change service status into suspend :

* state : expired

The invoice is then blocked.

#### Reopen

Where applicable:

> [!api]
>
> @api {POST} /service/{serviceId}/reopen
>

The call causes the service to reopen and the invoice to be emitted over the period between the suspension date and the reopening date.

#### Terminate

Finally:

> [!api]
>
> @api {POST} /service/{serviceId}/terminate
>

The call causes the service and data to be deleted and the invoice to be emitted for the period between the suspension date and the deletion date.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
