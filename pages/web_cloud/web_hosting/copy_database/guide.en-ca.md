---
title: "Duplicating the contents of one database to another"
excerpt: "Find out how to duplicate the content of an OVHcloud database into another OVHcloud database"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

Your database is a central part of building your dynamic website. During the life cycle of your website, for practical or technical reasons, you may copy the content of one database to a [Start SQL](/links/web/hosting-options-startsql) or [Web Cloud Databases](/links/web/databases).

**This guide explains how to duplicate the content of an OVHcloud database into another OVHcloud database.**

> [!primary]
>
> With this feature, databases are not moved but copied. This is because the original database is not deleted automatically, as is the case with a migration process. Only the contents of the source database are duplicated for copying to the destination database.
>

## Requirements

- You are using a [Start SQL](/links/web/hosting-options-startsql) and/or [Web Cloud Databases](/links/web/databases) solution. The two databases concerned must be created beforehand in order to use the replication tool.
- You have sufficient rights to all database services concerned. You can find more information in our guide [Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts).

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

Before you begin, make sure that:

- Your **D**ata**b**ase **M**anagement **S**ystem (MySQL, PostgreSQL, etc.) is the same for your two databases (source and destination).
- The version of your DBMS is the same for both your databases (source and destination). Although the duplication may work with different versions, it is recommended that you use the same versions.
- The contents of the source database must not exceed the size of the destination database.

### Copy the contents of a database

This feature is available for copying:

- A [Start SQL](/links/web/hosting-options-startsql) database (included in some of our [web hostings](/links/web/hosting) or [ordered separately](/links/web/hosting-options-startsql)).
- A database hosted on a [Web Cloud Databases](/links/web/databases) server (included with our [Performance web hosting](/links/web/hosting-performance-offer) or [ordered separately](/links/web/databases)).

Depending on your situation, the path to your source database is different.

**Click on your situation to view the content.**


/// details | From a Start SQL database

Click on the tabs below to view each of the **6** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Databases`{.action} tab. The table lists the databases created on your web hosting plan.
>>
>> ![Start SQL DB list](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the row of the database you want to copy, then select `Copy database`{.action}.
>>
>> ![Copy database button](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}
>>
> **Step 4**
>>
>> A window will prompt you to choose your destination database.
>>
>> ![Database copy destination selection](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > If you do not have a destination database, click the link in the window to purchase one. Remember to activate it:
>> >
>> > - For a Shared SQL database: follow our guide [Creating a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database).
>> > - For a database on a Web Cloud Databases server: follow our guide [Creating a database on a Web Cloud Databases server](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server).
>>
>> - **Choice 1 - Copy to a Start SQL database**: select `Copy to database`{.action}, then choose the destination database from the drop-down list.
>> - **Choice 2 - Copy to a Web Cloud Databases server**: select `Copy to a Web Cloud Database`{.action}. Two drop-down lists appear. Click the first one to select the Web Cloud Databases solution, then click the second one to choose the destination database.
>>
> **Step 5**
>>
>> Click `Next`{.action}. The following confirmation message is displayed:
>>
>> ![Copy DB confirmation message](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}
>>
>> If you do not want to overwrite the destination database, click `Back`{.action} to change your choice, or `Cancel`{.action} to cancel everything. Otherwise, click `Confirm`{.action} to confirm the duplication.
>>
> **Step 6**
>>
>> The copy may take several minutes. In the `Ongoing tasks`{.action} tab, a new row for your copy will appear with a "scheduled" status. Once the operation is complete, the row disappears.
>>
>> ![Ongoing tasks](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

///



/// details | From a Web Cloud Databases server

Click on the tabs below to view each of the **6** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Databases`{.action} tab. The list of databases on your Web Cloud Databases server is displayed.
>>
>> ![Web Cloud Databases database list](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the row of the database you want to copy, then select `Copy database`{.action}.
>>
>> ![Copy database button](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}
>>
> **Step 4**
>>
>> A window will prompt you to choose your destination database.
>>
>> ![Database copy destination selection](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > If you do not have a destination database, click the link in the window to purchase one. Remember to activate it:
>> >
>> > - For a Shared SQL database: follow our guide [Creating a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database).
>> > - For a database on a Web Cloud Databases server: follow our guide [Creating a database on a Web Cloud Databases server](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server).
>>
>> - **Choice 1 - Copy to a Start SQL database**: select `Copy to database`{.action}, then choose the destination database from the drop-down list.
>> - **Choice 2 - Copy to a Web Cloud Databases server**: select `Copy to a Web Cloud Database`{.action}. Two drop-down lists appear. Click the first one to select the Web Cloud Databases solution, then click the second one to choose the destination database.
>>
> **Step 5**
>>
>> Click `Next`{.action}. The following confirmation message is displayed:
>>
>> ![Copy DB confirmation message](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}
>>
>> If you do not want to overwrite the destination database, click `Back`{.action} to change your choice, or `Cancel`{.action} to cancel everything. Otherwise, click `Confirm`{.action} to confirm the duplication.
>>
> **Step 6**
>>
>> The copy may take several minutes. In the `Ongoing tasks`{.action} tab, a new row for your copy will appear with a "scheduled" status. Once the operation is complete, the row disappears.
>>
>> ![Ongoing tasks](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

///


### Configuring your website with a new database

Once you have made a copy of your source database, you will need to take a final action if you want to use your new database.

In the `Ongoing tasks`{.action} tab, ensure that the duplication is complete (the line corresponding to your copy has disappeared).

To connect the new database to your website, edit the configuration file for your **C**ontent **M**anagement **S**ystem (**CMS**) and enter the connection information for the new database.

> [!warning]
>
> It is recommended that you make a copy of your website's configuration file before editing it. This ensures that you can replace the new version of the file with the old one if your configuration fails.

For example, if you use WordPress, you will need to modify the *wp-config.php* configuration file in the root folder of your WordPress application, in your hosting plan's storage space (FTP), then update the following fields:

- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST

For more details, or if you are using another CMS, please refer to our guide on [Changing the password for a web hosting plan database](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> Copying your database is not a migration. Your source database still exists until you delete it. This way, you can still reconfigure your website with its old database if necessary.
>

### Troubleshooting

During the process of copying the contents of the database, you may encounter difficulties.

**Click on your situation to view the content.**

/// details | No databases are displayed in the list

This means that you only have one active database. To copy your source database, you also need an active destination database. To do this, you can:

- Configure a new database available on your web hosting plan.
- Configure a new database on your [Web Cloud Databases](/links/web/databases) server.
- Order a [Start SQL](/links/web/hosting-options-startsql) solution or a [Web Cloud Databases](/links/web/databases) database server.

///

/// details | You already have an action in progress

This message means that a task is already in progress on your database. Go to the `Ongoing tasks`{.action} tab to check this. If so, wait for the task to finish, then restart the duplication process of your database.

///

/// details | The destination database does not contain enough space

Your destination database is not of a sufficient size. There are two ways to resolve this:

- Order a new [Start SQL](/links/web/hosting-options-startsql) database with more space.
- If you have a [Web Cloud Databases](/links/web/databases) server, switch to a Web Cloud Databases solution with more storage space.

///

/// details | The source and destination databases are incompatible

This notification means that the **D**ata**b**ase **M**anagement **S**ystem (**DBMS**) in your source database is not the same as the DBMS in your destination database.

For example, this error can occur when you use MySQL for your source database, and PostgreSQL for your destination database.

///

## Go further

[Log in to the OVHcloud Control Panel](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Back up and export a database on your database server](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restore and import a database on your database server](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Retrieve the backup of a web hosting plan's database](/pages/web_cloud/web_hosting/sql_database_export)

[Import a backup into a web hosting database](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).