---
title: Redis - Connect with CLI
excerpt: Connect to your Public Cloud Databases for Redis using the Command Line Interface (CLI)
slug: redis/connect-cli
section: Redis
order: 100
---

**Last updated 5th November 2021**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a Redis database instance with a Command Line Interface (CLI).**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie);
- A [Public Cloud project](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account;
- An up and running Public Cloud Database for Redis.

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

You first need to install a software to interact with your Redis instance remotely. This official software can be installed on various supports like your own computer, a VPS, a virtual machine... The only rule is to be able to reach the public network (Internet) and have sufficient priviledge to install it.

In order to do so and depending on your configuration, you may need to follow the official Redis documentation to install redis-cli, part of the redis server package : <https://https://redis.io/download>. 

Once installed, you need to catch your IP address in order to authorize connection form this specific client.

If you don't know how to get your IP, please visit a website like [www.WhatismyIP.com](https://www.whatismyip.com/){.external}.
Copy the IP address numbers shown on this website and keep them for later.
In our example, we will use the (fake) IP 109.190.200.59.

We are now ready to learn how to connect to our Redis instance.

### Configure your Redis instance to accept incoming connections

Before making a connection, we need to verify that our redis instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your Redis instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. 

Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user.<br>
Be careful! By doing so you will need to update all the places where you already use this user/password pair.

We provide official Redis Access Control List (ACL). Please read the [official Redis documentation](https://redis.io/topics/acl/){.external} to select the right priviledges for your user. Those ACL will define the allow or disallow commands or categories of commands, keys and Pub/Sub channels.

In our example, we will create a user called *redisUser* with the (fake) generated password *3FAKExSW6Rez9Xw0admB* and *allcommands* for commands (syntax equivalent to *<+@all>*) / *allkeys* for keys (syntax equivalent to *<\*>*)/ *allchannels* for channels (syntax equivalent to *<\*>*).

![User Creation](images/user_creation.png){.thumbnail}

Once created or updated, the user has to be ready and with the "Enabled" status in the control panel.

![User ready](images/user_enabled.png){.thumbnail}

#### Step 2: Authorize incoming connections from the Redis client

In this step, select the `Authorised IP's`{.action} tab.

By default, a Public Cloud Database does not accept any form of connection from the outside world.
Like this we can help prevent intrusive connection attempts.

Click to authorize a new IP, and enter the previously found IP of your remote client. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_whitelist.png){.thumbnail}

> [!primary]
>
> If you want to allow a connection from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Get your connection information (URI)

Now all the setup should be done, from the remote client and the Redis instance.

Select the `General Information`{.action} tab. In the **Login Information** section, copy the Service URI.

It should be similar to this:

```bash
rediss://<username>:<password>@<hostname>:<port>
```

A bit of information to know:

- It will pass the username and password arguments
- not on the default Redis port
- TLS is activated

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
to connect to the Redis instance then use the `AUTH <username> <password>` command to switch to your user that have minimum priviledges to run other commands. 

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

[Redis capabilities and limitations](https://docs.ovh.com/ie/en/publiccloud/databases/redis/capabilities/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/ie/en/public-cloud/public-cloud-vrack/)

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!