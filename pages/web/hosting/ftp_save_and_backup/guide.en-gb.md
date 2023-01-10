---
title: 'Restoring your Web Hosting plan’s storage space'
slug: restoring-ftp-filezilla-control-panel
excerpt: 'Find out how to restore a file or an entire storage space from your Web Hosting plan'
section: 'FTP and SSH'
order: 06
---

**Last updated 09th December 2022**

## Objective

With an OVHcloud Web Hosting plan, you get a storage space to host your websites on. A range of actions (e.g. deleting or editing a file) could make your website inaccessible. As a result, you may find that you need to restore all of the data stored on your storage space, or simply a file stored on it.

> [!primary]
> 
> Backups offered by OVHcloud for shared hosting are non-contractual. We offer them in addition to your services to help you in urgent situations. We recommend that you regularly perform your own security backups to avoid any data loss.
> 
> When you do a security backup for your site and you are using a database, also create a backup of your database. Please refer to our guide on [retrieving the backup of a Web Hosting plan’s database](https://docs.ovh.com/gb/en/hosting/web_hosting_database_export_guide/).
> 

**Find out how to restore a file or an entire storage space from your Web Hosting plan.**

## Requirements

- A [Web Hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/){.external} (please note that this does not work with [Cloud Web](https://www.ovhcloud.com/en-gb/web-hosting/cloud-web-offer/)).
- Depending on which method you use, you must be able to manage the Web Hosting plan from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}, or have the FTP user password required to access your storage space. 

## Instructions

Before you begin, ensure that you can use the restore dates offered to restore your Web Hosting plan’s storage space back to your chosen date:

- same day, at 00:01 (UTC+1)
- one day ago, at 00:01 (UTC+1)
- two days ago, at 00:01 (UTC+1)
- Sunday, at 01:00 (UTC+1)
- Sunday two weeks ago, at 01:00 (UTC+1)

If you want to retrieve a backup from an earlier period, OVHcloud will not be able to provide you with this. We advise taking personal backups of your website in advance, and using those if you would like an earlier backup. 

You also need to decide which restore method you will use:

|Restore method|Description|
|---|---|
|Restoring via the OVHcloud Control Panel|Restores the entire content of your storage space. The current content will be fully replaced by the content of the backup you have selected.|
|Restoring via software or an interface|Gives you read-only access to a backup of the storage space. Although this method is more technical, you can use it to recover one or more files from a previous date, without having to overwrite the entire contents of the storage space.|

Once you are ready to do so, carry on reading the section of this guide that is relevant to the restore method you have chosen.

- [Restore the storage space via the OVHcloud Control Panel](#viacontrolpanel)

- [Restore a file using a software program or interface](#viainterface)

### Restore the storage space via the OVHcloud Control Panel <a name="viacontrolpanel"></a>

> [!warning]
>
> This restoration method is unavailable if your hosting plan has been placed in "maintenance" mode by our administrators, or if it does not have FTP access rights (`chmod` rights) following an action on your part.
>
> This method only works if you have `chmod` root access for your hosting plan in `705`.
>

> [!primary]
> **Website in maintenance mode**
> 
> To determine whether your website has been placed in "maintenance" mode, please refer to our guide [What do I do if I have a 403 forbidden page?](https://docs.ovh.com/gb/en/hosting/diagnostic-403-forbidden/). 
> 
> In this case:
>
> - Our teams send an email to the hosting [administrator contact](https://docs.ovh.com/gb/en/customer/managing-contacts/#access-contact-management).
> - The “maintenance” status will appear in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}. In the `Web Cloud`{.action} section, click on your service in the `Hosting plans`{.action} section, then on the `General information`{.action} tab.
> - The hosted site(s) will display a "403 Forbidden" page.
>

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}, click `Hosting plans`{.action}, then select the plan concerned. Go to the `FTP - SSH`{.action} tab, and click `Retrieve backup`{.action}.

![backupftp](images/backupftp-step1.png){.thumbnail}

In the popup window that appears, select the restore date you want in the dropdown menu, using the information below:

|Date shown|Technical backup date|
|---|---|
|D-1|The same day, at 00:01 (UTC+1)|
|D-2|One day ago, at 00:01 (UTC+1)|
|D-3|Two days ago, at 00:01 (UTC+1)|
|1 week|Last Sunday, at 01:00 (UTC+1)|
|2 weeks|Sunday, 2 weeks ago, at 01:00 (UTC+1)|

Once you have selected a date, click `Next`{.action}. 

![backupftp](images/backupftp-step2.png){.thumbnail}

Take a few minutes to check that none of your files will be lost after the restoration, e.g. any files saved on your storage space after the restore date you have selected. As a reminder, the restoration will effectively overwrite all of your current data, and replace it with the backup data.

Once you are ready to start restoring the backup, click `Confirm`{.action}.

> [!primary]
>
> Automatic restoration can take from a few minutes to a few hours. If it takes **more than 24 hours**, contact [OVHcloud support](https://www.ovhcloud.com/en-gb/support-levels/).
>

### Restore a file using a software program or interface <a name="viainterface"></a>

There are several stages to this procedure. Ensure that you have your FTP user password, which provides you with access to yout storage space. 

> [!warning]
>
> This solution requires knowledge of the software or interface you would like to use. We have provided general information below on how to proceed. We recommend contacting a specialist provider and/or getting in touch with the publisher of the interface or software if you encounter any difficulties. We will not be able to assist you ourselves.
>

#### Step 1: Decide on the software or interface you want to use.

First of all, decide which software or interface you would like to use in order to connect to your storage space backup.  If you have already decided on one, you can move straight to step 2. Otherwise, we recommend using one of the following three solutions:

- **Using FileZilla software.** You will need to download the software in advance, from the publisher’s website. You can learn how to use it by reading our guide on [Using FileZilla](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/){.external}. Please note that our guides cannot be used as a substitute for the publisher’s official documentation.

- **Using Cyberduck software.** You will need to download the software in advance, from the publisher’s website. You can learn how to use it by reading our guide on [Using Cyberduck](https://docs.ovh.com/gb/en/hosting/web_hosting_cyberduck_user_guide_on_mac/){.external}. Please note that our guides cannot be used as a substitute for the publisher’s official documentation.

- **Using the FTP Explorer interface.** To use this method, you will need to log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}. Once you have logged in, click `Hosting plans`{.action} in the services bar on the left-hand side, then choose the Web Hosting plan concerned. Go to the `FTP - SSH`{.action} tab, and click `FTP Explorer`{.action}.

Once you are ready to start making changes, continue to the next step.

![backupftp](images/backupftp-step3.png){.thumbnail}

#### Step 2: Connect to your backup.

To access the backup data you would like to restore, you will need to log in to your storage space via the interface or software you have selected. To do this, you will need to have the FTP username, its password and your FTP server’s host name.

You can find this information in the `FTP - SSH`{.action} tab of your Web Hosting plan. If you no longer have the FTP user password, please refer to our guide on instructions set out in our documentation on [Modifying a FTP user password](https://docs.ovh.com/gb/en/hosting/modify-ftp-user-password/){.external}.

![backupftp](images/backupftp-step4.png){.thumbnail}

You will need to enter your primary username (or FTP login) with a suffix determining the backup you want to connect to. Please use the information below to find out how to access the backup you want:

|Backup date|Suffix to add|Example of filled-in username|
|---|---|---|
|The same day, at 00:01 (UTC+1)|-snap0|ftpuser**-snap0**|
|One day ago, at 00:01 (UTC+1)|-snap1|ftpuser**-snap1**|
|Two days ago, at 00:01 (UTC+1)|-snap2|ftpuser**-snap2**|
|Last Sunday, at 01:00 (UTC+1)|-snap3|ftpuser**-snap3**|
|Sunday, 2 weeks ago, at 01:00 (UTC+1)|-snap4|ftpuser**-snap4**|

Please ensure that you replace ‘ftpuser’ with with your own primary FTP username in the above examples. Keep the suffix defining the backup date you would like to access.

The method for connecting to your storage space will differ depending on the interface or software you are using. Below, we have included an image showing how to connect via the FTP Explorer interface.

![backupftp](images/backupftp-step5.png){.thumbnail}

#### Step 3: Gather the files you want to restore.

Once you have connected, gather the files you want to restore. To do this, explore the content until you find them, then retrieve them. The method you need to use will differ depending on the software or interface you are using.

Before you move on to the next step, ensure that you have gathered all the files you would like to restore, then disconnect from your storage space.

#### Step 4: Restore the files.

Once you have got the files you need to restore, connect to your storage space again. This time, however, do not add the suffix to connect but write only the FTP username. By not entering this suffix, you will connect to the current content on your storage space, and not a backup from an earlier date.

Once you have connected, you can now restore the files you want. To do this, explore the content of your storage space until you find them, then download them, overwriting the old files.

## Go further

[Using FileZilla software with your Web Hosting plan](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/){.external}

[Retrieving the backup of a Web Hosting plan’s database](https://docs.ovh.com/gb/en/hosting/web_hosting_database_export_guide/)

Join our community of users on <https://community.ovh.com/en/>.
