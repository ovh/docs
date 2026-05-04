---
title: ClickHouse - Configure incoming connections
excerpt: Find out how to configure your ClickHouse cluster to accept incoming connections via the OVHcloud Control Panel
updated: 2026-02-25
---

## Objective

ClickHouse is an open-source, columnar analytical database system designed for real-time processing of massive data volumes, providing high performance, scalability, and low latency.

**This guide explains how to configure your ClickHouse cluster to accept incoming connections via the OVHcloud Control Panel.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- A [ClickHouse cluster running](/pages/public_cloud/data_analytics/analytics/clickhouse_create_cluster) on OVHcloud Public Cloud.

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instructions

### Configuring the ClickHouse service

<!-- CP-STEPS-START:clickhouse_user_setup_intro -->
Once your ClickHouse service is up and running, you must define at least one user and one authorised IP (if not already provided during the order) to fully connect to the service (as producer or consumer).

The `Dashboard`{.action} tab automatically updates when your service is ready.
<!-- CP-STEPS-END:clickhouse_user_setup_intro -->

#### Setting up a user

<!-- CP-STEPS-START:clickhouse_user_setup -->
Switch to the `Users`{.action} tab. An admin user named `avnadmin` is preconfigured during the service installation.

You can add more users by clicking the `Add user`{.action} button.

Enter a username, then click `Create User`{.action}.

Passwords need to be reset from the `Users`{.action} table.
<!-- CP-STEPS-END:clickhouse_user_setup -->

#### Configuring authorised IPs

<!-- CP-STEPS-START:clickhouse_ip_authorisation -->
> [!warning]
> For security reasons, the default network configuration doesn't allow any incoming connections. You must therefore authorise the suitable IP addresses to access your ClickHouse cluster.

If you did not define the authorised IPs during the order, you can do it in the `Configuration`{.action} tab. At least one IP address must be authorised here before you can connect to your database.

Add the IP address of your computer by using the `Current IP`{.action} button.

You can remove IPs from the table afterward.

Your ClickHouse service is now fully accessible!
<!-- CP-STEPS-END:clickhouse_ip_authorisation -->

Optionally, you can configure access control lists (ACL) for granular permissions and create topics.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our Analytics service!

Join our [community of users](/links/community).