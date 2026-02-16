---
title: ClickHouse - Connect with Tabix
excerpt: Find out how to connect to your Analytics for ClickHouse using Tabix
updated: 2026-01-10
---

## Objective

Analytics engines allow you to focus on building and analyzing data while OVHcloud handles the database infrastructure and ensures it operates under proper conditions.

**This guide explains how to connect to a ClickHouse Analytics instance using Tabix, a lightweight and user-friendly SQL client for ClickHouse.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- Access to the [OVHcloud Control Panel](/links/manager).
- A ClickHouse service running on your OVHcloud Analytics ([this guide](/pages/public_cloud/data_analytics/analytics/analytics_getting_started) can help you to meet this requirement).
- [Configure your ClickHouse instance](/pages/public_cloud/data_analytics/analytics/clickhouse_incoming_connections) to accept incoming connections.
- A stable version of Tabix installed and public network connectivity (Internet). This guide was created using Tabix version 22.05.25.

## Concept

A ClickHouse service can be managed in several ways.

One of the simplest, yet powerful, approaches is to use the Command Line Interface (CLI), as shown in our guide: [Connect to ClickHouse with CLI](/pages/public_cloud/data_analytics/analytics/clickhouse_connect_cluster_cli), or by using programming languages and drivers.

Another option is to interact directly using a graphical management tool designed for ClickHouse: **Tabix**.

To do so, we will install Tabix, configure your Analytics service for ClickHouse service to accept incoming connections, and finally connect to your ClickHouse service using Tabix.

## Instructions

### Installing Tabix

Please follow the [official Tabix documentation](https://tabix.io/doc/Install/) to install Tabix.

We are now ready to learn how to connect to our ClickHouse instance.

### Connecing with Tabix

In Tabix, create a new connection and fill in the required fields (name, port, login, password, and SSL certificate if applicable).

You are now ready to interact with your Analytics service for ClickHouse.

### Inserting and querying data

You can use the SQL editor integrated in Tabix to create your first database and table, and insert sample data. Below is an example that creates the database **company** and table **customer**, then inserts a sample row.

#### Loading data into ClickHouse

To load 100 random rows into a table called `customer`, you can use the SQL editor in Tabix with the following script:

```sql
CREATE DATABASE IF NOT EXISTS company;

CREATE TABLE IF NOT EXISTS company.customer
(
    id UInt32,
    firstName String,
    lastName String,
    email String,
    age UInt8,
    createdAt DateTime
) ENGINE = MergeTree()
ORDER BY id;

INSERT INTO company.customer
SELECT
    number + 1 AS id,
    arrayElement(['John','Jane','Mary','Michael','Sarah','Robert','Linda','James','Patricia','David'], rand() % 10 + 1) AS firstName,
    arrayElement(['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Wilson','Moore','Taylor'], rand() % 10 + 1) AS lastName,
    concat(lower(arrayElement(['John','Jane','Mary','Michael','Sarah','Robert','Linda','James','Patricia','David'], rand() % 10 + 1)),
           '.',
           lower(arrayElement(['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Wilson','Moore','Taylor'], rand() % 10 + 1)),
           '@',
           arrayElement(['example.com','email.com','mail.com','test.com','demo.com'], rand() % 5 + 1)
    ) AS email,
    18 + rand() % 60 AS age,
    now() AS createdAt
FROM numbers(100);

SELECT '100 random rows inserted into the customer table.' AS message;
```

#### Querying data with the aggregation framework

You can use SQL `GROUP BY` queries in ClickHouse to aggregate your data. For example, to count the number of customers for each age:

```sql
SELECT
    age,
    COUNT(*) AS count
FROM company.customer
GROUP BY age
ORDER BY age ASC;
```

This query provides a summary of customers by age in your ClickHouse service.

## Go further

Explore the [Tabix documentation](https://tabix.io/doc/) to view all the features and learn how to interact with your ClickHouse data.

[ClickHouse service capabilities](/pages/public_cloud/data_analytics/analytics/clickhouse_capabilities_limitations)

[Configuring vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)

Join our [community of users](/links/community).

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at [https://discord.gg/ovhcloud](https://discord.gg/ovhcloud) and interact directly with the team that builds our databases service!
