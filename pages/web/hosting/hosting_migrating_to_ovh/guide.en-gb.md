---
title: Migrating your website and emails to OVHcloud
slug: migrating-website-to-ovh
excerpt: Find out how to migrate your website, emails and domain name to OVHcloud without any service interruptions
section: Getting started
order: 08
---

**Last updated 1st March 2023**

## Objective

This guide will outline the steps you need to take to migrate your entire website, domain name and email addresses to OVHcloud, without any service interruptions.


> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) or reach out to the OVHcloud community if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- Administrative rights to manage your website’s domain name
- A transferable domain name (created at least 60 days prior)
- Access to your domain name’s active DNS (Domain Name System) zone
- Access to your website’s files and database at your current hosting provider
- Credentials (user, password, server) for your current email accounts
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

> [!success]
>
> The instructions in this guide reference several products from the Web Cloud universe. We recommend reading all the steps below **before** you begin migrating your services.
>

To migrate your website and emails to OVHcloud **without any service interruptions** you will need to follow a 10-step procedure:

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

Several OVHcloud web hosting plans contain an MX Plan email solution. With this email offer, you can create email accounts with a maximum storage space of 5 GB each. Choose from the following hosting plans, considering the PHP version, SQL version, number of email accounts you need, and the size of your website to migrate:

- Hosting [Personal](https://www.ovhcloud.com/en-gb/web-hosting/personal-offer/) with **10 MX Plan email accounts**
- Hosting [Pro](https://www.ovhcloud.com/en-gb/web-hosting/professional-offer/) with **100 MX Plan email accounts** (for business)
- Hosting [Performance](https://www.ovhcloud.com/en-gb/web-hosting/performance-offer/) with **1000 MX Plan email accounts** (scalable dedicated resources)
- Hosting [Cloud Web](https://www.ovhcloud.com/en-gb/web-hosting/cloud-web-offer/) with **200 MX Plan email accounts** (for application developers)

Once you have chosen your hosting plan, click the `Order`{.action} button on the commercial pages above. Follow the steps for the **order without requesting the transfer of your domain name**.

As an OVHcloud customer you can also place an order from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Once you have logged in, click on the `Web Cloud`{.action} section, then click on the `Order`{.action} button in the top left-hand corner and choose `Hosting plans`{.action}. Continue with the steps for the **order process without requesting the transfer of your domain name**.

Once the payment has been confirmed, the hosting plan installation will begin. An email will be sent to your contact email address. It will contain the credentials for accessing your web hosting plan’s FTP (File Transfer Protocol) storage space.

> [!primary]
>
> OVHcloud offers other email services in addition to the MX Plan solution. For example, you can combine email accounts of the [Email Pro offer](https://www.ovhcloud.com/en-gb/emails/email-pro/) and the [Exchange offer](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/) with MX Plan email accounts.
>

### Step 2: Create and preconfigure a DNS zone for your domain name at OVHcloud <a name="step2"></a>

After your hosting service is installed, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) to create a DNS zone for your domain name. Do not use "**www**" when doing this. You can refer to our guide on [Creating a DNS zone at OVHcloud](https://docs.ovh.com/gb/en/domains/create_a_dns_zone_for_a_domain_which_is_not_registered_at_ovh/).

Once you have created a DNS zone, you can start configuring it with the help of our guide: [Editing an OVHcloud DNS zone](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/). Add the following records if they do not exist:

- Your domain name without "www" as record type "MX", to the target: `mx1.mail.ovh.net.`
- Your domain name without "www" as record type "MX", to the target: `mx2.mail.ovh.net.`
- Your domain name without "www" as record type "MX", to the target: `mx3.mail.ovh.net.`
- Your domain name without "www" as record type "A", with the IP address of your OVHcloud hosting as target. To retrieve the correct IP address, please refer to our guide listing the [IP addresses of the shared hosting clusters](https://docs.ovh.com/gb/en/hosting/list-of-ip-addresses-of-web-hosting-clusters/).
- Your domain name **with** "www" as record type "CNAME", with your domain name (without "www") as target.

**Example**: For the domain name "domain.tld", the result should be displayed as in the following image:

![hosting](images/DNSzone.png){.thumbnail}

> [!success]
>
> Note the two target values of the two NS entries at the top of your zone. They will be used in [step 9](#step9) of this guide.
>
> These values correspond to the DNS servers hosting the DNS zone for your domain name.
>

### Step 3: Retrieve a full backup of your website <a name="step3"></a>

Retrieve the contents of your current web hosting from its FTP storage space. Download a backup of your database as well, if your website uses one.

You can only achieve this with your current hosting provider. Contact them if you are having trouble retrieving a full backup of your website.

### Step 4: Import your website backup to your OVHcloud hosting plan <a name="step4"></a>

To import the backup of your old service provider’s FTP storage space, [log in to the FTP storage space of your OVHcloud hosting](https://docs.ovh.com/gb/en/hosting/log-in-to-storage-ftp-web-hosting/) and upload the backup to the root folder ‘www’ (or another root folder you have already created).

We recommend that you use [FileZilla](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/) to upload your FTP backup to your hosting.

If your backup file is a compressed archive, extract it into an empty folder on your computer before uploading your files to the OVHcloud hosting.

[Create a new database](https://docs.ovh.com/gb/en/hosting/creating-database/) for your hosting, then [import your backup into your new database](https://docs.ovh.com/gb/en/hosting/web_hosting_guide_to_importing_a_mysql_database/).

> [!primary]
>
> OVHcloud offers Web Cloud Databases database servers. If you would like to use this solution with your website, you can find all of our documentation for this product on our dedicated page: <https://docs.ovh.com/gb/en/clouddb/>.
>

Your OVHcloud database has to be associated with your website’s configuration file in the FTP storage space of your OVHcloud hosting plan.
To do this, replace the login details for your old database with the login details for your new OVHcloud database. You can find this information in your website’s configuration settings or database connection file.

> [!success]
>
> If you are using a Content Management System (CMS) like WordPress, Joomla!, Drupal or PrestaShop, you can find the information in their configuration files. See **Step 2** of the guide “[Changing a database password](https://docs.ovh.com/gb/en/hosting/change-password-database/)”.
>

Declare and authorise your external domain name on your OVHcloud web hosting plan by referring to our guide on [Managing multiple websites on an OVHcloud web hosting plan](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/). Enter the name of the folder you chose at the beginning of [step 4](#step4) as the Multisite "Root folder". As a reminder, this is the folder in which you have placed your files in your FTP storage space.

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

![hosting](images/DNSmultisite.png){.thumbnail}

**The modification of DNS records of the type "A", "CNAME" and "TXT" must be done at your domain name’s current DNS provider and will take between 4 and 24 hours to propagate fully.**

After DNS propagation, the website displayed with your domain name will be the one hosted by OVHcloud.

### Step 5: Recreate your email addresses at OVHcloud <a name="step5"></a>

Create new email accounts and name them according to your current email addresses hosted by your email provider. Use our guide on [Creating MX Plan email addresses](https://docs.ovh.com/gb/en/emails/hosted_email_how_to_set_up_an_email_address/).

If you have opted for an Email Pro or Exchange solution, please read our documentation on this topic to create your email accounts:

- For Email Pro: <https://docs.ovh.com/gb/en/emails-pro/first-configuration-email-pro/>
- For Exchange: <https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_20132016_configuring_the_solution_for_the_first_time/>

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

We recommend that you change the MX records **before** migrating the content of your email accounts.
This method avoids you having to redo a migration for the few emails received on your old email accounts during DNS propagation.

### Step 7: Transfer the content of your old email accounts to your new accounts with OVHcloud <a name="step7"></a>

After the DNS propagation, all your new emails are received by your new email accounts. However, your old emails are still stored on your previous email server.

To migrate the content of your old accounts, you have two options.

**Option 1**: Use our [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} tool, which allows you to copy the content of email accounts at your old service provider to your new OVHcloud accounts. You can refer to our guide [Migrating email accounts using OVH Mail Migrator](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange-account-migration-with-ovh-mail-migrator/).

We recommend that you do not use the `Server type`{.action} **POP** in the `Source account`{.action} section. This protocol deletes emails from your old server, and sends them to the destination OVHcloud server. You will no longer be able to compare the content of the old accounts with the new email accounts.

As for `Destination account`{.action}, enter only the relevant OVHcloud email address and password. Keep the `Server type`{.action} in `Hosted by OVH (Autodetect)`{.action}.

Once the migration is complete, log in to your OVHcloud email account using [OVHcloud webmail](https://www.ovhcloud.com/en-gb/mail/) and check that all your emails are in the new account.

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

- You can find all of the configuration settings in our guide “[Getting started with the MX Plan solution](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/#2-using-the-software-of-your-choice)”. You will also find links to custom configuration guides for major email software.

#### For Email Pro accounts:

- You can find all of our configuration guides in the section `Email client configuration` of [our documentation on the Email Pro offer](https://docs.ovh.com/gb/en/emails-pro/).

#### For Exchange email accounts:

- You can find all of our configuration guides in the `Exchange configuration on computer` and `Exchange configuration on smartphone` sections of [our Exchange documentation](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/).

### Step 9: Replace your domain name’s active DNS servers with those of OVHcloud <a name="step9"></a>

The DNS zone preconfigured in [step 2](#step2) has not yet been applied to your domain name.

Replace your domain name’s current DNS servers with the two DNS servers declared in the OVHcloud DNS zone.

> [!warning]
>
> The DNS servers must be changed at your domain name’s current registrar, and you will need to allow between **24 and 48 hours** for the changes to propagate fully.
>

### Step 10: Transfer your domain name to OVHcloud <a name="step10"></a>

Once the DNS propagation is complete, verify that your website works and that emails are being sent and received by your email addresses.
If everything is in order, unlock your domain name and retrieve its "transfer code", "EPP" or "AuthCode" from your current domain name registrar.

Then transfer your domain name using our guide on [transferring a domain name to OVHcloud](https://docs.ovh.com/gb/en/domains/transfer-generic-domain/).

Once you have transferred your data and services, you can cancel your old services with your service provider(s).

## Go further <a name="go-further"></a>

[Getting started with the MX Plan solution](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/)

[General information on DNS servers](https://docs.ovh.com/gb/en/domains/web_hosting_general_information_about_dns_servers/)

[Creating an email address with an MX Plan solution](https://docs.ovh.com/gb/en/emails/hosted_email_how_to_set_up_an_email_address/)

[Importing a MySQL database](https://docs.ovh.com/gb/en/hosting/web_hosting_guide_to_importing_a_mysql_database/)

[Creating and managing a database in your Web Hosting plan](https://docs.ovh.com/gb/en/hosting/creating-database/)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
