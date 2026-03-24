---
title: 'Backing up and exporting a database on your database server'
excerpt: 'Find out how to back up and export a database from your Web Cloud Databases server using the OVHcloud Control Panel or phpMyAdmin'
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

Your database can contain a large amount of essential information for your website. It is therefore vital to be able to back it up or export it.

**Find out how to back up and export your database from your database server.**

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

> [!primary]
>
> [Web Cloud Databases](/links/web/databases) solutions do not provide access to the database management system itself, but to the databases hosted on it.
>
> - There is no super user "root" access.
> - Generic SQL commands work normally, and software such as HeidiSQL, SQuirreL SQL or Adminer is fully compatible.

### Backing up and exporting a database from the Control Panel

> [!primary]
>
> - Backups are automatically performed once a day on all your databases.
> - Automatic and manual backups are kept for 30 days. After this period, they are automatically deleted.

#### Creating a manual backup

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
>> In the **Backups** column, the number corresponds to the number of available backups for your database.
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the database, then on `Back up now`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/back-up-now.png){.thumbnail}

#### Exporting a backup

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
>> In the **Backups** column, the number corresponds to the number of available backups for your database.
>>
> **Step 3**
>>
>> Click the `...`{.action} button to the right of the database, then on `Show backups`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/show-backups.png){.thumbnail}
>>
> **Step 4**
>>
>> The list of available backups appears. Click the `...`{.action} button to the right of the backup you want, then on `Download the backup`{.action}.

### Backing up and exporting a database outside the Control Panel

If the available RAM on your server does not allow the desired export, use the OVHcloud tool in the Control Panel, which uses resources external to your plan. Refer to the section "[Backing up and exporting a database from the Control Panel](./#backing-up-and-exporting-a-database-from-the-control-panel)" of this documentation.

**Click on the export method of your choice to view the content.**

/// details | Export a MySQL or MariaDB database from OVHcloud phpMyAdmin

To export your database directly from phpMyAdmin, first log in using the guide "[Connecting to a database](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)".

Once logged in to phpMyAdmin, click on the name of the database you want to export, then on the `Export`{.action} tab at the top.

There are two possible export modes. If you do not have a specific need, we recommend using the **quick** mode in **SQL** format.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export-backup-web-cloud-db.png){.thumbnail}

///

/// details | Export a MySQL or MariaDB database via command line

```bash
mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql
```

///

/// details | Export a MySQL or MariaDB database from a PHP script

```php
1. <?php echo "Your database is being backed up.......";
2. system("mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql");
3. echo "Backup complete. You can retrieve the database via FTP";
4. ?>
```

> [!warning]
>
> - To prevent third-party access to this file containing sensitive data, secure access to it using the guide: [How do I password-protect a directory?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - This action is only possible from an OVHcloud shared hosting plan.

///

/// details | Export a PostgreSQL database via command line

```bash
pg_dump --host=server --port=port --user=user --password=password database_name > database_name.sql
```

///

/// details | Export a PostgreSQL database from a PHP script

```php
1. <?php echo "Your database is being backed up.......";
2. system("PGPASSWORD=password pg_dump --host=server --port=port --user=user --password=password database_name > database_name.sql");
3. echo "Backup complete. You can retrieve the database via FTP";
4. ?>
```

> [!warning]
>
> - To prevent third-party access to this file containing sensitive data, secure access to it using the guide: [How do I password-protect a directory?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - This action is only possible from an OVHcloud shared hosting plan.

///

## Go further

[Backing up and exporting a database from the Control Panel](./#backing-up-and-exporting-a-database-from-the-control-panel)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
