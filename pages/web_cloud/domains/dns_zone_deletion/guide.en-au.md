---
title: "How to delete an OVHcloud DNS zone?"
excerpt: "Find out how to delete a DNS zone for your domain name via the OVHcloud Control Panel"
updated: 2025-10-14
---

## Objective

The **DNS** (**D**omain **N**ame **S**ystem) zone is a domain name’s configuration file. It consists of DNS **records** that map the domain name to various services and functions.

For more information on DNS zones and servers, see the following guides: 

- [Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)
- [Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

For example, you may need to delete a DNS zone for your domain name at OVHcloud in the following cases (non-exhaustive list):

- You are using an active DNS zone for your domain name with a provider other than OVHcloud.
- You no longer use the domain name associated with the DNS zone at OVHcloud.
- You have migrated your services to another provider and you want to cancel your OVHcloud services.

> [!primary]
>
> The creation/modification/deletion of a DNS zone in your [OVHcloud Control Panel](/links/manager) is free of charge.

**This guide explains how to delete an OVHcloud DNS zone for your domain name via the OVHcloud Control Panel.**

## Requirements

- You have access your [OVHcloud Control Panel](/links/manager).
- You have a DNS zone in your OVHcloud Control Panel.
- You have sufficient rights on the DNS zone to be deleted. You can find more information in our guide “[Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts)”.

> [!primary]
>
> Deleting a DNS zone will not delete the domain name associated with it. You will not lose your domain name by deleting a DNS zone associated with it.

## Instructions

> [!warning]
>
> Before you proceed, check that the DNS zone you want to delete is no longer used by your domain name.
>
> If you delete the active DNS zone for your domain name, your online services (website, email addresses, etc.) will be interrupted.
>
> Perform a [WHOIS](/links/web/domains-whois) query to find out whether your domain name’s active DNS zone is the one hosted at OVHcloud.
>
> If the active DNS zone for your domain name is the one at OVHcloud, and you would like to replace it with a DNS zone hosted elsewhere, please read our guide on [Modifying the DNS servers for an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit) before deleting any DNS zones.

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), click on your name in the top right corner, and then click on `My offers and services`{.action}.
>>
>> ![My offers and services](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}
>>
> **Step 2**
>>
>> In the table on the displayed page, click on the `...`{.action} button to the right of the DNS zone you want to cancel, then click on `Cancel my subscription`{.action}.
>>
>> ![Cancel](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-cancel-my-subscription.png){.thumbnail}
>>
> **Step 3**
>>
>> On the new page that appears, specify the reason for your cancellation request and your project, then click on `Confirm`{.action}.
>>
>> ![Cancel the service](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-delete-your-service.png){.thumbnail}
>>
> **Step 4**
>>
>> The cancellation of your service will take place on the **Date of effect** indicated in the "My offers and services" table. If you do not see the "Cancellation scheduled" status appear, refresh the page.
>>
>> > [!primary]
>> >
>> > If you want to immediately delete a DNS zone from your [OVHcloud Control Panel](/links/manager), complete the 4 steps to request cancellation on the date of effect, then contact OVHcloud support by creating a support ticket from the [help center](https://help.ovhcloud.com/csm?id=csm_get_help).  
>> > In the ticket, specify the concerned DNS zone and clearly state your wish to delete it immediately without waiting for the date of effect.

## Go further

[Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[Modifying the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)

[Creating an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).