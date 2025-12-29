---
title: "Exporting a website"
excerpt: "Find out how to export an OVHcloud website"
updated: 2025-10-28
---

## Objective

This guideline will outline the steps to follow in order to export all elements of your website in a standard format, from an [OVHcloud web hosting plan](/links/web/hosting).

**Find out how to export an OVHcloud website.**

## Requirements

- an [OVHcloud web hosting plan](/links/web/hosting)
- access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### 1 - Retrieve files from your FTP storage space

#### 1.1 Log in to your storage space

To log in to your storage space, you will need the following:

- The active FTP or SSH user account
- The FTP or SSH user account password
- The server address
- The server connection port

This information was included in the email informing you that your web hosting plan has been set up.

If you don’t have this information, click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Hosting plans`{.action} menu, then select the Web Hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that pops up, click on the `FTP - SSH`{.action} tab.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Step 4**
>>
>> The information associated with your storage space will now appear. You should be able to find the information you need to log in to it.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> If you need help with this, please refer to our guide on [Logging in to your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> If you are no longer in possession of the password, refer to the instructions set out in our documentation on [Modifying a FTP user password](/pages/web_cloud/web_hosting/ftp_change_password).

Once you have everything you need, there are two different ways of retrieving your files from the storage space:

- **Using FTP- or SFTP-compatible software.** You will need to install a compatible program on your computer (e.g. [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)). Since OVHcloud did not create the software package you have installed, please contact the software’s publisher if you are experiencing difficulties using it.

- **Using SSH access.** You will need to use commands from a terminal to interact with your storage space. More advanced knowledge and a specific [OVHcloud hosting plan](/links/web/hosting) are required to use this type of access. For further information on this, please refer to our guide on [Accessing your web hosting plan via SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

#### 2.1 Download the files from your storage space

Once connected to your storage space, you just need to download the files of your website. **We recommend that you pay particular attention to the directory in which you installed your website.** In a typical use case, the website should be located in the "www" folder. However, if you are using your hosting to host multiple websites, you have probably declared multiple websites.

To verify the folder in which your website is stored, go to the `Multisite`{.action} tab from your OVHcloud Control Panel. In the table that appears, for the desired domain, look at the `Root folder`{.action} that is displayed.

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

### 2 - Retrieve your database backup (optional)

> [!primary]
>
> This step is not required if your website does not use any databases.
>

To retrieve a backup of your database, please read our guide on
[Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export).

If you are using a **Web Cloud Databases** database for your website, you can go to the ‘Databases’ tab, click the `...`{.action} button to the right of the database, and click ‘Back up now’ in the drop-down menu.
You can also download, import and restore backups in this section. Please read our guide [Backing up and exporting a database of your database server](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

### 3 - Retrieve the logs for your OVHcloud web hosting plan

If you would like to download your website’s logs, you can do so via your web hosting plan.

Click `Hosting plans`{.action}, then click on the solution concerned. Click the `Statistics and logs`{.action} tab.

![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}

Then click on the link under `View logs`{.action}:

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-logs.png){.thumbnail}

A window will appear with the different types of logs you can access. They are classed by month:

| Type  	| Description                                                                                                                                                                                         	|
|-------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Web   	| Here, you will find various logs for visiting your website, as well as the different actions taken from your website. You can use this to identify hacking attempts. 	|
| FTP   	| FTP connections will be recorded and stored in these logs.                                                                                                                     	|
| Error 	| These are the errors generated by your website.                                                                                                                                                    	|
| CGI   	| These are the various calls to CGI scripts that have been made.                                                                                                                                     	|
| out   	| These are the statistics of your web hosting plan on different external calls that have been made.                                                                                                                  	|
| ssh   	| These logs indicate the different connections made with SSH protocol.                                                                                                                      	|
| cron  	| These are the result of any jobs you have scheduled.                                                                                                                                                	|

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs-general.png){.thumbnail}

When you have selected the log types and month you want to view, the logs are archived by the day:

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs.png){.thumbnail}

## Go further

[Logging in to your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_connection)

[Modifying a FTP user password](/pages/web_cloud/web_hosting/ftp_change_password)

[FileZilla user guide](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Accessing a web hosting plan via SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export)

[Getting started with the Web Cloud Databases service](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).