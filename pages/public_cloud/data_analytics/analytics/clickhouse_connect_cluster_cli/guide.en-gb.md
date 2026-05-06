---
title: ClickHouse - How to connect to a ClickHouse cluster
excerpt: Learn how to connect to a ClickHouse cluster using the native CLI, HTTPS, and MySQL protocols, including certificate setup and basic queries
updated: 2026-03-26
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

**This guide explains how to connect to a ClickHouse cluster using the native CLI, HTTPS, and MySQL protocols.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- A [ClickHouse cluster running](/pages/public_cloud/data_analytics/analytics/clickhouse_create_cluster) on OVHcloud Public Cloud and [accepting incoming connections](/pages/public_cloud/data_analytics/analytics/clickhouse_incoming_connections).

<!-- CP-NAV-START:publiccloud-projects -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Navigation path:** `Public Cloud`{.action} > Select your project

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instructions

> [!warning]
> Verify that your public IP address is part of the "Authorised IPs" defined for this ClickHouse service.
>
> Check also that the user has the required ACLs for the target databases.

### Downloading server and user certificates

To connect to the ClickHouse service, you need server and user certificates.

- **Server certificate**: The server Certificate Authority (*CA*) certificate can be downloaded from the `Dashboard`{.action} tab.
- **User certificate and access key**: The user certificate and the user access key can be downloaded from the `Users`{.action} tab.

### Connection methods

You can connect to a ClickHouse cluster using different protocols and ports:

| Protocol | Port | Tool |
|---|---|---|
| ClickHouse Native | 20184 | `clickhouse-client` |
| ClickHouse HTTPS | 20185 | `curl` or any HTTP client |
| ClickHouse MySQL | 20186 | `mysql` |

> [!primary]
> The hostname, ports and credentials for your cluster are available in the `Dashboard`{.action} tab of the OVHcloud Control Panel.

### Connecting using the ClickHouse native protocol (port 20184)

Connect using the official `clickhouse-client` CLI. For installation details, see the [official ClickHouse Client documentation](https://clickhouse.com/docs/interfaces/cli).

```bash
clickhouse-client --user avnadmin \
                  --password <password> \
                  --host clickhouse-01234567-89abcdef.database.cloud.ovh.net \
                  --port 20184 \
                  --secure
```

Replace `<password>` with your actual password and the hostname with the one from your cluster dashboard.

#### ClickHouse Client configuration file

You can configure the ClickHouse Client using an XML or YAML file to simplify connection. The client searches for configuration files in the following order:

1. A file specified with `-c` / `--config` / `--config-file`.
2. `./clickhouse-client.[xml|yaml|yml]`.
3. `$XDG_CONFIG_HOME/clickhouse/config.[xml|yaml|yml]` (or `~/.config/clickhouse/config.[xml|yaml|yml]` if XDG_CONFIG_HOME is not set).
4. `~/.clickhouse-client/config.[xml|yaml|yml]`.
5. `/etc/clickhouse-client/config.[xml|yaml|yml]`.

/// details | **Example XML configuration**

Create a file named `clickhouse-client.xml` with the following content:

```xml
<config>
    <user>avnadmin</user>
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
            <hostname>clickhouse-01234567-89abcdef.database.cloud.ovh.net</hostname>
            <port>20184</port>
        </connection>
    </connections_credentials>
</config>
```

For more information, see the [sample official configuration file](https://github.com/ClickHouse/ClickHouse/blob/master/programs/client/clickhouse-client.xml).

///

/// details | **Example YAML configuration**

Create a file named `clickhouse-client.yml` with the following minimal content:

```yaml
user: avnadmin
password: 'your_password'
secure: true
openSSL:
  client:
    caConfig: '/home/user/clickhouse/ca.pem'
```

///

Change these values according to your own cluster configuration.

#### Inserting data into ClickHouse using the ClickHouse native CLI

For this first example, let's insert a test row into the `my_table` table in the `test_db` database.

```bash
clickhouse-client --query "INSERT INTO test_db.my_table (id, message) VALUES (1, 'test-message-content')"
```

#### Querying data from ClickHouse using the ClickHouse native CLI

Retrieve all the data from the `my_table` table in the `test_db` database:

```bash
clickhouse-client --query "SELECT * FROM test_db.my_table"
```

### Connecting using HTTPS (port 20185)

Connect using `curl` or any HTTP client over HTTPS:

```bash
curl https://clickhouse-01234567-89abcdef.database.cloud.ovh.net:20185 \
  --user avnadmin:<password> \
  -d "SELECT 1"
```

Replace `<password>` with your actual password and the hostname with the one from your cluster dashboard.

### Connecting using the MySQL protocol (port 20186)

Connect using the standard `mysql` client over the MySQL-compatible interface:

```bash
mysql --host=clickhouse-01234567-89abcdef.database.cloud.ovh.net \
      --port=20186 \
      --user=avnadmin \
      --password=<password> \
      --ssl-mode=REQUIRED
```

Replace `<password>` with your actual password and the hostname with the one from your cluster dashboard.

## Go further

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our Analytics service!

Join our [community of users](/links/community).
