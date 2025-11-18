---
title: "MX Plan / Zimbra Starter - How to add an email account to the New Outlook for Windows"
excerpt: "Find out how to configure your email address from the MX Plan or Zimbra Starter on the New Outlook for Windows"
updated: 2025-09-26
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

The email addresses from the MX Plan and [Zimbra](/links/web/emails-zimbra) Starter offers can be configured on a compatible email client. This allows you to send and receive messages from your preferred application.

The **New Outlook** replaces the **Mail** application on Windows starting from January 1, 2025. For more information, visit Microsoft's official page:  
[Outlook for Windows: The Future of Mail, Calendar, and People on Windows 11](https://support.microsoft.com/office/outlook-for-windows-the-future-of-mail-calendar-and-people-on-windows-11-715fc27c-e0f4-4652-9174-47faa751b199)

**Learn how to configure your MX Plan email account on the New Outlook for Windows.**

## Requirements

- You have an OVHcloud email solution such as:
    - **MX Plan** offered with our [web hosting services](/links/web/hosting) or included in a [free 100M hosting](/links/web/domains-free-hosting).
    - [Zimbra](/links/web/emails-zimbra) Starter.
- You have the [new version of Outlook](https://support.microsoft.com/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) installed on your Windows system.
- You have the credentials for the email account you wish to configure.

> [!warning]
>
> This documentation applies exclusively to the **New Outlook** and not to the [Classic Outlook](https://support.microsoft.com/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5), available in the Microsoft 365 suite or previously installed on your computer.

/// details | Information related to the management and configuration of OVHcloud services

This guide will show you how to use OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.

If you experience any difficulties carrying out these operations, we recommend that you contact a [specialist service provider](/links/partner) or discuss the issue with our [community](/links/community). OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#gofurther) section of this guide.

///

## Instructions

### Add the account <a name="add-account"></a>

> [!warning]
>
> It is necessary to select the tab in step 3 corresponding to your location (**EUROPE** or **AMERICA/ASIA-PACIFIC**) to obtain the correct values.

> [!tabs]
> **Step 1**
>> - Open Outlook. In the left column, click `Add an account`{.action} to start the configuration.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-600}
>>
> **Step 2**
>> - Enter your email address and click `Continue`{.action}.
>> - Enter your password and click the `Show more`{.action} button.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-600}
>>
> **Step 3 - EUROPE**
>> - Enter the following parameters:
>>    - **IMAP Incoming Server**: imap.mail.ovh.net **or** ssl0.ovh.net.
>>    - **Port**: 993
>>    - **Secure Connection Type**: SSL/TLS
>>    - **SMTP Username**: The email address you are adding.
>>    - **SMTP Outgoing Server**: smtp.mail.ovh.net **or** ssl0.ovh.net.
>>    - **Port**: 465
>>    - **Secure Connection Type**: SSL/TLS
>>    - **Password**: Do not enter anything, the password entered earlier will be used.
>> - Click `Continue`{.action} to complete the configuration.
>>
>> ![outlook](images/configuration-newoutlook-windows-03.png){.thumbnail .w-600}
>>
> **Step 3 - AMERICA/ASIA-PACIFIC**
>> - Enter the following parameters:
>>    - **IMAP Incoming Server**: imap.mail.ovh.ca
>>    - **Port**: 993
>>    - **Secure Connection Type**: SSL/TLS
>>    - **SMTP Username**: The email address you are adding.
>>    - **SMTP Outgoing Server**: smtp.mail.ovh.ca
>>    - **Port**: 465
>>    - **Secure Connection Type**: SSL/TLS
>>    - **Password**: Do not enter anything, the password entered earlier will be used.
>> - Click `Continue`{.action} to complete the configuration.
>>
>> ![outlook](images/configuration-newoutlook-windows-03ca.png){.thumbnail .w-600}

### Using the email address <a name="use-account"></a>

Once the email address is configured, you can start using it! You can now send and receive messages.

OVHcloud also offers a web application to access your email address from your browser, available at [Webmail](/links/web/email). You can log in using the credentials for your email address.

### Modify Existing Settings <a name="modify-settings"></a>

The Outlook application does not allow you to modify the server settings for your email account.

If your email account is already configured and you want to configure it again, you must delete it and recreate it:

- Click the settings icon (&#9965;) at the bottom of the left column.
- In the "Your Accounts" section, click `Manage`{.action} to the right of the relevant email address.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-600}

- Scroll to the bottom of the page.
- Click `Delete`{.action} to start the deletion process.
- Determine if you want to delete the account only from this device or also from other devices using Outlook.

![outlook](images/configuration-newoutlook-windows-05.png){.thumbnail .w-600}

> [!success]
>
> Once your email account has been deleted, follow the instructions in the "[Add the Account](#add-account)" section of this documentation.

### General sending and receiving settings <a name="settings-account"></a>

#### IMAP and POP receiving settings <a name="imap-pop"></a>

For receiving emails, we recommend using **IMAP**. However, you can also select **POP**.

> [!warning]
>
> It is necessary to select the correct value corresponding to your location (**EUROPE** or **AMERICA/ASIA-PACIFIC**).

Select the tab corresponding to your configuration type:

> [!tabs]
> **IMAP Configuration**
>>
>> - **Username**: Enter the **complete** email address.
>> - **Password**: Enter the email account password.
>> - **EUROPE Incoming Server**: imap.mail.ovh.net **or** ssl0.ovh.net.
>> - **AMERICA/ASIA-PACIFIC Incoming Server**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Secure Connection Type**: SSL/TLS.
>>
> **POP Configuration**
>>
>> - **Username**: Enter the **complete** email address.
>> - **Password**: Enter the email account password.
>> - **EUROPE Incoming Server**: pop.mail.ovh.net **or** ssl0.ovh.net.
>> - **AMERICA/ASIA-PACIFIC Incoming Server**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Secure Connection Type**: SSL/TLS.

#### SMTP sending settings <a name="smtp"></a>

For sending emails, use the following **SMTP** parameters:

**SMTP Configuration**

- **Username**: Enter the **complete** email address.
- **Password**: Enter the email account password.
- **EUROPE Outgoing Server**: smtp.mail.ovh.net **or** ssl0.ovh.net.
- **AMERICA/ASIA-PACIFIC Outgoing Server**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Secure Connection Type**: SSL/TLS.

<a name="go-further"></a>

## Go further

> [!primary]
>
> For more information on configuring an email address from the New Outlook messaging client on Windows, please refer to [Microsoft's help center](https://support.microsoft.com/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Getting Started with MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Getting Started with Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

For specialized services (SEO, development, etc.), contact [OVHcloud Partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [User Community](/links/community).