---
title: 'Configuring your Exchange account in Outlook for Windows'
slug: configuration-outlook-2016
excerpt: 'Find out how to configure your Exchange account in Outlook for Windows'
section: Email clients
order: 01
---
 
**Last updated 5th July 2021**

## Objective

You can configure Exchange accounts on email clients, if they are compatible. By doing so, you can use your email address through your preferred email application. Microsoft Outlook is the recommended software for using an Exchange email address with its collaborative features.

**This guide explains how to configure your Exchange account in Outlook 2016 or later for Windows.**

> [!warning]
> This guide will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.
>
> If you experience any difficulties carrying out these operations, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-ie/directory/) and/or discuss the issue with our community. OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements


- an [OVHcloud Exchange account](https://www.ovhcloud.com/en-ie/emails/hosted-exchange/){.external}
- Microsoft Outlook 2016 or later installed on your device
- login credentials for the email account to be configured
- The OVHcloud SRV record must be correctly configured in the domain name’s DNS zone. Please refer to our guide on [Adding a domain name to an Exchange service](../adding-domain-exchange/).

> [!primary]
>
> Are you using Outlook 2016 for Mac? Refer to our documentation: [Configuring your Exchange account in Outlook 2016 for Mac.](../configuration-outlook-2016-mac/)
>

## Instructions

### Adding the account

- **When you start the application for the first time**: A setup wizard will appear and prompt you to enter your email address.

- **If you have already added an account**: Click `File`{.action} in the menu bar at the top of your screen, then `Add account`{.action}.

- Enter your email address, then click `Advanced options`{.action}. Tick the box next to `Let me set up my account manually`{.action}, then click `Connect`{.action}. 

![Exchange](images/config-outlook-exchange01.png){.thumbnail}

- Select **Exchange** from the list of account types.

- Enter your email password in the next window, tick the box to store it, then click `OK`{.action}.

![Exchange](images/config-outlook-exchange02.png){.thumbnail}

> [!primary]
> 
> If you get a message saying that Outlook was unable to configure your account, this may mean that the OVHcloud SRV record is not correctly configured in your domain name’s DNS zone.
> 
> ![Exchange](images/config-outlook-exchange03.png){.thumbnail}
>
> We recommend that you check the configuration of the domain name associated with your Exchange service. In your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie), go to the `Associated domains`{.action} tab and check the `Diagnostic`{.action} column of the table.
>

- If your domain name’s configuration is valid, you may receive a login authorisation message for your OVHcloud servers. Accept this to allow your Exchange account to be configured automatically.
- Then determine the retention period of the items in your Exchange account to keep them stored **locally on your computer**. Click `Next`{.action}, and then click `Done`{.action}.

![Exchange](images/config-outlook-exchange04.png){.thumbnail}


### Using your email address

Once you have configured your email address, you can start using it! You can now send and receive emails.

Your Exchange email address and all of its collaborative features are also available via the [OWA interface](https://www.ovh.ie/mail/). If you have any questions about how to use this interface, please refer to our guide on [Using the Outlook Web App](../exchange_2016_outlook_web_app_user_guide/).

### Retrieving a backup of your email address

If you need to make a change that could lead to the loss of your email account data, we advise you to make a backup of the email account concerned beforehand. To do this, please read the "**Exporting from Windows**" section in our guide on [Migrating your email address manually](../../emails/migrate-email-addresses-manually/#exporting-from-windows).


## Go further <a name="gofurther"></a>

[Configuring your MX Plan address in Outlook for Windows](../../emails/configuration-outlook-2016/)

[Configuring your Email Pro account in Outlook 2016 for Windows](../../emails-pro/configuration-outlook-2016/)

Join our community of users on <https://community.ovh.com/en/>.