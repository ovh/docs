---
title: Web hosting database export guide
excerpt: This guide explains different ways of exporting your database from our servers
slug: web_hosting_database_export_guide
legacy_guide_number: g1394
---


## Prerequisites
You must have:


- Access to your customer account.

- Your SQL database username and password as well as the sql host which will let you connect to it.
There is a guide on getting your SQL credentials:[]({legacy}1374)


This guide contains different methods for doing your database exports.

![](images/img_1833.jpg){.thumbnail}


## From the control panel
You can get your database copy from the control panel. 

This is the easiest and fastest way of exporting your database.

First you have to connect to your url="https://www.ovh.com/manager/web"]control panel[/url].

Once you are connected, select the hosting package in question, under the Hostings section.

## Step 1
In the "Hostings" section select the hosting package in question and then go to the "SQL" section.

Depending on the size of your database, creating a backup may take more or less time.

![](images/img_2698.jpg){.thumbnail}

## Step 2
Click on the "cogwheel" to the right of the database in question then create a backup.

The list of databases is displayed in the table (see screen below).

![](images/img_2699.jpg){.thumbnail}

## Step 3
You have to select the backup date. Now, Yesterday, Last week.

There are three backup dates: 


- Now: Copy of the database at the time of the transaction.

- Yesterday: Copy of the database in the state that it was in last night around 3:00am.

- Last week: Copy of the database in the state it was in seven days previously at around 3:00 am.


Click "Next" then "Confirm"

Then you must wait while the backup is being created. When finished, you will receive a link by email from which you can download the backup file (dump).

This is an example of the subject of the message you will receive:



```
[OVH-SQL] testovh.ovh - Database dump: testovhmod1
```



The  database backup will be available in a remote server and you can access it from the link in your email for 30 days.

The downloaded file is compressed. Unzip it is before importing it in to another database.

![](images/img_2700.jpg){.thumbnail}


## From PhpMyAdmin
If you want to export the database from PhpMyAdmin.

First you have to log on to [the PhpMyAdmin interface](https://phpmyadmin.ovh.net/).

## Quick export
Once logged on, select your database (see blue box in the screen below).

Then go to "Export".

Select the quick method. This method only allows you to choose the format for your database import. 

For a more complete export configuration, see the following section: "Custom export".

![](images/img_1963.jpg){.thumbnail}

## Custom export
Once you have connected, in the left column select the database you want to export.

Then in the top bar select the "Export" tab.

Select the custom method. Several options are displayed. Here are details of the most important:

Table(s): 

You can select all tables or only part of them. 

This option can be useful for bulky databases, allowing you to export and then import the database several times.

Exit:

Here you can specify whether you want to generate the dump in an external file or directly display the query result and then copy it.

Format:

Specify the database export format. We recommend you keep "SQL".

Specific format options:

You can select what you want to export from the table: only the structures, only data or both. We recommend you select "structure and data". 

Data Creation Options:

In this section select "none of the above" to avoid the error associated with the "max_allowed_packet".

To run the export, click "Continue".

![](images/img_1964.jpg){.thumbnail}

## .sql file backup
You will be given the choice of opening the file or saving it to your computer.

![](images/img_1848.jpg){.thumbnail}

## Previous backup

-  PhpMyAdmin allows you to retrieve a backup of the day and the week before by a drop-down menu.




## Using a script
The advantage of this solution is that it allows you to export large backups and it is accessible for all shared hosting packages.

You can create scripts in a text file and then add the extension for the language used.

In the scripts below, replace:


- database_name.sql with the file name.

- sql_server with the name of the sql server which your database was created on.

- database_name with the name of your database.

- pass_word with the password connected to your database.

Your backup file must first be uploaded to your hosting package via FTP.

In php (backupbase.php):
The code to enter and complete:



```
<?
echo "Your database is backing up.......";
system("mysqldump --host=server_sql --user=database_name --password=database_password > database_name.sql");
echo "Done. You can recover the database with FTP";
?>
```


In perl (backupbase.cgi):
The code to enter and complete:


```
#!/usr/bin/perl
print "Your database is backing up.......";
system("mysqldump --host=server_sql --user=database_name --password=database_password > database_name.sql");
print "Done. You can recover the database with FTP";
```


- FTP upload the script you created to the www folder of your hosting package and query it with your browser from http://your_domain.com/backupdb.php


Replace your_domain.com with your domain name and backupbd.php with the file name. 

This command will generate a database.sqlfile in the folder where you placed the script.

In that file you will find all SQL instructions in order to recreate the database in the state it was in at the time of backup, with all your data.

- Note 1: If ever your database is too large, you can do a dump* table by table by adding "--tables table_name" at the end, to get this command:

mysqldump --host=server_sql --user=name_of_the_database --password=password name_of_the_database --tables table_name> database_name.sql


- Note 2: You can also compress this file to better download it to your computer (FTP or Web).

To compress the file, run the gzip command which will create the file by the .sql.gz extension:
system ("gzip base_name.sql");


## Via an SSH command

## Prerequisites

- To connect to your hosting space, you need the username and FTP password. There is a guide available on getting FTP credentials:[]({legacy}1374)

- You must have a hosting package that enables SSH access ([See our hosting solutions](https://www.ovh.co.uk/web-hosting/))


There is a guide on SSH login below: 


- [SSH login/blue]](https://www.ovh.com/us/g1962.web_hosting_ssh_on_web_hosting_plans)



## Exporting the database by SSH
Connect to your hosting package in SSH.

Find the folder where you want to store the backup and run the following command:

The code to enter and complete:


```
mysqldump --host=server_sql --user=database_name --password=database_password > database_name.sql
```


An example of the complete code:


```
mysqldump --host=sql3 --user=testbackup --password=RtPgDsmL testbackup > testbackup.sql
```




## From Private SQL
There is a guide available on importing a database:


- []({legacy}2023)




## Backup
If you want to retrieve a copy of a database from an earlier date using a script, you must specify a specific port number:

Current copy: 3306
Yesterday: 3307
Last week: 3317

Example code you can use:

PHP:

```
system("mysqldump --host=server_sql --user=database_name --password=password --port=3317 database_name > database_name.sql ");
```


This backup system is available for databases with the same version or greater than MySQL 5.


## Errors 'max_allowed_packet' when exporting the dump
When performing the database dump, you may want to customise the SQL database export via phpMyAdmin.

The idea is to prevent all the contents of a table being added via a single "INSERT INTO" and avoid errors related to the server variable "max_allowed_packet server" that occur when importing the dump, when the content of the table is too large. 

For example, if Table A contains 500 lines, instead of having a single "INSERT INTO" for the 500 lines, you get 500 "INSERT INTOs".

Via PhpMyAdmin:

When exporting from phpMyAdmin, check the "None of the above" data creation option to avoid getting the "Max_Allowed_Packet" error. 

In SSH:

You have to use the option -- skip-extended-insert.

The --extended-insert option, included in the --opt option (Enabled by default), generates a single INSERT INTO for a whole table, you therefore have to disable this option using this code:


```
--skip-extended-insert
```



![](images/img_1965.jpg){.thumbnail}


## Glossary
dump*: your website database's backup file.

