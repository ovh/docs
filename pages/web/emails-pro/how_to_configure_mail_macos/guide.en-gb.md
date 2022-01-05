---
title: 'Configuring your Email Pro account on the macOS Mail app'
slug: configuring-email-pro-macos-mail
section: 'Email client configuration'
order: 5
---

**Last updated 28/12/2021**

## Objective

You can configure Email Pro accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application. The Mail app on macOS is available for free on all Macs.

**Find out how to configure your Email Pro address on the macOS Mail app.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the "Go further" section of this guide.
> 

## Requirements

- an [Email Pro](https://www.ovhcloud.com/en-gb/emails/email-pro/) address.
- You need to have **Mail** installed on your Mac.
- You need to have the required credentials for the email address you would like to configure.
 
## Instructions

> [!warning]
>
> In our example, we use a server "pro**?**.mail.ovh.net" (Please replace the "?" by the number designating the server for your Email Pro service).
> 
> You can find this number in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), in the `Web Cloud`{.action} section, then `Email Pro`{.action} in the left-hand column. The server name is visible in the **Connection** box on the `General`{.action} Information tab.
> 

### Add account

- **When the application is first started**: a setup wizard will appear, prompting you to choose your account type.

- **If an account has already been set up**: click `Mail`{.action} in the menu bar at the top of your screen, then click on `Accounts`{.action}.

| | |
|---|---|
|![mailmac](images/mail-mac-emailpro01.png){.thumbnail}|Select `Add Other Account`{.action} account, then click on `Mail account`{.action}.|
|Enter the following information in the "**Add Mail Account**" window: <br>- your email account **Name** <br>- Your **Email address** <br>- Your email **Password** |![mailmac](images/mail-mac-emailpro02.png){.thumbnail}|
|![mailmac](images/mail-mac-emailpro03.png){.thumbnail}|In the next window, enter the information: <br>- Leave your **Email address** already entered <br>- Enter your full email address in **Username** <br>- Leave your **Password** already entered <br>- Select `POP` or `IMAP`(recommended) in **Account type**<br>- Enter `pro**?**.mail.ovh.net` in **Incoming Mail Server** (replace "**?**" with your server number)<br>- Also enter `pro**?**.mail.ovh.net` in **Outgoing Mail Server** (replace "**?**" by your server number)<br><br>To complete the configuration, click on `Log in`{.action}.|

### Use email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also has a web application you can use to access your email address from your browser. You can access this application at <https://www.ovh.co.uk/mail/>. You can log in using your email credentials. If you have any questions about how to use it, you can refer to our guide on [Using an account in the OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-2016-guide-utilisation-outlook-web-app/) interface or use your email address via the RoundCube webmail.

### Retrieve a backup of your email address

If you need to make any changes that could lead to the loss of your email account data, we advise backing up the email account concerned beforehand. To do this, please read the "**Export**" section in the "**Mail on macOS**" section of our guide on [Manually migrating your email address](https://docs.ovh.com/gb/en/emails/migrate-email-addresses-manually/#exporting).

### Modify existing settings

If your email account has already been set up and you need to access the account settings to change them:

- Click on `Mail`{.action} in the menu bar at the top of your screen then on `Preferences`{.action}.
- Select the account in the left-hand column, then click on `Server Settings`{.action}.

![mailmac](images/mail-mac-emailpro04.png){.thumbnail}

## Go further
  
Join our community of users on <https://community.ovh.com/en/>.
