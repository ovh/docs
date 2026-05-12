---
title: 'Restoring and importing a database to your database server'
excerpt: 'Find out how to restore and import a database on your Web Cloud Databases server from the OVHcloud Control Panel or via phpMyAdmin'
updated: 2026-03-24
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

Following an error on your database, you must be able to restore a backup or import a local database.

**Find out how to restore and import your database on your database server.**

## Requirements

- A [Web Cloud Databases instance](/links/web/databases) (included in a [Performance web hosting](/links/web/hosting) plan)

<!-- CP-NAV-START:web-cloud-databases -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigation path:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Select your database service

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instructions

> [!primary]
>
> [Web Cloud Databases](/links/web/databases) solutions do not give access to the database management system, but to the databases hosted on it.
>
> - There is no superuser "root" access.
> - Generic SQL commands work normally, and software such as HeidiSQL, SQuirreL SQL or Adminer is fully compatible.

### Restoring and importing a database from the Control Panel

#### Restoring an existing backup

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
>> In the **Backups** column, the number corresponds to the number of backups available for your database.
>>
> **Step 3**
>>
>> Click on the `...`{.action} button to the right of the database, then on `Show backups`{.action}.
>>
> **Step 4**
>>
>> The list of available backups appears. Click on the `...`{.action} button to the right of the chosen backup, then on `Restore the backup`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/restore-the-backup.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Restoration involves overwriting the contents of the database, potentially resulting in data loss. If you are unsure of what you are doing, we recommend creating a backup beforehand.


#### Importing a local backup

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
>> Click on the `...`{.action} button to the right of the database, then on `Import file`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}
>>
> **Step 4**
>>
>> ***You have two options:***
>>
>> **1 - Import a new file**
>>
>> Click on **"Import a new file"**, then on `Next`{.action}.
>>
>> Enter a name for your imported file, click `Browse`{.action} to select it, then `Submit`{.action}, and finally click `Next`{.action}.
>>
>> > [!warning]
>> >
>> > The file must be in ".sql", ".txt" or ".gz" format.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}
>>
>> If you wish, tick **"Empty the current database"** before importing, and **"Send an email when importing is complete"** to be informed of the completion of the operation on the primary email address of your OVHcloud account, then click `Confirm`{.action}.
>>
>> **2 - Use an existing file**
>>
>> If you had already imported a file before, you can choose the **"Import an existing file"** option.
>>
>> Then choose the file from the dropdown menu, and click `Next`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-existing-file-step-2.png){.thumbnail}
>>
>> If you wish, tick **"Empty the current database"** before importing, and **"Send an email when importing is complete"** to be informed of the completion of the operation on the primary email address of your OVHcloud account, then click `Confirm`{.action}.


### Importing a database outside the Control Panel

In some cases, the RAM available on your database server may not be sufficient to perform the desired import outside the Control Panel. If so, we recommend using the OVHcloud tool in the Control Panel. Refer to the section "[Restoring and importing a database from the Control Panel](./#restoring-and-importing-a-database-from-the-control-panel)" of this guide.

**Click on the import method of your choice to view the content.**

/// details | Importing a MySQL or MariaDB database from phpMyAdmin

To import your database directly from phpMyAdmin, you must first log in by following the section "[Connecting to a MySQL or MariaDB database](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#connecting-to-a-mysql-or-mariadb-database)".

Once logged in to phpMyAdmin, select your database by clicking on its name.

Then click on the `Import`{.action} tab.

Select your backup file by clicking `Browse`{.action} (the file cannot exceed 100 MB).

> [!primary]
>
> We recommend splitting your database into several files if it exceeds 100 MB, and performing multiple imports from phpMyAdmin.
> You can import files larger than 100 MB from the Control Panel by following the step "[Restoring and importing a database from the Control Panel](./#restoring-and-importing-a-database-from-the-control-panel)".

Leave the default options and click `Run`{.action} to start the import.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-upload-backup-web-cloud-db.png){.thumbnail}

///

/// details | Importing a MySQL or MariaDB database from the command line

This action is only possible via [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) from an OVHcloud shared hosting plan.

```bash
cat database_name.sql | mysql --host=server --user=username --port=port --password=password database_name
```

///

/// details | Importing a MySQL or MariaDB database from a PHP file

```php
1. <?php
2. echo "Your database is being restored.......<br>";
3. system("cat database_name.sql | mysql --host=server --user=username --port=port --password=password database_name");
4. echo "Completed. Your database is in place on this hosting plan.";
5. ?>
```

> [!warning]
>
> - To prevent someone from accessing this file containing sensitive data, secure access to it by following the guide: [How do I password-protect a directory?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - This action is only possible from an OVHcloud shared hosting plan.

///

/// details | Importing a PostgreSQL database from the command line

This action is only possible via [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) from an OVHcloud shared hosting plan in stable version or higher.

```bash
psql --host=server --port=port --user=username --password=password database_name < database_name.sql
```

///

/// details | Importing a PostgreSQL database from a PHP file

```php
1. <?php
2. echo "Your database is being restored.......<br>";
3. system("PGPASSWORD=password psql --host=server --port=port --user=username --password=password database_name < database_name.sql");
4. echo "Completed. Your database is in place on this hosting plan.";
5. ?>
```

> [!warning]
>
> - To prevent someone from accessing this file containing sensitive data, secure access to it by following the guide: [How do I password-protect a directory?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - This action is only possible from an OVHcloud shared hosting plan.

///

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
