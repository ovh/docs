---
title: Configuring your Email Pro solution
slug: first-configuration-email-pro
excerpt: Find out how to configure your Email Pro solution
section: General
---

**Last updated 2nd February 2018**

## Objective

You have just purchased a Email Pro solution, which gives you affordable professional email addresses to support or start up your business.

**Find out how to configure your Email Pro solution.**

## Requirements

- You must have an [Email Pro](https://www.ovh.ie/emails/email-pro/){.external} solution.
- You need to have received an email confirming that your Email Pro solution has been set up.
- You must have a domain name.
- You must be logged in to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instructions

### Step 1: Log in to the interface of your service

Once the Email Pro service has been created and is available, you can manage it from your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.

To do this, log in to the Control Panel, click on `Email Pro`{.action} in the services menu on the left, then select the appropriate service.

> [!primary]
>
> The name of an Email Pro service in your OVH Control Panel begins with *emailpro-*, contains part of your NIC handle and ends with a figure (1 for the first Email Pro service installed, 2 for the second, etc.).
>

### Step 2: Add your domain name

If you have just ordered your Email Pro service, a window will automatically open prompting you to `Add a domain`{.action}. If the window does not appear, go to the `Associated domains`{.action} tab, then click on the `Add a domain`{.action} button.

You must choose from:

- **Select a domain in the list**: only the domains that use the OVH configuration and are connected to your NIC handle will appear.
- **Enter a domain name that is not managed by your OVH account**: you should be able to modify the domain name’s configuration (its DNS zone) so that the Email Pro service can function correctly.

Once you have made this choice, click on the `Next`{.action} button.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

The window will then show information on configuring a mode.

- **If you have entered a non-OVH domain name**: nonauthoritative mode will be configured by default.
- **If you have selected an OVH domain name in the list**: you must choose between two modes.

|Mode|Description|
|---|---|
|Authoritative|Choose this if you only use the Email Pro solution with your domain name. In authoritative mode, you cannot use another email solution with your Email Pro service.|
|Nonauthoritative|Choose this if you use your Email Pro solution domain name with another email solution.| 

> [!primary]
>
> The mode choice is not definitive, it can be modified from the OVH Control Panel later on.
>

Click on the `Next`{.action} button to continue adding the domain.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**If you have selected an OVH domain name in the list**, it will be automatically configured. To do this, tick the boxes and click on the `Next`{.action} button to continue adding the domain.

**If you have entered a non-OVH domain name**, it must be configured in the next step.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

At the end of the configuration process, we will ask you to check the information entered, then click on the `Confirm`{.action} button to start adding the domain.

### Step 3: Configure your domain name

Once the domain has been added as an associated domain, make sure that its configuration is correct by using the table displayed.

You can use the `Diagnostic`{.action} column to see if the domain name configuration is correct. A red box indicates that it must be modified.

- **If you chose automatic configuration when adding the domain**: it can take a few hours before it appears on the Control Panel.
- **If you have entered a non-OVH domain name**: click on the red box to view the modifications that you must make. If you have just done this, it may take a few hours to show up on the OVH Control Panel.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### Step 4: Configure the Email Pro accounts

To configure your email addresses, go to the `Email accounts`{.action} tab. The table displays the accounts that you have ordered in this format: “*@configureme.me*”.

To configure them, click on the pencil icon.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Complete the information displayed.

|Title|Description|
|---|---|
|Email account|Enter the name for your email address (firstname.lastname, for example) and select the appropriate domain in the list.|
|First name|Enter a first name.|
|Last name|Enter a last name.|
|Display name|Enter the sender name that you wish to be displayed when sending emails from this address.|
|Password confirmation|Type in a password, and confirm it.| 

Once the information is complete, click on the `Next`{.action} button, check the information displayed, then click `Confirm`{.action} to start configuring the account.

> [!primary]
>
> Repeat this step as necessary according to the number of accounts you have. You can order additional accounts using the `Add more accounts`{.action} button.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Step 5: Use your email addresses

Once you have configured your accounts, you can now start using them! To do this, OVH offers an online application (a *webapp*). You can access this application via the following address: [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external}. You will need to enter the login details of your email address.

If you would like to configure your email address on an email client or device (e.g. a smartphone or tablet), please refer to the information below: 

|Server type|Server name|SSL|Port|
|---|---|---|---|
|Incoming|pro1.mail.ovh.net|Yes|993|
|Outgoing|pro1.mail.ovh.net|Yes|587|

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.