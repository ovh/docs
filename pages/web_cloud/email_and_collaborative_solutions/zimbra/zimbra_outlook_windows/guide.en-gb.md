---
title: "Zimbra Pro - Configuring your email account via ActiveSync in Outlook for Windows"
excerpt: "Find out how to configure your Zimbra Pro email address in Outlook for Windows using the ActiveSync protocol"
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

Zimbra Pro accounts can be configured on Windows using the ActiveSync protocol, allowing you to configure all the collaborative features of your email address at once. The Outlook application for Windows allows you to view your Zimbra Pro email account via the ActiveSync protocol.

**Find out how to configure your Zimbra Pro email address in Outlook for Windows using the ActiveSync protocol.**

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or the software publisher if you encounter any difficulties. OVHcloud cannot provide you with technical support in this regard. You can find more information in the "[Go further](#go-further)" section of this guide.
> 

## Requirements

- A [Zimbra Pro](/links/web/emails-zimbra) account
- [Outlook Classic](https://support.microsoft.com/en-gb/office/install-or-reinstall-classic-outlook-on-a-windows-pc-5c94902b-31a5-4274-abb0-b07f4661edf5) for Windows  installed on your device
- The login details for the email account you would like to configure

## Instructions

> [!warning]
>
> Before you begin configuring your account, it is important to note that the Outlook application included free with Windows 11 is incompatible with the ActiveSync protocol, which is required to configure a Zimbra Pro account. You will need to use the classic **Outlook** version to benefit from ActiveSync protocol support.
>
> To install Outlook Classic on your Windows computer, download it from the Microsoft page "[Install or reinstall Outlook Classic on a Windows PC](https://support.microsoft.com/en-gb/office/install-or-reinstall-classic-outlook-on-a-windows-pc-5c94902b-31a5-4274-abb0-b07f4661edf5)", and install it.
>
> Once the installation is complete, to distinguish between the two versions when they are installed, type "Outlook" in the Windows search bar. You can then see the difference as below.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Add the <a name="add-account"></a> account

To add a Zimbra Pro account on Outlook Classic, follow the steps below by clicking on the **7** tabs below:

> [!tabs]
> **Step 1**
>>
>> 1. Go to the Windows **control panel**.
>> 2. Click `User Accounts`{.action}.
>> 3. Click `Mail`{.action}.
>> 4. Click `Email accounts...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step01.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> - In the **Account settings** window, in the `Email` tab, click `New...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step02.png){.thumbnail .h-500}
>>
> **Step 3**
>>
>> - In the **Add an account** window, select `Manual configuration or additional server types`{.action}.
>> - Click `Next`{.action} to continue.
>>
>> ![outlook Windows](images/outlook-windows-add-step03.png){.thumbnail .h-500}
>>
> **Step 4**
>>
>> - Select `Exchange ActiveSync`{.action}.
>> - Click `Next`{.action} to continue.
>>
>> ![outlook Windows](images/outlook-windows-add-step04.png){.thumbnail .h-500}
>>
> **Step 5**
>>
>> Enter your account information:
>>
>> - **Your name**: Define a display name.
>> - **Email address**: Enter your full email address.
>> - **Mail server** : Enter "zimbra1.mail.ovh.net".
>> - **Username** : Enter your full email address.
>> - **Password**: Enter the password associated with your email address.
>>
>> Click `Next`{.action} to finish adding the account.
>>
>> ![outlook Windows](images/outlook-windows-add-step05.png){.thumbnail .h-500}
>>
> **Step 6**
>>
>> Your email address is now configured for Outlook. To fully synchronize the features of your Zimbra Pro account, **download and install** the [Zimbra Connector for Outlook module](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/).
>>
>> ![outlook Windows](images/outlook-windows-add-step06.png){.thumbnail .h-500}
>>
> **Step 7**
>>
>> Once you have installed the [Zimbra Connector for Outlook module](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/), launch Outlook Classic.    
>> The first time, the **Zimbra Server configuration Settings** configuration window appears. Enter the following information:
>>
>> - **Server name** : Enter "zimbra1.mail.ovh.net".
>> - **Email address**: Enter your full email address.
>> - **Password**: Enter the password associated with your email address.
>>
>> You do not need to change any other settings. Click `Apply`{.action} to validate the settings and ensure that they are compliant. Finally, click `OK`{.action} to go to Outlook and start using your email address.
>>
>> ![outlook Windows](images/outlook-windows-add-step-07.png){.thumbnail .h-500}

> [!warning]
>
> If you encounter a sending or receiving error after following the configuration steps above, please refer to the “[Modify existing settings](#modify-settings)” section of this guide.

### Use the email address

Once you have configured your email address, you can start using it! You can now send and receive messages, and manage your calendars and tasks.

OVHcloud also offers a web application that allows you to access your email address from an internet browser. You can log in to the [OVHcloud webmail](/links/web/email) using your email credentials. If you have any questions on how to use it, please read our guide on [Using Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### How do I modify existing settings? <a name="modify-settings"></a>

To modify the settings of an email account that has already been configured, follow the instructions below:

1. Go to the Windows **Control Panel**.
1. Click `User Accounts`{.action}.
1. Click `Mail`{.action}.
1. Click `Email accounts...`{.action}.
1. Select the email account concerned from the list and click `Modify...`{.action}.

![outlook ios](images/outlook-windows-modify-01.png){.thumbnail .h-500}

Find the settings in **Step 7** under [Add account](#add-account).

### How do I delete an email account? <a name="delete-account"></a>

To delete your email account, follow the instructions below:

1. Go to the Windows **Control Panel**.
1. Click `User Accounts`{.action}.
1. Click `Mail`{.action}.
1. Click `Email accounts...`{.action}.
1. Select the email account concerned from the list and click `Delete`{.action}.

![outlook ios](images/outlook-windows-delete-01.png){.thumbnail .h-500}

> [!warning]
>
> To delete your email account, it is necessary that it is not the default email account.

## Go further <a name="go-further"></a>

> [!primary]
>
> For more information about configuring an email address from the Outlook application on Windows, see [Microsoft Help Center](https://support.microsoft.com/en-gb/office/add-an-email-account-to-outlook-for-windows-6e27792a-9267-4aa4-8bb6-c84ef146101b?ocmsassetID=&CorrelationId=778d1d8d-9ac2-4449b-96292924_4b).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).