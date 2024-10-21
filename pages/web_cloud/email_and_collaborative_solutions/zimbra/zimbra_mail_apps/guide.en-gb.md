---
title: "How to configure a Zimbra email address on an email client"
excerpt: "Find out how to configure your email software to view emails from your Zimbra account"
updated: 2024-10-10
---

<style>
.w-400 {
max-width:400px!important;
}
</style>

> [!warning]
>
> **Important**
>
> The Zimbra solution is a beta-phase product.
>
> It is only available to those who have completed the [beta registration form](https://labs.ovhcloud.com/en/zimbra-beta/).
>

## Objective

With the Zimbra solution, OVHcloud offers an open-source collaborative messaging platform, with all the features you need for professional use. On this page, you can find the information you need to configure your Zimbra email accounts on your preferred email client.

**Find out how to configure your email software to manage emails from your Zimbra account.**

## Requirements

- An email account on our Zimbra OVHcloud email solution
- An email client installed on the device of your choice

## Instructions

### Configuring your email account <a name="mail-config"></a>

Your Zimbra email account configuration uses the same settings as the MX Plan email solution, which is included with OVHcloud Web Hosting plans as well. For this reason, the documentation pages linked below refer to "MX Plan".

Click the tab for the type of device you are using:

> [!tabs]
> **Windows PC**
>>
>> - [Outlook for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Mail for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Apple mac computer**
>>
>> - [Outlook for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone or iPad**
>>
>> - [Mail for iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Android Smartphone or Tablet**
>>
>> - [Gmail for Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Web Interface**
>>
>> - [Gmail online interface](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### POP, IMAP and SMTP settings <a name="popimap-settings"></a>

When you choose your account type, we recommend using **IMAP** to receive emails. However, you can decide to use **POP**.

- **POP configuration**

|Information|Description|
|---|---|
|Username|Enter the **full** email address. |
|Password|Enter the password for the email account|
|Server **EUROPE** (incoming)|pop.mail.ovh.net **ou** ssl0.ovh.net|
|Server **AMERICA / ASIA-PACIFIC** (incoming)|pop.mail.ovh.ca|
|Port|995|
|Security type|SSL/TLS|

- **IMAP configuration**

|Information|Description|
|---|---|
|Username|Enter the **full** email address. |
|Password|Enter the password for the email account|
|Server **EUROPE** (incoming)|imap.mail.ovh.net **ou** ssl0.ovh.net|
|Server **AMERICA / ASIA-PACIFIC** (incoming)|imap.mail.ovh.ca|
|Port|993|
|Security type|SSL/TLS|

For sending emails, if you need to enter the **SMTP** settings manually in your account preferences, you will find the settings below:

- **SMTP configuration**

|Information|Description|
|---|---|
|Username|Enter the **full** email address. |
|Password|Enter the password for the email account|
|Server **EUROPE** (incoming)|smtp.mail.ovh.net **ou** ssl0.ovh.net|
|Server **AMERICA / ASIA-PACIFIC** (incoming)|smtp.mail.ovh.ca|
|Port|465|
|Security type|SSL/TLS|

## Go further <a name="go-further"></a>

[Getting started with Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Use Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you would like assistance with using and configuring your OVHcloud solutions, we recommend referring to our range of [support solutions](/links/support).

Join our [community of users](/links/community).
