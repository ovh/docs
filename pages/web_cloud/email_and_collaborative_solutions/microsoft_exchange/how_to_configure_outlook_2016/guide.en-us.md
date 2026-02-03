---
title: 'Exchange - Configure your email account on Outlook for Windows'
excerpt: 'Find out how to configure your Exchange account in Outlook for Windows'
updated: 2026-01-09
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
.h-500 {
  max-width:500px !important;
}
</style>

## Objective

You can configure Exchange accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application. Microsoft Outlook is the recommended software for using an Exchange email address with its collaborative features.

**Find out how to configure your Exchange account in Outlook for Windows**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2YeGXo10CX8?si=mINBBXq6qb4MiFEt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Requirements

- An [OVHcloud Exchange account](/links/web/emails-hosted-exchange)
- [Outlook Classic](https://support.microsoft.com/en-gb/office/install-or-reinstall-classic-outlook-on-a-windows-pc-5c94902b-31a5-4274-abb0-b07f4661edf5) for Windows installed on your device
- Login credentials for the email account to be configured
- The OVHcloud SRV record must be correctly configured in the domain name’s DNS zone. Please refer to our guide on [Adding a domain name to an Exchange service](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

/// details | Information regarding the management and configuration of OVHcloud services

This guide will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.

If you experience any difficulties carrying out these operations, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community. OVHcloud cannot provide you with technical support in this regard. You can find more information in the "[Go further](#go-further)" section of this guide.

///

> [!primary]
>
> Are you using Outlook for Mac? Refer to our documentation: [Configuring your Exchange account in Outlook for Mac.](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac).

## Instructions

> [!warning]
>
> Before you begin configuring your account, it is important to note that the Outlook application included free with Windows 11 is [incompatible](https://learn.microsoft.com/en-gb/microsoft-365-apps/outlook/get-started/supported-account-types) with OVHcloud Exchange solutions, known as on-premises. You will need to use the classic **Outlook** version.
>
> To install Outlook Classic on your Windows computer, download it from the Microsoft page "[Install or reinstall Outlook Classic on a Windows PC](https://support.microsoft.com/en-gb/office/install-or-reinstall-classic-outlook-on-a-windows-pc-5c94902b-31a5-4274-abb0-b07f4661edf5)", and install it.
>
> Once the installation is complete, to distinguish between the two versions when they are installed, type "Outlook" in the Windows search bar. You can then see the difference as below.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Adding the account

- **When you start the application for the first time**: A setup wizard will appear and prompt you to enter your email address.

- **If you have already added an account**: Click `File`{.action} in the menu bar at the top of your screen, then `Add account`{.action}.

![Outlook](images/config-outlook-exchange01.png){.thumbnail .h-500}

- Leave `Mail account` checked and complete the following information:
    - **Name**: set a display name.
    - **Email address**: enter your full email address.
    - **Password**: enter the password associated with your email address.
    - **Confirm password**: enter the password associated with your email address again.
- Click on `Next`{.action} to continue.

![exchange](images/config-outlook-exchange02.png){.thumbnail .h-500}

- If your domain name configuration is valid, a message authorizing connection to the OVHcloud Exchange server may appear. Click on `Allow`{.action} **(1)** to allow the automatic configuration of your Exchange account.
- A second authentication window appears, enter the password of your email address **(2)**.

![exchange](images/config-outlook-exchange03.png){.thumbnail .h-500}

After authorization and authentication to the OVHcloud Exchange server, the configuration will be completed and your account will be operational.

### Using your email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

Your Exchange email address and all of its collaborative features are also available via the [OWA interface](/links/web/email). If you have any questions about how to use this interface, please refer to our guide on [Using the Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Modifying existing settings

> [!warning]
>
> It is not possible to modify the server settings of an Exchange account. If you encounter an anomaly related to synchronization with the server, it is necessary to delete the Outlook account and reconfigure it. To do this, follow the instructions below.

If your email account is already set up and you need to access the account settings to delete it:

- Go to `File`{.action} from the menu bar at the top of your screen.
- Select the account to modify in the drop-down menu **(1)**.
- Click on `Account settings`{.action} **(2)** below.
- Click on `Account settings...`{.action} **(3)** to access the settings window.

![Outlook](images/config-outlook-exchange04.png){.thumbnail .h-500}

- The account settings window appears, select the concerned email account and click on `Delete`{.action}.

![Outlook](images/config-outlook-exchange05.png){.thumbnail .h-500}

Once the Exchange account is deleted, follow the "[Add the account](#add-account)" section of this guide to reconfigure your email account.

### Retrieving a backup of your email address

If you need to make a change that could lead to the loss of your email account data, we advise you to make a backup of the email account concerned beforehand. To do this, please read the "**Exporting from Windows**" section in our guide on [Migrating your email address manually](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporting-from-windows).

## Go further <a name="go-further"></a>

> [!primary]
>
> For more information about configuring an email address from the Outlook app on Windows, see [Microsoft Help Center](https://support.microsoft.com/en-gb/office/add-email-account-in-Outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configuring your MX Plan address in Outlook for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Configuring your Email Pro account in Outlook for Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

Join our [community of users](/links/community).