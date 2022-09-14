---
title: \`Retrieving the backup of the FTP space on your Cloud Web hosting plan\`
slug: backup_ftp_cloud_web
section: Backups
order: 01
---

**Last updated 13th September 2022**

## Objective

Your Cloud Web hosting plan has a storage space you can use to host your websites or applications.

**Find out how to retrieve a backup of the FTP space in your Cloud Web hosting plan.**

> [!primary]
> 
> Backups offered by OVHcloud for Cloud Web hosting plans are non-contractual. They are available to supplement your own backup methods in urgent situations. We recommend regularly creating your own security backups, to avoid any potential data loss.
> 
> When you make a security backup for your site and use a database, also back up your database. Please refer to our guide on [retrieving a backup of your database](https://docs.ovh.com/ie/en/hosting/web_hosting_database_export_guide/).
> 

**Find out how to retrieve and restore an FTP backup of your Cloud Web hosting plan.**

## Requirements

- a Cloud Web [hosting plan](https://www.ovhcloud.com/en-ie/web-hosting/cloud-web-offer/){.external}
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}
- access to the contact email address linked to your NIC handle

## Instructions

A Cloud Web hosting plan has automatic backups triggered at the following frequencies:

- the same day, after 0:00.
- the day before, after 0:00.
- the day before yesterday, after 0:00am.
- the previous Sunday, after 01:00.

Only the backups mentioned above can be offered by OVHcloud, provided that your Cloud Web hosting already existed on the dates indicated, and subject to the infrastructure’s availability at the time the backup was requested.

### Retrieve a backup

Unlike OVHcloud shared hosting, you cannot restore the FTP space in one click from the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

A link to download the backup is generated, then sent by email to the email address associated with the Cloud Web hosting plan’s admin NIC handle.

#### Step 1 - Generate the recovery link sent by email

To generate the recovery link, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, go to the `Web Cloud`{.action} section, click `Hosting`{.action}, then click on the Cloud Web concerned. 

Select the `FTP - SSH`{.action} tab and click the `Generate a backup`{.action} button on the right.

![backupftpcw](images/GenerateABackup.png){.thumbnail}

In the window that opens, select one of the available backups, then click `Next`{.action}.

![backupftpcw](images/GenerateABackup2.png){.thumbnail}

A second window will appear, notifying you that the link to retrieve the backup file will be sent to you by email, and that no automatic restore on your Cloud Web hosting plan will be done by OVHcloud.

![backupftpcw](images/GenerateABackup3.png){.thumbnail}

Click `Confirm`{.action} to confirm your request.

If you have successfully generated the backup, the following message will appear in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}:

![backupftpcw](images/BackupInProgress.png){.thumbnail}

The backup takes between 10 and 15 minutes to be generated.

#### Step 2 - Retrieve the backup

Once you have generated the backup, you will receive an email via the email address associated with the admin ID for your Cloud Web hosting plan.<br>
This email contains a download link **valid for 9 days** from receipt of the email:

![backupftpcw](images/mailBackup.png){.thumbnail}

The downloaded file is in the format *.tar.gz*.

### Restore your backup

Once you have downloaded your files, you can [connect to your FTP](https://docs.ovh.com/ie/en/hosting/log-in-to-storage-ftp-web-hosting/) space using FTP software such as [Filezilla](https://docs.ovh.com/ie/en/hosting/web_hosting_filezilla_user_guide/), then replace the files you want with the ones you have recovered.

> [!primary]
>
> Please use the ports listed in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} for SFTP and SSH connections, as port 22 will not work for your Cloud Web hosting.
>

## Go further 

[Logging in to your Web Hosting plan’s storage space](https://docs.ovh.com/ie/en/hosting/log-in-to-storage-ftp-web-hosting/){.external}

[Logging in using the Filezilla software](https://docs.ovh.com/ie/en/hosting/web_hosting_filezilla_user_guide/)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ie/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ie/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.