---
title: Caching - Connect with PHP
excerpt: Connect to your Public Cloud Databases for Caching using the PHP programming language
updated: 2024-06-12
---

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a Caching service instance with one of the world's most famous programming language: PHP.**

You can find an example on the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/redis/php/hello-world).

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- A [Public Cloud project](https://www.ovhcloud.com/en-sg/public-cloud/) in your OVHcloud account
- A Caching service running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)
- [Configure your Caching service](/pages/public_cloud/public_cloud_databases/redis_08_prepare_for_incoming_connections) to accept incoming connections
- A PHP environment with a stable version and public network connectivity (Internet). This guide was made in PHP 7.4.

## Concept

A Caching service can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide: [Connect with CLI](/pages/public_cloud/public_cloud_databases/redis_03_connect_cli).

Another way is to interact directly using programming languages, such as PHP.
PHP is used in almost 80% of the websites in the world, such as Facebook, Wikipedia or WordPress.
Redis® has multiple PHP clients, allowing us to connect and manage an instance from code. Please follow the official [Redis® documentation for PHP clients](https://redis.io/clients#php){.external} to get the latest clients information.

We will need to set up our PHP environment with phpredis client, then configure our Public Cloud Databases for Caching services to accept incoming connections, and finally code in PHP to perform a few example actions.

## Instructions

### Set up your PHP environment

To interact with your instance with PHP, your development environment needs to be configured with:

- A compatible version of PHP;
- PHP extension that supports Redis® open source software version 6 and TLS, as recommended by Redis®: phpredis or Predis PHP Libraries.

For both phpredis and Predis it is recommended to check their respective sites on how to do the install:

- [phpredis official GitHub](https://github.com/phpredis/phpredis);
- [Predis official GitHub](https://github.com/predis/predis).

We are now ready to learn how to connect to our instance. We will use phpredis as the PHP client.

### Connect with PHP

In your PHP environment, let's try a connection. To be sure that we are indeed connected, set a data pair and then check we can get the value of it.

```php
<?php
   // PHP version 7.4 used here
	echo "\nConnection to server ongoing...";
	$redis = new Redis() or die("Cannot load Redis module in PHP.");

	// Connection to the Redis DB
	$redis->connect('tls://redis-9f6095f3-of5ff6e31.database.cloud.ovh.net', 20185);

	// Setup the user
	$redis->auth(['redisUser', '3FAKExSW6Rez9Xw0admB']);

	// Ping the instance
	echo "\nServer is running: ".$redis->ping("OK");

	// Set the key pair
	echo "\nSet key pair (foo,cowabunga).";
	$redis->set('foo', 'cowabunga');

	// Get the value of the key foo
	$response = $redis->get('foo');
	echo "\nGet the value for key foo :";
	echo $response;

	if ($response == "cowabunga") {
		echo "\nPHP test with Redis OK.\n";
	} else {
		echo "\nPHP Test FAILED\n";
	}
?>
```
Congratulations! Everything is working properly.

## Go further

- [Redis® official tutorial: simple Twitter clone using PHP](https://redis.io/topics/twitter-clone)
- [Caching - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/redis_01_capabilities)
- [Configuring vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)

Visit our dedicated Discord channel: [https://discord.gg/ovhcloud](https://discord.gg/ovhcloud). Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
