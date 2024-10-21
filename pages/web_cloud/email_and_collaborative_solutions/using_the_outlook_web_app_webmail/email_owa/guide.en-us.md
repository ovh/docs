---
title: 'Using the Outlook Web App with an email account'
excerpt: 'Find out how to manage an email address using OWA webmail'
updated: 2024-09-03
---

## Objective

With OVHcloud email solutions you can send and receive your emails using a device and client of your choice. To access an account from anywhere via web browser, OVHcloud provides an online email client called Outlook Web App (OWA). Our [webmail login page](/links/web/email) is the single point of access to the respective OWA for all active email accounts on MX Plan and Hosted Exchange.

**This guide explains how to use your email address with OWA and exemplifies the most important features of this interface.**

## Requirements

- an OVHcloud email solution already set up (**MX Plan**, available as part of our [Web Hosting plans](/links/web/hosting), or [**Hosted Exchange**](/links/web/emails-hosted-exchange))
- login credentials for the email address you want to configure

## Instructions

This guide will give you a better understanding of the usual email account tasks available in the OWA webmail. However, since this interface was not originally created by OVHcloud, we are unable to provide specific instructions about any settings not mentioned in this guide. Regarding Exchange functionalities, we have prepared some additional guides which you can find in the [**Go further**](./#go-further_1) section below.

> [!primary]
>
> After the first two steps, the instructions don't have to be considered in a particular order.
>

### 1. Accessing OWA webmail

To log in to OWA webmail with your email address, go to the general [webmail login page](/links/web/email). Enter your full email address and password, then click the `Login`{.action} button.

![useowa](images/use-owa-step1.png){.thumbnail}

If this is your first time logging in to OWA webmail with this email address, you will be prompted to set the interface language and time zone. Click `Save`{.action} to continue.

> [!primary]
>
> Time zones are listed according to [the UTC (Coordinated Universal Time) standard](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#/media/File:World_Time_Zones_Map.png), not in alphabetical order of cities.
>
> **Example**: For Western Europe, it is the UTC +1 tranche (Brussels, Copenhagen, Madrid, Paris).

![useowa](images/use-owa-step2.png){.thumbnail}

From now on, your inbox view will appear by default after login.

![useowa](images/use-owa-step3.png){.thumbnail}

### 2. Understanding the OWA display

There are several sections to the OWA interface. Please refer to the table and the image below to familiarise yourself with it.

|Parts|Description|  
|---|---|  
|Top section (1)|Contains two tab bars: the first one allows access to general settings (such as the [options section](./#accessing-the-options-section)), and the second one can be used to perform specific actions with your address (such as sending or replying to emails).|  
|Left-hand side (2)|Displays the list of folders for your email address. These appear as a tree-view that you can expand or hide.|
|Central segment (3)|Displays the list of messages (read and unread) from the folder selected in the left-hand menu. This section can also display search results.|
|Right-hand side (4)|Displays the reading pane when an email has been selected.|

![useowa](images/use-owa-step4.png){.thumbnail}

Note that you can change the size of the vertical sections by clicking and dragging their border lines.

### Viewing emails

To view your emails, select a folder on the left-hand side. Incoming emails that are not treated by inbox rules will arrive in the "Inbox" folder. To see if you have received any new emails, check if a number appears next to the respective folder.

![useowa](images/use-owa-step5.png){.thumbnail}

To read an email, select its folder if necessary. Now click on the email to show its content in the reading section. Unread messages appear in a different colour to set them apart from messages that have been read.

![useowa](images/use-owa-step6.png){.thumbnail}

### Sending and replying

**To send a new email**, click the `New`{.action} button at the top of the webmail interface. The editing pane will appear on the right-hand side. Fill in the fields for your email (recipients, subject, message body, attachments). Once you are ready to send it, click the `Send`{.action} button.

![useowa](images/use-owa-step7.png){.thumbnail}

**To reply to an email**, [click on it first](./#viewing-emails) to display it. Then click on the `Reply all`{.action} button. Use the down-arrow button instead if you only want to reply to the sender of the email (leaving out any recipient who is in copy).

![useowa](images/use-owa-step8.png){.thumbnail}

When you choose to reply, the quick-reply editor will appear above the email. Compose your reply here, and once you are ready to send your mail, click `Send`{.action}. Please note that for all reply options (like adding a signature), it must be extended to the full editing pane first by clicking on the double-arrow symbol.

![useowa](images/use-owa-step9.png){.thumbnail}

### Organising your inbox

OWA provides several ways to organise your inbox. You can

- [create folders and subfolders](./#creating-a-folder)
- [move emails](./#moving-emails)
- [set rules](./#creating-inbox-rules) so that actions are performed automatically when a new email is received

#### Creating a folder

To create a new folder, right-click on the name of your email address in the folder tree and then choose `Create new folder`{.action}. You can create a subfolder in existing folders in the same way (`Create new subfolder`{.action}). 

![useowa](images/use-owa-step10.png){.thumbnail}

#### Moving emails

**To move an email**, you can simply drag-and-drop it to the target folder or right-click it and select `Move`{.action}.
**To move multiple emails** at once, select them by checking their tick boxes, and click `Move`{.action} (on the right-hand side) or `Move to`{.action} (in the top section). Then choose the destination folder.

![useowa](images/use-owa-step11.png){.thumbnail}

#### Creating inbox rules

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/msmUN7cLSNI?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To manage rules, click on the gear icon at the top, then click on `Options`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

On the new page that appears, click on `Inbox and sweep rules`{.action} in the left-hand menu. In the "Options" tree-view, you can find this item under "Mail", then "Automatic processing". From here, you can create, edit, delete and move rules in the list. 

To add a new rule, click the `+`{.action} button. 

![useowa](images/use-owa-step13.png){.thumbnail}

Fill in the requested information depending on the action you want the rule to carry out. Afterwards, click `OK`{.action}. 

![useowa](images/use-owa-step14.png){.thumbnail}

For more detailed instructions about creating inbox rules, please refer to our guide: [Creating inbox rules in OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

#### Block a sender

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/UeNdpFwdXm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Click on the gear icon at the top right-hand corner, then click `Options`{.action}. In the left-hand column, follow the "Mail" tree under "Accounts", then "Block or authorise".

In the "**Blocked Senders**" section, type an email address or domain name to block, and then click the `+`{.action} button to add it to the list.

![useowa](images/owa_exchange_block.png){.thumbnail}

### Managing a contact list

To manage your contacts, click the blue "app launcher" button at the top, then click on `People`{.action}.

![useowa](images/use-owa-step15.png){.thumbnail}

On the new page, you can add a new contact, create a contact list, and remove existing contacts.

**To add a new contact**, click `New`{.action}, and enter the contact details you want to add. Once you have done this, click `Save`{.action}.

![useowa](images/use-owa-step16.png){.thumbnail}

**To create a contact list**, click the down-arrow button next to "New", then click `Contact List`{.action}. Give it a name, add contacts to it, then click `Save`{.action}.

![useowa](images/use-owa-step17.png){.thumbnail}

### Changing the password

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/msmUN7cLSNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can change your account password when you are logged in to OWA. To do this, click the gear icon at the top, then click `Options`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

On the new page, expand the "General" tab in the tree on the left-hand side, then click `My Account`{.action}. Finally, click `Change Password`{.action}.

![useowa](images/use-owa-step18.png){.thumbnail}

In the new window that pops up, enter your current password. Then enter a new password, and re-enter to confirm it. Click the `Save`{.action} button to save the new password.

> [!primary]
>
> Remember to also enter your new password on any device i.e. email client used to access this account. In case of any issues with your password, contact your service administrator.
>

![useowa](images/use-owa-step19.png){.thumbnail}

### Adding an auto-reply

In OWA, you can create an automatic reply on your email address to not leave emails unanswered during absences. To do this, click the gear icon at the top, then click `Automatic Replies`{.action}.

![useowa](images/use-owa-step20.png){.thumbnail}

In the window that appears, select the option "Send automatic replies". You can then set the auto-responder to fit several criteria:

- send auto-reply emails for a fixed time interval, or continuously until it is manually disabled
- define which senders will receive auto-reply emails (internal senders only, or include external senders)

Now, fill in the requested information depending on the action you want it to carry out. Once you have done so, click `OK`{.action}.

![useowa](images/use-owa-step21.png){.thumbnail}

For more detailed instructions about creating auto-replies, please refer to our guide: [Creating automatic replies in OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Adding a signature

To add an email signature, click the gear icon at the top, then click `Options`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

On the left-hand side of the new page, click `Email signature`{.action}. In the options tree, this item is under "Mail" and "Layout". From here you can enable, disable and edit the signature.

![useowa](images/use-owa-step22.png){.thumbnail}

Compose your electronic signature in the editor box. You can specify whether you want to include the signature by default in new emails only or in replies and forwarded emails as well. Once you have finished, click `Save`{.action} to confirm.

For instructions about creating automated signatures by using domain-wide templates, please refer to our guide: [Creating automatic signatures](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers).

### Accessing the options section

To access all your settings, click the gear icon at the top, then click `Options`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

You can then browse the "Options" tree-view on the left-hand side of the page. Further adjustments to the layout and behaviour of your email account can be set from here. Please note that some of the account options may be disabled from our side for security reasons.

![useowa](images/use-owa-step23.png){.thumbnail}

### Cookie management

The webmail that is used for our email offers is based on Microsoft Outlook Web App software. It is therefore likely to exchange metadata with Microsoft servers, in the form of cookies called `appsforoffice.microsoft.com`.

If you want to disable these exchanges, you can use a content blocking extension (such as uBlock Origin or Ghostery) on your browser.
However, disabling these cookies may affect the stability of your webmail.

## Go further

[Creating automatic replies in OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Sharing folders in OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Sharing calendars in OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Creating contact groups](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Join our community of users on <https://community.ovh.com/en/>.
