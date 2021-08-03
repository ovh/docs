---
title: \`What do I do if my website is down?\`
slug: server-error-inaccessible
excerpt: \`Diagnose the causes of inaccessibility of your site\`
section: Diagnostic
---

**Last updated 16/07/2021**

## Objective

Several error returns may appear on your browser in the event of your site being inaccessible. The examples below indicate an incorrect configuration of your [DNS](../../domains/generalites-serveurs-dns/#comprendre-la-notion-de-dns) or a suspended domain (if your website does not display one of the error messages described here, see [Go further](#aller-plus-loin)):

|Browser|Error Message|
\|-|---|
|Chrome:<br>\`This site is inaccessible\`|![cantbereached_chrome](images/cantbereached_chrome.png){.thumbnail}\|
|Firefox:<br>\`Um, we can't find this site. ”|![cantbereached_firefox](images/cantbereached_firefox.png){.thumbnail}\|
|Edge:<br>\`Sorry, we can't access this page\`|![cantbereached_edge](images/cantbereached_edge.png){.thumbnail}\|
|Safari:<br>\`Safari can't find server\`|![cantbereached_safari](images/cantbereached_safari.png){.thumbnail}\|

**Find out how to resolve \`This site is inaccessible\` errors**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](#aller-plus-loin) section of this guide.
>

## Requirements

- a domain [name](https://www.ovh.com/fr/domaines/)
- You must have control over your domain’s servers and DNS [zone](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns).
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## Instructions

### Step 1: check the validity of your domain name

> [!warning]
>
> You are solely responsible for renewing your services.<br>
> As a hosting provider, OVHcloud is required to permanently delete any services (domains, hosting plans, emails, etc.) that have not been renewed in time, as well as all of the data stored on them.
>
> As a result, we strongly recommend that you enable automatic [renewal](../../billing/renouvellement-automatique-ovh/#en-pratique) for all of your OVHcloud subscriptions.
>

To check that your domain name subscription is valid, click on your domain name in the top right-hand corner of the OVHcloud Control Panel. The shortcut menu will appear, then click `Products and services`{.action}.

![control-panel](images/control-panel.png){.thumbnail}\|

Renew your domain if necessary via the `...`{.action} button to the right of the screen, then `Renew the service`{.action}.

![renew-service-button](images/renew-service-button.png){.thumbnail}

Then wait a maximum of 48 hours (propagation time following changes related to [DNS](../../domains/generalites-serveurs-dns/#comprendre-la-notion-de-dns) servers).

### Step 2: check DNS servers

To check that your DNS [servers](../../domains/generalites-serveurs-dns/) are valid, click on Domain [names in the top left-hand corner of your OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) Control `Panel`{.action}, then the domain on your website.

#### Scenario 1: no anomalies on the DNS servers

Check the servers listed in the `DNS`{.action} servers tab:

![srv-dns-ok2](images/srv-dns-ok2.png){.thumbnail}

If they are identical to the targets of the `NS` type entries in the DNS `zone`{.action}, go to [step 3](#etape3):

![srv-dns-ok](images/srv-dns-ok.png){.thumbnail}

#### Scenario 2: a warning appears above the DNS zone

A warning in the DNS `Zone`{.action} tab indicates that the DNS servers used by your domain are not those indicated in your zone. Two scenarios are possible here:

- Under the sentence \`You are currently using the following DNS servers: ”, the servers listed are ns **servers?** .ovh.net\` and \`dns **?** .ovh.net\` (replace the \`?**\`** by any number):

![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}

Modify the DNS servers as described in [this guide](../../domains/generalites-serveurs-dns/#modifier-les-serveurs-dns), so that they are identical to the targets of the `NS` type records in the DNS `zone`{.action}.

Then wait a maximum of 48 hours (for the changes to your `DNS`{.action} servers to propagate).

- Under the sentence \`You are currently using the following DNS servers: ”, the servers listed are not ns **servers?** .ovh.net\` and \`dns **?** .ovh.net”.

![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}

> [!warning]
>
> In this situation, please contact your webmaster or OVHcloud [partners](https://partner.ovhcloud.com/fr/) before making any changes.
>
> The DNS servers used by your domain name may be functional, and the problem accessing your website may be linked to a missing or incorrect entry in the DNS [zone](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns). Changing the DNS servers in this situation may make your email addresses or other online applications unavailable.
>

#### Scenario 3: no NS-type entries appear in the DNS zone

Your domain’s DNS` `{.action}zone does not contain an `NS` record:

![srv_dns_missing](images/srv_dns_missing.png){.thumbnail}

Back up the current zone by clicking the `Modify button in text`{.action} mode on the right-hand side of your screen:

![change_DNS_zone_change_text_format](images/change_DNS_zone_change_text_format.png){.thumbnail}

Then copy and paste the contents of your `DNS`{.action} zone into a text document. Save this document locally.

Then click `Reset my DNS`{.action} zone, then select `No, but I want to reset my DNS`{.action} zone, enter your email and hosting servers, and click `Confirm`{.action}.

![change_DNS_zone_reset](images/change_DNS_zone_reset.png){.thumbnail}

Wait a maximum of 24 hours (for the modifications to propagate in the `DNS`{.action} zone).

### Step 3: check the DNS zone <a name="etape3"></a>

In this step, you will find your hosting plan’s IP address, then add it to your DNS `zone`{.action}.

If your website is hosted outside of OVHcloud infrastructure, or by a third party, please contact the hosting provider concerned.

If your website is hosted on one of our Cloud[ web ](https://www.ovh.com/fr/hebergement-web/)offers, click on the `Hosting`{.action} tab on the left-hand side of your screen, then on the relevant offer.

In the General `information`{.action} tab, copy the IPV4 and/or IPV6 address of your domain.

![ipv4-6](images/ipv4-6.png){.thumbnail}

Then refer to it in your domain’s DNS[ ](../../domains/editer-ma-zone-dns/#editer-la-zone-dns-ovhcloud-de-votre-nom-domaine_1)zone, by modifying or creating one or more `A` records.

![ipv4-DNSzone](images/ipv4-DNSzone.png){.thumbnail}

You will then need to wait a maximum of 24 hours (for the changes to propagate in the `DNS`{.action} zone).

## Go further <a name="aller-plus-loin"></a>

[Resolve the “Website not installed” error](../erreur-site-non-installe/)

[How to diagnose a blank page?](../comment-diagnostiquer-page-blanche/)

[What do I do if I get a 500 Internal Server Error?](../erreur-500-internal-server-error/)

[Resolve the most common 1-click module errors](../erreurs-frequentes-modules-en-1-clic/)

For specialised services (SEO, development, etc.), contact [OVHcloud](https://partner.ovhcloud.com/fr/) partners.

If you would like assistance using and configuring your OVHcloud solutions, please refer to our support [offers](https://www.ovhcloud.com/fr/support-levels/).

Join our community of users on <https://community.ovh.com>.
