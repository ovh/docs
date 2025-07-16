---
title: PostgreSQL - Advanced parameters references
excerpt: This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for PostgreSQL according to your use cases
updated: 2025-06-19
---

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for PostgreSQL according to your use cases.

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

### Advanced parameters for PostgreSQL

Below you can find a summary of every configuration option available for a PostgreSQL service:

#### General parameters

| Parameters |
|------------|
|**pg.autovacuum_analyze_scale_factor** `double`<br>min: `0` max: `1`<br>Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE (e.g. `0.2` for 20% of the table size). The default is `0.2`.<br>|
|**pg.autovacuum_analyze_threshold** `long`<br>min: `0` max: `2147483647`<br>Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any table. The default is `50`.<br>|
|**pg.autovacuum_freeze_max_age** `long`<br>min: `200000000` max: `1500000000`<br>Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. The system launches autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. Changing this parameter causes a service restart.<br>|
|**pg.autovacuum_max_workers** `long`<br>min: `1` max: `20`<br>Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any time. The default is `3`. Changing this parameter causes a service restart.<br>|
|**pg.autovacuum_naptime** `long`<br>min: `1` max: `86400`<br>Specifies the minimum delay between autovacuum runs on any given database. The delay is measured in seconds. The default is `60`.<br>|
|**pg.autovacuum_vacuum_cost_delay** `long`<br>min: `-1` max: `100`<br>Specifies the cost delay value that will be used in automatic VACUUM operations. If `-1` is specified, the regular vacuum_cost_delay value will be used. The default is `2` (upstream default).<br>|
|**pg.autovacuum_vacuum_cost_limit** `long`<br>min: `-1` max: `10000`<br>Specifies the cost limit value that will be used in automatic VACUUM operations. If `-1` is specified, the regular vacuum_cost_limit value will be used. The default is `-1` (upstream default).<br>|
|**pg.autovacuum_vacuum_scale_factor** `double`<br>min: `0` max: `1`<br>Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM (e.g. `0.2` for 20% of the table size). The default is `0.2`.<br>|
|**pg.autovacuum_vacuum_threshold** `long`<br>min: `0` max: `2147483647`<br>Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any table. The default is `50`.<br>|
|**pg.bgwriter_delay** `long`<br>min: `10` max: `10000`<br>Specifies the delay between activity rounds for the background writer in milliseconds. The default is `200`.<br>|
|**pg.bgwriter_flush_after** `long`<br>min: `0` max: `2048`<br>Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. Specified in kilobytes. Setting of 0 disables forced writeback. The default is `512`.<br>|
|**pg.bgwriter_lru_maxpages** `long`<br>min: `0` max: `1073741823`<br>In each round, no more than this many buffers will be written by the background writer. Setting this to zero disables background writing. The default is `100`.<br>|
|**pg.bgwriter_lru_multiplier** `double`<br>min: `0` max: `10`<br>The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is `2.0`.<br>|
|**pg.deadlock_timeout** `long`<br>min: `500` max: `1800000`<br>This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. The default is `1000` (upstream default).<br>|
|**pg.default_toast_compression** `string`<br>values: `lz4`, `pglz`<br>Specifies the default TOAST compression method for values of compressible columns. The default is `lz4`. Only available for PostgreSQL 14+.<br>|
|**pg.idle_in_transaction_session_timeout** `long`<br>min: `0` max: `604800000`<br>Time out sessions with open transactions after this number of milliseconds<br>|
|**pg.jit** `boolean`<br>Controls system-wide use of Just-in-Time Compilation (JIT).<br>|
|**pg.log_autovacuum_min_duration** `long`<br>min: `-1` max: `2147483647`<br>Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one disables logging autovacuum actions. The default is `1000`.<br>|
|**pg.log_error_verbosity** `string`<br>values: `DEFAULT`, `TERSE`, `VERBOSE`<br>Controls the amount of detail written in the server log for each message that is logged.<br>|
|**pg.log_line_prefix** `string`<br>values: `'%m[%p]%q[user=%u,db=%d,app=%a]'`, `'%t[%p]:[%l-1]user=%u,db=%d,app=%a,client=%h'`, `'pid=%p,user=%u,db=%d,app=%a,client=%h'`, `'pid=%p,user=%u,db=%d,app=%a,client=%h,txid=%x,qid=%Q'`<br>Choose from one of the available log formats.<br>|
|**pg.log_min_duration_statement** `long`<br>min: `-1` max: `86400000`<br>Log statements that take more than this number of milliseconds to run, -1 disables<br>|
|**pg.log_temp_files** `long`<br>min: `-1` max: `2147483647`<br>Log statements for each temporary file created larger than this number of kilobytes, -1 disables<br>|
|**pg.max_files_per_process** `long`<br>min: `1000` max: `4096`<br>PostgreSQL maximum number of files that can be open per process. The default is `1000` (upstream default). Changing this parameter causes a service restart.<br>|
|**pg.max_locks_per_transaction** `long`<br>min: `64` max: `6400`<br>PostgreSQL maximum locks per transaction. Changing this parameter causes a service restart.<br>|
|**pg.max_logical_replication_workers** `long`<br>min: `4` max: `64`<br>PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers). The default is `4` (upstream default). Changing this parameter causes a service restart.<br>|
|**pg.max_parallel_workers** `long`<br>min: `0` max: `96`<br>Sets the maximum number of workers that the system can support for parallel queries. The default is `8` (upstream default).<br>|
|**pg.max_parallel_workers_per_gather** `long`<br>min: `0` max: `96`<br>Sets the maximum number of workers that can be started by a single Gather or Gather Merge node. The default is `2` (upstream default).<br>|
|**pg.max_pred_locks_per_transaction** `long`<br>min: `64` max: `5120`<br>PostgreSQL maximum predicate locks per transaction. The default is `64` (upstream default). Changing this parameter causes a service restart.<br>|
|**pg.max_prepared_transactions** `long`<br>min: `0` max: `10000`<br>PostgreSQL maximum prepared transactions. The default is `0`. Changing this parameter causes a service restart.<br>|
|**pg.max_replication_slots** `long`<br>min: `8` max: `64`<br>PostgreSQL maximum replication slots. The default is `20`. Changing this parameter causes a service restart.<br>|
|**pg.max_slot_wal_keep_size** `long`<br>min: `-1` max: `2147483647`<br>PostgreSQL maximum WAL size (MB) reserved for replication slots. If `-1` is specified, replication slots may retain an unlimited amount of WAL files. The default is `-1` (upstream default). wal_keep_size minimum WAL size setting takes precedence over this.<br>|
|**pg.max_stack_depth** `long`<br>min: `2097152` max: `6291456`<br>Maximum depth of the stack in bytes. The default is `2097152` (upstream default).<br>|
|**pg.max_standby_archive_delay** `long`<br>min: `1` max: `43200000`<br>Max standby archive delay in milliseconds. The default is `30000` (upstream default).<br>|
|**pg.max_standby_streaming_delay** `long`<br>min: `1` max: `43200000`<br>Max standby streaming delay in milliseconds. The default is `30000` (upstream default).<br>|
|**pg.max_wal_senders** `long`<br>min: `20` max: `64`<br>PostgreSQL maximum WAL senders. The default is `20`. Changing this parameter causes a service restart.<br>|
|**pg.max_worker_processes** `long`<br>min: `8` max: `96`<br>Sets the maximum number of background processes that the system can support. The default is `8`. Changing this parameter causes a service restart.<br>|
|**pg.password_encryption** `string`<br>values: `md5`, `scram-sha-256`<br>Chooses the algorithm for encrypting passwords.<br>|
|**pg.pg_partman_bgw.interval** `long`<br>min: `3600` max: `604800`<br>Sets the time interval in seconds to run pg_partman's scheduled tasks. The default is `3600`.<br>|
|**pg.pg_partman_bgw.role** `string`<br>Controls which role to use for pg_partman's scheduled background tasks.<br>|
|**pg.pg_stat_monitor.pgsm_enable_query_plan** `boolean`<br>Enables or disables query plan monitoring. Changing this parameter causes a service restart. Only available for PostgreSQL 13+.<br>|
|**pg.pg_stat_monitor.pgsm_max_buckets** `long`<br>min: `1` max: `10`<br>Sets the maximum number of buckets. Changing this parameter causes a service restart. Only available for PostgreSQL 13+.<br>|
|**pg.pg_stat_statements.track** `string`<br>values: `all`, `none`, `top`<br>Controls which statements are counted. Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions), or none to disable statement statistics collection. The default is `top`.<br>|
|**pg.temp_file_limit** `long`<br>min: `-1` max: `2147483647`<br>PostgreSQL temporary file limit in KiB, -1 for unlimited<br>|
|**pg.timezone** `string`<br>PostgreSQL service timezone<br>|
|**pg.track_activity_query_size** `long`<br>min: `1024` max: `10240`<br>Specifies the number of bytes reserved to track the currently executing command for each active session. Changing this parameter causes a service restart.<br>|
|**pg.track_commit_timestamp** `string`<br>values: `off`, `on`<br>Record commit time of transactions. Changing this parameter causes a service restart.<br>|
|**pg.track_functions** `string`<br>values: `all`, `none`, `pl`<br>Enables tracking of function call counts and time used.<br>|
|**pg.track_io_timing** `string`<br>values: `off`, `on`<br>Enables timing of database I/O calls. The default is `off`. When on, it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.<br>|
|**pg.wal_sender_timeout** `long`<br>Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout.<br>|
|**pg.wal_writer_delay** `long`<br>min: `10` max: `200`<br>WAL flush interval in milliseconds. The default is `200`. Setting this parameter to a lower value may negatively impact performance.<br>|
|**pgbouncer.autodb_idle_timeout** `long`<br>min: `0` max: `86400`<br>If the automatically created database pools have been unused this many seconds, they are freed. If 0 then timeout is disabled. [seconds]<br>|
|**pgbouncer.autodb_max_db_connections** `long`<br>min: `0` max: `2147483647`<br>Do not allow more than this many server connections per database (regardless of user). Setting it to 0 means unlimited.<br>|
|**pgbouncer.autodb_pool_mode** `string`<br>values: `session`, `statement`, `transaction`<br>PGBouncer pool mode<br>|
|**pgbouncer.autodb_pool_size** `long`<br>min: `0` max: `10000`<br>If non-zero then create automatically a pool of that size per user when a pool doesn't exist.<br>|
|**pgbouncer.max_prepared_statements** `long`<br>min: `0` max: `3000`<br>PgBouncer tracks protocol-level named prepared statements related commands sent by the client in transaction and statement pooling modes when max_prepared_statements is set to a non-zero value. Setting it to 0 disables prepared statements. max_prepared_statements defaults to 100, and its maximum is 3000.<br>|
|**pgbouncer.min_pool_size** `long`<br>min: `0` max: `10000`<br>Add more server connections to pool if below this number. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.<br>|
|**pgbouncer.server_idle_timeout** `long`<br>min: `0` max: `86400`<br>If a server connection has been idle more than this many seconds it will be dropped. If 0 then timeout is disabled. [seconds]<br>|
|**pgbouncer.server_lifetime** `long`<br>min: `60` max: `86400`<br>The pooler will close an unused server connection that has been connected longer than this. [seconds]<br>|
|**pgbouncer.server_reset_query_always** `boolean`<br>Run server_reset_query (DISCARD ALL) in all pooling modes<br>|
|**pglookout.max_failover_replication_time_lag** `long`<br>min: `10` max: `9223372036854776000`<br>Number of seconds of master unavailability before triggering database failover to standby<br>|
|**shared_buffers_percentage** `double`<br>min: `20` max: `60`<br>Percentage of total RAM that the database server uses for shared memory buffers. Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value. Changing this parameter causes a service restart.<br>|
|**timescaledb.max_background_workers** `long`<br>min: `1` max: `4096`<br>The number of background workers for timescaledb operations. You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time. Changing this parameter causes a service restart.<br>|
|**work_mem** `long`<br>min: `1` max: `1024`<br>Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. The default is 1MB + 0.075% of total RAM (up to 32MB).<br>|

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
