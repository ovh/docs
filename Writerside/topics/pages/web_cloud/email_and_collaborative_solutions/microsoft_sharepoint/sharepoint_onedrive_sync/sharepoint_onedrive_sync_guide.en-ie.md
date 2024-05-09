---
title: "Sharepoint: synchronize your data on your computer"
excerpt: Find out how to back up your OVHcloud Sharepoint data to your computer
updated: 2023-09-21
---

## Objective

If you would like to retrieve or migrate the data from your OVHcloud SharePoint platform, this guide will outline the steps you need to take to extract all of the data to your computer’s local storage.

**Find out how to back up your OVHcloud Sharepoint data to your computer.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)
- An [OVHcloud Sharepoint solution](https://www.ovhcloud.com/en-ie/collaborative-tools/sharepoint/)
- A computer that uses the Microsoft Windows operating system to perform the migration steps.

## Instructions

This guide is divided into 4 steps:

- [Step 1 - Install OneDrive for Business](#installonedrive.) : the OneDrive for Business solution will allow you to transfer data from your Sharepoint to your computer
- [Step 2 - Prepare for migration from the OVHcloud Control Panel](#controlpanelconfig.) : configure your Sharepoint platform by designating a single administrator account that will be able to transfer the content of OneDrive from each Sharepoint account.
- [Step 3 - Launch the migration from your Sharepoint interface](#migrationignition.) : log in to the account designated in step 2 to transfer the content to your computer.
- [Step 4 - Migrate content from other Sharepoint accounts](#migrationother.) : follow the process to view and sync each account's OneDrive on your Sharepoint platform.

### Step 1 - Install OneDrive for Business <a name="installonedrive"></a>

To migrate data from your OVHcloud SharePoint service, you must use the OneDrive for Business app, which has the technical name "Groove.exe".

To install it, follow the instructions below:

1. Download the ISO file from the link <https://download.mail.ovh.net/sharepoint/onedrive.iso>
2. From your computer, right-click the `onedrive.iso` file, open its `Properties`{.action}, select the `Unblock`{.action} check box, click `Apply`{.action}, and then click `OK`{.action}.
3. Double-click `onedrive.iso` to open it.
4. Double-click the `setup.bat` file to start the installation.
5. Please wait, as this operation may take a few minutes. **Please wait for the window to close** before the installation is complete.

> [!warning]
>
> If the `setup.bat` file does not start correctly (in step 4), you can copy the contents of the `onedrive.iso` file to a folder on your computer's desktop and try step 4 again.

![sharepoint](sharepoint-eol-00.gif){.thumbnail}

> [!primary]
>
> If this method doesn't work on your computer, you can install OneDrive for Business by following [the official Microsoft procedure](https://learn.microsoft.com/sharepoint/install-previous-sync-app#install-groove-exe-with-office-2016).

### Step 2 - Prepare the migration from the OVHcloud Control Panel <a name="controlpanelconfig"></a>

To access all of the OneDrive spaces within your Sharepoint service, you will need to remove all users' admin rights via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

Go to the `Web Cloud`{.action} section of your Control Panel. Click `Microsoft`{.action}, click `Sharepoint`{.action} and select the SharePoint platform.

From the `Users`{.action} tab, access your platform's Sharepoint account management. For each account, click the `...`{.action} button on the right, then `Remove administrator rights`{.action}.

![sharepoint](sharepoint-eol-01.png){.thumbnail}

Once you have removed admin rights for all Sharepoint accounts, you will need to designate a single account, which will then have access to all of the platform's OneDrive spaces.

Grant administrator access to the account you have designated.

In the `Users`{.action} tab of your Sharepoint platform, click on the `...`{.action} button to the right of the account you have chosen, then `Enable administrator rights`{.action} .

![sharepoint](sharepoint-eol-02.png){.thumbnail}

You're now able to sync all of the OneDrive spaces on your Sharepoint platform through this account.

### Step 3 - Launch the migration from your Sharepoint interface <a name="migrationignition"></a>

Access the online interface for your SharePoint service. You will find the access URL from the OVHcloud Control Panel in the `General information`{.action} tab, under `Checking URL`.

![sharepoint](sharepoint-eol-03.png){.thumbnail}

Log in with the credentials of the user who has administrator rights.

![sharepoint](sharepoint-eol-04.png){.thumbnail}

To access the OneDrive section, click the icon on the top left of the Sharepoint interface, and then click the `OneDrive`{.action} icon.

![sharepoint](sharepoint-eol-05.png){.thumbnail}

To sync the contents of OneDrive to your computer, click the `Sync`{.action} button then click `Sync Now`{.action}.

![sharepoint](sharepoint-eol-06.png){.thumbnail}

You will be prompted to allow the website to open the **grvopen** link. Tick "Always allow **https://myServiceAddress.spX.ovh.net** to open **grvopen** links" then click `Open link`{.action}.

![sharepoint](sharepoint-eol-07.png){.thumbnail}

Enter the admin Sharepoint account credentials. Please use the user with administrator rights (configured in [step 2](#controlpanelconfig.)).

![sharepoint](sharepoint-eol-08.png){.thumbnail}

Click `Sync Now`{.action}.

![sharepoint](sharepoint-eol-09.png){.thumbnail}

Choose the "**Form Templates**" library template from the "Select the library you want to sync" window. Next, click `Sync selected`{.action}.

![sharepoint](sharepoint-eol-10.png){.thumbnail}

Once this synchronization is complete on your computer, only the data from the Sharepoint account you are logged on to will be transferred to your computer.

**To transfer the contents of OneDrive from each account on your Sharepoint platform, follow step 4 below.**

### Step 4 - Migrate the content of other Sharepoint accounts <a name="migrationother"></a>

To access and sync the OneDrive for other users on your platform, you'll need to change the access URL (from your browser) when you're signed in to the OneDrive for your admin account.

To do this, in the URL that appears, replace the “section” (corresponding to the user) between the `/personal/` and `/Documents/` sections.

- **Example 1**: For a **user@domain.name** user, replace the characters **@** and **.** with “**_**”, so to obtain "user_domain_name". Therefore, your link will look like this:

![sharepoint](sharepoint-eol-11.png){.thumbnail}

- **Example 2**: For a **john.smith@example.com** user, you obtain "john_smith_example_com". Your link will look like this:

![sharepoint](sharepoint-eol-12.png){.thumbnail}

> [!warning]
>
> The above URLs are only given as an example. Please ensure that you use the URL generated by your Sharepoint platform.

You can synchronize the following accounts by repeating this step.

## Go further

[Enabling and managing your OVHcloud SharePoint](sharepoint_manage1.)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ie/directory/).
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ie/support-levels/).

Join our community of users on <https://community.ovh.com/en/>