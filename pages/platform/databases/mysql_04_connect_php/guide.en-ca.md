---
title: MySQL - Connect with PHP
excerpt: Connect to your Public Cloud Databases for MySQL using the PHP programming language
slug: mysql/connect-php
section: MySQL - Guides
order: 301
---

**Last updated 14th January 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MySQL database instance with one of the world's most famous programming language: PHP.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca);
- A [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account;
- An up and running Public Cloud Database for MySQL;
- A PHP environment with a stable version and public network connectivity (Internet). This guide was made in PHP 8.0.8.

## Concept

A MySQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Connect to MySQL with CLI](https://docs.ovh.com/ca/en/publiccloud/databases/mysql/connect-cli/).

Another way is to interact directly using programming languages, such as PHP.
PHP is used in almost 80% of the websites in the world, such as Facebook, Wikipedia or Wordpress.
MySQL provides PHP drivers, allowing us to connect and manage a MySQL instance from code.

In order to do so, we will need to set up our PHP environment with MySQL drivers, then configure our Public Cloud Databases for MySQL instances to accept incoming connections, and finally code in PHP to perform a few example actions.

## Instructions

### Setup your PHP environment

To interact with your MySQL instance with PHP, your development environment needs to be configured with :

- A compatible version of PHP;
- MySQLi PHP extension;

Please follow the official [MySQL Drivers and Plugin](https://www.php.net/manual/en/set.mysqlinfo.php){.external} to get the latest information.

If you can edit your PHP environment on your own, install extensions and libraries as detailed in this documentation page linked above.

On the contrary, if you benefit from a managed web hosting solution, such as **OVHcloud Web Hosting offers**, you need to activate the right PHP version on your web hosting plan. You can find [a guide about modifying your PHP version for OVHcloud Web Hosting here](https://docs.ovh.com/ca/en/hosting/how_to_configure_php_on_your_ovh_web_hosting_package_2014/).

Finally, copy the IP address of your PHP environment or Web Hosting plan, and keep it for later.
In our example, we will use the (fake) IP 109.190.200.59.

We are now ready to learn how to connect to our MySQL instance.

### Configure your MySQL instance to accept incoming connections

Before making a connection, we need to verify that our MySQL instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your MySQL instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user + password pair.

This first user **avnadmin** comes with the following grants:

```sql
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER ON *.* TO "avnadmin"@"%" WITH GRANT OPTION

GRANT REPLICATION_APPLIER,ROLE_ADMIN ON *.* TO "avnadmin"@"%" WITH GRANT OPTION
```

We rely on official MySQL grants and privileges. You can manage them yourself via CLI or code.
So far, **user grants and privileges management is not supported via OVHcloud Control Panel neither OVHcloud API**.

Please read the [official MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html){.external} to select the right grants and privileges for your use-case.


In our example, we will simply reset the **avnadmin** password.

Once created or updated, the user has to be ready and have the status "Enabled" in the Control Panel.

![User ready](images/user_enabled.png){.thumbnail}


#### Step 2: Authorize incoming connections from the MySQL client

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

Select the `General information`{.action} tab to find the required login information

![Login information tab](images/mysql_04_connect_php-20220124153927876.png)

Select the `Databases`{.action} tab to get the database name

![Databases tab](images/mysql_04_connect_php-20220124154604558.png)

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

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your MySQL instance.  
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

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
