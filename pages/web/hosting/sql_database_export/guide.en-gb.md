---
title: 'Retrieving the backup of a Web Hosting plan’s database'
slug: web_hosting_database_export_guide
excerpt: 'Find out how to retrieve a database backup from your OVH Web Hosting plan'
section: Databases
order: 3
---

**Last updated 19th May 2018**

## Objective

Databases are used in virtually all modern content management systems (CMS), such as WordPress or Joomla!, to store dynamic elements like comments or articles. For various reasons, you may find that you need to back up your database in order to retrieve its contents.

**Find out how to retrieve a database backup from your OVH Web Hosting plan.**

## Requirements

- an [OVH Web Hosting plan](https://www.ovh.co.uk/web-hosting/){.external}
- a database created as part of an [OVH Web Hosting plan](https://www.ovh.co.uk/web-hosting/){.external}
- Depending on which backup method you use, you must be able to administer the Web Hosting plan from your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, or have the information you need in order to connect to the database.

## Instructions

Before you begin, you must choose which method you are going to use to retrieve the database backup. There are several methods you can use, depending on your level of technical knowledge.

- **Use the OVH backup tool.** This method lets you retrieve backups of your databases via the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}. This is the most accessible solution, as it does not require any specific technical knowledge.

- **Carry out the backup from the phpMyAdmin web interface.** This method involves logging in to the phpMyAdmin interface in order to carry out the procedure. If you want to use this method, you will need a good command of the interface.

- **Use a script to carry out the backup.** This method involves creating a script that is saved on your OVH Web Hosting plan, which will carry out the backup. Writing this script requires a specific level of technical knowledge.

- **Carry out the backup from an SSH command line.** This method involves using the SSH protocol to log in to your storage space, then using commands to interact with it. More advanced knowledge and a specific [OVH Web Hosting plan](https://www.ovh.co.uk/web-hosting/){.external} are required to use this method.

Some of the methods listed above are not included in the OVH interface. You will therefore need to rely on your own knowledge to carry out these methods. We have set out some general information below, but this is not a substitute for the assistance of a webmaster. 

We recommend reading this guide, and focusing on the backup method you wish to use.

> [!warning]
>
> OVH provides services which you are responsible for with regard to their configuration and management. You are responsible for ensuring that they work properly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

### Retrieve a backup using the OVH tool.

To access the OVH backup tool, log in to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, click `Web Hosting`{.action} in the services bar on the left-hand side, then select the name of the plan concerned. Next, go to the `Databases`{.action} tab.

The table shown contains all the databases created as part of your Web Hosting plan. You can now choose to create a new backup and/or retrieve an existing backup, in two separate steps.

#### Step 1: Create a new backup of the database.

In the `Databases`{.action} tab, click the three dots to the right of the database you want to back up, then `Create backup`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

In the pop-up window, select the desired date for the backup, then click the `Next`{.action} button. Make sure that the information in the summary is correct, then click `Confirm`{.action} to begin the procedure.

You will need to wait until the backup is complete. As soon as it becomes available, you will be able to retrieve it.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### Step 2: Retrieve a backup of the database.

In the `Databases`{.action} tab, click the three dots to the right of the database you want to restore a backup of, then `Retrieve a backup`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

The table shown contains all available backups for the database you have selected. You can view the exact date of each backup, and the date on which they will be deleted from the OVH tool.

To download a backup, click the three dots to the right of the backup you want to retrieve, then click `Download the backup`{.action}. A pop-up window will appear, prompting you to save the backup to your machine. Accept, then wait for the backup to finish downloading.

![databasedump](images/database-dump-step5.png){.thumbnail}

### Retrieve a backup via the phpMyAdmin web interface

To use this method, you will need to log in to phpMyAdmin. To get the access link for this interface, log in to your [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, click `Web Hosting`{.action} in the services bar on the left-hand side, then select the name of the plan concerned. Next, go to the `Databases`{.action} tab.

The table shown contains all the databases created as part of your Web Hosting plan. In this table, click the three dots to the right of the database concerned, then `Go to phpMyAdmin`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

Once you are on the phpMyAdmin page, enter the database information, use the drop-down menu to select whether you want the data from the current version of the database or from a previous backup to be displayed, then log in. Once you have logged in, go to the `Export`{.action} tab, where you can choose between two export methods:

- **Quick method.** You can define the export format for the backup. The most common format is SQL, but other formats are available if required.

- **Custom method.** You can define the export and backup settings in detail.

> [!warning]
>
> Since the phpMyAdmin interface was not developed by OVH, you will have to rely on your own knowledge to carry out this procedure. We recommend contacting a specialist provider and/or getting in touch with the interface’s publisher if you encounter any difficulties. We will not be able to assist you with this ourselves.
>

### Retrieve a backup using a script

There are several stages to this procedure. Make sure you are in possession of the information you need to connect to the database that you want to back up. You will need a username, the associated password, the database name, and the server address.

> [!warning]
>
> This solution is highly technical, and requires programming knowledge. We have provided general information below on how to proceed. Nevertheless, we recommend that you contact a specialist provider if you encounter any difficulties. We will not be able to assist you with this ourselves.
>

#### Step 1: Create the backup script.

The first step is to create the script that will allow you to back up your database. Below is an example of a script that can help you with this process, although it is not a substitute for the assistance of a webmaster.

```php
<?
system("mysqldump --host=server_address --user=user_name --password=user_password database_name > backup_filename.sql");
?>
```

Make sure you replace the generic information given in this script (i.e. ‘server_address’, ‘user_name’ etc.) with the actual information for the database concerned, using the elements below. Once the script is complete, we recommend naming it “backup.php” (or something similar).

|Information|Replace with|
|---|---|
|server_address|The server address for the database concerned.|
|user_name|The name of the user with access permissions for the database.|
|user_password|The password for the username entered above.|
|database_name|The name of the database in question.|
|backup_file_name|The name that will be given to the backup file after it is created.|

> [!primary]
>
> You can create a backup from a previous date by adding a port to your script. To create a backup going back to yesterday, use port ‘3307’. For a backup going back seven days, use port ‘3317’. 
> 
> Please note that if you use port ‘3306’, you will create a backup of the data currently present in the database.
>

#### Step 2: Upload the script to the storage space.

Once you have finished creating the backup script, you will need to upload it to the storage space on your Web Hosting plan. To do this, you will need to log in to your Web Hosting plan. If you do not know how to do this, please refer to the instructions in step 2 of our guide to publishing a website on your Web Hosting plan:  “[Log in to your storage space](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/#2-log-in-to-your-storage-space){.external}”.

In order to carry out the following steps, you will need to upload the script to the “www” folder. **We recommend taking special care when you name the backup script file.** Make sure you do not overwrite an existing file with the same name in your storage space when you upload the script. If a warning message appears for this, change the name of the script you have just created and try to upload it again.

#### Step 3: Call the script.

Now that the script has been uploaded to your storage space, all that remains is to execute the code in it. To do this, you need to call the script.

To do this, you will need to go to the full URL of the script from your web browser (e.g. mypersonaldomain.ovh/backup.php, if you have saved your script as “backup.php”). If the information entered in the script is correct, the backup will launch. The script will take a few moments to finish running. If nothing happens, check the information in the script and try launching the procedure again.

#### Step 4: Retrieve the backup from the storage space.

Once the backup is complete, you can retrieve it from the folder to which you uploaded the backup script. The database backup will have been given the name that was previously defined for it in the script. All you need to do now is save the backup to your own machine.

As a final step, we highly recommend deleting the backup file and the script from the “www” directory.

> [!primary]
>
> Using a backup script and scheduled tasks (known as ‘CRON’ jobs) is one way to organise automatic backups at an interval of your choice. You can find out more about scheduled tasks in the following guide: “[Setting up scheduled tasks (CRON jobs) on your Web Hosting plan](https://docs.ovh.com/gb/en/hosting/hosting_automated_taskscron/){.external}”.
>

### Retrieve a backup using an SSH command

To follow this method, you will need to use commands from a terminal to interact with your storage space.

> [!warning]
>
> You will need more advanced technical knowledge to use this access method. Below you will find some information about how to proceed. Nevertheless, we recommend contacting a specialist provider if you encounter any difficulties. We will not be able to assist you with this ourselves.
>

Once you have logged in to your storage space via an SSH connection, you will need to run a command that will create a backup of your database. Below, we have provided an example of such a command, which you may find useful. Bear in mind that the backup will be created in the active directory when you send the command in your terminal.

```sh
mysqldump --host=server_address -- user=user_name --password=user_password database_name > backup_filename.sql
```

Make sure you replace the generic information in this command (e.g. ‘user_name’, ‘user_password’ etc.) with the actual information for the database concerned. Once the backup is complete, you can save it to your own machine.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
