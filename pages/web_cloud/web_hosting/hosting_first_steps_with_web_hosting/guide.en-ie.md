---
title: "How to get started with your web hosting plan"
excerpt: "Find out how to put a new website online with our 1-click modules, how to create a new custom email address with your domain name, all using our web hosting solution"
updated: 2025-04-07
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

Want to create a website for your business or a personal blog? Need an e-commerce store to sell your products online? This guide to getting started with an OVHcloud web hosting plan will show you the key steps for setting it up. You will also find instructions for creating professional email addresses associated with your domain name. It will enable you to put your project online quickly and easily, so that you can communicate effectively with your audience.

> [!primary]
>
> - Want to migrate an existing website from another hosting provider? Read directly our dedicated guide: [Migrating your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).
> - You only want a simple homepage for your professional activity? Read our dedicated guide: [Web Hosting - Activate free 100M hosting](/pages/web_cloud/web_hosting/activate_start10m).

## Requirements

- A [OVHcloud Web Hosting](/links/web/hosting) plan with at least one database available.
- An email confirming that your web hosting plan has been set up.
- A [domain name](/links/web/domains) and an associated DNS zone at OVHcloud.
- Access to the [OVHcloud Control Panel](/links/manager), in the section `Web Cloud`{.action}.
- Access to all these services (Web Hosting, Domain name, DNS zone) from a single OVHcloud account.

## Instructions

### 1 - Link your domain name to your web hosting plan <a name="part-1"></a>

> [!success]
>
> If you have subscribed to your domain name and web hosting plan in the same order, these two services are already linked. Skip to [Part 2](#part-2) of this guide.

1. Click on the `Hosting plans`{.action} menu, then choose the web hosting plan concerned.
2. Select the `Multisite`{.action} tab.
3. On the page that pops up, click the `Actions`{.action} button above the table listing the domain names already declared on the web hosting plan. Then click `Add a domain or sub-domain`{.action}.
4. In the window that opens, check and complete the requested elements until they are validated.

/// details | Click here for more information.

See our detailed guides:

- [Web hosting - Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Web Hosting - How to modify a domain name already associated to a hosting plan](/pages/web_cloud/web_hosting/multisites_modify_domain)

///

### 2 - Install a 1-click module for your website <a name="part-2"></a>

On our web hosting plans, OVHcloud offers free WordPress, Joomla!, PrestaShop and Drupal CMS installations with the 1-click module option.

1. Click on the `Hosting plans`{.action} menu, then choose the web hosting plan concerned.
2. Select the `1-click modules`{.action} tab.
3. On the page that appears, click the `Add a module`{.action} button.
4. In the window that opens, select the CMS you want to install. Then select the domain on which you want to install the module by selecting the domain name you want **without www** (example: `domain.tld`, not `www.domain.tld`), then click `Install`{.action}.

/// details | Click here for more information.

See our detailed guides:

- [Setting up your website with a 1-click module (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)
- [How to manage your 1-click module](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

///

### 3 - Activate the email addresses included with your web hosting plan <a name="part-3"></a>

> [!success]
>
> If you have subscribed to your domain name and web hosting plan in the same order, the email addresses included with the web hosting plan are already associated with your domain name. Skip to [Part 4](#part-4) of this guide.

1. Click on the `Hosting plans`{.action} menu, then choose the web hosting plan concerned.
2. On the page that pops up, in the **Configuration** box, click on the `...`{.action} button to the right of the `Email addresses`{.action} comment, then on `Enable email solution`{.action}. On the new page that appears, select the domain name concerned in the `(1)` section, then continue until you have enabled the email addresses.

/// details | Click here for more information.

Read our detailed guide “[Web Hosting - Activating email addresses included](/pages/web_cloud/web_hosting/activate-email-hosting)”.

///

### 4 - Create a custom email address with your domain name <a name="part-4"></a>

1. Click on the `Emails`{.action} menu (or `MX Plan`{.action} if you are using the new version of the OVHcloud Control Panel), then choose the domain name concerned.
2. On the page that appears, click on the `Emails`{.action} tab.
3. On the new page that appears, click the `Create an email address`{.action} button.
4. In the window that opens, fill in the information requested until it is validated.

Repeat this step for each email address you would like to create (within the limits of your web hosting plan).

/// details | Click here for more information.

Read our detailed guide “[Creating an email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)”.

///

### 5 - Additional options available with your web hosting plan <a name="part-5"></a>

Your web hosting plan is not limited to installing a 1-click module. You can host websites created by yourself or a web developer (blog, CMS, online store, etc.). If you would like to find out more about the possibilities of your web hosting plan, please refer to our more detailed guide "[How to create a website - Carrying out your project in 5 steps](/pages/web_cloud/web_hosting/website-project)".

## Go further

Below is a selection of our guides detailing the main features offered with our web hosting plans:

- [Web Hosting - How to configure an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting).
- [Speeding up your website with CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).
- [Web Hosting - Environment, PHP version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting).
- [Web hosting - View website statistics and logs](/pages/web_cloud/web_hosting/logs_and_statistics).
- [Monitoring and managing automated emails in your web hosting plan](/pages/web_cloud/web_hosting/mail_function_script_records).
- [How do I geolocate a website in a specific country?](/pages/web_cloud/web_hosting/multisites_geolocation).
- [Activating the application firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
- [Configuring and using Git with an OVHcloud web hosting plan](/pages/web_cloud/web_hosting/git_integration_webhosting).
- [Logging in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection).
- [Using automated tasks (CRON) on a web hosting plan](/pages/web_cloud/web_hosting/cron_tasks).

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).