---
title: Redis - Connect with RedisInsight
excerpt: Connect to your Public Cloud Databases for Redis using RedisInsight
slug: redis/connect-redisinsight
section: Redis
order: 303
---

**Last updated 7th February 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a Redis database instance with the free GUI : RedisInsight.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie);
- A [Public Cloud project](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account;
- An up and running Public Cloud Database for Redis.
- A RedisInsight stable version installed and public network connectivity (Internet). This guide was made in RedisInsight 1.11.1.

## Concept

A Redis instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Redis - Connect with CLI](https://docs.ovh.com/ie/en/publiccloud/databases/redis/connect-cli/) or by using programming languages, such as [PHP](https://docs.ovh.com/ie/en/publiccloud/databases/redis/connect-php/)

Another way is to interact directly using the GUI: RedisInsight

In order to do so, we will need to install RedisInsight, then configure our Public Cloud Databases for Redis instances to accept incoming connections, and finally configure RedisInsight.

## Instructions

### Installation

To interact with your Redis instance with RedisInsight you need to install it.

Please follow the official [RedisInsight](https://docs.redis.com/latest/ri/installing){.external} to get the latest information.

We are now ready to learn how to connect to our Redis instance.

### Configure your Redis instance to accept incoming connections

Before making a connection, we need to verify that our Redis instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your Redis instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user + password pair.

We provide official Redis ACL, Access Control List. Please read the [official Redis documentation](https://redis.io/topics/acl/){.external} to select the right privileges for your user. Those ACL will define the allow or disallow commands or categories of commands, keys and Pub/Sub channels.

In our example, we will create a user called *redisUser* and right for the *ping* command (syntax equivalent to *<+ping>*) and *info* command (syntax equivalent to *<+info>*) / *allkeys* for keys (syntax equivalent to *<\*>*) / *allchannels* for channels (syntax equivalent to *<\*>*).

![User creation](images/redis_06_connect_redisinsight-20220207155917336.png){.thumbnail}

Once created or updated, the user has to be ready and with the "Enabled" status in the control panel.

![User ready](images/redis_06_connect_redisinsight-20220207114127502.png){.thumbnail}

#### Step 2: Authorize incoming connections from RedisInsight

In this step, select the `Authorised IP's`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
This way we can help prevent intrusive connection attempts.

Click to authorize a new IP, and enter the IP of your RedisInsight environment. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_authorize.png){.thumbnail}

> [!primary]
>
> If you want to allow connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Connect with RedisInsight

#### Collect required informations

Select the `General information`{.action} tab to find the required login information.

![Login information tab](images/redis_06_connect_redisinsight-20220209095337130.png)

#### Configuration

Once connected to the RedisInsight interface click on `I already have a database` link

![Redis first screen](images/redis_06_connect_redisinsight-20220207114821477.png)

Then on `Connect to a Redis database`

![Configure your Redis database](images/redis_06_connect_redisinsight-2022020711515517.png)

Fill the form with the previous collected informations. Check the `Use TLS` check box and uncheck the `Verify TLS Certificate` check box. Then click on `ADD REDIS DATABASE`

![Add Redis database](images/redis_06_connect_redisinsight-20220207120005204.png)

Finally select your Redis database

![Dashboard](images/redis_06_connect_redisinsight-20220209095424435.png)

Congratulations! You are now connected to your Redis instance!

![Result](images/redis_06_connect_redisinsight-20220209095533690.png)

> [!primary]
>
> RedisInsight has usefull features.
> Learn more about [here](https://redis.com/redis-enterprise/redis-insight/)
>

## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
