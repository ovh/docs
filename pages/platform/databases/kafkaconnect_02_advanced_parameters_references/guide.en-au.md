---
title: Kafka Connect - Advanced parameters references
slug: kafkaconnect/advanced-parameters-references
excerpt:
section: Kafka Connect - Guides
order: 020
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

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for Kafka Connect according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](https://docs.ovh.com/au/en/publiccloud/databases/getting-started/) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](https://docs.ovh.com/au/en/publiccloud/databases/advanced-configuration/#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](https://docs.ovh.com/au/en/publiccloud/databases/advanced-configuration/#using-api) to find out how to change your advanced parameters from the OVHcloud API.


### Advanced parameters for Kafka Connect

Below you can find a summary of every configuration option available for Kafka Connect service:

| Parameter | Value Type | Minimum | Maximum | Values | Description |
|:---|:---|:---|:---|:---|:---|
| `kafka_connect.connector_client_config_override_policy` | string | | | "All", "None" | Defines which client configurations can be overridden by the connector. Default is None |
| `kafka_connect.consumer_auto_offset_reset` | string | | | "earliest", "latest" | What to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server. Default is earliest |
| `kafka_connect.consumer_fetch_max_bytes` | long | 1048576 | 104857600 | | Records are fetched in batches by the consumer, and if the first record batch in the first non-empty partition of the fetch is larger than this value, the record batch will still be returned to ensure that the consumer can make progress. As such, this is not a absolute maximum. |
| `kafka_connect.consumer_isolation_level` | string | | | "read_committed", "read_uncommitted" | Transaction read isolation level. read_uncommitted is the default, but read_committed can be used if consume-exactly-once behavior is desired. |
| `kafka_connect.consumer_max_partition_fetch_bytes` | long | 1048576 | 104857600 | | Records are fetched in batches by the consumer. If the first record batch in the first non-empty partition of the fetch is larger than this limit, the batch will still be returned to ensure that the consumer can make progress.  |
| `kafka_connect.consumer_max_poll_interval_ms` | long | 1 | 2147483647 | | The maximum delay in milliseconds between invocations of poll() when using consumer group management (defaults to 300000). |
| `kafka_connect.consumer_max_poll_records` | long | 1 | 10000 | | The maximum number of records returned in a single call to poll() (defaults to 500). |
| `kafka_connect.offset_flush_interval_ms` | long | 1 | 100000000 | | The interval at which to try committing offsets for tasks (defaults to 60000). |
| `kafka_connect.offset_flush_timeout_ms` | long | 1 | 2147483647 | | Maximum number of milliseconds to wait for records to flush and partition offset data to be committed to offset storage before cancelling the process and restoring the offset data to be committed in a future attempt (defaults to 5000). |
| `kafka_connect.producer_batch_size` | long | 0 | 5242880 | | This setting gives the upper bound of the batch size to be sent. If there are fewer than this many bytes accumulated for this partition, the producer will 'linger' for the linger.ms time waiting for more records to show up. A batch size of zero will disable batching entirely (defaults to 16384). |
| `kafka_connect.producer_buffer_memory` | long | 5242880 | 134217728 | | The total bytes of memory the producer can use to buffer records waiting to be sent to the broker (defaults to 33554432). |
| `kafka_connect.producer_compression_type` | string | | | "gzip", "lz4", "none", "snappy", "zstd" | Specify the default compression type for producers. This configuration accepts the standard compression codecs ('gzip', 'snappy', 'lz4', 'zstd'). It additionally accepts 'none' which is the default and equivalent to no compression. |
| `kafka_connect.producer_linger_ms` | long | 0 | 5000 | | This setting gives the upper bound on the delay for batching: once there is batch.size worth of records for a partition it will be sent immediately regardless of this setting, however if there are fewer than this many bytes accumulated for this partition the producer will 'linger' for the specified time waiting for more records to show up. Defaults to 0. |
| `kafka_connect.producer_max_request_size` | long | 131072 | 67108864 | | This setting will limit the number of record batches the producer will send in a single request to avoid sending huge requests. |
| `kafka_connect.session_timeout_ms` | long | 1 | 2147483647 | | The timeout in milliseconds used to detect failures when using Kafka’s group management facilities (defaults to 10000). |


## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
