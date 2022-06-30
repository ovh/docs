---
title: 'Configuring your database server'
slug: configure-optimise-database-server
excerpt: 'Find out how to configure and optimise your database server'
section: Configuration
order: 6
---

**Last updated 30th June 2022**

## Objective

With the CloudDB database servers, you can influence your server’s global settings. You can also view your server's activity.

**Find out how to configure and optimise your database server.**

## Requirements

- A [CloudDB instance](https://www.ovh.co.uk/cloud/cloud-databases/) (included in a [Performance web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/)).
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### View general information on your database server

In your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Databases`{.action} section, then select the SQL instance concerned. Click on the `General information`{.action} tab.

You can also view important information on your SQL instance. Please take a few moments to ensure that the information displayed is correct, and corresponds to the instructions below.

|Information|Details|
|---|---|
|Service status|Mainly shows if the instance has been rebooted, is in the process of rebooting, or is suspended. Your instance must be rebooted if you need to carry out any actions. |
|Type|Shows the database system used by the server. If you are unsure if the correct type is being used, please note that the most common version is “MySQL”, but other types also exist (PostgreSQL, MariaDB). For example, if you are using WordPress for your website, a MySQL system is perfect for it.|
|Version|Shows the database system version used by the server. Check that your website is compatible with the version you have chosen.|
|CPU throttling|Displays the CPU time spent in saturation over the last 24 hours.|
|RAM|Shows the RAM available for your instance, also shows if you are close to exceeding the RAM limit. Your database server has dedicated, guaranteed resources: its RAM. If required, you can scale the RAM, and receive warnings if you are consuming all of your instance’s RAM resources.|
|Infrastructure|Shows the infrastructure used by your instance. This information is inherent to the OVHcloud infrastructure.|
|Datacentre|Shows the datacentre in which the instance has been created. Verify that your instance is hosted in is the same datacentre as the OVHcloud Web Hosting plan that your website is based (or will be based) on.|
|Host|Shows the OVHcloud server your instance has been created in. This information is inherent to the OVHcloud infrastructure, and can be used in our communications on [OVHcloud incidents](https://web-cloud.status-ovhcloud.com/).|

![General information](images/privatesql01-General-information.png){.thumbnail}

## Manage your access

You can access your CloudDB from your OVHcloud web hosting plans or from the public network.

### Authorise an IP address

In order for your CloudDB instance to be accessible, you must enter the IP addresses or ranges that can connect to your database.

In your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Databases`{.action} section, then select the CloudDB instance concerned. Click on the `General information`{.action} tab.

To do this, click on the `Authorised IPs`{.action} tab, then click `Add an IP address/mask`{.action}.

![clouddb](images/clouddb-add-ip.png){.thumbnail}

In the window that pops up, enter the IP address or mask that you wish to authorise `IP/mask`{.action}, together with a description, if you wish. You can then decide if you want to grant access to the databases only, or to the SFTP as well. Finally, click `Confirm`{.action}.

![clouddb](images/clouddb-add-ip-step2.png){.thumbnail}

#### Authorise connections to OVHcloud Web Hosting plans

For an OVHcloud web hosting plan, you can simply tick `Authorise OVHcloud web hosting plans to access the database`.

![clouddb](images/clouddb-add-ip-step3.png){.thumbnail}

### Modify your CloudDB offer

To modify the solution for your CloudDB instance, go to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Click the `Web Cloud` tab, and then click `Database`{.action}. Select the name of your database server.

In the **General information** tab, displayed by default, click on `...`{.action} to the right of “RAM”, then on `Change the amount of RAM`{.action} to access the order for this modification.

![clouddb](images/private-sql-order-ram01.png){.thumbnail}

Choose the amount of RAM you want, then click `Next`{.action}. You can then choose the duration you want.

> [!primary]
>
> The remaining term until expiration will be prorated. This pro rata calculation will be based on the expiration date of the CloudDB instance, not on the date of the purchase order.
>

Once you have confirmed your contracts, you will be redirected to the purchase order to pay for this change. It will then be effective within a few hours.

> [!warning]
>
> If you currently have a free CloudDB with your Performance hosting plan, modifying the plan will make you lose it for free.
>


### Modifying my database server’s configuration

In your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Web Cloud` section, and then click `Databases`{.action}. Select the name of your CloudDB server.

#### MySQL and MariaDB instances

- Click on the `Configuration` tab.

In the **General configuration of MySQL** box, you will see the configuration currently set for your database. You can modify it directly, then click `Apply`{.action}.

![clouddb](images/private-sql-config02.png){.thumbnail}

- <b>Tmpdir</b>: Directory of temporary files. <b>"/dev/shm"</b> is the instance’s RAM. <b>"/tmp"</b> is the instance’s hard drive.
- <b>MaxAllowedPacket</b>: The maximum packet size.
- <b>Max_user_connections</b>: The number of concurrent connections authorised per user.
- <b>AutoCommit</b>: Sets whether requests are automatically committed or not.
- <b>Interactive_timeout</b>: Time (in seconds) for which the server will wait for activity on an interactive connection before closing the connection.
- <b>InnodbBufferPoolSize</b>: The selected buffer memory size.
- <b>MaxConnections:</b> The number of concurrent connections authorised on CloudDB.
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
> <pre class="highlight command-prompt"> <span class="prompt">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</span> </pre>
> 
> &emsp;&emsp;Default mode of MariaDB 10.2 and higher:
> <pre class="highlight command-prompt"> <span class="prompt">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</span> </pre>
>
> &emsp;&emsp;Default mode of MySQL 5.6:
> <pre class="highlight command-prompt"> <span class="prompt">NO_ENGINE_SUBSTITUTION</span> </pre>
> 
> &emsp;&emsp;Default mode of MySQL 5.7 and higher:
> <pre class="highlight command-prompt"> <span class="prompt">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span> </pre>
>
> We recommend always using the default mode, unless your database was updated from a version with a default mode that is different from the current version.
>

Make the necessary changes, then click `Confirm`{.action}.

> [!warning]
>
> Any changes require a restart of the database server.
> 

#### PostgreSQL instance

You cannot modify the configuration of a PostgreSQL instance.

However, you can enable extensions for your databases. To do this, go to the `Databases` tab, and click on the table icon for your database in the **Extensions** column.

![clouddb](images/private-sql-config03.png){.thumbnail}

### Change the MySQL, PostgreSQL or MariaDB version of the database server

To find out the version of MySQL, PostgreSQL or MariaDB of your database server, you must go to the **General information** tab after choosing your database server.

The current version appears in the **Version** row.

To edit this version, click `Update version`{.action}.

![clouddb](images/private-sql-config04.png){.thumbnail}

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

#### Query runtime statistics

This allows you to view the query execution time on your database server in the last 24 hours.

In your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Web Cloud` section, and then click `Databases`{.action}. Select the name of your CloudDB server.

Go to the `Metrics` tab for your database server. You will find the graph **Query Execution Time Statistics**.

![clouddb](images/private-sql-metrics01.png){.thumbnail}

#### Access to Slow Query logs

> **Definition of slow query log**
> 
> These are the queries that take longer to run. The value is set to 1 second on our database servers in the variable **“long_query_time”**.

These logs, labelled **"slow-query.log"**, can be retrieved from the root of the SFTP space of your database server.

In your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Web Cloud` section, and then click `Databases`{.action}. Select the name of your CloudDB server.

In the `General information` tab, you will find the **SFTP** section in the **Connection information** box.

![clouddb](images/private-sql-SFTP01.png){.thumbnail}

To log in via **SFTP**, you can do so via the FileZilla software, using [this guide](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/).

If this file is empty, you do not have any slow queries.

#### Monitoring the RAM used

In your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Web Cloud` section, and then click `Databases`{.action}. Select the name of your CloudDB server.

Go to the `Metrics` tab in the OVHcloud Control Panel. You will find the graph **RAM usage statistics**.

![clouddb](images/private-sql-metrics02.png){.thumbnail}

#### Number of connections per minute

This graph allows you to track, over the last 24 hours, the load of connections per minute on your database server.

In your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Web Cloud` section, and then click `Databases`{.action}. Select the name of your CloudDB server.

Go to the `Metrics` tab in the OVHcloud Control Panel. You will find the graph **Statistics for total connections per minute**.

![clouddb](images/private-sql-metrics03.png){.thumbnail}

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

[IP address list for Web Hosting clusters](https://docs.ovh.com/gb/en/hosting/list-of-ip-addresses-of-web-hosting-clusters/)

Join our community of users on <https://community.ovh.com>.
