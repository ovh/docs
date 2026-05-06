---
title: "How to connect an OVHcloud domain name to a Shopify hosting plan"
excerpt: "Prepare and configure your OVHcloud domain name's DNS zone to connect to a Shopify hosting plan"
updated: 2026-03-18
---

## Objective

You are the holder of a domain name with OVHcloud and want to connect it to a Shopify hosting plan. This guide explains how to prepare and configure your OVHcloud DNS zone for your Shopify hosting plan.

**Find out how to connect your OVHcloud domain name to a Shopify hosting plan.**

> [!warning]
>
> - Shopify support does not have access to your OVHcloud domain name settings and therefore cannot advise you on the information you will need to provide.
>
> - OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore up to you to ensure that they function correctly.<br><br> We have provided you with this guide in order to help you with common tasks. However, we recommend contacting a [specialist provider](/links/partner) and/or the service's publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- A [domain name](/links/web/domains) registered with OVHcloud.
- The [necessary permissions to manage](/pages/account_and_service_management/account_information/managing_contacts) the domain name.
- A Shopify hosting plan.
- Access to manage this hosting plan with Shopify.

<!-- CP-NAV-START:web-dns-zone -->
---

### OVHcloud Control Panel Access

- **Direct link:** [DNS zones](/links/control-panel/web-dns-zone)
- **Navigation path:** `Web Cloud`{.action} > `DNS zones`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-dns-zone -->

## Instructions

Before following the steps in this guide, we recommend reading our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Your DNS zone is potentially already preconfigured or linked to a hosting plan. We will look at how to identify each DNS record required to connect to your Shopify hosting plan. Some records will need to be deleted to avoid conflicts with DNS records required in this configuration. Others will simply need to be modified or created. For a better understanding, we will use the domain name "**mydomain.ovh**" as an example. Replace it with your domain name during configuration.

### Configure your DNS records on your OVHcloud account

<!-- CP-STEPS-START:configure-dns-records -->
Click the tabs below to view each of the **5** steps in sequence.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> The table that appears lists all of the DNS records for the selected domain name.
>>
> **Step 2**
>>
>> **Configuring the A record**
>>
>> **1 - Identification:** Filter the DNS records by selecting type `A` in the filter menu at the top right of the table.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Identify any existing "A" records for your domain name alone (e.g. `mydomain.ovh.`) and for the "www" subdomain (e.g. `www.mydomain.ovh.`).
>>
>> **2 - Deletion:** Delete all existing "A" records for the "www" subdomain. If multiple "A" records exist for the domain name alone, delete all but one, which you will modify in the next sub-step. For each record to delete, click the `...`{.action} button to the right of the corresponding row, then click `Delete record`{.action}.
>>
>> **3 - Modification:** If an "A" record exists for the domain name alone, click the `...`{.action} button, then click `Modify record`{.action}. Leave the **Subdomain** field blank and replace the target with the Shopify IPv4 address: `23.227.38.65`. Click `Next`{.action} and confirm.
>>
>> If no "A" record exists, click `Add an entry`{.action} at the top right, select the `A`{.action} pointer record, leave the **Subdomain** field blank and enter `23.227.38.65` in the **Target** field. Click `Next`{.action} and confirm.
>>
>> Then proceed to step 3.
>>
> **Step 3**
>>
>> **Configuring the AAAA record**
>>
>> **1 - Identification:** Filter the DNS records by selecting type `AAAA` in the filter menu at the top right of the table.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> Identify any existing "AAAA" records for your domain name alone (e.g. `mydomain.ovh.`) and for the "www" subdomain (e.g. `www.mydomain.ovh.`).
>>
>> **2 - Deletion:** Delete all existing "AAAA" records for the "www" subdomain. If multiple "AAAA" records exist for the domain name alone, delete all but one, which you will modify in the next sub-step. For each record to delete, click the `...`{.action} button to the right of the corresponding row, then click `Delete record`{.action}.
>>
>> **3 - Modification:** If an "AAAA" record exists for the domain name alone, click the `...`{.action} button, then click `Modify record`{.action}. Leave the **Subdomain** field blank and replace the target with the Shopify IPv6 address: `2620:0127:f00f:5::`. Click `Next`{.action} and confirm.
>>
>> If no "AAAA" record exists, click `Add an entry`{.action} at the top right, select the `AAAA`{.action} pointer record, leave the **Subdomain** field blank and enter `2620:0127:f00f:5::` in the **Target** field. Click `Next`{.action} and confirm.
>>
>> Then proceed to step 4.
>>
> **Step 4**
>>
>> **Deleting TXT records**
>>
>> **1 - Identification:** Filter the DNS records by selecting type `TXT` in the filter menu at the top right of the table.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Identify any existing "TXT" records for your domain name alone (e.g. `mydomain.ovh.`) and for the "www" subdomain (e.g. `www.mydomain.ovh.`).
>>
>> **2 - Deletion:** Delete all "TXT" records identified (domain name alone and "www" subdomain) to avoid conflicts with the new DNS records. For each record, click the `...`{.action} button to the right of the corresponding row, then click `Delete record`{.action}.
>>
>> If no "TXT" records exist, proceed to step 5.
>>
> **Step 5**
>>
>> **Configuring the CNAME record**
>>
>> **1 - Identification:** Filter the DNS records by selecting type `CNAME` in the filter menu at the top right of the table.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Identify any existing "CNAME" records for the "www" subdomain (e.g. `www.mydomain.ovh.`).
>>
>> **2 - Deletion:** If multiple "CNAME" records exist for the "www" subdomain, delete all but one. For each record to delete, click the `...`{.action} button to the right of the corresponding row, then click `Delete record`{.action}.
>>
>> **3 - Modification:** If a "CNAME" record exists for the "www" subdomain, click the `...`{.action} button, then click `Modify record`{.action}. Replace only the **Target** with `shops.myshopify.com.`. Click `Next`{.action} and confirm.
>>
>> If no "CNAME" record exists for the "www" subdomain, click `Add an entry`{.action} at the top right, select the `CNAME`{.action} pointer record, enter `www` in the **Subdomain** field and `shops.myshopify.com.` in the **Target** field. Click `Next`{.action} and confirm.
<!-- CP-STEPS-END:configure-dns-records -->

The DNS zone is now configured to point to your Shopify hosting plan.

### Connect your domain name to Shopify

Carry out this step from the Shopify management interface by following step 2 of [**this Shopify guide**](https://help.shopify.com/en/manual/domains/add-a-domain/connecting-domains/connect-domain-manual).

> [!primary]
>
> It may take up to 48 hours to verify your domain name.

If you are using an OVHcloud email solution, or planning to subscribe to one of [our email solutions](/links/web/emails), you will also need to prepare your DNS zone accordingly. Read our guide on [configuring an MX record](/pages/web_cloud/domains/dns_zone_mx).

## Go further <a name="go-further"></a>

[Modifying an OVHcloud domain name's DNS servers](/pages/web_cloud/domains/dns_server_edit)

[Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

To delegate the management of your domain name to another OVHcloud customer account, follow the guide on [Managing contacts for OVHcloud services](/pages/account_and_service_management/account_information/managing_contacts).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
