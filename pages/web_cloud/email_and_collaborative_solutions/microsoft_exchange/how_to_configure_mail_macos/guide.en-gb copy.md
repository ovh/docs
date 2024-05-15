---
title: Configuring your Exchange account on macOS Mail
excerpt: Learn how to configure your Exchange account on Mail from macOS El Capitan, Sierra and High Sierra
updated: 2024-04-16
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

Exchange accounts can be configured on different email clients that are compatible. This allows you to use your email address from the device of your choice. The Mail app on macOS is available for free on all Macs.

**Find out how to configure your Exchange email address on macOS Mail.**

> [!warning]
>
> OVHcloud provides services that you are responsible for configuring, managing and managing. It is therefore up to you to ensure that it works properly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en/) and/or the service’s publisher if you encounter any difficulties. We will not be able to assist you. You can find more information in the “Go further” section of this guide.
>

## Requirements

- an email address [Exchange](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/).
- You must have Mail installed on your Mac.
- You must have the login details for the email address you would like to configure.

## In practice

### Add the <a name="addaccount"></a> account

> [!primary]
>
> In our example, we use the server hint: ex**?**.mail.ovh.net. You will need to replace the “?” with the number designating the server of your Exchange service.
>
> Find this number in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, in the `Web Cloud`{.action} then `Microsoft`{.action} section.
> Click `Exchange`{.action}, then on the desired Exchange platform. The server name is visible in the **Connection** box in the `General information`{.action} tab.
>

- **When you start the application for the first time**: a configuration wizard will appear, prompting you to choose your account type.

- **If an account has already been set up**: click `Mail`{.action} in the menu bar at the top of your screen, then `Accounts`{.action}.

> [!tabs]
> **Step 1**
>> Select `Exchange`{.action}<br><br>
>>![mailmac](images/mail-mac-exchange01.png){.thumbnail .w-400 .h-600}
>>
> **Step 2**
>> Enter the **Name** of your email account and your **Email address**, then click `Log in`{.action} <br><br>
>>![mailmac](images/mail-mac-exchange02.png){.thumbnail .w-400 .h-600}
>>
> **Step 3**
>> In the next window, click `Manual configuration`{.action} : <br><br>- Define the **Name** that will appear in the navigation interface <br>- Leave your **email address**<br>- Leave your **Password** already entered <br><br>To finalize the configuration, click `Log in`{.action} <br><br><br>
>>![mailmac](images/mail-mac-exchange03.png){.thumbnail .w-400 .h-600}
>>
> **Step 4**
>>> Type: <br><br>- Email address: Leave your full email address<br>- User name: Leave your full email address <br>- Password: Leave your **password**<br> - Internal URL: **ex?.mail.ovh.net** (replace **?** with [your Exchange server number](#addaccount))<br>- External URL: **ex?.mail.ovh.net** (replace **?*** with [your Exchange server number](#addaccount))<br><br>
>>
>> > [!warning]
>>>
>>> It is normal to see the message in red “**Unable to verify account name or password**” when the window appears for the first time. However, if this message persists after validation, the information entered is incorrect.<br><br>
>>
>>![mailmac](images/mail-mac-exchange04.png){.thumbnail .w-400 .h-600}
>>
> **Step 5**
>> In addition to your emails, you can select other Exchange features that you want to manage from your Mac. <br><br>![mailmac](images/mail-mac-exchange05.png){.thumbnail .w-400 .h-600}

### Use the email address

Once you have configured your email address, you can start using it! You can now send and receive messages.

OVHcloud also offers a web application that can be used to access your email address from a web browser. You can view it here: <https://www.ovh.co.uk/mail/>. You can log in using your email credentials. If you have any questions on how to use it, please refer to our guide [View your Exchange account via the OWA interface](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) or [Use your email address via the Roundcube webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube#or-and-how-to-log-in to-roundcube-webmail).

### Retrieve a backup of your email address

If you need to make any changes that could result in the loss of your email account data, we recommend backing up the email account concerned in advance. To do this, read the **Export** paragraph in the **Mail on Mac OS** section of our guide [Migrate your email address manually](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#export).

### Modify existing settings

If your email account is already set up and you need to go to the account settings to change them:

- Click `Mail`{.action} in the menu bar at the top of your screen, then `Preferences...`{.action} **or** `Settings...`{.action} depending on your macOS version.
- From the `Accounts`{.action} tab, select the account concerned in the left-hand column, then click `Server settings`{.action}.

![mailmac](images/mail-mac-exchange06.png){.thumbnail .w-400 .h-600}

## Go further

[FAQ emails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Configure your Email Pro account on macOS Mail](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)

[Configure your MX Plan email account on macOS Mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)

Join our community of users on <https://community.ovh.com>.
