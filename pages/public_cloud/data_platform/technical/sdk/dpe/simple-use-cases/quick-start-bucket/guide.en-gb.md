---
title: "Custom Action with ForePaaS Buckets"
updated: 2025-02-15
---

## Objective

Sometimes you need to handle a complex file format beyond our [Load Action](/pages/public_cloud/data_platform/product/dpe/actions/load/00-load-index) capabilities.
In this case, we advise you to store and manipulate files with the [ForePaaS Buckets](/pages/public_cloud/data_platform/product/lakehouse-manager/buckets) in your DataPlant. 

> [!primary]
> In the current ForePaaS SDK, the **Datastore connector** is used to interact with the ForePaaS Buckets. You may think of the Datastore simply as a bucket container.
 
The following sample is written in [Custom Action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index) context. You may adapt it as needed. 

```python
import sys
import pandas as pd
from logging import getLogger

from forepaas.dwh import connect
from forepaas.dwh import bulk_insert

logger = getLogger(__name__)
def extract_func(event):
    try:
        # we get data from a bucket and we will archive them in another bucket
        bucket_source_name = "your_source_bucket_name_here"
        bucket_archives_name = "your_source_bucket_name_here"

        # create a connector to handle bucket   
        bucket_connector = connect("data_store/{}".format(bucket_source_name))

        # list files from bucket
        files = bucket_connector.list()

        # retrieve a file from Data Store bucket to temporary local folder
        bucket_filepath = "stations_rides.csv"
        local_filepath = "/tmp/stations_rides.csv"
        bucket_connector.fget(bucket_filepath, local_filepath)

        # read then transform the file as you need
        # here the date column format is simply adjusted for compatibility reasons 
        df = pd.read_csv(local_filepath, sep=';')
        df['date'] = pd.to_datetime(df['date'])

        # load the dataframe into a dataplant table named 'raw_file'
        cn = connect("dwh/data_prim/")
        bulk_insert(cn, "stations_rides_artur", df)
        del cn
        
        # option 1 : copy the file into the archives bucket
        bucket_archive_filepath = "archives/stations_rides.csv"
        bucket_connector.fcopy_to(bucket_archives_name, bucket_archive_filepath, bucket_filepath)
       
        # option 2 : put a file into the archives
        bucket_archives = connect("data_store/{}".format(bucket_archives_name))
        bucket_archives.fput(bucket_archive_filepath, local_filepath)
        del bucket_archives

        # delete file from source bucket
        bucket_connector.delete(bucket_filepath)

        # disconnect from datastore
        del bucket_connector
    except Exception as err: 
        raise Exception("err:{} L:{}".format(err,sys.exc_info()[2].tb_lineno))
```

## Another example

Below is an example code which uploads an image to a bucket from a simple URL.

```python
from forepaas.dwh import connect

data_store = connect('data_store')

# Get bucket and upload image from URL to path forepaas/test.jpg.
# And finally get the image from the bucket
bucket_test = data_store.get_bucket('test')

lists = bucket_test.list(recursive=True)

bucket_test.put_request("https://i.stack.imgur.com/r8jTK.jpg", path='forepaas/test.jpg')
data = bucket.get('hello/test.jpg')

# Create a bucket if it does not already exists
if data_store.bucket_exists('test-exists') is False:
    data_store.create_bucket('test-exists')

# Connect directly to the bucket test and remove the file
bucket_test2 = connect('data_store/test')
bucket_test2.delete('hello/test.jpg')
```

## Go further

Join our [community of users](/links/community).