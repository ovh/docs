---
title: Create and use a shared account
slug: exchange-using-share-accounts
excerpt: Add and use a shared account on your Exchange email solution
section: Features of Exchange accounts
order: 5
---

**Last updated 15/06/2021**


## Objective

A shared **account** is an email box shared between several Exchange accounts, and can only be accessed via them. A shared account does not have a password, it is therefore necessary to delegate its access to one or more Exchange platform accounts.
<br>Shared accounts can be accessed via delegation from OWA (Webmail Exchange) or via Outlook email software.

**Find out how to create and manage a shared account on your Exchange platform.**

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- an OVHcloud [Exchange solution](https://www.ovh.co.uk/emails/hosted-exchange/)

## Instructions

### Add a shared account

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Go to the `Web` section, and select your Exchange service in the left-hand menu under `Microsoft`{.action}, then `Exchange`{.action}.

Select the `Shared`{.action} accounts tab in the horizontal menu and click `Add shared`{.action} account.

![emails](images/exchange-shared_accounts01.png){.thumbnail}

Fill in the requested fields:

|Purpose|Description|
|---|---|
|Email account|Choose the name of your shared account. **This must not be an existing email address.**|
|Quota|Enter the storage quota you want for your shared account. The maximum quota is **10 GB for all of your shared** accounts.|
|Display name|The display name you want to appear when sending from your shared account.|
|Hide the address in the directory|By hiding the address in the directory, you can ensure that the shared account address is not visible in the list of addresses for your Exchange platform.|

Then click `Next`{.action} to access the summary. Complete the operation by clicking `Confirm`{.action}.

![emails](images/exchange-shared_accounts02.png){.thumbnail}

### Manage the delegation of a shared account

Once you have created your shared account, you will need to delegate access to one or more accounts on your platform.

A shared account cannot be accessed directly because it does not have a password. It cannot be configured directly in an Outlook client, or accessed via webmail.

You will need to set up a delegation between an Exchange account and the shared account.

In the Shared `accounts`{.action} tab of your Exchange platform, click on the `...`{.action} button next to the shared account, then click `Configure delegations`{.action}. You can then choose from your list of accounts who can access the shared account.

![emails](images/exchange-shared_accounts03.png){.thumbnail}

Choose possible actions on the selected account:

|Purpose|Description|
|---|---|
|“Send As” permission|Allows the selected email account to send an email as the shared email address.|
|“Send on Behalf” permission|Allows the selected email account to send on behalf of the shared email address.|
|Right of access|Allows the selected email account to view and manage the shared account from OWA (webmail) or Outlook.|

Then click `Next`{.action} and `Confirm`{.action} to save the changes.

![emails](images/exchange-shared_accounts04.png){.thumbnail}

In our example, we allow **guide-exchange@** and **test@** accounts to access the shared **shared_test@** account.
<br>The e-mail account **guide-exchange@** will also have the right to send e-mails "as" **shared_test@**.
<br>The email account **test@** can also send emails "on behalf of" **shared_test@**.

### Using the account shared from OWA (webmail)

Log in to your Exchange (OWA) webmail address <https://www.ovh.co.uk/mail/> with an email account that has access to the shared account.
<br>In our example, we connect with the **guide-exchange@** account.

Once you have logged in, in the left-hand column, right-click on the main tree for your email address, then on `Add a shared`{.action} folder. 

![emails](images/exchange-shared_accounts05.png){.thumbnail}

Then enter the name of your shared account, and click `Add`{.action} when it is found in the Exchange directory.

![emails](images/exchange-shared_accounts06.png){.thumbnail}

In our example, the shared account is now accessible from the **guide-exchange@** account.

![emails](images/exchange-shared_accounts07.png){.thumbnail}


### Using the shared account from Outlook

In your Outlook application, you will see your shared account in the left-hand column, in the same way as you did with webmail.

![emails](images/exchange-shared_accounts10.png){.thumbnail}

## Go further

[Using the Outlook Web App with an Exchange account](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2016_outlook_web_app_user_guide/)

[Delegating permissions on an Exchange account](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2013_how_to_grant_full_access_permissions_for_an_account/)

[How to share calendars via OWA](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2016_how_to_share_calendars_via_owa/)

[Add a footer for your Exchange accounts](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_20132016_how_to_create_an_automatic_signature/)

Join our community of users on <https://community.ovh.com/en/>.
