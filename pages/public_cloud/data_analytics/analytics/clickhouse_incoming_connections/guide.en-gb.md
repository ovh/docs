---
title: ClickHouse - How to configure your ClickHouse cluster to accept incoming connections
excerpt: Learn how to configure your ClickHouse cluster to accept incoming connections
updated: 2026-01-10
---

## Objective

ClickHouse is an open-source, columnar analytical database system designed for real-time processing of massive data volumes, providing high performance, scalability, and low latency.

This guide explains how to configure your ClickHouse cluster to accept incoming connections via the OVHcloud Control Panel.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- A [ClickHouse cluster running](/pages/public_cloud/data_analytics/analytics/clickhouse_create_cluster) on OVHcloud Public Cloud

## Instructions

### Configure the ClickHouse  service

Once your ClickHouse service is up and running, you will have to define at least one user and one authorised IP (if not already provided during the order) in order to fully connect to the service (as producer or consumer).

The `Dashboard`{.action} tab automatically updates when your service is ready.

![ClickHouse General information](images/clickhouse_cluster_ready_to_configure.png){.thumbnail}

#### Set up a user

Switch to the `Users`{.action} tab. An admin user name `avnadmin` is preconfigured during the service installation. 

![Users](images/clickhouse_users.png){.thumbnail}

You can add more users by clicking the `Add user`{.action} button.

![Add a user](images/clickhouse_add_user.png){.thumbnail}

Enter a username, then click `Create User`{.action}.

Passwords need to be reset from the `Users`{.action} table.

![Password reset](images/clickhouse_user_password_reset1.png){.thumbnail}

#### Configure authorised IPs

> [!warning]
> For security reasons the default network configuration doesn't allow any incoming connections. It is thus critical to authorize the suitable IP addresses in order to successfully access your ClickHouse cluster.

If you did not define the authorised IPs during the order you can do it in the `Configuration`{.action} tab. At least one IP address must be authorised here before you can connect to your database.

![Authorised IP](images/clickhouse_authorized_ip.png){.thumbnail}

Add the IP address of your computer by using the `Current IP`{.action} button.
You will be able to remove IPs from the table afterward.

![Add IP](images/clickhouse_add_ip.png){.thumbnail}

Your ClickHouse service is now fully accessible!
Optionally, you can configure access control lists (ACL) for granular permissions and create topics, as shown below.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our Analytics service!

Join our [community of users](/links/community).