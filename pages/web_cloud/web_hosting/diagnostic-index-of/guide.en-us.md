---
title: Troubleshooting an "Index of" page
excerpt: Find out how to get your website back online if it displays an "Index of" page
updated: 2023-05-04
---

## Objective

An "**Index of**" page appears in at least one of the following cases:

- Your domain name’s [Multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) configuration has not been correctly set to your target directory.
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

Your domain name is declared to access a target directory (a `Root Folder`) on the server [FTP](/pages/web_cloud/web_hosting/ftp_connection) of your web hosting plan. You can do this via the [Multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) tab in your web hosting plan, in your [OVHcloud Control Panel](/links/managera).

The "**Index of**" page indicates that the target directory does not contain a **index.php** or **index.html** file. A file of this type is the *entry point* for your website. This file name is standardised.

To view your website, you will need to link your domain to the `Root folder` containing this file **index.php** or **index.html** to view it from the `Multisite`{.action} section of your hosting plan.

> [!primary]
>
> If you want to temporarily link your domain to a `Root folder` that does not contain an **index.php** or **index.html** file, you can prevent the list of folders from being displayed on your site by following this [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#prevent-the-content-of-a-directory-from-being-listed). You can also protect access to your folders with a [password](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> We recommend contacting a [specialist provider](/links/partner) if you experience any difficulties setting up this configuration. Our support teams will not be able to assist you with any changes to your website’s internal programming.

### Resolving the most common cause of an "Index of" page

You have imported the files of your website **mydomain.ovh** into the `www` folder on your OVHcloud Web Hosting plan through an [FTP connection](/pages/web_cloud/web_hosting/ftp_connection). Your domain name however is not linked to this folder in the `Root folder` column of your `Multisite` configuration.

![index_of_multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-empty.png){.thumbnail}

Modify the `Root folder` by clicking on the `...`{.action} button in the row of the domain name concerned, then `Modify domain`{.action}:

![modify_domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain.png){.thumbnail}

In the window that opens:

- Select the `Also modify the www.mydomain.ovh sub-domain`{.action} (1) box.
- Specify the directory containing your site's **index.php** or **index.html** file as `Root folder` (2).
- Click on `Next`{.action} (3).

![change_root_folder](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/change-root-folder-step-1.png){.thumbnail}

> [!primary]
>
> It is not mandatory to use the `www` directory as `Root folder`. You can install your website in another folder on your [FTP server](/pages/web_cloud/web_hosting/ftp_connection).
>

In the next window, click on `Confirm`{.action}.

![modify_root_folder_confirm](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/change-root-folder-step-2.png){.thumbnail}

In a few minutes (remember to refresh your browser), you will see the following result: 

![multisite_modified](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-full-www.png){.thumbnail}

Finally, check that your website appears correctly. Otherwise, reboot your device and clear your browser cache if necessary.

Also make sure that a **index.php** or **index.html** file is present in your target directory.

## Go further <a name="go-further"></a>

[Resolve the most common 1-click module errors](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Resolve the "Website not installed" error](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).