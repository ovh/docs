---
title: PostgreSQL - Advanced parameters references
slug: postgresql/advanced-parameters-references
excerpt:
section: PostgreSQL - Guides
order: 100
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

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for PostgreSQL according to your use cases.

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

Please refer to this [guide](https://docs.ovh.com/gb/en/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/gb/en/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.

### Advanced parameters for PostgreSQL

Below you can find a summary of every configuration option available for PostgreSQL service:

#### General parameters

| Parameter | Value Type | Description |
|:---|:---:|:---|
| `pg.deadlock_timeout` | integer | Amount of waiting time on a lock, in milliseconds, before the check to see if there is a deadlock condition. |
| `pg.default_toast_compression` | string | Specifies the default TOAST compression method for values of compressible columns. Available since PostgreSQL version 14.<br>The default value is `lz4`.<br>Valid values: are `lz4`, `pglz`. |
| `pg.idle_in_transaction_session_timeout` | integer | Times out all sessions with open transactions after this time in milliseconds. |
| `pg.jit` | boolean | Controls the system-wide use of Just-in-Time Compilation (JIT). |
| `pg.log_error_verbosity` | string | Controls the amount of detail written in the server log for each message that is logged. A valid range is: terse, default, verbose |
| `pg.log_line_prefix` | string | Lets you choose from one of the available log-formats. This supports log analysers, such as: `pgbadger`, `pganalyze`, etc. |
| `pg.log_min_duration_statement` | integer | Logs statements that take more than the specified number of milliseconds to run. The -1 disables it. |
| `pg.max_files_per_process` | integer | The maximum number of PostgreSQL files that can be open per process. |
| `pg.max_locks_per_transaction` | integer | The maximum PostgreSQL locks per transaction. |
| `pg.max_logical_replication_workers` | integer | The maximum PostgreSQL logical replication workers (as defined by the pool of `max_parallel_workers`). |
| `pg.max_parallel_workers` | integer | The maximum number of workers that the system can support for parallel queries. |
| `pg.max_parallel_workers_per_gather` | integer | The maximum number of workers that can be started by a single `Gather` or `Gather Merge` node. |
| `pg.max_pred_locks_per_transaction` | integer | The maximum predicate locks per transaction. |
| `pg.max_prepared_transactions` | integer | The maximum prepared transactions. |
| `pg.max_replication_slots` | integer | The maximum replication slots. |
| `pg.max_stack_depth` | integer | The maximum depth of the stack in bytes. |
| `pg.max_standby_archive_delay` | integer | The maximum standby archive delay in milliseconds. |
| `pg.max_standby_streaming_delay` | integer | The maximum standby streaming delay in milliseconds. |
| `pg.max_wal_senders` | integer | The maximum Write-ahead logging (WAL) senders. |
| `pg.max_worker_processes` | integer | The maximum number of background processes that the system can support. |
| `pg.pg_partman_bgw.interval` | integer | Time interval between the `pg_partman` scheduled tasks. |
| `pg.pg_partman_bgw.role` | string | Controls which role to use for the `pg_partman` scheduled background tasks. |
| `pg.temp_file_limit` | integer | Temporary file limit in KiB. Set -1 for unlimited. |
| `pg.timezone` | string | The service timezone. |
| `pg.track_activity_query_size` | integer | The number of bytes reserved to track the command being executed for each active session. |
| `pg.track_commit_timestamp` | string | The recording of transactions commit time. |
| `pg.track_functions` | string | The tracking of function call counts and time used. |
| `pg.track_io_timing` | string | The timing of the database input/output calls. The parameter is off by default, as it repeatedly queries the operating system for the current time, which can cause significant overhead on some platforms.<br>The default value is: `off` |
| `pg.wal_sender_timeout` | integer | Terminates the replication connections that are inactive for longer than the specified amount of time, in milliseconds. Setting this value to zero disables the timeout. |
| `pg.wal_writer_delay` | integer | Write-ahead logging (`WAL`) flush interval in milliseconds. Setting this value to anything lower than the default `200ms` can negatively impact performance.<br>The default value is: `200ms` |
| `timescaledb.max_background_workers` | integer | The number of background workers for `timescaledb` operations. You should configure this setting to the sum of your number of databases, and the total number of the concurrent background workers you want running at any given point in time. |

#### `autovacuum` parameters

| Parameter | Value Type | Description |
| --- | --- | --- |
| `pg.autovacuum_analyze_scale_factor` | number | The fraction of the table size to add to `autovacuum_analyze_threshold` when deciding whether to trigger an `ANALYZE`.<br>The default value is: 0.2 (20% of table size).<br>A valid range is: 0-1 |
| `pg.autovacuum_analyze_threshold` | integer | The minimum number of inserted, updated or deleted tuples needed to trigger an `ANALYZE` in any table.<br>The default value is: 50 |
| `pg.autovacuum_freeze_max_age` | integer | The maximum age (in transactions) that a table `pg_class.relfrozenxid` field can attain before a `VACUUM` operation is forced to prevent transaction ID wraparound within the table. Note that the system launches `autovacuum` processes to prevent wraparound even when `autovacuum` is disabled. This parameter causes the server to be restarted. |
| `pg.autovacuum_max_workers` | integer | The maximum number of `autovacuum` processes (different than the `autovacuum` launcher) that can be running at a time. This parameter can only be set at the server start.<br>The default value is: 3 |
| `pg.autovacuum_naptime` | integer | The minimum delay between `autovacuum` runs on any database. The delay is measured in seconds.<br>The default value is: 60 |
| `pg.autovacuum_vacuum_cost_delay` | integer | The cost delay value that is used in automatic `VACUUM` operations. If -1 is specified, the regular `vacuum_cost_delay` value will be used.<br>The default value is: 20 |
| `pg.autovacuum_vacuum_cost_limit` | integer | The cost limit value that is used in automatic `VACUUM` operations. If -1 is specified, the regular `vacuum_cost_limit` value will be used.<br>The default value is: -1 |
| `pg.autovacuum_vacuum_scale_factor` | number | The fraction of the table size to add to `autovacuum_vacuum_threshold` when deciding whether to trigger a `VACUUM`.<br>The default value is: 0.2 (20% of table size).<br>A valid range is: 0-1 |
| `pg.autovacuum_vacuum_threshold` | integer | The minimum number of updated or deleted tuples needed to trigger a `VACUUM` in a table.<br>The default value is: 50 |
| `pg.log_autovacuum_min_duration` | integer | Causes each action executed by `autovacuum` to be logged, as long as it runs for at least the specified number of milliseconds. Setting this to zero logs all `autovacuum` actions. -1 (the default) disables logging the `autovacuum` actions.<br>The default value is: -1 |

#### `bgwriter` parameters

| Parameter | Value Type | Description |
| --- | --- | --- |
| `pg.bgwriter_delay` | integer | Specifies the delay between activity rounds for the background writer in milliseconds.<br>The default value is: 200 |
| `pg.bgwriter_flush_after` | integer | If more than the specified `bgwriter_flush_after` bytes have been written by the background writer, it attempts to force the OS to issue the writes to the underlying storage. It is specified in kilobytes. Setting it to 0 disables the forced write-back.<br>The default value is: 512 (kilobytes) |
| `pg.bgwriter_lru_maxpages` | integer | The maximum number of buffers to be written by the background writer on each round. Setting this to zero disables background writing.<br>The default value is: 100 |
| `pg.bgwriter_lru_multiplier` | number | The `bgwriter_lru_multiplier` is a number used to multiply the recent average buffer needs in order to arrive at an estimate of the number that will be needed during the next round, (up to `bgwriter_lru_maxpages`). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Any bigger values provide a buffer for spikes in demand, while smaller values intentionally leave writes to be done by server processes.<br>The default value is: 2.0 |

#### `pgbouncer` parameters

| Parameter | Value Type | Description |
| --- | --- | --- |
| `pgbouncer.autodb_idle_timeout` | integer | The number of seconds after which - if unused - the automatically created database pools are freed. If set to 0, then timeout is disabled. |
| `pgbouncer.autodb_max_db_connections` | integer | The overall maximum number of server connections per database (regardless of user). Setting it to 0 means it is unlimited. |
| `pgbouncer.autodb_pool_mode` | string | The `PgBouncer` pool mode: with `session`, the server is released back to the pool after the client disconnects; with `transaction`, the server is released back to the pool after the transaction finishes; with `statement` the server is released back to the pool after the query finishes (transactions spanning multiple statements are disallowed in this mode).<br>The default value is: `session`<br>A valid range is: `session`, `transaction`, `statement` |
| `pgbouncer.autodb_pool_size` | integer | When set to non-zero, it automatically creates a pool of the specified size per user, provided that the pool doesn’t exist. |
| `pgbouncer.min_pool_size` | integer | Adds more server connections to the pool if the pool connection number is smaller than this number. It improves the behavior when the usual load comes back suddenly after a period of total inactivity. The value is capped at the pool size. |
| `pgbouncer.server_idle_timeout` | integer | The amount of time in seconds after which the server connection is dropped. If set to 0, then timeout is disabled. |
| `pgbouncer.server_lifetime` | integer | The amount of time after which the pooler closes any unused server connection. |
| `pgbouncer.server_reset_query_always` | boolean | Runs `server_reset_query` (`DISCARD ALL`) in all pooling modes. |
