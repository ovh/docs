---
title: PostgreSQL - Create and use connection pools
excerpt: Create and use connection pools in your Public Cloud Databases for PostgreSQL
slug: postgresql/pools
section: PostgreSQL - Guides
order: 090
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/postgresql/pools/'
---

**Last Updated 8<sup>th</sup> April 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to create and use connection pools.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
- A [Public Cloud project](https://www.ovhcloud.com/it/public-cloud/) in your OVHcloud account.
- A PostgreSQL database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/it/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your PostgreSQL instance](https://docs.ovh.com/it/publiccloud/databases/postgresql/configure-postgresql-instance/) to accept incoming connections

## Concept

Connection pooling allows you to maintain very large numbers of connections to a database while minimizing the consumption of server resources.

### Why connection pooling?

Eventually a high number of backend connections becomes a problem with PostgreSQL as the resource cost per connection is quite high due to the way PostgreSQL manages client connections. PostgreSQL creates a separate backend process for each connection and the unnecessary memory usage caused by the processes will start hurting the total throughput of the system at some point. Also, if each connection is very active, the performance can be affected by the high number of parallel executing tasks.

It makes sense to have enough connections so that each CPU core on the server has something to do (each connection can only utilize a single CPU core), but a hundred connections per CPU core may be too much. All this is workload specific, but often a good number of connections to have is in the ballpark of 3-5 times the CPU core count.

### Connection pooling modes

- **Session pooling:** A server connection is assigned to the client application for the life of the client connection. PgBouncer releases the server connection back into the pool once the client application disconnects.

- **Transaction pooling:** A server connection is assigned to the client application for the duration of a transaction. When PgBouncer detects the completion of the transaction, it releases the server connection back into the pool.

> [!warning]
>
> Several PostgreSQL features, described in the [official PgBouncer features page](https://www.pgbouncer.org/features), are known to be broken by the default transaction-based pooling and must not be used by the application when in this mode.
> You must carefully consider the design of the client applications connecting to PgBouncer, otherwise the application may not work as expected.
>

- **Statement pooling:** A server connection is assigned to the client application for each statement. When the statement completes, the server connection is returned into the pool. Multi-statement transactions are not permitted for this mode.

## Instructions

### Create a connection pool

To create a new connection pool, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) and open your `Public Cloud`{.action} project.

Click on `Databases`{.action} in the left-hand navigation bar and select your PostgreSQL instance, then select the `Pools`{.action} tab.
Click on `Add a pool`{.action}, and fill the form.

The settings available are:

- **Pool name**: Enter a name for your connection pool here.This will also become the "database" or "dbname" connection parameter for your pooled client connections.
- **Database**: Choose the database that you want to connect to. Each pool can only connect to a single database.
- **Pool Mode**: Select the pooling mode.
- **Pool Size**: Select how many PostgreSQL server connections this pool can use at a time.
- **Username**: Select the database username that you want to use when connecting to the backend database.

![Add a pool](images/postgresql_08_pool-20220411131919759.png){.thumbnail}

> [!primary]
>
> You can edit, delete and access information about the pool by clicking on `...`{.action} to the right of the pool.
>

### Connect to a connection pool

To establish a connection, get information about the pool:

![Pools](images/postgresql_08_pool-20220411134051260.png){.thumbnail}

Click on `Information`{.action}, then collect the required information.

![Pool informations](images/postgresql_08_pool-2022041113491326.png){.thumbnail}

### Checking

We can use the psql command-line client to verify that the pooling works as supposed:

From terminal 1:

```bash
$ psql "postgres://avnadmin:xxxxxxxxxxxxxxxxxxxxx@postgresql-b412100d-o2626ab53.database.cloud.ovh.net:20185/pgpool?sslmode=require"
```

From terminal 2:

```bash
$ psql "postgres://avnadmin:xxxxxxxxxxxxxxxxxxxxx@postgresql-b412100d-o2626ab53.database.cloud.ovh.net:20185/pgpool?sslmode=require"
```

We have two open client connections to the pool. Let's verify that each connection is able to access the database:

Terminal 1:

```sql
pgpool=> SELECT 1;
?column?
-------
        1
(1 row)
```

Terminal 2:

```sql
pgpool=> SELECT 1;
?column?
-------
        1
(1 row)
```

Both connections respond as they should. Now let's check how many connections there are to the PostgreSQL backend database:

Terminal 1:

```sql
pgpool=> SELECT COUNT(*) FROM pg_stat_activity WHERE usename = 'avnadmin';
 count
-------
     1
(1 row)
```

pgstatactivity outputs the two psql sessions, which uses the same PostgreSQL server database connection.

## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
