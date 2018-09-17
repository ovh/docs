---
title: 'Configuring your Email Pro account in the Mail application for Windows 10'
slug: mail-configuration-windows-10
excerpt: 'Find out how to configure an Email Pro account on the Mail application for Windows 10'
section: 'Email client configuration'
order: 7
---

**Last updated 4th April 2018**

## Objective

You can configure Email Pro accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application.

**Find out how to configure an Email Pro account in the Mail application for Windows 10.**

## Requirements

- You must have an [Email Pro](https://www.ovh.co.uk/emails/email-pro/){.external} account.
- You need to have the Mail application installed on your device.
- You need to have the required credentials for the email address you would like to configure.

## Instructions

### Step 1: Add the account

Once you have launched Mail on your device, you can add an account in two different ways:

- **When you open the app for the first time**: A window will appear, asking you to `Add an account`{.action}.

- **If an account has already been set up**: Click on `Accounts`{.action} in the menu bar to the left of the application, then on `Add account`{.action} in the menu that pops up on the right.

![emailpro](images/configuration-mail-windows-step1.png){.thumbnail}

In the window that appears, click on `Advanced settings`{.action}, then select `Internet email`{.action} as the account type.

Enter the information requested:

|Information|Description|
|---|---|
|Mail address|Enter your full email address.|
|Username|Enter your full email address.|
|Password|Enter the password for your email address.|
|User name|Enter a name that will distinguish this account from any other accounts added in your Mail application.|
|Send your messages using this name|Enter the sender name that you wish to be displayed when sending emails from this address.|
|Incoming email server|Enter the server “pro1.mail.ovh.net:993”.|
|Account type|We recommend using **IMAP4**. You can however also select **POP** (in which emails are stored locally on your Mail app) in the drop-down menu.|
|Outgoing email server|Enter the server “pro1.mail.ovh.net:587”.|

Make sure that the checkboxes are ticked for the following options:

- Outgoing server requires authentication
- Use the same user name and password for sending mail
- Require SSL for incoming email
- Require SSL for outgoing mail

Once you have entered this information, click `Sign in`{.action}. If the information is correct, Outlook will successfully connect to the account.

To check that the account has been configured correctly, you can send a test email.

![emailpro](images/configuration-mail-windows-step2.png){.thumbnail}

If you need to enter any settings manually in your account preferences, the technical settings you will need to use with our Email Pro solution are listed below:

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|pro1.mail.ovh.net|Yes|993|
|Outgoing|pro1.mail.ovh.net|Yes|587|

### Step 2: Use the email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVH also offers a web application that includes various [collaborative features](https://www.ovh.co.uk/emails/){.external}. You can access this application at <https://www.ovh.co.uk/mail/>. Log in using your email credentials.

## Go further

[Configuring an email address included in an MX Plan package or web hosting plan in the Mail application for Windows 10](https://docs.ovh.com/gb/en/emails/mail-configuration-windows-10/){.external}

[Configuring your Exchange account in the Mail app for Windows 10](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/mail-configuration-windows-10/){.external}

Join our community of users on <https://community.ovh.com/en/>.