---
title: 'Web hosting: how to get my website online'
description: 'Web hosting: how to get my website online'
slug: web_hosting_how_to_get_my_website_online
legacy_guide_number: g1374
---


## Overview
A website can only work and display properly if it's placed in the correct directory. The general rule is that your website files should be placed in your web hosting package's "www" directory. To do this, you need to transfer your files to your web hosting package with software that uses File Transfer Protocol (FTP). We will use [FileZilla](http://filezilla-project.org/), a free solution.


### Get your FTP login details

When you signed up for an OVH hosting package you will have received an email after your solution was installed.
This email contains the necessary FTP credentials. 
Depending on your solution and the domain connected to your hosting package, the subject of the email should look like this:


```
/* Personal hosting package ordered for the "your-domain.tld" */

[OVH-perso] your-domain.tld installed
```


Content:


```
[...]
YOUR FTP CODES
-------------

These codes will enable you to upload your website (Please note: Your data must be uploaded to the www directory)

FTP server: ftp.your-domaine.tld or ftp.cluster0XX.ovh.net
User login: ftplogin
Password: mDpFtP

[...]
```


You will need the username and password to log on. 

If the FTP password has changed since the solution was installed, the password in this email will be of no use. This means that you have changed it in the customer account. The user login cannot be changed, make sure your keep it safe.


### In the customer account
Once you are logged in to your customer account, select your domain name in the "Hostings" section. 
Click on the "FTP" tab. 
Click the cogwheel to the right of your login then "change the password".
You can change your password via the interface that appears.
Enter the new password and confirm. Your password must have between 8 and 12 alphanumeric characters.


You will need to wait a few minutes for the change to take effect.


### Use FileZilla
There is a guide available that explains how to use FileZilla:[]({legacy}1380)

For this you will need access to:

- your website files
- the database backup file (if necessary)

Your FTP login details:

- host: ftp.your-domain.tld or ftp.cluster0XX.ovh.net or newftp.cluster0XX.ovh.net
- login (username): your FTP login
- password: the FTP password (see above paragraphs)
- port: 21 (to connect via SSH: 22 - from the Professional plan upwards)



![](images/img_1858.jpg){.thumbnail}


## Get your FTP login details

### Via the customer account
From the customer account, you can automatically restore an FTP backup of the files on your Web Hosting plan from an earlier date. 

To do this, select your domain name in the customer account in the Hostings section..

Go to "FTP" then "Restoring a backup".

![](images/img_2690.jpg){.thumbnail}
You can then choose the restoration date.

Please note that restored data will overwrite the current data on your hosting package.

Click "Next" to confirm the operation. It will take a few hours for the files to be restored.


- All of the FTP files will be restored with this system, which is not the case with FileZilla backup restore.



### Via FileZilla?
A guide on setting up and using FileZilla is available to you:[]({legacy}1593)


## Databases

### Overview
You can store data on your website or your applications with a database.

A database lets you store different types of data: website content, URLs and information on your website visitors.

You can create either a MySQL, PostgreSQL or SQL Server (available with shared Windows hosting) database on your web hosting package.


### Create
When you install your web hosting package, the database that comes with it is not automatically installed.
You will therefore not get this information via email.
First you have to create your database.
Log on to your customer account, select the domain name in question in the Hostings section. 

Then in the "SQL" menu go to "Create a database"

![](images/img_2743.jpg){.thumbnail}

Select the database engine: “Mysql or PostgreSQL.” Select the type of database then "Next"

You will then be asked for a username and password. 

An email with the credentials for the database will be sent to you. 

A few minutes later you will get an email with the information related to your database.

![](images/img_2694.jpg){.thumbnail}


### Get my SQL credentials

- Please note your database is not automatically created when you install your hosting package.


An email with database credentials will be sent to you after you have created it.
You can find this email again in your customer account. Once you are logged on, click on the Support menu then Email history.

![](images/img_2747.jpg){.thumbnail}

The subject of the email will look something like this:


```
[MySQL] Database_name_ MySQL database
```


Content:


```
[...]

Your MySQL database has been installed on our server.

Here are the technical details

MySQL:
Server: mysql51-66.pro
User: Database_name
Database name: Database_name
Password: ************

[...]
```

You can change the password for your database in the customer account.


- Please note: changing your database password may cause your website or services that use the database to go down.


If you wish to change your password, log in to the control panel. Select your domain name, then go to: "SQL" -> click on the cogwheel to the right of your database then: "Change the password".

Here you can change your database password.

Consider updating your configuration file to ensure that it connects to the database with the new password (if there was already a website on your hosting package when you changed the password).


### Log into PhpMyAdmin
Firstly, you will need to log in to [the PhpMyAdmin interface](https://phpmyadmin.ovh.net/).

You need to fill in the required fields:


- Server: user.mysql.db (as stated in the database creation email)

- Username: provided in the database creation email

- Password: your database password

- Version: you can choose to log in to the current database, or to a snapshot from 1 or 7 days ago


Fill in the requested fields and then click "Go" to log in.

![](images/img_1960.jpg){.thumbnail}

- For MySQL4 databases, please click on the link at the bottom of the login interface.




### Export the database
How do I export my SQL database? How can I back up my database?

A guide on exporting databases is available to you:[]({legacy}1394)

![](images/img_1932.jpg){.thumbnail}


### Import the database
How do I import the backup of my MySQL databases? What are the different ways of doing this?

A guide on exporting databases is available to you:[]({legacy}1394)

![](images/img_1933.jpg){.thumbnail}


### Repare - Optimise - Analyse
You can repare, optimise and analyse your database tables.

For this, log in to your database from the [PhpMyAdmin interface](https://phpmyadmin.ovh.net/), and select the table you want to work with.

Then click on "Operations" in the top right-hand corner.

You can now carry out various operations on the table, in the table maintenance section.

![](images/img_1961.jpg){.thumbnail}


### Use Private SQL
Want to know how to use Pirvate SQL, and how to import and export data?

A guide on using Private SQL is available to you:[Private SQL user guide](http://guides.ovh.com/GuideSqlPrive)

![](images/img_1866.jpg){.thumbnail}

## 1-click Modules

### Setup guide
Do you need to set up your website quickly but have limited web knowledge?

A guide on installing 1-click modules at OVH is available to you:[]({legacy}1402)

![](images/img_1930.jpg){.thumbnail}


### Install WordPress for the first time

WordPress is a content management system (CMS) which lets you easily create and manage a website or blog. Free and open source, WordPress can be customised with themes and add-ons.


- Blog & Site

A guide on manually installing WordPress is available to you:[]({legacy}1375)


![](images/img_1873.jpg){.thumbnail}


### Install Joomla! for the first time

Joomla is a content management system (CMS). It's free and open-source, and can be personalised with themes and add-ons.
This CMS is a web application that lets you easily manage a website or dynamic intranet site.


- Website

A guide on manually installing Joomla is available to you:[]({legacy}1375)


![](images/img_1874.jpg){.thumbnail}


### Install PrestaShop for the first time

PrestaShop is an open-source web application that lets you set up an e-commerce website to sell goods online.


- Online shop

A guide on manually installing PrestaShop is available to you:[]({legacy}1375)


![](images/img_1862.jpg){.thumbnail}

## Useful information

### .ovhconfig file
Do you want to update your version of PHP or activate phpfpm?

A guide on using and configuring .ovhconfig is available to you:


- []({legacy}1175)

- []({legacy}1207)



![](images/img_1867.jpg){.thumbnail}


### Libraries available on web hosting packages
Information on available libraries:

|Library|Availability| 
|---|---|
|ffmepg|not activated| 
|GD|activated| 
|imagemagik|activated| 
|zend (opcache)|activated| 
|PDO|activated| 
|Zip - Gzip|activated|



![](images/img_1867.jpg){.thumbnail}
Please note: the following options are no longer active (they're no longer supported by PHP):


- register_globals
- magic_quotes_gpc




### Optimise your website's performance
Do you want to find out why your website is slow? Or do you just want to improve your website's performance?

A guide on performing a diagnostic on your website's latency and optimising performance is available to you:[]({legacy}1396)

![](images/img_1865.jpg){.thumbnail}

