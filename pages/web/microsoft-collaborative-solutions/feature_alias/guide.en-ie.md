---
title: Adding an alias to your email account
slug: email-alias
excerpt: Find out how to add an alias address to an email account in the OVHcloud Control Panel
section: Exchange account features
order: 1
---

**Last updated 20th September 2021**

## Objective

By creating an alias for your email address, you can give out a "concealment" address to your contacts, without having to disclose your personal email address to the sender. One email account can have multiple aliases.

![emails](images/email-alias01.png){.thumbnail}

For example, your email address is **john.smith@mydomain.ovh** and you create an alias named **anonymous@mydomain.ovh**. You can then provide the address **anonymous@mydomain.ovh** to your contacts and receive your emails on **john.smith@mydomain.ovh** without the sender having knowledge of **john.smith@mydomain.ovh**.

**This guide explains how to add an alias address to an email account in the OVHcloud Control Panel.**

> [!warning]
>
> Please note: OVHcloud aliases only work for incoming emails. It is not possible to send emails using the alias as the sender of an email.
>

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)
- an email service with OVHcloud: [**Exchange**](https://www.ovhcloud.com/en-ie/emails/hosted-exchange/){.external}, [**Email Pro**](https://www.ovhcloud.com/en-ie/emails/email-pro/){.external} or **MX Plan** (new version only, included in an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-ie/web-hosting/){.external} or ordered separately as a standalone solution)

## Instructions

### Creating an alias

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie), and go to the `Web Cloud` section. Then choose the menu section coresponding to your email solution:

- **Exchange**: Open `Microsoft`{.action}, then `Exchange`{.action}, and select the service concerned. Click on the `Email accounts`{.action} tab.

- **Email Pro**: Open `Email Pro`{.action}, select the service concerned, then click on the `Email accounts`{.action} tab.

- **Emails** (MXplan): Open `Emails`{.action}, select the service concerned, then click on the `Email accounts`{.action} tab.

In the table that appears, you will see an `Alias` column.

![emails](images/email-alias012.png){.thumbnail}

> [!warning]
>
> If you have an MXplan email solution and the Alias column does not appear, you are using the **legacy version** of the service. In this case, the aliases are created as redirections. To do this, please refer to our guide on [Using email redirections](https://docs.ovh.com/ie/en/emails/email-redirection-guide/#mx-plan-legacy-version) .
>

To add an alias to your email account:

- Click the `...`{.action} button, then click `Configure aliases`{.action} (or `Manage aliases`{.action}).

![emails](images/email-alias02.png){.thumbnail}

- Click `Add alias`{.action}, then enter the address you have chosen for your alias and confirm your choice.

![emails](images/email-alias03.png){.thumbnail}

### Deleting an alias

In the `Email accounts`{.action} tab, click the `...`{.action} button to the right of the email address concerned, then click `Configure aliases`{.action} (or `Manage aliases`{.action}).

Click the `...`{.action} button to the right of the alias in question, in the alias management menu. Finally, click on `Delete alias`{.action}.

![emails](images/email-alias04.png){.thumbnail}

## Go further

[Using the Outlook Web App with an Exchange account](https://docs.ovh.com/ie/en/microsoft-collaborative-solutions/exchange_2016_outlook_web_app_user_guide/)

[Inbox rules in OWA](https://docs.ovh.com/ie/en/microsoft-collaborative-solutions/creating-inbox-rules-in-owa/)

Join our community of users on <https://community.ovh.com/en/>.
