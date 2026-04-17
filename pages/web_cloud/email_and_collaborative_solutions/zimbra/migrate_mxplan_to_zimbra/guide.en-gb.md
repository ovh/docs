---
title: 'Migrate an MX Plan email address to an OVHcloud Zimbra account'
excerpt: 'Find out how to migrate an MX Plan email address to an OVHcloud Zimbra account'
updated: 2026-04-10
---

## Objective

If you want to upgrade your MX Plan email solution to an [OVHcloud Zimbra](/links/web/zimbra) solution, you can use the [**O**VH **M**ail **M**igrator](/links/web/omm) tool to perform your migration.

**Find out how to migrate an MX Plan email address to an OVHcloud Zimbra account.**

## Requirements

- You have an MX Plan email address (via the MX Plan solution, or included in an [OVHcloud web hosting](/links/web/hosting) plan).
- You have an OVHcloud Zimbra email account.
- **No redirection is set up on the MX Plan email address you want to migrate**.

<!-- CP-NAV-START:web-zimbra -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Zimbra](/links/control-panel/web-zimbra)
- **Navigation path:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## Instructions

> [!warning]
>
> If your email account manages sensitive information, or if you encounter any issues during the migration, we recommend waiting for the automation tool to be set up in the OVHcloud Control Panel.

Migrating an MX Plan email account to a Zimbra email account is done in 2 stages. To avoid interrupting email reception on the original address, you must follow the process below:

1. **[Transfer the contents of the MX Plan account to a Zimbra account](#step1)**
    - [1.1 - Creating a Zimbra email address](#step11)
    - [1.2 - Migrating emails with OVHcloud Mail Migrator](#step12)
    - [1.3 - Source account email backup (optional)](#step13)
2. **[Delete the original MX Plan account and reassign its address to the Zimbra account](#step2)**
    - [2.1 - Deletion of the old MX Plan email address](#step21)
    - [2.2 - Rename the Zimbra email address](#step22)

In the example below, we are migrating the address `contact@mydomain.ovh`. To do this, we will create the Zimbra account under the name `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1 - Transfer the contents of the MX Plan account to a Zimbra account <a name="step1"></a>

#### 1.1 - Creating a Zimbra email address <a name="step11"></a>

> [!primary]
>
> If you already have a Zimbra email address, go to [Migrating emails with OVHcloud Mail Migrator](#step12).

First, create an email address with a temporary name. For example, you can create the address `contact2@mydomain.ovh` if you need to migrate the address `contact@mydomain.ovh`.

To create a Zimbra email address, please read the "Create an email account" section of our guide [Getting started with the Zimbra solution](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

#### 1.2 - Migrating emails with OVHcloud Mail Migrator <a name="step12"></a>

Use the migration tool [**O**VH **M**ail **M**igrator](/links/web/omm) (**OMM**) to transfer the contents of the original MX Plan account to the new Zimbra destination account, using the example shown in the diagram above.

The migration with OMM is carried out in 3 steps: create a project, configure the migration, then track its progress. Click on each tab to display the corresponding instructions.

> [!tabs]
> **Step 1**
>>
>> **Create a migration project**
>>
>> Go to <https://omm.ovhcloud.com/> and click `New migration`{.action}.
>>
>> ![zimbra](images/omm-01.png){.thumbnail}
>>
>> - **Project contact email address**: Enter an email address that will receive the login credentials and tracking notifications. Do not use an address that will be migrated in this project.
>> - **Project password**: Set a password (minimum 10 characters, with at least 1 special character, 1 number, 1 uppercase and 1 lowercase letter).
>>
>> Click `Create my project`{.action}. You will receive a confirmation email containing the unique project identifier.
>>
> **Step 2**
>>
>> **Log in to the project and create the migration**
>>
>> From the [OMM](/links/web/omm) homepage, click `Track a migration`{.action}, enter the `Project identifier` and `Project password`, then click `Log in to the project`{.action}.
>>
>> Then click `New migration`{.action} to configure your migration:
>>
>> ![zimbra](images/omm-create-migration.png){.thumbnail}
>>
>> - **Source account**:
>>     - **Account type**: Select `OVHcloud`, then choose `MX Plan` or `Auto-detection`. Click `Log in`{.action} to authenticate with your OVHcloud account and automatically select the service and address to migrate (e.g. `john.smith@mydomain.ovh`). Then enter the password for this email account.
>> - **Destination account**:
>>     - **Account type**: Select `OVHcloud`, then choose `Zimbra`. Click `Log in`{.action} to authenticate with your OVHcloud account and select the Zimbra service and destination address (e.g. `zimbra2@mydomain.ovh`). Then enter the password for this email account.
>> - **Data to transfer**: Check the supported data types and uncheck any that you do not want to migrate.
>> - **Transfer start**: Choose `Immediately` or tick `Later` to schedule the migration at a defined date and time.
>>
>> Click `Migrate my account`{.action} to start the migration.
>>
>> ![zimbra](images/omm-zimbra-01.png){.thumbnail}
>>
> **Step 3**
>>
>> **Track the migration**
>>
>> Two methods allow you to track your migration project:
>>
>> - Via the email received when the project was created, using the link provided (the project identifier is pre-filled).
>> - From the [OMM](/links/web/omm) homepage: click `Track a migration`{.action}, enter your `Project identifier` and `Project password`, then click `Log in to the project`{.action}.
>>
>> From the project page, click the `⋮`{.action} button to the right of your migration line to display the options:
>>
>> - `View more details`{.action}: Track the progress of the migration and view the report once it is complete.
>> - `Cancel migration`{.action}: Cancels the ongoing migration. Items already migrated are kept in the destination account.
>> - `Delete my migration data (GDPR)`{.action}: Triggers the deletion of all migration-related data. Information on migration events is retained.
>>
>> ![zimbra](images/omm-migration-follow.png){.thumbnail}

For more details on using OMM, please read our guide "[Migrating email accounts via OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)".

> [!primary]
>
> The migration time varies depending on the volume of data, and can range from a few minutes to several hours. Once the migration is complete, check that all emails have been migrated.

#### 1.3 - Source account email backup (optional) <a name="step13"></a>

> [!warning]
>
> Before deleting your MX Plan account, **back up your emails** to avoid any data loss.

Use the export options of your email client. In our guide "[Migrating your email address manually](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)", you can find the details for manually exporting an email address from an email client.

### 2 - Delete the original MX Plan account and reassign its address to the Zimbra account <a name="step2"></a>

#### 2.1 - Deletion of the old MX Plan email address <a name="step21"></a>

To delete the MX Plan email address (e.g. `contact@mydomain.ovh`), follow our guide "[Delete an email account](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account)".

> [!warning]
>
> If you are migrating from an MX Plan account using Zimbra webmail, wait 5 minutes for the deletion to take effect before renaming the second email account.

#### 2.2 - Rename the Zimbra email address <a name="step22"></a>

In your OVHcloud Control Panel, access your Zimbra service and rename the temporary Zimbra email address to the migrated MX Plan address. Using the example from step 2 of chapter 1.2 above, the temporary address `zimbra2@mydomain.ovh` will be renamed to `john.smith@mydomain.ovh`, which is the address in use.

### Conclusion <a name="conclusion"></a>

Your email account is now migrated to Zimbra. To finalise the configuration, please read the guides below:

- [Getting started with the Zimbra solution](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)
- [Configuring your Zimbra email address on an email client](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

## Go further <a name="go-further"></a>

[OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

For specialised services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you would like assistance with using and configuring your OVHcloud solutions, we recommend referring to our range of [support solutions](/links/support).

Join our [community of users](/links/community).
