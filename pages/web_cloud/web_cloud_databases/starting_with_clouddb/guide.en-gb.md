---
title: 'Getting started with the Web Cloud Databases service'
excerpt: 'Find out how to get started with the Web Cloud Databases service'
updated: 2024-03-18
---

## Objective

With the Web Cloud Databases solution, you get a database instance with dedicated, guaranteed resources that gives you performance and flexibility.
Your Web Cloud Databases solution is linked to the OVHcloud web hosting network by default. You can link it to any other network, via a list of authorised IP addresses.

**Find out how to get started with a Web Cloud Databases service.**

## Requirements

- A [Web Cloud Databases instance](https://www.ovh.co.uk/cloud/cloud-databases/) (included in [Performance web hosting plans](/links/web/hosting)).
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Web Cloud Databases server activation included with your Web Hosting plan

If your hosting plan includes the Web Cloud Databases option, go to the [OVHcloud Control Panel](/links/manager){.external}. In the `Web Cloud`{.action} section, click `Hosting plans`{.action} in the left-hand column.

In the `General information` tab, in the `Configuration` box, click the `...`{.action} button to the right of **Web Cloud Databases**. Then click `Enable`{.action} to start the activation process.

![Informations générales](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}

To complete the activation, follow the instructions to determine the type and version of your Web Cloud Databases server. It will then be accessible from the left column in `Web Cloud Databases`{.action}.

### View general information about the instance

In the services bar on the left-hand side of the [OVHcloud Control Panel](/links/manager){.external}, go to the `Web Cloud Databases`{.action} section, then to the instance. Click on the `General information`{.action} tab.

> [!primary]
>
> The name of the Web Cloud Databases service in your OVHcloud Control Panel contains part of your NIC handle (username), and ends with three figures (001 for the first Web Cloud Databases service installed, 002 for the second, etc.).
>

You can also view important information about your instance. Please take a few moments to ensure that the information displayed is correct, and corresponds to the instructions below.

|Information|Details|
|---|---|
|Service status|Mainly shows whether the instance has been rebooted, is in the process of rebooting, or is suspended. Your instance must be rebooted if you need to carry out any actions. |
|Type|Shows the database system used by the server.|
|Version|Shows the database system version used by the server. Check that your website is compatible with the version you have chosen.|
|CPU throttling|Displays the CPU time spent in saturation. Your Web Cloud Databases instance is not limited in terms of CPU, but you must be careful not to overload the CPU of your Web Cloud Databases.|
|RAM|Shows the RAM available for your instance and indicates RAM overflow. Your Web Cloud Databases instance uses dedicated, guaranteed RAM resources. If required, you can scale the RAM and receive warnings when your RAM usage exceeds the limit.|
|Infrastructure|Shows the infrastructure that your instance uses. This information relates to the OVHcloud infrastructure.|
|Datacenter|Shows the data centre where the instance has been created.|
|Host|Shows the OVHcloud server where your instance is. This information relates to the OVHcloud infrastructure, and we may use it in our communication on [OVHcloud incidents](http://status.ovh.net/){.external}.|

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Create a database

> [!primary]
>
> This step does not apply to the Redis database system.
>

To create your first database on your Web Cloud Databases instance, click on the `Databases`{.action} tab, then on the `Add a database`{.action} button.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}

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

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-create-user-confirmation.png){.thumbnail}

### Create a user

> [!primary]
>
> This step does not apply to the Redis database system.
>

If you created a user whilst creating a database in the previous step, this step is optional. However, for more specific projects, you may need several users to be able to access your database. For example, one user associated with a database may need to have read and write permissions, whilst another may need only read permissions.

If you do not need an additional user for your project, you can move straight to the following step. If you do need to create a user in your Web Cloud Databases instance, you can click on the `Users and permissions`{.action} tab, then on the `Add a user`{.action} button.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}

In the window that pops up, fill in the information requested, and click `Confirm`{.action}.

|Information|Description|
|---|---|
|Username|This is the user that can log in to your instance. You can give them permissions on your database in the next step.|
|Password|Enter a password, then confirm it.|

> [!warning]
>
> For security reasons, please follow the conditions required when you enter information.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user-confirmation.png){.thumbnail}

Once you have created a user, you will need to assign rights that allow them to perform actions on your database (such as reading, adding or deleting data). To do this, click on the cog wheel icon, then `Manage rights`{.action}. On the new page, select the right by clicking on it. For standard usage, select Administrator.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-2.png){.thumbnail}

### Import a database

> [!primary]
>
> This step applies if you want to import the backup of an existing database. Otherwise, please go to the next step.
>

There are several methods you can choose from to import a database. There is a tool available in your OVHcloud Control Panel, and we are going to focus on this method. However, you may of course use another method, if you prefer to do so and are familiar with it.

The steps below show how to import a database using the tool available in your OVHcloud Control Panel.

#### Step 1: Access the import interface.

Go to the `Databases`{.action} tab, click on the cog wheel icon, then `Import a file`{.action}. On the window that opens, tick the `Import a new file`{.action} box, then click `Next`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}

#### Step 2: Select and send the backup file.

Enter a filename that will allow you to identify this backup later, if you want to restore it again. Then, next to **File**, select the database backup file from your computer, and click `Send`{.action}. Wait until the interface confirms that the file has been sent successfully, then click `Next`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}

#### Step 3: Launch the database importation.

Finally, choose whether or not the additional options set out below should apply, and click `Confirm`{.action}.

|Additional options|Description|
|---|---|
|Empty the current database|The content in the database will be deleted entirely, and replaced by the content in your backup.|
|Send an email once the importation is complete|You will be sent an email notification when the database import is complete.|

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-3-send-email.png){.thumbnail} 

### Authorise an IP address <a name="trustip"></a>

In order for your Web Cloud Databases instance to be accessible, you must enter the IP addresses or ranges that can connect to your database. To do this, click on the `Authorised IPs`{.action} tab, then click `Add an IP address/mask`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-2.png){.thumbnail}

In the window that pops up, enter the IP address or mask that you wish to authorise in `IP/mask`{.action} together with a description if you wish. You can then decide if you want to grant access to the databases only, or to the SFTP as well. Finally, click `Confirm`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

#### Authorise the connection for an OVHcloud Web Hosting plan <a name="trustip"></a>

By default, your Web Cloud Databases solution is automatically linked to OVHcloud web hosting plans. However, you can disable access to your Web Cloud Databases database for OVHcloud web hosting plans if you wish.

To do this, click on the `authorised IPs`{.action} tab then on the `Access to OVHcloud web hosting plans`{.action} button.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/access-to-ovhcloud-web-hosting.png){.thumbnail}

### Link your website to the database

Now that you have created your database, created one or more users with access to it, and authorised at least one IP address or OVHcloud web hosting plans on your Web Cloud Databases instance, you just need to link your website to your database. You can use several methods to do this, depending on your website, the CMS you are using (WordPress, Joomla! etc.), or the stage you are at if you are setting up a website.

No matter which method you choose to follow, you must have the following five pieces of information to hand, to ensure that you do this successfully:

|Information|Description|
|---|---|
|Database name|The name you entered when you created your database. You can view all the databases created in your Web Cloud Databases instance under the `Databases`{.action} tab.|
|Username|The name of the user you entered when you created the database, or the name of an additional user that you created at a later stage. You can view all the users created in your Web Cloud Databases instance under the `Users and permissions`{.action} tab.|
|User password|The password associated with the user, which was defined during the previous steps.|
|Server hostname|The server that needs to be entered for your website to be connected to your database. You can access this information in your Control Panel by going to the `Connections`{.action} section, then the General information tab.|
|Server port|The port for connecting to your Web Cloud Databases instance, so that your website can connect to your database. You can access this information in your Control Panel by going to the `Connections`{.action} section, then the `General information`{.action} tab.|

> [!warning]
>
> The field `Server port`{.action} may not be available in your site configuration. In this case, add this value after the hostname of your server, separated by a *:*. <br><br>
> For example, for the hostname `zz1111111-002.eu.clouddb.ovh.net` with SQL port `34567`, you will need to enter `zz1111111-002.eu.clouddb.ovh.net:34567` as the host/hostname ("Server hostname").
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/login-information.png){.thumbnail}

### Retrieve your Web Cloud Databases server logs

To access the logs for your Web Cloud Databases solution, please refer to our guide "[Web Cloud Databases - How to retrieve logs](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).