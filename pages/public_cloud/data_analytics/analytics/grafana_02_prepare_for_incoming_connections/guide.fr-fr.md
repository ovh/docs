---
title: Dashboards - Configurez votre instance Dashboards pour accepter les connexions entrantes (EN)
excerpt: Find out how to configure your Dashboards instance to accept incoming connections
updated: 2024-12-11
---

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to configure your Dashboards instance to accept incoming connections.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)
- A Dashboards service running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)

## Instructions

### Configure your Dashboards instance to accept incoming connections

Before making a connection, we need to verify that our Dashboards instance is correctly configured.

Log in to your [OVHcloud Control Panel](/links/manager) and open your `Public Cloud`{.action} project. Click on `Data Anlaysis`{.action} in the left-hand navigation bar and select your Dashboards instance.

#### Step 1: Verify your user roles and password

Select the `General information`{.action} tab and `Reset the password`{.action} of **avnadmin** user, which comes with the **Admin** role, in the `Login information` section.

> [!primary]
>
> Other users can be created in your Dashboards instance web UI, from the `Users` tab of the `Server Admin`{.action} panel.
>

#### Step 2: Authorise incoming connections to your Dashboards instance

> [!warning]
> For security reasons the default network configuration doesn't allow any incoming connections. It is thus critical you authorise the suitable IP addresses in order to successfully access your service.

In this step, select the `Authorised IPs`{.action} tab. IP addresses must be authorised here before they can connect to your serbice.

Clicking on `Add an IP address or IP address block (CIDR)`{.action} opens a new window in which you can add single IP addresses or blocks to allow access to the service.

![Add an IP](images/ip_authorize.png){.thumbnail}

You can edit and retract database access via the `...`{.action} button in the IP table.

> [!primary]
>
> If you want to allow connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Connect to your Dashboards Instance

Log in to your [OVHcloud Control Panel](/links/manager) and open your `Public Cloud`{.action} project. Click on `Data Analysis`{.action} in the left-hand navigation bar and select your Dashboards instance, to collect the URI in the `Login informations` section of the `General information`{.action} tab.

![Login information tab](images/grafana_02_prepare_for_incoming_connections-20220530065929522.png){.thumbnail}

Then connect to your Dashboards instance:

![Welcome to Grafana](images/grafana_02_prepare_for_incoming_connections-20220530071539383.png)

Congratulations! You are now connected to your Dashboards instance.

![Grafana first connection](images/grafana_02_prepare_for_incoming_connections-20220530071725524.png)

Learn more about Grafana® in the following tutorial: [Grafana fundamentals](https://grafana.com/tutorials/grafana-fundamentals/?utm_source=grafana_gettingstarted)

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
