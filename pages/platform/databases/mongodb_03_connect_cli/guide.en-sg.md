---
title: MongoDB - Connect with CLI
excerpt: Connect to your Public Cloud Databases for MongoDB using the Command Line Interface (CLI)
slug: mongodb/connect-cli
section: MongoDB - Guides
order: 300
---

**Last updated July 18, 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MongoDB database instance with a Command Line Interface (CLI).**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg);
- A [Public Cloud project](https://www.ovhcloud.com/en-sg/public-cloud/) in your OVHcloud account;
- An up and running Public Cloud Database for MongoDB.

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

Once installed, you need to catch your IP address in order to authorize connection form this specific client.

If you don't know how to get your IP, please visit a website like [www.WhatismyIP.com](https://www.whatismyip.com/){.external}.
Copy the IP address numbers shown on this website and keep them for later.
In our example, we will use the (fake) IP 109.190.200.59.

We are now ready to learn how to connect to our MongoDB instance.

### Configure your MongoDB instance to accept incoming connections

Before making a connection, we need to verify that our MongoDB instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your MongoDB instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user + password pair.

We provide official MongoDB built-in roles. Please read the [official MongoDB documentation](https://docs.mongodb.com/manual/reference/built-in-roles/){.external} to select the right roles for your use-case.

In our example, we will create a user called *bastien* with the (fake) password *Mysup3rs3cur3p4ssw0rd* and the roles *readWriteAnyDatabase* and *userAdminAnyDatabase*.

![User Creation](images/user_creation.png){.thumbnail}

Once created or updated, the user has to be ready and with the "Enabled" status in the control panel.

![User ready](images/user_enabled.png){.thumbnail}

#### Step 2: Authorize incoming connections from the MongoDB client

In this step, select the `Authorised IP's`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
Like this we can help prevent intrusive connection attempts.

Click to authorize a new IP, and enter the previously found IP of your remote client. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_authorize.png){.thumbnail}

> [!primary]
>
> If you want to allow a connection from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully.
>

### Get your connection information (URI)

Now all the setup should be done, from the remote client and the MongoDB instance.

Select the `General Information`{.action} tab. In the **Login Informations** section, copy the Service URI.

It should be similar to this when you have a single node (Essential service plan) :

```
mongodb+srv://<username>:<password>@<service hostname>/admin?tls=true
```

And like this when you have a MongoDB cluster with multiple nodes, called a replica set (Business or Enterprise service plans) :

```
mongodb+srv://<username>:<password>@<service hostname>/admin?replicaSet=replicaset&tls=true
```

A bit of information to know :

- It will pass the username and password arguments
- Will connect to the hostname or the replica set (his name is **replicaset**)
- to the "admin" database directly
- on the default MongoDB port (27017)
- All of that securely, with TLS activated

We will now follow official MongoDB documentation to perform our first connection.

In your CLI, type *mongosh --version*. The result should look like this :

```
laptop$ mongosh --version
0.12.1
```

It means that mongosh is correctly installed and working properly. If you do not see something like this result, please go back to the previous step and reinstall MongoDB Shell.

To perform a connection, simply type *mongosh* followed by the Service URI copied before :

```
laptop$mongosh "mongodb+srv://<username>:<password>@<service hostname>/admin?tls=true"
```

Don't forget you need to modify the username, password and hostname.
In our example, it will look like this :

```
laptop$mongosh "mongodb+srv://bastien:Mysup3rs3cur3p4ssw0rd@mongodb-acf37bdb-oe3fcfb34.database.cloud.ovh.net/admin?tls=true"
```

Once connected correctly, you should see something similar to :

```
Current Mongosh Log ID: 6137881570829aa067222c24
Connecting to:      mongodb://<credentials>@node1-acf37bdbe3fcfb34.database.cloud.ovh.net/admin?tls=true&directConnection=true
Using MongoDB:      4.4.6
Using Mongosh Beta: 0.12.1
 
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

[MongoDB capabilities](https://docs.ovh.com/sg/en/publiccloud/databases/mongodb/capabilities/)

[Managing a MongoDB service from the OVHcloud Control Panel](https://docs.ovh.com/sg/en/publiccloud/databases/mongodb/managing-service/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/sg/en/public-cloud/public-cloud-vrack/)

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
