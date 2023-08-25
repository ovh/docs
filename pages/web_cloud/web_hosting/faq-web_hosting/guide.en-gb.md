---
title: Web Hosting FAQ
excerpt: Find the answers to the most frequently asked questions about OVHcloud Web Hosting plans
updated: 2023-04-24
---


## Manage your solution

### How do I configure my hosting space?

To configure your hosting, first log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). In the `Hosting plans` section, you can manage your SSL certificates, the PHP version, the CDN option, the multisite, databases, etc.

**Tips and tricks**: To help you configure your hosting, please check the `Getting started` section [here](/pages/web_cloud/web_hosting/hosting_first_steps_with_web_hosting).

### How do I manage my passwords?

To manage your passwords, first log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). If you have forgotten your username or password, click on `Forgotten your username or password`{.action} in the login window. You will be sent an email with the reset procedure.

You can also refer to our guide [Setting and managing an account password](/pages/account_and_service_management/account_information/manage-ovh-password).

Once you have logged in to your Control Panel:

- To change the password on your FTP space, follow the instructions in this [guide](/pages/web_cloud/web_hosting/ftp_change_password).
- To change your database password, follow the instructions in this [guide](/pages/web_cloud/web_hosting/sql_change_password).
- To change the password for your MX Plan email address, follow the instructions in this [guide](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password).

### How do I put my website online? 

To put your website online, you need to have a [domain name](https://www.ovhcloud.com/en-gb/domains/) corresponding to the web address from which your website will be accessible (e.g.: *mydomain.com*). You will also need a [Web Hosting](https://www.ovhcloud.com/en-gb/web-hosting/) plan to set up your website on.

To follow the steps required to build your website, go to this [page](https://www.ovhcloud.com/en-gb/web-hosting/uc-website/), then follow the instructions in our guide on [Publishing a website on your Web Hosting plan](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

**Tips and tricks**: To help you create your website, OVHcloud allows you to install website creation support software (WordPress, PrestaShop, Joomla! and Drupal) on your hosting plan, with the [1-click modules](/pages/web_cloud/web_hosting/cms_install_1_click_modules) feature.

### How do I transfer my website and emails to OVHcloud servers? 

Read our guide on [Migrating your website and emails to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

### How do I host multiple websites on my Web Hosting plan? 

See our guide [Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite).

### How do I change my hosting plan?

To order the web hosting plan that best suits your needs, you can view our web hosting plans at [this page](https://www.ovhcloud.com/en-gb/web-hosting/).

Once you have made your choice, follow the instructions in our guide [Changing your web hosting plan offer](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer).

### How do I keep the email offer linked to my hosting plan when cancelling?

When you cancel or delete your hosting plan, the email solution attached to it will also be cancelled. To keep your email addresses, you will need to detach the email solution before cancelling the hosting plan.<br>

To do this, go to your Web Hosting plan’s `General information`{.action} tab. In the **Configuration** section, click on the `...`{.action} button to the right of **Email addresses**. Click `Detach my email option`{.action} and follow the instructions to order an independent email solution that lets you keep your email addresses you have already created.

### When cancelling a Performance hosting plan, how do I keep the Web Cloud Databases offer linked to it?

The **Performance** shared hosting plans include a Web Cloud Databases offer that can be activated for free.
When you cancel or delete your **Performance** shared hosting plan, the Web Cloud Databases service that is linked to it will also be cancelled. To keep your Web Cloud Databases, you will need to detach it before cancelling the hosting plan.<br>

To do this, click on the `General information`{.action} tab on your web hosting plan. In the **Configuration** section, click the `...`{.action} to the right of **Web Cloud Database**'. Click on `Unlink`{.action} and follow the instructions to order an independent Web Cloud Databases offer, which will allow you to keep your already created Web Cloud Databases.

### How do I increase the RAM of Web Cloud Databases linked to a Performance web hosting plan?

To increase the RAM for a Web Cloud Databases service linked to a **Performance** hosting plan, you will need detach it from your **Performance** web hosting plan beforehand in order to switch to a higher plan.

To do this, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Go to the `Web Cloud`{.action} section, then click on the relevant hosting plan in the `Hosting plans`{.action} section in the left-hand column. 

On the new `General information`{.action} page that appears, you will see a box labelled `Configuration`{.action} in the centre of the page. To the right of `Web Cloud Databases`{.action}, click on the `...`{.action} button then `Detach`{.action}. Select the shortest renewal duration, then continue until you confirm your order.

You can find more information in our guide on [Configuring a Web Cloud Databases solution](/pages/web_cloud/web_cloud_databases/configure-database-server#modify-ram-web-cloud-db).

**This action cannot be undone, and the Cloud Databases Web hosting plan will then be billed separately from your Performance Web Hosting plan.**

## Diagnostics 

> [!warning]
>
> If you experience any issues that are not listed in this FAQ, please refer to the [Troubleshooting](/products/web-cloud-hosting) section of our guides.
>

### What do I do if my website isn't working properly? 

There are several reasons why your website might not be working properly. To identify the cause, start by verifying that none of your subscriptions need to be **renewed** by logging into your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).

Then check out the [current events on our infrastructure](https://www.status-ovhcloud.com/). If all of your services are active and are not affected by any incidents or maintenance, please carry out a more in-depth diagnostic.

### What do I do if, after my website has been put online, the OVHcloud "Website under construction" page remains displayed?

![site_en_construction](images/site_en_construction.png){.thumbnail}

When you install a Web Hosting plan, OVHcloud implements this page as an **index.html** file, contained in your FTP server’s root folder `www`.

This file is automatically disabled when you create your [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

If you have chosen [to install your website manually](/pages/web_cloud/web_hosting/cms_manual_installation), [log in to your FTP space](/pages/web_cloud/web_hosting/ftp_connection) and rename it to `index.html.old`.

### What do I do if my website appears on a xxxxx.cluster0xx.hosting.ovh.net-type website?

![url-cluster](images/url-cluster.png){.thumbnail}

There are two scenarios. Either your website was created with this web address or it appeared following a modification.

#### Scenario 1: Your website has been created with a xxxxx.cluster0xx.hosting.ovh.net URL

> [!warning]
>
> Deleting a database, like deleting a 1-click module, is permanent. It also **deletes backups** of the data concerned. Before deleting your website on the OVHcloud hosting plan, **ensure that you are able to recreate it identically**. If you are unsure about the changes to be made, contact your webmaster or one of our [partners](https://partner.ovhcloud.com/en-gb/directory/) about it.
>

In the first case, after you have completed all the necessary backups, delete your module in the `Hosting plans` section of the OVHcloud Control Panel:

![delete_a_module](images/delete_a_module.png){.thumbnail}

Then delete its database from the database tab on the right-hand side of your screen, in the section `Hosting plans`:

![delete_a_database](images/delete_a_database.png){.thumbnail}
 
Finally, retry the installation on the domain name you want, using the [1-click module](/pages/web_cloud/web_hosting/cms_manage_1_click_module) feature.

#### Scenario 2: Your website is displayed with a xxxxx.cluster0xx.hosting.ovh.net web address because it was modified

If your website appears with this URL following a change, restore it to its previous state.

> [!alert]
>
> Restoring your OVHcloud hosting plan will restore **all of the websites** it contains.
>
> During a restore, the contents of your FTP space or database are replaced by a backup. As a result, you will not be able to retrieve any data stored on the FTP server or  database before the restoration date.
>

To restore your website’s source code, please refer to our guide on [Restoring your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup).

If your website has a database, please refer to our guide on [Restoring a backup of your database](/pages/web_cloud/web_hosting/sql_importing_mysql_database#restore-a-backup-from-the-control-panel).

### What do I do if my website redirects to the OVHcloud webmail?

![webmail](images/webmail.png){.thumbnail}

This anomaly indicates an incorrect configuration in the [DNS servers](/pages/web_cloud/domains/dns_server_general_information) or the [DNS zone](/pages/web_cloud/domains/dns_zone_edit) associated with your domain name.

The most common case is: If you have ordered your domain name and Web Hosting plan separately, they will not be linked via their DNS zone.

Go to the `Domain names`{.action} section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Click on the domain name concerned, then on the `DNS servers`{.action} tab.

Then note down the DNS servers listed and go to the `DNS zone`{.action} tab.

Compare the `Target` of the `NS` type records listed in the `DNS zone`{.action} tab with the servers listed in the `DNS servers`{.action} tab:

- If the elements are identical, replace target `213.186.33.5` with the four-number code noted in the `General information` tab under `IPv4` (for more details on how to make changes, follow the instructions in [this guide](/pages/web_cloud/domains/dns_zone_edit#instructions)).

- If the elements are not identical, but the servers listed in the `DNS servers` tab appear in [this list](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP), perform a reset as described in [this guide](/pages/web_cloud/domains/dns_server_general_information#resetting-dns-servers).

- If the elements are not identical and the servers listed in the `DNS server`{.action} tab do not appear in [this list](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP), contact your webmaster or search for a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) via the [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/) page.

### What do I do if my website displays a page does not redirect correctly error?

![too_many_redirect](images/too_many_redirect.png){.thumbnail}

> [!alert]
>
> Restoring your OVHcloud hosting plan will restore all of the websites it contains.
>
> During a restore, the contents of your FTP space, or that of your database, are replaced by a backup. As a result, you will not be able to retrieve the data stored on the FTP server or the database just before the restore.
>

Restore your website to its previous state:

- To restore your website’s source code, please refer to our guide [Restoring your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup).

- If your website has a database, please refer to our guide [Importing a backup into a Web Hosting plan database](/pages/web_cloud/web_hosting/sql_importing_mysql_database#restore-a-backup-from-the-control-panel).

If the restores do not allow you to restore access to your site, contact your webmaster or search for a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) on the [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/) website.

### What do I do if my website displays a "503 error Backend fetch failed (Varnish cache)" error?

![503_varnish](images/503_varnish.png){.thumbnail}

If you have enabled the [CDN option](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) on your Web Hosting plan, disable *Maintenance* mode on your WordPress or PrestaShop website.

If you have not enabled this option or used *Maintenance* mode, please contact your webmaster or search for a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) via the [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/) website.

### What do I do if my website displays a "Your request has been blocked" error?

![your_request_has_been_blocked](images/your_request_has_been_blocked.png){.thumbnail}

This message indicates that the type of HTTP request you are trying to make on your website is prohibited for a limited time. In this situation, [examine your website’s logs](/pages/web_cloud/web_hosting/logs_and_statistics) to determine which requests caused this block.

To help you correct these anomalies, contact your webmaster or one of our [partners](https://partner.ovhcloud.com/en-gb/directory/).

### What should I do if my website has a "Your IP has been banned" error?

![your_ip_has_been_blocked](images/your_ip_has_been_blocked.png){.thumbnail}

This message indicates that the IP address you use to log on to your website is blocked for a limited time. 

In this situation, [review the logs](/pages/web_cloud/web_hosting/logs_and_statistics) of your site, to determine which queries caused this block.<br>
Also, make sure your computer is not infected with a virus.<br>
You can also contact one of our [partners](https://partner.ovhcloud.com/en-gb/directory/) to check your website’s source code.

### I have ordered a domain name with special characters, and it appears written in a strange way in my Control Panel. What should I do?

![notation_idn](images/notation_idn.png){.thumbnail}

You have no action to take in this situation. Even if your domain appears in [internationalised notation (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name){.external} in your Control Panel, it will work and display in a completely normal way elsewhere. Your website's web address will be displayed as you requested. Your email addresses will also appear as you wish to your contacts.

> [!warning]
>
> Using an email address with an IDN domain in an email client (Outlook, macOS Mail, etc.) is not recommended and may cause incompatibilities.
>

## Go further <a name="gofurther"></a>

[FAQ - MX Plan shared emails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
