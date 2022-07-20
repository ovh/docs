---
title: Configuring an email address on iPhone and iPad
slug: email_hosting_iphone_ios_91_configuration
excerpt: Find out how to configure an MX Plan email address on iPhone and iPad
section: Configure on smartphone
order: 01
---

**Last updated 20th July 2022**

## Objective

You can configure MX Plan email addresses on email clients and applications, if they are compatible. By doing so, you can use your email address through your preferred device.

**This guide explains how to configure an MX Plan email address on iPhone and iPad, via the Mail app.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en-au/directory/) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- an MX Plan email address included in [OVHcloud Web Hosting plans](https://www.ovhcloud.com/en-au/web-hosting/){.external}
- being up-to-date in the [payments](https://docs.ovh.com/au/en/billing/manage-ovh-bills/#pay-bills) and [renewals](https://docs.ovh.com/au/en/billing/how-to-use-automatic-renewal-at-ovh/#renewal-management) of related services (domain name and web hosting plan)
- the Mail app installed on your iOS device
- login credentials for the email account to be configured

## Instructions

### Adding an account

On your device’s home screen, go to `Settings`{.action} (cogwheel icon). There are several ways you can add an account, depending on your iOS version:

- **For iOS 7, 8, 9 and 10**: Go to `Mail, Contacts, Calendar`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the table below.

- **For iOS 11**: Go to `Accounts and passwords`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the table below.

- **For current versions**: follow the instructions in the table below.

| | |
|---|---|
|![iPhone](images/configuration-mail-ios-step01.gif){.thumbnail}|1. In `Settings`, go to `Mail`. <br><br> 2. Tap `Accounts`.<br><br> 3. Tap `Add Account`.<br><br> 4. Choose `Other` at the bottom.|
|5. Tap `Add Mail Account`.<br><br>6. Enter your **name**, **email** address, **password** and account **description**.<br><br>7. Press `Next`.|![iPhone](images/configuration-mail-ios-step02.png){.thumbnail}|
|![iPhone](images/configuration-mail-ios-step03-ca.png){.thumbnail}|8. Select `IMAP` (recommended) or `POP`.<br><br>In the `INCOMING MAIL SERVER` and `OUTGOING MAIL SERVER` sections, despite the word "optional", enter: <br>- the hostnames **imap.mail.ovh.ca** (IN) / **smtp.mail.ovh.ca** (OUT) <br>- your **full email address** as username <br>- your email password|

At the end of the configuration process, ensure that you leave `Mail`{.action} ticked, so that the application can use this account, then click `Save`{.action}.

To check that the account has been correctly configured, you can send a test email using the Mail app on your device.

If you need to enter any settings manually in your account preferences, the technical settings you will need to use with our MX Plan solution are listed below:

- **for IMAP configuration**

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|imap.mail.ovh.ca|Yes|993|
|Outgoing|smtp.mail.ovh.ca|Yes|465|

- **for POP configuration**

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|pop.mail.ovh.ca|Yes|995|
|Outgoing|smtp.mail.ovh.ca|Yes|465|

### Using your email address
        
Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also offers a web application you can use to access your email account from your browser, accessible via <https://www.ovh.com.au/mail/>. You can log in using your email credentials.

> [!primary]
>
> If you experience any difficulties receiving or sending emails, please read our [FAQ about OVHcloud email services](../emails-faq/).
>

## Go further

[Email FAQ](../emails-faq/)

Join our community of users on <https://community.ovh.com/en/>.
