---
title: 'Configuring your Exchange account in Thunderbird for Windows'
slug: exchange-configuration-thunderbird
routes:
    canonical: 'https://docs.ovh.com/us/en/emails/configure-email-for-thunderbird-windows/'
excerpt: 'Find out how to configure your Exchange account in Thunderbird'
section: 'Email clients'
order: 5
---

**Last updated 26th August 2021**

## Objective

You can configure Exchange accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application. Thunderbird is a free email client.

**This guide explains how to configure your Exchange address on Thunderbird for Windows.**

> [!warning]
> This guide will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.
>
> If you experience any difficulties carrying out these operations, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en/directory/) and/or discuss the issue with our community. OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- an [OVHcloud Exchange account](https://www.ovhcloud.com/en/emails/hosted-exchange/)
- Thunderbird software installed on your Windows system
- login credentials for the email account to be configured
 
## Instructions

> [!primary]
>
> In this guide, we use as the hostname: ex**?**.mail.ovh.net. You will need to replace the "?" with the actual number indicating the appropriate server for your Email Pro service.
> 
> You can find this information in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), in the `Web Cloud`{.action} section, if you select `Microsoft`{.action}. Click on `Exchange`{.action} and then on your service. The server name is displayed in the **Connection** box in the `General Information`{.action} tab.
>

### Adding the account

- **When you start the application for the first time**: A setup wizard will appear and prompt you to enter your email address.

- **If you have already added an account**: Click `File`{.action} in the menu bar at the top of your screen, then `New`{.action} and finally `Get a new email account...`{.action}.

| | |
|---|---|
|![Thunderbird](images/thunderbird-win-exchange01.png){.thumbnail}|In the window that appears, enter the following information: <br>\- Your display name<br>\- Email <br>\- Password|
|Then click `Configure manually...`{.action} to enter the **INCOMING** server settings: <br>- Protocol **IMAP** <br>- Server **ex?.mail.ovh.net** (replace “**?**” with your server number)<br>- Port **993** <br>- SSL **SSL/TLS** <br>- Authentication **Normal password** <br>- Username **Full email address**|![Thunderbird](images/thunderbird-win-exchange02.png){.thumbnail}|
|![Thunderbird](images/thunderbird-win-exchange03.png){.thumbnail}|Enter **OUTGOING** server settings: <br>- Protocol **SMTP** <br>- Server **ex?.mail.ovh.net** (replace “**?**” with your server number)<br>- Port **587** <br>- SSL **STARTTLS** <br>- Authentication **Normal password** <br>- Username **Full email address**<br><br>To complete the configuration, click `Done`{.action}|



For **POP** configuration, the values are:

|Server type|Server name|Security type|Port|
|---|---|---|---|
|Incoming|ex**?**.mail.ovh.net (replace "?" with your server number)|SSL/TLS|995|
|Outgoing|ex**?**.mail.ovh.net (replace "?" with your server number)|STARTTLS|587|

### Using your email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

Your Exchange email address and all of its collaborative features are also available via the [OWA interface](https://www.ovh.com/world/mail/). If you have any questions about how to use this interface, please refer to our guide on [Using the Outlook Web App](../exchange_2016_outlook_web_app_user_guide/).

### Retrieving a backup of your email address

If you need to make a change that could lead to the loss of your email account data, we advise you to make a backup of the email account concerned beforehand. To do this, please read the “**Exporting**” part of the “**Thunderbird**” section in our guide on [Manually migrating an email address](https://docs.ovh.com/us/en/emails/migrate-email-addresses-manually/#exporting_1).

### Modifying existing settings

> [!primary]
>
> In this guide, we use as the hostname: ex**?**.mail.ovh.net. You will need to replace the "?" with the actual number indicating the appropriate server for your Email Pro service.
> 
> You can find this information in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), in the `Web Cloud`{.action} section, if you select `Microsoft`{.action}. Click on `Exchange`{.action} and then on your service. The server name is displayed in the **Connection** box in the `General Information`{.action} tab.
>

If your email account has already been set up and you need to access the account settings to change them:

- Go to `Tools`{.action} from the menu bar at the top of your screen.
- Click `Account Settings`{.action}.

![Thunderbird](images/thunderbird-win-exchange04.png){.thumbnail}

- To change the settings for **receiving** your emails, click `Server Settings`{.action} in the left-hand column below your email address.

![Thunderbird](images/thunderbird-win-exchange05.png){.thumbnail}

- To change the settings for **sending** emails, click `Outgoing Server (SMTP)`{.action} at the bottom of the left-hand column.
- Select the email address in the list, and then click on `Edit`{.action}.

![Thunderbird](images/thunderbird-win-exchange06.png){.thumbnail}


## Go further <a name="gofurther"></a>

Join our community of users on <https://community.ovh.com/en/>.