---
title: Redis - Connect with CLI
excerpt: Connect to your Public Cloud Databases for Redis using the Command Line Interface (CLI)
slug: redis/connect-cli
section: Redis - Guides
order: 030
---

**Last updated 24th March 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a Redis database instance with a Command Line Interface (CLI).**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia);
- A [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account;
- A Redis database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/asia/en/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your Redis instance](https://docs.ovh.com/asia/en/publiccloud/databases/redis/configure-redis-instance/) to accept incoming connections

## Concept

A Redis instance can be managed through multiple ways.<br>
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), also known as a Console or Terminal.
To interact correctly with the Redis instance, we need to first install something called a Redis client, in order to connect and control the Redis service remotely.<br>
It's a Client-Server interaction.

## Instructions

### Installing redis-cli on your client

> [!primary]
>
> Please note that redis-cli is natively integrated in the redis package.
>

You first need to install a software to interact with your Redis instance remotely. This official software can be installed on various supports like your own computer, a VPS, a virtual machine... The only rule is to be able to reach the public network (Internet) and have sufficient privilege to install it.

In order to do so and depending on your configuration, you may need to follow the official Redis documentation to install redis-cli, part of the redis server package : <https://redis.io/download>.

We are now ready to learn how to connect to our Redis instance.

### Connection

We will now follow the official Redis documentation to perform our first connection.

In your terminal, type `redis-cli -u rediss://<username>:<password>@<hostname>:<port> ping`.

The result should look like this :

```bash
laptop$ redis-cli -u rediss://redisUser:3FAKExSW6Rez9Xw0admB@redis-9f6095f3-9f6095f3.database.cloud.ovh.net:20185 ping
Warning: Using a password with '-a' or '-u' option on the command line interface may not be safe.
PONG
```

It means that the Redis instance is running and responding to your command.

To be in interactive mode, do not use any particular command :
`redis-cli -u rediss://<username>:<password>@<hostname>:<port>`.<br>

If you want to avoid to type username and password in your shell session, type:
`redis-cli -u rediss://<username>:<password>@<hostname>:<port>`
to connect to the Redis instance then use the `AUTH <username> <password>` command to switch to your user that have minimum privileges to run other commands.

Don't forget you need to modify the username, password, hostname and port.

In our example, it will look like this :

```bash
laptop$ redis-cli -u rediss://redisUser:3FAKExSW6Rez9Xw0admB@redis-9f6095f3-9f6095f3.database.cloud.ovh.net:20185    
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

Congratulations! You are now fully able to interact with your Redis instance!

### redis-cli usage

With the Redis command line interface, you can manage your Redis instance either in an interactive mode or your command is sent as redis-cli arguments.

Please follow the official Redis [redis-cli documentation](https://redis.io/topics/rediscli/){.external}.

### In the event of connection or command execution issues

In case you don't use a defined user in your command line or not enough privileges, etc., you will get a *NOAUTH* or *AUTH failed* response like below.

```bash
redis-cli -u rediss://redis-9f6095f3-9f6095f3.database.cloud.ovh.net:20185 ping
(error) NOAUTH Authentication required.
```

In case the user doesn't have the right privilege, you will get a *NOPERM* response. In this case, please review your user's roles and attached ACL. For further reading, please refer to [Official Redis ACL documentation](https://redis.io/topics/acl/){.external}

## Go further

[Redis capabilities and limitations](https://docs.ovh.com/asia/en/publiccloud/databases/redis/capabilities/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/asia/en/public-cloud/public-cloud-vrack/)

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
