---
title: PostgreSQL - Connect with PHP
excerpt: Connect to your Public Cloud Databases for PostgreSQL using the PHP programming language
updated: 2022-04-04
---

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a PostgreSQL database instance with one of the world's most famous programming language: PHP.**

You can find an example on the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/postgresql/php/hello-world).

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager);
- A [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account;
- A PostgreSQL database running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)
- [Configure your PostgreSQL instance](/pages/public_cloud/public_cloud_databases/postgresql_07_prepare_for_incoming_connections) to accept incoming connections
- A PHP environment with a stable version and public network connectivity (Internet). This guide was made in PHP 8.0.8.

## Concept

A PostgreSQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide: [Connect to PostgreSQL with CLI](/pages/public_cloud/public_cloud_databases/postgresql_03_connect_cli).

Another way is to interact directly using programming languages, such as PHP.
PHP is used in almost 80% of the websites in the world, such as Facebook, Wikipedia or WordPress.
PostgreSQL provides PHP drivers, allowing us to connect and manage a PostgreSQL instance from code.

In order to do so, we will need to set up our PHP environment with PostgreSQL drivers, then configure our Public Cloud Databases for PostgreSQL instances to accept incoming connections, and finally code in PHP to perform a few example actions.

## Instructions

### Setup your PHP environment

To interact with your PostgreSQL instance with PHP, your development environment needs to be configured with:

- A compatible version of PHP;
- PostgresSQL and PDO PHP extension;

Please follow the official [PostgreSQL](https://www.php.net/manual/en/book.pgsql.php){.external} to get the latest information.

If you can edit your PHP environment on your own, install extensions and libraries as detailed in the documentation page linked above.

On the contrary, if you benefit from a managed web hosting solution, such as **OVHcloud Web Hosting offers**, you need to activate the right PHP version on your web hosting plan. You can find [a guide about modifying your PHP version for OVHcloud Web Hosting here](/pages/web_cloud/web_hosting/configure_your_web_hosting).

We are now ready to learn how to connect to our PostgreSQL instance.

### Connect with PHP

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

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
