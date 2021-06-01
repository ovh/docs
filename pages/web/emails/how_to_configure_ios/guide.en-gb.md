---
title: Configuring an email address on iPhone and iPad
slug: email_hosting_iphone_ios_91_configuration
excerpt: Find out how to configure an MX Plan email address on iPhone and iPad
section: Configure on smartphone
order: 1
---

**Last updated 21/05/2021**

## Objective

You can configure MX Plan email addresses on email clients and applications, if they are compatible. By doing so, you can use your email address through your preferred device.

**Find out how to configure an MX Plan email address on iPhone and iPad, via the Mail app.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Requirements

- an MX Plan email address (included in the MX Plan solution and in OVHcloud web [hosting plans](https://www.ovh.co.uk/web-hosting/){.external})
- You need to have the Mail app installed on your iOS device.
- the required credentials for the email address you would like to configure

## Instructions

### Add account

On your device’s homepage, go to `Settings`{.action} (cogwheel icon). There are several ways you can add an account, depending on your iOS version:

- **For iOS 7, 8, 9 and 10**: Go to `Mail, Contacts, Calendar`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the following table.

- **For iOS 11**: Go to `Accounts and passwords`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the following table.

- **For current** versions: follow the instructions in the following table.

| | |
|---|---|
|![Exchange](images/configuration-mail-ios-step01.gif){.thumbnail}|1. In `Settings`, go to `Mail`. <br><br> 2. Tap `Accounts`.<br><br> 3. Tap `Add Account`.<br><br> 4. Choose `Other` at the bottom.|
|5. Tap `Add Mail Account`.<br><br>6. Enter your **name**, **email** address, **password** and account **description**.<br><br>7. Press `Next`.|![Exchange](images/configuration-mail-ios-step02.png){.thumbnail}|
|![Exchange](images/configuration-mail-ios-step03.png){.thumbnail}|8. Select the type of `IMAP` (recommended) or `POP` Listener.<br><br>In the `INCOMING MAIL SERVER` and `OUTGOING MAIL SERVER` sections, despite the word "optional", enter: <br>- the host name **ssl0.ovh.net** <br>- your **full email address** in username <br>- your email password|

At the end of the configuration process, ensure that you leave `Mail`{.action} ticked, so that the application can use this account, then click `Save`{.action}.

To check that the account has been correctly configured, you can send a test email using the Mail app on your device.

If you need to enter any settings manually in your account preferences, the technical settings you will need to use with our MX Plan solution are listed below:

- **for IMAP configuration**

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|ssl0.ovh.net|Yes|993|
|Outgoing|ssl0.ovh.net|Yes|465|

- **for POP configuration**

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|ssl0.ovh.net|Yes|995|
|Outgoing|ssl0.ovh.net|Yes|465|

### Use email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud has a web application you can use to access your email address from your browser, via the following address <https://www.ovh.co.uk/mail/>. You can log in using your email credentials.

> [!primary]
>
> If you experience any difficulties receiving or sending emails, please read our [FAQ on OVHcloud](https://docs.ovh.com/gb/en/emails/emails-faq/) email services.
>

## Go further

[Exchange 2013: How to configure on iOS (iPhone/iPad)](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2013_how_to_configure_on_ios_iphoneipad/){.external}.

[Configuring an Email Pro solution on iPhone and iPad](https://docs.ovh.com/gb/en/emails-pro/iphone-configuration/){.external}.

[Email FAQ](https://docs.ovh.com/gb/en/emails/emails-faq/)

Join our community of users on <https://community.ovh.com>.