---
title: "Web Hosting - How to modify a domain name already associated to a hosting plan"
excerpt: "Find out how to change the association settings for a domainname or subdomain already declared on your web hosting plan"
updated: 2026-05-04
---

## Objective

When you use your web hosting plan or update your website, you may need to modify settings for your domain name or subdomain already associated with your web hosting plan.

> [!primary]
>
> This guide only explains how to modify a domain name or subdomain that has already been declared on an OVHcloud Web Hosting plan.
>
> - To associate a new domain name or subdomain with your website on your web hosting, please refer to our guide "[How to associate a domain name with an existing website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - To add a new website to your web hosting, please refer to our guide "[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

**Find out how to modify the association settings for a domainname or subdomain already declared on your web hosting plan.**

## Requirements

- An [OVHcloud Web Hosting plan](/links/web/hosting)
- One or more [domain names](/links/web/domains)
- Sufficient rights to all the services concerned, find more information in our guide “[Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts)”

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

> [!warning]
>
> Modifying the association settings for a domain name or subdomain can result in access to your services (your website) being interrupted. If you have any doubts about the modifications to be made, do not hesitate to contact a specialist provider.
>

<!-- CP-STEPS-START:modify-domain-settings -->
To modify the association settings of a domain name or subdomain already declared on your web hosting plan, click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>> 
>> In the table that appears, click on the `>`{.action} button to the left of the name of the website to display the associated domain names or subdomains.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>> 
>> Then click on the `⁝`{.action} button to the right of the relevant domain name or subdomain, then on `Modify domain`{.action}.
>> 
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>> 
> **Step 4**
>>
>> The following window appears: 
>>
>> ![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}
>>
>> In the following part of this guide, you will find a description of each of the available parameters in the window above. After reading the different descriptions in the section "[Description of modifiable parameters](#step1)" and once your changes have been made, click on the `Next`{.action} button located at the bottom right of the window, then go to [Part 2](#step2).
<!-- CP-STEPS-END:modify-domain-settings -->

### 1 - Description of editable parameters <a name="step1"></a>

<!-- CP-STEPS-START:description-editable-parameters -->
> [!primary]
>
> The `Domain name`{.action} and `Root folder`{.action} fields are not modifiable, as they are parameters related to the website on your web hosting plan.
>
> - To associate a new domain name or subdomain with a website on your web hosting plan, please refer to our guide "[How to associate a domain name with an existing website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - To change the root folder of your website, refer to our guide "[How to modify the root folder of an existing website?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

#### The "Activate the CDN" option

To use this option, you must have already subscribed to an OVHcloud CDN solution, or have a Performance web hosting plan.

Tick/untick this box to enable/disable the CDN option for your domain name or subdomain.

You can find more information on the CDN options/offers available in our dedicated documentation “[Speeding up your website with CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)”.

#### The "Enable the firewall" option

This option filters incoming requests to protect your web hosting plan against the most common attacks.

You can find more information on this option in our dedicated documentation "[Activating the application firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

#### The "Separate logs" option

Tick/untick this option only if you want to separate your domain name logs from other domain names declared on your web hosting plan.

Find out more about this option in our [detailed statistics page](/links/web/hosting-traffic-analysis).

Once you have made your changes, click the `Next`{.action} button in the bottom right-hand corner of the window to go to [Part 2](#step2).


<!-- CP-STEPS-END:description-editable-parameters -->

### 2 - Summary of changes <a name="step2"></a>

<!-- CP-STEPS-START:confirm-domain-changes -->
Once you have clicked the `Next`{.action} button, you will see a summary of the settings you are about to apply to your domain name:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

If all the settings are configured as you want, click the `Confirm`{.action} button.
<!-- CP-STEPS-END:confirm-domain-changes -->

Depending on the options you have selected, the changes may take between a few minutes and a few hours to be applied.

If modifications of the **CDN** and **separate logs** options are not taken into account after 24 hours, please refer to the respective resources listed for all of the options described in [Part 1](#step1), in order to check that all of the required conditions have been met.

## Go further

[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Managing SSL certificates on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Speeding up your website with CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)

[Activating the application firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).
