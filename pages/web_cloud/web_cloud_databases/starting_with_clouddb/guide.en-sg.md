---
title: 'Getting started with the Web Cloud Databases service'
excerpt: 'Find out how to get started with the Web Cloud Databases service'
updated: 2026-03-24
---

## Objective

The Web Cloud Databases solution provides a database instance with dedicated and guaranteed resources, offering performance and flexibility.
By default, your Web Cloud Databases solution is linked to the OVHcloud web hosting network. You can also link it to any other network via a list of authorised IP addresses.

**Find out how to get started with the Web Cloud Databases service.**

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

### Activating your Web Cloud Databases server included with your web hosting plan

<!-- CP-STEPS-START:activating-wcdb-server -->
If your hosting plan includes the Web Cloud Databases option, click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> In the `General information` tab, under `Configuration`, click `...`{.action} next to **Web Cloud Databases**, then click `Enable`{.action}.
>>
>> ![General information](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}
>>
> **Step 3**
>>
>> Follow the instructions to choose the type and version. Your server will then appear in the left-hand column under `Web Cloud Databases`{.action}.
<!-- CP-STEPS-END:activating-wcdb-server -->

### Viewing the general information of the instance

<!-- CP-STEPS-START:viewing-general-information -->
Click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > The name of the Web Cloud Databases service in your OVHcloud Control Panel contains part of your customer reference and ends with three digits (001 for the first Web Cloud Databases service installed, 002 for the second, etc.).
>>
> **Step 2**
>>
>> Make sure you are on the `General information`{.action} tab.
>>
>> Check that the displayed information is correct or matches the details below.
>>
>> |Information|Details|
>> |---|---|
>> |Service status|Shows whether the instance is started, restarting, or suspended. Your instance must be started to perform actions on it.|
>> |Type|Shows the database system used by the server.|
>> |Version|Shows the version of the database system used by the server. Make sure your website is compatible with the chosen version.|
>> |CPU saturation|Shows CPU time spent in saturation. Your Web Cloud Databases instance is not limited in terms of CPU, but you must ensure you do not overload it.|
>> |RAM|Shows the RAM available for your instance, as well as any memory overflows. Your Web Cloud Databases instance has dedicated and guaranteed resources: its RAM. If needed, you can upgrade it and be notified if you are consuming all the memory resources of your instance.|
>> |Infrastructure|Shows the infrastructure used by your instance. This is information inherent to the OVHcloud infrastructure.|
>> |Datacenter|Shows the data centre where the instance was created.|
>> |Host|Shows the OVHcloud server on which your instance was created. This is information inherent to the OVHcloud infrastructure and may be used in communications related to [OVHcloud incidents](https://www.status-ovhcloud.com/).|
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}
<!-- CP-STEPS-END:viewing-general-information -->

### Creating a database

> [!primary]
>
> This step does not apply to the Redis database system.

<!-- CP-STEPS-START:creating-a-database -->
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
>> Fill in the fields following the criteria listed. You can create a user directly by ticking the **"Create a user"** box:
>>
>> - **Database name** (required): this will be the name of your future database.
>> - **Username** (only if the `Create a user` box is ticked): the user who will be able to log in to your database and perform queries.
>> - **Rights** (only if the `Create a user` box is ticked): the permissions associated with the user on the database. For standard usage, select `Administrator`{.action}. The permissions can be modified afterwards.
>> - **Password**/**Confirm password** (only if the `Create a user` box is ticked): select a password, then confirm it.
>>
>> Click `Confirm`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:creating-a-database -->

### Creating a user

> [!primary]
>
> This step does not apply to the Redis database system.

If you created the user at the same time as your database in the previous step, this step is optional. However, a project may require several users with different rights (for example, read/write for one and read-only for another).

If your project does not require an additional user, you can skip to the next step. Otherwise, click on the tabs below to view each of the **4** steps.

<!-- CP-STEPS-START:creating-a-user -->

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

If you need to modify an existing user's rights, refer to our guide "[Web Cloud Databases - Modifying a user's rights](/pages/web_cloud/web_cloud_databases/modify_rights_for_users)".
<!-- CP-STEPS-END:creating-a-user -->

### Importing a database

> [!primary]
>
> This step applies if you want to import a backup of an existing database. If not, skip to the next step.

To import a database, refer to our guide "[Restoring and importing a database to your database server](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)".

Several import methods are described there.

### Authorising an IP address

For your Web Cloud Databases instance to work, you must specify the IPs or IP ranges that are allowed to connect to your databases.

<!-- CP-STEPS-START:authorising-an-ip-address -->
To do this, click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> On the page that appears, click on the `Authorised IPs`{.action} tab.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Step 3**
>>
>> Click the `Add an IP address/mask`{.action} button above the table.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > If you want to modify an already authorised IP address or range, click the `...`{.action} button to the right of the corresponding line in the table, then click `Edit the whitelist`{.action}.
>>
> **Step 4**
>>
>> In the window that opens, several fields need to be completed:
>>
>> ![Add an IP address or mask](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP/mask *`{.action}: Enter the IP address (e.g. `203.0.113.44`) or IP range (e.g. `203.0.113.0/24` representing all IP addresses from `203.0.113.0` to `203.0.113.255`) that you want to authorise on your Web Cloud Databases solution.
>> - `Description`{.action} (optional): You can add information about the role of the IP address or range concerned.
>> - `Databases`{.action}: Tick this box to allow the IP address or range to access the databases on your Web Cloud Databases solution.
>> - `SFTP`{.action}: Tick this box to allow the IP address or range to access the logs of your Web Cloud Databases solution.
>>
>> > [!warning]
>> >
>> > It is strongly advised not to tick the `Databases`{.action} box to authorise the IP range `0.0.0.0/0` to access your databases.
>> >
>> > This would allow all existing IPv4 addresses to access your databases.
>>
>> Once the information is entered, click the `Confirm`{.action} button.
<!-- CP-STEPS-END:authorising-an-ip-address -->

### Authorising connections from an OVHcloud web hosting plan <a name="trustip"></a>

By default, your Web Cloud Databases solution is automatically linked to OVHcloud web hosting plans. If you wish, you can disable access from OVHcloud web hosting plans to your Web Cloud Databases.

To do this, refer to the specific cases in our guide "[Web Cloud Databases - How to authorise an IP address?](/pages/web_cloud/web_cloud_databases/authorise_IP)" to enable or disable access from OVHcloud web hosting plans to your Web Cloud Databases.

### Linking your website to the database

Now that your database is created, one or more users have rights on it, and at least one IP address or OVHcloud web hosting plans have been authorised on your Web Cloud Databases instance, all that remains is to link your website to your database. This step can be done in several ways, depending on the website or CMS (WordPress, Joomla!, etc.) used, and the stage you are at if you are installing a website.

<!-- CP-STEPS-START:linking-website-to-database -->
To do this, you need the following 5 pieces of information:

|Information|Description|
|---|---|
|Database name|The name you defined when creating the database.|
|Username|The username you defined when creating the database, or any additional user you may have added.|
|User password|The password linked to the user, which you defined during previous steps.|
|Server hostname|The server to enter so that your website can connect to your database.|
|Server port|The connection port to your Web Cloud Databases instance, so that your website can connect to your database.|

To find them, click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Retrieve the following connection details:
>>
>> - **Server (hostname) and port:** visible in the `General information`{.action} tab, in the `Connection information` section.
>> - **Username:** visible in the `Users and Rights`{.action} tab.
>> - **Password:** the password associated with the user. If you have forgotten it, go to the `Users and Rights`{.action} tab, click `...`{.action} to the right of the user concerned, then click `Change password`{.action}.
>>
>> > [!warning]
>> >
>> > If you change a database user's password, all applications/websites that access this database must be updated accordingly.

> [!warning]
>
> The `port`{.action} field may not be available in your website's configuration. You must add this field after the server hostname, separated by a *:*.
>
> For example, for the hostname `aaXXXXX-XXX.eu.clouddb.ovh.net` with SQL port `12345`, you would enter `aaXXXXX-XXX.eu.clouddb.ovh.net:12345` in the "Host" / "Hostname" section.
<!-- CP-STEPS-END:linking-website-to-database -->

### Retrieving the logs for your Web Cloud Databases server

To access the logs for your Web Cloud Databases solution, refer to our guide "[Web Cloud Databases - How to manage logs](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

## Go further

[Creating databases and users on your database server](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)

[Connecting to a database on your database server](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)

[Backing up and exporting a database on your database server](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restoring and importing a database to your database server](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

[Configuring your database server](/pages/web_cloud/web_cloud_databases/configure-database-server)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
