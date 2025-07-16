---
title: "How to add a CNAME record for a subdomain"
excerpt: "Find out how to add a CNAME DNS record to an OVHcloud DNS zone for a domain name subdomain"
updated: 2025-06-25
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

A CNAME record is used to associate a subdomain with a domain or subdomain, without having to specify an IP address. This means that the subdomain will be redirected to the target domain or subdomain’s IP address, without requiring any additional configuration.

For example, if you create a CNAME record for *www.domain.tld* that points to *domain.tld*, then *www.domain.tld* will use the same IP address as *domain.tld*.

CNAME records are useful for avoiding changing IP addresses for your subdomains. They can also be used to configure services such as email servers.

**Find out how to add a CNAME record to your OVHcloud DNS zone.**

> **Do you already have a CNAME record in your DNS zone?** Follow our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

## Requirements

- A [domain name](/links/web/domains)
- A DNS zone associated with this domain name at OVHcloud
- Access to the [OVHcloud Control Panel](/links/manager), in the `Web Cloud`{.action} section

> [!warning]
>
> **Adding, modifying or deleting DNS records in an active DNS zone is a tricky task.**
> If in doubt, contact a [specialist provider](/links/partner).

## Instructions

### Add a DNS record of type CNAME for a domain name subdomain

1. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
2. On the page that appears, click `Add an entry`{.action}.
3. In the window that opens, select the field of type `CNAME`{.action}.
4. Then enter in the `Sub-domain` field the subdomain concerned (for example: `www` for the subdomain `www.domain.tld`), and in the `Target *` field, the domain name or subdomain (for example: `domain.tld`) that you want to target using the CNAME record type. Finally, click `Next`{.action}.
5. Check the summary, then click `Confirm`{.action}. It takes up to **24** hours for the change to propagate fully over the DNS network.

/// details | See our detailed guides:

- [Everything you need to know about DNS zones](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)
- [How to create a subdomain](/pages/web_cloud/domains/domain_create_subdomains)
- [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
- [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Web Hosting - How to modify a domain name already associated to a web hosting plan](/pages/web_cloud/web_hosting/multisites_modify_domain)

///


### Special cases

Click on the links below for more information:

/// details | CNAME and TXT records for the same subdomain

Do not configure both a CNAME record and a TXT record for the same subdomain. This can cause random results during DNS resolution, as only one response can be returned per DNS query.

For example, if you have the following records for *www.domain.tld*:

- A CNAME record pointing to *domain.tld*
- A TXT record with a specific value

A DNS query for *www.domain.tld* will return either the target of the CNAME record or the value of the TXT record, at random.

///

/// details | CNAME on a domain in its own DNS zone

By convention, **CNAME records cannot be used on a domain name in its own DNS zone**. The domain name must point directly to an IP address with a record of type [A](/pages/web_cloud/domains/dns_zone_a_record_creation) for an IPv4, or [AAAA](/pages/web_cloud/domains/dns_zone_aaaa_record_creation) for an IPv6.

As an example, you will not be able to create a CNAME record for the domain name *domain.tld* in the DNS zone you have created for it.  
However, you can create CNAME records for all subdomains (e.g. *subdomain.domain.tld* or *www.domain.tld*) of the *domain.tld* domain in the DNS zone created for *domain.tld*.

///

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).