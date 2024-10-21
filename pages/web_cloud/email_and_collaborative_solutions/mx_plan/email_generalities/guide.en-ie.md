---
title: 'Getting started with an MX Plan solution'
excerpt: 'Find out how to get started with an MX Plan solution'
updated: 2023-11-15
---

## Objective

If you have just purchased an MX Plan solution, you can have email addresses, which can be used to send and receive messages from any device. 

**Find out how to get started with an MX Plan solution.**

## Requirements

- An MX plan solution, available with a [web hosting plan](https://www.ovhcloud.com/en-ie/web-hosting/){.external}, [100M free hosting](https://www.ovhcloud.com/en-ie/domains/free-web-hosting/){.external}, or ordered separately
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}

## Instructions

Once the MX Plan solution is created and available, you can manage it from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Depending on its activation date or if [it has been migrated recently](https://www.ovh.co.uk/mxplan-migration/){.external}, you may have the old or new version of the solution. You will need to check this before you proceed any further. 

To do this, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}, and go to the `Web Cloud`{.action} section. Click `Emails`{.action}, and then choose the name of the MX Plan service concerned. Then you can proceed in accordance with the version you are using.

|MX Plan legacy version|MX Plan new version|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Find the solution in the "Subscription" box|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Locate the "Server model" in the "Summary" box|
|Continue to [Legacy version of the MX Plan solution](#oldmxplan)|Continue to [New version of the MX Plan solution](#newmxplan)|

### New version of the MX Plan solution <a name="newmxplan"></a>

#### Managing your email accounts

If you are using the new version of the MX Plan solution, this is the display you should get. If not, please ensure you follow the right path [by referring to the information above](#instructions).

![email](images/mxplan-starter-new-step1.png){.thumbnail}

#### Adding an email account

To configure your email accounts, go to the `Email accounts`{.action} tab. The window that opens will list the accounts that are already available, as well as those that you can still create. To add a new email account, click `Add account`{.action}.

![email](images/mxplan-starter-new-step2.png){.thumbnail}

In the popup window, enter the following information:

|Information|Description|
|---|---|
|Email account|A temporary name is already pre-filled in the text box: delete it and enter your new email address (e.g. firstname.surname). The domain name for the email address is already preselected in the list.|
|First name|Enter a first name.|
|Last name|Enter a last name.|
|Display name|Enter the name that will be displayed when sending emails from this address.|
|Password|[Enter and confirm a password](/pages/account_and_service_management/account_information/manage-ovh-password). For security reasons, we recommend not using the same password twice, choosing one that does not contain any personal information (e.g. your surname, first name and date of birth) and we also recommend renewing it regularly.|

Once you have completed the text fields, click `Next`{.action} and then check the information that appears in the summary. If it is all correct, click `Confirm`{.action} . Repeat this step as necessary according to the number of accounts you have.

![email](images/mxplan-starter-new-step3.png){.thumbnail}

#### Using your email accounts

Once you have created your email addresses, you can start using them straight away. You can do this using Outlook Web App (OWA) webmail, or you can use any software you want.

##### **1. Using Outlook Web App (OWA) webmail**

Go to the [Webmail login](https://www.ovh.ie/mail/) page, then enter the email address and password. Then click the `Login`{.action} button.

When you first log in to the webmail interface, you are prompted to set the interface language and your time zone. Your inbox will then appear. To find out how to use your email address via the OWA webmail interface, please refer to our [Outlook Web App user guide](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

![email](images/mxplan-starter-new-step4.png){.thumbnail}

##### **2. Using the software of your choice**

To use your email address with a third-party software, you will need to configure this account on the device you want to use (PC, Mac, smartphone or tablet). To do this, you can use our configuration guides:

|Windows|Outlook|Apple|Android|
|---|---|---|---|
|[Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)|[Outlook Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)|[MacOS Mail (latest version)](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)|[Android (latest version)](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)|
|[Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)|[Outlook Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)|[Mail for iPhone or iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)|
|||[Thunderbird Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)|

If you just need the information required to configure your email accounts, the settings to use are listed below:

- **For IMAP configuration (recommended)**

|Server type|Server name|Port (with SSL)|Port (without SSL)|
|---|---|---|---|
|Incoming|ssl0.ovh.net|993|143|
|Outgoing|ssl0.ovh.net|465|587|

- **For POP configuration**

|Server type|Server name|Port (with SSL)|Port (without SSL)|
|---|---|---|---|
|Incoming|ssl0.ovh.net|995|110|
|Outgoing|ssl0.ovh.net|465|587|

> [!warning]
>
> If you have any problems configuring your email address on your device, we recommend using [our configuration guides](/products/web-cloud-email-collaborative-solutions-mx-plan) or getting in touch with the publishers of the application you are using, because you may need to make a change that is specific to the application.
>

#### Advanced features

##### **Security policy**

You may want to increase the security of access to your email addresses.

You can do this by setting the security policy for your MX Plan solution.

Please follow our guide on [Managing the security policy of an email service](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/security-policy).

##### **Redirections**

You may want to redirect your emails to another recipient, create an alias or systematically copy another email address.

To do this, you will need to create a redirection.

You can do this in two ways:

- Creating a redirection in the webmail interface, via inbox rules. To do this, please follow our guide on [Inbox rules in OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan#example-1-redirecting-emails-to-another-address).

- Creating a redirection from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). For example, you can use this method to create an alias, i.e. redirect an email address that does not exist to an existing email address. To do this, please follow our guide on [Using email](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections#mx-plan-new-version) redirections.

##### **Automated responses**

You may go on holidays, or you will not have access to your email accounts for a certain period of time.

You can then use the automatic reply function of your email accounts. Please follow our guide on [Creating an autoreply for an email account](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

##### **Delegations**

You may want to send an email from your own email account using an email address associated with another account of your organisation.

To do this, you will need to configure the delegation for the email account concerned. Please follow our guide on [delegating account rights](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation).

##### **Mailing lists**

You may want to send a regular newsletter to your contacts.

To do this, you can create a mailing list. Please follow our guide on [Managing and using mailing lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list).

##### **Footer**

You may want to apply a global signature to all the email accounts for your domain name.

You can do this in the footer, which can be configured from your Control Panel. Please follow our guide on [Adding a footer to your emails](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers).

### MX Plan legacy version <a name="oldmxplan"></a>

#### Accessing your solution management

If you are using the legacy version of the MX Plan solution, this is the display you should see. If not, please ensure you follow the right path [by referring to the information above](#instructions).

![email](images/mxplan-starter-legacy-step1.png){.thumbnail}

#### Adding an email account

To create an email account, go to the `Email accounts`{.action} tab. The table that appears will contain all of the email accounts you have created as part of your MX Plan solution. Then click the `Create an email address`{.action} button.

![email](images/mxplan-starter-legacy-step2.png){.thumbnail}

In the popup window, enter the following information:

|Information|Description|  
|---|---|  
|User name|Enter the name for your email address (firstname.lastname, for example). The domain name concerned is already entered by default.|  
|Account description|Enter a short description that will distinguish this account from any other accounts added in the OVHcloud Control Panel.|  
|Account size|Select the size of account you want. This size refers to the space available to your account for storing messages.|  
|Password|Type in a password, and confirm it. For security reasons, we recommend not using the same password twice, and choosing one that does not contain any personal information (e.g. first name, surname and date of birth). We also recommend changing your password regularly.|

Once you have completed the text fields, click `Next`{.action} and then check the information that appears in the summary. If it is all correct, click `Confirm`{.action} . Repeat this step as necessary according to the number of accounts you have.

![email](images/mxplan-starter-legacy-step3.png){.thumbnail}

#### Using your email accounts

Once you have created your email accounts, you can start using them straight away. There are two ways you can do this: using the RoundCube webmail interface, or using the software of your choice.

##### **1. Using RoundCube webmail**

Go to the [webmail login](https://www.ovh.ie/mail/) page, then enter the email address and password. Then click the `Login`{.action} button.

Your inbox will appear. To find out how to use your email accounts via the RoundCube webmail interface, use our guide on [Using your email account via the RoundCube webmail interface](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

![email](images/mxplan-starter-legacy-step4.png){.thumbnail}

##### **2. Using the software of your choice**

To use your email accounts with a third-party software, you will need to configure them on the device you want to use (PC, Mac, smartphone or tablet). To do this, you can use our configuration guides:

|Windows|Outlook|Apple|Android|
|---|---|---|---|
|[Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)|[Outlook Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)|[MacOS Mail (latest version)](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)|[Android (latest version)](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)|
|[Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)|[Outlook Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)|[Mail for iPhone or iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)|
|||[Thunderbird Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)|

If you just need the information required to configure your email accounts, the settings to use are listed below:

- **For IMAP configuration (recommended)**

|Server type|Server name|Port (with SSL)|Port (without SSL)|
|---|---|---|---|
|Incoming|ssl0.ovh.net|993|143|
|Outgoing|ssl0.ovh.net|465|587|

- **For POP configuration**

|Server type|Server name|Port (with SSL)|Port (without SSL)|
|---|---|---|---|
|Incoming|ssl0.ovh.net|995|110|
|Outgoing|ssl0.ovh.net|465|587|

> [!warning]
>
> If you have any problems configuring your email accounts on your device, we recommend using [our configuration guides](/products/web-cloud-email-collaborative-solutions-mx-plan) or contacting the publishers of the application you are using, because you may need to make a change that is specific to the application.

#### Advanced features

##### **Redirection**

You may want to redirect your emails to another recipient, create an alias or systematically copy another email address.

To do this, you will need to create a redirection. Please follow our guide on [Using email redirections](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections#mx-plan-legacy-version).

##### **Automated responses**

You may go on holidays, or you will not have access to your email accounts for a certain period of time.

You can then use the automatic reply function of your email accounts. Please follow our guide on [Creating an autoreply for an email account](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses).

##### **Delegations**

You may want to **delegate all the email services for a domain name to another OVHcloud account** , or **delegate one or more email accounts to another OVHcloud account**. For example, you can allow the holder of this other OVHcloud account to change the password for an email account.

Please follow our guide on [Delegating email management to another person](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation).

##### **Mailing lists**

You may want to send a regular newsletter to your contacts.

To do this, you can create a mailing list. Please follow our guide on [Managing and using mailing lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list).

## Go further

If your needs change and you want additional features, you can also [migrate an MX Plan email address to an Email Pro or Exchange account](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).

Join our community of users on <https://community.ovh.com/en/>.
