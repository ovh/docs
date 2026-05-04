---
title: How to create a ClickHouse cluster
excerpt: Find out how to create and configure a ClickHouse cluster through the OVHcloud Control Panel for real-time data analytics
updated: 2026-02-25
---

## Objective

ClickHouse is an open-source, columnar analytical database system designed for real-time processing of massive data volumes, providing high performance, scalability, and low latency.

**This guide explains how to create a ClickHouse cluster via the OVHcloud Control Panel.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instructions

<!-- CP-STEPS-START:clickhouse_create_cluster_subscribe -->
### Subscribing to the service

Click on `Data Streaming`{.action} in the left-hand navigation bar under **Databases & Analytics**.

Click the `Create a service`{.action} button.

#### Selecting your Analytics service

Click on the type of Analytics service you want to use and its version.

A random name is generated for your service. You can change it at this step or later.

#### Selecting a datacentre

Choose the geographical region of the datacentre where your service will be hosted and the deployment mode (1-AZ vs 3-AZ).

#### Selecting a plan

> [!primary]
>
> Currently, only the **Production** plan is available. The **Discovery** plan will be coming soon.
>

In this step, choose an appropriate service plan. If needed, you can upgrade or downgrade the plan after creation.

Visit the [capabilities page](/products/public-cloud-data-analytics) of your selected Analytics service for detailed information on each plan's properties.

#### Selecting the instance

Choose the instance type for the nodes of your service. You can change it afterward. The number of nodes depends on the plan previously chosen.

#### Selecting the storage

Storage can be scaled up to 3 times the base storage.

#### Configuring your options

Choose the network options and whitelist the IP addresses that will access your service.

#### Reviewing and confirming

A summary of your order is displayed to help you review your service configuration.

The components of the price are also summarized with a monthly estimation.

Click the `API and Terraform equivalent`{.action} button to open the following window:

Use this information to automate service creation with the [OVHcloud API](/pages/manage_and_operate/api/first-steps) or the OVHcloud Terraform Provider.

When you are ready, click the `Order`{.action} button to create your service.

In a matter of minutes, your new ClickHouse service will be deployed.

Messages in the OVHcloud Control Panel will inform you when the ClickHouse cluster is ready to use.
<!-- CP-STEPS-END:clickhouse_create_cluster_subscribe -->

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our Analytics service!

Join our [community of users](/links/community).