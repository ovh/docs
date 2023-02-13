---
title: PostgreSQL - Advanced parameters references
slug: postgresql/advanced-parameters-references
excerpt:
section: PostgreSQL - Guides
order: 100
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/postgresql/advanced-parameters-references/'
updated: 2023-02-06
---

<style>
table thead {
  display: none;
}
table tr {
  display: block;
  margin-bottom: 40px;
}
table tr:nth-child(2n) {
  background:none !important;
}
table tr:last-child {
  margin-bottom: 0;
}
table td {
  border-bottom:none !important;
  box-shadow:inset 13ch 0 0 rgb(241, 241, 241),inset calc(13ch + 1px) 0 0 #59d2ef;
  display: block;
  min-height:46px;
  position: relative;
  padding-left:14ch !important;
}
table td:last-child {
  border-bottom:1px solid #59d2ef !important;
}
table td:before {
  color: #000;
  font-weight: 600 !important;
  left: 0;
  padding: 0 1ch;
  position: absolute;
}
table td:nth-child(1):before {
  content:'Parameter';
}
table td:nth-child(2):before {
  content:'Type';
}
table td:nth-child(3):before {
  content:'Minimum';
}
table td:nth-child(4):before {
  content:'Maximum';
}
table td:nth-child(5):before {
  content:'Values';
}
table td:nth-child(6):before {
  content:'Description';
}
</style>

**Last updated 6th February 2023**

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for PostgreSQL according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/de/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/de/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](https://docs.ovh.com/de/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/de/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.

### Advanced parameters for PostgreSQL

Below you can find a summary of every configuration option available for PostgreSQL service:

#### General parameters

| Parameter | Value Type | Minimum | Maximum | Values | Description |
|:---|:---|:---|:---|:---|:---|
| `pg.autovacuum_analyze_scale_factor` | double | 0 | 1 | | Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size) |
| `pg.autovacuum_analyze_threshold` | long | 0 | 2147483647 | | Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples. |
| `pg.autovacuum_freeze_max_age` | long | 200000000 | 1500000000 | | Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted. |
| `pg.autovacuum_max_workers` | long | 1 | 20 | | Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start. |
| `pg.autovacuum_naptime` | long | 1 | 86400 | | Specifies the minimum delay between autovacuum runs on any given database. The delay is measured in seconds, and the default is one minute |
| `pg.autovacuum_vacuum_cost_delay` | long | -1 | 100 | | Specifies the cost delay value that will be used in automatic VACUUM operations. If -1 is specified, the regular vacuum_cost_delay value will be used. The default value is 20 milliseconds |
| `pg.autovacuum_vacuum_cost_limit` | long | -1 | 10000 | | Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used. |
| `pg.autovacuum_vacuum_scale_factor` | double | 0 | 1 | | Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size) |
| `pg.autovacuum_vacuum_threshold` | long | 0 | 2147483647 | | Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples |
| `pg.bgwriter_delay` | long | 10 | 10000 | | Specifies the delay between activity rounds for the background writer in milliseconds. Default is 200. |
| `pg.bgwriter_flush_after` | long | 0 | 2048 | | Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. Specified in kilobytes, default is 512. Setting of 0 disables forced writeback. |
| `pg.bgwriter_lru_maxpages` | long | 0 | 1073741823 | | In each round, no more than this many buffers will be written by the background writer. Setting this to zero disables background writing. Default is 100. |
| `pg.bgwriter_lru_multiplier` | double | 0 | 10 | | The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0. |
| `pg.deadlock_timeout` | long | 500 | 1800000 | | This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. |
| `pg.default_toast_compression` | string | | | "lz4", "pglz" | Specifies the default TOAST compression method for values of compressible columns (the default is lz4). |
| `pg.idle_in_transaction_session_timeout` | long | 0 | 604800000 | | Time out sessions with open transactions after this number of milliseconds |
| `pg.jit` | boolean | | | | Controls system-wide use of Just-in-Time Compilation (JIT). |
| `pg.log_autovacuum_min_duration` | long | -1 | 2147483647 | | Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions. |
| `pg.log_error_verbosity` | string | | | "DEFAULT", "TERSE", "VERBOSE" | Controls the amount of detail written in the server log for each message that is logged. |
| `pg.log_line_prefix` | string | | | "'%m [%p] %q[user=%u,db=%d,app=%a] '", "'%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h '", "'pid=%p,user=%u,db=%d,app=%a,client=%h '" | Choose from one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze etc. |
| `pg.log_min_duration_statement` | long | -1 | 86400000 | | Log statements that take more than this number of milliseconds to run, -1 disables |
| `pg.log_temp_files` | long | -1 | 2147483647 | | Log statements for each temporary file created larger than this number of kilobytes, -1 disables |
| `pg.max_files_per_process` | long | 1000 | 4096 | | PostgreSQL maximum number of files that can be open per process |
| `pg.max_locks_per_transaction` | long | 64 | 6400 | | PostgreSQL maximum locks per transaction |
| `pg.max_logical_replication_workers` | long | 4 | 64 | | PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers) |
| `pg.max_parallel_workers` | long | 0 | 96 | | Sets the maximum number of workers that the system can support for parallel queries |
| `pg.max_parallel_workers_per_gather` | long | 0 | 96 | | Sets the maximum number of workers that can be started by a single Gather or Gather Merge node |
| `pg.max_pred_locks_per_transaction` | long | 64 | 5120 | | PostgreSQL maximum predicate locks per transaction |
| `pg.max_prepared_transactions` | long | 0 | 10000 | | PostgreSQL maximum prepared transactions |
| `pg.max_replication_slots` | long | 8 | 64 | | PostgreSQL maximum replication slots |
| `pg.max_slot_wal_keep_size` | long | -1 | 2147483647 | | PostgreSQL maximum WAL size (MB) reserved for replication slots. Default is -1 (unlimited). wal_keep_size minimum WAL size setting takes precedence over this. |
| `pg.max_stack_depth` | long | 2097152 | 6291456 | | Maximum depth of the stack in bytes |
| `pg.max_standby_archive_delay` | long | 1 | 43200000 | | Max standby archive delay in milliseconds |
| `pg.max_standby_streaming_delay` | long | 1 | 43200000 | | Max standby streaming delay in milliseconds |
| `pg.max_wal_senders` | long | 20 | 64 | | PostgreSQL maximum WAL senders |
| `pg.max_worker_processes` | long | 8 | 96 | | Sets the maximum number of background processes that the system can support |
| `pg.pg_partman_bgw.interval` | long | 3600 | 604800 | | Sets the time interval to run pg_partman's scheduled tasks |
| `pg.pg_partman_bgw.role` | string | | | | Controls which role to use for pg_partman's scheduled background tasks. |
| `pg.pg_stat_monitor.pgsm_enable_query_plan` | boolean | | | | Enables or disables query plan monitoring |
| `pg.pg_stat_monitor.pgsm_max_buckets` | long | 1 | 10 | | Sets the maximum number of buckets  |
| `pg.temp_file_limit` | long | -1 | 2147483647 | | PostgreSQL temporary file limit in KiB, -1 for unlimited |
| `pg.timezone` | string | | | | PostgreSQL service timezone |
| `pg.track_activity_query_size` | long | 1024 | 10240 | | Specifies the number of bytes reserved to track the currently executing command for each active session. |
| `pg.track_commit_timestamp` | string | | | "off", "on" | Record commit time of transactions. |
| `pg.track_functions` | string | | | "all", "none", "pl" | Enables tracking of function call counts and time used. |
| `pg.track_io_timing` | string | | | "off", "on" | Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms. |
| `pg.wal_sender_timeout` | long | | | | Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout. |
| `pg.wal_writer_delay` | long | 10 | 200 | | WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance |
| `pgbouncer.autodb_idle_timeout` | long | 0 | 86400 | | The number of seconds after which - if unused - the automatically created database pools are freed. If set to 0, then timeout is disabled. |
| `pgbouncer.autodb_max_db_connections` | long | 0 | 2147483647 | | The overall maximum number of server connections per database (regardless of user). Setting it to 0 means it is unlimited. |
| `pgbouncer.autodb_pool_mode` | string | | | "session", "statement", "transaction" | The PgBouncer pool mode:<br>- with session, the server is released back to the pool after the client disconnects<br>- with transaction, the server is released back to the pool after the transaction finishes<br>- with statement the server is released back to the pool after the query finishes (transactions spanning multiple statements are disallowed in this mode).<br>The default value is: session.<br>A valid range is: session, transaction, statement |
| `pgbouncer.autodb_pool_size` | long | 0 | 10000 | | When set to non-zero, it automatically creates a pool of the specified size per user, provided that the pool doesn’t exist. |
| `pgbouncer.min_pool_size` | long | 0 | 10000 | | Adds more server connections to the pool if the pool connection number is smaller than this number. It improves the behavior when the usual load comes back suddenly after a period of total inactivity. The value is capped at the pool size. |
| `pgbouncer.server_idle_timeout` | long | 0 | 86400 | | The amount of time in seconds after which the server connection is dropped. If set to 0, then timeout is disabled. |
| `pgbouncer.server_lifetime` | long | 60 | 86400 | | The amount of time after which the pooler closes any unused server connection. |
| `pgbouncer.server_reset_query_always` | boolean | | | | Runs server_reset_query (DISCARD ALL) in all pooling modes. |
| `timescaledb.max_background_workers` | long | 1 | 4096 | | The number of background workers for timescaledb operations. You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time. |


## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
