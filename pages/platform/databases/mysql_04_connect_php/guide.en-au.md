---
title: MySQL - Connect with PHP
excerpt: Connect to your Public Cloud Databases for MySQL using the PHP programming language
slug: mysql/connect-php
section: MySQL - Guides
order: 040
---

**Last updated 8th March 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MySQL database instance with one of the world's most famous programming language: PHP.**

You can find an example on the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/mysql/php/hello-world).

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)
- A [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account
- A MySQL database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/au/en/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your MySQL instance](https://docs.ovh.com/au/en/publiccloud/databases/mysql/configure-mysql-instance/) to accept incoming connections
- A PHP environment with a stable version and public network connectivity (Internet). *This guide was made in PHP 8.0.8*.

## Concept

A MySQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Connect to MySQL with CLI](https://docs.ovh.com/au/en/publiccloud/databases/mysql/connect-cli/).

Another way is to interact directly using programming languages, such as PHP.
PHP is used in almost 80% of the websites in the world, such as Facebook, Wikipedia or WordPress.
MySQL provides PHP drivers, allowing us to connect and manage a MySQL instance from code.

In order to do so, we will need to set up our PHP environment with MySQL drivers and finally code in PHP to perform a few example actions.

## Instructions

### Setup your PHP environment

To interact with your MySQL instance with PHP, your development environment needs to be configured with :

- A compatible version of PHP;
- MySQLi PHP extension;

Please follow the official [MySQL Drivers and Plugin](https://www.php.net/manual/en/set.mysqlinfo.php){.external} to get the latest information.

If you can edit your PHP environment on your own, install extensions and libraries as detailed in the documentation page linked above.

On the contrary, if you benefit from a managed web hosting solution, such as **OVHcloud Web Hosting offers**, you need to activate the right PHP version on your web hosting plan. You can find [a guide about modifying your PHP version for OVHcloud Web Hosting here](https://docs.ovh.com/au/en/hosting/how_to_configure_php_on_your_ovh_web_hosting_package_2014/).

We are now ready to learn how to connect to our MySQL instance.

### Connect with PHP

#### Using mysqli

```php
<?php
$host = "mysql-11xxxx20-o2xxxx53.database.cloud.ovh.net";
$user = "avnadmin";
$password = "K93xxxxxxxxxxxxxaBp";
$dbname = "defaultdb";
$port = "20184";

try {
  $db = mysqli_init();
  $link = mysqli_real_connect($db, $host, $user, $password, $dbname, $port, NULL, MYSQLI_CLIENT_SSL);
  $res = $db->query("SHOW GLOBAL STATUS LIKE 'Ssl_cipher';");
  $rows = $res->fetch_all();
  var_dump($rows[0]);
  $db->close();
}
catch (Throwable $e) {
  echo "Captured Throwable for connection : " . $e->getMessage() . PHP_EOL;
}
?>
```

If you are connected, result should be like this:

```php
array(2) {
  [0]=>
  string(10) "Ssl_cipher"
  [1]=>
  string(22) "TLS_AES_256_GCM_SHA384"
}
```

#### Using PDO

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your MySQL instance.  
Select the `General Information`{.action} tab. In the **Login Informations** section, download the CA certificate.

```php
<?php
$host = "mysql-11xxxx20-o2xxxx53.database.cloud.ovh.net";
$user = "avnadmin";
$password = "K93xxxxxxxxxxxxxaBp";
$dbname = "defaultdb";
$port = "20184";
$options = array(
  PDO::MYSQL_ATTR_SSL_CA => '/<path to>/ca.pem',
  PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => true
);

try {
  $conn = new PDO("mysql:host=$host; port=$port; dbname=$dbname", $user, $password, $options);
  var_dump($conn->query("SHOW STATUS LIKE 'Ssl_cipher';")->fetchAll());
  $conn = null;
}
catch (Throwable $e) {
  echo "Captured Throwable for connection : " . $e->getMessage() . PHP_EOL;
}
?>
```

If you are connected, result should be like this:

```php
array(1) {
  [0]=>
  array(4) {
    ["Variable_name"]=>
    string(10) "Ssl_cipher"
    [0]=>
    string(10) "Ssl_cipher"
    ["Value"]=>
    string(22) "TLS_AES_256_GCM_SHA384"
    [1]=>
    string(22) "TLS_AES_256_GCM_SHA384"
  }
}
```

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
