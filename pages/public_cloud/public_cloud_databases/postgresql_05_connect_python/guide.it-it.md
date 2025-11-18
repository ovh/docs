---
title: PostgreSQL - Connect with Python
excerpt: Connect to your Public Cloud Databases for PostgreSQL using the Python programming language
updated: 2025-10-08
---

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a PostgreSQL database instance with one of the world's most famous programming language: Python.**

You can find an example on the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/postgresql/python/hello-world).

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- A PostgreSQL database running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)
- [Configure your PostgreSQL instance](/pages/public_cloud/public_cloud_databases/postgresql_07_prepare_for_incoming_connections) to accept incoming connections
- A Python environment with a stable version and public network connectivity (Internet). This guide was made using Python 3.13.5.

## Concept

A PostgreSQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide: [Connect to PostgreSQL with CLI](/pages/public_cloud/public_cloud_databases/postgresql_03_connect_cli).

Another way is to interact directly using a programming language, such as Python.
Python is one of the major programming languages in the world, especially in the Data ecosystem.

In order to do so, we will need to set up our Python environment with PostgreSQL drivers, then configure our Public Cloud Databases for PostgreSQL instances to accept incoming connections, and finally code in Python to perform a few example actions.

## Instructions

### Set up your Python environment

To interact with your PostgreSQL instance using Python, your development environment needs to be configured with:

- A compatible version of Python
- Psycopg2

Please follow the official [Psycopg - PostgreSQL database adapter for Pytho](https://www.psycopg.org/docs/). to get the latest information.

Once your Python environment is set up and you begin executing a **python --version** in your command line interface (CLI), you should see information about the version as shown below:

```python
laptop$ python3 --version
Python 3.13.5
```

In the same console, by typing a **pip list** check if **psycopg2** is correctly installed :

```python
laptop$  pip list | grep psycopg2
psycopg2               2.9.10
```

We are now ready to learn how to connect to our PostgreSQL instance!

### Connect with Python

#### Using psycopg2

Psycopg is the most popular PostgreSQL database adapter for the Python programming language.

In your Python environment, let's try a connection.

```python
import psycopg2

connection = psycopg2.connect(dbname='defaultdb', user='<user>', password='<password>', host='postgresql-xxxxxxxx-yyyyyyyy.database.cloud.ovh.net', port='20184', sslmode='require')

pid = connection.get_backend_pid()
cursor = connection.cursor()
cursor.execute(f'SELECT * FROM pg_stat_ssl WHERE pid = {pid}')
stat_ssl = cursor.fetchall()
print(stat_ssl)
```

After executing your Python code, result shown in the CLI should be like this:

```python
[(3538261, True, 'TLSv1.3', 'TLS_AES_256_GCM_SHA384', 256, None, None, None)]
```

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
