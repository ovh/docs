---
title: Public Cloud Databases - Logs to customers
excerpt: Find out how to forward logs of your database cluster to your Logs Data Platform data stream
updated: 2024-03-06
---

## Objective

Public Cloud managed databases allow you to send logs of your cluster to your own Logs Data Platform (LDP) data stream.

**This guide explains how to forward cluster logs to your own LDP stream with the OVHcloud API.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A [Public Cloud database service](https://www.ovhcloud.com/en-gb/public-cloud/databases/) up and running
- Access to the [OVHcloud API](https://eu.api.ovh.com/console/)
- A Logs Data Platform account within this OVHcloud account with at least one destination stream configured
- A running database cluster

## Instructions

### Forward logs to your LDP stream

- Retrieve your LDP destination `streamId`
- Retrieve your `serviceName`
- Retrieve your `clusterId`

Use the following API call:

> [!api]
>
> @api {v1} /cloud POST /cloud/project/{serviceName}/database/{engine}/{clusterId}/log/subscription
>

```console
body : {
    streamId: <LDP destination stream ID>
}
```

Then logs will start to be forwarded to your LDP stream.


### Delete subscription

You have 2 methods to delete subscription: 

- You can delete subscriptions using the `subscriptionId` concerned in this API call:

> [!api]
>
> @api {v1} /cloud DELETE /cloud/project/{serviceName}/database/mongodb/{clusterId}/log/subscription/{subscriptionId}
>

- If you delete your database cluster, all subscriptions of this cluster are deleted automatically.


## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
