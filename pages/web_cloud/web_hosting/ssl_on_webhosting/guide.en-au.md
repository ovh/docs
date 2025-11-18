---
title: "Web Hosting - How to configure an SSL certificate"
excerpt: "Find out how to install and manage your SSL certificate on an OVHcloud web hosting plan"
updated: 2025-06-16
---

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

**This guide explains how to manage an SSL certificate on an OVHcloud web hosting plan.**

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting)
- At least one [domain name](/links/web/domains)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!warning]
>
> **Before you continue**, please ensure that **all domain names and/or subdomains** included in your SSL certificate:
>
> - Point to your web hosting plan’s IP address.
> - Are declared as multisites on your web hosting plan.
>
> To check this, you can refer to our guides:
>
> - [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

### Activate an SSL certificate on your web hosting plan <a name="ssl-enable"></a>

OVHcloud offers 4 solutions for activating/installing an SSL certificate on a web hosting plan. Each of these solutions is documented in detail.

Find below our guides dedicated to these 4 solutions:

- [Free Let's Encrypt (DV) SSL certificate](/pages/web_cloud/web_hosting/ssl_letsencrypt): Certificate that can include up to **99** domain names/subdomains declared on a web hosting plan.
- [Sectigo (DV) paid SSL certificate](/pages/web_cloud/web_hosting/ssl_dv): certificate valid for a single domain name + its subdomain in “www” (example: `domain.tld` and `www.domain.tld`) or **only** a subdomain (example: `sub.domain.tld`).
- [Sectigo (EV) paid SSL certificate](/pages/web_cloud/web_hosting/ssl_ev): certificate valid for a single domain name + its subdomain in “www” (example: `domain.tld` and `www.domain.tld`) or **only** a subdomain (example: `sub.domain.tld`).
- [Custom SSL certificate](/pages/web_cloud/web_hosting/ssl_custom): if you have your own SSL certificate or none of the 3 solutions above match your needs.

> [!primary]
>
> You can only install one SSL certificate per web hosting plan (out of the 4 solutions listed above).
>
> If you need to activate an SSL certificate for several domain names/subdomains declared on the same web hosting plan, choose to install a [free Let's Encrypt SSL certificate](/links/web/hosting-options-ssl), or install your own [custom SSL certificate](/pages/web_cloud/web_hosting/ssl_custom).

### Delete an SSL certificate on a web hosting plan <a name="delete-ssl"></a>

> [!warning]
>
> If you would like to delete an SSL certificate from your web hosting plan, ensure that deleting the SSL certificate will not make your websites inaccessible **before you continue**. If this is the case, your users will encounter a security error when they try to access your website in HTTPS.

Since this check is carried out depending on the settings for your website(s), we recommend that you contact a specialist service provider if you encounter any difficulties. We will not be able to assist you with this.

> [!primary]
>
> **Information on migrating to the new SSL certificate management interface:**
>
> The rest of this guide is aimed at customers whose web hosting services have not yet migrated to the new SSL certificate management interface.
> To check if this migration has been carried out, go to your Web Hosting plan in the OVHcloud Control Panel, and check the `SSL certificates` tab.
> If the `SSL certificates` tab is present, your service has already migrated to the new management interface. If this is the case, please refer to [this guide](/pages/web_cloud/web_hosting/ssl_management) directly to manage your SSL certificate.
>
> For technical reasons, not all of our customers' web hosting services can be migrated at once. This migration process is carried out automatically over a period of a few weeks, with no impact on the operation of your web hosting services, and no intervention or action required on your part.
>
> All web hosting services will eventually work with the new SSL certificate management interface.

To delete the SSL certificate installed on your web hosting plan, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. Click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} menu.
4. Select the web hosting plan concerned.
5. On the page that appears, stay in the `General Information`{.action} tab.
6. Go to the box labelled `Configuration`.
7. To the right of `SSL certificate`, click on the `...`{.action} button, then `Delete SSL`{.action}.
8. In the window that pops up, click `Confirm`{.action} to confirm the deletion of the SSL certificate.

![Delete SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

This will be effective within a few hours at most.

> [!warning]
>
> The deletion of a paid **Sectigo** SSL certificate (DV or EV) is permanent, even if the certificate has not yet expired. No refund may be made on a pro rata basis for the remaining time. If you would like to reinstall a **Sectigo** SSL certificate (DV or EV), you will need to place a new order and pay for the new SSL certificate.
>

### Correct frequently encountered errors with SSL certificates offered on web hosting plans

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

This message indicates that you already own an SSL certificate. You do not need to activate a new SSL certificate on your web hosting plan.

- 1: If the SSL certificate installed on your web hosting plan is a free Let's Encrypt SSL certificate, please refer to our guide on [Let's Encrypt (DV) certificates](/pages/web_cloud/web_hosting/ssl_letsencrypt) to continue with your actions.

- 2: If the SSL certificate installed on your web hosting plan is not the one you want to use, you can [delete your current SSL certificate](#delete-ssl), then [activate a new SSL certificate](#ssl-enable) on your web hosting plan.

#### "No attached domain with SSL enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

There are three possible reasons for this notification.

- **1**: The domain name associated with your website points to the IP address of your web hosting plan’s CDN, with no CDN option enabled on your web hosting plan.  
    To resolve this situation, assign the web hosting plan’s own IP address to your domain name in your domain name’s DNS zone.  
    To retrieve the IP addresses of your web hosting plan, please refer to our guide on "[IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".  
    To edit your domain name’s active DNS zone, please read our guide on "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

- **2**: The domain name associated with your website does not point to the IP address of your web hosting plan.  
    To resolve this situation, assign the web hosting plan’s IP address to your domain name in your domain name’s DNS zone.  
    If you have enabled a CDN option on your web hosting plan, you can also use the web hosting plan’s IP address for CDN.  
    To retrieve the IP address of your web hosting plan, please refer to our guide on "[IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".  
    To edit your domain name’s active DNS zone, please read our guide on "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

- **3**: None of the domain names listed in the tab "Multisite" have an active SSL option.  
    To resolve the situation, activate the SSL certificate for the domain name(s). If you need to do so, please read the “[Activate an SSL certificate](#ssl-enable)” section of this guide to continue.

#### You have ordered a Sectigo EV SSL along with your web hosting plan, but the certificate is not yet active and the web hosting plan is not working properly

This situation is linked to the steps you need to take to activate SSL EV on your web hosting plan.

If you need assistance with this, please refer to our guide on [Web Hosting - Activating a Sectigo EV SSL certificate](/pages/web_cloud/web_hosting/ssl_ev) to resolve this situation.

> [!primary]
>
> If the EV SSL certificate is not fully active, the order will not be closed and will never generate an invoice. As a result, the web hosting service will not work properly.
>

#### After the Sectigo SSL certificate (DV or EV) expires, you receive the error "No attached domain with SSL enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

This error occurs whenever the Sectigo SSL certificate (activated directly from the web hosting plan) expires and the IP address of the web hosting plan changes. For this reason, you will need to point your domain name to the correct IP address (type A record) in your domain name’s active DNS zone.

To retrieve the IP address of your web hosting plan, please refer to our guide on "[IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".  
To edit your domain name’s active DNS zone, please read our guide on "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

#### The SSL certificate is active on your web hosting plan, but you see the message "Your connection is not private" on your website

This message appears in the following cases:

- **1**: The redirection rule to your URL in HTTPS is misconfigured or does not exist in the .htaccess file.  
    To correct this, please read our tutorial “[Rewrite the URL for accessing your website using mod_rewrite via the .htaccess file](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)” or contact a [specialist provider](/links/partner) if you experience any difficulties.

- **2**: Some elements of the web page are not redirected correctly to elements encrypted in "HTTPS".  
    To correct this, you need to ensure that your entire website is encrypted via the HTTPS protocol.  
    If you need help with this, please refer to our tutorial on "[Web Hosting - Switching your website to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)", or contact a [specialist provider](/links/partner) if you encounter any difficulties.

> [!success]
>
> The elements concerned on the web page can be seen directly from the SSL information of the web browser, by consulting the *certificate details*.
>

## Go further

[Web Hosting - Switching your website to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Common errors related to securing your website with SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).