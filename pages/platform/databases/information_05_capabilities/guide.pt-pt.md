---
title: Public Cloud Databases - Capabilities and Limitations (EN)
excerpt: Discover the capabilities and limitations of Public Cloud Databases
routes:
    canonical: 'https://help.ovhcloud.com/csm/en-gb-public-cloud-databases-capabilities?id=kb_article_view&sysparm_article=KB0058307'
updated: 2023-06-01
---

## Public Cloud Databases

With our managed database services, we take care of the database infrastructure and administration, including set-up, backup, scalability and security.
Choose from a large portfolio of popular engines.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/2>.

## Database Engines

We currently offer seven database engines:

### MySQL

MySQL is an open-source fully-managed relational database service. It's fast, reliable, scalable, and user-friendly.<br>
See our [MySQL Capabilities and limitations](/pages/platform/databases/mysql_01_capabilities) guide.

### PostgreSQL

PostgreSQL is an open-source fully managed and hosted relational database service. It's a high-performance engine that offers flexibility through a variety of included advanced extensions.<br>
See our [PostgreSQL Capabilities and limitations](/pages/platform/databases/postgresql_01_capabilities) guide.

### MongoDB

MongoDB is a fully managed and scalable document-oriented database management system which does not require a predefined data schema.<br>
See our [MongoDB Capabilities and limitations](/pages/platform/databases/mongodb_01_concept_capabilities) guide.

### Redis

Redis is an open-source fully managed in-memory NoSQL database. It helps you store and access data quickly and efficiently.<br>
See our [Redis Capabilities and limitations](/pages/platform/databases/redis_01_capabilities) guide.

### M3db

M3db is a fully managed distributed time series database. It's scalable and offers high-availability, which is ideal for your monitoring environment and time series applications.<br>
See our [M3db Capabilities and limitations](/pages/platform/databases/m3db_01_capabilities) guide.

### Opensearch

OpenSearch is an open-source fully managed search, analytics and observability engine. It is ideal for logs management and offers search and analytical aggregations.<br>
OpenSearch is an open source fork derived from Elasticsearch.<br>
See our [OpenSearch Capabilities and limitations](/pages/platform/databases/opensearch_01_capabilities) guide.

### Cassandra

Apache Cassandra is an open-source fully managed NoSQL database. It's highly fault-tolerant with asynchronous replication.<br>
See our [Cassandra Capabilities and limitations](/pages/platform/databases/cassandra_01_capabilities) guide.

## Feature Availability

| Feature                                                                                                      | MySQL | PostgreSQL | MongoDB          | Redis | M3db | Opensearch | Cassandra |
|--------------------------------------------------------------------------------------------------------------|-------|------------|------------------|-------|------|------------|-----------|
| End-to-end security ([more information](/pages/platform/databases/information_01_security_overview))         | ✓     | ✓          | ✓                | ✓     | ✓    | ✓          | ✓         |
| Automatic updates and one click upgrade                                                                      | ✓     | ✓          | ✓                | ✓     | ✓    | ✓          | ✓         |
| Read-only nodes                                                                                              | ✓     | ✓          | ✓                |       |      |            |           |
| Point in Time Recovery                                                                                       | ✓     | ✓          | ✓ <sup>(1)</sup> |       |      |            |           |
| Database forking                                                                                             | ✓     | ✓          | ✓                | ✓     | ✓    | ✓          | ✓         |
| Terraform Provider support ([more information](https://registry.terraform.io/providers/ovh/ovh/latest/docs)) | ✓     | ✓          | ✓                | ✓     | ✓    | ✓          | ✓         |
| Private network connectivity (vRack)                                                                         | ✓     | ✓          | ✓                | ✓     | ✓    | ✓          | ✓         |

(1) depends on the plan

## Specific feature Plans

Three plans are available:

### Essential

The Essential plan typically offers the basic features and functionalities required for managing a database.
It is designed for test and development environments or non-critical projects.

### Business

The Business plan is more comprehensive and suitable for organizations with higher database demands.
This is the first production-ready offering.

### Enterprise

The enterprise pricing plan is the most advanced and robust option available for managed databases.
It is dedicated to organizations with complex and high-performance database requirements.

### Plan capabilities overview

Here is an overview of the various plans' capabilities:

| Feature           | Essential | Business | Enterprise |
|-------------------|-----------|----------|------------|
| SLA               | None      | 99.9%    | 99.95%     |
| High availability |           | ✓        | ✓          |


Your choice of plan affects the number of nodes your cluster can run.

## Last Updates

### 14 April 2023

You can now adjust the storage space of your cluster according to your needs. To resize your cluster, see our [guide](/pages/platform/databases/databases_11_resize_your_cluster_storage).

### 15 March 2023

Remote backup is now available for all services. See [Automated backups](/pages/platform/databases/databases_05_automated_backups).

### 27 January 2023

PostgreSQL 15 is now available in the OVHcloud Control Panel and via the API. Please refer to the [DBMS lifecycle policy](/pages/platform/databases/information_02_lifecycle_policy).

### 8 November 2022

MongoDB 6.0 is now available in the OVHcloud Control Panel and via the API. Please refer to the [DBMS lifecycle policy](/pages/platform/databases/information_02_lifecycle_policy).

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pt-pt/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project. Join our community of users on <https://community.ovh.com/en/>.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
