---
title: "Custom PySpark Action"
updated: 2025-02-15
---

## Objective

A *Custom PySpark action* allows you to execute custom PySpark scripts in a scalable cloud cluster environment using [Apache Spark™](https://spark.apache.org/). 

Using our [Software Development Kit (SDK)](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index) to easily interact with the different components of the platform, *Custom PySpark actions* can be used to implement a variety of use-cases such as:

*  Execute a manipulation algorithm or ETL job on your data warehouse
*  Execute a simple data analysis or machine learning algorithm
*  Extract data from data sources not available on the Data Platform marketplace without having to create connectors for it
*  Extract real time data (like MQTT, Kafka, etc..) 

> [!primary]
> Custom PySpark actions can be orchestrated within [workflows](/pages/public_cloud/data_platform/product/dpe/workflows/00-workflows-index) and triggered immediately or on a scheduled basis. At the moment, a single workflow **cannot** contain both PySpark actions and normal actions.

* [Configure a Custom PySpark action](/pages/public_cloud/data_platform/product/dpe/actions/custom-pyspark#configure-a-custom-pyspark-action)
* [Manage parallelization in a Custom PySpark action](/pages/public_cloud/data_platform/product/dpe/actions/custom-pyspark#manage-parallelization)
* [Manage dependencies in a Custom PySpark action](/pages/public_cloud/data_platform/product/dpe/actions/custom-pyspark#manage-dependencies)

## Configure a Custom PySpark action

In the Data Processing Engine of your Project, go in the Actions tab and click on the **New Action** button. Choose the action type *Custom PySpark*.

![Creation screen of a custom action](images/custom-pyspark.png){.thumbnail}
 
Drag and drop your *.py* PySpark script onto the "Drag and drop" section.  
Alternatively, select the **Start with a boilerplate** option to get started directly on the Platform's Python interface with example code snippets.

![Creation screen of a custom action](images/custom-pyspark2.png){.thumbnail}

You will be able to edit your source file directly in the editing interface (or drop a new file if needed). Check out the PySpark documentation below:

[PySpark Documentation Portal](http://spark.apache.org/docs/latest/api/python/)

Note you can also use any function provided in the [Software Development Kit (SDK)](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index) to easily interact with other components of the platform. To read more about all the available SDK functions check out the article below:

[Discover all SDK methods](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index)

## Manage parallelization

Scale your job by adding more parallel worker instances in the action's [preferences](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/00-execution-preferences-index). 

Simply input the desired number of **instances**, which is the Spark executors number. The CPU and RAM size of each instance can be managed by changing the number of [FPU](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/resources) allocated to each.

![Creation screen of a custom action](images/custom-pyspark-pref.png){.thumbnail}

Specify how to split your job's workload on those different workers inside your PySpark script.

> [!warning]
> Contrary to actions that use the Platform's proprietary data processing engine, PySpark actions don't have settings for [segmentation](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/00-execution-preferences-index#segmentation-settings) and [perimeter](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/00-execution-preferences-index#perimeter-settings) in the action's preferences. These must be handled inside your PySpark code.

## Manage dependencies

### Installing Python packages

You might need to install specific packages not included by default. You can add them in the "Python Requirements" field respecting the format used in a basic requirements file for "pip" (Python package manager) then press "ENTER" on your keyboard.

This is what it should looks like once you pressed "ENTER":

![Creation screen of a custom action](images/action-requirements.png){.thumbnail}
 
### Default list of dependencies

> [!warning]
> Data Platform blocks the minors of the versions allowing bug fixes to be installed. If you need a more recent version of a library you can override it manually by adding the same package with the new version in the "Requirements" field.

Here is the list of all the packages and their version (as you could find them in a requirements file for pip) shipped with the Data Processing Engine workers:

[Discover all default Python packages](/pages/public_cloud/data_platform/product/dpe/actions/custom/default-packages)

## Go further

Join our [community of users](/links/community).