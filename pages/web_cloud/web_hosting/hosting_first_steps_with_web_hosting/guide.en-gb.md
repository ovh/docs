---
title: "Web Hosting - How to get started in a few steps"
excerpt: "Find out how to link your domain name, put your website online and create email addresses with your web hosting plan"
updated: 2024-02-13
---

## Objective

OVHcloud offers [several web hosting plans](/links/web/hosting). They are designed for different use cases:

- Get started on the web.
- Quickly create a website (professional or not), a blog, a **C**ontent **M**anagement **S**ystem (**CMS**) such as *WordPress*, *Joomla!*, *PrestaShop* or *Drupal*, or an online store.
- Customize one or more email addresses with the domain name you want to use for your website.
- Manage multiple websites on a single web hosting plan.
- Configure one or more databases ([included with some of our web hosting plans](/links/web/hosting)).
- etc.

These solutions spare you the hassle of maintaining, updating, and securing a web hosting infrastructure.<br>
This saves you time on server administration and allows you to focus only on:

- Developing, updating and securing a website, blog, CMS or online store.
- Security and optimization for one or more databases, if your solution has one.
- The configuration and management of your email accounts included with your web hosting plan.

**Find out how to link your domain name, put your website online, and create one or more email addresses with your web hosting plan.**

## Requirements

- You have ordered an [OVHcloud Web Hosting plan](/links/web/hosting){.external}.
- You have received an email confirming that your Web Hosting plan has been set up.
- You have a [domain name](/links/web/domains).
- You have access to the [OVHcloud Control Panel](/links/manager).

## Instructions

The purpose of this guide is to show you the main actions you can take with our [web hosting](/links/web/hosting) solutions. 
Each of these actions will be accompanied by one or more links to specific guides (relevant to the action).

You can use this guide as a "repository" of possible actions when you subscribe to your [web hosting](/links/web/hosting) offer and throughout its use.

> [!primary]
> 
> For the purposes of this guide, the term “website” will now refer to all types of website (website, blog, CMS, online store, etc.) mentioned earlier in this guide.
>

**Contents:**

- [Step 1 - Define your project](#project-delimitation)
- [Step 2 - Install your website](#website-installation)
- [Step 3 - Create your email addresses (optional)](#email-creation)
- [Step 4 - Verify and/or modify your domain name’s configuration](#domain-configuration)
- [Step 5 - Other options available with web hosting plans](#other-options)

### Step 1 - Define your project <a name="project-delimitation"></a>

Before you begin, it’s essential to clearly identify and define your needs by asking yourself the following questions: 

- Do I need to **create** a website or **migrate** one from another hosting provider?
- Do I need one or more databases to run my website?
- Do I need one or more custom email addresses with my domain name?

Depending on your answers, please ensure that your [web hosting plan](/links/web/hosting) meets all of your needs before you proceed.

If this is not the case, please refer to our guide on "[Web Hosting: How to change your solution?](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

### Step 2 - Install your website <a name="website-installation"></a>

Once you have carefully defined your project, you can start installing your website.

There are two ways of doing this: **migrate** an existing website, or **create** a new website.

#### Migrate your website

If you need to migrate a website from another hosting provider, please read our guide on "[Migrating your website and emails to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)". You will find all the key steps for migrating all of your services without any interruptions (domain name, website, email address(es), etc.).

#### Create your new website

In this scenario, you can choose from several solutions.

##### Case 1 - Putting a locally developed website online

If this is the case, please follow our guide on "[Publishing a website on your Web Hosting plan](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)". There, you will find all the steps you need to take in order to:

- Place your website on your web hosting plan’s FTP storage space.
- Create a database linked to your web hosting plan.
- Place your local database on the database linked to your web hosting plan.
- Link your database to the website on your web hosting plan.

##### Case 2 - Create a website using a CMS

OVHcloud offers the "1-click modules" option.<br>
Once you have logged in to your [OVHcloud Control Panel](/links/manager), this option allows you to quickly install the *WordPress*, *Joomla!*, *PrestaShop* and *Drupal* CMS on your hosting.

To use this option, please refer to our guide on "[Setting up your website with a 1-click module (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

> [!primary]
>
> If you would prefer to install your CMS manually without going through the "1-click modules" option, please read our guide on "[Installing a CMS manually on your Web Hosting plan](/pages/web_cloud/web_hosting/cms_manual_installation)".
>

### Step 3 - Create your email addresses (optional) <a name="email-creation"></a>

Your [Web Hosting plan](/links/web/hosting) includes one or more email accounts, which you can choose to enable or disable.

First of all, please read our guide on "[Activating email addresses included in your Web Hosting plan](/pages/web_cloud/web_hosting/activate-email-hosting)".

Once you have enabled this option, please refer to our guide on "[Creating an email address with an MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)" to customize one or more email accounts with your domain name.

> **Special Cases:**
>
> - If you are migrating a website and/or if you are looking for email addresses associated with your website’s domain name, please read our guide on "[Migrating your website and emails to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)". You will find all the key steps for migrating all of your services without any interruptions (domain name, website, email address(es), etc.).
>
> - If you did not attach a domain name when you ordered your web hosting plan, and you would like to use the "email address(es) included with your web hosting plan" option, you will need to do this manually from your [OVHcloud Control Panel](/links/manager).

### Step 4 - Verify and/or modify your domain name’s configuration <a name="domain-configuration"></a>

At this stage, your website must be installed on your web hosting plan, and your email addresses must be created. These elements may not work yet, as long as your domain name’s configuration with your new services is incomplete.

The link between your domain name and your services (web hosting plan, email server, etc.) is mainly done using your domain name’s active DNS zone and the DNS records it contains.

> [!primary]
>
> Please note that changes to a DNS zone can take between 4 and 24 hours to propagate fully.
>

> **Special Cases:**
>
> If you are migrating a website and/or email addresses associated with your website’s domain name, please read our guide on "[Migrating your website and emails to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)". You will find all the key steps for migrating all of your services without any interruptions (domain name, website, email address(es), etc.).

To check and/or modify the link between your domain name and your web hosting plan, **please refer to the following guides in order:**

- [IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP): You will find all the IP addresses for our web hosting infrastructure there. This guide will particularly help you with domain names whose active DNS zone is not managed at OVHcloud (or managed on a different OVHcloud customer account than your own).
- [Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite): This guide explains how to add multiple domain names to a Web Hosting plan. It can also help you check that your domain name declaration in the `Multisite`{.action} tab of your Web Hosting plan is correct. If necessary, you can then modify it and take the necessary measures in your domain name’s active DNS zone.
- [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit): This guide explains how to edit an OVHcloud DNS zone. It will be useful to you in the event that your domain name’s active DNS zone is present on a different OVHcloud customer account than your own. You can also use it to access your domain name’s OVHcloud DNS zone, in order to verify that the IP address (entry(s) of type *A* and/or *AAAA*) declared for your domain name in the DNS zone corresponds to your Web Hosting plan’s IP address.

To check and/or modify the link between your domain name and your OVHcloud email solution, please read our guide on "[Configure an MX record for email management](/pages/web_cloud/domains/dns_zone_mx)". You will find the names of the OVHcloud email servers, as well as the procedure to follow in order to point your domain name to these same servers.

> [!primary]
>
> If the DNS zone for your domain name is not managed by OVHcloud:
> 
> - **For linking your domain name to your web hosting plan**: Please refer only to the guides “[IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)” and “[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)” mentioned above to retrieve your web hosting plan’s IP address, then declare your domain name correctly on your web hosting plan. Then contact the organization that manages your domain name’s active DNS zone to point it to your web hosting plan.
>
> - **For the link between your domain name and your OVHcloud email solution**: Only refer to our guide "[Configure an MX record for email management](/pages/web_cloud/domains/dns_zone_mx)" to retrieve the names of the OVHcloud email servers that need to be entered in your domain name’s active DNS zone. Then contact the organization that manages your domain name’s active DNS zone, and point it to the OVHcloud email servers.
>

### Step 5 - Other options available with web hosting plans <a name="other-options"></a>

Depending on your [web hosting plan](/links/web/hosting), additional options/offers/features are available free of charge.

#### SSL certificates

SSL certificates are used to make your website accessible using the HTTPS protocol. This protocol encrypts the exchanges between your web hosting plan and the people who visit your website.

No matter which [web hosting](/links/web/hosting) you are using, you can activate an SSL certificate from **Let's encrypt** free of charge.

For more details on free and paid SSL certificates offered on web hosting plans, please read our guide on "[Managing SSL certificates on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

#### The CDN offers

All of our CDN solutions allow you to cache part of your website. This reduces load times for the pages that make up your website, especially for visitors who are geographically distant from the data center where your web hosting plan is located.

With web hosting plans, OVHcloud offers 3 CDN solutions:

- **CDN Basic**
- **CDN Security**
- **Advanced CDN**

You can find more information on our CDN solutions in our guide on "[Speeding up your website with CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

> [!primary]
>
> The **CDN Basic** solution is included free with **Performance** web hosting plans only.
>
> You cannot combine several CDN offers on the same web hosting plan.

#### Web Cloud Database Servers

If you have a **Performance** web hosting plan, you can activate a [Web Cloud Databases](/links/web/databases) database server for free.

You can find more details on how to use it in our documentation “[Getting started with the Web Cloud Databases service](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)”.

#### Send emails from your website

All [web hosting](/links/web/hosting) allow you to send emails free of charge from your website or a specific script.

You can find all the details on this feature in our guide on "[Monitoring and managing automated emails in your web hosting plan](/pages/web_cloud/web_hosting/mail_function_script_records)".

#### The scheduled tasks (CRON)

With CRON tasks, you can automatically run scripts hosted on your web hosting plan.

If your [web hosting plan](/links/web/hosting) has this option, please refer to our guide on "[Using automated tasks on a Web Hosting plan](/pages/web_cloud/web_hosting/cron_tasks)" for further details.

## Go further

[Migrating your website and emails to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Publishing a website on your Web Hosting plan](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

[Setting up your website with a 1-click module (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Creating an email address with an MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)

[Managing SSL certificates on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
