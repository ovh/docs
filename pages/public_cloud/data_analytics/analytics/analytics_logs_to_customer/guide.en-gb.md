---
title: Analytics - How to setup logs forwarding
excerpt: Find out how to forward logs of your Analytics service to your Logs Data Platform data stream
updated: 2025-01-15
---

## Objective

Analytics services allow you to send logs of your service to your own Logs Data Platform (LDP) data stream.

**This guide explains how to forward service logs to your own LDP stream with the OVHcloud API.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An [Analytics service](/links/public-cloud/analytics) up and running
- Access to the [OVHcloud API](/links/api)
- A Logs Data Platform account within this OVHcloud account with at least one destination stream configured
    - If you are not familiar with all the LDP *Stream* configuration possibilities, simply create a new one with the default options (indexing & websocket enabled, long-term storage disabled) for the purpose of this guide.
- A running Analytics service

## Instructions

### Step 1 - Retrieve the required information

#### Retrieve your LDP destination `streamId`:

- In the [OVHcloud Control Panel](/links/manager) go to the LDP page.
- Go to the `Data stream` tab.
- Choose your target stream and click on `Copy stream ID`{.action}.

#### Retrieve your LDP destination `serviceName`:

- It refers to your Public Cloud project ID.

#### Retrieve your `clusterId`:

- In the OVHcloud Control Panel, go to your Analytics service.
- Retrieve your `Cluster ID` from the related field.

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
The logs will start to be forwarded to your LDP stream.

### Find logs in Graylog

To find logs of your service in your Graylogs stream you can use the following Graylog queries:

Query: `clusterID: "<Engine>-<HostID>"`

You can find this `HostID` in your OVHcloud Control Panel:

- Find the Cluster ID formatted as a UUID (AAAAAAAA-BBBB-CCCC-DDDDDDDDDDDD)
- `HostID` is the first part of the UUID (AAAAAAAA)

### Delete subscription

There are 2 methods to delete a subscription:

- You can delete subscriptions using the `subscriptionId` concerned and this API call:

> [!api]
>
> @api {v1} /cloud DELETE /cloud/project/{serviceName}/database/{engine}/{clusterId}/log/subscription/{subscriptionId}
>

- If you delete your Analytics service, all subscriptions of this service are deleted automatically.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our Analytics service!

Join our [community of users](/links/community).