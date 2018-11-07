---
title: 'Configuring your MX Plan email address'
excerpt: 'An overview of OVH email'
slug: web_hosting_an_overview_of_ovh_email
section: 'Getting started'
order: 3
---

> [!warning]
>
> You are responsible for managing and configuring your OVH services and solutions, to ensure they work correctly. 
> 
> This guide is designed to assist you with common tasks. However, we recommend contacting a specialist provider and/or the service’s software publisher for further assistance. We will not be able to provide direct assistance ourselves. You can find more information in the “Go further” section of this guide. 
> 

## Use the email address

OVH offers Roundcube: an online webmail application. Roundcube is available at the following address: <https://www.ovh.co.uk/mail/>. You will need to enter the credentials for the email address that you created with OVH.

## Configure the email address

|Configure on computer|Configure on smartphone|Configure an email service|
|---|---|---|
|[Outlook 2016 for Windows](https://docs.ovh.com/gb/en/emails/configuration-outlook-2016/){.external}|[iOS 7 or later](https://docs.ovh.com/gb/en/emails/email_hosting_iphone_ios_91_configuration/){.external}|[Gmail](https://docs.ovh.com/gb/en/emails/gmail-configuration/){.external}|
|[Outlook 2016 for Mac](https://docs.ovh.com/gb/en/emails/configuration-outlook-2016-mac/){.external}|[Android](https://docs.ovh.com/gb/en/emails/configuration-android/){.external}| |
|[macOS Mail app](https://docs.ovh.com/gb/en/emails/guide-configuring-mail-on-macos/){.external}| | |
|[Windows 10](https://docs.ovh.com/gb/en/emails/mail-configuration-windows-10/){.external}| | |

**IMAP configuration (Recommended)**

|Server type|Server name|Port (SSL enabled)|Port (SSL disabled)|
|---|---|---|---|
|Incoming|SSL0.OVH.NET|993|143|
|Outgoing|SSL0.OVH.NET|465|587|

**POP configuration**

|Server type|Server name|Port (SSL enabled)|Port (SSL disabled)|
|---|---|---|---|
|Incoming|SSL0.OVH.NET|995|110|
|Outgoing|SSL0.OVH.NET|465|587|

The outgoing server must be authenticated so that you can send emails without any issues. Otherwise, this error may occur: `553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)`

## Go further

Join our community of users on <https://community.ovh.com/en/>.