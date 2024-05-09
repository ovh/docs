---
title: "Web Hosting FAQ"
excerpt: "Find the answers to the most frequently asked questions about OVHcloud Web Hosting plans"
updated: 2023-04-24
---

## Manage your solution

### How do I configure my hosting space?

To configure your hosting, first log in to the [OVHcloud Control Panel](manager.). In the `Hosting plans` section, you can manage your SSL certificates, the PHP version, the CDN option, the multisite, databases, etc.

**Tips and tricks**: To help you configure your hosting, please check the `Getting started` section [here](hosting_first_steps_with_web_hosting1.).

### How do I manage my passwords?

To manage your passwords, first log in to the [OVHcloud Control Panel](manager.). If you have forgotten your username or password, click on `Forgotten your username or password`{.action} in the login window. You will be sent an email with the reset procedure.

You can also refer to our guide [Setting and managing an account password](manage-ovh-password1.).

Once you have logged in to your Control Panel:

- To change the password on your FTP space, follow the instructions in this [guide](ftp_change_password1.).
- To change your database password, follow the instructions in this [guide](sql_change_password1.).
- To change the password for your MX Plan email address, follow the instructions in this [guide](email_change_password1.).

### How do I put my website online? 

To put your website online, you need to have a [domain name](domains.) corresponding to the web address from which your website will be accessible (e.g.: *mydomain.com*). You will also need a [Web Hosting](hosting.) plan to set up your website on.

To follow the steps required to build your website, go to this [page](hosting-website.), then follow the instructions in our guide on [Publishing a website on your Web Hosting plan](hosting_how_to_get_my_website_online1.).

**Tips and tricks**: To help you create your website, OVHcloud allows you to install website creation support software (WordPress, PrestaShop, Joomla! and Drupal) on your hosting plan, with the [1-click modules](cms_install_1_click_modules1.) feature.

### How do I transfer my website and emails to OVHcloud servers? 

Read our guide on [Migrating your website and emails to OVHcloud](hosting_migrating_to_ovh1.).

### How do I host multiple websites on my Web Hosting plan? 

See our guide [Hosting multiple websites on your Web Hosting plan](multisites_configure_multisite1.).

### How do I change my hosting plan?

To order the web hosting plan that best suits your needs, you can view our web hosting plans at [this page](hosting.).

Once you have made your choice, follow the instructions in our guide [Changing your web hosting plan offer](how_to_upgrade_web_hosting_offer1.).

### How do I keep the email offer linked to my hosting plan when cancelling?

When you cancel or delete your hosting plan, the email solution attached to it will also be cancelled. To keep your email addresses, you will need to detach the email solution before cancelling the hosting plan.<br>

To do this, go to your Web Hosting plan’s `General information`{.action} tab. In the **Configuration** section, click on the `...`{.action} button to the right of **Email addresses**. Click `Detach my email option`{.action} and follow the instructions to order an independent email solution that lets you keep your email addresses you have already created.

### When cancelling a Performance hosting plan, how do I keep the Web Cloud Databases offer linked to it?

The **Performance** shared hosting plans include a Web Cloud Databases offer that can be activated for free.
When you cancel or delete your **Performance** shared hosting plan, the Web Cloud Databases service that is linked to it will also be cancelled. To keep your Web Cloud Databases, you will need to detach it before cancelling the hosting plan.<br>

To do this, click on the `General information`{.action} tab on your web hosting plan. In the **Configuration** section, click the `...`{.action} to the right of **Web Cloud Database**'. Click on `Unlink`{.action} and follow the instructions to order an independent Web Cloud Databases offer, which will allow you to keep your already created Web Cloud Databases.

### How do I increase the RAM of Web Cloud Databases linked to a Performance web hosting plan?

To increase the RAM for a Web Cloud Databases service linked to a **Performance** hosting plan, you will need detach it from your **Performance** web hosting plan beforehand in order to switch to a higher plan.

To do this, log in to your [OVHcloud Control Panel](manager.). Go to the `Web Cloud`{.action} section, then click on the relevant hosting plan in the `Hosting plans`{.action} section in the left-hand column. 

On the new `General information`{.action} page that appears, you will see a box labelled `Configuration`{.action} in the centre of the page. To the right of `Web Cloud Databases`{.action}, click on the `...`{.action} button then `Detach`{.action}. Select the shortest renewal duration, then continue until you confirm your order.

You can find more information in our guide on [Configuring a Web Cloud Databases solution](configure-database-server#modify-ram-web-cloud-db.).

**This action cannot be undone, and the Cloud Databases Web hosting plan will then be billed separately from your Performance Web Hosting plan.**

## Diagnostics 

> [!warning]
>
> If you experience any issues that are not listed in this FAQ, please refer to the [Troubleshooting](web-cloud-hosting1.) section of our guides.
>

### What do I do if my website isn't working properly? 

There are several reasons why your website might not be working properly. To identify the cause, start by verifying that none of your subscriptions need to be **renewed** by logging into your [OVHcloud Control Panel](manager.).

Then check out the [current events on our infrastructure](https://www.status-ovhcloud.com/). If all of your services are active and are not affected by any incidents or maintenance, please carry out a more in-depth diagnostic.

### What do I do if, after my website has been put online, the OVHcloud "Website under construction" page remains displayed?

![site-en-construction](site-en-construction.png){.thumbnail}

When you install a Web Hosting plan, OVHcloud implements this page as an **index.html** file, contained in your FTP server’s root folder `www`.

This file is automatically disabled when you create your [1-click module](cms_install_1_click_modules1.).

If you have chosen [to install your website manually](cms_manual_installation1.), [log in to your FTP space](ftp_connection1.) and rename it to `index.html.old`.

### What do I do if my website appears on a xxxxx.cluster0xx.hosting.ovh.net-type website?

![url-cluster](images_url-cluster.png){.thumbnail}

There are two scenarios. Either your website was created with this web address or it appeared following a modification.

#### Scenario 1: Your website has been created with a xxxxx.cluster0xx.hosting.ovh.net URL

> [!warning]
>
> Deleting a database, like deleting a 1-click module, is permanent. It also **deletes backups** of the data concerned. Before deleting your website on the OVHcloud hosting plan, **ensure that you are able to recreate it identically**. If you are unsure about the changes to be made, contact your webmaster or one of our [partners](partner.) about it.
>

In the first case, after you have completed all the necessary backups, delete your module in the `Hosting plans` section of the OVHcloud Control Panel:

![delete-a-module](images_delete-a-module.png){.thumbnail}

Then delete its database from the database tab on the right-hand side of your screen, in the section `Hosting plans`:

![delete_a_database](images_sharedsql-deletion.png){.thumbnail}
 
Finally, retry the installation on the domain name you want, using the [1-click module](cms_manage_1_click_module1.) feature.

#### Scenario 2: Your website is displayed with a xxxxx.cluster0xx.hosting.ovh.net web address because it was modified

If your website appears with this URL following a change, restore it to its previous state.

> [!alert]
>
> Restoring your OVHcloud hosting plan will restore **all of the websites** it contains.
>
> During a restore, the contents of your FTP space or database are replaced by a backup. As a result, you will not be able to retrieve any data stored on the FTP server or  database before the restoration date.
>

To restore your website’s source code, please refer to our guide on [Restoring your Web Hosting plan’s storage space](ftp_save_and_backup1.).

If your website has a database, please refer to our guide on [Restoring a backup of your database](sql_importing_mysql_database#restore-a-backup-from-the-control-panel.).

### What do I do if my website redirects to the OVHcloud webmail-login-interface?

![webmail-login-interface](webmail-login-interface.png){.thumbnail}

This anomaly indicates an incorrect configuration in the [DNS servers](dns_server_general_information1.) or the [DNS zone](dns_zone_edit1.) associated with your domain name.

The most common case is: If you have ordered your domain name and Web Hosting plan separately, they will not be linked via their DNS zone.

Go to the `Domain names`{.action} section of the [OVHcloud Control Panel](manager.). Click on the domain name concerned, then on the `DNS servers`{.action} tab.

Then note down the DNS servers listed and go to the `DNS zone`{.action} tab.

Compare the `Target` of the `NS` type records listed in the `DNS zone`{.action} tab with the servers listed in the `DNS servers`{.action} tab:

- If the elements are identical, replace target `213.186.33.5` with the four-number code noted in the `General information` tab under `IPv4` (for more details on how to make changes, follow the instructions in [this guide](dns_zone_edit#instructions.)).

- If the elements are not identical, but the servers listed in the `DNS servers` tab appear in [this list](clusters_and_shared_hosting_IP1.), perform a reset as described in [this guide](dns_server_general_information#resetting-dns-servers.).

- If the elements are not identical and the servers listed in the `DNS server`{.action} tab do not appear in [this list](clusters_and_shared_hosting_IP1.), contact your webmaster or search for a [specialist service provider](partner.) via the [OVHcloud partners](partner.) page.

### What do I do if my website displays a page does not redirect correctly error?

![the-page-isnt-redirecting-properly](the-page-isnt-redirecting-properly.png){.thumbnail}

> [!alert]
>
> Restoring your OVHcloud hosting plan will restore all of the websites it contains.
>
> During a restore, the contents of your FTP space, or that of your database, are replaced by a backup. As a result, you will not be able to retrieve the data stored on the FTP server or the database just before the restore.
>

Restore your website to its previous state:

- To restore your website’s source code, please refer to our guide [Restoring your Web Hosting plan’s storage space](ftp_save_and_backup1.).

- If your website has a database, please refer to our guide [Importing a backup into a Web Hosting plan database](sql_importing_mysql_database#restore-a-backup-from-the-control-panel.).

If the restores do not allow you to restore access to your site, contact your webmaster or search for a [specialist service provider](partner.) on the [OVHcloud partners](partner.) website.

### What do I do if my website displays a "503 error Backend fetch failed (Varnish cache)" error?

![503_varnish](http-503-backend-varnish.png){.thumbnail}

If you have enabled the [CDN option](cdn_how_to_use_cdn1.) on your Web Hosting plan, disable *Maintenance* mode on your WordPress or PrestaShop website.

If you have not enabled this option or used *Maintenance* mode, please contact your webmaster or search for a [specialist service provider](partner.) via the [OVHcloud partners](partner.) website.

### What do I do if my website displays a "Your request has been blocked" error?

![your-request-has-been-blocked](your-request-has-been-blocked.png){.thumbnail}

This message indicates that the type of HTTP request you are trying to make on your website is prohibited for a limited time. In this situation, [examine your website’s logs](logs_and_statistics1.) to determine which requests caused this block.

To help you correct these anomalies, contact your webmaster or one of our [partners](partner.).

### What should I do if my website has a "Your IP has been banned" error?

![your-ip-has-been-banned](your-ip-has-been-banned.png){.thumbnail}

This message indicates that the IP address you use to log on to your website is blocked for a limited time. 

In this situation, [review the logs](logs_and_statistics1.) of your site, to determine which queries caused this block.<br>
Also, make sure your computer is not infected with a virus.<br>
You can also contact one of our [partners](partner.) to check your website’s source code.

### I have ordered a domain name with special characters, and it appears written in a strange way in my Control Panel. What should I do?

![idn-notation](idn-notation.png){.thumbnail}

You have no action to take in this situation. Even if your domain appears in [internationalised notation (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name){.external} in your Control Panel, it will work and display in a completely normal way elsewhere. Your website's web address will be displayed as you requested. Your email addresses will also appear as you wish to your contacts.

> [!warning]
>
> Using an email address with an IDN domain in an email client (Outlook, macOS Mail, etc.) is not recommended and may cause incompatibilities.
>

## Go further <a name="go-further"></a>

[FAQ - MX Plan shared emails](faq-emails1.)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](support.).

Join our community of users on <https://community.ovh.com/en/>.