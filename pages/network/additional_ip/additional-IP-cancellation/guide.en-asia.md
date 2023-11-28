---
title: Cancelling an Additional IP service
excerpt: Find out how to cancel an Additional IP service via the OVHcloud API
updated: 2022-12-22
---

> [!primary]
>
> Since October 6th, 2022 our service "Failover IP" is named [Additional IP](https://www.ovhcloud.com/asia/network/additional-ip/). This renaming has no effect on its technical features.
>

## Objective

As any other OVHcloud service, an Additional IP service can be cancelled at any time.

> [!primary]
> At the moment, an Additional IP service cannot be cancelled from the OVHcloud Control Panel. This feature will be rolled out soon.
>

**This guide explains how to cancel an Additional IP service via the OVHcloud API.**

## Requirements

- An [Additional IP service](https://www.ovhcloud.com/asia/network/additional-ip/)
- Access to the [OVHcloud API console](https://ca.api.ovh.com/)
- Consulting the guide [First steps to use the OVHcloud API](/pages/manage_and_operate/api/first-steps) (to familiarise yourself with the OVHcloud API)

## Instructions

### Cancelling an Additional IP service via the API

Log in to the OVHcloud [API web page](https://ca.api.ovh.com/).

You first need to find out the name of the service you need to cancel. Use the following call:

> [!api]
>
> @api {v1} /ip GET /ip/service
>

To cancel the service, use the following API call:

> [!api]
>
> @api {v1} /ip POST /ip/service/{serviceName}/terminate
>

- `serviceName` : name of the Additional IP service obtained with the previous call.

You will then receive an email asking you to confirm the cancellation. After confirmation, the cancellation will be effective.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
