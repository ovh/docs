---
title: "How to add a DNS TXT record for a domain name"
excerpt: "Find out how to add a TXT record to an OVHcloud DNS zone for your domain name"
updated: 2026-03-24
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

Do you need to validate a verification or security process for your domain name (service association via a validation token, verification key, etc.) using your DNS zone? Want to add a custom text value to your domain name’s DNS zone?  
To do this, you will need to create a TXT record in your domain name’s active DNS zone.

**Find out how to add a DNS TXT record to an OVHcloud DNS zone for your domain name.**

> [!primary]
>
> To modify or delete a TXT record of an OVHcloud DNS zone, follow [this guide](/pages/web_cloud/domains/dns_zone_edit).

## Requirements

- A [domain name](/links/web/domains)
- A DNS zone associated with this domain name at OVHcloud

<!-- CP-NAV-START:web-dns-zone -->
---

### OVHcloud Control Panel Access

- **Direct link:** [DNS zones](/links/control-panel/web-dns-zone)
- **Navigation path:** `Web Cloud`{.action} > `DNS zones`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-dns-zone -->

## Instructions

> [!warning]
>
> Adding, modifying or deleting DNS records in an active DNS zone can cause service interruptions. If in doubt, contact a [specialist provider](/links/partner).

<!-- CP-STEPS-START:add-txt-record-domain -->
### Add a DNS TXT record for a domain name

Click on the tabs below to view each of the **5** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Add an entry`{.action} button.
>>
> **Step 3**
>>
>> In the window that opens, select the `TXT`{.action} extended record type.
>>
> **Step 4**
>>
>> Enter the TXT string you want to add in the `Value *` field (e.g.: `AbCdE-Value-of-TXT-fGhIjK`), then click `Next`{.action}.
>>
> **Step 5**
>>
>> Check the summary, then click `Confirm`{.action}. It takes up to **24** hours for the change to propagate fully over the DNS network.

/// details | Click here for more information.

See our detailed guides:

- [Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)
- [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-domain -->

<!-- CP-STEPS-START:add-txt-record-subdomain -->
### Add a DNS TXT record for a domain name subdomain

Click on the tabs below to view each of the **5** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Add an entry`{.action} button.
>>
> **Step 3**
>>
>> In the window that opens, select the `TXT`{.action} extended record type.
>>
> **Step 4**
>>
>> Enter the subdomain in the `Sub-domain` field (e.g.: `www` for the subdomain `www.domain.tld`), and the TXT string you want to add in the `Value *` field (e.g.: `AbCdE-Value-of-TXT-fGhIjK`). Click `Next`{.action}.
>>
> **Step 5**
>>
>> Check the summary, then click `Confirm`{.action}. It takes up to **24** hours for the change to propagate fully over the DNS network.

/// details | Click here for more information.

See our detailed guides:

- [Everything you need to know about DNS zones](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)
- [How to create a subdomain](/pages/web_cloud/domains/domain_create_subdomains)
- [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-subdomain -->

## Go further

[Everything you need to know about DNS zones](/pages/web_cloud/domains/dns_zone_general_information).

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).
