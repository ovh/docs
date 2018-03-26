---
title: Migrating email accounts using OVH Mail Migrator
slug: exchange-account-migration-with-ovh-mail-migrator
excerpt: Find out how to migrate your email accounts to OVH using our OVH Mail Migrator tool
section: Account migration
---

**Last updated 22nd March 2018**

## Objective

[OVH Mail Migrator](https://omm.ovh.net/){.external} is a tool created by OVH. It is used to migrate your email accounts to your OVH email addresses. The process covers different types of content, such as emails, contacts, calendars and tasks, provided that they are compatible with your email addresses.

**Find out how to migrate your email accounts to OVH using our OVH Mail Migrator tool.**

## Requirements

- You must have an email service with OVH, such as an [Exchange](https://www.ovh.co.uk/emails/){.external}, [Email Pro](https://www.ovh.co.uk/emails/email-pro/){.external} or MX Plan (via the MX Plan or included in an [OVH Web Hosting](https://www.ovh.co.uk/web-hosting/){.external} plan).
- You must have the login details for the email accounts you want to migrate (the source accounts).
- You must have the login details for the OVH email accounts that will be receiving the migrated data (the destination accounts).

## Instructions

[OVH Mail Migrator](https://omm.ovh.net/){.external} can be accessed from the page <https://omm.ovh.net/>. It handles three types of migration, and allows you to track their progress.

|Migration type|Description|
|---|---|
|Single migration|Migrates the contents of one email address to another email address. This solution is recommended for migrating one or several email addresses (the steps must be repeated for each address migrated).|
|Migration by file|Migrates the contents of one email address, which have previously been extracted into a file, to another email address. This process is compatible with PST, ICS and VCF file formats.|
|Multiple migration (project mode)|Is used to handle several migrations as part of a single project. This solution is aimed at people who are looking to migrate a large number of email addresses.|

Please read the section of this guide that covers the most suitable migration for your project.

### Carrying out a single migration

Log in to the <https://omm.ovh.net/> tool, move the mouse over the `Migration`{.action} tab in the menu bar at the top of the page, then click `New Migration`{.action}

![omm](images/omm-migration-create.png){.thumbnail}

On the page that opens, you can now fill in the information for each section.

- **Account:** enter the information for the **source account** and the **destination account**. As a reminder, the contents of the **source account** will be migrated to the **destination account**.

|Information|Description|
|---|---|
|Server type|Select the server type that matches your accounts. If one of them is an OVH account, you can use **Hosted by OVH (Autodetect)** to fill in this information automatically.|
|Server URL|Enter the URL address of the server on which your accounts are hosted. This field may be filled in automatically when the server type is chosen.|
|Login|Enter the full email address for your accounts.|
|Administrator account with delegation|This field appears for certain server types only.|
|Password|Enter the password for your accounts.|

- **Options:** select the elements you want to migrate. Some content may be unavailable, depending on the server type you have chosen.

- **Information:** enter an email address you would like to use for receiving notifications on the migration process.

Click `Start migration`{.action} once you have entered all the information. If the information is correct, the process will begin.

In the page that opens, you can track the migration progress. Remember to save the `Migration ID`{.action} shown, and to wait until the process is complete. The amount of time this will take varies depending on the number of elements to be migrated. If you want to return to this screen, please continue to the section on “Tracking a single migration” below.

### Tracking a single migration

There are two ways you can track the progress of a single migration:

- From the email received notifying you that the migration has begun.
- From the page for the <https://omm.ovh.net/> tool, by moving your mouse over the `Migration`{.action} tab in the menu bar at the top of the page, then clicking `Track/Synchronise`{.action}. You will need to enter the `Migration ID`{.action} and the `Source account`{.action} concerned.

![omm](images/omm-migration-track.png){.thumbnail}

In the page that opens, you can track the progress of your migration. There will be a message stating whether the process is going to start, is in progress, or has been completed. Depending on the status provided, several actions can be taken:

|Action|Description|
|---|---|
|Stop the process|Used to stop the migration. Any elements already migrated will remain in the destination account.|
|Delete migrated elements|This is used to delete any elements that have already been migrated to the destination account. You can delete elements from a specific synchronisation point onwards.|
|Synchronisation|This allows new elements that were not migrated during a previous synchronisation to be recovered between the source account and the destination account. This action can be viewed as a migration of the missing elements from the source account to the destination account.|

### Carrying out a migration by file

Log in to the <https://omm.ovh.net/> tool, move your mouse over the `PST/ICS/VCF`{.action} tab in the menu bar at the top of the page, then depending on which migration you want to carry out, click `New PST migration`{.action}, `New ICS migration`{.action} or `New VCF migration`{.action}.

For this step, you will need the file containing the content that you want to migrate.

![omm](images/omm-migration-files.png){.thumbnail}

On the page displayed, fill in the information for the **destination account** then click `Start migration`{.action}. As a reminder, the contents of the PST, ICS or VCF file will be migrated to the **destination account**.

If the information entered is correct, you will be asked to select the file from your computer. Then click `Upload`{.action}, and wait for the file to load. This may take a while, depending on the file size. You can view the progress of your uploads on this page.

Once the upload is complete, re-enter the password for the **destination account**, then click `Start migration`{.action}. If the information entered is correct, you can launch the migration by clicking `Start migration`{.action} again.

In the page that opens, you can track the migration progress. Remember to save the `Migration ID`{.action} shown, and to wait until the process is complete. The amount of time this will take varies depending on the number of elements to be migrated. If you want to return to this screen, please continue to the section on “Tracking a migration by file” below.

### Tracking a migration by file

There are two ways you can track a migration by PST, ICS or VCF file:

- From the email received notifying you that the migration has begun.

- From the page for the <https://omm.ovh.net/> tool, by moving your mouse over the `Migration`{.action} tab in the menu bar at the top of the page, then clicking `Track/Synchronise`{.action}. You will need to enter the `Migration ID`{.action} and the `Destination account`{.action} concerned.

![omm](images/omm-migration-track.png){.thumbnail}

In the page that opens, you can track the progress of your migration. There will be a message stating whether the process is going to start, is in progress, or has been completed. Depending on the status provided, several actions can be taken:

|Action|Description|
|---|---|
|Stop the process|Used to stop the migration. Any elements already migrated will remain in the destination account.|
|Delete migrated elements|This is used to delete the elements that have been migrated to the destination account.|

### Carrying out and tracking a multiple migration (project mode)

Log in to the <https://omm.ovh.net/> tool, move your mouse over the `Project`{.action} tab on the menu bar at the top of the page, then click `New multiple migration project`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

On the page that opens, fill in the information for the **New project:**

|Information|Description|
|---|---|
|Name|Define a name for your migration project.|
|Password|Define a password for your project, so that you can manage it from the OVH Mail Migrator tool.|
|Email|Enter an email address for receiving notifications on the progress of your migration project.|

Then click `Create project`{.action}. In the page that opens, you can manage and track your migration project. Remember to save the **Project ID** shown.

You can now begin migrating your accounts. To do this, you can use several tabs:

|Tab|Description|
|---|---|
|Continue|Used to track the progress of the migrations for your project. There is also a button you can use to pause and restart your migrations.|
|Multiple creation|Used to add several migrations to the queue, by importing a file (CSV or Excel). This file must be in a specific format. We recommend using the templates provided.|
|Add|Used to add migrations to the queue, one account at a time. However, you can keep the source and destination servers as default values.|
|Options|Can be used to customise which elements the OVH Mail Migrator should migrate, and the number of concurrent requests that the tool can handle when carrying out migrations.|
|Log out|Used to log out of the project tracking page. You can then log in, and track other migration projects.|

If you want to return to the tracking for your migration project, log in to the <https://omm.ovh.net/> tool, move your mouse over the `Project`{.action} tab on the menu bar at the top of the page, then click `Track a project`{.action}. You will need to enter the `Migration project ID`{.action}, and the `Password`{.action} associated with it.

## Go further

Join our community of users on <https://community.ovh.com/en/>.