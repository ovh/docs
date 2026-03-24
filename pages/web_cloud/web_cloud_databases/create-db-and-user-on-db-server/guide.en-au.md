---
title: 'Creating databases and users on your database server'
excerpt: 'Find out how to create a database on your database server.'
updated: 2026-03-24
---

## Objective

A database (DB) is used to store what are known as dynamic elements, such as comments or articles. These databases are used in virtually all modern content management systems (CMS), such as WordPress or Joomla!.

**This guide explains how to create a database on your database server and give access to users.**

## Requirements

- A [Web Cloud Databases instance](/links/web/databases) (included in a [Performance web hosting plan](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigation path:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Select your database service

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instructions

### Creating a database

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Databases`{.action} tab.
>>
> **Step 3**
>>
>> Click `Add a database`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > PostgreSQL schema creation is currently unavailable on Web Cloud Databases servers.
>>
> **Step 4**
>>
>> Fill in the fields following the criteria listed. You can create a user directly by ticking the **Create a user** box:
>>
>> - **Database name** (required): this will be the name of your future database.
>> - **Username** (only if the `Create a user` box is ticked): the user who will be able to log in to your database and perform queries.
>> - **Rights** (only if the `Create a user` box is ticked): the permissions associated with the user on the database. For standard usage, select `Administrator`{.action}. The permissions can be modified afterwards.
>> - **Password**/**Confirm password** (only if the `Create a user` box is ticked): select a password, then confirm it.
>>
>> Click `Confirm`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}

### Creating a user

To use an OVHcloud database server, create users with specific rights to connect to a database.

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Users and Rights`{.action} tab.
>>
> **Step 3**
>>
>> Click `Add a user`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Step 4**
>>
>> Enter a "username" and a "password", then click `Confirm`{.action}.

### Managing user rights

To allow a user to perform actions on a database, it is necessary to assign permissions to the user.

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Users and Rights`{.action} tab.
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the user concerned, then on `Manage rights`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights.png){.thumbnail}
>>
> **Step 4**
>>
>> In the left-hand column **Database**, you will see a list of the databases on your database server.
>>
>> 3 types of rights are available:
>>
>> - `Administrator`: authorisation for **Select / Insert / Update / Delete / Create / Alter / Drop** queries.
>> - `Read / Write`: authorisation for **Select / Insert / Update / Delete** queries.
>> - `Read`: authorisation for **Select** queries.
>> - `None`: no database rights.
>>
>> > [!primary]
>> >
>> > The distribution of rights mentioned above is specific to OVHcloud. A user with `Administrator` rights can use **DDL** (Data Definition Language) and **DML** (Data Manipulation Language), while a user with `Read / Write` rights can only use **DML** (Data Manipulation Language).
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights.png){.thumbnail}

### Deleting a database

> [!warning]
>
> Before deleting a database on a database server, there is no
> verification of the database contents. It will be deleted even if
> data is still stored in it. It is therefore recommended to create
> a backup and download it before any deletion.
>

Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Databases`{.action} tab.
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the database concerned, then on `Delete the database`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/delete-the-database.png){.thumbnail}

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
