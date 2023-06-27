---
title: OpenSearch - Advanced parameters references
excerpt:
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

This guide lists all the supported advanced parameters that allow you to configure your Public Cloud Databases for OpenSearch according to your use cases.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account   
- A database running on your OVHcloud Public Cloud Databases ([this guide](/pages/platform/databases/databases_01_order_control_panel) can help you to meet this requirement)   
- Access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) or to the [OVHcloud API](https://api.ovh.com/console/)   


## Instructions

> [!warning]
>
> The management of advanced parameters is not supported via Terraform.
>

### Using the OVHcloud Control Panel

Please refer to this [guide](/pages/platform/databases/databases_03_advanced_configuration#using-the-ovhcloud-control-panel) to find out how to change your advanced parameters from the OVHcloud Control Panel.

### Using API

Please refer to this [guide](/pages/platform/databases/databases_03_advanced_configuration#using-api) to find out how to change your advanced parameters from the OVHcloud API.


### Advanced parameters for OpenSearch

Below you can find a summary of every configuration option available for OpenSearch service:

| | |
|---|---|
| Parameter | `opensearch.action_auto_create_index_enabled` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Description | Explicitly allow or block automatic creation of indices. Defaults to true |


| | |
|---|---|
| Parameter | `opensearch.cluster_max_shards_per_node` |
| Value type | long |
| Minumum | 10 |
| Maximum | 10000 |
| Description | Controls the number of shards allowed in the cluster per data node |


| | |
|---|---|
| Parameter | `opensearch.cluster_routing_allocation_node_concurrent_recoveries` |
| Value type | long |
| Minumum | 2 |
| Maximum | 16 |
| Description | How many concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen on a node. Defaults to 2. |


| | |
|---|---|
| Parameter | `opensearch.http_max_content_length` |
| Value type | long |
| Minumum | 1 |
| Maximum | 2147483647 |
| Description | Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes. |


| | |
|---|---|
| Parameter | `opensearch.http_max_header_size` |
| Value type | long |
| Minumum | 1024 |
| Maximum | 262144 |
| Description | The max size of allowed headers, in bytes |


| | |
|---|---|
| Parameter | `opensearch.http_max_initial_line_length` |
| Value type | long |
| Minumum | 1024 |
| Maximum | 65536 |
| Description | The max length of an HTTP URL, in bytes |


| | |
|---|---|
| Parameter | `opensearch.indices_memory_index_buffer_size` |
| Value type | long |
| Minumum | 3 |
| Maximum | 40 |
| Description | Percentage value. Default is 10%. Total amount of heap used for indexing buffer, before writing segments to disk. This is an expert setting. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance. |


| | |
|---|---|
| Parameter | `opensearch.indices_queries_cache_size` |
| Value type | long |
| Minumum | 3 |
| Maximum | 40 |
| Description | Percentage value. Default is 10%. Maximum amount of heap used for query cache. This is an expert setting. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other OpenSearch functionalities. |


| | |
|---|---|
| Parameter | `opensearch.indices_query_bool_max_clause_count` |
| Value type | long |
| Minumum | 64 |
| Maximum | 4096 |
| Description | Maximum number of clauses Lucene BooleanQuery can have. The default value (1024) is relatively high, and increasing it may cause performance issues. Investigate other approaches first before increasing this value. |


| | |
|---|---|
| Parameter | `opensearch.indices_recovery_max_bytes_per_sec` |
| Value type | long |
| Minumum | 40 |
| Maximum | 400 |
| Description | Limits total inbound and outbound recovery traffic for each node. Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Defaults to 40mb |


| | |
|---|---|
| Parameter | `opensearch.indices_recovery_max_concurrent_file_chunks` |
| Value type | long |
| Minumum | 2 |
| Maximum | 5 |
| Description | Number of file chunks sent in parallel for each recovery. Defaults to 2. |


| | |
|---|---|
| Parameter | `opensearch.override_main_response_version` |
| Value type | boolean |
| Minumum | |
| Maximum | |
| Description | Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false |


| | |
|---|---|
| Parameter | `opensearch.script_max_compilations_rate` |
| Value type | string |
| Minumum | |
| Maximum | |
| Description | Script compilation circuit breaker limits the number of inline script compilations within a period of time. Default is use-context |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_analyze_queue_size` |
| Value type | long |
| Minumum | 10 |
| Maximum | 2000 |
| Description | Size for the thread pool queue. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_analyze_size` |
| Value type | long |
| Minumum | 1 |
| Maximum | 128 |
| Description | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_force_merge_size` |
| Value type | long |
| Minumum | 1 |
| Maximum | 128 |
| Description | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_get_queue_size` |
| Value type | long |
| Minumum | 10 |
| Maximum | 2000 |
| Description | Size for the thread pool queue. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_get_size` |
| Value type | long |
| Minumum | 1 |
| Maximum | 128 |
| Description | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_search_queue_size` |
| Value type | long |
| Minumum | 10 |
| Maximum | 2000 |
| Description | Size for the thread pool queue. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_search_size` |
| Value type | long |
| Minumum | 1 |
| Maximum | 128 |
| Description | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_search_throttled_queue_size` |
| Value type | long |
| Minumum | 10 |
| Maximum | 2000 |
| Description | Size for the thread pool queue. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_search_throttled_size` |
| Value type | long |
| Minumum | 1 |
| Maximum | 128 |
| Description | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_write_queue_size` |
| Value type | long |
| Minumum | 10 |
| Maximum | 2000 |
| Description | Size for the thread pool queue. |


| | |
|---|---|
| Parameter | `opensearch.thread_pool_write_size` |
| Value type | long |
| Minumum | 1 |
| Maximum | 128 |
| Description | Size for the thread pool. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value. |




## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
