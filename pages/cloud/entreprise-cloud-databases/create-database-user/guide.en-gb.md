---
title: 'Creating databases and users within your cluster'
slug: "create-db-user"
excerpt: 'Find out how to create databases and users within your cluster'
section: 'Getting started with a PostgreSQL cluster'
---

**Last updated 03rd January 2020**

## Objective

This guide explains how to create your first databases and users in an Enterprise Cloud Databases cluster for PostgreSQL.
For comprehensive documentation on PostgreSQL, please refer to their [official documentation page](https://www.postgresql.org/docs/){.external}.


## Requirements
- an Enterprise Cloud Databases cluster for PostgreSQL
- a password set for the admin user account
- at least one security rule configured


## Reminder

You hold the PostgreSQL **postgres** administrator account, which can perform all operation types on the database.

> [!primary]
> Please ensure that you do not change the technical configurations set up by OVHcloud, because doing so may result in degraded performance for your cluster, or even stop it working altogether.
>


## Instructions

### Step 1: Install a PostgreSQL client.

On a Unix/Linux operating system, install the postgresql-client packet to connect via the command line. Please refer to the official documentation for your operating system.

On Microsoft Windows, you can choose from a range of command line solutions and graphical user interfaces (GUIs).  They are listed in [this PostgreSQL wiki documentation page](https://wiki.postgresql.org/wiki/PostgreSQL_Clients){.external}. Choose the one that works best for you.

The next steps detail a procedure for connecting via command lines.


### Step 2: Connect to your cluster.

You can find useful information in the OVHcloud Control Panel by going to the `Home`{.action} page, then `Connection information`{.action}.

Enterprise Cloud Databases offers read-only and read-write connection settings.
To create databases and users, you need to use read-write connection settings.

Below are some examples of connection information via the command line:

    read-write
        psql -U postgres -h 123456d99ee4102980c2d.prm.clouddb.ovh.net -p 38697 -W --set=sslmode=require

    read-only
        psql -U postgres -h 1234566d99ee4102980c2d.prm.clouddb.ovh.net -p 6713 -W --set=sslmode=require


Copy the connection information into your command line interface.
You will be asked to enter a password. Enter the `postgres` admin password.


### Step 3: Create users.

Once you have connected to your cluster, you can perform a range of operations.
[The PostgreSQL official documentation](https://www.postgresql.org/docs/manuals/){.external} lists and details these specific cases by version.

PostgreSQL relies on a user and role system. A role can contain multiple users, and its capacities can be defined precisely — for example, access to a specific database, read or read-write access, access for a limited period, the ability to create tables, users, etc.


In version 12, here is a basic example of using the command line to create the user `martin` with the password `password`.


    postgres=# CREATE ROLE martin NOINHERIT LOGIN PASSWORD 'password';


### Step 4: Create databases.

Here is a basic example of creating a database named `mydatabase`. The user `martin` will be the database owner.

    postgres=# CREATE DATABASE mydatabase OWNER username;


Your user `martin` can then connect as follows:

    psql -U martin -h fqdn -p port -W --set=sslmode=require mydatabase


## Go further

Learn how to manage your PostgreSQL cluster by reading [OVHcloud’s technical guides](../enterprise-cloud-databases/){.external} for further information on the technical aspects of how your managed solution works.
