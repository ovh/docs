---
title: 'Creating an email address with an MX Plan solution'
excerpt: 'Find out how to create an email address with an MX Plan solution'
updated: 2025-08-26
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Objective

You have just purchased an MX Plan email solution. It allows you to benefit from email addresses associated with a domain name.

**Find out how to create an email address with an MX Plan solution.**

## Requirements

- An MX Plan solution. This is available via:
    - A [Web Hosting](/links/web/hosting) offer.
    - An MX Plan solution ordered separately.
- Access to the [OVHcloud Control Panel](/links/manager), in the `Web Cloud`{.action} section.

> [!primary]
>
> **Special cases**
>
> - Regarding the 100M free hosting solution, you will need to [activate it](/pages/web_cloud/web_hosting/activate_start10m) in order to create an email account. You can do this from your [OVHcloud Control Panel](/links/manager) by selecting the domain name concerned.
> - For [Web Hosting plans](/links/web/hosting), you will need to activate your MX Plan package before continuing to follow this guide. To do this, please refer to our guide on [Activating the email addresses included in your web hosting plan](/pages/web_cloud/web_hosting/activate-email-hosting).

## Instructions <a name="instructions"></a>

1. Log in to your [OVHcloud Control Panel](/links/manager).
1. Open the `Web Cloud`{.action} section.
1. Click `MX Plan`{.action}.
1. Select the domain concerned.

#### Create an email account

To set up a new email account, go to the `Email accounts`{.action} tab. The window that opens will display the email accounts that are already available, as well as those you can still create. Next, click the `Add Account`{.action} button.

![email](images/mxplan-creation-new-step2.png){.thumbnail .w-400}

In the popup window, enter the following information:

- **Email account**: A temporary name is already prefilled in the text box. Replace it with the name you would like for your email address (firstname.lastname, for example). The domain name for the email address is already pre-selected in the list.

> [!warning]
>
> The name of your email address must meet the following conditions:
>
> - Minimum 2 characters.
> - Maximum 32 characters.
> - No accents.
> - No special characters, except for the following characters: `.`, `,`, `-` and `_`.

- **First name**: Enter a first name.
- **Name**: Enter a surname.
- **Name to display**: Enter the name you want to be displayed as a sender when you send emails from this address.
- **Password**: Type in a password and confirm it. For security reasons, we recommend not using the same password twice and choosing one that does not contain any personal information (e.g. your surname, first name and date of birth). We also recommend renewing it regularly.

> [!warning]
>
> The password must meet the following requirements:
>
> - Minimum 9 characters.
> - Maximum 30 characters.
> - No accents.

Once you have filled in all of the required fields, click `Next`{.action}.

![email](images/mxplan-creation-new-step3.png){.thumbnail .w-400}

Next, check that all the information displayed in the summary is correct. If it is, click `Confirm`{.action}. The account you have just added will now appear in the table. You will need to wait a few minutes for the account to become available.

Repeat this step as necessary according to the number of accounts to create.

#### View emails

On the [Webmail login page](/links/web/email), enter your email address and password. Then click the `Login`{.action} button.

When you log in to the webmail for the first time, you are prompted to set the interface language and the time zone you are in. Your inbox will then appear. To find out how to use your email address via the Outlook Web App (OWA), please use our guide on [Using an email address via the Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) .

![email](images/mxplan-creation-new-step5.png){.thumbnail .w-400}

To view your emails using an email client, please refer to the section ["View an email account from a device"](#configdevices).

#### Delete an email account

With a new MX Plan service, deleting an account is referred to as *resetting an account*.

> [!warning]
>
> Before deleting email accounts, make sure they are not used. You may need to back up these accounts. If required, please refer to our guide on [Migrating your email address manually](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), which explains how to export account data from your Control Panel or email software.

In the `Email accounts`{.action} tab, click the `...`{.action} button to the right of the account you want to delete, then click `Reset this account`{.action}.

![email](images/mxplan-new-reset.png){.thumbnail .w-400}

### View an email account from a device <a name="configdevices"></a>

You will need to configure your email address on the device you want to use (e.g. a smartphone or tablet). To do this, you can use our configuration guides:

> [!tabs]
> **Windows**
>>
>> - [Mail on Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>> - [Outlook](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>>
> **Apple**
>>
>> - [macOS email](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Mail for iPhone or iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>> - [Outlook Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **Android**
>>
>> - [Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Other**
>>
>> - [Gmail interface](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

If you just need the information required to configure your email address, the settings to use are listed below:

#### IMAP and POP (incoming) settings <a name="imap-pop"></a>

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

#### SMTP (outgoing) settings <a name="smtp"></a>

Below are the **SMTP** settings to use when sending emails:

**SMTP configuration**

- **Username**: Enter the **full** email address.
- **Password**: Enter the password for the email account.
- **EUROPE server (outgoing)**: smtp.mail.ovh.net **or** ssl0.ovh.net.
- **AMERICA/ASIA-PACIFIC server (outgoing)**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Security type**: SSL/TLS.

## Go further <a name="go-further"></a>

[Using the Outlook Web App with an email account](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).