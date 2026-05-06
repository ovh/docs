---
title: "Web Cloud Databases - Connecting to a database"
excerpt: "Find out how to connect to a database on your Web Cloud Databases solution"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

You can view the content of your database via an interface. There are several ways to connect to it.

**Find out how to connect to your database on your database server.**

## Requirements

- A [Web Cloud Databases instance](/links/web/databases) (included in a [Performance web hosting plan](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigation path:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Select your database service

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instructions

> [!primary]
>
> [Web Cloud Databases](/links/web/databases) solutions do not provide access to the database management system itself, but to the databases hosted on it.
>
> - There is no super user "root" access.
> - Generic SQL commands work normally, and software such as HeidiSQL, SQuirreL SQL or Adminer is fully compatible.
>

### Connect to a MySQL or MariaDB database

> [!primary]
>
> Since MariaDB is a fork of MySQL, the commands are exactly the same for both types of databases.
>

#### Connection via OVHcloud phpMyAdmin

<!-- CP-STEPS-START:mysql-phpmyadmin-tabs -->
Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Retrieve the following connection information:
>>
>> - **Server (hostname) and port:** visible in the `General information`{.action} tab, `Login information` section.
>> - **Username:** visible in the `Users and rights`{.action} tab.
>> - **Password:** the password associated with the user. If you have forgotten it, go to the `Users and rights`{.action} tab, click `...`{.action} to the right of the user concerned, then `Change password`{.action}.
>>
>> > [!warning]
>> >
>> > If you change the password for a database user, all applications/websites that access this database must be updated accordingly.
>>
> **Step 3**
>>
>> In the `General information`{.action} tab, locate the **Database administration** section and click the phpMyAdmin link under **User interface**.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}
>>
> **Step 4**
>>
>> On the phpMyAdmin login page, enter the information retrieved in step 2:
>>
>> ![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}
>>
>> - **Server:** enter the *hostname* followed by the *port number*, separated by "**:**" or a "**space**". For example: **aaXXXXX-XXX.eu.clouddb.ovh.net:12345**.
>> - **Username:** enter the *username*.
>> - **Password:** enter the *password*.
<!-- CP-STEPS-END:mysql-phpmyadmin-tabs -->

If the connection is successful, the following page will appear.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **In case of error:**
>
> - Error #1045 means the credentials are incorrect. Check your username and/or password.
> - Error #2005 means the server name should be checked, and whether it is functioning correctly.

#### Connection to the database outside the Control Panel

> [!warning]
>
> If you are using a "Web Cloud Databases"/"Private SQL" solution, remember to authorise your IP using the guide on [configuring your database server](/pages/web_cloud/web_cloud_databases/configure-database-server#gerer-vos-acces).

<!-- CP-STEPS-START:mysql-outside-cp-tabs -->
Click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Retrieve the following connection information:
>>
>> - **Server (hostname):** visible in the `General information`{.action} tab, **"Database administration"** section, "Hostname" in the **SQL** part.
>> - **Port:** visible in the same location, "Port" in the **SQL** part.
>> - **Username:** visible in the `Users and rights`{.action} tab.
>> - **Password:** the password associated with the user concerned.
>> - **Database name:** visible in the `Databases`{.action} tab.
<!-- CP-STEPS-END:mysql-outside-cp-tabs -->

**Click on the connection method of your choice to view the content.**

/// details | Command line connection

```bash
mysql --host=server --user=user --port=port --password=password database_name
```

///

/// details | PHP script connection

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Software connection (SQuirreL SQL)

> [!primary]
>
> In our example, we use the open-source software SQuirreL, but other interfaces such as HeidiSQL or Adminer are fully compatible.

- Launch SQuirreL SQL and click on `Aliases`{.action}, then on `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Fill in the fields below and confirm with the `OK`{.action} button:
    - **Name**: Choose a name
    - **Driver**: Choose "MySQL Driver"
    - **URL**: Enter the server address and port in the form jdbc:mysql://server:port
    - **User Name**: Enter the username
    - **Password**: Enter the password

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Confirm again with the `Connect`{.action} button

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

You are now connected to your database:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

/// details | phpMyAdmin connection

You can use your own phpMyAdmin interface to explore the content of your database. To do this, install phpMyAdmin on your own server or web hosting plan. During installation, make sure you correctly configure the information for your database server and desired database so that phpMyAdmin can connect to it.

///

### Connect to a PostgreSQL database

<!-- CP-STEPS-START:postgresql-tabs -->
Click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Retrieve the following connection information:
>>
>> - **Server (hostname):** visible in the `General information`{.action} tab, **"Database administration"** section, "Hostname" in the **SQL** part.
>> - **Port:** visible in the same location, "Port" in the **SQL** part.
>> - **Username:** visible in the `Users and rights`{.action} tab.
>> - **Password:** the password associated with the user concerned.
>> - **Database name:** visible in the `Databases`{.action} tab.
<!-- CP-STEPS-END:postgresql-tabs -->

**Click on the connection method of your choice to view the content.**

/// details | Command line connection

```bash
psql --host=server --port=port --user=user --password=password database_name
```

///

/// details | PHP script connection

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Software connection (SQuirreL SQL)

> [!primary]
>
> In our example, we use the open-source software SQuirreL, but other interfaces such as HeidiSQL or Adminer are fully compatible.

- Launch SQuirreL SQL and click on `Aliases`{.action}, then on `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Fill in the fields below and confirm with the `OK`{.action} button:
    - **Name**: Choose a name
    - **Driver**: Choose "PostgreSQL"
    - **URL**: Enter the server address and port in the form jdbc:postgresql://server:port/database
    - **User Name**: Enter the username
    - **Password**: Enter the password

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Confirm again with the `Connect`{.action} button

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

You are now connected to your database:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

## Go further

[Web Hosting - My database is full, what should I do?](/pages/web_cloud/web_hosting/sql_overquota_database)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
