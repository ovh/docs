---
title: "Web Hosting - How to activate a free Let's Encrypt SSL certificate"
excerpt: "Find out how to activate a free Let's Encrypt SSL certificate on your Web Hosting plan"
updated: 2025-12-16
---

## Objective

You can use Secure Socket Layer (SSL) certificates to encrypt any exchange of data on your website. This prevents unauthorized persons and malicious robots from viewing requests to or from your website.

OVHcloud offers several types of SSL certificates for [OVHcloud web hosting solutions](/links/web/hosting). They are set out in our guide on [Managing an SSL certificate on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting). SSL certificates are essential for the security of your website.

There are three types of SSL certificates:

- Domain Validation (DV)
- Organization Validation (OV)
- Extended Validation (EV)

SSL encryption levels are the same between these certificate types.

The main difference lies in the level of checks that will be carried out by the Certificate Authority (CA) that issues the SSL certificate and attests to its authenticity.

Let's Encrypt is a free, automated, open, non-profit certification authority. You can find more information on <https://letsencrypt.org/en/about/>.

**Find out how to activate a free Let's Encrypt SSL certificate on your OVHcloud web hosting plan.**

## Requirements

- You have access to the [OVHcloud Control Panel](/links/manager).
- You plan to order or have an [OVHcloud web hosting plan](/links/web/hosting).
- You manage a [domain name](/links/web/domains) for which you have exclusive rights. The domain name must not already be linked to an SSL certificate.

> [!primary]
>
> As of **06/08/2025**, the Let's Encrypt SSL certificate is automatically enabled by default for:
>
> - All new domain names/subdomains linked to a web hosting plan.
> - All new domain name subscriptions with a new web hosting plan.
>
> The goal is to save you time configuring your services. You can always disable the Let's Encrypt SSL certificate from your [OVHcloud Control Panel](/links/manager) if you want to install another SSL certificate (Sectigo DV, Sectigo EV or a custom SSL certificate).  
> Find more information in our guide "[How to configure an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting)", part **Disable an SSL certificate on a web hosting plan**.

## Instructions

> [!warning]
>
> **Before you continue**, please ensure that **each domain name and/or subdomain** covered by a future Let's Encrypt SSL certificate:
>
> - Points to the IP address of your web hosting plan.
> - Is declared on one of the websites on your web hosting.
> - Does not already have an active SSL certificate.
>
> To check if this is the case, please refer to our guides below:
>
> - [Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Web Hosting - List of IP addresses by cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
> - [Web Hosting - How to configure an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting), part **Disable an SSL certificate on a web hosting plan**

### Activate the Let's Encrypt SSL certificate

Click on the tabs below to view each of the **4** steps in succession:

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that pops up, click on the `SSL certificates`{.action} tab.
>>
>> ![SSL certificates](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Step 4**
>>
>> When the content of the tab appears, select the domain or subdomain for which you want to activate the free Let's Encrypt (DV) SSL certificate, under the mention `Enable SSL certificate`.
>>
>> ![Let's Encrypt SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Then click the `Enable Let's Encrypt SSL`{.action} button.

It may take several hours to set up the Let's Encrypt SSL certificate.

### Verify activation of the free Let's Encrypt (DV) SSL certificate

To verify that the installation is complete, click on the tabs below to display each of the **4** steps in succession:

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that pops up, click on the `SSL certificates`{.action} tab.
>>
>> ![SSL certificates](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Step 4**
>>
>> When the contents of the tab appear, check that each domain and/or subdomain concerned is listed in the table with the SSL certificate type `Let's Encrypt`.
>>
>>![SSL certificate management panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Your Let's Encrypt SSL certificate is now installed and active. You can now use it with your new website(s) by switching, for example, your new [website(s) to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Go further

[Web Hosting - Managing an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Web Hosting - Switch your website to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Common errors related to securing your website with SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).