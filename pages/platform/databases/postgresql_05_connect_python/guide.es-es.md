---
title: PostgreSQL - Connect with Python
excerpt: Connect to your Public Cloud Databases for PostgreSQL using the Python programming language
slug: postgresql/connect-python
section: PostgreSQL - Guides
order: 060
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/postgresql/connect-python/'
---

**Last updated 4<sup>th</sup> April, 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a PostgreSQL database instance with one of the world's most famous programming language: Python.**

You can find an example on the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/postgresql/python/hello-world).

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- A [Public Cloud project](https://www.ovhcloud.com/es-es/public-cloud/) in your OVHcloud account.
- A PostgreSQL database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/es/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your PostgreSQL instance](https://docs.ovh.com/es/publiccloud/databases/postgresql/configure-postgresql-instance/) to accept incoming connections
- A Python environment with a stable version and public network connectivity (Internet). This guide was made using Python 3.9.7.

## Concept

A PostgreSQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Connect to PostgreSQL with CLI](https://docs.ovh.com/es/publiccloud/databases/postgresql/connect-cli).

Another way is to interact directly using a programming language, such as Python.
Python is one of the major programming languages in the world, especially in the Data ecosystem.

In order to do so, we will need to set up our Python environment with PostgreSQL drivers, then configure our Public Cloud Databases for PostgreSQL instances to accept incoming connections, and finally code in Python to perform a few example actions.

## Instructions

### Set up your Python environment

To interact with your PostgreSQL instance using Python, your development environment needs to be configured with:

- A compatible version of Python
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

We are now ready to learn how to connect to our PostgreSQL instance!

### Connect with Python

#### Using psycopg2

Psycopg is the most popular PostgreSQL database adapter for the Python programming language.

In your Python environment, let's try a connection.

```python
import psycopg2

connection = psycopg2.connect("postgres://avnadmin:K93xxxxxxxxxxaBp@postgresql-57xxxxfc-o2xxxxb53.database.cloud.ovh.net:20184/defaultdb?sslmode=require")

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
