---
title: Getting started with MySQL and MariaDB
slug: get-started-with-mysql-and-mariadb
excerpt: Using Your Databases
section: Getting started
order: 02
---

**Last updated 29th June 2022**

## Objective

Do you want to use MySQL or MariaDB for your databases?

### What is a MySQL database?

MySQL is a relational database management system developed for increased read performance, unlike other systems.

This is an open-source engine, whose parent company is Oracle.

### What is a MariaDB database?

MariaDB is a derivative (fork) of MySQL.

This engine is 100% compatible, and is "freer" than its sibling MySQL. All the bugs and roadmaps are freely accessible, unlike the Oracle version. In addition, the storage database InnoDB has been replaced by XtraDB and other optimisations, promising performance gains.

**Find out how to create and manage your MySQL or MariaDB databases**

## Requirements

- A [CloudDB instance](https://www.ovh.ie/cloud/cloud-databases/){.external} (included in a [performance web hosting plan](https://www.ovhcloud.com/en-ie/web-hosting/)).
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- You need to have read the [CloudDB startup guide](https://docs.ovh.com/ie/en/clouddb/getting-started-with-clouddb/).

## Instructions

### Logging in to the database

> [!primary]
>
> Please note that this service does not give you access to the Host but to the databases hosted on the Host. Generic SQL commands work with no issues, and HeidiSQL or SQuirreL SQL software is fully compatible.
> 

> [!primary]
>
> As MariaDB is a fork of MySQL, the different commands are the same for the 2 types of database.
> 

To log in to your database, make sure that you have:

- The address of your CloudDB instance
- The port of your CloudDB instance
- The username of your CloudDB instance
- The password associated with the user
- The database name

All this information is available in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

Please also read our guide on [Getting started with the CloudDB service](https://docs.ovh.com/ie/en/clouddb/getting-started-with-clouddb/).

#### Connect via the command line

```bash
mysql --host=server --user=user --port=port --password=password database_name
```

#### Connect from a PHP script

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

#### Connect from software (SQuirreL SQL)

- Launch SQuirreL SQL and click on `Aliases`{.action}, then on `+`{.action}.

![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Fill in the fields below and then confirm by clicking `OK`{.action} :
    - **Name**: Choose a name
    - **Driver**: Choose `PostgreSQL`
    - **URL**: Enter the server address and port in the following form `jdbc:postgresql://server:port/database`
    - **User Name**: Enter the username
    - **Password**: Enter the password

![config connection](images/2.PNG){.thumbnail}

- Confirm again by clicking the button `Connect`{.action}.

![valid connection](images/3.PNG){.thumbnail}

You will now be connected to your database:

![config connection](images/4.PNG){.thumbnail}

#### Connecting via phpMyAdmin

You can use phpMyAdmin to explore the contents of your database. To do this, install phpMyAdmin on your own server or web hosting plan. During this installation, make sure that the information on your CloudDB server and the database you want are correctly configured so that phpMyAdmin can connect to it.

### Export and import a MySQL or MariaDB database

- **Export your database via the command line**

```bash
mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql
```

- **Import your database via the command line**

```bash
cat database_name.sql | mysql --host=server --user=user --port=port --password=password database_name
```

> [!primary]
>
> In some cases, the RAM available in your CloudDB instance may not be sufficient to perform the desired export or import. If this is the case, we recommend using the OVHcloud tool in the OVHcloud Control Panel. See the [Getting started with CloudDB service](https://docs.ovh.com/ie/en/clouddb/getting-started-with-clouddb/) documentation if necessary.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
