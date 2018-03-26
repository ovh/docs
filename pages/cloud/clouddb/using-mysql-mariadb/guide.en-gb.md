---
title: Getting started with MySQL and MariaDB
slug: get-started-with-mysql-and-mariadb
excerpt: Using Your Databases
section: Getting started
---

Do you want to use MySQL or MariaDB ? Learn how to create and manage your databases with ease!


## Overview

### Prerequisites


> [!primary]
>
> To follow this tutorial you need:
> - A CloudDB instance
> - To have viewed the CloudDB guide: docs/cloud/clouddb/debuter-avec-clouddb
>

### What is a MySQL database?
MySQL is relational database management system developed for increased read performance, unlike other systems

This is an open-source engine, whose parent company is Oracle.


### What is a MariaDB database?
MariaDB is a derivative (fork) of MySQL.

This engine is 100% compatible, and is "freer" than its sibling MySQL. All the bugs and roadmaps are freely accessible, unlike the Oracle version. In addition, the storage database InnoDB has been replaced by XtraDB and other optimisations, promising performance gains.


## Logging in to the database


> [!primary]
>
> Please note that this service does not give you access to the Host but to the databases hosted on the Host. Generic SQL commands work with no issues, and HeidiSQL or SQuirreL SQL software is fully compatible.
> 



> [!primary]
>
> As MariaDB is a fork of MySQL, the different commands are the same for the 2 types of database.
> 

To log in to your database, make sure that you have:

- The address of your database instance
- Your database port
- Your database username
- Your database password
- Your database name

All this information is available in the [Web Control Panel](https://www.ovh.com/manager/web/){.external}.

There is also a guide here: [](debuter-avec-clouddbguide.en-gb.md){.ref}


### Connect via the command line

```bash
mysql --host=server --user=user --port=port --password=password database_name
```


### Connect from a PHP script

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Connect from software (SQuirreL SQL)
- Launch SQuirreL SQL and click on `Aliases`{.action}, then on `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Fill in the fields below and then confirm by clicking `OK`{.action} :
    - **Name**: Choose a name
    - **Driver**: Choose "PostgreSQL"
    - **URL**: Enter the server address and port in the following form jdbc:postgresql://server:port/database
    - **User Name**: Enter the username
    - **Password**: Enter the password


![config connection](images/2.PNG){.thumbnail}

- Confirm again by clicking the button `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

You will now be connected to your database:


![config connection](images/4.PNG){.thumbnail}


### Connecting via phpMyAdmin
*Soon available in another guide.*


## Export a MySQL or MariaDB database

### Export your database via the command line

```bash
mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql
```


## Import a MySQL or MariaDB database

### Import your database via the command line

```bash
cat database_name.sql | mysql --host=server --user=user --port=port --password=password database_name
```