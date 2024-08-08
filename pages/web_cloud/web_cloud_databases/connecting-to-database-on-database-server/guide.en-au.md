---
title: "Connecting to a database on your database server"
excerpt: "Find out how to log in to your database"
updated: 2023-11-07
---

## Objective

You can access your database’s content via an interface. There are several ways you can connect to it.

**This guide explains how to connect to your database on your database server.**

## Requirements

- A [Web Cloud Databases instance](/links/web/databases){.external} (included in a [Performance web hosting plan](/links/web/hosting)).
- access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!primary]
>
> Please note that the [Web Cloud Databases](/links/web/databases){.external} solutions do not give access to the database management system, but to the databases hosted on it.
> <br> - Please note that there is no "root" access.
> <br> - Generic SQL commands work normally, and software such as HeidiSQL, SQuirreL or Adminer is fully compatible.
> 

### Logging in to a MySQL or MariaDB database 

> [!primary]
>
> Since MariaDB is a derivative of MySQL, the commands are exactly the same for these 2 types of databases.
> 

####  With OVHcloud phpMyAdmin

Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud` section. Click on the `Web Cloud Databases`{.action} tab in the left-hand column, then select the name of your database server.

In the `General information` tab, you will find the access link to phpMyAdmin in the **“Database administration”** box, under “User interface”.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}

You will land on the phpMyAdmin login page.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}

Enter the following information to connect to your database:

- **Server:** Enter the *hostname* of your database server, followed by its *port number*. The *port number* must be separated from the *hostname* by a “**space**” or “**:**”. For example, if the *hostname* is **aaXXXXX-XXX.eu.clouddb.ovh.net** and the *port number* is **12345**, then you would type **aaXXXXX-XXX.eu.clouddb.ovh.net:12345** or **aaXXXXX-XXX.eu.clouddb.ovh.net 12345**. To find the *hostname* and *port number* of your Web Cloud Databases server, log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud` section. Click on the `Web Cloud Databases`{.action} tab in the left-hand column, then select the name of your database server. On the `General information` page that appears, you will find the *hostname* and the *port number* in the `Login information` box.

- **User:** Enter the *username* of your database server. To find the *username* of your database, log in to your [OVHcloud Control Panel](/links/manager){.external} and go to the `Web Cloud` section. Click on the `Web Cloud Databases`{.action} tab in the left-hand column, then select the name of your database server. On the page that opens, click on the `Users and rights`{.action} tab. There, you will find a table listing all of the users created on your Web Cloud Databases solution.

- **Password:** Enter the *password* associated with the *username* concerned. If you do not have the *password* associated with this *username*, log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud` section. Click on the `Web Cloud Databases`{.action} tab in the left-hand column, then select the name of your database server. On the page that opens, click on the `Users and rights`{.action} tab. Click the `...`{.action} button to the right of *the user* concerned to `Change password`{.action}.

> [!warning]
>
> If you change a database user password, all application and websites that access the database must be updated accordingly.
>

If the connection succeeds, the next page of phpMyAdmin will appear.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **In case of error :**
> <br> - Error #1045, it means that the identification is incorrect. You will need to check your username and/or password.
> <br> - Error #2005, we recommend checking the server name, and whether it is working properly.
>

#### Connecting to the database outside the Control Panel

> [!warning]
>
> If you use a `Web Cloud Databases` or `Private SQL` service, do not forget to authorise your IP address using the guide on [Configuring your database server](/pages/web_cloud/web_cloud_databases/configure-database-server).
>

To connect to your database, please ensure that you have the following information:

- **Server**: the host name of your server is visible in the `General information` tab of your database server, in the **Database administration** box under “Host name” in the **SQL** section.
- **User**: The user name you created in the `Users and rights` tab of your database server.
- **Password**: The password associated with the connecting user.
- **Port**: The port is visible in the `General information` tab of your database server, in the **Database administration** box, under “Port” in the **SQL** section.
- **Database Name:**: The databases are listed in the `Databases` tab of your database server.

##### 1\. Connecting via the command line

```bash
mysql --host=server --user=username --port=port --password=password database_name
```

##### 2\. Connecting via PHP script

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

##### 3\. Connecting via software (SQuirreL)

> [!primary]
>
> In our example we use the open source software SQquirreL, but other interfaces like HeidiSQL or Adminer are fully compatible. 

- Launch SQuirreL and click `Aliases`{.action}, then `+`{.action}

![launch SQuirreL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Fill in the fields below and confirm by clicking `OK`{.action}:
    - **Name**: Select a name.
    - **Driver**: Choose "MySQL Driver".
    - **URL**: Enter the server address and port as jdbc:mysql://server:port.
    - **User Name**: Enter the username.
    - **Password**: Enter the password.

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Confirm again with the `Connect`{.action} button.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

You are now connected to your database.

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

##### 4\. Connecting with phpMyAdmin

You can use your own phpMyAdmin interface to access the contents of your database. To do this, install phpMyAdmin on your own server or Web Hosting plan. During this installation, make sure that the information for your database server and database is correctly configured so that phpMyAdmin can connect to it.

### Logging in to a PostgreSQL database 

To connect to your database, please ensure that you have the following information:

- **Server**: the host name of your server is visible in the `General information` tab of your database server, in the **Database administration** box under “Host name” in the **SQL** section.
- **User**: The user name you created in the `Users and rights` tab of your database server.
- **Password**: The password associated with the connecting user.
- **Port**: The port is visible in the `General information` tab of your database server, in the **Database administration** box, under “Port” in the **SQL** section.
- **Database name**: The databases are listed in the `Databases` tab of your database server.

#### Connecting via the command line

```bash
psql --host=server --port=port --user=username --password=password database_name
```

#### Connecting via PHP script

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

#### Connecting via software (SQuirreL)

> [!primary]
>
> In our example we use the open-source software SQuirreL, but other interfaces like HeidiSQL or Adminer are fully compatible.

- Launch SQuirreL and click `Aliases`{.action}, then `+`{.action}

![launch SQuirreL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Fill in the fields below and confirm by clicking `OK`{.action}:
    - **Name**: Select a name.
    - **Driver**: Choose "PostgreSQL".
    - **URL**: Enter the server address and port as jdbc:postgresql://server:port/database.
    - **User Name**: Enter the username.
    - **Password**: Enter the password.

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Confirm again with the `Connect`{.action} button.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

You are now connected to your database.

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).