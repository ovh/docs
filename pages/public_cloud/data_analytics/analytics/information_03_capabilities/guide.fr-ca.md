---
title: Capacités et limitations des services Analytics (EN)
excerpt: Discover the capabilities and limitations of Analytics services
updated: 2026-05-06
---

## Analytics

With our analytics services, we take care of the infrastructure and administration, including set-up, backup, scalability, and security, choose from a large portfolio of popular engines.

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/orgs/ovh/projects/16/views/5>.

## Analytics services

We currently offer data analytics engines:

### OpenSearch

OpenSearch is an open-source fully managed search, analytics, and observability engine. It is ideal for logs management and offers search and analytical aggregations.<br>
OpenSearch is an open-source fork derived from Elasticsearch.<br>
See our [OpenSearch Capabilities and limitations](/pages/public_cloud/public_cloud_databases/opensearch_01_capabilities) guide.

## Feature Availability

| Feature                                                                                                      | OpenSearch |
|--------------------------------------------------------------------------------------------------------------|------------|
| End-to-end security ([more information](/pages/public_cloud/public_cloud_databases/information_01_security_overview))         | ✓          |
| Automatic updates and one click upgrade                                                                      | ✓          |
| Read-only nodes                                                                                              |            |
| Point in Time Recovery                                                                                       |            |
| Database forking                                                                                             | ✓          |
| Terraform Provider support ([more information](https://registry.terraform.io/providers/ovh/ovh/latest/docs)) | ✓          |
| Private network connectivity (vRack)                                                                         | ✓          |

(1) depends on the plan

## Specific feature Plans

### Essential/Discovery

The Essential/Discovery plan typically offers the basic features and functionalities required for managing a database.
It is designed for test and development environments or non-critical projects.

### Business/Production

The Business/Production plan is more comprehensive and suitable for organizations with higher database demands.
This is the first production-ready offering.

### Enterprise/Advanced

The Enterprise/Advanced pricing plan is the most advanced and robust option available for managed databases.
It is dedicated to organizations with complex and high-performance database requirements.

### Plan capabilities overview

Here is an overview of the various plans' capabilities:

| Feature           | Essential/Discovery | Business/Production Single AZ | Enterprise/Advanced Single AZ | Production Multi AZ | Advanced Multi AZ |
|-------------------|---------------------|-------------------------------|-------------------------------|---------------------|-------------------|
| SLA               | None      | 99.9%                         | 99.95%                        | 99.95%              | 99.99%            |
| High availability |           | ✓                             | ✓                             | ✓                   | ✓                 |

Your choice of plan affects the number of nodes your cluster can run.

## Last Updates

For the latest updates, please refer to our [Github changelog](https://github.com/orgs/ovh/projects/16/views/6?filterQuery=-no%3Achangelog+status%3ADone%2C%22Partially+released%22+main-product%3A%22Managed+Databases%22).

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!

Join our [community of users](/links/community).
