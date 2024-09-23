---
title: "Exchange - Configure an email address in Gmail for Android"
excerpt: "Find out how to configure an Exchange account on Android, via the Gmail app"
updated: 2024-03-20
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objective

Email accounts of the Exchange solution can be configured on various compatible email clients. By doing so, you can use your email account on your preferred device. In this guide, you can find out how to configure an Exchange email account via the Gmail app on Android devices.

**This guide explains how to configure an Exchange account on Android, via the Gmail app.**

> [!warning]
> This tutorial will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.
>
> If you experience any difficulties carrying out these operations, we recommend that you contact a specialist service provider and/or discuss the issue with our community. OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- You have an [OVHcloud Exchange](/links/web/emails) solution.
- You have the Gmail app installed on your device. You can install the app from the Google Play Store.
- You have the login credentials for the Exchange account to be configured.

> [!primary]
>
> The instructions in this guide are based on a device that uses Android version 13.
>

## Instructions

### How to add your email account <a name="addaccount"></a>

> [!primary]
>
> In our examples, we use the server name "ex**?**.mail.ovh.ca". You will need to replace the “?” with the number designating the server of your Exchange service.
>
> You can find this number in the [OVHcloud Control Panel](/links/manager). In the `Web Cloud`{.action} section, open `Microsoft`{.action} and then `Exchange`{.action}. The server name is visible in the **Connection** box in the `General Information`{.action} tab.
>

On your device’s homepage, open the `Gmail`{.action} app.

![Android Exchange](images/exchange-android-00.png){.thumbnail .w-400}

Adding an account will be done differently **if no account is set up**, or **if an account has already been set up**. Select the tab corresponding to one of the two situations mentioned:

> [!tabs]
> **First configuration**
>>
>> Select `Add email address`{.action}.<br><br>
>> ![Android Exchange](images/android-first.png){.thumbnail .h-600}
>>
> **Existing configuration**
>>
>> 1. Go to the menu at the top left of the screen.<br><br>
>> 2. Select `Settings`{.action}.<br><br>
>> 3. Select `Add Account`{.action}.<br><br>
>> ![Android Exchange](images/android-existing.png){.thumbnail}
>>

Follow the next steps in the configuration process by clicking on the tabs below:

> [!tabs]
> **Step 1**
>> From the menu of email account types, select `Exchange and Office`{.action}.<br><br>
>> ![Android Exchange](images/exchange-android-01.png){.thumbnail .h-600}
>>
> **Step 2**
>> Enter your email address, then tap `Next`{.action}.<br><br>
>> ![Android Exchange](images/exchange-android-02.png){.thumbnail .h-600}
>>
> **Step 4**
>> Enter the password for your email account, then tap `Next`{.action}.<br><br>
>> ![Android Exchange](images/exchange-android-03.png){.thumbnail .h-600}
>>
> **Step 5**
>> Complete the "**Address configuration**" page.<br><br>- **Email**: Your full email address<br>- **Password**: Your email password<br>- **Certificate**: Leave "None"<br>- **Domain\Username**: Your full email address<br>- **Server**: **ex?.mail.ovh.ca** (replace the **?** by [your Exchange server number](#addaccount))<br>- **Port**: 443<br>- **Security type**: SSL/TLS<br><br>Press `Next`{.action} to confirm the configuration.<br><br>
>> ![Android Exchange](images/exchange-android-04.png){.thumbnail .h-600}
>>
> **Step 6**
>> The message "You can now use your account" should appear. Tap `OK`{.action} to finish configuring your account.<br><br>
>> ![Android Exchange](images/exchange-android-05.png){.thumbnail .h-600}
>>

Once you have configured your email account, you can start using it! You can now send and receive messages from your Gmail application.

> [!success]
>
> OVHcloud offers a web application that allows you to access your email account from a web browser, at [Webmail](/links/web/email). You can log in using your email account credentials.

## Go further <a name="go-further"></a>

[MX Plan - Configuring an email address in Gmail for Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).

[Email Pro - Configuring an email address in Gmail for Android](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android).

Join our community of users on <https://community.ovh.com/en/>.
