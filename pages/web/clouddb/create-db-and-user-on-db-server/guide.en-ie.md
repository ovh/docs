---
title: 'Creating databases and users on your database server'
slug: create-databases-and-users
excerpt: 'Find out how to create a database on your database server'
section: Configuration
order: 2
---

**Last updated 3rd February 2022**

## Objective

A database (DB) is used to store what are known as dynamic elements, such as comments or articles. These databases are used in virtually all modern content management systems (CMS), such as WordPress or Joomla!.

**This guide explains how to create a database on your database server and give access to users.**

## Requirements

- a [Cloud Database](https://www.ovh.ie/cloud-databases/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)

## Instructions

### Creating a database

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and select `Web Cloud`{.action} in the top navigation bar. Click `Databases`{.action}, then choose the SQL instance concerned. Click on the `Databases` tab, then on `Add database`{.action}.

![private-sql](images/private-sql-createdb01.png){.thumbnail}

Fill in the fields by following the criteria listed. You can create a user directly by ticking the **Create User** box.

- **Database name** (obligatory): this will be your database’s name.
- **Username**: This is name of the user that can log in to your database and perform requests (only applicable if the **Create User** box is ticked).
- **Rights** (only if the box is ticked): the permissions that will be associated with the user on the database. For standard usage, select `Administrator`{.action}. The permissions can be modified as follows.
- **Password**/**Confirm password** (only if the box is ticked): enter a password, then confirm it.

Finally, click `Confirm`{.action}.

![private-sql](images/private-sql-createdb02.png){.thumbnail}

### Adding a user

To use an OVHcloud database server, you need to create users with specific rights to connect to a database.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and select `Web Cloud`{.action} in the top navigation bar. Click `Databases`{.action}, then choose the database name concerned. Next, switch to the `Users and rights` tab and click `Add user`{.action}.

![private-sql](images/private-sql-user01.png){.thumbnail}

Enter a “username” and a “password”, then click `Confirm`{.action}. 

### Managing user rights

To allow a user to perform actions on a database, it is necessary to assign permissions to the user.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and select `Web Cloud`{.action} in the top navigation bar. Click `Databases`{.action}, then choose the database name concerned. Next, switch to the `Users and rights` tab. Click on the  `...`{.action} button to the right of the user concerned, then on `Manage rights`{.action}.

![private-sql](images/private-sql-rights01.png){.thumbnail}

In the left-hand column, **Database**, you will see a list of the databases on your database server.

The 3 types of permissions proposed are described below:

- **Administrator**: Authorisation of the following queries: **Select/Insert/Update/Delete/Create/Alter/Drop**
- **Reading/Writing**: Authorisation of the following queries: **Select/Insert/Update/Delete**
- **Read**: Authorisation of **Select** queries
- **None**: No database rights

> [!primary]
> 
> The distribution of rights mentioned above is unique to OVHcloud. This will allow a user with *Administrator* rights to use **DLL** (Data_Definition_Language) and **DML** (Data_Manipulation_Language), while a user with **Reading/Writing** rights will only use **DML**.

![private-sql](images/private-sql-rights02.png){.thumbnail}

#### Deleting a database

> [!warning]
>
> Before deleting a database on a database server, there is no
> checking of the contents of the database. It will be deleted even if
> data is still stored in it, therefore it is recommended that
> a backup is created and downloaded from your side before any deletion.
> 

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and select `Web Cloud`{.action} in the top navigation bar. Click `Databases`{.action}, then choose the SQL instance concerned.

To delete a database on your database server, go to the `Databases` tab, then click on the `...`{.action} button to the right of the database concerned, then click `Delete the database`{.action}.

![private-sql](images/private-sql-deldb01.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com>.
