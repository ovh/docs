---
title: Cancel an Additional IP service
excerpt: Find out how to cancel an Additional IP service via the OVHcloud API
slug: cancel-additional-ip
section: Additional IP
---

**Last updated 20th December 2022**

> [!primary]
>
> Since October 6th, 2022 our service "Failover IP" is named [Additional IP](https://www.ovhcloud.com/en-gb/network/additional-ip/). This renaming has no effect on its technical features.
>

## Objective

As any other OVHcloud service, an Additional IP service can be cancelled at any time.

> [!primary]
> At the moment, an Additional IP service cannot be cancelled from the control panel. This feature will be rolled out soon.
>

**This guide explains how to cancel an Additional IP service via the OVHcloud API.**

## Requirements

- An [Additional IP service](https://www.ovhcloud.com/en-gb/network/additional-ip/)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Cancel an Additional IP service via the API

Log in to the OVHcloud [API webpage](https://api.ovh.com/).

First, you need to find out the name of the service you need to cancel :

> [!api]
>
> @api {GET} /ip/service
>

To cancel the service, use the following API call :

> [!api]
>
> @api {POST} /ip/service/{serviceName}/terminate
>

- `serviceName` : name of the Additional IP service obtained with previous call

You will then receive an email asking you to confirm the cancellation. After confirmation, the cancellation will be effective.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
