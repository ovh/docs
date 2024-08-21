---
title: 'Creating databases and users on your database server'
excerpt: 'Find out how to create a database on your database server'
updated: 2023-02-15
---

## Objective

A database (DB) is used to store what are known as dynamic elements, such as comments or articles. These databases are used in virtually all modern content management systems (CMS), such as WordPress or Joomla!.

**This guide explains how to create a database on your database server and give access to users.**

## Requirements

- You must have a [Web Cloud Databases instance](https://www.ovh.ie/cloud-databases/){.external} (included in a [Performance web hosting plan](/links/web/hosting)).
- You must be logged in to your [OVHcloud Control Panel](/links/manager){.external}.

## Instructions

### Creating a database

Log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action} in the top navigation bar. Click `Web Cloud Databases`{.action}, then choose the SQL instance concerned. Click on the `Databases` tab, then on `Add database`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}

Fill in the fields by following the criteria listed. You can create a user directly by ticking the **Create User** box.

- **Database name** (obligatory): this will be your database’s name.
- **Username**: This is name of the user that can log in to your database and perform requests (only applicable if the **Create User** box is ticked).
- **Rights** (only if the box is ticked): the permissions that will be associated with the user on the database. For standard usage, select `Administrator`{.action}. The permissions can be modified as follows.
- **Password**/**Confirm password** (only if the box is ticked): enter a password, then confirm it.

Finally, click `Confirm`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}

### Adding a user

To use an OVHcloud database server, you need to create users with specific rights to connect to a database.

Log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action} in the top navigation bar. Click `Web Cloud Databases`{.action}, then choose the database name concerned. Next, switch to the `Users and rights` tab and click `Add user`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}

Enter a “username” and a “password”, then click `Confirm`{.action}. 

### Managing user rights

To allow a user to perform actions on a database, it is necessary to assign permissions to the user.

Log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action} in the top navigation bar. Click `Web Cloud Databases`{.action}, then choose the database name concerned. Next, switch to the `Users and rights` tab. Click on the  `...`{.action} button to the right of the user concerned, then on `Manage rights`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights.png){.thumbnail}

In the left-hand column, **Database**, you will see a list of the databases on your database server.

The 3 types of permissions proposed are described below:

- `Administrator`: Authorisation of the following queries: **Select/Insert/Update/Delete/Create/Alter/Drop**.
- `Reading/Writing`: Authorisation of the following queries: **Select/Insert/Update/Delete**.
- `Read`: Authorisation of **Select** queries.
- `None`: No database rights.

> [!primary]
> 
> The distribution of rights mentioned above is unique to OVHcloud. This will allow a user with `Administrator` rights to use **DLL** (Data Definition Language) and **DML** (Data Manipulation Language), while a user with `Reading/Writing` rights will only use **DML**.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights.png){.thumbnail}

#### Deleting a database

> [!warning]
>
> Before deleting a database on a database server, there is no
> checking of the contents of the database. It will be deleted even if
> data is still stored in it, therefore it is recommended that
> a backup is created and downloaded from your side before any deletion.
> 

Log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action} in the top navigation bar. Click `Web Cloud Databases`{.action}, then choose the SQL instance concerned.

To delete a database on your database server, go to the `Databases` tab, then click on the `...`{.action} button to the right of the database concerned, then click `Delete the database`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/delete-the-database.png){.thumbnail}

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).