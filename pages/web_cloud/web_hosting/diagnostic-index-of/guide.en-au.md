---
title: Troubleshooting an "Index of" page
excerpt: Find out how to get your website back online if it displays an "Index of" page
updated: 2026-03-03
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

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Web hosting](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

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

You will need to modify the `root folder` initially declared for your website from your [OVHcloud Control Panel](/links/manager). To do this, refer to our guide "[How to modify the root folder of an existing website?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

If your website has a configuration with Git, please refer to our guide "[Configure and use Git with your OVHcloud web hosting](/pages/web_cloud/web_hosting/git_integration_webhosting)" beforehand to remove the association with Git **before** continuing. Indeed, modifying the declared root folder for a website is unavailable if your website is configured with Git.

Finally, check that your website appears correctly. Otherwise, reboot your device and clear your browser cache if necessary.

Also make sure that a **index.php** or **index.html** file is present in your target directory.

## Go further <a name="go-further"></a>

[Resolve the most common 1-click module errors](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Resolve the "Website not installed" error](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
