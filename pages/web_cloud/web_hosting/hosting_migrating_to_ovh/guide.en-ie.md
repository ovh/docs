---
title: "Migrating your website and associated services to OVHcloud"
excerpt: "Find out how to migrate your website, domain name, database and emails to OVHcloud without any service interruptions"
updated: 2024-06-24
---

## Objective

This guide will outline the steps you need to take to migrate your entire website, folders, domain name, database, and email addresses to OVHcloud, without any service interruptions.

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or reach out to the OVHcloud community if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- Administrative rights to manage your website’s domain name
- A transferable domain name (created at least 60 days prior)
- Access to your domain name’s active DNS (Domain Name System) zone
- Access to your website’s files and database at your current hosting provider
- Credentials (user, password, server) for your current email accounts
- Access to the [OVHcloud Control Panel](/links/manager).

## Instructions

> [!success]
>
> The instructions in this guide reference several products from the Web Cloud universe. We recommend reading all the steps below **before** you begin migrating your services.
>

Migrating your entire website and emails to OVHcloud **without any service interruptions** requires a precise 10-step procedure:

- [Step 1: Order the hosting plan and email accounts from OVHcloud](#step1)
- [Step 2: Create and preconfigure a DNS zone for your domain name at OVHcloud](#step2)
- [Step 3: Retrieve a full backup of your website](#step3)
- [Step 4: Import your website backup to your OVHcloud hosting plan](#step4)
- [Step 5: Recreate your email accounts at OVHcloud](#step5)
- [Step 6: Declare the OVHcloud email servers in your domain name’s active DNS zone](#step6)
- [Step 7: Transfer the content of your old email accounts to your new accounts with OVHcloud](#step7)
- [Step 8: Reconfigure your email software](#step8)
- [Step 9: Replace your domain name’s active DNS servers with those of OVHcloud](#step9)
- [Step 10: Transfer your domain name to OVHcloud](#step10)

By following these 10 steps **in order**, you will not experience any downtime when accessing your website or receiving new emails.

However, depending on your domain registrar, hosting provider or email service provider, they may cut off access to your old services if they notice that your domain name is no longer configured on their infrastructures.<br>
In this case, a service interruption may occur.

This guide is designed to minimise the duration of such an interruption.

### Step 1: Order the hosting plan and email addresses from OVHcloud <a name="step1"></a>

Several [OVHcloud web hosting plans](/links/web/hosting) contain an [MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities) email solution. With this email offer, you can create email accounts with a maximum storage space of 5 GB each. Choose from the following hosting plans, considering the PHP version, SQL version, number of email accounts you need, and the size of your website to migrate:

- Hosting [Personal](/links/web/hosting-personal-offer) with **10 MX Plan email accounts**
- Hosting [Pro](/links/web/hosting-professional-offer) with **100 MX Plan email accounts** (for business)
- Hosting [Performance](/links/web/hosting-performance-offer) with **1000 MX Plan email accounts** (scalable dedicated resources)

Once you have chosen your hosting plan, click the `Order`{.action} button on the commercial pages above. Follow the steps for the **order without requesting the transfer of your domain name**. (This action will be performed in step 10 of this guide.)

You can also place the order from your [OVHcloud Control Panel](/links/manager). Once you have logged in, follow the instructions below:

- Go to the `Web Cloud`{.action} tab.
- In the top left of the interface, click `Order`{.action}, then `Hosting plans`{.action}.
- Follow the steps in the **order without requesting the transfer of your domain name** (this action will be carried out in step 10 of this guide).

Once the payment has been confirmed, the hosting plan installation will begin. An email will be sent to your contact email address. It will contain the credentials for accessing your web hosting plan’s FTP (File Transfer Protocol) storage space.

> [!primary]
>
> OVHcloud offers other email services in addition to the MX Plan solution. For example, you can combine email accounts of the [Email Pro offer](/links/web/email-pro) and/or accounts [“Exchange”](/links/web/emails-hosted-exchange) with MX Plan email accounts.
>

### Step 2: Create and preconfigure a DNS zone for your domain name at OVHcloud <a name="step2"></a>

If your domain is hosted by another service provider and you would like to transfer it to OVHcloud, you must first create and preconfigure a DNS zone before initiating the transfer, in order to avoid any service interruptions.

After your hosting service is installed, log in to your [OVHcloud Control Panel](/links/manager) to create a DNS zone for your domain name. Do not use "**www**" when doing this. You can refer to our guide on [Creating a DNS zone at OVHcloud](/pages/web_cloud/domains/dns_zone_create).

Once you have created a DNS zone, you can manage it using our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

If they are not present, enter the following information:

**Example** (for the domain name "domain.tld"):

|Domain|Record Type|Priority|Target|
|---|---|---|---|
|domain.tld.|MX|1|mx1.mail.ovh.net.|
|domain.tld.|MX|5|mx2.mail.ovh.net.|
|domain.tld.|MX|100|mx3.mail.ovh.net.|
|www.domain.tld.|CNAME|-|domain.tld.|
|domain.tld.|A|-|`target_IP_address`|

To retrieve the correct target IP address for your OVHcloud hosting plan, please refer to our guide listing the [IP addresses of the different shared hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

**Example**: For the domain name "domain.tld", the domain name records should look as follows:

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-mx-a-cname.png){.thumbnail}

> [!success]
>
> Note the two target values with the record type "NS", `dnsXX.ovh.net` and `nsXX.ovh.net` (or `dns200.anycast.me` and `ns200.anycast.me`). They correspond to the DNS servers associated with this DNS zone for your domain name. They will be used in [step 9](#step9) of this guide.
>

### Step 3: Retrieve a full backup of your website <a name="step3"></a>

Retrieve the contents of your current web hosting from its FTP storage space. Download a backup of your database as well, if your website uses one.

You can only achieve this with your current hosting provider. Contact them if you are having trouble retrieving a full backup of your website.

### Step 4: Import your website backup to your OVHcloud hosting plan <a name="step4"></a>

To import the backup of your old service provider’s FTP storage space, [log in to the FTP storage space of your OVHcloud hosting](/pages/web_cloud/web_hosting/ftp_connection) and upload the backup to the root folder ‘www’ (or another root folder you have already created).

We recommend that you use [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) to upload your FTP backup to your hosting.

If your backup file is a compressed archive, extract it into an empty folder on your computer before uploading your files to the OVHcloud hosting.

[Create a new database](/pages/web_cloud/web_hosting/sql_create_database) for your hosting, then [import your backup into your new database](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud offers Web Cloud Databases database servers. If you would like to use this solution with your website, you can find all of our documentation for this product on our dedicated page: </products/web-cloud-clouddb>.
>

Your OVHcloud database has to be associated with your website’s configuration file in the FTP storage space of your OVHcloud hosting plan.
To do this, replace the login details for your old database with the login details for your new OVHcloud database. You can find this information in your website’s configuration settings or database connection file.

> [!success]
>
> If you are using a Content Management System (CMS) like WordPress, Joomla!, Drupal or PrestaShop, you can find the information in their configuration files. See **Step 2** of the guide “[Changing a database password](/pages/web_cloud/web_hosting/sql_change_password)”.
>

Declare and authorise your external domain name on your OVHcloud web hosting plan by referring to our guide on [Managing multiple websites on an OVHcloud web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite). Enter the name of the folder you chose at the beginning of [step 4](#step4) as the Multisite "Root folder". As a reminder, this is the folder in which you have placed your files in your FTP storage space.

> [!warning]
>
> **Performing this operation is crucial**. Your website will not be displayed until you have entered the correct information. Please follow the "TXT" DNS record syntax closely.
>
> Since your domain name is not yet with OVHcloud, you will need to add a "TXT" typ DNS record with the OVHcontrol token, and change the "A" record for your domain name. This is done in your domain name’s active DNS zone with your current provider.
>
> Do the same for your "www" subdomain.
>
> If necessary, contact your DNS zone’s current administrator to make the change.
>

**Example** for the "domain.tld" domain name:

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-a-txt-cname.png){.thumbnail}

**The modification of DNS records of the type "A", "CNAME" and "TXT" must be done at your domain name’s current DNS provider and will take between 4 and 24 hours to propagate fully.**

After DNS propagation, the website displayed with your domain name will be the one hosted by OVHcloud.

### Step 5: Recreate your email addresses at OVHcloud <a name="step5"></a>

Create new email accounts and name them according to your current email addresses hosted by your email provider. Use our guide on [Creating MX Plan email addresses](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation).

If you have opted for an Email Pro or Exchange solution, please read our documentation on this topic to create your email addresses:

- For [Email-Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)
- For [Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

### Step 6: Declare the OVHcloud email servers in your domain name’s active DNS zone <a name="step6"></a>

In this step, you will need to change the "MX" email servers in your domain name’s active DNS zone.
This will result in you receiving new emails on your new OVHcloud email addresses.

Replace your current "MX" records with the following three records at your DNS provider (without keeping any of the old entries):

- Your domain name without "www" as record type "MX", to the target: `mx1.mail.ovh.net.`
- Your domain name without "www" as record type "MX", to the target: `mx2.mail.ovh.net.`
- Your domain name without "www" as record type "MX", to the target: `mx3.mail.ovh.net.`

This change takes place at your current DNS provider. You will need to allow between **4 and 24 hours propagation time** for the changes to become active.<br>
This means that during the DNS propagation, less and less emails will be received by the old email accounts, and emails will start to arrive at your new OVHcloud email accounts.<br>
Once the propagation is complete, all new emails will be received by your OVHcloud email accounts.

WWe recommend changing the MX records **before** migrating the content of your old email accounts.
This method avoids you having to redo a migration for the few emails received on your old email accounts during DNS propagation.

### Step 7: Transfer the content of your old email accounts to your new accounts with OVHcloud <a name="step7"></a>

After the DNS propagation, all your new emails are received by your new email accounts. However, your old emails are still stored on your previous email server.

There are two ways of migrating the content of your old email accounts.

**Option 1**: Use our [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} tool, which allows you to copy the content of email accounts at your old service provider to your new OVHcloud accounts. You can refer to our guide [Migrating email accounts using OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

We recommend that you do not use the `Server type`{.action} **POP** in the `Source account`{.action} section. This protocol deletes emails from your old server, and sends them to the destination OVHcloud server. You will no longer be able to compare the content of the old accounts with the new email accounts.

As for `Destination account`{.action}, enter only the relevant OVHcloud email address and password. Keep the `Server type`{.action} in `Hosted by OVH (Autodetect)`{.action}.

Once the migration is complete, log in to your OVHcloud email account using [OVHcloud webmail](/links/web/email) to check that all your emails are in the new account.

Repeat for all of your email accounts.

> [!primary]
>
> You must have the access credentials for all your old email accounts, as well as the name of your old service provider’s email server to perform this action.
>
> If your email accounts were configured as POP without keeping copies of emails on your email server, or if you have emails saved locally on your devices, only **option 2** can be realised.
>

**Option 2**: Back up the content of your email accounts using an email client (Outlook, Mac Mail, etc.), reconfigure your email software, then import the backup into your new OVHcloud email accounts.

### Step 8: Reconfigure your email software <a name="step8"></a>

Once you have migrated your email accounts to OVHcloud, reconfigure your email software using our relevant email guides.

#### For MX Plan email accounts: 

- You can find all of the configuration settings in our guide “[Getting started with the MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities#2-using-the-software-of-your-choice)”. You will also find links to custom configuration guides for major email software.

#### For Email Pro accounts:

- You can find all of our configuration guides in the section `Email client configuration` of [our documentation on the Email Pro offer](/products/web-cloud-email-collaborative-solutions-email-pro).

#### For Exchange email accounts:

- You can find all of our configuration guides in the `Exchange configuration on computer` and `Exchange configuration on smartphone` sections of [our Exchange documentation](/products/web-cloud-email-collaborative-solutions-microsoft-exchange).

### Step 9: Replace your domain name’s active DNS servers with those of OVHcloud <a name="step9"></a>

The DNS zone pre-configured in [step 2](#step2) has not yet been applied to your domain name. Currently, your domain name still uses your original provider’s DNS servers.

Replace the current DNS servers (of the original registrar) with the two DNS servers declared in the OVHcloud DNS zone (format `dnsXX.ovh.net` and `nsXX.ovh.net` or `dns200.anycast.me` and `ns200.anycast.me`). You can do this in the management interface of the original registrar.

> [!warning]
>
> The DNS servers must be changed at your domain name’s current registrar, and you will need to allow between **24 and 48 hours** for the changes to propagate fully.
>

### Step 10: Transfer your domain name to OVHcloud <a name="step10"></a>

Once the DNS propagation is complete, check that your entire website is functional. Browse your website to check that all pages are displaying correctly and that no 404 errors are returned. Also check the sending and receiving of emails from your email addresses.

If everything is in order, unlock your domain name and retrieve its "transfer code", "EPP" or "AuthCode" from your current domain name registrar.

Then transfer your domain name using our guide on [transferring a domain name to OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain).

Once you have transferred your data and services, you can cancel your old services with your service provider(s).

### Conclusion

After following the ten steps in order, your entire website is now migrated to OVHcloud, all without any service interruptions.

## Go further <a name="go-further"></a>

[Getting started with the MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[General information on DNS servers](/pages/web_cloud/domains/dns_server_general_information).

[Creating an email address with an MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation).

[Importing a MySQL database](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Creating and managing a database in your Web Hosting plan](/pages/web_cloud/web_hosting/sql_create_database).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).