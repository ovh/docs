---
title: PostgreSQL - Tutoriel - Installer Wagtail et le connecter au service OVHcloud Managed PostgreSQL (EN)
slug: postgresql/tutorial-connect-wagtail-to-managed-postgresql
excerpt: "Find out how to install Wagtail and connect it to an OVHcloud Managed PostgreSQL service"
section: PostgreSQL - Tutoriels
order: 020
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/postgresql/tutorial-connect-wagtail-to-managed-postgresql/'
---


**Last updated 11th February 2022**

## Objective

[Wagtail](https://wagtail.org/){.external} is a free and open source content management system (CMS) written in Python. It is popular amongst websites using the [Django framework](https://www.djangoproject.com/){.external}.

In this tutorial, we are going to show you how to install [Wagtail](https://wagtail.org/){.external} and how to connect it to the OVHcloud managed [PostgreSQL](https://www.postgresql.org/){.external} [database service](https://www.ovhcloud.com/fr-ca/public-cloud/postgresql/).

> [!warning]
>
> OVHcloud provides services for which you are responsible for their configuration and management. You are therefore responsible for their proper functioning.
>
> This tutorial is designed to help you as much as possible with common tasks. If you are having difficulty performing these actions, please contact a specialized service provider and/or discuss it with our community of users on <https://community.ovh.com/>. OVHcloud can't provide you with technical support in this regard.
>

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- A [Public Cloud project](https://www.ovhcloud.com/fr-ca/public-cloud/) in your OVHcloud account.
- An up and running Public Cloud Database for PostgreSQL.
- A Python environment with a stable version and public network connectivity (Internet). This tutorial was made using Python 3.9.7.

> [!primary]
>
> Wagtail supports Python 3.7, 3.8, 3.9 and 3.10.
>  

## Configure your PostgreSQL instance to accept incoming connections

Before making a connection, we need to verify that our PostgreSQL instance is correctly configured.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=G) and open your `Public Cloud`{.action} project. Click on `Databases`{.action} in the left-hand navigation bar and select your PostgreSQL instance.

### Step 1: Verify your user roles and password

Select the `Users`{.action} tab. Verify that you have a user with sufficient rights and a configured password. If you don't remember the user's password, you can either create a new user or regenerate the password of an existing user. Be careful! By doing so you will need to update all the places where you already use this user/password pair.

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
So far, **user grants and privileges management are not supported via the OVHcloud Control Panel or the OVHcloud API**.

Please read the [official PostgreSQL documentation](https://www.postgresql.org/docs/current/database-roles.html){.external} to select the right roles for your use case.


In our example, we will simply reset the **avnadmin** password.

Once created or updated, the user has to be ready and have the status "Enabled" in the Control Panel.

![User ready](images/user_enabled.png){.thumbnail}

### Step 2: Authorise incoming connections from the PostgreSQL client

In this step, select the `Authorised IP's`{.action} tab (Access Control List).
By default, a Public Cloud Database does not accept any form of connection from the outside world.
This way we can help prevent intrusive connection attempts.

Click to authorise a new IP, and enter the previously found IP of your Python environment. In our case we will enter 109.190.200.59.

![Add an IP](images/ip_authorize.png){.thumbnail}

> [!primary]
>
> If you want to allow any connections from the outside, you can enter the IP 0.0.0.0/0. Please use it carefully. Every IP will be authorised.
>


> [!primary]
>
> Before installing Wagtail, it is necessary to install the libjpeg and zlib libraries, which provide support for working with JPEG, PNG and GIF images (via the Python Pillow library).
>

## Instructions

### Create and activate a virtual environment

```bash
$ python3 -m venv mysite/env
$ source mysite/env/bin/activate
```

> [!primary]
>
> If you’re using version control (e.g. git), mysite will be the directory for your project. The env directory inside of it should be excluded from any version control.
>

### Install Wagtail

Please follow the [official documentation](https://docs.wagtail.org/en/stable/getting_started/tutorial.html) to install Wagtail.

Below, you find a resume of the installation process

Use pip, which is packaged with Python, to install Wagtail and its dependencies:

```bash
$ pip install wagtail
```

### Generate your site

Wagtail provides a start command similar to django-admin startproject. Running wagtail start mysite in your project will generate a new mysite folder with a few Wagtail-specific extras, including the required project settings, a “home” app with a blank HomePage model and basic templates, and a sample “search” app.

Because the folder mysite was already created by venv, run wagtail start with an additional argument to specify the destination directory:

```bash
$ wagtail start mysite mysite
```

### Install project dependencies

```bash
$ cd mysite
$ pip install -r requirements.txt
```

### Create the database

If you keep wagtail on default settings, a local SQLlite database will be used inside the project directory. It’s fine for a PoC but not recommended for production, for multiple reasons (performance, security, resiliency, ...). Here we will configure Wagtail to use a Public Cloud Database for PostgreSQL as a backend.

Before creating the database, let's edit the `mysite/mysite/settings/base.py` file and adapt the connection parameters to the database.

The useful parameters, available in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) are:

- The db Host, the db Port
    - Get them from the "General Information tab".
- The db Name
    - Get it from the "Databases" tab, usually "defaultdb".
- The db User
    - Get it from the "Users" tab, usually "avnadmin".
- The db Password
    - Get it after you reset it.



```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': <db_name>,
        'USER': <username>,
        'PASSWORD': <password>,
        'HOST': <host>,
        'PORT': <port>,
        'OPTIONS': {
          'sslmode': 'require'
        }
    }
}
```

Then create the database:

```bash
$ python manage.py migrate
```

This command ensures that the tables in your database are matched to the models in your project. Every time you alter your model (e.g. you may add a field to a model) you will need to run this command in order to update the database.

### Create an admin user

When logged into the admin site, a superuser has full permissions and is able to view/create/manage the database.

```bash
$ python manage.py createsuperuser
```

### Start the server

```bash
$ python manage.py runserver
```

If everything worked, `http://127.0.0.1:8000` will show you a welcome page:

![Wagtail welcome page](images/postgresql_tuto_02_connect_wagtail_to_managed_postgresql-2022021414341293.png){.thumbnail}

You can now access the administrative area at `http://127.0.0.1:8000/admin`:

![Wagtail admin page](images/postgresql_tuto_02_connect_wagtail_to_managed_postgresql-20220215093836579.png)

### Cleaning up

To clean your Wagtail, make sure it is closed by pressing `CTRL+C`{.action} in the terminal you used to launch it, then delete your installation folder.

```sh
rm -rf /home/my/app/path/my-wagtail/
```

To clean your PostgreSQL, use the OVHcloud Control Panel to delete your managed PostgreSQL service:

![delete service menu](images/postgresql-tuto-01-connect-strapi-to-managed-postgresql15.png){.thumbnail}

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
