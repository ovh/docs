---
title: Python
slug: languages-python
section: Languages
order: 4
---

**Last updated 2nd June 2022**


## Objective  

Python is a general purpose scripting language often used in web development.
You can deploy Python apps on Web PaaS using a server or a project such as [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/).

## Supported versions

| **Grid** | 
|----------------------------------|  
|  2.7 |  
|  3.5 |  
|  3.6 |  
|  3.7 |  
|  3.8 |  
|  3.9 |  
|  3.10 |  


## Usage example

### Run your own server

You can define any server to handle requests.
Once you have it configured, add the following configuration to get it running on Web PaaS:

1\. Specify one of the [supported versions](#supported-versions):

```yaml   
type: 'python:3.10'
```  

2\. Install the requirements for your app.

```yaml  
location=".platform.app.yaml"
dependencies:
    python3:
        pipenv: "2022.5.2"

hooks:
    build: |
              pipenv install --system --deploy
``` 
3\. Define the command to start your web server:


```yaml 
location=".platform.app.yaml"
web:
    # Start your app with the configuration you define
    # You can replace the file location with your location
    commands:
        start: python server.py
```

### Use uWSGI

You can also use [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/) to manage your server.
Follow these steps to get your server started.

1\. Specify one of the [supported versions](#supported-versions):



```yaml   
type: 'python:3.10'
```  


2\. Define the conditions for your web server:


```yaml 
location=".platform.app.yaml"
web:
    upstream:
        # Send requests to the app server through a unix socket
        # Its location is defined in the SOCKET environment variable
        socket_family: "unix"

    # Start your app with the configuration you define
    # You can replace the file location with your location
    commands:
        start: "uwsgi --ini conf/uwsgi.ini"

    locations:
        # The folder from which to serve static assets
        "/":
            root: "public"
            passthru: true
            expires: 1h
```

3\. Create configuration for uWSGI such as the following:


```ini 
location="config/uwsgi.ini"
[uwsgi]
 # UNIX socket to use to talk with the web server
 # Uses the variable defined in the configuration in step 2
 socket = $(SOCKET)
 protocol = http

 # the entry point to your app
 wsgi-file = app.py
```

   Replace `app.py` with whatever your file is.

4\. Install the requirements for your app.
```yaml  
   dependencies:
    python3:
        pipenv: "2022.5.2"

hooks:
    build: |
              pipenv install --system --deploy
```
5\. Define the entry point in your app:


```python
# You can name the function differently and pass the new name as a flag
# start: "uwsgi --ini conf/uwsgi.ini --callable <NAME>"
def application(env, start_response):

    start_response('200 OK', [('Content-Type', 'text/html')])
    return [b"Hello world from Web PaaS"]
```

## Package management

Your app container comes with pip pre-installed.
To add global dependencies (packages available as commands),
add them to the `dependencies` in your [app configuration](../configuration-app):

```yaml 
location=".platform.app.yaml"
dependencies:
    python3:
        <PACKAGE_NAME>: <PACKAGE_VERSION>
```

```yaml  
dependencies:
    python3:
        pipenv: "2022.5.2"

hooks:
    build: |
              pipenv install --system --deploy
```
## Connect to services

The following examples show how to access various [services](../configuration-services) with Python.
For more information on configuring a given service, see the page for that service.

> [!tabs]      
> Elasticsearch     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/elasticsearch !}  
>> ```     
> Kafka     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/kafka !}  
>> ```     
> Memcached     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/memcached !}  
>> ```     
> MongoDB     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/mongodb !}  
>> ```     
> MySQL     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/mysql !}  
>> ```     
> PostgreSQL     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/postgresql !}  
>> ```     
> RabbitMQ     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/rabbitmq !}  
>> ```     
> Redis     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/redis !}  
>> ```     
> Solr     
>> ``` python     
>> {!> web/web-paas/static/files/fetch/examples/python/solr !}  
>> ```     

## Configuration reader
While you can read the environment directly from your app, you might want to use the
[`platformshconfig` library](https://github.com/platformsh/config-reader-python). 
It decodes service credentials, the correct port, and other information for you.

## Project templates


### Django 2 

![image](images/django2.png)

<p>This template deploys the Django 2 application framework on Web PaaS, using the gunicorn application runner. It also includes a PostgreSQL database connection pre-configured.</p>
<p>New projects should be built using Django 3, but this project is a reference for existing migrating sites. Version 2 is in legacy support.</p>
  
#### Features
- Python 3.8<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/django2) on GitHub.

### Pelican 

![image](images/pelican.png)

<p>This template provides a basic Pelican skeleton. Only content files need to be committed, as Pelican itself is downloaded at build time via the Pipfile. All files are generated at build time, so at runtime only static files need to be served.</p>
<p>Pelican is a static site generator written in Python and using Jinja for templating.</p>
  
#### Features
- Python 3.8<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/pelican) on GitHub.

### Wagtail 

![image](images/wagtail.png)

<p>This template builds the Wagtail CMS on Web PaaS, using the gunicorn application runner. It includes a PostgreSQL database that is configured automatically, and a basic demonstration app that shows how to use it.  It is intended for you to use as a starting point and modify for your own needs. You will need to run the command line installation process by logging into the project over SSH after the first deploy.</p>
<p>Wagtail is a web CMS built using the Django framework for Python.</p>
  
#### Features
- Python 3.8<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wagtail) on GitHub.

### Flask 

![image](images/flask.png)

<p>This template demonstrates building the Flask framework for Web PaaS. It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage and Redis for caching. The application starts as a bare Python process with no separate runner. It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Flask is a lightweight web microframework for Python.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/flask) on GitHub.

### Django 3 

![image](images/django2.png)

<p>This template deploys the Django 3 application framework on Web PaaS, using the gunicorn application runner. It also includes a PostgreSQL database connection pre-configured.</p>
<p>Django is a Python-based web application framework with a built-in ORM.</p>
  
#### Features
- Python 3.8<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/django3) on GitHub.

### Pyramid 

![image](images/pyramid.png)

<p>This template builds Pyramid on Web PaaS. It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage and Redis for caching.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Pyramid is a web framework written in Python.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/pyramid) on GitHub.

### Basic Python 3 

![image](images/basicpython3.png)

<p>This template provides the most basic configuration for running a custom Python 3.7 project.  It includes the `platformshconfig` package and demonstrates using it to connect to MariaDB and Redis. It can be used to build a very rudimentary application but is intended primarily as a documentation reference. The application starts as a bare Python process with no separate runner.</p>
<p>Python is a general purpose scripting language often used in web development.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/python3) on GitHub.

### Python 3 running UWSGI 

![image](images/python.png)

<p>This template provides the most basic configuration for running a custom Python 3.7 project. It includes the `platformshconfig` package and demonstrates using it to connect to MariaDB and Redis. It can be used to build a very rudimentary application but is intended primarily as a documentation reference. The application runs through the UWSGI runner.</p>
<p>Python is a general purpose scripting language often used in web development.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/python3-uwsgi) on GitHub.

