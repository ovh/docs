---
title: Manually migrate your email address
excerpt: How to migrate your email address manually to another email address
updated: 2026-03-30
---

## Objective

You can [migrate an email address automatically](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) via our [OVHcloud Mail Migrator](/links/web/omm) tool. You can also migrate your email address manually using an email client.

**Find out how to migrate your email address manually.**

> [!warning]
>
> This guide will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation. If you experience any difficulties carrying out these operations, please get in touch with a [specialist service provider](/links/partner), and/or discuss your issues with our [community of users](/links/community). OVHcloud cannot assist you in this regard.
>

## Requirements

- An email service with OVHcloud, such as an [Exchange](/links/web/emails-exchange), [Email Pro](/links/web/email-pro), [Zimbra](/links/web/zimbra) or MX Plan solution (via the MX Plan or included in an [OVHcloud web hosting solution](/links/web/hosting))
- Access to the email accounts you want to migrate (the source accounts)
- Access to the OVHcloud email accounts that will be receiving the migrated data (the target accounts)

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### OVHcloud Control Panel Access

**MX Plan:**

- **Direct link:** [MX Plan](/links/control-panel/web-mx-plan)
- **Navigation path:** `Web Cloud`{.action} > `MX Plan`{.action} > Select your MX Plan service

**Email Pro:**

- **Direct link:** [Email Pro](/links/control-panel/web-email-pro)
- **Navigation path:** `Web Cloud`{.action} > `Email Pro`{.action} > Select your platform

**Exchange:**

- **Direct link:** [Exchange](/links/control-panel/web-exchange)
- **Navigation path:** `Web Cloud`{.action} > `Exchange`{.action} > Select your platform

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-mx-plan -->

## Instructions

> [!primary]
> First of all, check if automatic migration is possible using our [OVHcloud Mail Migrator](/links/web/omm). To do this, please use our guide on [Migrating email accounts with OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

In this guide, we have carried out operations on the most commonly used email software, i.e. **Outlook**, **Mail** on Mac OS and **Thunderbird**.

The following instructions are divided into two parts:

- **Exporting**: By doing so, you can extract a full backup of your email account, and migrate it to another computer, email software, or import it to another account. If you need to move items from one email address to another address that is configured on the same email software, you can copy/paste or drag/drop one to the other. However, it is recommended that you use the export system of the software you are using.

- **Importing**: This allows you to apply a backup that you have made on your new computer or software. Verify that the backup file you want to import is compatible with the email software you are using.

### Outlook

<!-- CP-STEPS-START:exchange-pst-export-cp -->
If you have an [OVHcloud Exchange email account](/links/web/emails-hosted-exchange), you can export it directly in PST format via the OVHcloud Control Panel.

Once on your Exchange service page, in the `Email accounts`{.action} tab, click the `...`{.action} button to the right of the email account you want to export, then `Export in PST format`{.action}.

![emails](images/manager-export-pst01.png){.thumbnail .w-640}

You will then need to wait for the export process to complete, which may take from a few minutes to several hours, depending on the size of the export. At the end of it, you just need to return to the `Export in PST format`{.action} button to retrieve a link to download the file.

![emails](images/manager-export-pst02.png){.thumbnail .w-640}
<!-- CP-STEPS-END:exchange-pst-export-cp -->

#### Windows

> [!tabs]
> **Export**
>>
>> - Click `File`{.action} in the top left-hand corner, then `Open and Export`{.action}, and then `Import/Export`{.action}.
>>
>> ![emails](images/outlook-export-import-win.png){.thumbnail .w-640}
>>
>> - Select `Export to a file`{.action} and then click `Next`{.action}.
>>
>> ![emails](images/outlook-export-win02.png){.thumbnail .w-640}
>>
>> - Select `Outlook Data File (.pst)`{.action} and click `Next`{.action}.
>>
>> ![emails](images/outlook-export-win03.png){.thumbnail .w-640}
>>
>> - Select the name of the email account to export.
>>
>> > [!primary]
>> > You can only export one account at a time.
>>
>> Select `Include subfolders`{.action}, then click `Next`{.action}.
>>
>> ![emails](images/outlook-export-win04.png){.thumbnail .w-640}
>>
>> - Choose the destination folder for your backup and enter a name for it by clicking `Browse`{.action}. Select the option you want, and then click `Finish`{.action}.
>>
>> ![emails](images/outlook-export-win05.png){.thumbnail .w-640}
>>
>> Your file is being exported. When you create a file, you will be asked to set a password. This is optional.
>>
>> ![emails](images/outlook-export-win06.png){.thumbnail .w-640}
>>
> **Import**
>>
>> - Click `File`{.action} in the top left-hand corner, then `Open and Export`{.action}, and then `Import/Export`{.action}.
>>
>> ![emails](images/outlook-export-import-win.png){.thumbnail .w-640}
>>
>> - Select `Import from another program or file`{.action} and click `Next`{.action}.
>>
>> ![emails](images/outlook-import-win02.png){.thumbnail .w-640}
>>
>> - Select `Outlook Data File (.pst)`{.action} and click `Next`{.action}.
>>
>> ![emails](images/outlook-import-win03.png){.thumbnail .w-640}
>>
>> - Choose your backup file by clicking `Browse`{.action}. Select the option you want, and then click `Next`{.action}.
>>
>> ![emails](images/outlook-import-win04.png){.thumbnail .w-640}
>>
>> - If you need to set a password on your backup file, enter the password and click `OK`{.action}.
>>
>> - Select `Import items to the current folder`{.action} and then click `Finish`{.action}.
>>
>> Your backup will be imported.

#### Mac OS

> [!tabs]
> **Export**
>>
>> In the `Tools`{.action} tab of your Outlook window, click `Export`{.action}.
>>
>> ![emails](images/outlook-export-mac01.png){.thumbnail .w-640}
>>
>> In the Export to archive (.olm) window, tick the items you want to add to your backup file, then click `Continue`{.action}.
>>
>> ![emails](images/outlook-export-mac02.png){.thumbnail .w-640}
>>
>> Then select the destination folder for your backup, and click `Save`{.action}.
>>
>> ![emails](images/outlook-export-mac03.png){.thumbnail .w-640}
>>
>> A progress window will appear, click `Continue`{.action} at the end of the operation. You will find your backup file in the folder you selected earlier.
>>
> **Import**
>>
>> In the `Tools`{.action} tab of your Outlook window, click `Import`{.action}.
>>
>> ![emails](images/outlook-import-mac01.png){.thumbnail .w-640}
>>
>> Choose the backup format you want to import, and then click `Continue`{.action}.
>>
>> ![emails](images/outlook-import-mac02.png){.thumbnail .w-640}
>>
>> Select your backup file, and then click `Import`{.action}.
>>
>> ![emails](images/outlook-import-mac03.png){.thumbnail .w-640}
>>
>> A progress window will appear, click `Continue`{.action} at the end of the operation. Your backup is then deployed on your Outlook.

### Mail on Mac OS

> [!tabs]
> **Export**
>>
>> In the left-hand column, select one or more email accounts. Click `Mailbox`{.action} in the horizontal menu, and then click `Export Mailbox`{.action}.
>>
>> ![emails](images/mail-export-mac01.png){.thumbnail .w-640}
>>
>> Select the folder you want, or create a new folder, and then click `Choose`{.action}.
>>
>> ![emails](images/mail-export-mac02.png){.thumbnail .w-640}
>>
>> Your export is in the form of a .mbox file.
>>
> **Import**
>>
>> Click `File`{.action} on the horizontal menu, and then click `Import Mailboxes`{.action}.
>>
>> ![emails](images/mail-import-mac01.png){.thumbnail .w-640}
>>
>> Select your .mbox backup file, and then click `Continue`{.action}.
>>
>> ![emails](images/mail-import-mac02.png){.thumbnail .w-640}
>>
>> In the left-hand column, the imported emails are stored in a new email account named Import. You can drag folders and messages from the "Import" account to your already configured email accounts. Once your transfers are complete, you can delete the "Import" account.

### Thunderbird

There is currently no native feature to export or import an email account from Thunderbird. However, you can save a Thunderbird profile. It contains all accounts and emails locally stored on your computer. We will look at how to back up a Thunderbird profile and reintegrate it into a new Thunderbird instance.

> [!tabs]
> **Export**
>>
>> In the main window, click on the menu in the top right-hand corner, then `Help`{.action}, then `Troubleshooting Information`{.action}.
>>
>> ![emails](images/thunderbird_menu.png){.thumbnail .w-640}
>>
>> A table appears. Identify the `Profile Folder`{.action} line and click the `Open Folder`{.action} button.
>>
>> ![emails](images/thunderbird_open_folder.png){.thumbnail .w-640}
>>
>> You will then be directed to the profile folder. Move up one folder in the tree.
>>
>> ![emails](images/thunderbird_profil_folder1.png){.thumbnail .w-640}
>>
>> Right-click the profile folder and paste it into the folder or media of your choice.
>>
>> ![emails](images/thunderbird_profil_folder2.png){.thumbnail .w-640}
>>
> **Import**
>>
>> Rather than an import, this will be a profile load.
>> If email accounts have already been configured on the destination Thunderbird instance, they will be present on a profile (profile A).
>> When Thunderbird loads a new profile (profile B), it can **only** load the elements of **this particular** profile.
>> For this reason, we recommend loading the new profile (profile B) first, then configuring the email accounts from profile A.
>>
>> First, launch Thunderbird via the Profile Manager.
>>
>> - On Windows, go to the `Start`{.action} menu and open the `Run`{.action} application. In the Run dialog, type `thunderbird.exe -ProfileManager` and click `OK`{.action}.
>>
>> ![emails](images/thunderbird-run-profil.png){.thumbnail .w-640}
>>
>> - On Mac OS, launch the Terminal application then drag and drop your Thunderbird application into the Terminal window, adding it to the line `/Contents/MacOS/thunderbird-bin -ProfileManager`. Press the `Enter` (⏎) key to validate.
>>
>> ![emails](images/thunderbird-terminal-profil.png){.thumbnail .w-640}
>>
>> The following window displays the existing profiles. Click `Create Profile`{.action} and then click `Next`{.action} when the information message appears.
>>
>> ![emails](images/thunderbird-profil-create01.png){.thumbnail .w-640}
>>
>> In the next step, name your profile and identify the folder where the profile will be created, below the sentence "Your user settings, preferences and other user-related data will be stored in":
>>
>> ![emails](images/thunderbird-profil-create02.png){.thumbnail .w-640}
>>
>> > [!primary]
>> > We recommend copying your Thunderbird profile backup to the Thunderbird profile folder.
>>
>> Click `Choose Folder...`{.action} to select the folder that contains your backup. Click `Finish`{.action} to create the profile with your backup.
>>
>> You will find your profile selection window with your new profile selected. When you click `Start Thunderbird`{.action}, Thunderbird will be launched with all the items you had in your backup.

### Checking the import on the new email address

When you have done the necessary steps by following the import instructions, make sure that your items are present on the server.

Log in to [webmail](/links/web/email).

In your inbox and the left-hand column, you will find the folders and emails for your saved email address.

> [!primary]
> You will need to bear in mind the delay of loading elements on your computer to the email server. This may take several minutes or several hours, depending on your internet connection.

## Go further

[Migrating email accounts using OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)

Join our [community of users](/links/community).
