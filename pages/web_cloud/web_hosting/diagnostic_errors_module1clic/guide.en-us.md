---
title: "Troubleshooting common 1-click module errors"
excerpt: "Find out how to diagnose the most common cases of 1-click module creation errors"
updated: 2024-03-12
---

## Objective

The [1-click modules](/pages/web_cloud/web_hosting/cms_install_1_click_modules) allow you to create your website quickly. With this technology, you can create your website using the most popular **C**ontent **M**anagement **S**ystem (**CMS**), such as *WordPress*, *Joomla!*, *Drupal* or *PrestaShop*.
However, if they are not configured correctly, the 1-click module installation may fail and/or cause malfunctions.

**Find out how to diagnose the most common errors associated with 1-click module creations**

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or the software publisher if you encounter any difficulties. OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#go-further) section of this guide.
> 

## Requirements

- A compatible [web hosting plan](/links/web/hosting)
- Access to the [OVHcloud Control Panel](/links/manager)
- The [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules) feature used to install your website

## Instructions

> [!primary]
>
> Here you can find the most common errors. If you encounter a situation different from the ones presented, please refer to our [web hosting FAQ](/pages/web_cloud/web_hosting/faq-web_hosting).
>

### Your domain name is not offered when you create the 1-click module

![domainenotproposed](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/domain-unavailable.png){.thumbnail}

Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section. Click `Hosting plans`{.action} in the left-hand column, then select the Web Hosting plan concerned by the installation. On the page that pops up, click on the `Multisite`{.action} tab, then perform the following checks:

|Scenario|Solution|
|---|---|
|The domain or subdomain linked to the website you want to create does not appear in the table in the `Multisite`{.action} tab.|Add your domain as shown [here](/pages/web_cloud/web_hosting/multisites_configure_multisite).|
|The domain name has been deleted from the multisite without any action on your part.|If your domain or its [DNS zone](/pages/web_cloud/domains/dns_zone_edit) are not managed from your OVHcloud account, add your domain from the `Multisite`{.action} tab by following [this guide](/pages/web_cloud/web_hosting/multisites_configure_multisite).|

### "An error has occurred loading the information (You need at least one free database)"

![No databases available](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-no-db-available.png){.thumbnail}

This message appears when you launch the installation of your 1-click module when you are unable or no longer able to create a new database associated with your Web Hosting plan.

#### Solution #1: Order a new database

If you no longer have any databases included with your web hosting plan, you can order a new [Start SQL database](/links/web/hosting-options-startsql) and combine it with your current web hosting plan. You can then relaunch the installation of the 1-click module. If you need more storage space (more than 1GB), we recommend using our [Web Cloud Databases](/links/web/databases) service instead.

In your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section. Click `Hosting plans`{.action} in the left-hand column, then select the web hosting plan you would like to add an additional database to. On the page that pops up, click on the `Databases`{.action} tab, then on `Actions`{.action} to order an additional database:

![order_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/order-a-db.png){.thumbnail}

Once complete, you will be able to install a new 1-click module.

> [!primary]
>
> As a reminder, do not hesitate to consult in advance our unitary database offers [Start SQL](/links/web/hosting-options-startsql) and [Web Cloud Databases](/links/web/databases).
>

#### Solution 2: Modify your web hosting plan

> [!primary]
>
> Compare our different [hosting plans](/links/web/hosting).
>

In your [OVHcloud Control Panel](/links/manager), click `Web Cloud`{.action}. Click `Hosting plans`{.action}, then select the web hosting plan concerned. On the page that appears in the `Plan` - `Solution` section, click the `...`{.action} `Change plan`{.action}:

![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}

The offers [Pro](/links/web/hosting-professional-offer) and [Performance](/links/web/hosting-performance-offer) will allow you to create up to three additional 1-click modules with an independent database for each of them. With the **Performance** plans, you can also activate a [Web Cloud Databases](/links/web/databases) server for free.

Once complete, you will be able to install a new 1-click module.

#### Solution 3: Delete an unused database <a name="delete-the-database"></a>

> [!warning]
>
> The operation to delete a database is permanent. It also deletes backups of the database concerned. If you have any doubts, please contact your webmaster or one of our [partners](/links/partner).
>

To delete a database from your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section. Click `Hosting plans`{.action} in the left-hand column, then select the Web Hosting plan concerned.

On the page that opens, click on the `Databases`{.action} tab. In the table that appears, click the `...`{.action} button to the right of the row corresponding to the database you want to delete, then `Delete a database`{.action} :

![delete_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-deletion.png){.thumbnail}

Once complete, you will be able to install a new 1-click module.

#### Solution 4: Install your 1-click module on a database that is already in use

To install your 1-click module on an existing database, you will need to use the [advanced mode](/pages/web_cloud/web_hosting/cms_install_1_click_modules) installation feature of a new 1-click module.

To find your database credentials, please refer to our guide on [Setting up your website with a 1-click module (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

If you have a [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) server, you can create a database of the size of your choice, within the limit of the disk space allocated.

Once complete, you will be able to install a new 1-click module.

> [!primary]
>
> In this situation, you can back up data from a single website using a [PHP script or an SSH command](/pages/web_cloud/web_hosting/sql_database_export).
>
> If you have any questions on how to proceed, please contact the [OVHcloud community](/links/community) or one of our [partners](/links/partner).<br>
> We will not be able to assist you with this.
>

### Your 1-click module has a web address like "xxxxx.cluster0xx.hosting.ovh.net"

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Once you have made all the necessary backups, [delete your 1-click module](#delete-the-module), then its [database](#delete-the-database). Then launch the installation of your 1-click module on the domain name you want.

### "Installation directory is not empty"

![folder_not_empty](/pages/assets/screens/email-sending-to-customer/webhosting/folder-not-empty.png){.thumbnail}

After you launched the creation of your 1-click module, you received an email stating that the installation directory for your 1-click module is not empty.

This message means that the **root folder** associated with your domain name already contains one or more files or folders.

To link your domain name to another directory, log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section. Click `Hosting plans`{.action} in the left-hand column, then select the Web Hosting plan concerned. On the page that opens, click on the `Multisite`{.action} tab. In the table that appears, click the `...`{.action} button to the right of the line corresponding to your domain name, then click `Modify domain`{.action}. Finally, enter the name of a new **root folder** (an empty directory will be created automatically on your Web Hosting plan).

![modify_root_folder](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain.png){.thumbnail}

You can also log in to your web hosting plan using the [FTP](/pages/web_cloud/web_hosting/ftp_connection) protocol, then delete the folder contents. This is done after you have backed it up locally, or after you have emptied it by moving all of its contents to another FTP directory.

### “Either no configuration (ovhconfig or runtime), or the current configuration is not valid (please double check the module's requirement) (as a reminder, the global configuration is used for module).”

This message indicates that the .ovhconfig file does not exist or is invalid in order to install your 1-click module. This file contains the PHP version and runtime environment applied to your web hosting plan.

We recommend using the most recent PHP version possible. **Before** you change the configuration of the .ovhconfig file, if you have other websites on your web hosting plan, please ensure that they are compatible with the new PHP version and/or the new runtime environment that you will apply to your web hosting plan.

To check this configuration, please read our guide on [Modifying your web hosting plan’s configuration](/pages/web_cloud/web_hosting/configure_your_web_hosting) .

### "An error has occurred loading the information (There is not enough space on your hosting (you need at least xxx MB))"

![not_enough_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-not-enough-ftp-space.png){.thumbnail}

This message indicates that the [FTP storage space](/pages/web_cloud/web_hosting/ftp_connection) of your web hosting plan contains too much data. 

#### Solution 1: Delete data to free up FTP storage space

In this case, delete (or move) your data to install a new [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

In this situation, [log in via FTP](/pages/web_cloud/web_hosting/ftp_connection) to your web hosting plan, [save your data locally](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide), then delete the files that are not necessary for your website to work properly.

> [!primary]
>
> If you have any questions about deleting data to reduce the amount of data on your web hosting plan, please contact our [community of users](/links/community) or [OVHcloud partners](/links/partner).<br>
> OVHcloud support is not authorised to provide you with assistance in this regard.
>

#### Solution 2: Modify your web hosting plan

> [!primary]
>
> Compare our web hosting plans (/links/web/hosting).
>

In your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section. Click `Hosting plans`{.action}, then select the web hosting plan concerned. On the page that appears in the `Plan` - `Solution` section, click the `...`{.action} `Change plan`{.action}:

![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}

The [Pro](/links/web/hosting-professional-offer) and [Performance](/links/web/hosting-performance-offer) offers will allow you to create up to three additional 1-click modules with an independent database for each of them. With the **Performance** plans, you can also activate a [Web Cloud Databases](/links/web/databases) server for free.

### "Unable to connect to database" <a name="delete-the-module"></a>

![wrong_id_database](/pages/assets/screens/email-sending-to-customer/databases/db-connection-failed.png){.thumbnail}

After launching the installation of your 1-click module in advanced mode, you received an email stating that your 1-click module cannot connect to the database specified.

You will need to check your database credentials. To find them, please refer to this [guide](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Then delete your 1-click module. To do this, log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section. Click `Hosting plans`{.action} in the left-hand column, then select the Web Hosting plan concerned. On the page that opens, click on the `1-click modules`{.action} tab. In the table that appears, click the `...`{.action} button to the right of the line corresponding to your domain name, then click `Delete the module`{.action}.

![delete_a_module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/delete-a-module-2.png){.thumbnail}

> [!warning]
>
> **Deleting items from your database can cause your website to go down.**
>
> Be sure to delete only the installation you just launched. To do this, check that this is the correct directory in the `Path` column.
>

Then relaunch the installation of a new 1-click module.

### "You have insufficient rights on this database."

![insufficient_rights](/pages/assets/screens/email-sending-to-customer/databases/db-insufficient-rights.png){.thumbnail}

This message only appears when you install a 1-click module in **advanced mode**. Your database can no longer be modified because the amount of data in it exceeds the limit. In this case, your database is locked to read-only mode.

In this situation, install your 1-click module via [simple mode](/pages/web_cloud/web_hosting/cms_install_1_click_modules), or choose another database when you install it in advanced mode. If required, order an additional [database solution](/links/web/hosting-options-startsql).

If you do not have any other databases and you do not want to order an additional solution, [import a copy of your database locally](/pages/web_cloud/web_hosting/sql_database_export), then delete the data you no longer need.

> [!warning]
>
> **Deleting items from your database can cause your website to go down.**
>
> If you have any further questions, please contact our [community of users](/links/community) or the [OVHcloud partners](/links/partner).<br>
> We will not be able to assist you with this.
>

### "Can't connect to database 'xxxxxxxx' at 'xxxxxx-xxx.eu.clouddb.ovh.net'. The error is: Access denied for user 'xxxx'@'xxxxxxxx' (using password: YES)"

![cant_connect](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-access-denied.png){.thumbnail}

You have launched the installation of a 1-click module in [advanced mode](/pages/web_cloud/web_hosting/cms_install_1_click_modules) on a database located on a [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) server. You have received this error message by email. This means that the user specified during installation does not have sufficient rights to the database, or that the credentials specified are incorrect.

In this situation, first modify the [user rights](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server) concerned, so that they have **Administrator** or **Read/write** rights on the database.

You can also check the credentials by [directly connecting](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) to your database server. Then relaunch the installation of your 1-click module.

### "Can't connect to database 'xxxxxxxx' at 'xxxxxxxx.mysql.db'. The error is: Unknown MySQL server host 'xxxxxxxx.mysql.db'"

![cant_connect_server](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-server.png){.thumbnail}

You have launched the installation of a 1-click module in [advanced mode](/pages/web_cloud/web_hosting/cms_install_1_click_modules) on a database located on a [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) server. You have received this error message by email. This means that the database server name you provided is incorrect.

To find the name of your database server , log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section. Click `Web Cloud Databases`{.action} in the left-hand column, then select the database server concerned.

On the page that pops up, the name of the server to use is listed in the `Login information` box, in the `SQL` subsection, under `Host name`.

### Your old website still appears

In the `1-click modules` tab of the web hosting plan containing your website, when you click on your website link in the `Path` column, a new tab will open with your website. The domain name associated with your installation will appear in the address bar of your web browser. For example, if your domain name is named “domain.tld”, you may see another domain name, or a standard OVHcloud page.

This malfunction can have several causes:

- Check that the domain name you are using (“domain.tld”) is the one you just installed the 1-click module with.

- If you have recently changed your domain name’s [active DNS zone](/pages/web_cloud/domains/dns_zone_edit)/[DNS servers](/pages/web_cloud/domains/dns_server_edit) or a [domain name transfer](/pages/web_cloud/domains/transfer_incoming_generic_domain). Wait for these operations to be finished (4-24 hours for a change in the DNS zone and 24-48 hours for a change in the DNS servers). Also remember to restart your devices (PC, smartphone, box, etc.) and clear your browser cache.

- Your domain name is still linked to your old web hosting plan. In this case, modify the [active DNS zone](/pages/web_cloud/domains/dns_zone_edit) associated with your domain name or its [DNS servers](/pages/web_cloud/domains/dns_server_edit). If your domain name’s active DNS zone is not managed at OVHcloud, contact your DNS provider with this information.

### The "Administrator" password for accessing the "administration interface" of your 1-click module does not work <a name="adminpassword"></a>

If your current password for accessing the administration interface for your **C**ontent **M**anagement **S**ystem (**CMS**) is rejected, please read the “Change your module password” section in our guide on [Managing your 1-click module](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

### The table prefix in your database is already in use on your database

This error only applies to 1-click module installations in *advanced mode*.

It informs you that the attempt to install the 1-click module failed, because the table prefix is already used in the database by another installation. The operation is then cancelled. 

Retry the installation with a different table prefix or database to fix the problem.

### The domain name DNS record does not point to an OVHcloud web hosting plan

This error informs you that the DNS records for the domain name used for your website do not point to an OVHcloud web hosting plan. However, you cannot install a 1-click module on a domain that does not point to an OVHcloud hosting plan.
To resolve this situation, you must edit your DNS zone. To find out more about the IP addresses you need to enter, read our guide [List of IP addresses for clusters and web hosting plans](/pages/web_cloud/web_cloud_databases/configure-database-server). You will then need to [Edit your DNS zone](/pages/web_cloud/domains/dns_zone_edit).
If your DNS zone is not hosted with OVHcloud, contact your DNS zone provider to perform the necessary actions.

Once you have finished installing a new 1-click module, restart it.

### Your database must be in version "X", but it is currently in version "Y"

This message received by email informs you that the version of your database is too old to install your 1-click module. 

In this same email, you will find the version your database should be in. There are three ways to do this:

- Update of the **D**ata**B**ase **M**anagement **S**ystem (DBMS such as MySQL, PostgreSQL, MariaDB, etc.) to a more recent version.
- Install a new database linked to your web hosting plan. This is to ensure that the DBMS and version are compatible with the desired 1-click module.
- If you have a [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) server, check that your server uses the correct DBMS and version, then create the database of your choice.

Once you have finished installing a new 1-click module, restart it.

## Go further <a name="go-further"></a>

[Set up your website with 1-click modules](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Recurring problems using FTP software](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).