---
title: 'Activating the application firewall'
excerpt: 'Find out how to activate the application firewall on a Web Hosting plan'
slug: web_hosting_activating_an_application_firewall
section: 'Web Hosting configuration'
order: 04
---

**Last updated 26th April 2021**


## Objective

*ModSecurity* is a complementary Apache module that filters all incoming requests on your web server. It increases security against known vulnerabilities by intercepting and filtering requests before they are processed by any scripts. 

The preconfigured Core Rule Set (CRS) of our *ModSecurity* protects your websites against the most common attacks, for example:

- Trojans
- Email injections
- Broken PDF files
- File injections on your hosting system
- SQL or XSS type injections


**This guide explains how to enable your application firewall for enhanced protection in your OVHcloud Control Panel.**

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/asia/web-hosting/){.external}
- at least one [domain name](https://www.ovhcloud.com/asia/domains/){.external} attached to the hosting
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)


## Instructions

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia) and switch to `Web Cloud`{.action}. 
Click on `Hosting Plans`{.action} and select the plan concerned.


### Activating the application firewall in PHP configuration

Click on the `General information`{.action} tab. The current `Global PHP version` is displayed in the **Configuration** box.  Click on the `...`{.action} icon and select `Modify configuration`{.action}. In the popup window, select the item `Modify the current configuration`{.action} and click on the `Next`{.action} button.


![managephpconfig](images/manage-php-config.png){.thumbnail}

In the new window, make sure that **Application firewall** is set to `activated`{.action}. To confirm the configuration, click on the `Confirm`{.action} button.


### Activating the application firewall for individual domains in Multisite

Switch to the `Multisite`{.action} tab of your hosting plan. Click on the `...`{.action} button in the row of the respecive domain and select the `Modify domain`{.action} option. 


![managemultisite](images/firewall-modify-multisite.png){.thumbnail}

In the configuration window, check the `Enable the firewall`{.action} box. You can also include the www subdomain in this configuration by checking the box at the top.
Click on `Next`{.action} and then on `Confirm`{.action} to modify the Multisite settings.

![modifydomain](images/firewall-modify-domain.png){.thumbnail}


### Checking the status of the activation task

![manageongoing](images/firewal-ongoing-jobs.png){.thumbnail}


Tasks to update your Multisite configuration will be listed in the `Ongoing jobs`{.action} tab (initial status is `Planned`). The firewall will be active once its update task no longer appears in the list.


### Verifying which domains have the firewall enabled

The `Multisite`{.action} tab of your hosting plan provides information on which domains have the firewall option turned on.

![manageenabled](images/firewall-enabled-multisite.png){.thumbnail}

The table displayed contains all of the domain names that have been added to your Web Hosting plan. In the "Firewall" column, you will see the activation status for each domain. 

## Go further

Join our community of users on <https://community.ovh.com/en/>.