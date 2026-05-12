---
title: "How to add a DNS AAAA record for a domain name"
excerpt: "Find out how to add an AAAA record to an OVHcloud DNS zone for your domain name"
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

Want your website to be accessible via your domain name? To do this, your domain name must point to the IP address of the service your website is located on (web hosting plan, dedicated server, VPS, etc.). You will then need to configure your domain name’s active DNS zone using a type AAAA DNS record.

**Find out how to add a DNS AAAA record to an OVHcloud DNS zone for your domain name.**

> [!primary]
>
> To modify or delete an AAAA record of an OVHcloud DNS zone, follow [this guide](/pages/web_cloud/domains/dns_zone_edit).

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

### Add a DNS AAAA record for a domain name

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
>> In the window that opens, select the `AAAA`{.action} record type.
>>
> **Step 4**
>>
>> Enter the IP address (e.g.: `2001:db8:1:1b00:203:0:113:0`) of the service your website is hosted on (web hosting plan, dedicated server, VPS, etc.) in the `Target *` field, then click `Next`{.action}.
>>
> **Step 5**
>>
>> Check the summary, then click `Confirm`{.action}. It takes up to **24** hours for the change to propagate fully over the DNS network.

/// details | Click here for more information.

See our detailed guides:

- [Everything you need to know about DNS zones](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)
- [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
- [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Web Hosting - How to modify a domain name already associated to a web hosting plan](/pages/web_cloud/web_hosting/multisites_modify_domain)

///

### Add a DNS AAAA record for a domain name subdomain

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
>> In the window that opens, select the `AAAA`{.action} record type.
>>
> **Step 4**
>>
>> Enter the subdomain in the `Sub-domain` field (e.g.: `www` for the subdomain `www.domain.tld`), and the IP address (e.g.: `2001:db8:1:1b00:203:0:113:0`) of the service your website is hosted on (web hosting plan, dedicated server, VPS, etc.) in the `Target *` field. Click `Next`{.action}.
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
- [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Web Hosting - How to modify a domain name already associated to a web hosting plan](/pages/web_cloud/web_hosting/multisites_modify_domain)

///

## Go further

[Everything you need to know about DNS zones](/pages/web_cloud/domains/dns_zone_general_information).

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).
