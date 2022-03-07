---
title: MySQL - Connectez-vous avec MySQL Workbench (EN)
excerpt: Connect to your Public Cloud Databases for MySQL using MySQL Workbench
slug: mysql/connect-workbench
section: MySQL - Guides
order: 303
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/mysql/connect-workbench/'
---

**Last updated 4th February 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MySQL database instance with MySQL Workbench.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr);
- A [Public Cloud project](https://www.ovhcloud.com/fr/public-cloud/) in your OVHcloud account;
- An up and running Public Cloud Database for MySQL.
- A MySQL Workbench stable version installed and public network connectivity (Internet). This guide was made with MySQL Workbench version 8.0.28.

## Concept

A MySQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide: [Connect to MySQL with CLI](https://docs.ovh.com/fr/publiccloud/databases/mysql/connect-cli/) or by using programming languages, such as [PHP](https://docs.ovh.com/fr/publiccloud/databases/mysql/connect-php/) or [Python](https://docs.ovh.com/fr/publiccloud/databases/mysql/connect-python/).

Another way is to interact directly using a management tool like MySQL Workbench.

In order to do so, we will need to install MySQL Workbench, then configure our Public Cloud Databases for MySQL instances to accept incoming connections, and finally configure MySQL Workbench.

## Instructions

### Installation

MySQL Workbench can be downloaded for free at the following link: <https://dev.mysql.com/downloads/workbench/>.

Once you have downloaded and installed it, follow the steps below to set up a remote connection to your MySQL instance.

### Configure your MySQL instance to accept incoming connections

Before making a connection, we need to verify that our MySQL instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) and open your `Public Cloud`{.action} project. Click on `Databases`{.action} in the left-hand navigation bar and select your MySQL instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user/password pair.

This first user **avnadmin** comes with the following grants:

```sql
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER ON *.* TO "avnadmin"@"%" WITH GRANT OPTION

GRANT REPLICATION_APPLIER,ROLE_ADMIN ON *.* TO "avnadmin"@"%" WITH GRANT OPTION
```

![User ready](images/user_enabled.png){.thumbnail}

#### Step 2: Authorise incoming connections from the MySQL client

In this step, select the `Authorised IPs`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
This way we can help prevent intrusive connection attempts.

Click to authorize a new IP, and enter the IP of your MySQL Workbench environment. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_authorize.png){.thumbnail}

> [!primary]
>
> If you want to allow connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Connect with MySQL Workbench

#### Collect required information

Select the `General information`{.action} tab to find the required login credentials.

![Login information tab](images/mysql_04_connect_php-20220124153927876.png){.thumbnail}

Select the `Databases`{.action} tab to get the database name.

![Databases tab](images/mysql_04_connect_php-20220124154604558.png){.thumbnail}


#### Configuration

Click `New Connection`{.action}.

![](images/mysql_06_connect_workbench-20220210111228867.png)

In the **Setup New Connection** dialog box, fill in the `Parameters`{.action} tab form with the previously collected information.

![](images/mysql_06_connect_workbench-2022021011165750.png)

Store the password for connection in keychain.

![](images/mysql_06_connect_workbench-2022021011180843.png)

Switch to `SSL`{.action} tab and set `Use SSL` to `Require`.

![](images/mysql_06_connect_workbench-20220210111545457.png)

Once done, select your new connection.

![](images/mysql_06_connect_workbench-20220210113913361.png)

Congratulations, in the `Schemas`{.action} tab, you will see your databases.

![](images/mysql_06_connect_workbench-20220210114125831.png)

> [!primary]
>
> Once connected, MySQL Workbench facilitates many actions such as querying your databases and managing used or even import data. Please read the official documentation to discover the whole feature list: <https://www.mysql.com/products/workbench/features.html>.
>

## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
