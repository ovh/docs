---
title: Redis - Connectez-vous avec PHP (EN)
excerpt: Connect to your Public Cloud Databases for Redis using the PHP programming language
slug: redis/connect-php
section: Redis - Guides
order: 040
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/redis/connect-php/'
---

**Last updated 24th March 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a Redis database instance with one of the world's most famous programming language: PHP.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- A [Public Cloud project](https://www.ovhcloud.com/fr/public-cloud/) in your OVHcloud account
- A Redis database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/fr/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your Redis instance](https://docs.ovh.com/fr/publiccloud/databases/redis/configure-redis-instance/) to accept incoming connections
- A PHP environment with a stable version and public network connectivity (Internet). This guide was made in PHP 7.4.

## Concept

A Redis instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Connect to Redis with CLI](https://docs.ovh.com/fr/publiccloud/databases/redis/connect-cli).

Another way is to interact directly using programming languages, such as PHP.
PHP is used in almost 80% of the websites in the world, such as Facebook, Wikipedia or WordPress.
Redis has multiple PHP clients, allowing us to connect and manage a Redis instance from code. Please follow the official [Redis documentation for PHP clients](https://redis.io/clients#php){.external} to get the latest information for all Redis clients.

We will need to set up our PHP environment with phpredis client, then configure our Public Cloud Databases for Redis instances to accept incoming connections, and finally code in PHP to perform a few example actions.

## Instructions

### Set up your PHP environment

To interact with your Redis instance with PHP, your development environment needs to be configured with:

- A compatible version of PHP;
- PHP extension that support Redis 6 and TLS, as recommended by Redis : phpredis or Predis PHP Libraries.

For both phpredis and Predis it is recommended to check their respective sites on how to do the install:

- [phpredis official GitHub](https://github.com/phpredis/phpredis);
- [Predis official GitHub](https://github.com/predis/predis).

We are now ready to learn how to connect to our Redis instance. We will use phpredis as the PHP client.

### Connect with PHP

In your PHP environment, let's try a connection. To be sure that we are indeed connected, set a data pair and then check we can get the value of it.


```php
<?php
   // PHP version 7.4 used here
	echo "\nConnection to server ongoing...";
	$redis = new Redis() or die("Cannot load Redis module in PHP.");

	//Connection to the Redis DB
	$redis->connect('tls://redis-9f6095f3-of5ff6e31.database.cloud.ovh.net', 20185);

	//Setup the user
	$redis->auth(['redisUser', '3FAKExSW6Rez9Xw0admB']);

	// Ping the redis instance
	echo "\nServer is running: ".$redis->ping("OK");

	// Set the key pair
	echo "\nSet key pair (foo,cowabunga).";
	$redis->set('foo', 'cowabunga');

	//Get the value of the key foo
	$response = $redis->get('foo');
	echo "\nGet the value for key foo :";
	echo $response;

	if ($response == "cowabunga") {
		echo "\nPHP test with Redis OK.•\n";
	} else {
		echo "\nPHP Test FAILED\n";
	}
?>
```

Congratulations! Everything is working properly.


## Go further

[Redis official tutorial : simple Twitter clone using PHP](https://redis.io/topics/twitter-clone)

[Redis capabilities](https://docs.ovh.com/fr/publiccloud/databases/redis/capabilities/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/fr/public-cloud/public-cloud-vrack/)

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
