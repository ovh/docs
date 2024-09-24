---
title: Public Cloud Databases - How to setup logs forwarding
excerpt: Find out how to forward logs of your database service to your Logs Data Platform data stream
updated: 2024-05-15
---

## Objective

Public Cloud managed databases allow you to send logs of your service to your own Logs Data Platform (LDP) data stream.

**This guide explains how to forward service logs to your own LDP stream with the OVHcloud API.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- A [Public Cloud database service](https://www.ovhcloud.com/en-au/public-cloud/databases/) up and running
- Access to the [OVHcloud API](https://ca.api.ovh.com/console/)
- A Logs Data Platform account within this OVHcloud account with at least one destination stream configured
    - If you are not familiar with all the LDP *Stream* configuration possibilities, simply create a new one with the default options (indexing & websocket enabled, long-term storage disabled) for the purpose of this guide.
- A running database service

## Instructions

### Step 1 - Retrieve the required information

#### Retrieve your LDP destination `streamId`:

- In the OVHcloud Control Panel, go to your LDP page.
- Go to the `Data stream` tab.
- Choose your target stream and click on `Copy stream ID`{.action}.

#### Retrieve your LDP destination `serviceName`:

- It refers to your Public Cloud project ID.

#### Retrieve your `clusterId`:

- In the OVHcloud Control Panel, go to your database.
- You can see the field `Cluster ID`.

### Step 2 - Create your subscription

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

To find logs of your service in your graylogs stream you can use the following graylog queries:

#### MongoDB

Query: `cluster: "<HostID>"`

You can find this `HostID` in your OVHcloud Control Panel:

- In `Login information` switch `Service` to `mongodb`
- Now you can see the `Host` field with the format `<HostID>.database.cloud.ovh.net`

#### Other Engines

Query: `clusterID: "<Engine>-<HostID>"`

You can find this `HostID` in your OVHcloud Control Panel:

- Find the Cluster ID formatted as a UUID (AAAAAAAA-BBBB-CCCC-DDDDDDDDDDDD)
- `HostID` is the first part of the UUID (AAAAAAAA)

### Delete subscription

You have 2 methods to delete a subscription:

- You can delete subscriptions using the `subscriptionId` concerned in this API call:

> [!api]
>
> @api {v1} /cloud DELETE /cloud/project/{serviceName}/database/mongodb/{clusterId}/log/subscription/{subscriptionId}
>

- If you delete your database service, all subscriptions of this service are deleted automatically.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
