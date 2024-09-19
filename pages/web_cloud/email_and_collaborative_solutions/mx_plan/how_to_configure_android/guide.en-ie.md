---
title: "MX Plan - Configuring an email address in Gmail for Android"
excerpt: "Find out how to configure an MX Plan email address on Android, via the Gmail app"
updated: 2023-12-15
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Objective

You can configure MX Plan email addresses on email clients, if they are compatible. By doing so, you can use your email address through your preferred device. In this guide, we will detail the process of configuring an MXplan email address in the Gmail application on Android devices.

**Find out how to configure an MX Plan email address on Android, via the Gmail app.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-ie/directory/) and/or the service’s publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.

## Requirements

- an MX Plan email address (included in the MX Plan solution, or in an [OVHcloud web hosting plan](/links/web/hosting)).
- You need to have the Gmail app installed on your device. You can install it from the Google Play Store if it is not already present.
- the required credentials for the email address you would like to configure

> [!primary]
>
> This guide was written using a device that uses Android version 13.
>

## Instructions

### How to add your email account

On your device’s homepage, open the `Gmail`{.action} app.

![mxplan](images/mxplan-android-00.png){.thumbnail .w-400}

Adding an account will be done differently **if no account is set** up, or **if an account has already been set up**. Select the tab corresponding to one of the two situations mentioned:

> [!tabs]
> **First configuration**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-first.png){.thumbnail}|Select `Add Email Address`{.action}|
>>
> **Existing configuration**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-existing.png){.thumbnail}|1. Go to the menu at the top left of the screen<br><br>2.Select `Settings`{.action}<br><br>3.Select `Add Account`{.action}|
>>

Follow the next steps in the configuration process by browsing the tabs below:

> [!tabs]
> **Step 1**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-01.png){.thumbnail}|From the menu of email account types, select `Other`{.action}.|
>>
> **Step 2**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-02.png){.thumbnail}|Enter your email address.|
>>
> **Step 3**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-03.png){.thumbnail}|Select the protocol for receiving emails. We recommend selecting `Personal (IMAP)`{.action}<br><br>You can find [more details on POP and IMAP](#popimap) protocols at the end of this guide to understand their differences.|
>>
> **Step 4**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-04.png){.thumbnail}|Enter the password for your email address. |
>>
> **Step 5**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-05.png){.thumbnail}|Complete the "**Incoming server settings**"<br><br>- **Username**: Your full email address<br>- **Password**: Your email password<br>- **Server**: enter **ssl0.ovh.net** |
>>
> **Step 6**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-06.png){.thumbnail}|Complete the "**Outgoing server settings**"<br><br>- **Username**: Your full email address<br>- **Password**: Your email password<br>- **SMTP server**: enter **ssl0.ovh.net** |
>>
> **Step 7**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-07.png){.thumbnail}|Choose how often you want your emails to be synchronized.|
>>
> **Step 8**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-08.png){.thumbnail}|Determine the display name of your email address in the Gmail app, then tap `Next`{.action}|
>>

Once you have configured your email address, you can start using it! You can now send and receive messages from your Gmail application.

> [!success]
>
> OVHcloud offers a web application that allows you to access your email address from a web browser, at [Webmail](/links/web/email). You can log in using your email credentials.

### POP, IMAP and SMTP settings

When you choose your account type, we recommend using **IMAP** to receive emails. However, you can select **POP**. To understand how they work, please refer to our section [“POP or IMAP, what is the difference?”](#popimap)

- **For POP configuration**

|Information|Description|
|---|---|
|Username|Enter the **full email address**|
|Password|Enter the password for the email address|
|POP server|ssl0.ovh.net|
|Port|995|
|Security type|SSL/TLS|

- **For IMAP configuration**

|Information|Description|
|---|---|
|Username|Enter the **full email address**|
|Password|Enter the password for the email address|
|POP server|ssl0.ovh.net|
|Port|993|
|Security type|SSL/TLS|

For sending emails, if you need to enter the **SMTP** settings manually in your account preferences, you will find the settings below:

- **SMTP configuration**

|Information|Description|
|---|---|
|Username|Enter the **full email address**|
|Password|Enter the password for the email address|
|POP server|ssl0.ovh.net|
|Port|465|
|Security type|SSL/TLS|

### POP or IMAP, what's the difference? <a name="popimap"></a>

When you set up your email address manually, your email client asks if you want to use **POP** (**P**ost **O**ffice **P**rotocol) or **IMAP** (**I**nternet **M**essage **A**ccess **P**rotocol). To understand this properly, you will need to configure your email address to include POP and IMAP protocols.

When you configure your mail client, you must enter the information from the **incoming server** to receive the emails, and the **outgoing server** to send the emails. To send emails, there is no choice, the **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) is used. For the reception, you will have the choice between **POP** or **IMAP**.

![mxplan](images/mxplan-android-popimap-01.png){.thumbnail}

To understand the difference between POP and IMAP, we will break down the elements that make up the processing of your incoming emails:

1. **Your device**: a computer, smartphone or tablet. This is your consultation support.

2. **Your email client**: software or application dedicated to managing your emails. Your choice will determine the level of usability and functionality you will need to view your emails.

3. **The receiving protocol**: a choice that determines how you check emails on your device. This affects other devices that access the same email account.
    - **IMAP**: Your email client queries the email server and downloads the emails to your device. When you view an unread email, the server marks it as “read” by default. Other devices configured in IMAP will be able to check this status and view this email until it has been deleted on one of the devices.
    - **POP**: Your email client requests the email server and downloads the emails to your device. By default, once the email is downloaded to your device, the message is deleted from the server. As a result, other devices connected to this email address will not be able to view this email.

![mxplan](images/mxplan-android-popimap-02.png){.thumbnail}

> [!primary]
>
> This description is a summary, it represents the standard operation of these two protocols. You can configure the POP so that emails are not deleted when you check your emails. The goal here is to describe how these two protocols work natively and avoid any additional steps to match your needs.

## Go further

[Configuring an Email Pro account on Android via the Gmail app](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android)

[Configuring an Exchange account on Android via the Gmail app](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android)

Join our community of users on <https://community.ovh.com/en/>.