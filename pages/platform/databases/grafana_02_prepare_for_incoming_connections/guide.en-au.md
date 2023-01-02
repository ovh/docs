---
title: Grafana - Configure your Grafana instance to accept incoming connections
excerpt: Find out how to configure your Grafana instance to accept incoming connections
slug: grafana/configure-grafana-instance
section: Grafana - Guides
order: 020
---

**Last updated 12th May 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to configure your Grafana instance to accept incoming connections.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)
- A Grafana database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/au/en/publiccloud/databases/getting-started/) can help you to meet this requirement)

## Instructions

### Configure your Grafana instance to accept incoming connections

Before making a connection, we need to verify that our Grafana instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) and open your `Public Cloud`{.action} project. Click on `Databases`{.action} in the left-hand navigation bar and select your Grafana instance.

#### Step 1: Verify your user roles and password

Select the `General information`{.action} tab and `Reset the password`{.action} of **avnadmin** user, which comes with the **Admin** role, in the `Login information` section.

> [!primary]
>
> Other users can be created in Grafana from the `Users` tab of the `Server Admin`{.action} panel.
>

#### Step 2: Authorise incoming connections from the Grafana client

> [!warning]
> For security reasons the default network configuration doesn't allow any incoming connections. It is thus critical you authorise the suitable IP addresses in order to successfully access your database.

In this step, select the `Authorised IPs`{.action} tab. IP addresses must be authorised here before they can connect to your database.

Clicking on `Add an IP address or IP address block (CIDR)`{.action} opens a new window in which you can add single IP addresses or blocks to allow access to the database.

![Add an IP](images/ip_authorize.png){.thumbnail}

You can edit and retract database access via the `...`{.action} button in the IP table.

> [!primary]
>
> If you want to allow connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Connect to your Grafana Instance

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) and open your `Public Cloud`{.action} project. Click on `Databases`{.action} in the left-hand navigation bar and select your Grafana instance, to collect the URI in the `Login informations` section of the `General information`{.action} tab.

![Login information tab](images/grafana_02_prepare_for_incoming_connections-20220530065929522.png){.thumbnail}

Then connect to Grafana:

![Welcome to Grafana](images/grafana_02_prepare_for_incoming_connections-20220530071539383.png)

Congratulations! You are now connected to your Grafana instance.

![Grafana first connection](images/grafana_02_prepare_for_incoming_connections-20220530071725524.png)

Learn more about Grafana in the following tutorial: [Grafana fundamentals](https://grafana.com/tutorials/grafana-fundamentals/?utm_source=grafana_gettingstarted)

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
