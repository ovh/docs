---
title: "Tutorial - Save your WordPress website"
slug: realize-backup-wordpress
excerpt: "This guide explains how to back up the content of your WordPress website and its database"
section: 'Tutorials'
order: 021
updated: 2023-02-22
---

**Last updated 22th February 2023**
  
## Objective

Even taking all precautions, your website remains exposed to a potential malfunction (handling error, accidental overwriting of files, faulty configuration, security breach or hacking) that can result in partial or total loss of your data.<br>
Regular backup of your website information is a good practice. This will enable you to revert your website to an earlier state when you experience a technical issue.

On a web hosting plan, you are responsible for your website’s backups. Although OVHcloud offers backups (non-contractual), we recommend that you also carry out regular backups yourself, and manage your own backup media (hard disk, USB key, etc.) for more precautions.

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This tutorial will help you with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/) or [WordPress CMS editor](https://wordpress.com/support/){.external} if you encounter any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this tutorial.
>

**This guide explains how to back up the content of your WordPress website and its database.**

## Requirements

- A [web hosting plan](https://www.ovhcloud.com/asia/web-hosting/) and WordPress installed

## Instructions

You can perform a backup in two ways: **manually** or by **using an extension**.

OVHcloud provides an [automatic data backup service (non-contractual)](https://docs.ovh.com/asia/en/hosting/restoring-ftp-filezilla-control-panel/), as well as making these backups available. However, it is your responsibility to set up your own restoration policy and to determine restoration points at times you deem appropriate.

### Method 1 - perform a manual backup

Manual backup should be done in two steps. First, you need to back up your website’s PHP files, then export your database.

#### 1.1 - Back up your website files

Recovery is done via an FTP client like FileZilla. See our guide "[Using FileZilla with your OVHcloud hosting](https://docs.ovh.com/asia/en/hosting/web_hosting_filezilla_user_guide/)" for more information.

When you log in to your server via FTP, you will need to retrieve the contents of the `www` directory from the right pane (drag and drop). This directory contains all the files and directories of your WordPress site (configuration, themes, media, etc.).

![View of WordPress files and directories at the root](images/how_to_backup_your_wordpress_1.png){.thumbnail}

Click on the `www` directory and drag it to the directory of your choice in the left window. File transfer will start automatically.

If your website experiences any issues, you will need to do the opposite by overwriting the destination files.

#### 1.2 - Export your database

To export your database, go to the _PHPMyAdmin_ interface via the URL that was sent to you when you subscribed to your Web Hosting plan.

> [!success]
>
> Please refer to our guide on [exporting a database](https://docs.ovh.com/asia/en/hosting/web_hosting_database_export_guide/).

![PHPMyAdmin access - Home](images/how_to_backup_your_wordpress_2.png){.thumbnail}

Click `Export`{.action} at the top of the page:

![PHPMyAdmin access - Export](images/how_to_backup_your_wordpress_3.png){.thumbnail}

Leave the default choices: Quick export method and SQL format.

Click `Run`{.action} and you will download your entire database in Structured Query Language (SQL) format.

![PHPMyAdmin Access - Export - Download](images/how_to_backup_your_wordpress_4.png){.thumbnail}

### Method 2 - create a backup with an extension

There are many WordPress extensions you can use to manage backups. The most popular is [UdraftPlus](https://wordpress.org/plugins/updraftplus/){.external}, which has several million active installations. The free version is enough to back up your website. The premium version offers more options such as incremental backups, a migration tool, multisite backup, more choices on clouds for storing data, etc.

Download the `.zip` extension to your computer. For the sake of clarity, the downloaded file for the extension will be renamed **updraftplus.zip** in the rest of this tutorial.

#### 2.1 - Log in to the administration interface to install the extension

By default, this is your domain name followed by `/wp-admin`:

![Administrator login access on wp-admin](images/how_to_backup_your_wordpress_5.png){.thumbnail}

On the home page, go to the `Plugins`{.action} section, then click `Add new`{.action}:

![Add extension](images/how_to_backup_your_wordpress_6.png){.thumbnail}

Upload the extension by clicking the `Browse`{.action} button:

![Upload extension](images/how_to_backup_your_wordpress_7.png){.thumbnail}

Click `Install Now`{.action}:

![Install extension](images/how_to_backup_your_wordpress_8.png){.thumbnail}

After installation, you are prompted to activate the extension:

![Installation confirmation](images/how_to_backup_your_wordpress_9.png){.thumbnail}

Once you have enabled it, it will appear in the extensions list:

![List of installed extensions](images/how_to_backup_your_wordpress_10.png){.thumbnail}

#### 2.2 - Configure your backups

On the page mentioned above, click on `Settings`{.action} then on the `UpdraftPlus Backup/Restore` page, click on the `Settings`{.action} tab:

![Page UpdraftPlus Backup/Restore](images/how_to_backup_your_wordpress_11.png){.thumbnail}

Set daily backup for your files and database:

![Page UpdraftPlus Settings](images/how_to_backup_your_wordpress_12.png){.thumbnail}

Choose email backup.

Backups will be sent to the email address of the administrator account (the account you are using):

![Backup by email address](images/how_to_backup_your_wordpress_13.png){.thumbnail}

At the bottom of the page, click `Save changes`{.action} to validate.

#### 2.3 - Perform your first backup

Go back to the `Backup/Restore`{.action} tab and click the `Backup`{.action} button:

![Page UpdraftPlus Backup/Restore](images/how_to_backup_your_wordpress_14.png){.thumbnail}

In the window that pops up, click again on `Backup`{.action}:

![Page UpdraftPlus modal Backup/Restore](images/how_to_backup_your_wordpress_15.png){.thumbnail}

Once your backups are complete, you will receive two emails: one with the content of your WordPress, the other with the database of your website.
If you do not receive emails, check the email address of the account you are using (in the `Users`{.action} section). Also check your spam/junk mail folders.

### How often do backups?

The frequency of your backups is determined by how often you edit your content. A daily backup is useful if you are publishing content to your website every day. Adapt the frequency to match your publications. You can update it manually (this is the default option). It is also recommended that you make a backup whenever you install or modify a theme or extension.

### What to remember

- Integrating a regular backup routine is a good way to secure the content of your website.
- Ensure that your backups are secure.
- Make a backup before you perform an update, and then check that everything is working properly on your website. 

By applying these best practices, you will have the possibility to return to a healthy earlier version.

## Go further <a name="go-further"></a>

- [WordPress official website](https://wordpress.org){.external}

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/asia/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/asia/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.