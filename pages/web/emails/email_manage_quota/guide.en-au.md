---
title: "Managing the storage space for an email account"
slug: manage-email-quota
excerpt: "Find out how to manage and optimise an email address storage space"
section: 'Troubleshooting'
order: 02
---

**Last updated 17th November 2022**

## Objective

Every OVHcloud email account has a dedicated storage space. By managing your storage space properly, you can avoid it becoming saturated, also known as “overquota”. By default, the emails you receive and send are stored on the server of your email account. You can also store your emails locally on your computer using an email client (Outlook, MacOS Mail, Thunderbird, etc.).

**Find out how to manage and optimise an email address storage space.**

## Requirements

- a pre-configured OVHcloud email solution (**MX Plan**, available as part of our [web hosting plans](https://www.ovhcloud.com/en-au/web-hosting/));
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), and `Web Cloud`{.action} section ;
- access to the email addresses concerned.

## Instructions  <a name="instructions"></a>

The storage space management for your email account will be broken down into 3 steps in this guide. They can be done in order or independently, depending on your need.

- [**Check**](#check-quota) the current quota for your email account. In this step, you can evaluate your current resource usage, for the next 2 steps.
- [**Optimise**](#optimise) your email account. In this step, you will find tips that will help you maintain a storage space without any extra elements.
- [**Archive**](#archiveorswitch) offer. If the previous step is not enough, you will find the information you need to set up a local archive space (on your computer) for your emails via your email software.

### 1- **Check** your email account quota <a name="check-quota"></a>

You can do this via the OVHcloud Control Panel if you are managing the email service concerned, or via webmail if you are the sole user of the email account.

#### From the Control Panel <a name="quotacontrolpanel"></a>

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), go to the `Web Cloud`{.action} section, then follow the instructions for your solution:

Click `Emails`{.action}, then choose the name of the MX Plan service concerned. Go to the `Email`{.action} accounts tab. The window that appears will display the existing email accounts. In the `Size` column, you can see your email address’s current storage consumption.

![email](images/email-quota-quotacontrolpanel01.png){.thumbnail}


#### From webmail <a name="quotawebmail"></a>

To log in to webmail, go to the page <https://www.ovhcloud.com/en-au/mail/> and enter the login information for your email account. Then select the webmail address for your solution below:

Click the button on the <i class="icons-gear-concept icons-masterbrand-blue"></i>top right of your screen, then click `Options`{.action}. Click `My Account`{.action} in the `General`{.action} section in the left-hand column. You can view your account’s current quota in the lower right-hand corner of the form.

![email](images/email-quota-webmail01.png){.thumbnail}<br>


### 2- **Optimise** your email account <a name="optimise"></a>

If your email account is full, you will no longer be able to receive emails.<br>
When a person sends you an email, they receive an error email in the form of an automatic reply, such as *"552, "5.2.2". The email account to which you sent a message has exhausted its quota."*.<br>
When your email account is full, you can always send emails on your side. However, these emails cannot be stored in your "sent messages".

#### Optimise the space allocated to your email account

Before you perform any other operation on your email account, you will need to familiarise yourself with the content of your email account, in order to remove any unnecessary elements. Please check some of them:

- `1`{.action} **The Trash**: it contains the items you have deleted. To avoid cumulating emails in this folder, we recommend emptying the trash regularly.
- `2`{.action} **Items sent (sent messages)**: when you send an email, it is sent to the recipient. However, it is also stored on your email account in the “sent items”. We recommend that you regularly purge this folder, or archive its contents locally on your computer or on a remote cloud storage space.
- `3`{.action} **Stored emails containing large** attachments: emails with attachments take up more space on your email account. We recommend storing large items on local (computer) or remote (cloud) storage space.
- `4`{.action}**Sort records**: when you have a lot of folders on your email account, it is less easy to measure the space taken up on your email account. Take regular inventory of your files and their contents.

![email](images/email-quota-optimise01.png){.thumbnail}

#### Increase the capacity of your email account

You can increase the storage capacity of your email account, if it has not reached its maximum capacity. Below, you will find the approach to follow, depending on your solution:

The capacity of an MXplan account can range from 2.5 MB to 5 GB. If it is full and its capacity is less than 5 GB, you can modify its capacity via the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au).<br>
In the `Email accounts`{.action} tab, click the button <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> to the right of the account you want to change, and then click `Edit`{.action}.
From the `Quota`{.action} box, select the size that suits you, click `Next`{.action}, then `Confirm`{.action}.<br><br>
![email](images/email-quota-more01.png){.thumbnail}<br>

### 3- **Archive** or **change your email solution** <a name="archiveorswitch"></a>

#### Archive your emails locally on your computer

> [!warning]
>
> The following information is based on an IMAP configuration for your email account, which is the most common configuration. The POP configuration is based on the principle of storing emails locally. In our context, it is therefore not relevant to archive emails that are already stored locally on your computer.

When you set up your email address on your email client in IMAP, by **default**, the visible content corresponds to what is **synced on the email** server. This means that the emails are loaded on your computer but disappear if they are deleted from the server. To **archive them to your computer**, you must configure your email software.

![email](images/email-quota-step03-archive.png){.thumbnail}

If you want, you can free the storage space of your email account by storing your emails directly on your computer. To do this, you will need to use an email client installed on your computer.
The role of email software is to convert your emails into files, so that they can be stored on your computer. However, you will need to configure your email software’s archive feature. The emails will then be in a "local" folder and not directly on the server of your email account.

Below is a non-exhaustive list of configuration guides for email clients on computers, depending on the solution you have:

Configuring an MXplan account on **Windows**:

- [Mail on Windows 10](https://docs.ovh.com/au/en/emails/mail-configuration-windows-10/) (included with Windows)
- [Outlook for Mxplan](https://docs.ovh.com/au/en/emails/configuration-outlook-2016/)
- [Thunderbird](https://docs.ovh.com/au/en/emails/configure-email-for-thunderbird-windows/) (free)

Configuring an MXplan account on **macOS**:

- [Mail](https://docs.ovh.com/au/en/emails/guide-configuring-mail-on-macos/) (included with macOS)
- [Outlook](https://docs.ovh.com/au/en/emails/configuration-outlook-2016-mac/)
- [Thunderbird](https://docs.ovh.com/au/en/emails/configure-email-for-thunderbird-mac/) (free)

Once you have installed your email software, follow the instructions below to prepare the archive folder on your email software.

> [!tabs]
> **Outlook**
>>
>> In Outlook, make sure that the folder "archive" or "on my computer" is present in your left-hand column so that you can put the items you want to keep locally on your computer. See the Microsoft documentation for preparing your archive folder:<br><br>
>> - [Archiving in Outlook for Windows](https://support.microsoft.com/en-us/office/archive-in-outlook-for-windows-25f75777-3cdc-4c77-9783-5929c7b47028)<br>
>> - [About folders on my computer in Outlook for Mac](https://support.microsoft.com/en-us/office/about-on-my-computer-folders-in-outlook-for-mac-c91b8729-924d-4c25-a5f6-38883d0f763d)<br>
>>
> **Mail macOS**
>>
>> From Mail on macOS, create a folder that will appear in the "On my Mac" section in the left-hand column. To do this, follow the Apple documentation:<br><br>
>> - [Create or delete mailboxes in Mail on Mac](https://support.apple.com/en-gb/guide/mail/mlhlp1021/15.0/mac/12.0)<br>
>>
> **Thunderbird**
>>
>> Via thunderbird from Windows, macOS or Linux, you can move your emails to a folder in the left pane. Use the Mozilla documentation:<br><br>
>> - [Message Archiving](https://support.mozilla.org/en-US/kb/archived-messages)<br>
>>

## Go further

[Manually migrate your email address](https://docs.ovh.com/au/en/emails/migrate-email-addresses-manually/)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-au/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
