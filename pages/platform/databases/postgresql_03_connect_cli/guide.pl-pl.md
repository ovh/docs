---
title: PostgreSQL - Connect with CLI
excerpt: Connect to your Public Cloud Databases for PostgreSQL using the Command Line Interface (CLI)
slug: postgresql/connect-cli
section: PostgreSQL - Guides
order: 040
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/postgresql/connect-cli/'
---

**Last updated 4<sup>th</sup> April, 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a PostgreSQL database instance with a Command Line Interface (CLI).**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/pl/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- A PostgreSQL database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/pl/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your PostgreSQL instance](https://docs.ovh.com/pl/publiccloud/databases/postgresql/configure-postgresql-instance/) to accept incoming connections

## Concept

A PostgreSQL instance can be managed through multiple ways.
One of the easiest, yet powerful ways, is to use a Command Line Interface (CLI), also known as a Console or Terminal.

To interact correctly with the PostgreSQL instance, we need to first install something called a PostgreSQL client, in order to connect and control the PostgreSQL service remotely.
It's a Client-Server interaction.

## Instructions

### Installing the PostgreSQL client

> [!primary]
>
> Please note that PostgreSQL-Client is natively integrated in the PostgreSQL software package.
>

You first need to install a software to interact with your PostgreSQL instance remotely. This official software can be installed on various client machines such as your own computer, a VPS or a virtual machine. The only rule is to be able to reach the public network (Internet) and have sufficient rights to install it.

In order to do so and depending on your configuration, you may need to follow official PostgreSQL documentation to install PostgreSQL client (referred to as psql).

Follow the steps here after selecting Windows, MacOS or Linux as operating system: <https://www.postgresql.org/download/>

As explained, the **postgresql-client** is often included by default.

Example with Linux/Debian:

![Debian postgresql-client](images/debian_postgresql.png){.thumbnail}

We will now follow official PostgreSQL documentation to perform our first connection.

In your CLI, type **psql --version**. The result should look like this:

```console
laptop$ psql --version
psql (PostgreSQL) 13.4 (Ubuntu 13.4-1))
```

It means that psql is correctly installed and working properly. If you do not see something like this result, please go back to the previous step and reinstall PostgreSQL client.


### Connect to your PostgreSQL instance

We will follow official PostgreSQL documentation: <https://www.postgresql.org/docs/devel/app-psql.html>.

To perform a connection, simply type **psql** followed by the Service URI copied before:

```console
laptop$psql "postgres://<username>:<password>@<hostname>:<port>/defaultdb?sslmode=require"
```

Don't forget you need to modify the username, password, hostname and port.
In our example, it will look like this:

```console
laptop$psql "postgre://avnadmin:Mysup3rs3cur3p4ssw0rd@postgresql-ab123456-cd7891011.database.cloud.ovh.net:20184/defaultdb?sslmode=require"
```

Once connected correctly, you should see something similar to:

```console
psql (13.4 (Ubuntu 13.4-1))
SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)
Type "help" for help.

defaultdb=>
```

Congratulations! You are now fully able to interact with your PostgreSQL instance!

### PostgreSQL client usage

Once connected, you can manage your PostgreSQL instance with built-in PostgreSQL client methods.

Please follow the official PostgreSQL documentation.

To verify:
- `\h CREATE DATABASE` will display help on a specific command (here for *CREATE DATABASE*);
- `\l+` will list all the databases;
- `select * from pg_user;` will display information about existing users.


In our example, it will look like this:

```sql
defaultdb=> \l+
                                                                List of databases
   Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   |  Size   | Tablespace |            Description
-----------+----------+----------+-------------+-------------+-----------------------+---------+------------+------------------------------------
 _aiven    | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 |                       | 8269 kB | pg_default |
 defaultdb | avnadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 |                       | 12 MB   | pg_default |
 template0 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +| 8253 kB | pg_default | unmodifiable empty database
           |          |          |             |             | postgres=CTc/postgres |         |            |
 template1 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +| 8229 kB | pg_default | default template for new databases
           |          |          |             |             | postgres=CTc/postgres |         |            |
(4 rows)
```

```sql
defaultdb=> select * from pg_user;
  usename  | usesysid | usecreatedb | usesuper | userepl | usebypassrls |  passwd  | valuntil | useconfig
-----------+----------+-------------+----------+---------+--------------+----------+----------+-----------
 postgres  |       10 | t           | t        | t       | t            | ******** |          |
 _aiven    |    16399 | f           | t        | t       | f            | ******** |          |
 avnadmin  |    16400 | t           | f        | t       | t            | ******** |          |
(3 rows)
```

```sql
defaultdb=> \h CREATE DATABASE
Command:     CREATE DATABASE
Description: create a new database
Syntax:
CREATE DATABASE name
    [ [ WITH ] [ OWNER [=] user_name ]
           [ TEMPLATE [=] template ]
           [ ENCODING [=] encoding ]
           [ LOCALE [=] locale ]
           [ LC_COLLATE [=] lc_collate ]
           [ LC_CTYPE [=] lc_ctype ]
           [ TABLESPACE [=] tablespace_name ]
           [ ALLOW_CONNECTIONS [=] allowconn ]
           [ CONNECTION LIMIT [=] connlimit ]
           [ IS_TEMPLATE [=] istemplate ] ]

URL: https://www.postgresql.org/docs/13/sql-createdatabase.html
```

## Go further

[PostgreSQL capabilities](https://docs.ovh.com/pl/publiccloud/databases/postgresql/capabilities/)

[Getting started with Public Cloud Databases](https://docs.ovh.com/pl/publiccloud/databases/getting-started/)

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/postgresql) to find how to connect to your database with several languages.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
