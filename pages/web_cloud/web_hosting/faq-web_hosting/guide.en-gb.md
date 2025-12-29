---
title: "Web Hosting FAQ"
excerpt: "Find the answers to the most frequently asked questions about OVHcloud web hosting plans"
updated: 2025-11-10
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

**Click on the questions below to see the explanations.**

## Management of your solution

/// details | How do I configure my web hosting plan?

Follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.

You can manage your SSL certificates, the PHP version applied to your web hosting plan, the CDN option, multisites, databases, etc.

> [!success]
>
> To help you configure your web hosting plan, please refer to the sections *Getting started* and *Configuring a Personal, Professional or Performance web hosting plan* of [this page](/products/web-cloud-hosting).

///

/// details | I forgot the password for accessing the account my web hosting plan is on. What should I do?

To retrieve your OVHcloud NIC handle or the password associated with it, follow these steps:

1. Go to the [interface for connecting to the OVHcloud Control Panel](/links/manager).
2. Click on the `Forgotten your username or password?`{.action} link under the `Login`{.action} button.
3. Enter your OVHcloud NIC handle (e.g. **aa00000-ovh**) or contact email address associated with your OVHcloud NIC handle.
4. Then click the `Send`{.action} button.

The reset procedure will then be sent to your contact email address.

> [!success]
>
> Find all the details in our guide “[Setting and managing an account password](/pages/account_and_service_management/account_information/manage-ovh-password)”.

///

/// details | How do I manage the password for my web hosting plan’s FTP storage space?

Follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that appears, click on the `FTP - SSH`{.action} tab.

Here, you can change your web hosting plan’s FTP password.

> [!success]
>
> Find all the details in our guide “[Web Hosting - Changing an FTP user password](/pages/web_cloud/web_hosting/ftp_change_password)”.

///

/// details | How do I change the password for my database linked to my web hosting plan?

> [!warning]
>
> If you change the password for a database used by one of your websites, you can also update it in the configuration file for the website concerned. Without this update, your website will be disconnected from its database and will not work properly.

Follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that appears, click on the `Databases`{.action} tab.

Here, you can change the passwords for your databases associated with your Web Hosting plan.

> [!success]
>
> Find all the details in our guide “[Changing the password for a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_change_password)”.

///

/// details | How do I change the password for an email account linked to my web hosting plan?

Follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Emails`{.action} menu (or on the `MX Plan`{.action} menu if you are using the beta version of the OVHcloud Control Panel), then choose the domain name concerned.
3. On the page that appears, click on the `Emails`{.action} tab.
4. In the table that pops up, click the `...`{.action} button to the right of the email account concerned, then click `Change password`{.action}.

Here, you can change your email password (please ensure that you follow the password policy listed in the login window).

> [!success]
>
> Find all the details in our guide “[Changing an email password](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)”.
>
> If you use an email client (Outlook, macOS Mail, Thunderbird, etc.), update the password for your email account when the email client prompts you to do so, when it is opened, or when it is synchronized.
>
> If you have any further questions on the *MX Plan* email solution, please refer to our [FAQ - Emails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

///

/// details | How do I get my website online?

To put your website online, you will need the following information:

- A [domain name](/links/web/domains) that will correspond to the web address from which your website will be accessible via a web browser (example: *domain.tld*). This domain name must also be associated with your web hosting plan to view the website.
- A [web hosting plan](/links/web/hosting) on which to install your website.

Here are the main steps to follow:

1. Define your project (turn-key website (CMS) installed manually or with OVHcloud 1-click modules/website created by you or a provider, etc.).
2. Put the website files online in your web hosting plan’s FTP storage space.
3. Link the website to a database (if the website uses one).
4. Go to your website.

> [!success]
>
> For more details on putting a website online on a web hosting plan, please read our detailed guide on [Publishing a website on your Web Hosting plan](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).
>
> If you choose to install a CMS (WordPress, Joomla!, PrestaShop, Drupal) with our 1-click modules solution, please read our detailed guide “[Setting up your website with a 1-click module (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)”.
>
> If your website already exists with another provider, and you would like to migrate it to OVHcloud, please read our detailed guide on "[Migrating your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
>
> To help you configure your web hosting plan, you can refer to the full set of [guides for our web hosting solutions](/products/web-cloud-hosting).

///

/// details | How do I transfer my website, database, domain name and emails to OVHcloud without any service interruptions?

Here are the main steps to follow:

1. Order hosting and email accounts from OVHcloud.
2. Create and pre-configure a DNS zone for your domain name at OVHcloud.
3. Retrieve a full backup of your website.
4. Import your website backup onto your OVHcloud hosting plan.
5. Recreate your email addresses identically at OVHcloud.
6. Declare OVHcloud email servers in your domain name’s active DNS zone.
7. Transfer the content of your old email accounts to your new ones at OVHcloud.
8. Reconfigure your email software.
9. Replace your domain name’s active DNS servers with OVHcloud DNS servers.
10. Transfer your domain name to OVHcloud.

> [!success]
>
> Find all the details in our guide "[Migrating your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

///

/// details | How do I host multiple websites on a single web hosting plan?

If your [web hosting plan is compatible](/links/web/hosting), follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that appears, click on the `Multisite`{.action} tab.

Here, you can manage the multi-site domain names/sub-domains declared on your Web Hosting plan.

> [!success]
>
> You can find all the details in our guide "[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

///

/// details | How do I display my website with a URL in HTTPS?

In order for your website to be accessible with a URL in “HTTPS” (e.g.: `https://domain.tld`), you will need two prerequisites:

- You must have an active SSL certificate for your domain name (or installed on your Web Hosting plan).
- In your website’s source code, it must force URLs to be rewritten to HTTPS.

OVHcloud offers [several SSL certificates](/links/web/hosting-options) on web hosting plans.

To activate an SSL certificate on your Web Hosting plan for your website, follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3.  On the page that pops up, click on the `SSL certificates`{.action} tab.
4. Choose the certificate you want from the [available certificates](/pages/web_cloud/web_hosting/ssl_on_webhosting).
5. Continue until you have finished installing the SSL certificate (by confirming the purchase order beforehand, if you choose one of the Sectigo SSL certificates).

> [!success]
>
> Find all the details in the following guides:
>
> - [Web Hosting - Manage an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting)
> - [Web Hosting - How to activate a free Let's Encrypt SSL certificate](/pages/web_cloud/web_hosting/ssl_letsencrypt)
> - [Web Hosting - How to activate a Sectigo DV SSL certificate](/pages/web_cloud/web_hosting/ssl_dv)
> - [Web Hosting - How to activate a Sectigo EV SSL certificate](/pages/web_cloud/web_hosting/ssl_ev)
> - [Web Hosting - How to install a custom SSL certificate](/pages/web_cloud/web_hosting/ssl_custom)

Once you have installed and set up an SSL certificate of your choice on the OVHcloud side, check that the source code of your website rewrites the URLs for accessing your website in HTTPS. If you experience any difficulties with this, please contact your webmaster or one of our [partners](/links/partner).

///

/// details | How do I change my web hosting plan?

To order the web hosting plan that best suits your needs, check out our offers on [this page](/links/web/hosting).

> [!primary]
>
> Depending on your current web hosting plan, some plans may not be available. Read our guide on [Upgrading a web hosting plan](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer) for more information on this topic.

Once you have made your choice, follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that pops up, in the box **Plan**, click on the `...`{.action} button to the right of the word `Service plan`, then on `Change plan`{.action}.
4. Then select your new subscription and its duration. Confirm the corresponding contracts, then click `Send`{.action}.

> [!success]
>
> Find all the details in our guide on "[Web Hosting - How to change your solution](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

///

/// details | When I cancel a web hosting plan, how do I keep the email solution attached to my web hosting plan?

When you cancel or delete your web hosting plan, the email solution attached to it is also cancelled. To keep your email addresses, you will need to detach the **email solution before** canceling the web hosting plan concerned.

Follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that pops up, in the **Configuration** box, click on the `...`{.action} button to the right of the `Email addresses` comment, then on `Detach my email option`{.action}.
4. Follow the instructions to order an independent email solution that will allow you to keep your email addresses already created.

///

/// details | When I cancel a Performance web hosting plan, how do I keep the attached Web Cloud Databases solution?

**Performance** web hosting plans include a Web Cloud Databases solution that can be activated for free.<br>
When you cancel or delete your **Performance** web hosting plan, any attached Web Cloud Databases solution will also be cancelled. To keep your Web Cloud Databases solution, you will need to detach it **before** the hosting plan is cancelled.

Follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that pops up, in the **Configuration** box, click the `...`{.action} button to the right of the `Web Cloud Databases` comment, then `Detach`{.action}.
4. Follow the instructions to order an independent Web Cloud Databases solution in order to keep your Web Cloud Databases solution already created.

**This action cannot be undone, and the Web Cloud Databases solution will then be billed separately from your Performance web hosting plan.**

///

/// details | How do I increase the RAM of a "Web Cloud Databases" solution linked to a "Performance" web hosting plan?

Follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `Web Cloud Databases`{.action} menu, then choose the Web Cloud Databases solution concerned.
3. On the page that pops up, in the box **General information**, click on the `...`{.action} button to the right of `RAM`, then on `Change the ammount of RAM`{.action}.
4. Follow the instructions to order the amount of RAM you want, then proceed until the order is confirmed.

> [!success]
>
> If necessary, please also refer to the “*Modifying your Web Cloud Databases* solution” section of our guide “[Configuring your database server](/pages/web_cloud/web_cloud_databases/configure-database-server)”.

///

## Diagnostic

> [!success]
>
> If you encounter any issues that are not listed in this FAQ, please refer to the “*Troubleshooting*” section of our [guides on web hosting solutions](/products/web-cloud-hosting).

/// details | What should I do if my website stops working?

There are several reasons why your website might not work.<br>
To identify the cause, start by ensuring that none of your subscriptions need to be **renewed**.

Follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. On the page that pops up, click on your name in the top right-hand corner, then choose `My offers and services`{.action}.

> [!success]
>
> Find all the details in our guide “[How to renew OVHcloud services](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)”.

Then check out the [current events on our infrastructure](https://www.status-ovhcloud.com/).

If all your services are active and are not affected by any incidents or maintenance, please carry out a more in-depth diagnostic.

> [!success]
>
> See the “*Troubleshooting*” section of our [guides on web hosting solutions](/products/web-cloud-hosting).

///

/// details | What do I do if the OVHcloud “Website under construction” page remains displayed once my website is online?

![site-in-construction](/pages/assets/screens/other/browsers/errors/site-en-construction.png){.thumbnail}

When your web hosting plan is set up, OVHcloud sets up this holding page in the form of a **index.html** file, which is contained in the `www` folder in your web hosting plan’s FTP storage space.

There are two possible scenarios:

- If you have installed a [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules): This file is automatically deleted by our installation robots.
- If you have set up your website manually, then follow the steps below:
- [Log in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection).
- Once you have logged in to the FTP storage space, go down to the `www` directory.
- Rename the file **index.html** to **index.html.old**. This will disable the page after a few minutes.

> [!success]
>
> Find more details in the following guides:
>
> - [Logging in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)
> - [Web Hosting - Changing an FTP user password](/pages/web_cloud/web_hosting/ftp_change_password)
> - [Tutorial - Using FileZilla with your OVHcloud hosting](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)
> - [Tutorial - Using Cyberduck with a web hosting plan](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

///

/// details | My website appears with an address like xxxxx.clusterXXX.hosting.ovh.net. What should I do?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Your website has been created with a [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules), using your web hosting plan’s default web address “xxxxx.clusterXXX.hosting.ovh.net” when you set it up.

You will then need to delete your 1-click module, then reinstall it.

> [!warning]
>
> Deleting a [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules), just like deleting a database, is permanent. It also **deletes backups** of the data concerned. Before deleting your website on the web hosting plan, **make sure you can recreate it identically**. If you are unsure about the changes you need to make, contact your Webmaster or one of our [partners](/links/partner).
>
> If necessary, also refer to these detailed guides:
>
> - [Restoring your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup)
> - [Retrieving the backup of a Web Hosting plan’s databas](/pages/web_cloud/web_hosting/sql_database_export)

**Only** after you have carried out all the necessary backups, delete your [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules) by doing the following:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that appears, click on the `1-click modules`{.action} tab.
4. In the table that pops up, click the `...`{.action} button on the right-hand side of the *1-click module* concerned, then click `Delete the module`{.action}.

Deleting the *1-click module* may take **several minutes**.

Then delete the database associated with it by doing the following:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that appears, click on the `Databases`{.action} tab.
4. In the table that pops up, click the `...`{.action} button in the row of the database concerned, then `Delete a database`{.action}.

It may take **several minutes** to delete the associated database.

Once the deletions are complete, reinstall your *1-click module*, taking care to select the domain name you want.

> [!success]
>
> Find all the details in our guide on [Setting up your website with a 1-click module (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules) .

///

/// details | Following a change, my website appears with a web address like “xxxxx.clusterXXX.hosting.ovh.net”. What should I do?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Your website will be displayed with your web hosting plan’s default web address, like ‘xxxxx.clusterXXX.hosting.ovh.net’, after you have modified your [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

If your website appears with this URL after you have made a change, the quickest way to do this is to restore it to a previous state, where it worked properly.

> [!alert]
>
> Restoring a web hosting plan restores **all of the websites** it contains.
>
> When you restore, the contents of your FTP storage space or the contents of your database are irreversibly replaced by a backup. Any data that was present **before the restoration** was launched on the FTP storage space or database to be restored will be overwritten and permanently lost. If necessary, be sure to retrieve a backup of this content beforehand. If you are unsure about the changes you need to make, contact your webmaster or one of our [partners](/links/partner).
>
> If necessary, also refer to these detailed guides:
>
> - [Restoring your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup)
> - [Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export)

To restore your website’s source code, follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that appears, click on the `FTP - SSH`{.action} tab.
4. On the new page that appears, click the `Restore backup`{.action} button.
5. In the window that pops up, choose the date of the backup you want to restore, and then continue until the process begins.

Restoring the FTP storage space may take **several minutes**.

To restore a backup of your database, follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that appears, click on the `Databases`{.action} tab.
4. In the table that pops up, click the `...`{.action} button in the row of the database concerned, then `Restore backup`{.action}.
5. On the new page that pops up, choose the backup to restore (**ideally the backup corresponding to the date you have chosen for restoring your website’s source code (see above)**).
6. Once you have chosen the backup, click the `...`{.action} button to the right of the backup you want to restore, then `Restore the backup`{.action}.

Restoring a database backup may take **several minutes**.

> [!success]
>
> Find all the details in the following guides:
>
> - [Restoring your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Importing a backup into a Web Hosting plan database](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

///

/// details | My website redirects to the OVHcloud Webmail interface. What should I do?

![webmail-login-interface](/pages/assets/screens/website/webmail/webmail-login-interface.png){.thumbnail}

This situation indicates an incorrect configuration in the [DNS servers](/pages/web_cloud/domains/dns_server_edit) or [DNS zone](/pages/web_cloud/domains/dns_zone_edit) associated with your domain name.

The most common case is that you have ordered your domain name and web hosting plan separately, so they are not automatically linked to each other via your domain name’s DNS zone.

To correct this, follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `Domain names`{.action} menu, then choose the domain name concerned.
3. On the page that appears, click on the `DNS servers`{.action} tab.
4. Then note down the names of the DNS servers listed, and go to the `DNS Zone`{.action} tab (to the right of the `DNS Servers`{.action} tab).
5. In the table (representing the DNS zone of the domain name) that appears, compare the `Targets` of the `NS` type entries present in the DNS zone with the names of the DNS servers retrieved earlier. There are three possible scenarios. Click on the tabs below to view the solution to each case.

> [!tabs]
> **Case 1**
>>
>> The `Targets` (DNS servers) of the entries of type `NS` declared in the DNS zone of the domain name **are identical** to those retrieved in the `DNS servers`{.action} tab.
>>
>> In this case, this means that your domain name (or its *www* sub-domain) points to the IP address of our redirection server (213.186.33.5).
>>
>> 1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>> 2. Click on the `Domain names`{.action} menu (or on the `DNS zones`{.action} menu if you are using the beta version of the OVHcloud Control Panel), then select the domain name concerned.
>> 3. On the page that opens, click on the `DNS Zone`{.action} tab.
>> 4. In the table that appears (representing your domain name’s DNS zone), identify the entry of type `A` whose `Target` is set to the IP address `213.186.33.5`.
>> 5 Click the `...`{.action} button to the right of the line, then `Modify record`{.action}.
>> 6. In the window that opens, replace the IP address `213.186.33.5` in the `Target*` form with the IP address of the web hosting plan where your website is located.
>>
>> > [!success]
>> >
>> > If necessary, also refer to the following detailed guides:
>> >
>> > - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
>> > - [Web Hosting - List of IP addresses by cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>
> **Case 2**
>>
>> The `Targets` (DNS servers) of the entries of type `NS` declared in the DNS zone of the domain name **are not identical** to those retrieved in the `DNS servers`{.action} tab. However, the `Targets` (DNS servers) have one of the following forms:
>>
>> - `nsXX.ovh.net` and `dnsXX.ovh.net` **or** `nsXXX.ovh.net` and `dnsXXX.ovh.net` (where each `X` designates a number between **0** and **9**)
>> - `nsXX.ovh.ca` and `dnsXX.ovh.ca` **or** `nsXXX.ovh.ca` and `dnsXXX.ovh.ca` (where each `X` denotes a number between **0** and **9**)
>> - `ns200.anycast.me` and `dns200.anycast.me` (if you have subscribed to the [DNS anycast](/links/web/domains-options) option)
>>
>> > [!primary]
>> >
>> > If one of your DNS servers declared in the `DNS servers`{.action} tab has the following form: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXX.ovh.net` or `vpsXXXXXX.ovh.ca` (where each `X` designates a number between **0** and **9**), please refer to the **Case 3**.
>> > These are the names of DNS servers provided by OVHcloud, which only allow our customers to host their DNS configuration directly on their own servers (Dedicated Servers, VPS, etc.).
>>
>> In this case, this means that your domain name is not using the correct OVHcloud DNS servers to apply the DNS zone configuration listed in the `DNS zone`{.action} tab.
>>
>> To correct this, follow these steps:
>>
>> 1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>> 2. Click on the `Domain names`{.action} menu, then choose the domain name concerned.
>> 3. On the page that opens, click on the `DNS servers`{.action} tab.
>> 4. On the new page that appears, click the `Modify DNS servers`{.action} button.
>> 5. On the page that pops up, select the option `Use OVHcloud default DNS`{.action}, then click the `Apply configuration`{.action} button.
>>
>> It can take up to **48** hours to propagate the DNS server update applied to a domain name.
>>
>> > [!success]
>> >
>> > Find all the details in our guide “[How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)”.
>>
> **Case 3**
>>
>> The `Targets` (DNS servers) of the entries of type `NS` declared in the DNS zone of the domain name **are not identical** to those retrieved in the `DNS servers`{.action} tab. In addition, the names of the DNS servers retrieved in the `DNS servers`{.action} tab do not have any of the forms described in the **Case 2**, with the exception of the following forms: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXX.ovh.net` or `vpsXXXXXX.ovh.ca` (where each `X` designates a number between **0** and **9**).
>>
>> In this case, the active DNS zone applied to your domain name is not managed directly by OVHcloud. Contact your Webmaster, domain name provider, DNS provider or one of our [partners](/links/partner).

///

/// details | What do I do if my website displays a "Page is not redirecting properly" error?

![the-page-isnt-redirecting-properly](/pages/assets/screens/other/browsers/errors/the-page-isnt-redirecting-properly.png){.thumbnail}

In this case, the quickest solution will be to restore it to a previous state where it worked correctly.

> [!alert]
>
> Restoring a web hosting plan restores **all of the websites** it contains.
>
> When you restore an instance, the contents of your FTP storage space or the contents of your database are irreversibly replaced by a backup. Any data that was present **before the restoration** was launched on the FTP storage space or database to be restored will be overwritten and permanently lost. Please ensure that you have backed up this content beforehand. If you are unsure about the changes you need to make, contact your Webmaster or one of our [partners](/links/partner).
>
> See also these detailed guides:
>
> - [Restoring your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup)
> - [Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export)

To restore your website’s source code, follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that appears, click on the `FTP - SSH`{.action} tab.
4. On the new page that appears, click the `Restore backup`{.action} button.
5. In the window that pops up, choose the date of the backup you want to restore, and then continue until the process begins.

Restoring the FTP storage space may take **several minutes**.

To restore a backup of your database, follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
3. On the page that appears, click on the `Databases`{.action} tab.
4. In the table that pops up, click the `...`{.action} button on the right-hand side of the row for the database concerned, then `Restore backup`{.action}.
5. On the new page that pops up, choose the backup to restore (**ideally the backup corresponding to the date you have chosen for restoring your website’s source code (see above)**).
6. Once you have chosen the backup, click the `...`{.action} button to the right of the backup you want to restore, then `Restore the backup`{.action}.

Restoring a database backup may take **several minutes**.

> [!success]
>
> Find all the details in the following guides:
>
> - [Restoring your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Importing a backup into a Web Hosting plan database](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

If this does not restore access to your website, contact your Webmaster or one of our [partners](/links/partner).

///

/// details | What do I do if my website displays the error "503 error Backend fetch failed (Varnish cache)"?

![503_varnish](/pages/assets/screens/other/browsers/errors/http-503-backend-varnish.png){.thumbnail}

If you have enabled [the CDN option](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) on your web hosting plan, disable *Maintenance* mode on your WordPress or PrestaShop website.

If you have not enabled this option or used *Maintenance* mode, please contact your webmaster or one of our [partners](/links/partner).

This error can also appear if an HTTP request ends in *timeout* on your website.

> [!success]
>
> If necessary, also refer to these detailed guides:
>
> - [Speed up my website using the CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)
> - [Troubleshooting common 1-click module errors](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

///

/// details | What should I do if my website displays a “Your request has been blocked” error?

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

The “Your request has been blocked” page may appear for a number of reasons (non-exhaustive list):

- The request is made from an unupdated web browser (Firefox, Chrome, Safari, Edge, etc.).
- A very large number of requests, similar or not, are made in an extremely short time.
- The request attempts to perform unauthorized actions on the shared infrastructure where your web hosting plan is located.

In this situation, several actions are required:

- Check that your web browser is up to date.
- Retrieve the URL called (for example: `https://www.domain.tld`) as well as all the information present on the page “Your request has been blocked” (`IP address`, `Date` and `Request ID`).
- Send this information to support by creating a [support ticket](https://help.ovhcloud.com/csm?id=csm_get_help).

If you are unsure about the changes you need to make, contact your webmaster or one of our [partners](/links/partner).

> [!success]
>
> Please also refer to our detailed guide: [What should I do if the page “Your request has been blocked” appears?](/pages/web_cloud/web_hosting/diagnostic_request_blocked).

///

/// details | What should I do if my website displays a “Your IP has been banned” error?

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

The “Your IP has been banned” page may appear for a number of reasons (non-exhaustive list):

- A very large number of requests, similar or not, are made in an extremely short time from the same IP address.
- Requests made from the IP address in question are suspicious.

In this situation, several actions are required:

- Retrieve the URL called (for example: `https://www.domain.tld`) as well as all the information present on the page “Your IP has been banned” (`IP address`, `Date` and `Request ID`).
- Send this information to support by creating a [support ticket](https://help.ovhcloud.com/csm?id=csm_get_help).

If you are unsure about the changes you need to make, contact your webmaster or one of our [partners](/links/partner).

> [!success]
>
> Please also refer to our detailed guide: [What should I do if the page “Your IP has been banned” appears?](/pages/web_cloud/web_hosting/diagnostic_ip_banned).

///

/// details | I have ordered a domain name with special characters, and it appears written in a strange way in my Control Panel. What should I do?

![idn-notation](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/idn-notation.png){.thumbnail}

You have no action to take in this situation. Even if your domain appears in [internationalized notation (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name) in your Control Panel, it will work and display in a normal way elsewhere. Your website's web address will be displayed as you requested. Your email addresses will also appear as you wish to your contacts.

> [!alert]
>
> We do not recommend using an email address with an Internationalized Domain Name (IDN) from an email client (Outlook, macOS Mail, etc.). Some email clients do not interpret domain names with accented characters, which blocks the transmission of emails. A sender sending you an email will receive an automatic message stating that your email address does not exist.
>
> **It is recommended that you reserve the same domain name without accents, in addition to your domain name with accented characters, to avoid any incompatibility in email exchanges.**
>

///

## Go further <a name="go-further"></a>

[FAQ - MX Plan shared emails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
