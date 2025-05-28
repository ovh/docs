---
title: 'Getting started with the MX Plan solution'
excerpt: 'Find out how to get started with an MX Plan solution'
updated: 2025-05-19
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

## Objective

If you have just purchased an MX Plan solution, this means you have email addresses that you can use to send and receive messages from a device of your choice.

**Find out how to get started with an MX Plan solution.**

## Requirements

- An MX plan solution, available with a [web hosting plan](/links/web/hosting), a [100M free hosting](/links/web/domains-free-hosting), or ordered separately
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions <a name="instructions"></a>

1. Log in to your [OVHcloud Control Panel](/links/manager).
1. Open the `Web Cloud`{.action} section.
1. Click `MX Plan`{.action}.
1. Select the domain concerned.
1. **Continue with the email technology used by your MX Plan service**.

> [!primary]
>
> **Identify the email technology for your MX Plan solution.**
>
> Depending on the activation date of your MX Plan solution, or on a recent migration, the email technology associated with it may differ. This version is characterized by its webmail interface. To identify it:
>
> - In the `General information`{.action} tab, note the technology used under the **** comment in the `Subscription`{.action} or `Connection`{.action} box.
>
> ![mx plan](images/technology-email.png){.thumbnail .w-500}Webmail

**Contents**

- [Create an email address](#create-email)
- [Use your email addresses](#consult-emails)
    - [Use webmail](#consult-emails-webmail)
    - [Use email client](#consult-emails-client)
        - [IMAP and POP receive settings](#imap-pop)
        - [SMTP send settings](#smtp)
- [Redirections and aliases](#redirection-alias)
- [Auto-reply](#autoreply)

### Create an email address <a name="create-email"></a>

To find out how to create an email address, click on the tab corresponding to the email technology used by your MX Plan service:

> [!tabs]
> **Roundcube**
>>
>> To create an email address, go to the `Emails`{.action} tab. The window that opens will list the accounts that have already been created. To add a new email account, click the `Add an account`{.action} button.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> In the window that pops up, enter the following information:
>>
>> - **Account name**: Enter your new email address (e.g. first name.surname). The domain name that makes up the email address is already pre-selected in the list.
>> - **Account description**: Information on the email address, visible only in the table in the `Emails`{.action} tab of your email service.
>> - **Account size**: Determine the size you would like to assign to the email account.
>> - **Password**: [Enter a password](/pages/account_and_service_management/account_information/manage-ovh-password) and confirm it. For security reasons, we recommend not using the same password twice, choosing one that does not contain any personal information (e.g. your surname, first name and date of birth), and renewing it regularly.
>>
>> Once you have filled in the fields, click `Next`{.action}, then check the information that appears in the summary. If the information is correct, click `Confirm`{.action}. Repeat this step as necessary, depending on the number of accounts you have.
>>
>> ![email](images/mxplan-creation-new-step3-roundcube.png){.thumbnail .w-500}
>>
> **Zimbra and OWA**
>>
>> To create an email address, go to the `Email accounts`{.action} tab. The window that opens will list the accounts that are already available, as well as those that you can still create. To add a new email account, click the `Add an account`{.action} button.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> In the window that pops up, enter the following information:
>>
>> - **Email account**: A temporary name is already pre-filled in the text box: delete it and enter your new email address (e.g. your first name.surname). The domain name that makes up the email address is already pre-selected in the list.
>> - **First name**: Enter a first name.
>> - **Name**: Enter a name.
>> - **Display name**: Enter the name that will be displayed as a sender when emails are sent from this address.
>> - **Password**: [Enter a password](/pages/account_and_service_management/account_information/manage-ovh-password) and confirm it. For security reasons, we recommend not using the same password twice, choosing one that does not contain any personal information (e.g. your surname, first name and date of birth), and renewing it regularly.
>> - **Quota**: Determine the size you would like to assign to the email account.
>>
>> Once you have filled in the fields, click `Next`{.action} , then check the information that appears in the summary. If the information is correct, click `Confirm`{.action}. Repeat this step as necessary, depending on the number of accounts you have.
>>
>> ![email](images/mxplan-starter-new-step3.png){.thumbnail .w-500}
>>

### Use your email addresses <a name="consult-emails"></a>

Once you have created your email addresses, you can start using them. There are two ways of doing this: using webmail from a browser, or using an email client.

#### Use Webmail <a name="consult-emails-webmail"></a>

Go to the [Webmail login](/links/web/email) page, then enter the email address and password. Then click the `Login`{.action} button.

Select the tab corresponding to the email technology of your MX Plan solution:

> [!tabs]
> **Roundcube**
>>
>> You should see an interface similar to the image below with the word "Roundcube" in the top left.  
>> To find out how to use the Roundcube interface, please read our guide on [Using an email address via the Roundcube webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube) .
>>
>> ![email](images/mxplan-webmail-roundcube01.png){.thumbnail .w-500}
>>
> **Zimbra**
>>
>> As shown in the image below, a window will appear with the word "Zimbra" in the top left-hand corner.  
>> To find out how to use your email address via Zimbra webmail, please refer to our guide on [Using Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) .
>>
>> ![email](images/mxplan-webmail-zimbra01.png){.thumbnail .w-500}
>>
> **OWA**
>>
>> When you log in to webmail for the first time, you are prompted to set the interface language and the time zone you are in. Your inbox will then appear.
>>
>> To find out how to use your email address via OWA webmail, please refer to our guide on [Using your email address via Outlook Web App (OWA) webmail](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).
>>
>> ![email](images/mxplan-webmail-owa01.png){.thumbnail .w-500}
>>

#### Use an email client <a name="consult-emails-client"></a>

You can configure your email account on an email client such as Outlook, Thunderbird, Mac Mail, etc.

Below are the links to the configuration guides depending on your device type:

> [!tabs]
> **Windows PC**
>>
>> - [Outlook for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)<br>
>> - [Thunderbird for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)<br>
>> - [Mail for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Apple Mac computer**
>>
>> - [Outlook for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)<br>
>> - [Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)<br>
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

If you only need the connection parameters to configure an email account on an email client, you can find these settings below.

#### IMAP and POP Receive Settings <a name="imap-pop"></a>

When you choose your account type, we recommend using **IMAP** to receive emails. However, you can select **POP** as well.

> [!warning]
>
> Please only enter the values corresponding to your location (**EUROPE** or **AMERICA/ASIA-PACIFIC**).

Select the tab corresponding to your configuration type:

> [!tabs]
> **IMAP configuration**
>>
>> - **Username**: Enter the **full** email address.
>> - **Password**: Enter the password for the email account.
>> - **EUROPE server (incoming)**: imap.mail.ovh.net **or** ssl0.ovh.net.
>> - **AMERICA/ASIA-PACIFIC server (incoming)**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Security type**: SSL/TLS.
>>
> **POP configuration**
>>
>> - **Username**: Enter the **full** email address.
>> - **Password**: Enter the password for the email account.
>> - **EUROPE server (incoming)**: pop.mail.ovh.net **or** ssl0.ovh.net.
>> - **AMERICA/ASIA-PACIFIC server (incoming)**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Security type**: SSL/TLS.

#### SMTP Send Settings <a name="smtp"></a>

Below are the **SMTP** settings to use when sending emails:

**SMTP configuration**

- **Username**: Enter the **full** email address.
- **Password**: Enter the password for the email account.
- **EUROPE server (outgoing)**: pop.mail.ovh.net **or** ssl0.ovh.net.
- **AMERICA/ASIA-PACIFIC server (outgoing)**: pop.mail.ovh.ca.
- **Port**: 465.
- **Security type**: SSL/TLS.

### Redirections and Aliases <a name="redirection-alias"></a>

Do you want to redirect your emails to another recipient, create an alias or systematically copy another email address?

To do this, click on the tab corresponding to your email technology:

> [!tabs]
> **Roundcube**
>>
>> To add a redirection or an alias, click on the `Emails`{.action} tab of your MX Plan service, then click on the `Manage redirections`{.action} button on the right.  
>> The table of redirections that are already active appears. On the right, click `Add a redirection`{.action} to start creating your redirection or alias.
>>
>> - `From address`: Enter the email address you would like to redirect.<br>
>> - `To address`: Enter the address you would like to redirect to here. This can be one of your OVHcloud email addresses, or an external email address.<br>
>> - `Choose a copy method`: Define whether you want to keep a copy of the email received at the targeted email address (`From address`) or directly redirect to the redirection address (`To address`) without saving a copy.
>>
>> To understand how to use redirections and aliases on your MX Plan service, please read our full guide: “[Use email redirections](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)”.
>>
> **OWA and Zimbra**
>>
>> When you are using **OWA** or **Zimbra**, you can do this in two ways:
>>
>> 1. **Create your redirection via webmail**: Via inbox rules or filters. These rules, which are applied when an email is received, allow an email to be forwarded or redirected. To do this, please follow our guide on [Inbox rules via the OWA interface](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan), or read the Filters section of our guide on [Using webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).
>>
>> 2. **Create your redirection and alias via the OVHcloud Control Panel**: To add a redirection or alias, click on the `Redirections`{.action} tab. The table of redirections that are already active is displayed. On the right, click `Add a redirection`{.action}.
>>
>> - `From address`: Enter the email address you would like to redirect.<br>
>> - `To address`: Enter the address you would like to redirect to here. This can be one of your OVHcloud email addresses, or an external email address.<br>
>> - `Choose a copy method`: Define whether you want to keep a copy of the email received at the targeted email address (`From address`) or directly redirect to the redirection address (`To address`) without saving a copy.
>>
>> To understand how to use redirections and aliases on your MX Plan service, please read our full guide: “[Use email redirections](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)”.

### Automatic reply <a name="autoreply"></a>

It is important to be able to set up an automatic response in case you cannot view or process your emails.

Select the tab corresponding to the email technology of your MX Plan solution:

> [!tabs]
> **Roundcube**
>>
>> To add an automatic reply to one of your email addresses, click on the `Emails`{.action} tab of your MX Plan service, then click the `Manage replies`{.action} button on the right.  
>> The table of auto-replies that are already active is displayed. On the right, click `Add auto-reply`{.action} to start creating your redirection or alias.
>>
>> For more details on setting up an automatic response from your MX Plan service in the OVHcloud Control Panel, please read our guide on “[MX Plan - Creating an automatic response on an email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)”.
>>
> **Zimbra**
>>
>> You can set up an automatic reply directly by logging in to your email account via Webmail. For further details, please refer to our guide on [Using Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra), in the section “Automatic replies/Voicemail”.
>>
> **OWA**
>>
>> You can set up an automatic reply directly by logging in to your email account via Webmail. For further details, please refer to the section "Adding automatic replies" in our guide on [Using an email address via the Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).
>>

## Go further <a name="go-further"></a>

[Use Roundcube webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Use Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Use Outlook Web App (OWA) webmail](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Use email redirections](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

[MX Plan - Create an automatic response on an email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)

[Use email redirections](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
