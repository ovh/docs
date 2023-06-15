---
title: "Tutorial - Installing PrestaShop manually"
excerpt: "Find out how to manually install PrestaShop"
slug: cms_manually_install_prestashop
section: CMS
order: 07
updated: 2023-03-27
---

**Last updated 27th March 2023**

## Objective

This tutorial will help you install PrestaShop CMS (Content Management System) manually in just a few steps.

[!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This tutorial is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-ca/directory/) or the [PrestaShop support](https://www.prestashop.com/en/support){.external} if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

> [!success]
>
> To install PrestaShop **automatically** from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca), please refer to our documentation on [installing a 1-click module](https://docs.ovh.com/ca/en/hosting/web_hosting_web_hosting_modules/).
>
> To manually **install another CMS** (WordPress, Joomla!, Drupal), please refer to our documentation on [installing a CMS manually](https://docs.ovh.com/ca/en/hosting/hosting_install_your_cms_manually/).
>

**This tutorial explains how to install your PrestaShop CMS manually.**

## Requirements

- An [OVHcloud web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/) that contains at least one database
- A [domain name](https://www.ovhcloud.com/en-ca/domains/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)

## Instructions

### Step 1: Prepare for the installation <a name="step1"></a>

To install the **PrestaShop** CMS on your [web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/), you will need to make some preparations.

Follow **all steps** described in our tutorial on [installing a CMS manually](https://docs.ovh.com/ca/en/hosting/hosting_install_your_cms_manually/) before continuing with step 2 below.

### Step 2: Finalise the installation <a name="step2"></a>

> [!success]
>
> Before you continue with the installation, clear your web browser cache to avoid any errors.
>

If you have not downloaded the latest available version of PrestaShop, the following page will appear:

![PrestaShop installation step 1](images/Prestashop-install-update-version.png){.thumbnail}

Click `No thanks`{.action} if you want to keep the version of PrestaShop you just downloaded or `Yes please!`{.action} if you want to use the latest version of the CMS.

#### 2.1 Access your Drupal website via your browser

Enter your domain name into the address bar of your web browser.

If the Drupal source files have been correctly placed in your root folder, the Drupal page for selecting the language appears:

![PrestaShop installation step 2](images/Prestashop-install-select-language.png){.thumbnail}

Select the site language and click `Next`{.action}.

#### 2.2 Confirm the terms and conditions

Review the *license agreements*, check the `I agree to the above terms and conditions`{.action} box, then click `Next`{.action}.

![PrestaShop installation step 3](images/Prestashop-install-licence-agreement-3.png){.thumbnail}

#### 2.3 Enter your online store details

PrestaShop will request a series of information about your future online store:

![PrestaShop installation step 4](images/Prestashop-install-store-infos-4.png){.thumbnail}

**Store information**

- *Shop name*: Enter your online store name.
- *Main activity*: Select your business sector from the drop-down menu.
- *Country*: Select your country.
- *Enable SSL*: Tick **Yes** to force your URL to be rewritten to https://. You will need to have an active SSL certificate on your Web Hosting plan or domain name. For more information on this, please refer to our guide on [Managing an SSL certificate on an OVHcloud Web Hosting plan](https://docs.ovh.com/ca/en/hosting/ssl-certificates-on-web-hosting-plans/).

**Your account**

- *First name*: Enter your first name.
- *Last name*: Enter your name.
- *E-mail address*: Enter your email address.
- *Shop password*: Choose a password to access your online store's administration panel (back office).
- *Re-type to confirm*: Type the password again.

Review the information entered, then click `Next`{.action}.

### 2.4 Install the default content for your store

PrestaShop allows you to install content and modules for your future e-commerce site:

![PrestaShop installation step 5](images/Prestashop-install-store-content-5.png){.thumbnail}

Make your choices and click `Next`{.action}.

### 2.5 Link your PrestaShop to your OVHcloud database

![PrestaShop installation step 6](images/Prestashop-install-db-config-6.png){.thumbnail}

Have your database login details ready (if necessary, see **Step 1.4** in the [manual installation of a CMS tutorial](https://docs.ovh.com/ca/en/hosting/hosting_install_your_cms_manually/)).

Enter the information requested for the database:

- *Database server address*: Enter the name of your database server, specified in the installation email and displayed in your OVHcloud Control Panel.

> [!primary]
> 
> - The server name of a database included with your web hosting plan usually has this format: `NameOfYourDatabase.mysql.db`.
>
> - The server name of a Web Cloud Databases database starts with your OVHcloud NIC handle and is in the following format: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` where **"XXX"** is to be replaced by the reference of your Web Cloud Databases service.
>

- *Database name*: This name was defined when the database was created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca).

- *Database login*: It is identical to the database name if you are using a database included with your web hosting plan. For databases created on Web Cloud Databases, please refer to the information in **Step 1.4** in the [manual installation of a CMS tutorial](https://docs.ovh.com/ca/en/hosting/hosting_install_your_cms_manually/).

- *Database password*: You defined it yourself when you created your database. You may have modified it in the meantime.

- *Tables prefix*: If you are installing with a brand new database, enter your preferred prefix. If you are using a database that has already been used by another website, please refer to **Step 1.4** in the tutorial on [manually installing a CMS](https://docs.ovh.com/ca/en/hosting/hosting_install_your_cms_manually/) to avoid entering a table prefix that has already been used in your database.

- *Drop existing tables*: **Uncheck this box if you are already using your database with another website**.

>[!alert]
>
> If you leave the **Drop existing tables** check box ticked, it will delete all the tables already in your database.
>

Click `Test your database connection now!`{.action} to verify the entered settings:

![PrestaShop installation step 6-1](images/Prestashop-install-db-config-6-1.png){.thumbnail}

If the message "Your database is connected" appears, click `Next`{.action}. Otherwise, check the settings you entered until the connection is working. If required, please refer to **Step 1.4** in the tutorial on [manually installing a CMS](https://docs.ovh.com/ca/en/hosting/hosting_install_your_cms_manually/).

#### 2.6 Complete the PrestaShop installation

The final step is a summary of the installation you have just carried out:

![PrestaShop installation step 7](images/Prestashop-install-resume-7.png){.thumbnail}

Retrieve your PrestaShop login details before you leave the page.

>[!warning]
>
> **For security reasons, we recommend deleting the installation folder located on your FTP space.**
>
> To do this, please refer to our guide [“How to log in to your OVHcloud web hosting plan’s FTP storage space”](https://docs.ovh.com/ca/en/hosting/log-in-to-storage-ftp-web-hosting/) and visit [PrestaShop forum](https://www.prestashop.com/forums/){.external} to ensure that you delete the correct files.
>

> [!success]
>
> You can now start creating content for your PrestaShop website!
>

## Go further <a name="go-further"></a>

[PrestaShop official website](https://prestashop.com)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ca/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
