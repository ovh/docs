---
title: Migrating email accounts using OVH Mail Migrator
slug: exchange-account-migration-with-ovh-mail-migrator
excerpt: Find out how to migrate your email accounts to OVH using our OVH Mail Migrator tool
section: Account migration
---

**Last updated 25th November 2021**

## Objective

[OVH Mail Migrator](https://omm.ovh.net/){.external} is a tool created by OVHcloud. You can use it to migrate your email accounts to your OVHcloud email addresses, or to an external email service. The process covers different types of content, such as emails, contacts, calendars and tasks, provided that they are compatible with your email addresses.

**Find out how to migrate your email accounts to OVHcloud using our OVH Mail Migrator tool.**


## Requirements

- You must have an email service with OVHcloud, such as [Exchange](https://www.ovhcloud.com/en-gb/emails/){.external}, [Email Pro](https://www.ovhcloud.com/en-gb/emails/email-pro/){.external} or MX Plan (via the MX Plan or included in an [OVHcloud Web Hosting](https://www.ovhcloud.com/en-gb/web-hosting/){.external} plan).
- You must have the login details for the email accounts you want to migrate (the source accounts).
- You must have the login details for the OVHcloud email accounts that will be receiving the migrated data (the destination accounts).

## Instructions

**OVH Mail Migrator** can be accessed from the page <https://omm.ovh.net/>. It handles 3 types of migrations:

- [Single migration](#standalone) : Migrate an email account to another email account. This solution is recommended for migrating one or more email accounts (the steps must be repeated for each address migrated).
- [Migration by file](#file): Migrate the content of an email account, previously recovered in a file, to another email address. This process is compatible with PST, ICS and VCF file formats.
- [Multiple migration (project mode)](#project): Is used to handle several migrations as part of a single project. This solution is aimed at people who are looking to migrate a large number of email addresses.

### Single migration <a name="standalone"></a>

#### Launch migration

From the page, <https://omm.ovh.net/>in the {.action} `Migration` tab above, click `New migration`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

On the page that opens, you can now fill in the information for each section.

- **Account:** enter the information for the **source account**and the **destination account**. As a reminder, the contents of the **source account**will be migrated to the **destination account**.

|Information|Description|
|---|---|
|Server type|Select the server type that matches your accounts. If one of them is an OVHcloud address, **Hosted by OVHcloud (Autodetect)**, you can use it to fill in the information automatically, excluding the password.|
|Server URL|Enter the URL address of the server on which your accounts are hosted. This field may be filled in automatically when the server type is chosen.|
|Login|Enter the full email address.|
|Administrator account with delegation|This field appears for certain server types only.|
|Password|Enter the password for your email address.|

- **Options:** select the elements you want to migrate. Some content may be unavailable, depending on the server type you have chosen.

- **Information**: enter an email address to receive a notification on the migration’s progress.

Click `Start migration`{.action} once you have entered this information. If the information is correct, the process will begin.

In the page that opens, you can track the migration progress. Remember to save the `Migration ID`{.action} shown, and to wait until the process is complete. The amount of time this will take varies depending on the number of elements to be migrated. If you want to return to this screen, please continue to the section on “Tracking a single migration” below.

#### Track migration  

There are two ways you can track the progress of a single migration:

- From the email received, you will be notified about the migration’s progress.
- From the page, <https://omm.ovh.net/> in the `Migration` tab {.action}, click `Follow / Synchronise` {.action}. You will need to enter the `Migration ID`{.action} and the `Source account`{.action} concerned.

![omm](images/omm-migration-track.png){.thumbnail}

In the page that opens, you can track the progress of your migration. There will be a message stating whether the process is going to start, is in progress, or has been completed. Depending on the status provided, several actions can be taken:

- `Stop the process `{.action}: Used to stop the migration. Any elements already migrated will remain in the destination account.
- `Delete migrated`{.action} items: This is used to delete any elements that have already been migrated to the destination account. You can delete elements from a specific synchronisation point onwards.
- `Synchronise`{.action}: This allows new elements that were not migrated during a previous synchronisation to be recovered between the source account and the destination account. This action can be viewed as a migration of the missing elements from the source account to the destination account.

### Migration by file <a name="file"></a>

#### Launch migration

From the page <https://omm.ovh.net/> in the `PST/ICS/VCF` tab{.action} above, click `New PST/ICS/VCF migration`{.action}.

Here, you must have the file containing the content you want to migrate to the email account.

![omm](images/omm-migration-files.png){.thumbnail}

On the page displayed, fill in the information for the **destination account** then click `Start migration`{.action}.

If the information entered is correct, you will be asked to select the file from your computer. Next, click the `Upload`{.action} button and wait for the download to complete. this may take some time depending on the file size. You can view the progress of your uploads on this page.

Once the file has been uploaded to OMM, re-enter the password for the **destination account**, then click `Start migration`{.action}. If the information entered is correct, you can launch the migration by clicking `Start migration`{.action}.

In the page that opens, you can track the migration progress. Remember to save the `Migration ID`{.action}  displayed, and wait for the migration to complete. this delay varies depending on the number of elements to be migrated. If you would like to return to this screen, please continue to the section below.

#### Track migration

There are two ways you can track a migration by PST, ICS or VCF file:

- from the email received notifying you that the migration has begun

- From the page, <https://omm.ovh.net/> move your mouse over the `Migration`{.action} tab in the menu bar above the page, then click `Follow / Synchronise`{.action}. You will need to enter the `Migration ID`{.action} and the `Destination account`{.action} concerned.

![omm](images/omm-migration-track.png){.thumbnail}

In the page that opens, you can track the progress of your migration. There will be a message stating whether the process is going to start, is in progress, or has been completed. Depending on the status provided, several actions can be taken:

- Stop the process: Used to stop the migration. Any elements already migrated will remain in the destination account.
- Delete migrated items: Deletes the migrated items on the destination account.

### Carrying out and tracking a multiple migration (project mode) <a name="project"></a>

From the page <https://omm.ovh.net/>in the {.action} `Project` tab above, click `New Multiple Migration Project`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Fill in the information for the **New project**:

- Give your migration project a name.
- A password to access the interface for tracking your migration project.
- an email address to receive notifications on the progress of your migration project

Click `Create Project`{.action}. On the next page, you can manage and track your migration project. Keep **the project number** displayed above.

![omm](images/omm-migration-project01.png){.thumbnail}

You can now start migrating your accounts. The interface has different tabs:

- `Continue`: Used to track the progress of migrations for your project. There is a button you can use to pause and resume ongoing migrations.

- `Multiple` creation: Used to add several migrations to the queue, by importing a file (CSV or Excel). The format must be accurate; we recommend using the templates provided. The file is in this form:

``` 

"Source Type(IMAP/Exchange/POP)";Source Server url;Source Login/Mail;Source Password;Destination Type;"Destination Url(can be leaved empty if hosted by OVH)";Destination Mail;Destination Password;Source admin mail (delegation);Destination Admin Mail (delegation)
IMAP;myimap.server.com;mywonderfulmail@myserver.com;My_password;Exchange;https://ex3.mail.ovh.net/ews/exchange.asmx;mygreatmailaddress@mydomain.ovh;My_password2;"";""

```

It is better to open it with a spreadsheet software to complete it.

- `Add`: Used to add migrations to the queue, account by account. However, you can keep the source and destination servers as default values.

![omm](images/omm-migration-project02.png){.thumbnail}

- `Options`: Can be used to customise which elements the OVH Mail Migrator should migrate, and the number of concurrent requests that the tool can handle when carrying out migrations.

![omm](images/omm-migration-project03.png){.thumbnail}

- `Logout`: Used to log out of the project tracking page, with no effect on the migration process.

To access your migration project's tracking again, log in to the page, <https://omm.ovh.net/> in the `Project`{.action}  tab above, click `Track Project`{.action}. You will need to enter the `Migration project ID`{.action}, and the `Password`{.action} associated with it.

## Go further
  
Join our community of users on <https://community.ovh.com/en/>.
