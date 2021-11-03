---
title: PostgreSQL - Connect with CLI
excerpt: Connect to your Public Cloud Databases for PostgreSQL using the Command Line Interface (CLI)
slug: postgresql/connect-cli
section: PostgreSQL
order: 100
---

**Last updated 02nd November 2021**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a PostgreSQL database instance with a Command Line Interface (CLI).**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we);
- A [Public Cloud project](https://www.ovhcloud.com/en/public-cloud/) in your OVHcloud account;
- An up and running Public Cloud Database for PostgreSQL.

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


Once installed, you need to catch your IP address in order to authorise connections from this specific client.

If you don't know how to get your IP, please visit a website like [www.WhatismyIP.com](https://www.whatismyip.com/){.external}.
Copy the IP address numbers shown on this website and keep them for later.
In our example, we will use the (fake) IP 109.190.200.59.

We are now ready to learn how to connect to our PostgreSQL instance.

### Configure your PostgreSQL instance to accept incoming connections

Before making a connection, we need to verify that our PostgreSQL instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your PostgreSQL instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. By default a first user called **avnadmin** is created, with permissions to perform most of the usual DB management tasks. **SUPERUSER** is not allowed.

If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update each access configuration in which you already use this user/password pair.

This first user **avnadmin** comes with the following privileges:

```console
  LOGIN
  NOSUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  REPLICATION
```

We rely on official PostgreSQL roles and privileges. You can manage them yourself via CLI or code.
So far, **user roles and privileges management is not supported via OVHcloud Control Panel neither OVHcloud API**.

Please read the [official PostgreSQL documentation](https://www.postgresql.org/docs/current/database-roles.html){.external} to select the right roles for your use-case.


In our example, we will simply reset the **avnadmin** password.

Once created or updated, the user has to be ready and have the status "Enabled" in the Control Panel.

![User ready](images/user_enabled.png){.thumbnail}

#### Step 2: Authorise incoming connections from the PostgreSQL client

In this step, select the `Authorised IP's`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
This can help to prevent intrusive connection attempts.

Click to authorise a new IP, and enter the previously found IP of your remote client. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_whitelist.png){.thumbnail}

> [!primary]
>
> If you want to allow any connection from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Get your connection information (URI)

Now all the setup should be done, from the remote client and the PostgreSQL instance.

Select the `General Information`{.action} tab. In the **Login information** section, copy the Service URI.

It should be similar to this:

```console
postgres://<username>:<password>@<hostname>:<port>/defaultdb?sslmode=require
```

A bit of information to know:

- It will pass the username and password arguments;
- Will connect to the hostname;
- to the "defaultdb" database directly;
- on the specified PostgreSQL port (dynamic allocation);
- All of that securely, with TLS activated (SSL mode).

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

[PostgreSQL capabilities](https://docs.ovh.com/us/en/publiccloud/databases/postgresql/capabilities/)

[Getting started with Public Cloud Databases](https://docs.ovh.com/us/en/publiccloud/databases/getting-started/)


## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
