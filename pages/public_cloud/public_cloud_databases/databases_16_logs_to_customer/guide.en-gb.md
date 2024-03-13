---
title: Public Cloud Databases - Logs to customers
excerpt: Find out how to forward logs of your service to your Log Data Platform
updated: 2024-03-06
---

## Objective

Public Cloud managed databases allow you to get logs of your service in your own Log to customer (LDP) stream.

**This guide explains how to forward services logs to your own LDP stream.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A [Public Cloud database service](https://www.ovhcloud.com/en-gb/public-cloud/databases/) up and running
- Access to the [OVH API](https://eu.api.ovh.com/console/)
- Get a Log data platform with a stream that will be your destination stream
- Get a running database service

## Forward logs to your LDP stream

- Get your LDP destination stream ID
- Get your service name
- Get you Cluster ID

With the OVH API, call:

> [!api]
> @api {v1} /cloud POST /cloud/project/{serviceName}/database/{engine}/{clusterId}/log/subscription

- **streamId**: LDP destination stream ID

Then logs will start to be forward to your LDP stream.

## Find logs in Graylog

To find logs of your service in your graylogs stream you can use following graylog queries :

### MongoDB Discovery

Query: `kubernetes_namespace_name: "<HostID>"`

You can find this `HostID` in your manager :
- In `Login information` switch `Service` to `mongodb`
- Now you can see the `Host` field with the format `<HostID>.database.cloud.ovh.net`

### MongoDB Production and Advanced

Query: `cluster: "<HostID>"`

You can find this `HostID` in your manager :
- In `Login information` switch `Service` to `mongodb`
- Now you can see the `Host` field with the format `<HostID>.database.cloud.ovh.net`

### Other Engines

Query: `clusterID: "<Engine>-<HostID>"`

You can find this `HostID` in your manager :
- Find the Cluster ID formated as a UUID (AAAAAAAA-BBBB-CCCC-DDDDDDDDDDDD)
- `HostID` is the first part of the UUID (AAAAAAAA)

## Delete subscription

You have 2 methods to delete subscription: 


On the one hand you can delete subscrition with the specific subscrition ID

> [!api]
> @api {v1} /cloud DELETE /cloud/project/{serviceName}/database/mongodb/{clusterId}/log/subscription/{subscriptionId}

On the other hand, if you delete your database service, all subscritions of this service are automatically deleted.


## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
