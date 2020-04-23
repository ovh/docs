---
title: Migrating your website and emails to OVH
slug: migrating-website-to-ovh
excerpt: Find out how to migrate your website and emails to OVH without any service interruptions
section: Getting started
---

**Last updated 15th February 2018**

## Objective

This guide will take you through the steps you need to take to migrate a website, one or more databases, and your email addresses to any OVH platform. The migration procedure may vary, depending on whether you wish to migrate your services without any service interruptions.

**Find out how to migrate your website and emails to OVH without any service interruptions.**

## Requirements

- You need to have admin rights for the domain name concerned.
- You need to have access to the website’s files.
- You need access to the website’s databases, if applicable.
- You must have the information (username, password, servers) that enables you to log in to your current email addresses.
- You must be logged in to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instructions

To migrate your website and emails to OVH, you will need to follow a precise migration procedure. This procedure can be divided into several steps:

|Step|Description| 
|---|---| 
|Order the web hosting plan|You will get an OVH web hosting plan, where you can host your website and set up email addresses.|
|Transfer the website|By creating a full backup of your website, you can transfer it to your new OVH web hosting plan.|
|Transfer email addresses|By recreating your email addresses with OVH in advance, you can transfer their content from your old service provider to OVH.| 
|Change your domain’s DNS configuration|By changing your domain name’s configuration, it will use OVH hosting for your website and email addresses, and will no longer use your old service provider’s services.| 
|Transfer the domain|Change your domain name’s registrar to OVH.| 

Depending on the registrar your domain name is currently registered with, the order of these steps may vary.

> [!warning]
>
> Some registrars suspend your domain’s DNS servers, if they are configured with them, and this can happen as soon as they receive an outgoing domain name transfer request. This will make your domain name and its associated services inaccessible (e.g. your website and email addresses). We strongly advise getting in touch with your domain name’s registrar, and checking their policy on outgoing transfers.
>

Because of this, we offer two different types of migration procedure:

- migration without any service interruptions
- migration with possible service interruptions

### Migration without any service interruptions

#### Step 1: Order your OVH web hosting plan

Order your web hosting plan from the [OVH](https://ovh.co.uk/){.external} website. Ensure that you do not submit a domain name transfer request — you will do this at a later stage. Once your payment has been received, your web hosting plan will be set up. You will receive a confirmation email once it has been set up.

#### Step 2: Transfer your website

You will need to follow several sub-steps to do this:

|Sub-step|Description|Details|
|---|---|---|
|1|Create a website backup|You will need to create a full backup of your website, including all of the files and the database (if applicable). This full website backup is essential for migrating your website to OVH.|
|2|Put your website online with OVH|Log in to your storage space (via FTP) to import your website’s files onto it. You will need to put them online in the **"www"** folder. Your FTP login credentials will be sent to you via email.|
|3|Create an OVH database|If your website works with a database, you will need to [create a new one with OVH](https://docs.ovh.com/gb/en/hosting/managing-a-database-on-a-web-hosting-package/){.external}, via your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.|
|4|Import the database backup|Import your database backup using [the OVH tool, available in your Control Panel](https://docs.ovh.com/gb/en/hosting/web_hosting_guide_to_importing_a_mysql_database/){.external}.|
|5|Link the website to the new database|The data stored in your old database is still present in your website’s configuration file. Modify this file in your OVH storage space by entering the OVH database's information.|

Your domain name’s configuration will remain unchanged, and your website will still use your current service provider’s web hosting plan to remain online.

#### Step 3: Recreate your email addresses with OVH

Once you have transferred your website, you will need to [recreate the same addresses](https://docs.ovh.com/gb/en/emails/hosted_email_how_to_set_up_an_email_address/){.external} you use with your current service provider, but at OVH. They must be written identically. In your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, in the services bar on the left-hand side, go to the `Emails`{.action} section, then click on the web hosting plan that you have just ordered (with the same heading as your domain name). Follow the steps for creating email addresses by clicking `Create an email address`{.action}.

Your domain name’s configuration will still remain unchanged, and you will still receive new emails via the email addresses created with your current service provider. You will also still need to use the email address created with your current service provider for sending emails.

#### Step 4: Modify your domain name’s configuration

Now that you have transferred your website and recreated your email addresses with OVH, you will now need to modify your domain name’s configuration. You can do this by modifying your domain name’s DNS servers, replacing them with the OVH DNS servers (which will be sent to you by email, and also displayed in your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}). This will do two things:

- **Technically link your domain name to OVH solutions.** Your OVH web hosting plan will be used to display your website, and you will then start receiving new emails at the email addresses you have created with OVH.
- **Prevent any service interruptions.** If your registry decides to suspend your DNS servers immediately once you transfer your domain name, your services will not be affected, as you will already be using the OVH configuration.

> [!warning]
>
> Your DNS servers will be changed in your domain name’s current registrar, and you will need to allow around 24-48 hours for the changes to fully propagate.
>

#### Step 5: Transfer the content of your email addresses

You will need to follow several sub-steps to do this:

|Sub-step|Description|Details|
|---|---|---|
|1|Migrate the content of your email addresses to OVH|Using the [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} tool, you can copy the content of the email addresses registered with your original service provider to those created at OVH.|
|2|Use your email addresses|You can access your OVH email addresses via an online application ([Webmail](https://mail.ovh.net/){.external}). If you have configured one of your email addresses on an email client (e.g. Outlook), you will need to reconfigure it, replacing your original service provider’s server details with details of the [the OVH servers](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/){.external}.|

#### Step 6: Transfer your domain name to OVH

Now, you just need to transfer your domain name to OVH! You will need to carry out several smaller sub-steps to do this:

|Sub-step|Description|Details|
|---|---|---|
|1|Unlock your domain|When a domain is locked, it cannot be transferred to another registrar like OVH. For this reason, you will need to unlock it in advance through your current domain name registrar.|
|2|Retrieve the transfer code|The transfer code will be issued by your current domain name registrar when you unlock your domain.|
|3|Submit the transfer order with OVH|On the [OVH](https://ovh.co.uk/){.external} website, submit your transfer order. You will need to enter the transfer code you have received.|
|4|Pay for the order|Once your payment has been received, the domain name transfer process will begin.|
|5|Validate, or await validation of the transfer|This step will vary, depending on your domain name extension. When validation is required, an email request will usually be sent., which will explain the procedure. You will need to follow these steps, which will finish with a transfer request confirmation.| 

 Once the transfer process is complete, your website, email addresses and domain name will have migrated to OVH without any service interruptions!

### Migration with possible service interruptions

#### Step 1: Order the transfer and web hosting services from OVH

You will need to follow several sub-steps to do this:

|Sub-step|Description|Details|
|---|---|---|
|1|Unlock your domain|When a domain is locked, it cannot be transferred to another registrar like OVH. For this reason, you will need to unlock it in advance through your current domain name registrar.|
|2|Retrieve the transfer code|The transfer code will be issued by your current domain name registrar when you unlock your domain.|
|3|Complete the order with OVH|On the [OVH](https://ovh.co.uk/){.external} website, submit your domain name transfer order and order your web hosting plan. You will need to enter the transfer code you have received. When you choose your DNS servers, enter your current service provider’s DNS servers.|
|4|Pay for the order|Once your payment has been received, the domain name transfer process will begin and your web hosting plan will be set up. **Depending on your domain name registrar’s internal policy, your domain name’s DNS servers may be suspended, making all services associated with your domain name (i.e. your website and email addresses) inaccessible.**|
|5|Validate, or await validation of the transfer|This step will vary, depending on your domain name extension. When validation is required, an email request will usually be sent., which will explain the procedure. You will need to follow these steps, which will finish with a transfer request confirmation.|

#### Step 2: Transfer your website

You will need to follow several sub-steps to do this.

|Sub-step|Description|Details|
|---|---|---|
|1|Create a website backup|You will need to create a full backup of your website, including all of the files and the database (if applicable). This full website backup is essential for migrating your website to OVH.|
|2|Put your website online with OVH|Log in to your storage space (via FTP) to import your website’s files onto it. You will need to put them online in the **"www"** folder. Your FTP login credentials will be sent to you via email.|
|3|Create an OVH database|If your website works with a database, you will need to [create a new one with OVH](https://docs.ovh.com/gb/en/hosting/managing-a-database-on-a-web-hosting-package/){.external}, via your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.|
|4|Import the database backup|Import your database backup using [the OVH tool, available in your Control Panel](https://docs.ovh.com/gb/en/hosting/web_hosting_guide_to_importing_a_mysql_database/){.external}.|
|5|Link the website to the new database|The data stored in your old database is still present in your website’s configuration file. Modify this file in your OVH storage space by entering the OVH database's information.|

Your domain name’s configuration will remain unchanged, and the web hosting plan used to keep your website online will still be the one hosted by your current service provider, if the DNS servers have not been suspended.

#### Step 3: Recreate your email addresses with OVH

**Once the domain name transfer process is complete**, you will receive an email confirming that the email service linked to your web hosting plan has just been set up. Once you receive this confirmation, you will need to [recreate the same email addresses with OVH,](https://docs.ovh.com/gb/en/emails/hosted_email_how_to_set_up_an_email_address/){.external} ensuring that they are completely identical to the addresses created with your current service provider. In your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, in the left-hand services bar, go to the `Emails`{.action} section, then the web hosting plan you have just ordered (with the same heading as your domain). Follow the steps for creating email addresses by clicking `Create an email address`{.action}.

Your domain name’s configuration will still remain unchanged, and you will continue to receive new emails via the email addresses created with your current service provider, if they have not suspended the DNS servers. You will also still need to use the email address created with your current service provider for sending emails.

#### Step 4: Modify your domain name’s configuration

Now that you have transferred your website, recreated your email addresses, and transferred your domain name to OVH, you will need to modify your domain name’s configuration. You can do this by modifying your domain name’s current DNS servers, replacing them with OVH DNS servers.

You will need to modify them via your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}. This guide with *[General information about DNS servers](https://docs.ovh.com/gb/en/domains/web_hosting_general_information_about_dns_servers/){.external}* will help you do this.

This modification will do several things:

- **Technically link your domain name to OVH solutions.** Your OVH web hosting plan will be used to display your website, and you will then start receiving new emails at the email addresses you have created with OVH.
- **Resolve any service interruptions.** If your domain name registrar suspended its own DNS servers when you transferred your domain name, this configuration change will make your domain name accessible again.

> [!warning]
>
> Changes made to a domain’s name servers can take 24-48 hours to fully propagate.
>

#### Step 5: Transfer the content of your email addresses

You will need to follow several sub-steps to do this:

|Sub-step|Description|Details|
|---|---|---|
|1|Migrate the content of your email addresses to OVH|Using the [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} tool, you can copy the content of the email addresses registered with your original service provider to those created at OVH.|
|2|Use your email addresses|You can access your OVH email addresses via an online application ([Webmail](https://mail.ovh.net/){.external}). If you have configured one of your email addresses on an email client (e.g. Outlook), you will need to reconfigure it, replacing your original service provider’s server details with details of [the OVH servers](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/){.external}.|

Your website, email addresses and domain name have now been migrated to OVH!

## Go further

[An overview of OVH email](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/){.external}

[General information about DNS servers](https://docs.ovh.com/gb/en/domains/web_hosting_general_information_about_dns_servers/){.external}

[How to set up an email address](https://docs.ovh.com/gb/en/emails/hosted_email_how_to_set_up_an_email_address/){.external}

[Importing a MySQL database](https://docs.ovh.com/gb/en/hosting/web_hosting_guide_to_importing_a_mysql_database/){.external}

[Managing a database on a web hosting package](https://docs.ovh.com/gb/en/hosting/managing-a-database-on-a-web-hosting-package/){.external}

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).