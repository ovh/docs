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

![managemultisite](images/manage-php-config.png){.thumbnail}

To do this, click on the `Multisite`{.action} tab. 
Click the `...` {.action} icon, then select the `Modify domain`{.action} option. 

![modifydomain](images/manage-php-config.png){.thumbnail}

In the window that will be displayed, check the `Enable the firewall`{.action} option. 
You can also check automatic sub-domain configuration with www prefix using the check-box.
To confirm changes to the configuration press the `Next`{.action} button.
A summary window will be displayed, verify that the entered configuration is correct.

> [! primary]
>
> If necessary, go back to the previous step with the `Back`{.action} button and correct the settings.
> 

Configuration can be confirmed by pressing the `Confirm`{.action} button.

The submit configuration task will appear in the `Ongoing jobs`{.action} tab (initial status is `Planned`{.action}) 
when it disappears from the list, it means the configuration has been deployed.



//////////////
![](images/img_3005.jpg){.thumbnail}
Select your domain name in the "Hostings" section

![](images/img_3006.jpg){.thumbnail}
Click on the "Website" tab.

![](images/img_3007.jpg){.thumbnail}
The firewall is Disabled by default. Click on the black pen to access your hosting package options.

![](images/img_3008.jpg){.thumbnail}
Check "Activate firewall > next.

![](images/img_3010.jpg){.thumbnail}
You will see a summary of changes, and the firewall status should have changed to enabled/activated. Click confirm.

![](images/img_3011.jpg){.thumbnail}
The firewall is now enabled on your hosting package.

![](images/img_3012.jpg){.thumbnail}

