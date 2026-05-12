---
title: "Activating the application firewall"
excerpt: "Find out how to activate the application firewall on a Web Hosting plan"
updated: 2026-05-04
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

*ModSecurity* is a complementary Apache module that filters all incoming requests on your web server. It increases security against known vulnerabilities by intercepting and filtering requests before they are processed by any scripts. 

The preconfigured Core Rule Set (CRS) of our *ModSecurity* protects your websites against the most common attacks, for example:

- Trojans
- Email injections
- Broken PDF files
- File injections on your hosting system
- SQL or XSS type injections

**This guide explains how to enable the application firewall from your OVHcloud Control Panel, in order to benefit from enhanced protection.**

> [!primary]
>
> Since your web hosting plan is hosted on a shared infrastructure, modifying your firewall configuration settings is unavailable.

## Requirements

- an [OVHcloud Web Hosting plan](/links/web/hosting)
- at least one [domain name](/links/web/domains) attached to the hosting

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

**Click on the titles below to display the explanations.**

/// details | Enable the application firewall on your entire web hosting in the PHP configuration

Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> In the **Configuration** section, you will find the **Global PHP Version**.
>> 
>> ![Global PHP version](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}
>> 
>> Click on the `...`{.action} button to the right of **Global PHP Version**, then on `Modify configuration`{.action}.
>> 
> **Step 3**
>> 
>> In the window that opens, select the `Modify the current configuration`{.action} option and click on the `Next`{.action} button.
>> 
>> ![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}
>> 
>> In the new window, make sure the **Application Firewall** option is set to `Enabled`{.action}. Then click on the `Confirm`{.action} button.

///

/// details | Enable the application firewall only on a specific domain name or subdomain

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
>> Then click on the `⁝`{.action} button to the right of the relevant domain name or subdomain, then on `Modify domain`{.action}.
>> 
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>> 
> **Step 4**
>> 
>> In the configuration window, tick the box `Enable the firewall`{.action}. You can also include the subdomain `www` in this configuration by ticking the corresponding box at the top (if it is also declared on the same website).
>> 
>> ![Modify a domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}
>> 
>> Click on `Next`{.action}, then on `Confirm`{.action} to validate the parameter changes.
>> 
>> Once the firewall is enabled for your domain name or subdomain, the **Enabled** label appears in the **Firewall** column.
>> 
>> If the **Enabled** label does not appear after a few minutes on the row corresponding to the relevant domain name or subdomain, refresh the page.

///

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
