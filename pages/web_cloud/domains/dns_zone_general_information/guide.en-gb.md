---
title: "Everything you need to know about DNS zone"
excerpt: "Find out what a DNS zone does and what records it contains for a domain name"
updated: 2024-06-17
---

## Objective

**DNS** means **D**omain **N**ame **S**ystem and is a set of elements (DNS servers, DNS zones, etc.) that map a domain name to an IP address.

It is essential to differentiate between **DNS servers** and the **DNS zone**. A **DNS zone** is configured on the **DNS server**.

For a better understanding, we recommend reading our guide on [Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information).

For example, when you want to access the *domain.tld* website via a web browser, your request is initially processed by this DNS set. This DNS set will then provide your web browser with the IP address of the server hosting the *domain.tld* website.

When you type *domain.tld*, the **DNS servers** associated with this domain name will be queried. These records contain the **DNS zone** of the *domain.tld* domain name, which contains the IP address of the *domain.tld* hosting plan. Your browser will then be able to display the *domain.tld* website contained on the web hosting plan. This is called a DNS resolution.

**This guide explains what a DNS zone does, what it contains, and how it works with a domain name.**

## Instructions

### Role of a DNS zone

A domain name’s DNS zone contains a configuration that can be applied to it. It consists of technical information, called *DNS records*. The DNS zone is a sort of referral center for a domain name.

For example, you can specify:

- The IP address (DNS records of type *A* and *AAAA*) of your web hosting plan to display your website with your domain name.
- The email servers (DNS records of type *MX*) to which your domain name must redirect the emails it receives.
- Information related to the security/authentication of your services (web hosting, web server, email server, etc.) associated with your domain name (SPF, DKIM, DMARC DNS records, etc.).

A DNS zone is hosted on **DNS servers**. The **DNS servers** must be registered (with a domain name registrar) in order to use the DNS zone they host.

For more information, see our webpage explaining [how a DNS server works](/links/web/domains-dns-server).

### DNS records

Various DNS record types exist. They all have a specific purpose in DNS resolution. At OVHcloud, they are divided into three parts:

- Pointer records (A, AAAA, CNAME, DNAME, NS)
- Email records (MX, SPF, DKIM, DMARC)
- Extended records (TXT, SRV, CAA, NAPTR, LOC, SSHFP, TLSA)

Refer to our guide on [DNS records](/pages/web_cloud/domains/dns_zone_records) for more information on the different types of records mentioned above. You will find elements that will allow you to better understand [editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

### DNS zone example

To better represent what a DNS zone is, below is an example of a DNS zone hosted at OVHcloud for the domain name *domain.tld*. This is configured on the *dns200.anycast.me* and *ns200.anycast.me* OVHcloud DNS servers:

![DNS zone dashboard](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-dashboard.png){.thumbnail}

In comparison, here is its equivalent in text mode:

```bash
$TTL 3600
@	IN SOA dns200.anycast.me. tech.ovh.net. (2024051800 86400 3600 3600000 60)
                 IN NS     ns200.anycast.me.
                 IN NS     dns200.anycast.me.
                 IN MX     1 mx1.mail.ovh.net.
                 IN MX     5 mx2.mail.ovh.net.
                 IN MX     10 mx3.mail.ovh.net.
                 IN A      203.0.113.0
www              IN A      203.0.113.0
```

In this example, the DNS zone specifies, among other things, the following information for DNS queries that reach it:

- The DNS servers declared for the domain name *domain.tld* are the DNS servers *dns200.anycast.me* and *ns200.anycast.me*.
- The server must return the IP address 203.0.113.0 if a DNS request is made to the domain name *domain.tld* or the subdomain *www.domain.tld*. For example, you can find the website *domain.tld* behind the IP address 203.0.113.0.
- For emails, the DNS zone indicates that DNS queries made for *@domain.tld* email addresses must be sent to the *mx1.mail.ovh.net* server as a priority. If it takes too long to respond or is unavailable, the request will then be sent to the *mx2.mail.ovh.net* server, and so on until the last server that was declared *mx3.mail.ovh.net*.
- The SOA (**S**tart **O**f **A**uthority) of the OVHcloud DNS zone indicates that the last update date of the DNS zone is 18/05/2024 and that the refresh time of the DNS zone is 3600 seconds. In DNS zones hosted elsewhere than at OVHcloud, the SOAs may contain other elements such as the email address of the DNS zone administrator. For security reasons, OVHcloud has chosen not to display this information in the SOA.

## Go further

[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

[Create an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)

[Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[Manage the history of an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_history)

[Delete an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_deletion)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).
