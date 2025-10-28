---
title: "Web Hosting - New SSL certificate management"
excerpt: "Find out how to manage an SSL certificate on an OVHcloud web hosting plan, using our new management interface"
updated: 2025-10-01
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

With Secure Socket Layer (SSL) certificates, you can encrypt the exchanges made from or to your website. This prevents unauthorized persons and malicious bots from viewing requests to or from your website.

OVHcloud offers several types of SSL certificates for [OVHcloud web hosting solutions](/links/web/hosting). They are presented below in this guide. SSL certificates are essential for the security of your website.

There are three types of SSL certificates:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

The SSL encryption levels are identical between these three certificate types.

The main difference lies in the level of checks that will be carried out by the Certification Authority (CA) that issues the SSL certificate and attests to its authenticity.

You must have an SSL certificate in order to use HTTPS for your website.

**Find out how to manage an SSL certificate on an OVHcloud web hosting plan, using our new management interface.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An [OVHcloud web hosting plan](/links/web/hosting)
- At least one [domain name](/links/web/domains)

> [!warning]
>
> **Before you continue**, please ensure that each **domain name and/or subdomain** covered by your future SSL certificate:
>
> - Points to the IP address of your web hosting plan.
> - Is declared as a multisite on your web hosting plan.
>
> If you have any doubts, you can refer to the guides below:
>
> - [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

## Instructions

### Access SSL certificate management from your web hosting plan

> [!primary]
>
> **Information on migrating to the new SSL certificate management interface:**
>
> The rest of this guide is aimed at customers whose web hosting services have already migrated to the new SSL certificate management interface.
> To check if this migration has been carried out, go to your web hosting plan in the OVHcloud Control Panel, and check the `SSL certificates` tab.
> If the `SSL certificates` tab is missing, your service has not yet migrated to the new management interface. If this is the case, please refer to [this guide](/pages/web_cloud/web_hosting/ssl_on_webhosting) to manage your SSL certificate.
>
> For technical reasons, not all of our customers' web hosting services can be migrated at once. This migration process is carried out automatically over a period of a few weeks, with no impact on the operation of your web hosting services, and no intervention or action required on your part.
>
> All web hosting services will eventually work with the new SSL certificate management interface.

To access SSL certificate management from your web hosting plan, click on the tabs below to view each of the **3** steps in succession:

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

Here, you can fully manage your SSL certificates for all domain names and subdomains associated with your web hosting plan.

### Activate an SSL certificate on your web hosting plan <a name="ssl-enable"></a>

OVHcloud offers 4 solutions for activating or installing an SSL certificate on a web hosting plan.

**Click on the SSL certificate of your choice below to view explanations.**

/// details | Activate the free Let's Encrypt (DV) SSL certificate

The free Let's Encrypt (DV) SSL certificate can include up to **99** domain names and subdomains declared on a web hosting plan.

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

> [!success]
>
> A Let's Encrypt SSL certificate is automatically generated for each domain name and subdomain that has recently been declared as a multisite domain on your web hosting plan. To check this, check that your domain name and/or subdomain appears in the table at the bottom of the `SSL certificates`{.action} page.

///

/// details | Activate the Sectigo (DV) paid SSL certificate

The Sectigo (DV) paid SSL certificate is valid for a single domain name and its "www" subdomain (for example: `domain.tld` and `www.domain.tld`) or **only** a subdomain (for example: `sub.domain.tld`).

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

///

/// details | Activate the Sectigo (EV) paid SSL certificate

The Sectigo (EV) paid SSL certificate is valid for a single domain name and its "www" subdomain (for example: `domain.tld` and `www.domain.tld`) or **only** a subdomain (for example: `sub.domain.tld`).

> [!warning]
>
> The Sectigo (EV) paid SSL certificate has specific eligibility conditions:
>
> - You manage a [domain name](/links/web/domains) for which you have exclusive rights. The domain name must not already be linked to an SSL certificate.
> - You represent an organisation (company, government agency, etc.) registered with an official registry.
> - You have your organisation’s permission to order a Sectigo EV SSL certificate.
> - You are able to provide an accurate account of your organisation's information and contact details.
>
> To check if you are eligible to subscribe to a Sectigo EV SSL certificate, go to [this web page](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.

Click on the tabs below to view each of the **6** steps in succession:

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
>> In the new window that opens, select the domain or subdomain concerned using the dropdown menu, then click `Confirm`{.action} to be redirected to the purchase order for your Sectigo EV SSL certificate.
>>
>> ![SSL Sectigo domain selection](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
> **Step 6**
>>
>> Select the **Sectigo EV SSL certificate**, then continue with the order.
>>
>> Fill in the information requested by **Sectigo** before you receive the Sectigo EV SSL certificate.
>>
>> ![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}
>>
>> Click `Continue`{.action} after **all items** have been entered correctly.
>>
>> Proceed with the order until payment in order to confirm the request to create the SSL certificate.

> [!alert]
>
> Once the order has been confirmed, the Sectigo EV SSL certificate request is sent to the **Sectigo** certification authority.
>
> You must ensure that you are eligible to subscribe to a Sectigo EV SSL certificate **before paying for the certificate**.
>
> No refund of the Sectigo EV SSL payment will be possible, **even if the verification procedure with Sectigo does not succeed**.

///

/// details | Install a custom SSL certificate

This solution allows you to install your own SSL certificate for your domain name, if none of the previous 3 solutions match your needs and you want to use an SSL certificate that you already have.
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
>> When the content of the tab appears, click the `Import your own SSL certificate`{.action} button.
>>
>> ![Custom SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate.png){.thumbnail}
>>
> **Step 5**
>>
>> The following window displays a form with 3 fields to complete:
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window.png){.thumbnail}
>>
>> - `Copy the content of your certificate (Only RSA)`{.action}: Enter the contents of the **certificate.crt** file issued by your SSL provider, including the terms `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` (or their equivalents). RSA encryption is the standard encryption for SSL certificates.
>> - `Copy the content of your private key (not encrypted)`{.action}: Enter the contents of the **private.key** file issued by your SSL provider, including the terms `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----` (or their equivalents). *not encrypted* means that the private key must not be password or passphrase protected. Otherwise, the certificate installation will fail.
>> - `Copy the content of your certificate chain`{.action}: Enter the contents of the **ca_bundle.crt** file from your SSL provider, including the terms `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` (or their equivalents).
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window-completed.png){.thumbnail}
>>
>> Once you have completed the 3 forms, click `Confirm`{.action} to finish importing the custom SSL certificate to your web hosting plan.

> [!success]
>
> To find the information you need to enter in the 3 fields, please refer only to steps **1** and **2** of our guide "[Web Hosting - How to install a custom SSL certificate](/pages/web_cloud/web_hosting/ssl_custom)".

///

### Disable an SSL certificate on a web hosting plan <a name="delete-ssl"></a>

> [!warning]
>
> **Before you proceed**, please ensure that deleting the SSL certificate will not render your websites inaccessible. If this is the case, your users will encounter a security error when they try to access your website in HTTPS

Since this check is carried out depending on the settings for your website(s), we recommend that you contact a specialist service provider if you encounter any difficulties. We will not be able to assist you with this.

To delete the SSL certificate installed on your web hosting plan, click on the tabs below to view each of the **5** steps in succession:

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
>> In the table at the bottom of the new page that pops up, click the `⁝`{.action} button, located to the right of the line corresponding to the domain name concerned, then click `Disable SSL`{.action}.
>>
>> ![Disable SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/disable-ssl.png){.thumbnail}
>>
> **Step 5**
>>
>> In the window that opens, confirm the deactivation by clicking `Confirm`{.action}.
>>
>> ![Delete SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/ssl-deletion.png){.thumbnail}

This will be effective within a few hours at most.

> [!warning]
>
> The deletion of a paid **Sectigo** SSL certificate (DV or EV) is permanent, even if the certificate has not yet expired. No refund may be made on a pro rata basis for the remaining time. If you would like to reinstall a **Sectigo** SSL certificate (DV or EV), you will need to place a new order and pay for the new SSL certificate.

## Go further <a name="go-further"></a>

[Web Hosting - Switching your website to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Common errors related to securing your website with SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).