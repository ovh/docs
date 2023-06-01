---
title: Kafka - Advanced parameters references
slug: kafka/advanced-parameters-references
excerpt:
section: Kafka - Guides
order: 030
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

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Kafka according to your use cases.

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


### Advanced parameters for Kafka

Below you can find a summary of every configuration option available for Kafka service:

| | |
|---|---|
| Parameter | `kafka.auto_create_topics_enable` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | Enable auto creation of topics |


| | |
|---|---|
| Parameter | `kafka.compression_type` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "gzip", "lz4", "producer", "snappy", "uncompressed", "zstd" |
| Description | Specify the final compression type for a given topic. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'uncompressed' which is equivalent to no compression, and 'producer' which means retain the original compression codec set by the producer. |


| | |
|---|---|
| Parameter | `kafka.connections_max_idle_ms` |
| Value type | long |
| Minumum | 1000 |
| Maximum | 3600000 |
| Values | |
| Description | Idle connections timeout: the server socket processor threads close the connections that idle for longer than this. |


| | |
|---|---|
| Parameter | `kafka.default_replication_factor` |
| Value type | long |
| Minumum | 1 |
| Maximum | 10 |
| Values | |
| Description | Replication factor for autocreated topics |


| | |
|---|---|
| Parameter | `kafka.group_initial_rebalance_delay_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 300000 |
| Values | |
| Description | The amount of time, in milliseconds, the group coordinator will wait for more consumers to join a new group before performing the first rebalance. A longer delay means potentially fewer rebalances, but increases the time until processing begins. The default value for this is 3 seconds. During development and testing it might be desirable to set this to 0 in order to not delay test execution time. |


| | |
|---|---|
| Parameter | `kafka.group_max_session_timeout_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 1800000 |
| Values | |
| Description | The maximum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. |


| | |
|---|---|
| Parameter | `kafka.group_min_session_timeout_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 60000 |
| Values | |
| Description | The minimum allowed session timeout for registered consumers. Longer timeouts give consumers more time to process messages in between heartbeats at the cost of a longer time to detect failures. |


| | |
|---|---|
| Parameter | `kafka.log_cleaner_delete_retention_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 315569260000 |
| Values | |
| Description | How long are delete records retained? |


| | |
|---|---|
| Parameter | `kafka.log_cleaner_max_compaction_lag_ms` |
| Value type | long |
| Minumum | 30000 |
| Maximum | 9223372036854776000 |
| Values | |
| Description | The maximum amount of time message will remain uncompacted. Only applicable for logs that are being compacted |


| | |
|---|---|
| Parameter | `kafka.log_cleaner_min_cleanable_ratio` |
| Value type | double |
| Minumum | 0.2 |
| Maximum | 0.9 |
| Values | |
| Description | Controls log compactor frequency. Larger value means more frequent compactions but also more space wasted for logs. Consider setting log.cleaner.max.compaction.lag.ms to enforce compactions sooner, instead of setting a very high value for this option. |


| | |
|---|---|
| Parameter | `kafka.log_cleaner_min_compaction_lag_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 9223372036854776000 |
| Values | |
| Description | The minimum time a message will remain uncompacted in the log. Only applicable for logs that are being compacted. |


| | |
|---|---|
| Parameter | `kafka.log_cleanup_policy` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "compact", "compact,delete", "delete" |
| Description | The default cleanup policy for segments beyond the retention window |


| | |
|---|---|
| Parameter | `kafka.log_flush_interval_messages` |
| Value type | long |
| Minumum | 1 |
| Maximum | 9223372036854776000 |
| Values | |
| Description | The number of messages accumulated on a log partition before messages are flushed to disk |


| | |
|---|---|
| Parameter | `kafka.log_flush_interval_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 9223372036854776000 |
| Values | |
| Description | The maximum time in ms that a message in any topic is kept in memory before flushed to disk. If not set, the value in log.flush.scheduler.interval.ms is used |


| | |
|---|---|
| Parameter | `kafka.log_index_interval_bytes` |
| Value type | long |
| Minumum | 0 |
| Maximum | 104857600 |
| Values | |
| Description | The interval with which Kafka adds an entry to the offset index |


| | |
|---|---|
| Parameter | `kafka.log_index_size_max_bytes` |
| Value type | long |
| Minumum | 1048576 |
| Maximum | 104857600 |
| Values | |
| Description | The maximum size in bytes of the offset index |


| | |
|---|---|
| Parameter | `kafka.log_message_downconversion_enable` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | This configuration controls whether down-conversion of message formats is enabled to satisfy consume requests.  |


| | |
|---|---|
| Parameter | `kafka.log_message_timestamp_difference_max_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 9223372036854776000 |
| Values | |
| Description | The maximum difference allowed between the timestamp when a broker receives a message and the timestamp specified in the message |


| | |
|---|---|
| Parameter | `kafka.log_message_timestamp_type` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "CreateTime", "LogAppendTime" |
| Description | Define whether the timestamp in the message is message create time or log append time. |


| | |
|---|---|
| Parameter | `kafka.log_preallocate` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | Should pre allocate file when create new segment? |


| | |
|---|---|
| Parameter | `kafka.log_retention_bytes` |
| Value type | long |
| Minumum | -1 |
| Maximum | 9223372036854776000 |
| Values | |
| Description | The maximum size of the log before deleting messages |


| | |
|---|---|
| Parameter | `kafka.log_retention_hours` |
| Value type | long |
| Minumum | -1 |
| Maximum | 2147483647 |
| Values | |
| Description | The number of hours to keep a log file before deleting it |


| | |
|---|---|
| Parameter | `kafka.log_retention_ms` |
| Value type | long |
| Minumum | -1 |
| Maximum | 9223372036854776000 |
| Values | |
| Description | The number of milliseconds to keep a log file before deleting it (in milliseconds), If not set, the value in log.retention.minutes is used. If set to -1, no time limit is applied. |


| | |
|---|---|
| Parameter | `kafka.log_roll_jitter_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 9223372036854776000 |
| Values | |
| Description | The maximum jitter to subtract from logRollTimeMillis (in milliseconds). If not set, the value in log.roll.jitter.hours is used |


| | |
|---|---|
| Parameter | `kafka.log_roll_ms` |
| Value type | long |
| Minumum | 1 |
| Maximum | 9223372036854776000 |
| Values | |
| Description | The maximum time before a new log segment is rolled out (in milliseconds). |


| | |
|---|---|
| Parameter | `kafka.log_segment_bytes` |
| Value type | long |
| Minumum | 10485760 |
| Maximum | 1073741824 |
| Values | |
| Description | The maximum size of a single log file |


| | |
|---|---|
| Parameter | `kafka.log_segment_delete_delay_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 3600000 |
| Values | |
| Description | The amount of time to wait before deleting a file from the filesystem |


| | |
|---|---|
| Parameter | `kafka.max_connections_per_ip` |
| Value type | long |
| Minumum | 0 |
| Maximum | 2147483647 |
| Values | |
| Description | The maximum number of connections allowed from each ip address (defaults to 2147483647). |


| | |
|---|---|
| Parameter | `kafka.max_incremental_fetch_session_cache_slots` |
| Value type | long |
| Minumum | 1000 |
| Maximum | 10000 |
| Values | |
| Description | The maximum number of incremental fetch sessions that the broker will maintain. |


| | |
|---|---|
| Parameter | `kafka.message_max_bytes` |
| Value type | long |
| Minumum | 0 |
| Maximum | 100001200 |
| Values | |
| Description | The maximum size of message that the server can receive. |


| | |
|---|---|
| Parameter | `kafka.min_insync_replicas` |
| Value type | long |
| Minumum | 1 |
| Maximum | 7 |
| Values | |
| Description | When a producer sets acks to 'all' (or '-1'), min.insync.replicas specifies the minimum number of replicas that must acknowledge a write for the write to be considered successful. |


| | |
|---|---|
| Parameter | `kafka.num_partitions` |
| Value type | long |
| Minumum | 1 |
| Maximum | 1000 |
| Values | |
| Description | Number of partitions for autocreated topics |


| | |
|---|---|
| Parameter | `kafka.offsets_retention_minutes` |
| Value type | long |
| Minumum | 1 |
| Maximum | 2147483647 |
| Values | |
| Description | Log retention window in minutes for offsets topic |


| | |
|---|---|
| Parameter | `kafka.producer_purgatory_purge_interval_requests` |
| Value type | long |
| Minumum | 10 |
| Maximum | 10000 |
| Values | |
| Description | The purge interval (in number of requests) of the producer request purgatory(defaults to 1000). |


| | |
|---|---|
| Parameter | `kafka.replica_fetch_max_bytes` |
| Value type | long |
| Minumum | 1048576 |
| Maximum | 104857600 |
| Values | |
| Description | The number of bytes of messages to attempt to fetch for each partition (defaults to 1048576). This is not an absolute maximum, if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. |


| | |
|---|---|
| Parameter | `kafka.replica_fetch_response_max_bytes` |
| Value type | long |
| Minumum | 10485760 |
| Maximum | 1048576000 |
| Values | |
| Description | Maximum bytes expected for the entire fetch response (defaults to 10485760). Records are fetched in batches, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that progress can be made. As such, this is not an absolute maximum. |


| | |
|---|---|
| Parameter | `kafka.socket_request_max_bytes` |
| Value type | long |
| Minumum | 10485760 |
| Maximum | 209715200 |
| Values | |
| Description | The maximum number of bytes in a socket request (defaults to 104857600). |


| | |
|---|---|
| Parameter | `kafka.transaction_remove_expired_transaction_cleanup_interval_ms` |
| Value type | long |
| Minumum | 600000 |
| Maximum | 3600000 |
| Values | |
| Description | The interval at which to remove transactions that have expired due to transactional.id.expiration.ms passing (defaults to 3600000 (1 hour)). |


| | |
|---|---|
| Parameter | `kafka.transaction_state_log_segment_bytes` |
| Value type | long |
| Minumum | 1048576 |
| Maximum | 2147483647 |
| Values | |
| Description | The transaction topic segment bytes should be kept relatively small in order to facilitate faster log compaction and cache loads (defaults to 104857600 (100 mebibytes)). |


| | |
|---|---|
| Parameter | `kafka_authentication_methods.certificate` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | Enable certificate/SSL authentication |


| | |
|---|---|
| Parameter | `kafka_authentication_methods.sasl` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Values | |
| Description | Enable SASL authentication |




## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
