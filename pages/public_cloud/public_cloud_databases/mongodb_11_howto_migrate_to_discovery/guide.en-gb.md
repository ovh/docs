---
title: MongoDB - Migrate From Essential or Business to Discovery with the CLI
excerpt: Find out how to back up your Public Cloud Databases Mongodb and restore it to a Discovery cluster using the CLI
updated: 2023-12-06
---

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions. 
Several plans for MongoDB existed (Essential, Business, Enterprise) and recent update change it to Discovery, Production, Advanced.
This update will need some migration, to your cluster with a deprecated plan to a new one. In most of the case this migration are automatic.
But if you want to migrate to a new Discovery cluster from an deprecated Essential or Business cluster, you will need to do it manualy.

**This guide explains how to manually migrate data from an Essential or a Business cluster to a Discovery cluster for a Public Cloud Database MongoDB.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A MongoDB database running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)
- [Configure your MongoDB instance](/pages/public_cloud/public_cloud_databases/mongodb_02_manage_control_panel) to accept incoming connections

## Concept

Public Cloud Databases MongoDB Discovery plan is for testing purpose. The migration from an deprecated plan cluster is not automatic.
However, you might want to do it anyway. The process to do it is to create a new Discoevry cluster then migrate data from your deprecated cluster with the CLI.
For that you will need to backup your deprecated cluster data then restore it in the new Discovery cluster.

> [!warning]
>
> Because the disk space is low for MongoDB Discover, your deprecated Mongodb should not have more data than the new MongoDB Discovery can handle. 
>

## Instructions

### Ensure you can connect to your database

Follow the guide [MongoDB - Connect with CLI](/pages/public_cloud/public_cloud_databases/mongodb_03_connect_cli) in order to ensure you can connect to your database. That step ensures IP filtering is set up properly and that you have a suitable service URI available.

### Install the MongoDB Database Tools

Follow the [MongoDB documentation](https://docs.mongodb.com/database-tools/) to install the MongoDB Database Tools for your platform. You'll need the `mongodump` and `mongorestore` binaries in order to enact the rest of this procedure.

## Perform a backup of your deprecated cluster data 

Back up your database to a file using:

```bash
$ mongodump --gzip --archive=path/to/backup.gz --readPreference=secondaryPreferred \
  --uri="mongodb+srv://<username>:<password>@mongodb-<deprecated-cluster-id>.database.cloud.ovh.net/admin?replicaSet=replicaset"
```

The MongoDB user needs to have sufficient privileges to perform the backup operation. This can be ensured by giving this user the `backup` role.

This operation might take some time - from a few seconds to a few hours, depending on the amount of data your database holds and your network connection. Once it completes, the file `path/to/backup.gz` will hold a backup of your data.

## Restore your data from the previous backup into the new Discovery cluster

> [!warning]
>
> This operation might clobber existing data in your database with the data from the backup you restore. Make sure this is what you actually want!
>

> [!primary]
>
> `mongorestore` merges data
>
> After the restore operation, any data that was stored in your database which isn't also part of the backup file (e.g. other collections or other keys) will be left untouched: That is to say, `mongorestore` merges data from your backup file with preexisting data in the database.
>

Restore your database from a backup using:

```bash
$ mongorestore --gzip --archive=path/to/backup.gz \
  --uri="mongodb+srv://<username>:<password>@mongodb-<discovery-cluster-id>.database.cloud.ovh.net/admin?replicaSet=replicaset"
```

The MongoDB user needs to have sufficient privileges to perform the restore operation. This can be ensured by giving this user the `restore` role.

Again, depending on the volume of data and your network connection, this operation might take some time. Once it completes, any data contained in your backup file is present in your database.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project. Join our community of users on <https://community.ovh.com/en/>.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
