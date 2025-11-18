---
title: "Connectors and Connection Strings"
updated: 2025-02-15
---

## Objective

In ForePaaS's Project, all available **data sources** are defined and configured in the [Data Catalog](/pages/public_cloud/data_platform/product/data-catalog/00-data-catalog-index).  

In the Python SDK, all those **data sources** are named by a unique **connection string** and accessible through **connectors** returned by the `connect()` function. The returned **Connector object** as well as its available methods depend on the **data source's type**.

A simple example to list tables from the default storage engine:

```python
from forepaas.dwh import connect

# connect to default PRIM storage engine
cn_prim = connect('dwh/data_prim/')
# list databases tables
tables = cn.list()
```

Data sources may be split in 4 categories:

* [Buckets](#buckets)
* [Storage Engines](#storage-engines)
* [Query Engine](#query-engine)
* [Sources](#sources)

> [!primary]
> **Connection strings** are used in all Project's components to reference **data sources**, for instance in Data Processing Engine [Load](/pages/public_cloud/data_platform/product/dpe/actions/load/advanced-mode) and [Aggregate](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode) actions or when [applying segmentation](/pages/public_cloud/data_platform/getting-further/segmentation/dwh-attributes#understanding-advanced-parameters).

## Buckets

Buckets are ForePaaS' built-in object store. Below, the connection string and its respective Connector object returned by the `connect function`.

| connection string | Connector | description |
| :---------------- | :-------: | :---------- |
| `connect("data_store")`| DataStore | Connects to the buckets |
| `connect("data_store/my-bucket")` | Bucket | Connects to a specific bucket |

Read more about [DataStore and Bucket connectors](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket).

## Storage Engines

Projects are linked to [Storage Engines](/pages/public_cloud/data_platform/product/storage-engine) as main databases to store and query data at the heart of your Project.
 
A Project can be defined with multiple [datasets](/pages/public_cloud/data_platform/product/lakehouse-manager/datasets), but by default you will receive 3 datasets **PRIM, MART and ML**. You can also create custom internal and external datasets. Each of these datasets can be linked to a different storage engine.

| connection string | Connector | description |
| :---------------- | :-------: | :---------- |
| `connect("dwh/data_prim/")`| Dataset | Connects to the default dataset - **PRIM** |
| `connect("dwh/data_mart/")`| Dataset | Connects to the default dataset - **MART** |
| `connect("dwh/exampleDataset/")`| Dataset | Connects to the custom dataset created by you - **exampleDataset** |
| `connect("dwh/data_prim/my_table")`| Dataset | Connects to the default dataset - **PRIM** that contains **my_table** |

Read more about [Database connector](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm).

## Query Engine

When a [query engine has been activated](/pages/public_cloud/data_platform/product/am/resources#manage-the-query-engine), it may be used to request different storage engines and some compatible sources in an unified way.

| connection string | Connector | description |
| :---------------- | :-------: | :---------- |
| `connect("query_engine")`| Trino | Connects to the query engine (Trino) |
| `connect(f"query_engine/{catalog}/{schema}")` | Trino | Connects directly to a **schema** in a **catalog** |

## Sources

You may also connect to external data sources declared in [Data Catalog's Sources](/pages/public_cloud/data_platform/product/data-catalog/sources/00-sources-index). Each external source has an associated **connection string** based on the initial name given to the source.
For instance, a new data source named `My first data` will have the connection string equal to `dwh/my_first_data`.  
The **technical name** is displayed on the main Data Catalog Source's page.

External sources may be split in a few types:

* **Databases connectors** have same methods as storage engines, see [Database connectores](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#data-manager-connector-methods)  
(i.e. Snowflake, PostgreSQL, Oracle, Microsoft SQL Server, Amazon Redshift, MongoDB...)  
* **Protocol connectors** when accessing file storage or object store (ForePaaS Buckets, ForePaaS File Upload, SFTP, Amazon S3, ...)  
Those connectors have same methods as [Bucket connector](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucket-connector-methods)  
* **Stream** (i.e. Kafka, MQIT, Amazon Kinesis) or **External APIs** (i.e. Google Analytics, Facebook, Twitter, Mailchimp..)  
Those connectors are mainly designed to be used from [Data Catalog Analyzer](/pages/public_cloud/data_platform/product/data-catalog/analyzer/00-analyzer-index) and [Data Processing Engine Load Actions](/pages/public_cloud/data_platform/product/dpe/actions/load/00-load-index).

## Go further

Join our [community of users](/links/community).