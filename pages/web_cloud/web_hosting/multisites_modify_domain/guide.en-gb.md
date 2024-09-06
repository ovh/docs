---
title: "Web Hosting - How to modify a domain name already associated to a hosting plan"
excerpt: "Find out how to change the association settings for a domainname or subdomain already declared on your web hosting plan"
updated: 2024-09-04
---

## Objective

When you use your web hosting plan or update your website, you may need to modify settings for your domain name or subdomain already associated with your web hosting plan.

> [!primary]
>
> This guide only explains how to modify a domain name or subdomain that has already been declared on an OVHcloud Web Hosting plan. If you would like to link a new domainname or subdomain to your web hosting plan, please read our guide on “[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)”.
>

**Find out how to modify the association settings for a domainname or subdomain already declared on your web hosting plan.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An [OVHcloud Web Hosting plan](/links/web/hosting){.external}
- One or more [domain names](/links/web/domains){.external}
- Sufficient rights to all the services concerned, find more information in our guide “[Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts)”

## Instructions

> [!warning]
>
> Modifying the association settings for a domain name or subdomain can result in access to your services (your website) being interrupted. If you have any doubts about the modifications to be made, do not hesitate to contact a specialist provider.
>

To modify the association settings for a domain name or subdomain that has already been declared on your Web Hosting plan, perform the following actions:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} dropdown menu.
4. Select the web hosting plan concerned.
5. On the page that appears, click on the `Multisite`{.action} tab.
6. In the table that appears below the tab and to the right of the domainname or subdomain concerned, click on the `...`{.action} button, then on `Modify domain`{.action}.

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

The following window appears:

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}

In the remainder of this guide, you will find a description of each of the available settings in the window above. Once you have read the descriptions below and made your changes, click the `Next`{.action} button in the bottom right-hand corner of the window, then go to [step 2](#step2).

### Step 1 - Description of editable parameters <a name="step1"></a>

> [!primary]
>
> The `Domain name`{.action} form cannot be modified, as it is a change to the settings of the domain name associated with the web hosting plan. If you would like to link a new domainname or subdomain to your web hosting plan, please read our guide on “[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)”.
>

#### Modify the "root folder"

> [!warning]
> **Special case: configuration with Git**
>
> To modify the `Root folder`{.action} declared for your domain name if a configuration exists with Git for the same domain name, you must first delete this configuration.
>
> If a configuration exists with Git, a message will appear just below the form:
>
> ![Modify domain associed with git](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled-git-message.png){.thumbnail}
>
> To delete the Git configuration for a domainname or subdomain associated with your hosting plan, please read our guide on [Configuring and using Git with an OVHcloud web hosting plan](/pages/web_cloud/web_hosting/git_integration_webhosting).
>

The `Root folder`{.action} form shows the name of the folder containing the items that appear with your domain name. For example, a folder might contain your website’s files.

When using your services, you may need to change the `Root folder`{.action} declared for your domain name. This can happen when, for example:

- You have developed a new website in a new folder in your web hosting plan’s FTP storage space.
- You want to redirect your domain name to an empty folder and then place a new website there.
- etc.

In this form, replace the name of the pre-filled folder with the name of the new folder you want.

> [!success]
>
> If you enter a non-existent folder name in your web hosting plan’s FTP storage space, it will be automatically created by our robots in your FTP storage space.
>

#### Other options available

##### The "SSL" option

Tick/untick this box only if you want to enable/disable free SSL **Let's Encrypt** for your domainname or subdomain. You do not need to tick this box for the other SSL solutions offered with OVHcloud.

You can find more information on SSL options and offers in our dedicated documentation “[Managing SSL certificates on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)”.

##### The "Activate the CDN" option

To use this option, you must have already subscribed to an OVHcloud CDN solution, or have a Performance web hosting plan.

Tick/untick this box to enable/disable the CDN option for your domain name or subdomain.

You can find more information on the CDN options/offers available in our dedicated documentation “[Speeding up your website with CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)”.

##### The "country IP" option

This option is mainly used for websites whose target audience is located in a different country than the web hosting. This will improve the SEO ranking of the website in the chosen country.

You can find more information on this option in our dedicated documentation "[Geolocating your website in a specific country](/pages/web_cloud/web_hosting/multisites_geolocation)".

##### The "Enable the firewall" option

This option filters incoming requests to protect your web hosting plan against the most common attacks.

You can find more information on this option in our dedicated documentation "[Activating the application firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

##### The "Separate logs" option

Tick/untick this option only if you want to separate your domain name logs from other domain names declared on your web hosting plan.

Find out more about this option in our [detailed statistics page](/links/web/hosting-traffic-analysis).

Once you have made your changes, click the `Next`{.action} button in the bottom right-hand corner of the window to go to [step 2](#step2).

### Step 2 - Summary of changes <a name="step2"></a>

Once you have clicked the `Next`{.action} button, you will see a summary of the settings you are about to apply to your domain name:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

If all the settings are configured as you want, click the `Confirm`{.action} button.

Depending on the options you have selected, the changes may take between a few minutes and a few hours to be applied.

If modifications of the **SSL**, **CDN**, **Country IP** and **separate logs** options are not taken into account after 24 hours, please refer to the respective resources listed for all of the options described in [step 1](#step1), in order to check that all of the required conditions have been met.

## Go further

[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Managing SSL certificates on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Speeding up your website with CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)

[Geolocating your website in a specific country](/pages/web_cloud/web_hosting/multisites_geolocation)

[Activating the application firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).