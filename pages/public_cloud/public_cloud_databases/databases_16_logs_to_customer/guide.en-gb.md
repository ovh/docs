---
title: Public Cloud Databases - Logs to customers
excerpt: Find out how to forward logs of your cluster to your Log Data Platform
updated: 2024-03-06
---

## Objective

Public Cloud managed databases allow you to get logs of your cluster in your own Log to customer (LDP) stream.

**This guide explains how to forward clusters logs to your own LDP stream.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A [Public Cloud database service](https://www.ovhcloud.com/en-gb/public-cloud/databases/) up and running
- Access to the [OVH API](https://eu.api.ovh.com/console/)
- Get a Log data platform with a stream that will be your destination stream
- Get a running database cluster

## Forward logs to your LDP stream

- Get your LDP destination stream ID
- Get your service name
- Get you Cluster ID

With the OVH API, call:

```bash
POST /cloud/project/{serviceName}/database/{engine}/{clusterId}/log/subscription
body : {
    streamId: <LDP destination stream ID>
}
```

Then logs will start to be forward to your LDP stream.


## Delete subscription

You have 2 methods to delete subscription: 


On the one hand you can delete subscrition with the specific subscrition ID

```bash
DELETE /cloud/project/{serviceName}/database/mongodb/{clusterId}/log/subscription/{subscriptionId}
```

On the other hand, if you delete your database cluster, all subscritions of this cluster are automatically deleted.


## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
