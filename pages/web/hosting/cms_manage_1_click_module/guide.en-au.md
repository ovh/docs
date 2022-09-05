---
title: How to manage your 1-click module
excerpt: Find out how to manage your 1-click module in the OVHcloud Control Panel
slug: 1-click-module-management
section: CMS
order: 2
---

**Last updated 5th September 2022**

## Objective

The 1-click modules are a quick and easy way to install an online website creation software (commonly called "CMS"). OVHcloud offers the most well-known of those solutions: WordPress, PrestaShop, Drupal and Joomla!.

**Find out how to manage your 1-click module through the OVHcloud Control Panel.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-au/directory/) and/or discuss the issue with our community on if you face difficulties or doubts. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- An [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-au/web-hosting/) that allows you to install a 1-click module
- A 1-click module on your web hosting plan (If you did not install one yet, follow the instructions in this [guide](https://docs.ovh.com/au/en/hosting/web_hosting_web_hosting_modules/))
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

## Instructions

### Access your website

To access the public section of your website after installing a 1-click module, go to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), click on `Web Cloud`{.action}, `Hosting plans`{.action}, on the relevant hosting plan then click on the `1-click modules`{.action} tab.

Next, click on the `...`{.action} button to the right of the line related to your 1-click module, then on `Access module`{.action}.

> [!primary]
>
> If your website does not display properly, please refer to the OVHcloud web hosting guides of the [Troubleshooting](https://docs.ovh.com/au/en/hosting/) section.
>

### Access the administrator interface

To access the admin section of your 1-click module, go to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), click on `Web Cloud`{.action}, `Hosting plans`{.action}, on the relevant hosting plan then click on the `1-click modules`{.action} tab.

Next, click on the `...`{.action} button to the right of the line related to your module then `Access the module's administration interface`{.action}.

### Find the administrator login of your module

Click on the `1-click modules`{.action} tab in the `Hosting plans`{.action} section of your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au). Your module’s admin ID will appear in the `Login` column.

You can also search for the email received after the creation of your module from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au): click on your name in the top right-hand corner of the screen then, in the context menu, click on `Service emails`{.action}.

### Change your module password

You can change the administrator password of your module via the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) or by going directly to the login page of your website’s admin interface.
Either ways, you will receive an email containing a link to reset your password.

> [!primary]
>
> **What can you do if you don't receive the email to reset the admin password of your website?**
>
> Check the `Spam`{.action} and `Trash`{.action} folders in your mailbox.
>
> You can also view all emails sent by our services from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au): click on your name in the top right-hand corner of the screen, then, in the context menu, click on `Service emails`{.action}.
>
> **Link validity period:**
>
> - After receiving the password change email, the reset link will remain valid for 48 hours. 
> - Once you click on this link, it will be valid for 30 minutes.
>

> [!warning]
>
> You can change the password for accessing your CMS admin interface via the OVHcloud Control Panel **only if the following conditions are met**:
>
> - The CMS was installed with the "1-click module" option when you ordered your hosting package or from the OVHcloud Control Panel.
> - The user (username, email address, etc.) has not been modified via the CMS or the database.
> - The access page for your CMS administration interface has not been modified. In particular, the URL for accessing your CMS administration interface must not have been modified via the CMS. Restrictions on this same page should not be in place.
> - The "prefix" of the tables in your database has not been modified from the CMS or the database directly.
>
> Otherwise, you will need to follow the official documentation for the CMS you are using, or contact the CMS publisher directly.
>

To change the password of your website’s administration interface **via the OVHcloud Control Panel**, click on `Web Cloud`{.action}, `Hosting`{.action}, the concerned hosting plan then on the `1-click modules`{.action} tab.

Then, click on the `...`{.action} button to the right of the line related to your module, then on `Modify password`{.action} and on `Confirm`{.action}. You will receive an email with a password reset link within a few minutes.

 [!primary]
>
> If you cannot change your password for accessing your CMS administration interface from the OVHcloud Control Panel for the reasons listed above, you will find the official documentation below for the different CMSs offered for installation on our shared hosting plans:
>
> - WordPress: <https://wordpress.org/support/article/resetting-your-password/>
> - Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> - Drupal: The publisher of this software does not currently offer any documentation for changing the password for accessing the Drupal administration interface. Please contact the publisher directly on this subject. For more information, see the official page [drupal.org](https://www.drupal.org/){.external}.
> - PrestaShop: The software publisher does not currently offer any documentation for changing the password for accessing the PrestaShop administration interface. Please contact the publisher directly on this subject. For more information, click [here](https://www.prestashop.com){.external} to go to their official page.
>
You can also change the password for accessing your CMS admin interface directly from your database.<br>
However, we strongly recommend using the documentation provided by your CMS publisher, or contacting a [specialist provider](https://partner.ovhcloud.com/en-au/) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.

### Delete your module

> [!warning]
>
> Backing up your data is an essential part of the [securing of your websites](https://docs.ovh.com/au/en/hosting/secure-website/). We recommend you to download regularly your data backup on a local device, such as an USB drive or external hard drive, following the instructions in this [guide](https://docs.ovh.com/au/en/hosting/export-a-website/).
>

#### Step 1: identify the database linked to your module <a name="step1"></a>

To delete your 1-click module, you must first identify its database with **certainty**. Go to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) and click on `Web Cloud`{.action}, `Hosting plans`{.action}, on the concerned hosting plan then on the `Databases`{.action} tab.


Otherwise, go to the `Multisite`{.action} tab. Note the `Root folder` name: this is the directory where the files that make up your 1-click module are located on the FTP server.

Then log on to the [FTP space](https://docs.ovh.com/au/en/hosting/log-in-to-storage-ftp-web-hosting/) of your hosting plan. Open the `Root folder` found earlier in the `Multisite`{.action} tab and browse to the configuration file for your module:

- *WordPress* : **"wp-config.php"** (the database name appears as **"DB_NAME"**).
- *Joomla!* : **"configuration.php"** (the database name appears under **"public $db"**).
- *Drupal*: **"settings.php"** (Go to the **"sites"** folder then open the **"default"** directory. The database name appears under the name **"database"**).
- *PrestaShop* : **"parameters.php"** (To find it, go to the **"app"** folder, then click on **"config"**. The name of your module’s database will appear as **"database_name"**).

#### Step 2: backup your data

To back up your website, follow the instructions of this [guide](https://docs.ovh.com/au/en/hosting/export-a-website/) to retrieve its files from the FTP space of your hosting plan and its database.

#### Step 3: delete your module

> [!alert]
>
> Deleting your 1-click module and its database will also delete **all of their backups**. Deleted data cannot be retrieved later on.
>

To delete your 1-click module, go to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), click on `Web Cloud`{.action}, `Hosting plans`{.action}, on the concerned hosting plan then on `1-click modules`{.action}.

Then click on the `...`{.action} button to the right of the line related to your module then click on `Delete the module`{.action}.

> [!warning]
>
> Deleting your 1-click module **will not automatically delete its database**. If you launch the installation of a new module without having previously deleted the database from the previous one and if your hosting plan does not allow the automatic creation of another database, the message "[An error has occurred loading the information (You need at least one free database)](https://docs.ovh.com/au/en/hosting/error-frequently-1-click-modules/#an-error-has-occurred-loading-the-information-you-need-at-least-one-free-database)" will appear on your control panel.
>
> If you have a [Personal Hosting](https://www.ovhcloud.com/en-au/web-hosting/personal-offer/) offer or if you already created all four databases of your [Professional](https://www.ovhcloud.com/en-au/web-hosting/professional-offer/) or [Performance Hosting](https://www.ovhcloud.com/en-au/web-hosting/performance-offer/), you will need to delete the database identified in [step 1](#step1) **BEFORE** creating a new 1-click module.
>

To complete the removal of your module, in the `Web Cloud`{.action}, `Hosting plans`{.action} sections, within the relevant hosting plan of your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), go to the `Databases`{.action} tab, then click on the `...`{.action} button on the right of the line concerning your database and on `Delete database`{.action}.

Before attempting to install a new module again, verify that the previously requested removal tasks have been completed in the `Ongoing jobs`{.action} tab.

### Best practices

Secure your website by following the instructions in this [guide](https://docs.ovh.com/au/en/hosting/secure-website/).

Add CAPTCHA-type verification tools to the forms on your website.

Do not install plugins or templates that have not been recommended by the official website or the community of your CMS:

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://community.joomla.org/){.external}
- [Drupal](https://www.drupal.org/community){.external}
- [PrestaShop](https://www.prestashop.com/en){.external}

## Go further <a name="go-further"></a>

[Resolving the most common 1-click module errors](https://docs.ovh.com/au/en/hosting/error-frequently-1-click-modules/).

For specialised services (SEO, development, etc.), contact the [OVHcloud partners](https://partner.ovhcloud.com/en-au/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our support [offers](https://www.ovhcloud.com/en-au/support-levels/).

Join our community on <https://community.ovh.com/en/>.