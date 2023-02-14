---
title: 'Configuring an Email Pro account on iPhone and iPad'
slug: iphone-configuration
excerpt: 'Find out how to configure an Email Pro account on iPhone and iPad, via the Mail app'
section: 'Email client configuration'
order: 6
---


**Last updated 21st May 2021**

## Objective

You can configure Email Pro accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application.

**This guide explains how to configure an Email Pro account on iPhone and iPad, via the Mail app.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en-ie/directory/) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- an [OVHcloud Email Pro account](https://www.ovhcloud.com/en-ie/emails/email-pro/){.external}
- the Mail app installed on your iOS device
- login credentials for the email account to be configured

## Instructions

### Adding an account <a name="addaccount"></a>

> [!primary]
>
> In this guide, we will use as the server name: "pro**?**.mail.ovh.net". You will need to replace the "?" with the actual number indicating the appropriate server for your Email Pro service.
> 
> You can find this information in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie), in the `Web Cloud`{.action} section, if you select `Professional Email`{.action}. The server name is displayed in the **Connection** box in the `General Information`{.action} tab.
>

On your device’s home screen, go to `Settings`{.action} (cogwheel icon). There are several ways you can add an account, depending on your iOS version:

- **For iOS 7, 8, 9 and 10**: Go to `Mail, Contacts, Calendar`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the table below.

- **For iOS 11**: Go to `Accounts and passwords`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the table below.

- **For current** versions: follow the instructions in the table below.

| | |
|---|---|
|![iPhone](images/configuration-mail-ios-step01.gif){.thumbnail}|1. In `Settings`, go to `Mail`. <br><br> 2. Tap `Accounts`.<br><br> 3. Tap `Add Account`.<br><br> 4. Choose `Other` at the bottom.|
|5. Tap `Add Mail Account`.<br><br>6. Enter your **name**, **email** address, **password** and account **description**.<br><br>7. Press `Next`.|![iPhone](images/configuration-mailpro-ios-step02.png){.thumbnail}|
|![iPhone](images/configuration-mailpro-ios-step03.png){.thumbnail}|8. Select `IMAP` (recommended) or `POP`.<br><br>In the `INCOMING MAIL SERVER` and `OUTGOING MAIL SERVER` sections, despite the word `optional`, enter: <br>- the host name **pro?.mail.ovh.net** (replace **?** by [your Email Pro server number](#addaccount)) <br>- your **full email address** as username <br>- your email password|

At the end of the configuration process, ensure that you leave `Mail`{.action} activated, so that the application can use this account, then click `Save`{.action}.

To check that the account has been correctly configured, you can send a test email.

If you need to enter any settings manually in your account preferences, the technical settings you will need to use with our Email Pro solution are listed below:

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|pro**?**.mail.ovh.net|Yes|993|
|Outgoing|pro**?**.mail.ovh.net|Yes|587|

### Using your email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also offers a web application that includes [collaborative features](https://www.ovhcloud.com/en-ie/emails/){.external}, accessible via <https://www.ovh.ie/mail/>. You can log in using your email credentials.

> [!primary]
>
> If you experience any difficulties receiving or sending emails, please read our [FAQ about OVHcloud email services](../../emails/emails-faq/).
>

## Go further

[Configuring a Web Hosting email address on iPhone and iPad](../../emails/email_hosting_iphone_ios_91_configuration/)

[Configuring an Exchange account on iPhone and iPad](../../microsoft-collaborative-solutions/exchange_2013_how_to_configure_on_ios_iphoneipad/)

[Email FAQ](../../emails/emails-faq/)

Join our community of users on <https://community.ovh.com/en/>.
