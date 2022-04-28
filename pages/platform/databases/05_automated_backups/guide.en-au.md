---
title: Automated Backups (EN)
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

* PITR:
Either you run into a problem or you just want to see what your data looked like at a prior date, you can restore your data to any point in time within the selected retention period of the chosen customer plan.

Engine | Backup Method(s) | Frequency | RPO
:--- | :--- | :---: | :---:
MongoDB | Remote site backup (option 2nd backup site) | Daily | 24h
MongoDB Enterprise | PITR on local S3 + Remote site backup (option 2nd backup site) | Continuous for PITR - Daily for backup | Few minutes for PITR - 24h for backup
PostgreSQL | PITR on local S3 + Remote site backup (option 2nd backup site) | Continuous for PITR - Daily for backup | Few minutes for PITR - 24h for backup
MySQL | PITR on local S3 + Remote site backup (option 2nd backup site) | Continuous for PITR - Daily for backup | Few minutes for PITR - 24h for backup
Redis | Remote site backup (option 2nd backup site) | 2 times a day | 12h
OpenSearch | Incremental + Remote site backup (option 2nd backup site) | Hourly for incremental - Daily for backup | 1h for incremental - 24h for backup
M3 | Remote site backup (option 2nd backup site) | Daily | 24h
Cassandra | Remote site backup (option 2nd backup site) | Daily | 24h
Kafka | N/A | N/A | N/A

## Lexicon

PITR: Point In Time Recovery
RPO: Recovery Point Objective

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
