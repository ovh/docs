---
title: MongoDB - Connect with MongoDB Compass
excerpt: Connect to your Public Cloud Databases for MongoDB using MongoDB Compass
slug: mongodb/connect-compass
section: MongoDB - Guides
order: 060
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/mongodb/connect-compass/'
---

**Last updated 27<sup>th</sup> July 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MongoDB database instance with one of the world's most famous Open Source (SSPL) management tool for MongoDB: MongoDB Compass.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/pt/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- A MongoDB database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/pt/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your MongoDB instance](https://docs.ovh.com/pt/publiccloud/databases/mongodb/managing-service/) to accept incoming connections
- A MongoDB Compass stable version installed and public network connectivity (Internet). This guide was made in MongoDB Compass version 1.30.1.

## Concept

A MongoDB instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide: [Connect to MongoDB with CLI](https://docs.ovh.com/pt/publiccloud/databases/mongodb/connect-cli/) or by using programming languages, such as [PHP](https://docs.ovh.com/pt/publiccloud/databases/mongodb/connect-php/) or [Python](https://docs.ovh.com/pt/publiccloud/databases/mongodb/connect-python/).

Another way is to interact directly using a management tool for MongoDB: MongoDB Compass.

In order to do so, we will need to install MongoDB Compass, then configure our Public Cloud Databases for MongoDB instances to accept incoming connections, and finally configure MongoDB.

## Instructions

### Installation

Pleese follow the [official documentation](https://docs.mongodb.com/compass/current/install/) to install MongoDB Compass.

We are now ready to learn how to connect to our MongoDB instance.

### Connect with MongoDB Compass

In MongoDB Compass fill in the connection field with the `Service URI`:

![New connection](images/new-connection.png){.thumbnail}

Now you are now interact with your Public Cloud Databases for MongoDB:

![Connected](images/connected.png){.thumbnail}

> [!primary]
>
> Explore the [documentation](https://docs.mongodb.com/compass/current/) to view all the features and how to interact with your data.
>

## Go further

[MongoDB capabilities](https://docs.ovh.com/pt/publiccloud/databases/mongodb/capabilities/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/pt/public-cloud/public-cloud-vrack/)

Join our community of users on <https://community.ovh.com/en/>.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.
Are you on Discord? Connect to our channel at [https://discord.gg/PwPqWUpN8G](https://discord.gg/PwPqWUpN8G) and interact directly with the team that builds our databases service!
