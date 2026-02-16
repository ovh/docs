---
title: ClickHouse - How to connect to a ClickHouse cluster with CLI
excerpt: Learn how to connect to a ClickHouse cluster using the CLI
updated: 2026-01-10
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

ClickHouse is an open-source, columnar analytical database system designed for real-time processing of massive data volumes, providing high performance, scalability, and low latency.

This guide explains how to connect to a ClickHouse cluster using the CLI.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- A [ClickHouse cluster running](/pages/public_cloud/data_analytics/analytics/clickhouse_create_cluster) on OVHcloud Public Cloud and [accepting incoming connections](/pages/public_cloud/data_analytics/analytics/clickhouse_incoming_connections).

## Instructions

### First CLI connection

> [!warning]
> Verify that the IP address visible from your browser application is part of the "Authorised IPs" defined for this ClickHouse service.
>
> Check also that the user has granted ACLs for the target topics.

#### Downloading server and user certificates

In order to connect to the ClickHouse service, it is required to use server and user certificates.

##### Server certificate

The server Certificate Authority (*CA*) certificate can be downloaded from the `Dashboard`{.action} tab.

##### User certificate and access key

The user certificate and the user access key can be downloaded from the `Users`{.action} tab.

#### Installing the ClickHouse CLI

As part of the official ClickHouse installation, you will have access to several tools, including the standard `clickhouse-client` CLI. You can refer to the official guide: [ClickHouse Client official](https://clickhouse.com/docs/interfaces/cli).

We recommend using the lightweight `clickhouse-client` CLI instead, which does not require a JVM and provides a simple way to execute queries and manage your ClickHouse cluster.

##### **ClickHouse configuration file**

You can create a configuration file to simplify connecting to your ClickHouse server:

The ClickHouse Client can be configured using an XML or YAML file. The client searches for configuration files in the following order:

1. A file specified with `-c` / `--config` / `--config-file`.
2. `./clickhouse-client.[xml|yaml|yml]`.
3. `$XDG_CONFIG_HOME/clickhouse/config.[xml|yaml|yml]` (or `~/.config/clickhouse/config.[xml|yaml|yml]` if XDG_CONFIG_HOME is not set).
4. `~/.clickhouse-client/config.[xml|yaml|yml]`.
5. `/etc/clickhouse-client/config.[xml|yaml|yml]`.

/// details | **Example XML configuration**

Create a file named `clickhouse-client.xml` with the following content:

```json
<config>
    <user>default</user>
    <password>your_password</password>
    <secure>true</secure>

    <openSSL>
        <client>
            <caConfig>/home/user/clickhouse/ca.pem</caConfig>
        </client>
    </openSSL>

    <connections_credentials>
        <connection>
            <name>default</name>
            <hostname>clickhouse-12345.cluster.database.cloud.ovh.net</hostname>
            <port>9440</port>
        </connection>
    </connections_credentials>
</config>
```

For more information, see the [sample official configuration file](https://github.com/ClickHouse/ClickHouse/blob/master/programs/client/clickhouse-client.xml).

///

/// details | **Example YAML configuration**

Create a file named `clickhouse-client.yml` with the following minimal content:

```yaml
user: default
password: 'your_password'
secure: true
openSSL:
  client:
    caConfig: '/home/user/clickhouse/ca.pem'
```

///

Change these values according to your own cluster configuration.

##### **Inserting data into ClickHouse**

For this first example, let's insert a test row into the `my_table` table in the `test_db` database.

```bash
clickhouse-client --query "INSERT INTO test_db.my_table (id, message) VALUES (1, 'test-message-content')"
```

##### **Querying data into ClickHouse**

Retrieve all the data from the `my_table` table in the `test_db` database:

```bash
clickhouse-client --query "SELECT * FROM test_db.my_table"
```

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our Analytics service!

Join our [community of users](/links/community).