---
title: Automated Backups
slug: backups
excerpt: Discover the automated backup methods for each engine
section: General guides
order: 17
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/backups'
---

**Last updated April 26, 2022**

## Objective

This page provides the technical descriptions of the automated backup methods and routines for each engine.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/2>.

## Backup Methods

* Daily remote site backup:

We back up our managed public cloud databases every 1 (incremental), 12 or 24 hours — depending on the product — with the ability to restore from the latest snapshot.

* PITR:

Either you run into a problem or you just want to see what your data looked like at a prior date, you can restore your data to any point in time within the retention period of the chosen customer plan.

Engine | Backup Method(s) | Location | Frequency | RPO | Encrypted
:--- | :--- | :---: | :---: | :---: | :---:
MongoDB | Backup on object storage | Off-Site | Daily | 24h | Yes
MongoDB Enterprise | PITR on object storage | Off-site | Continuous | Few minutes | Yes
PostgreSQL | PITR on object storage | On-Site | Continuous | Few minutes | Yes
MySQL | PITR on object storage | On-Site | Continuous | Few minutes | Yes
Redis | Backup on object storage | On-Site | 2 times a day | 12h | Yes
OpenSearch | Hourly Incremental / Backup on object storage | On-Site | Hourly / Daily | 1h / 24h | Yes
M3 | Backup on object storage | On-Site | Daily | 24h | Yes
Cassandra | Backup on object storage | On-Site | Daily | 24h | Yes
Kafka | N/A | N/A | N/A | N/A | N/A

## Lexicon

PITR: Point In Time Recovery

RPO: Recovery Point Objective

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
