---
title: 'Editing an OVHcloud DNS zone'
slug: web_hosting_how_to_edit_my_dns_zone
excerpt: 'Find out how to edit an OVHcloud DNS zone via the OVHcloud Control Panel'
section: 'DNS and DNS Zone'
order: 3
---

**Last updated 1st June 2022**

## Objective

### Understanding DNS <a name="understanddns"></a>

DNS stands for **D**omain **N**ame **S**ystem and is a set of elements used to map a domain name to an IP address.

For example, when you want to access the website *mydomain.ovh*, your request is initially processed by this DNS set, which will direct it to the IP address of the server hosting the website *mydomain.ovh*.

Given the changes you will need to make in the OVHcloud Control Panel, it is important to differentiate between **DNS servers** and the **DNS zone**. A **DNS zone** is effectively configured on the **DNS server** on which it is stored.

You can find information about **DNS servers** and how to change them in our guide on [Editing DNS servers for an OVHcloud](../web_hosting_general_information_about_dns_servers/) domain name.

![DNS](images/dnsserver.png){.thumbnail}

If we go back to the example above, when you type *mydomain.ovh*, the **DNS servers** associated with this domain name will be queried. These contain the **DNS zone** for the domain name *mydomain.ovh*, which contains the IP address of the hosting *mydomain.ovh*. This way, your browser can display the *mydomain.ovh* website’s content on the web hosting plan. This is called a DNS resolution.

![DNS](images/dnssolve.gif){.thumbnail}

### DNS zone

The DNS zone for a domain name is a configuration file made up of **records**. You can use these to link your domain name to the servers that host your internet services, such as websites (with the A record) and email addresses (with the MX record).

![DNS](images/dnszone.png){.thumbnail}

**Find out how to edit your OVHcloud DNS zone via the OVHcloud Control Panel.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requirements

- appropriate access to manage the domain name from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au).
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)
- OVHcloud DNS servers in use for the domain name concerned

> [!warning]
>
> - If your domain name does not use OVHcloud DNS servers, you will need to edit the configuration using the interface given by the service provider that manages your domain name.
> 
> - If your domain name is registered with OVHcloud, you can check if it is using our configuration. To do this, go to your [Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), and select the domain name in question’s `DNS servers`{.action} tab.
>

## Instructions

### Access the area for managing an OVHcloud DNS zone

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) in the `Web Cloud`{.action} section. Click `Domains`{.action}, then choose the domain name concerned. Go to the `DNS zone`{.action} tab.

The table that appears will display a DNS record linked to your OVHcloud domain name for each row. You can filter the table content by DNS record type or by domain name.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### DNS records

**We strongly recommend taking great care when you edit a DNS zone.** Incorrect changes could make your website inaccessible, or prevent your email address from receiving new emails.

By understanding what each of these records does, you will gain a better understanding of the changes you make if you edit your domain name’s DNS zone. Please refer to the list below. It lists the objectives and specificities of each registration.

#### Pointing records

**A**: Links a domain name to an IPv4 address. For example, the IPv4 address of the server your website is hosted on.

**AAAA**: Links a domain name to an IPv6 address. For example, the IPv6 address of the server your website is hosted on.

**CNAME**: Uses the IP address of another domain name by creating a link called an alias. For example, if *www.mydomain.ovh* is an alias of *mydomain.ovh*, this indicates that *www.mydomain.ovh* will use the IP address of *mydomain.ovh*.

> [!alert]
>
> A TXT record using the same domain or subdomain as a CNAME record will disrupt the CNAME record. Your CNAME record will only work partially or not at all.
>

**NS** fields: Define the DNS servers associated with your DNS zone. For example, if the NS records in your DNS zone display the servers *dns19.ovh.net* and *ns19.ovh.net*, you will need to use them in the `DNS servers`{.action}  tab in your Control Panel. Please refer to our guide on [Editing DNS servers for an OVHcloud domain name](../web_hosting_general_information_about_dns_servers/) for more information.

> [!warning]
>
> Do not modify the NS records in your DNS zone using the button `Change in text format`{.action}, in favour of DNS servers external to OVHcloud. This DNS zone works **only** with OVHcloud DNS servers.
>

#### Email records

**MX**: Links a domain name to an email server. For example, the address *10 mx1.mail.ovh.net* corresponds to one of the OVHcloud email servers when you have an OVHcloud email solution. Your email provider may have several email servers: Several MX fields must therefore be created. Please read our guide on [Adding an MX record to your domain name’s configuration](../web_hosting_configuring_mx_with_the_ovh_dns_zone/).

**SPF**: Avoids potential identity theft on email addresses using your domain name (spoofing). For example, the record *v=spf1 include:mx.ovh.com ~all* indicates that only the outgoing servers linked to your OVHcloud mail offer can be considered legitimate by the incoming server. You can enter this record as a TXT record, or via our automatic configuration system. For further information, please refer to our guide on [Adding an SPF record to your domain name’s configuration](../web_hosting_the_spf_record/).

**DKIM**: Checks the authenticity of the sender’s domain name, and ensures the integrity of the email sent. The DKIM record is a key that consists of several characters. The DKIM key is provided by your email service provider. You can enter it as a TXT record.

**DMARC**: Helps authenticate emails in association with SPF and/or DKIM methods. This value will be given to you by your email provider, and will at least be associated with an SPF or DKIM record.

#### Extended records

**TXT**: Allows you to add the value of your choice, in text format, in your domain name’s DNS zone. This record is often used during the verification process.

> [!warning]
> 
> The TXT record is limited to 255 characters. However, in some cases, you can split your value into several records. Ask your service provider if they request to enter a value that exceeds the 255-character quota.
> 

**SRV**: The SRV record is used to define information on the address of a server that manages a service. For example, it can indicate the address of a SIP server or the address of a server that allows the automatic configuration of an email software.

**CAA**: The CAA record is used to list certificate authorities authorised to deliver SSL certificates for a domain name.

**NAPTR**: Used in telecommunication to direct a request from a mobile device to a server. 

**LOC**: Used to populate location information.

**SSHFP**: Used to fill in the fingerprint of an SSH public key.

**TLSA**: Used to fill in the fingerprint of an SSL/TLS certificate.

### Edit your domain name’s OVHcloud DNS zone

You can edit your domain name’s OVHcloud DNS zone by adding, modifying or deleting a DNS record. There are two ways you can do this:

#### Manually edit the zone in text mode 

For informed users only. 

In the `DNS zone`{.action}  tab, click `Change in text format`{.action}, then follow the steps that appear.

#### Use our configuration assistants

From this point onwards, this guide will only cover configuration using our configuration assistants.

> [!primary]
>
> In order to modify your OVHcloud DNS zone successfully, make sure to gather all the required information first. If you are making this change at the request of a service provider, the service provider must provide you with a list of the items to change.
>

#### Add a new DNS record.

To add a new DNS record, in your domain name’s `DNS zone`{.action} tab, click the `Add an entry`{.action} button to the right of the table. Select the DNS record type, then follow the steps.

Please check in advance whether this record already exists and might point to a different target. To check this, you can filter the table contents by record type or domain. If the record exists, you can modify it using the steps described below.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

> When the target of your record is a URL, remember to punctuate it. If you do not do this, your domain name will be automatically added to the end of your target.
>
>Example: you want to create a CNAME record from *test.mydomain.ovh* to *mydomain.ovh*.
>
>You must then target *mydomain.ovh.* and not *mydomain.ovh* without **.** at the end.

#### Modify an existing DNS record. 

To modify a DNS record, click the `...`{.action} icon in the table in the row of the record you want to edit in the `DNS zone`{.action} tab. Then click `Modify record`{.action}, and follow the steps that open.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

#### Delete a DNS record.

To delete a DNS record, click the `...`{.action} icon in the table in the row of the record you want to edit in the `DNS zone`{.action} tab. Then click `Delete record`{.action}, and follow the steps that open.

You can delete several entries at once by ticking them on the left-hand side of the table, then clicking the `Delete`{.action} button.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

#### Reset the DNS zone

Resetting your DNS zone allows you to:

- Go back to a minimum configuration with the default OVHcloud records.
- Return to an empty DNS zone (with the exception of the NS entries), to define a subsequent manual configuration.

In the `DNS zone`{.action} tab, click on `Reset my DNS zone`{.action}, then follow the steps in the window that appears.

![dnszone](images/edit-dns-zone-ovh-reset.png){.thumbnail}

You can choose between these options:

- `Yes, I want to reset my DNS zone with the minimum records`. This allows you to direct your domain name and email service to:
    - One of your Web Cloud services available in your OVHcloud Control Panel.
    - The OVHcloud redirection service, accessible via your domain name’s `Redirection`{.action} tab in the `Domain names`{.action} and `Emails`{.action} sections.
    - The `Custom` function. Enter the `A` and/or `MX` records of your choice.
- `No, but I want to reset my DNS zone`. Your DNS zone will then be empty except for the NS records, which will be automatically attached to the OVHcloud DNS servers in your DNS zone.

> [!primary]
>
> Before resetting your DNS zone, please ensure that your domain name is not attached to services that are currently in use, such as a website or email addresses.
>
### Propagation time

Once you have modified your domain name’s DNS zone, you will need to allow a maximum of 24 hours for the changes to propagate fully, and be effective.

If you would like the propagation time to be shorter the next time you edit your OVHcloud DNS zone, you can shorten it slightly by adjusting the TTL (*Time To Live*) that applies to all of the DNS records.

To do this, go to the `DNS Zone`{.action} tab in the OVHcloud Control Panel, click `Modify default TTL`{.action}, and follow the steps. 

You can also modify the TTL of a DNS record. However, you can only do this on one record at a time, by editing it, or when adding it.

## Go further

[Editing the DNS servers for an OVHcloud domain name](../web_hosting_general_information_about_dns_servers/){.external}

[Adding a SPF record to your domain name’s configuration](../web_hosting_the_spf_record/){.external}

[Securing your domain name with DNSSEC](../secure_your_domain_with_dnssec/){.external}

Join our community of users on <https://community.ovh.com/en/>.
