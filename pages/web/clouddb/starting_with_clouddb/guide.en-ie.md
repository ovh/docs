---
title: 'Getting started with the CloudDB service'
slug: getting-started-with-clouddb
excerpt: 'Find out how to get started with the CloudDB service'
section: 'Getting started'
order: 01
---

**Last updated 28th January 2022**

## Objective

With the CloudDB solution, you get a database instance with dedicated, guaranteed resources that gives you performance and flexibility.
Your CloudDB solution is linked to the OVHcloud web hosting network by default. You can link it to any other network, via a list of authorised IP addresses.

**Find out how to get started with a CloudDB service.**

## Requirements

- a [CloudDB instance](https://www.ovhcloud.com/en-ie/web-hosting/) (included in [web hosting plans Performance](https://www.ovhcloud.com/en-ie/web-hosting/)).
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)

## Instructions

### CloudDB server activation included with your Web Hosting plan

If your hosting plan includes the CloudDB option, go to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. In the `Web Cloud`{.action} section, click `Web Hosting`{.action} in the left-hand column.

In the `General information` tab, in the `Configuration` box, click the `...`{.action} button to the right of **Private database**. Then click `Enable`{.action} to start the activation process.

![General information](images/db-activation.png){.thumbnail}

To complete the activation, follow the instructions to determine the type and version of your CloudDB server. It will then be accessible from the left column in `Database`{.action}.

### View general information about the instance

In the services bar on the left-hand side of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, go to the `Databases`{.action} section, then to the instance. Click on the `General information`{.action} tab.

> [!primary]
>
> The name of the CloudDB service in your OVHcloud Control Panel contains part of your NIC handle (username), and ends with three figures (001 for the first CloudDB service installed, 002 for the second, etc.).
>

You can also view important information about your instance. Please take a few moments to ensure that the information displayed is correct, and corresponds to the instructions below.

|Information|Details|
|---|---|
|Service status|Mainly shows whether the instance has been rebooted, is in the process of rebooting, or is suspended. Your instance must be rebooted if you need to carry out any actions. |
|Type|Shows the database system used by the server.|
|Version|Shows the database system version used by the server. Check that your website is compatible with the version you have chosen.|
|RAM|Shows the RAM available for your instance, also shows if you are close to exceeding the RAM limit. Your CloudDB instance uses dedicated, guaranteed resources: its RAM. If required, you can scale the RAM, and receive warnings if you are consuming all of your instance’s RAM resources.|
|Infrastructure|Shows the infrastructure that your instance uses. This information relates to the OVHcloud infrastructure.|
|Datacentre|Shows the datacentre where the instance has been created.|
|Host|Shows the OVHcloud server where your instance is. This information relates to the OVHcloud infrastructure, and we may use it in our communication on [OVHcloud incidents](http://status.ovh.net/){.external}.|

![clouddb](images/clouddb-general-information.png){.thumbnail}

### Create a database

> [!primary]
>
> This step does not apply to the Redis database system.
>

To create your first database on your CloudDB instance, click on the `Databases`{.action} tab, then on the `Add a database`{.action} button.

![clouddb](images/clouddb-add-database.png){.thumbnail}

In the window that pops up, and at the same time as you create the database, you can choose to:

-  **Create a user**: this user will be able to submit requests to your database (such as reading, adding or deleting data).

- **Add an authorised IP address**: requests coming from this address will be allowed to access your database.

Fill in the information requested depending on what you choose to do, and click `Confirm`{.action}.

|Information|Description|
|---|---|
|Database name|This is the name of your future database.|
|Username|This is the user that can log in to your database and perform requests (optional if the “*Create a user*” box has not been ticked).|
|Permissions|These are the permissions that will be associated with the user. For standard usage, select `Administrator`{.action} (optional if the “*Create a user*” box has not been ticked).|
|Password|Select a password, then confirm it (optional if the “*Create a user*” box has not been ticked).|
|IP/mask|This is the IP address or the IP mask for the server(s) that is/are authorised to access your databases (optional if the “*Add an authorised IP address*” box has not been ticked). |

> [!warning]
>
> For security reasons, please follow the conditions required when you enter information.
>

![clouddb](images/clouddb-add-database-step2.png){.thumbnail}

### Create a user

> [!primary]
>
> This step does not apply to the Redis database system.
>

If you created a user whilst creating a database in the previous step, this step is optional. However, for more specific projects, you may need several users to be able to access your database. For example, one user associated with a database may need to have read and write permissions, whilst another may need only read permissions.

If you do not need an additional user for your project, you can move straight to the following step. If you do need to create a user in your CloudDB instance, you can click on the `Users and permissions`{.action} tab, then on the `Add a user`{.action} button.

![clouddb](images/clouddb-add-user.png){.thumbnail}

In the window that pops up, fill in the information requested, and click `Confirm`{.action}.

|Information|Description|
|---|---|
|Username|This is the user that can log in to your instance. You can give them permissions on your database in the next step.|
|Password|Enter a password, then confirm it.|

> [!warning]
>
> For security reasons, please follow the conditions required when you enter information.
>

![clouddb](images/clouddb-add-user-step2.png){.thumbnail}

Once you have created a user, you will need to assign rights that allow them to perform actions on your database (such as reading, adding or deleting data). To do this, click on the cog wheel icon, then `Manage rights`{.action}. On the new page, select the right by clicking on it. For standard usage, select Administrator.

![clouddb](images/clouddb-add-rights.png){.thumbnail}

### Import a database

> [!primary]
>
> This step applies if you want to import the backup of an existing database. Otherwise, please go to the next step.
>

There are several methods you can choose from to import a database. There is a tool available in your OVHcloud Control Panel, and we are going to focus on this method. However, you may of course use another method, if you prefer to do so and are familiar with it.

The steps below show how to import a database using the tool available in your OVHcloud Control Panel.

#### Step 1: Access the import interface.

Go to the `Databases`{.action} tab, click on the cog wheel icon, then `Import a file`{.action}. On the window that opens, tick the `Import a new file`{.action} box, then click `Next`{.action}.

![clouddb](images/clouddb-add-import-step1.png){.thumbnail}

#### Step 2: Select and send the backup file.

Enter a filename that will allow you to identify this backup later, if you want to restore it again. Then, next to **File**, select the database backup file from your computer, and click `Send`{.action}. Wait until the interface confirms that the file has been sent successfully, then click `Next`{.action}.

![clouddb](images/clouddb-add-import-step2.png){.thumbnail}

#### Step 3: Launch the database importation.

Finally, choose whether or not the additional options set out below should apply, and click `Confirm`{.action}.

|Additional options|Description|
|---|---|
|Empty the current database|The content in the database will be deleted entirely, and replaced by the content in your backup.|
|Send an email once the importation is complete|You will be sent an email notification when the database import is complete.|

![clouddb](images/clouddb-add-import-step3.png){.thumbnail} 

### Authorise an IP address

In order for your CloudDB instance to be accessible, you must enter the IP addresses or ranges that can connect to your database. To do this, click on the `Authorised IPs`{.action} tab, then click `Add an IP address/mask`{.action}.

![clouddb](images/clouddb-add-ip-2022.png){.thumbnail}

In the window that pops up, enter the IP address or mask that you wish to authorise in `IP/mask`{.action} together with a description if you wish. You can then decide if you want to grant access to the databases only, or to the SFTP as well. Finally, click `Confirm`{.action}.

![clouddb](images/clouddb-add-ip-step2.png){.thumbnail}

#### Authorise the connection for an OVHcloud Web Hosting plan <a name="trustip"></a>

By default, your CloudDB solution is automatically linked to OVHcloud web hosting plans. However, you can disable access to your CloudDB database for OVHcloud web hosting plans if you wish.

To do this, click on the `authorised IPs`{.action} tab then on the `Access to OVHcloud web hosting plans`{.action} button.

### Link your website to the database

Now that you have created your database, created one or more users with access to it, and authorised at least one IP address or OVHcloud web hosting plans on your CloudDB instance, you just need to link your website to your database. You can use several methods to do this, depending on your website, the CMS you are using (WordPress, Joomla! etc.), or the stage you are at if you are setting up a website.

No matter which method you choose to follow, you must have the following five pieces of information to hand, to ensure that you do this successfully:

|Information|Description|
|---|---|
|Database name|The name you entered when you created your database. You can view all the databases created in your CloudDB instance under the `Databases`{.action} tab.|
|Username|The name of the user you entered when you created the database, or the name of an additional user that you created at a later stage. You can view all the users created in your CloudDB instance under the `Users and permissions`{.action} tab.|
|User password|The password associated with the user, which was defined during the previous steps.|
|Server hostname|The server that needs to be entered for your website to be connected to your database. You can access this information in your Control Panel by going to the `Connections`{.action} section, then the General information tab.|
|Server port|The port for connecting to your CloudDB instance, so that your website can connect to your database. You can access this information in your Control Panel by going to the `Connections`{.action} section, then the `General information`{.action} tab.|

> [!warning]
>
> In some rare cases, the `port`{.action} field may not be available in your website’s configuration. If this is the case, you will need to add this field after your server’s host name, separating them with a *:* (e.g.: hostname:port).
>

![clouddb](images/clouddb-login-information.png){.thumbnail}

### Retrieve your CloudDB server logs

To check your database’s latest logs, go to the `Logs`{.action} tab of your CloudDB server. This tab displays alerts and errors in real time.

![clouddb](images/clouddb-log01.png){.thumbnail}

To retrieve all logs for your CloudDB server, log in via SFTP on it.

> [!warning]
>
> Before logging in, check that the IP address of the workstation you are using is authorised on your CloudDB server, with the `SFTP` option ticked. Use the [Authorise connection to an OVHcloud web hosting plan](#trustip) section of this guide.

You can find the SFTP login details in the `General information`{.action} tab of your CloudDB server. If you do not know the `Server password`, click the `...`{.action} button on the right to modify it.

![clouddb](images/clouddb-log02.png){.thumbnail}

Log in via an FTP client (FileZilla, Cyberduck, WinSCP, etc.).

For FileZilla, in the `File`{.action} menu, go to the `Site Manager`{.action}. Click `New Site`{.action}, and enter the settings you have listed.

![clouddb](images/clouddb-log03.png){.thumbnail}

The log file, named `stdout.log`, is located at the root.

## Go further

Join our community of users on <https://community.ovh.com/en/>.