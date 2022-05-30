---
title: MySQL - Configure your MySQL instance to accept incoming connections
excerpt: Find out how to configure your MySQL instance to accept incoming connections
slug: mysql/configure-mysql-instance
section: MySQL - Guides
order: 100
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/mysql/configure-mysql-instance/'
---

**Last updated 8th March 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to configure your MySQL instance to accept incoming connections.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/it/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- A MySQL database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/it/publiccloud/databases/getting-started/) can help you to meet this requirement)

## Instructions

### Configure your MySQL instance to accept incoming connections

Before making a connection, we need to verify that our MySQL instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) and open your `Public Cloud`{.action} project. Click on `Databases`{.action} in the left-hand navigation bar and select your MySQL instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user.

> [!warning]
> Be careful! By doing so you will need to update all the places where you already use this user/password pair.
>

This first user **avnadmin** is pre-configured during the service installation and comes with the following grants:

```sql
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER ON *.* TO "avnadmin"@"%" WITH GRANT OPTION

GRANT REPLICATION_APPLIER,ROLE_ADMIN ON *.* TO "avnadmin"@"%" WITH GRANT OPTION
```

![User table](images/mysql_07_prepare_for_incoming_connections-20220308112922280.png){.thumbnail}

You can add more users by clicking on the button `Add user`{.action}.

![Add user](images/mysql_07_prepare_for_incoming_connections-20220308111540905.png){.thumbnail}

Enter a username then click `Create User`{.action}.

> [!primary]
> You can delete a user or regenerate a password via the `...`{.action} button in the `Users & Roles` table.

#### Step 2: Authorise incoming connections from the MySQL client

> [!warning]
> For security reasons the default network configuration doesn't allow any incoming connections. It is thus critical you authorise the suitable IP addresses in order to successfully access your database.

In this step, select the `Authorised IPs`{.action} tab. IP addresses must be authorised here before they can connect to your database.

Clicking on `Add an IP address or IP address block (CIDR)`{.action} opens a new window in which you can add single IP addresses or blocks to allow access to the database.

![Add an IP](images/ip_authorize.png){.thumbnail}

You can edit and retract database access via the `...`{.action} button in the IP table.

> [!primary]
>
> If you want to allow connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

#### Collect required information

Select the `General information`{.action} tab to find the required login credentials in the `Login informations` section.

![Login information tab](images/mysql_04_connect_php-20220124153927876.png){.thumbnail}

Select the `Databases`{.action} tab to get the database name.

![Databases tab](images/mysql_04_connect_php-20220124154604558.png){.thumbnail}

Select the `Users`{.action} tab to get the username.

![User table](images/mysql_07_prepare_for_incoming_connections-20220308112922280.png){.thumbnail}

## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
