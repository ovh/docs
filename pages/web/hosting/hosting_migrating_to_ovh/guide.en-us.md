---
title: Migrating your website and emails to OVHcloud
slug: migrating-website-to-ovh
excerpt: Find out how to migrate your website, emails and domain name to OVHcloud without any service interruptions
section: Getting started
order: 08
---

**Last updated 24th November 2022**

## Objective

This guide will outline the steps you need to take to migrate your entire website, domain name and email addresses to OVHcloud, without any service interruptions.

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/fr/) if you encounter any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this guide.
>

## Requirements

- Have an access to manage your website’s domain name (it must also be more than 60 days old).
- Have an access to your domain name’s active DNS (Domain Name System) zone.
- Have an access to your website’s files and database from your current hosting provider.
- Have the credentials (user, password, server) for your current email addresses.
- Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## Instructions

> [!success]
>
> The instructions in this guide reference several products from the Web Cloud universe. We recommend reading all the steps below **before** you begin migrating your services.
>

To migrate your website and emails to OVHcloud **without any service interruptions** you will need to follow a detailed 10-step procedure:

- [Step 1: order the hosting and email addresses from OVHcloud](#step1)
- [Step 2: create and pre-configure a DNS zone for your domain name at OVHcloud](#step2)
- [Step 3: retrieve a full backup of your website](#step3)
- [Step 4: import your website backup to your OVHcloud hosting plan](#step4)
- [Step 5: recreate your email addresses identically with OVHcloud](#step5)
- [Step 6: declare the OVHcloud email servers in your domain name’s active DNS zone](#step6)
- [Step 7: transfer the content of your old email addresses to your new addresses with OVHcloud](#step7)
- [Step 8: reconfigure your email software](#step8)
- [Step 9: replace your domain name’s active DNS servers with those of OVHcloud](#step9)
- [Step 10: transfer your domain name to OVHcloud](#step10)

By following these 10 steps **in order**, you will not experience any downtime when accessing your website or receiving new emails.

However, depending on your registrar, hosting provider or email service provider, they may cut off access to your old services if they notice that your domain name is no longer configured through their infrastructures.<br>
In this case, a service interruption may occur.

Should such an interruption occur, this guide shall be constructed in such a way as to minimise its duration.

### Step 1: order hosting and email addresses from OVHcloud <a name="step1"></a>

Several OVHcloud web hosting plans contain an MX Plan email solution. With this email offer, you can create email addresses with a maximum storage space of 5 GB for each address. Choose from the hosting plans below, depending on the PHP version, SQL version, number of email addresses you need, and the size of your website to migrate:

- Hosting [Personal](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) with **10 email addresses** “MX Plan”
- Hosting [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) with **100 MX Plan email addresses**
- Hosting [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) with **1000 MX Plan email addresses** This offer is available in 4 `sub-offers`.

Once you have chosen your hosting plan, if you are not an OVHcloud customer already, click the `Order`{.action} button on the commercial pages above. Follow the steps for the **order without requesting the transfer of your domain name**.

You can also place an order from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Once you have logged in, click on the `Web Cloud`{.action} section, then click on the `Order`{.action} button in the top left-hand corner, then `Hosting`{.action}. Continue with the steps for the **order process without requesting the transfer of your domain name**.

Once the payment has been confirmed, the hosting plan installation will begin. An email will be sent to your contact email address. This will contain the credentials for accessing your Web Hosting plan’s FTP (File Transfer Protocol) storage space.

> [!primary]
>
> OVHcloud offers other email solutions in addition to the MX Plan solution. For example, you can combine [“Exchange”](https://www.ovhcloud.com/fr/emails/hosted-exchange/) accounts with “MX Plan” email addresses.
>

### Step 2: Create and preconfigure a DNS zone for your domain name at OVHcloud <a name="step2"></a>

When your hosting plan is created, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), then create a DNS zone for your domain name **without the “www”**. You can refer to our guide on [Creating a DNS zone at OVHcloud](https://docs.ovh.com/fr/domains/creer-une-zone-dns-pour-un-domaine-externe/).

Once you have created a DNS zone, you can access how to manage it using our guide on [Editing an OVHcloud DNS zone](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/). If they are not present, enter the following:

- Your domain name without the "www", to the MX target type: "mx1.mail.ovh.net.".
- Your domain name without the "www", to the MX target type: "mx2.mail.ovh.net.".
- Your domain name without the "www", to the MX target type: "mx3.mail.ovh.net.".
- Your domain name without the "www", to the target IP address of type “A” of your OVHcloud hosting. To retrieve the correct IP address, please refer to our guide listing [IP addresses of different shared hosting clusters](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
- Your domain name **with** the "www", to your domain name without the “www”, using a “CNAME” record.

**Example**: For the "domain.tld" domain name, the rendering must be as follows:

![hosting](images/DNSzone.png){.thumbnail}

> [!success]
>
> Note the two target values of the first two NS entries. They will be used in [step 9](#step9) of this guide.
>
> These values correspond to the DNS servers associated with this DNS zone for your domain name.
>

### Step 3: retrieve a full backup of your website <a name="step3"></a>

Retrieve the contents of your current web hosting plan’s FTP storage space, as well as a backup of your database, if your website uses one.

You can only do this with your current hosting provider. Contact them if you are having trouble recovering a full backup of your website.

### Step 4: import your website backup to your OVHcloud hosting plan <a name="step4"></a>

To import the backup of your old service provider’s FTP storage space, [log in to the FTP storage space of your OVHcloud hosting](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) and upload the backup to the root folder ‘www’ (or another root folder you have already created).

We recommend that you use [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/) to upload your FTP backup to your hosting.

If your backup file is compressed (zipped), extract it into an empty folder on your computer before uploading your files to OVHcloud hosting.

To back up your database, [create a new database](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/) then [import your backup into your new database](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/).

Then link your OVHcloud database to your website’s configuration file in the FTP storage space of your OVHcloud hosting plan.
To do this, replace the login details for your old database with the login details for your new OVHcloud database. You can find this information in your website’s configuration/database connection file.

> [!success]
>
> To link your new database if you are using a Content Management System (CMS) like WordPress, Joomla!, Drupal or PrestaShop, you can find information on their configuration files in **Step 2** of the guide “[changing a database password](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/)”.
>

Declare/authorise your external domain name on your OVHcloud web hosting plan by referring to our guide on [managing multiple websites on an OVHcloud web hosting plan](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/). Declare the root folder "name" you chose at the beginning of [step 4](#step4). As a reminder, this is the folder in which you have placed your files in your FTP storage space.

> [!warning]
>
> **Performing this operation is crucial**, your website will not be displayed until you have entered the correct information. Please follow the “TXT” DNS record syntax closely.
>
> Since your domain name is not yet with OVHcloud, you will need to add a TXT DNS record with the OVHcontrol token, and change the A record for your domain name. This is directly in your domain name’s active DNS zone with your current provider.
>
> Do the same for your www subdomain.
>
> If necessary, contact your DNS zone’s current manager to make the change.
>

**Example**: for the "domain.tld" domain name:

![hosting](images/DNSmultisite.png){.thumbnail}

**The modifications to the DNS records A, CNAME and TXT must be made to your domain name’s current DNS provider and take between 4 and 24 hours to propagate fully.**

After DNS propagation, the website displayed with your domain name will be the one hosted by OVHcloud.

### Step 5: recreate your email addresses identically with OVHcloud <a name="step5"></a>

Recreate the same email addresses with your email provider using our guide on [Creating MX Plan email addresses](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/).

If you have opted for an Exchange solution, please read our documentation on this topic to create your email addresses: <https://docs.ovh.com/fr/microsoft-collaborative-solutions/premiere-configuration-exchange/>

### Step 6: declare OVHcloud email servers in your domain name’s active DNS zone <a name="step6"></a>

In this step, you will need to change the “MX” email servers in your domain name’s active DNS zone.
This will result in you receiving new emails on your new OVHcloud email addresses.

Replace (without leaving the old records) your old MX records with the following three records at your provider:

- Your domain name (without the "www") to the MX target: "mx1.mail.ovh.net.".
- Your domain name (without the "www") to the MX target: "mx2.mail.ovh.net.".
- Your domain name (without the "www") to the MX target: "mx3.mail.ovh.net.".

You can change the "MX" servers using your domain name’s current DNS provider, and you will need to allow between **4 and 24 hours for the propagation time** to propagate fully.<br>
This means that during the DNS propagation of the change, your emails will be received less and less from your old email addresses, and more and more from your new OVHcloud email addresses.<br>
Once the propagation is complete, all new emails received will be received by your OVHcloud email addresses.

We recommend that you change the MX records **before** migrating the content of your email addresses.
This method avoids you having to redo a migration for the few emails received on your old email addresses during DNS propagation.

### Step 7: transfer the content of your old email addresses to your new addresses at OVHcloud <a name="step7"></a>

After the DNS propagation, all your new emails are now received by your new email addresses. However, your old emails are still saved on your old email server.

To migrate the content of your old addresses, you have two options.

**Option 1**: use our [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external} tool, which allows you to copy the content of email addresses registered with your old service provider to those created at OVHcloud. You can refer to our guide [Migrate email accounts via OVH Mail Migrator](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-migration-de-comptes-e-mail-ovh-mail-migrator/).

We recommend that you do not use the `Server type`{.action} **POP** in the `Source account`{.action} section. This protocol deletes emails from your old server, and sends them to the destination OVHcloud server. You will no longer be able to compare the content of the old address with the new email address.

For the part `Destination account`{.action}, enter only the relevant OVHcloud email address and password. Leaving the `Server type`{.action} in `Hosted by OVH (Autodetect)`{.action}.

Once the migration is complete, log in to your OVHcloud email address using [OVHcloud webmail](https://www.ovhcloud.com/fr/mail/) to check that all your emails are in the new account.

Repeat for all of your email accounts.

> [!primary]
>
> You must have the access credentials for all your old email accounts, as well as the name of your old service provider’s email server to perform this action.
>
> If your email addresses were configured as POP without keeping copies of emails on your old email server, or if you have emails saved "locally" on your devices, only the **option 2** can be realised.
>

**Option 2**: back up the content of your email addresses using an email client (Outlook, Mac Mail, etc.), reconfigure your email software, then import the backup into your new OVHcloud email address.

### Step 8: reconfigure your email software <a name="step8"></a>

Once you have migrated your old email addresses to OVHcloud, reconfigure your email software using all of our email guides.

#### For MX Plan email accounts: 

- You can find all of the configuration settings in our guide “[General information on MX Plan emails](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/#2-utiliser-le-logiciel-de-votre-choix)”. You will also find links to custom configuration guides for major email software.

#### For Exchange email accounts:

- You can find all of our configuration guides in the `Exchange configuration on computer` and `Exchange configuration on smartphone` sections of [our Exchange documentation](https://docs.ovh.com/fr/microsoft-collaborative-solutions/).

### Step 9: replace your domain name’s active DNS servers with those of OVHcloud <a name="step9"></a>

The pre-configured DNS zone in [step 2](#step2) has not yet been applied to your domain name.

Replace your domain name’s current DNS servers with the two DNS servers declared in the OVHcloud DNS zone.

> [!warning]
>
> The DNS servers must be changed from your domain name’s current registrar, and you will need to allow between **24 and 48 hours** for the changes to propagate fully.
>

### Step 10: transfer your domain name to OVHcloud <a name="step10"></a>

Once the DNS propagation is complete, test your website and check that emails are being sent and received from your email addresses.
If everything is in order, unlock your domain name and retrieve its "transfer code", "EPP" or "AuthCode" from your current domain name registrar.

Then transfer your domain name using our guide on [transferring a domain name to OVHcloud](https://docs.ovh.com/fr/domains/transferer-mon-domaine-generique/).

Once you have transferred your data and services, you just need to cancel your old services with your old service provider(s).

## Go further <a name="go-further"></a>

[Overview of shared email](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/).

[General information on DNS servers](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/).

[Create a shared email address](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/).

[Importing a MySQL database](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/).

[Managing a database from a shared hosting plan](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/).

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.