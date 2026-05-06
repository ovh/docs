---
title: 'Configuring your database server'
excerpt: 'Find out how to configure and optimise your database server'
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

Web Cloud Databases database servers allow you to modify the global settings of your server. You can also view your server's activity.

**Find out how to configure and optimise your database server.**

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

### View general information on your database server

<!-- CP-STEPS-START:view-general-information -->
Click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Make sure you are on the `General information`{.action} tab.
>>
>> You can view important information about your SQL instance. Please take a few moments to ensure that the information displayed is correct and corresponds to the information below.
>>
>> |Information|Details|
>> |---|---|
>> |Service status|Shows if the instance has been started, is restarting, or is suspended. Your instance must be started in order to perform actions on it.|
>> |Type|Shows the database system used by the server. If you are unsure whether the correct type is being used, please note that the most common is "MySQL", but other types also exist (PostgreSQL, MariaDB). For example, if your website is a WordPress, a MySQL system is perfectly suitable.|
>> |Version|Shows the database system version used by the server. Check that your website is compatible with the version chosen.|
>> |CPU throttling|Displays the CPU time spent in saturation over the last 24 hours.|
>> |RAM|Shows the RAM available for your instance as well as any memory overflows. Your database server has dedicated, guaranteed resources: its RAM. If required, you can scale it up and be warned if you are consuming all of your instance's RAM resources.|
>> |Infrastructure|Shows the infrastructure used by your instance. This information is inherent to the OVHcloud infrastructure.|
>> |Datacenter|Shows the data centre in which the instance was created. Make sure your instance's data centre is the same as the OVHcloud web hosting plan where your website is (or will be) hosted.|
>> |Host|Shows the OVHcloud server in which your instance was created. This information is inherent to the OVHcloud infrastructure and can be used in our communications relating to [OVHcloud incidents](https://web-cloud.status-ovhcloud.com/).|
>>
>> ![General information](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}
<!-- CP-STEPS-END:view-general-information -->

### Manage your access

Your Web Cloud Databases is accessible from your OVHcloud web hosting plans and/or from the public network.

**Click on each title to view its content.**

/// details | Authorise an IP address

To access your Web Cloud Databases instance, you must specify the IP addresses or IP ranges authorised to connect to your databases.

<!-- CP-STEPS-START:authorise-ip-address -->
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
>> Click on the `Authorised IPs`{.action} tab, then on the `Add an IP address/mask`{.action} button.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}
>>
> **Step 3**
>>
>> Enter the IP address or mask to authorise in `IP/mask`{.action} and optionally add a description. Choose whether to grant access to databases only or also to SFTP, then click `Confirm`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:authorise-ip-address -->

///

/// details | Authorise connections to OVHcloud web hosting plans

<!-- CP-STEPS-START:authorise-web-hosting-connections -->
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
>> Click on the `Authorised IPs`{.action} tab.
>>
> **Step 3**
>>
>> Tick `Authorise OVHcloud web hosting plans to access the database`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}
<!-- CP-STEPS-END:authorise-web-hosting-connections -->

///

### Modify your Web Cloud Databases plan <a name="modify-ram-web-cloud-db"></a>

> [!warning]
>
> If your Web Cloud Databases plan is linked to a **Performance** web hosting plan, you must first detach the Web Cloud Databases plan from your **Performance** hosting plan before upgrading to a higher plan.
>
> To detach a Web Cloud Databases plan from a **Performance** web hosting plan, please refer to our guide "[Detach my Web Cloud Databases solution from a web hosting plan](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>
> **This action is irreversible, and the Web Cloud Databases plan will then be billed separately from your Performance web hosting plan.**
>

<!-- CP-STEPS-START:modify-plan-ram -->
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
>> In the **General information** tab displayed by default, click `...`{.action} to the right of "RAM", then `Change the amount of RAM`{.action} to access the order for this change.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}
>>
> **Step 3**
>>
>> Choose the amount of RAM you want, then click `Next`{.action}. You can then choose the duration you want.
>>
>> > [!primary]
>> >
>> > The remaining term until expiration will be prorated. This pro rata calculation will be based on the expiration date of your Web Cloud Databases instance, not on the date of the purchase order.
>>
>> Once you have confirmed your contracts, you will be redirected to the purchase order to pay for this change. It will then be effective within a few hours.
>>
>> > [!warning]
>> >
>> > If you currently have a free Web Cloud Databases with your Performance hosting plan, modifying the plan will mean it is no longer free.
<!-- CP-STEPS-END:modify-plan-ram -->

### Modify my database server configuration

**Click on each title to view its content.**

/// details | MySQL and MariaDB instance

<!-- CP-STEPS-START:configure-mysql-mariadb -->
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
>> Click on the `Configuration`{.action} tab.
>>
> **Step 3**
>>
>> In the **General MySQL configuration** box, you will find the configuration currently set for your database. You can modify it directly, then click `Apply`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}
>>
>> - **MaxAllowedPacket**: Maximum packet size.
>> - **Max_user_connections**: Number of concurrent connections authorised per user.
>> - **AutoCommit**: Defines whether requests are automatically committed or not.
>> - **Interactive_timeout**: Time (in seconds) for which the server will wait for activity on an interactive connection before closing it.
>> - **InnodbBufferPoolSize**: Selected buffer memory size.
>> - **MaxConnections:** Number of concurrent connections authorised on the database server.
>> - **Wait_timeout**: Time (in seconds) for which the server will wait for activity on a non-interactive connection before closing it.
>> - **Event_scheduler**: Triggers the execution of requests programmed directly on the MySQL server.
>> - **sql_mode**: The **sql_mode** option affects the supported SQL syntax and the data validation checks performed by MySQL/MariaDB.
>>
>> > [!primary]
>> > When you encounter an error on your website stating **"Too many connections"**, this is due to the number of simultaneous connections on your database server being exceeded. You can then increase the **"MaxConnections"** variable if it is not at its maximum.
>>
>> > [!primary]
>> >
>> > <b>sql_mode</b>:
>> >
>> > &emsp;&emsp;Default mode of MariaDB 10.1:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
>> >
>> > &emsp;&emsp;Default mode of MariaDB 10.2 and higher:
>> > <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Default mode of MySQL 5.6:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Default mode of MySQL 5.7 and higher:
>> > <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > We recommend always using the default mode, unless your database was updated from a version with a default mode that is different from the current version.
>>
>> Make the necessary changes, then click `Confirm`{.action}.

> [!warning]
>
> Any changes require a restart of the database server.
>
<!-- CP-STEPS-END:configure-mysql-mariadb -->

///

/// details | PostgreSQL instance

<!-- CP-STEPS-START:configure-postgresql -->
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
>> Click on the `Configuration`{.action} tab.
>>
> **Step 3**
>>
>> In the **General PostgreSQL configuration** box, you will find the configuration currently set for your database. You can modify it directly, then click `Apply`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}
>>
>> - **log_min_messages**: Controls the levels of messages to be logged in the server logs. The levels available for a Web Cloud Databases solution are:
>>     - **"WARNING"**: Provides warning messages about potential problems.
>>     - **"ERROR"**: Sends the error that caused an ongoing command to be cancelled.
>>     - **"LOG"**: Stores information for server administrators.
>>     - **"FATAL"**: Sends the error that caused the current session to end.
>>     - **"PANIC"**: Sends the error that caused all sessions to end.
>>
>> Each level includes all levels that follow it. The higher the level, the fewer messages are recorded in the server logs.
>>
>> By default, the value set is **"WARNING"** because it includes the values **"ERROR"**, **"LOG"**, **"FATAL"**, and **"PANIC"**.
>>
>> You can also enable extensions for your databases. To do this, click on the `Databases`{.action} tab, then on the table icon for your database in the **"Extensions"** column.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}
<!-- CP-STEPS-END:configure-postgresql -->

///

### Change the MySQL, PostgreSQL or MariaDB version of the database server

<!-- CP-STEPS-START:change-db-version -->
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
>> In the **General information** tab, the current version appears in the **Version** row.
>>
> **Step 3**
>>
>> To modify this version, click `Update version`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}
<!-- CP-STEPS-END:change-db-version -->

/// details | How do I know the exact version of PostgreSQL I am using?

Enter this command in phpPgAdmin by clicking on **Your database** in the **"SQL"** section, then click `Launch`{.action}:

```sql
select version();
```

///

/// details | How do I know the exact version of MySQL or MariaDB I am using?

Enter this command in phpMyAdmin, in the **"SQL"** section, then click `Run`{.action}:

```sql
show variables like "version";
```

///

> [!primary]
>
> - Before migrating to a higher version, ensure that your database is compatible with the version you have chosen.
> - The modification will be effective within a few minutes.
>

> [!warning]
>
> It is not possible to switch from an old version to the latest version
> directly. It is mandatory to use all intermediate versions.
>

### Logs and Metrics

**Click on each title to view its content.**

/// details | Log access

To access the logs for your Web Cloud Databases solution, please refer to our guide "[Web Cloud Databases - How to retrieve logs](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

///

/// details | Monitor RAM usage

<!-- CP-STEPS-START:monitor-ram-usage -->
Click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Metrics`{.action} tab. You will find the graph **"RAM usage statistics"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}
<!-- CP-STEPS-END:monitor-ram-usage -->

///

/// details | Monitor the number of connections per minute

This graph allows you to track, over the last 24 hours, the load of connections per minute on your database server.

<!-- CP-STEPS-START:monitor-connections-per-minute -->
Click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Metrics`{.action} tab. You will find the graph **"Statistics for total connections per minute"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}
<!-- CP-STEPS-END:monitor-connections-per-minute -->

///

### Optimise your databases

Maintain your database to keep it performing well and returning information to scripts quickly. This requires a structured and optimised database.

**Click on each title to view its content.**

/// details | Index the database

To increase the speed of searches during a query, you must index the fields used in WHERE clauses.

Example: you regularly search for people by city. Index the "city" field with the following query:

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

///

/// details | Purge the database

Some of your data is no longer being accessed? By archiving it, your tables will be less crowded and searches will be faster.

///

/// details | Display limit

Limit the display of records to a fixed number (for example, 10 per page) with the LIMIT portion of your SQL query.

///

/// details | Query grouping

Group your queries at the beginning of the script this way:

```bash
open_connection
request1
request2
...
close_connection
Display...
Process data
Loop through data...
Display...
...
```

///

/// details | Retrieve only useful data

In your SQL queries, make sure you select only what you need, and that you have not forgotten the links between the tables.

Example:

```sql
(where table1.champs = table2.champs2)
```

///

/// details | Avoid options that consume too many resources

Avoid using **"HAVING"** for example. It increases your requests. Similarly, avoid using **"GROUP BY"**, unless it is strictly necessary.

///

## Go further

[IP address list for Web Hosting clusters](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
