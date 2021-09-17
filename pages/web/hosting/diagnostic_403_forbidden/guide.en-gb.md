---
title: What should I do if I have a 403 forbidden page?
excerpt: Find out how to get your website back online when it displays a 403 forbidden page
slug: diagnostic-403-forbidden
section: Diagnostics
order: 7
---

**Last updated 16th September 2021**

## Objective

Changes to the access rights to your website files, to the **.htaccess** file or the installation of a security plugin can sometimes result in a **"403 forbidden"** page.

It may also be the case that, following anomaly detection, our security robots have temporarily blocked access to files on your hosting. This type of automatic blocking is designed to prevent malicious code being sent to other entities and to protect you legally.

![403error](images/403error.png){.thumbnail}

**This guide explains how to unblock access to your website if you receive a 403 forbidden email.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- an [OVHcloud web](https://www.ovh.co.uk/web-hosting/) hosting plan
- having the [login details](../log-in-to-storage-ftp-web-hosting/#step-1-retrieve-your-login-information) to access your hosting plan’s storage space
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Step 1: analyse the situation

If the page **"403 forbidden"** appeared following an incorrect modification of your site, [restore all or part of your hosting](../restauration-ftp-filezilla-espace-client/) storage space to an earlier date.

If the backups available do not allow you to restore access to your site, contact a [specialised](https://partner.ovhcloud.com/fr/) service provider.

If the page **"403 forbidden"** did not appear following a modification of your site, consult your messaging. If you have received an email from our services notifying you that your hosting plan has been closed due to security reasons, please skip to [step 2](#etape2).

If the page **"403 forbidden"** appeared without any action on your part and you have not received any emails from our services on this subject, contact a [specialised](https://partner.ovhcloud.com/fr/) service provider.

### Step 2: secure your solutions <a name="etape2"></a>

First, check the security of your computer station(s):

- Perform security updates.
- Also check that an antivirus is installed, update it and run a full scan. If you do not have one, consult a [specialised](https://partner.ovhcloud.com/fr/) service provider before installing it.
- Change all of your local passwords, including your email addresses, in accordance with these [best practices](../../../customer/gerer-son-mot-de-passe/#generer-un-bon-mot-de-passe).
- Change the passwords for your OVHcloud services by following the instructions in this [guide](../gerer-et-acceder-a-ses-mots-de-passe/).

> [!warning]
>
> Before changing the password for your website’s database in your OVHcloud Control [Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), update your website’s configuration file so that it connects to the database with the new password.
>
> Otherwise, changing your database password will result in your website or services using it being blocked.
>
> If you have any doubts about how to do this, contact our [OVHcloud](https://partner.ovhcloud.com/fr/) partners.
>

### Step 3: intervene on your hosting

First, write down the date on which the OVHcloud email was sent, indicating that your hosting plan has been disabled, as well as the folder or folders containing the examples of illegitimate files.

#### Case 1: your hosting plan has been disabled for less than two weeks

If your hosting plan was closed less than two weeks ago and only contains one website, restore your storage space following the instructions in this [guide](../restauration-ftp-filezilla-espace-client/#restaurer-lespace-de-stockage-depuis-lespace-client).

If your web hosting plan was closed less than two weeks ago and contains multiple websites, only restore the folder(s) containing the illegitimate files as described in this [guide](../restauration-ftp-filezilla-espace-client/#restaurer-un-fichier-depuis-un-logiciel-ou-une-interface).

#### Case 2: your hosting plan has been disabled for more than two weeks

If your hosting plan was closed more than two weeks ago, contact a specialised [service provider](https://partner.ovhcloud.com/fr/) to perform a security audit on your solutions. 

> [!warning]
>
> We recommend that you carry out a security audit **before** reopening your hosting plan. Any sending of malicious code from your hosting can involve your legal responsibility.
>

### Step 4: reactivate your web hosting plan

#### Reactivate your hosting with FileZilla

> [!primary]
>
> If you want to install the **FileZilla** software to manipulate your website files, follow the instructions in this [guide](../mutualise-guide-utilisation-filezilla/).
>

Open FileZilla software, then log in to your storage space. Then click `Server`{.action} in the menu bar, and then click `Enter FTP`{.action} command (the title may be slightly different depending on which version of FileZilla you are using):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

In the window that pops up, enter and validate the command below:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

A response **“200 Permissions changed on /”** confirms that the change was successful. To check, try accessing your site again.

#### Reactivate your hosting with FTP Explorer \`net2ftp\`

In the OVHcloud[ Control ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)Panel, go to the `Web Cloud`{.action} section, then `Hosting`{.action}, and click on the `FTP-SSH`{.action} tab for the hosting plan concerned.

Then click the `FTP Explorer`{.action} button and log in to your storage space, following the instructions in this [guide](../connexion-espace-stockage-ftp-hebergement-web/#1-connexion-via-le-ftp-explorer). Click the `Advanced`{.action} button and then click the `Go`{.action} button next to \`**Send arbitrary FTP commands to the FTP server\`**.

![net2ftp](images/net2ftp.png){.thumbnail}

At the top of the page, enter the command below, then click on the green “**V”** button.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

A response **“200 Permissions changed on /”** confirms that the change was successful. To check, try accessing your site again.

## Go further <a name="gofurther"></a>

[Tips for hacking your WordPress website](../piratage-de-votre-site-wordpress-conseils-et-cas-dusages/)

[Enabling application firewall](../activation-pare-feu-applicatif/)

[Changing a Web Hosting plan’s PHP version](../configurer-le-php-sur-son-hebergement-web-mutu-2014/)

For specialised services (SEO, development, etc.), contact [OVHcloud](https://partner.ovhcloud.com/fr/) partners.

If you would like assistance using and configuring your OVHcloud solutions, please refer to our support [offers](https://www.ovhcloud.com/fr/support-levels/).

Join our community of users on <https://community.ovh.com/>.