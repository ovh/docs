---
title: DBMS - Politique de cycle de vie (EN)
excerpt: Lifecycle policy for Public Cloud Databases engines
slug: lifecycle-policy
section: Informations générales
order: 020
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/lifecycle-policy/'
---

**Last updated September 15th, 2021**

## Objective

OVHcloud Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance.
Each service is powered by third-party databases management systems (DBMS), maintained by third-party companies or communities such as PostgreSQL community, Oracle, MongoDB, RedisLab, Apache Foundation and more.

**This guide explains the OVHcloud policy for major DBMS versions provided in Public Cloud Databases.**

## Lifecycle policy

This policy is being provided to help customers understand the lifecycle of OVHcloud Public Cloud Databases, in order to anticipate and prepare transitions to newer versions.

**End Of Life (EOL)** refers to the deadline after which affected Public Cloud Databases services are deprecated and will no longer be supported nor maintained.

OVHcloud aims to follow the EOL schedule set by the original authors and maintainers of the DBMS software, aka upstream projects. Once the upstream project retires a specific version, they no longer receive security updates or critical bug fixes.

Continued use of outdated services means that they no longer offer our customers the level of protection their business needs. Therefore, by following upstream project's EOL schedule, we ensure that OVHcloud services are always running on supported versions of the DBMS software.

### Service coverage

This lifecycle policy is applicable to :

- All Public Cloud Databases services;
- Including all the service plans (Essential, Business, Enterprise);
- And all proposed DBMS, such as MySQL, PostgreSQL, MongoDB, Redis, Kafka, ...
- Whatever state; if they are **up and running** or in a **sleeping state** (powered off, waiting for payment).

### Providing new major versions

Once a new DBMS major version is considered stable to use, OVHcloud will do its best to provide it to our customers as soon as we can.
Since many factors can come into play, we cannot provide an exact timeline or engagement.

### Prior EOL

When OVHcloud defines the EOL date for a service major version :

- Customers will receive an EOL email announcement via their main contact point (NIC-admin);
- The OVHcloud Control Panel will also show an EOL notification for affected services;
- Email reminders may also be sent to customers.

### Upon EOL

Once the EOL date is reached :

- Affected **running services** will be **automatically upgraded to the latest available version**. For example, if the latest version is PostgreSQL 13, then upon PostgreSQL 9.6 EOL, it will be upgraded to the latest PostgreSQL 13 instead of PostgreSQL 10, 11 or 12.
- Affected **sleeping state** (powered-off, ...) services **will no longer be accessible and their backups will be deleted**.

### Potential impacts

New DBMS versions can introduce minor changes but also breaking changes, leading to malfunctions in your code thus applications. One feature might not work properly, or your whole website or application can become broken and unavailable. **Impacts cannot be known by OVHcloud** and customers are responsible for their own code.
We recommend to browse official DBMS documentation to check the newly introduced features and/or deprecated ones.

## Recommendations for upgrades

We highly recommend to perform the version upgrade well before EOL so that you can test compatibility for any breaking changes, plan for unforeseen issues, and migrate to the newer version at your own schedule.

Public Cloud Databases offer database forking (a copy) as an efficient tool to verify the version upgrade so that you can safely test compatibility without committing your production services to a one-way upgrade.

To perform a fork, navigate to the "Overview" page of your service, and scroll down until you see a "New database fork" button. This will allow you to make a separate new database service that is cloned from the current one's backups.

## EOL Announcements for major versions

### Kafka

Public Cloud Databases for Kafka *major.minor* version will reach EOL approximately one year after it's made available on Public Cloud Databases.

| **Kafka Version** | **OVHcloud EOL** | **Availability on Public Cloud Databases** |
|-------|------------|------------|
| 2.7.x | 2022-01-24 | 2021-01-21 |
| 2.8.x | 2022-06-26 | 2021-04-26 |

### MongoDB

MongoDB EOL will coincide with the official MongoDB Lifecycle schedule : <https://www.mongodb.com/support-policy/lifecycles>.

### MySQL

MySQL EOL will coincide with the official MySQL Lifecycle schedule for linux : <https://www.mysql.com/fr/support/supportedplatforms/database.html>

### PostgreSQL

PostgreSQL EOL will coincide with the official PostgreSQL versioning policy : <https://www.postgresql.org/support/versioning/>

### Redis

Redis EOL will coincide with the official Redis Community Releases policy : <https://redis.io/topics/releases>

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/>.
