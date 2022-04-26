---
title: Sauvegardes automatiques (EN)
slug: backups
excerpt: Discover the automated backup methods for each engine
section: Backups - Guides
order: 010
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/backups'
hidden: true
---

**Last updated April 26, 2022**

## Objective

This page provides the technical descriptions of the automated backup methods and routines for each engine.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/2>.

## Backup Methods

* Daily remote site backup:
We back up our managed cloud databases every 1 (incremental), 12 or 24 hours — depending on the product — with the ability to restore from the latest snapshot.

* Point In Time Recovery (PITR):
Either you run into a problem or you just want to see what your data looked like at a prior date, restore your data to any point in time within your selected retention period.

## MongoDB

Method(s):
- Remote site backup (option 2nd backup site).

Frequency / Recovery Point Objective (RPO):
- Daily / 24h

## MongoDB Enterprise

Method(s):
- PITR on local S3
- Remote site backup (option 2nd backup site).

Frequency / Recovery Point Objective (RPO):
- Continuous / few minutes for PITR
- Daily / 24h for backup.

## PostgreSQL

Method(s):
- PITR on local S3
- Remote site backup (option 2nd backup site).

Frequency / Recovery Point Objective (RPO):
- Continuous / few minutes for PITR
- Daily / 24h for backup.

## MySQL

Method(s):
- PITR on local S3
- Remote site backup (option 2nd backup site).

Frequency / Recovery Point Objective (RPO):
- Continuous / few minutes for PITR
- Daily / 24h for backup.

## Redis

Method(s):
- Remote site backup (option 2nd backup site).

Frequency / Recovery Point Objective (RPO):
- 2 times a day / 12h

## OpenSearch

Method(s):
- Incremental
- Remote site backup (option 2nd backup site).

Frequency / Recovery Point Objective (RPO):
- Hourly / 1h incremental
- Daily / 24h for backup.

## M3

Method(s):
- Remote site backup (option 2nd backup site).

Frequency / Recovery Point Objective (RPO):
- Daily / 24h

## Cassandra

Method(s):
- Remote site backup (option 2nd backup site).

Frequency / Recovery Point Objective (RPO):
- Daily / 24h

## Kafka

N/A

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
