---
title: PostgreSQL - Connect with PHP
excerpt: Connect to your Public Cloud Databases for PostgreSQL using the PHP programming language
slug: postgresql/connect-php
section: PostgreSQL - Guides
order: 301
---

**Last updated 25th January 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a PostgreSQL database instance with one of the world's most famous programming language: PHP.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au);
- A [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account;
- An up and running Public Cloud Database for PostgreSQL;
- A PHP environment with a stable version and public network connectivity (Internet). This guide was made in PHP 8.0.8.

## Concept

A PostgreSQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Connect to PostgreSQL with CLI](https://docs.ovh.com/au/en/publiccloud/databases/postgresql/connect-cli/).

Another way is to interact directly using programming languages, such as PHP.
PHP is used in almost 80% of the websites in the world, such as Facebook, Wikipedia or Wordpress.
PostgreSQL provides PHP drivers, allowing us to connect and manage a PostgreSQL instance from code.

In order to do so, we will need to set up our PHP environment with PostgreSQL drivers, then configure our Public Cloud Databases for PostgreSQL instances to accept incoming connections, and finally code in PHP to perform a few example actions.

## Instructions

### Setup your PHP environment

To interact with your PostgreSQL instance with PHP, your development environment needs to be configured with :

- A compatible version of PHP;
- PostgresSQL and PDO PHP extension;

Please follow the official [PostgreSQL](https://www.php.net/manual/en/book.pgsql.php){.external} to get the latest information.

If you can edit your PHP environment on your own, install extensions and libraries as detailed in the documentation page linked above.

On the contrary, if you benefit from a managed web hosting solution, such as **OVHcloud Web Hosting offers**, you need to activate the right PHP version on your web hosting plan. You can find [a guide about modifying your PHP version for OVHcloud Web Hosting here](https://docs.ovh.com/au/en/hosting/how_to_configure_php_on_your_ovh_web_hosting_package_2014/).

Finally, copy the IP address of your PHP environment or Web Hosting plan, and keep it for later.
In our example, we will use the (fake) IP 109.190.200.59.

We are now ready to learn how to connect to our PostgreSQL instance.

### Configure your PostgreSQL instance to accept incoming connections

Before making a connection, we need to verify that our PostgreSQL instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your PostgreSQL instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user + password pair.

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

Please read the [official PostgreSQL documentation](https://www.postgresql.org/docs/current/database-roles.html){.external} to select the right roles for your use-case.

In our example, we will simply reset the **avnadmin** password.

Once created or updated, the user has to be ready and have the status "Enabled" in the Control Panel.

![User ready](images/user_enabled.png){.thumbnail}

#### Step 2: Authorize incoming connections from the PostgreSQL client

In this step, select the `Authorised IP's`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
This way we can help prevent intrusive connection attempts.

Click to authorize a new IP, and enter the previously found IP of your PHP environment or Web Hosting plan. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_authorize.png){.thumbnail}

> [!primary]
>
> If you want to allow connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Connect with PHP

#### Collect required informations

Select the `General information`{.action} tab to find the required login information.

![Login information tab](images/mysql_04_connect_php-20220124153927876.png){.thumbnail}

Select the `Databases`{.action} tab to get the database name.

![Databases tab](images/mysql_04_connect_php-20220124154604558.png){.thumbnail}

#### Using pg_connect

```php
<?php
$host = "postgresql-11xxxx20-o2xxxx53.database.cloud.ovh.net";
$user = "avnadmin";
$password = "K93xxxxxxxxxxxxxaBp";
$dbname = "defaultdb";
$port = "20184";

$dbconn = pg_connect("host=$host dbname=$dbname user=$user password=$password port=$port sslmode=require")
    or die('Could not connect: ' . pg_last_error());

$stat = pg_connection_status($dbconn);
if($stat === PGSQL_CONNECTION_OK){
  echo 'Connection OK';
} else {
  echo 'An error occurred';
}
?>
```
If you are connected, result should be like this:

```php
Connection OK
```

#### Using PDO

```php
<?php
$host = "postgresql-11xxxx20-o2xxxx53.database.cloud.ovh.net";
$user = "avnadmin";
$password = "K93xxxxxxxxxxxxxaBp";
$dbname = "defaultdb";
$port = "20184";

$conn = new PDO("pgsql:host=$host; port=$port; dbname=$dbname; sslmode=require; user=$user; password=$password");
var_dump($conn->query("select datname from pg_database;")->fetchAll());
?>
```

If you are connected, result should be like this:

```php
array(4) {
  [0]=>
  array(2) {
    ["datname"]=>
    string(6) "_aiven"
    [0]=>
    string(6) "_aiven"
  }
  [1]=>
  array(2) {
    ["datname"]=>
    string(9) "template1"
    [0]=>
    string(9) "template1"
  }
  [2]=>
  array(2) {
    ["datname"]=>
    string(9) "template0"
    [0]=>
    string(9) "template0"
  }
  [3]=>
  array(2) {
    ["datname"]=>
    string(9) "defaultdb"
    [0]=>
    string(9) "defaultdb"
  }
}
```

## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
