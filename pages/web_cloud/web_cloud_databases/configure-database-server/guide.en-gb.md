---
title: 'Configuring your database server'
excerpt: 'Find out how to configure and optimise your database server'
updated: 2024-03-20
---

## Objective

With the Web Cloud Databases database servers, you can influence your server’s global settings. You can also view your server's activity.

**Find out how to configure and optimise your database server.**

## Requirements

- A [Web Cloud Databases instance](https://www.ovh.co.uk/cloud/cloud-databases/) (included in a [Performance web hosting plan](/links/web/hosting)).
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### View general information on your database server

In your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud Databases`{.action} section, then select the SQL instance concerned. Click on the `General information`{.action} tab.

You can also view important information on your SQL instance. Please take a few moments to ensure that the information displayed is correct, and corresponds to the instructions below.

|Information|Details|
|---|---|
|Service status|Mainly shows if the instance has been rebooted, is in the process of rebooting, or is suspended. Your instance must be rebooted if you need to carry out any actions. |
|Type|Shows the database system used by the server. If you are unsure if the correct type is being used, please note that the most common version is “MySQL”, but other types also exist (PostgreSQL, MariaDB). For example, if you are using WordPress for your website, a MySQL system is perfect for it.|
|Version|Shows the database system version used by the server. Check that your website is compatible with the version you have chosen.|
|CPU throttling|Displays the CPU time spent in saturation over the last 24 hours.|
|RAM|Shows the RAM available for your instance, also shows if you are close to exceeding the RAM limit. Your database server has dedicated, guaranteed resources: its RAM. If required, you can scale the RAM, and receive warnings if you are consuming all of your instance’s RAM resources.|
|Infrastructure|Shows the infrastructure used by your instance. This information is inherent to the OVHcloud infrastructure.|
|Datacenter|Shows the data centre in which the instance has been created. Verify that your instance is hosted in is the same data centre as the OVHcloud Web Hosting plan that your website is based (or will be based) on.|
|Host|Shows the OVHcloud server your instance has been created in. This information is inherent to the OVHcloud infrastructure, and can be used in our communications on [OVHcloud incidents](https://web-cloud.status-ovhcloud.com/).|

![General information](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Manage your access

You can access your Web Cloud Databases from your OVHcloud web hosting plans or from the public network.

### Authorise an IP address

In order for your Web Cloud Databases instance to be accessible, you must enter the IP addresses or ranges that can connect to your database.

In your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud Databases`{.action} section, then select the Web Cloud Databases instance concerned. Click on the `General information`{.action} tab.

To do this, click on the `Authorised IPs`{.action} tab, then click `Add an IP address/mask`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}

In the window that pops up, enter the IP address or mask that you wish to authorise `IP/mask`{.action}, together with a description, if you wish. You can then decide if you want to grant access to the databases only, or to the SFTP as well. Finally, click `Confirm`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

#### Authorise connections to OVHcloud Web Hosting plans

For an OVHcloud web hosting plan, you can simply tick `Authorise OVHcloud web hosting plans to access the database`.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}

### Modify your Web Cloud Databases offer <a name="modify-ram-web-cloud-db"></a>

> [!warning]
> 
> If your Web Cloud Databases service is linked to a **Performance** web hosting plan, you will need detach it from your **Performance** web hosting plan beforehand in order to switch to a higher plan.
>
> To detach a Cloud Databases web hosting plan from a **Performance** web hosting plan, go to your [OVHcloud Control Panel](/links/manager). Click on the `Web Cloud`{.action} tab then on the relevant hosting plan in the `Hosting plans`{.action} section in the left-hand column. 
>
> On the new `General information`{.action} page that appears, you will see a box labelled `Configuration`{.action} in the centre of the page. To the right of `Web Cloud Databases`{.action}, click on the `...`{.action} button then `Detach`{.action}. Select the shortest renewal duration, then continue until you confirm your order.
>
> **This action cannot be undone, and the Cloud Databases web hosting plan will then be billed separately from your Performance web Hosting plan.**
>

To modify the solution for your Web Cloud Databases instance, go to your [OVHcloud Control Panel](/links/manager). Click the `Web Cloud` tab, and then click `Web Cloud Databases`{.action}. Select the name of your database server.

In the **General information** tab, displayed by default, click on `...`{.action} to the right of “RAM”, then on `Change the amount of RAM`{.action} to access the order for this modification.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}

Choose the amount of RAM you want, then click `Next`{.action}. You can then choose the duration you want.

> [!primary]
>
> The remaining term until expiration will be prorated. This pro rata calculation will be based on the expiration date of the Web Cloud Databases instance, not on the date of the purchase order.
>

Once you have confirmed your contracts, you will be redirected to the purchase order to pay for this change. It will then be effective within a few hours.

> [!warning]
>
> If you currently have a free Web Cloud Databases with your Performance hosting plan, it will no longer be free after modifying the plan.
>

### Modifying my database server’s configuration

In your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud` section, and then click `Web Cloud Databases`{.action}. Select the name of your Web Cloud Databases server.

#### MySQL and MariaDB instances

- Click on the `Configuration`{.action} tab.

In the **General configuration of MySQL** box, you will see the configuration currently set for your database. You can modify it directly, then click `Apply`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}

- <b>Tmpdir</b>: Directory of temporary files. <b>"/dev/shm"</b> is the instance’s RAM. <b>"/tmp"</b> is the instance’s hard drive.
- <b>MaxAllowedPacket</b>: The maximum packet size.
- <b>Max_user_connections</b>: The number of concurrent connections authorised per user.
- <b>AutoCommit</b>: Sets whether requests are automatically committed or not.
- <b>Interactive_timeout</b>: Time (in seconds) for which the server will wait for activity on an interactive connection before closing the connection.
- <b>InnodbBufferPoolSize</b>: The selected buffer memory size.
- <b>MaxConnections:</b> The number of concurrent connections authorised on Web Cloud Databases.
- <b>Wait_timeout</b>: Time (in seconds) for which the server will wait for activity on a non-interactive connection before closing the connection.
- <b>Event_scheduler</b>: Is used to trigger the execution of requests programmed directly on the MySQL server.
- <b>sql_mode</b>: The <b>sql_mode</b> option affects the supported SQL syntax, and the data validation performed by MySQL/MariaDB.

> [!primary]
> When you encounter an error on your website stating "**Too many connections**", this is due to the number of simultaneous connections on your database server being exceeded.
> You can then increase the **MaxConnections variable** if it is not at its maximum.
>

> [!primary]
>
> <b>Tmpdir</b>:
>
> - /dev/shm: The database server will allocate half of its RAM to this directory for higher performance.
>
> - /tmp: The server will allocate unlimited space on its hard disk for this directory, but this will be much less efficient. We recommend using this directory only for occasional heavy operations.
>

> [!primary]
>
> <b>sql_mode</b>:
>
> &emsp;&emsp;Default mode of MariaDB 10.1:
> <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
> 
> &emsp;&emsp;Default mode of MariaDB 10.2 and higher:
> <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>
> &emsp;&emsp;Default mode of MySQL 5.6:
> <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
> 
> &emsp;&emsp;Default mode of MySQL 5.7 and higher:
> <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>
> We recommend always using the default mode, unless your database was updated from a version with a default mode that is different from the current version.
>

Make the necessary changes, then click `Confirm`{.action}.

> [!warning]
>
> Any changes require a restart of the database server.
> 

#### PostgreSQL instances

- Click on the `Configuration`{.action} tab.

In the **General PostgreSQL configuration** box, you will find the configuration currently set for your database. You can modify it directly, then click `Apply`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}

- **log_min_messages**: Controls the levels of messages to be logged in the server logs. The levels available for a Web Cloud Databases solution are: 
    - **WARNING**: Provides warning messages about potential problems.
    - **ERROR**: Sends the error that caused an ongoing order to be cancelled.
    - **LOG**: Stores information for server administrators.
    - **FATAL**: Sends the error that caused the current session to end.
    - **PANIC**: Sends the error that caused all sessions to end.

Each level includes all levels that follow it. The higher the level, the fewer messages are recorded in the server logs.

By default, the value set is **WARNING** because it includes the values **ERROR**, **LOG**, **FATAL**, and **PANIC**.

You can also enable extensions for your databases. To do this, go to the `Databases`{.action} tab, and click on the table icon for your database in the **Extensions** column.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}

### Change the MySQL, PostgreSQL or MariaDB version of the database server

To find out the version of MySQL, PostgreSQL or MariaDB of your database server, you must go to the **General information** tab after choosing your database server.

The current version appears in the **Version** row.

To edit this version, click `Update version`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}

#### How do I know the exact version of PostgreSQL I am using?

Enter this command in phpPgAdmin by clicking on **Your database** in the **SQL** section, then click `Launch`{.action}:

```sql
select version();
```

#### How do I know the exact version of MySQL or MariaDB that I am using?

To do this, enter this command in phpMyAdmin, in the **SQL** section, then click `Run`{.action}:

```sql
show variables like "version";
```

> [!primary]
>
> - Before migrating to a higher version, ensure that your database is compatible with the version you have chosen.
> - The modification will be effective in a few minutes.
>

> [!warning]
>
> It is not possible to switch from an old version to the latest version
> directly. It is mandatory to use all intermediate versions.
>

### Logs and metrics

#### Log access

To access the logs for your Web Cloud Databases solution, please refer to our guide "[Web Cloud Databases - How to retrieve logs](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

#### Monitoring the RAM used

In your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud` section, and then click `Web Cloud Databases`{.action}. Select the name of your Web Cloud Databases server.

Go to the `Metrics` tab in the OVHcloud Control Panel. You will find the graph **RAM usage statistics**.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}

#### Number of connections per minute

This graph allows you to track, over the last 24 hours, the load of connections per minute on your database server.

In your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud` section, and then click `Web Cloud Databases`{.action}. Select the name of your Web Cloud Databases server.

Go to the `Metrics` tab in the OVHcloud Control Panel. You will find the graph **Statistics for total connections per minute**.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}

### Managing your databases

It is recommended that you maintain your database to ensure high performance. Performance refers to the fact that the information contained in the database is most quickly returned to the script that requests it. This requires a structured and optimised database.

#### Indexing a database

To increase the speed of searches during a query, you must index the fields that are used in WHERE clauses.

Example: you do a regular search for people in relation to the city. Index the “city” field with the following query:

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

#### Purging a database

Some of your data is no longer being accessed? By archiving it, your tables will be less crowded and searches will go faster.

#### Display limit

Limit the display of records to a fixed number (for example: 10 per page) with the **"LIMIT"** portion of your SQL query.

#### Query grouping

Group your queries at the beginning of the script this way:

```bash
open_connection
request1
request2
...
close_connection

Display...
Treat data
Loop through data...
Display...
...
```

#### Retrieve only useful data

In your SQL queries, make sure you select only what you need, and especially that you have not forgotten the links between the tables.

Example:

```sql
(where table1.champs = table2.champs2)
```

#### Avoid options that consume too many resources

Avoid using **"HAVING"** for example. It increases your requests. Similarly, avoid using **“GROUP BY”**, unless it is strictly necessary.

## Go further

[IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).