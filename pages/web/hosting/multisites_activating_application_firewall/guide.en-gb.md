---
title: 'Activating the application firewall'
excerpt: 'Find out how to activate the application firewall for a Web Hosting'
id: '1937'
slug: web_hosting_activating_an_application_firewall
section: 'Web Hosting configuration'
legacy_guide_number: g1937
---

**Last updated 31st March 2021**


 ## Objective

This complementary Apache module filters all incoming requests on your web servers. 
To increase security, it intercepts and checks them before they are processed by the scripts. 
Enable ModSecurity in one click from your control panel to get enhanced protection.
With the Core Rule Set (CRS), your ModSecurity is preconfigured in an optimal way straight away, protecting you against the most common attacks: 
- Trojan
- Email injections
- Broken PDF files
- File injections on your hosting system
- SQL or XSS type injections
- etc.

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovh.co.uk/web-hosting/){.external}
- at least one [domain name](https://www.ovh.co.uk/domains/){.external}
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)


## Instructions

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to `Web Cloud`{.action}. 
Click `Hosting Plans`{.action} in the services bar on the left-hand side and select the plan concerned.


### Activating the application firewall in PHP configuration

To do this, click on the `General information`{.action} tab. 
The current `Global PHP version`{.action} is displayed in the `Configuration`{.action} table. 
Click on the `...`{.action} icon and select the available option `Change configuration`{.action}, 
select the item `Change the current configuration`{.action} and press the `Next`{.action} button.


![managephpconfig](images/manage-php-config.png){.thumbnail}


A new window will appear in which you should make sure that in the `Advanced settings`{.action} section, 
the `Application firewall`{.action} entry is set to `activated`{.action} mode. 
To confirm the configuration, press the `Confirm`{.action} button.


### Activating the application firewall for individual domains in MultiSite.


To do this, click on the `Multisite`{.action} tab. 
Click the `...` {.action} icon, then select the `Modify domain`{.action} option. 


![managemultisite](images/firewall-modify-multisite.png){.thumbnail}

In the window that will be displayed, check the `Enable the firewall`{.action} option. 
You can also check automatic sub-domain configuration with www prefix using the check-box.
To confirm changes to the configuration press the `Next`{.action} button.
A summary window will be displayed, verify that the entered configuration is correct.


![modifydomain](images/firewall-modify-domain.png){.thumbnail}


> [! primary]
>
> If necessary, go back to the previous step with the `Back`{.action} button and correct the settings.
> 

Configuration can be confirmed by pressing the `Confirm`{.action} button.


### Status of the jobs starting the Firewall service - Ongoing jobs section.

![manageongoing](images/firewal-ongoing-jobs.png){.thumbnail}


The submit configuration task will appear in the `Ongoing jobs`{.action} tab (initial status is `Planned`{.action}) when it disappears from the list, it means the configuration has been deployed.


### Verifying which domains have Firewall enabled.


![manageenabled](images/firewall-enabled-multisite.png){.thumbnail}


Information on which domains have the Firewall option turned on can be checked in the MultiSite section in the `Firewall` {.action} column.




