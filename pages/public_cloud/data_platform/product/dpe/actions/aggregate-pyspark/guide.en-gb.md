---
title: "Aggregate PySpark Action"
updated: 2025-02-15
---

## Objective

The *Aggregate PySpark* action allows you to transfer data from any pre-existing table into any other table (including the same table), using [Apache Spark™](https://spark.apache.org/).

The Aggregate PySpark action's scope - which typically allows SQL handling as well as joining multiple tables and grouping results - is wide, making it one of the most used action in data processing workflows.

* [Configure an Aggregate PySpark action](/pages/public_cloud/data_platform/product/dpe/actions/aggregate-pyspark#configure-an-aggregate-pyspark-action)
    * [Transfer raw data into a primary table](/pages/public_cloud/data_platform/product/dpe/actions/aggregate-pyspark#transfer-raw-data-into-a-primary-table)
    * [Join a referential to a primary table](/pages/public_cloud/data_platform/product/dpe/actions/aggregate-pyspark#join-a-referential-to-a-primary-table)
    * [Configure the action's preferences](/pages/public_cloud/data_platform/product/dpe/actions/aggregate-pyspark#configure-the-action39s-preferences)
* [Use the Advanced mode](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/00-aggregate-index#use-the-advanced-mode)

## Configure an Aggregate PySpark action

An Aggregate PySpark action is composed of a list of one or more *source tables* from which the values will be extracted and placed into a single *destination table*. Each destination attribute needs to be mapped to a source attribute.

When multiple *source tables* are selected, it is necessary to specify a join condition, just like it's done in SQL.

> [!warning]
> Note that leaving a destination attribute unmapped in the Aggregate PySpark action configuration **will trigger an error** when the action is launched. If you'd rather leave the destination field empty, make sure to simply remove it from the list of mapped attributes.

When destination attributes are removed from the list of mapped attributes, the following behavior shall be expected:

* If the Aggregate PySpark action is **inserting new rows, it will simply fill the destination attribute column with NULL values**.
* If the Aggregate PySpark action is **updating existing rows (i.e. inserting over existing data), it will leave the previous value intact regardless of whether it was NULL or not**.

Use case examples for both single and multiple *source tables* are described below.

### Transfer raw data into a primary table

Create a new Aggregate PySpark action:

![dpe-overview](images/py-agg-ui.png){.thumbnail}

Select the source (left) and destination table. Matching attributes are automatically assigned where possible. It is possible to manually select which attributes are mapped between the source and destination.

![dpe-overview-icons](images/py-agg-ui2.png){.thumbnail}

If needed, you can change the mapping to either SQL or plain text by clicking on the **MAP** button and selecting either *SQL* or *txt*. 

In the attributes section, it is also possible to change the compute mode of each attribute. In the example above, *SELECT* has been chosen but other options are available.

Press *Create* at the top right to create the action.

### Join a referential to a primary table

To specify a join, click on **Add a source** located just below the source table, you will be prompted to select a table to join with. Select the type of join from the dropdown menu, and input the join conditions in the UI. Multiple source tables can be joined.

![dpe-overview-icons](images/py-agg-ui3.png){.thumbnail}

Attributes from all the joined tables can then be selected in the bottom attributes section either from the dropdown menus or using SQL.

### Configure the action's preferences

Once you're satisfied with the mapping of your attributes, use the [preferences tab to configure the action settings](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/00-execution-preferences-index).

![load-configure](images/py-settings.png){.thumbnail}

> [!warning]
> Note that the **Always-up execution mode isn't available** with the PySpark action and that you must use the serverless mode with it.

## Use the Advanced Mode

If you need to access the JSON configuration file of the action, you can activate the Advanced mode by clicking on **Advanced** at the top of the page.

[Use the Advanced mode of an Aggregate action](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode)

## Go further

Join our [community of users](/links/community).