---
title: Migrating email accounts using OVH Mail Migrator
excerpt: Find out how to migrate your email accounts to OVHcloud using our OVH Mail Migrator tool
updated: 2025-11-25
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Objective

[OVH Mail Migrator](/links/web/omm) is a tool created by OVHcloud to meet the need for reversibility. It allows you to migrate your email accounts to your OVHcloud email addresses or an external email service. The process supports different types of content, such as emails, contacts, calendars, and tasks, provided they are compatible with your email accounts.

**Learn how to migrate your email accounts to OVHcloud using our OVH Mail Migrator tool.**

## Requirements

- An external email service or one from OVHcloud, such as a [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [E-mail Pro](/links/web/email-pro) offer, or MX Plan (via the MX Plan offer alone or included in a [OVHcloud web hosting offer](/links/web/hosting)).
- Login details for the email accounts you want to migrate (the source accounts)
- Login details for the destination email accounts

## Instructions

To access OMM, go to the address <omm.ovhcloud.com>

![omm](images/omm-01.png){.thumbnail .w-600}

### Create a migration project <a name="create-project"></a>

Before starting a migration, it is necessary to create a project. This project will allow you to launch one or more migrations and follow them.

Click on `New migration`{.action} to begin creating your project:

**Project contact email**: Enter an email address that will be used to receive the credentials and notifications for tracking your migrations. It is not recommended to enter one of the email addresses that will be migrated in your project.
**Project password**: Enter a password to use to connect to your project. It must contain at least 10 characters, including at least 1 special character, 1 digit, 1 uppercase letter, and 1 lowercase letter.

Click on `Create my project`{.action} to start creating the project.

You will receive a confirmation email at the project's contact email address containing the unique project ID and a link to access it.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> The migration project and the data associated with it will be automatically deleted after 60 days of inactivity.

### Create a migration <a name="create-migration"></a>

Once your project is created, log in to it from the [OMM](/links/web/omm) homepage:

- Click on `Track a migration`{.action}.
- Enter the `Project ID` received by email.
- Enter the `Project password` you set when creating it.
- Click on `Connect to project`{.action} to complete the process.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

You are now on the project homepage, which will allow you to launch your first migration.

- Click on `New migration`{.action} in the top left of the table.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

A new page appears where you will define the connection information for the source account and the destination account to schedule or launch this migration directly. To recall, the content of the **source account** will be migrated to the **destination account**.

Before starting your migration, it is important to know the 3 types of accounts that can be migrated and where you can migrate them to:

- **OVHcloud**: `Auto detection` is recommended if you need to migrate an account hosted on any OVHcloud email offer. If you have a large number of OVHcloud email accounts, select from the offers `MX plan`, `E-mail Pro`, `Exchange`, and `Zimbra`. You will be asked to log in to the OVHcloud account associated with the offer related to the migration. For more information, see the section "[Migrating via a connection to an OVHcloud customer account](#sso-migration)".
- **Others**: They refer to email services outside of OVHcloud. You will find a non-exhaustive list of email services supported by OMM. If the type of service of your email account is not listed, use the `IMAP` or `POP` protocols, which are compatible with most email servers.
- **Importing files**: It is possible to migrate the content of PST, ICS, CSV, and XML rules files via OMM to a destination email account. When this function is selected, simply drag and drop your document into the designated area or browse your files using the `Browse your files`{.action} button.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Complete the information according to the type of account:

- **Source account**
    - **Account type**: Select the type of source account.
    - **Email**: Enter the source account's email address.
    - **Password**: Enter the password for the source account.
    - **Server URL** / **Server domain** *(depending on the type)*: Enter the hostname of the email server associated with the email account you want to migrate.
    - **OVHcloud Account ID** *(depending on the type)*: this field is automatically filled in when you are logged in to an OVHcloud account. For more information, see the section "[Migrating via a connection to an OVHcloud customer account](#sso-migration)".
    - **Organization** *(depending on the type)*: Select the organization associated with the source email account.
    - **Platform** *(depending on the type)*: Select the platform associated with the source email account.
    - **Service** *(depending on the type)*: Select the service associated with the source email account.
    - **Advanced settings** > **Delegation account ID** *(depending on the type)*: When the email account you are migrating is a shared account, you must enter the email address of the administrator account on this delegation account.
- **Destination account**
    - **Account type**: Select the type of destination account.
    - **Email**: Enter the destination email address.
    - **Password**: Enter the password associated with the destination account.
    - **Server URL** / **Server domain** *(depending on the type)*: Enter the hostname of the email server associated with the destination email account.
    - **OVHcloud Account ID** *(depending on the type)*: this field is automatically filled in when you are logged in to an OVHcloud account. For more information, see the section "[Migrating via a connection to an OVHcloud customer account](#sso-migration)".
    - **Organization** *(depending on the type)*: Select the organization associated with the destination email account.
    - **Platform** *(depending on the type)*: Select the platform associated with the destination email account.
    - **Service** *(depending on the type)*: Select the service associated with the destination email account.
    - **Advanced settings** > **Delegation account ID** *(depending on the type)*: When the destination email account is a shared account, you must enter the email address of the administrator account on this delegation account.
- **Start of transfer**: You can launch the migration `immediately` or check `Later` to defer the migration. The deferred migration allows you to launch it automatically at a date and time you define.
- **Data to transfer**: Depending on the type of email account you are migrating and the destination account, this section will indicate the different types of data supported during the migration. This depends on the source account and the destination account.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> If you are migrating an account that has features the destination account does not have, you will need to save the items that cannot be migrated by OMM. To help you, refer to our guide "[Manually Migrating Your Email Address](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

Once the source and destination account settings are completed, click on:

- `Migrate and add another account`{.action} if you want to add another migration to your project's list.
- `Migrate my account`{.action} to launch the configured migration and return to the project homepage.

### Migrate via a connection to an OVHcloud customer account <a name="sso-migration"></a>

When migrating to or from an OVHcloud account, you can select one of our offers: `MX plan`, `E-mail Pro`, `Exchange`, and `Zimbra`.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

When you select one of these offers, follow the steps below:

> [!tabs]
> **Step 1**
>>
>> - Click on `Login`{.action} to display the login window to the OVHcloud Control Panel.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Step 2**
>>
>> Log in to the OVHcloud customer account:
>>
>> - Enter the identifier or email address associated with the OVHcloud account, enter the associated password, and click on `Login`{.action}.
>> - Click on `Continue`{.action} if you were already identified.
>>
>> > [!primary]
>> >
>> > The OVHcloud customer account must be associated with the email offer that is the subject of the migration.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Step 3**
>>
>> - A new window appears, which allows you to authorize OMM to access the functions of your Control Panel listing the offers and email accounts present. By default, the validity of these rights is 24 hours. Set the time frame that suits you, then click on `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Step 4**
>>
>> - You will now be able to select your services and accounts using drop-down menus, which facilitates the search for items and avoids typing errors. It is, however, necessary to enter the password associated with the selected email account.
>>
>> Example with a Zimbra service:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> You can disconnect ongoing OVHcloud Control Panel logins by clicking on `Log out`{.action}, then under `OVHcloud account ID`, click on `Log out the account`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Track a migration project <a name="follow-migration"></a>

There are two ways to access the migration project tracking:

- From the email received when creating your project. You will find a link that allows you to access the project login page with the `Project ID` pre-filled, only the `Project password` needs to be entered.
- From the OMM homepage, click on `Track a migration`{.action}. Enter your `Project ID` and your `Project password`.

Click on `Connect to project`{.action} to access the project homepage and track your migrations.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

From this page, you will find the list of ongoing or scheduled migrations. The project status also appears on the right.

Click on the `⋮`{.action} button on the right of a migration line to display the options:

- `See more details`{.action}: You are redirected to a page allowing you to track the progress of a migration or read the report once it is completed.
- `Cancel migration`{.action}: Allows you to cancel the ongoing migration. The items already migrated will be kept on the destination account.
- `Delete migration data (GDPR)`{.action}: This option triggers the deletion of all data related to the migration account. You still keep the information concerning the events that occurred during the migration.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Example of migration tracking:

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
>
> If an error occurs during the migration, a link to the error log is provided in the `See more details`{.action} window.

## Go further

[Migrate your email address manually](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[Migrate an MX Plan email address to an E-mail Pro or Exchange account](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you need assistance with the use and configuration of your OVHcloud solutions, we offer you to consult our various [support offers](/links/support).

Join our [community of users](/links/community).