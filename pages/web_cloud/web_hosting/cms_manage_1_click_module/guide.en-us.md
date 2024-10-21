---
title: "How to manage your 1-click module"
excerpt: "Find out how to manage your 1-click module in the OVHcloud Control Panel"
updated: 2024-10-11
---

## Objective

The 1-click modules are a quick and easy way to install an online website creation software (commonly called "CMS"). OVHcloud offers the most well-known of those solutions: WordPress, PrestaShop, Drupal and Joomla!.

**Find out how to manage your 1-click module through the OVHcloud Control Panel.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on if you face difficulties or doubts. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- An [OVHcloud Web Hosting plan](/links/web/hosting) that allows you to install a 1-click module
- A 1-click module on your web hosting plan (If you did not install one yet, follow the instructions in this [guide](/pages/web_cloud/web_hosting/cms_install_1_click_modules))
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Access your website

To access the public section of your website after installing a 1-click module, go to the [OVHcloud Control Panel](/links/manager), click on `Web Cloud`{.action}, `Hosting plans`{.action}, on the relevant hosting plan then click on the `1-click modules`{.action} tab.

Next, click on the `...`{.action} button to the right of the line related to your 1-click module, then `Access module`{.action}.

> [!primary]
>
> If your website does not display properly after this, please refer to the OVHcloud web hosting guides in the [Troubleshooting](/products/web-cloud-hosting) section.
>

### Access the administrator interface

To access the admin section of your 1-click module, go to your [OVHcloud Control Panel](/links/manager), click on `Web Cloud`{.action}, `Hosting plans`{.action}, on the relevant hosting plan then click on the `1-click modules`{.action} tab.

Next, click on the `...`{.action} button to the right of the line for your module then `Access the module's administration interface`{.action}.

### Find the administrator login of your module

Click on the `1-click modules`{.action} tab in the `Hosting plans`{.action} section of your Control Panel. Your module’s admin ID will appear in the `Login` column.

You can also search for the email received after the creation of your module from your [OVHcloud Control Panel](/links/manager): click on your name in the top right-hand corner of the screen then, in the context menu, click on `Service emails`{.action}.

### Change your module password <a name="password-change"></a>

> [!primary]
>
> You will find the official documentation below for the different CMSs offered for installation on our shared hosting plans:
>
> - WordPress : <https://wordpress.org/support/article/resetting-your-password/>
> - Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> - Drupal : The publisher of this software does not currently offer any documentation for changing the password for accessing the Drupal administration interface. Please contact the publisher directly on this subject. For more information, see the official page [drupal.org](https://www.drupal.org/){.external}.
> - PrestaShop : The software publisher does not currently offer any documentation for changing the password for accessing the PrestaShop administration interface. Please contact the publisher directly on this subject. For more information, click [here](https://www.prestashop.com){.external} to go to their official page.
>
You can also change the password for accessing your CMS admin interface directly from your database.<br>
However, we strongly recommend using the documentation provided by your CMS publisher, or contacting a [specialist provider](/links/partner) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.

### Delete your module

> [!warning]
>
> Backing up your data is an essential part of the [securing of your websites](/pages/web_cloud/web_hosting/secure_your_website). We recommend you to download regularly your data backup on a local device, such as an USB drive or external hard drive, following the instructions in this [guide](/pages/web_cloud/web_hosting/exporter-son-site-web).
>

#### Step 1: Identify the database linked to your module <a name="step1"></a>

To delete your 1-click module, you must first identify its database with **certainty**. Go to your [OVHcloud Control Panel](/links/manager) and click on `Web Cloud`{.action}, `Hosting plans`{.action}, on the concerned hosting plan then on the `Databases`{.action} tab.

Otherwise, go to the `Multisite`{.action} tab. Note the `Root folder` name: this is the directory where the files that make up your 1-click module are located on the FTP server.

Then log on to the [FTP space](/pages/web_cloud/web_hosting/ftp_connection) of your hosting plan. Open the `Root folder` found earlier in the `Multisite`{.action} tab and browse to the configuration file for your module:

- WordPress: **"wp-config.php"** (the database name appears as **"DB_NAME"**).
- Joomla!: **"configuration.php"** (the database name appears under **"public $db"**).
- Drupal: **"settings.php"** (Go to the **"sites"** folder then open the **"default"** directory. The database name appears under the name **"database"**).
- PrestaShop: **"parameters.php"** (To find it, go to the **"app"** folder, then click on **"config"**. The name of your module’s database will appear as **"database_name"**).

#### Step 2: Back up your data

To back up your website, follow the instructions of this [guide](/pages/web_cloud/web_hosting/exporter-son-site-web) to retrieve its files from both the FTP space on your hosting plan and its database.

#### Step 3: Delete your module

> [!alert]
>
> Deleting your 1-click module and its database will also delete **all of their backups**. Deleted data cannot be retrieved later on.
>

To delete your 1-click module, go to your [OVHcloud Control Panel](/links/manager), click on `Web Cloud`{.action}, `Hosting plans`{.action}, on the concerned hosting plan then on `1-click modules`{.action}.

Then click on the `...`{.action} button to the right of the line related to your module then click on `Delete the module`{.action}.

> [!warning]
>
> Deleting your 1-click module **will not automatically delete its database**. If you launch the installation of a new CMS without having previously deleted the database from the previous one and if your hosting plan does not allow the automatic creation of another database, the message "[An error has occurred loading the information (You need at least one free database)](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic#an-error-has-occurred-loading-the-information-you-need-at-least-one-free-database)" will appear in your Control Panel.
>
> If you have a [Personal Hosting](/links/web/hosting-personal-offer) subscription or if you have already created all four databases of your [Pro Hosting](/links/web/hosting-professional-offer) or [Performance Hosting](/links/web/hosting-performance-offer), you will need to delete the database identified in [step 1](#step1) **BEFORE** creating a new 1-click module.
>

To complete the removal of your module, in the `Web Cloud`{.action}, `Hosting plans`{.action} sections, within the relevant hosting plan of your [OVHcloud Control Panel](/links/manager), go to the `Databases`{.action} tab. Next, click on the `...`{.action} button to the right of the line concerning your database and on the `Delete database`{.action} button.

Before attempting to install a new module again, verify that the previously requested removal tasks have been completed in the `Ongoing jobs`{.action} tab.

### Best practices

Secure your website by following the instructions in this [guide](/pages/web_cloud/web_hosting/secure_your_website).

Add CAPTCHA-type verification tools to the forms on your website.

Do not install plugins or templates that have not been recommended by the official website or the community of your CMS:

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://community.joomla.org/){.external}
- [Drupal](https://www.drupal.org/community){.external}
- [PrestaShop](https://www.prestashop.com/en){.external}

## Go further <a name="go-further"></a>

[Resolving the most common 1-click module errors](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

For specialised services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).