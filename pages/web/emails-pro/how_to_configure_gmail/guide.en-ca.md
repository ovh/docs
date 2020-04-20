---
title: 'Configuring an Email Pro account on the Gmail online interface'
slug: gmail-configuration
excerpt: 'Find out how to configure an Email Pro account on the Gmail online interface'
section: 'Email client configuration'
order: 7
---

**Last updated 18th March 2020**

## Objective

You can configure Email Pro accounts on email clients and online interfaces, if they are compatible. By doing so, you can use your email address through your preferred device or online interface.

**Find out how to configure an Email Pro account on the Gmail online interface.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Requirements

- an [Email Pro](https://www.ovh.co.uk/emails/email-pro/) solution
- credentials for the Email Pro account you would like to configure
- credentials for the Gmail account you want to configure the OVHcloud Email Pro account on

> [!primary]
>
> This guide has been written based on the new Gmail interface. Even if there are slight differences in the layout of your interface version, the instructions in this guide can still be followed.
>

## Instructions

### Step 1: Add the Email Pro account on to the Gmail interface.

> [!primary]
>
> In this guide, we will use as the server name: pro**X**.mail.ovh.net. You will need to replace the "X" with the actual number indicating the appropriate server for your Email Pro service.
> 
> You can find this information in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager), in the `Web`{.action} section, if you select `Professional Email`{.action} in the left-hand column. The server name is displayed in the **Connection** box in the `General Information`{.action} tab.
>

First of all, go to the Gmail online interface via your web browser. Then log in to your account using your Gmail credentials.

Once you have logged in to the interface, click on the cogwheel icon, then `Settings`{.action}. On the page that pops up, click on `Accounts and Import`{.action}. 

![emailpro](images/configuration-gmail-web-step1.png){.thumbnail}

Next to `Check mail from other accounts`, click `Add a mail account`{.action}. In the window that pops up, enter your OVHcloud Email Pro email address, then click `Next`{.action}. Select `Import emails from my other account (POP3)`{.action}, then click again on `Next`{.action}.

![emailpro](images/configuration-gmail-web-step2.png){.thumbnail}

Now enter the settings for the POP server (incoming server) of your OVHcloud Email Pro account:

|Information|Description| 
|---|---| 
|Username|Enter your **full** email address.|  
|Password|Enter the password for your email address.|
|POP server|Enter “pro**X**.mail.ovh.net”.|
|Port|Select port 995.|

Regarding the choices you can tick:

- **Leave a copy of retrieved message on the server**. We recommend ticking this box if you want to keep a copy of the messages received via your OVHcloud Email Pro address on our servers.

- **Always use a secure connection (SSL) when retrieving mail**. Please ensure that you tick this box so that the connection to your OVHcloud Email Pro address can be established.

- **Label incoming messages**. By ticking this box, you can add a label to the emails that will be imported from your OVHcloud Email Pro address to your Gmail account.

- **Archive incoming messages (Skip the Inbox)**. By ticking this box, you can ensure that emails imported from your OVHcloud email address will not appear in the inbox for your Gmail account.

Once you have entered this information, click `Add Account`{.action}. If all the information is correct, the connection to the email address will be successful. 

![emailpro](images/configuration-gmail-web-step3.png){.thumbnail}

Next, if you would also like to send emails from your OVHcloud Email Pro address using the Gmail online interface, tick the `Yes, I want to be able to send mail as [...]`{.action}, then click `Next`{.action}. 

Then enter the sender name that will display when you send emails from this email address, tick the `Treat as an alias`{.action} box, then click `Next Step`{.action}.

![emailpro](images/configuration-gmail-web-step4.png){.thumbnail}

Now enter the settings for the SMTP server (outgoing server) of your OVHcloud Email Pro account:

|Information|Description| 
|---|---| 
|SMTP server|Enter “pro**X**.mail.ovh.net”.|
|Port|Select port 587.|
|Username|Enter your **full** email address.|  
|Password|Enter the password for your email address.|

Once you have filled in the information requested, tick the box next to `Secured connection using TLS`{.action}, then click `Add Account`{.action}. If all the information is correct, the connection to the email address will be successful. 

![emailpro](images/configuration-gmail-web-step5.png){.thumbnail}

At this stage, you simply need to confirm this addition by entering a confirmation code sent to your OVHcloud Email Pro address. To receive it, log on to our [Webmail](https://www.ovh.co.uk/mail/). 

Once you have pressed confirm, the OVHcloud Email Pro address will then appear in the `Accounts and Import`{.action} tab, which you accessed to start with.

### Step 2: Use the Email Pro account from the Gmail interface.

Once you have configured your Email Pro account, you can start using it! You can now send and receive messages from this account on the Gmail interface.

To send an email from your OVHcloud Email Pro address via the Gmail online interface, you will then need to select the email address to send from when you create a new email. You can do this in the `From`{.action} field of the email editing window.

![emailpro](images/configuration-gmail-web-step6.png){.thumbnail}

Please also note that you can still use our online interface, accessible via <https://www.ovh.co.uk/mail>, to access your OVH Email Pro address. You just need to use your usual credentials to log in.

## Go further

Join our community of users on <https://community.ovh.com/en/>.