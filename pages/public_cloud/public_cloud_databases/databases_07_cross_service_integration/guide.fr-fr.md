---
title: Public Cloud Databases - Comment mettre en place une intégration interservices (EN)
excerpt: Find out how to use Cross Service Integration for Public Cloud Databases engines
updated: 2025-04-15
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

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- A database running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)
- Access to your [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](/links/api)

## Concept

The Cross Service Integrations for Logs and Metrics allow you for example:

- To send Valkey or MySQL metrics in PostgreSQL.
- To send PostgreSQL or MySQL metrics to OpenSearch.
- To show metrics in Dashboards service.

For that you need:

- A source service
- A destination service

![Best practices](images/databases_07_cross_service_integration_best_practice.png){.thumbnail}

> [!warning]
>
> Although it is possible to define the same cluster as destination service and source service, this is a bad practice for multiple reasons (performance, security, resiliency, ...)
>

![Bad practices](images/databases_07_cross_service_integration_bad_practice.png)

### Integration matrix

- All services support logs to opensearch & kafka_logs to kafka.
- All services support metrics to pg.

Other integrations:

| source →<br>↓ destination | dashboards service	| kafka |
|:--|---|---|
| pg | dashboard, datasource | |
| opensearch | datasource | |
| kmm | | kafka_mirrormaker |
| kc | | kafka_connect |

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

![Create integration](images/databases_07_cross_service_integration_creation.png){.thumbnail}

Your first integration is ready:

![Result](images/databases_07_cross_service_integration_list_example.png){.thumbnail}

> [!primary]
>
> Note that this integration creation may have created two users, respectively: `metrics_reader` and `metrics_writer` in your engine instance.
>
> ![Users & Roles](images/databases_07_cross_service_integration-20220708170641519.png){.thumbnail}
>
> Don't delete them.
>

#### Allow metrics visualization into Dashboards service

Go to the `Service integration`{.action} tab of your `Destination service` service and click on `Add an integration`{.action}

![Service integration](images/databases_07_cross_service_integration_list_add.png){.thumbnail}

> [!primary]
>
> As you can see, the first integration is referenced.
>

Define `grafanaDashboard` as `Integration type`{.action} and the `Source service`{.action}:

![Create integration](images/databases_07_cross_service_integration_creation_grafana.png){.thumbnail}

Your second integration is ready:

![Result](images/databases_07_cross_service_integration_list_example_2.png){.thumbnail}

Connect to your Dashboards instance and browse the dashboards:

![Browse Dashboards](images/databases_07_cross_service_integration-2022070814063719.png){.thumbnail}

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
> Dashboards
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
> Valkey
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/redis
>> >

![Cluster ID](images/04_advanced_configuration-20220405144109794.png){.thumbnail}

#### Get integration capabilities

Get integration capabilities related to your Public Cloud Databases service:

> [!tabs]
> Dashboards
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
> Valkey
>> > [!api]
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/database/caching/{clusterId}/capabilities/integration
>> >

![Get Integration Capabilities](images/databases_07_cross_service_integration_api_capa_integration.png){.thumbnail}

#### Store yours logs or metrics

As a first step, you need to push your metrics or logs somewhere, in order to store them and retrieve the metrics with Dashboards.

For that, you need to create a new integration:

> [!tabs]
> Dashboards
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
> Valkey
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/caching/{clusterId}/integration
>> >

Fill in the form with the information corresponding to the type of integration chosen.

![Create a new integration](images/databases_07_cross_service_integration_api_post_integration.png){.thumbnail}

The `destionationServiceId` and the `sourceServiceId` correspond to the destination cluster ID and to the source cluster ID.

#### Allow metrics visualization into Dashboards service

Now that metrics are stored somewhere, you need to connect your Public Cloud Databases service to a Dashboards service.

For that, first create a Public Cloud Database for Dashboards via our Control Panel or API.

Once done, get the `GrafanaDashboard` integration capability related to the destination service:

![Get Dashboards integration capabilitie](images/databases_07_cross_service_integration_api_capa_integration.png){.thumbnail}

Then create a second integration from your *Destination* service name:

> [!tabs]
> Dashboards
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
> Valkey
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/database/caching/{clusterId}/integration
>> >

![Create Dashboards Integration](images/databases_07_cross_service_integration-20220708180105894.png){.thumbnail}

Connect to your Dashboards instance and browse the dashboards:

![Browse Dashboards](images/databases_07_cross_service_integration-2022070814063719.png){.thumbnail}

Then open your new dashboard:

![PostgreSQL Dashboard](images/databases_07_cross_service_integration-20220708184410774.png){.thumbnail}

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
