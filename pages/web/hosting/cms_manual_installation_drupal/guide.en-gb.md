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

If the Drupal source files have been correctly placed in your root folder, the WordPress page for selecting the language appears:

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

