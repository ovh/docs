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
- Be the Admin contact of the email service concerned
- Access details for the email accounts concerned

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-zimbra -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### OVHcloud Control Panel Access

**MX Plan:**

- **Direct link:** [MX Plan](/links/control-panel/web-mx-plan)
- **Navigation path:** `Web Cloud`{.action} > `MX Plan`{.action} > Select your MX Plan service

**Zimbra:**

- **Direct link:** [Zimbra](/links/control-panel/web-zimbra)
- **Navigation path:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

**Email Pro:**

- **Direct link:** [Email Pro](/links/control-panel/web-email-pro)
- **Navigation path:** `Web Cloud`{.action} > `Email Pro`{.action} > Select your platform

**Exchange:**

- **Direct link:** [Exchange](/links/control-panel/web-exchange)
- **Navigation path:** `Web Cloud`{.action} > `Exchange`{.action} > Select your platform

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-zimbra -->
<!-- CP-NAV-END:web-mx-plan -->

<a name="whichmxplan"></a>

<!-- CP-STEPS-START:whichmxplan-note -->
> [!primary]
>
> **Identifying the email technology of your MX Plan solution.**
>
> Depending on when your MX Plan solution was activated or on a recent migration, the associated email technology may differ. This technology is characterised by the interface of its webmail. To identify it:
>
> - From the `General information`{.action} tab, note the technology used under the **Webmail** heading in the `Subscription`{.action} box.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}
<!-- CP-STEPS-END:whichmxplan-note -->

## Instructions <a name="instructions"></a>

OVHcloud offers 4 email solutions, and the concept of account deletion differs depending on which email solution you choose.

- **MX Plan email**: This offer contains a certain number of email accounts as a bundle. When you delete an account, you free up an account "slot" of the email service.
- **Email Pro**, **Hosted Exchange** and **Zimbra**: These offers are on-demand. You order an individual subscription per email account. If you want to delete an email account, you will need to **reset** it. Once you have reset your email account, you can use this account again to create a new email address. You can also [cancel the subscription](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#deleting-accounts) for this account if you wish to permanently delete it.

### Delete or reset an email account

Select the tab corresponding to your email solution:

<!-- CP-STEPS-START:delete-or-reset -->
> [!tabs]
> **MX Plan Roundcube**
>>
>> To identify the email technology associated with your MX Plan service, please refer to the "[Identifying the email technology of your MX Plan solution](#whichmxplan)" section of this guide.
>>
>> 1. Go to the `Email accounts`{.action} tab. The window that appears will display the existing email accounts.
>> 1. Click the `...`{.action} button to the right of the account you want to modify, then click `Disable account`{.action}.
>>
>> ![email](images/email-mxplan-legacy-reset.png){.thumbnail}
>>
> **MX Plan Zimbra/OWA**
>>
>> To identify the email technology associated with your MX Plan service, please refer to the "[Identifying the email technology of your MX Plan solution](#whichmxplan)" section of this guide.
>>
>> 1. Go to the `Email accounts`{.action} tab. The window that appears will display the existing email accounts.
>> 1. Click the `...`{.action} button to the right of the account you want to modify, then click `Reset this account`{.action}.
>>
>> ![email](images/email-mxplan-new-reset.png){.thumbnail}
>>
> **Email Pro**
>>
>> 1. Go to the `Email accounts`{.action} tab. The window that appears will display the existing email accounts.
>> 1. Click the `...`{.action} button to the right of the account you want to modify, then click `Reset this account`{.action}.
>>
>> After resetting your account, if you want to permanently delete it, you must cancel it. To do this, please refer to our guide "[Managing the billing for your Email Pro accounts](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)".
>>
>> ![email](images/emailpro-reset.png){.thumbnail}
>>
> **Exchange**
>>
>> 1. Go to the `Email accounts`{.action} tab.
>> 1. Click the `...`{.action} button to the right of the account you want to modify, then click `Reset`{.action}.
>>
>> After resetting your account, if you want to permanently delete it, you must cancel it. To do this, please refer to our guide "[Managing the billing for your Exchange accounts](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)".
>>
>> ![email](images/exchange-reset.png){.thumbnail}
>>
> **Zimbra STARTER/PRO**
>>
>> 1. Go to the `Email account`{.action} tab. The window that appears will display the existing email accounts.
>> 1. Click the `⋮`{.action} button to the right of the account you want to modify, then click `Delete`{.action}.
>>
>> ![email](images/email-zimbra-reset.png){.thumbnail}
>>
<!-- CP-STEPS-END:delete-or-reset -->

## Go further

[Getting started with MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Getting started with Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Getting started with Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Getting started with Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Managing the billing of your Email Pro accounts](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)

[Managing the billing of your Exchange accounts](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
