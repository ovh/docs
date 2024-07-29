---
title: "Migrating your Xara website to OVHcloud"
excerpt: "Find out how to migrate your Xara website and associated services to OVHcloud"
updated: 2024-07-29
---

## Objective

This tutorial will show you step by step how to migrate your Xara website and all its associated services to OVHcloud.

> [!warning]
>
> OVHcloud provides services that you are responsible for configuring, managing and managing. It is therefore up to you to ensure that it works properly.
>
> We offer this tutorial to help you with common tasks. However, we recommend contacting a [specialist provider](/links/partner) or the [official website of Xara Web designer](https://www.xara.com/webdesigner-plus/){.external} if you experience any difficulties. We will not be able to assist you. More information in the ["Go further"](#go-further) section of this tutorial.
>

**Find out how to migrate your Xara website and associated services to OVHcloud.**

## Requirements

- You must be logged in to the Xara administration interface

## Instructions

### Step 1: Back up your Xara website files and database

The first step is to retrieve all the files related to your Xara website. This includes Xara files, as well as your database if you have one. For further details, please refer to the [Exporting a Website](https://webdesigner.xara.com/bhavtest/test1/xara_desktop/product_support/web_features/exporting_website.html?rhhlterm=website){.external} page, or step 3 of the guide [Migrating your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

### Step 2: Transfer your Xara website to OVHcloud

Once you have backed up your Xara website files and database, transfer them to your OVHcloud web hosting plan. If you do not yet have an OVHcloud web hosting plan, follow step 1 of the guide “[Migrating your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)”.

#### Step 2.1: Transfer the files from your Xara website

> [!primary]
>
> We recommend using [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) to transfer your Xara files to your web hosting plan.
>

To transfer the files related to your Xara website, first log in to [the FTP storage space of your OVHcloud web hosting plan](/pages/web_cloud/web_hosting/ftp_connection).

Once you have logged in to your OVHcloud web hosting plan’s FTP storage space, browse to the root directory "www" (or another root folder you have created beforehand). If your backup files are compressed (zipped), unzip them in an empty folder on your computer before uploading them to the root directory of your OVHcloud web hosting plan.

#### Step 2.2: Import the database from your Xara website

If you do not have one yet, [create a new database](/pages/web_cloud/web_hosting/sql_create_database) then [import your backup into your new database](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud offers Web Cloud Database servers. If you would like to use this solution with your website, you can find all of our documentation on this product on our [dedicated page](/links/web/databases).
>

### Step 3: Update the database information

You now need to link your Xara website to your database. These changes should be made in the configuration file. You can find out what you need to do by following the steps in our guide on [Changing a Web Hosting plan database password](/pages/web_cloud/web_hosting/sql_change_password).

### Migrate other services associated with your Xara website

You have just migrated your Xara files and database. If you would like to migrate other services such as your emails, domain name or DNS zones, follow the steps in our guide on [Migrating your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh), referring to the steps for the services you would like to migrate. Indeed, several of the steps will have already been completed in this guide.

> [!warning]
>
> If you would like to migrate your Xara domain name to OVHcloud, please visit part 3 of this [Xara official website page](https://www.xara-online.com/gb/domain-faq.60.html){.external}. There you will find detailed information on the necessary administrative steps, such as unblocking your domain name and obtaining the transfer code.
>

## Go further <a name="go-further"></a>

[Overview of shared emails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Migrate your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

[Import a MySQL database](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Create a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database).
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).