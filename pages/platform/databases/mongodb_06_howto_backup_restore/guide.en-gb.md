---
title: MongoDB - Backups and Restores with the CLI
slug: mongodb/backups-and-restores-cli
excerpt: Find out how to back up and restore your Public Cloud Databases for MongoDB database using the CLI
section: MongoDB - Guides
order: 070
---

**Last updated 27<sup>th</sup> July 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to manually back up and restore your Public Cloud Database for MongoDB.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A MongoDB database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/gb/en/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your MongoDB instance](https://docs.ovh.com/gb/en/publiccloud/databases/mongodb/managing-service/) to accept incoming connections

## Concept

Public Cloud Databases perform automatic daily backups of your databases. However, you might need to perform manual backup and restore operations to double-ensure data safety on your end, or for example in order to export and import data across database instances.

## Instructions

### Ensure you can connect to your database

Follow the guide [MongoDB - Connect with CLI](https://docs.ovh.com/gb/en/publiccloud/databases/mongodb/connect-cli/) in order to ensure you can connect to your database. That step ensures IP filtering is set up properly and that you have a suitable service URI available.

### Install the MongoDB Database Tools

Follow the [MongoDB documentation](https://docs.mongodb.com/database-tools/) to install the MongoDB Database Tools for your platform. You'll need the `mongodump` and `mongorestore` binaries in order to enact the rest of this procedure.

## Perform a backup of your data

Back up your database to a file using:

```bash
$ mongodump --gzip --archive=path/to/backup.gz --readPreference=secondaryPreferred \
  --uri="mongodb+srv://<username>:<password>@mongodb-e49d02ee-o2626ab53.database.cloud.ovh.net/admin?replicaSet=replicaset"
```

The MongoDB user needs to have sufficient privileges to perform the backup operation. This can be ensured by giving this user the `backup` role.

This operation might take some time - from a few seconds to a few hours, depending on the amount of data your database holds and your network connection. Once it completes, the file `path/to/backup.gz` will hold a backup of your data.

## Restore your data from a previous backup

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
  --uri="mongodb+srv://<username>:<password>@mongodb-e49d02ee-o2626ab53.database.cloud.ovh.net/admin?replicaSet=replicaset"
```


The MongoDB user needs to have sufficient privileges to perform the restore operation. This can be ensured by giving this user the `restore` role.

Again, depending on the volume of data and your network connection, this operation might take some time. Once it completes, any data contained in your backup file is present in your database.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have. Join our community of users on <https://community.ovh.com/en/>.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
