---
title: 'Tutorial - CMS, manually install WordPress'
excerpt: How to manually install WordPress
slug: cms_manually_install_wordpress
section: CMS
order: 04
---

**Last updated 1st March 2023**

## Objective

This tutorial will help you install WordPress CMS (Content Management System) manually in just a few steps.

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This tutorial is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-sg/)or the [WordPress support](https://wordpress.com/support/){.external} if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

> [!success]
>
> To install WordPress **automatically** from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), please refer to our documentation on [installing a 1-click module](https://docs.ovh.com/sg/en/hosting/web_hosting_web_hosting_modules/).
>
> To manually **install another CMS** (Joomla!, Drupal, PrestaShop), please refer to our documentation on [installing a CMS manually](https://docs.ovh.com/sg/en/hosting/hosting_install_your_cms_manually/).
>

## Requirements

- An [OVHcloud web hosting plan](https://www.ovhcloud.com/en-sg/web-hosting/) that contains at least one database.
- A [domain name](https://www.ovhcloud.com/en-sg/domains/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg){.external}

## Instructions

### Step 1 - Prepare for installation <a name="step1"></a>

To install the CMS **WordPress** on your [web hosting plan](https://www.ovhcloud.com/en-sg/web-hosting/), you will need to make some preparations.

#### 1.1 - Set up the root folder

The root folder is the directory of the hosting plan in which your CMS will be installed. We recommend choosing an empty directory to avoid conflicts with your other multisites.

Consult our documentation that describes [how to add a multisite on your web hosting plan](https://docs.ovh.com/sg/en/hosting/multisites-configuring-multiple-websites/), to define the root folder to use for your WordPress.

> [!primary]
>
> If you define a root folder name that does not exist on your web hosting plan, it will be automatically created in your web hosting plan’s FTP storage space.
>

#### 1.2 - Check the domain name configuration

- Make sure that the domain name you will use to access your WordPress, as well as its subdomain “www”, point to the IP address of your [web hosting plan](https://www.ovhcloud.com/en-sg/web-hosting/).

To retrieve the IP address of your Web Hosting plan, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg). Go to the `Web Cloud`{.action} section and select your hosting from `Hosting plans`{.action}.<br>
In the `General information`{.action} box, you will find the IP address of your web hosting plan under `IPv4`{.action}.

If your domain name’s active DNS zone is managed in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), compare your hosting plan’s IP address with the one in your domain’s DNS zone, using our [OVHcloud DNS zone documentation](https://docs.ovh.com/sg/en/domains/web_hosting_how_to_edit_my_dns_zone/).

> [!warning]
>
> If you have activated the `CDN`{.action} or `Country IP`{.action} options for your domain name, use the appropriate IP address by referring to our documentation: [IP address list for Web Hosting clusters](https://docs.ovh.com/sg/en/hosting/list-of-ip-addresses-of-web-hosting-clusters/).
>

If you are unable to perform these checks, contact the hosting provider for your active DNS zone to update the configuration of your domain name.

> [!warning]
>
> Any changes you make to your DNS zone can take between 4 and 24 hours to propagate.
>

- Get the [information you need to log in to your web hosting plan’s FTP space](https://docs.ovh.com/sg/en/hosting/log-in-to-storage-ftp-web-hosting/#step-1-retrieve-your-login-information).
- Retrieve access to your Web Hosting plan’s database if it already exists, or create one using our [documentation](https://docs.ovh.com/sg/en/hosting/creating-database/).

#### 1.3 - Install the free FTP client "FileZilla"

You can find the download link for FileZilla and a tutorial on how to use it in our documentation on [Using FileZilla with your OVHcloud hosting](https://docs.ovh.com/sg/en/hosting/web_hosting_filezilla_user_guide/).

#### 1.4 - Prepare a database <a name="step1-4"></a>

CMSs need a database to work. Our [Web Hosting](https://www.ovhcloud.com/en-sg/web-hosting/) solutions include them.

Use our documentation to [create a database from your web hosting plan](https://docs.ovh.com/sg/en/hosting/creating-database/).

Once you have created the database, retrieve the connection settings (server, database name, user name, and password) and save them for [step 3](#step3) in this guide.

> [!primary]
>
> If you would like to install your WordPress CMS with an existing database, you can retrieve the connection settings for your database directly from the website files linked to it.
>
> If this is also a CMS like the one you need to install, you can use [this guide](https://docs.ovh.com/sg/en/hosting/change-password-database/#step-3-change-the-password-for-your-websites-database-in-its-configuration-file) to identify the configuration files in your [FTP storage space](https://docs.ovh.com/sg/en/hosting/log-in-to-storage-ftp-web-hosting/).
>
> Then log in to your database to list the prefixes of the tables already inside. This is to avoid choosing a table "prefix" already used by another of your sites.
>
> To connect to your database linked to your Web Hosting plan, see [this guide](https://docs.ovh.com/sg/en/hosting/creating-database/#accessing-the-phpmyadmin-interface).
>

### Step 2 - start manual installation

#### 2.1 - Retrieve WordPress source files

Go to the official [WordPress website](https://wordpress.org/download/#download-install){.external} to download the CMS source files.

![hosting](images/downloadWP.png){.thumbnail}

> [!primary]
>
> On the download page, note the PHP version and the MySQL or MariaDB version required to run WordPress.
>
> Then configure the PHP version on your web hosting plan by referring to our guide on [changing PHP versions of a web hosting plan](https://docs.ovh.com/sg/en/hosting/how_to_configure_php_on_your_ovh_web_hosting_package_2014/).
>
> If your hosting's PHP version already meets the minimum requirement for WordPress, no changes are necessary.
>

> [!warning]
>
> If you have other websites hosted on your Web Hosting plan, check that they are compatible with the PHP version you choose for your WordPress.
>

#### 2.2 - Unzip downloaded source files to new folder

The downloaded file is in a **compressed archive** format. Create a folder named **WordPress** on your computer and then **uncompress** the contents of the downloaded file into the **WordPress** folder.

To do this, open the folder containing the compressed file, right-click on the file and select “Extract all... ”.

Enter the **WordPress** folder as destination to extract your files.

#### 2.3 - Move the source files from the local folder to the root folder on your web hosting plan

Once you have unpacked the files in your **WordPress** folder, [log in to your storage space via FTP](https://docs.ovh.com/sg/en/hosting/log-in-to-storage-ftp-web-hosting/) using the [Filezilla client](https://docs.ovh.com/sg/en/hosting/web_hosting_filezilla_user_guide/). Then copy the files from the **WordPress** folder to the root folder you defined on your hosting in [step 1](#step1) of this guide.

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> We strongly recommend that you use an empty root folder to avoid conflicts with another site. Ensure that the destination folder does not contain any items before moving the files.
>

>[!primary]
>
> If your root folder was not created automatically during the actions described in [step 1](#step1), you can create it via Filezilla.
>
> It may take a few minutes to upload all the files to your web hosting plan.
>
> Once the transfer is complete, check that all the elements in the local **WordPress** folder have been correctly transferred to the root folder on your web hosting plan.
>

**Special Case**: If you have limited internet speed and/or a hosting plan **Pro** or higher, you can use an **SSH** connection to upload the WordPress source files to your web hosting plan’s storage space. 

To log in to your hosting plan via SSH, please refer to our guide: [Accessing a web hosting plan via SSH](https://docs.ovh.com/sg/en/hosting/web_hosting_ssh_on_web_hosting_packages/).

Once you have logged in via **SSH**, run the following commands.

- Open the root folder where you want to install WordPress on your web hosting plan:

```bash
cd NameOfYourTargetFolder
```

- Download the WordPress source files directly to your root folder:

```bash
wget http://wordpress.org/latest.tar.gz
```

- Uncompress the WordPress source files in your root folder:

```bash
tar xvf latest.tar.gz
```

- A **wordpress** folder is created in your root folder. Move its contents to the base of your root folder:

```bash
mv wordpress/* ./
```

- Delete the empty **wordpress** folder:

```bash
rmdir ./wordpress/
```

- Delete the archive file **latest.tar.gz**:

```bash
rm -f latest.tar.gz
```

### Step 3 - Finalise the installation <a name="step3"></a>

> [!success]
>
> Before you continue with the installation, clear your Internet browser cache to avoid any errors.
>

#### 3.1 - Access your WordPress website via your browser

Enter your domain name into the address bar of your web browser.

If the WordPress source files have been correctly placed in your root folder, the WordPress page for selecting the language appears:

![hosting](images/WPselectlangue.png){.thumbnail}

Select the site language and click `Continue`{.action}.

#### 3.2 - Link your WordPress and your database

WordPress will ask you to retrieve the login details for your database:

![hosting](images/WPstart.png){.thumbnail}

Having your database login details ready (if necessary, read [Step 1.4](#step1-4) in this guide), click on `Let's go!`{.action} to continue.

The following page appears:

![hosting](images/WPdb.png){.thumbnail}

Enter the information requested for the database:

- Database name: this name was defined when the database was created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg).

- Username: It is identical to the database name if you are using a database included with your web hosting plan.
For databases created on Web Cloud Databases, please refer to the information in [Step 1.4](#step1-4) of this guide.

- Password: It was sent to you by email when the database was created. You may have modified it in the meantime.

- Database Host: The name of your database server, included in the installation email and displayed in your OVHcloud Control Panel. 

> [!primary]
> 
> The server name of a database included with your web hosting plan usually has this format: `NameOfYourDatabase.mysql.db`. 
>

- Table Prefix: if you are installing WordPress with a new database, you can enter a custom prefix. If you are using a database that is already in use by another website, please refer to [Step 1.4](#step1-4) of this guide to avoid associating WordPress with a table prefix used by another software.

Click `Submit`{.action} to validate the database connection information.

If everything went well, the following page appears:

![hosting](images/WPafterDB.png){.thumbnail}

Click `Launch Installation`{.action}.

#### 3.3 - Configure administrative access to the backend of your WordPress and provide your admin email address

Once you have set it up, WordPress will ask you for information on your future website and to set up your Administrator account.

This will give you access to the administration panel (backend) of your WordPress CMS.

![hosting](images/WPafterDB2.png){.thumbnail}

Enter the information requested:

- Site title: Enter your website’s title.
- Username: Define the Administrator login for WordPress.
- Password: Set the password for this Administrator account.
- Your Email: Enter a valid email address.
- Search engine visibility: Tick this box to prevent search engine bots from referencing your WordPress site.

Click `Install WordPress`{.action} as soon as you have entered all of the information correctly.

#### 3.4 - Finalise the manual installation and test Administrator access

Installation is complete if the following page is displayed:

![hosting](images/WPend.png){.thumbnail}

At this stage, simply click on the `Log in`{.action} button to test access to the admin panel of your new WordPress CMS. Enter the credentials created previously in step 3.3.

> [!primary]
>
> OVHcloud support does not include third-party solutions such as WordPress. Support teams are therefore unable to assist you with using or configuring a CMS.
>
> For support of this type, please use the forums dedicated to the WordPress software.
>

Once connected, the following page appears:

![hosting](images/WPadminInterface.png){.thumbnail}

> [!success]
>
> You can now start creating the content for your WordPress website!
>

## Go further <a name="go-further"></a>

[Official WordPress website](https://wordpress.org)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-sg/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-sg/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.