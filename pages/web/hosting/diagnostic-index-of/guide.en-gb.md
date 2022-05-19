---
title: Troubleshooting an "Index of" page
excerpt: Find out how to get your website back online if it displays an "Index of" page
slug: diagnostic-index-of
section: Troubleshooting
order: 6
---

**Last updated 10th May 2022**

## Objective

If a `Multisite` configuration is not correctly set up, your website may display an **Index of** page.

![index_of](images/index_of.png){.thumbnail}

**This guide explains how to troubleshoot the display of an "Index of" page.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a specialist service provider and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- An [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Understanding the origin of the "Index of" page

Your domain name is connected via the `Multisite`{.action} section of your hosting to a directory (a `Root folder`) on your [FTP server](https://docs.ovh.com/gb/en/hosting/log-in-to-storage-ftp-web-hosting/).

The **Index of** page indicates that the directory does not contain an **index.php** or **index.html** file. Such a file functions as the "entry point" of your website.

Your domain name therefore needs to be linked to the `Root folder` containing this **index.php** or **index.html** file. 

To correctly display your website, this connection must be established in the `Multisite`{.action} section of your Web Hosting plan.

> [!primary]
>
> If you want to temporarily link your domain to a `Root folder` that does not contain an **index.php** or **index.html** file, you can prevent the list of folders from being displayed on your site by following this [guide](https://docs.ovh.com/gb/en/hosting/what_else_can_you_do_with_the_htaccess_file/#prevent-the-content-of-a-directory-from-being-listed). You can also protect access to your folders with a [password](https://docs.ovh.com/gb/en/hosting/how_to_password_protect_a_directory_on_your_website/).
>
> We recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) if you experience any difficulties setting up this configuration. Our support teams will not be able to assist you with any changes to your website’s internal programming.

### Resolving the most common cause of an "Index of" page

You have imported the files of your website **mydomain.ovh** into the `www` folder on your OVHcloud Web Hosting plan through an [FTP connection](https://docs.ovh.com/gb/en/hosting/log-in-to-storage-ftp-web-hosting/). Your domain name however is not linked to this folder in the `Root folder` column of your `Multisite` configuration.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Modify the `Root folder` by clicking on the `...`{.action} button in the row of the domain name concerned, then `Modify domain`{.action}:

![modify_domain](images/modify_domain.png){.thumbnail}

In the window that opens:

- Select the `Also modify the www.mydomain.ovh sub-domain`{.action} (1) box;
- Specify the directory containing your site's **index.php** or **index.html** file as `Root folder` (2);
- Click on `Next`{.action} (3).

![change_root_folder](images/change_root_folder01.png){.thumbnail}

> [!primary]
>
> It is not mandatory to use the `www` directory as `Root folder`. You can install your website in another folder on your [FTP server](https://docs.ovh.com/gb/en/hosting/log-in-to-storage-ftp-web-hosting/).
>

In the next window, click on `Confirm`{.action}.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

In a few minutes (remember to refresh your browser), you will see the following result:

![multisite_modified](images/multisite_modified.png){.thumbnail}

Finally, check that your website appears correctly. Otherwise, reboot your device and clear your browser cache if necessary.

## Go further <a name="gofurther"></a>

[Resolve the most common 1-click module errors](https://docs.ovh.com/gb/en/hosting/error-frequently-1-click-modules/)

[Resolve the "Website not installed" error](https://docs.ovh.com/gb/en/hosting/web_hosting_error_-_website_not_installed/)

[Hosting multiple websites on your Web Hosting plan](https://docs.ovh.com/gb/en/hosting/multisites-configuring-multiple-websites/)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
