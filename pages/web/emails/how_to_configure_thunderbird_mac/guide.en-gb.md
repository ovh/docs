---
title: 'Configuring an email address on Thunderbird for macOS'
slug: configure-email-for-thunderbird-mac
routes:
    canonical: 'https://docs.ovh.com/gb/en/emails/configure-email-for-thunderbird-windows/'
legacy_guide_number: 1297
excerpt: 'Find here the information to configure your email address on Thunderbird.'
section: 'Configure on computer'
order: 5
---

**Last updated 26/08/2021**

## Objective

You can configure MX Plan accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application. Thunderbird is a free email client.

**Find out how to configure your MX Plan email address on Thunderbird on macOS.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
> 

## Requirements

- You must have an MX Plan email address (included in the MX Plan solution and in OVHcloud web [hosting plans](https://www.ovh.co.uk/web-hosting/){.external}).
- Thunderbird software installed on your macOS system
- You need to have the required credentials for the email address you would like to configure.
 
## Instructions

### Add account

- **When you start the application for the first time**: A setup wizard will appear and prompt you to enter your email address.

- **If an account has already been set up**: click `File`{.action} in the menu bar at the top of your screen, then `New`{.action} and finally `Get a new email account...`{.action}.

| | |
|---|---|
|![Thunderbird](images/thunderbird-mac-mxplan01.png){.thumbnail}|In the window that appears, enter the following 3 information: <br>- Your display name<br>- Email <br>- Password|
|Then click `Configure manually...`{.action} to enter the **INCOMING** server settings: <br>- protocol **IMAP** <br>- Server **ssl0.ovh.net** <br>- Port **993** <br>- SSL **SSL/TLS** <br>- Authentication **Normal password** <br>- Identifying **your full email address**|![Thunderbird](images/thunderbird-mac-mxplan02.png){.thumbnail}|
|![Thunderbird](images/thunderbird-mac-mxplan03.png){.thumbnail}|Enter **OUTGOING** server settings: <br>- Protocol **SMTP** <br>- Server **ssl0.ovh.net** <br>- Port **465** <br>- SSL **SSL/TLS** <br>- Authentication **Normal password** <br>- Identifying **your full email address**<br><br>To complete the configuration, click `Done`{.action}|



For **POP** configuration, the values are:

|Server type|Server name|Encryption method|Port|
|---|---|---|---|
|Incoming|ssl0.ovh.net|SSL/TLS|995|
|Outgoing|ssl0.ovh.net|SSL/TLS|465|

### Use email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also has a web application you can use to access your email address from your browser. You can access this application at <https://www.ovh.co.uk/mail/>. You can log in using your email credentials. If you have any questions about how to use it, you can refer to our guide on [Using an Exchange account in the OWA](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2016_outlook_web_app_user_guide/) interface, or [Using an email address via the RoundCube](https://docs.ovh.com/fr/emails/utilisation-roundcube/#ou-et-comment-se-connecter-au-webmail-roundcube) webmail.

### Retrieve a backup of your email address

If you need to make a change that could lead to the loss of your email account data, we advise you to make a backup of the email account concerned beforehand. To do this, please read the “**Export**” section in the “**Thunderbird**” section of our guide on Manually [migrating your email](https://docs.ovh.com/gb/en/emails/migrate-email-addresses-manually/#exporting_1) address.

### Modify existing settings

If your email account has already been set up and you need to access the account settings to change them:

- Go to `Tools`{.action} from the menu bar at the top of your screen.
- Click `Account`{.action} Settings.

![Thunderbird](images/thunderbird-mac-mxplan04.png){.thumbnail}

- To change the settings for **receiving** your emails, click `Server`{.action} settings in the left-hand column below your email address.

![Thunderbird](images/thunderbird-mac-mxplan05.png){.thumbnail}

- To change **the settings for sending** emails, click Outgoing `server (SMTP)`{.action} at the bottom of the left-hand column.
- Click the email address in the list, and then click `Edit`{.action}.

![Thunderbird](images/thunderbird-mac-mxplan06.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.