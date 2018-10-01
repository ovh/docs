---
title: Configuring an Email Pro account on iPhone and iPad
slug: iphone-configuration
excerpt: Find out how to configure an Email Pro account on iPhone and iPad, via the Mail app
section: Email client configuration
order: 3
---

**Last updated 21st February 2018**

## Objective

You can configure Email Pro accounts on a range of email clients, provided they are compatible. This way, you can use your new email address through your preferred email application.

**Find out how to configure an Email Pro account on iPhone and iPad, via the Mail app.**

## Requirements

- You must have an [Email Pro](https://www.ovh.co.uk/emails/email-pro/){.external} solution.
- You need to have the Mail app installed on your device.
- You need to have the appropriate credentials for the email address you would like to configure.

> [!primary]
>
> This guide can be used for the following iOS versions: iOS 7 or later.
>

## Instructions

There are two ways of adding your email address to the Mail app:

- **Via our Apple Devices tool:** Tap on the following link and follow the configuration steps:  <https://autodiscover.mail.ovh.net/AppleDevices/>

- **You can also follow your device’s configuration assistant**.

From this point onwards, this guide will only cover email configuration using your device.

### Step 1: Add the account

On your device’s homepage, go to `Settings`{.action}. There are two ways of adding an account, depending on the iOS version you are using:

- **For iOS 7, 8, 9 and 10:** Go to `Mail, Contacts, Calendar`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add a Mail account`{.action}.

- **For iOS 11:** Go to `Accounts and passwords`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add a Mail account`{.action}.

![emailpro](images/configuration-mail-ios-step1.png){.thumbnail}

Enter your account information:

|Information|Description|
|---|---|
|Name|Enter the sender name that you wish to be displayed when sending emails from this address.|
|Email address|Enter your full email address.|
|Password|Enter your email address' password.|
|Description|Enter a name that will distinguish this account from any other accounts added in your Mail app.|

Tap `Next`{.action}, and enter the information requested:

|Information|Description|
|---|---|
|IMAP or POP|Leave **IMAP** selected by default.|
|Host name (incoming)|Enter the following server: pro1.mail.ovh.net.|
|Username (incoming)|Enter your full email address.|
|Password (incoming)|Enter your email address' password.|  
|Host name (outgoing)|Enter the following server: pro1.mail.ovh.net|
|Username (outgoing)|Enter your full email address.|
|Password (outgoing)|Enter your email address' password.|

Then tap `Next`{.action}. If all the information you have entered is correct, you will be able to log in to your account straight away.

![emailpro](images/configuration-mail-ios-step2.png){.thumbnail}

When you are asked to select the apps you want to use with your account, ensure that `Mail`{.action} is ticked, so the application will work correctly with your email address. You should then tap `Save`{.action}.

To check that the account has been correctly configured, you can send a test email.

If you need to enter any settings manually in your account preferences, the technical settings you will need to use with our Email Pro solution are listed below:

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|pro1.mail.ovh.net|Yes|993|
|Outgoing|pro1.mail.ovh.net|Yes|587|

### Step 2: Use the email address

Once you have configured your email address, you can start using it to send and receive emails straight away!

OVH also offers a web application that includes various [collaborative features](https://www.ovh.co.uk/emails/){.external}. You can access it here, using your email credentials: <https://pro1.mail.ovh.net>.

## Go further

[Configuring an email address on iPhone and iPad](https://docs.ovh.com/gb/en/emails/email_hosting_iphone_ios_91_configuration/){.external}.

[Configuring an Exchange account on iPhone and iPad](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2013_how_to_configure_on_ios_iphoneipad/){.external}.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.