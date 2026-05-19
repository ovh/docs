---
title: "Troubleshooting recurring errors when using FTP software"
excerpt: "Find out how to resolve the most common FTP software related issues"
updated: 2026-03-31
---

## Objective

Using FTP software when logging in to your [Web Hosting plan](/links/web/hosting) can cause various anomalies. This guide will help you resolve the most common ones.

**Find out how to resolve the most common FTP software related issues.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- An OVHcloud [Web Hosting plan](/links/web/hosting)

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

### "This server does not support FTP on TLS" (FileZilla)

![doesnt-support-ftp-on-tls](/pages/assets/screens/other/web-tools/filezilla/doesnt-support-ftp-on-tls.png){.thumbnail}

This message coming from [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) indicates that you have not enabled the SFTP or SSH option from your [OVHcloud Control Panel](/links/manager). As a result, the information exchanged between your OVHcloud hosting server and your computer will not be encrypted.

If the data you want to exchange via this link is not confidential, click `OK`{.action}.

Otherwise, enable the SFTP protocol by following our guide "[Web Hosting - How to enable SFTP access](/pages/web_cloud/web_hosting/enable_sftp)".

> [!primary]
>
> For any other error messages, see the `Troubleshooting` section of our [Web Hosting guides](/products/web-cloud-hosting).
>

### I transferred my files with FTP software, but my website does not appear.

First of all, check that your website’s files and folders are in the [root folder](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online#3-upload-the-files-to-the-storage-space) of your Web Hosting plan.

If you have made a change to your [DNS servers](/pages/web_cloud/domains/dns_server_edit) or [DNS zone](/pages/web_cloud/domains/dns_zone_edit) less than 48 hours ago, please wait and reboot your devices regularly to clear their cache.

### My FTP credentials are not working.

If you are unable to log in, change your FTP password as described in this [guide](/pages/web_cloud/web_hosting/ftp_change_password).

### I encounter random errors on my website.

A lack of file storage capacity on your Web Hosting plan may cause your site to malfunction when you try to modify or update it.

<!-- CP-STEPS-START:check-disk-space -->
To check the remaining storage space on your hosting, click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> You can find the storage space utilization of your hosting in the **General information** box, under **Disk space**.
>>
>> ![disk_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}
<!-- CP-STEPS-END:check-disk-space -->

### I can't transfer my files to the FTP server.

Check that your FTP software is connected in "Passive mode" (Configuration mode of an FTP server in which the server determines the connection port).

For example, for [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide), click on `Edit`{.action}, then on `Settings`{.action} and open the `Connection`{.action} settings. Click on `FTP`{.action} and then choose `Passive (recommended)`{.action}.

Also limit the size of your data transfers (you cannot send more than **5000 files and folders** on OVHcloud shared servers on a single transfer). Split your imports if necessary and use compressed folders.

If you have a [Pro](/links/web/hosting-professional-offer) or [Performance](/links/web/hosting-performance-offer) Web Hosting plan, use the [SSH protocol](/pages/web_cloud/web_hosting/ssh_on_webhosting) to import files on to your file storage space.

### I can't delete the symbolic link "index.html" on my FTP space.

This link is installed by default on OVHcloud Web Hosting plans. It displays this image on your web browser:

![site-under-construction](/pages/assets/screens/other/browsers/errors/site-under-construction.png){.thumbnail}

If you have not used the [1-click module](/pages/web_cloud/web_hosting/cms_install_1_click_modules) feature to create your website, you will need to [log in to the FTP storage space](/pages/web_cloud/web_hosting/ftp_connection) on your web hosting plan in order to delete the “Website under construction” page manually.

## Go further <a name="go-further"></a>

[Using FileZilla software with your hosting](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

For specialised services (SEO, development, etc.), contact your [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).