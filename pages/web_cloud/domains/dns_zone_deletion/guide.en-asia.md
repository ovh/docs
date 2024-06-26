---
title: "How to delete an OVHcloud DNS zone?"
excerpt: "Find out how to delete a DNS zone for your domain name via the OVHcloud Control Panel"
updated: 2024-06-26
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
>

**This guide explains how to delete an OVHcloud DNS zone for your domain name via the OVHcloud Control Panel.**

## Requirements

- You have access your [OVHcloud Control Panel](/links/manager).
- You have a DNS zone in your OVHcloud Control Panel.
- You have sufficient rights on the DNS zone to be deleted. You can find more information in our guide “[Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts)”.

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
>

### Step 1 - Initiate the deletion of an OVHcloud DNS zone

To start deleting an OVHcloud DNS zone, perform the following actions: 

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Domain names`{.action} dropdown menu.
4. Select the domain name or DNS zone concerned.
5. On the page that appears, click on the `DNS Zone`{.action} tab to access the table listing all the DNS records for the DNS zone.
6. On the right-hand side (or below the table depending on your screen resolution), click the `Delete the DNS zone`{.action} button.

![delete the DNS zone](images/delete-the-dns-zone.png){.thumbnail}

In the window that pops up, read the messages shown inside.

![delete the DNS zone validation](images/delete-the-dns-zone-confirmation.png){.thumbnail}

Click the `Confirm`{.action} button to complete the first step of deleting the DNS zone.

### Step 2 - Confirm deletion of an OVHcloud DNS zone

Following the previous step, an email to confirm the deletion of the DNS zone is sent to the email address of the [Administrator contact](/pages/account_and_service_management/account_information/managing_contacts) from the OVHcloud DNS zone.

> [!success]
>
> If you did not receive the email, check your spam folder.
>

This email contains two links valid for **72** hours from the time you have completed step 1 of this guide.

Click the **validation link** to continue deleting the OVHcloud DNS zone, or click the **cancellation link** to stop deleting the OVHcloud DNS zone.

> [!primary]
>
> If the link redirection does not work, **copy/paste** the link into the URL bar of your web browser. Reconnect to your [OVHcloud Control Panel](/links/manager) if necessary.
>

If you click on the validation link, you will be redirected to a new OVHcloud page, which will ask you for the reason(s) for deleting the OVHcloud DNS zone.

![cancel the service](images/cancel-my-service.png){.thumbnail}

Once you have filled in the form, and are absolutely sure that you want to permanently delete the OVHcloud DNS zone, click `Confirm`{.action} at the bottom of the page.

A final confirmation email will be sent to the email address of the [Administrator contact](/pages/account_and_service_management/account_information/managing_contacts) in the OVHcloud DNS zone, in order to confirm the deletion.

## Go further

[Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[Modifying the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)

[Creating an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).