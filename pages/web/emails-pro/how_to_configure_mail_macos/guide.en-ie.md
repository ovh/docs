---
title: 'Configuring your Email Pro account on the macOS Mail app'
slug: configuring-email-pro-macos-mail
excerpt: 'Find out how to configure your Email Pro account on the Mail app, for the following macOS operating systems - El Capitan, Sierra and High Sierra'
section: 'Email client configuration'
order: 4
---

**Last updated 18th March 2020**

## Objective

You can configure Email Pro accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application.

**Find out how to configure your Email Pro account on the Mail app, for the following macOS operating systems: El Capitan, Sierra and High Sierra.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Requirements

- You must have an [Email Pro](https://www.ovh.ie/emails/email-pro/){.external} solution.
- You need to have the Mail app installed on your device.
- You need to have the required credentials for the email address you would like to configure.

> [!primary]
>
> This guide can be used for the following macOS versions: El Capitan, Sierra, High Sierra.
>

## Instructions

There are two ways of adding your email address to the Mail app:

- **In just a few clicks, via our Apple Devices tool:** Click on the following link: [https://autodiscover.mail.ovh.net/AppleDevices/](https://autodiscover.mail.ovh.net/AppleDevices/){.external} and follow the configuration steps.

- **Using the Mail app configuration assistant:** Launch the Mail app on your device.

From this point onwards, this guide will only cover configuration using the Mail app.

### Step 1: Add the account

> [!primary]
>
> In this guide, we will use as the server name: pro**X**.mail.ovh.net. You will need to replace the "X" with the actual number indicating the appropriate server for your Email Pro service.
> 
> You can find this information in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager), in the `Web`{.action} section, if you select `Professional Email`{.action} in the left-hand column. The server name is displayed in the **Connection** box in the `General Information`{.action} tab.
>

Once you have launched the Mail app on your device, you can add an account in two different ways:

- **When you open the app for the first time:** A window will appear, asking you to select a service provider for your Mail account. Select `Other Mail account`{.action}, then continue.

- **If you have already added an account:** Click `Mail`{.action} at the top of your screen, then `Add account`{.action}. Select `Other Mail account`{.action}, then continue.

![emailpro](images/configuration-mail-sierra-step1.png){.thumbnail}

Enter your account information:

|Information|Description|  
|---|---|  
|Name|Enter the sender name that you wish to be displayed when sending emails from this address.| 
|Email address|Enter your full email address.| 
|Password|Enter the password for your email address.|  

Click on the `Log in`{.action} button. A message will appear prompting you to continue, then enter the following information:

|Information|Description|  
|---|---|  
|Account type|Leave IMAP selected in the drop-down menu.| 
|Incoming server|Enter “pro**X**.mail.ovh.net”.| 
|Outgoing server|Enter “pro**X**.mail.ovh.net”.|  

Click again on the `Log in`{.action} button. If all the information you have entered is correct, you will be able to log in to your account straight away.

![emailpro](images/configuration-mail-sierra-step2.png){.thumbnail}

When you are asked to select the apps you want to use with your account, ensure that `Mail`{.action} is ticked so that the application works correctly with your email address, then click `Done`{.action}.

To check that the account has been correctly configured, you can send a test email.

If you need to enter any settings manually in your account preferences, the technical settings you will need to use with our Email Pro solution are listed below:

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|pro**X**.mail.ovh.net|Yes|993|
|Outgoing|pro**X**.mail.ovh.net|Yes|587|

### Step 2: Use the email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also offers a web application that includes various [collaborative features](https://www.ovh.ie/emails/), accessible at <https://www.ovh.ie/mail/>. You can log in using your email credentials.


## Go further

[Configuring an email address on the macOS Mail app](https://docs.ovh.com/gb/en/emails/guide-configuring-mail-on-macos/)

[Configuring your Exchange account on the macOS Mail app](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-automatic-configuration-on-mail-mac/)

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).