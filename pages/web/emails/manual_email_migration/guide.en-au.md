---
title: Manually migrate your email address
slug: migrate-email-addresses-manually
excerpt: How to migrate your email address manually to another email address
section: Migration
order: 01
---

**Last updated 5th January 2021**

## Objective

You can [migrate an email address automatically](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-account-migration-with-ovh-mail-migrator/){.external} via our [OVH Mail Migrator](https://omm.ovh.net/){.external} tool. You can also manually migrate your email address using an email client.

**Find out how to migrate your email address manually.**

> [!warning]
>
> This guide will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation. If you experience any difficulties carrying out these operations, please get in touch with a [specialist service provider](https://partner.ovhcloud.com/en-au/directory/), and/or discuss your issues with our community on https://community.ovh.com/en/. OVHcloud cannot assist you in this regard.
>

## Requirements

- an [email service](https://www.ovhcloud.com/en-au/web-hosting/) with OVHcloud
- access to the email accounts you want to migrate (the source accounts)
- access to the OVHcloud email accounts that will be receiving the migrated data (the target accounts)

## Instructions

> [!primary]
> First of all, check if automatic migration is possible using our [OVH Mail Migrator](https://omm.ovh.net/){.external}. To do this, please use our guide on [Migrating email accounts with OVH Mail Migrator](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-account-migration-with-ovh-mail-migrator/){.external}.

In this guide, we have carried out operations on the most commonly used email software, i.e. **Outlook**, **Mail** on Mac OS and **Thunderbird**.

The following instructions are divided into two parts:

- **Exporting**: By doing so, you can extract a full backup of your email account, and migrate it to another computer, email software, or import it to another account. If you need to move items from one email address to another address that is configured on the same email software, you can copy/paste or drag/drop one to the other. However, it is recommended that you use the export system of the software you are using.

- **Importing**: This allows you to apply a backup that you have made on your new computer or software. Verify that the backup file you want to import is compatible with the email software you are using.

### Outlook

#### Exporting from Windows

- Click `File` in the top left-hand corner, then `Open and Export`, and then `Import/Export`.

![emails](images/outlook-export-import-win.png){.thumbnail}

- Select `Export to a file` and then click `Next`.

![emails](images/outlook-export-win02.png){.thumbnail}

- Select `Outlook Data File (.pst)` and click `Next`.

![emails](images/outlook-export-win03.png){.thumbnail}

- Select the name of the email account to export.

> [!primary]
> You can only export one account at a time.

Select `Include subfolders`, then click `Next`.

![emails](images/outlook-export-win04.png){.thumbnail}

- Choose the destination folder for your backup and enter a name for it by clicking `Browse`. Select the option you want, and then click `Finish`.

![emails](images/outlook-export-win05.png){.thumbnail}

Your file is being exported. When you create a file, you will be asked to set a password. This is optional.

![emails](images/outlook-export-win06.png){.thumbnail}

#### Importing from Windows

- Click `File` in the top left-hand corner, then `Open and Export`, and then `Import/Export`.

![emails](images/outlook-export-import-win.png){.thumbnail}

- Select `Import from another program or file` and click `Next`.

![emails](images/outlook-import-win02.png){.thumbnail}

- Select `Outlook Data File (.pst)` and click `Next`.

![emails](images/outlook-import-win03.png){.thumbnail}

- Choose your backup file by clicking `Browse`. Select the option you want, and then click `Next`.

![emails](images/outlook-import-win04.png){.thumbnail}

- If you need to set a password on your backup file, enter the password and click `OK`.

- Select `Import items to the current folder` and then click `Finish`.

Your backup will be imported.

#### Exporting from Mac OS

In the `Tools` tab of your Outlook window, click `Export`.

![emails](images/outlook-export-mac01.png){.thumbnail}

In the Export to archive (.olm) window, tick the items you want to add to your backup file, then click `Continue`.

![emails](images/outlook-export-mac02.png){.thumbnail}

Then select the destination folder for your backup, and click `Save`.

![emails](images/outlook-export-mac03.png){.thumbnail}

A progress window will appear, click `Continue` at the end of the operation. You will find your backup file in the folder you selected earlier.

#### Importing from Mac OS

In the `Tools` tab of your Outlook window, click `Import`.

![emails](images/outlook-import-mac01.png){.thumbnail}

Choose the backup format you want to import, and then click `Continue`.

![emails](images/outlook-import-mac02.png){.thumbnail}

Select your backup file, and then click `import`.

![emails](images/outlook-import-mac03.png){.thumbnail}

A progress window will appear, click `Continue` at the end of the operation. Your backup is then deployed on your Outlook.

### Mail on Mac OS

#### Exporting

In the left-hand column, select one or more email accounts. Click `Mailbox` in the horizontal menu, and then click `Export Mailbox`.

![emails](images/mail-export-mac01.png){.thumbnail}

Select the folder you want, or create a new folder, and then click `Choose`.

![emails](images/mail-export-mac02.png){.thumbnail}

Your export is in the form of a .mbox file.

#### Importing

Click `File` on the horizontal menu, and then click `Import Mailboxes`.

![emails](images/mail-import-mac01.png){.thumbnail}

Select your .mbox backup file, and then click `Continue`.

![emails](images/mail-import-mac02.png){.thumbnail}

In the left-hand column, the imported emails are stored in a new email account named Import. You can drag folders and messages from the "Import" account to your already configured email accounts. Once your transfers are complete, you can delete the "Import" account.

### Thunderbird

There is currently no native feature to export or import an email account from Thunderbird. However, you can save a Thunderbird profile. It contains all accounts and emails locally stored on your computer. We will look at how to back up a Thunderbird profile and reintegrate it into a new Thunderbird instance.

#### Exporting

In the main window, click on the menu in the top right-hand corner, then `Help`, then `Troubleshooting Information`.

![emails](images/thunderbird_menu.png){.thumbnail}

A table appears. Identify the `Profile Folder` line and click the `Open Folder` button.

![emails](images/thunderbird_open_folder.png){.thumbnail}

You will then be directed to the profile folder. Move up one folder in the tree.

![emails](images/thunderbird_profil_folder1.png){.thumbnail}

Right-click the profile folder and paste it into the folder or media of your choice.

![emails](images/thunderbird_profil_folder2.png){.thumbnail}

#### Importing

Rather than an import, this will be a profile load.<br>
If email accounts have already been configured on the destination Thunderbird instance, they will be present on a profile (profile A).
When Thunderbird loads a new profile (profile B), it can **only** load the elements of **this particular** profile.
For this reason, we recommend loading the new profile (profile B) first, then configuring the email accounts from profile A.

You must first start Thunderbird via the profile manager.

- On Windows, go to the `Start` menu and open the `Run` application. On the latter, type `thunderbird.exe -ProfileManager` and click `OK`.

![emails](images/thunderbird-run-profil.png){.thumbnail}

- On Mac OS, launch the Terminal application then drag and drop your Thunderbird application into the Terminal window, adding it to the line `/Contents/MacOS/thunderbird-bin -ProfileManager`. Press the `Enter` (⏎) key to validate.

![emails](images/thunderbird-terminal-profil.png){.thumbnail}

The following window displays the existing profiles. Click `Create Profile` and then click `Next` when the information message appears.

![emails](images/thunderbird-profil-create01.png){.thumbnail}

In the next step, name your profile and identify the folder where the profile will be created, below the sentence "Your user settings, preferences and other user-related data will be stored in":

![emails](images/thunderbird-profil-create02.png){.thumbnail}

> [!primary]
> We recommend copying your Thunderbird profile backup to the Thunderbird profile folder.

Click `Choose Folder...` to select the folder that contains your backup. Click `Finish` to create the profile with your backup.

You will find your profile selection window with your new profile selected. When you click `Start Thunderbird`, Thunderbird will be launched with all the items you had in your backup.

### Checking the import on the new email address

When you have done the necessary steps by following the import instructions, make sure that your items are present on the server.

Log in to [webmail](https://www.ovh.com.au/mail/).

In your inbox and the left-hand column, you will find the folders and emails for your saved email address.

> [!primary]
> You will need to bear in mind the delay of loading elements on your computer to the email server. This may take several minutes or several hours, depending on your internet connection.

## Go further

[Migrating email accounts using OVH Mail Migrator](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-account-migration-with-ovh-mail-migrator/)

Join our community of users on <https://community.ovh.com/en/>.
