---
title: "Exchange - Configure your email account on Mail for iPhone and iPad"
excerpt: Find out how to configure an Exchange account on iPhone and iPad, via the Mail app
updated: 2024-10-09
---

## Objective

You can configure Exchange accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application.

**This guide explains how to configure your Exchange account on iPhone and iPad, via the Mail app.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- an [OVHcloud Exchange account](/links/web/emails-hosted-exchange)
- the Mail app installed on your iOS device
- login credentials for the email account to be configured

## Instructions

### Adding an account <a name="addaccount"></a>

> [!primary]
>
> In our example, we use as the hostname: ex**?**.mail.ovh.ca. You will need to replace the "?" with the actual number indicating the appropriate server for your Exchange service.
> 
> You can find this information in the [OVHcloud Control Panel](/links/manager), in the `Web Cloud`{.action} section, if you select `Microsoft`{.action}. Click on `Exchange`{.action} and then on your service. The server name is displayed in the **Connection** box in the `General Information`{.action} tab.
>

On your device’s home screen, go to `Settings`{.action} (cogwheel icon). There are several ways you can add an account, depending on your iOS version:

- **For iOS 7, 8, 9 and 10**: Go to `Mail, Contacts, Calendar`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the table below.

- **For iOS 11, 12 and 13**: Go to `Accounts and passwords`{.action}, then `Add account`{.action}. Choose `Other`{.action}, then `Add Mail Account`{.action}. Then proceed to step 5 of the table below.

- **For iOS versions 14 and above**: Follow the instructions in the table below.

| | |
|---|---|
|![iPhone](images/configuration-mailex-ios-step01.gif){.thumbnail}|1. In `Settings`, go to `Mail`. <br><br> 2. Tap `Accounts`.<br><br> 3. Tap `Add Account`.<br><br> 4. Choose `Microsoft Exchange`.|
|5. Enter your email **address** and email account **description**, tap `Next`.<br><br>6. Select `Configure Manually`.<br><br>|![Exchange](images/configuration-mailex-ios-step02.png){.thumbnail}|
|![Exchange](images/configuration-mailex-ios-step03.png){.thumbnail}|7. Enter: <br>- the server **ex?.mail.ovh.ca** (replace the **?** by [your Exchange server number](#addaccount))<br>-your **full email address** as username <br>- your account password|
|8. Please ensure that you leave `Mail`{.action} activated, so that the application can use this account. Other applications (e.g. *Calendars* and *Notes*) can use some of Exchange’s collaborative features.<br><br>9. Tap `Save` to finish adding your Exchange account.|![Exchange](images/configuration-mailex-ios-step04.png){.thumbnail}|

To check that the account has been correctly configured, you can send a test email.

### Using your email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

OVHcloud also offers a web application that includes [Exchange collaborative features](/links/web/emails), accessible via [Webmail](/links/web/email). You can log in using your email credentials.

> [!primary]
>
> If you experience any difficulties receiving or sending emails, please read our [FAQ about OVHcloud email services](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).
>

## Go further

> [!primary]
>
> For more information on configuring an email address from the Mail app on iOS, see [Apple Help Center](https://support.apple.com/en-gb/102619).

[Configuring a Web Hosting email address on iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)

[Email FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Join our community of users on <https://community.ovh.com/en/>.
