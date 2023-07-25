---
title: "Handling &laquo;Disk Full&raquo; situations"
excerpt: Find out how to avoid, analyse and fix a Public Cloud Databases service reaching its full disk capacity
updated: 2023-07-24
---

**Last updated July 24th, 2023**

## Objective

No matter the database technology, when no more physical disk space is available the service operation degrades significantly. At the very least your databases cannot store any more data, but even logical read operations might start to get impacted, for example querying might slow down or fail.

**This guide helps you understand how Public Cloud Databases services behave before and when reaching such conditions, and what you can do about it.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
- A [Public Cloud database service](https://www.ovhcloud.com/asia/public-cloud/databases/) up and running

## Instructions

### Avoiding full disk conditions

#### Disk space usage metrics

As part of using your Public Cloud Databases service efficiently, you should keep an eye on the service metrics. You can access those in the [OVHcloud Control Panel](https://ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) or using the [API](/pages/account/api/first-steps). You can also make use of [cross-service integrations](/pages/platform/databases/databases_07_cross_service_integration) to gather, observe and alert based on services metrics.

#### Mail notifications

When your service storage begins to fill up and reaches a high mark, Public Cloud Databases sends you an email to warn you of the situation. The specific threshold depends on the engine, it may range from 75 to 90 percent.

When the disk usage increases even more and reaches a critical level (depending on the engine, ranging from 90 to 95 percent), you will receive another email notification and the service will turn to a "disk full" mode, where it will start to refuse writes.

### How to handle a disk full situation ?

Different engines react in different ways, thus Public Cloud Databases services react differently when facing disk full conditions:

- `Redis`, `Kafka MirrorMaker`, `Grafana`, `M3 Aggregator` and `Kafka Connect` do not store any user data on disk. Thus they will not fill up the underlying disk storage.
- `Kafka`, `OpenSearch`, `Cassandra` and `M3DB` turn to read-only.
- `MySQL` and `PostgreSQL` turn to read-only with a way to temporarily revert to read-write.
- `MongoDB` forbids writes but allows deletes.

#### Upgrading your service

It may be that your usage simply requires more storage. You can then increase the provisioned storage, and / or upgrade to an offer with more storage. Once the upgrade finishes, the service will detect that more storage is available and thus revert to normal mode.

#### Reclaim disk space

It may be that you have reached the full disk situation because of a runaway application filling up your database, or that you are storing some old obsolete data. In these cases, stop whatever process which is unduly filling up your storage, then remove unwanted data.

##### **Kafka**, **OpenSearch**, **M3DB**

You can reclaim disk space by deleting a `Kafka` topic, an `OpenSearch` index or an `M3DB` namespace.

##### **MongoDB**

`MongoDB` refuses any query that inserts data, but allows queries deleting data. You can thus execute any `MongoDB` command that allows to reclaim disk space.

##### **PostgreSQL**, **MySQL**

For these engines, call the respective API endpoint to temporarily allow write operations:

> [!tabs]
> PostgreSQL
>> > [!api]
>> > @api {POST} /cloud/project/{serviceName}/database/postgresql/{clusterId}/enableWrites
> MySQL
>> > [!api]
>> > @api {POST} /cloud/project/{serviceName}/database/mysql/{clusterId}/enableWrites

This will give you a 15 minutes time window to write again to your database. At the end of this window, either you were able to execute queries that reduce disk usage (e.g. DROPs, DELETEs), and thus your service changes to the read-write state, or disk usage stays too high and your service will return to the read-only state.

> [!warning]
> Be careful **not** to use that write window to continue to increase the disk usage; this might fill the underlying storage space completely. `PostgreSQL` and `MySQL` will not react well to such a situation and might end up unrecoverabely out of order.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/asia/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
