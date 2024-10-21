---
title: "Web Hosting - Activate a Sectigo DV SSL certificate"
excerpt: "Find out how to activate a Sectigo DV SSL certificate on your OVHcloud Web Hosting plan"
updated: 2024-10-21
---

## Objective

With Secure Socket Layer (SSL) certificates, you can encrypt the exchanges made from or to your website. This prevents a malicious person or robot from "listening" clearly to requests made from your website.

OVHcloud offers several types of SSL certificates for [OVHcloud web hosting solutions](/links/web/hosting). They are set out in our guide on "[Web Hosting - Managing an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting)". SSL certificates are essential for the security of your website.

There are three types of SSL certificates:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

The SSL encryption levels are identical between these three certificate types.

The main difference lies in the level of checks that will be carried out by the Certification Authority (CA) that issues the SSL certificate and attests to its authenticity.

For OVHcloud web hosting plans, the certification authority delivering DV SSL certificates is [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Once the order of the certificate is completed and sent to our certificate provider/certification authority Sectigo, **no order refund is possible**.
>

**Find out how to activate a Sectigo DV SSL certificate on an OVHcloud Web Hosting plan.**

## Requirements

- You have access to the [OVHcloud Control Panel](/links/manager).
- You plan to order an SSL secured [OVHcloud web hosting plan](/links/web/hosting) or you have a web hosting plan in your customer account without an SSL certificate installed.
- You manage a [domain name](/links/web/domains) for which you have exclusive rights. The domain name must not already be linked to an SSL certificate.

## Requirements

> [!warning]
>
> Sectigo DV SSL certificates offered at OVHcloud are only valid for one of the following two cases on your web hosting plan:
>
> - a single domain name + its subdomain in “www” (e.g. `domain.tld` and `www.domain.tld`);
> - only one subdomain (e.g. `sub.domain.tld`).
>
> This means that if you have other domain names/subdomains declared as multisites on your web hosting plan, they will not be able to benefit from an SSL certificate.
>
> You can only install one SSL certificate per Web Hosting plan.
>
> If you need to activate an SSL certificate for several domain names/subdomains declared on your Web Hosting plan, choose to install a [free Let's Encrypt SSL certificate](/links/web/hosting-options-ssl), or install your own [custom SSL certificate](/pages/web_cloud/web_hosting/ssl_custom).

**Before ordering the Sectigo DV SSL certificate on your Web Hosting plan**, check that **the domain/subdomain name** covered by your SSL certificate:

- points to your web hosting plan’s IP address;
- is declared as a multisite on your web hosting plan.

> [!primary]
>
> If you would like to subscribe to a Sectigo DV SSL certificate for a domain name (e.g. `domain.tld`), please check that its subdomain in www (e.g. `www.domain.tld`) also points to the IP address of your web hosting plan, and is correctly declared as a multisite.
>
> If you order a Sectigo DV SSL certificate without checking that it has been sent, you will need to make a correction at a later date. You will then need to delete the Sectigo DV SSL certificate you have previously subscribed to **without being refunded**, then order a new one. The goal is for the new Sectigo DV SSL certificate to include both your domain name `domain.tld` and its subdomain in “www” `www.domain.tld`.
>
> As a reminder, if you subscribe to a Sectigo DV SSL certificate directly for a subdomain (example: `sub.domain.tld`), you are not affected by this situation.

Also check the following:

- The `SSL` box must not be ticked when adding the domain/subdomain concerned by your Sectigo DV SSL certificate to the multisite.
- The `To generate` or `Enabled` status must not already be present for the domain/subdomain concerned by your Sectigo DV SSL certificate.

If you need help with this, please refer to our guides:

- [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite);
- [IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
- [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

### Order the Sectigo DV SSL certificate

To order the Sectigo DV SSL certificate, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} drop-down menu.
4. Select the web hosting plan concerned.
5. On the page that appears, stay in the `General Information`{.action} tab.
6. Go to the box labelled `Configuration`.
7. To the right of `SSL certificate`, click on the `...`{.action} button, then `Order an SSL certificate`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

In the window that pops up, select `Paid certificate`{.action} from the list of possible choices.

Then select the domain/subdomain concerned from the dropdown list that appears, and click `Next`{.action}.

In the new window that pops up, click `Confirm`{.action} to be redirected to the purchase order for your Sectigo DV SSL certificate.

Proceed with the order until payment is received in order to validate the request to create the Sectigo DV SSL certificate for your domain/subdomain on your Web Hosting plan.

> [!alert]
>
> Once the order has been confirmed, the Sectigo DV SSL certificate request is sent to the Sectigo certification authority.
>
> Therefore, no refund of Sectigo DV SSL is possible.

It may take up to **24** hours to install the Sectigo DV SSL certificate.

### Check the activation of the Sectigo DV SSL certificate

To verify that the installation is complete, perform the following actions:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} drop-down menu.
4. Select the web hosting plan concerned.
5. On the page that appears, stay in the `General Information`{.action} tab.
6. Go to the box labelled `Configuration`.

If everything is finished, you will find a value below `SSL certificate` equivalent to this: `Yes - SECTIGO - DV`.

![SSL Sectigo DV certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-dv-enable.png){.thumbnail}

Your Sectigo DV SSL certificate is now installed and active. You can now use it with your web hosting and, for example, [enable HTTPS for your website](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Go further <a name="go-further"></a>

[Web Hosting - Managing an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Web Hosting - Switch your website to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Common errors related to securing your website with SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).