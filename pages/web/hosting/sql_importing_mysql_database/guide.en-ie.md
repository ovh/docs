---
title: 'Web hosting: guide to importing a MySql database'
excerpt: Guide to importing a MySql database
id: '1393'
slug: web_hosting_guide_to_importing_a_mysql_database
legacy_guide_number: g1393
---

## Prerequisites
You must have:

- The database backup file, called a dump*, obtained when the database was backed up (We have a guide on SQL database backups: [https://docs.ovh.com/ie/en/hosting/web_hosting_database_export_guide/](https://docs.ovh.com/ie/en/hosting/web_hosting_database_export_guide/). 

Database backups are usually take a .sql. format. 
If your database was created with a provider other than OVH, please contact them for more information about recovering a database via their service.

- You also need your username the password, and the database Sql host which will let you connect to the database. 

![](images/img_1802.jpg){.thumbnail}

## From your OVH customer account
The easiest and fastest way of importing your database is to go to your [OVH customer account](https://www.ovh.com/manager/).
The advantage of this method is that there is no size limit for importing your backup file. 

Once logged on to the [customer account](https://www.ovh.com/manager/), select your hosting package in the left-hand side, then go to the Databases tab.

![](images/img_4125.jpg){.thumbnail}
To the right of the database that you want to import your backup into, click on the cogwheel and select "Import a file". 

Then follow the steps in the control panel to import your SQL backup.

![](images/img_4126.jpg){.thumbnail}

## From PhpMyAdmin for MySQL
You have to connect to the database via PhpMyAdmin.

Follow the link to log on to [OVH PhpMyAdmin](https://phpmyadmin.ovh.net)

- Once you are logged on to PhpMyAdmin, select your database by clicking its name(see blue box on the top left of the screen shot)

- Then click on "Import".

- Select your back up file by clicking "Browse" (please note the file cannot exceed 16 MB).

- Click "Run" to start the import. 

If you recover a database backup from your customer account, be sure to unzip the file before importing it.

![](images/img_1962.jpg){.thumbnail}

## Reminder:
The file cannot exceed 16 MB.

## From a script on your hosting package
You can create scripts from a txt file. You must assign them the extension which corresponds to the language used.

In the scripts below, replace:

- database_name.sql with the file name.

- sql_server with the name of the sql server on which your database was created.

- database_name with the name of your database.

- pass_word with the password connected to your database.

Your backup file must first be uploaded to your hosting package via FTP.

## In PHP (backupbase.php):
The code to enter and complete:

```
<?php
echo "Your database is backing up.......
<br>";
system("cat database_name.sql | mysql --host=server_sql --user=database_name --password=database_password"); 
echo "Done. Your database is in place on your hosting package";
?>
```

## In perl (importbase.cgi):
The code to enter and complete: 

```
#!/usr/bin/perl

print "Your database is backing up.......
<br>";
system ("cat database_name.sql | mysql --host=server_sql
--user=database_name --password=database_password");
print "It's done. Your database is now in place on your hosting package."
```

- FTP upload the script you created to the www folder of your hosting package along with the dump* and query your script with the browser via this URL: http://your_domain.com/importbase.php

Replace your_domain.com with your domain name and importbase.php with the file name. 

Your backup file is compressed?

If your dump* is compressed, i.e. in the .sql.gz format, you just have to type this command at the start of the script:

```
system("gunzip database_name.sql.gz");
```

Example:

## In PHP: compressed dump + db backup
An example of the complete code:

```
<?php
echo "File decompression.....
<br>";
system("gunzip testbackup.sql.gz");
echo "Your database is backing up......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
echo "It's done. Your database is in place on your hosting package.";
?>
```

## In perl: compressed dump and db backup
Complete code example:

```
#!/usr/bin/perl

print "File decompression.....
<br>";
system("gunzip testbackup.sql.gz");
print "Your database is backing up.......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
print "It's done. Your database is in place on your hosting package.";
```

## From a command via SSH

## Prerequisites

- Get your FTP username and password so you can log on to your web hosting package.

- Have a solution you can access in SSH ([See our hosting solutions](https://www.ovh.co.uk/web-hosting/))

There is a guide on SSH: [https://docs.ovh.com/ie/en/hosting/web_hosting_ssh_on_web_hosting_packages/](https://docs.ovh.com/ie/en/hosting/web_hosting_ssh_on_web_hosting_packages/)

## Importing the database via SSH
Connect to your hosting package in SSH.

Find the folder where you have placed the file to be imported, then type this command:

The code to enter and complete:

```
cat database_name.sql | mysql --host=server_sql
--user=database_name --password=database_password
```

An example of the complete code:

```
cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport
```

## Database name error
You might need to add this line to the top of your backup file:

```
use your_database_name;
```

Where database_name refers to the name of the database where you will import this data.

## Glossary
dump*: your website database's backup file.