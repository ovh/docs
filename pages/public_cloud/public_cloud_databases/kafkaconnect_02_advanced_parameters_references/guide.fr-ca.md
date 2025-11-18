---
title: Kafka Connect - Références des paramètres avancés (EN)
excerpt: This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for MySQL according to your use cases
updated: 2025-08-04
---

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Kafka Connect according to your use cases.

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

### Advanced parameters for Kafka Connect

Below you can find a summary of every configuration option available for Kafka Connect service:

| Parameters |
|------------|
|**kafka_connect.connector_client_config_override_policy** `string`<br>values: `All`, `None`<br>Defines what client configurations can be overridden by the connector. Default is None<br>|
|**kafka_connect.consumer_auto_offset_reset** `string`<br>values: `earliest`, `latest`<br>What to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server. Default is earliest<br>|
|**kafka_connect.consumer_fetch_max_bytes** `long`<br>min: `1048576` max: `104857600`<br>Records are fetched in batches by the consumer, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that the consumer can make progress. As such, this is not a absolute maximum.<br>|
|**kafka_connect.consumer_isolation_level** `string`<br>values: `read_committed`, `read_uncommitted`<br>Transaction read isolation level. read_uncommitted is the default, but read_committed can be used if consume-exactly-once behavior is desired.<br>|
|**kafka_connect.consumer_max_partition_fetch_bytes** `long`<br>min: `1048576` max: `104857600`<br>Records are fetched in batches by the consumer.If the first record batch in the first non-empty partition of the fetch is larger than this limit, the batch will still be returned to ensure that the consumer can make progress. <br>|
|**kafka_connect.consumer_max_poll_interval_ms** `long`<br>min: `1` max: `2147483647`<br>The maximum delay in milliseconds between invocations of poll() when using consumer group management (defaults to 300000).<br>|
|**kafka_connect.consumer_max_poll_records** `long`<br>min: `1` max: `10000`<br>The maximum number of records returned in a single call to poll() (defaults to 500).<br>|
|**kafka_connect.offset_flush_interval_ms** `long`<br>min: `1` max: `100000000`<br>The interval at which to try committing offsets for tasks (defaults to 60000).<br>|
|**kafka_connect.offset_flush_timeout_ms** `long`<br>min: `1` max: `2147483647`<br>Maximum number of milliseconds to wait for records to flush and partition offset data to be committed to offset storage before cancelling the process and restoring the offset data to be committed in a future attempt (defaults to 5000).<br>|
|**kafka_connect.producer_batch_size** `long`<br>min: `0` max: `5242880`<br>This setting gives the upper bound of the batch size to be sent. If there are fewer than this many bytes accumulated for this partition, the producer will 'linger' for the linger.ms time waiting for more records to show up. A batch size of zero will disable batching entirely (defaults to 16384).<br>|
|**kafka_connect.producer_buffer_memory** `long`<br>min: `5242880` max: `134217728`<br>The total bytes of memory the producer can use to buffer records waiting to be sent to the broker (defaults to 33554432).<br>|
|**kafka_connect.producer_compression_type** `string`<br>values: `gzip`, `lz4`, `none`, `snappy`, `zstd`<br>Specify the default compression type for producers. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'none' which is the default and equivalent to no compression.<br>|
|**kafka_connect.producer_linger_ms** `long`<br>min: `0` max: `5000`<br>This setting gives the upper bound on the delay for batching: once there is batch.size worth of records for a partition it will be sent immediately regardless of this setting, however if there are fewer than this many bytes accumulated for this partition the producer will 'linger' for the specified time waiting for more records to show up. Defaults to 0.<br>|
|**kafka_connect.producer_max_request_size** `long`<br>min: `131072` max: `67108864`<br>This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests.<br>|
|**kafka_connect.scheduled_rebalance_max_delay_ms** `long`<br>min: `0` max: `600000`<br>The maximum delay that is scheduled in order to wait for the return of one or more departed workers before rebalancing and reassigning their connectors and tasks to the group. During this period the connectors and tasks of the departed workers remain unassigned. Defaults to 5 minutes.<br>|
|**kafka_connect.session_timeout_ms** `long`<br>min: `1` max: `2147483647`<br>The timeout in milliseconds used to detect failures when using Kafka’s group management facilities (defaults to 10000).<br>|

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
