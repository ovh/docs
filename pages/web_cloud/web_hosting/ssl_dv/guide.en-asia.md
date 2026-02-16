---
title: "Web Hosting - Activate a Sectigo DV SSL certificate"
excerpt: "Find out how to activate a Sectigo DV SSL certificate on your OVHcloud web hosting plan"
updated: 2025-12-16
---

## Objective

With Secure Socket Layer (SSL) certificates, you can encrypt the exchanges made from or to your website. This prevents unauthorized persons and malicious bots from viewing requests to or from your website.

OVHcloud offers several types of SSL certificates for [OVHcloud web hosting solutions](/links/web/hosting). They are set out in our guide on "[Web Hosting - Managing an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting)". SSL certificates are essential for the security of your website.

There are three types of SSL certificates:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

The SSL encryption levels are identical between these three certificate types.

The main difference lies in the level of checks that will be carried out by the Certification Authority (CA) that issues the SSL certificate and attests to its authenticity.

For OVHcloud web hosting plans, the certification authority delivering DV SSL certificates is [Sectigo](https://sectigostore.com).

> [!warning]
>
> Once the order of the certificate is completed and sent to our certificate provider/certification authority Sectigo, **no order refund is possible**.
>

**Find out how to activate a Sectigo DV SSL certificate on an OVHcloud web hosting plan.**

## Requirements

- You have access to the [OVHcloud Control Panel](/links/manager).
- You plan to order or have an [OVHcloud web hosting plan](/links/web/hosting).
- You manage a [domain name](/links/web/domains) for which you have exclusive rights. The domain name must not already be linked to an SSL certificate.

## Requirements

> [!warning]
>
> Sectigo DV SSL certificates offered at OVHcloud are only valid for one of the following two cases on your web hosting plan:
>
> - A single domain name including the www subdomain (e.g. `domain.tld` and `www.domain.tld`).
> - One subdomain (e.g. `sub.domain.tld`).
>
> If other domain names or subdomains are declared on your web hosting plan, and you also want to assign them an SSL certificate, you can:
>
> - [Activate a free Let's Encrypt SSL certificate](/pages/web_cloud/web_hosting/ssl_letsencrypt) (if not already the default).
> - Activate one or more other paid SSL certificate(s) ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) or [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Install your own SSL certificate](/pages/web_cloud/web_hosting/ssl_custom).

**Before ordering the Sectigo DV SSL certificate on your web hosting plan**, check that **the domain/subdomain name** covered by your SSL certificate:

- Points to the IP address of your web hosting plan.
- Is declared on one of the websites on your web hosting.
- Does not already have an active SSL certificate.

> [!primary]
>
> If you wish to order a Sectigo DV SSL certificate for a domain name (e.g. `domain.tld`), make sure that its "www" subdomain (e.g. `www.domain.tld`) also points to the IP address of your web hosting and is correctly declared on one of the websites on your web hosting.
>
> If you order a Sectigo DV SSL certificate without checking that it has been sent, you will need to make a correction at a later date. You will then need to delete the Sectigo DV SSL certificate you have previously subscribed to **without being refunded**, then order a new one. The goal is for the new Sectigo DV SSL certificate to include both your domain name `domain.tld` and its its www subdomain `www.domain.tld`.
>
> As a reminder, if you subscribe to a Sectigo DV SSL certificate directly for a subdomain (example: `sub.domain.tld`), you are not affected by this situation.

To check if this is the case, please refer to our guides below:

- [Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Web Hosting - List of IP addresses by cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
- [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
- [Web Hosting - How to configure an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting), part **Disable an SSL certificate on a web hosting plan**

### Order the Sectigo DV SSL certificate

Click on the tabs below to view each of the **5** steps in succession:

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
>> When the content of the tab appears, click `Order a Sectigo SSL certificate`{.action}.
>>
>> ![Sectigo SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Step 5**
>>
>> In the new window that opens, select the domain or subdomain concerned using the dropdown menu, then click `Confirm`{.action} to be redirected to the purchase order for your Sectigo DV SSL certificate.
>>
>> ![SSL Sectigo domain selection](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
>> Proceed with the order until you pay in order to validate the request to create the Sectigo DV SSL certificate for your domain name and/or subdomain on your Web Hosting plan.

> [!alert]
>
> Once the order has been confirmed, the Sectigo DV SSL certificate request is sent to the Sectigo certification authority.
>
> Therefore, no refund of Sectigo DV SSL is possible.

It may take up to **24** hours to install the Sectigo DV SSL certificate.

### Check the activation of the Sectigo DV SSL certificate

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
>> When the content of the tab appears, check that each domain name and/or subdomain concerned is listed in the table with the certificate type SSL `Sectigo`.
>>
>> ![SSL certificate management panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Your Sectigo DV SSL certificate is now installed and active. You can now use it with your web hosting and, for example, [enable HTTPS for your website](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Go further <a name="go-further"></a>

[Web Hosting - Managing an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Web Hosting - Switch your website to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Common errors related to securing your website with SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)
 
For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).