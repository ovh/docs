---
title: 'Migrating a Gmail account to an OVHcloud email account via the OVH Mail Migrator'
slug: migrate-gmail-via-ovh-mail-migrator
excerpt: 'Find out how to migrate your Gmail accounts to OVHcloud using our OVH Mail Migrator tool'
section: 'Exchange account migration'
order: 3
---

**Last updated 09th March 2020**

## Objective

The [OVH Mail Migrator](https://omm.ovh.net/){.external} is a tool created by OVHcloud. You can use it to migrate email accounts from one hosting provider to another. The process covers different types of content, such as emails, contacts, calendars and tasks, provided that they are compatible with your OVHcloud email accounts. 

This guide describes how to use OMM to import various elements of your Gmail account to your OVHcloud account.

**Find out how to migrate your Gmail account to OVHcloud using our OMM tool<b>.</b>**


## Requirements

- an email service with OVHcloud, e.g. [Exchange](https://www.ovh.co.uk/emails/){.external}, [Email Pro](https://www.ovh.co.uk/emails/email-pro/){.external} or MX Plan (via the MX Plan standalone tool or included in an [OVHcloud web hosting](https://www.ovh.co.uk/web-hosting/){.external} plan)
- access to the email accounts you want to migrate (the source accounts)
- access to the OVHcloud email accounts that will be receiving the migrated data (the target accounts)

## Instructions

### Step 1: Migrate emails and folders.

> [!primary]
> For the migration to work, you will need to turn on IMAP protocol for your Gmail account. To this, follow the Google guide on
> [how to turn on IMAP for your Gmail account](https://support.google.com/mail/answer/7126229?hl=en){.external}.

Once you have turned on IMAP for your Gmail account, go to the [OMM](https://omm.ovh.net/){.external} tool.

Click `Migration`{.action}, then `New migration`{.action}.

![omm](images/OMM-gmail-step01-01.png){.thumbnail}

The following window will pop up:

![omm](images/OMM-gmail-step01-02.png){.thumbnail}

Fill in the mandatory fields depending on the indications of the two tables below:

**Source Account**

| Information            	| Description                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Server type         	| Select **IMAP** in the dropdown menu.         									|
| Server URL          	| Enter **imap.gmail.com**.                       					 			  	|
| Login						| Enter your Gmail address.															|
| Password				| Enter the password for your Gmail address.										|

**Target account**

| Information            	| Description                                                                              							|
|------------------------	|-------------------------------------------------------------------------------------------------------------------|
| Server type         	| Select **Hosted by OVH (Autodetect)** in the dropdown menu.   											|
| Server URL          	| The field will be auto-filled.                     					  		 							|
| Login						| Enter your OVHcloud email address.																			|
| Password				| Click `detect settings`{.action}, then enter the password of your OVHcloud email address.	|

In the **Options** section, only tick **Mails**, as the other options will not be available in IMAP. Contacts and calendars will be migrated in steps 2 and 3.

![omm](images/OMM-gmail-step01-03.png){.thumbnail}

In the **Information** box, you can enter an email address that will be used to notify you regarding the migration’s progress. This field is optional. Next, click `Launch the migration`{.action}.

![omm](images/OMM-gmail-step01-04.png){.thumbnail}

The migration tracking window (below) will then appear. You can leave it open to track the migration in real time, or you can close it — closing the window will not affect the migration process.

![omm](images/OMM-gmail-step01-06.png){.thumbnail}

> [!warning]
> When the migration is launched, you may see the message below:

![omm](images/OMM-gmail-step01-05.png){.thumbnail}

If it appears, go to your Gmail account mailbox and check if you have received an email with the subject **“Critical security alert”**. This is a security measure put in place by Gmail. To resolve this situation, follow our guide on [authorising less secure connections on Gmail](../migrate-gmail-via-ovh-mail-migrator/gmail-security).

After you have **authorised less secure connections** on Gmail, you will need to relaunch the migration.

### Step 2: Migrate calendars.

#### 2.1: Retrieve a calendar backup on Gmail.

To import your calendar to your OVHcloud account, you will need to retrieve a backup of the calendar via the Gmail interface. To do this, follow the Google guide:

[How to export your calendars for your Gmail account](https://support.google.com/calendar/answer/37111?hl=en){.external}

If you have several calendars on your Gmail account, you will download an archive folder, which you then need to decompress. Each calendar will be exported in **.ics** format.

#### 2.2: Import your calendar via OMM.

> [!primary]
> Calendar migration via OMM is only compatible with Exchange target accounts.

Once you have retrieved the backup of your calendar in **.ics** format, go to [OMM](https://omm.ovh.net/){.external}.

Click on the `PST/ICS/VCF`{.action} tab at the top, then click `New PST/ICS/VCF migration`{.action}.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Fill in the fields in the following table, then click `Launch migration`{.action}:

| Information            	| Description                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Login                  	| Enter the OVHcloud email address you would like to migrate your calendar to.           	|
| Password           	| Enter the password for your target email address.                          	|
| Communication email 	| Enter the email address you want to use for receiving updates on the migration progress, and for resuming file downloads.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

 Click `Choose a file`{.action} to retrieve the **.ics** calendar file on your PC, then click `Upload`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

Then enter the password for your target account, and click `Launch migration`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

The migration tracking window (below) will then appear. You can leave it open to track the migration in real time, or you can close it — closing the window will not affect the migration process.

![omm](images/OMM-gmail-step02.png){.thumbnail}


### Step 3: Migrate your contacts.

> [!primary]
> Contact migration via OMM is only compatible with Exchange target accounts.

To import your contacts to your OVHcloud account, you will need to retrieve a backup of the contacts via the Gmail interface. To do this, follow the Google guide:

[How to export or back up contacts for your Gmail account](https://support.google.com/contacts/answer/7199294?hl=en){.external}

> [!warning]
> The export must be taken in vCard (**.vcf**) format via the Gmail interface. This option is offered at the end of the export process.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Fill in the fields in the following table, then click `Launch migration`{.action}:

| Information            	| Description                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Login                  	| Enter the OVHcloud email address you would like to migrate your contacts to.            	|
| Password           	| Enter the password for your target email address.                          	|
| Communication email 	| Enter the email address you want to use for receiving updates on the migration progress, and for resuming file downloads.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

Click `Choose a file`{.action} to retrieve the **.vcf** contact file on your PC, then click `Upload`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

Then enter the password for your target account, and click `Launch migration`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

The migration tracking window will then open. You can leave it open to track the migration in real time, or you can close it — closing the window will not affect the migration process.

![omm](images/OMM-gmail-step03.png){.thumbnail}


## Go further

[Authorising less secure connections on Gmail](../migrate-gmail-via-ovh-mail-migrator/gmail-security)

Join our community of users on <https://community.ovh.com/en/>.
