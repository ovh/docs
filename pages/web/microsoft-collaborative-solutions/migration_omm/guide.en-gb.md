---
title: Migrating email accounts using OVH Mail Migrator
slug: exchange-account-migration-with-ovh-mail-migrator
excerpt: Find out how to migrate your email accounts to OVHcloud using our OVH Mail Migrator tool
section: Account migration
order: 02
---

**Last updated 14th February 2022**

## Objective

[OVH Mail Migrator](https://omm.ovh.net/){.external} is a tool created by OVHcloud. You can use it to migrate your email accounts to your OVHcloud email accounts, or to an external email service. The process covers different types of content, such as emails, contacts, calendars and tasks, provided that they are compatible with your email accounts.

**Find out how to migrate your email accounts to OVHcloud using our OVH Mail Migrator tool.**


## Requirements

- An email service with OVHcloud: [Exchange](https://www.ovhcloud.com/en-gb/emails/){.external}, [Email Pro](https://www.ovhcloud.com/en-gb/emails/email-pro/){.external} or MX Plan (via the MX Plan or included in an [OVHcloud Web Hosting](https://www.ovhcloud.com/en-gb/web-hosting/){.external})
- Login details for the email accounts you want to migrate (the source accounts)
- Login details for the OVHcloud email accounts that will be receiving the migrated data (the destination accounts)

## Instructions

**OVH Mail Migrator** can be accessed from the page <https://omm.ovh.net/>. It handles 3 types of migrations:

- [Single migration](#standalone): To migrate an email account to another email account. This solution is recommended for migrating one or more email accounts (the steps must be repeated for each account).
- [Migration by file](#file): To migrate the content of an email account, previously stored in a file, to another email account. This process is compatible with PST, ICS and VCF file formats.
- [Multiple migrations (project mode)](#project): Is used to handle several migrations as part of a single project. This solution is aimed at people who are looking to migrate a large number of email accounts.

### Single migration <a name="standalone"></a>

#### Launching a migration

On the home page <https://omm.ovh.net/>, click on `New Migration`{.action} in the horizontal `Migration`{.action} menu.

![omm](images/omm-migration-create.png){.thumbnail}

On the page that opens, you can now fill in the information for each section.

- **Account:** Enter the information for the **source account** and the **destination account**. As a reminder, the contents of the **source account** will be migrated to the **destination account**.

|Information|Description|
|---|---|
|Server type|Select the server type that matches your accounts. If one of them is an OVHcloud address, you can choose **Hosted by OVHcloud (Autodetect)**. The account information will be filled in automatically, excluding the password.|
|Server URL|Enter the URL address of the server on which your accounts are hosted. This field may be filled in automatically when the server type is chosen.|
|Login|Enter the full email address.|
|Administrator account with delegation|This field appears for certain server types only.|
|Password|Enter the password for your email address.|

- **Options**: Select the elements you want to migrate. Some content may be unavailable, depending on the server type you have chosen.

- **Information**: Enter an email address to receive notifications on the migration’s progress.

Click `Start Migration`{.action} once you have entered this information. If the information is correct, the process will begin.

In the page that opens, you can track the migration progress. Remember to save the `Migration ID`{.action} shown, and to wait until the process is complete. The amount of time this will take varies depending on the number of elements to be migrated. If you want to return to this screen, please continue to the section on “Tracking a migration” below.

#### Tracking a migration  

There are two ways you can track the progress of a single migration:

- You will be notified about the migration’s progress via email.
- On the page <https://omm.ovh.net/>, click on `Track / Synchronise`{.action} in the horizontal `Migration`{.action} menu. You will need to enter the `Migration ID`{.action} and the `Source account`{.action} concerned.

![omm](images/omm-migration-track.png){.thumbnail}

In the page that opens, you can track the progress of your migration. There will be a message stating that the process is yet to start, is in progress, or has been completed. Depending on the status provided, several actions can be taken:

- `Stop the process`{.action}: This will stop the migration. Any elements already migrated will remain in the destination account.
- `Delete migrated items`{.action}: This is used to delete any elements that have already been migrated to the destination account. You can delete elements from a specific synchronisation point onwards.
- `Synchronise`{.action}: This allows new elements that were not migrated during a previous synchronisation to be recovered between the source account and the destination account. This action can be viewed as a migration of the missing elements from the source account to the destination account.

### Migration by file <a name="file"></a>

#### Launching a migration

On the home page <https://omm.ovh.net/>, click on `New PST/ICS/VCF migration`{.action} in the horizontal `PST/ICS/VCF`{.action} menu.

This method requires the file containing the content you want to migrate to the email account.

![omm](images/omm-migration-files.png){.thumbnail}

On the page displayed, fill in the information for the **destination account** then click `Start migration`{.action}.

If the information entered is correct, you will be asked to select the file from your computer. Next, click the `Upload`{.action} button and wait for the action to complete. This may take some time depending on the file size. You can view the progress of your uploads on this page.

Once the file has been uploaded to OMM, re-enter the password for the **destination account**, then click `Start migration`{.action}. If the information entered is correct, you can launch the migration by clicking `Start migration`{.action}.

On the page that opens, you can track the migration progress. Remember to save the `Migration ID`{.action} displayed, and wait for the migration to complete. The time to completion depends on the number of elements to be migrated. If you would like to return to this screen, please continue with the section below.

#### Tracking a migration

There are two ways you can track a migration by PST, ICS or VCF file:

- You will be notified about the migration’s progress via email.

- On the page <https://omm.ovh.net/>, click on `Follow / Resume`{.action} in the horizontal `Migration`{.action} menu. You will need to enter the `Migration ID`{.action} and the `Destination account`{.action} concerned.

![omm](images/omm-migration-track.png){.thumbnail}

In the page that opens, you can track the progress of your migration. There will be a message stating that the process is yet to start, is in progress, or has been completed. Depending on the status provided, several actions can be taken:

- `Stop the process`{.action}: This will stop the migration. Any elements already migrated will remain in the destination account.
- `Delete migrated items`{.action}: This is used to delete any elements that have already been migrated to the destination account.

### Carrying out and tracking multiple migrations (project mode) <a name="project"></a>

On the home page <https://omm.ovh.net/>, click on `New multiple migrations project`{.action} in the horizontal `Project`{.action} menu.

![omm](images/omm-migration-project.png){.thumbnail}

Fill in the information for the **New project**:

- Give your migration project a name.
- Enter a password to access the tracking interface for your migration project.
- Enter an email address to receive notifications on the progress of your migration project.

Click on `Create Project`{.action}. On the next page, you can manage and track your migration project. Save the **project number** displayed.

![omm](images/omm-migration-project01.png){.thumbnail}

You can now start migrating your accounts. The interface has multiple tabs:

- `Resume`: Used to track the progress of migrations for your project. There is a button you can click to pause and resume ongoing migrations.

- `Multiple Import`: Used to add several migrations to the queue, by importing a file (CSV or Excel format). The file syntax must be accurate; we recommend using the templates provided. The file has this form:

```

"Source Type(IMAP/Exchange/POP)";Source Server url;Source Login/Mail;Source Password;Destination Type;"Destination Url(can be leaved empty if hosted by OVH)";Destination Mail;Destination Password;Source admin mail (delegation);Destination Admin Mail (delegation)
IMAP;myimap.server.com;mywonderfulmail@myserver.com;My_password;Exchange;https://ex3.mail.ovh.net/ews/exchange.asmx;mygreatmailaddress@mydomain.ovh;My_password2;"";""

```

It is best to open the file with a spreadsheet software to edit it.

- `Add`: Used to add migrations to the queue, account by account. However, you can keep the source and destination servers as default values.

![omm](images/omm-migration-project02.png){.thumbnail}

- `Options`: Can be used to customise which elements the OVH Mail Migrator should migrate, and the number of concurrent requests that the tool can handle when carrying out migrations.

![omm](images/omm-migration-project03.png){.thumbnail}

- `Log out`: Used to log out of the project tracking page, with no effect on the migration process.

To access your migration project's tracking again, click on `Manage your migration project`{.action} in the `Project`{.action} menu. You will need to enter the `Migration project ID`{.action}, and the associated `Password`{.action} in order to log in.

## Go further
  
Join our community of users on <https://community.ovh.com/en/>.
