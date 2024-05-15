---
title: Exchange - Configuring your email account on macOS Mail
excerpt: Find out how to configure your Exchange account on macOS Mail
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

You can configure Exchange accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application. The Mail app on macOS is available for free on all Macs.

**Find out how to configure your Exchange email address on the macOS Mail app.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the "Go further" section of this guide.
>

## Requirements

- an email address [Exchange](links/emails-hosted-exchange/).
- You must have Mail installed on your Mac.
- You must have the login details for the email address you would like to configure.
 
## Instructions

### Add account <a name="addaccount"></a>

> [!primary]
>
> In our example, we use the server hint: ex**?**.mail.ovh.net. You will need to replace the “?” with the number designating the server of your Exchange service.
>
> Find this number in your [OVHcloud Control Panel](links/manager/), in the `Web Cloud`{.action} then `Microsoft`{.action} section.
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

### Use email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also has a web application you can use to access your email address from your browser. You can access this application at <https://www.ovhcloud.com/en-gb/mail/>. You can log in using your email credentials. If you have any questions about how to use it, you can refer to our guide on [Using the Outlook Web App with an Exchange account](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Retrieve a backup of your email address

If you need to make any changes that could lead to the loss of your email account data, we advise backing up the email account concerned beforehand. To do this, please read the "**Export**" section in the "**Mail on macOS**" section of our guide on [Manually migrating your email address](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporting).

### Modify existing settings

If your email account is already set up and you need to go to the account settings to change them:

- Click `Mail`{.action} in the menu bar at the top of your screen, then `Preferences...`{.action} **or** `Settings...`{.action} depending on your macOS version.
- From the `Accounts`{.action} tab, select the account concerned in the left-hand column, then click `Server settings`{.action}.

![mailmac](images/mail-mac-exchange06.png){.thumbnail .w-400 .h-600}

## Go further

[FAQ emails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Configure your Email Pro account on macOS Mail](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)

[Configure your MX Plan email account on macOS Mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)

Join our community of users on <https://community.ovh.com/en/>.
