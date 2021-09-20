---
title: Troubleshooting an "Index of" page
excerpt: Find out how to get your website back online if it displays an "Index of" page
slug: diagnostic-index-of
section: Troubleshooting
order: 6
---

**Last updated 25th June 2021**

## Objective

If a `Multisite` configuration is not correctly configured, your website may display an **"Index of"** page.

![index_of](images/index_of.png){.thumbnail}

**This guide explains how to troubleshoot the display of an "Index of" page.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a specialist service provider and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovh.co.uk/web-hosting)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Understanding the origin of the "Index of" page

Through the `Multisite` settings of your hosting, your domain name is connected to a directory (a `Root folder`) on your [FTP storage](../log-in-to-storage-ftp-web-hosting/).

The **"Index of"** page indicates that the directory does not contain any **index.php** or **index.html** file. Such a file functions as the "entry point" of your website. Your domain name therefore needs to be linked to the `Root folder` that contains this **index.php** or **index.html** file. 

To correctly display your website, this connection must be established in the `Multisite` section of your Web Hosting plan.

> [!primary]
>
> If you want to temporarily link your domain name fto a `Root folder` that does not contain an **index.php** or **index.html** file, you can prevent the listing of folders from being displayed on your website by following this [guide](../what_else_can_you_do_with_the_htaccess_file/#prevent-the-content-of-a-directory-from-being-listed). You can also protect the access to your folders with a [password](../how_to_password_protect_a_directory_on_your_website/).
>
> We recommend contacting a [specialised provider](https://partner.ovhcloud.com/en-gb/directory/) if you experience any difficulties setting up this configuration. Our support teams will not be able to assist you with any changes to your website’s internal programming.

### Resolving the most common cause of an "Index of" page

You have imported the files of your website **mydomain.ovh** into the `www` folder on your OVHcloud Web Hosting plan through an [FTP](../log-in-to-storage-ftp-web-hosting/) connection. Your domain name however is not linked to this folder in the `Root folder` column of your `Multisite` configuration.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Modify the `Root folder` by clicking on the `...`{.action} button in the row of the domain name concerned, then select `Modify domain`{.action}.

![modify_domain](images/modify_domain.png){.thumbnail}

Select the `Also modify the www.mydomain.ovh subdomain` checkbox and enter the name of the folder containing your web site's **index.php** or **index.html** file in the `Root folder` section.

> [!primary]
>
> It is not mandatory to use the `www` directory as `Root Folder`. You can install your website in another folder within your [FTP storage](../log-in-to-storage-ftp-web-hosting/).

Then click on `Next`.

![change_root_folder](images/change_root_folder.png){.thumbnail}

Then click on the `Confirm`{.action} button.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

You will get the result as shown in the following image:

![multisite_modified](images/multisite_modified.png){.thumbnail}

## Go further <a name="gofurther"></a>

[Resolving the most common 1-click module errors](../error-frequently-1-click-modules/)

[Resolving a "Site not installed" error](../web_hosting_error_-_website_not_installed/)

[Hosting multiple websites on your Web Hosting plan](../multisites-configuring-multiple-websites/)

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
