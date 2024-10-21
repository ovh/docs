---
title: "Troubleshooting common database errors"
excerpt: "Find out how to diagnose the most common cases of database errors"
updated: 2024-09-26
---

## Objective

Your database usage may result in anomalies on your website or error messages in the [OVHcloud Control Panel](/links/manager), as well as on the [phpMyAdmin interface](/pages/web_cloud/web_hosting/sql_create_database).

**Find out how to troubleshoot database errors with OVHcloud Web Hosting plans.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovh.co.uk/web-hosting/)
- access to the [OVHcloud Control Panel](/links/manager)
- an OVHcloud database service: [Start SQL](/links/web/hosting-options-startsql) or [Web Cloud Databases](/links/web/databases)

## Instructions

### "Error establishing a database connection"

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Check ongoing incidents

First, check on [https://web-cloud.status-ovhcloud.com/](https://web-cloud.status-ovhcloud.com/) whether your data centre, hosting cluster or Web Cloud Databases server is affected by an incident on the OVHcloud infrastructure.

> [!primary]
>
> You can find these details in your [OVHcloud Control Panel](/links/manager), in the `Web Cloud`{.action} section:
>
> - To find your Web Hosting plan's data centre and filer (file server), open `Hosting plans`{.action} and select the plan concerned. The information is available in the `General information`{.action} tab.
> - To find the **cluster** of servers on which your hosting is located, click on the `FTP-SSH`{.action} tab. The cluster identifier is part of the name of your `FTP server`.
> - To retrieve the name of your **Web Cloud Databases** server, click on `Web Cloud Databases`{.action} in the left-hand menu, then on the relevant service. You can find the information concerned under the heading `Host name` in the `SQL` part of the `General information`{.action} tab.
>

#### Verify login credentials for your database <a name="config_file"></a>

Log in to the file storage space of your Web Hosting plan by [FTP](/pages/web_cloud/web_hosting/ftp_connection) and find your website’s configuration file (for example, a WordPress website will have a **wp-config.php** file located in the folder containing your website).

> [!warning]
>
> The name and content of the file relevant for database connection information depends on the CMS used for the website. This does not lie in the scope of responsibility of OVHcloud.
>
> We recommend that you contact the publisher of the [CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) concerned or a [specialised service provider](/links/partner) if necessary. We will not be able to assist you with this.
>

Then check the **exact** match between the login details for [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#accessing-the-phpmyadmin-interface) and the login details for your website’s configuration file.

If necessary, change your [database password](/pages/web_cloud/web_hosting/sql_change_password).

#### Example for WordPress

If your website displays an **"Error establishing a database connection"** message and your hosting cluster is not affected by an [incident](https://web-cloud.status-ovhcloud.com/), log in to the [FTP storage space](/pages/web_cloud/web_hosting/ftp_connection) of your hosting and open the directory containing your website (by default, this is the "www" folder).

If this is a WordPress site, open the file "wp-config.php".

```php
define('DB_NAME', 'my_database');
 
/** MySQL database username */
define('DB_USER', 'my_user');
 
/** MySQL database password */
define('DB_PASSWORD', 'my_password');
 
/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```

In your [OVHcloud Control Panel](/links/manager), open the `Hosting plans`{.action} section and click on the `Databases`{.action} tab. Check the correspondence between the elements displayed and those in the file `wp-config.php`:

- **my_database** must match what is noted as `Database name`;
- **my_user** must match what is noted as `User name`;
- **my_password** corresponds to your [database password](/pages/web_cloud/web_hosting/sql_change_password);
- **my_server.mysql.db** must match the `Server address`.

> [!primary]
>
> If you are unable to restore access to your website as a result of these changes, [back up your database](/pages/web_cloud/web_hosting/sql_database_export) then [restore it to an earlier date](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#restoring-a-specific-backup) from your [OVHcloud Control Panel](/links/manager).
>
> Contact a [specialised service provider](/links/partner) if necessary. We will not be able to assist you with this.
>

### You have exceeded the authorised quota

You have received an email notification stating that the amount of data on your database exceeds the authorised limit. Your database has therefore been switched to read-only mode. This will prevent your website from being modified.

![database-overquota-notification-email](/pages/assets/screens/email-sending-to-customer/databases/overquota-db.png){.thumbnail}

There are three ways you can unblock your database in this situation.

#### Method 1: Upgrade your subscription

If you have a **Starter** or **Personal** Web Hosting plan, we recommend that you switch to the [high-performance offer](https://www.ovh.co.uk/web-hosting/). This subscription change will increase the size of your database which will automatically reopen it. This method is the simplest and does not require any particular technical expertise.

> [!warning]
>
> The increase of the size of your database may be linked to a malfunction in your website's internal code.
>
> In this case, changing your Web Hosting plan would be ineffective, as your database will continue to fill up.
>
> If you notice a sudden increase in the size of your database, or if you have a "blog" type site that normally does not use much data, we advise you to contact a [specialised service provider](/links/partner) as soon as possible. We will not be able to provide you with support on this matter.
>

To upgrade your subscription, log in to your [OVHcloud Control Panel](/links/manager) and open `Hosting plans`{.action} in the left-hand menu. Select the relevant service and click on the `...`{.action} button in the `Solution` section of the right-hand info box, then select `Upgrade`{.action}.

If you are already subscribing to a **Performance** offer, refer to [method 2](#method2).

#### Method 2: Migrate your data to a larger database <a name=""method2"></a>

You can also migrate your data to a new database:

- Order a larger [database service](https://www.ovh.co.uk/cloud/cloud-databases/) if necessary, then [create the new database](/pages/web_cloud/web_hosting/sql_create_database);
- [Duplicate the content of the old database](/pages/web_cloud/web_hosting/copy_database) to the new database **or** perform an [export of your data](/pages/web_cloud/web_hosting/sql_database_export), then [import your data](/pages/web_cloud/web_hosting/sql_importing_mysql_database) in the new database;
- Integrate the credentials of the new database into the [configuration file](#config_file) of your site.

> [!primary]
>
> If you have a **Performance** Web Hosting plan, you can also [activate a free Web Cloud Databases service](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

#### Method 3: Delete unnecessary data

Once you have made a [database backup](/pages/web_cloud/web_hosting/sql_database_export), log in to your [phpMyAdmin interface](/pages/web_cloud/web_hosting/sql_create_database#accessing-the-phpmyadmin-interface) to delete any unnecessary data using the Drop, Delete and Truncate commands.

Then update the data usage from the `Databases`{.action} tab of the relevant service. Click on the `...`{.action} button next to the database concerned, then select `Recalculate the quota`{.action}.

> [!warning]
>
> This operation requires advanced technical knowledge. We recommend contacting a [specialised service provider](/links/partner) if you need to use this method. We will not be able to assist you with this.
>

#### Method 4: Optimise your database

To optimise your database, follow the instructions in our guide "[Configuring your database server](/pages/web_cloud/web_cloud_databases/configure-database-server#managing-your-databases)". Then update the data usage from the `Databases`{.action} tab of the relevant service. Click on the `...`{.action} button next to the database concerned, then select `Recalculate the quota`{.action}.

> [!warning]
>
> If the advice on how to optimise your database is not sufficient to unblock the access to your website, we recommend you to contact our [community](/links/community) or [OVHcloud partners](/links/partner). We will not be able to assist you in this regard.
>

### RAM overflows (Web Cloud Databases only)

The following message in the `Web Cloud Databases`{.action} section of your [OVHcloud Control Panel](/links/manager) indicates that your [Web Cloud Databases](https://www.ovh.co.uk/cloud/cloud-databases/) server has consumed too much resources on the OVHcloud infrastructure:

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

In this situation, you can increase the [amount of RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#modifying-the-database-server-solution) available from the `Web Cloud Databases`{.action} section of your [OVHcloud Control Panel](/links/manager). In the `General information`{.action} tab, click on the `...`{.action} in the `RAM` section.

> [!warning]
>
> To increase the amount of RAM, the database needs to be a standalone service and not one of those included with a Performance web hosting plan. If you want to increase the amount of RAM of a database included in the [Performance offers](/links/web/hosting-performance-offer){.external}, you first need to detach it.
> 
> To detach the database, log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action}. Click `Hosting plans`{.action}, then choose the web hosting plan that has the database activated.
>
> In the `Configuration` box, click the `...`{.action} button to the right of `Web Cloud Databases`, then click the `Detach`{.action} button.
> 

You can also optimise your database by following the instructions of our guide "[Configuring your database server](/pages/web_cloud/web_cloud_databases/configure-database-server#managing-your-databases)".

> [!primary]
>
> If you experience any difficulties in decreasing the use of resources on your database server, please contact our [community of users](/links/community) or [OVHcloud partners](/links/partner). We will not be able to assist you with this.
>

### Database import errors

#### User access denied to database

>
> **"#1044 - Access denied for user to database"**
>

This error message means that the database you are trying to import contains elements that are not authorised on the OVHcloud shared infrastructure.

First make sure that your database is empty from the `Databases`{.action} tab of the relevant service. Click on the `...`{.action} button next to the database concerned, then select `Recalculate the quota`{.action}. (If you need to save the existing data first, follow the [backup instructions](/pages/web_cloud/web_hosting/sql_database_export), then delete the data and relaunch the import operation.)

You can also tick the `Empty the current database`{.action} box just before [launching the import](/pages/web_cloud/web_hosting/sql_importing_mysql_database#import-your-own-backup-via-your-control-panel):

![import-empty-current-db](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}

If necessary, contact our [user community](/links/community) or [OVHcloud partners](/links/partner) for more information. We will not be able to assist you in correcting this issue.

> [!success]
>
> You cannot have a "**trigger**" in your database’s import script on OVHcloud shared hosting servers. In this situation, import your database to a [Web Cloud Databases server](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

The following query is also not allowed:

```sql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
```

Use this line instead:

```sql
USE `Database-Name`;
```

Replace `Database-Name` with the name of the database as displayed in your [OVHcloud Control Panel](/links/manager).

#### "MySQL server has gone away"

>
> **"404 ERROR MySQL server has gone away"**
>

This error message appears when [importing a database](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#importing-a-local-backup) on a [Web Cloud Databases server](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). I most cases, it is caused by the quantity of data to be imported being too large or by non-optimised SQL queries in the import script.

To resolve this issue, you can use the following methods:

- Increase the [amount of RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#modifying-the-database-server-solution): go to the [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) server concerned in the `Databases` section of your [OVHcloud Control Panel](/links/manager). Then click on the `...`{.action} button in the `RAM` section and select `Change the amount of RAM`{.action}.

- Split your database in order to import it through multiple operations instead of one. (For any questions on the necessary steps, contact our [community](/links/community) or [OVHcloud partners](/links/partner). We will not be able to assist you with this.)

- [Optimise your database](/pages/web_cloud/web_cloud_databases/configure-database-server#managing-your-databases), then repeat the export/import operations.

### Unable to access phpMyAdmin

#### "Access denied for user"

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

This error message may appear when connecting to your database by [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#accessing-the-phpmyadmin-interface). It indicates that the credentials entered are incorrect.

![access_denied_for_user](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-1045.png){.thumbnail}

In this situation, [check the credentials entered](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#instructions) and change your [database password](/pages/web_cloud/web_hosting/sql_change_password) if necessary.

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

The maximum number of active connections for databases delivered with a shared hosting ([Start SQL](https://www.ovh.co.uk/cloud/cloud-databases/)) is **30**.

This number increases to **200** for the [Web Cloud Databases service](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). (This setting can be modified in the `Configuration`{.action} section of your database service.)

A "Too many connections" error when [connecting to phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#accessing-the-phpmyadmin-interface) appears, if this maximum number of connections is exceeded.

In this situation, you will need to [optimise your databases](/pages/web_cloud/web_cloud_databases/configure-database-server#managing-your-databases) in order to reduce the number of active connections.

> [!warning]
>
> If you have any questions about the changes you need to make in order to reduce the number of active connections to your database, please contact our [community](/links/community) or [OVHcloud partners](/links/partner). We will not be able to assist you in this regard.
>

### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

This error message appears when [connecting to phpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) if the server name entered is incorrect.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Check the server name for the relevant database service in your [OVHcloud Control Panel](/links/manager).

> [!success]
>
> If the database you would like to connect to appears in the `Databases`{.action} tab of the `Hosting plans`{.action} section of your [OVHcloud Control Panel](/links/manager), the name to enter is in the `Server address` column.
>
> If you want to connect to a database on a [Web Cloud Databases server](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), the server name can be retrieved from the tab `General information`{.action}, in the box `Login information`{.action} under `SQL`{.action} and labelled as `Host name`{.action}.
>

### Unable to connect to a Cloud Databases database

Having a [Web Cloud Databases](/products/web-cloud-clouddb) server allows you to [connect to your databases](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) from your computer or a server outside of the OVHcloud infrastructure.

If this connection is not possible, first check that you have [authorized your public IP address](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) connected to the database server.

If this operation has been carried out, contact your ISP or the [OVHcloud partners](/links/partner). We will not be able to assist you in this situation.

## Go further <a name="go-further"></a>

[Getting started with Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Resolving the most common 1-click module errors](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).