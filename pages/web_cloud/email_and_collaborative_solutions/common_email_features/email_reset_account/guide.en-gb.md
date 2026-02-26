---
title: Deleting an email account
excerpt: Find out how to delete or reset an email account of your email solution
updated: 2026-02-19
---

## Objective

You want to:

- Delete an email account you no longer use.
- Reset an email account to use it with a new email address.
- Reset an email account in order to cancel it.

**This guide explains how to delete or reset an email account of your email solution.**

## Requirements

- A preconfigured OVHcloud email solution:
    - **MX Plan**, available with a [web hosting plan](/links/web/hosting), included in a [100M free hosting](/links/web/domains-free-hosting), or ordered separately.
    - [**Exchange**](/links/web/emails-exchange).
    - [**Email Pro**](/links/web/email-pro).
    - [**Zimbra**](/links/web/zimbra).
- Access to the [OVHcloud Control Panel](/links/manager) as the Admin contact of the email service concerned (section `Web Cloud`{.action})
- Access details for the email accounts concerned

<a name="whichmxplan"></a>

> [!primary]
>
> **Identifying the email technology of your MX Plan solution.**
>
> Depending on when your MX Plan solution was activated or on a recent migration, the associated email technology may differ. This technology is characterised by the interface of its webmail. To identify it:
>
> - From the `General information`{.action} tab, note the technology used under the **Webmail** heading in the `Subscription`{.action} box.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

## Instructions <a name="instructions"></a>

OVHcloud offers 4 email solutions, and the concept of account deletion differs depending on which email solution you choose.

- **MX Plan email**: This offer contains a certain number of email accounts as a bundle. When you delete an account, you free up an account "slot" of the email service.
- **Email Pro**, **Hosted Exchange** and **Zimbra**: These offers are on-demand. You order an individual subscription per email account. If you want to delete an email account, you will need to **reset** it. Once you have reset your email account, you can use this account again to create a new email address. You can also [cancel the subscription](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#deleting-accounts) for this account if you wish to permanently delete it.

### Delete or reset an email account

Select the tab corresponding to your email solution:

> [!tabs]
> **MX Plan Roundcube**
>>
>> To identify the email technology associated with your MX Plan service, please refer to the "[Identifying the email technology of your MX Plan solution](#whichmxplan)" section of this guide.
>>
>> 1. Log in to your [OVHcloud Control Panel](/links/manager).
>> 1. Open the `Web Cloud`{.action} section.
>> 1. Click `MX Plan`{.action}.
>> 1. Select the domain concerned.
>> 1. Go to the `Email accounts`{.action} tab. The window that appears will display the existing email accounts.
>> 1. Click the `...`{.action} button to the right of the account you want to modify, then click `Disable account`{.action}.
>>
>> ![email](images/email-mxplan-legacy-reset.png){.thumbnail}
>>
> **MX Plan Zimbra/OWA**
>>
>> To identify the email technology associated with your MX Plan service, please refer to the "[Identifying the email technology of your MX Plan solution](#whichmxplan)" section of this guide.
>>
>> 1. Log in to your [OVHcloud Control Panel](/links/manager).
>> 1. Open the `Web Cloud`{.action} section.
>> 1. Click `MX Plan`{.action}.
>> 1. Select the domain concerned.
>> 1. Go to the `Email accounts`{.action} tab. The window that appears will display the existing email accounts.
>> 1. Click the `...`{.action} button to the right of the account you want to modify, then click `Reset this account`{.action}.
>>
>> ![email](images/email-mxplan-new-reset.png){.thumbnail}
>>
> **Email Pro**
>>
>> 1. Log in to your [OVHcloud Control Panel](/links/manager).
>> 1. Open the `Web Cloud`{.action} section.
>> 1. Click `Email Pro`{.action}.
>> 1. Select the service concerned.
>> 1. Go to the `Email accounts`{.action} tab. The window that appears will display the existing email accounts.
>> 1. Click the `...`{.action} button to the right of the account you want to modify, then click `Reset this account`{.action}.
>>
>> After resetting your account, if you want to permanently delete it, you must cancel it. To do this, please refer to our guide "[Managing the billing for your Email Pro accounts](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)".
>>
>> ![email](images/emailpro-reset.png){.thumbnail}
>>
> **Exchange**
>>
>> 1. Log in to your [OVHcloud Control Panel](/links/manager).
>> 1. Open the `Web Cloud`{.action} section.
>> 1. In the `MICROSOFT` section, click `Exchange`{.action}.
>> 1. Select the service concerned.
>> 1. Go to the `Email accounts`{.action} tab.
>> 1. Click the `...`{.action} button to the right of the account you want to modify, then click `Reset`{.action}.
>>
>> After resetting your account, if you want to permanently delete it, you must cancel it. To do this, please refer to our guide "[Managing the billing for your Exchange accounts](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)".
>>
>> ![email](images/exchange-reset.png){.thumbnail}
>>
> **Zimbra STARTER/PRO**
>>
>> 1. Log in to your [OVHcloud Control Panel](/links/manager).
>> 1. Open the `Web Cloud`{.action} section.
>> 1. Click `Zimbra Mail`{.action}.
>> 1. Go to the `Email account`{.action} tab. The window that appears will display the existing email accounts.
>> 1. Click the `⋮`{.action} button to the right of the account you want to modify, then click `Delete`{.action}.
>>
>> ![email](images/email-zimbra-reset.png){.thumbnail}
>>

## Go further

[Getting started with MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Getting started with Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Getting started with Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Getting started with Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Managing the billing of your Email Pro accounts](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)

[Managing the billing of your Exchange accounts](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
