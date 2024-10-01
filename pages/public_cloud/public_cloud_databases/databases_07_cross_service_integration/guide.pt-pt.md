---
title: Public Cloud Databases - How to setup a service integration
excerpt: Find out how to use Cross Service Integration for Public Cloud Databases engines
updated: 2023-05-25
---

## Objective

Cross Service Integration allows you to expose your Public Cloud Databases Logs and Metrics.

**This guide explains how to use Cross Service Integration.**

> [!warning]
>
> **Out of scope:**
>
> - Expose metrics and logs outside of OVHcloud Public Cloud
> - MongoDB engine is not supported  
>

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/pt/public-cloud/) in your OVHcloud account
- A database running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)
- Access to your [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](https://api.ovh.com/)

## Concept

The Cross Service Integrations for Logs and Metrics allow you for example:

- To send Caching or MySQL metrics or Cassandra metrics in M3db or PostgreSQL.
- To send PostgreSQL or MySQL metrics to OpenSearch.
- To show metrics in Grafana.

For that you need:

- A source service
- A destination service

![Best practices](images/databases_07_cross_service_integration-20220708091945946.png){.thumbnail}

> [!warning]
>
> Although it is possible to define the same cluster as destination service and source service, this is a bad practice for multiple reasons (performance, security, resiliency, ...)
>

![Bad practices](images/databases_07_cross_service_integration-20220719203753927.png)

### Integration matrix

- All services support logs to opensearch & kafka_logs to kafka.
- All services except m3db & m3agg support metrics to pg & metrics to m3db.

Other integrations:

| source →<br>↓ destination | grafana	| m3db	| kafka |
|:--|---|---|---|
| pg | dashboard, datasource | | |
| opensearch | datasource | | |
| m3db | dashboard, datasource | | |
| m3agg | | m3agg | |
| kmm | | | kafka_mirrormaker |
| kc | | | kafka_connect |

## Instructions

### Using the OVHcloud Control Panel

#### Store yours logs or metrics

Log in to your OVHcloud Control Panel and open your `Public Cloud`{.action} project. Click on `Databases`{.action} in the left-hand navigation bar, select your engine instance and open the `Service integration`{.action} tab.

Click on `Add an integration`{.action}:

![Service integration](images/databases_07_cross_service_integration-20220708155356795.png){.thumbnail}

Define the `Integration type`{.action} and the `Destination service`{.action}:

> [!warning]
>
> First create a Public Cloud Database for your *Destination* service via your Control Panel or API.
>

> [!primary]
>
> If you want to store the metrics of your *postgresql* cluster to *m3db*, select `m3dbMetrics` as `Integration type`{.action} and `m3db` as `Destination service`{.action}, as shown below.
>

![Create integration](images/databases_07_cross_service_integration-20220708155848940.png){.thumbnail}

Your first integration is ready:

![Result](images/databases_07_cross_service_integration-20220708160028574.png){.thumbnail}

> [!primary]
>
> Note that this integration creation may have created two users, respectively: `metrics_reader` and `metrics_writer` in your engine instance.
>
> ![Users & Roles](images/databases_07_cross_service_integration-20220708170641519.png){.thumbnail}
>
> Don't delete them.
>

#### Allow metrics visualization into Grafana

Go to the `Service integration`{.action} tab of your `Destination service` service and click on `Add an integration`{.action}

![Service integration](images/databases_07_cross_service_integration-20220708160203565.png){.thumbnail}

> [!primary]
>
> As you can see, the first integration is referenced.
>

Define `grafanaDashboard` as `Integration type`{.action} and the `Source service`{.action}:

![Create integration](images/databases_07_cross_service_integration-20220708160400509.png){.thumbnail}

Your second integration is ready:

![Result](images/databases_07_cross_service_integration-20220708160441618.png){.thumbnail}

Connect to your Grafana instance and browse the dashboards:

![Grafana browse Dashboards](images/databases_07_cross_service_integration-2022070814063719.png){.thumbnail}

Then open your new dashboard:

![PostgreSQL Dashboard](images/databases_07_cross_service_integration-20220708184410774.png){.thumbnail}

### Using API

> [!primary]
>
> If you are not familiar with using the OVHcloud API, please refer to our guide on [First Steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps).
>

#### Get your service and cluster IDs

You first need to identify your `serviceId` and your `clusterId`.

##### **Get the desired service ID**

Execute the following API call:

> [!api]
>
> @api {v1} /cloud GET /cloud/project
>

![serviceName](images/04_advanced_configuration-20220405143910846.png){.thumbnail}

From the resulting list, select and copy the service identifier corresponding to the desired service, also known as `serviceName`.

##### **Get the desired cluster ID**

Open the following API call, paste your service ID into the `serviceName` input field and click `Execute`{.action}:

> [!tabs]
> Cassandra
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/cassandra
>> >
> Grafana
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/grafana
>> >
> Kafka
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/kafka
>> >
> Kafka Connect
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/kafkaConnect
>> >
> Kafka MirrorMaker
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/kafkaMirrorMaker
>> >
> M3 Aggregator
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/m3aggregator
>> >
> M3db
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/m3db
>> >
> MySQL
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/mysql
>> >
> Opensearch
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/opensearch
>> >
> PostgreSQL
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/postgresql
>> >
> Caching
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/redis
>> >

![Cluster ID](images/04_advanced_configuration-20220405144109794.png){.thumbnail}

#### Get integration capabilities

Get integration capabilities related to your Public Cloud Databases service:

> [!tabs]
> Cassandra
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/capabilities/integration
>> >
> Grafana
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/grafana/{clusterId}/capabilities/integration
>> >
> Kafka
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/kafka/{clusterId}/capabilities/integration
>> >
> Kafka Connect
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/capabilities/integration
>> >
> Kafka MirrorMaker
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/capabilities/integration
>> >
> M3 Aggregator
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/capabilities/integration
>> >
> M3db
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/m3db/{clusterId}/capabilities/integration
>> >
> MySQL
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/mysql/{clusterId}/capabilities/integration
>> >
> OpenSearch
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/capabilities/integration
>> >
> PostgreSQL
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/capabilities/integration
>> >
> Caching
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/caching/{clusterId}/capabilities/integration
>> >

![Get Integration Capabilities](images/databases_07_cross_service_integration-20220708142931159.png){.thumbnail}

#### Store yours logs or metrics

As a first step, you need to push your metrics or logs somewhere, in order to store them and retrieve the metrics with Grafana.

For that, you need to create a new integration:

> [!tabs]
> Cassandra
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/cassandra/{clusterId}/integration
>> >
> Grafana
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/grafana/{clusterId}/integration
>> >
> Kafka
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/kafka/{clusterId}/integration
>> >
> Kafka Connect
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/integration
>> >
> Kafka MirrorMaker
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/integration
>> >
> M3 Aggregator
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/integration
>> >
> M3db
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/m3db/{clusterId}/integration
>> >
> MySQL
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/mysql/{clusterId}/integration
>> >
> OpenSearch
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/opensearch/{clusterId}/integration
>> >
> PostgreSQL
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/integration
>> >
> Caching
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/caching/{clusterId}/integration
>> >

Fill in the form with the information corresponding to the type of integration chosen.

![Create a new integration](images/databases_07_cross_service_integration-2022070814275082.png){.thumbnail}

The `destionationServiceId` and the `sourceServiceId` correspond to the destination cluster ID and to the source cluster ID.

#### Allow metrics visualization into Grafana

Now that metrics are stored somewhere, you need to connect your Public Cloud Databases service to a Grafana service.

For that, first create a Public Cloud Database for Grafana via our Control Panel or API.

Once done, get the `GrafanaDashboard` integration capability related to the destination service:

![Get Grafana Dashboard integration capabilitie](images/databases_07_cross_service_integration-20220708141900814.png){.thumbnail}

Then create a second integration from your *Destination* service name:

> [!tabs]
> Cassandra
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/cassandra/{clusterId}/integration
>> >
> Grafana
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/grafana/{clusterId}/integration
>> >
> Kafka
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/kafka/{clusterId}/integration
>> >
> Kafka Connect
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/integration
>> >
> Kafka MirrorMaker
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/integration
>> >
> M3 Aggregator
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/integration
>> >
> M3db
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/m3db/{clusterId}/integration
>> >
> MySQL
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/mysql/{clusterId}/integration
>> >
> OpenSearch
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/opensearch/{clusterId}/integration
>> >
> PostgreSQL
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/integration
>> >
> Caching
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/caching/{clusterId}/integration
>> >

![Create Grafana Integration](images/databases_07_cross_service_integration-20220708180105894.png){.thumbnail}

Connect to your Grafana instance and browse the dashboards:

![Grafana browse Dashboards](images/databases_07_cross_service_integration-2022070814063719.png){.thumbnail}

Then open your new dashboard:

![PostgreSQL Dashboard](images/databases_07_cross_service_integration-20220708184410774.png){.thumbnail}

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pt/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
