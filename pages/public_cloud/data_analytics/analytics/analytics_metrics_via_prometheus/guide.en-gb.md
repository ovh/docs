---
title: Analytics - How to fetch service metrics with Prometheus
excerpt: Find out how to setup a Prometheus exporter for your Analytics service
updated: 2025-01-20
---

## Objective

Analytics services allow you to export service metrics using Prometheus.

**This guide explains how to setup a Prometheus exporter for your Analytics service so that a Prometheus server can collect metrics.**

## Requirements

- An [Analytics service](/links/public-cloud/analytics) up and running,
- Access to the [OVHcloud API](/links/api),
- A [Prometheus](https://prometheus.io) server to collect metrics.

## Instructions

### Enable the Prometheus exporter for your service

You can enable a Prometheus exporter for your service using this API endpoint:

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

Use the data from the previous state to configure your Prometheus server and start pulling metrics for your service. Here is an example of such a Prometheus configuration for an OpenSearch service:

```yaml
scrape_configs:
- job_name: opensearch-metrics
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
        - opensearch-02d6a757-ovh-dev.database.cloud.ovh.net:9273
        - replica-opensearch-02d6a757-ovh-dev.database.cloud.ovh.net:9273
```

## Limitations

Analytics offer service metrics via Prometheus for the following engines:

- Kafka
- Kafka Connect
- Kafka MirrorMaker
- OpenSearch

Prometheus endpoints are subject to the same networking limitations the associated service is. Thus, IP restrictions apply, and for services using private networking, the Prometheus exporter endpoint is only reachable from the private network your service is attached to.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our Analytics service!

Join our [community of users](/links/community).
