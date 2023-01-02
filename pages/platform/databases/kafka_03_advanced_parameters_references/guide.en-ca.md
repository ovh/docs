---
title: Kafka - Advanced parameters references
slug: kafka/advanced-parameters-references
excerpt:
section: Kafka - Guides
order: 030
---

<style>
th,
td:nth-child(-n+2) {
  white-space:nowrap;
}
</style>

**Last updated 28th December 2022**

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Kafka according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/ca/en/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](https://docs.ovh.com/ca/en/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/ca/en/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.


### Advanced parameters for Kafka

Below you can find a summary of every configuration option available for Kafka service:

| Parameter | Value Type | Description |
|:---|:---:|:---|
| `kafka.auto_create_topics_enable` | boolean | Enable auto creation of topics |
| `kafka.compression_type` | string | Specify the final compression type for a given topic. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'uncompressed' which is equivalent to no compression, and 'producer' which means retain the original compression codec set by the producer. |
| `kafka.connections_max_idle_ms` | long | Idle connections timeout: the server socket processor threads close the connections that idle for longer than this. |
| `kafka.default_replication_factor` | long | Replication factor for autocreated topics |
| `kafka.group_initial_rebalance_delay_ms` | long | The amount of time, in milliseconds, the group coordinator will wait for more consumers to join a new group before performing the first rebalance. A longer delay means potentially fewer rebalances, but increases the time until processing begins. The default value for this is 3 seconds. During development and testing it might be desirable to set this to 0 in order to not delay test execution time. |
| `kafka.group_max_session_timeout_ms` | long | The maximum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. |
| `kafka.group_min_session_timeout_ms` | long | The minimum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. |
| `kafka.log_cleaner_delete_retention_ms` | long | How long are delete records retained? |
| `kafka.log_cleaner_max_compaction_lag_ms` | long | The maximum amount of time message will remain uncompacted. Only applicable for logs that are being compacted |
| `kafka.log_cleaner_min_cleanable_ratio` | double | Controls log compactor frequency. Larger value means more frequent compactions but also more space wasted for logs. Consider setting log.cleaner.max.compaction.lag.ms to enforce compactions sooner, instead of setting a very high value for this option. |
| `kafka.log_cleaner_min_compaction_lag_ms` | long | The minimum time a message will remain uncompacted in the log. Only applicable for logs that are being compacted. |
| `kafka.log_cleanup_policy` | string | The default cleanup policy for segments beyond the retention window |
| `kafka.log_flush_interval_messages` | long | The number of messages accumulated on a log partition before messages are flushed to disk |
| `kafka.log_flush_interval_ms` | long | The maximum time in ms that a message in any topic is kept in memory before flushed to disk. If not set, the value in log.flush.scheduler.interval.ms is used |
| `kafka.log_index_interval_bytes` | long | The interval with which Kafka adds an entry to the offset index |
| `kafka.log_index_size_max_bytes` | long | The maximum size in bytes of the offset index |
| `kafka.log_message_downconversion_enable` | boolean | This configuration controls whether down-conversion of message formats is enabled to satisfy consume requests.  |
| `kafka.log_message_timestamp_difference_max_ms` | long | The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message |
| `kafka.log_message_timestamp_type` | string | Define whether the timestamp in the message is message create time or log append time. |
| `kafka.log_preallocate` | boolean | Should pre allocate file when create new segment? |
| `kafka.log_retention_bytes` | long | The maximum size of the log before deleting messages |
| `kafka.log_retention_hours` | long | The number of hours to keep a log file before deleting it |
| `kafka.log_retention_ms` | long | The number of milliseconds to keep a log file before deleting it (in milliseconds), If not set, the value in log.retention.minutes is used. If set to -1, no time limit is applied. |
| `kafka.log_roll_jitter_ms` | long | The maximum jitter to subtract from logRollTimeMillis (in milliseconds). If not set, the value in log.roll.jitter.hours is used |
| `kafka.log_roll_ms` | long | The maximum time before a new log segment is rolled out (in milliseconds). |
| `kafka.log_segment_bytes` | long | The maximum size of a single log file |
| `kafka.log_segment_delete_delay_ms` | long | The amount of time to wait before deleting a file from the filesystem |
| `kafka.max_connections_per_ip` | long | The maximum number of connections allowed from each ip address (defaults to 2147483647). |
| `kafka.max_incremental_fetch_session_cache_slots` | long | The maximum number of incremental fetch sessions that the broker will maintain. |
| `kafka.message_max_bytes` | long | The maximum size of message that the server can receive. |
| `kafka.min_insync_replicas` | long | When a producer sets acks to 'all' (or '-1'), min.insync.replicas specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful. |
| `kafka.num_partitions` | long | Number of partitions for autocreated topics |
| `kafka.offsets_retention_minutes` | long | Log retention window in minutes for offsets topic |
| `kafka.producer_purgatory_purge_interval_requests` | long | The purge interval (in number of requests) of the producer request purgatory(defaults to 1000). |
| `kafka.replica_fetch_max_bytes` | long | The number of bytes of messages to attempt to fetch for each partition (defaults to 1048576). This is not an absolute maximum, if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. |
| `kafka.replica_fetch_response_max_bytes` | long | Maximum bytes expected for the entire fetch response (defaults to 10485760). Records are fetched in batches, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. As such, this is not an absolute maximum. |
| `kafka.socket_request_max_bytes` | long | The maximum number of bytes in a socket request (defaults to 104857600). |
| `kafka.transaction_remove_expired_transaction_cleanup_interval_ms` | long | The interval at which to remove transactions that have expired due to transactional.id.expiration.ms passing (defaults to 3600000 (1 hour)). |
| `kafka.transaction_state_log_segment_bytes` | long | The transaction topic segment bytes should be kept relatively small in order to facilitate faster log compaction and cache loads (defaults to 104857600 (100 mebibytes)). |
| `kafka_authentication_methods.certificate` | boolean | Enable certificate/SSL authentication |
| `kafka_authentication_methods.sasl` | boolean | Enable SASL authentication |


## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
