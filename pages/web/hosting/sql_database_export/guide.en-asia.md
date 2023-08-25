---
title: 'Retrieving the backup of a Web Hosting plan’s database'
excerpt: 'Find out how to retrieve a database backup from your OVHcloud Web Hosting plan'
updated: 2023-08-22
---

## Objective

Databases are used by most websites and **C**ontent **M**anagement **S**ystems (**CMS**) such as *WordPress*, *Joomla!*, *PrestaShop* or *Drupal*. They are usually used to store dynamic elements, such as comments, users/passwords, stock status if you have an e-commerce website, or even articles. For various reasons, you may need to back up your database in order to retrieve its contents.

**Find out how to retrieve a database backup from an OVHcloud Web Hosting plan.**

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/asia/web-hosting/){.external}
- a database created as part of an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/asia/web-hosting/){.external}
- Depending on which backup method you use, you must be able to administer the Web Hosting plan from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}, or have the information you need in order to connect to the database.

## Instructions

Before you begin, define the method you will follow to retrieve the backup of your database. There are several ways to do this:

- **Use the OVHcloud backup tool**: this solution allows you to retrieve backups of your databases from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}. This method does not require any particular technical skills.

- **Carry out the backup from the phpMyAdmin web interface**: this method requires you to log in to the *phpMyAdmin* interface to carry out the manipulation. You will need to be familiar with the *phpMyAdmin* interface.

- **Use a script that performs the backup**: this method involves creating a script saved on your OVHcloud Web Hosting plan, which will perform the backup. Specific knowledge is required for this creation.

- **Backing up from an SSH command** : this method involves connecting to your FTP storage space via the SSH protocol, then using commands to interact with it. More advanced knowledge and a specific [OVHcloud Web Hosting](https://www.ovhcloud.com/asia/web-hosting/){.external} solution are required to use this type of access.

> [!success]
>
> If you are backing up your database because it is full/full, please read our tutorial “[What should I do when my database is full?](/pages/web/hosting/sql_overquota_database)”.
>

Some of the methods above are not inherent to an OVHcloud interface. You will therefore need to rely on your own knowledge to carry out this procedure. Some information is provided below, but it is not a substitute for the assistance provided by a webmaster if you have difficulties performing it alone.

We recommend reading this guide, and focusing on the backup method you wish to use.

> [!warning]
>
> OVHcloud provides services that you are responsible for configuring, managing and managing. It is up to you to ensure that it works properly.
>
> We have provided you with this guide in order to help you with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/directory/) if you experience any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this guide.
>

### Retrieve a backup via the OVHcloud tool

To access the OVHcloud backup tool, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external} then go to the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action} , then choose the name of the web hosting plan concerned. Go to the `Databases`{.action} tab.

The table that opens will contain all of the databases created as part of your Web Hosting plan. You can now choose between creating a new backup, or recovering an existing one, in two separate steps.

#### Step 1: Create a new backup of the database

In the `Databases`{.action} tab, click the `...`{.action} button to the right of the database you want to back up, then `Create a backup`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

In the window that pops up, select the date you want to back up, then click the `Next`{.action} button. Check that the information in the summary is correct, then click `Confirm`{.action} to begin the procedure.

Wait for the backup to complete. Once it is available, you can retrieve it.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### Step 2: Retrieve a backup of the database

In the `Databases`{.action} tab, click the `...`{.action} button to the right of the database you want to back up, then `Restore a backup`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

The table that opens contains all of the available backups for the selected database. You can view the exact date on which backups were taken, as well as the date on which they will be deleted from the OVHcloud tool.

To download a backup, click on the `...`{.action} button to the right of the backup you want to retrieve, then on `Download the backup`{.action}. A window will pop up, prompting you to save it to your machine. Accept, then wait for the backup to be downloaded.

![databasedump](images/database-dump-step5.png){.thumbnail}

### Retrieve a backup via the phpMyAdmin web interface

To do this, log in to *phpMyAdmin*. To find the access link for this interface, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external} , then go to the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Go to the `Databases`{.action} tab.

The table that opens will contain all of the databases created as part of your Web Hosting plan. In this window, click the `...`{.action} button to the right of the database concerned, then `Go to phpMyAdmin`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

Once you have reached the interface for connecting to *phpMyAdmin*, enter the information for the database, then log in. Once you have logged in, go to the `Export`{.action} tab, where you can choose from two export methods:

- **Quick Method**: You can set the export format for the backup. The most common format is SQL, but other formats are available to suit your needs.
- **Custom method**: You can define the backup export settings in detail.

> [!warning]
>
> Since the *phpMyAdmin* interface was not created by OVHcloud, you will need to rely on your own knowledge to carry out the manipulation. We recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/directory/) and/or getting in touch with the interface’s publisher if you experience any difficulties. We will not be able to assist you with this.
>

### Retrieve a backup using a script

There are several steps to this process. Make sure you have the information you need to connect to the database you want to back up: the user name, password, database name, and server address.

> [!warning]
>
> This solution requires programming skills. You will find below some information on how to proceed. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/directory/) if you experience any difficulties. We will not be able to assist you with this.
>

#### Step 1: Create the backup script

The first step is to create the script that will carry out the database backup. Below is an example of a script that can help you with this process. However, if you encounter any difficulties, this example alone will not replace the support that a webmaster can provide.

```php
<?
system("mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql");
?>
```

Please ensure that you replace the generic information in this script with the information for the database concerned, using the elements below. Once the script is complete, we recommend naming it backup.php, for example.

|Information|To replace with|
|---|---|
|server_address|The server address of the database concerned.|
|user_name|The user name that has access to the database.|
|user_password|The password for the user name you entered earlier.|
|name_of_database|The name of the database concerned.|
|backup_file_name|The name that the backup file will have after it runs.|

#### Step 2: Download the script to the FTP storage space

Once the backup script has been created, you will need to upload it to your web hosting plan’s FTP storage space. To do this, please refer to the information described in step 2 of the guide titled [Log in to your storage space](/pages/web/hosting/hosting_how_to_get_my_website_online).

To complete the following steps, download the script to the folder that contains the website that uses the database. **Be particularly careful about the name of the backup script file.** Do not overwrite an existing file with the same name on the FTP storage space when you upload the script. If you see a warning message like this, change the name of the newly created script and try downloading it again.

#### Step 3: Call the script

As soon as the script is uploaded to the FTP storage space, initiate the code in it by calling the script.

To do this, go to the full URL of the script from your web browser (e.g. mypersonaldomain.ovh/backup.php if you have named your script “backup.php”). If the information entered in the script is correct, the backup is initiated. Wait a few moments for it to run. If it is not, check the information entered in the script and try the operation again.

#### Step 4: Retrieve the backup from the FTP storage space

Once the backup is complete, retrieve it from the folder where the backup script was downloaded. The database backup must have the name that was previously defined in the script. Now you just need to retrieve the backup from your own device.

Before you finish, we strongly advise deleting the backup file and the script from the directory where they are located.

> [!primary]
>
> Using a backup script with our scheduled job system (“CRON” jobs) can allow you to automate backups at the frequency of your choice. Find out more about scheduled tasks in our guide: “[Setting up a scheduled task (CRON) on your web hosting plan](/pages/web/hosting/cron_tasks)”.
>

### Retrieve a backup via an SSH command

To do this, you will need to use commands from a terminal to interact with your FTP storage space.

> [!warning]
>
> More advanced knowledge is required to use this type of access. Below you will find some information on how to proceed. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/directory/) if you encounter any difficulties. We will not be able to assist you with this.
>

Once you have logged in to your FTP storage space via an SSH connection, use a command to back up the database. You will find below one that can help you with this process. Bear in mind that the backup will be made in the current directory when you send the command in your terminal.

```sh
mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql
```

Replace the generic information for this command with the information for the database concerned. Once the backup is complete, you just need to retrieve it from your own machine.


|Information|To replace with|
|---|---|
|server_address|The server address of the database concerned.|
|user_name|The user name that has access to the database.|
|user_password|The password for the user name you entered earlier.|
|name_of_database|The name of the database concerned.|
|backup_file_name|The name that the backup file will have after it runs.|

## Go further <a name="go-further"></a>

[Tutorial - What should I do when my database is full?](/pages/web/hosting/sql_overquota_database)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/asia/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/asia/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
