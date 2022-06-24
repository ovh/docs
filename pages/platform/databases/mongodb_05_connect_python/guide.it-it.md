---
title: MongoDB - Connect with Python
excerpt: Connect to your Public Cloud Databases for MongoDB using the Python programming language
slug: mongodb/connect-python
section: MongoDB - Guides
order: 302
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/mongodb/connect-python/'
---

**Last updated July 18, 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MongoDB database instance with one of the world's most famous programming language: Python.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
- A [Public Cloud project](https://www.ovhcloud.com/it/public-cloud/) in your OVHcloud account.
- An up and running Public Cloud Database for MongoDB. This guide was made with MongoDB 4.4.
- A Python environment with a stable version and public network connectivity (Internet). This guide was made using Python 3.9.5.

## Concept

A MongoDB instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Connect to MongoDB with CLI](https://docs.ovh.com/it/publiccloud/databases/mongodb/connect-cli).

Another way is to interact directly using a programming language, such as Python.
Python is one of the major programming languages in the world, especially in the Data ecosystem.
MongoDB provides official Python drivers, allowing us to connect and manage a MongoDB instance from code.

In order to do so, we will need to set up our Python environment with MongoDB drivers, then configure our Public Cloud Databases for MongoDB instances to accept incoming connections, and finally code in Python to perform a few example actions.

## Instructions

### Set up your Python environment

> [!primary]
>
> Some useful tools, such as Conda, allow you to create and use specific Python environments in the same machine, like your computer.
> Conda will allow you to build a specific environment when working with MongoDB, without impacting your existing configurations. For more information please visit <https://www.conda.io>.
>

To interact with your MongoDB instance using Python, your development environment needs to be configured with:

- A compatible version of Python.
- MongoDB official driver, called PyMongo, or Motor, when working asynchonously with MongoDB.

This guide will focus on the use of **PyMongo**, which covers most of the use cases.

Please follow the official [MongoDB documentation for Python drivers](https://docs.mongodb.com/drivers/python/){.external} to get the latest information.

At the end of the documentation page for PyMongo, you will find a **compatibility matrix** between Python versions and PyMongo driver.
Follow this accordingly.

Once your Python environment is set up and you begin executing a **python --version** in your command line interface (CLI), you should see information about the version as shown below :

```python
laptop$ python --version
Python 3.9.5
```

In the same console, by typing a **pip list** check if **pymongo** is correctly installed :

```python
laptop$  pip list           
Package                Version
---------------------- -------------------
brotlipy               0.7.0
certifi                2021.5.30
cffi                   1.14.6
chardet                4.0.0
conda                  4.10.3
conda-package-handling 1.7.3
cryptography           3.4.7
idna                   2.10
pip                    21.1.3
pycosat                0.6.3
pycparser              2.20
pymongo                3.12.0
(...)
```

In my case, I can find **Python 3.9.5**, and **PyMongo 3.12**. Based on official MongoDB compatibility matrix linked previously, I will be able to connect to MongoDB instances in versions 4.x and 5.
This is compliant with my current MongoDB 4.4 instance.

Finally, copy the IP address of your Python environment and save it for later.
If you don't know how to get your IP, please visit a website like [www.WhatismyIP.com](https://www.whatismyip.com/){.external} from your station hosting the Python environment.
In our example, we will use the (fake) IP 109.190.200.59.

We are now ready to learn how to connect to our MongoDB instance !

### Configure your MongoDB instance to accept incoming connections

Before making a connection, we need to verify that our MongoDB instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your MongoDB instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user + password pair.

We provide official MongoDB built-in roles. Please read the [official MongoDB documentation](https://docs.mongodb.com/manual/reference/built-in-roles/){.external} to select the right roles for your use-case.

In our example, we will create a user called *bastien* with the (fake) password *Mysup3rs3cur3p4ssw0rd* and the roles *readWriteAnyDatabase* and *userAdminAnyDatabase*.

![User Creation](images/user_creation.png){.thumbnail}

Once created or updated, check to verify the user is ready and with the "Enabled" status in the OVHcloud Control Panel.

![User ready](images/user_enabled.png){.thumbnail}

#### Step 2: Authorize incoming connections from the MongoDB client

In this step, select the `Authorised IP's`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
This way we can help prevent intrusive connection attempts.

Click to authorize a new IP, and enter the previously found IP of your Python environment. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_authorize.png){.thumbnail}

> [!primary]
>
> If you want to allow any connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully. Every IP will be authorized.
>

### Get your connection information (URI)

The setup is now done for both the Python environment and the MongoDB instance.

Select the `General Information`{.action} tab. In the **Login Information** section, copy the Service URI.

It should be similar to this when you have a single node (Essential service plan) :

```
mongodb+srv://<username>:<password>@<service hostname>/admin?tls=true
```

And like this when you have a MongoDB cluster with multiple nodes, called a replica set (Business or Enterprise service plans) :

```
mongodb+srv://<username>:<password>@<service hostname>/admin?replicaSet=replicaset&tls=true
```

A bit of information to know. It will connect:

- to the hostname or the replica set (name is **replicaset**);
- to the "admin" database directly;
- on the default MongoDB port (27017);
- with the username and password arguments included;
- all of that securely, with TLS activated.

We will now follow the official MongoDB documentation to perform our first connection with Python.

### Connect with Python

In your Python environment, let's try a connection. To be sure that we are indeed connected, we will insert two objects.
Create a file called **basic_insert.py**. Insert the code below with your own credentials.

As shown in the code, we use the **PyMongo** official driver. Use the official PyMongo documentation for exhaustive command list : <https://docs.mongodb.com/drivers/pymongo/>.

```python
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

# Establishing connection
try:
    # MongoClient('mongodb+srv://username:password@service-hostname/?tls=True') replica by your own Service URI
    uri = 'mongodb+srv://bastien:Mysup3rs3cur3p4ssw0rd@mongodb-abcdef01-o23456789.database.cloud.ovh.net/admin?tls=true'
    connect = MongoClient(uri)
    print("MongoDB cluster is reachable")
    print(connect)
except ConnectionFailure as e:
    print("Could not connect to MongoDB")
    print(e)
```

After executing your Python code, result shown in the CLI should be like this :

```python
laptop$ python basic_insert.py
MongoDB cluster is reachable
MongoClient(host=['node1-123456789.database.cloud.ovh.net:27017'], document_class=dict, tz_aware=False, connect=True, ssl=True)
```

If not, your CLI should give you more details about the issue, for example :

- *Authentication failed* : could be an error with your user login or password;
- *nodename nor servname provided, or not known* : could be a wrongly typed hostname;
- *Connection reset by peer* : usually due to connection without secure TLS mode. use *tls=true* parameter.

Once connected, you can perform multiple operations, for example a few inserts and a **find()** inside a collection :

```python
# Connecting or switching to the database
db = connect.myDb

# Creating or switching to demoCollection
collection = db.demoCollection

#first document
document1 = {
        "name":"John",
        "age":24,
        "location":"New York"
        }
#second document
document2 = {
        "name":"Marianne",
        "age":21,
        "location":"Paris"
        }

# Inserting both documents one by one
collection.insert_one(document1)
collection.insert_one(document2)

# Printing the data inserted
cursor = collection.find()
for record in cursor:
    print(record)
```

In this example, we insert 2 objects inside a collection called **demoCollection**, then we perform a **find()** operations in this collection, looking for all the objects.

The result here is for the **print(record)** :

```python
{'_id': ObjectId('6140b59fd68c16b38fe677ba'), 'name': 'John', 'age': 24, 'location': 'New York'}
{'_id': ObjectId('6140b5a0d68c16b38fe677bb'), 'name': 'Marianne', 'age': 21, 'location': 'Paris'}
```

This code correctly found the two previously inserted objects. It means that here we were able to connect to the MongoDB instance, insert data, and look for this data.
Congratulations! Everything is working properly.

## Go further

[MongoDB capabilities](https://docs.ovh.com/it/publiccloud/databases/mongodb/capabilities/)

[Managing a MongoDB service from the OVHcloud Control Panel](https://docs.ovh.com/it/publiccloud/databases/mongodb/managing-service/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/it/public-cloud/public-cloud-vrack/)

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
