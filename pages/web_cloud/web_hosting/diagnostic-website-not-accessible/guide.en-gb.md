---
title: What do I do if my website is down?
excerpt: How to diagnose the causes of inaccessibility of your web site
updated: 2026-03-31
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
- No outstanding [payments](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) and [renewals](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) of related services (domain name and web hosting plan)

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

### 1 - Check the validity of your domain name subscription

> [!warning]
>
> You are solely responsible for renewing your web services.<br>
> As a hosting provider, OVHcloud is required to permanently delete any web services (domain names, hosting plans, email accounts, etc.) that have not been renewed in time, as well as all of the data they store.
>
> As a result, we strongly recommend that you enable [automatic renewal](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#instructions) for all of your OVHcloud subscriptions.
>

<!-- CP-STEPS-START:check-domain-renewal -->
To check that your domain name subscription is valid, click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [My offers and services](/links/control-panel/billing-services) page.
>>
> **Step 2**
>>
>> Renew your domain if necessary via the `...`{.action} button, then `Renew`{.action}.
>>
>> ![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}
>>
> **Step 3**
>>
>> After this renewal, your website will be accessible again within 48 hours maximum.
<!-- CP-STEPS-END:check-domain-renewal -->

### 2 - Check the DNS servers

To check the validity of your [DNS servers](/pages/web_cloud/domains/dns_server_edit), go to the [Domain names](/links/control-panel/web-domains) page, then select the domain name concerned.

**Click on the scenario that matches your situation to view the content.**

<!-- CP-STEPS-START:check-dns-servers-scenario1 -->
/// details | Scenario 1 - No anomalies appear on the DNS servers

To check the DNS servers declared, click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Domain names](/links/control-panel/web-domains) page, then select the domain name concerned.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Check the servers listed in the `DNS servers`{.action} tab:
>>
>> ![DNS server confirmed](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}
>>
> **Step 3**
>>
>> If they are identical to the targets of the `NS` type entries in the **DNS zone**, go to [part 3](#step3):
>>
>> ![DNS server verified](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

///
<!-- CP-STEPS-END:check-dns-servers-scenario1 -->

/// details | Scenario 2 - A warning appears above the DNS zone

A warning in the **DNS zone** tab indicates that the DNS servers used by your domain name are not the ones indicated in your [DNS zone](/pages/web_cloud/domains/dns_zone_edit). Two scenarios are possible:

- Under the sentence "You currently use the following DNS servers", the servers listed are "ns **?** .ovh.net" and "dns **?** .ovh.net" (in which "**?**" stands for a double-digit number):

![OVHcloud DNS server warning](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modify the DNS servers as described in our guide "[How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)", so that they are identical to the targets of the `NS` type records in your **DNS zone**.

Your website will then be available within a maximum of 48 hours.

- Under the sentence "You currently use the following DNS servers", the servers listed are not "ns **?** .ovh.net" and "dns **?** .ovh.net".

![External DNS server warning](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> In this situation, please contact your DNS Zone provider, your webmaster or a [OVHcloud partner](/links/partner) before making any changes.
>
> The DNS servers used by your domain name may be functional and the problem accessing your website be linked to a missing or incorrect entry in the active [DNS zone](/pages/web_cloud/domains/dns_zone_general_information). Changing the DNS servers in this situation might make your email addresses or other online applications related to your domain name unavailable.

///

<!-- CP-STEPS-START:fix-missing-ns-records -->
/// details | Scenario 3 - No NS-type entries appear in the DNS zone

Your domain's **DNS zone** does not contain any `NS` record:

![Missing NS record warning](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then select the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> Back up the current zone by clicking on the `Change in text format`{.action} button:
>>
>> ![DNS zone text format button](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}
>>
>> Copy and paste the content of your **DNS zone** into a text document on your computer.
>>
> **Step 3**
>>
>> Click on `Reset my DNS zone`{.action} and select `No, but I want to reset my DNS zone.`{.action}.
>>
>> Select your email and hosting servers, then click on `Confirm`{.action}.
>>
>> ![DNS zone reset dialog](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
> **Step 4**
>>
>> Your website will be accessible again within 24 hours maximum.

///
<!-- CP-STEPS-END:fix-missing-ns-records -->

### 3 - Check the DNS zone <a name="step3"></a>

In this step, you will find your hosting plan's IP address, then add it to your **DNS zone**.

If your website is not hosted on the OVHcloud infrastructure or is managed by another provider, please contact the concerned support service.

<!-- CP-STEPS-START:check-hosting-ip-for-dns -->
If your website is hosted on one of our [Web Hosting offers](/links/web/hosting), click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> In the **General information** box, you will see the addresses under **IPv4** and **IPv6**.
>>
>> ![IPv4-IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copy the IPv4 and/or IPv6 address of your domain name.
<!-- CP-STEPS-END:check-hosting-ip-for-dns -->

Then refer to it in your domain's [DNS zone](/pages/web_cloud/domains/dns_zone_edit), by modifying or creating one or more `A` entries.

![ipv4-DNSzone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

Your website will then be available within a maximum of 24 hours.

## Go further <a name="go-further"></a>

[Resolving a "Site not installed" error](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Fixing the 500 Internal Server Error](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Resolving the most common 1-click module errors](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
