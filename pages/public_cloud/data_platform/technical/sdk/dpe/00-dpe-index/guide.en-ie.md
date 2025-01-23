---
title: "Custom Actions SDK"
updated: 2025-02-15
---

## Objective

ForePaaS provides a Python SDK to create your own [custom actions](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index) within the [Data Processing Engine](/pages/public_cloud/data_platform/product/dpe/00-dpe-index) (DPE).  
It may also be used in other parts of the platform as described below.

- [Where is the Python SDK accessible](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index#where-is-the-python-sdk-accessible)
- [The connect function](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index#the-connect-function)
- [The bulk_insert function](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index#the-bulk_insert-function)
- [PySpark Support](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index#pyspark-support)
- [Simple Use Cases](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index#simple-use-cases)
- [Advanced Use Cases](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index#advanced-use-cases)

## Where is the Python SDK accessible

Most SDK functions are usable in 4 contexts, if they are not, it will be explicitly stated:

- When creating a [Custom Action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index) in the DPE.
- When creating a [Custom PySpark Action](/pages/public_cloud/data_platform/product/dpe/actions/custom-pyspark) in the DPE.
- When writing code in a MLM [Integrated Jupyter Notebook](/pages/public_cloud/data_platform/product/ml/notebooks/00-notebooks-index).
- When creating a [Custom Estimator](/pages/public_cloud/data_platform/product/ml/pipelines/configure/training/custom-estimator/00-custom-estimator-index) in the [Machine Learning Manager](/pages/public_cloud/data_platform/product/ml/00-ml-index) (MLM).

You could, for example, write code and test it in a [Jupyter Notebook](/pages/public_cloud/data_platform/product/ml/notebooks/00-notebooks-index) and, once you are done, copy and paste it into a DPE Custom Action.

## The connect function

The `connect()` function is, most of the time, the main entry point to interact with the [Project](/pages/public_cloud/data_platform/product/project/00-project-index).

It takes a **connection string** as parameter and returns a **Connector object**.  
For example:

```python
from forepaas.dwh import connect

connection_string = "dwh/data_prim/"
connector_prim = connect(connection_string)
```

Change the connection string to connect to different sources within the ForePaaS environment.  
As a consequence, the object, and aveilable methods, returned by `connect(...)` will be different.

Our [Connectors and Connection Strings article](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/00-connectors-index) explains each option available in more detail and below you will find the method list for two common connectors:

* [Lakehouse Manager Dataset Connector](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm)
* [ForePaaS Buckets Connector](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket)

## The bulk_insert function

The `bulk_insert()` function is a very important part of the SDK. You can use it to insert data back into a table. As shown in the code below, it takes a [Dataset Connector](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm), a table name and a pandas DataFrame as parameters.

```python
import pandas as pd
from forepaas.dwh import connect
from forepaas.dwh import bulk_insert

# make connection to the Prim Dataset
cn = connect("dwh/data_prim/")

# extract data from the table with no SQL required
df = cn.select("stations_rides")

# perform your custom transform in the dataframe
df.loc[df["station_name"] == 'Harlem-Lake', "rides"] = 0

# reinsert your dataframe in the destination table
stats = bulk_insert(cn, "stations_rides", df) 
```

### bulk_insert(connector, table, data, source_default_schema={}, batch_size=None)

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| connector   | Connector| Connector instance from the connect() function | ```cn = connect("dwh/data_prim/")``` |
| table | str | name of the destination table where the data is going to be loaded in | - |
| dataframe | pandas.DataFrame | Dataframe of data to insert, must to have the same column names and types that the target table does. | - |
| default_schema | dict | - | - |
| batch_size | int | insertion batch size | - |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| Tuple(stats, error) |  tuple of the statistics of the insertion | - |

## PySpark Support

ForePaaS offers extensive support to handle data with PySpark. 
All is done through Spark-compatible methods in the Connector object.  
Check out our [PySpark article](/pages/public_cloud/data_platform/technical/sdk/dpe/connect-spark/00-connect-spark-index) for further details.

## Simple use cases

We have prepared sample scripts for common use cases to get you started right away:

* [Custom Action with a Lakehouse Manager table](/pages/public_cloud/data_platform/technical/sdk/dpe/simple-use-cases/quick-start-dm)  
Extract data from a Lakehouse Manager table, transform it and re-insert it into another table. 
* [Custom Action with ForePaaS Buckets](/pages/public_cloud/data_platform/technical/sdk/dpe/simple-use-cases/quick-start-bucket)  
Extract data from a specific file format, linearize it and load it into a Lakehouse Manager table.
* [Custom Action with a Data Catalog Source directly](/pages/public_cloud/data_platform/technical/sdk/dpe/simple-use-cases/quick-start-source)  
Use a Source defined in the Data Catalog to load it into a Lakehouse Manager table.

## Advanced use cases

Feeling confident ? Here are a few more specific use cases: 

* [A. Environment variables](/pages/public_cloud/data_platform/technical/sdk/dpe/advanced-use-cases/3A-parameter)
* [B. Segmentation and perimeter usage](/pages/public_cloud/data_platform/technical/sdk/dpe/advanced-use-cases/3B-segmentation)
* [C. Override load action](/pages/public_cloud/data_platform/technical/sdk/dpe/advanced-use-cases/3C-load-override)
* [D. Using custom Python modules](/pages/public_cloud/data_platform/technical/sdk/dpe/advanced-use-cases/3D-git)

## Technical documentation 

You may also check out the [Technical Documentation](https://forepaas-sdk.readthedocs.io/en/latest/) for a complete technical description of the SDK.
* [Connect](https://forepaas-sdk.readthedocs.io/en/latest/packages/dwh/index.html#connectors-connect)
* [Bucket](https://forepaas-sdk.readthedocs.io/en/latest/packages/dwh/index.html#datastore-connect)
* [Protocols](https://forepaas-sdk.readthedocs.io/en/latest/packages/dwh/index.html#protocols-connect)

## Go further

Join our [community of users](/links/community).