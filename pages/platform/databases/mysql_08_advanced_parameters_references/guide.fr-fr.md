---
title: MySQL - Références des paramètres avancés (EN)
slug: mysql/advanced-parameters-references
excerpt:
section: MySQL - Guides
order: 070
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/mysql/advanced-parameters-references/'
---

<style>
th,
td:nth-child(-n+2) {
  white-space:nowrap;
}
</style>

**Last updated 28th December 2022**

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for MySQL according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/fr/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/fr/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](https://docs.ovh.com/fr/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/fr/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.

### Advanced parameters for MySQL

Below you can find a summary of every configuration option available for MySQL service:

| Parameter | Value Type | Description |
|:---|:---:|:---|
| `mysql.connect_timeout` | long | The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake |
| `mysql.default_time_zone` | string | Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default. |
| `mysql.group_concat_max_len` | long | The maximum permitted result length in bytes for the GROUP_CONCAT() function. |
| `mysql.information_schema_stats_expiry` | long | The time, in seconds, before cached statistics expire |
| `mysql.innodb_change_buffer_max_size` | long | Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. Default is 25 |
| `mysql.innodb_flush_neighbors` | long | Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent |
| `mysql.innodb_ft_min_token_size` | long | Minimum length of words that are stored in an InnoDB FULLTEXT index. Changing this parameter will lead to a restart of the MySQL service. |
| `mysql.innodb_lock_wait_timeout` | long | The length of time in seconds an InnoDB transaction waits for a row lock before giving up. |
| `mysql.innodb_log_buffer_size` | long | The size in bytes of the buffer that InnoDB uses to write to the log files on disk. |
| `mysql.innodb_online_alter_log_max_size` | long | The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables. |
| `mysql.innodb_print_all_deadlocks` | boolean | When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default. |
| `mysql.innodb_read_io_threads` | long | The number of I/O threads for read operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service. |
| `mysql.innodb_rollback_on_timeout` | boolean | When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. Changing this parameter will lead to a restart of the MySQL service. |
| `mysql.innodb_thread_concurrency` | long | Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit) |
| `mysql.innodb_write_io_threads` | long | The number of I/O threads for write operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service. |
| `mysql.interactive_timeout` | long | The number of seconds the server waits for activity on an interactive connection before closing it. |
| `mysql.internal_tmp_mem_storage_engine` | string | The storage engine for in-memory internal temporary tables. |
| `mysql.long_query_time` | double | The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute. Default is 10s |
| `mysql.max_allowed_packet` | long | Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M) |
| `mysql.max_heap_table_size` | long | Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M) |
| `mysql.net_buffer_length` | long | Start sizes of connection buffer and result buffer. Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service. |
| `mysql.net_read_timeout` | long | The number of seconds to wait for more data from a connection before aborting the read. |
| `mysql.net_write_timeout` | long | The number of seconds to wait for a block to be written to a connection before aborting the write. |
| `mysql.slow_query_log` | boolean | Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table. Default is off |
| `mysql.sort_buffer_size` | long | Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K) |
| `mysql.sql_mode` | string | Global SQL mode. Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned. |
| `mysql.sql_require_primary_key` | boolean | Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them. |
| `mysql.tmp_table_size` | long | Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M) |
| `mysql.wait_timeout` | long | The number of seconds the server waits for activity on a noninteractive connection before closing it. |

## Go further

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
