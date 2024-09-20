---
title: Caching - Connectez-vous avec RedisInsight (EN)
excerpt: Connect to your Public Cloud Databases for Caching using RedisInsight
updated: 2024-06-12
---

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a Caching service with the free GUI: RedisInsight.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- A [Caching service project](https://www.ovhcloud.com/fr/public-cloud/) in your OVHcloud account
- A Caching service running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)
- [Configure your Caching service](/pages/public_cloud/public_cloud_databases/redis_08_prepare_for_incoming_connections) to accept incoming connections
- A RedisInsight stable version installed and public network connectivity (Internet). This guide was made in RedisInsight 1.11.1

## Concept

A Caching service can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide: [Connect with CLI](/pages/public_cloud/public_cloud_databases/redis_03_connect_cli) or by using programming languages, such as [PHP](/pages/public_cloud/public_cloud_databases/redis_04_connect_php).

Another way is to interact directly using the GUI: RedisInsight.

In order to do so, we will need to install RedisInsight, then configure our Public Cloud Databases for Caching services to accept incoming connections, and finally configure RedisInsight.

## Instructions

### Installation

To interact with your Caching service with RedisInsight you need to install it.

Please follow the official [RedisInsight](https://docs.redis.com/latest/ri/installing) to get the latest information.

We are now ready to learn how to connect to our Caching service.

### Connect with RedisInsight

#### Collect required informations

Select the `General information` tab to find the required login information:

![Login information tab](images/redis_06_connect_redisinsight-20220209095337130.png)

#### Configuration

Once connected to the RedisInsight interface, click on the `I already have a database` link:

![Redis first screen](images/redis_06_connect_redisinsight-20220207114821477.png)

Then on `Connect to a Caching service` :

![Configure your Caching service](images/redis_06_connect_redisinsight-2022020711515517.png)

Fill in the form with the previously collected credentials. Check the `Use TLS` check box and uncheck the `Verify TLS Certificate` check box. Then click on `ADD REDIS DATABASE` :

![Add Redis database](images/redis_06_connect_redisinsight-20220207120005204.png)

Finally, select your Caching service:

![Dashboard](images/redis_06_connect_redisinsight-20220209095424435.png)

Congratulations! You are now connected to your Caching instance!

![Result](images/redis_06_connect_redisinsight-20220209095533690.png)

> [!primary]
>
> RedisInsight has useful features.
> Learn more about them [here](https://redis.com/redis-enterprise/redis-insight/).

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
