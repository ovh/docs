---
title: 'Configuring your Email Pro account in Outlook 2016 for Windows'
slug: configuration-outlook-2016
excerpt: 'Find out how to configure your Email Pro account in Outlook 2016 for Windows'
section: 'Email client configuration'
order: 1
---

**Last updated 31st May 2018**

## Objective

You can configure Email Pro accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application.

**Find out how to configure your Email Pro account in Outlook 2016 for Windows.**

## Requirements

- You must have an [Email Pro](https://www.ovh.co.uk/emails/email-pro/){.external} solution.
- You must have Microsoft Outlook 2016 installed on your device.
- You need to have the required credentials for the email address you would like to configure.

> [!primary]
>
> Are you using Outlook 2016 for Mac? Consult our documentation: [Configuring your Email Pro account in Outlook 2016 for Mac](https://docs.ovh.com/gb/en/emails-pro/configuration-outlook-2016-mac/){.external}.
>

## Instructions

### Step 1: Add the account

Once you have launched the Outlook app on your device, you can add an account in two different ways:

- **When you start the application for the first time**: A setup wizard will appear and prompt you to enter your email address.

- **If you have already added an account:** Click `File`{.action} in the menu bar at the top of your screen, then `Add account`{.action}.

![emailpro](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Enter your email address, then click `Advanced options`{.action}. Tick the box that appears next to `Let me set up my account manually`{.action}, then click `Connection`{.action}. Select **IMAP** from the list of account types.

![emailpro](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Then fill in the information requested:

- **For incoming mail:**

|Information|Description|
|---|---|
|Server|Enter the server “pro1.mail.ovh.net”.|
|Port|Enter port “993”.|
|Encryption method|Select “SSL/TLS”.|
|Requiring authentication|Do not tick the “Require secure password authentication (SPA) on connection” box.|

- **For outgoing mail:**

|Information|Description|
|---|---|
|Server|Enter the server “pro1.mail.ovh.net”.|
|Port|Enter port “587”.|
|Encryption method|Select “STARTTLS”.|
|Requiring authentication|Do not tick the “Require secure password authentication (SPA) on connection” box.|

Once you have entered this information, click `Next`{.action} and enter your email address’ **password**. If all the information you have entered is correct, you will be able to log in to your account straight away.

To check that the account has been correctly configured, you can send a test email.

![emailpro](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

If you need to enter any settings manually in your account preferences, the technical settings you will need to use with our Email Pro solution are listed below:

|Server type|Server name|Encryption method|Port|
|---|---|---|---|
|Incoming|pro1.mail.ovh.net|SSL/TLS|993|
|Outgoing|pro1.mail.ovh.net|STARTTLS|587|

### Step 2: Use the email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVH also offers a web application that includes various [collaborative features](https://www.ovh.co.uk/emails/){.external},  accessible at <https://pro1.mail.ovh.net>. You can log in using your email credentials.

## Go further

[Configuring your email address included in the MX Plan package or in a Web Hosting solution in Outlook 2016 for Windows](https://docs.ovh.com/gb/en/emails/configuration-outlook-2016/){.external}

[Configuring your Exchange account in Outlook 2016 for Windows](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/configuration-outlook-2016/){.external}

Join our community of users on <https://community.ovh.com/en/>.