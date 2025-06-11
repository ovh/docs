---
title: "Sources"
updated: 2025-02-15
---

## Objective

Sources let you register external data sources to use for your Project by choosing from a variety of 60+ connectors available through our internal marketplace called the platform Store. 

[Learn how to setup your data source connector](/pages/public_cloud/data_platform/product/data-catalog/sources/connectors/00-connectors-index)

When you connect to your data source, it's always possible to import a copy of the data into your Project, by creating and [loading](/pages/public_cloud/data_platform/product/dpe/actions/load/00-load-index) a [table](/pages/public_cloud/data_platform/product/lakehouse-manager/tables/00-tables-index).

> [!primary]
>the Platform separates the registration of connectors credentials (done on this page), and the analysis/load of its data (carried out downstream in the process) in order to allow a possible separation of [roles](/pages/public_cloud/data_platform/product/iam/users/roles) between teams.

For some data sources, an alternative approach is available: [connect directly](#make-your-data-source-directly-queryable) to the data source for queries in the [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index).

* [Managing data sources](#managing-sources)
* [Creating a new data source](#creating-a-new-source)
    * [Make your data source directly queryable](#make-your-data-source-directly-queryable)

## Managing sources

Data sources are organized in a hierarchical way through a tree view consisting of:

* **Folders** for logical grouping of your sources

* **Sources** specifying the access to smaller **source objects** (which can be tables, files, or endpoints) 

![source](images/source-index-1.png){.thumbnail}

> [!primary]
>  For better readability, it is recommended to group sources into folders. 

Each time you add a source, a new line will be added to this dashboard. The basic actions that you can 
perform on the Source menu dashboard includes:

* [Creating](#creating-a-new-source) a new source
* **Searching** for an existing source
* **Grouping** sources by folder
* **Adding, duplicating, deleting** sources within an existing folder

![source](images/source-index-2.png){.thumbnail}

## Creating a new source

Under Sources click on **New Source** and you will see all available connectors in the Platform Store. You can find a connector by either typing the name of the desired connector in the search bar, filtering by a specific category on the left-hand side of the Store or scrolling down the connector list

the platform currently supports the following sources:

* **Files storage systems:** Amazon S3, Dropbox, Google Drive, Azure Blob Storage, Microsoft OneDrive, Google Cloud Storage, Shadow Drive

* **Database engines:** PostgreSQL, MySQL, SQLServer, MariaDB, Cassandra, Google BigQuery, Amazon Redshift, ElasticSearch, Heroku Postgres, Clickhouse, SingleStore, MongoDB, Oracle, Snowflake, Trino, OpenSearch, Prometheus, M3DB, CockroachDB, InfluxDB

* **Network protocols & Open Data:** FTP, HTTP Files, SFTP, HTTP REST, Open Weather

* **Real-time & IoT:** Apache Kafka, Amazon Kinesis, MQTT, RabbitMQ, Apache Druid

* **Social media:** Pinterest, Facebook, LinkedIn, Twitter, YouTube, Weibo, Instagram

* **Analytics:** Google Analytics, Appfigures, Hubspot, MailChimp

Once you have found it in the **the platform store**, click on it and then on *Select* to proceed to the connector configuration screen.

[Learn how to configure your connector](/pages/public_cloud/data_platform/product/data-catalog/sources/connectors/00-connectors-index)

### Make your data source directly queryable

In the **Preferences** of your source, you can activate the option *Direct Query* to mark it as directly queryable.

![source](images/source-index-3.png){.thumbnail}

If you mark a source as directly queryable, you will be able to execute SQL queries on its source objects (for example, the tables in your Amazon Redshift source) from the [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index), without having to import the data in the Platform first.

> [!warning]
> This option is currently only available in [SQL queries](/pages/public_cloud/data_platform/product/am/queries/sql). It is necessary to activate a [query engine](/pages/public_cloud/data_platform/product/am/resources) to use this feature. 

The following sources are compatible for direct queries:

* Amazon Redshift
* BigQuery
* Cassandra
* ClickHouse
* ElasticSearch
* Google Sheets
* Amazon Kinesis
* MongoDB
* MySQL
* Oracle
* PostgreSQL
* Redis
* SingleStore
* Snowflake
* SQL Server

## Go further

Join our [community of users](/links/community).