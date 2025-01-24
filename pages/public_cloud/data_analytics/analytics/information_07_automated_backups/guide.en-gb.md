---
title: Analytics - Automated Backups
excerpt: Discover the automated backup methods for each engine
updated: 2025-01-10
---

## Objective

This page provides the technical descriptions of the automated backup methods and routines for each analytics engine.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/orgs/ovh/projects/16/views/5>.

## Backup Methods

- Daily remote site backup:

We back up our managed analytics services every 1 hour (incremental snapshots), 12 hours, or 24 hours (full backups) — depending on the product — with the ability to restore from the latest point in time, based on the retention period of the chosen customer plan.

- PITR:

Either you run into a problem or you just want to see what your data looked like at a prior date, you can restore your data to any point in time within the retention period of the chosen customer plan for PostgreSQL and MySQL. For MongoDB Enterprise the point in time must be within the last 24 hours.

Whether you encounter an issue or simply want to view your data from a previous date, you can restore your data to any point in time within the retention period of the chosen customer plan.

## Engine Specifications

| Engine | Backup Method(s) | Location(s) | Frequency | RPO | Encrypted | 
| --- | --- | --- | --- | --- | --- | 
| OpenSearch | Incremental | On-Site, Off-Site | Hourly | 1h | Yes | 
| Kafka | N/A | N/A | N/A | N/A | N/A | 

## Off-site backup

### Replication mecanism

Backups are first prepared on-site and then replicated to another region. The on-site backup data persists even after replication to the remote region.

### Default location

Analytics services provide a default configuration for remote backups based on the region where the service is running:

| Service location            | Off-site default backup location |
|-----------------------------|----------------------------------|
| GRA (Gravelines, France)    | SBG (Strasbourg, France)         |
| BHS (Beauharnois, Canada)   | SBG (Strasbourg, France)         |
| DE (Frankfurt, Germany)     | GRA (Gravelines, France)         |
| SBG (Strasbourg, France)    | GRA (Gravelines, France)         |
| UK (London, United Kingdom) | GRA (Gravelines, France)         |
| WAW (Warsaw, Poland)        | GRA (Gravelines, France)         |

### Custom settings

The default backup location and time can be overridden by configuring the backups attribute either when creating or updating your analytics service. As an example, the following settings define GRA (Gravelines, France) and DE (Frankfurt, Germany) as the backup locations and 01:00:00 as the daily backup time:

```json
"backups": {
  "regions": ["GRA", "DE"],
  "time": "01:00:00"
}
```

As a reminder, here is the API endpoint for an Analytics service creation:

> [!api]
>
> @api {v1} /cloud POST /cloud/project/{serviceName}/database/{engine}/
>

Backup settings must respect the following rules:

- The `regions` array accepts one or two elements. If one only element is specified, it must match the region the service is running in. If two elements are specified, one of these elements must match the region the service is running in, while the other element could be set to any other region. It is **recommended** to use 2 regions for your backups.

## Lexicon

- PITR: Point In Time Recovery
- RPO: Recovery Point Objective
- Off-Site: on a different region
- On-Site: within the same region

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!

Join our [community of users](/links/community).