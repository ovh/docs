---
title: "Zimbra Pro - Configuring your email account via ActiveSync on Outlook for Android"
excerpt: "Find out how to configure your Zimbra Pro email address on the Outlook for Android mobile application via the ActiveSync protocol"
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

Zimbra Pro accounts can be configured on an Android mobile using the ActiveSync protocol. This allows you to configure all the collaborative features of your email address at once. The Outlook app from Microsoft on Android is available for free from the Google Play Store.

**Find out how to configure your Zimbra Pro email address on the Outlook for Android mobile app via the ActiveSync protocol.**

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or the software publisher if you encounter any difficulties. OVHcloud cannot provide you with technical support in this regard. You can find more information in the "[Go further](#go-further)" section of this guide.
> 

## Requirements

- A [Zimbra Pro](/links/web/emails-zimbra) account
- [Outlook for Android](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=en) installed on your device
- The login details for the email account you would like to configure

> [!primary]
>
> This guide has been written using a device that uses Android version 14.

## Instructions

### Add the <a name="add-account"></a> account

- **When you start the Outlook application for the first time**, a configuration wizard will appear:
    - Press `Add Account`{.action}.

  ![outlook android](images/outlook-app-android-add01.png){.thumbnail .h-500}

- **If an account is already set up on the Outlook application**:
    - Press the envelope (`✉`{.action}) in the upper left of your screen.
    - Then press the `+`{.action} button in the left-hand vertical bar.
    - Press `Add Account`{.action}.

  ![outlook android](images/outlook-app-android-add02.png){.thumbnail .h-500}

Follow the installation steps by clicking on the **3** tabs below:

> [!tabs]
> **Step 1**
>>
>> Enter your email address and press `Continue`{.action}.
>>
>> ![outlook android](images/outlook-app-android-add-step01.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> ![outlook android](images/zimbra-activesync-outlook-android03.png){.thumbnail .h-500}
>>
>> - Select **Exchange** from the list of account types.
>> - **Or**, if you get a window asking you to select the **IMAP** or **POP3** protocol, press either. In the next window, press the `?`{.action} button in the top right-hand corner of the screen, then choose `Change account provider`{.action}. Then select “Exchange”.
>>
>> ![outlook android](images/outlook-app-android-add-step021.png){.thumbnail .h-500}
>>
> **Step 3**
>>
>> In the next window, tick `Advanced settings`{.action} and enter the following information:
>>
>> - **Email address**: Enter your full email address.
>> - **Description**: Enter a name that can be used to identify this account among your other email accounts saved in Outlook.
>> - **Server**: Enter "zimbra1.mail.ovh.net".
>> - **Domain**: Leave this field blank.
>> - **Username**: Enter your full email address.
>>
>> To finalize the configuration, press the &#10003; button.
>>
>> ![outlook android](images/outlook-app-android-add-step03.png){.thumbnail .h-500}
>>

### Use the email address

Once you have configured your email address, you can start using it! You can now send and receive messages, and manage your calendars and tasks.

OVHcloud also offers a web application that allows you to access your email address from an internet browser. You can log in to the [OVHcloud webmail](/links/web/email) using your email credentials. If you have any questions on how to use it, please read our guide on [Using Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### How do I modify existing settings? <a name="modify-settings"></a>

The Outlook application does not allow you to modify the server settings of your email account.

If your email account is already configured and you want to change its settings, you will need to delete and recreate it:

1. Press the envelope (`✉`{.action}) in the upper left of your screen.
2. Tap the adjustment icon (`⛭`{.action}) at the bottom of the left column.
3. In the "General" section, press `Accounts` to view all of the email addresses configured on the application.

  ![outlook android](images/outlook-app-android-delete-account-01.png){.thumbnail .h-500}

4. Select the email account concerned.
5. Press `Delete Account`{.action}.
6. Press `Delete`{.action} when the question “Do you want to delete the account ?” appears.

  ![outlook android](images/outlook-app-android-delete-account-02.png){.thumbnail .h-500}

> [!success]
>
> Once you have deleted your email account, follow the installation steps listed in the “[Add account](#add-account)” section of this guide.

## Go further <a name="go-further"></a>

> [!primary]
>
> For more information about configuring an email address from the Outlook app on Android, see the [Microsoft Help Center](https://support.microsoft.com/en-gb/office/set-up-email-in-the-outlook-for-android-app-886db551-8dfa-4fd5-b835-f8e532091872).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
