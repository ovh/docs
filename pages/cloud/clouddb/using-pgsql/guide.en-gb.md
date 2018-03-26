---
title: Getting started with PostgreSQL
slug: getting-started-with-postgresql
excerpt: Using Your Databases
section: Getting started
---

Do you want to use PostgreSQL? Learn how to easily manage your databases!


## Overview

### Prerequisites


> [!primary]
>
> To follow this tutorial you need:
> - A CloudDB instance
> - To have viewed the CloudDB guide: docs/cloud/clouddb/debuter-avec-clouddb
>

### What is a PostgreSQL database?
PostgreSQL is an object-relational database management system (ORDBMS). It's a reliable and extensible system, which can manipulate large volumes of data. It also has a very active community.


## Logging in to the database


> [!primary]
>
> Please note that this service does not give you access to the Host but to the databases hosted on the Host. Generic SQL commands work with no issues, and HeidiSQL or SQuirreL SQL software is fully compatible.
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
psql --host=server --port=port --user=user --password=password database_name
```


### Connect from a PHP script

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
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


### Connecting via phppgAdmin
*Soon available in another guide.*


## Export a PostgreSQL database

### Export your database via the command line

```bash
pg_dump --host=server --port=port --user=username --password=password database_name > database_name.sql
```


## Import a PostgreSQL database

### Import your database via the command line

```bash
psql --host=server --port=port --user=user --password=password database_name < database_name.sql
```