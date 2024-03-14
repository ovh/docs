---
title: Public Cloud Databases - Logs to customers
excerpt: Find out how to forward logs of your database service to your Logs Data Platform data stream
updated: 2024-03-06
---

## Objective

Public Cloud managed databases allow you to send logs of your service to your own Logs Data Platform (LDP) data stream.

**This guide explains how to forward service logs to your own LDP stream with the OVHcloud API.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)
- A [Public Cloud database service](https://www.ovhcloud.com/en-sg/public-cloud/databases/) up and running
- Access to the [OVHcloud API](https://ca.api.ovh.com/console/)
- A Logs Data Platform account within this OVHcloud account with at least one destination stream configured
- A running database service

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

### Find logs in Graylog

To find logs of your service in your graylogs stream you can use following graylog queries :

#### MongoDB

Query: `cluster: "<HostID>"`

You can find this `HostID` in your manager :

- In `Login information` switch `Service` to `mongodb`
- Now you can see the `Host` field with the format `<HostID>.database.cloud.ovh.net`

#### Other Engines

Query: `clusterID: "<Engine>-<HostID>"`

You can find this `HostID` in your manager :

- Find the Cluster ID formated as a UUID (AAAAAAAA-BBBB-CCCC-DDDDDDDDDDDD)
- `HostID` is the first part of the UUID (AAAAAAAA)

### Delete subscription

You have 2 methods to delete subscription:

- You can delete subscriptions using the `subscriptionId` concerned in this API call:

> [!api]
>
> @api {v1} /cloud DELETE /cloud/project/{serviceName}/database/mongodb/{clusterId}/log/subscription/{subscriptionId}
>

- If you delete your database service, all subscriptions of this service are deleted automatically.


## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
