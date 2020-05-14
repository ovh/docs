---
title: 'Editing an OVHcloud DNS zone'
slug: web_hosting_how_to_edit_my_dns_zone
excerpt: 'Find out how to edit an OVHcloud DNS zone via the OVHcloud Control Panel'
section: 'DNS and DNS zone'
order: 3
---

**Last updated 19th March 2020**

## Objective

A Domain Name System (DNS) zone is a domain name’s config file. It is composed of technical information, otherwise known as "records". DNS zones are usually used to link your domain name to the server (or servers) that host your website and email addresses.

**This guide explanins the different types of records and how to properly edit a DNS zone in your OVHcloud Control Panel.**

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) with the necessary permissions to manage the domain
- the correct OVHcloud configuration (DNS servers) for the domain already set up

> [!warning]
>
> - If your domain name does not use the OVHcloud DNS servers, you will need to edit the configuration using the interface given by the service provider that manages your domain name.
> 
> - If your domain name is registered with OVHcloud, you can check if the domain name is using our configuration. To do this, go to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, select the domain concerned, and go to the `DNS servers`{.action} tab.
>

## Instructions

**We strongly recommend taking great care when you edit a DNS zone.** Incorrect changes could make your website inaccessible, or prevent your email address from receiving new emails.

By considering what DNS records actually do, you will gain a better understanding of the changes you make if you edit your domain name’s DNS zone. We advise reading the table below, which provides descriptions for each record.

|Record type|Description|  
|---|---|
|A|The A record is used to point a domain name to an IPv4 address. For example, the IP address of the server your website is hosted on.|
|AAAA|The AAAA record is used to point a domain name to an IPv6 address. For example, the IP address of the server your website is hosted on.|
|CNAME|The CNAME record is used for IP aliasing. It points a domain name to a different, canonical domain name. For example, if *www.mypersonaldomain.ovh* is an alias of *mypersonaldomain.ovh*, this would mean that *www.mypersonaldomain.ovh* would use the IP address(es) of *mypersonaldomain.ovh*.|
|MX|The MX record is used to point a domain name to an email server. For example, the IP address of the server your email solution is hosted on. Your service provider may have several email servers. If this is the case, you will need to create multiple MX records.|
|SRV|The SRV record is used to define information on the address of a server that manages a service. For example, this record can define the address of a SIP server, or the address of a server that enables an email client to be configured automatically using autodiscover.|
|TXT|The TXT record is used to add a chosen value (in text format) to your domain name’s DNS settings. This record is often used during the verification process.|
|SPF|The SPF record is used to avoid fraud via the email addresses using your domain name. For example, this record specifies that only your email solution service provider’s email server must be identified as a legitimate sending source. To find out more about this, you can refer to our guide on [Adding a SPF record to your domain name’s DNS configuration](../web_hosting_the_spf_record/).|
|CAA|The CAA record is used to list certificate authorities authorised to deliver SSL certificates for a domain name.|

> [!warning]
>
> A CNAME record cannot exist with another type of record with the same domain or subdomain. 
>

### Step 1: Accessing the area for managing your domain’s OVHcloud DNS zone

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and select `Web`{.action} in the top navigation bar. Click `Domains`{.action} in the services bar on the left-hand side, then choose the domain name concerned. Next, navigate to the `DNS zone`{.action} tab.

The table that opens will display your domain name’s configuration at OVHcloud. It is made up of several DNS records, one per row in the table. You can filter the table content by DNS record type or by domain name.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Step 2: Editing your domain name’s OVHcloud DNS zone

You can edit your domain name’s OVHcloud DNS zone by adding, modifying or deleting DNS records. There are two ways to do this:

- **Modifying the zone manually in text mode** Only for users with advanced technical knowledge. In the `DNS Zone`{.action} tab, click `Modify in text mode`{.action}, then follow the steps provided.

- **Using our configuration assistants**

From this point onwards, this guide will only cover DNS modifications using our configuration assistants.

> [!primary]
>
> Take note of the information you would like to modify in your DNS zone. If you are modifying your DNS zone because a service provider has asked you to do so, the service provider should have provided you with a list of records to edit.
>

- **Adding a new DNS record**

To add a new DNS record, click `Add record`{.action} on the right-hand side of the table. Select the DNS record type, then follow the steps.

Please ensure that the record doesn’t already exist, and that it doesn’t point to a different target. To check this, you can filter content by record type or domain. If the record already exists, modify it using the steps described below.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

- **Modifying an existing DNS record**

To modify a DNS record, click on `...`{.action} to the right of the record you would like to edit. Then click `Edit record`{.action}, and follow the assistant.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

- **Deleting a DNS record**

To modify a DNS record, click on `...`{.action} to the right of the record you would like to edit. Then click `Delete record`{.action}, and follow the assistant.

You can delete several records at once by ticking them on the left-hand side of the table, then clicking `Delete`{.action}.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### Step 3: Waiting for the changes to propagate

Once you have modified your domain name’s OVHcloud DNS zone, you will need to allow a maximum of 24 hours for the changes to propagate fully and be effective.

If you would like the propagation time to be shorter the next time you edit your OVHcloud DNS zone, you can shorten it slightly by adjusting the TTL (*Time To Live*) that applies to all of the DNS records.
To do this, go to the `DNS Zone`{.action} tab in the OVHcloud Control Panel, click `Default TTL`{.action}, and follow the steps that open. 

You can also modify an individual DNS record’s TTL. You can only do this for one record at a time, by editing them or setting it as you add records.

## Go further

[Editing the DNS servers for an OVHcloud domain name](../web_hosting_general_information_about_dns_servers/)

[Adding a SPF record to your domain name’s configuration](../web_hosting_the_spf_record/)

[Securing your domain name with DNSSEC](../secure_your_domain_with_dnssec/)

Join our community of users on <https://community.ovh.com/en/>.