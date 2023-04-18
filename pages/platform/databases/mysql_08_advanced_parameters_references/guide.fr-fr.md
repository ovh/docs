---
title: MySQL - Références des paramètres avancés (EN)
excerpt:
routes:
    canonical: '/pages/platform/databases/mysql_08_advanced_parameters_references'
updated: 2023-02-06
---

<style>
#content table,
.ovh-documentation table {margin-bottom:25px;overflow:unset !important;}

#content tbody,
.ovh-documentation tbody {display: inline-table !important;width:100% !important;}

#content thead,
.ovh-documentation thead {display:none}

#content tr:nth-child(2n),
.ovh-documentation tr:nth-child(2n) {
  background: none !important;
}
#content td:first-child,
.ovh-documentation td:first-child {
  background:#efefef;
  font-weight:600;
  vertical-align:top;
  width:11ch;
}
</style>

**Last updated 6th February 2023**

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for MySQL according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/fr/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](/pages/platform/databases/databases_01_order_control_panel) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](/pages/platform/databases/databases_03_advanced_configuration#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](/pages/platform/databases/databases_03_advanced_configuration#using-api) to find out how to change your advanced parameters from the OVHcloud API.

### Advanced parameters for MySQL

Below you can find a summary of every configuration option available for MySQL service:

| | |
|---|---|
| Parameter | `mysql.connect_timeout` |
| Value type | long |
| Minumum | 2 |
| Maximum | 3600 |
| Values | |
| Description | The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake |


| | |
|---|---|
| Parameter | `mysql.default_time_zone` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | |
| Description | Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default. |


| | |
|---|---|
| Parameter | `mysql.group_concat_max_len` |
| Value type | long |
| Minumum | 4 |
| Maximum | 18446744073709552000 |
| Values | |
| Description | The maximum permitted result length in bytes for the GROUP_CONCAT() function. |


| | |
|---|---|
| Parameter | `mysql.information_schema_stats_expiry` |
| Value type | long |
| Minumum | 900 |
| Maximum | 31536000 |
| Values | |
| Description | The time, in seconds, before cached statistics expire |


| | |
|---|---|
| Parameter | `mysql.innodb_change_buffer_max_size` |
| Value type | long |
| Minumum | 0 |
| Maximum | 50 |
| Values | |
| Description | Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. Default is 25 |


| | |
|---|---|
| Parameter | `mysql.innodb_flush_neighbors` |
| Value type | long |
| Minumum | 0 |
| Maximum | 2 |
| Values | |
| Description | Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent |


| | |
|---|---|
| Parameter | `mysql.innodb_ft_min_token_size` |
| Value type | long |
| Minumum | 0 |
| Maximum | 16 |
| Values | |
| Description | Minimum length of words that are stored in an InnoDB FULLTEXT index. Changing this parameter will lead to a restart of the MySQL service. |


| | |
|---|---|
| Parameter | `mysql.innodb_lock_wait_timeout` |
| Value type | long |
| Minumum | 1 |
| Maximum | 3600 |
| Values | |
| Description | The length of time in seconds an InnoDB transaction waits for a row lock before giving up. |


| | |
|---|---|
| Parameter | `mysql.innodb_log_buffer_size` |
| Value type | long |
| Minumum | 1048576 |
| Maximum | 4294967295 |
| Values | |
| Description | The size in bytes of the buffer that InnoDB uses to write to the log files on disk. |


| | |
|---|---|
| Parameter | `mysql.innodb_online_alter_log_max_size` |
| Value type | long |
| Minumum | 65536 |
| Maximum | 1099511627776 |
| Values | |
| Description | The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables. |


| | |
|---|---|
| Parameter | `mysql.innodb_print_all_deadlocks` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default. |


| | |
|---|---|
| Parameter | `mysql.innodb_read_io_threads` |
| Value type | long |
| Minumum | 1 |
| Maximum | 64 |
| Values | |
| Description | The number of I/O threads for read operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service. |


| | |
|---|---|
| Parameter | `mysql.innodb_rollback_on_timeout` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. Changing this parameter will lead to a restart of the MySQL service. |


| | |
|---|---|
| Parameter | `mysql.innodb_thread_concurrency` |
| Value type | long |
| Minumum | 0 |
| Maximum | 1000 |
| Values | |
| Description | Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit) |


| | |
|---|---|
| Parameter | `mysql.innodb_write_io_threads` |
| Value type | long |
| Minumum | 1 |
| Maximum | 64 |
| Values | |
| Description | The number of I/O threads for write operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service. |


| | |
|---|---|
| Parameter | `mysql.interactive_timeout` |
| Value type | long |
| Minumum | 30 |
| Maximum | 604800 |
| Values | |
| Description | The number of seconds the server waits for activity on an interactive connection before closing it. |


| | |
|---|---|
| Parameter | `mysql.internal_tmp_mem_storage_engine` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "MEMORY", "TempTable" |
| Description | The storage engine for in-memory internal temporary tables. |


| | |
|---|---|
| Parameter | `mysql.long_query_time` |
| Value type | double |
| Minumum | 0 |
| Maximum | 3600 |
| Values | |
| Description | The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute. Default is 10s |


| | |
|---|---|
| Parameter | `mysql.max_allowed_packet` |
| Value type | long |
| Minumum | 102400 |
| Maximum | 1073741824 |
| Values | |
| Description | Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M) |


| | |
|---|---|
| Parameter | `mysql.max_heap_table_size` |
| Value type | long |
| Minumum | 1048576 |
| Maximum | 1073741824 |
| Values | |
| Description | Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M) |


| | |
|---|---|
| Parameter | `mysql.net_buffer_length` |
| Value type | long |
| Minumum | 1024 |
| Maximum | 1048576 |
| Values | |
| Description | Start sizes of connection buffer and result buffer. Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service. |


| | |
|---|---|
| Parameter | `mysql.net_read_timeout` |
| Value type | long |
| Minumum | 1 |
| Maximum | 3600 |
| Values | |
| Description | The number of seconds to wait for more data from a connection before aborting the read. |


| | |
|---|---|
| Parameter | `mysql.net_write_timeout` |
| Value type | long |
| Minumum | 1 |
| Maximum | 3600 |
| Values | |
| Description | The number of seconds to wait for a block to be written to a connection before aborting the write. |


| | |
|---|---|
| Parameter | `mysql.slow_query_log` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table. Default is off |


| | |
|---|---|
| Parameter | `mysql.sort_buffer_size` |
| Value type | long |
| Minumum | 32768 |
| Maximum | 1073741824 |
| Values | |
| Description | Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K) |


| | |
|---|---|
| Parameter | `mysql.sql_mode` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | |
| Description | Global SQL mode. Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned. |


| | |
|---|---|
| Parameter | `mysql.sql_require_primary_key` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionalities may break if any large table is missing them. |


| | |
|---|---|
| Parameter | `mysql.tmp_table_size` |
| Value type | long |
| Minumum | 1048576 |
| Maximum | 1073741824 |
| Values | |
| Description | Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M) |


| | |
|---|---|
| Parameter | `mysql.wait_timeout` |
| Value type | long |
| Minumum | 1 |
| Maximum | 2147483 |
| Values | |
| Description | The number of seconds the server waits for activity on a non-interactive connection before closing it. |



## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
