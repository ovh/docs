---
title: "How to connect an OVHcloud domain name to a SquareSpace hosting plan"
excerpt: "Prepare and configure your OVHcloud domain name's DNS zone to connect to a SquareSpace hosting plan"
updated: 2026-03-18
---

## Objective

You are the holder of a domain name with OVHcloud and want to connect it to a SquareSpace hosting plan. This guide explains how to prepare and configure your OVHcloud DNS zone for your SquareSpace hosting plan.

**Find out how to connect your OVHcloud domain name to a SquareSpace hosting plan.**

> [!warning]
>
> - SquareSpace support does not have access to your OVHcloud domain name settings and therefore cannot advise you on the information you will need to provide.
>
> - OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore up to you to ensure that they function correctly.<br><br> We have provided you with this guide in order to help you with common tasks. However, we recommend contacting a [specialist provider](/links/partner) and/or the service's publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- A [domain name](/links/web/domains) registered with OVHcloud.
- The [necessary permissions to manage](/pages/account_and_service_management/account_information/managing_contacts) the domain name.
- A SquareSpace hosting plan.
- Access to manage this hosting plan with SquareSpace.

<!-- CP-NAV-START:web-dns-zone -->
---

### OVHcloud Control Panel Access

- **Direct link:** [DNS zones](/links/control-panel/web-dns-zone)
- **Navigation path:** `Web Cloud`{.action} > `DNS zones`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-dns-zone -->

## Instructions

Before following the steps in this guide, we recommend that you get familiar with configuring a DNS zone by reading our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Your DNS zone is potentially already preconfigured or linked to a hosting plan. We will look at how to identify each DNS record required to connect to your SquareSpace hosting plan. Some records will need to be deleted to avoid conflicts with DNS records required in this configuration. Others will simply need to be modified or created. For a better understanding, we will use the domain name "**mydomain.ovh**" as an example. Replace it with your domain name during configuration.

### Configure your DNS records on your OVHcloud account

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
>> **Configuring the A records**
>>
>> **1 - Identification:** Filter the DNS records by selecting type `A` in the filter menu at the top right of the table.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Identify any existing "A" records for your domain name alone (e.g. `mydomain.ovh.`) and for the "www" subdomain (e.g. `www.mydomain.ovh.`).
>>
>> **2 - Deletion:** Delete all existing "A" records for the "www" subdomain. If more than 4 "A" records exist for the domain name alone, delete the excess records to keep only 4. For each record to delete, click the `...`{.action} button to the right of the corresponding row, then click `Delete record`{.action}.
>>
>> **3 - Modification:** Modify each remaining "A" record for the domain name alone by clicking the `...`{.action} button, then clicking `Modify record`{.action}. Replace the target with one of the 4 SquareSpace IPv4 addresses (a different address per record):
>>
>> - `198.185.159.144`
>> - `198.185.159.145`
>> - `198.49.23.144`
>> - `198.49.23.145`
>>
>> Click `Next`{.action} and confirm.
>>
>> **4 - Addition:** If fewer than 4 "A" records existed, create the missing records. Click `Add an entry`{.action} at the top right, select the `A`{.action} pointer record, leave the **Subdomain** field blank and enter in the **Target** field each IPv4 address not yet assigned. Click `Next`{.action} and confirm.
>>
>> Then proceed to step 3.
>>
> **Step 3**
>>
>> **Deleting AAAA records**
>>
>> **1 - Identification:** Filter the DNS records by selecting type `AAAA` in the filter menu at the top right of the table.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> Identify any existing "AAAA" records for your domain name alone (e.g. `mydomain.ovh.`) and for the "www" subdomain (e.g. `www.mydomain.ovh.`).
>>
>> **2 - Deletion:** Delete all "AAAA" records identified (domain name alone and "www" subdomain) to avoid conflicts with the new DNS records. For each record, click the `...`{.action} button to the right of the corresponding row, then click `Delete record`{.action}.
>>
>> If no "AAAA" records exist, proceed to step 4.
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
>> **Configuring the CNAME records**
>>
>> **1 - Identification:** Filter the DNS records by selecting type `CNAME` in the filter menu at the top right of the table.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Identify any existing "CNAME" records for the "www" subdomain (e.g. `www.mydomain.ovh.`).
>>
>> **2 - Deletion:** If multiple "CNAME" records exist for the "www" subdomain, delete all but one. For each record to delete, click the `...`{.action} button to the right of the corresponding row, then click `Delete record`{.action}.
>>
>> **3 - Modification:** If a "CNAME" record exists for the "www" subdomain, click the `...`{.action} button, then click `Modify record`{.action}. Replace only the **Target** with `ext-cust.squarespace.com.`. Click `Next`{.action} and confirm.
>>
>> If no "CNAME" record exists for the "www" subdomain, click `Add an entry`{.action} at the top right, select the `CNAME`{.action} pointer record, enter `www` in the **Subdomain** field and `ext-cust.squarespace.com.` in the **Target** field. Click `Next`{.action} and confirm.
>>
>> **4 - Addition:** Create a verification CNAME record by entering your `unique code retrieved from SquareSpace` in the **Subdomain** field, then `verify.squarespace.com.` in the **Target** field. Click `Next`{.action} and confirm.

The DNS zone is now configured to point to your SquareSpace hosting plan.

### Connect your domain name to SquareSpace

The following steps are to be carried out from the SquareSpace management interface.

> [!primary]
>
> - You can connect your domain name to a trial or paid SquareSpace website. You cannot connect it to an expired website.
> - If you have an email account associated with your domain name, you can continue using it once the domain is connected to SquareSpace. Before connecting your domain name, we recommend reading this [SquareSpace guide](https://support.squarespace.com/hc/en-us/articles/217601877-Using-a-custom-domain-email-you-already-own-with-Squarespace).
> - You can use multiple custom domain names for your website. You can connect or register as many as you want.
> - You cannot connect a custom domain name to SquareSpace if the domain name includes the word "squarespace" or "sqsp".

To get started, follow the connection steps described in step 1 of this [SquareSpace guide](https://support.squarespace.com/hc/en-us/articles/12880712406797-Connecting-an-OVHcloud-domain-to-your-Squarespace-site).

> [!warning]
>
> If you receive the alert message "This domain is already connected to another Squarespace site", check your other SquareSpace websites to determine which site the domain name is connected to. Then disconnect it from that website.

Continue with step 2 of this [SquareSpace guide](https://support.squarespace.com/hc/en-us/articles/12880712406797-Connecting-an-OVHcloud-domain-to-your-Squarespace-site).

If you are using an OVHcloud email solution, or planning to subscribe to one of [our email solutions](/links/web/emails), you will also need to prepare your DNS zone accordingly. Read our guide on [configuring an MX record](/pages/web_cloud/domains/dns_zone_mx).

## Go further <a name="go-further"></a>

[Modifying an OVHcloud domain name's DNS servers](/pages/web_cloud/domains/dns_server_edit)

[Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

To delegate the management of your domain name to another OVHcloud customer account, follow the guide on [Managing contacts for OVHcloud services](/pages/account_and_service_management/account_information/managing_contacts).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
