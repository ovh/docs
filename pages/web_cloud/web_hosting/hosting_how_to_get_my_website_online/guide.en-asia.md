---
title: "Publishing a website on your Web Hosting plan"
excerpt: "Find how to publish a website on your OVHcloud Web Hosting plan"
updated: 2024-03-21
---

## Objective

There are many different types of website you can put online. Whether you are creating a blog or an online store, sharing your hobby or promoting your work, your [OVHcloud web hosting space](/links/web/hosting) lets you host the site you want, provided that it is compatible with the [configuration of our infrastructures](https://webhosting-infos.hosting.ovh.net).

**Find out how to publish a website on your OVHcloud web hosting plan.**

## Requirements

- an [OVHcloud Web Hosting plan](/links/web/hosting)
- an email confirming that your web hosting plan has been set up
- a [domain name](/links/web/domains) which can be used to access your website
- access to the [OVHcloud Control Panel](/links/manager)
- being up-to-date in the [payments](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) and [renewals](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) of related services (domain name and web hosting plan)

## Instructions

### Step 1: Define your project

It is important to have a clear idea of your objective, for your project to succeed. What do you want to do with your website? How will you publish it? There are several ways to get your project off the ground with an OVHcloud web hosting plan.

- **Using a turn-key website, with OVHcloud’s one-click modules**: This solution offers the benefits of a ready-made structure for your website that you can then customise (themes, text, etc.). We offer four different 1-click modules compatible with our infrastructures that are featured on the OVHcloud webpage ["How to create a website"](/links/web/hosting-website){.external}. Please also see our guide ["Setting up your website with 1-click modules"](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

- **Using a turn-key website that you install manually**: this solution gives you the benefit of a ready-made website structure that you can customise (themes, text, etc.), and you set it up yourself on your OVHcloud web hosting plan.

- **Creating your website yourself**: this is a more technical solution that requires programming skills, but does give you the option of creating a tailor-made project.

- **Migrating an existing website to OVHcloud**: this solution may prove complicated if an interruption in service for the website concerned is not an option. To guide you through this process, you can also refer to the following documentation: [Migrating your website and emails to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Once you have considered the possibilities above, you can choose one of two options.

- **If you want to use our 1-click modules**, refer to the instructions set out in our guide on [Setting up your website with 1-click modules](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

- **If you do not want to use our 1-click modules**, you can set up your website manually on your hosting plan. You may find the information in our guide helpful, but it is not a substitute for the support of a webmaster.
 
> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are responsible for ensuring that they work properly.
> 
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide. 
>

### Step 2: Put your website files online in your storage space.

There are several steps involved in publishing a website on a hosting space manually. Some of these steps will be optional, depending on which site you install, and there may be multiple ways of carrying them out. For most existing projects, however, there are two major steps involved in publishing a website; the former of these steps is uploading the website’s files to the relevant storage space.

Publication takes place in several sub-steps.

#### 1. Gather the files for the website

Make sure you have all the files for the website that you are looking to publish. If you are migrating an existing website, you can obtain these files from your former hosting provider.

#### 2. Log in to your storage space

To log in to your storage space, you will need the following:

- an active FTP or SSH user account
- FTP or SSH user account password
- the server address
- the server connection port

These elements were sent to you in the email informing you that your web hosting plan has been set up. If you don’t have this information, log in to the [OVHcloud Control Panel](/links/manager){.external}, go to the `Web Cloud`{.action} section, then click on `Hosting`{.action}. Select the name of the web hosting plan, and click on the `FTP - SSH`{.action} tab. 

![websitesetup](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}

The information associated with your storage space will now appear, and you should be able to find the information you need to log in to it. If you need help with this, please refer to our guide on [Logging in to your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_change_password). If you no longer have the password, refer to the instructions set out in our documentation on [Modifying a FTP user password](/pages/web_cloud/web_hosting/ftp_change_password).

Once you have everything you need, there are three different ways of connecting to your storage space:

- **Using OVHcloud’s FTP Explorer.** Gives you access to your storage space via your browser. To use it, stay in the `FTP - SSH`{.action} tab, and click `FTP Explorer`{.action}.

- **Using FTP- or SFTP-compatible software.** You will need to install a compatible program on your computer (e.g. FileZilla). Since OVHcloud did not create the software package you have installed, please contact the software’s publisher if you are encountering difficulties in using it.

- **Using SSH access.** You will need to use commands from a terminal to interact with your storage space. More advanced knowledge and a specific [OVHcloud hosting plan](/links/web/hosting) are required to use this type of access.

#### 3. Upload the files to the storage space

Once you have logged in to your storage space, all you need to do is put your website files online. **Please take special care when you select the folder you upload the files to.** For standard websites, the files should be uploaded to the “www” folder. However, if you host several websites on your hosting space, you have almost certainly registered several **Multi-sites**.

To identify the folder that the website should be published from, go to the `Multi-site`{.action} tab in the OVHcloud Control Panel. In the table shown, check the `Root folder`{.action} listed for the domain in question. This is the folder in which you should publish the files for your website.

You may find a file called “index.html” in your storage space. This file may have been created by OVHcloud when your hosting plan was set up, to display a default page on your website. If this is the case, remember to delete this file when you are putting your files online.

> [!primary]
>
> An "index.php" file will always take over an "index.html" file. Therefore, when both are present, only "index.php" will be called.

![websitesetup](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

### Step 3: Connect your website to a database

> [!primary]
>
> This part is optional if your website does not need to be linked to a database.
>

Today, virtually all content management systems (CMSs), such as WordPress or Joomla!, use a database for storing dynamic elements, such as comments or articles. As a result, it is essential for your website files and the database to be connected for the website to function correctly. To establish this connection, a configuration file that contains the database’s information is used.

Depending on the website used, this connection may need to be established manually, or via an interface generated by the site itself. You can do this via several sub-steps, some of which may be optional.

#### 1. Recover the existing database 

If you are migrating an existing website, you can recover your existing database from your former hosting provider. If it is a new website, you can move on to the next step.

#### 2. Create the database at OVHcloud 

If you already have a database and wish to use it (from an [OVHcloud web hosting plan](/links/web/hosting), you will need your username and password, the name of the database and the address of the server. You can now go on to the next step.

If you want to create a new database with OVHcloud, log in to the [OVHcloud Control Panel](/links/manager){.external}, then click on `Hosting`{.action} in the services bar on the left. Select the name of the hosting plan concerned, and click on the `Database`{.action} tab.

Now click the `Create a database`{.action} button, or if this button is not visible, click on `Actions`{.action} and then `Create a database`{.action}. Now follow the information shown.

![websitesetup](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

#### 3. Import the existing database

If you are migrating an existing website, you can import your existing database into the newly created one. If it is a new website, you can move on to the next step.

There are several methods for importing a database. OVHcloud offers one of these in the OVHcloud Control Panel. Once you are on the list of databases created for your service in your OVHcloud Control Panel, click the `...`{.action} button to the right of your database, then `Import a file`{.action}.

#### 4. Connect your website to the database

Once your database is available and you have uploaded your files to your storage space, all you need to do is connect them. To do this, you need to have the information for connecting to the database: a username, the associated password, the name of the database and the address of the server.

How this connection is established will depend on the type of website you are publishing. This process is dictated by how your website is configured, rather than OVHcloud. As a result, we recommend getting in touch with your website’s publisher or another specialist (such as a service provider) if you need assistance with this procedure.

### Step 4: Access your website

Once you have uploaded your files to your storage space and connected your database to it (if your website uses one), you can now access your website. Your website should display properly in your web browser.

If you observe that it does not display properly, we recommend:

- **Checking the configuration of the domain name.** Your domain name’s DNS configuration may be preventing the website you have just uploaded to your OVHcloud hosting plan from displaying correctly. Make sure that the A record currently configured in the DNS zone for your domain corresponds to the IP address of your OVHcloud web hosting plan.

- **Making sure that no files are missing.** When uploading your files to the OVHcloud web hosting plan, you may have forgotten to transfer some files, or an error may have occurred. Be careful with this process, however, to avoid breaking any links between the website’s files and the database (if the website uses one).

- **Checking that there are no errors in the website code.** This is definitely the most technical check to carry out, but the files you have uploaded may contain errors, and those errors may prevent the server from displaying your website correctly, or at all.

As a reminder, if you encounter any difficulties publishing your website, we recommend contacting a specialised provider and/or the publisher of the service (the CMS you have set up, for example).

## Go further

[Migrating your website and emails to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Setting up your website with 1-click modules](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Modifying an FTP user password](/pages/web_cloud/web_hosting/ftp_change_password)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).