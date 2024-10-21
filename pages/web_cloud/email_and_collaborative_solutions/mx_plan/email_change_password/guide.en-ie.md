---
title: "Changing the password of an email account"
excerpt: "Find out how to change the password for an OVHcloud email account"
updated: 2024-06-18
---

## Objective

You can access your OVHcloud email accounts using the password associated with them. There are 2 ways you can modify it, depending on your email plan:

- From Webmail
- Via the OVHcloud Control Panel

**This guide explains how to change the password for an OVHcloud email account.**

## Requirements

- A preconfigured OVHcloud email solution, such as [**Hosted Exchange**](/links/web/emails-hosted-exchange), [**Email Pro**](/links/web/email-pro) or **MX Plan** (available with a [web hosting plan](/links/web/hosting), a [100M free hosting](/links/web/domains-free-hosting), or ordered separately)
- Access to the [OVHcloud Control Panel](/links/manager) or access to the email account via [webmail](/links/web/email), depending on the method used

> [!primary]
>
> When you change the password for your email account, you will also need to apply this change to all email clients that access this account. You can find the configuration guides for your email software on the guide homepage of your email offer:
>
> - [MX Plan](/products/web-cloud-email-collaborative-solutions-mx-plan)
> - [Email Pro](/products/web-cloud-email-collaborative-solutions-email-pro)
> - [Exchange](/products/web-cloud-email-collaborative-solutions-microsoft-exchange)
>

## Instructions

### Changing the password via the Control Panel <a name="controlpanel"></a>

> [!warning]
> For security reasons, we recommend not using the same password twice, and choosing one that does not contain any personal information (e.g. your surname, first name and date of birth). We also recommend renewing your password regularly.

In the [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, then follow the instructions for your solution

> [!tabs]
> **MX Plan email (legacy version)**
>>
>> If you do not know which type of MX Plan solution you have, please read the section [Identify your MX Plan solution](#whichmxplan).<br>
>> Click `Emails`{.action}, then choose the name of the MX Plan service concerned. Go to the `Emails`{.action} tab. The window that appears will display all email accounts. <br>
>> Click the `...`{.action} button, then click `Change password`{.action}.<br><br>
>>![email](images/email-password-mxplan-legacy01.png){.thumbnail}<br>
>>
> **MX Plan email (new version)**
>>
>> If you do not know which type of MX Plan solution you have, please read the section [Identify your MX Plan solution](#whichmxplan).<br>
>> Click `Emails`{.action}, then choose the name of the MX Plan service concerned. Go to the `Emails`{.action} tab. The window that appears will display all email accounts. <br>
>> Click the `...`{.action} button, then click `Edit`{.action}.<br><br>
>>![email](images/email-password-mxplan-new01.png){.thumbnail}<br>
>>
> **Email Pro**
>>
>> Click `Email Pro`{.action}, then choose the name of the service concerned. Go to the `Email accounts`{.action} tab. The window that appears will display all email accounts.<br>
>> Click the `...`{.action} button, then click `Edit`{.action}.<br><br>
>>![email](images/email-password-emailpro01.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Click `Microsoft`{.action}, then `Exchange`{.action} and choose the name of the service concerned. Go to the `Email accounts`{.action} tab. The window that appears will display all email accounts.<br>
>> Click the `...`{.action} button, then click `Edit`{.action}.<br><br>
>>![email](images/email-password-exchange01.png){.thumbnail}<br>
>>

### Changing the password via webmail

Changing your password via webmail is available for OVHcloud email offers using **OWA** (**O**utlook **W**eb **A**pp):

- MX Plan email (new version)
- Email Pro
- Exchange

> [!warning]
>
> The email solution **MX Plan legacy** uses Roundcube webmail. You can only change your password [via the OVHcloud Control Panel](#controlpanel).
>

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/msmUN7cLSNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Go to the [webmail page](/links/web/email). Enter your full email address and password, then click the `Login`{.action} button. 

![email](images/mxplan-password-new-step2.png){.thumbnail}

Click the gear icon at the top, then click `Options`{.action}.

![email](images/mxplan-password-new-step3.png){.thumbnail}

On the left-hand side of the new page that opens, expand the "General" tab in the tree-view, then click `My account`{.action}. Next, click `Change password`{.action}.

![email](images/mxplan-password-new-step4.png){.thumbnail}

In the new window that opens, enter your current password first. Then enter your new password, and reenter it to confirm. Click the `Save`{.action} button to save the new password.

> [!primary]
>
> You will need to enter the new password in all email clients that access this account.
>

![email](images/mxplan-password-new-step5.png){.thumbnail}

### Retrieve a password

For security and confidentiality reasons, it is not possible to **retrieve** a password. As described in the previous steps, you will need to reset your password if you have forgotten it.

> [!primary]
>
> If you want to store a password, we recommend using a password manager, such as **KeePass**.

#### Identifying your MX Plan solution <a name="whichmxplan"></a>

In the table below, you will find the information you need to identify your MX Plan solution.

|MX Plan legacy version|MX Plan new version|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> The solution appears in the **Subscription** box on the right. The legacy solution *does not* have a server reference.|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>The new solution has a **Server model** in the **Summary** box on the left.|

## Go further

[Getting started with the MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Getting started with the Email Pro solution](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Getting started with the Hosted Exchange solution](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our support [offers](/links/support).

Join our community of users on <https://community.ovh.com/en/>.
