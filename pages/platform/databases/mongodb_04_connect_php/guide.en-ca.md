---
title: MongoDB - Connect with PHP
excerpt: Connect to your Public Cloud Databases for MongoDB using the PHP programming language
slug: mongodb/connect-php
section: MongoDB - Guides
order: 040
---

**Last updated 27<sup>th</sup> July 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MongoDB database instance with one of the world's most famous programming language: PHP.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- A MongoDB database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/ca/en/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your MongoDB instance](https://docs.ovh.com/ca/en/publiccloud/databases/mongodb/managing-service/) to accept incoming connections
- A PHP environment with a stable version and public network connectivity (Internet). This guide was made in PHP 7.4.

## Concept

A MongoDB instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Connect to MongoDB with CLI](https://docs.ovh.com/ca/en/publiccloud/databases/mongodb/connect-cli).

Another way is to interact directly using programming languages, such as PHP.
PHP is used in almost 80% of the websites in the world, such as Facebook, Wikipedia or WordPress.
MongoDB provides PHP drivers, allowing us to connect and manage a MongoDB instance from code.

In order to do so, we will need to set up our PHP environment with MongoDB drivers, then configure our Public Cloud Databases for MongoDB instances to accept incoming connections, and finally code in PHP to perform a few example actions.

## Instructions

### Setup your PHP environment

To interact with your MongoDB instance with PHP, your development environment needs to be configured with :

- A compatible version of PHP;
- MongoDB PHP extension;
- Strongly recommended : the MongoDB PHP Library.

Please follow the official [MongoDB documentation for PHP drivers](https://docs.mongodb.com/drivers/php/){.external} to get the latest information.

At the end of the documentation page, you will find a **compatibility matrix** between PHP versions, MongoDB extensions and library versions.
Follow this accordingly.

If you can edit your PHP environment on your own, install extensions and libraries as detailed in this documentation page linked above.

On the contrary, if you benefit from a managed web hosting solution, such as **OVHcloud Web Hosting offers**, you need to activate the right PHP version on your web hosting plan. You can find [a guide about modifying your PHP version for OVHcloud Web Hosting here](https://docs.ovh.com/ca/en/hosting/how_to_configure_php_on_your_ovh_web_hosting_package_2014/).

In both cases, when executing a **phpinfo()** in your PHP environment, you should see information about the MongoDB driver as shown below :

![PHP Drivers](images/php_mongodb_driver.png){.thumbnail}

We will now follow the official MongoDB documentation to perform our first connection with PHP.

### Connect with PHP

In your PHP environment, let's try a connection. To be sure that we are indeed connected, we will dump all the MongoDB instance information.

As shown in the code, we use the **MongoDB\Driver\Manager**. Use the official PHP documentation for exhaustive documentation : <https://www.php.net/manual/en/set.mongodb.php>.

```php
<?php
   // PHP version 7.4 used here
    try {
        // connect to OVHcloud Public Cloud Databases for MongoDB (cluster in version 4.4, MongoDB PHP Extension in 1.8.1)
        $m = new MongoDB\Driver\Manager('mongodb+srv://<username>:<password>@mongodb-e49d02ee-o2626ab53.database.cloud.ovh.net/admin?replicaSet=replicaset');
        echo "Connection to database successfully";
        // display the content of the driver, for diagnosis purpose
        var_dump($m);
    }
    catch (Throwable $e) {
        // catch throwables when the connection is not a success
        echo "Captured Throwable for connection : " . $e->getMessage() . PHP_EOL;
    }
?>
```

If you are connected, result of the **var_dump($m)** should be like this :

```
Object(MongoDB\Driver\Manager)#1 (2) {
  ["uri"]=>
  string(100) "mongodb+srv://<username>:<password>@mongodb-e49d02ee-o2626ab53.database.cloud.ovh.net/admin?replicaSet=replicaset"
  ["cluster"]=>
  array(1) {
    [0]=>
    array(10) {
      ["host"]=>
      string(45) "node1-e49d02ee-o2626ab53.database.cloud.ovh.net"
      ["port"]=>
      int(27017)
      ["type"]=>
      int(4)
      ["is_primary"]=>
      bool(true)
      ["is_secondary"]=>
      bool(false)

(more data, cut for the example)

    }
  }
}
```

If the **var_dump($m)** is empty, you will have to analyze your PHP Environment and MongoDB compatibility matrix linked previously, and throwables :

- *Connection timeout* : usually due to incorrect IP authorization.
- *Invalid namespace* : the Service URI you entered may have a typo inside.

Once connected, you can perform multiple operations, for example a bulk insert and a **find()** inside a collection :

```php
<?php
    try {
        // Bulk write inserts
        $bulk = new MongoDB\Driver\BulkWrite;
        $bulk->insert(['mydata' => 'alice']);
        $bulk->insert(['mydata' => 'bob']);
        $bulk->insert(['mydata' => 'bastien']);
        $m->executeBulkWrite('mydb.mycol', $bulk);

        $filter = ['mydata' => 'bob'];
        $options = [];

        // Query to find inserts in a specific collection
        $query = new MongoDB\Driver\Query($filter, $options);
        $cursor = $m->executeQuery('mydb.mycol', $query);

        foreach ($cursor as $document) {
            var_dump($document);
        }
    }
    catch (Throwable $e) {
        echo "Captured Throwable: for insert : " . $e->getMessage() . PHP_EOL;
    }
?>
```

In this example, we insert 3 objects inside a collection called **mycol**, then we do a **find()** operations in this collection, looking for all the objects containing **"bob"**.

The result here is for the **var_dump($document)** :

```
object(stdClass)#6 (2) {
  ["_id"]=>
  object(MongoDB\BSON\ObjectId)#7 (1) {
    ["oid"]=>
    string(24) "6139d5163d84c01fa93e2e53"
  }
  ["mydata"]=>
  string(3) "bob"
}
```

This code correctly found one object containing **bob**. It means that here we were able to connect to the MongoDB instance, insert data, and look for this data.
Congratulations! Everything is working properly.

### PHP frameworks and tools for MongoDB

Coding in PHP from scratch to interact with a MongoDB instance can be fun and very instructive.
If you are interested, you can also take a look at [MongoDB PHP list for libraries, frameworks and tools](https://docs.mongodb.com/drivers/php-libraries/){.external}.
They can really help your work with PHP.

## Go further

[MongoDB capabilities](https://docs.ovh.com/ca/en/publiccloud/databases/mongodb/capabilities/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/ca/en/public-cloud/public-cloud-vrack/)

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
