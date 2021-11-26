---
title: How to secure your website?
excerpt: Learn how to make your website more secure
slug: secure-website
section: Optimise your website
order: 1
---

**Last updated 16th August 2021**

## Objective

This guide will provide you with basic knowledge to ensure that your services are always available, protect your data integrity and secure the access to your solutions. It only applies to websites hosted on OVHcloud [shared servers](https://www.ovhcloud.com/en-gb/web-hosting/).

We also organized in stages with an increasing importance and technical difficulty, which means that the first steps are the most indispensable. The security of your site will be measured by the element concerning it that is least protected. We recommend that you carry out all of the actions described in this guide. However, if you experience any difficulties carrying out some of them, please do not hesitate to contact the OVHcloud [community](https://community.ovh.com/) or our [partners](https://partner.ovhcloud.com/fr/).

**Find out how to secure your website.**

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> We have published this guide to assist you as much as we can with common tasks. We recommend contacting a specialist provider and/or getting in touch with the publisher of the interface or software if you encounter any difficulties. OVH cannot assist you in this regard. You can find more information in the “Go further” section of this guide.
>

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovh.co.uk/web-hosting)
- having the [login details](../log-in-to-storage-ftp-web-hosting/#step-1-retrieve-your-login-information) to access your hosting plan’s storage space
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- access to the [admin interface for your website](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}

## Instructions

### Step 1: Check the security of your devices <a name="local"></a>

This first step is essential. Infecting your computer with malicious software can potentially give to a dishonest person access to all of your keyboard input. As a result, the credentials you use to log in on your OVHcloud Control Panel or the admin interface for your website would be compromised.

In addition, the growing phenomenon of [ransomwares](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks){.external} (about 400 cases in France in 2020) may not only lead to the encryption of all your personal data, but also jeopardise your business by making all your data, devices and softwares inaccessible. 

First, check the security of your Windows, Mac or Linux desktop:

- check your machine for updates;
- run a full scan of your desktop, after updating your antivirus/anti-malware software;
- change your desktop admin password regularly (for more information on choosing passwords, follow the instructions of this [guide](../../customer/tout-savoir-sur-identifiant-client/).

### Step 2: Go to your OVHcloud Control Panel.

To secure your customer account, follow the instructions in this [guide](../../customer/all-about-your-username/#creating-a-strong-unique-password).

Remember to update your [customer account informations](../../customer/all-about-your-username/#changing-your-personal-details), and add a backup **email**.<br>
In the event of your login details being lost and/or the primary email address for your OVHcloud customer account being unavailable, a backup email or updated personal information will be essential to help you regain access to your solutions.

### Step 3: Back up your website regularly <a name="backup"></a>

> [!primary]
>
> Regularly backing up your data, no matter which solution you choose, is the most important security move you can make. It will always be possible to reinstall software or order a new device, but it is very difficult to recover data once it has been lost.
>
> OVHcloud regularly backs up your data on its infrastructure. However, a handling error such as a deletion operation launched on a live database, or a non-renewal of your services, may result in the permanent loss of your data.
>

Start by backing up the data that makes up your (FTP **AND** database files), following the instructions in this [guide](../exporter-son-site-web/). Import them on your desktop or on an external device, such as a NAS server or USB key.

Website management software (CMS) also provides the ability to install automatic backup plugins.<br>
Check the official forums for your favourite CMS, or contact the OVHcloud[ ](https://community.ovh.com/)community.

### Step 4: Find out how to recognise fraudulent emails

Phishing emails also pose a security threat to your site because they can contain or lead to the installation of malware. To learn how to recognise and protect yourself from them, see this [guide](../customer/arnaques-fraude-phishing/).

### Step 5: Set up automatic renewal

If your services are not renewed, OVHcloud is legally obliged to delete all data associated with your hosting plan, as well as all of their backups, when your subscription expires. We send reminder messages to our customers reminding them of their renewal dates.<br>
However, these reminder emails may arrive in your spam, or the email address associated with your OVHcloud account may be incorrect, or may no longer be available.

Especially if you don't have the option of making regular backups, and your website has a predominant place in your business activity, [enable automatic](../../billing/renouvellement-automatique-ovh/#acceder-au-parametrage-de-vos-services) renewal for all of your OVHcloud services.<br>
We also recommend that you regularly check the validity of the payment methods you have registered.

### Step 6: Check that your website is up to date

Check your website updates regularly, following the instructions in this [guide](../site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet).

Also remember to use a recent version of PHP [language](../configurer-le-php-sur-son-hebergement-web-mutu-2014/) on your hosting plan.

### Step 7: Activate https

Set up an encrypted connection to your website via **HTTPS** protocol, using this [guide](../passer-site-internet-https-ssl/).

### Step 8: Protect your forms

Forms on websites are a favourite target of hackers/spammers. Protect your forms against attacks by implementing **CAPTCHA plugins**.

### Step 9: Set up a security plugin on your site

Add a security plugin recommended by the CMS publisher to your website:

- [WordPress](https://wordpress.com/fr/){.external}
- [Joomla](https://www.joomla.fr/){.external}
- [Drupal](https://www.drupal.fr/){.external}
- [Prestashop](https://www.prestashop.com/fr){.external}

### Step 10: Check that your hosting does not contain malicious files

In this step, you will need to log in to your FTP [space](../connexion-espace-stockage-ftp-hebergement-web/). It involves technical skills to recognise possible malicious files on your hosting. If you experience any difficulties with this verification, please do not hesitate to contact our [partners](https://partner.ovhcloud.com/fr/).

If you have any doubts about this, please also carry out [the checks listed in step 1 of this guide](#local), and [change the password](../modifier-mot-de-passe-utilisateur-ftp/) on your FTP space.

### Step 11: Test your website backups

You will need to perform regular [backups of your website’s data](#backup) (FTP files and database).

But they are not absolute security. You will also need to test your database backups to ensure that they are not corrupted.

You can perform these tests locally, for example by importing your data to [WAMP](https://www.wampserver.com/) software {.external}. Then make sure that you configure your local solution to match all of its configuration with that of our shared hosting [servers]().

You can also create a test **version** of your website (e.g.: test.mydomain.tld) in another folder on your hosting plan (you can still use a basic template).

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud](https://partner.ovhcloud.com/fr/) partners.

If you would like assistance using and configuring your OVHcloud solutions, please refer to our support [offers](https://www.ovhcloud.com/fr/support-levels/).

Join our community of users on <https://community.ovh.com/>.
