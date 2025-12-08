---
title: 'E-mail Pro - Configure your email account in Thunderbird for Windows'
excerpt: 'Find out how to configure your Email Pro address in Thunderbird for Windows'
updated: 2025-09-19
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
</style>

## Objective

Email Pro accounts can be configured on different compatible email clients. This allows you to use your email address from the device of your choice. Thunderbird is a free and open-source email client.

**This guide explains how to configure your Email Pro address in Thunderbird for Windows.**

## Requirements

- An [Email Pro](/links/web/email-pro) account
- The Thunderbird software installed on your Windows device
- The credentials for the email account you want to configure

/// details | Information regarding the administration and configuration of OVHcloud services

This guide will show you how to use OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.

If you experience any difficulties carrying out these operations, we recommend that you contact a specialist service provider or discuss the issue with our [community](/links/community). OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#go-further) section of this guide.

///

## Instructions

> [!warning]
>
> In our examples, we will use as the server name: pro?.mail.ovh.net. You will need to replace the "?" with the number designating the server of your Email Pro service.
>
> 1. Log in to your [OVHcloud Control Panel](/links/manager).
> 1. Go to the `Web Cloud`{.action} section.
> 1. Click on `Email Pro`{.action}.
> 1. Select the platform concerned.
> 1. The server name is visible in the **Connection** section of the `General Information`{.action} tab.

### Add the account

- **When starting the application for the first time**: A configuration wizard will appear and prompt you to enter your email address.

- **If an account is already configured on the application**:

    1. Click on the menu `☰`{.action} in the top horizontal bar.
    2. Click on `New Account`{.action}.
    3. Click on `Email Address`{.action}.

![thunderbird](images/configuration-thunderbird-win-01.png){.thumbnail .w-600}

Follow the configuration steps by clicking successively on the **5** tabs:

> [!tabs]
> **Step 1**
>>
>> In the window that appears, enter the following two pieces of information:
>>
>>  - Your full name (display name).
>>  - The email address you want to configure.
>>
>> Click on `Continue`{.action} to complete the settings.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-02.png){.thumbnail .w-600}
>>
> **Step 2**
>>
>> When Thunderbird detects an OVHcloud domain name, an automatic configuration related to the MX Plan offer is proposed. Click on `Modify Configuration`{.action}.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Step 3**
>>
>> Reception server settings:
>>
>>  - **Protocol**: IMAP
>>  - **Server name**: pro?.mail.ovh.net (replace the "?" with the number of your server)
>>  - **Port**: 993
>>  - **Connection security**: SSL/TLS
>>  - **Authentication method**: Normal password
>>  - **Username**: Your full email address
>>
>> ![thunderbird](images/configuration-thunderbird-emp-04.png){.thumbnail .w-600}
>>
> **Step 4**
>>
>> Sending server settings:
>>
>>  - **Protocol**: SMTP
>>  - **Server name**: pro?.mail.ovh.net (replace the "?" with the number of your server)
>>  - **Port**: 587
>>  - **Connection security**: STARTTLS
>>  - **Authentication method**: Normal password
>>  - **Username**: Your full email address
>> 
>> 1. Click on `Test`{.action} to verify the settings entered.<br>
>> 2. Click on `Continue`{.action} to validate these settings.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-05.png){.thumbnail .w-600}
>>
> **Step 5**
>>
>> Enter the password associated with the email account, then click on `Continue`{.action} to finalize the configuration.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **POP configuration**
>
> If you want a POP configuration for your email address, replace the settings of **Step 3** with the following:
>
> Reception server settings:
>
> - **Protocol**: POP3
> - **Server name**: pro?.mail.ovh.net (replace the "?" with the number of your server)
> - **Port**: 995
> - **Connection security**: SSL/TLS
> - **Authentication method**: Normal password
> - **Username**: Your full email address

### Use your email address

Once your email address is configured, you can start using it! You can now send and receive emails.

OVHcloud also offers a web application that allows you to access your email account from a web browser. To access the OVHcloud Webmail, click on [this link](/links/web/email). You can log in using your email account credentials.

### Retrieve a backup of your email account

If you need to perform an operation that may result in the loss of data from your email account, we recommend that you create a backup of the email account concerned beforehand. To do this, refer to the "**Export**" section in the "**Thunderbird**" part of our guide "[Manually migrate your email address](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Modify existing settings

If your email account is already configured and you need to access the account settings to modify them:

1. Click on the menu `☰`{.action} in the top horizontal bar.
2. Click on `Account Settings`{.action}.

![Thunderbird](images/configuration-thunderbird-win-07.png){.thumbnail .w-600}

- To modify the settings related to **receiving** emails, click on `Server Settings`{.action} in the left column under your email address.

![thunderbird](images/configuration-thunderbird-emp-win-08.png){.thumbnail .w-600}

- To modify the settings related to **sending** emails, click on `Outgoing Server (SMTP)`{.action} at the bottom of the left column.
- Click on the email address concerned in the list, then click on `Edit`{.action}.

![thunderbird](images/configuration-thunderbird-emp-win-09.png){.thumbnail .w-600}

## Go further <a name="go-further"></a>

> [!primary]
>
> For more information on configuring an email address in the Thunderbird client, please visit the [Mozilla Support Center](https://support.mozilla.org/products/thunderbird).

[Getting started with Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
