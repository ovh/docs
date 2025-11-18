---
title: "Zimbra Pro - Configuring your email account via EWS in Outlook for Mac"
excerpt: "Find out how to configure your Zimbra Pro email address in Outlook for macOS via the EWS protocol"
updated: 2025-07-03
---

<style>
.h-500 {
  max-height:500px !important;
}
</style>


## Objective

> [!primary]
>
> This guide is aimed at customers with the email solution [Zimbra Pro](/links/web/emails-zimbra). This service will be available in beta version from July 2025.

Zimbra Pro accounts can be configured on a Mac using the EWS protocol (**E**xchange **W**eb **S**ervices). This allows you to configure all the collaborative features of your email address at once. The application [Outlook on macOS](https://apps.apple.com/en-gb/app/microsoft-outlook/id985367838?mt=12) is available on the Apple App Store.

**Find out how to configure your Zimbra Pro email address in Outlook for macOS via the EWS protocol.**

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or the software publisher if you encounter any difficulties. OVHcloud cannot provide you with technical support in this regard. You can find more information in the "[Go further](#go-further)" section of this guide.
> 

## Requirements

- A [Zimbra Pro](/links/web/emails-zimbra) account
- [Outlook on macOS](https://apps.apple.com/fr/app/microsoft-outlook/id985367838?mt=12) installed on your device
- The login details for the email account you would like to configure

## Instructions

### Add the <a name="add-account"></a> account

- **When you start the Outlook application for the first time**: A configuration wizard will appear, prompting you to enter the first email address you would like to add.

- **If an account is already set up on the Outlook application**:  
1. Click `Tools`{.action} in the menu bar at the top of your screen.
2. Click `Accounts`{.action}.
3. In the “Accounts” window that pops up, click on `+`{.action} in the bottom left-hand corner, then click on `New account`{.action}.

![mail macOS](images/outlook-macos-add-step00.png){.thumbnail .h-500}

Follow the installation steps by clicking on the **3** tabs below:

> [!tabs]
> **Step 1**
>>
>> Enter your email address under “Email address”, then click `Continue`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step01.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> Two scenarios are possible:
>>
>> - **If the “IMAP/POP” window appears**: Click `This is not a POP/IMAP account`{.action}, then choose `Exchange`{.action} from the “Choose Provider” window.
>> - **If you go directly to “Choose the provider”**: Choose `Exchange`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step02.png){.thumbnail .h-500}
>>
> **Step 3**
>>
>> Check and complete the following information:
>>
>> - **Method**: Choose `User name and password`.
>> - **Email address**: Enter your full email address.
>> - **DOMAIN\User name or email address**: Enter your full email address.
>> - **Password**: Enter the password associated with your email address.
>> - **Server**: Enter "zimbra1.mail.ovh.net".
>>
>> To finalize the configuration, tap `Add an account`{.action} and select the features you want to use on your Mac.
>>
>> ![mail macos](images/outlook-macos-add-step03.png){.thumbnail .h-500}
>>

> [!warning]
>
> If you encounter a sending or receiving error after following the configuration steps above, please refer to the “[Modify existing settings](#modify-settings)” section of this guide.

### Use the email address

Once you have configured your email address, you can start using it! You can now send and receive messages, and manage your calendars and tasks.

OVHcloud also offers a web application that allows you to access your email address from an internet browser. You can log in to the [OVHcloud webmail](/links/web/email) using your email credentials. If you have any questions on how to use it, please read our guide on [Using Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### How do I modify existing settings? <a name="modify-settings"></a>

To modify the settings of an email account that has already been configured, follow the instructions below:

1. Click `Tools`{.action} in the menu bar at the top of your screen.
1. Click `Accounts`{.action}.
1. Select your account in the left column.
1. Click `Advanced...`{.action} in the bottom right.

![outlook macos](images/outlook-macos-modify-01.png){.thumbnail .h-500}

Find the settings in **Step 3** of the [Add account](#add-account) chapter.

### How do I delete an email account? <a name="delete-account"></a>

1. Click `Tools`{.action} in the menu bar at the top of your screen.
1. Click `Accounts`{.action}.
1. Select your account in the left column.
1. Click `-`{.action} in the bottom left-hand corner

![outlook macos](images/outlook-macos-delete-01.png){.thumbnail .h-500}

## Go further <a name="go-further"></a>

> [!primary]
>
> For more information on configuring an email address from the Mail app on macOS, see the [Apple Help Center](https://support.apple.com/en-gb/102619).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
