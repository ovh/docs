---
title: "Activating the application firewall"
excerpt: "Find out how to activate the application firewall on a Web Hosting plan"
updated: 2024-09-05
---

## Objective

*ModSecurity* is a complementary Apache module that filters all incoming requests on your web server. It increases security against known vulnerabilities by intercepting and filtering requests before they are processed by any scripts. 

The preconfigured Core Rule Set (CRS) of our *ModSecurity* protects your websites against the most common attacks, for example:

- Trojans
- Email injections
- Broken PDF files
- File injections on your hosting system
- SQL or XSS type injections

**This guide explains how to enable your application firewall for enhanced protection in your OVHcloud Control Panel.**

> [!primary]
>
> Since your web hosting plan is hosted on a shared infrastructure, modifying your firewall configuration settings is unavailable.
>

## Requirements

- an [OVHcloud Web Hosting plan](/links/web/hosting){.external}
- at least one [domain name](/links/web/domains){.external} attached to the hosting
- access to the [OVHcloud Control Panel](/links/manager)

## Instructions

Log in to the [OVHcloud Control Panel](/links/manager) and switch to `Web Cloud`{.action}. 
Click on `Hosting Plans`{.action} and select the plan concerned.

### Activating the application firewall in PHP configuration

Click on the `General information`{.action} tab. The current `Global PHP version` is displayed in the **Configuration** box.  Click on the `...`{.action} icon and select `Modify configuration`{.action}. In the popup window, select the item `Modify the current configuration`{.action} and click on the `Next`{.action} button.

![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}

In the new window, make sure that **Application firewall** is set to `activated`{.action}. To confirm the configuration, click on the `Confirm`{.action} button.

### Activating the application firewall for individual domains in Multisite

Switch to the `Multisite`{.action} tab of your hosting plan. Click on the `...`{.action} button in the row of the respecive domain and select the `Modify domain`{.action} option. 

![managemultisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

In the configuration window, check the `Enable the firewall`{.action} box. You can also include the www subdomain in this configuration by checking the box at the top.
Click on `Next`{.action} and then on `Confirm`{.action} to modify the Multisite settings.

![modifydomain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}

### Checking the status of the activation task

![manageongoing](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/firewall-planned.png){.thumbnail}

Tasks to update your Multisite configuration will be listed in the `Ongoing jobs`{.action} tab (initial status is `Planned`). The firewall will be active once its update task no longer appears in the list.

### Verifying which domains have the firewall enabled

The `Multisite`{.action} tab of your hosting plan provides information on which domains have the firewall option turned on.

![manageenabled](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/firewall-enabled.png){.thumbnail}

The table displayed contains all of the domain names that have been added to your Web Hosting plan. In the "Firewall" column, you will see the activation status for each domain. 

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).