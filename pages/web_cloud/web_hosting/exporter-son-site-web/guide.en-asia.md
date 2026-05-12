---
title: "Exporting a website"
excerpt: "Find out how to export an OVHcloud website"
updated: 2026-05-04
---

## Objective

This guideline will outline the steps to follow in order to export all elements of your website in a standard format, from an [OVHcloud web hosting plan](/links/web/hosting).

**Find out how to export an OVHcloud website.**

## Requirements

- an [OVHcloud web hosting plan](/links/web/hosting)

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

### 1 - Retrieve files from your FTP storage space

#### 1.1 Log in to your storage space

To log in to your storage space, you will need the following:

- The active FTP or SSH user account
- The FTP or SSH user account password
- The server address
- The server connection port

This information was included in the email informing you that your web hosting plan has been set up.

If you don’t have this information, click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> On the page that pops up, click on the `FTP - SSH`{.action} tab.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Step 3**
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

Once connected to your storage space and depending on the websites hosted on it, several folders may appear.

If needed, identify the root folder where your website is stored. To do this, click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>>
>> In the table that appears, for the desired website, look at the `Root folder`{.action} that is displayed.
>>
>> ![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

Still connected to your storage space, download the files of your website from the root folder identified above.

### 2 - Retrieve your database backup (optional)

> [!primary]
>
> This step is not required if your website does not use any databases.
>

To retrieve a backup of your database, please read our guide on
[Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export).

### 3 - Retrieve the logs for your OVHcloud web hosting plan

Refer to our dedicated guide: [Web Hosting - Consulting the statistics and logs of a website](/pages/web_cloud/web_hosting/logs_and_statistics).

## Go further

[Logging in to your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_connection)

[Modifying a FTP user password](/pages/web_cloud/web_hosting/ftp_change_password)

[FileZilla user guide](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Accessing a web hosting plan via SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
