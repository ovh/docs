---
title: "Zimbra Pro - Configuring your email account via EWS in Mail on Mac"
excerpt: "Find out how to configure your Zimbra Pro email address on the Mail app on Mac via the EWS protocol"
updated: 2025-07-03
---

<style>
.h-500 {
  max-height:500px !important;
}
</style>

## Objective

> [!primary]
> This guide is aimed at customers with the email solution [Zimbra Pro](/links/web/emails-zimbra). This service will be available in beta version from July 2025.

Zimbra Pro accounts can be configured on a macOS using EWS protocol (**E**xchange **W**eb **S**ervices). This allows you to configure all the collaborative features of your email address at once. The Mail application is available natively on macOS.

**Find out how to configure your Zimbra Pro email address on the Mail app on Mac via the EWS protocol.**

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or the software publisher if you encounter any difficulties. OVHcloud cannot provide you with technical support in this regard. You can find more information in the "[Go further](#go-further)" section of this guide.
>

## Requirements

- A [Zimbra Pro](/links/web/emails-zimbra) account
- The Mail app installed on your device
- The login details for the email account you would like to configure

## Instructions

### Add the <a name="add-account"></a> account

- **When you start the Mail application for the first time**, a configuration wizard will appear, prompting you to choose your account type.

- **If an account is already set up on the Mail app**:
- Click `Mail`{.action} in the menu bar at the top of your screen.
- Click `Accounts`{.action}.
- In the “Internet accounts” window that pops up, click `Add an account`{.action}

![mail macOS](images/mail-macos-add-step00.png){.thumbnail .h-500}

Follow the installation steps by clicking on the **3** tabs below:

> [!tabs]
> **Step 1**
>>
>> - Select `Microsoft Exchange`{.action}.
>> - Define a **name** and enter your **email address**.
>> - Then click `Log in`{.action}.
>>
>> ![mail macos](images/mail-macos-add-step01.png){.thumbnail .h-500}
>>
> **Step 2**
>>
>> - Choose `Configure Manually`{.action} from the window that appears.
>> - Then enter the **password** of your email address in addition to the information already entered.
>>
>> ![mail macos](images/mail-macos-add-step02.png){.thumbnail .h-500}
>>
> **Step 3**
>>
>> Check and complete the following information:
>>
>> - **Email address**: Enter your full email address.
>> - **Username**: Enter your full email address.
>> - **Password**: Enter the password associated with your email address.
>> - **Internal URL**: Enter “zimbra1.mail.ovh.net”.
>> - **External URL**: Enter "zimbra1.mail.ovh.net".
>>
>> To finalize the configuration, click `Log in`{.action} and select the features you want to use on your Mac.
>>
>> ![mail macos](images/mail-macos-add-step04.png){.thumbnail .h-500}
>>
>> > [!warning]
>>>
>>> It is normal to see the message in red “**Unable to verify account name or password**” when the window is first displayed. However, if this message persists after validation, it means that the information entered is incorrect.

> [!warning]
>
> If you encounter a sending or receiving error after following the configuration steps above, please refer to the “[Modify existing settings](#modify-settings)” section of this guide.

### Use the email address

Once you have configured your email address, you can start using it! You can now send and receive messages, and manage your calendars and tasks.

OVHcloud also offers a web application that allows you to access your email address from an internet browser. You can log in to the [OVHcloud webmail](/links/web/email) using your email credentials. If you have any questions on how to use it, please read our guide on [Using Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### How do I modify existing settings? <a name="modify-settings"></a>

You cannot change the server settings of an Exchange email account using the Mail app on Mac.

If your email account is already configured and you want to change its settings, you will need to delete and recreate it.

To delete an Exchange email account, follow the instructions below:

1. Click `Mail`{.action} in the menu bar at the top of your screen.
1. Click `Accounts`{.action} and select the email account concerned.
1. Press `Delete Account`{.action}.

![mail macos](images/mail-macos-modify-delete-01.png){.thumbnail .h-500}

> [!success]
>
> Once you have deleted your email account, follow the installation steps listed in the “[Add account](#add-account)” section of this guide.

## Go further <a name="go-further"></a>

> [!primary]
>
> For more information on configuring an email address from the Mail app on macOS, see the [Apple Help Center](https://support.apple.com/en-gb/102619).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
