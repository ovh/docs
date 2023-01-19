---
title: "Tutorial - What do I do when my database is full?"
slug: database-overquota
excerpt: "Find out what to do when your database is saturated"
section: 'Databases'
order: 06
---

**Last updated 19/01/2023**

## Objective

For example, you can use a database to store information about your website and how it works. This information is structured so that your website can easily access it, allowing for optimal and customised access for users/visitors to your website. 

During its use, a database can acquire, modify or delete information (connection data, user data, display data, data necessary for your website to work properly, etc.). 

In some cases, the database stores such a large amount of information that it will saturate its allocated storage space. When the database is full, we talk about **overquota**.

This tutorial will show you the actions you can take when your OVHcloud shared database is close to saturation, or is already in **overquota**.

**This guide explains how to do when your database is full.**

## Requirements

- Be logged in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).
- Have an [OVHcloud web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/) with an associated OVHcloud shared database.
  
## Instructions

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This tutorial will help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [`Go further`](#go-further) section of this guide.
>

When your OVHcloud shared database reaches saturation point (**overquota**), our robots will notify you by email on the database’s [administrator contact](https://docs.ovh.com/gb/en/customer/managing-contacts/) email address. 

Your first email will be sent when your database has consumed more than **80%** of its storage capacity. A second email is sent when **90%** of this storage capacity is reached.

When your database is in **overquota**, you will be sent a third warning email. Your database will then switch to *READ ONLY*. You can no longer add or modify your database entries, but they are still accessible in **read** and **delete**. 

### Step 1: identify large table(s)

A database is made up of one or more **tables**, themselves consisting of one or more **rows** organised using predetermined **columns**.

The first step is to identify the large table or tables in your database.

> [!primary]
>
> All the following actions described in this tutorial will be performed from **phpMyAdmin**.
>
> [phpMyAdmin](https://www.phpmyadmin.net/){.external} is available on all OVHcloud shared databases.
> This database management application makes it easy to perform the manual actions you can perform with your database.
>

#### 1.1 - Connect to the database via phpMyAdmin

Retrieve the password for accessing your database directly in your website’s configuration file. Perform this action using the **step 1** in our guide to [changing a database password](https://docs.ovh.com/gb/en/hosting/change-password-database/).

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and select `Web Cloud`{.action} in the navigation bar at the top of the screen. Click on `Hosting plans`{.action} then choose the web hosting plan associated with your OVHcloud shared database. Next, go to the `Databases`{.action} tab.

![phpMyAdmin Access](images/pma_access.png){.thumbnail}

From the `Databases`{.action} tab, click on the button `...`{.action} to the right of the database that is full, then `Go to phpMyAdmin`{.action}.

![phpMyAdmin Go Login](images/pma_interface.png){.thumbnail}

Enter your database password in addition to the pre-filled information, then click `Run`{.action}.

#### 1.2 - Find Largest Tables

> [!alert]
>
> From now on, you can directly affect the content of your database. The changes you make in phpMyAdmin can have irreversible consequences if they are not carried out correctly.
>
> Make sure you are making the changes you want to make. If you experience any difficulties, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/). OVHcloud cannot assist you with the content of your database.
>

Once connected, the following page is displayed:

![phpMyAdmin Login](images/pma_login.png){.thumbnail}

Click on the `"Your database name"`{.action} in the left-hand column, then on `Size`{.action} in the top right-hand corner of the table that appears:

![phpMyAdmin Tables](images/pma_show_table.png){.thumbnail}

The largest tables appear at the top of the table. Identify them, then go to **Step 2**.

### Step 2: determine the usefulness of the content in the large table(s)

Once you have identified the large tables, determine whether all of their content is required for your site to work.

> [!primary]
>
> If you are using a Content Management System (CMS) such as WordPress, Joomla!, PrestaShop or Drupal, make sure that your large tables are not linked to a recently installed or updated plugin/theme.
>
> In this case, contact the plugin/theme editor so that he can communicate the actions to take on your CMS.
>
 
For other CMS cases, we recommend that you contact your CMS publisher directly before you perform the following actions.

Below are links to the official CMS websites offered by OVHcloud "**In one click**" :

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://www.joomla.org){.external}
- [PrestaShop](https://www.prestashop.com/){.external}
- [Drupal](https://drupal.org){.external}

> [!primary]
>
> If your website has been developed **manually** by a specialist provider, we recommend that you contact them to get their support.
>

### Step 3: take corrective action

Once you have determined whether or not the contents of your tables are necessary for your site to work, you have several options:

#### Case 1 - All of the contents of the large table are required for your website to work properly

You will need to switch your database to a larger database.

Consult our [Cloud Databases](https://www.ovh.co.uk/cloud/cloud-databases/) offer  to choose your new database service. 

We recommend this solution for large databases.

Then follow our guides to move the content from your old database to the new one:

- [Export your existing database](https://docs.ovh.com/gb/en/hosting/web_hosting_database_export_guide/)
- [First steps with Cloud Databases](https://docs.ovh.com/gb/en/clouddb/getting-started-with-clouddb/)
- [Import your old database into your Cloud Databases solution](https://docs.ovh.com/gb/en/clouddb/restore-import-database/)

#### Case 2 - Some or all of the contents of the large table are not necessary for your site to work

Before you do the following, check if the data in the large table corresponds to items that can be deleted from your CMS admin panel. 

**Examples**:

- old comments/posts
- items in your CMS's `Trash` menu
- data related to an old theme and/or plugin.

> [!alert]
>
> The rest of this guide will show you how to delete data stored in your database. Make sure you are doing this or contact a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) if in doubt.
>

OVHcloud shared databases have several SQL commands to influence their content.

In the case of an overquota or large table, **three commands** are available.

You can directly perform these requests from the **phpMyAdmin** interface, via the `SQL`{.action} tab:

![phpMyAdmin SQL request](images/pma_sql_request.png){.thumbnail}

- The **DELETE** command: 

You can use it to remove **one or more rows** from a given table. This command is useful if part of the table content is required for your website to work properly.

**Example**:

```bash
DELETE FROM `table_1` WHERE `id` = 1
```

> In this example, the command deletes the row or rows in the **table_1** whose value in the **id** column is **1**.

- The **TRUNCATE** command: 

This command deletes **all rows** from a given table.

**Example**:

```bash
TRUNCATE TABLE `table_1`
```

> In this example, the command deletes all rows from the **table_1** without exception.

- The **DROP** command: 

It allows you to completely remove **a table and all the rows it contains**. This command should not be used if the table should continue to exist.

**Example**:

```bash
DROP TABLE `table_1`
```

> In this example, the command deletes the **table_1** table and all rows in it.

## Go further <a name="go-further"></a>

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.