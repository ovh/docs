---
title: Changing the password for a Web Hosting plan’s database
slug: change-password-database
excerpt: Find out how to change the password for a database created as part of a Web Hosting plan
section: Databases
order: 2
---

**Last updated 26/01/2022**

## Objective

Most websites use a **database** to store their articles, comments, or users' email addresses.

You can connect to this database using a configuration **file** contained in [the file](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) storage space on your Web Hosting plan. It contains information that allows your website to “log in” to its **database** server.

The password change for a database must therefore always be carried out:

- In your website’s configuration [file](https://docs.ovh.com/fr/hosting/1-click-module-management/#etape-1-identifier-la-base-de-donnees-lie-a-votre-module) via [the FTP space on your web hosting plan](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).

- **And** on the server that contains their database, via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Until this change is made **in both locations**, your site will display a \`database[ connection ](https://docs.ovh.com/fr/hosting/erreurs-frequentes-bases-de-donnees/#erreur-lors-de-la-connexion-a-la-base-de-donnees)error\`.

For this reason, if you would like to change your database password, you will need to carry out all **of the operations** listed in this guide. If you have any doubts about how to proceed, contact your webmaster or contact a [specialised](https://partner.ovhcloud.com/fr/directory/) service provider.

There are four steps to changing your website’s database password:

- [Step 1: Identify your site](#step1) configuration file
- [Step 2: Identify your site](#step2) database
- [Step 3: change the password for your website’s database in its configuration](#step3) file
- [Step 4: change the password for your website’s database on the database](#step4) server.

**Find out how to change a database password securely.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](#aller-plus-loin) section of this guide.
>

## Requirements

- an [OVHcloud web hosting plan](https://www.ovhcloud.com/fr/web-hosting/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Use a [database associated with your shared hosting](https://www.ovhcloud.com/fr/web-hosting/options/start-sql/) plan or a Private[ SQL ](https://docs.ovh.com/fr/hosting/premiers-pas-avec-sql-prive/)server or [CloudDB](https://www.ovh.com/fr/cloud-databases/).
- You must have FTP login details to log in to your hosting plan’s storage [space](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).

## Instructions

### Step 1: identify your website’s configuration file <a name="step1"></a>

In the OVHcloud Control [Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), click on `Web Cloud`{.action}, then on the menu on the left-hand side of your screen, Hosting` `{.action}, and finally the hosting plan concerned. Then go to the `Multisite`{.action} tab. Identify the name of your site's `Root` Folder (the directory in which its files and folders are located).

![root_folder](images/root_folder.png){.thumbnail}

Then click on the `FTP - SSH`{.action} tab, and go to the space containing your website’s files and folders (the FTP* *space) by clicking `FTP Explorer`{.action}.

> [!primary]
>
> If you would like to change the password on your FTP space, please refer to this [guide](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/).
>
> If you would like to use another method to log in, please refer to this [guide](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>

Open the `Root` folder identified above.

Locate and open your site's configuration file:

- For a WORDPRESS site, this is **“wp-config.php”**;
- For a JOOMLA site, this is “**configuration.php”**;
- For a DRUPAL site, click on the \`**sites\`** folder, then \`**default\`**. The configuration file is **“settings.php”**;
- For a PRESTASHOP website, click on the “**app”** folder, then “**config”**. The configuration file is **parameters.php**.

### Step 2: identify your website’s database <a name="step2"></a>

There are two possible cases:

- Case 1: your website database is part of your hosting plan
- Case 2: it is included in a Private *SQL or *CloudDB* offer, in which case you will need to find the server* **name and the user** ** **name of your database, in order to identify the database without any risk of error.

To determine which case applies to your site, in the configuration file identified in [step 1](#step1), start by noting down the name of its database:

- For WORDPRESS: the name appears under **DB_NAME**;
- JOOMLA: the name appears under **“public $db”**;
- For DRUPAL: the name appears under **database**.
- For PRESTASHOP: the name appears under **database_name**.

Then go back to the OVHcloud Control [Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), and open the `Web Cloud`{.action} section:

- Go to the `Web Hosting`{.action} section, then to the Web Hosting plan concerned.
- Click the `Databases`{.action} **tab to the right** of your screen.
- Locate the database name previously found in the `Database` Name column.

If you have found the database name listed in the configuration file in this section of the OVHcloud Control Panel, go to [step 3](#step3).

Otherwise, your website’s database is linked to a Private [SQL or ](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/)CloudDB[ ](https://www.ovh.com/fr/cloud-databases/) solution.

You will need to go back to your website’s configuration file to note the server *name* and database user *name*:

- For WORDPRESS: the *name of the server* appears under **DB_HOST** and the *username* under **DB_USER**;
- JOOMLA: the server *name* appears under **“public $host”** and the *username* appears under “**public $user”**;
- For DRUPAL: the server *name* appears under **'host'** and the *username* appears under **'username'**;
- For PRESTASHOP: the server *name* appears under **'database_host'** and the *username* appears under '**database_user'**.

Next, click **Databases on the **left`-hand side of your screen`{.action}. 

In the `General`{.action} information tab, identify the database server name you previously found in your Private[ ](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/)SQL or [CloudDB](https://www.ovh.com/fr/cloud-databases/) solutions, listed under `Host`{.action} name.

In this section of the OVHcloud Control Panel, go to the `User rights`{.action} tab, and find your database’s `username`{.action}.

### Step 3: Change the password for your website’s database in its configuration file <a name="step3"></a>

> [!primary]
>
> For more information on password management best practices, follow the instructions in this [guide](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).
>

Choose the new password for your database, and write it down. They must meet the following conditions:

- Minimum 8 characters
- Maximum 30 characters
- At least one capital letter
- At least one lower-case letter
- At least one number;
- Be composed only of numbers and letters.

As you did in [step 1](#step1), go back to your Web Hosting plan’s file storage space, then open your website’s configuration file for editing.

**Before you make any changes**, save the contents of this file locally in a text document, so that you keep a copy if you make any mistakes.

Manually replace your database password **by avoiding changing or deleting any other elements of the configuration** file (in the extracts below, only the sample password \`*0VhCloudPa55w0rdDB123*\` should be replaced):

- In the configuration file of a WORDPRESS site, edit the **DB_PASSWORD**:

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

- In the configuration file of a JOOMLA website, modify the **“public $password”** (at the end of the configuration file):

```php
public $host = 'dbname123.mysql.db:3306';
public $user = 'dbname123';
public $password = '0VhCloudPa55w0rdDB123';
public $db = 'dbname123';
```

- In the DRUPAL website configuration file, change the **“password”**:

```php
$databases['default']['default'] = array (
  'database' => 'dbname123',
  'username' => 'dbname123',
  'password' => '0VhCloudPa55w0rdDB123',
  'prefix' => 'prefix123_',
  'host' => 'dbname123.mysql.db',
  'port' => '3306',
```

- In the configuration file of a PRESTASHOP website, modify the **“database_password”**:

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
> This operation will take a few minutes to take effect. Once you have launched it, check its status in the `Ongoing`{.action} tasks tab.
>

Again, two cases are possible: 

- If your database is located in the section of the OVHcloud Control [Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) that is dedicated to your [web](https://www.ovhcloud.com/fr/web-hosting/) hosting plan, follow these [instructions](#case1).

- If your database is located in the section of the OVHcloud Control [Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) dedicated to your Private [SQL or ](https://www.ovhcloud.com/fr/web-hosting/options/private-sql/)CloudDB[ solutions, follow these ](https://docs.ovh.com/fr/clouddb/)instructions[ ](#case2).

#### Case 1: your website’s database is part of your hosting plan <a name="case1"></a>

In the `Hosting`{.action} section of the OVHcloud Control Panel, go to the `Databases`{.action} tab on the right-hand side of your screen:

![database-password-step1](images/database-password-step1.png){.thumbnail}

Next, click on the three dots to the right of your website’s database, then `Change password`{.action}.

![database-password-step2](images/database-password-step2.png){.thumbnail}

In the window that pops up, enter your database’s new password (defined in [step 3](#step3)), confirm it, then click `Confirm`{.action}.

![database-password-step3](images/database-password-step3.png){.thumbnail}

#### Case 2: your website’s database is part of a Private SQL or CloudDB solution <a name="case2"></a>

Go to the `Databases`{.action} section in your Control Panel (left-hand menu), and click on the server concerned, then click on `Users and permissions`{.action}:

![userDBpassword-step1](images/userDBpassword-step1.png){.thumbnail}

To change the password for your database on the server, click on the three dots to the right of the `username`{.action} identified in [step 2](#step2), then on `Change password`{.action}.

![userDBpassword-step2](images/userDBpassword-step2.png){.thumbnail}

In the window that pops up, enter your database’s new password (defined in [step 3](#step3)), confirm it, then click `Confirm`{.action}.

![userDBpassword-step3](images/userDBpassword-step3.png){.thumbnail}

## Go further <a name="aller-plus-loin"></a>

[FileZilla software usage with your hosting](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

[Change your account password](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/)

[Troubleshoot common database errors](https://docs.ovh.com/fr/hosting/erreurs-frequentes-bases-de-donnees/)

For specialised services (SEO, development, etc.), contact [OVHcloud](https://partner.ovhcloud.com/fr/) partners.

Join our community of users on <https://community.ovh.com/>.