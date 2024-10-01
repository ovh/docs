---
title: Caching - Connect with CLI
excerpt: Connect to your Public Cloud Databases for Caching using the Command Line Interface (CLI)
updated: 2024-06-12
---

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a Caching service instance with a Command Line Interface (CLI).**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager);
- A [Public Cloud project](https://www.ovhcloud.com/it/public-cloud/) in your OVHcloud account;
- A Caching service running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)
- [Configure your Caching service](/pages/public_cloud/public_cloud_databases/redis_08_prepare_for_incoming_connections) to accept incoming connections

## Concept

A Caching service can be managed through multiple ways.<br>
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), also known as a Console or Terminal.
To interact correctly with the instance, we need to first install something called a client, in order to connect and control the Caching service remotely.<br>
It's a Client-Server interaction.

## Instructions

### Installing redis-cli on your client

> [!primary]
>
> Please note that redis-cli is natively integrated in the redis package.
>

You first need to install a software to interact with your instance remotely. This official software can be installed on various supports like your own computer, a VPS, a virtual machine... The only rule is to be able to reach the public network (Internet) and have sufficient privilege to install it.

In order to do so and depending on your configuration, you may need to follow the official Redis® documentation to install redis-cli, part of the redis server package : <https://redis.io/download>.

We are now ready to learn how to connect to our instance.

### Connection

We will now follow the official Redis® documentation to perform our first connection.

In your terminal, type `redis-cli -u rediss://<username>:<password>@<hostname>:<port> ping`.

The result should look like this :

```bash
$ redis-cli -u rediss://redisUser:3FAKExSW6Rez9Xw0admB@redis-9f6095f3-9f6095f3.database.cloud.ovh.net:20185 ping
Warning: Using a password with '-a' or '-u' option on the command line interface may not be safe.
PONG
```
It means that the instance is running and responding to your command.

To be in interactive mode, do not use any particular command :
`redis-cli -u rediss://<username>:<password>@<hostname>:<port>.<br>`

If you want to avoid to type username and password in your shell session, type:
`redis-cli -u rediss://<username>:<password>@<hostname>:<port>`
to connect to the instance then use the `AUTH <username> <password>` command to switch to your user that have minimum privileges to run other commands.

Don't forget you need to modify the username, password, hostname and port.

In our example, it will look like this :
```bash
$ redis-cli -u rediss://redisUser:3FAKExSW6Rez9Xw0admB@redis-9f6095f3-9f6095f3.database.cloud.ovh.net:20185    
Warning: Using a password with '-a' or '-u' option on the command line interface may not be safe.
redis-9f6095f3-9f6095f3.database.cloud.ovh.net:20185> PING
PONG
redis-9f6095f3-9f6095f3.database.cloud.ovh.net:20185> HELLO
 1) "server"
 2) "redis"
 3) "version"
 4) "6.2.3"
 5) "proto"
 6) (integer) 2
 7) "id"
 8) (integer) 20652
 9) "mode"
10) "standalone"
11) "role"
12) "master"
13) "modules"
14) (empty array)
redis-9f6095f3-9f6095f3.database.cloud.ovh.net:20185>
```
Congratulations! You are now fully able to interact with your instance!

### redis-cli usage
You can manage your instance using the command line interface in interactive mode or by setting parameters as redis-cli arguments.

Please follow the official Redis® [redis-cli documentation](https://redis.io/commands).

### In the event of connection or command execution issues
In case you don't use a defined user in your command line or lack sufficient privileges, you will get a NOAUTH or AUTH failed response.

```bash
redis-cli -u rediss://redis-9f6095f3-9f6095f3.database.cloud.ovh.net:20185 ping
(error) NOAUTH Authentication required.
```
In case the user doesn't have the right privilege, you will get a NOPERM response. In this case, please review your user's roles and attached ACL. For further reading, please refer to [Official Redis® ACL documentation](https://redis.io/topics/acl).

## Go further

[Caching capabilities and limitations](/pages/public_cloud/public_cloud_databases/redis_01_capabilities)

[Configuring vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/) to find how to connect to your database with several languages.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or [click on this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at [https://discord.gg/ovhcloud](https://discord.gg/ovhcloud) and interact directly with the team that builds our databases service!
