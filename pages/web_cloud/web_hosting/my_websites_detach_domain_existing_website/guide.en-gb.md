---
title: "How to detach a domain name from an existing website?"
excerpt: "Find out how to detach a domain name or subdomain from an existing website on your web hosting"
updated: 2026-05-04
---

## Objective

You can host multiple websites on the same web hosting plan, even if the domain names are not registered with OVHcloud. In addition, you can associate one or more domain names or subdomains with the same website.

Do you no longer want to use a domain name or subdomain for your website?
Do you want to associate your domain name or subdomain with another website on one of your web hosting plans?

**Find out how to detach a domain name or subdomain from an existing website on your web hosting.**

## Requirements

- A compatible [OVHcloud web hosting plan](/links/web/hosting-multisite)
- One or more [domain names](/links/web/domains)
- Access to modify the configuration of the [DNS zones of your domain names](/pages/web_cloud/domains/dns_zone_edit)

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
> Detaching a domain name or subdomain from a website on your web hosting is a sensitive operation. Indeed, after this operation, your website will no longer be accessible on the Internet using your domain name and/or subdomain.

<!-- CP-STEPS-START:detach-domain -->
Click on the tabs below to view each of the **4** steps.

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
>> Then click on the `⁝`{.action} button to the right of the relevant domain name or subdomain, then on `Detach domain`{.action}.
>> 
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>> 
> **Step 4**
>>
>> The new window that opens asks you to confirm the detachment of the domain name or subdomain.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Depending on your choice, tick or untick the `Automatic configuration (recommended)`{.action} box, then click on `Confirm`{.action} to confirm your choice.
>>
>> > ![!warning]
>> >
>> > **Special case: You have associated Git on your website and only one domain name is attached to the website**
>> >
>> > If this is the case, you will encounter the following window:
>> >
>> > ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > As the message indicates, you will need to [delete your Git association](/pages/web_cloud/web_hosting/git_integration_webhosting) first, **before** detaching your domain name.
<!-- CP-STEPS-END:detach-domain -->

### Special case: Detaching a domain name or subdomain to use it with another website

- If you want to add your domain name or subdomain to another existing website on a web hosting, refer to [this guide](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- If you want to create a new website on a web hosting with your recently detached domain name or subdomain, refer to [this guide](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).
