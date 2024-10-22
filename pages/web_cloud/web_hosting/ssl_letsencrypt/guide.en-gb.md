---
title: "Web Hosting - Activate a free Let's Encrypt SSL certificate"
excerpt: "Find out how to activate or regenerate a free Let's Encrypt SSL certificate on your Web Hosting plan"
updated: 2024-10-22
---

## Objective

You can use Secure Socket Layer (SSL) certificates to encrypt any exchange of data on your website. This prevents unauthorised persons and malicious robots from viewing requests to or from your website.

OVHcloud offers several types of SSL certificates for [OVHcloud web hosting solutions](/links/web/hosting). They are set out in our guide on [Managing an SSL certificate on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting). SSL certificates are essential for the security of your website.

There are three types of SSL certificates:

- Domain Validation (DV)
- Organisation Validation (OV)
- Extended Validation (EV)

SSL encryption levels are the same between these certificate types.

The main difference lies in the level of checks that will be carried out by the Certificate Authority (CA) that issues the SSL certificate and attests to its authenticity.

Let's Encrypt is a free, automated, open, non-profit certification authority. You can find more information on <https://letsencrypt.org/en/about/>.

**Find out how to activate or regenerate a free Let's Encrypt SSL certificate on your OVHcloud Web Hosting plan.**

## Requirements

- You have access to the [OVHcloud Control Panel](/links/manager).
- You plan to order an SSL secured [OVHcloud web hosting plan](/links/web/hosting) or you have a web hosting plan in your customer account without an SSL certificate installed.
- You manage a [domain name](/links/web/domains) for which you have exclusive rights. The domain name must not already be linked to an SSL certificate.

## Instructions

### 1. Pre-assign the future Let's Encrypt SSL certificate to your domain/subdomain(s) <a name="ssl-multisite"></a>

Unlike other certificates, the [Let's Encrypt free SSL certificate](/links/web/hosting-options-ssl) can be activated for multiple domain names/subdomains at once. This is limited to **99** domains or sub-domains per web hosting plan.

Therefore, before installing the Let's Encrypt SSL certificate, you will need to prepare all domain names/subdomains that will benefit from this SSL certificate.

To do this, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} dropdown menu.
4. Select the web hosting plan concerned.
5. On the page that appears, click on the `Multisite`{.action} tab.

The table that opens will contain all of the domain names/subdomains already declared as multisites on your Web Hosting plan. The “SSL” column shows the activation status of SSL on your domain names/subdomains declared in multisites.

![manage SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

In this column, and in general, three states can appear:

|Status|Description|
|---|---|
|Enabled|An SSL certificate has already been enabled for this multisite entry. If this is the case, [check that the SSL certificate is a Let's Encrypt SSL certificate](#check-ssl). If so, first refer to the [special case](#regenerate-ssl) located further down in this guide. Otherwise, please refer to our guide on [Web Hosting - Managing an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting) if you would like to delete your current SSL certificate (free or payable), then replace it with a Let's Encrypt SSL certificate.|
|To generate|An SSL certificate has been activated for this multisite entry, but it is still not technically active. To do this, you will need to [regenerate the Let's Encrypt SSL certificate](#regenerate-ssl) so that it includes the new domain names/subdomains declared in multisite and for which the status `To generate` is present.|
|Disabled|No SSL certificates are enabled for this multisite entry. To enable it, follow the steps below.|

> [!primary]
>
> If one of your domain names/sub-domains has not yet been declared on your web hosting plan, please refer to the following guides to resolve this situation:
>
> - [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite);
> - [IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

In the `Multisite`{.action} tab, and to pre-assign the Let’s Encrypt SSL option to a domain/subdomain declared as multisite on your Web Hosting plan, perform the following actions:

1. In the table containing all the domain names/sub-domains already declared as multisites on your web hosting plan, click on the `...`{.action} button to the right of the row for the domain name/sub-domain concerned.
2. Then click `Modify domain`{.action}.
3. In the window that pops up, tick the `SSL`{.action} box, then click `Next`{.action}.
4. In the new window that pops up, you will find a summary of your domain/subdomain configuration. Click `Confirm`{.action} to apply the requested change for this multisite entry.

Once the modification has been validated, the status in the SSL column for the multisite entry concerned will change from `Disabled` to `To generate` after a few seconds. If you have other domain names/subdomains concerned in the multisite records of your Web Hosting plan, repeat the operation as many times as necessary.

### 2. Enable a Let's Encrypt SSL certificate <a name="enable-ssl"></a>

Before you proceed with this configuration, ensure that the [previous step](#ssl-multisite) has been completed correctly. In the `Multisite`{.action} tab of your Web Hosting plan, at least one domain/subdomain must have the SSL option with the status `Enabled` or `To generate` to install the Let's Encrypt SSL certificate.

> [!warning]
>
> **Before you continue**, please ensure that **all of the domain names and/or subdomains** included in your future Let's Encrypt SSL certificate:
>
> - point to your web hosting plan’s IP address;
> - are declared as multisites on your web hosting plan.
>
> To check this, you can refer to our guides:
>
> - [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite);
> - [IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

To activate your Let's Encrypt SSL certificate, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} drop-down menu.
4. Select the web hosting plan concerned.
5. On the page that appears, stay in the `General Information`{.action} tab.
6. Go to the box labelled `Configuration`.
7. To the right of `SSL certificate`, click on the `...`{.action} button, then `Order an SSL certificate`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

In the window that pops up, select `Free certificate (Let's Encrypt)`{.action} from the list of possible choices, then click `Next`{.action} to confirm the SSL activation request.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

It may take several hours to set up the Let's Encrypt SSL certificate.

<a name="check-ssl"></a>

To verify that the installation is complete, perform the following actions:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} drop-down menu.
4. Select the web hosting plan concerned.
5. On the page that appears, stay in the `General Information`{.action} tab.
6. Go to the box labelled `Configuration`.

If everything is finished, you will find a value below `SSL certificate` equivalent to this: `Yes - LETSENCRYPT - DV`.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

Your Let's Encrypt SSL certificate is now installed and active. You can now use it with your new website(s) by switching, for example, to your new [website(s) in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

### Special case: Regenerate the Let's Encrypt SSL certificate on a Web Hosting plan <a name="regenerate-ssl"></a>

When you use your web hosting plan, you may need to add multisite domain names/subdomains at a later stage, for which you will need to enable the SSL option.

Even if you have already activated a Let's Encrypt SSL certificate for some of your domain/subdomains, you can still add new ones (subject to the **99** domain/subdomain names specified earlier in this guide).

To do this, perform the following **actions in order**:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. Pre-assign the Let's Encrypt SSL certificate to your new domain/subdomains as detailed in [Part 1](#ssl-multisite) of this guide.
3. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
4. In the left-hand column, click on the `Hosting plans`{.action} drop-down menu.
5. Select the web hosting plan concerned.
6. On the page that appears, stay in the `General Information`{.action} tab.
7. Go to the box labelled `Configuration`.
8. To the right of `SSL certificate`, click the `...`{.action} button, then `Regenerate SSL certificate`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Take note of the information displayed in the window that appears, then click `Confirm`{.action}. Then wait for your SSL certificate to be regenerated.

This step may take several hours.

> [!warning]
>
> Let's Encrypt, the authority that provides the SSL certificate, [limits the number of regenerations per week to five](https://letsencrypt.org/docs/rate-limits/){.external}. As a result, be vigilant about any regenerations you may undertake in the short term, so that you are not temporarily locked in.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

Your Let's Encrypt SSL certificate is now regenerated and active. You can now use it with your new website(s) by switching, for example, to your new [website(s) in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Go further

[Web Hosting - Managing an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Web Hosting - Switch your website to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Common errors related to securing your website with SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).