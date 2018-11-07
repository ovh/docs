---
title: Configuring an email address on the macOS Mail app
slug: guide-configuring-mail-on-macos
excerpt: Find out how to configure an MX Plan email address on the Mail app, for the following macOS operating systems - El Capitan, Sierra and High Sierra
section: Configure on computer
order: 3
---

**Last updated 16th February 2018**

## Objective

You can configure MX Plan email addresses on a range of email clients, provided they are compatible. This way, you can use your new email address through your preferred email application.

**Find out how to configure an MX Plan email address on the Mail app, for the following macOS operating systems: El Capitan, Sierra and High Sierra.**

## Requirements

- You need to have an MX Plan email address (included in the MX Plan solution and in [OVH web hosting plans](https://www.ovh.co.uk/web-hosting/){.external}).
- You need to have the Mail app installed on your device.
- You need to have the appropriate credentials for the email address you would like to configure.

> [!primary]
>
> This guide can be used for the following macOS versions: El Capitan, Sierra, High Sierra.
>

## Instructions

There are two ways of adding your email address to the Mail app:

- **Using our Apple Devices tool:** Click on the following link and follow the configuration steps: <https://autodiscover.mail.ovh.net/AppleDevices/>

- **Using the Mail app configuration assistant:** Launch the Mail app on your device.

From this point onwards, this guide will only cover configuration using the Mail app.

### Step 1: Add the account

Once you have launched the Mail app on your device, you can add an account in two different ways:

- **When you open the app for the first time:** A window will appear, asking you to select a service provider for your Mail account. Select `Other Mail account`{.action}, then continue.

- **If you have already added an account:** Click `Mail`{.action} at the top of your screen, then `Add account`{.action}. Select `Other Mail account`{.action}, then continue.

![mxplan](images/configuration-mail-macos-step1.png){.thumbnail}

Enter your account information:

|Information|Description|
|---|---|
|Name|Enter the sender name that you wish to be displayed when sending emails from this address.|
|Email address|Enter your full email address.|
|Password|Enter your email address' password.|

Click on the `Log in`{.action} button. A message will appear, prompting you to continue. You should then enter the following information:

|Information|Description|
|---|---|
|Account type|We recommend using **IMAP** (selected by default). You can also select **POP** (in which your emails will be stored locally, on your Mail app) in the drop-down menu.|
|Incoming server|Enter the following server: ssl0.ovh.net.|
|Outgoing server|Enter the following server: ssl0.ovh.net.|

Click again on the `Log in`{.action} button. If all the information you have entered is correct, you will be able to log in to your account straight away.

![mxplan](images/configuration-mail-macos-step2.png){.thumbnail}

When you are asked to select the apps you want to use with your account, ensure that `Mail`{.action} is ticked, so the application will work correctly with your email address. You should then click `Done`{.action}.

To check that the account has been correctly configured, you can send a test email.

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

### Step 2: Start using your email address

Once you have configured your email address, you can start using it to send and receive emails straight away!

OVH also has a web application you can use to access your email account via your browser. You can access the application at the following address, using your email credentials: <https://www.ovh.co.uk/mail/>.

## Go further

[Configuring your Email Pro account on the macOS Mail app](https://docs.ovh.com/gb/en/emails-pro/configuring-email-pro-macos-mail/){.external}.

[Configuring your Exchange account on the macOS Mail app](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-automatic-configuration-on-mail-mac/){.external}.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.