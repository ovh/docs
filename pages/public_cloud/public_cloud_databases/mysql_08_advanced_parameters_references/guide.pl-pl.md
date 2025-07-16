---
title: MySQL - Advanced parameters references
excerpt: This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for MySQL according to your use cases
updated: 2025-06-19
---

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for MySQL according to your use cases.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- A database running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement).
- Access to your [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](/links/api).

## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](/pages/public_cloud/public_cloud_databases/databases_03_advanced_configuration#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](/pages/public_cloud/public_cloud_databases/databases_03_advanced_configuration#using-api) to find out how to change your advanced parameters from the OVHcloud API.

### Advanced parameters for MySQL

Below you can find a summary of every configuration option available for a MySQL service:

| Parameters |
|------------|
|**mysql.connect_timeout** `long`<br>min: `2` max: `3600`<br>The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake.<br>|
|**mysql.default_time_zone** `string`<br>Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default.<br>|
|**mysql.group_concat_max_len** `long`<br>min: `4` max: `18446744073709552000`<br>The maximum permitted result length in bytes for the GROUP_CONCAT() function.<br>|
|**mysql.information_schema_stats_expiry** `long`<br>min: `900` max: `31536000`<br>The time, in seconds, before cached statistics expire.<br>|
|**mysql.innodb_change_buffer_max_size** `long`<br>min: `0` max: `50`<br>Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. Default is 25.<br>|
|**mysql.innodb_flush_neighbors** `long`<br>min: `0` max: `2`<br>Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent.<br>|
|**mysql.innodb_ft_min_token_size** `long`<br>min: `0` max: `16`<br>Minimum length of words that are stored in an InnoDB FULLTEXT index. Changing this parameter will lead to a restart of the MySQL service.<br>|
|**mysql.innodb_ft_server_stopword_table** `string`<br>This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables.<br>|
|**mysql.innodb_lock_wait_timeout** `long`<br>min: `1` max: `3600`<br>The length of time in seconds an InnoDB transaction waits for a row lock before giving up. Default is 120.<br>|
|**mysql.innodb_log_buffer_size** `long`<br>min: `1048576` max: `4294967295`<br>The size in bytes of the buffer that InnoDB uses to write to the log files on disk.<br>|
|**mysql.innodb_online_alter_log_max_size** `long`<br>min: `65536` max: `1099511627776`<br>The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables.<br>|
|**mysql.innodb_print_all_deadlocks** `boolean`<br>When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default.<br>|
|**mysql.innodb_read_io_threads** `long`<br>min: `1` max: `64`<br>The number of I/O threads for read operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service.<br>|
|**mysql.innodb_rollback_on_timeout** `boolean`<br>When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. Changing this parameter will lead to a restart of the MySQL service.<br>|
|**mysql.innodb_thread_concurrency** `long`<br>min: `0` max: `1000`<br>Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit).<br>|
|**mysql.innodb_write_io_threads** `long`<br>min: `1` max: `64`<br>The number of I/O threads for write operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service.<br>|
|**mysql.interactive_timeout** `long`<br>min: `30` max: `604800`<br>The number of seconds the server waits for activity on an interactive connection before closing it.<br>|
|**mysql.internal_tmp_mem_storage_engine** `string`<br>values: `MEMORY`, `TempTable`<br>The storage engine for in-memory internal temporary tables.<br>|
|**mysql.log_output** `string`<br>values: `INSIGHTS`, `INSIGHTS,TABLE`, `NONE`, `TABLE`<br>The slow log output destination when slow_query_log is ON. To enable MySQL AI Insights, choose INSIGHTS. To use MySQL AI Insights and the mysql.slow_log table at the same time, choose INSIGHTS,TABLE. To only use the mysql.slow_log table, choose TABLE. To silence slow logs, choose NONE.<br>|
|**mysql.long_query_time** `double`<br>min: `0` max: `3600`<br>The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute.<br>|
|**mysql.max_allowed_packet** `long`<br>min: `102400` max: `1073741824`<br>Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M)<br>|
|**mysql.max_heap_table_size** `long`<br>min: `1048576` max: `1073741824`<br>Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M)<br>|
|**mysql.net_buffer_length** `long`<br>min: `1024` max: `1048576`<br>Start sizes of connection buffer and result buffer. Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service.<br>|
|**mysql.net_read_timeout** `long`<br>min: `1` max: `3600`<br>The number of seconds to wait for more data from a connection before aborting the read.<br>|
|**mysql.net_write_timeout** `long`<br>min: `1` max: `3600`<br>The number of seconds to wait for a block to be written to a connection before aborting the write.<br>|
|**mysql.slow_query_log** `boolean`<br>Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table.<br>|
|**mysql.sort_buffer_size** `long`<br>min: `32768` max: `1073741824`<br>Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K)<br>|
|**mysql.sql_mode** `string`<br>Global SQL mode. Set to empty to use MySQL server defaults. When creating a new service and not setting this field, Aiven default SQL mode (strict, SQL standard compliant) will be assigned.<br>|
|**mysql.sql_require_primary_key** `boolean`<br>Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionalities may break if any large table is missing them.<br>|
|**mysql.tmp_table_size** `long`<br>min: `1048576` max: `1073741824`<br>Limits the size of internal in-memory tables. Also sets max_heap_table_size. Default is 16777216 (16M).<br>|
|**mysql.wait_timeout** `long`<br>min: `1` max: `2147483`<br>The number of seconds the server waits for activity on a non-interactive connection before closing it.<br>|

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
