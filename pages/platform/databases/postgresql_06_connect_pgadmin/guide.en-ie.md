---
title: PostgreSQL - Connect with pgAdmin
excerpt: Connect to your Public Cloud Databases for PostgreSQL using pgAdmin
slug: postgresql/connect-pgadmin
section: PostgreSQL - Guides
order: 303
---

**Last updated 4th February 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a PostgreSQL database instance with one of the world's most famous Open Source management tool for PostgreSQL: pgAdmin.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie);
- A [Public Cloud project](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account;
- An up and running Public Cloud Database for PostgreSQL.
- A pgAdmin stable version installed and public network connectivity (Internet). This guide was made in pgAdmin 4 version 6.4.

## Concept

A PostgreSQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide: [Connect to PostgreSQL with CLI](https://docs.ovh.com/ie/en/publiccloud/databases/postgresql/connect-cli/) or by using programming languages, such as [PHP](https://docs.ovh.com/ie/en/publiccloud/databases/postgresql/connect-php/) or [Python](https://docs.ovh.com/ie/en/publiccloud/databases/postgresql/connect-python/).

Another way is to interact directly using a management tool for PostgreSQL: pgAdmin.

In order to do so, we will need to install pgAdmin, then configure our Public Cloud Databases for PostgreSQL instances to accept incoming connections, and finally configure pgAdmin 4.

## Instructions

### Installation

To interact with your PostgreSQL instance with pgAdmin 4 you need to install it.

Please follow the official [pgAdmin](https://www.pgadmin.org/download/){.external} to get the latest information.

We are now ready to learn how to connect to our PostgreSQL instance.

### Configure your PostgreSQL instance to accept incoming connections

Before making a connection, we need to verify that our PostgreSQL instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and open your `Public Cloud`{.action} project. Click on `Databases`{.action} in the left-hand navigation bar and select your PostgreSQL instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user/password pair.

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
So far, **user grants and privileges management are not supported via the OVHcloud Control Panel or the OVHcloud API**.

Please read the [official PostgreSQL documentation](https://www.postgresql.org/docs/current/database-roles.html){.external} to select the right roles for your use case.

In our example, we will simply reset the **avnadmin** password.

Once created or updated, the user has to be ready and have the status "Enabled" in the Control Panel.

![User ready](images/user_enabled.png){.thumbnail}

#### Step 2: Authorise incoming connections from the PostgreSQL client

In this step, select the `Authorised IP's`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
This way we can help prevent intrusive connection attempts.

Click to authorise a new IP, and enter the IP of your pgAdmin environment. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_authorize.png){.thumbnail}

> [!primary]
>
> If you want to allow connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Connect with pgAdmin 4

#### Collect required information

Select the `General information`{.action} tab to find the required login information.

![Login information tab](images/mysql_04_connect_php-20220124153927876.png){.thumbnail}

Select the `Databases`{.action} tab to get the database name.

![Databases tab](images/mysql_04_connect_php-20220124154604558.png){.thumbnail}


#### Configuration

Once logged in pgAdmin, from the Servers dashboard view select `Add new server`{.action}.

![pgAdmin Dashboard view](images/postgresql_06_connect_pgadmin-2022020413471615.png)

In the **Create - Server** dialog of the `General`{.action} tab, fill in the Name field.

![Create - Server General tab](images/postgresql_06_connect_pgadmin-20220204140701739.png)

Then select the `Connection`{.action} tab and fill in the following fields with the collected credentials:

- Host
- Port
- Maintenance database
- Username
- Password

![Create - Server Connection tab](images/postgresql_06_connect_pgadmin-20220204140939712.png)

Finally, select the `SSL`{.action} tab and set the **SSL Mode** to **Require**.

![Create - Server SSL tab](images/postgresql_06_connect_pgadmin-20220204141355524.png)

> [!primary]
>
> If needed you can adjust the connection timeout in the `Advanced`{.action} tab.
>

Once saved, select your server in the servers list on the left. In the Dashboard view, you can observe that the connection is active:

![Connection Dashboard view](images/postgresql_06_connect_pgadmin-20220204142252902.png)

> [!primary]
>
> pgAdmin has [useful functions](https://pgadmin.org/features){.external} such as:
>
> - [Backup & Restore](https://www.pgadmin.org/docs/pgadmin4/6.4/backup_and_restore.html){.external} a single table, a schema, or a complete database
> - [Manage Roles](https://www.pgadmin.org/docs/pgadmin4/6.4/role_dialog.html){.external}
>

## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
