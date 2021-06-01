---
title: 'Configuring an Email Pro account on iPhone and iPad'
slug: iphone-configuration
routes:
    canonical: 'https://docs.ovh.com/gb/en/emails/email_hosting_iphone_ios_91_configuration/'
excerpt: 'Find out how to configure an Email Pro account on iPhone and iPad, via the Mail app'
section: 'Email client configuration'
order: 6
---


**Last updated 21/05/2020**

## Objective

You can configure Email Pro accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application.

**Find out how to configure an Email Pro account on iPhone and iPad, via the Mail app.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Requirements

- an Email Pro [account](https://www.ovh.com/fr/emails/email-pro/){.external}
- You need to have the Mail app installed on your iOS device.
- the required credentials for the email address you would like to configure

## Instructions

### Step 1: Add the account

> [!primary]
>
> In our example, we use the server comment: pro**?*.mail.ovh.net. You will need to replace the “? `by the number designating the server for your Email Pro service.
>
> You can find this figure in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), in the `Web Cloud`{.action} section, then `Email Pro`{.action} in the left-hand column. The server name is visible in the **Connection** box on the `General`{.action} Information tab.
>

On your device’s homepage, go to `Settings`{.action} (cogwheel icon). There are several ways you can add an account, depending on your iOS version:

- **For iOS 7, 8, 9 and 10**: Go to `Mail, Contacts, Calendar`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the following table.

- **For iOS 11**: Go to `Accounts and passwords`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the following table.

- **For current** versions: follow the instructions in the following table.

| | |
|---|---|
|![Exchange](images/configuration-mail-ios-step01.gif){.thumbnail}|1. In `Settings`, go to `Mail`. <br><br> 2. Tap `Accounts`.<br><br> 3. Tap `Add Account`.<br><br> 4. Choose `Other` at the bottom.|
|5. Tap `Add Mail` Account.<br><br>6. Enter your **name**, **email** address, **password** and account **description**.<br><br>7. Press `Next`.|![Exchange](images/configuration-mailpro-ios-step02.png){.thumbnail}|
|![Exchange](images/configuration-mailpro-ios-step03.png){.thumbnail}|8. Select the type of `IMAP` (recommended) or `POP` Listener.<br><br>In the `RECEIVING` SERVER and SENDING `SERVER` sections, despite the word `optional`, enter: <br>- the host name **pro?.mail.ovh.net** ( replace **?** by your Email Pro server number) <br>- your **full email address** in username <br>- your email password|

At the end of the configuration process, ensure that you leave `Mail`{.action} ticked, so that the application can use this account, then click `Save`{.action}.

To check that the account has been correctly configured, you can send a test email.

If you need to enter any settings manually in your account preferences, the technical settings you will need to use with our Email Pro solution are listed below:

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|pro**?**.mail.ovh.net|Yes|993|
|Outgoing|pro**?**.mail.ovh.net|Yes|587|

### Use email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also offers a web application that has [collaborative features](https://www.ovh.co.uk/emails/){.external} , accessible via <https://www.ovh.co.uk/mail/>. You can log in using your email credentials.

> [!primary]
>
> If you experience any difficulties receiving or sending emails, please read our [FAQ on OVHcloud](https://docs.ovh.com/gb/en/emails/emails-faq/) email services.
>

## Go further

[Email Hosting - iPhone IOS 9.1 configuration](https://docs.ovh.com/gb/en/emails/email_hosting_iphone_ios_91_configuration/)

[Exchange 2013: How to configure on iOS (iPhone/iPad)](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2013_how_to_configure_on_ios_iphoneipad/)

[Email FAQ](https://docs.ovh.com/gb/en/emails/emails-faq/)

Join our community of users on <https://community.ovh.com/en/>.