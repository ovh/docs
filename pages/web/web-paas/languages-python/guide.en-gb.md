---
title: Python
slug: languages-python
section: Languages
order: 4
---

**Last updated 26th March 2021**


## Objective  

Web PaaS supports deploying Python applications. Your application can use WSGI-based (Gunicorn / uWSGI) application server, Tornado, Twisted, or Python 3.5+ asyncio server.

## Supported

| **Grid** | 
|----------------------------------|  
|  2.7 |  
|  3.5 |  
|  3.6 |  
|  3.7 |  
|  3.8 |  
|  3.9 |  

## Support libraries

While it is possible to read the environment directly from your application, it is generally easier and more robust to use the [`platformshconfig`](https://github.com/platformsh/config-reader-python) pip library which handles decoding of service credential information for you.

## WSGI-based configuration

In this example, we use Gunicorn to run our WSGI application.  Configure the `.platform.app.yaml` file with a few key settings as listed below, a complete example is included at the end of this section.

1\. Specify the language of your application (available versions are listed above):


```yaml   
type: 'python:3.9'
```  


2\. Build your application with the build hook. Assuming you have your pip dependencies stored in `requirements.txt` and a `setup.py` at the root of your application folder to execute build steps:

```yaml
hooks:
  build: |
    pip install -r requirements.txt
    pip install -e .
    pip install gunicorn
```

   These are installed as global dependencies in your environment.

3\. Configure the command you use to start serving your application (this must be a foreground-running process) under the `web` section, e.g.:

```yaml
web:
  commands:
    start: "gunicorn -b 0.0.0.0:$PORT project.wsgi:application"
```

   This assumes the WSGI file is `project/wsgi.py` and the WSGI application object is named `application` in the WSGI file.

4\. Define the web locations your application is using:

```yaml
web:
  locations:
    "/":
      root: ""
      passthru: true
      allow: false
    "/static":
      root: "static/"
      allow: true
```

   This configuration asks our web server to handle HTTP requests at "/static" to serve static files stored in `/app/static/` folder while everything else is forwarded to your application server.

5\. Create any Read/Write mounts. The root file system is read only.  You must explicitly describe writable mounts.

```yaml
mounts:
    tmp:
        source: local
        source_path: tmp
    logs:
        source: local
        source_path: logs
```

   This setting allows your application writing files to `/app/tmp` and have logs stored in `/app/logs`.

Then, set up the routes to your application in `.platform/routes.yaml`.

```yaml
"https://{default}/":
  type: upstream
  upstream: "app:http"
```

Here is the complete `.platform.app.yaml` file:

```yaml
name: app
type: python:2.7

web:
  commands:
    start: "gunicorn -b $PORT project.wsgi:application"
  locations:
    "/":
      root: ""
      passthru: true
      allow: false
    "/static":
      root: "static/"
      allow: true

hooks:
  build: |
    pip install -r requirements.txt
    pip install -e .
    pip install gunicorn

mounts:
   tmp:
       source: local
       source_path: tmp
   logs:
       source: local
       source_path: logs

disk: 512
```

## Using the asyncio module

The above Gunicorn based WSGI example can be modified to use the Python 3.5+ asyncio module.

1\. Change the `type` to `python:3.6`.
2\. Change the start command to use asyncio.

```yaml
web:
  commands:
    start: "gunicorn -b $PORT -k gaiohttp project.wsgi:application"
```

3\. Add `aiohttp` as pip dependency in your build hook.

```yaml
hooks:
  build: |
    pip install -r requirements.txt
    pip install -e .
    pip install gunicorn aiohttp
```

## Accessing services

To access various [services](../configuration-services) with Python, see the following examples.  The individual service pages have more information on configuring each service.

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


## Project templates

A number of project templates for Python applications are available on GitHub.  Not all of them are proactively maintained but all can be used as a starting point or reference for building your own website or web application.


### Django 2  

<p>This template deploys the Django 2 application framework on Web PaaS, using the gunicorn application runner.  It also includes a PostgreSQL database connection pre-configured.</p>
<p>New projects should be built using Django 3, but this project is a reference for existing migrating sites.  Version 2 is in legacy support.</p>
  
#### Features
- Python 3.8<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/django2) on GitHub.

### Python 3 running UWSGI  

<p>This template provides the most basic configuration for running a custom Python 3.7 project.  It includes the `platformshconfig` package and demonstrates using it to connect to MariaDB and Redis.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.  The application runs through the UWSGI runner.</p>
<p>Python is a general purpose scripting language often used in web development.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/python3-uwsgi) on GitHub.

### Wagtail  

<p>This template builds the Wagtail CMS on Web PaaS, using the gunicorn application runner.  It includes a PostgreSQL database that is configured automatically, and a basic demonstration app that shows how to use it.  It is intended for you to use as a starting point and modify for your own needs.  You will need to run the command line installation process by logging into the project over SSH after the first deploy.</p>
<p>Wagtail is a web CMS built using the Django framework for Python.</p>
  
#### Features
- Python 3.8<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/wagtail) on GitHub.

### Flask  

<p>This template demonstrates building the Flask framework for Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage and Redis for caching.  The application starts as a bare Python process with no separate runner.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Flask is a lightweight web microframework for Python.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/flask) on GitHub.

### Django 3  

<p>This template deploys the Django 3 application framework on Web PaaS, using the gunicorn application runner.  It also includes a PostgreSQL database connection pre-configured.</p>
<p>Django is a Python-based web application framework with a built-in ORM.</p>
  
#### Features
- Python 3.8<br />  
- PostgreSQL 12<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/django3) on GitHub.

### Basic Python 3  

<p>This template provides the most basic configuration for running a custom Python 3.7 project.  It includes the `platformshconfig` package and demonstrates using it to connect to MariaDB and Redis.  It can be used to build a very rudimentary application but is intended primarily as a documentation reference.  The application starts as a bare Python process with no separate runner.</p>
<p>Python is a general purpose scripting language often used in web development.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/python3) on GitHub.

### Pyramid  

<p>This template builds Pyramid on Web PaaS.  It includes a minimalist application skeleton that demonstrates how to connect to a MariaDB server for data storage and Redis for caching.  It is intended for you to use as a starting point and modify for your own needs.</p>
<p>Pyramid is a web framework written in Python.</p>
  
#### Features
- Python 3.8<br />  
- MariaDB 10.4<br />  
- Redis 5.0<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/pyramid) on GitHub.

### Pelican  

<p>This template provides a basic Pelican skeleton.  Only content files need to be committed, as Pelican itself is downloaded at build time via the Pipfile.  All files are generated at build time, so at runtime only static files need to be served.</p>
<p>Pelican is a static site generator written in Python and using Jinja for templating.</p>
  
#### Features
- Python 3.8<br />  
- Automatic TLS certificates<br />  
- Pipfile-based build<br />  
 
[View the repository](https://github.com/platformsh-templates/pelican) on GitHub.

