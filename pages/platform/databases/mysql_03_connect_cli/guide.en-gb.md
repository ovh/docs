---
title: MySQL - Connect with CLI
excerpt: Connect to your Public Cloud Databases for MySQL using the Command Line Interface (CLI)
slug: mysql/connect-cli
section: MySQL
order: 100
---

**Last updated 03nd November 2021**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MySQL database instance with a Command Line Interface (CLI).**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB);
- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account;
- An up and running Public Cloud Database for MySQL.

## Concept

A MySQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), also known as a Console or Terminal.
To interact correctly with the MySQL instance, we need to first install something called a MySQL client (or shell), in order to connect and control the MySQL service remotely.
It's a Client-Server interaction.

## Instructions

### Install MySQL Shell

> [!primary]
>
> Please note that a MySQL client is natively integrated in the MySQL software package. but he does not allow the use of service URI.
>

You first need to install a software to interact with your MySQL instance remotely. This official software can be installed on various supports like your own computer, a VPS, a virtual machine... the only rule is to be able to reach the public network (Internet) and have sufficient rights to install it.

In order to do so and depending on your configuration, you may need to follow official MySQL documentation to install MySQL Shell (*mysqlsh*), more powerful compared to MySQL Client (*mysql*).

MySQL Shell is not mandatory but much more convenient to use compared to standard MySQL Client, since you can connect with Service URI instead of individuals parameters.

Follow the steps here after selecting Windows, MacOS or Linux operation system : <https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html>


Once installed, you need to catch your IP address in order to authorize connection form this specific client.

If you don't know how to get your IP, please visit a website like [www.WhatismyIP.com](https://www.whatismyip.com/){.external}.
Copy the IP address numbers shown on this website and keep them for later.
In our example, we will use the (fake) IP 109.190.200.59.

We are now ready to learn how to connect to our MySQL instance.

### Configure your MySQL instance to accept incoming connections

Before making a connection, we need to verify that our MySQL instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your MySQL instance.

#### Step 1: Verify your user grants and password

Select the `Users`{.action} tab. By default a first user called **avnadmin** is created, with permissions to perform most of usual DB management tasks.

If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user + password pair.

This first user **avnadmin** comes with the following grants:

```
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER ON *.* TO "avnadmin"@"%" WITH GRANT OPTION

GRANT REPLICATION_APPLIER,ROLE_ADMIN ON *.* TO "avnadmin"@"%" WITH GRANT OPTION
```

We rely on official MySQL grants and privileges. You can manage them yourself via CLI or code.
So far, **user grants and privileges management is not supported via OVHcloud Control Panel neither OVHcloud API**.

Please read the [official MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html){.external} to select the right grants and privileges for your use-case.


In our example, we will simple reset **avnadmin** password.

Once created or updated, the user has to be ready and with the "Enabled" status in the control panel.

![User ready](images/user_enabled.png){.thumbnail}

#### Step 2: Authorize incoming connections from the MySQL client

In this step, select the `Authorised IP's`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
Like this we can help prevent intrusive connection attempts.

Click to authorize a new IP, and enter the previously found IP of your remote client. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_whitelist.png){.thumbnail}

> [!primary]
>
> If you want to allow any connection from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Get your connection information (Service URI)

Now all the setup should be done, from the remote client and the MySQL instance.

Select the `General Information`{.action} tab. In the **Login Informations** section, copy the Service URI.

It should be similar to this:

```
mysql://<username>:<password@<hostname>t<port>/defaultdb?ssl-mode=REQUIRED
```

A bit of information to know:

- It will pass the username and password arguments;
- Will connect to the hostname;
- to the "defaultdb" database directly;
- on the specified MySQL port (dynamic allocation);
- All of that securely, with TLS activated (SSL mode).

We will now follow official MySQL documentation to perform our first connection.

In your CLI, type **mysqlsh --version**. The result should look like this:

```
laptop$mysqlsh --version
/snap/mysql-shell/29/bin/mysqlsh   Ver 8.0.23 for Linux on x86_64 - for MySQL 8.0.23 (Source distribution)
```

It means that mysqlsh is correctly installed and working properly. If you do not see something like this result, please go back to the previous step and reinstall MySQL shell.


### Connect to your MySQL instance

We will follow official MySQL documentation: <https://dev.mysql.com/doc/refman/8.0/en/connecting-using-uri-or-key-value-pairs.html>.
To perform a connection, simply type **mysqlsh --sql** followed by the Service URI copied before:

```
laptop$mysqlsh --sql "mysql://<username>:<password@<hostname>t<port>/defaultdb?ssl-mode=REQUIRED"
```

Don't forget you need to modify the username, password, hostname and port.
In our example, it will look like this:

```
laptop$mysqlsh --sql "mysql://avnadmin:Mysup3rs3cur3p4ssw0rd@mysql-ab123456-cd7891011.database.cloud.ovh.net:20184/defaultdb?ssl-mode=REQUIRED"
```

Once connected correctly, you should see something similar to:

```
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
- *SHOW DATABASES;* will list all the databases;
- *select \* from mysql.user;* will display informations about existing users.


In our example, it will look like this :

```
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

```
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

[MySQL capabilities](https://docs.ovh.com/gb/en/publiccloud/databases/mysql/capabilities/)

[Getting started with Public Cloud Databases](https://docs.ovh.com/gb/en/publiccloud/databases/getting-started/)


## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
