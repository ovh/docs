---
title: Kafka - Advanced parameters references
excerpt: This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Kafka according to your use cases
updated: 2025-08-04
---

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Kafka according to your use cases.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account   
- An analytics service running on your OVHcloud Public Cloud project ([this guide](/pages/public_cloud/data_analytics/analytics/analytics_getting_started) can help you to meet this requirement)
- Access to your [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](https://api.ovh.com/console/)   

## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](/pages/public_cloud/data_analytics/analytics/analytics_advanced_parameters#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](/pages/public_cloud/data_analytics/analytics/analytics_advanced_parameters#using-api) to find out how to change your advanced parameters from the OVHcloud API.

### Advanced parameters for Kafka

Below you can find a summary of every configuration option available for Kafka service:

| Parameters |
|------------|
|**kafka.auto_create_topics_enable** `boolean`<br>Enable auto-creation of topics. (Default: true)<br>|
|**kafka.compression_type** `string`<br>values: `gzip`, `lz4`, `producer`, `snappy`, `uncompressed`, `zstd`<br>Specify the final compression type for a given topic. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'uncompressed' which is equivalent to no compression; and 'producer' which means retain the original compression codec set by the producer.(Default: producer)<br>|
|**kafka.connections_max_idle_ms** `long`<br>min: `1000` max: `3600000`<br>Idle connections timeout: the server socket processor threads close the connections that idle for longer than this. (Default: 600000 ms (10 minutes))<br>|
|**kafka.default_replication_factor** `long`<br>min: `1` max: `10`<br>Replication factor for auto-created topics (Default: 3)<br>|
|**kafka.group_initial_rebalance_delay_ms** `long`<br>min: `0` max: `300000`<br>The amount of time, in milliseconds, the group coordinator will wait for more consumers to join a new group before performing the first rebalance. A longer delay means potentially fewer rebalances, but increases the time until processing begins. The default value for this is 3 seconds. During development and testing it might be desirable to set this to 0 in order to not delay test execution time. (Default: 3000 ms (3 seconds))<br>|
|**kafka.group_max_session_timeout_ms** `long`<br>min: `0` max: `1800000`<br>The maximum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. Default: 1800000 ms (30 minutes)<br>|
|**kafka.group_min_session_timeout_ms** `long`<br>min: `0` max: `60000`<br>The minimum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. (Default: 6000 ms (6 seconds))<br>|
|**kafka.log_cleaner_delete_retention_ms** `long`<br>min: `0` max: `315569260000`<br>How long are delete records retained? (Default: 86400000 (1 day))<br>|
|**kafka.log_cleaner_max_compaction_lag_ms** `long`<br>min: `30000` max: `9223372036854776000`<br>The maximum amount of time message will remain uncompacted. Only applicable for logs that are being compacted. (Default: 9223372036854775807 ms (Long.MAX_VALUE))<br>|
|**kafka.log_cleaner_min_cleanable_ratio** `double`<br>min: `0.2` max: `0.9`<br>Controls log compactor frequency. Larger value means more frequent compactions but also more space wasted for logs. Consider setting log.cleaner.max.compaction.lag.ms to enforce compactions sooner, instead of setting a very high value for this option. (Default: 0.5)<br>|
|**kafka.log_cleaner_min_compaction_lag_ms** `long`<br>min: `0` max: `9223372036854776000`<br>The minimum time a message will remain uncompacted in the log. Only applicable for logs that are being compacted. (Default: 0 ms)<br>|
|**kafka.log_cleanup_policy** `string`<br>values: `compact`, `compact,delete`, `delete`<br>The default cleanup policy for segments beyond the retention window (Default: delete)<br>|
|**kafka.log_flush_interval_messages** `long`<br>min: `1` max: `9223372036854776000`<br>The number of messages accumulated on a log partition before messages are flushed to disk (Default: 9223372036854775807 (Long.MAX_VALUE))<br>|
|**kafka.log_flush_interval_ms** `long`<br>min: `0` max: `9223372036854776000`<br>The maximum time in ms that a message in any topic is kept in memory (page-cache) before flushed to disk. If not set, the value in log.flush.scheduler.interval.ms is used (Default: null)<br>|
|**kafka.log_index_interval_bytes** `long`<br>min: `0` max: `104857600`<br>The interval with which Kafka adds an entry to the offset index (Default: 4096 bytes (4 kibibytes))<br>|
|**kafka.log_index_size_max_bytes** `long`<br>min: `1048576` max: `104857600`<br>The maximum size in bytes of the offset index (Default: 10485760 (10 mebibytes))<br>|
|**kafka.log_local_retention_bytes** `long`<br>min: `-2` max: `9223372036854776000`<br>The maximum size of local log segments that can grow for a partition before it gets eligible for deletion. If set to -2, the value of log.retention.bytes is used. The effective value should always be less than or equal to log.retention.bytes value. (Default: -2)<br>|
|**kafka.log_local_retention_ms** `long`<br>min: `-2` max: `9223372036854776000`<br>The number of milliseconds to keep the local log segments before it gets eligible for deletion. If set to -2, the value of log.retention.ms is used. The effective value should always be less than or equal to log.retention.ms value. (Default: -2)<br>|
|**kafka.log_message_downconversion_enable** `boolean`<br>This configuration controls whether down-conversion of message formats is enabled to satisfy consume requests. (Default: true)<br>|
|**kafka.log_message_timestamp_difference_max_ms** `long`<br>min: `0` max: `9223372036854776000`<br>The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message (Default: 9223372036854775807 (Long.MAX_VALUE))<br>|
|**kafka.log_message_timestamp_type** `string`<br>values: `CreateTime`, `LogAppendTime`<br>Define whether the timestamp in the message is message create time or log append time. (Default: CreateTime)<br>|
|**kafka.log_preallocate** `boolean`<br>Should pre allocate file when create new segment? (Default: false)<br>|
|**kafka.log_retention_bytes** `long`<br>min: `-1` max: `9223372036854776000`<br>The maximum size of the log before deleting messages (Default: -1)<br>|
|**kafka.log_retention_hours** `long`<br>min: `-1` max: `2147483647`<br>The number of hours to keep a log file before deleting it (Default: 168 hours (1 week))<br>|
|**kafka.log_retention_ms** `long`<br>min: `-1` max: `9223372036854776000`<br>The number of milliseconds to keep a log file before deleting it (in milliseconds), If not set, the value in log.retention.minutes is used. If set to -1, no time limit is applied. (Default: null, log.retention.hours applies)<br>|
|**kafka.log_roll_jitter_ms** `long`<br>min: `0` max: `9223372036854776000`<br>The maximum jitter to subtract from logRollTimeMillis (in milliseconds). If not set, the value in log.roll.jitter.hours is used (Default: null)<br>|
|**kafka.log_roll_ms** `long`<br>min: `1` max: `9223372036854776000`<br>The maximum time before a new log segment is rolled out (in milliseconds). (Default: null, log.roll.hours applies (Default: 168, 7 days))<br>|
|**kafka.log_segment_bytes** `long`<br>min: `10485760` max: `1073741824`<br>The maximum size of a single log file (Default: 1073741824 bytes (1 gibibyte))<br>|
|**kafka.log_segment_delete_delay_ms** `long`<br>min: `0` max: `3600000`<br>The amount of time to wait before deleting a file from the filesystem (Default: 60000 ms (1 minute))<br>|
|**kafka.max_connections_per_ip** `long`<br>min: `256` max: `2147483647`<br>The maximum number of connections allowed from each ip address (Default: 2147483647).<br>|
|**kafka.max_incremental_fetch_session_cache_slots** `long`<br>min: `1000` max: `10000`<br>The maximum number of incremental fetch sessions that the broker will maintain. (Default: 1000)<br>|
|**kafka.message_max_bytes** `long`<br>min: `0` max: `100001200`<br>The maximum size of message that the server can receive. (Default: 1048588 bytes (1 mebibyte + 12 bytes))<br>|
|**kafka.min_insync_replicas** `long`<br>min: `1` max: `7`<br>When a producer sets acks to 'all' (or '-1'), min.insync.replicas specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful. (Default: 1)<br>|
|**kafka.num_partitions** `long`<br>min: `1` max: `1000`<br>Number of partitions for auto-created topics (Default: 1)<br>|
|**kafka.offsets_retention_minutes** `long`<br>min: `1` max: `2147483647`<br>Log retention window in minutes for offsets topic (Default: 10080 minutes (7 days))<br>|
|**kafka.producer_purgatory_purge_interval_requests** `long`<br>min: `10` max: `10000`<br>The purge interval (in number of requests) of the producer request purgatory (Default: 1000).<br>|
|**kafka.replica_fetch_max_bytes** `long`<br>min: `1048576` max: `104857600`<br>The number of bytes of messages to attempt to fetch for each partition . This is not an absolute maximum, if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. (Default: 1048576 bytes (1 mebibytes))<br>|
|**kafka.replica_fetch_response_max_bytes** `long`<br>min: `10485760` max: `1048576000`<br>Maximum bytes expected for the entire fetch response. Records are fetched in batches, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. As such, this is not an absolute maximum. (Default: 10485760 bytes (10 mebibytes))<br>|
|**kafka.sasl_oauthbearer_expected_audience** `string`<br>The (optional) comma-delimited setting for the broker to use to verify that the JWT was issued for one of the expected audiences. (Default: null)<br>|
|**kafka.sasl_oauthbearer_expected_issuer** `string`<br>Optional setting for the broker to use to verify that the JWT was created by the expected issuer.(Default: null)<br>|
|**kafka.sasl_oauthbearer_jwks_endpoint_url** `string`<br>OIDC JWKS endpoint URL. By setting this the SASL SSL OAuth2/OIDC authentication is enabled. See also other options for SASL OAuth2/OIDC. (Default: null)<br>|
|**kafka.sasl_oauthbearer_sub_claim_name** `string`<br>Name of the scope from which to extract the subject claim from the JWT.(Default: sub)<br>|
|**kafka.socket_request_max_bytes** `long`<br>min: `10485760` max: `209715200`<br>The maximum number of bytes in a socket request (Default: 104857600 bytes).<br>|
|**kafka.transaction_partition_verification_enable** `boolean`<br>Enable verification that checks that the partition has been added to the transaction before writing transactional records to the partition. (Default: true)<br>|
|**kafka.transaction_remove_expired_transaction_cleanup_interval_ms** `long`<br>min: `600000` max: `3600000`<br>The interval at which to remove transactions that have expired due to transactional.id.expiration.ms passing (Default: 3600000 ms (1 hour)).<br>|
|**kafka.transaction_state_log_segment_bytes** `long`<br>min: `1048576` max: `2147483647`<br>The transaction topic segment bytes should be kept relatively small in order to facilitate faster log compaction and cache loads (Default: 104857600 bytes (100 mebibytes)).<br>|
|**kafka_authentication_methods.certificate** `boolean`<br>Enable certificate/SSL authentication<br>|
|**kafka_authentication_methods.sasl** `boolean`<br>Enable SASL authentication<br>|

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
