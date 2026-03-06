---
title: 'Transferring a .uk domain name to OVHcloud'
excerpt: 'Find out how to transfer a .uk or related domain name to OVHcloud'
updated: 2026-02-10
---

## Objective

Transferring a .uk (or similar) domain name requires a specific approach.

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on if you face difficulties or doubts. You can find more information in the [Go further](#go-further) section of this guide.
>

**This guide explains how to transfer a .uk (or similar) domain name to OVHcloud.**

> [!warning]
>
> If the domain name being modified is currently registered with OVHcloud, incoming domain transfer is not the appropriate procedure. This procedure only applies to the change of the domain name registry (OVHcloud).
>
> To transfer the domain name management to another OVHcloud customer account, a *change of contacts* must be made instead. The procedure is described in [this guide](/pages/account_and_service_management/account_information/managing_contacts).
>
> If you also need to change the **domain name holder**, you should do so **before** you change the domain name contacts. To do this, refer to the following guide: [Domain name - How do I change the holder?](/pages/web_cloud/domains/trade_domain).
>
> If, in addition to transferring your domain name, you would like to migrate the services associated with it (website, email, etc.), please read our guide on [Migrating your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh), before continuing.
> This guide explains in detail how to migrate all your services without any service interruptions.
>
> If you only transfer your domain name without moving your other services, please ensure that you retrieve the active DNS servers for your domain name from your current **registrar**, to enter them directly in step 3 of our guide on [Transferring your domain name to OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain).
> This will prevent the separation of your domain name from your associated external services.
>

## Requirements

- Your domain name must not be in the **Redemption** period or in Pending Delete status.
- The domain name must not be blocked by your registrar.
- Holder contact information must be up to date in the [Whois](https://www.nominet.uk/whois) data of the domain name.
- You are able to obtain the authorisation code that will be sent to the domain name holder's email address.


> [!primary]
>
> The **Redemption** period is a maximum of 90 days from the day the domain name expires. In the case of a transfer, this period allows you to restore the domain name and thus unblock the ability to transfer it.

## Extensions in question

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

## Instructions

### Step 1: Changing your domain name TAG

In order to transfer your domain name to OVHcloud, you must first specify the OVHcloud TAG at your current registrar: "OVH-FR". The list of TAGs for the different registrars is available on the official [Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/) registry website.

> [!primary]
>
> If you cannot change your domain name's TAG through your current registrar, you can apply to the Nominet registry to make the change for you. Nominet will charge a fee for this service.
> Please refer to [Nominet's website](https://www.nominet.uk/domain-support/) for more information. 
>

### Step 2: Obtaining the authorisation code

After you change the TAG, the domain name holder will receive an authorisation code (authcode) by email after a few minutes. This is valid for 5 days and required to initiate the (free) domain name transfer order at OVHcloud.

### Step 3: Ordering the free transfer

Once you have your authorisation code, you can create the transfer order for your domain name on the [OVHcloud website](/links/website). This order is similar to the one of a generic domain name.

Your domain name will then be available in your [OVHcloud Control Panel](/links/manager) within a few hours.

### Additional information

#### Cost of a .uk domain name transfer (or similar)

The transfer is free.

#### Authorisation code validity

The authorisation code is generated automatically as a result of the modification of the TAG. If the order is not made within 5 days, the transfer will be cancelled by the registrar.

#### Domain name renewal due to transfer

The transfer being free, the domain name's expiry date after changing registrars will be the same as before. To renew a domain name after the transfer, you can create a renewal order on the [OVHcloud website](https://www.ovh.co.uk/cgi-bin/order/renew.cgi).

## Go further <a name="#go-further"></a>

[Transferring a domain name to OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

Join our [community of users](/links/community).
