---
title: Troubleshooting recurring errors when using FTP software
excerpt: Find out how to resolve the most common FTP software related issues
slug: recurring_ftp_problems
legacy_guide_number: 1996
section: FTP and SSH
order: 3
---

**Last updated 5th January 2022**

## Objective

Using FTP software when logging in to your [Web Hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/) can cause various anomalies. This guide will help you resolve the most common ones.

**Find out how to resolve the most common FTP software related issues.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- An OVHcloud [Web Hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### "This server does not support FTP on TLS" (FileZilla)

![filezilla_error](images/filezilla_error.png){.thumbnail}

This message coming from [FileZilla](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/) indicates that you have not enabled the SFTP or SSH option from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). As a result, the information exchanged between your OVHcloud hosting server and your computer will not be encrypted.

If the data you want to exchange via this link is not confidential, click `OK`{.action}.

Otherwise, go to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Web Cloud`{.action} section, then `Hosting plans`{.action}. Select the hosting plan concerned, then choose the `FTP-SSH`{.action} tab.

If you have a [Personal](https://www.ovhcloud.com/en-gb/web-hosting/personal-offer/) Web Hosting plan, tick the `Disabled`{.action} box in the `SFTP`{.action} column, then wait a few minutes.

If you have a [Pro](https://www.ovhcloud.com/en-gb/web-hosting/professional-offer/) or [Performance](https://www.ovhcloud.com/en-gb/web-hosting/performance-offer/) Web Hosting plan, click on the `...`{.action} button to the right of the FTP user concerned, then on `Edit`{.action}.

Choose `SFTP`{.action} or `Enabled`{.action} (to enable SSH on your hosting), click `Next`{.action} and then click on `Confirm`{.action}. Wait a few minutes.

> [!primary]
>
> For any other error messages, see the `Troubleshooting` section of our [Web Hosting guides](../).
>

### I transferred my files with FTP software, but my website does not appear.

First of all, check that your website’s files and folders are in the [root folder](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/#3-upload-the-files-to-the-storage-space) of your Web Hosting plan.

If you have modified your [DNS servers or DNS zone](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/#understanding-dns) less than 48 hours ago, please wait and restart your devices regularly in order to clear their cache.

### My FTP credentials are not working.

If you are unable to log in, change your FTP password as described in this [guide](https://docs.ovh.com/gb/en/hosting/modify-ftp-user-password/).

### I encounter random errors on my website.

A lack of file storage capacity on your Web Hosting plan may cause your site to malfunction when you try to modify or update it.

To check the remaining storage space on your hosting, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Click on `Web Cloud`{.action}, then on `Hosting plans`{.action}. Select the concerned hosting plan.

The amount of data storage used on your Web Hosting server (excluding databases) appears in the `General information`{.action} section under `Disk space`.

![disk_space](images/disk_space.png){.thumbnail}

### I can't transfer my files to the FTP server.

Check that your FTP software is connected in "Passive mode" (Configuration mode of an FTP server in which the server determines the connection port).

For example, for [Filezilla](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/), click on `Edit`{.action}, then on `Settings`{.action} and open the `Connection`{.action} settings. Click on `FTP`{.action} and then choose `Passive (recommended)`{.action}.

Also limit the size of your data transfers (you cannot send more than **5000 files and folders** on OVHcloud shared servers on a single transfer). Split your imports if necessary and use compressed folders.

If you have a [Pro](https://www.ovhcloud.com/en-gb/web-hosting/professional-offer/) or [Performance](https://www.ovhcloud.com/en-gb/web-hosting/performance-offer/) Web Hosting plan, use the [SSH protocol](https://docs.ovh.com/gb/en/hosting/web_hosting_ssh_on_web_hosting_packages/) to import files on to your file storage space.

### I can't delete the symbolic link "index.html" on my FTP space.

This link is installed by default on OVHcloud Web Hosting plans. It displays this image on your web browser:

![site_under_construction](images/site_under_construction.png){.thumbnail}

If you did not use the "[1-click module](https://docs.ovh.com/gb/en/hosting/web_hosting_web_hosting_modules/)" feature to create your website, you will need to use the [Net2FTP](https://docs.ovh.com/gb/en/hosting/log-in-to-storage-ftp-web-hosting/#1-log-in-via-ftp-explorer) software accessible via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) in order to manually delete the "Website under construction" page.

## Go further <a name="gofurther"></a>

[Using FileZilla software with your hosting](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/)

For specialised services (SEO, development, etc.), contact your [OVHcloud partners](https://partner.ovhcloud.com/en-gb/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
