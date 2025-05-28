---
title: "How to add a DNS A record for a domain name"
excerpt: "Find out how to add an A record to an OVHcloud DNS zone for your domain name"
updated: 2025-05-12
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

Want your website to be accessible via your domain name? To do this, your domain name must point to the IP address of the service your website is located on (web hosting plan, dedicated server, VPS, etc.). You will then need to configure your domain name’s active DNS zone using a type A DNS record.

**Find out how to add an DNS A record to an OVHcloud DNS zone for your domain name.**

> [!primary]
>
> To modify or delete an A record of an OVHcloud DNS zone, follow [this guide](/pages/web_cloud/domains/dns_zone_edit).

## Requirements

- A [domain name](/links/web/domains)
- A DNS zone associated with this domain name at OVHcloud
- Access to the [OVHcloud Control Panel](/links/manager), in the `Web Cloud`{.action} section

## Instructions

> [!warning]
>
> Adding, modifying or deleting DNS records in an active DNS zone can cause service interruptions. If in doubt, contact a [specialist provider](/links/partner).

### Add an DNS A record for a domain name

1. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
2. On the page that appears, click `Add an entry`{.action}.
3. In the window that opens, select the field of type `A`{.action}.
4. Then enter the IP address (e.g.: `203.0.113.0`) of the service your website is hosted on (web hosting plan, dedicated server, VPS, etc.) in the `Target *` field, and click `Next`{.action}.
5. Check the summary, then click `Confirm`{.action}. It takes up to **24** hours for the change to propagate fully over the DNS network.

/// details | Click here for more information.

See our detailed guides:

- [Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)
- [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
- [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Web Hosting - How to modify a domain name already associated to a web hosting plan](/pages/web_cloud/web_hosting/multisites_modify_domain)

///

### Add an DNS A record for a domain name subdomain

1. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
2. On the page that appears, click `Add an entry`{.action}.
3. In the window that opens, select the field of type `A`{.action}.
4. Then enter the subdomain in the `Sub-domain` field (e.g.: `www` for the subdomain `www.domain.tld`), and the IP address in the `Target *` field (e.g.: `203.0.113.0`) of the service your website is located on (web hosting, dedicated server, VPS, etc.). Finally, click `Next`{.action}.
5. Check the summary, then click `Confirm`{.action}. It takes up to **24** hours for the change to propagate fully over the DNS network.

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