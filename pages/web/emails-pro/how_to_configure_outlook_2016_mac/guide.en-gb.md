---
title: 'Configuring your Email Pro account in Outlook 2016 for Mac'
slug: configuration-outlook-2016-mac
excerpt: 'Find out how to configure your Email Pro account in Outlook 2016 for Mac.'
section: 'Email client configuration'
order: 4
---

**Last updated 18th March 2020**

## Objective

You can configure Email Pro accounts on email clients, if they are compatible. By doing so, you can use your email address with your preferred email application.

**Find out how to configure your Email Pro account in Outlook 2016 for Mac.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Requirements

- You must have an [Email Pro](https://www.ovh.co.uk/emails/email-pro/){.external} solution.
- You must have Microsoft Outlook installed on your Mac.
- You need to have the required credentials for the email address you would like to configure.

> [!primary]
>
> Are you using Outlook 2016 for Windows? Read this guide: [Configuring your email address in Outlook 2016 for Windows](https://docs.ovh.com/gb/en/emails-pro/configuration-outlook-2016/).
>

## Instructions

### Step 1: Add the account

> [!primary]
>
> In this guide, we will use as the server name: pro**X**.mail.ovh.net. You will need to replace the "X" with the actual number indicating the appropriate server for your Email Pro service.
> 
> You can find this information in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager), in the `Web`{.action} section, if you select `Professional Email`{.action} in the left-hand column. The server name is displayed in the **Connection** box in the `General Information`{.action} tab.
>

Once you have launched Outlook on your device, you can add an account in two different ways:

- **When you start the application for the first time.** A setup wizard will appear and prompt you to enter your email address.

- **If you have already added an account.** Click `Tools`{.action} in the menu bar at the top of your screen, then `Accounts`{.action}. In the window that pops up, click `+`{.action}, then `New account`{.action}.

![emailpro](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Enter your email address, then click `Continue`{.action}. For the provider, click on `IMAP/POP`{.action}, then enter the information requested.

|Information|Description|
|---|---|
|Account type|Leave **IMAP** (selected by default).|
|Mail address|Enter a name that will distinguish this account from any other accounts added in your Outlook app.|
|Username|Enter your full email address.|
|Password|Enter the password for your email address.|
|Incoming server|Enter “pro**X**.mail.ovh.net”. Leave the "Use SSL to connect" box ticked.|
|Incoming port|Enter port 993.|
|Outgoing server|Enter “pro**X**.mail.ovh.net”. Leave the "Use SSL to connect" box ticked.|
|Outgoing port|Enter port 587.|

Once you have entered this information, click `Next`{.action}. If the information is correct, Outlook will successfully connect to the account.

To check that the account has been configured correctly, you can send a test email.

![emailpro](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

If you need to enter any settings manually in your account preferences, the technical settings you will need to use with our Email Pro solution are listed below:

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|pro**X**.mail.ovh.net|Yes|993|
|Outgoing|pro**X**.mail.ovh.net|Yes|587|

### Step 2: Use the email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also offers a web application that includes various [collaborative features](https://www.ovh.co.uk/emails), accessible at <https://www.ovh.co.uk/mail/>. You can log in using your email credentials.

## Go further

[Configuring an email address included in an MX Plan package or in a Web Hosting package in Outlook 2016 for Mac](https://docs.ovh.com/gb/en/emails/configuration-outlook-2016-mac/)

[Configuring your Exchange account in Outlook 2016 for Mac](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/configuration-outlook-2016-mac/)

Join our community of users on <https://community.ovh.com/en/>.