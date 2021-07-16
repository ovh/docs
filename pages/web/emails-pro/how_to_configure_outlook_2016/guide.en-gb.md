---
title: 'Configuring your Email Pro account in Outlook for Windows'
slug: configuration-outlook-2016
excerpt: 'Find out how to configure your Email Pro account in Outlook for Windows'
section: 'Email client configuration'
order: 2
---

**Last updated 05/07/2021**

## Objective

You can configure Email Pro accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application.

**Find out how to configure your Email Pro email address in Outlook or later for Windows.**
 

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
> 
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
> 

## Requirements

- an [Email Pro](https://www.ovh.co.uk/emails/email-pro/){.external} account
- You must have Microsoft Outlook or later.
- You need to have the required credentials for the email address you would like to configure.

## Instructions

### Add account

- **When you start the application for the first time**: A setup wizard will appear and prompt you to enter your email address.

- **If you have already added an account:** Click `File`{.action} in the menu bar at the top of your screen, then `Add account`{.action}.

- Enter your email address, then click `Advanced options`{.action}. Tick the box that appears next to `Configure my account manually`{.action}, then click `Connection`{.action}. 

![Outlook](images/config-outlook-emailpro01.png){.thumbnail}

> [!primary]
>
> In our example, we use the server comment: pro**?*.mail.ovh.net. You will need to replace the “? `by the number designating the server for your Email Pro service.
> 
> You can find this figure in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), in the `Web Cloud`{.action} section, then `Email Pro`{.action}
>  in the left-hand column. The server name is visible in the **Connection** box on the `General`{.action} Information tab.
> 

| | |
|---|---|
|![Outlook](images/config-outlook-emailpro02.png){.thumbnail}|Choose between IMAP and POP from the list of account types. <br>We recommend using IMAP.|
|Enter your email password, then click `Next`{.action}. |![Outlook](images/config-outlook-emailpro03.png){.thumbnail}|
|![Outlook](images/config-outlook-emailpro04.png){.thumbnail}|If Outlook was unable to automatically configure your address, this window will appear. <br>Click `Change Account Settings`{.action} |
|Enter in **Incoming** Mail: <br>- server **pro**?**.mail.ovh.net** (replace “**?**” with your server number) <br>- Port **993**<br>- **SSL/TLS encryption method**<br><br>Enter in **Outgoing** Mail: <br>- server **pro**?**.mail.ovh.net** (replace “**?**” with your server number)<br>- Port **465**<br>- **SSL/TLS encryption method**<br><br>Click `Next`{.action} to confirm. |![Outlook](images/config-outlook-emailpro05.png){.thumbnail}|


For **POP** configuration, the values are:

|Server type|Server name|Encryption method|Port|
|---|---|---|---|
|Incoming|pro**?**.mail.ovh.net (the word **?** should be replaced by your server number)|SSL/TLS|995|
|Outgoing|pro**?**.mail.ovh.net (the word **?** should be replaced by your server number)|STARTTLS|587|

### Use email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also has a web application you can use to access your email address from your browser. You can access this application at <https://www.ovh.co.uk/mail/>. You can log in using your email credentials. If you have any questions about how to use it, please refer to our guide on [Using an Exchange account in the OWA](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2016_outlook_web_app_user_guide/) interface.

### Retrieve a backup of your email address

If you need to make a change that could lead to the loss of your email account data, we advise you to make a backup of the email account concerned beforehand. To do this, please read the “**Export from Windows**” section in our guide on [Migrating your email address manually](https://docs.ovh.com/gb/en/emails/migrate-email-addresses-manually/#exporting-from-windows) .

### Modify existing settings

If your email account has already been set up and you need to access the account settings to change them:

- Go to `File`{.action} from the menu bar at the top of your screen, then select the account you want to modify in the drop-down menu **(1)**.
- Click `Account`{.action}** Settings(2)** below.
- Click `Server`{.action}** Settings(3)** to access the settings window.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail}

The window is divided into two parts, **Incoming** Mail and **Outgoing** Mail. Click either to edit them.

> [!primary]
>
> In our example, we use the server comment: pro**?*.mail.ovh.net. You will need to replace the “? `by the number designating the server for your Email Pro service.
> 
> You can find this figure in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), in the `Web Cloud`{.action} section, then `Email Pro`{.action}
>  in the left-hand column. The server name is visible in the **Connection** box on the `General`{.action} Information tab.
> 

![Outlook](images/config-outlook-emailpro07.png){.thumbnail}


## Go further

[Configuring your email address included in the MX Plan package or in a Web Hosting solution in Outlook 2016 for Windows](https://docs.ovh.com/gb/en/emails/configuration-outlook-2016/){.external}

[Configuring your Exchange account in Outlook 2016 for Windows](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/configuration-outlook-2016/){.external}

Join our community of users on <https://community.ovh.com/en/>.
