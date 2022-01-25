---
title: PostegreSQL - Connect with Python
excerpt: Connect to your Public Cloud Databases for PostegreSQL using the Python programming language
slug: postgresql/connect-python
section: PostgreSQL - Guides
order: 302
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/postgresql/connect-python/'
---

**Last updated January 14th 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a PostegreSQL database instance with one of the world's most famous programming language: Python.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- A [Public Cloud project](https://www.ovhcloud.com/es/public-cloud/) in your OVHcloud account.
- An up and running Public Cloud Database for PostegreSQL.
- A Python environment with a stable version and public network connectivity (Internet). This guide was made using Python 3.9.7.

## Concept

A PostegreSQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Connect to PostegreSQL with CLI](https://docs.ovh.com/us/es/publiccloud/databases/postgresql/connect-cli).

Another way is to interact directly using a programming language, such as Python.
Python is one of the major programming languages in the world, especially in the Data ecosystem.

In order to do so, we will need to set up our Python environment with PostegreSQL drivers, then configure our Public Cloud Databases for PostegreSQL instances to accept incoming connections, and finally code in Python to perform a few example actions.

## Instructions

### Set up your Python environment

To interact with your PostegreSQL instance using Python, your development environment needs to be configured with:

- A compatible version of Python.
- Psycopg2

Please follow the official [Psycopg - PostgreSQL database adapter for Pytho](https://www.psycopg.org/docs/){.external}. to get the latest information.


Once your Python environment is set up and you begin executing a **python --version** in your command line interface (CLI), you should see information about the version as shown below :

```python
laptop$ python3 --version
Python 3.9.7
```

In the same console, by typing a **pip list** check if **psycopg2** is correctly installed :

```python
laptop$  pip list           
Package                Version
---------------------- -------
cryptography           3.3.2
mysql-connector-python 8.0.27
pip                    20.3.4
protobuf               3.19.3
psycopg2               2.8.6
pyOpenSSL              20.0.1
setuptools             52.0.0
six                    1.16.0
wheel                  0.34.2
(...)
```

Finally, copy the IP address of your Python environment and save it for later.
If you don't know how to get your IP, please visit a website like [www.WhatismyIP.com](https://www.whatismyip.com/){.external} from your station hosting the Python environment.
In our example, we will use the (fake) IP 109.190.200.59.

We are now ready to learn how to connect to our PostegreSQL instance !

### Configure your PostegreSQL instance to accept incoming connections

Before making a connection, we need to verify that our PostegreSQL instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your PostegreSQL instance.

#### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user + password pair.

This first user **avnadmin** comes with the following privileges:

```console
  LOGIN
  NOSUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  REPLICATION
```

We rely on official PostgreSQL roles and privileges. You can manage them yourself via CLI or code.
So far, **user roles and privileges management is not supported via OVHcloud Control Panel neither OVHcloud API**.

Please read the [official PostgreSQL documentation](https://www.postgresql.org/docs/current/database-roles.html){.external} to select the right roles for your use-case.


In our example, we will simply reset the **avnadmin** password.

Once created or updated, the user has to be ready and have the status "Enabled" in the Control Panel.

![User ready](images/user_enabled.png){.thumbnail}

#### Step 2: Authorize incoming connections from the PostegreSQL client

In this step, select the `Authorised IP's`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
This way we can help prevent intrusive connection attempts.

Click to authorize a new IP, and enter the previously found IP of your Python environment. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_authorize.png){.thumbnail}

> [!primary]
>
> If you want to allow any connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully. Every IP will be authorized.
>

### Connect with Python

#### Using psycopg2

Psycopg is the most popular PostgreSQL database adapter for the Python programming language.

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar, and select your MySQL instance.  
Select the `General Information`{.action} tab. In the **Login Informations** section, download the CA certificate.

In your Python environment, let's try a connection.

```python
import psycopg2

connection = psycopg2.connect(postgres://avnadmin:K93xxxxxxxxxxaBp@postgresql-57xxxxfc-o2xxxxb53.database.cloud.ovh.net:20184/defaultdb?sslmode=require)

cursor = connection.cursor()
cursor.execute("select * from pg_stat_ssl")
stat_ssl = cursor.fetchone()
print(stat_ssl)
```

After executing your Python code, result shown in the CLI should be like this :

```python
(590567, True, 'TLSv1.3', 'TLS_AES_256_GCM_SHA384', 256, None, None, None)
```

## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
