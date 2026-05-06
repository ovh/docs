---
title: "Troubleshooting common database errors"
excerpt: "Find out how to diagnose the most common cases of database errors"
updated: 2026-03-31
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

Your database usage may result in anomalies on your website or error messages in the [OVHcloud Control Panel](/links/manager), as well as on the [phpMyAdmin interface](/pages/web_cloud/web_hosting/sql_create_database).

**Find out how to troubleshoot database errors with OVHcloud Web Hosting plans.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. However, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community if you have difficulties or doubts. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- An [OVHcloud Web Hosting plan](/links/web/hosting).
- An OVHcloud database service: [Start SQL](/links/web/hosting-options-startsql) or [Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

### "Error establishing a database connection"

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Check ongoing incidents

First, check on the [Web Cloud Status](https://web-cloud.status-ovhcloud.com/) page whether your datacentre, your web hosting cluster, your Web Cloud Databases server, or your database is not affected by an incident on the OVHcloud infrastructure.

**Click on the information you are looking for to view the content.**

<!-- CP-STEPS-START:find-datacenter -->
/// details | Find the datacentre of your web hosting plan

Click on the tabs below to view each of the **2** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the relevant web hosting plan.
>>
>> ![Hosting plans](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> In the `General information`{.action} tab, locate the `Datacentre`.

///
<!-- CP-STEPS-END:find-datacenter -->

/// details | Find the cluster and filer of your web hosting plan

Refer to our guide "[Finding out the cluster and filer of your web hosting plan](/pages/web_cloud/web_hosting/how_to_know_cluster_and_filer)".

///

<!-- CP-STEPS-START:find-wcdb-server-name -->
/// details | Find the Web Cloud Databases server name

Click on the tabs below to view each of the **2** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the relevant service.
>>
>> ![Selecting a Web Cloud Databases server in the OVHcloud Control Panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Locate `Host name` in the `SQL` section of `Login information`.

///
<!-- CP-STEPS-END:find-wcdb-server-name -->

/// details | Find your web hosting database server

Refer to our guide "[Finding your database server](/pages/web_cloud/web_hosting/sql_find_server)".

///

#### Verify login credentials for your database <a name="config_file"></a>

Log in to the file storage space of your Web Hosting plan by [FTP](/pages/web_cloud/web_hosting/ftp_connection) and find your website's configuration file (for example, a WordPress website will have a **wp-config.php** file located in the folder containing your website).

> [!warning]
>
> The name and content of the file relevant for database connection information depends on the CMS used for the website. This does not lie in the scope of responsibility of OVHcloud.
>
> We recommend that you contact the publisher of the [CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) concerned or a [specialised service provider](/links/partner) if necessary. We will not be able to assist you with this.
>

Then check the **exact** match between the login details for [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#accessing-the-phpmyadmin-interface) and the login details for your website's configuration file.

If necessary, change your [database password](/pages/web_cloud/web_hosting/sql_change_password).

#### Example for WordPress

If your website displays an **"Error establishing a database connection"** message and your hosting cluster is not affected by an [incident](https://web-cloud.status-ovhcloud.com/), log in to the [FTP storage space](/pages/web_cloud/web_hosting/ftp_connection) of your hosting and open the directory containing your website (by default, this is the `www` folder).

If this is a WordPress site, open the file `wp-config.php`.

```php
define('DB_NAME', 'my_database');

/** MySQL database username */
define('DB_USER', 'my_user');

/** MySQL database password */
define('DB_PASSWORD', 'my_password');

/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```

<!-- CP-STEPS-START:check-wp-db-credentials -->
Click on the tabs below to view each of the **2** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the relevant web hosting plan.
>>
>> ![Hosting plans](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Databases`{.action} tab, then check the correspondence between the elements displayed and those in the file `wp-config.php`:
>>
>> - **my_database** must match what is noted as `Database name`;
>> - **my_user** must match what is noted as `User name`;
>> - **my_password** corresponds to your [database password](/pages/web_cloud/web_hosting/sql_change_password);
>> - **my_server.mysql.db** must match the `Server address`.
<!-- CP-STEPS-END:check-wp-db-credentials -->

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

If you have a **Starter** or **Personal** Web Hosting plan, we recommend that you switch to the [high-performance offer](/links/web/hosting). This subscription change will increase the size of your database which will automatically reopen it. This method is the simplest and does not require any particular technical expertise.

> [!warning]
>
> The increase of the size of your database may be linked to a malfunction in your website's internal code.
>
> In this case, changing your Web Hosting plan would be ineffective, as your database will continue to fill up.
>
> If you notice a sudden increase in the size of your database, or if you have a "blog" type site that normally does not use much data, we advise you to contact a [specialised service provider](/links/partner) as soon as possible. We will not be able to provide you with support on this matter.
>

<!-- CP-STEPS-START:upgrade-plan -->
To upgrade your subscription, click on the tabs below to view each of the **3** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the relevant web hosting plan.
>>
>> ![Hosting plans](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `...`{.action} button in the `Solution` section on the right-hand side of the screen.
>>
> **Step 3**
>>
>> Click `Change plan`{.action}.
<!-- CP-STEPS-END:upgrade-plan -->

If you are already subscribing to a **Performance** offer, refer to [method 2](#method2).

#### Method 2: Migrate your data to a larger database <a name="method2"></a>

You can also migrate your data to a new database:

- Order a larger [database service](/links/web/hosting-options-startsql) if necessary, then [create the new database](/pages/web_cloud/web_hosting/sql_create_database);
- [Duplicate the content of the old database](/pages/web_cloud/web_hosting/copy_database) to the new database **or** perform an [export of your data](/pages/web_cloud/web_hosting/sql_database_export), then [import your data](/pages/web_cloud/web_hosting/sql_importing_mysql_database) in the new database;
- Integrate the credentials of the new database into the [configuration file](#config_file) of your site.

> [!primary]
>
> If you have a **Performance** Web Hosting plan, you can also [activate a free Web Cloud Databases service](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

#### Method 3: Delete unnecessary data

Once you have made a [database backup](/pages/web_cloud/web_hosting/sql_database_export), log in to your [phpMyAdmin interface](/pages/web_cloud/web_hosting/sql_create_database#accessing-the-phpmyadmin-interface) to delete any unnecessary data using the Drop, Delete and Truncate commands.

<!-- CP-STEPS-START:recalculate-quota-method3 -->
To recalculate the quota, click on the tabs below to view each of the **3** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the relevant web hosting plan.
>>
>> ![Hosting plans](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Databases`{.action} tab, then on the `...`{.action} button next to the database concerned.
>>
> **Step 3**
>>
>> Click `Recalculate the quota`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method3 -->

> [!warning]
>
> This operation requires advanced technical knowledge. We recommend contacting a [specialised service provider](/links/partner) if you need to use this method. We will not be able to assist you with this.
>

#### Method 4: Optimise your database

To optimise your database, follow the instructions in our guide "[Configuring your database server](/pages/web_cloud/web_cloud_databases/configure-database-server#managing-your-databases)".

<!-- CP-STEPS-START:recalculate-quota-method4 -->
To recalculate the quota, click on the tabs below to view each of the **3** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the relevant web hosting plan.
>>
>> ![Hosting plans](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Databases`{.action} tab, then on the `...`{.action} button next to the database concerned.
>>
> **Step 3**
>>
>> Click `Recalculate the quota`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method4 -->

> [!warning]
>
> If the advice on how to optimise your database is not sufficient to unblock the access to your website, we recommend you to contact our [community](/links/community) or [OVHcloud partners](/links/partner). We will not be able to assist you in this regard.
>

### RAM overflows (Web Cloud Databases only)

The following message indicates that your [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) server has consumed too much resources on the OVHcloud infrastructure:

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

<!-- CP-STEPS-START:increase-ram-wcdb -->
To increase the [amount of RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#modifying-the-database-server-solution), click on the tabs below to view each of the **3** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the relevant service.
>>
>> ![Selecting a Web Cloud Databases server in the OVHcloud Control Panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> In the `General information`{.action} tab, locate the `RAM` section.
>>
> **Step 3**
>>
>> Click on the `...`{.action} button in the `RAM` section, then click `Change the amount of RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-wcdb -->

> [!warning]
>
> To increase the amount of RAM, the database needs to be a standalone service and not one of those included with a Performance web hosting plan. If you want to increase the amount of RAM of a database included in the [Performance offers](/links/web/hosting-performance-offer), you first need to detach it.
>
> To detach the database, refer to our guide "[Detaching a Web Cloud Databases from your web hosting plan](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>

You can also optimise your database by following the instructions of our guide "[Configuring your database server](/pages/web_cloud/web_cloud_databases/configure-database-server#managing-your-databases)".

> [!primary]
>
> If you experience any difficulties in decreasing the use of resources on your database server, please contact our [community of users](/links/community) or [OVHcloud partners](/links/partner). We will not be able to assist you with this.
>

### Database import errors

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

This error message means that the database you are trying to import contains elements that are not authorised on the OVHcloud shared infrastructure.

<!-- CP-STEPS-START:check-db-empty-before-import -->
First make sure that your database is empty. To do this, click on the tabs below to view each of the **3** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the relevant web hosting plan.
>>
>> ![Hosting plans](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Databases`{.action} tab, then the `...`{.action} button next to the database, then `Recalculate the quota`{.action}.
>>
> **Step 3**
>>
>> If the database is not empty, [back up the existing data](/pages/web_cloud/web_hosting/sql_database_export) then delete it before relaunching the import operation.
>>
>> You can also tick the `Empty the current database`{.action} box just before [launching the import](/pages/web_cloud/web_hosting/sql_importing_mysql_database#import-your-own-backup-via-your-control-panel):
>>
>> ![import-empty-current-db](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}
<!-- CP-STEPS-END:check-db-empty-before-import -->

If necessary, contact our [user community](/links/community) or a [specialised service provider](/links/partner) for more information. We will not be able to assist you in correcting this issue.

> [!primary]
>
> **Which elements in my database import script can cause a "#1044 - Access denied for user to database" error?**

You cannot have a **"trigger"** in your database's import script on OVHcloud shared hosting servers. In this situation, import your database to a [Web Cloud Databases server](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

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
> **"ERROR 2006 : MySQL server has gone away"**
>

This error message appears when [importing a database](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#importing-a-local-backup) on a [Web Cloud Databases server](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). In most cases, it is caused by the quantity of data to be imported being too large or by non-optimised SQL queries in the import script.

To resolve this issue, you can:

<!-- CP-STEPS-START:increase-ram-for-import -->
- Increase the [amount of RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#modifying-the-database-server-solution). To do this, click on the tabs below to view each of the **3** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the relevant service.
>>
>> ![Selecting a Web Cloud Databases server in the OVHcloud Control Panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> In the `General information`{.action} tab, locate the `RAM` section.
>>
> **Step 3**
>>
>> Click on the `...`{.action} button in the `RAM` section, then click `Change the amount of RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-for-import -->

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

The maximum number of active connections for databases delivered with a shared hosting ([Start SQL](/links/web/hosting-options-startsql)) is **30**.

This number increases to **200** for the [Web Cloud Databases service](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). (This setting can be modified in the `Configuration`{.action} section of your database service.)

A "Too many connections" error when [connecting to phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#accessing-the-phpmyadmin-interface) appears if this maximum number of connections is exceeded.

In this situation, you will need to [optimise your databases](/pages/web_cloud/web_cloud_databases/configure-database-server#managing-your-databases) in order to reduce the number of active connections.

> [!warning]
>
> If you have any questions about the changes you need to make in order to reduce the number of active connections to your database, please contact our [community](/links/community) or [OVHcloud partners](/links/partner). We will not be able to assist you in this regard.
>

#### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

This error message appears when [connecting to phpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) if the server name entered is incorrect.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Check the server name for the relevant database service.

**Click on the relevant situation to view the content.**

<!-- CP-STEPS-START:find-server-name-hosting -->
/// details | Database on a web hosting plan

Click on the tabs below to view each of the **2** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the relevant web hosting plan.
>>
>> ![Hosting plans](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Databases`{.action} tab. The server name to enter is listed in the `Server address` column.

///
<!-- CP-STEPS-END:find-server-name-hosting -->

<!-- CP-STEPS-START:find-server-name-wcdb -->
/// details | Database on a Web Cloud Databases server

Click on the tabs below to view each of the **2** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the relevant service.
>>
>> ![Selecting a Web Cloud Databases server in the OVHcloud Control Panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> In the `General information`{.action} tab, the server name to enter is listed in the `Login information` section, under `SQL`, labelled as `Host name`.

///
<!-- CP-STEPS-END:find-server-name-wcdb -->

### Unable to connect to a Cloud Databases database

Having a [Web Cloud Databases](/products/web-cloud-clouddb) server allows you to [connect to your databases](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) from your computer or a server outside of the OVHcloud infrastructure.

If this connection is not possible, first check that you have [authorised your public IP address](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) to connect to the database server.

If this operation has been carried out, contact your ISP or the [OVHcloud partners](/links/partner). We will not be able to assist you in this situation.

## Go further <a name="go-further"></a>

[Getting started with Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).