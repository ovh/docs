---
title: PostgreSQL - Advanced parameters references
excerpt: This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for PostgreSQL according to your use cases
updated: 2024-01-30
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

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for PostgreSQL according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](https://api.ovh.com/console/)   

## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](/pages/public_cloud/public_cloud_databases/databases_03_advanced_configuration#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](/pages/public_cloud/public_cloud_databases/databases_03_advanced_configuration#using-api) to find out how to change your advanced parameters from the OVHcloud API.

### Advanced parameters for PostgreSQL

Below you can find a summary of every configuration option available for PostgreSQL service:

#### General parameters

| | |
|---|---|
| Parameter | `pg.autovacuum_analyze_scale_factor` |
| Value type | double |
| Minimum | 0 |
| Maximum | 1 |
| Values | |
| Description | Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size) |

| | |
|---|---|
| Parameter | `pg.autovacuum_analyze_threshold` |
| Value type | long |
| Minimum | 0 |
| Maximum | 2147483647 |
| Values | |
| Description | Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples. |

| | |
|---|---|
| Parameter | `pg.autovacuum_freeze_max_age` |
| Value type | long |
| Minimum | 200000000 |
| Maximum | 1500000000 |
| Values | |
| Description | Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted. |

| | |
|---|---|
| Parameter | `pg.autovacuum_max_workers` |
| Value type | long |
| Minimum | 1 |
| Maximum | 20 |
| Values | |
| Description | Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start. |

| | |
|---|---|
| Parameter | `pg.autovacuum_naptime` |
| Value type | long |
| Minimum | 1 |
| Maximum | 86400 |
| Values | |
| Description | Specifies the minimum delay between autovacuum runs on any given database. The delay is measured in seconds, and the default is one minute |

| | |
|---|---|
| Parameter | `pg.autovacuum_vacuum_cost_delay` |
| Value type | long |
| Minimum | -1 |
| Maximum | 100 |
| Values | |
| Description | Specifies the cost delay value that will be used in automatic VACUUM operations. If -1 is specified, the regular vacuum_cost_delay value will be used. The default value is 20 milliseconds |

| | |
|---|---|
| Parameter | `pg.autovacuum_vacuum_cost_limit` |
| Value type | long |
| Minimum | -1 |
| Maximum | 10000 |
| Values | |
| Description | Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used. |

| | |
|---|---|
| Parameter | `pg.autovacuum_vacuum_scale_factor` |
| Value type | double |
| Minimum | 0 |
| Maximum | 1 |
| Values | |
| Description | Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size) |

| | |
|---|---|
| Parameter | `pg.autovacuum_vacuum_threshold` |
| Value type | long |
| Minimum | 0 |
| Maximum | 2147483647 |
| Values | |
| Description | Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples |

| | |
|---|---|
| Parameter | `pg.bgwriter_delay` |
| Value type | long |
| Minimum | 10 |
| Maximum | 10000 |
| Values | |
| Description | Specifies the delay between activity rounds for the background writer in milliseconds. Default is 200. |

| | |
|---|---|
| Parameter | `pg.bgwriter_flush_after` |
| Value type | long |
| Minimum | 0 |
| Maximum | 2048 |
| Values | |
| Description | Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. Specified in kilobytes, default is 512. Setting of 0 disables forced writeback. |

| | |
|---|---|
| Parameter | `pg.bgwriter_lru_maxpages` |
| Value type | long |
| Minimum | 0 |
| Maximum | 1073741823 |
| Values | |
| Description | In each round, no more than this many buffers will be written by the background writer. Setting this to zero disables background writing. Default is 100. |

| | |
|---|---|
| Parameter | `pg.bgwriter_lru_multiplier` |
| Value type | double |
| Minimum | 0 |
| Maximum | 10 |
| Values | |
| Description | The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0. |

| | |
|---|---|
| Parameter | `pg.deadlock_timeout` |
| Value type | long |
| Minimum | 500 |
| Maximum | 1800000 |
| Values | |
| Description | This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. |

| | |
|---|---|
| Parameter | `pg.default_toast_compression` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | "lz4", "pglz" |
| Description | Specifies the default TOAST compression method for values of compressible columns (the default is lz4). |

| | |
|---|---|
| Parameter | `pg.idle_in_transaction_session_timeout` |
| Value type | long |
| Minimum | 0 |
| Maximum | 604800000 |
| Values | |
| Description | Time out sessions with open transactions after this number of milliseconds |

| | |
|---|---|
| Parameter | `pg.jit` |
| Value type | boolean |
| Minimum | |
| Maximum | |
| Values | |
| Description | Controls system-wide use of Just-in-Time Compilation (JIT). |

| | |
|---|---|
| Parameter | `pg.log_autovacuum_min_duration` |
| Value type | long |
| Minimum | -1 |
| Maximum | 2147483647 |
| Values | |
| Description | Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions. |

| | |
|---|---|
| Parameter | `pg.log_error_verbosity` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | "DEFAULT", "TERSE", "VERBOSE" |
| Description | Controls the amount of detail written in the server log for each message that is logged. |

| | |
|---|---|
| Parameter | `pg.log_line_prefix` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | "'%m [%p] %q[user=%u,db=%d,app=%a] '", "'%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h '", "'pid=%p,user=%u,db=%d,app=%a,client=%h '" |
| Description | Choose from one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze etc. |

| | |
|---|---|
| Parameter | `pg.log_min_duration_statement` |
| Value type | long |
| Minimum | -1 |
| Maximum | 86400000 |
| Values | |
| Description | Log statements that take more than this number of milliseconds to run, -1 disables |

| | |
|---|---|
| Parameter | `pg.log_temp_files` |
| Value type | long |
| Minimum | -1 |
| Maximum | 2147483647 |
| Values | |
| Description | Log statements for each temporary file created larger than this number of kilobytes, -1 disables |

| | |
|---|---|
| Parameter | `pg.max_files_per_process` |
| Value type | long |
| Minimum | 1000 |
| Maximum | 4096 |
| Values | |
| Description | PostgreSQL maximum number of files that can be open per process |

| | |
|---|---|
| Parameter | `pg.max_locks_per_transaction` |
| Value type | long |
| Minimum | 64 |
| Maximum | 6400 |
| Values | |
| Description | PostgreSQL maximum locks per transaction |

| | |
|---|---|
| Parameter | `pg.max_logical_replication_workers` |
| Value type | long |
| Minimum | 4 |
| Maximum | 64 |
| Values | |
| Description | PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers) |

| | |
|---|---|
| Parameter | `pg.max_parallel_workers` |
| Value type | long |
| Minimum | 0 |
| Maximum | 96 |
| Values | |
| Description | Sets the maximum number of workers that the system can support for parallel queries |

| | |
|---|---|
| Parameter | `pg.max_parallel_workers_per_gather` |
| Value type | long |
| Minimum | 0 |
| Maximum | 96 |
| Values | |
| Description | Sets the maximum number of workers that can be started by a single Gather or Gather Merge node |

| | |
|---|---|
| Parameter | `pg.max_pred_locks_per_transaction` |
| Value type | long |
| Minimum | 64 |
| Maximum | 5120 |
| Values | |
| Description | PostgreSQL maximum predicate locks per transaction |

| | |
|---|---|
| Parameter | `pg.max_prepared_transactions` |
| Value type | long |
| Minimum | 0 |
| Maximum | 10000 |
| Values | |
| Description | PostgreSQL maximum prepared transactions |

| | |
|---|---|
| Parameter | `pg.max_replication_slots` |
| Value type | long |
| Minimum | 8 |
| Maximum | 64 |
| Values | |
| Description | PostgreSQL maximum replication slots |

| | |
|---|---|
| Parameter | `pg.max_slot_wal_keep_size` |
| Value type | long |
| Minimum | -1 |
| Maximum | 2147483647 |
| Values | |
| Description | PostgreSQL maximum WAL size (MB) reserved for replication slots. Default is -1 (unlimited). wal_keep_size minimum WAL size setting takes precedence over this. |

| | |
|---|---|
| Parameter | `pg.max_stack_depth` |
| Value type | long |
| Minimum | 2097152 |
| Maximum | 6291456 |
| Values | |
| Description | Maximum depth of the stack in bytes |

| | |
|---|---|
| Parameter | `pg.max_standby_archive_delay` |
| Value type | long |
| Minimum | 1 |
| Maximum | 43200000 |
| Values | |
| Description | Max standby archive delay in milliseconds |

| | |
|---|---|
| Parameter | `pg.max_standby_streaming_delay` |
| Value type | long |
| Minimum | 1 |
| Maximum | 43200000 |
| Values | |
| Description | Max standby streaming delay in milliseconds |

| | |
|---|---|
| Parameter | `pg.max_wal_senders` |
| Value type | long |
| Minimum | 20 |
| Maximum | 64 |
| Values | |
| Description | PostgreSQL maximum WAL senders |

| | |
|---|---|
| Parameter | `pg.max_worker_processes` |
| Value type | long |
| Minimum | 8 |
| Maximum | 96 |
| Values | |
| Description | Sets the maximum number of background processes that the system can support |

| | |
|---|---|
| Parameter | `pg.pg_partman_bgw.interval` |
| Value type | long |
| Minimum | 3600 |
| Maximum | 604800 |
| Values | |
| Description | Sets the time interval to run pg_partman's scheduled tasks |

| | |
|---|---|
| Parameter | `pg.pg_partman_bgw.role` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | |
| Description | Controls which role to use for pg_partman's scheduled background tasks. |

| | |
|---|---|
| Parameter | `pg.pg_stat_monitor.pgsm_enable_query_plan` |
| Value type | boolean |
| Minimum | |
| Maximum | |
| Values | |
| Description | Enables or disables query plan monitoring |

| | |
|---|---|
| Parameter | `pg.pg_stat_monitor.pgsm_max_buckets` |
| Value type | long |
| Minimum | 1 |
| Maximum | 10 |
| Values | |
| Description | Sets the maximum number of buckets  |

| | |
|---|---|
| Parameter | `pg.temp_file_limit` |
| Value type | long |
| Minimum | -1 |
| Maximum | 2147483647 |
| Values | |
| Description | PostgreSQL temporary file limit in KiB, -1 for unlimited |

| | |
|---|---|
| Parameter | `pg.timezone` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | |
| Description | PostgreSQL service timezone |

| | |
|---|---|
| Parameter | `pg.track_activity_query_size` |
| Value type | long |
| Minimum | 1024 |
| Maximum | 10240 |
| Values | |
| Description | Specifies the number of bytes reserved to track the currently executing command for each active session. |

| | |
|---|---|
| Parameter | `pg.track_commit_timestamp` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | "off", "on" |
| Description | Record commit time of transactions. |

| | |
|---|---|
| Parameter | `pg.track_functions` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | "all", "none", "pl" |
| Description | Enables tracking of function call counts and time used. |

| | |
|---|---|
| Parameter | `pg.track_io_timing` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | "off", "on" |
| Description | Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms. |

| | |
|---|---|
| Parameter | `pg.wal_sender_timeout` |
| Value type | long |
| Minimum | |
| Maximum | |
| Values | |
| Description | Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout. |

| | |
|---|---|
| Parameter | `pg.wal_writer_delay` |
| Value type | long |
| Minimum | 10 |
| Maximum | 200 |
| Values | |
| Description | WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance |

| | |
|---|---|
| Parameter | `pgbouncer.autodb_idle_timeout` |
| Value type | long |
| Minimum | 0 |
| Maximum | 86400 |
| Values | |
| Description | The number of seconds after which - if unused - the automatically created database pools are freed. If set to 0, then timeout is disabled. |

| | |
|---|---|
| Parameter | `pgbouncer.autodb_max_db_connections` |
| Value type | long |
| Minimum | 0 |
| Maximum | 2147483647 |
| Values | |
| Description | The overall maximum number of server connections per database (regardless of user). Setting it to 0 means it is unlimited. |

| | |
|---|---|
| Parameter | `pgbouncer.autodb_pool_mode` |
| Value type | string |
| Minimum | |
| Maximum | |
| Values | "session", "statement", "transaction" |
| Description | The PgBouncer pool mode:<br>- with session, the server is released back to the pool after the client disconnects<br>- with transaction, the server is released back to the pool after the transaction finishes<br>- with statement the server is released back to the pool after the query finishes (transactions spanning multiple statements are disallowed in this mode).<br>The default value is: session.<br>A valid range is: session, transaction, statement |

| | |
|---|---|
| Parameter | `pgbouncer.autodb_pool_size` |
| Value type | long |
| Minimum | 0 |
| Maximum | 10000 |
| Values | |
| Description | When set to non-zero, it automatically creates a pool of the specified size per user, provided that the pool doesn’t exist. |

| | |
|---|---|
| Parameter | `pgbouncer.min_pool_size` |
| Value type | long |
| Minimum | 0 |
| Maximum | 10000 |
| Values | |
| Description | Adds more server connections to the pool if the pool connection number is smaller than this number. It improves the behavior when the usual load comes back suddenly after a period of total inactivity. The value is capped at the pool size. |

| | |
|---|---|
| Parameter | `pgbouncer.server_idle_timeout` |
| Value type | long |
| Minimum | 0 |
| Maximum | 86400 |
| Values | |
| Description | The amount of time in seconds after which the server connection is dropped. If set to 0, then timeout is disabled. |

| | |
|---|---|
| Parameter | `pgbouncer.server_lifetime` |
| Value type | long |
| Minimum | 60 |
| Maximum | 86400 |
| Values | |
| Description | The amount of time after which the pooler closes any unused server connection. |

| | |
|---|---|
| Parameter | `pgbouncer.server_reset_query_always` |
| Value type | boolean |
| Minimum | |
| Maximum | |
| Values | |
| Description | Runs server_reset_query (DISCARD ALL) in all pooling modes. |

| | |
|---|---|
| Parameter | `timescaledb.max_background_workers` |
| Value type | long |
| Minimum | 1 |
| Maximum | 4096 |
| Values | |
| Description | The number of background workers for timescaledb operations. You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time. |

| | |
|---|---|
| Parameter | `shared_buffers_percentage` |
| Value type | long |
| Minimum | 20 |
| Maximum | 60 |
| Values | |
| Description | Percentage of total RAM that the database server uses for shared memory buffers. Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value. |

| | |
|---|---|
| Parameter | `work_mem` |
| Value type | long |
| Minimum | 1 |
| Maximum | 1024 |
| Values | |
| Description | Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. Default is 1MB + 0.075% of total RAM (up to 32MB). |

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/asia/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
