---
title: "Load PySpark Action"
updated: 2025-02-15
---

## Objective

The *Load PySpark* action **extracts raw data from sources and inserts it into primary tables** in your data warehouse using [Apache Spark™](https://spark.apache.org/). It is usually the first step in any data processing system, necessary before running any other processes on data coming from connected sources.

> [!primary]
> In other terms, if you've [set-up a connector through the Data Catalog](/pages/public_cloud/data_platform/product/data-catalog/sources/00-sources-index), the Project has the information to connect to the source as well as its metadata, but won't contain the actual data until it is actually loaded using the *Load PySpark* action.

* [Configure a Load PySpark action](#configure-a-load-action)
    * [Choose a source and destination](#choose-a-source-and-destination)
    * [Map the attributes](#map-attributes)
    * [Configure the action's preferences](#configure-the-action39s-preferences)
* [Use the Advanced mode](#advanced-mode)

## Configure a Load PySpark action

To create a new *Load PySpark* action, navigate to the *Actions* tab of the Data Processing Engine (DPE), click on **New Action** and select the *Load PySpark* action. 

### Choose a source and destination

To set-up the *Load PySpark* action, start by selecting a **source** from the list that you have already set-up in the [Sources](/pages/public_cloud/data_platform/product/data-catalog/sources/00-sources-index) tab of the Data Catalog. 

![load-pyspark-configure](images/load-pyspark-select-source.png){.thumbnail}

Then a **destination** table to send your data to. Similarly to the sources, the tables have to be configured ahead of time in the [Tables](/pages/public_cloud/data_platform/product/lakehouse-manager/tables/00-tables-index) tab of the Lakehouse Manager. Make sure you've [built](/pages/public_cloud/data_platform/product/lakehouse-manager/tables/table-interactions) your data model otherwise the tables won't be accessible by other components in the platform.

![load-pyspark-configure](images/load-pyspark-select-destination.png){.thumbnail}

### Map attributes

Once the source & destination have been selected, the system will **automatically map** the destination attributes of your destination table with the different columns that it has identified in the raw data source. 

![load-pyspark-configure](images/load-pyspark-blueprint-rules.png){.thumbnail}

> [!primary]
> On the picture below, you can see that the *date* attribute has a a value of '1' beside the notepad icon. This indicates the number of **data validation rules, also called blueprint rules**, defined in the Data Catalog, that will be automatically applied when loading the data. [Blueprint rules](/pages/public_cloud/data_platform/product/data-catalog/analyzer/add-blueprint-rules) allow users to quickly filter out invalid data like nulls / empty cells or reformat values such as date or currencies.

![load-pyspark-configure](images/load-pyspark-attribute-select.png){.thumbnail}

Note that you might want to **insert raw text** directly inside your destination table. This might come in handy for instance when you want to count the number of data points or tag a certain source with a label that will be later used in an aggregate table. To do that, select *< txt >* which will set the source attribute to a raw text input field.

![load-pyspark-configure](images/load-pyspark-attribute-txt.png){.thumbnail}

### Configure the action's preferences

Once you're satisfied with the mapping of your attributes, navigate to the [preferences tab to configure the action settings](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/00-execution-preferences-index).

![load-pyspark-configure](images/load-pyspark-settings.png){.thumbnail}

When you are done editing your action, click on **Create** to validate the action. 

## Advanced Mode

If you need to access the JSON configuration file of the action, you can activate the Advanced mode by clicking on **Advanced** at the top of the page.

[Use the Advanced mode of a Load action](/pages/public_cloud/data_platform/product/dpe/actions/load/advanced-mode)

## Go further

Join our [community of users](/links/community).