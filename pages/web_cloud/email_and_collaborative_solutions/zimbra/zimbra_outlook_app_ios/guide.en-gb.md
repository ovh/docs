---
title: "Zimbra Pro - Configuring your email account via ActiveSync in Outlook for iOS"
excerpt: "Find out how to configure your Zimbra Pro email address on the Outlook mobile app for iOS via the ActiveSync protocol"
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

Zimbra Pro accounts can be configured on an iPhone using the ActiveSync protocol. This allows you to configure all the collaborative features of your email address at once. The Microsoft Outlook app on iOS is available for free from the Apple App Store.

**Find out how to configure your Zimbra Pro email address on the Outlook for iOS mobile app via the ActiveSync protocol.**

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or the software publisher if you encounter any difficulties. OVHcloud cannot provide you with technical support in this regard. You can find more information in the "[Go further](#go-further)" section of this guide.
> 

## Requirements

- A [Zimbra Pro](/links/web/emails-zimbra) account
- [Outlook for iOS](https://apps.apple.com/app/microsoft-outlook/id951937596) installed on your device
- The login details for the email account you would like to configure

## Instructions

### Add the <a name="add-account"></a> account

- **When you start the Outlook application for the first time**, a configuration wizard will appear:
- Press `Add Account`{.action}.

![outlook ios](images/outlook-app-ios-add-01.png){.thumbnail .h-500}

- **If an account is already set up on the Outlook application**:
1. Tap on the circle containing the initials of the email account you are looking at, or on the house icon (`⌂`{.action}) in the top left-hand corner of your screen.
2. Press the gear (`⛭`{.action}) in the lower left of your screen.
3. Then press `Accounts`{.action} in the **Settings** menu.
4. Press `Add Account`{.action}.
5. Press `Email account`{.action}.

![outlook ios](images/outlook-app-ios-add-02.png){.thumbnail .h-500}

Follow the installation steps by clicking on the **3** tabs below:

> [!tabs]
> **Step 1**
>>
>> Enter your email address and press `Add account`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-01.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> Two scenarios are possible:
>>
>> - If **IMAP** is visible at the top of the page: press the `?`{.action} button in the top right corner of the **(1)** screen, then choose `Change account provider`{.action} **(2)**. Then select `Exchange` **(3)** and go to step 3.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-02.png){.thumbnail .h-500}
>>
>> - If you are directed to the choice of account type, select `Exchange`.
>>
> **Step 3**
>>
>> In the next window, tick `Advanced settings`{.action} and enter the following information:
>>
>> - **Email address**: Enter your full email address.
>> - **Password**: Enter the password associated with your email address.
>> - **Description**: Enter a name that can be used to identify this account among your other email accounts saved in Outlook.
>> - **Server**: Type "zimbra1.mail.ovh.net".
>> - **Domain**: Leave this field blank.
>> - **Username**: Enter your full email address.
>>
>> To finalize the configuration, press `Login`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-03.png){.thumbnail .h-500}
>>

> [!warning]
>
> If you encounter a sending or receiving error after following the configuration steps above, please refer to the “[Modify existing settings](#modify-settings)” section of this guide.

### Use the email address

Once you have configured your email address, you can start using it! You can now send and receive messages, and manage your calendars and tasks.

OVHcloud also offers a web application that allows you to access your email address from an internet browser. You can log in to the [OVHcloud webmail](/links/web/email) using your email credentials. If you have any questions on how to use it, please read our guide on [Using Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### How do I change the existing settings? <a name="modify-settings"></a>

1. Tap on the circle containing the initials of the email account you are looking at, or the house icon (`⌂`{.action}) in the top left-hand corner of your screen.
1. Press the gear (`⛭`{.action}) in the lower left of your screen.
1. Then press `Accounts`{.action} in the **Settings** menu.
1. Select the account.
1. Press `Modify login information`{.action}.

![outlook ios](images/outlook-app-ios-modify-01.png){.thumbnail .h-500}

Find the settings in **Step 3** of the [Add account](#add-account) chapter.

### How do I delete an email account? <a name="delete-account"></a>

1. Tap on the circle containing the initials of the email account you are looking at, or the house icon (`⌂`{.action}) in the top left-hand corner of your screen.
1. Press the gear (`⛭`{.action}) in the lower left of your screen.
1. Then press `Accounts`{.action} in the **Settings** menu.
1. Select the account.
1. Press `Delete Account`{.action}.

![outlook ios](images/outlook-app-ios-modify-01.png){.thumbnail .h-500}


## Go further <a name="go-further"></a>

> [!primary]
>
> For more information about configuring an email address from the Outlook application on iOS, see the [Microsoft Help Center](https://support.microsoft.com/en-gb/office/configurer-l-application-outlook-pour-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
