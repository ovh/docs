---
title: "Migrating your email addresses from one OVHcloud email platform to another"
excerpt: "Find out how to migrate email addresses from one Exchange or Email Pro platform to another Exchange, Email Pro, MX Plan or Zimbra platform"
updated: 2026-01-16
---

## Objective

You want to migrate your email addresses on an Exchange or Email Pro platform to another Exchange, Email Pro, MX Plan or Zimbra platform. In this guide, a two-phase migration process is described:

1. **Configure the destination platform**.
2. **Migrate email accounts** from your current platform to the new one.

![email-migration](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> To migrate an MX Plan solution to an Exchange or Email Pro platform, please follow our guide on [Migrating an MX Plan email address to an Email Pro or Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel) account.
>

**This guide explains how to migrate email addresses from one Exchange or Email Pro platform to another Exchange or Email Pro platform.**

## Requirements

- A **"source"** platform with configured [Exchange](/links/web/emails-hosted-exchange) or [Email Pro](/links/web/email-pro) accounts or [Zimbra](/links/web/zimbra).
- A "**destination**" platform with [Exchange](/links/web/emails-hosted-exchange), [Email Pro](/links/web/email-pro) or MX Plan accounts (via the MX Plan solution or included in [OVHcloud Web Hosting plans](/links/web/hosting)). This platform must have unconfigured accounts or be available to host the email accounts that need to be migrated.
- Access to the [OVHcloud Control Panel](/links/manager).

## Instructions

### Configuring the destination platform

> [!warning]
>
> Before starting your migration, if you have just ordered your new email offer, first add the domain name to your email platform. If you are migrating to an MX Plan platform, the attached domain name being "fixed", you can directly proceed to the [next step](#accountsmigration).
>
> Select the `Associated Domains`{.action} or `Domain`{.action} tab on your platform, then click on `Add a domain`{.action}. Once the domain name is added, make sure the `OK` or `Active`{.action} mention is present in the `Status` column.
>
> ![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> For more details on adding a domain name, follow [the Email Pro guide](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config), [the Exchange guide](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain) or [the Zimbra guide](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

### Migrate email accounts <a name="accountsmigration"></a>

Your email accounts will be migrated in 3 main steps: **Rename** the original email account, **create** the new email account and **migrate** from the original platform to the new one.

![email-migration](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Special cases:
>
> - If you need to migrate an **Exchange or Zimbra PRO** account to an **Email Pro** or **Zimbra STARTER** account, you must ensure that your email accounts do not exceed 10 GB (Email Pro) or 15 GB (Zimbra STARTER). Collaborative features, calendar and contact synchronization are not available on Email Pro or Zimbra STARTER and cannot be migrated.
> - If you need to migrate an **Exchange, Email Pro or Zimbra** account to an **MX Plan** account, you must ensure that your email account does not exceed 5 GB. Collaborative features, calendar and contact synchronization are not available on MX Plan and cannot be migrated.

#### Rename

Rename the email account to be migrated with a provisional name (example: to migrate the email account *john.smith@mydomain.ovh*, rename it to *john.smith01@mydomain.ovh*).

In the `Email accounts`{.action} tab for your email platform, click on the `...`{.action} button, then `Modify`{.action}.

![email-migration](images/migration_platform04.png){.thumbnail}

#### Create

Re-create your email address on the new account for your Email Pro, Exchange or MX Plan platform. (Using the previous example, you will create *john.smith@mydomain.ovh* on your new platform.)

In the `Email accounts`{.action} tab for your platform, click on the `...`{.action} button, to the right of the target email account, then `Modify`{.action}.

![email-migration](images/migration_platform05.png){.thumbnail}

#### Migrate

> [!warning]
>
> Only the data of your email accounts will be migrated (emails, contacts, calendars, inbox rules, etc.). The features linked to your platform will need to be recreated on the new platform:
>
> - [Alias](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)
> - [Delegated rights](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)
> - [Groups](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)
> - External contacts
> - [Footer](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers)

Migrate the source email account to your new platform account using our [OMM](/links/web/omm) tool (OVHcloud Mail Migrator).

For more information on OMM, please read our guide on [Migrating email accounts via the OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![email-migration](images/migration_platform06.png){.thumbnail}

The migration time depends on the amount of data to migrate to your new account. This may vary from a few minutes to several hours.

After the migration, verify that all of your elements are present by logging into webmail at [Webmail](/links/web/email).

Once the migration is complete, you can keep or delete the original account with the temporary name.

If you would like to delete it, go to the `Email accounts`{.action} tab on your original email platform, click on the `...`{.action} button, then `Reset this account`{.action}.

### Check or modify your domain configuration

At this stage, your email addresses should already be migrated and functional. For security reasons, please ensure that your domain is correctly configured in your Control Panel.

To do this, select the relevant Email Pro, Exchange or Zimbra service, then go to the `Associated Domains`{.action} or `Domain`{.action} tab on your platform. Check the `Diagnostics`{.action} section or column.

![exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

> [!primary]
>
> If you have just migrated or modified a DNS record for your domain, it may take a few hours to be updated when you go to the [OVHcloud Control Panel](/links/manager).

To modify the configuration, click on the red box and carry out the requested operation. It can take between 4 and a maximum of 24 hours for DNS changes to propagate fully.

![email-migration](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Use your migrated email addresses

Now, you can start using your migrated email addresses. To do this, OVHcloud offers a web client (_web app_), available here [Webmail](/links/web/email). You will need to enter your email credentials.

If you have configured one of the migrated accounts on a local email client (e.g. Outlook, Thunderbird), you will need to configure it again. The login details for the OVHcloud server have changed following the migration.

> [!primary]
>
> You can also manually migrate external email addresses to OVHcloud by using our [OVHcloud Mail Migrator](/links/web/omm) tool (OMM). To do this, you must have the login details (user, password, servers) of the source email and the destination email.

## Go further

[Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts)

[Getting started with the Email Pro offer](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Getting started with the Exchange offer](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Getting started with the Zimbra offer](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Join our [community of users](/links/community).