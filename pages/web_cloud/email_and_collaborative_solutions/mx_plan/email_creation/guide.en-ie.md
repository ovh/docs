---
title: 'Creating an email address with an MX Plan solution'
excerpt: 'Find out how to create an email address with an MX Plan solution'
updated: 2024-06-13
---

## Objective

You have just purchased an MX Plan email solution. It allows you to benefit from email addresses associated with a domain name.

**Find out how to create an email address with an MX Plan solution.**

## Requirements

- An MX Plan solution, available as part of our [Web Hosting plans](/links/web/hosting), the [100M free hosting](/links/web/domains-free-hosting) included with a domain name (activated in advance), or ordered separately as a standalone solution
- Access to the [OVHcloud Control Panel](/links/manager), in the `Web Cloud`{.action} section

> [!primary]
>
> **Special cases**
>
> - Regarding the 100M free hosting solution, you will need to [activate it](/pages/web_cloud/web_hosting/activate_start10m) in order to create an email account. You can do this from your [OVHcloud Control Panel](/links/manager) by selecting the domain name concerned.
> - For [Web Hosting plans](/links/web/hosting), you will need to activate your MX Plan package before continuing to follow this guide. To do this, please refer to our guide on [Activating the email addresses included in your web hosting plan](/pages/web_cloud/web_hosting/activate-email-hosting).

## Instructions <a name="instructions"></a>

Depending on the date your service was activated and whether it was recently migrated, you are using either the legacy version or the new version of the MX Plan solution. Before you proceed with this guide, you need to check which version you are using. 

To do this, log in to the [OVHcloud Control Panel](/links/manager), and open the `Web Cloud`{.action} section. Click on `Emails`{.action}, then choose the name of the MX Plan service concerned. Continue with the next steps, depending on which version you own.

|MX Plan legacy version|MX Plan new version|
|---|---|
|![email](images/mxplan-creation-legacy-step1.png){.thumbnail}<br> Find the solution in the "Subscription" box|![email](images/mxplan-creation-new-step1.png){.thumbnail}<br>Locate the `Server model` in the "Summary" box|
|Go to [MX Plan legacy version](#mxplanlegacy)|Go to [MX Plan new version](#newmxplan)|

### MX Plan new version <a name="newmxplan"></a>

#### Access the email service management

If you are using the new version of the MX Plan solution, your display should correspond to the following image. If this section looks different for you, please double-check that you are following the right set of instructions [by referring to the information above](./#instructions).  

![email](images/mxplan-creation-new-step1.png){.thumbnail}

#### Create an email account

To set up a new email account, go to the `Email accounts`{.action} tab. The window that opens will display the email accounts that are already available, as well as those you can still create. Next, click the `Add Account`{.action} button.

![email](images/mxplan-creation-new-step2.png){.thumbnail}

In the popup window, enter the following information:

- **Email account**: A temporary name is already prefilled in the text box. Replace it with the name you would like for your email address (firstname.lastname, for example). The domain name for the email address is already pre-selected in the list.
- **First name**: Enter a first name.
- **Name**: Enter a surname.
- **Name to display**: Enter the name you want to be displayed as a sender when you send emails from this address.
- **Password**: Type in a password and confirm it. For security reasons, we recommend not using the same password twice and choosing one that does not contain any personal information (e.g. your surname, first name and date of birth). We also recommend renewing it regularly.

Once you have filled in all of the required fields, click `Next`{.action}.

![email](images/mxplan-creation-new-step3.png){.thumbnail}

Next, check that all the information displayed in the summary is correct. If it is, click `Confirm`{.action}. The account you have just added will now appear in the table. You will need to wait a few minutes for the account to become available.

Repeat this step as necessary according to the number of accounts to create.

#### View emails

On the [Webmail login page](/links/web/email), enter your email address and password. Then click the `Login`{.action} button.

When you first log in to the webmail interface, you are prompted to set the interface language and your time zone. Your inbox will then appear. To find out how to use your email address via Outlook Web App (OWA) webmail, use our guide ["Using the Outlook Web App with an email account"](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

![email](images/mxplan-creation-new-step5.png){.thumbnail}

To view your emails using an email client, please refer to the section ["View an email account from a device"](#configdevices).

#### Delete an email account

With a new MXplan service, deleting an account is referred to as *resetting an account*.

> [!warning]
>
> Before deleting email accounts, make sure they are not used. You may need to back up these accounts. If required, please refer to our guide on [Migrating your email address manually](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), which explains how to export account data from your Control Panel or email software.

In the `Email accounts`{.action} tab, click the `...`{.action} button to the right of the account you want to delete, then click `Reset this account`{.action}.

![email](images/mxplan-new-reset.png){.thumbnail}

### MX Plan legacy version <a name="mxplanlegacy"></a>

#### Access the email service management

If you are using the legacy version of the MX plan solution, your display should correspond to the following image. If this section looks different for you, please double-check that you are following the right set of instructions [by referring to the information above](./#instructions).

![email](images/mxplan-creation-legacy-step1.png){.thumbnail}

#### Create an email account

To create a new email address, go to the `Emails`{.action} tab. The table displayed will contain all of the email accounts created as part of your MX Plan solution. Then click the `Create an email address`{.action} button.

![email](images/mxplan-creation-legacy-step2.png){.thumbnail}

In the pop-up window, enter the following information:

- **Account name**: Enter the name you want for your email address (firstname.lastname, for example). The domain name concerned is already entered by default.|  
- **Account description**: Enter a short description that will distinguish this account from any other accounts added in the OVHcloud Control Panel.|  
- **Account size**: Select the size of account you want. This is the available space for the account to store messages.|  
- **Password**: Type in a password, and confirm it. For security reasons, we recommend not using the same password twice, and choosing one that does not contain any personal information (e.g. your surname, first name and date of birth). We also recommend renewing your password regularly.|

Once you have filled in all of the required fields, click `Next`{.action}. 

![email](images/mxplan-creation-legacy-step3.png){.thumbnail}

Check that all the information displayed in the summary is correct; if it is, click on `Next`{.action} again. Finally, click `Confirm`{.action} to launch the creation of the email account. You will need to wait a few minutes for it to become available.

Repeat this step as necessary according to the number of accounts to create.

#### View emails 

On the [Webmail login page](/links/web/email), enter your email address and password. Then click the `Login`{.action} button.

Your inbox will then appear. You can find more information in our guide on [Using your email account via the RoundCube webmail interface](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

![email](images/mxplan-creation-legacy-step4.png){.thumbnail}

To view your emails using an email client, please refer to the section ["View an email account using a device"](#configdevices).

#### Delete an email account

> [!warning]
>
> Before deleting email accounts, make sure they are not used. You may need to back up these accounts. If required, please refer to our guide on [Migrating your email address manually](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), which explains how to export account data from your Control Panel or email software.

In the `Emails`{.action} tab, click the `...`{.action} button to the right of the account you want to delete, then click `Disable account`{.action}

![email](images/mxplan-legacy-reset.png){.thumbnail}

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

> [!alert]
>
> Check that the flag visible in the top right-hand corner of this documentation page corresponds to your country/region. **The settings below vary depending on your country/region**.

> [!tabs]
> **IMAP configuration (recommended)**
>>
>> |Information|Description|
>> |---|---|
>> |Username|Enter the **full email address**|
>> |Password|Enter the password for the email account|
>> |Server (incoming)|imap.mail.ovh.net **or** ssl0.ovh.net|
>> |Port|993|
>> |Security type|SSL/TLS|
>>
> **POP configuration**
>>
>> |Information|Description|
>> |---|---|
>> |Username|Enter the **full email address**|
>> |Password|Enter the password for the email account|
>> |Server (incoming)|pop.mail.ovh.net **or** ssl0.ovh.net|
>> |Port|995|
>> |Security type|SSL/TLS|
>>
> **SMTP configuration**
>>
>> |Information|Description|
>> |---|---|
>> |Username|Enter the **full email address**|
>> |Password|Enter the password for the email account|
>> |Server (outgoing)|smtp.mail.ovh.net **or** ssl0.ovh.net|
>> |Port|465|
>> |Security type|SSL/TLS|

> [!warning]
>
> If you have any problems configuring your email address on your device, we recommend using our [configuration guides](/products/web-cloud-email-collaborative-solutions-mx-plan) or contacting the publisher of the application you are using, because you may need to make a change that is specific to the application.
>

## Go further
  
Join our community of users on <https://community.ovh.com/en/>.
