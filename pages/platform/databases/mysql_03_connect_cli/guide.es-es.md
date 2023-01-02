---
title: MySQL - Connect with CLI
excerpt: Connect to your Public Cloud Databases for MySQL using the Command Line Interface (CLI)
slug: mysql/connect-cli
section: MySQL - Guides
order: 030
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/mysql/connect-cli/'
---

**Last updated 8th March 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MySQL database instance with a Command Line Interface (CLI).**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
- A [Public Cloud project](https://www.ovhcloud.com/es-es/public-cloud/) in your OVHcloud account
- A MySQL database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/es/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your MySQL instance](https://docs.ovh.com/es/publiccloud/databases/mysql/configure-mysql-instance/) to accept incoming connections

## Concept

To interact correctly with the MySQL instance, we need to first install something called a MySQL client, in order to connect and control the MySQL service remotely.
It's a Client-Server interaction.

## Instructions

### Installing the MySQL client

> [!primary]
>
> Please note that a MySQL client is natively integrated in the MySQL software package but it does not allow the use of Service URI.
>

You first need to install a software to interact with your MySQL instance remotely. This official software can be installed on various client machines such as your own computer, a VPS or a virtual machine. The only rule is to be able to reach the public network (Internet) and have sufficient rights to install it.

In order to do so and depending on your configuration, you may need to follow official MySQL documentation to install MySQL Shell (*mysqlsh*), more powerful compared to MySQL Client (*mysql*).

MySQL Shell is not mandatory but much more convenient to use compared to standard MySQL Clients, since you can connect with Service URI instead of individual parameters.

Follow the steps here after selecting Windows, MacOS or Linux as operating system: <https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html>

We are now ready to learn how to connect to our MySQL instance.

### Configuration

We will now follow official MySQL documentation to perform our first connection.

In your CLI, type `mysqlsh --version`. The result should look like this:

```console
laptop$mysqlsh --version
/snap/mysql-shell/29/bin/mysqlsh   Ver 8.0.23 for Linux on x86_64 - for MySQL 8.0.23 (Source distribution)
```

It means that mysqlsh is correctly installed and working properly. If you do not see something like this result, please go back to the previous step and reinstall MySQL shell.


### Connect to your MySQL instance

We will follow official MySQL documentation: <https://dev.mysql.com/doc/refman/8.0/en/connecting-using-uri-or-key-value-pairs.html>.

To perform a connection, simply type `mysqlsh --sql` followed by the Service URI:

```console
laptop$mysqlsh --sql "mysql://<username>:<password@<hostname>t<port>/defaultdb?ssl-mode=REQUIRED"
```

Don't forget you need to modify the username, password, hostname and port.
In our example, it will look like this:

```console
laptop$mysqlsh --sql "mysql://avnadmin:Mysup3rs3cur3p4ssw0rd@mysql-ab123456-cd7891011.database.cloud.ovh.net:20184/defaultdb?ssl-mode=REQUIRED"
```

Once connected correctly, you should see something similar to:

```console
MySQL Shell 8.0.23

Copyright (c) 2016, 2021, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its affiliates.
Other names may be trademarks of their respective owners.

Type '\help' or '\?' for help; '\quit' to exit.
WARNING: Using a password on the command line interface can be insecure.
Creating a Classic session to '.(removed)..:20184/defaultdb?ssl-mode=REQUIRED'
Fetching schema names for autocompletion... Press ^C to stop.
Fetching table and column names from `defaultdb` for auto-completion... Press ^C to stop.
Your MySQL connection id is 50811
Server version: 8.0.26 Source distribution
Default schema set to `defaultdb`.
mysql-sql [defaultdb]>
```

Congratulations! You are now fully able to interact with your MySQL instance!

### MySQL client usage

Once connected, you can manage your MySQL instance with built-in MySQL client methods.

Please follow the official MySQL documentation.

To verify:

- `SHOW DATABASES;` will list all the databases;  
- `select * from mysql.user;` will display information about existing users.  

In our example, it will look like this:

```sql
mysql-sql [defaultdb]> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| defaultdb          |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.0046 sec)
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

URL: https://www.mysql.org/docs/13/sql-createdatabase.html
```

## Go further

[MySQL capabilities](https://docs.ovh.com/es/publiccloud/databases/mysql/capabilities/)

[Getting started with Public Cloud Databases](https://docs.ovh.com/es/publiccloud/databases/getting-started/)

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/mysql) to find how to connect to your database with several languages.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
