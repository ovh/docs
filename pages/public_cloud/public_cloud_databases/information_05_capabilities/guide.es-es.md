---
title: Public Cloud Databases - Capabilities and Limitations (EN)
excerpt: Discover the capabilities and limitations of Public Cloud Databases
updated: 2025-07-31
---

## Public Cloud Databases

With our managed database services, we take care of the database infrastructure and administration, including set-up, backup, scalability, and security.
Choose from a large portfolio of popular engines.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/orgs/ovh/projects/16/views/5>.

## Database Engines

We currently offer seven database engines:

### MySQL

MySQL is an open-source fully-managed relational database service. It's fast, reliable, scalable, and user-friendly.<br>
See our [MySQL Capabilities and limitations](/pages/public_cloud/public_cloud_databases/mysql_01_capabilities) guide.

### PostgreSQL

PostgreSQL is an open-source fully managed and hosted relational database service. It's a high-performance engine that offers flexibility through a variety of included advanced extensions.<br>
See our [PostgreSQL Capabilities and limitations](/pages/public_cloud/public_cloud_databases/postgresql_01_capabilities) guide.

### MongoDB

MongoDB is a fully managed and scalable document-oriented database management system which does not require a predefined data schema.<br>
See our [MongoDB Capabilities and limitations](/pages/public_cloud/public_cloud_databases/mongodb_01_concept_capabilities) guide.

### Valkey

Valkey is fully managed in-memory NoSQL database based on the Redis® open source software. It helps you store and access data quickly and efficiently.<br>
See our [Valkey Capabilities and limitations](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) guide.

### Cassandra

Apache Cassandra is an open-source fully managed NoSQL database. It's highly fault-tolerant with asynchronous replication.<br>
See our [Cassandra Capabilities and limitations](/pages/public_cloud/public_cloud_databases/cassandra_01_capabilities) guide.

## Feature Availability

| Feature                                                                                                      | MySQL | PostgreSQL | MongoDB          | Valkey | Cassandra |
|--------------------------------------------------------------------------------------------------------------|-------|------------|------------------|-------|-----------|
| End-to-end security ([more information](/pages/public_cloud/public_cloud_databases/information_01_security_overview))         | ✓     | ✓          | ✓                | ✓     | ✓         |
| Automatic updates and one click upgrade                                                                      | ✓     | ✓          | ✓                | ✓     | ✓         |
| Read-only nodes                                                                                              | ✓     | ✓          | ✓                |       |           |
| Point in Time Recovery                                                                                       | ✓     | ✓          | ✓ <sup>(1)</sup> |       |           |
| Database forking                                                                                             | ✓     | ✓          | ✓                | ✓     | ✓         |
| Terraform Provider support ([more information](https://registry.terraform.io/providers/ovh/ovh/latest/docs)) | ✓     | ✓          | ✓                | ✓     | ✓         |
| Private network connectivity (vRack)                                                                         | ✓     | ✓          | ✓                | ✓     | ✓         |

(1) depends on the plan

## Specific feature Plans

### Essential

The Essential plan typically offers the basic features and functionalities required for managing a database.
It is designed for test and development environments or non-critical projects.

### Business/Production

The Business/Production plan is more comprehensive and suitable for organizations with higher database demands.
This is the first production-ready offering.

### Enterprise/Advanced

The Enterprise/Advanced pricing plan is the most advanced and robust option available for managed databases.
It is dedicated to organizations with complex and high-performance database requirements.

### Plan capabilities overview

Here is an overview of the various plans' capabilities:

| Feature           | Essential | Business/Production Single AZ | Enterprise/Advanced Single AZ | Production Multi AZ | Advanced Multi AZ |
|-------------------|-----------|-------------------------------|-------------------------------|---------------------|-------------------|
| SLA               | None      | 99.9%                         | 99.95%                        | 99.95%              | 99.99%            |
| High availability |           | ✓                             | ✓                             | ✓                   | ✓                 |

Your choice of plan affects the number of nodes your cluster can run.

## Last Updates

For the latest updates, please refer to our [Github changelog](https://github.com/orgs/ovh/projects/16/views/6?filterQuery=-no%3Achangelog+status%3ADone%2C%22Partially+released%22+main-product%3A%22Managed+Databases%22).

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
