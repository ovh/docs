---
title: Kafka Connect - Advanced parameters references
excerpt: This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for MySQL according to your use cases
routes:
    canonical: '/pages/platform/databases/kafkaconnect_02_advanced_parameters_references'
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

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Kafka Connect according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/es/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](/pages/platform/databases/databases_01_order_control_panel) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](/pages/platform/databases/databases_03_advanced_configuration#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](/pages/platform/databases/databases_03_advanced_configuration#using-api) to find out how to change your advanced parameters from the OVHcloud API.


### Advanced parameters for Kafka Connect

Below you can find a summary of every configuration option available for Kafka Connect service:

| | |
|---|---|
| Parameter | `kafka_connect.connector_client_config_override_policy` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "All", "None" |
| Description | Defines which client configurations can be overridden by the connector. Default is None |


| | |
|---|---|
| Parameter | `kafka_connect.consumer_auto_offset_reset` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "earliest", "latest" |
| Description | What to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server. Default is earliest |


| | |
|---|---|
| Parameter | `kafka_connect.consumer_fetch_max_bytes` |
| Value type | long |
| Minumum | 1048576 |
| Maximum | 104857600 |
| Values | |
| Description | Records are fetched in batches by the consumer, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that the consumer can make progress. As such, this is not a absolute maximum. |


| | |
|---|---|
| Parameter | `kafka_connect.consumer_isolation_level` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "read_committed", "read_uncommitted" |
| Description | Transaction read isolation level. read_uncommitted is the default, but read_committed can be used if consume-exactly-once behavior is desired. |


| | |
|---|---|
| Parameter | `kafka_connect.consumer_max_partition_fetch_bytes` |
| Value type | long |
| Minumum | 1048576 |
| Maximum | 104857600 |
| Values | |
| Description | Records are fetched in batches by the consumer. If the first record batch in the first non-empty partition of the fetch is larger than this limit, the batch will still be returned to ensure that the consumer can make progress.  |


| | |
|---|---|
| Parameter | `kafka_connect.consumer_max_poll_interval_ms` |
| Value type | long |
| Minumum | 1 |
| Maximum | 2147483647 |
| Values | |
| Description | The maximum delay in milliseconds between invocations of poll() when using consumer group management (defaults to 300000). |


| | |
|---|---|
| Parameter | `kafka_connect.consumer_max_poll_records` |
| Value type | long |
| Minumum | 1 |
| Maximum | 10000 |
| Values | |
| Description | The maximum number of records returned in a single call to poll() (defaults to 500). |


| | |
|---|---|
| Parameter | `kafka_connect.offset_flush_interval_ms` |
| Value type | long |
| Minumum | 1 |
| Maximum | 100000000 |
| Values | |
| Description | The interval at which to try committing offsets for tasks (defaults to 60000). |


| | |
|---|---|
| Parameter | `kafka_connect.offset_flush_timeout_ms` |
| Value type | long |
| Minumum | 1 |
| Maximum | 2147483647 |
| Values | |
| Description | Maximum number of milliseconds to wait for records to flush and partition offset data to be committed to offset storage before cancelling the process and restoring the offset data to be committed in a future attempt (defaults to 5000). |


| | |
|---|---|
| Parameter | `kafka_connect.producer_batch_size` |
| Value type | long |
| Minumum | 0 |
| Maximum | 5242880 |
| Values | |
| Description | This setting gives the upper bound of the batch size to be sent. If there are fewer than this many bytes accumulated for this partition, the producer will 'linger' for the linger.ms time waiting for more records to show up. A batch size of zero will disable batching entirely (defaults to 16384). |


| | |
|---|---|
| Parameter | `kafka_connect.producer_buffer_memory` |
| Value type | long |
| Minumum | 5242880 |
| Maximum | 134217728 |
| Values | |
| Description | The total bytes of memory the producer can use to buffer records waiting to be sent to the broker (defaults to 33554432). |


| | |
|---|---|
| Parameter | `kafka_connect.producer_compression_type` |
| Value type | string |
| Minumum | |
| Maximum | |
| Values | "gzip", "lz4", "none", "snappy", "zstd" |
| Description | Specify the default compression type for producers. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'none' which is the default and equivalent to no compression. |


| | |
|---|---|
| Parameter | `kafka_connect.producer_linger_ms` |
| Value type | long |
| Minumum | 0 |
| Maximum | 5000 |
| Values | |
| Description | This setting gives the upper bound on the delay for batching: once there is batch.size worth of records for a partition it will be sent immediately regardless of this setting, however if there are fewer than this many bytes accumulated for this partition the producer will 'linger' for the specified time waiting for more records to show up. Defaults to 0. |


| | |
|---|---|
| Parameter | `kafka_connect.producer_max_request_size` |
| Value type | long |
| Minumum | 131072 |
| Maximum | 67108864 |
| Values | |
| Description | This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests. |


| | |
|---|---|
| Parameter | `kafka_connect.session_timeout_ms` |
| Value type | long |
| Minumum | 1 |
| Maximum | 2147483647 |
| Values | |
| Description | The timeout in milliseconds used to detect failures when using Kafka’s group management facilities (defaults to 10000). |




## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
