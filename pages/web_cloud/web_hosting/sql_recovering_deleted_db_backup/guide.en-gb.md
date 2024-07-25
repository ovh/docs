---
title: "How to recover a deleted database backup"
excerpt: "Find out how to retrieve a database backup once it has been deleted from your OVHcloud Control Panel"
updated: 2024-07-25
---

## Objective

Databases are included in most of our [web hosting plans](/links/web/hosting). If you accidentally delete a database linked to your web hosting plan, you can try to retrieve the backup via our APIs.

**This guide explains how to retrieve a database backup via the OVHcloud API once it has been deleted via the OVHcloud Control Panel.**

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist service provider](/links/partner) if you encounter any difficulties. We will not be able to provide you with any additional API support. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements

- You have an active [OVHcloud web hosting plan](/links/web/hosting) that includes at least one shared database.
- The database deletion must be less than 30 days old.

## Instructions

The OVHcloud API is made available to developers or integrators to associate features, such as those not present in the OVHcloud Control Panel, directly with their applications or solutions.

> [!warning]
>
> The backups offered by OVHcloud for shared hosting plans and their associated databases are non-contractual. We offer them in addition to your services to help you in urgent situations. We recommend creating your own regular security backups to compensate for any potential data loss.
>
> Furthermore, when a database is deleted by its user or administrator, OVHcloud cannot guarantee that its backup will be recovered, for the reasons mentioned above.
>

### Step 1 - Retrieve the name of the web hosting plan that the deleted database was linked to

To retrieve the name of your web hosting plan, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. On the line at the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} dropdown menu.
4. Select the web hosting plan concerned.
5. In the top left-hand corner of the page that opens, you will find the name of your web hosting plan on the right-hand side, with the words `Hosting plans /`{.action}.

![API](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-webhosting-name.png){.thumbnail}

### Step 2 - Log in to the OVHcloud API and allow access to your services

To do this, perform the following steps:

- Go to our website [OVHcloud API](/links/api) (check that you are on `https://eu.api.ovh.com` if your services are hosted in Europe, and on `https://ca.api.ovh.com` if they are hosted outside Europe).
- On the page that pops up, middle-click `Explore the OVHcloud API`{.action}.
- On the left-hand side the new page that appears, go to the form to the right of `v1`{.action}, then select or enter `/hosting/web`.
- From the list of endpoints that appears in the left-hand column, click on: **GET /hosting/web/{serviceName}/dump**. You can also click directly on the following path to access it:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump
>

- On the right-hand side of the page, you will then see the API path with its various parameters.
- Click the button in the top right-hand corner labeled `Authenticate`{.action}, then the `Login with OVHcloud SSO`{.action} button.
- The interface for connecting to your [OVHcloud Control Panel](/links/manager) will open.
- Log in with your NIC handle, then click `Authorize`{.action} to use the OVHcloud API with the services in the OVHcloud Control Panel.
- You will then be automatically redirected to the previous page of the path **GET /hosting/web/{serviceName}/dump**, while you are logged in to the OVHcloud Control Panel.

### Step 3 - Check the availability of backups and retrieve the ID of the last backup

To do this, fill in the forms as detailed below:

- For the section entitled `PATH PARAMETERS`:
    - `serviceName`: Enter the name of your web hosting plan, which you retrieved in step 1 of this guide.

- For the section entitled `QUERY-STRING PARAMETERS`:
    - `creationDate.from`: Leave the form empty.
    - `creationDate.to`: Leave the form empty.
    - `databaseName`: Enter the name of the database that was accidentally deleted (example: **deletedDatabase.mysql.db**).
    - `deletionDate.from`: Leave the form empty.
    - `deletionDate.to`: Leave the form empty.
    - `orphan`: Enter lowercase value: `true`.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump.png){.thumbnail}

Once you have filled in the forms, click on the blue `TRY`{.action} button in the bottom right-hand corner of the two sections that have been filled in.

If everything has been entered correctly and backups are available for the deleted database, a list of backup ID numbers will appear in the `RESPONSE`{.action} window below the `TRY`{.action} button.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-response.png){.thumbnail}

Each of these numbers corresponds to an available backup ID. These backup ID numbers appear from the most recent to the oldest. **Copy the highest ID from the list** (without the `,` at the end) if you want to recover (in step 4 of this guide) the most recent backup of your deleted database.

If no ID appears in the window, check that you are logged in correctly with the correct OVHcloud NIC handle (if you have several). Also, check the information entered in the **PATH PARAMETERS** and **QUERY-STRING PARAMETERS** sections. Then try the operation again.

If you still do not have an ID, it means that there are no or no more backups available for the deleted database on our infrastructure.

### Step 4 - Retrieve the last backup

Using the backup ID number retrieved in step 3, you can download the last backup of your deleted database using an API-generated link.

To do this, perform the following actions on our website [OVHcloud API](/links/api):

- On the left-hand side of the page, go to the form to the right of `v1`{.action}, then select or enter `/hosting/web`{.action}.
- From the list of endpoints that appears in the left-hand column, click on: **GET /hosting/web/{serviceName}/dump/{id}**. You can also click directly on the following path to access it:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump/{id}
>

- On the right-hand side of the page, you will then see the API path with its various parameters.

Fill in the various forms in the `PATH PARAMETERS` section as follows:

- `id`: Copy the backup ID number retrieved in step 3. If you were not logged out of our OVHcloud API website, the interface can offer you the different backup ID numbers available. If this is the case, you can click on the first ID number in the list just below the form **id**.
- `serviceName`: Enter the name of your web hosting plan, which you retrieved in step 1 of this guide.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id.png){.thumbnail}

Once you have filled in the forms, click on the blue `TRY`{.action} button in the bottom right-hand corner of the section that has been filled in.

If everything has been entered correctly, the following result will appear in the `RESPONSE`{.action} window below the `TRY`{.action} button:

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id-response.png){.thumbnail}

```bash
{
  "taskId": null,
  "orphan": true,
  "status": "created",
  "deletionDate": "2024-07-18T20:02:00+02:00",
  "databaseName": "deleteDatabase.mysql.db",
  "url": "Find here the complete URL to download the deleted database backup",
  "type": "now",
  "creationDate": "2024-06-17T22:17:42+02:00",
  "id": 22XXXXX888
}
```

> [!warning]
>
> Rows in the above result may not always appear in this order.
>

In this result, copy the entire URL in HTTPS **without the quotation marks** in the line `"url":`, then paste it into the search bar of your web browser to start downloading the backup.

### Step 5 - Create a new database, import the backup file and re-establish the link between your website and the new database

Once you have retrieved the backup of your database, you will need to create a new database. To do this, please refer to our guide on "[Creating a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database)".

Once this new database has been created, import the backup using our guide “[Importing a backup into a Web Hosting plan database](/pages/web_cloud/web_hosting/sql_importing_mysql_database)”.

Finally, link your OVHcloud database with your website’s configuration file in the [FTP storage space of your OVHcloud hosting plan](/pages/web_cloud/web_hosting/ftp_connection).
To do this, replace the connection information of the database accidentally deleted with that of your new OVHcloud database. This information can be found in your website’s "configuration/connection to your database" file.

> [!success]
>
> To link your new database if you are using a Content Management System (CMS) such as WordPress, Joomla!, Drupal or PrestaShop, you can find information on their configuration files in **step 2** of the guide “[Changing a database password](/pages/web_cloud/web_hosting/sql_change_password)”.
>

## Go further <a name="go-further"></a>

[Creating a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database).

[Importing a backup into a web hosting database](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Changing a database password](/pages/web_cloud/web_hosting/sql_change_password).
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).
