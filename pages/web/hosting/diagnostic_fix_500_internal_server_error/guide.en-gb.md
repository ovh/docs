---
title: 'Fixing the 500 Internal Server Error'
excerpt: How to fix the 500 Internal Server Error
slug: web_hosting_how_to_fix_the_500_internal_server_error
legacy_guide_number: g1987
section: 'Diagnostics'
---


**Last updated 04/05/2021**

## Objective

The « 500 Internal Server Error » can affect all or only parts of your website. It can be random, permanent or appear as a blank page.

![error500](images/error-500-2.png){.thumbnail}

These errors may also come from updates carried out **automatically** by components of your website, and therefore, would therefore occur without any action on your side.

**Learn how to diagnose the most common cases of 500 errors.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](#gofurther) section of this guide.


## Requirements

- A [shared web hosting](https://www.ovh.co.uk/web-hosting/)
- An access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)


## Instructions

Before you continue, check your website on different devices and browsers. If the error 500 does not appear in some cases (e.g. on a different browser), your OVHcloud services are working fine. Restart your devices and contact a local IT technician if necessary.

A website is made of a **source code** (most of the time, .php files connected to a database). We strongly advise you to create backups before making any further operation :

- Follow this [guide](../web_hosting_filezilla_user_guide/) to retrieve a copy of all your website's files.
- If your website uses a database, you can also use this [document](../web_hosting_database_export_guide/) to retrieve a copy of it.

In order to solve a 500 error, you can [restore](#restore) your website. However, we recommend you to look for the causes of this error through the following operations :

### Check your hosting logs

First, please check your logs with this [guide](../shared_view_my_websites_logs_and_statistics/).

### Put your website in development mode

To reveal any PHP errors, switch your web hosting to `development` mode with this [document](../modify_your_web_hosting_systems_runtime_environment/#step-2-check-your-web-hosting-plans-configuration).

### Test the .htaccess file

A 500 error can be caused by a defect within the `.htaccess` file of your website, which is usually in the first level of its root folder within your FTP server.

To check this, [log in to your hosting plan via FTP](../log-in-to-storage-ftp-web-hosting/).

Then rename this file to `.htaccess.old` and try again.

If your website is online again, it means the `.htaccess` file should be corrected. If you need help to make the necessary operations, please contact the OVHcloud [partners](https://www.ovh.com/world/discover-marketplace/).

### Check folder and file permissions

Each file and each folder of your source code has a certain level of read, write and execute permissions within your webhosting's file-system. This is meant to protect them from any malicious or improper manipulation.

An incorrect level of access rights on a folder or a file may create a 500 error.

To access these files, log on your [FTP server](../log-in-to-storage-ftp-web-hosting/).

The [FileZilla user guide](../web_hosting_filezilla_user_guide/#file-and-folder-permissions) will then help you check the following points:

- The **root** of your hosting plan (this is the directory marked `/` or `.` on Filezilla) must have 705 access rights (these are the default permissions). Do not change this level of permissions.
- Folders must have 705 access rights.
- Files must have 604 access rights.

### Access error details on your scripts

For security reasons, your website hides all technical details about the error 500.

If you want to have access to those details, use a [ssh connection](../web_hosting_ssh_on_web_hosting_packages/) (It requires to have a [Pro2014](https://www.ovh.co.uk/web-hosting/web-hosting-pro.xml) or [Performance](https://www.ovh.co.uk/web-hosting/performance-web-hosting.xml) offer).

### Restore your website to its previous state <a name="restore"></a>

> [!warning]
>
> During the restore operations, all data contained in your FTP server, or the ones within your database, are replaced by a backup. As a result, you will not be able to recover the data stored in the FTP server or the ones in your database just before the restore operations.
> Restoring your website’s source code will affect all websites on your OVHcloud web hosting.

To restore your website’s source code, read our guide [Restoring your Web Hosting plan’s storage space](../restoring-ftp-filezilla-control-panel/).

If your website uses a database, read our guide [Importing a backup into a Web Hosting plan database](../web_hosting_guide_to_importing_a_mysql_database/#restore-a-backup-from-the-control-panel).

Finally, if the 500 error appeared after modifying the PHP configuration of your web hosting, return to the previous one with [Changing a Web Hosting plan’s PHP version](../how_to_configure_php_on_your_ovh_web_hosting_package_2014/).


## Go further <a name="gofurther"></a>

[All about the .htaccess file](../all_about_the_htaccess_file/)

Contact OVHcloud Partners on <https://www.ovh.com/world/discover-marketplace/>

Join our community of users on <https://community.ovh.com/en/>
