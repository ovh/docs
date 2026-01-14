---
title: Troubleshooting an "Index of" page
excerpt: Find out how to get your website back online if it displays an "Index of" page
updated: 2026-02-01
---

## Objective

An "**Index of**" page appears in at least one of the following cases:

- The [configuration of your domain name with your website](/pages/web_cloud/web_hosting/multisites_configure_multisite) is not correctly set to your target directory.
- The target folder to which your domain name points does not contain **index.html** or **index.php** files.

![index_of](/pages/assets/screens/other/browsers/errors/index-of.png){.thumbnail}

**This guide explains how to troubleshoot the display of an "Index of" page.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- A [domain name](/links/web/domains)
- An [OVHcloud Web Hosting plan](/links/web/hosting)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Understanding the origin of the "Index of" page

Your domain name is declared to access a target directory (a `root folder`) on the server [FTP](/pages/web_cloud/web_hosting/ftp_connection) of your web hosting plan. You can do this via the [My sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) tab in your web hosting plan, in your [OVHcloud Control Panel](/links/manager).

The "**Index of**" page indicates that the target directory does not contain a **index.php** or **index.html** file. A file of this type is the *entry point* for your website. This file name is standardised.

To display your website, you will therefore need, from the `My sites`{.action} tab of your web hosting, to link your domain name to the website whose `root folder` contains this **index.php** or **index.html** file.

> [!primary]
>
> If you want to temporarily link your domain to a `root folder` that does not contain an **index.php** or **index.html** file, you can prevent the list of folders from being displayed on your site by following this [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#prevent-the-content-of-a-directory-from-being-listed). You can also protect access to your folders with a [password](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> We recommend that you contact a [specialist provider](/links/partner) if you have difficulties setting up this configuration. Indeed, our support teams will not be able to assist you with any changes to the internal programming of your website.

### Resolving the most common cause of an "Index of" page

You have imported the files of your site **domain.tld** into the `www` folder of your hosting. However, the website associated with your domain name is not linked to this folder in the `root folder` column.

![index_of_multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-empty.png){.thumbnail}

The `root folder` cannot be modified once the website has been created.

You will need to detach your domain name from the existing website from the `My sites`{.action} tab of your web hosting. To do this, refer to our guide "[How to detach a domain name from an existing website?](/pages/web_cloud/web_hosting/my_websites_detach_domain_existing_website)".

You can then add a new website with your domain name using our guide "[Sharing your hosting between several websites](/pages/web_cloud/web_hosting/multisites_configure_multisite)". If your website has a configuration with Git, please consult our guide "[Configure and use Git with your OVHcloud web hosting](/pages/web_cloud/web_hosting/git_integration_webhosting)" **before** clicking `Detach domain`{.action}.

Finally, check that your website appears correctly. Otherwise, reboot your device and clear your browser cache if necessary.

Also make sure that a **index.php** or **index.html** file is present in your target directory.

## Go further <a name="go-further"></a>

[Resolve the most common 1-click module errors](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Resolve the "Website not installed" error](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).