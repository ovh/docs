---
title: "PySpark Use Cases"
updated: 2025-02-15
---

## Objective

- [Use Case 1: read from Bucket and write to Dataset](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/quick-start-spark#use-case-1-read-from-bucket-and-write-to-database)
- [Use Case 2: SQL query the Databases](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/quick-start-spark#use-case-2-sql-query-the-databases)
- [Use Case 3: Extracting a PySpark Dataframe (with options)](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/quick-start-spark#use-case-3-extracting-a-pyspark-dataframe-with-options)
- [Use Case 4: write to another ForePaaS bucket](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/quick-start-spark#use-case-4-write-to-another-bucket)
- [Use Case 5: write to object storage using insert_dataframe](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/quick-start-spark#use-case-5-write-to-object-storage-using-insert_dataframe)

## Use Case 1: read from Bucket and write to Dataset

This sample show how to retrieve data from ForePaaS Bucket *bucket_test* and insert it into the *prim* dataset from the  [Lakehouse Manager](/pages/public_cloud/data_platform/product/lakehouse-manager/00-lakehouse-manager-index).

Please refer to [ForePaaS Buckets Connector](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket) and [Lakehouse Manager Dataset Connector](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm) for more details on the connection strings.

```python
from logging import getLogger
from forepaas.dwh import connect
from pyspark import SparkContext
from pyspark.sql import SQLContext

logger = getLogger(__name__)

cn_source = connect("dwh/bucket_test/chicago_calendar_full.csv")
cn_prim = connect("dwh/data_prim/")

# Spark compatible connector extract_dataframe function returns Spark DataFrame
spark_df = cn_source.extract_dataframe()
logger.notice(f"CSV Columns: {list(spark_df.columns)}")

# insert_dataframe uses Spark DataFrame as well
cn_prim.insert_dataframe("chicago_calendar_full_copy", spark_df)

```

## Use Case 2: SQL query the Databases

This sample highlights the querying of databases through the *get_spark_options()* and *get_spark_context()* methods of the [ForePaaS Connector object](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index#the-connect-module).
 
```python
from logging import getLogger
from forepaas.dwh import connect
from pyspark import SparkContext
from pyspark.sql import SQLContext

logger = getLogger(__name__)

# get_spark_context() and get_spark_options() are available for database connectors (snowflake, postgresql, mysql)
cn_prim = connect("dwh/data_prim/")
sc_prim = cn_prim.get_spark_context()
so_prim = cn_prim.get_spark_options()

# Depends on Snowflake or PostgreSQL
sql_driver = "net.snowflake.spark.snowflake" # "jdbc" or "net.snowflake.spark.snowflake"

spark_prim = SQLContext(sc_prim)
sql = "select * from chicago_calendar_full"
spark_df = spark_prim.read.format(sql_driver).options(**so_prim).option("query", sql).load()

logger.notice(f"SQL Columns: {list(spark_df.columns)}")
```

## Use Case 3: extracting a PySpark Dataframe (with options)

This sample shows how to quickly extract Spark DataFrames with the *extract_dataframe()* method and also how to do it manually with the *get_spark_url()*, *get_spark_context()* and *get_spark_session()* methods.

```python
from logging import getLogger
from forepaas.dwh import connect
from pyspark import SparkContext
from pyspark.sql import SQLContext

logger = getLogger(__name__)

cn_source = connect("dwh/bucket_test/chicago_calendar_full.csv")

# Check with Spark documentation for available options
options = {"encoding": "utf-8", "sep": ",", "header": True}

# Manual override extract_dataframe file options
spark_df = cn_source.extract_dataframe(options)
logger.notice(f"CSV1 Columns: {list(spark_df.columns)}")

# Manual read from file
# get_spark_url(), get_spark_context() and get_spark_session() are available for s3 / buckets connectors
spark_session = cn_source.get_spark_session()

# getting stations_rides.csv under bucket buc_test
url = cn_source.get_spark_url("stations_rides.csv", bucket="buc_test")
logger.notice(f"SparkURL: {url}")

# Use format(file_suffix) for other files, check spark documentation for more information
options= {"encoding": "utf-8", "sep": ";", "header": True}
spark_df = spark_session.read.format("csv").options(**options).load(url)

logger.notice(f"CSV2 Columns: {list(spark_df.columns)}")
```

## Use Case 4: write to another bucket

This sample shows how to use the *get_spark_url()* method to write from one [ForePaaS Bucket](/pages/public_cloud/data_platform/product/lakehouse-manager/buckets) to another.

```python
from logging import getLogger
from forepaas.dwh import connect
from pyspark import SparkContext
from pyspark.sql import SQLContext

logger = getLogger(__name__)

cn_source = connect("dwh/bucket_test/stations_rides.csv")
spark_df = cn_source.extract_dataframe()

url_dst = cn_source.get_spark_url("stations_rides_copy.csv", bucket="test2")
logger.notice(f"SparkURL Dest: {url_dst}")
spark_df.write.format("csv").options(**options).save(url_dst)

url_dst = cn_source.get_spark_url("stations_rides_copy.parquet", bucket="test3")
logger.notice(f"SparkURL Dest: {url_dst}")
spark_df.write.format("parquet").save(url_dst)
```

## Use Case 5: write to object storage using insert_dataframe

The `insert_dataframe()` function simplifies operations in the previous use case. 
It is available for compatible object-storage-type PySpark connectors (currently ForePaaS Buckets, S3 and [Azure Blob Storage](/pages/public_cloud/data_platform/product/data-catalog/sources/connectors/blob-storage))

```python
from logging import getLogger
from forepaas.dwh import connect

logger = getLogger(__name__)

cn_source = connect("dwh/bucket_test/chicago_calendar_full.csv")
spark_df = cn_source.extract_dataframe()

# cn_dest: ForePaaS Buckets, S3, Azure Blob Storage 
cn_dest = connect("dwh/dest_bucket/")

# Insert using default type inferred from file name and default ForePaaS options
# Raises an exception if file suffix not in ["csv", "json", "parquet"]
# Destination file will be destination.csv under the configured path of the source
cn_dest.insert_dataframe("destination.csv", spark_df)

# Insert using custom type
params = {"type": "parquet"}
# Reads from params.type, if not provided and no suffix in file name, an exception will be raised
cn_dest.insert_dataframe("destination", spark_df, params)

# Insert to specified absolute path
params = {"path": "output"}
# Destination file will be output/destination.csv
cn_dest.insert_dataframe("destination.csv", spark_df, params)

# Insert with custom options
params = {"write_options": {"sep": ",", "header": False}}
cn_dest.insert_dataframe("destination.csv", spark_df, params)

# Current default ForePaaS options:
# CSV: {"encoding": "utf-8", "sep": ";", "header": True}
```

## Go further

Join our [community of users](/links/community).