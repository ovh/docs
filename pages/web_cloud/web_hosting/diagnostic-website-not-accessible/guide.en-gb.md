---
title: What do I do if my website is down?
excerpt: How to diagnose the causes of inaccessibility of your web site
updated: 2022-08-02
---

## Objective

Several error returns may appear on your browser if your website becomes inaccessible. The examples below show an incorrect configuration of your [DNS servers](/pages/web_cloud/domains/dns_server_edit), your [DNS zone](/pages/web_cloud/domains/dns_zone_edit) or a suspended domain (if your website does not display one of the error messages described here, see the [Go further](#go-further) section):

|Browser|Error Message|
|-|---|
|Chrome:<br>"This site can't be reached"|![cantbereached_chrome](/pages/assets/screens/other/browsers/errors/cant-be-reached-chrome.png){.thumbnail}|
|Firefox:<br>"Hmm. We're having trouble finding that site."|![cantbereached_firefox](/pages/assets/screens/other/browsers/errors/cant-be-reached-firefox.png){.thumbnail}|
|Edge:<br>"Hmmm... can't reach this page"|![cantbereached_edge](/pages/assets/screens/other/browsers/errors/cant-be-reached-edge.png){.thumbnail}|
|Safari:<br>"Safari Can't Find the Server"|![cantbereached_safari](/pages/assets/screens/other/browsers/errors/cant-be-reached-safari.png){.thumbnail}|

**This guide explains how to resolve common "This site can't be reached" type errors.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- Administrative access to your domain name in order to change the DNS servers and edit the [DNS zone](/pages/web_cloud/domains/dns_zone_edit)
- Access to the [OVHcloud Control Panel](/links/manager)
- No outstanding [payments](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) and [renewals](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) of related services (domain name and web hosting plan)

## Instructions

### Step 1: Check the validity of your domain name subscription

> [!warning]
>
> You are solely responsible for renewing your web services.<br>
> As a hosting provider, OVHcloud is required to permanently delete any web services (domain names, hosting plans, email accounts, etc.) that have not been renewed in time, as well as all of the data they store.
>
> As a result, we strongly recommend that you enable [automatic renewal](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#instructions) for all of your OVHcloud subscriptions.
>

To ensure that your domain name subscription is valid, click on your name at the top right-hand corner of your [OVHcloud Control Panel](/links/manager), then click on `Products and services`{.action} within the right-hand menu.

![control-panel](/pages/assets/screens/control_panel/product-selection/web-cloud/right-column/right-menu-product-and-services.png){.thumbnail}|

Renew your domain if necessary by clicking on the `...`{.action} button, then select `Renew service`{.action}.

![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}

After the renewal of your offer is completed, your website will be available within a maximum of 48 hours.

### Step 2: Check the DNS servers

To check that your [DNS servers](/pages/web_cloud/domains/dns_server_edit) are valid, click on `Domain names`{.action} in your [OVHcloud Control Panel](/links/manager), then on your domain name.

#### Scenario 1: No anomalies appear on the DNS servers

Check the servers listed in the `DNS servers`{.action} tab:

![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}

If they are identical to the targets of the `NS` type entries in the `DNS zone`{.action}, go to [step 3](#step3):

![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

#### Scenario 2: A warning appears above the DNS zone

A warning in the `DNS zone`{.action} tab indicates that the DNS servers used by your domain name are not the ones indicated in your [DNS zone](/pages/web_cloud/domains/dns_zone_edit). Two scenarios are possible:

- Under the sentence "You currently use the following DNS servers", the servers listed are "ns **?** .ovh.net" and "dns **?** .ovh.net" (in which "**?**" stands for a double-digit number):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modify the DNS servers as described in [this guide](/pages/web_cloud/domains/dns_server_edit), so that they are identical to the targets of the `NS` type records in your `DNS zone`{.action}.

Your website will then be available within a maximum of 48 hours.

- Under the sentence "You currently use the following DNS servers", the servers listed are not "ns **?** .ovh.net" and "dns **?** .ovh.net".

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> In this situation, please contact your DNS Zone provider, your webmaster or a [OVHcloud partner](/links/partner) before making any changes.
>
> The DNS servers used by your domain name may be functional and the problem accessing your website be linked to a missing or incorrect entry in the active [DNS zone](/pages/web_cloud/domains/dns_zone_general_information). Changing the DNS servers in this situation might make your email addresses or other online applications related to your domain name unavailable.
>

#### Scenario 3: No NS-type entries appear in the DNS zone

Your domain’s `DNS zone`{.action} does not contain any `NS` record:

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Back up the current zone by clicking on the `Change in text format`{.action} button:

![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}

Then copy and paste the content of your `DNS zone`{.action} into a text document on your computer.

Then click on `Reset my DNS zone`{.action} and select `No, but I want to reset my DNS zone`{.action}. Select your email and hosting servers and click on `Confirm`{.action}.

![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}

Your website will then be available again within a maximum of 24 hours.

### Step 3: Check the DNS zone <a name="step3"></a>

In this step, you will find your hosting plan’s IP address, then add it to your `DNS zone`{.action}.

If your site is not hosted on the OVHcloud infrastructure or is managed by another provider, please contact the concerned support service.

If your site is hosted on one of our [Web Hosting offers](/links/web/hosting), click on the `Hosting plans`{.action} tab and choose the Web Hosting offer which contains your website.

In the `General information`{.action} tab, copy the IPv4 and/or IPv6 address of your domain name.

![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

Then refer to it in your domain’s [DNS zone](/pages/web_cloud/domains/dns_zone_edit), by modifying or creating one or more `A` entries.

![ipv4-DNSzone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

Your website will then be available within a maximum of 24 hours.

## Go further <a name="go-further"></a>

[Resolving a “Site not installed” error](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Fixing the 500 Internal Server Error](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Resolving the most common 1-click module errors](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).