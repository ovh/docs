---
title: MySQL - Connect with Python
excerpt: Connect to your Public Cloud Databases for MySQL using the Python programming language
slug: mysql/connect-python
section: MySQL - Guides
order: 050
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/mysql/connect-python/'
---

**Last updated 8th March 2022**

## Objective

Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance in operational conditions.

**This guide explains how to connect to a MySQL database instance with one of the world's most famous programming language: Python.**

You can find an example on the [Github examples repository](https://github.com/ovh/public-cloud-databases-examples/tree/main/databases/mysql/python/hello-world).

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- A [Public Cloud project](https://www.ovhcloud.com/pl/public-cloud/) in your OVHcloud account
- A MySQL database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/pl/publiccloud/databases/getting-started/) can help you to meet this requirement)
- [Configure your MySQL instance](https://docs.ovh.com/pl/publiccloud/databases/mysql/configure-mysql-instance/) to accept incoming connections
- A Python environment with a stable version and public network connectivity (Internet). This guide was made using Python 3.9.7.

## Concept

A MySQL instance can be managed through multiple ways.
One of the easiest, yet powerful, is to use a Command Line Interface (CLI), as shown in our guide : [Connect to MySQL with CLI](https://docs.ovh.com/pl/publiccloud/databases/mysql/connect-cli).

Another way is to interact directly using a programming language, such as Python.
Python is one of the major programming languages in the world, especially in the Data ecosystem.

In order to do so, we will need to set up our Python environment with MySQL drivers and finally code in Python to perform a few example actions.

## Instructions

### Set up your Python environment

To interact with your MySQL instance using Python, your development environment needs to be configured with:

- A compatible version of Python
- Mysql connector

Please follow the official [MySQL Connector/Python](https://dev.mysql.com/doc/connector-python/en/){.external}. to get the latest information.

Once your Python environment is set up and you begin executing a **python --version** in your command line interface (CLI), you should see information about the version as shown below :

```python
laptop$ python3 --version
Python 3.9.7
```

In the same console, by typing a **pip list**, check if **mysql-connector-python** is correctly installed :

```python
laptop$  pip list           
Package                Version
---------------------- -------
mysql-connector-python 8.0.27
pip                    20.3.4
protobuf               3.19.3
setuptools             52.0.0
wheel                  0.34.2
(...)
```

We are now ready to learn how to connect to our MySQL instance !

### Connect with Python

#### Using MySQL Connector

MySQL Connector/Python enables Python programs to access MySQL databases, using an API that is compliant with the [Python Database API Specification v2.0 (PEP 249)](http://www.python.org/dev/peps/pep-0249/){.external}.

In your Python environment, let's try a connection.

```python
# Note this example is valid for Python v2 and v3

from __future__ import print_function
import sys
import mysql.connector
from mysql.connector.constants import ClientFlag

config = {
    'user':'avnadmin',
    'password':'K93xxxxxxxxxxaBp',
    'host':'mysql-11xxxx20-o2xxxxb53.database.cloud.ovh.net',
    'port':'20184'
}

cnx = mysql.connector.connect(**config)
cur = cnx.cursor(buffered=False)
cur.execute("SHOW GLOBAL STATUS LIKE 'Ssl_cipher'")
print(cur.fetchone())
cur.close()
cnx.close()
```

After executing your Python code, result shown in the CLI should be like this :

```python
('Ssl_cipher', 'TLS_AES_256_GCM_SHA384')
```

If not, your CLI should give you more details about the issue, for example :

- *Authentication failed* : could be an error with your user login or password;
- *nodename nor servname provided, or not known* : could be a wrongly typed hostname;
- *Connection reset by peer* : usually due to connection without secure TLS mode. Use *tls=true* parameter.

## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
