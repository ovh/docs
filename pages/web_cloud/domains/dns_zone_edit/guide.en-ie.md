---
title: 'Editing an OVHcloud DNS zone'
excerpt: 'Find out how to edit an OVHcloud DNS zone via the OVHcloud Control Panel'
updated: 2024-06-17
---

## Objective

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**DNS** means **D**omain **N**ame **S**ystem and is a set of elements (DNS servers, DNS zones, etc.) that map a domain name to an IP address.

For further explanation, please refer to our guides “[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)” and “[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)”

**This guide explains how to edit your OVHcloud DNS zone via the OVHcloud Control Panel.**

## Requirements

- Appropriate rights to manage the domain name from your [OVHcloud Control Panel](/links/manager)
- Access to the [OVHcloud Control Panel](/links/manager)
- OVHcloud DNS servers in use for the domain name concerned

> [!warning]
>
> - If your domain name does not use OVHcloud DNS servers, you will need to edit the configuration using the interface of your service provider that manages your domain name.
>
> - If your domain name is registered with OVHcloud, you can check if it uses our configuration. To do this, go to your [OVHcloud Control Panel](/links/manager), in the `DNS servers`{.action} tab for the domain name concerned. If you need further guidance, please refer to our guide on [Modifying the DNS servers for an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit).
>
> In both of the above cases, be careful when making your DNS server changes. The old configuration that can be applied to your domain name will no longer be active if you have not previously reconfigured and customised the new DNS zone present at OVHcloud.<br>
> You can only have one active DNS zone per domain name at a time.
>

## Instructions

### Access the area for managing an OVHcloud DNS zone

> [!primary]
>
> Unlike domain names, a DNS zone has no "owner", but is managed at OVHcloud through the contact management. If you wish to assign the management of your DNS zone to another OVHcloud customer account, follow our guide [Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts).

To manage an OVHcloud DNS zone, perform the following actions:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. On the line at the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Domain names`{.action} dropdown menu.
4. Select the domain name or DNS zone concerned.
5. On the page that appears, click on the `DNS Zone`{.action} tab.

The table displays a DNS record linked to your OVHcloud domain name for each row. You can filter the table content by DNS record type or by domain name.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}

### Edit your domain name’s OVHcloud DNS zone

**Editing a DNS zone is a sensitive procedure**: An inappropriate change could, for example, make your website unavailable, or prevent your email addresses from receiving new emails.

By learning more about these records, you can get a better understanding of the changes you will make if you edit your domain name’s DNS zone.

> [!success]
>
> Read our guide on [DNS records](/pages/web_cloud/domains/dns_zone_records) to get a better understanding of your DNS changes.
>
> See also our guide to [subdomains](/pages/web_cloud/domains/domain_create_subdomains) for more information on this topic.
>

You can edit your domain name’s OVHcloud DNS zone by adding, modifying, or deleting a DNS record.<br>
To do this, you can either manually edit the zone in text mode, or use our configuration assistants.

#### Manually edit the zone in text mode <a name="txtmod"></a>

> [!warning]
>
> For informed users only. Be careful with syntax when you make changes.
>

To edit an OVHcloud DNS zone in text mode, perform the following actions:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. On the line at the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Domain names`{.action} dropdown menu.
4. Select the domain name or DNS zone concerned.
5. On the page that appears, click on the `DNS Zone`{.action} tab.
6. On the right or below the table, click `Change in text format`{.action} and follow the steps that appear.

> [!warning]
>
> Do not modify the DNS records of your DNS zone in favour of DNS servers external to OVHcloud via the `Change in text format`{.action}. This DNS zone works **only** with OVHcloud DNS servers.

#### Use our configuration assistants

From this point onwards, this guide will only cover configuration using our configuration assistants.

> [!primary]
>
> In order to modify your OVHcloud DNS zone successfully, make sure to gather all the required information first. If you are making this change at the request of a service provider, the service provider must provide you with a list of the items to change.
>

> [!tabs]
> **Add a new DNS record**
>>
>> To add a new DNS record, perform the following steps:
>>
>> 1. Log in to your [OVHcloud Control Panel](/links/manager).
>> 2. In the line at the top of the Control Panel, click on the `Web Cloud`{.action} tab.
>> 3. In the left-hand column, click on the `Domain names`{.action} dropdown menu.
>> 4. Select the domain name or DNS zone concerned.
>> 5. On the page that opens, click on the `DNS Zone`{.action} tab.
>> 6. On the right or below the table, click `Add an entry`{.action}, then follow the steps that appear.
>>
>> We recommend that you check beforehand if this record exists and already points to a different target. To do this, filter the contents of the table by record type or domain. If the record exists, modify it using the steps described below.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
>> > When the target of your record is a URL, remember to punctuate it. If you do not do this, your domain name will be automatically added to the end of your target.
>> >
>> > **Example**: You want to create a CNAME record from `test.mydomain.ovh` to `mydomain.ovh`.
>> >
>> > You must then have as target `mydomain.ovh.` and not `mydomain.ovh` without the **.** at the end.
>>
> **Modify an existing DNS record**
>>
>> To modify a DNS record, perform the following steps:
>>
>> 1. Log in to your [OVHcloud Control Panel](/links/manager).
>> 2. In the line at the top of the Control Panel, click on the `Web Cloud`{.action} tab.
>> 3. In the left-hand column, click on the `Domain names`{.action} dropdown menu.
>> 4. Select the domain name or DNS zone concerned.
>> 5. On the page that opens, click on the `DNS Zone`{.action} tab.
>> 6. In the table that appears, click on the symbol `...`{.action} to the right of the entry concerned.
>> 7. Then click `Modify record`{.action} and follow the steps that appear.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-record.png){.thumbnail}
>>
> **Delete a DNS record**
>>
>> To delete a DNS record, perform the following steps:
>>
>> 1. Log in to your [OVHcloud Control Panel](/links/manager).
>> 2. In the line at the top of the Control Panel, click on the `Web Cloud`{.action} tab.
>> 3. In the left-hand column, click on the `Domain names`{.action} dropdown menu.
>> 4. Select the domain name or DNS zone concerned.
>> 5. On the page that opens, click on the `DNS Zone`{.action} tab.
>> 6. In the table that appears, click on the symbol `...`{.action} to the right of the entry concerned.
>> 7. Then click `Delete record`{.action} and follow the steps that appear.
>>
>> You can delete several entries at once by ticking them on the left-hand side of the table, then clicking on the `Delete`{.action} button.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/delete-record.png){.thumbnail}
>>
> **Reset the DNS zone**
>>
>> By resetting your DNS zone, you can revert back to a minimal configuration, with OVHcloud default records, or your services’ records. You can also point your domain name to custom web hosting and email services.
>>
>> > [!alert]
>> >
>> > Before you reset your DNS zone, ensure that your domain name is not attached to services that are in use, such as a website or email addresses.
>> >
>>
>> To reset your DNS zone, perform the following actions:
>>
>> 1. Log in to your [OVHcloud Control Panel](/links/manager).
>> 2. In the line at the top of the Control Panel, click on the `Web Cloud`{.action} tab.
>> 3. In the left-hand column, click on the `Domain names`{.action} dropdown menu.
>> 4. Select the domain name or DNS zone concerned.
>> 5. On the page that opens, click on the `DNS Zone`{.action} tab.
>> 6. On the right or below the table, click `Reset my DNS zone`{.action}, then follow the 2 steps that appear.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
>> **Step 1**
>>
>> Answer the question `Do you want to enable the minimum records when you reset your DNS zone?`. Defining minimal records in a DNS zone prevents error responses when the domain name is queried.
>>
>> - `Yes, I want to reset my DNS zone with the minimum records`
>> - `No, but I want to reset my DNS zone`
>>
>> **Step 2**
>>
>> Whichever option you choose in step 1, you will need to set values for queries to your domain name to prevent an incorrect DNS response.
>>
>> Click on the tabs below to view the details of the available options.
>>
>> **Web hosting plan IP address**
>>
>> - `Redirection`: Your domain name will point to the OVHcloud redirection server, which can be used to display an OVHcloud homepage, and thus avoid a DNS error.<br>
>> - `OVHcloud web hosting`: Your domain name will point to the IP address of the Web Hosting plan associated with the domain name.<br>
>> - `Custom`: Enter the IPv4 address ([A record](/pages/web_cloud/domains/dns_zone_records#pointer-records)) of the Web Hosting plan you want to point to. <br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-01.png){.thumbnail}
>>
>> **Mail server address**
>>
>> - `Redirection`: Your domain name will point to the email redirection servers. This is particularly useful if you do not have any email solutions, but would like to send emails to one or more email addresses outside of your domain name.<br>
>> - `OVHcloud email server`: To be defined if you have a shared email solution.<br>
>> - `Custom`: Enter the URL and priority of the email server ([MX record](/pages/web_cloud/domains/dns_zone_records#mail-records)) you want to point to.<br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-02.png){.thumbnail}
>>

### Propagation time

Once you have modified your domain name’s DNS zone, you will need to allow a maximum of 24 hours for the changes to propagate fully, and be effective.

If you would like to reduce this delay for the next edits of your OVHcloud DNS zone, you can do so to a certain extent by adjusting the TTL (*Time To Live*), which will apply to all of the records in the DNS zone. Perform the following actions:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. On the line at the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Domain names`{.action} dropdown menu.
4. Select the domain name or DNS zone concerned.
5. On the page that appears, click on the `DNS Zone`{.action} tab.
6. On the right or below the table, click the `Modify default TTL`{.action} button and follow the steps that appear.

You can also modify the TTL of a DNS record. However, you can only do this on one record at a time, by editing it, or when adding it.

## Go further

[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

[Adding a SPF record to your domain name’s configuration](/pages/web_cloud/domains/dns_zone_spf)

[Securing your domain name with DNSSEC](/pages/web_cloud/domains/dns_dnssec)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).