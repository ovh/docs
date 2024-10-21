---
title: "Transferring a Hostinger domain name to OVHcloud"
excerpt: "Find out how to transfer a Hostinger domain name to OVHcloud"
updated: 2024-06-28
---

## Objective

To transfer a Hostinger domain name, you will need to follow a specific procedure.

**This guide explains how to transfer a Hostinger domain name to OVHcloud.**

> [!warning]
>
> The domain name [registrar](/links/web/domains-what-is-registrar) is a service provider authorised to offer domain names for registration by an individual, association or organisation. You renew your domain name subscription with the same registrar (usually once a year).
>
> If OVHcloud is already the registrar of your domain name, the incoming domain transfer procedure does not apply. The incoming domain transfer procedure described in this guide is **only** appropriate for domain names registered with a registrar other than OVHcloud.
>
> To transfer the domain name management to another OVHcloud customer account, a **change of contacts** must be made instead. The procedure is described in [our contact management guide](/pages/account_and_service_management/account_information/managing_contacts).
>
> If you also need to change the **domain name holder**, you should do so **before** you change the domain name contacts. To do this, use our [change of ownership for domain names instructions](/pages/web_cloud/domains/trade_domain).
>

## Requirements

- A domain name registered with another registrar.
- The domain name is more than 60 days old.
- The domain name has not been transferred or changed owners within the last 60 days.
- The domain name status is "OK" or "Transferable".
- The domain name is not expired and has an expiry date that allows to finish the transfer process in time - recommended are more than 60 days.
- You can unlock the domain name and you have the transfer code or are able to retrieve it.
- You have the authority to request a transfer for the domain name.
- The domain name owner and/or its administrators must be informed of the transfer request.


> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or your current domain name registrar if you encounter any difficulties. OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#go-further) section of this guide.
> 

## Instructions

> [!primary]
>
> The active DNS zone for a domain name contains the DNS configuration applied to your domain name. It links your domain name to your services, such as your email addresses and your website.
>
> If, in addition to your domain name, you also have an active DNS zone for it at your current registrar, check that the DNS zone applied to your domain name will not be deleted once the transfer is complete.
>
> Some registrars delete the DNS zone as soon as your domain name transfer is complete. If this is the case, recreate your DNS zone identically at OVHcloud before starting the domain name transfer.
>
> To do this, refer to the following guides:
>
> - [Create a DNS zone at OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
>
> Also check that your current domain name registrar will not close other services, such as the email addresses associated with your domain name.
>
> If, in addition to transferring your domain name, you would like to migrate the services associated with it (website, email, etc.), please read our guide on [Migrating your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh), before continuing.
> This guide explains in detail how to migrate all your services without any service interruptions.
>
> If you only transfer your domain name without moving your other services, please ensure that you retrieve the active DNS servers for your domain name from your current **registrar**, to enter them directly in step 3 of our guide on [Transferring your domain name to OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)
> This will prevent the separation of your domain name from your associated external services.
>

### Unlock the domain name

> [!primary]
>
> For security, all domain names at Hostinger are **locked by default** to prevent unauthorized transfers.
>
> Therefore, before transferring your domain name from Hostinger, you must first **unlock it**.
> 

For domain names registered with Hostinger, you can manage the locked status of your domain name by opening the `Domains`{.action} section and selecting the domain name to transfer.

Follow the steps described in the [Hostinger dedicated documentation](https://support.hostinger.com/en/articles/4791444-how-to-lock-or-unlock-a-domain-at-hostinger){.external}.

### Get the EPP or Auth code

If you would like to **transfer** your domain name from Hostinger to another registrar (such as OVHcloud), the new registrar can request an authorization code (“EPP” or “Auth”) to verify that you have the right to act on the domain name.
To familiarize yourself with changing the owner of a domain name, please read this [guide](pages/web_cloud/domains/trade_domain).

> [!warning]
>
> Some TLDs have a special transfer process. This is especially true for **.uk** and **.eu**.
>
> We invite you to check with Hostinger the appropriate steps to transfer your domain name.
> 

To get a **EPP** or **Auth** code from Hostinger, follow the steps described in the [Hostinger dedicated documentation](https://support.hostinger.com/en/articles/1583203-how-to-get-the-epp-code-at-hostinger){.external}.

### Initiate domain transfer to OVHcloud

Once you have obtained the authorization code, you can proceed with the transfer of your domain name by following the steps in our guide “[Transferring a domain name to OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)”.

## Go further <a name="go-further"></a>

[Transferring a domain name to OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Migrating your website and emails to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).