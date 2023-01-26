---
title: Handling Disk Full situations
slug: handling-disk-full
excerpt: Find out how to avoid, react and handle a Public Cloud Databases service reaching its full disk capacity
section: General guides
order: 100
---

**Last updated January 23rd, 2023**

## Objective

No matter the database technology, when no more physical disk space is available the service operation degrades significantly -- at the very least you won't be able to store any data anymore, but even logical read operations might start to get impacted, for example querying might slow down or fail.

This guide aims to help you understand how Public Cloud Databases services behave before and when reaching such conditions, and what you can do about it.

## Avoiding full disk conditions

### Disk space usage metrics

As part of using your Public Cloud Databases service efficiently, you should keep an eye on the service metrics. You can access those through the OVH manager UI or using the API. You can also make use of [cross-service integrations](https://docs.ovh.com/us/en/publiccloud/databases/cross-service-integration/) to gather, observe and alert based on services metrics.

### Mail notifications

When your service storage begins to fill up and reaches a high mark, Public Cloud Databases sends you an email to warn you of the situation. The specific threshold depends on the engine, it may range from 75 to 90 percent.

When the disk usage increases even more and reaches a critical level (depending on the engine, ranging from 90 to 95 percent), you'll receive another mail notification and the service will turn to a disk full mode, where it will start to refuse writes.

## How to handle a disk full situation

Different engines react in different ways, thus Public Cloud Databases services react differently when facing disk full conditions:

- `Redis`, `Kafka MirrorMaker`, `Grafana`, `M3 Aggregator` & `Kafka Connect` don't actually store any user data on disk. Thus they won't ever fill up the underlying disk storage.
- `Kafka`, `OpenSearch`, `Cassandra` & `M3DB` turn to read-only.
- `MySQL` & `PostgreSQL` turn to read-only with a way to temporarily revert to read-write.
- `MongoDB` forbids writes but allows deletes.

### What to do: Upgrading your service

It may be that your usage simply requires more storage. Thus, you can decide to handle the situation by increasing the provisioned storage, and / or upgrading to an offer with more storage.

Once the upgrade finishes, the service will detect that more storage is available and thus revert to nominal mode.

### What to do: reclaim disk space

It may be that you reached the full disk situation because of a runaway application filling up your database, or that you store some older, now-useless data. In these cases, stop whatever process is unduelly filling your storage, then remove unwanted data.

#### `Kafka`, `OpenSearch`, `M3DB`

You can reclaim disk space by deleting a `Kafka` topic, an `OpenSearch` index or an `M3DB` namespace. 

#### `MongoDB`

`MongoDB` refuses any query that inserts data, but allows queries deleting data. You can thus execute any `MongoDB` command that allows to reclaim disk space.

#### `PostgreSQL`, `MySQL`

For these engines, you'll want to call an API endpoint to temporarily allow write operations.

> [!tabs]
> PostgreSQL
>> > [!api]
>> > @api {POST} /cloud/project/{serviceName}/database/postgresql/{clusterId}/enableWrites 
> MySQL
>> > [!api]
>> > @api {POST} /cloud/project/{serviceName}/database/mysql/{clusterId}/enableWrites

This will give you a 15 minutes time window where you can write again to your database. At the end of this window, either you where able to execute queries that end up reducing disk usage (e.g. DROPs, DELETEs), and thus your service goes back to nominal read-write state, or disk usage stays too high and your service will once again return to the read-only state.

> [!warning]
> Be careful **not** to use that write window to continue increasing disk usage: You can end up actually conpletely filling the underlying storage. `PostgreSQL` and `MySQL` will not react well to such a situation and end up unrecoverabely out of order.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
