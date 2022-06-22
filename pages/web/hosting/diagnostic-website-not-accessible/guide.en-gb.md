---
title: What do I do if my website is down?
slug: server-error-inaccessible
excerpt: How to diagnose the causes of inaccessibility of your web site
section: Troubleshooting
Order: 1
---

**Last updated 16th July 2021**

## Objective

Several error messages may appear on your browser in the event of your site being inaccessible. The examples below indicate an incorrect configuration of your [DNS](../../domains/web_hosting_how_to_edit_my_dns_zone/#understanding-dns) or a suspended domain (if your website does not display one of the error messages described here, see the [Go further](#gofurther) section of this guide):

|Browser|Error Message|
|-|---|
|Chrome:<br>"This site can't be reached"|![cantbereached_chrome](images/cantbereached_chrome.png){.thumbnail}|
|Firefox:<br>"Hmm. We're having trouble finding that site."|![cantbereached_firefox](images/cantbereached_firefox.png){.thumbnail}|
|Edge:<br>"Hmmm... can't reach this page"|![cantbereached_edge](images/cantbereached_edge.png){.thumbnail}|
|Safari:<br>"Safari Can't Find the Server"|![cantbereached_safari](images/cantbereached_safari.png){.thumbnail}|

**This guide explains how to resolve common "This site can't be reached" type errors.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- administrative access to your domain name in order to change the DNS servers and edit the [DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/#understanding-dns)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Step 1: Check the validity of your domain name subscription

> [!warning]
>
> You are solely responsible for renewing your web services.<br>
> As a hosting provider, OVHcloud is required to permanently delete any web services (domain names, hosting plans, email accounts, etc.) that have not been renewed in time, as well as all of the data they store.
>
> As a result, we strongly recommend that you enable [automatic renewal](../../billing/how-to-use-automatic-renewal-at-ovh/#instructions) for all of your OVHcloud subscriptions.
>

To ensure that your domain name subscription is valid, click on your name at the top right-hand corner of your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), then click on `Products and services`{.action} within the right-hand menu.

![control-panel](images/control-panel.png){.thumbnail}|

Renew your domain if necessary by clicking on the `...`{.action} button, then select `Renew service`{.action}.

![renew-service-button](images/renew-service-button.png){.thumbnail}

After the renewal of your offer is completed, your website will be available within a maximum of 48 hours.

### Step 2: Check the DNS servers

To check that your [DNS servers](../../domains/web_hosting_general_information_about_dns_servers/) are valid, click on `Domain names`{.action} in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), then on your domain name.

#### Scenario 1: No anomalies appear on the DNS servers

Check the servers listed in the `DNS servers`{.action} tab:

![srv-dns-ok2](images/srv-dns-ok2.png){.thumbnail}

If they are identical to the targets of the `NS` type entries in the `DNS zone`{.action}, go to [step 3](#step3):

![srv-dns-ok](images/srv-dns-ok.png){.thumbnail}

#### Scenario 2: A warning appears above the DNS zone

A warning in the `DNS zone`{.action} tab indicates that the DNS servers used by your domain name are not the ones indicated in your [DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/#understanding-dns). Two scenarios are possible:

- Under the sentence "You currently use the following DNS servers", the servers listed are "ns **?** .ovh.net" and "dns **?** .ovh.net" (in which "**?**" stands for a double-digit number):

![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}

Modify the DNS servers as described in [this guide](../../domains/web_hosting_general_information_about_dns_servers/#modifying-dns-servers), so that they are identical to the targets of the `NS` type records in your `DNS zone`{.action}.

Your website will then be available within a maximum of 48 hours.

- Under the sentence "You currently use the following DNS servers", the servers listed are not "ns **?** .ovh.net" and "dns **?** .ovh.net".

![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}

> [!warning]
>
> In this situation, please contact your DNS Zone provider, your webmaster or a [OVHcloud partner](https://partner.ovhcloud.com/en-gb/directory/) before making any changes.
>
> The DNS servers used by your domain name may be functional and the problem accessing your website be linked to a missing or incorrect entry in the active [DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/#understanding-dns). Changing the DNS servers in this situation might make your email addresses or other online applications related to your domain name unavailable.
>

#### Scenario 3: No NS-type entries appear in the DNS zone

Your domain’s `DNS zone`{.action} does not contain any `NS` record:

![srv_dns_missing](images/srv_dns_missing.png){.thumbnail}

Back up the current zone by clicking on the `Change in text format`{.action} button:

![change_DNS_zone_change_text_format](images/change_DNS_zone_change_text_format.png){.thumbnail}

Then copy and paste the content of your `DNS zone`{.action} into a text document on your computer.

Then click on `Reset my DNS zone`{.action} and select `No, but I want to reset my DNS zone`{.action}. Select your email and hosting servers and click on `Confirm`{.action}.

![change_DNS_zone_reset](images/change_DNS_zone_reset.png){.thumbnail}

Your website will then be available again within a maximum of 24 hours.

### Step 3: Check the DNS zone <a name="step3"></a>

In this step, you will find your hosting plan’s IP address, then add it to your `DNS zone`{.action}.

If your site is not hosted on the OVHcloud infrastructure or is managed by another provider, please contact the concerned support service.

If your site is hosted on one of our [Web Hosting offers](https://www.ovhcloud.com/en-gb/web-hosting/), click on the `Hosting plans`{.action} tab and choose the Web Hosting offer which contains your website.

In the `General information`{.action} tab, copy the IPv4 and/or IPv6 address of your domain name.

![ipv4-6](images/ipv4-6.png){.thumbnail}

Then refer to it in your domain’s [DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/#edit-your-domain-names-ovhcloud-dns-zone_1), by modifying or creating one or more `A` entries.

![ipv4-DNSzone](images/ipv4-DNSzone.png){.thumbnail}

Your website will then be available within a maximum of 24 hours.

## Go further <a name="gofurther"></a>

[Resolving a “Site not installed” error](../web_hosting_error_-_website_not_installed/)

[Fixing the 500 Internal Server Error](../web_hosting_how_to_fix_the_500_internal_server_error/)

[Resolving the most common 1-click module errors](../error-frequently-1-click-modules/)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
