---
title: 'MX Plan - Configure your email account on Mail for macOS'
excerpt: Find out how to configure your MX Plan email address on macOS Mail
updated: 2024-10-22
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objective

You can configure MX Plan accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application. The Mail app on macOS is available for free on all Macs.

**Find out how to configure your MX Plan email address on the macOS Mail app.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the "Go further" section of this guide.

## Requirements

- an MX Plan email address (included in the MX Plan solution and in [OVHcloud web hosting plans](/links/web/hosting)).
- **Mail** installed on your Mac.
- the required credentials for the email address you would like to configure.

## Instructions

### Add account

- **When the application is first started**: a setup wizard will appear, prompting you to choose your account type.

- **If an account has already been set up**: click `Mail`{.action} in the menu bar at the top of your screen, then `Accounts`{.action}.

Follow the installation steps by clicking on the tabs below:

> [!tabs]
> **Step 1**
>>
>> Select `Other Mail Account`{.action} then click `Mail Account`{.action}.<br><br>
>> ![mailmac](images/mail-mac-email01.png){.thumbnail .w-400 .h-600}
>>
> **Step 2**
>>
>> Enter the following information in the "**Add a Mail account**" window: <br><br>
>> - A **Name** for your email account
>> - Your **Email address**
>> - The **Password** of your email address<br>
>> ![mailmac](images/mail-mac-email02.png){.thumbnail .w-400 .h-600}
>>
> **Step 3**
>>
>> In the next window, enter the information:
>>
>> - **Email address**
>> - **Username** : Enter your full email address
>> - **Password**
>> - **Account type**: Select `IMAP` (recommended) or `POP`
>> - **Incoming Mail Server**:<br>- **EUROPE**: Type `imap.mail.ovh.net` or `ssl0.ovh.net`<br>- **AMERICA/ASIA**: Type `imap.mail.ovh.ca`
>> - **Outgoing Mail Server**:<br>- **EUROPE**: Type `smtp.mail.ovh.net` or `ssl0.ovh.net`<br>- **AMERICA/ASIA**: Type `smtp.mail.ovh.ca`
>>
>> To finalize the configuration, click `Log in`{.action}
>>
>> > [!warning]
>> >
>> > It is normal to see the red message "**unable to verify account name or password**" when the window appears for the first time. However, if this message persists after validation, the information entered is incorrect.<br><br>
>>
>> ![mailmac](images/mail-mac-email03.png){.thumbnail .w-400 .h-600}

> [!warning]
>
> If, after following the configuration steps below, you encounter a sending or receiving error, go to the section [Modify existing settings](#modify-settings).

### Use email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also has a web application you can use to access your email address from your browser. You can access this application at [Webmail](/links/web/email). You can log in using your email credentials. If you have any question about how to use it, you can refer to our guide on [Using an account in the OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) interface or use your email address via the RoundCube webmail.

### Retrieve a backup of your email address

If you need to make any changes that could lead to the loss of your email account data, we advise backing up the email account concerned beforehand. To do this, please read the "**Export**" section in the "**Mail on macOS**" chapter of our guide on [Manually migrate your email address](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporting).

### Modify existing settings <a name="modify-settings"></a>

If your email account has already been set up and you need to access the account settings to change them:

- Click `Mail`{.action} in the menu bar at the top of your screen, then click `Preferences`{.action}.
- Select the account concerned in the left-hand column, then click `Server settings`{.action}.
- In the `Incoming Mail Server (POP)` or `Incoming Mail Server (IMAP)` section, enter your full email address in the `User name`{.action} box, and the `Password`{.action} associated with it in the box provided.
- In the `Outgoing Mail Server (SMTP)` section, enter your full email address in the `Username`{.action} box, and the `Password`{.action} associated in the box provided.
- Untick the `Automatically manage connection settings`{.action} boxes to display the `Port`{.action} and `Authentication`{.action} settings.
- Make sure that the `Use TLS/SSL`{.action} boxes are ticked.
- In the `Authentication`{.action} dropdown menus, check that `Password` is selected.
- For the `Host name`{.action} and `Port`{.action} boxes, refer to the values in the "[POP, IMAP and SMTP settings reminder](#popimap-settings)" section. **Make sure that the server type (IMAP, POP and SMTP) matches your region (Europe or Asia-Pacific)**.

To finalize the configuration, click `Save`{.action}.

![mailmac](images/mail-mac-email04.png){.thumbnail .w-400 .h-600}

> [!primary]
>
> **Change your configuration**
>
> If your email address is configured in **IMAP** and you want to change this configuration to **POP**, you will need to delete the account on Mail from MacOS and then recreate it in **POP**.

### Reminder of POP, IMAP and SMTP settings <a name="popimap-settings"></a>

When you choose your account type, we recommend using **IMAP** to receive emails. However, you can select **POP**.

> [!warning]
>
> Please note down the value that corresponds to your location (**EUROPE** or **AMERICA/ASIA-PACIFIC**)

- **POP configuration**

|Information|Description|
|---|---|
|Username|Enter the full email address **full**|
|Password|Enter the password for the email address|
|Server **EUROPE** (incoming)|pop.mail.ovh.net **or** ssl0.ovh.net|
|Server **AMERICA/ASIA-PACIFIC** (incoming)|pop.mail.ovh.ca|
|Port|995|
|Security type|SSL/TLS|

- **IMAP configuration**

|Information|Description|
|---|---|
|Username|Enter the full email address **full**|
|Password|Enter the password for the email address|
|Server **EUROPE** (incoming)|imap.mail.ovh.net **or** ssl0.ovh.net|
|Server **AMERICA / ASIA-PACIFIC** (incoming)|imap.mail.ovh.ca|
|Port|993|
|Security type|SSL/TLS|

For sending emails, if you have to enter the **SMTP** settings manually in your account preferences, you will find the settings below:

- **SMTP configuration**

|Information|Description|
|---|---|
|Username|Enter the full email address **full**|
|Password|Enter the password for the email address|
|Server **EUROPE** (outgoing)|smtp.mail.ovh.net **or** ssl0.ovh.net|
|Server **AMERICA / ASIA-PACIFIC** (outgoing)|smtp.mail.ovh.ca|
|Port|465|
|Security type|SSL/TLS|

> [!primary]
>
> **Change configuration**
>
> When you configure your email address in **IMAP** and you want to change the configuration to **POP**, it is necessary to delete the account from Mac Mail and then recreate it in **POP** to change the configuration.

### What do I do if I cannot receive/send my emails?

- If you see the icon visible in the screenshot below, it is a network disconnection. Check that your internet connection is working properly.

![mailmac](images/mail-mac-disconnect.png){.thumbnail .w-400 .h-600}

- If you see the icon visible in the screenshot below, it is a synchronization fault. Check the configuration settings for your email account in the [Modify existing settings](#modify-settings) section.

![mailmac](images/mail-mac-fail.png){.thumbnail .w-400 .h-600}

## Go further <a name="go-further"></a>

> [!primary]
>
> For more information on configuring an email address from the Mail app on macOS, see [the Apple Help Center](https://support.apple.com/en-gb/guide/mail/mail35803/mac).

[MX Plan - Configuring your email account on Mail for iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)

[Email Pro - Configuring your email account on Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)<br>
[Email Pro - Configuring your email account on Mail for iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_ios)

[Exchange - Configuring your email account on macOS Mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios)<br>
[Exchange - Configuring your email account on Mail for iPhone and iPad](pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_mail_macos/guide.fr-fr.md)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
