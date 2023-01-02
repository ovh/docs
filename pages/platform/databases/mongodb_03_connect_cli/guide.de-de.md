---
title: MongoDB - Connect with CLI
excerpt: Connect to your Public Cloud Databases for MongoDB using the Command Line Interface (CLI)
slug: mongodb/connect-cli
section: MongoDB - Guides
order: 030
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/mongodb/connect-cli/'
---

**Last updated 27<sup>th</sup> July 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MongoDB database instance with a Command Line Interface (CLI).**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/de/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- A MongoDB database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/de/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your MongoDB instance](https://docs.ovh.com/de/publiccloud/databases/mongodb/managing-service/) to accept incoming connections

## Concept

A MongoDB instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), also known as a Console or Terminal.
To interact correctly with the MongoDB instance, we need to first install something called a MongoDB client, in order to connect and control the MongoDB service remotely.
It's a Client-Server interaction.

## Instructions

### Install MongoDB Shell on your client

> [!primary]
>
> Please note that MongoDB Shell is also natively integrated in the MongoDB community software package.
>

You first need to install a software to interact with your MongoDB instance remotely. This official software can be installed on various supports like your own computer, a VPS, a virtual machine... the only rule is to be able to reach the public network (Internet) and have sufficient rights to install it.

In order to do so and depending on your configuration, you may need to follow official MongoDB documentation to install MongoDB shell (referred to as mongosh).

Follow the steps here after selecting Windows, MacOS or Linux operation system : <https://docs.mongodb.com/mongodb-shell/install/#std-label-mdb-shell-install>

We will now follow official MongoDB documentation to perform our first connection.

In your CLI, type *mongosh --version*. The result should look like this :

```
laptop$ mongosh --version
1.5.1
```

It means that mongosh is correctly installed and working properly. If you do not see something like this result, please go back to the previous step and reinstall MongoDB Shell.

### Connect to your MongoDB instance

To perform a connection, simply type *mongosh* followed by the Service URI copied before :

```
laptop$mongosh "mongodb+srv://<username>:<password>@mongodb-e49d02ee-o2626ab53.database.cloud.ovh.net/admin?replicaSet=replicaset"
```

Don't forget you need to modify the username, password and hostname.

Once connected correctly, you should see something similar to :

```
Current Mongosh Log ID: 6137881570829aa067222c24
Connecting to:      mongodb+srv://<credentials>@mongodb-e49d02ee-o2626ab53.database.cloud.ovh.net/admin?replicaSet=replicaset&appName=mongosh+1.5.1
Using MongoDB:      4.4.6
Using Mongosh Beta: 1.5.1

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

replicaset [direct: primary]>
```

Congratulations! You are now fully able to interact with your MongoDB instance!

### MongoDB Shell usage

Once connected, you can manage your MongoDB instance with built-in MongoDB Shell methods.

Please follow the official MongoDB documentation.

To verify:

- *db* : will indicate on which database you are
- *use myNewDatabase* will switch to another database (will create one if not existing)
- *db.myCollection.insertOne( ... )* will insert data in your collection

In our example, it will look like this :

```
replicaset [direct: primary]> db
admin
replicaset [direct: primary]> use myNewDatabase
switched to db myNewDatabase
replicaset [direct: primary]> db
myNewDatabase
replicaset [direct: primary]> db.myCollection.insertOne( { x: 1 } );
{
  acknowledged: true,
  insertedId: ObjectId("61378bc0fc37b3df64e48b18")
}
replicaset [direct: primary]> db.myCollection.find()
[ { _id: ObjectId("61378bc0fc37b3df64e48b18"), x: 1 } ]
replicaset [direct: primary]>
```

## Go further

[MongoDB capabilities](https://docs.ovh.com/de/publiccloud/databases/mongodb/capabilities/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/de/public-cloud/public-cloud-vrack/)

Visit the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/mongodb) to find how to connect to your database with several languages.

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
