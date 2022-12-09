---
title: "Managing the storage space for an email account"
slug: manage-email-quota
excerpt: "Find out how to manage and optimise an email account storage space"
section: 'Troubleshooting'
order: 02
---

**Last updated 17th November 2022**

## Objective

Every OVHcloud email account has a dedicated storage space. By managing your storage space properly, you can avoid it becoming full, also known as “overquota”. By default, the emails you receive and send are stored on the server of your email account. You can also store your emails locally on your computer using an email client (Outlook, macOS Mail, Thunderbird, etc.).

**This guide explains how to manage and optimise the storage space of email accounts.**

## Requirements

- A preconfigured OVHcloud email solution, such as [**Hosted Exchange**](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/), [**Email Pro**](https://www.ovhcloud.com/en-gb/emails/email-pro/)) or **MX Plan** (available with a [web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/), a [free Start 10M hosting plan](https://www.ovhcloud.com/en-gb/domains/free-web-hosting/), or ordered separately)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- Login credentials for the email account concerned

> [!primary]
>
> **Special cases**
>
> - Regarding the free Start 10M hosting solution, you will need to activate it beforehand in order to create an email account. You can do this from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} by going to the domain name concerned.
> - For [web hosting plans](https://www.ovhcloud.com/en-gb/web-hosting/){.external}, you will need to activate your MX Plan before continuing with this guide. To do this, please refer to our guide on [Activating the email addresses included in your web hosting plan](https://docs.ovh.com/gb/en/hosting/activate-email-web-hosting/).

## Instructions <a name="instructions"></a>

The storage space management for your email account will be broken down into 3 steps in this guide. They can be done in order or independently, depending on your need.

- [**Check**](#check-quota) the current quota for your email account. In this step, you can evaluate your current resource usage, for the next 2 steps.
- [**Optimise**](#optimise) your email account. In this step, you will find tips that will help you maintain a storage space without any extra elements.
- [**Archive** or **Change email offer**](#archiveorswitch). If the previous step is not enough, you will find the information you need to set up a local archive space (on your computer) for your emails via your email software. You will also find the information you need to change your account’s email solution to an offer with more storage space.

![email](images/email-quota-intro.gif){.thumbnail}

### 1. **Check** your email account quota <a name="check-quota"></a>

You can do this via the OVHcloud Control Panel if you are managing the email service concerned, or via webmail if you are the sole user of the email account.

#### From the Control Panel <a name="quotacontrolpanel"></a>

In the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}, go to the `Web Cloud`{.action} section, then follow the instructions for your solution:

> [!tabs]
> **Emails (MX Plan)**
>>
>> Click `Emails`{.action}, then choose the name of the MX Plan service concerned. Go to the `Email accounts`{.action} tab. The window that appears will display the existing email accounts. In the `Size` column, you can see your email account’s current storage consumption.<br><br>
>>![email](images/email-quota-quotacontrolpanel01.png){.thumbnail}<br>
>>
> **Email Pro**
>>
>> Click `Email Pro`{.action}, then choose the name of the platform concerned. Go to the `Email accounts`{.action} tab. The window that appears will display the existing email accounts. In the `Size` column, you can see your email account’s current storage consumption.<br><br>
>>![email](images/email-quota-quotacontrolpanel02.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Click `Microsoft`{.action} / `Exchange`{.action}, then choose the name of the platform concerned. Go to the `Email accounts`{.action} tab. The window that appears will display the existing email accounts. In the `Size` column, you can see your email accounts’s current storage consumption.<br><br>
>>![email](images/email-quota-quotacontrolpanel03.png){.thumbnail}<br>
>>

#### From webmail <a name="quotawebmail"></a>

To log in to webmail, go to the page <https://www.ovhcloud.com/en-gb/mail/> and enter the login information for your email account. Select the webmail client of your solution below:

> [!tabs]
> **OWA**: **Emails (MX Plan)** / **Email Pro** / **Exchange**
>>
>> Click the <i class="icons-gear-concept icons-masterbrand-blue"></i>button on the top right and select `Options`{.action}. Click `My account`{.action} in the `General`{.action} section in the left-hand column. You can view your account’s current quota in the lower right-hand corner of the form.<br><br>
>>![email](images/email-quota-webmail01.png){.thumbnail}<br>
>>
> **Roundcube**: **Emails (MX Plan)**
>>
>> When you are logged in to Roundcube webmail, the quota is visible in the lower left-hand corner, displayed as a pie chart with the percentage used.<br><br>
>>![email](images/email-quota-webmail02.png){.thumbnail}<br>
>>

### 2. **Optimise** your email account <a name="optimise"></a>

If your email account is full, you will no longer be able to receive emails.<br>
When a person sends you an email, they receive an error message in the form of an automatic reply, such as *"552, 5.2.2". The email account to which you sent a message has exhausted its quota."*.<br>
When your email account is full, you can still send emails. However, these emails cannot be stored in your "sent messages" folder.

#### Optimise the space allocated to your email account

Before you perform any other operation on your email account, you will need to familiarise yourself with the content of your email account, in order to remove any unnecessary elements. Please check some of them:

- `1`{.action} **Deleted items (Trash)**: It contains the items you have deleted. To avoid cumulating emails in this folder, we recommend emptying the trash regularly.
- `2`{.action} **Sent items**: When you send an email to a recipient, a copy of this email is stored in the “Sent items” folder. We recommend that you regularly purge this folder or archive its contents, locally on your computer or remotely on a cloud storage space.
- `3`{.action} **Stored emails containing large attachments**: Emails with attachments take up more space on your email account. We recommend storing large items locally on your computer or remotely on a cloud storage space.
- `4`{.action}**Folder organisation**: When you have a lot of folders on your email account, it is harder to keep track of the used space on your email account. Take regular inventory of your folders and their contents.

![email](images/email-quota-optimise01.png){.thumbnail}

#### Increase the capacity of your email account

You can increase the storage capacity of your email account, if it has not reached its maximum capacity. Below, you will find the approach to follow, depending on your solution:

> [!tabs]
> **Emails (MX Plan)**
>>
>> The capacity of an MX Plan account can range from 2.5 MB to 5 GB. If it is full and its capacity is less than 5 GB, you can modify its capacity via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).<br>
>> In the `Email accounts`{.action} tab, click the <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>button to the right of the account you want to change, and then click `Edit`{.action}.
>> From the `Quota`{.action} box, select the desired size, click `Next`{.action}, then `Confirm`{.action}.<br><br>
>> ![email](images/email-quota-more01.png){.thumbnail}<br>
>>
> **Email Pro**
>> 
>> The Email Pro solution has a unique capacity of 10 GB. To increase it, you need to switch to a plan that includes more storage space. Follow the steps below to[change your email service](#switchingoffer).<br>
>>
> **Exchange**
>>
>> If your Exchange account reaches 50 GB saturation, it is possible for the **Hosted** and **Provider** offers to subscribe to an extension option to extend its capacity to 300 GB.<br>
>> From the `Email accounts`{.action} tab on your platform, click the <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>button to the right of the account you want to modify, then click on `Increase capacity to 300 GB`{.action}. Choose your billing method and click `Validate`{.action}.<br><br>
>>![email](images/email-quota-more02.png){.thumbnail}<br>
>>
>> If your Exchange account has already filled up its 300 GB of storage on a **Hosted** or **Provider** offer, you will need to free up space on your Exchange account by deleting obsolete items or [archive your emails](#archiveorswitch) on your computer locally. This also applies to 50 GB Exchange accounts that are included in a **Private** solution.
>>

### 3. **Archive** emails or **change your email solution** <a name="archiveorswitch"></a>

#### Archive your emails locally on your computer

> [!warning]
> 
> The following information is based on an IMAP configuration for your email account, which is the most common configuration. With the POP configuration, emails are already stored locally on your computer. Archiving these emails is therefore not relevant for storage space management.

When you set up your email address on your email client in IMAP, the visible content **by default**, corresponds to what is **synced on the email server**. This means that the emails are loaded on your computer but disappear if they are deleted from the server. To **archive them to your computer**, you must configure your email software.

![email](images/email-quota-step03-archive.png){.thumbnail}

If you want, you can free the storage space of your email account by storing your emails directly on your computer. To do this, you will need to use an email client installed on your computer.

The role of email software is to convert your emails into files, so that they can be stored on your computer. However, you will need to configure your email software’s archive feature. The emails will then be stored in a local folder and not directly on the server of your email account.

Below is a nonexhaustive list of configuration guides for email clients on computers, depending on the solution you have:

- IMAP protocol on the **MX Plan** and **Email Pro** offers
- MAPI protocol on the **Exchange** offer for Windows Outlook
- EWS protocol on the **Exchange** offer for macOS Outlook

> [!tabs]
> **Emails (MX Plan)**
>>
>> Configuring an MX Plan account on **Windows**:<br><br>
>> - [Windows 10 Mail](https://docs.ovh.com/gb/en/emails/mail-configuration-windows-10/) (included with Windows)<br>
>> - [Outlook for MX Plan](https://docs.ovh.com/gb/en/emails/configuration-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/gb/en/emails/configure-email-for-thunderbird-windows/) (free)<br><br>
>> Configuring an MX Plan account on **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/gb/en/emails/guide-configuring-mail-on-macOS/) (included with macOS)<br>
>> - [Outlook](https://docs.ovh.com/gb/en/emails/configuration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/gb/en/emails/configure-email-for-thunderbird-mac/) (free)<br>

>>
> **Email Pro**
>>
>> Configuring an Email Pro account on **Windows**:<br><br>
>> - [Windows 10 Mail](https://docs.ovh.com/gb/en/emails-pro/mail-configuration-windows-10/) (included with Windows)<br>
>> - [Outlook](https://docs.ovh.com/gb/en/emails-pro/configuration-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/gb/en/emails-pro/configure-emailpro-for-thunderbird-windows/) (free)<br><br>
>> Configuring an Email Pro account on **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/gb/en/emails-pro/configuring-email-pro-macOS-mail/) (included with macOS)<br>
>> - [Outlook](https://docs.ovh.com/gb/en/emails-pro/configuration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/gb/en/emails-pro/configure-emailpro-for-thunderbird-mac/) (free)<br>
>>
> **Exchange**
>>
>> Configuring an Exchange account on **Windows**:<br><br>
>> - [Windows 10 Mail](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/mail-configuration-windows-10/) (included with Windows)<br>
>> - [Outlook](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/configuration-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-configuration-thunderbird/) (free)<br><br>
>> Configuring an Exchange account on **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-automatic-configuration-on-mail-mac/) (included with macOS)<br>
>> - [Outlook](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/configuration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-configuration-thunderbird-mac/) (free)<br>
>>

Once you have installed your email software, follow the instructions below to prepare the archive folder.

> [!tabs]
> **Outlook**
>>
>> In Outlook, make sure that the folder "archive" or "on my computer" is present in your left-hand column so that you can put the items you want to keep locally on your computer. See the Microsoft documentation for preparing your archive folder:<br><br>
>> - [Archiving in Outlook for Windows](https://support.microsoft.com/en-gb/office/archive-in-outlook-for-windows-25f75777-3cdc-4c77-9783-5929c7b47028){.external}<br>
>> - [About folders on my computer in Outlook for Mac](https://support.microsoft.com/en-gb/office/about-on-my-computer-folders-in-outlook-for-mac-c91b8729-924d-4c25-a5f6-38883d0f763d){.external}<br>
>>
> **Mail macOS**
>>
>> From Mail on macOS, create a folder that will appear in the "On my Mac" section in the left-hand column. To do this, follow the Apple documentation:<br><br>
>> - [Create or delete mailboxes in Mail on Mac](https://support.apple.com/en-gb/guide/mail/mlhlp1021/15.0/mac/12.0){.external}<br>
>>
> **Thunderbird**
>>
>> Via Thunderbird from Windows, macOS or Linux, you can move your emails to a folder in the left pane. Use the Mozilla documentation:<br><br>
>> - [Message Archiving](https://support.mozilla.org/en-US/kb/archived-messages){.external}<br>
>>

#### Change your email solution to increase capacity <a name="switchingoffer"></a>

Select the current solution for your email account from the menu below:

> [!tabs]
> **Emails (MX Plan)**
>>
>> If your email account already has a maximum capacity of 5 GB, you can opt for a migration to a [10 GB **Email Pro** solution](https://www.ovhcloud.com/en-gb/emails/email-pro/) or a 50 GB [**Hosted Exchange** offer](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/). To do this, please order the solution that suits your needs, and follow our guide on [Migrating an MX Plan email account to Email Pro or Exchange](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/migration-email-address-to-exchange/). 
>>
> **Email Pro**
>>
>> The Email Pro offer has a unique capacity of 10GB. You can choose to migrate to a [50 GB **Hosted Exchange** solution](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/). To do this, order Hosted Exchange and follow our guide on [Migrating your email account from one OVHcloud email platform to another](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/migration-email-platform/).
>>
> **Exchange**
>>
>> If your Exchange account is saturated with 50 GB of space, you can subscribe to an extension option to expand its capacity to 300 GB. This only possible if the Exchange account is on a **Hosted** or **Provider** offer.<br>
>> In the `Email accounts`{.action} tab on your Exchange platform, click the <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>button to the right of the account you want to modify, then click `Increase capacity to 300 GB`{.action}.<br><br>
>> ![email](images/email-quota-more02.png){.thumbnail}<br>
>>

## Go further

[Migrating an MX Plan email account to Email Pro or Exchange](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/migration-email-address-to-exchange/)

[Manually migrate your email account](https://docs.ovh.com/gb/en/emails/migrate-email-addresses-manually/)

[Migrating your email account from one OVHcloud email platform to another](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/migration-email-platform/)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
