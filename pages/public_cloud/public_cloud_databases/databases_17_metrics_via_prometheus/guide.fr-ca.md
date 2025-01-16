---
title: Public Cloud Databases - How to fetch service metrics with Prometheus
excerpt: Find out how to setup a Prometheus exporter for your Public Cloud databases service
updated: 2024-12-11
---

## Objective

Public Cloud databases allow you to export service metrics using Prometheus.

**This guide explains how to setup a Prometheus exporter for your Public Cloud databases service so that a Prometheus server can collect metrics.**

## Requirements

- A [Public Cloud databases service](/links/public-cloud/databases) up and running,
- Access to the [OVHcloud API](/links/api),
- A [Prometheus](https://prometheus.io) server to collect metrics.

## Instructions

### Enable the Prometheus exporter for your service

You can enable a Prometheus exporter for your service using the API endpoint:

> [!api]
>
> @api {v1} /cloud PUT /cloud/project/{serviceName}/database/{engine}/{clusterId}
>

The boolean property `enablePrometheus` should be set to `true` to activate the Prometheus exporter for your service.

### Retrieve the Prometheus exporter access info

Use the following API endpoint to get the data needed to access the Prometheus exporter:

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/database/{engine}/{clusterId}/prometheus
>

You will also need to reset the credentials in order to obtain the password required for access:

> [!api]
>
> @api {v1} /cloud POST /cloud/project/{serviceName}/database/{engine}/{clusterId}/prometheus/credentials/reset
>

### Configure your Prometheus server and start pulling metrics

Use the data from the previous state to configure your Prometheus server and start pulling metrics for your service. Here is an example of such a Prometheus configuration for a MongoDB service:

```yaml
scrape_configs:
- job_name: mongo-metrics
  scrape_interval: 10s
  metrics_path: /metrics
  scheme : https
  basic_auth:
    username: prometheus
    password: "xxx"
  dns_sd_configs:
    - names:
      - '_prometheus._tcp.mongodb-7bfb5d40-oa85dff3e.database.cloud.ovh.net' 
```

The other engines use a slightly different format:

```yaml
scrape_configs:
- job_name: postgresql-metrics
  scrape_interval: 10s
  metrics_path: /metrics
  scheme : https
  basic_auth:
    username: prometheus
    password: "xxx"
  tls_config:
      insecure_skip_verify: true
  static_configs:
    - targets: 
        - postgresql-02d6a757-ovh-dev.database.cloud.ovh.net:9273
        - replica-postgresql-02d6a757-ovh-dev.database.cloud.ovh.net:9273
```

## Limitations

Public Cloud Databases offer service metrics via Prometheus for the following engines:

- Caching
- Cassandra
- Kafka
- Kafka Connect
- Kafka MirrorMaker
- MongoDB
- MySQL
- OpenSearch
- PostgreSQL

Prometheus endpoints are subject to the same networking limitations the associated service is. Thus, IP restrictions apply, and for services using private networking, the Prometheus exporter endpoint is only reachable from the private network your service is attached to.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
