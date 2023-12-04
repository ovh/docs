---
title: Automated Backups
excerpt: Discover the automated backup methods for each engine
updated: 2023-05-23
---

## Objective

This page provides the technical descriptions of the automated backup methods and routines for each engine.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/orgs/ovh/projects/16/views/5>.

## Backup Methods

* Daily remote site backup:

We back up our managed public cloud databases every 1 (incremental snapshots), 12 or 24 hours (backups) — depending on the product — with the ability to restore from the latest point in time, based on the retention period of the chosen customer plan.

* PITR:

Either you run into a problem or you just want to see what your data looked like at a prior date, you can restore your data to any point in time within the retention period of the chosen customer plan for PostgreSQL and MySQL. For MongoDB Enterprise the point in time must be within the last 24 hours.

## Engine Specifications

Engine | Backup Method(s) | Location(s) | Frequency | RPO | Encrypted
:--- | :--- | :---: | :---: | :---: | :---:
MongoDB | Backup on object storage | Off-Site | Daily | 24h | Yes
MongoDB Enterprise | PITR on object storage | Off-site | Continuous | Few minutes | Yes
PostgreSQL | PITR on object storage | On-Site, Off-Site | Continuous | Few minutes | Yes
MySQL | PITR on object storage | On-Site, Off-Site | Continuous | Few minutes | Yes
Redis | Backup on object storage | On-Site, Off-Site | 2 times a day | 12h | Yes
OpenSearch | Incremental | On-Site, Off-Site | Hourly | 1h | Yes
M3 | Backup on object storage | On-Site, Off-Site | Daily | 24h | Yes
Cassandra | Backup on object storage | On-Site, Off-Site | Daily | 24h | Yes
Kafka | N/A | N/A | N/A | N/A | N/A

## Off-site backup

### Replication mecanism

For MongoDB, backup data gets shipped directly to the remote region.

For the other engines, backups are first prepared on-site, then replicated to another region. The on-site backup data persists once it gets replicated to the other region.

### Default location

Public Cloud Databases provide a default configuration for remote backups based on the region the service is running in:

| Service location            | Off-site default backup location |
|-----------------------------|----------------------------------|
| GRA (Gravelines, France)    | SBG (Strasbourg, France)         |
| BHS (Beauharnois, Canada)   | SBG (Strasbourg, France)         |
| DE (Frankfurt, Germany)     | GRA (Gravelines, France)         |
| SBG (Strasbourg, France)    | GRA (Gravelines, France)         |
| UK (London, United Kingdom) | GRA (Gravelines, France)         |
| WAW (Warsaw, Poland)        | GRA (Gravelines, France)         |

### Custom settings

Backup default location and time could be override by setting the `backups` attribute either when creating or updating your service. As an example, the following settings define `GRA` (Gravelines, France) and `DE` (Frankfurt, Germany) as backup location and `01:00:00` as daily backup time:

```json
"backups": {
  "regions": ["GRA", "DE"],
  "time": "01:00:00"
}
```

As a reminder, here is the API endpoint for database creation.

> [!api]
>
> @api {v1} /cloud POST /cloud/project/{serviceName}/database/{engine}/
>

Backup settings must respect the following rules:

- For MongoDB, the `regions` array only accepts one element. You are free to define the backup location in the same region as the service, though this could be considered **unwise**.
- For other engines, the `regions` array accepts one or two elements. If one only element is specified, it must match the region the service is running in. If two elements are specified, one of these elements must match the region the service is running in, while the other element could be set to any other region. It is **recommended** to use 2 regions for your backups.

> [!primary]
> Be aware that the backup time can only be customized on MongoDB, MySQL, and PostgreSQL.

## Lexicon

PITR: Point In Time Recovery

RPO: Recovery Point Objective

Off-Site: on a different region

On-Site: within the same region

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/asia/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
