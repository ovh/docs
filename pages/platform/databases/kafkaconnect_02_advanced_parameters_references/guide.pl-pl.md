---
title: Kafka Connect - Advanced parameters references
slug: kafkaconnect/advanced-parameters-references
excerpt:
section: Kafka Connect - Guides
order: 020
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/kafkaconnect/advanced-parameters-references/'
---

<style>
th,
td:nth-child(-n+2) {
  white-space:nowrap;
}
</style>

**Last updated 28th December 2022**

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Kafka Connect according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/pl/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/pl/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](https://docs.ovh.com/pl/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/pl/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.


### Advanced parameters for Kafka Connect

Below you can find a summary of every configuration option available for Kafka Connect service:

| Parameter | Value Type | Description |
|:---|:---:|:---|
| `kafka_connect.connector_client_config_override_policy` | string | Defines which client configurations can be overridden by the connector. Default is None |
| `kafka_connect.consumer_auto_offset_reset` | string | What to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server. Default is earliest |
| `kafka_connect.consumer_fetch_max_bytes` | long | Records are fetched in batches by the consumer, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that the consumer can make progress. As such, this is not a absolute maximum. |
| `kafka_connect.consumer_isolation_level` | string | Transaction read isolation level. read_uncommitted is the default, but read_committed can be used if consume-exactly-once behavior is desired. |
| `kafka_connect.consumer_max_partition_fetch_bytes` | long | Records are fetched in batches by the consumer. If the first record batch in the first non-empty partition of the fetch is larger than this limit, the batch will still be returned to ensure that the consumer can make progress.  |
| `kafka_connect.consumer_max_poll_interval_ms` | long | The maximum delay in milliseconds between invocations of poll() when using consumer group management (defaults to 300000). |
| `kafka_connect.consumer_max_poll_records` | long | The maximum number of records returned in a single call to poll() (defaults to 500). |
| `kafka_connect.offset_flush_interval_ms` | long | The interval at which to try committing offsets for tasks (defaults to 60000). |
| `kafka_connect.offset_flush_timeout_ms` | long | Maximum number of milliseconds to wait for records to flush and partition offset data to be committed to offset storage before cancelling the process and restoring the offset data to be committed in a future attempt (defaults to 5000). |
| `kafka_connect.producer_batch_size` | long | This setting gives the upper bound of the batch size to be sent. If there are fewer than this many bytes accumulated for this partition, the producer will 'linger' for the linger.ms time waiting for more records to show up. A batch size of zero will disable batching entirely (defaults to 16384). |
| `kafka_connect.producer_buffer_memory` | long | The total bytes of memory the producer can use to buffer records waiting to be sent to the broker (defaults to 33554432). |
| `kafka_connect.producer_compression_type` | string | Specify the default compression type for producers. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'none' which is the default and equivalent to no compression. |
| `kafka_connect.producer_linger_ms` | long | This setting gives the upper bound on the delay for batching: once there is batch.size worth of records for a partition it will be sent immediately regardless of this setting, however if there are fewer than this many bytes accumulated for this partition the producer will 'linger' for the specified time waiting for more records to show up. Defaults to 0. |
| `kafka_connect.producer_max_request_size` | long | This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests. |
| `kafka_connect.session_timeout_ms` | long | The timeout in milliseconds used to detect failures when using Kafka’s group management facilities (defaults to 10000). |


## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
