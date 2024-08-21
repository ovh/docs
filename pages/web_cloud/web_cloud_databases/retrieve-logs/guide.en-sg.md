---
title: "Web Cloud Databases - How to retrieve logs"
excerpt: "Find out how to retrieve the logs of your databases hosted on your Web Cloud Databases server"
updated: 2024-03-07
---

## Objective

With the [Web Cloud Databases](/links/web/databases) solution, you can host multiple databases. In some situations, you may need to view or retrieve the logs of:

- Your Web Cloud Databases server.
- One of the databases hosted on your Web Cloud Databases server.

**This guide explains how to retrieve the logs of your databases hosted on your Web Cloud Databases server.**

## Requirements

- A [Web Cloud Databases](/links/web/databases) solution (included in a [Performance web hosting](/links/web/hosting) solution or standalone)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist service provider](/links/partner) if you encounter any difficulties. We will not be able to provide you with interpretation assistance for the logs available with your Web Cloud Databases solution. You can find more information in the [Go further](#go-further) section of this guide.
>

### View real-time logs for your Web Cloud Databases solution

To check the logs for your Web Cloud Databases solution in real time, perform the following actions:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. In the top menu of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Web Cloud Databases`{.action} dropdown menu.
4. Select the Web Cloud Databases solution concerned.
5. On the page that appears, click on the `Logs`{.action} tab.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-with-logs.png){.thumbnail}

This integrated console provides you with real-time logs for your Web Cloud Databases solution.

> [!primary]
>
> Since the logs are only available in real time, they are only genrated and displayed while the `Logs`{.action} tab is open.
>
> If you leave the `Logs`{.action} tab and come back to it later, the log history that was previously displayed will be gone.
>

### Retrieve the log history of your Web Cloud Databases solution

To retrieve the log history of your Web Cloud Databases solution, you will need to log in via SFTP.

> [!warning]
>
> Before you log in, check that the public IP address of the workstation you are using is authorized on your Web Cloud Databases server with the `SFTP` option.
>
> To check this, retrieve the public IP address of your internet access point and refer to the **Authorize an IP address** section of [this guide](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

To retrieve the SFTP connection information for your Web Cloud Databases solution, perform the following actions:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. In the top menu of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Web Cloud Databases`{.action} dropdown menu.
4. Select the Web Cloud Databases solution concerned.
5. In the `General information`{.action} tab you can find a box labeled `Login information`{.action}.
6. Below `SFTP`{.action}, you will find all the information you need to log in via SFTP.

> [!primary]
>
> If you do not know the `Server password`, click the `...`{.action} button on the right to modify it.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Once you have retrieved the SFTP login credentials, log in via an FTP client (FileZilla, Cyberduck, WinSCP, etc.).

For FileZilla, go to the top left in the `File`{.action} menu, then click `Site Manager`{.action}.

Click `New site`{.action}, then enter the settings listed above.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

The log file `stdout.log` is located at the root.

You can download it to your desktop to view it.

> [!primary]
>
> An additional log file named `slow-query.log` may appear in the SFTP root of your Cloud Databases Web server.
> This file contains the history of slow requests that have run on your Web Cloud Databases server. 
> 
> By default, the value is set to 1 second on Web Cloud Databases solutions in the **long_query_time** variable.
> 
> With this file, you can optimize your scripts and the content of your databases to improve the performance of your associated services.
>

## Go further <a name="go-further"></a>

[Getting started with your Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
  
Join our [community of users](/links/community).