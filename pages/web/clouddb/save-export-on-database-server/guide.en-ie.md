---
title: 'Backing up and exporting a database of your database server'
slug: backup-export-database-server
excerpt: 'Find out how to back up and export your database'
section: Configuration
order: 4
---

**Last updated 27th June 2022**

## Objective

Your database can contain a lot of essential information for your website. It is therefore important to be able to save it, or even export it.

**Find out how to back up and export your database from your database server.**

## Requirements

- You must have a [CloudDB instance](https://www.ovh.ie/cloud/cloud-databases/){.external} (included in a [performance web hosting plan](https://www.ovhcloud.com/en-ie/web-hosting/)).
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)

## Instructions

> Please note that the [CloudDB](https://www.ovh.ie/cloud/cloud-databases/){.external} solutions do not give access to the database management system, but to the databases hosted on it.
> <br> - Please note that there is no "root" access.
> <br> - Generic SQL commands work normally, and software such as HeidiSQL, SQuirreL or Adminer is fully compatible.

### Backing up and exporting a database from the Control Panel

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) and select `Web Cloud`{.action} in the top navigation bar. Click `Databases`{.action}, then choose the SQL instance concerned. Next, go to the `Databases` tab.

In the **Backups** column, the number corresponds to the number of backups available for your database.

> [!primary]
>
> - Backups are performed automatically once a day
> for all your databases.
> - Automatic and manual backups are available for 30 days.
> After this period, they will be automatically deleted.

#### 1\. Launching a manual backup 

Click the `...`{.action} button to the right of the database, then click `Back up now`{.action}.

![clouddb](images/private-sql-save01.png){.thumbnail}

#### 2\. Exporting a backup

Click the `...`{.action} button to the right of the database, then click `Show backups`{.action}

![clouddb](images/private-sql-dl01.png){.thumbnail}

The list of available backups will appear. Click on the `...`{.action} button to the right of the backup you want to create, then click `Download the backup`{.action} to retrieve this backup.

### Backing up and exporting a database outside the Control Panel

#### 1\. Exporting MySQL or MariaDB databases

In some cases, the RAM available in your database server may not be sufficient to perform the desired import. If this is the case, we recommend using the [tool available in the OVHcloud Control Panel](./#backing-up-and-exporting-a-database-from-the-control-panel). This will enable you to use resources external to your solution.

##### 1\.1 Exporting a MySQL or MariaDB database with OVHcloud phpMyAdmin 

To export your database directly from phpMyAdmin, you will need to log in to the interface first. To do this, you can refer to our guide on [connecting to a database](../connecting-to-database-on-database-server).

Once you have logged in to phpMyAdmin, click on the name of the database you want to export, then on the `Export`{.action} tab at the top.

You have two possible export modes. If you do not have a specific need, we recommend using **quick** mode in **SQL** format.

![clouddb](images/private-sql-export01.png){.thumbnail}

##### 1\.2 Exporting a MySQL or MariaDB database from the command line

```bash
mysqldump --host=server --user=username --port=port --password=password database_name > database_name.sql
```

##### 1\.3 Exporting a MySQL or MariaDB database with a PHP script


```php
1. <?php echo "Your database is being backed up.......";
2. system("mysqldump --host=server --user=username --port=port --password=password database_name > database_name.sql");
3. echo "Completed. You can retrieve the database via FTP.";
4. ?>
```

> [!warning]
>
> - To prevent someone from accessing this file containing sensitive data, you can [secure access to it](https://docs.ovh.com/ie/en/hosting/how_to_password_protect_a_directory_on_your_website/).
> - This action is only possible on an OVHcloud Web Hosting plan.
>

#### 2\. Exporting and importing PostgreSQL databases outside the Control Panel

In some cases, the RAM available in your database server may not be sufficient to perform the desired import. If this is the case, we recommend using the [tool available in the OVHcloud Control Panel](./#backing-up-and-exporting-a-database-from-the-control-panel). This will enable you to use resources external to your solution.
 
##### 2\.1 Exporting my PostgreSQL database from the command line

```bash
pg_dump --host=server --port=port --user=usernmame --password=password database_name > database_name.sql
```

##### 2\.2 Exporting a PostgreSQL database with a PHP script

```php
1. <?php echo "Your database is being backed up.......";
2. system("PGPASSWORD=password pg_dump --host=server --port=port --user=username --password=password database_name > database_name.sql");
3. echo "Completed. You can retrieve the database via FTP.";
4. ?>
```

> [!warning]
>
> - To prevent someone from accessing this file containing sensitive data, you can [secure access to it]( ../how_to_password_protect_a_directory_on_your_website/).
> - This action is only possible on an OVHcloud Web Hosting plan.
>

## Go further

[Restoring and importing a database to your database server](../restore-import-database)

Join our community of users on <https://community.ovh.com/en/>.
