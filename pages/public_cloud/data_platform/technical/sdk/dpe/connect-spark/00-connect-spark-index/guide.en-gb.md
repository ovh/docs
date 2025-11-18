---
title: "PySpark Support"
updated: 2025-02-15
---

## Objective

> [!primary]
> In a [Custom Action PySpark](/pages/public_cloud/data_platform/product/dpe/actions/custom-pyspark), you can use the Connector object's Spark-compatible methods. These methods are available **only in Custom PySpark Actions** and they vary according what type of source you are connected to.

Do not hesitate to check out the [sample code](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/quick-start-spark) for common use cases.

* [The connect module with PySpark](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/00-connect-spark-index#the-connect-module-with-pyspark)
* [Spark-compatible Connector methods](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/00-connect-spark-index#spark-compatible-connector-methods)
    * [get_spark_options()](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/00-connect-spark-index#get_spark_options)
    * [get_spark_context()](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/00-connect-spark-index#get_spark_context)
    * [get_spark_session()](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/00-connect-spark-index#get_spark_session)
    * [get_spark_url(path, bucket=None)](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/00-connect-spark-index#get_spark_urlpath-bucketNone)
    * [insert_dataframe(table, dataframe)](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/00-connect-spark-index#insert_dataframetable-dataframe)
    * [extract_dataframe()](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/00-connect-spark-index#extract_dataframeparams)

## The connect module with PySpark

When you create a [Custom PySpark action](/pages/public_cloud/data_platform/product/dpe/actions/custom-pyspark), two things are done by ForePaaS:

- *SparkContext* is created before calling the script.
- *SparkContext.stop()* is called after the script.

So you can simply access Spark's functionalities with:

```python
SparkContext.getOrCreate()
```

To access the data stored within ForePaaS, you have to first instantiate a [Connector object with the connect function](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index#the-connect-module). Then you can use **Spark-compatible methods in the Connector object** to interact with the connected data.

For instance, the method for getting a Spark Dataframe object is **connnector.extract_dataframe()**. The sample code below connects directly to a source and then uses that method to get the Spark object:

```python
from forepaas.dwh import connect

cn_source = connect("dwh/file_upload_source/chicago_calendar_full.csv")

# Spark compatible connector extract_dataframe function returns Spark DataFrame
spark_df = cn_source.extract_dataframe()
```

> [!primary]
> Note that not all ForePaaS connectors are compatible with PySpark. Some compatible connectors are: Snowflake, PostgreSQL, MySQL, Amazon S3, File-Upload and ForePaaS Bucket but this list is evolving constantly.

## Spark-compatible Connector Methods

### get_spark_options()

Returns Spark options to connect to a Database.

*Not available with Protocol sources (Buckets, File Upload, Amazon S3, etc).*

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| Dict | SparkOptions to connect to a Database. | See below. |

```python
{
            "sfAccount": ...,
            "sfURL": ...,
            "sfUser": ...,
            "sfSchema": ...,
            "sfDatabase": ...,
            "sfTimezone": ...,
            "sfWarehouse": ...,
            "preactions": ...,
}
```

### get_spark_context()

Returns the current SparkContext.

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| pyspark.SparkContext | Current SparkContext. | - |

### get_spark_session()

Returns current spark session, configured with different settings when using ForePaaS bucket / file-upload.

*Available only with Protocol sources (Buckets, File Upload, Amazon S3, etc).*

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| pyspark.sql.SparkSession | Current Spark session. | - |

### get_spark_url(path, bucket=None)

Returns file url to given path of object in object store. path needs to be absolute path in object store, and if bucket is not set, it uses the one from the user config

*Available only with Protocol sources (Buckets, File Upload, Amazon S3, etc).*

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| path   | str| Absolute path within the bucket to the file. | - |
| bucket (optional)| str | Bucket in the object store.  | - |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| str | File Spark URL. | ```s3a://bucket_name/path/chicago_calendar.csv``` |

### insert_dataframe(table, dataframe)

Inserts a Spark DataFrame into the connected source.

*Available with Databases and some Protocol sources (Buckets, Amazon S3, Azure Blob Storage).* 
For more details, check the [use case 4 and 5](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/quick-start-spark).

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| table   | str| Table name inside the database. | ```my_s3_table``` |
| dataframe | pyspark.sql.DataFrame | DataFrame containing data to be inserted. | - |

### extract_dataframe(params={})

Extract SparkDataframe from file. File extraction options can be set via params or in table.parameters

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| params | Dict| Dict that contain a SQL query structure to execute. An empty dictionary by default, results in getting all rows.  | Empty dict: ```{}```|

Detailed example:
```python
 params = {
                "scale": ["attribute_1", "attribute_2"],
                "joins": [{
                    "type": "INNER",
                    "table": "table_1",
                    "condition": "table_1.attribute = table_2.attribute"
                }],
                "schema": {
                    "attribute_dest": "attribute_source"
                }
            }
```

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| pyspark.sql.DataFrame | DataFrame with the sources data. | - |

## Go further

Join our [community of users](/links/community).