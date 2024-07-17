---
title: "Everything you need to know about DNS records"
excerpt: "Discover the different types of DNS records available in an OVHcloud DNS zone"
updated: 2024-07-17
---

## Objective

**DNS** means **D**omain **N**ame **S**ystem and is a set of elements (DNS servers, DNS zones, etc.) that map a domain name to an IP address.

First, we recommend reading our guides “[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)” and “[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)” in this order.

A domain name’s DNS zone is its configuration file. It consists of technical information, called *DNS records*. The DNS zone is a sort of referral center for a domain name.

The purpose of this guide is to introduce you to the different types of DNS records available in a DNS zone managed by OVHcloud. It is complementary to the following guides:

- [Create an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)
- [Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
- [Manage the history of an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_history)
- [Delete an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_deletion)

**Find out about the different types of DNS records available in an OVHcloud DNS zone.**

## Instructions

### DNS records

**[Editing a DNS zone](/pages/web_cloud/domains/dns_zone_edit) is a sensitive procedure**. Incorrect changes could make your website unavailable, for example, or prevent your email addresses from receiving new emails.

The list below includes the objectives and specifics of each registration. This will give you a better understanding of how you manage your DNS services.

#### Pointer records <a name="pointer-records"></a>

Select the record you want by clicking each of the following tabs.

> [!tabs]
> **A**
>> **A**ddress <br><br>
>> Links a domain name to a `X.X.X.X` IPv4 address (where `X` is a number between `0` and `255`). For example, the IPv4 address of the server your website is hosted on.
>>
> **AAAA** 
>> Four **A** characters because this record is encoded on four times more bits than the historical **A** field. <br><br>
>> Links a domain name to an IPv6 address. For example, the IPv6 address of the server your website is hosted on.
>>
>> > [!primary]
>> > IPv6 addresses are gradually being set up to compensate for the lack of IPv4 addresses due to the continuous expansion of digital usage. The 128-bit encoding of IPv6 addresses allows for a larger number of IP addresses.
>> >
>> > However, if your server already has an IPv4 address, we recommend using it over IPv6.<br>
>> > IPv6 addresses are not yet correctly interpreted across the Internet, which can cause disruptions to display or access.
>>
> **CNAME**
>> **C**anonical **NAME** <br><br>
>> Uses the IP address of another domain name by creating a link called an alias. For example, if *www.domain.tld* is an alias of *domain.tld*, this indicates that *www.domain.tld* will use the IP address of *domain.tld*.
>>
>> > [!alert]
>> >
>> > A TXT record using the same domain or subdomain as a CNAME record will disrupt the CNAME record. Your CNAME record will only work partially or not at all.
>>
>> > [!warning]
>> >
>> > By convention, CNAME records cannot be used directly by a domain in its own DNS zone. Indeed, the domain alone must obligatorily and directly point to an IP address with a type A field (or AAAA if it is an IPv6).
>> >
>> > To use the example given above, you cannot create a CNAME record for the domain *domain.tld* in the DNS zone you created for it.
>> > However, you can create CNAME records with all subdomains (examples: *subdomain.domain.tld* or *www.domain.tld*) of the domain *domain.tld* in the DNS zone created for *domain.tld*.
>> >
>> > If you would like to go further technically on this subject, you can find at the bottom of this page [a particular use case concerning CNAME records and DNS zones created for subdomains](#cnameusecase).
>>
> **DNAME**
>> **D**elegation **NAME** <br><br>
>> Allows to generate an "alias" for all subdomains of a domain. This record avoids creating a multitude of CNAME records. A CNAME record redirects only one subdomain to a single target, independently.
>>
>> Example: By creating a DNAME record from *domain.tld* to *ovh.com*, all subdomains of *domain.tld* (such as *dname.domain.tld* and *xxx.domain.tld*) will be redirected respectively to subdomains of *ovh.com* (such as *dname.ovh.com* and *xxx.ovh.com*).
>>
>> In other words, the DNAME record indicates that *dname.domain.tld* and *xxx.domain.tld* must display the results of *dname.ovh.com* and *xxx.ovh.com*, respectively.
>>
>> > [!warning]
>> >
>> > However, *domain.tld* as a domain will not display the target of the *ovh.com* domain, because the DNAME record is only valid for the subdomains of the domains defined in the DNAME record.
>> >
>> > Also, using one of the examples above, if the target subdomain *xxx.ovh.com* does not point to anything, then the DNAME record will not display anything for *xxx.domain.tld* either.
>>
>> > [!success]
>> > 
>> > The DNAME record is usually used for company name changes. It can also be set up when a user has several domain extensions (.fr, .net, .com, .info, etc.) to redirect them easily.
>> >
> **NS**
>> **N**ame **S**erver<br><br>
>> Define the DNS servers associated with your DNS zone. For example, if the NS records in your DNS zone display the servers *dnsXX.ovh.net* and *nsXX.ovh.net*, you will need to use them in the `DNS servers`{.action} tab in your OVHcloud Control Panel. Please refer to our guide on [Editing DNS servers for an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit) for more information.
>>
>> > [!warning]
>> >
>> > Do not modify the NS records in your DNS zone using the button `Change in text format`{.action}, in favour of DNS servers external to OVHcloud. This DNS zone works **only** with OVHcloud DNS servers.
>>

#### Email records <a name="mail-records"></a>

Select the record you want by clicking each of the following tabs.

> [!tabs]
> **MX**
>> **M**ail e**X**changer <br><br> 
>> Links a domain name to an email server. For example, the address *10 mx1.mail.ovh.net* corresponds to one of the OVHcloud email servers when you have an OVHcloud email solution. Your email provider may have several email servers. Several MX fields must therefore be created. Please read our guide on [Adding an MX record to your domain name’s configuration](/pages/web_cloud/domains/dns_zone_mx).
>>
>> > [!warning]
>> >
>> > In general, we recommend using servers from the same email provider in your DNS zone.
>> > If you already have email services from another email provider and you are adding your new email provider’s servers in parallel (without replacing them), you risk randomly receiving your emails from either of your two email providers.
>>
> **SPF**
>> **S**ender **P**olicy **F**ramework <br><br>
>> Avoids potential identity theft on email addresses using your domain name (spoofing). For example, the record `v=spf1 include:mx.ovh.com ~all` indicates that only outgoing servers linked to your OVHcloud mail service can be considered legitimate by the incoming server. You can enter this record as a TXT record, or via our automatic configuration system. 
>>
>> For further information, please refer to our guide on [Adding an SPF record to your domain name’s configuration](/pages/web_cloud/domains/dns_zone_spf).
>>
> **DKIM**
>> **D**omain**K**eys **I**dentified **M**ail <br><br>
>> Checks the authenticity of the sender’s domain name, and ensures the integrity of the email sent. The DKIM record is a key that consists of several characters. The DKIM key is provided by your email service provider (if this feature is offered by them). You can enter it as a TXT record.
>>
>> For further information, please refer to our guide on [Configure a DKIM record](/pages/web_cloud/domains/dns_zone_dkim).
>>
> **DMARC**
>> **D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance <br><br>
>> Helps authenticate emails in association with SPF and/or DKIM methods. This value will be given to you by your email provider (if this feature is offered by them), and will at least be associated with an SPF or DKIM record.
>>
>> Refer to our documentation “[Configuring a DMARC record on your domain name](/pages/web_cloud/domains/dns_zone_dmarc)” to find out more.

#### Extended records <a name="extended-records"></a>

Select the record you want by clicking each of the following tabs.

> [!tabs]
> **TXT**
>> **T**e**XT** <br><br>
>> Allows you to add the value of your choice, in text format, in your domain name’s DNS zone. This record is often used during verification/validation or security processes.
>>
>> > [!warning]
>> > 
>> > The TXT record is limited to 255 characters. However, in some cases, you can split your value into several records. Ask your service provider if they request to enter a value that exceeds the 255-character quota.
>> > 
>> > However, this limit does not exist if you use the `Modify in text mode`{.action} feature described in our guide "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)" (for expert users).
>>
> **SRV**
>> **S**e**RV**ice resource <br><br>
>> The SRV record is used to define information on the address of a server that manages a service. For example, it can indicate the address of a SIP server or the address of a server that allows the automatic configuration of an email software.
>>
> **CAA**
>> **C**ertification **A**uthority **A**uthorization <br><br>
>> The CAA record is used to list certificate authorities authorised to deliver SSL certificates for a domain name.
>>
>> > [!warning]
>> >
>> > If you configure a CAA record for a domain name, this configuration will also apply to **all subdomains** of the same domain name.
>> >
>> > If you use a Let's Encrypt SSL certificate with your domain on an OVHcloud Web Hosting plan, and you use a CAA record, the CAA record will prevent the Let's Encrypt SSL certificate from being regenerated.
>>
> **NAPTR**
>> **N**ame **A**uthority **P**oin**T**e**R** <br><br>
>> Used in telecommunication to direct a request from a mobile device to a server. An SRV record can be associated to dynamically generate target URIs (Uniform Resource Identifier).
>>
> **LOC**
>> **LOC**ation <br><br>
>> Used to populate location information (including latitude, longitude and altitude).
>>
> **SSHFP**
>> **S**ecure **SH**ell **F**inger**P**rint <br><br>
>> Used to fill in the fingerprint of an SSH public key.
>>
> **TLSA**
>> **T**ransport **L**ayer **S**ecurity **A**uthentification <br><br>
>> Used to fill in the fingerprint of an SSL/TLS certificate. You can use it to save the *hash* of a certificate directly in your domain name’s DNS zone via a DNS record.
>>
>> This record is used for the **D**NS-based **A**uthentication of **N**amed **E**ntities (DANE) protocol.
>>
>> The DANE protocol allows a client (internet browser, email client, FTP client, SSH client, etc.) to view the TLSA record. This way, they can ensure that an SSL/TLS certificate used for a domain name is the one certifying the same domain name.
>>
>> If you need further information, please visit the [**I**nternet **E**ngineering **T**ask **F**orce (**IETF**)](https://datatracker.ietf.org/doc/html/rfc6698){.external} website.
>>

#### Special use case: CNAME records <a name="cnameusecase"></a>

Some users create DNS zones directly for a domain’s subdomain (for example, *subdomain-with-its-own-DNS-zone.domain.tld*). The rule specified earlier in the "CNAME" tab of the “[pointer records](#pointer-records)” section will then also apply in this scenario.

Since the DNS zone is created for the subdomain (in our example *subdomain-with-its-own-DNS-zone.domain.tld*), the subdomain is then considered a fully qualified domain name in its DNS zone.

As a result, in this specific case, you will not be able to create a CNAME record for *subdomain-with-its-own-DNS-zone.domain.tld* in the DNS zone you have created for it. However, you can create CNAME records, such as *subdomain.subdomain-with-its-own-DNS-zone.domain.tld* or *xxx.subdomain-with-its-own-DNS-zone.domain.tld*.

## Go further

[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)

[Add an SPF record to your domain name’s configuration](/pages/web_cloud/domains/dns_zone_spf)

[Protect your domain against cache poisoning with DNSSEC](/links/web/domains-dnssec)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).