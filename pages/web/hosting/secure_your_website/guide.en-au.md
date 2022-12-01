---
title: How to secure your website?
excerpt: Learn how to make your website more secure
slug: secure-website
section: Optimise your website
order: 01
---

**Last updated 10th December 2021**

## Objective

This guide will provide you with basic knowledge to ensure that your services are always available, protect your data integrity and secure the access to your solutions. It only applies to websites hosted on OVHcloud [shared servers](https://www.ovhcloud.com/en-au/web-hosting/).

This guide is organised in stages in an increasing order of technical difficulty. The security of your site will be measured by the element concerning it that is least protected. We therefore recommend that you carry out all of the actions described here.<br/>
However, if you experience any difficulties completing some of these steps, please do not hesitate to contact the [OVHcloud community](https://community.ovh.com/en/) or our [partners](https://www.ovhcloud.com/en-au/web-hosting/).

**Find out how to secure your website.**

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> We have published this guide to assist you as much as we can with common tasks. We recommend contacting a specialist provider and/or getting in touch with the publisher of the interface or software if you encounter any difficulties. OVHcloud cannot assist you in this regard. You can find more information in the “Go further” section of this guide.
>

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-au/web-hosting/)
- having the [login details](../log-in-to-storage-ftp-web-hosting/#step-1-retrieve-your-login-information) to access your hosting plan’s storage space
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)
- access to the [admin interface for your website](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}

## Instructions

### Step 1 - Check the security of your devices <a name="local"></a>

This first step is essential. Infecting your computer with a malicious software can potentially give to a dishonest person access to all of your keyboard input. As a result, the credentials you use to log in on your OVHcloud Control Panel or the admin interface for your website would be compromised.

In addition, the growing phenomenon of [ransomwares](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks){.external} (about 400 cases in France in 2020) may not only lead to the encryption of all your personal data, but also jeopardise your business by making all your data, devices and softwares inaccessible. 

First, check the security of your Windows, Mac or Linux desktop:

- check your machine for updates;
- run a full scan of your desktop, after updating your antivirus/anti-malware software;
- change your desktop admin password regularly (for more information on how to create strong passwords, follow the instructions of this [guide](../../customer/all-about-your-username/#creating-a-strong-unique-password).

### Step 2 - Secure the access to your OVHcloud Control Panel

To secure your customer account, [enable two-factor authentication](../../customer/secure-account-with-2FA/) and follow the instructions of this [guide](../../customer/all-about-your-username/).

Remember to update your [customer account informations](../../customer/all-about-your-username/#changing-your-personal-details) and to add a backup **email** to your account.<br>
In the event of your login details being lost and/or the primary email address for your OVHcloud customer account being unavailable, a backup email or updated personal information will be essential to help you regain access to your solutions.

### Step 3 - Back up your website regularly <a name="backup"></a>

> [!primary]
>
> Regularly backing up your data, no matter which solution you choose, is the most important security operation for you to make. It will always be possible to reinstall a software or order a set of new devices, but the recovery of data, once they have been deleted by mistake or after your hard drive has crashed, will rarely be possible.
>
> OVHcloud regularly backs up your data on its infrastructure. However, a handling error such as a delete operation launched manually on a live database, or a non-renewal of your services, will result in the permanent loss of your data and all their backups.
>

Start by backing up the data that makes up your (FTP **AND** database files), following the instructions in this [guide](../export-a-website/). Import them on your desktop or on an external device, such as a NAS server or an USB key.

Website management software (CMS) also provides the ability to install automatic backup plugins.<br>
Check the official forums for your favourite CMS or contact the [OVHcloud community](https://community.ovh.com/en/).

### Step 4 - Find out how to recognise fraudulent emails

Phishing emails are a security threat to your website because they can contain or lead to the installation of malwares. To learn how to recognise and protect yourself from them, see this [guide](../../customer/scams-fraud-phishing/).

### Step 5 - Set up automatic renewal

If your services are not renewed, OVHcloud has the legal obligation to delete all data associated with your hosting plan, as well as all of their backups, when your subscription expires. We systemically send follow-up e-mails to our customers reminding them of their renewal dates before the end of their actual subscription.<br>
However, these follow-up emails may arrive in your spam or you may have the email address associated with your OVHcloud account may have been typed incorrectly by mistake or may no longer be available.

If your website plays a major role in your professional activity, [enable automatic renewal](../../billing/how-to-use-automatic-renewal-at-ovh/#access-your-services-settings) across all of your OVHcloud services.<br>
We also recommend checking regularly the **validity of the payment methods** you have registered.

### Step 6 - Check that your website is up to date

Check your website updates regularly, following the instructions in this [guide](../security-practices-hosting-disabled/#22-update-your-website).

Also remember to use a recent version of the [PHP programming language](../how_to_configure_php_on_your_ovh_web_hosting_package_2014/) on your hosting plan.

### Step 7 - Activate https

Set up an encrypted connection to your website using the **HTTPS** protocol by following this [guide](../activate-https-website-ssl/). By enabling this protocol, you can encrypt all of the information sent via your website (particularly data entered by your users on its forms).

### Step 8 - Protect your forms

Forms on websites ca be targeted by hackers/spammers. Protect your forms against their attacks by implementing **CAPTCHA plugins** on your website.

### Step 9 - Set up a security plugin on your site

Add a security plugin recommended by the CMS publisher to your website:

- [WordPress](https://wordpress.org/){.external}
- [Joomla](https://www.joomla.org/){.external}
- [Drupal](https://www.drupal.org/){.external}
- [PrestaShop](https://www.prestashop.com/en){.external}

### Step 10 - Check that your hosting does not contain any malwares

In this step, you will need to log in to your [FTP space](../log-in-to-storage-ftp-web-hosting/). It involves technical skills to recognise possible malicious files on your web hosting. If you experience any difficulties with this verification, please do not hesitate to contact our [partners](https://www.ovhcloud.com/en-au/web-hosting/).

If you have any doubts regarding the safety of data within your FTP server, please also carry out the checks in [step 1](#local) once again and [change the password](../modify-ftp-user-password/) on your FTP space.

### Step 11 - Test your website backups

As said in the [step 2](#backup) of this guide, to regurlaly perform [backups of your website’s data](#backup) (FTP files and database) is the most important security action for you to make regarding website.

But even having backups of your website on your desktop can not be considered as sufficient: you also need to test theses backups (especially the databases) to ensure that they will work properly the day you need them.

You can perform these tests locally, for example by importing your data on [WAMP](https://www.wampserver.com/en/){.external}. Then you need also to be sure that you configure your WAMP server with the same parameters than OVHcloud [web hosting servers](https://webhosting-infos.hosting.ovh.net/).

You can also create a **test version** of your website (e.g.: test.mydomain.tld) within another folder in your FTP server (you can still use a basic template).

## Go further <a name="gofurther"></a>

[What to do if your WordPress site is hacked](../what_to_do_if_your_wordpress_site_is_hacked/)

[Responding when your hosting is deactivated for security purposes](../security-practices-hosting-disabled/)

For specialised services (SEO, development, etc.), contact your [OVHcloud partners](https://partner.ovhcloud.com/en-au/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-au/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.