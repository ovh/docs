---
title: 'Restoring and importing a database to your database server'
slug: restore-import-database
excerpt: 'Find out how to restore and import your database'
section: Private SQL
order: 5
---

**Last updated 16th September 2020**

## Objective

Following an error on your database, you must be able to restore a backup or import a local database. 

**This guide explains how to restore and import your database onto your database server.**

## Requirements

- a [Private SQL Web Hosting plan](https://www.ovh.co.uk/web-hosting/sql-options.xml) or a [Cloud Database](https://www.ovh.co.uk/cloud-databases/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)

## Instructions

> [!primary]
>
> Please note that the [Private SQL](https://www.ovh.co.uk/web-hosting/sql-options.xml) and [Cloud Databases](https://www.ovh.com/fr/cloud-databases){.external} solutions do not give access to the host, but to the databases hosted on it; there is no root user access. Generic SQL commands work normally, and software clients such as HeidiSQL, SQuirreL or Adminer are fully compatible.
> 

### Restore and import a database from your Control Panel

Rendez-vous dans votre espace client (section IP) Open the `Web` tab, and then click on `Databases`{.action} in the left pane. Select the name of your database server. Next, switch to the `Databases` tab.

In the “**Backups”** column, the number corresponds to the available backups for your database.

#### 1. Restore a specific backup.

Click the `...`{.action} button to the right of the database, then click `Show backups`{.action}.

The list of available backups will appear, click on the `...`{.action} button to the right of the backup you want to restore, then `Restore the backup`{.action}.

![private-sql](images/private-sql-restore01.png){.thumbnail}

> [!warning]
>
> A restoration involves replacing the contents of the database.
> If you are not sure about the procedure, please create a backup first.
> 

#### 2. Importing a local backup

Click on the `...`{.action} button to the right of the database, then click `Import file`{.action}.

![private-sql](images/private-sql-import01.png){.thumbnail}

There are two ways of doing this:

#####  Importing a new file

Click on **Import a new file**, then `Next`{.action}.

Specify a name for your imported file, click `Browse`{.action} to select it, then `Submit`{.action}, and then click `Next`{.action}.

> [!warning]
>
> The file must be in the .gz format.
> 

![private-sql](images/private-sql-import02.png){.thumbnail}

If you wish, tick **Empty the current database** before importing, and **Send an email when importing is complete** to be informed of the completion of the operation using the primary email address of your OVHcloud account. Then click `Confirm`{.action}.

##### Using an existing file

If you had already imported a file before, you can choose the **Use an existing file** option.

Then choose the file from the dropdown menu and click `Next`{.action}.

![private-sql](images/private-sql-import03.png){.thumbnail}

If you wish, tick **Empty the current database** before importing, and **Send an email when importing is complete** to be informed of the completion of the operation using the primary email address of your OVHcloud account. Then click `Confirm`{.action}.

### Importing MySQL or MariaDB databases outside the OVHcloud Control Panel

In some cases, the RAM available in your database server may not be sufficient to perform the desired import. If this is the case, we recommend using the tool available in the OVHcloud Control Panel. Refer to the [Restoring and importing a database from the Control Panel](./#sauvegarde-restauration-et-importation-depuis-lespace-client_1){.external} section of this guide.


#### Importing MySQL or MariaDB databases with phpMyAdmin
To import your database directly from phpMyAdmin, you will need to log in to the interface first. To do this, you can refer to the paragraph [Connecting to a MySQL or MariaDB database](../tout-sur-le-sql-prive/#se-connecter-a-une-base-de-donnees-mysql-ou-mariadb){.external}.

Once you have logged in to phpMyAdmin, select your database by clicking on its name.

Then click on the `Import`{.action} tab.

Select your backup file by clicking `Browse`{.action}. (Please note that the file cannot exceed 100 MB).

> [!primary]
>
> We recommend splitting your database into several files if it exceeds 100 MB and importing these files from phpMyAdmin.<br>
> You can import files larger than 100 MB in the OVHcloud Control Panel by following the step [Back up, restore and import a database from the OVHcloud Control Panel](./#sauvegarder-restaurer-et-importer-une-base-de-donnees-depuis-lespace-client) 


Leave the default options and click `Run`{.action} to start the import.

![private-sql](images/private-sql-import04.png){.thumbnail}

#### Exporting a MySQL or MariaDB database from the command line

This action is only possible via [SSH]( ../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external} from an OVHcloud Web Hosting plan.

```bash
cat database_name.sql | mysql --host=server --user=username --port=port --password=password database_name
```
#### Importing a MySQL or MariaDB database from a PHP file

```php
1. <?php
2. echo "Your database is being restored.......";
3. system("cat database_name.sql | mysql --host=server --user=username --port=port --password=password database_name ");
4. echo "Completed. Your database is in place on this Web Hosting plan.";
5. ?>
```

> [!warning]
>
> - To prevent someone from accessing this file containing sensitive data, please secure access to it by using our guide: [How do I protect directory access with authentication?]( ../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external}
> - This action is only possible on an OVHcloud Web Hosting plan.
>

### Importing PostgreSQL databases from the OVHcloud Control Panel

In some cases, the RAM available in your database server may not be sufficient to perform the desired import. If this is the case, we recommend using the tool available in the OVHcloud Control Panel. Refer to the [Restoring and importing a database from the Control Panel](./#sauvegarde-restauration-et-importation-depuis-lespace-client_1){.external} section of this guide.

#### Importing a PostgreSQL database from the command line

This action is only possible via [SSH]( ../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external} from an OVHcloud Web Hosting plan, in stable or higher versions.

```bash
psql --host=server --port=port --user=username --password=password database_name < database_name.sql
```

#### Importing a PostgreSQL database from a PHP file

```php
1. <?php
2. echo "Your database is being restored.......";
3. system("PGPASSWORD=password psql --host=server --port=port --user=username --password=password database_name < database_name.sql");
4. echo "Completed. Your database is in place on this Web Hosting plan.";
5. ?>
```

> [!warning]
>
> - To prevent someone from accessing this file containing sensitive data, remember to secure access to it by using the guide [How do I protect directory access with authentication?]( ../mutualise-le-ssh-sur-les-hebergements-mutualises/){.external}
> - This action is only possible on an OVHcloud Web Hosting plan.
>

## Go further

Join our community of users on <https://community.ovh.com>.
