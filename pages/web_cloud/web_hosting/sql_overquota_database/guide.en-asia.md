---
title: "Web hosting: My database is full, what should I do?"
excerpt: "Find out what to do when your database is saturated"
updated: 2023-12-13
---

## Objective

A database can, for example, store data related to a website and its functionalities. This information is structured so that your website can easily access it, allowing for optimal and customised access for users/visitors to your website. 

During its use, a database can acquire, modify or delete information (connection data, user data, display data, data necessary for your website to work properly, etc.). 

In some cases, the database stores such a large amount of information that it will saturate its allocated storage space. When a database is full, this state is called **overquota**.

This tutorial will show you the actions you can take when your OVHcloud shared database is close to saturation, or is already in **overquota**.

**This guide explains possible actions when your database is full.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An [OVHcloud web hosting plan](/links/web/hosting) with an associated OVHcloud shared database
  
## Instructions

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> If you experience any difficulties following the steps in this tutorial, we recommend contacting a [specialist provider](/links/partner) or reach out to the OVHcloud community. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

When your OVHcloud shared database reaches a certain saturation level (**overquota**), our robots will send a notification to the email address of the database’s [administrator contact](/pages/account_and_service_management/account_information/managing_contacts). 

The first email will be sent when your database has consumed more than **80%** of its storage capacity. A second email is sent when **90%** of this storage capacity is reached.

When your database is in **overquota**, you will be sent a third warning email. Your database will then switch to *READ ONLY*. You can no longer add or modify your database entries, but they are still accessible to **read** and **delete**. 

### Step 1: Identify large tables

A database is made up of one or more **tables**, themselves consisting of one or more **rows** organised using predetermined **columns**.

The first step is to identify the large table or tables in your database.

> [!primary]
>
> All the following actions described in this tutorial will be performed from the **phpMyAdmin** interface.
>
> [phpMyAdmin](https://www.phpmyadmin.net/){.external} is available on all OVHcloud shared databases.
> This database management application makes it easy to perform the manual actions you can perform with your database.
>

#### 1.1 - Connect to the database via phpMyAdmin

Retrieve your database access data directly from your website’s configuration file. Perform this action using **step 1** in our guide to [changing a database password](/pages/web_cloud/web_hosting/sql_change_password).

Log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action} in the top navigation bar. Click `Hosting plans`{.action} , then choose the web hosting plan associated to your OVHcloud shared database. Go to the `Databases`{.action} tab.

A table listing your databases will appear at the bottom of the screen.

![phpMyAdmin Access](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/go-to-phpmyadmin.png){.thumbnail}

Note that `User name` and `Server address` of your database are listed in the table.

In the `Databases`{.action} tab, click the `...`{.action} button to the right of the database that is full, then `Go to phpMyAdmin`{.action}.

![phpMyAdmin Go Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-interface-login.png){.thumbnail}

Enter the login information for your database, then click `Login`{.action}.

#### 1.2 - Find the largest tables

> [!alert]
>
> From here on, your actions affect the content of your database. The changes you make in **phpMyAdmin** can have irreversible consequences if they are not carried out correctly.
>
> Be sure about each command you execute on the database. If you experience any difficulties, we recommend contacting a [specialist provider](/links/partner). OVHcloud cannot assist you with the content of your database.
>

Once connected, the following page is displayed:

![phpMyAdmin Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-2.png){.thumbnail}

Click on `"Your database name"`{.action} in the left-hand column, then on `Size`{.action} in the top right-hand corner of the table that appears:

![phpMyAdmin Tables](/pages/assets/screens/other/web-tools/phpmyadmin/pma-check-size.png){.thumbnail}

The largest tables appear at the top of the sorted list. Identify them, then go to **Step 2**.

### Step 2: Determine the usefulness of the content in the large table(s)

Once you have identified the large tables, determine whether all of their content is required for your site to work.

> [!primary]
>
> If you are using a Content Management System (CMS) such as WordPress, Joomla!, PrestaShop or Drupal, make sure that your large tables are not linked to a recently installed or updated plugin/theme.
>
> In this case, contact the developer of the plugin/theme to determine appropriate actions to take on your CMS.
>
 
For other CMS types, we recommend that you contact your CMS publisher before you perform the following actions.

Below are links to the official CMS websites for the OVHcloud 1-click modules:

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://www.joomla.org){.external}
- [PrestaShop](https://www.prestashop.com/){.external}
- [Drupal](https://drupal.org){.external}

> [!primary]
>
> If your website is a **customised** software, developed by a specialist provider, we recommend that you contact them for support.
>

### Step 3: Take corrective action

Once you have determined whether or not the contents of your tables are necessary for your site to work, you have several options:

#### Case 1 - All of the contents of the large table are required for your website to work properly

You will need to upgrade your database service to one that includes more space for databases.

> [!primary]
>
> To increase the size allocated to your database, you will need to create a new, larger database, and copy the contents of the old database into the new one. You cannot directly increase the size of a database linked to a web hosting plan.
>

Consult our [Web Cloud Databasess](/links/web/databases) offer to choose your new database service. 

We recommend this solution for large databases.

You can duplicate the content of your OVHcloud database directly to another of your OVHcloud databases, using a feature in your [OVHcloud Control Panel](/links/manager). To do this, please refer to our guide "[Duplicating the contents of one database to another](/pages/web_cloud/web_hosting/copy_database)".

If you are migrating to a database outside of the [Start SQL](/links/web/hosting-options-startsql) and [Web Cloud Databases](/links/web/databases) solutions, you can manually move the content from your old database to a new one using our guides:

- [Export your existing database](/pages/web_cloud/web_hosting/sql_database_export)
- [First steps with Web Cloud Databasess](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)
- [Import your old database into your Web Cloud Databasess solution](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

#### Case 2 - Some or all of the contents of the large table are not necessary for your site to work

Before you do the following, check if the data in the large table corresponds to items that can be deleted from your CMS admin panel. 

**Examples**:

- Old comments/posts
- Items in your CMS's `Trash` menu
- Data related to an old theme and/or plugin

> [!alert]
>
> The rest of this tutorial will show you how to delete data stored in your database. Be sure of the actions you need to take or contact a [specialist provider](/links/partner) if in doubt.
>

OVHcloud shared databases have several SQL commands to influence their content.

In the case of an overquota or large table, **three commands** are available.

You can perform these requests from the **phpMyAdmin** interface, via the `SQL`{.action} tab:

![phpMyAdmin SQL request](/pages/assets/screens/other/web-tools/phpmyadmin/pma-sql-menu.png){.thumbnail}

- The **DELETE** command

You can use it to remove **one or more rows** from a given table. This command is useful if part of the table content is required for your website to work properly.

**Example**:

```sql
DELETE FROM `table_1` WHERE `id` = 1
```

> In this example, the command deletes the row or rows in the **table_1** whose value in the **id** column is **1**.

- The **TRUNCATE** command

This command deletes **all rows** from a given table.

**Example**:

```sql
TRUNCATE TABLE `table_1`
```

> In this example, the command deletes all rows from the **table_1** without exception.

- The **DROP** command

It allows you to completely remove **a table and all the rows it contains**. This command should not be used if the table is still required.

**Example**:

```sql
DROP TABLE `table_1`
```

> In this example, the command deletes the table **table_1** and all rows in it.

## Go further <a name="go-further"></a>

[Duplicating the contents of one database to another](/pages/web_cloud/web_hosting/copy_database)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).