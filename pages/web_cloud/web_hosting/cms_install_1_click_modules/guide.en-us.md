---
title: "Setting up your website with a 1-click module (CMS)"
excerpt: "Find out how to set up your website using our 1-click modules"
updated: 2024-10-07
---

## Objective

OVHcloud 1-click modules allow quick and easy website setups (without technical skills required). A 1-click module refers to an automated installation of a **C**ontent **M**anagement **S**system **(CMS)**. In this way, OVHcloud offers a simplified installation process for some of the most popular CMSs: *WordPress*, *Joomla!*, *Drupal*, and *PrestaShop*.

**This guide explains how to how to set up your website using an OVHcloud 1-click module.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/lZYRKYuh2xE?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requirements

- You have access to the [OVHcloud Control Panel](/links/manager).
- You have an [OVHcloud web hosting plan](/links/web/hosting) that contains at least one database.
- Your OVHcloud web hosting uses a recent PHP version and a compatible runtime environment. You can check the status of the different versions on [this page](https://webhosting-infos.hosting.ovh.net/). If you need assistance with this, please refer to our [guide](/pages/web_cloud/web_hosting/configure_your_web_hosting), to change this configuration quickly.
- A configured file "[.ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)" must be present in the FTP root of your web hosting plan.
- If you want to install the 1-click module in an existing folder, this folder must be empty.
- The domain name (with subdomain if desired) that will be used for your website must be declared as a [Multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) on your OVHcloud web hosting plan.

## Instructions

> [!primary]
>
> If you encounter any difficulties by following any of the steps described below, please refer to our specific documentation on [the most common errors related to 1-click modules](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic). 
>

### Step 1: Decide on a CMS to use

With a CMS, you can build a website via an easy-to-use interface. Several types of CMS exist, some are designed to create an e-commerce website, others to set up a showcase website, a blog, etc. You can then configure a ready-to-use, customisable website structure (themes, extensions, text, etc.) to suit your needs.

Of all CMSs, OVHcloud offers 4 with its 1-click modules, which can be installed automatically. 

Using this solution, you will need to choose from the 4 CMSs listed above. If you have already made your choice, continue reading the steps in this guide. Otherwise, please refer to our [CMS comparison](/links/web/hosting-cms-comparison) to make your choice.

If you would like to install a CMS that is not available as a 1-click modules, you can install it manually on your web hosting plan. This is provided that the CMS is compatible with our [OVHcloud web hosting offers](/links/web/hosting).

![CMS logos](/pages/assets/screens/other/cms/cms-logos.png){.thumbnail}

### Step 2: Access the 1-click module manager

Log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action} in the top navigation bar. Click `Hosting plans`{.action}, then choose the web hosting plan you would like to install a 1-click module on. Then click the `1-click modules`{.action} tab.

You will find any 1-click modules already installed. You can manage your 1-click modules and install new ones.

![Access to the 1-click modules section](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/tab.png){.thumbnail}

### Step 3: Add a 1-click module

In the `1-click modules`{.action} tab of your hosting, click on the `Add a module`{.action} button.

In the window that pops up, choose the CMS you want to use, then select the domain name you want to set up your website with:

![Choose a module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-select-module-and-domain.png){.thumbnail}

If your domain is not in the list, go to the `Multisite`{.action} tab to add it. See our guide [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite){.external} if required.

> [!primary]
>
> Below the form for selecting a domain name (or subdomain), verify that the default `Installation path` is the one in which you want to install your 1-click module.
>
> As a reminder, this directory must be completely empty.
>
> If you need assistance, please refer to our guide on [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite) to modify your domain name’s target directory.
>

Once your domain has been correctly added, try adding a 1-click module again.

Once you have selected a CMS, choose between a **fast** or **advanced** installation:

- **Quick** installation (selected by default): OVHcloud installs the CMS, and provides you with your admin credentials via email on the OVHcloud contact email address. This is the easiest and fastest way to install a 1-click module.
- **Advanced** installation: It allows you to customise the configuration for the CMS installation. You will need to enter all of the information required for the CMS to work properly: 
    - Login information for your database (server, username, port, password, etc.)
    - Installation path in your web hosting plan’s FTP storage space
    - CMS language
    - Administrator credentials (administrator name, password, email address, etc.)

#### Quick installation of a 1-click module

Choose the domain name for your CMS, verify the target directory that will appear automatically after you have chosen your domain name, then check that the `Installation in advanced mode`{.action} box has not been ticked. Then click the `Install`{.action} button.

> [!warning]
>
> The installation directory for your 1-click module must be empty, and you must have at least one database available to create on your OVHcloud web hosting plan for the installation to be carried out.
>
> For a quick installation, do not create the database beforehand because the installation robot will take care of it.
>

![Basic module installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-quick-mod-step-1-b.png){.thumbnail}

Once the installation is complete, you will receive an email containing the login details for your CMS administrator interface (back office). Log in to the interface to customise your website.

> [!primary]
>
> It may take up to 15 minutes for the module to be installed after you click the `Install`{.action} button in your [OVHcloud Control Panel](/links/manager).
>

#### Advanced installation of a 1-click module

To perform this installation method, ensure that the `Installation in advanced mode`{.action} box is ticked, then click `Next`{.action}:

![Advanced module installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-1.png){.thumbnail}

##### Choose a database

Enter the information required to connect to your database.

> [!warning]
>
> If the information you enter is incorrect, the installation will not complete successfully. To avoid this, we recommend that you test the connection to your database.
> 
> To retrieve the login details for your database included in your web hosting plan, please refer to [this guide](/pages/web_cloud/web_hosting/sql_create_database).
>
> To retrieve the login details for a database created on a Cloud Web Databases instance, please refer to [this guide](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

![Database for advanced installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-3.png){.thumbnail}

There are several possibilities:

- The database has already been created on your web hosting plan: Select it from the `Select the database`{.action} dropdown menu, then enter the information requested.
- The database has not yet been created on your web hosting plan: [Create your database included with your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database), go back to the `Select the database`{.action} drop-down menu and enter the information requested.
- The database is [created on your Web Cloud Databases instance](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server): In the `Select the database`{.action} dropdown menu, select `Database aside from your web hosting`{.action} and enter the requested information. The instance and web hosting plan must be hosted in the same data centre.
- The database is created on another OVHcloud web hosting plan: In the `Select the database`{.action} drop-down menu, select `Database aside from your web hosting`{.action} and enter the requested information. The database and web hosting plan must be hosted in the same data centre.

The remaining information requested for the database is as follows:

- *Server address*: Enter the name of your database server, included in the installation email and displayed in your OVHcloud Control Panel. 

> [!primary]
> 
> - The server name of a database included with your web hosting plan usually has this form: `NameOfYourDatabase.mysql.db`. 
>
> - The server name of a Cloud Web Databases database starts with your OVHcloud NIC handle and is in the following form: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` where the **"X"** are to be replaced by the reference of your Cloud Databases web service.
>

- *Database name*: this name was defined when the database was created in the [OVHcloud Control Panel](/links/manager).

- *Port*: Use the number **3306** (the default port) for a database included with your web hosting plan. For a database on a Cloud Web Databases instance, see [this guide](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

- *User name*: It is identical to the database name if you are using a database included with your web hosting plan. For databases created on a Web Cloud Databases solution, please refer to the information in [this guide](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

- *Password*: It was sent to you by email when the database was created. You may have modified it in the meantime.

Once you have entered this information, click `Next`{.action}.

##### Configure the module

Enter the following information for the module configuration:

- *Admin name or email address:* The username you will use to log in to your CMS administration interface (back office).
- *Password:* The password you use to log in to your CMS admin interface.
- *Domain:* The domain name you would like to install your CMS with. If you need help with this, please refer to our guide on [How to host multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- *Language:* The language in which the CMS will be installed.
- *Installation path:* This is automatically entered when you select your domain name. You can complete it by entering subdirectories (for informed users).

> [!primary]
>
> Check that the `Installation path` contains the directory where you want to install your 1-click module with your domain name.
>
> As a reminder, this directory must be completely empty.
>
> In addition, if you enter a subdirectory in the `Installation path` field, it will appear in the URL used to access your 1-click module.
> For example, if you enter the subdirectory *test*, the URL to access the 1-click module will look like this: **http://domain.tld/test/**.
>
> If you need assistance, please refer to our guide on [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite) to modify your domain name’s target directory.
>

Once you have entered this information, click `Next`{.action}:

> [!warning]
>
> The final folder specified in the installation path must be completely empty for the installation to succeed.
>

![Module configuration for advanced installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-2.png){.thumbnail}

##### Confirm the installation

Check the information displayed, then click on `Confirm`{.action} if everything is in order:

![Validating installation in advanced mode](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-4.png){.thumbnail}

### Step 4: Customise your website

The installation can take up to ten minutes.

Once it has finished, you will receive an email confirming that your CMS has been set up correctly. This email will prompt you to log in to your CMS admin interface. This way, you can edit your website’s appearance, and publish your first pieces of content on it.

> [!warning]
>
> OVHcloud support does not provide assistance for using any CMS. The 1-click installation process is a free, noncontractual service to help install them. 
>

If you need help with your CMS's features, please contact the publisher of the CMS you have installed. You will find documentation to support you in your project.

|CMS|Official documentation|
|---|---|
|WordPress|[First steps with WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Getting started with PrestaShop](https://docs.prestashop-project.org/1.7-documentation/getting-started+Started){.external}|
|Joomla!|[Getting started with Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Understanding Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Go further

[Choosing a CMS for building your website](/links/web/hosting-cms-comparison){.external}.

[Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Managing a database on a web hosting plan](/pages/web_cloud/web_hosting/sql_create_database)

Explore our [Web Cloud Database solutions](/links/web/databases){.external}.

[Managing your CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

[Uninstalling your CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module#step-3-delete-your-module).

If you would like to retain full control over how your CMS is installed, you can [install a CMS manually on your OVHcloud web hosting plan](/pages/web_cloud/web_hosting/cms_manual_installation).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).