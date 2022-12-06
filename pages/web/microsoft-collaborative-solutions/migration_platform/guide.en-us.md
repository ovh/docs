---
title: "Migrating your email addresses from one OVHcloud email platform to another"
slug: migration-email-platform
excerpt: "Find out how to migrate email addresses from one Exchange or Email Pro platform to another Exchange, Email Pro or MX Plan platform"
section: Account migration
order: 01
---

**Last updated 21st October 2021**

## Objective

You want to migrate your email addresses on an Exchange platform to another Exchange or MX Plan platform. In this guide, a two-phase migration process is described:

1. **Configure the destination platform**.
2. **Migrate email accounts** from your current platform to the new one.

![email-migration](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> To migrate an MX Plan solution to an Exchange platform, please follow our guide on [Migrating an MX Plan email address to an Exchange account](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/migration-email-address-to-exchange/) .
>

**This guide explains how to migrate email addresses from one Exchange platform to another Exchange platform or MXplan.**

## Requirements

- a "**source**" platform with configured [Exchange](https://www.ovhcloud.com/en/emails/hosted-exchange/){.external} accounts
- a "**destination**" platform with [Exchange](https://www.ovhcloud.com/en/emails/hosted-exchange/){.external} or MX Plan accounts (via the MX Plan solution or included in [OVHcloud Web Hosting plans](https://www.ovhcloud.com/en/web-hosting/){.external}). This platform must have unconfigured accounts or be available to host the email accounts that need to be migrated.
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)

## Instructions

### Configuring the destination platform

Before you begin your migration, if you have just ordered your new email solution, first add the domain name to your [Exchange](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/adding-domain-exchange/) platform. If you are migrating to an MX Plan platform, where the attached domain name is fixed, you can proceed directly to [the next step](#accountsmigration).

> Select the `Associated domains`{.action} tab for your platform, then click on the button `Add a domain`{.action}. Configure your domain name as **non-authoritative**. Once you have added your domain name, ensure that `OK` appears in the `Status` column.
>
> ![email-migration](images/migration_platform02.png){.thumbnail}
>
> For more details on adding a domain name, follow the [Exchange guide](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/adding-domain-exchange/).

### Migrate email accounts <a name="accountsmigration"></a>

Your email accounts will be migrated in 3 main steps: **Rename** the original email account, **create** the new email account and **migrate** from the original platform to the new one.

![email-migration](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Special cases:
>
> - If you need to migrate **an Exchange** account to an **MX Plan** account, you must ensure that your email account does not exceed 5 GB. Collaborative features, calendar and contact synchronisation are not present on MX Plan and cannot be migrated.

#### Step 1: Rename

Rename the email account to be migrated with a provisional name (example: to migrate the email account *john.smith@mydomain.ovh*, rename it to *john.smith01@mydomain.ovh*).

In the `Email accounts`{.action} tab for your email platform, click on the `...`{.action} button, then `Modify`{.action}.

![email-migration](images/migration_platform04.png){.thumbnail}

#### Step 2: Create

Re-create your email address on the new account for your Exchange or MX Plan platform. (Using the previous example, you will create *john.smith@mydomain.ovh* on your new platform.)

In the `Email accounts`{.action} tab for your platform, click on the `...`{.action} button, to the right of the target email account, then `Modify`{.action}.

![email-migration](images/migration_platform05.png){.thumbnail}

#### Step 3: Migrate

> [!warning]
>
> Only the data of your email accounts will be migrated (emails, contacts, calendars, inbox rules, etc.). The features linked to your platform will need to be recreated on the new platform:
>
> - [Alias](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/email-alias/)
> - [Delegated rights](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/exchange_2013_how_to_grant_full_access_permissions_for_an_account/)
> - [Groups](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/exchange_20132016_how_to_use_the_groups_feature_mailing_lists/)
> - External contacts
> - [Footer](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/exchange_20132016_how_to_create_an_automatic_signature/)

Migrate the source email account to your new platform account using our [OMM](https://omm.ovh.net/) tool (OVH Mail Migrator).

> If you need to migrate several email accounts, we recommend using the [Project](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/exchange-account-migration-with-ovh-mail-migrator/#project) mode via [OMM](https://omm.ovh.net/Project/Create). You can use this mode to import a CSV table containing the information for the email accounts you want to migrate.

For more information on OMM, please read our guide on [Migrating email accounts via the OVH Mail Migrator](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/exchange-account-migration-with-ovh-mail-migrator/).

![email-migration](images/migration_platform06.png){.thumbnail}

The migration time depends on the amount of data to migrate to your new account. This may vary from a few minutes to several hours.

After the migration, verify that all of your elements are present by logging into webmail at <https://www.ovhcloud.com/en/mail/>.

Once the migration is complete, you can keep or delete the original account with the temporary name.

If you would like to delete it, go to the `Email accounts`{.action} tab on your original email platform, click on the `...`{.action} button, then `Reset this account`{.action}.

### Check or modify your domain configuration

At this stage, your email addresses should already be migrated and functional. For security reasons, please ensure that your domain is correctly configured in your Control Panel.

To do this, select the Exchange service concerned, then go to the `Associated domains`{.action} tab. In the table shown, you can use the `Diagnostic` column to check if the DNS configuration is correct: a red box appears if the configuration needs to be modified.

> [!primary]
>
> If you have just migrated or modified a DNS record for your domain, it may take a few hours to be updated when you go to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).
>

To modify the configuration, click on the red box and carry out the requested operation. It can take between 4 and a maximum of 24 hours for DNS changes to propagate fully.

![email-migration](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Use your migrated email addresses

Now, you can start using your migrated email addresses. To do this, OVHcloud offers a web client (_web app_), available here <https://www.ovhcloud.com/en/mail/>. You will need to enter your email credentials.

If you have configured one of the migrated accounts on a local email client (e.g. Outlook, Thunderbird), you will need to configure it again. The login details for the OVHcloud server have changed following the migration.
<br>To help you with these modifications, please refer to the respective guide via the [Hosted Exchange](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/) guide sections. If you are unable to reconfigure the account immediately, you can always use the web application to access your emails.

> [!primary]
>
> You can also manually migrate external email addresses to OVHcloud by using our [OVH Mail Migrator](https://omm.ovh.net/){.external} tool (OMM). To do this, you must have the login details (user, password, servers) of the source email and the destination email.
>

## Go further

[Managing contacts for your services](https://docs.ovh.com/us/en/customer/managing-contacts/)

[Exchange guides](https://docs.ovh.com/us/en/microsoft-collaborative-solutions/)

Join our community of users on <https://community.ovh.com/en/>
