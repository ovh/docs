---
title: MySQL - Advanced parameters references
slug: mysql/advanced-parameters-references
excerpt:
section: MySQL - Guides
order: 070
---
<link rel="stylesheet" href="https://fpillotovh.github.io/icons/icons.css">
<style>
h2 code,
h3 code,
h4 code,
h5 code,
h6 code {
  display:inline-block !important;
  padding-top:0 !important;
}
th,
td:nth-child(-n+2) {
  white-space:nowrap;
}
.child {
  margin-left: 4ch !important;
  position: relative !important;
}
.child:before {
  content: "\ea0d";
  font-family: 'icons' !important;
  font-size: 1.4em;
  left: -3ch;
  position: absolute;
  text-align: center;
  width: 3ch;
}
</style>

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for MySQL according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/gb/en/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](https://docs.ovh.com/gb/en/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced settings from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/gb/en/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced settings from the OVHcloud API.

### Advanced parameters for MySQL

Below you can find a summary of every configuration option available for MySQL service:

| Parameter | Value Type | Description |
|:---|:---:|:---|
| `mysql` | object | **mysql.conf configuration values** |
| `connect_timeout`{.child} | integer | **connect_timeout** The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake |
| `default_time_zone`{.child} | string | **default_time_zone** Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or ‘SYSTEM’ to use the MySQL server default. |
| `group_concat_max_len`{.child} | integer | **group_concat_max_len** The maximum permitted result length in bytes for the GROUP_CONCAT() function. |
| `information_schema_stats_expiry`{.child} | integer | **information_schema_stats_expiry** The time, in seconds, before cached statistics expire |
| `innodb_change_buffer_max_size`{.child} | integer | **innodb_change_buffer_max_size** Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. Default is 25 |
| `innodb_flush_neighbors`{.child} | integer | **innodb_flush_neighbors** Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent |
| `innodb_ft_min_token_size`{.child} | integer | **innodb_ft_min_token_size** Minimum length of words that are stored in an InnoDB FULLTEXT index. Changing this parameter will lead to a restart of the MySQL service. |
| `innodb_lock_wait_timeout`{.child} | integer | **innodb_lock_wait_timeout** The length of time in seconds an InnoDB transaction waits for a row lock before giving up. |
| `innodb_log_buffer_size`{.child} | integer | **innodb_log_buffer_size** The size in bytes of the buffer that InnoDB uses to write to the log files on disk. |
| `innodb_online_alter_log_max_size`{.child} | integer | **innodb_online_alter_log_max_size** The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables. |
| `innodb_print_all_deadlocks`{.child} | boolean | **innodb_print_all_deadlocks** When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default. |
| `innodb_read_io_threads`{.child} | integer | **innodb_read_io_threads** The number of I/O threads for read operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service. |
| `innodb_rollback_on_timeout`{.child} | boolean | **innodb_rollback_on_timeout** When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. Changing this parameter will lead to a restart of the MySQL service. |
| `innodb_thread_concurrency`{.child} | integer | **innodb_thread_concurrency** Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit) |
| `innodb_write_io_threads`{.child} | integer | **innodb_write_io_threads** The number of I/O threads for write operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service. |
| `interactive_timeout`{.child} | integer | **interactive_timeout** The number of seconds the server waits for activity on an interactive connection before closing it. |
| `internal_tmp_mem_storage_engine`{.child} | string | **internal_tmp_mem_storage_engine** The storage engine for in-memory internal temporary tables. |
| `long_query_time`{.child} | number | **long_query_time** The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute. Default is 10s |
| `max_allowed_packet`{.child} | integer | **max_allowed_packet** Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M) |
| `max_heap_table_size`{.child} | integer | **max_heap_table_size** Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M) |
| `net_buffer_length`{.child} | integer | **net_buffer_length** Start sizes of connection buffer and result buffer. Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service. |
| `net_read_timeout`{.child} | integer | **net_read_timeout** The number of seconds to wait for more data from a connection before aborting the read. |
| `net_write_timeout`{.child} | integer | **net_write_timeout** The number of seconds to wait for a block to be written to a connection before aborting the write. |
| `slow_query_log`{.child} | boolean | **slow_query_log** Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table. Default is off |
| `sort_buffer_size`{.child} | integer | **sort_buffer_size** Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K) |
| `sql_mode`{.child} | string | **sql_mode** Global SQL mode. Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned. |
| `sql_require_primary_key`{.child} | boolean | **sql_require_primary_key** Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them. |
| `tmp_table_size`{.child} | integer | **tmp_table_size** Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M) |
| `wait_timeout`{.child} | integer | **wait_timeout** The number of seconds the server waits for activity on a noninteractive connection before closing it. |
| `mysql`{.child} | boolean | **Allow clients to connect to mysql with a DNS name that always resolves to the service’s private IP addresses. Only available in certain network locations** |
| `mysql`{.child} | boolean | **Enable mysql** |
| `mysql`{.child} | boolean | **Allow clients to connect to mysql from the public internet for service nodes that are in a project VPC or another type of private network** |
