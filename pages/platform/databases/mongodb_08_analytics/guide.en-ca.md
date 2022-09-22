---
title: MongoDB - Configure an Analytics node
excerpt: Configure a dedicated Analytics node in your Public Cloud Databases for MongoDB to support analytics workloads
slug: mongodb/analytics-node
section: MongoDB - Guides
order: 080
---

**Last updated 19<sup>th</sup> September 2022**

## Objective

This guide shows how to configure a node in your cluster dedicated to analytics-type queries in a Public Cloud Databases for MongoDB cluster. This allows you to run such queries, or [BI (Business Intelligence)](https://en.wikipedia.org/wiki/Business_intelligence) tools - including [MongoDB BI Connector](https://www.mongodb.com/products/bi-connector) in a way that doesn't degrade the operational performance of the cluster.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- A multi-node capable (so, either *Business* or *Enterprise* plan) MongoDB database cluster running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/ca/en/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your MongoDB instance](https://docs.ovh.com/ca/en/publiccloud/databases/mongodb/managing-service/) to accept incoming connections

## What purpose does an Analytics node serve?

Let's imagine you're operating a popular recipes website. You might use a MongoDB database to store recipes, some kind of API/backend layer to offer access to that data, and a frontend presentation layer - a website or an app - in order to display those recipes attractively to your end-users.

Now, when an end-user wants to search for and display a recipe, the API/backend layer needs to be able to find and fetch the right document quite quickly, because your end-user is already hungry and we all know a snappy user experience is nicer. And then, since that recipes website is quite popular, you need to be able to serve a large number of end-users at the same time, thus lots of similar queries at the same time. In other words, operational queries often need to meet low latency requirements, tend to be scoped to a small subset of the database as a whole and you might end up running a lot of smaller queries.

On the other hand, as the operator of that popular site, you want to understand the usage patterns as a whole. In order to do that, you might need to query your database in order to gain insights on your system state, e.g. Who are the top users? Where are they located? What time of day is your site most active? Those analytical queries have different requirements than the former set: they tend to access a larger set of the database, they are less latency-critical, and you don't want those to disrupt the end-user experience.

Simply put, an analytics node in your Public Cloud Databases for MongoDB cluster allows you to run those analytical queries while ensuring your operational queries don't suffer, by directing those to a specific node in the cluster.

## Instructions

### Make your cluster offer an Analytics node

#### How to create a cluster sporting an Analytics node?

Using the API, you can create a new cluster with:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/database/mongodb
>

Using the **nodeList** parameter, you can define the nodes for the cluster. The **role** attribute can take the value `STANDARD` or `ANALYTICS` depending on the role you want for the given node.

#### How to add an Analytics node to an existing cluster?

In case you already have an existing cluster, you can add a new node using the API endpoint:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/database/mongodb/{clusterId}/node
>

Specifying the **role** attribute, `STANDARD` or `ANALYTICS`, allows to request the role you want for the given node.

#### How to turn a non-Analytics node into an Analytics node?

You can change the role of a given node using:

> [!api]
>
> @api {PUT} /cloud/project/{serviceName}/database/mongodb/{clusterId}/node/{nodeId}
>

Once again the **role** attribute (`STANDARD` / `ANALYTICS`) allows to make a node fulfill the requested role.

### Direct analytical queries towards the Analytics node

The cluster can now be reached through two different connection strings:

- Use `mongodb+srv://<username>:<password>@<cluster hostname>/admin?replicaSet=replicaset&tls=true` for the operational connections, e.g. in the application configuration.
- Use `mongodb+srv://<username>:<password>@<cluster hostname>/admin?replicaSet=replicaset&tls=true&readPreference=secondary&readPreferenceTags=nodeType:ANALYTICS` for the analytics workload, e.g. in your BI tools.

Notice the extra query parameters `readPreference=secondary` and `readPreferenceTags=nodeType:ANALYTICS`: they direct the queries towards the Analytics node we configured.

## Constraints & limitations

- No matter what, your cluster needs at least 3 non-Analytics nodes. That means the smallest cluster with an Analytics node is a 4-node cluster.
- A cluster can have at most one Analytics node.
- If one of the first three nodes of a cluster is an Analytics node, then you won't be able to scale down the cluster from 4 nodes to 3 nodes with the following API call, using the `nodeNumber` parameter:

> [!api]
>
> @api {PUT} /cloud/project/{serviceName}/database/mongodb/{clusterId}
>

You can either use the delete node endpoint to remove the Analytics node, or turn that Analytics node into a standard one before scaling down the cluster.

## Go further

[MongoDB capabilities](https://docs.ovh.com/ca/en/publiccloud/databases/mongodb/capabilities/)

Join our community of users on <https://community.ovh.com/en/>.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.
Are you on Discord? Connect to our channel at [https://discord.gg/PwPqWUpN8G](https://discord.gg/PwPqWUpN8G) and interact directly with the team that builds our databases service!
