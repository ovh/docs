---
title: Resolving the most common 1-click module errors
slug: error-frequently-1-click-modules
excerpt: Find out how to diagnose the most common cases of 1-click module creation errors
section: Troubleshooting
order: 02
---

**Last updated 8th October 2021**

## Objective

Creating a [1-click module](../web_hosting_web_hosting_modules/) in automatic or advanced mode can produce various issues.

**This guide explains how to diagnose the most common cases of errors when creating 1-click modules.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en/directory/) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- A compatible [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en/web-hosting/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)
- Using the [1-click module](../web_hosting_web_hosting_modules/) feature to create a new website

## Instructions

> [!primary]
>
> We point out the most common errors here. If you have further difficulties, please consult our [Web Hosting FAQ](../web-hosting-faq/).
>

### "An error has occurred loading the information. (You need at least one free database)"

![1freeDB](images/1freeDB.png){.thumbnail}

This message might appear when you try to auto-create a new module. Each 1-click module needs one database to function and the error occurs when the hosting plan currently has no unused database available. The following solutions might be considered:

#### Solution 1: change your hosting plan

> [!primary]
>
> View our comparison of different [hosting plans](https://www.ovhcloud.com/en/web-hosting/).
>

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), click on `Web Cloud`{.action}, then `Hosting plans`{.action}. Select the plan concerned, then click `Upgrade` in the `Plan` section.

![upgrade_hosting](images/upgrade_hosting.png){.thumbnail}

With the [Professional hosting](https://www.ovhcloud.com/en/web-hosting/professional-offer/) and [Performance hosting](https://www.ovhcloud.com/en/web-hosting/performance-offer/) offers, you can create up to three additional 1-click modules.

#### Solution 2: delete an unused database <a name="deleteDB"></a>

> [!warning]
>
> A database deletion is permanent. Its backups would also be deleted. If you are unsure about the changes you need to make, contact your webmaster or one of our [partners](https://partner.ovhcloud.com/en/directory/).
>

To delete a database in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), click on `Web Cloud`{.action}, then `Hosting plans`{.action}, then on the `Databases`{.action} tab. Make sure to delete the correct database via the `...`{.action} button.

![delete_a_database](images/delete_a_database.png){.thumbnail}

#### Solution 3: order new databases

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), click on `Web Cloud`{.action}, then `Hosting plans`{.action}. Switch to the `Databases`{.action} tab and click `Actions`{.action}.

![order_a_database](images/order_a_database.png){.thumbnail}

> [!primary]
>
> Check our various [database offers](https://www.ovhcloud.com/en/web-hosting/options/start-sql/).
>

#### Solution 4: install your module on a database you already use

To install your module on an existing database, you will need to use the [advanced mode](../web_hosting_web_hosting_modules/#advanced-module-installation).

To find your database login details, please check this [guide](../web_hosting_web_hosting_modules/#advanced-module-installation).

### "The installation directory is not empty"

![folder_not_empty](images/folder_not_empty.png){.thumbnail}

After creating your module, you receive an email stating that your module’s creation failed for the installation directory is not empty.

This message means that the **Root folder** of your FTP web hosting space that your domain is linked to contains at least one file or folder.

To link your domain to another directory, click on `Modify domain`{.action} in the `Multisite`{.action} tab, then enter the name of a new **Root folder**. (An empty directory will be created automatically on your web hosting.)

![modify_root_folder](images/modify_root_folder.png){.thumbnail}

You can also log in to your hosting plan via [FTP](../log-in-to-storage-ftp-web-hosting/), then delete or move the folder content after backing it up.

### "An error has occurred loading the information. (There is not enough space on your hosting (you need at least xxx MB))"

![not_enough_space](images/not_enough_space.png){.thumbnail}

This message indicates that the [storage space](../log-in-to-storage-ftp-web-hosting/) of your hosting has too much data. You must delete or move one before you can install a new [1-click module](../web_hosting_web_hosting_modules/).

In this situation, [log in via FTP](../log-in-to-storage-ftp-web-hosting/) to your hosting plan, [back up locally](../web_hosting_filezilla_user_guide/#file-transfers) your data, then delete the files that are not necessary for your website to work properly.

> [!primary]
>
> If you have any questions about which data to delete in order to reduce the amount of data on your hosting plan, please contact our [user community](https://community.ovh.com/en/) or [OVHcloud partners](https://partner.ovhcloud.com/en/directory/).<br>
> We will not be able to assist you with this.
>

### "Unable to connect to database" <a name="deleteModule"></a>

![wrong_id_database](images/wrong_id_database.png){.thumbnail}

After launching your module installation in advanced mode, you receive an email stating that your module cannot connect to the specified database.

First check your [database credentials](../web_hosting_web_hosting_modules/#advanced-module-installation).

Then delete your module via the `1-click modules`{.action} tab.

![delete_a_module](images/delete_a_module.png){.thumbnail}

Then try instal a new module.

### Your domain name is not offered when you create the module

![domainenotproposed](images/domainenotproposed.png){.thumbnail}

Click on the `Multisite`{.action} tab and perform the following checks:

|Scenario|What to do|
|---|---|
|The domain or subdomain linked to the website you want to create does not appear in the `Multisite`{.action} section.|Add your domain by following [this guide](../multisites-configuring-multiple-websites/#step-21-adding-an-ovhcloud-registered-domain).|
|The domain name has been deleted from the `Multisite`{.action} without any action on your side.|If your domain or its [DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/#understanding-dns) is not managed from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), follow this [guide](../multisites-configuring-multiple-websites/#step-22-adding-an-external-domain) to add your domain name to the `Multisite`{.action}.|

### Your module appears under a web address such as "xxxxx.cluster0xx.hosting.ovh.net”

![url-cluster](images/url-cluster.png){.thumbnail}

Back up the actual **1-click module** and its **Database**, if necessary. Then, [delete your module](#deleteModule), then its [database](#deleteDB) and create a new module on the correct `Domain name`.

### Your old website is still displayed

This can have several causes: 

- You have recently changed your [DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/#understanding-dns) or DNS servers, or you have [transferred your domain name](../../domains/transfer-generic-domain/). Wait until these operations are completed (48 hours for changes on your `DNS servers`). Restart your devices regularly (PC, smartphone, internet connection, etc.) and refresh your web browser’s cache.

- Your domain name is still linked to your old hosting plan. In this case, edit your [DNS Zone](../../domains/web_hosting_how_to_edit_my_dns_zone/#edit-your-domain-names-ovhcloud-dns-zone_1) or [DNS servers](../../domains/web_hosting_general_information_about_dns_servers/#modifying-dns-servers), or contact your old hosting provider to do so.

## Go further <a name="#gofurther"></a>

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please check our [support offers](https://www.ovhcloud.com/en/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
