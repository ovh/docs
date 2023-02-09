---
title: OpenSearch - Advanced parameters references
slug: opensearch/advanced-parameters-references
excerpt:
section: OpenSearch - Guides
order: 030
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/opensearch/advanced-parameters-references/'
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
  content:'Description';
}
</style>

**Last updated 6th February 2023**

## Objective

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for OpenSearch according to your use cases.

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


### Advanced parameters for OpenSearch

Below you can find a summary of every configuration option available for OpenSearch service:

| Parameter | Value Type | Minimum | Maximum | Description |
|:---|:---|:---|:---|:---|
| `opensearch.action_auto_create_index_enabled` | boolean | | | Explicitly allow or block automatic creation of indices. Defaults to true |
| `opensearch.cluster_max_shards_per_node` | long | 10 | 10000 | Controls the number of shards allowed in the cluster per data node |
| `opensearch.cluster_routing_allocation_node_concurrent_recoveries` | long | 2 | 16 | How many concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen on a node. Defaults to 2. |
| `opensearch.http_max_content_length` | long | 1 | 2147483647 | Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes. |
| `opensearch.http_max_header_size` | long | 1024 | 262144 | The max size of allowed headers, in bytes |
| `opensearch.http_max_initial_line_length` | long | 1024 | 65536 | The max length of an HTTP URL, in bytes |
| `opensearch.indices_memory_index_buffer_size` | long | 3 | 40 | Percentage value. Default is 10%. Total amount of heap used for indexing buffer, before writing segments to disk. This is an expert setting. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance. |
| `opensearch.indices_queries_cache_size` | long | 3 | 40 | Percentage value. Default is 10%. Maximum amount of heap used for query cache. This is an expert setting. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other OpenSearch functionalities. |
| `opensearch.indices_query_bool_max_clause_count` | long | 64 | 4096 | Maximum number of clauses Lucene BooleanQuery can have. The default value (1024) is relatively high, and increasing it may cause performance issues. Investigate other approaches first before increasing this value. |
| `opensearch.indices_recovery_max_bytes_per_sec` | long | 40 | 400 | Limits total inbound and outbound recovery traffic for each node. Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Defaults to 40mb |
| `opensearch.indices_recovery_max_concurrent_file_chunks` | long | 2 | 5 | Number of file chunks sent in parallel for each recovery. Defaults to 2. |
| `opensearch.override_main_response_version` | boolean | | | Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false |
| `opensearch.script_max_compilations_rate` | string | | | Script compilation circuit breaker limits the number of inline script compilations within a period of time. Default is use-context |
| `opensearch.thread_pool_analyze_queue_size` | long | 10 | 2000 | Size for the thread pool queue. |
| `opensearch.thread_pool_analyze_size` | long | 1 | 128 | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |
| `opensearch.thread_pool_force_merge_size` | long | 1 | 128 | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |
| `opensearch.thread_pool_get_queue_size` | long | 10 | 2000 | Size for the thread pool queue. |
| `opensearch.thread_pool_get_size` | long | 1 | 128 | | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |
| `opensearch.thread_pool_search_queue_size` | long | 10 | 2000 | Size for the thread pool queue. |
| `opensearch.thread_pool_search_size` | long | 1 | 128 | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |
| `opensearch.thread_pool_search_throttled_queue_size` | long | 10 | 2000 | Size for the thread pool queue. |
| `opensearch.thread_pool_search_throttled_size` | long | 1 | 128 | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |
| `opensearch.thread_pool_write_queue_size` | long | 10 | 2000 | Size for the thread pool queue. |
| `opensearch.thread_pool_write_size` | long | 1 | 128 | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |


## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
