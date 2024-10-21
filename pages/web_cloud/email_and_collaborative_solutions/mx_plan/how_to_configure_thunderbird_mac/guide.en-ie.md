---
title: 'Configuring an email address on Thunderbird for macOS'
excerpt: 'Find out how to configure your email address in Thunderbird'
updated: 2021-08-26
---

## Objective

You can configure MX Plan accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application. Thunderbird is a free email client.

**This guide explains how to configure your MX Plan email address on Thunderbird for macOS.**

> [!warning]
> This guide will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.
>
> If you experience any difficulties carrying out these operations, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-ie/directory/) and/or discuss the issue with our community. OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#gofurther) section of this guide.
> 

## Requirements

- an MX Plan email address (included in the MX Plan solution and in [OVHcloud Web Hosting plans](https://www.ovhcloud.com/en-ie/web-hosting/){.external})
- Thunderbird software installed on your macOS system
- login credentials for the email account to be configured

 
## Instructions

### Adding the account

- **When you start the application for the first time**: A setup wizard will appear and prompt you to enter your email address.

- **If you have already added an account**: Click `File`{.action} in the menu bar at the top of your screen, then `New`{.action} and finally `Get a new email account...`{.action}.

| | |
|---|---|
|![Thunderbird](images/thunderbird-mac-mxplan01.png){.thumbnail}|In the window that appears, enter the following information: <br>\- Your display name<br>\- Email <br>\- Password|
|Then click `Configure manually...`{.action} to enter the **INCOMING** server settings: <br>- Protocol **IMAP** <br>\- Server **ssl0.ovh.net** <br>\- Port **993** <br>\- SSL **SSL/TLS** <br>\- Authentication **Normal password** <br>\- Username **Full email address**|![Thunderbird](images/thunderbird-mac-mxplan02.png){.thumbnail}|
|![Thunderbird](images/thunderbird-mac-mxplan03.png){.thumbnail}|Enter **OUTGOING** server settings: <br>- Protocol **SMTP** <br>\- Server **ssl0.ovh.net** <br>\- Port **465** <br>\- SSL **SSL/TLS** <br>\- Authentication **Normal password** <br>\- Username **Full email address**<br><br>To complete the configuration, click `Done`{.action}|

For **POP** configuration, the values are:

|Server type|Server name|Encryption method|Port|
|---|---|---|---|
|Incoming|ssl0.ovh.net|SSL/TLS|995|
|Outgoing|ssl0.ovh.net|SSL/TLS|465|

### Using your email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also has a web application you can use to access your email address from your browser. You can access this application at <https://www.ovh.ie/mail/>. You can log in using your email credentials. If you have any questions about how to use this interface, please refer to our guides on [Using the Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) and [Using an email address with RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube#ou-et-comment-se-connecter-au-webmail-roundcube) respectively.

### Retrieving a backup of your email address

If you need to make a change that could lead to the loss of your email account data, we advise you to make a backup of the email account concerned beforehand. To do this, please read the “**Exporting**” part of the “**Thunderbird**” section in our guide on [Manually migrating an email address](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporting).

### Modifying existing settings

If your email account has already been set up and you need to access the account settings to change them:

- Go to `Tools`{.action} from the menu bar at the top of your screen.
- Click `Account Settings`{.action}.

![Thunderbird](images/thunderbird-mac-mxplan04.png){.thumbnail}

- To change the settings for **receiving** your emails, click `Server Settings`{.action} in the left-hand column below your email address.

![Thunderbird](images/thunderbird-mac-mxplan05.png){.thumbnail}

- To change the settings for **sending** emails, click `Outgoing Server (SMTP)`{.action} at the bottom of the left-hand column.
- Select the email address in the list, and then click on `Edit`{.action}.

![Thunderbird](images/thunderbird-mac-mxplan06.png){.thumbnail}

## Go further <a name="gofurther"></a>

Join our community of users on <https://community.ovh.com/en/>.