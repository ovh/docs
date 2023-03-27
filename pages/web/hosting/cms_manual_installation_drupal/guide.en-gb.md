---
title: "Tutorial -Installing Drupal manually"
excerpt: "Find out how to install Drupal manually"
slug: cms_manually_install_drupal
section: CMS
order: 06
updated: 2023-03-27
---

**Last updated 27th March 2023**

## Objective

This tutorial will help you install Drupal CMS (Content Management System) manually in just a few steps.

 [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This tutorial is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) or the [Drupal support](https://www.drupal.org/support){.external} if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

> [!success]
>
> To install Drupal **automatically** from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), please refer to our documentation on [installing a 1-click module](https://docs.ovh.com/gb/en/hosting/web_hosting_web_hosting_modules/).
>
> To manually **install another CMS** (WordPress, Joomla!, PrestaShop), please refer to our documentation on [installing a CMS manually](https://docs.ovh.com/gb/en/hosting/hosting_install_your_cms_manually/).
>

**Find out how to install your Drupal CMS manually**

## Requirements

- An [OVHcloud web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/) that contains at least one database
- A [domain name](https://www.ovhcloud.com/en-gb/domains/)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Step 1 - Prepare for the installation <a name="step1"></a>

To install the **Drupal** CMS on your [web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/), you will need to make some preparations.

Follow **all of steps** described in our tutorial on [installing a CMS manually](https://docs.ovh.com/gb/en/hosting/hosting_install_your_cms_manually/) before continuing with step 2 below.

### Step 2 - Finalise the installation <a name="step2"></a>

> [!success]
>
> Before you continue with the installation, clear your web browser cache to avoid any errors.
>

#### 2.1 - Access your Drupal website via your browser

Enter your domain name into the address bar of your web browser.

If the Drupal source files have been correctly placed in your root folder, the Drupal page for selecting the language appears:

![Drupal installation step 1](images/Drupal-install-language-1.png){.thumbnail}

Select the site language and click `Save and Continue`{.action}.

#### 2.2 - Choose installation type

Drupal offers several levels of installation:

- a standard version (recommended), 
- a minimum version
- a presentation version

![Drupal installation step 2](images/Drupal-install-profil-2.png){.thumbnail}

We recommend that you perform a **Standard** installation. Then click `Save and continue`{.action}.

### 2.3 - Link your Drupal and your database

Enter the information requested for the database:

![Drupal installation step 3](images/Drupal-install-db-config-3.png){.thumbnail}

Having your database login details ready (if necessary, see **Step 1.4** in the [manual installation of a CMS](https://docs.ovh.com/gb/en/hosting/hosting_install_your_cms_manually/) tutorial).

- *Database type*: select your database type from the choices available.

- *Database name*: this name was defined when the database was created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).

- *Database username*: It is identical to the database name if you are using a database included with your web hosting plan.For databases created on Web Cloud Databases, please refer to the information in **Step 1.4** in the [manual installation of a CMS](https://docs.ovh.com/gb/en/hosting/hosting_install_your_cms_manually/) tutorial.

- *Database password*: You defined it yourself when you created your database. You may have modified it in the meantime.

Click on `Advanced Options`{.action} to see the rest of the menu.

- *Host*: The name of your database server, included in the installation email and displayed in your OVHcloud Control Panel. 

> [!primary]
> 
> - The server name of a database included with your web hosting plan usually has this format: `NameOfYourDatabase.mysql.db`. 
>
> - The server name of a Web Cloud Databases database starts with your OVHcloud NIC handle and is in the following format: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` where **"XXX"** is to be replaced by the reference of your Web Cloud Databases service.
>

- *Port number*: If you are using a database included with your OVHcloud hosting plan, please leave **3306** by default. If you are using a *Web Cloud Databases* service, please refer to **Step 1.4** in the tutorial on [manually installing a CMS](https://docs.ovh.com/gb/en/hosting/hosting_install_your_cms_manually/) to retrieve the correct port number.

- *Table name prefix*: if you are installing with a brand new database, enter your preferred “prefix”. If you are using a database that has already been used by another website, please refer to **Step 1.4** in the tutorial on [manually installing a CMS](https://docs.ovh.com/gb/en/hosting/hosting_install_your_cms_manually/) to avoid entering a table “prefix” that has already been used in your database.


Click `Save and Continue`{.action}.

If everything has been done correctly, Drupal will be installed:

![Drupal installation step 4](images/Drupal-install-4.png){.thumbnail}

#### 2.4 - Configure Site Information and Administrator Access

Once the previous step is complete, the following page is displayed:

![Drupal installation step 5-1](images/Drupal-install-configure-site-5-1.png){.thumbnail}

Enter the information requested:

- *Site name*: enter the name of your future Drupal website.

- *Site email address*: enter a valid email address that will be used by your Drupal website.

- *Username*: Enter a username to log in to your Drupal (Back Office) administration panel.

- *Password* and *Confirm password*: set the password that will be associated with your username to access your *Back Office* Drupal.

Then continue to the bottom of the page:

![Drupal installation step 5-1](images/Drupal-install-configure-site-5-2.png){.thumbnail}

- *Email address*: enter your email address. Ideally, enter the same address you entered earlier in the form *Site email address*.

- *Default country*: choose the country where your website will be visited the most.

- *Default time zone*: select the default time zone for your website.

Click `Save and Continue`{.action}.

If everything went well, the following page appears:

![Drupal installation step 6](images/Drupal-install-ending-6.png){.thumbnail}

> [!success]
>
> Drupal installation is complete, you can now start creating the content of your Drupal website!
>

## Go further <a name="go-further"></a>

[Drupal official website](https://www.drupal.org/){.external}

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 