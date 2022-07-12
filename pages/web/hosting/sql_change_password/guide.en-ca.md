---
title: "Changing the password for a Web Hosting plan’s database"
slug: change-password-database
excerpt: Find out how to change the password for a database created as part of a Web Hosting plan
section: Databases
order: 2
---

**Last updated 26th January 2022**

## Objective

Most websites use a **database** to store their articles, comments, or users' email addresses.

You can connect to this database using a **configuration file** contained in the [file storage space](https://docs.ovh.com/ca/en/hosting/log-in-to-storage-ftp-web-hosting/) on your Web Hosting plan. It contains credentials that allows your website to access its **database server**.

The password change for a database must therefore always be carried out in two places:

- In your website’s [configuration file](https://docs.ovh.com/ca/en/hosting/1-click-module-management/#step-1-identify-the-database-linked-to-your-module) via the [FTP space on your Web Hosting plan](https://docs.ovh.com/ca/en/hosting/log-in-to-storage-ftp-web-hosting/).

- **And** on the server that contains their database, via the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca).

Until this change is made **in both locations**, your site will display a "[database connection error](https://docs.ovh.com/ca/en/hosting/database-frequent-errors/#error-establishing-a-database-connection)".

For this reason, if you would like to change your database password, you will need to carry out  **all of the operations** listed in this guide. If you have any doubts about how to proceed, contact your webmaster or contact a [specialised service provider](https://partner.ovhcloud.com/en-ca/directory/).

There are four steps to changing your website’s database password:

- [Step 1: identify your website configuration file](#step1)
- [Step 2: identify your website database](#step2)
- [Step 3: change the password for your website database in its configuration file](#step3)
- [Step 4: change the password for your website database on the database server](#step4)

**This guide explains how to change a database password securely.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-ca/directory/) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- An OVHcloud [Web Hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- A [database associated with your hosting](https://www.ovhcloud.com/en-ca/web-hosting/options/start-sql/)
- FTP login details to log in to your [hosting’s storage space](https://docs.ovh.com/ca/en/hosting/log-in-to-storage-ftp-web-hosting/)

## Instructions

### Step 1: Identify your website’s configuration file <a name="step1"></a>

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca), click on `Web Cloud`{.action}, then on `Hosting plans`{.action} and finally the hosting plan concerned. Then go to the `Multisite`{.action} tab. Identify the name of your site's `Root folder` (the directory in which its files and folders are located).

![root_folder](images/root_folder.png){.thumbnail}

Then click on the `FTP-SSH`{.action} tab and go to the space containing your website’s files and folders (the *FTP space*) by clicking `FTP Explorer`{.action}.

> [!primary]
>
> If you would like to change the password on your FTP space, please refer to this [guide](https://docs.ovh.com/ca/en/hosting/modify-ftp-user-password/).
>
> If you would like to use another method to log in, please refer to this [guide](https://docs.ovh.com/ca/en/hosting/log-in-to-storage-ftp-web-hosting/).
>

Open the `Root folder` identified previously.

Locate and open your site's configuration file:

- For a WORDPRESS site, open "**wp-config.php**".
- For a JOOMLA site, open "**configuration.php**".
- For a DRUPAL site, click on the "**sites**" folder, then "**default**". The configuration file is "**settings.php**".
- For a PRESTASHOP website, click on the "**app**" folder, then "**config**". The configuration file is "**parameters.php**".

### Step 2: Identify your website’s database <a name="step2"></a>

In the configuration file identified in [step 1](#step1), start by noting down the name of its database:

- For WORDPRESS: The name appears under "**DB_NAME**".
- For JOOMLA: The name appears under "**public $db**".
- For DRUPAL: The name appears under "**database**".
- For PRESTASHOP: The name appears under "**database_name**".

Then go back to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and open the `Web Cloud`{.action} section:

- Go to the `Hosting plans`{.action} section, then to the Web Hosting plan concerned.
- Click on `Databases`{.action} tab **on the right-hand side** of your screen.
- Locate the database name previously found in the `Database Name` column.

### Step 3: Change the password for your website’s database in its configuration file <a name="step3"></a>

> [!primary]
>
> For more information on password management best practices, follow the instructions in [this guide](https://docs.ovh.com/ca/en/customer/manage-password/).
>

Choose the new password for your database and save it. It must meet the following conditions:

- Minimum 8 characters
- Maximum 30 characters
- At least one capital letter
- At least one lower-case letter
- At least one number
- Only numbers and letters

As described in [step 1](#step1), go back to your Web Hosting plan’s file storage space, then open your website’s configuration file for editing.

**Before you make any changes**, save the content of this file locally in a text document, so that you keep a copy if you make any mistakes.

Manually replace your database password while **avoiding changing or deleting any other elements of the configuration file** (in the extracts below, only the sample password `*0VhCloudPa55w0rdDB123*` should be replaced):

- In the configuration file of a WORDPRESS website, modify "**DB_PASSWORD**":

```php
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbname123');
 
/** MySQL database username */
define('DB_USER', 'dbname123');
 
/** MySQL database password */
define('DB_PASSWORD', '0VhCloudPa55w0rdDB123');
 
/** MySQL hostname */
define('DB_HOST', 'dbname123.mysql.db:3306');
```

- In the configuration file of a JOOMLA website, modify "**public $password**" (at the end of the configuration file):

```php
public $host = 'dbname123.mysql.db:3306';
public $user = 'dbname123';
public $password = '0VhCloudPa55w0rdDB123';
public $db = 'dbname123';
```

- In the configuration file of a DRUPAL website, modify "**password**":

```php
$databases['default']['default'] = array (
  'database' => 'dbname123',
  'username' => 'dbname123',
  'password' => '0VhCloudPa55w0rdDB123',
  'prefix' => 'prefix123_',
  'host' => 'dbname123.mysql.db',
  'port' => '3306',
```

- In the configuration file of a PRESTASHOP website, modify "**database_password**":

```php
'database_host' => 'dbname123.mysql.db',
'database_port' => '3306',
'database_name' => 'dbname123',
'database_user' => 'dbname123',
'database_password' => '0VhCloudPa55w0rdDB123',
```

Save this change.

### Step 4: Change the password for your website’s database on the database server <a name="step4"></a>

> [!primary]
>
> This operation will take a few minutes to take effect. Once you have launched it, check its status in the `Ongoing tasks`{.action} tab.
>

In the `Hosting Plans`{.action} section of the OVHcloud Control Panel, go to the `Databases`{.action} tab on the right-hand side of your screen:

![database-password-step1](images/database-password-step1.png){.thumbnail}

Next, click on the three dots to the right of your website’s database, then on `Change password`{.action}.

![database-password-step2](images/database-password-step2.png){.thumbnail}

In the window that pops up, enter your database’s new password (defined at [step 3](#step3)), confirm it, then click on `Confirm`{.action}.

![database-password-step3](images/database-password-step3.png){.thumbnail}

## Go further <a name="gofurther"></a>

[FileZilla software usage with your hosting](https://docs.ovh.com/ca/en/hosting/web_hosting_filezilla_user_guide/)

[Change your account password](https://docs.ovh.com/ca/en/customer/manage-password/)

[Troubleshoot common database errors](https://docs.ovh.com/ca/en/hosting/database-frequent-errors/)

For specialised services (SEO, development, etc.), contact your [OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).

Join our community of users on <https://community.ovh.com/en/>.
