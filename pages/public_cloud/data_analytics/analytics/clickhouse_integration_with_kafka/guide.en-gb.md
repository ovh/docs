---
title: ClickHouse – Real-Time Analytics with Kafka Integration
excerpt: Find out how to connect ClickHouse® to Kafka® with Aiven integrations for seamless data exchange
updated: 2026-01-15
---

## Objective

This guide aims to help users integrate ClickHouse with Kafka using Aiven. You will learn how to set up the connection, manage supported data formats, and enable efficient real-time data ingestion for Analytics. By the end of this guide, you will be able to build reliable, high-performance data pipelines between ClickHouse and Kafka.

**Find out how to connect ClickHouse® to Kafka® with Aiven integrations for seamless data exchange. Learn which data formats are supported for input and output to ensure smooth Analytics workflows.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- Access to the [OVHcloud Control Panel](/links/manager).
- A ClickHouse service running on your OVHcloud Analytics ([this guide](/pages/public_cloud/data_analytics/analytics/analytics_getting_started) can help you to meet this requirement).
- [Configure your ClickHouse instance](/pages/public_cloud/data_analytics/analytics/clickhouse_incoming_connections) to accept incoming connections.
- An [active Kafka cluster integrated via Aiven](https://aiven.io/docs/products/clickhouse/howto/data-service-integration#create-apache-kafka-integrations) or a managed [Kafka cluster](/pages/public_cloud/data_analytics/analytics/kafka_create_cluster).

## Instructions

### Preparing your Kafka cluster

Before connecting ClickHouse, ensure your Kafka cluster is operational:

- Provision a Kafka cluster using Aiven or another managed provider;
- Collect the required connection details (brokers, authentication method, SSL certificates if applicable);
- Verify that the Kafka cluster is reachable from the ClickHouse network.

### Creating the Apache Kafka integration in Aiven

Before configuring ClickHouse tables, you must create the Apache Kafka integration in Aiven. This step establishes the managed connection that allows ClickHouse to consume Kafka data.

Follow the [official Aiven documentation to create the integration](https://aiven.io/docs/products/clickhouse/howto/data-service-integration#create-apache-kafka-integrations).

During this step, you will:

- Select or create an Apache Kafka data source;
- Define Kafka topics, consumer groups, and data formats;
- Create Kafka-backed tables exposed to ClickHouse;
- Enable the integration.

Once enabled, the Kafka data source becomes available for use in ClickHouse.

### Configuring ClickHouse for external connections

ClickHouse must accept connections from your Kafka cluster:

- Access your [ClickHouse instance configuration](/pages/public_cloud/data_analytics/analytics/clickhouse_incoming_connections);
- Enable external connections and whitelist Kafka cluster IPs or network ranges;
- Confirm ClickHouse is running a stable version supported by Aiven.

**Tip:** Always use a secure connection (TLS) between ClickHouse and Kafka for production environments.

### Creating Kafka engine tables in ClickHouse

ClickHouse uses the Kafka engine to consume topics directly:

```sql
CREATE TABLE kafka_events (
    event_time DateTime,
    user_id String,
    action String
) ENGINE = Kafka
SETTINGS
    kafka_broker_list = 'your-kafka-broker:9092',
    kafka_topic_list = 'events_topic',
    kafka_group_name = 'clickhouse_consumer_group',
    kafka_format = 'JSONEachRow';
```

- Replace **kafka_broker_list**, **kafka_topic_list**, and **kafka_group_name** with your cluster-specific values.
- **kafka_format** must match the data format used in your Kafka topics (JSON, Avro, etc.).

### Persisting data with materialized views

To store incoming Kafka data permanently:

```sql
CREATE MATERIALIZED VIEW events_mv TO permanent_events AS
SELECT *
FROM kafka_events;
```

This ensures real-time ingestion into a permanent ClickHouse table for Analytics queries. Materialized views allow decoupling ingestion from querying, improving performance.

### Validating the integration

Produce test messages in your Kafka topic and query the ClickHouse table or materialized view:

```sql
SELECT * FROM permanent_events LIMIT 10;
```

Confirm that data is ingested correctly and timestamps, formats, and encodings match expectations.

### Monitoring and optimizing

- Track Kafka consumer lag to ensure no data is missed.
- Monitor ClickHouse ingestion metrics (rows/sec, disk usage).
- Tune Kafka batch sizes and ClickHouse buffer settings for optimal throughput.
- Implement alerting for failures, slow queries, or high lag.

## Go further

[ClickHouse service capabilities](/pages/public_cloud/data_analytics/analytics/clickhouse_capabilities_limitations)

[Official Aiven documentation to integrate Kafka](https://aiven.io/docs/products/clickhouse/howto/integrate-kafka)

Join our [community of users](/links/community).

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at [https://discord.gg/ovhcloud](https://discord.gg/ovhcloud) and interact directly with the team that builds our databases service!