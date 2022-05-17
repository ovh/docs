---
title: 'Web Hosting FAQ'
excerpt: 'Find the answers to the most frequently asked questions about OVHcloud Web Hosting plans'
slug: web-hosting-faq
section: 'Getting started'
---

**Last updated 07/04/2022**

## Manage your solution

### How do I configure my hosting space?

To configure your hosting, first log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). In the `Hosting` section, you can manage your SSL certificates, the PHP version, the CDN option, the multisite, databases, etc.

**Tips and tricks**: To help you configure your hosting, please read the \`First steps\` section [here](https://docs.ovh.com/fr/hosting/).

### How do I manage my passwords?

To manage your passwords, first log in to the OVHcloud Control [Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). If you have forgotten your username or password, click on `Forgotten`{.action} username or password in the login window. You will be sent an email with the reset procedure.

You can also refer to our guide on [Changing your account](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/) password.

Once you have logged in to your Control Panel:

- To change the password on your FTP space, follow the instructions in [this guide](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/).
- To change your database password, follow the instructions in [this guide](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/).
- To change the password for your MX Plan email address, follow the instructions in [this guide](https://docs.ovh.com/fr/emails/modifier-mot-de-passe-adresse-email/).

### How do I put my website online? 

To put your website online, you need to have a domain [name](https://www.ovhcloud.com/fr/domains/) corresponding to the web address from which your website will be accessible (e.g.: *mydomain.com*). You will also need a web [hosting](https://www.ovhcloud.com/fr/web-hosting/) plan to set up your website on.

To follow the steps required to build your website, go to this [page](https://www.ovhcloud.com/fr/web-hosting/uc-website/) then follow the instructions in our guide on [Publishing a website on your Web Hosting](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/) plan.

**Tips and tricks**: To help you create your website, OVHcloud allows you to install website creation support software (WordPress, Prestashop, Joomla! and Drupal) on your hosting plan, with the 1-click [modules feature](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).

### How do I transfer my website and emails to OVHcloud servers? 

Read our guide on [Migrating your website and emails to OVHcloud](https://docs.ovh.com/fr/hosting/migrer-mon-site-chez-ovh/).

### How do I host multiple websites on my web hosting plan? 

See our guide on Hosting [multiple websites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) on your web hosting plan.

### How do I change my hosting plan?

> [!primary]
>
> To order the web hosting plan that best suits your needs, visit [this page](https://www.ovhcloud.com/fr/web-hosting/).
>

To change your shared [hosting](https://www.ovhcloud.com/fr/web-hosting/) plan, in your OVHcloud Control [Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), click `Web Cloud`{.action}, then `Hosting`{.action}. Select the web hosting plan concerned, then in the `Subscription` section, click on the `...`{.action} button in the `Offer` section, then `Change solution`{.action}.

Then select your new hosting plan and the duration of your new subscription. Review the corresponding contracts, then click `Send`{.action}.

> [!warning]
>
> Before switching to a \`lower\` offer (for example, before switching from a [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) offer to a [Personal](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) offer), check that your hosting usage is compatible with your new formula:
>
> - If you have created too many email addresses to upgrade to a lower plan, save and then delete the least used addresses.
>
> - If the quota for the new hosting plan is insufficient, log in to your hosting plan via [FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/), save and delete any unnecessary folders and files.
>
> - If your new hosting plan does not have enough databases or storage volume, back up and delete any unused data or databases. You can also order a [database](https://www.ovh.com/fr/cloud-databases/) server solution.
>
> - If you have created [mailing lists](https://docs.ovh.com/fr/emails/guide-dutilisation-mailing-list/) with your hosting plan, please check that the new plan includes this feature.
>
> If you have any doubts about the changes you need to make, contact our OVHcloud [partners](https://partner.ovhcloud.com/fr/directory/) or our [community of users ](https://community.ovh.com/).
>

### How do I keep the email offer linked to my hosting plan when cancelling?

When you cancel or delete your hosting plan, the email solution attached to it will also be cancelled. To keep your email addresses, you will need to detach the email solution before cancelling the hosting plan.<br>

To do this, go to your web hosting plan’s General `information`{.action} tab. In the **Configuration** section, click on the `...`{.action} button to the right of “**Email** addresses”. Click `Detach my email`{.action} option, and follow the instructions to order an independent email solution that lets you keep your email addresses you have already created.

## Diagnostic

> [!warning]
>
> If you experience any issues that are not listed in this FAQ, please refer to the “Diagnostic” pages in [our documentation](https://docs.ovh.com/fr/hosting/).
>

### What do I do if my website isn't working properly? 

There are several reasons why your website might not be working properly. To identify the cause, start by checking that none of your subscriptions need to be **renewed** by logging into your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).

Then check out the [current events on our infrastructure](https://www.status-ovhcloud.com/). If all of your services are active and are not affected by any incidents or maintenance, please carry out a more in-depth diagnostic.

### What do I do if, after my website has been put online, the OVHcloud ‘Website under construction’ page remains displayed?

![site_en_construction](images/site_en_construction.png){.thumbnail}

When you install a web hosting plan, OVHcloud implements this page as an `index.html` file, contained in your FTP server’s `www` folder.

This file is automatically disabled when you create your 1-click [module](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).

If you have chosen [to install your website manually](https://docs.ovh.com/fr/hosting/mutualise-installer-manuellement-mon-cms/), [log in to your FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) space and rename it to `index.html.old`.

### What do I do if my website appears on a xxxxx.cluster0xx.hosting.ovh.net-type website?

![url-cluster](images/url-cluster.png){.thumbnail}

There are two scenarios. Either your website was created with this web address, or it appeared following a modification.

#### Scenario 1: your website has been created with a xxxxx.cluster0xx.hosting.ovh.net URL

> [!warning]
>
> Deleting a database, like deleting a 1-click module, is permanent. It also **deletes backups** of the data concerned. Before deleting your website on the OVHcloud hosting plan, **ensure that you are able to recreate it identically**. If you are unsure about the changes to be made, contact your webmaster or one of our [partners](https://partner.ovhcloud.com/fr/directory/).
>

In the first case, after you have completed all the necessary backups, delete your module in the `Hosting` section of the OVHcloud Control Panel:

![delete_a_module](images/delete_a_module.png){.thumbnail}

Then delete its database from the database tab on the right-hand side of your screen, in the `Hosting section`:

![delete_a_database](images/delete_a_database.png){.thumbnail}
 
Finally, retry the installation on the domain name you want, using the 1-click [module feature](https://docs.ovh.com/fr/hosting/1-click-module-management/).

#### Scenario 2: your website will be displayed with a xxxxx.cluster0xx.hosting.ovh.net web address, if it has been modified

If your website appears with this URL following a change, restore it to its previous state.

> \[!alert]
>
> Restoring your OVHcloud hosting plan will restore **all of the websites** it contains.
>
> During a restore, the contents of your FTP space, or that of your database, are replaced by a backup. As a result, you will not be able to retrieve the data stored on the FTP server or the database data before you restore it.
>

To restore your website’s source code, please refer to our guide on [Restoring your Web Hosting plan’s storage](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/) space.

If your website has a database, please refer to our guide on [Restoring a backup of your database](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/#restaurer-une-sauvegarde-depuis-lespace-client).

### What do I do if my website redirects to the OVHcloud webmail?

![webmail](images/webmail.png){.thumbnail}

This anomaly indicates an incorrect configuration in the DNS [servers](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/) or the DNS [zone](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) associated with your domain name.

The most common case is: If you have ordered your domain name and web hosting plan separately, they will not be linked via their DNS zone.

Go to the `Domains section`{.action} of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Click on the domain name concerned, then on the `DNS`{.action} servers tab.

Then note down the DNS servers listed, and go to the `DNS`{.action} Zone tab.

Compare the `Targets` of the `NS` type records listed in the DNS `Zone tab`{.action} with the DNS `Servers` listed in the DNS Zone tab:

- If the elements are identical, replace target `213.186.33.5` with the four-number code noted in the `General` information tab under `IPv4` (for more details on how to make changes, follow the instructions in [this guide](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/#en-pratique)).

- If the elements are not identical, but the DNS `Servers` listed in the DNS servers tab appear in [this list](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/), perform a reset as described in [this guide](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/#reinitialiser-les-serveurs-dns).

- If the elements are not identical and the DNS` `Servers listed in the DNS servers tab do not appear in [this list](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/), contact your webmaster or search for a specialised service provider via the OVHcloud [partners page](https://partner.ovhcloud.com/fr/directory/).

### What do I do if my website displays a page does not redirect correctly error?

![too_many_redirect](images/too_many_redirect.png){.thumbnail}

> \[!alert]
>
> Restoring your OVHcloud hosting plan will restore all of the websites it contains.
>
> During a restore, the contents of your FTP space, or that of your database, are replaced by a backup. As a result, you will not be able to retrieve the data stored on the FTP server or the database just before the restore.
>

Restore your website to its previous state:

- To restore your website’s source code, please refer to our guide on [Restoring your Web Hosting plan’s storage](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/) space.

- If your website has a database, please refer to our guide on [Restoring a backup of your database](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/#restaurer-une-sauvegarde-depuis-lespace-client).

If the restores do not allow you to restore access to your site, contact your webmaster or search for a specialised service provider on the OVHcloud [partners website](https://partner.ovhcloud.com/fr/directory/).

### What do I do if my website displays a \`503 error Backend fetch failed (Varnish cache)\` error?

![503_varnish](images/503_varnish.png){.thumbnail}

If you have enabled [the CDN](https://docs.ovh.com/fr/hosting/accelerer-mon-site-web-en-utilisant-le-cdn/) option on your web hosting plan, disable *Maintenance* mode on your WordPress or PrestaShop website.

If you have not enabled this option or used *Maintenance* mode, please contact your webmaster or search for a specialised service provider via the OVHcloud [partners website](https://partner.ovhcloud.com/fr/directory/).

### What do I do if my website displays a \`Your request has been blocked\` error?

![your_request_has_been_blocked](images/your_request_has_been_blocked.png){.thumbnail}

This message indicates that the type of HTTP request you are trying to make on your website is prohibited for a limited time. In this situation, [examine your website’s logs](https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/) to determine which requests caused this block.

To help you correct these anomalies, contact your webmaster or one of our [partners](https://partner.ovhcloud.com/fr/directory/).

### What should I do if my website has a \`Your IP has been banned\` error?

![your_ip_has_been_blocked](images/your_ip_has_been_blocked.png){.thumbnail}

This message indicates that the IP address you use to log on to your website is blocked for a limited time. 

In this situation, >
Also make sure your computer is not infected with a virus.<br>
You can also contact one of [our partners](https://partner.ovhcloud.com/fr/directory/) to check your website’s IT code.

### I have ordered a domain with accents, and it appears written in a strange way in my Control Panel. What should I do?

![notation_idn](images/notation_idn.png){.thumbnail}

You have no action to take in this situation. Even if your domain appears in internationalised [notation (IDN)](https://fr.wikipedia.org/wiki/Nom_de_domaine_internationalis%C3%A9){.external} in your Control Panel, it will work and display in a completely normal way elsewhere. Your website's web address will be displayed as you requested. Your email addresses will also appear as you wish to your contacts.

> [!warning]
>
> Using an email address with an IDN domain in an email client (Outlook, macOS Mail, etc.) is not recommended and may cause incompatibilities.
>

## Go further <a name="gofurther"></a>

[FAQ - MX Plan shared emails](https://docs.ovh.com/fr/emails/faq-emails/)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our support [offers](https://www.ovhcloud.com/fr/support-levels/).

Join our community of users on <https://community.ovh.com>.
