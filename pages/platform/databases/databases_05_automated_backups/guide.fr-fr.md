---
title: Sauvegardes automatiques (EN)
slug: backups
excerpt: Discover the automated backup methods for each engine
section: Guides généraux
order: 17
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/backups'
updated: 2023-03-22
---

**Last updated March 22nd, 2023**

## Objective

This page provides the technical descriptions of the automated backup methods and routines for each engine.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/2>.

## Backup Methods

* Daily remote site backup:

We back up our managed public cloud databases every 1 (incremental snapshots), 12 or 24 hours (backups) — depending on the product — with the ability to restore from the latest point in time, based on the retention period of the chosen customer plan.

* PITR:

Either you run into a problem or you just want to see what your data looked like at a prior date, you can restore your data to any point in time within the retention period of the chosen customer plan for PostgreSQL and MySQL. For MongoDB Enterprise the point in time must be within the last 24 hours.

## Engine Specifications

> [!warning]
>
> Starting March 6th 2023, on top of on-site backups, free of charge off-site backups are being made available progressively. Until total completion of this rollout, please rely exclusively on the on-site backups for recovery procedures. See the concerned engines in the table below.
>

Engine | Backup Method(s) | Location(s) | Frequency | RPO | Encrypted
:--- | :--- | :---: | :---: | :---: | :---:
MongoDB | Backup on object storage | Off-Site | Daily | 24h | Yes
MongoDB Enterprise | PITR on object storage | Off-site | Continuous | Few minutes | Yes
PostgreSQL | PITR on object storage | On-Site, *Off-Site* | Continuous | Few minutes | Yes
MySQL | PITR on object storage | On-Site, *Off-Site* | Continuous | Few minutes | Yes
Redis | Backup on object storage | On-Site, *Off-Site* | 2 times a day | 12h | Yes
OpenSearch | Incremental | On-Site, *Off-Site* | Hourly | 1h | Yes
M3 | Backup on object storage | On-Site, *Off-Site* | Daily | 24h | Yes
Cassandra | Backup on object storage | On-Site, *Off-Site* | Daily | 24h | Yes
Kafka | N/A | N/A | N/A | N/A | N/A

## Off-site backup replication mecanism

For MongoDB, backup data gets shipped directly to the remote region.

For the other engines, backups are first prepared on-site, then replicated to another region. The on-site backup data persists once it gets replicated to the other region.

## Off-site backup location

Public Cloud Databases are currently configured so that services located in `GRA` (Gravelines, France) and `BHS` (Beauharnois, Canada) are configured to use `SBG` (Strasbourg, France) as the region for off-site backups. Other regions, i.e. `DE` (Frankfurt, Germany), `SBG` (Strasbourg, France), `UK` (London, United Kingdom) and `WAW` (Warsaw, Poland) use `GRA` (Gravelines, France) as the region for off-site backups.

## Lexicon

PITR: Point In Time Recovery

RPO: Recovery Point Objective

Off-Site: on a different region

On-Site: within the same region

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
