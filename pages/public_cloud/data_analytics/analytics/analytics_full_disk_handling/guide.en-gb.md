---
title: "Analytics - How to handle 'Disk Full' situations"
excerpt: Find out how to avoid, analyse and fix an Analytics service reaching its full disk capacity
updated: 2025-01-14
---

## Objective

No matter the Analytics technology, when no more physical disk space is available the service operation degrades significantly. At the very least your Analytics services cannot store any more data, but even logical read operations might start to get impacted, for example querying might slow down or fail.

**This guide helps you understand how Analytics services behave before and when reaching such conditions, and what you can do about it.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An [Analytics service](/links/public-cloud/analytics) up and running

## Instructions

### Avoiding full disk conditions

#### Disk space usage metrics

As part of using your Analytics service efficiently, you should keep an eye on the service metrics. You can access those in the [OVHcloud Control Panel](/links/manager) or using the [API](/pages/manage_and_operate/api/first-steps). You can also make use of [cross-service integrations](/pages/public_cloud/data_analytics/analytics/analytics_cross_service_integration) to gather, observe and alert based on services metrics.

#### Mail notifications

When your service storage begins to fill up and reaches a high mark, the Analytics service sends you an email to warn you of the situation. The specific threshold depends on the engine, it may range from 75% to 90%.

When the disk usage increases even more and reaches a critical level (depending on the engine, ranging from 90% to 95%), you will receive another email notification and the service will turn to a "disk full" mode, where it will start to refuse writes.

### How to handle a disk full situation ?

Different engines react in different ways, thus Analyticss services react differently when facing disk full conditions:

- `Kafka MirrorMaker`, `Dashboards` and `Kafka Connect` do not store any user data on disk. Thus they will not fill up the underlying disk storage.
- `Kafka` and `OpenSearch` turn to read-only.

#### Upgrading your service

It may be that your usage simply requires more storage. You can then increase the provisioned storage, and / or upgrade to an offer with more storage. Once the upgrade finishes, the service will detect that more storage is available and thus revert to normal mode.

#### Reclaim disk space

It may be that you have reached the full disk situation because of a runaway application filling up your database, or that you are storing some old obsolete data. In these cases, stop whatever process which is unduly filling up your storage, then remove unwanted data.

##### **Kafka**, **OpenSearch**

You can reclaim disk space by deleting a `Kafka` topic or an `OpenSearch` index.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!

Join our [community of users](/links/community).