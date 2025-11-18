---
title: "ForePaaS Buckets connector"
updated: 2025-02-15
---

## Objective

> [!primary]
> In the current ForePaaS SDK, the **Datastore connector** is used to interact with the ForePaaS Buckets. You may think of the Datastore simply as a bucket container.

* [Connect to the Datastore](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#connect-to-the-datastore)
* [Datastore Connector methods](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#datastore-connector-methods)
    * [datastore.list(...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#datastorelistreturn_type-39array39)
    * [datastore.get_buckets()](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#datastoreget_buckets)
    * [datastore.get_bucket(name)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#datastoreget_bucketname)
    * [datastore.create_bucket(name)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#datastorecreate_bucketname)
    * [datastore.remove_bucket(name)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#datastoreremove_bucketname)
    * [datastore.bucket_exists(name)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#datastorebucket_existsname)
* [Bucket Connector methods](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucket-connector-methods)
    * [bucket.list(...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketlistbool-metadatatrue-bool-recursivetrue-kwargs)
    * [bucket.list_filename(...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketlist_filenamereturn_type39array39-contains3939-recursivetrue-kwargs)
    * [bucket.get(file_name, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketgetfile_name-kwargs)
    * [bucket.getobject(object_name, file_path, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketfgetobject_name-file_path-kwargs)
    * [bucket.put(object_name, data, length, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketputobject_name-data-int-length-kwargs)
    * [bucket.fput(object_name, file_path, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketfputobject_name-file_path-kwargs)
    * [bucket.put_request(url, path, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketput_requesturl-path-data-method39get39-headers-kwargs)
    * [bucket.delete(path, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketdeletepath-kwargs)
    * [bucket.stat(path, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketstatpath-kwargs)
    * [bucket.fcopy_to(new_bucket, object_name, object_source, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-bucket#bucketfcopy_tonew_bucket-object_name-object_source-kwargs)

## Connect to the Datastore

In order to interact with the Datastore you have to connect to it first, as shown in the code below:

```python
from forepaas.dwh import connect

cn_datastore = connect('data_store')
```

After that you can use the `Connector.list()` method to see the buckets available in your Datastore and then connect to the bucket of your choice to interact with it.

You can connect directly to a specific bucket in the Datastore as shown in the code below:

```python
from forepaas.dwh import connect

bucket_name = "name"
cn_bucket = connect('data_store/' + bucket_name)
```

The datastore connector will return a Data Store Connector object and connecting directly to a bucket will return a Bucket Connector object.

See the next section of this article for additional details on the methods of each connector.

## Datastore Connector methods

### datastore.list(return_type = 'array')

Lists all buckets in the Datastore.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| return_type | str | Determine the type you want to get `array` or `str` | |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| `str` or `array` | List of buckets in Data Store |   |

### datastore.get_buckets()

Gets all buckets from the Datastore

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| `list[bucket]` | list of `bucket` instances |  |

### datastore.get_bucket(name)

Gets a bucket instance from its name.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| name | str | Bucket name |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| `bucket` | Bucket instance to handle files |  |

### datastore.create_bucket(name)

Adds a bucket in the Data Store.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| name | str | Bucket name |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| `boolean` | Success of operation |  |

### datastore.remove_bucket(name)

Removes a bucket from the Data Store.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| name | str | Bucket name |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| `boolean` | Success of operation |  |

### datastore.bucket_exists(name)

Finds out if a bucket exists or not.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| name | str | Bucket name |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| `boolean` | Success of operation |  |

## Bucket Connector methods

### bucket.list(bool metadata=True, bool recursive=True, **kwargs)

Lists files from Data Store's bucket.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| metadata | bool | (optionnal) Get metadata for all files listed, defaults to True |  |
| recursive | bool | (optionnal) Determine if you want to list all folder as well, defaults to True |  |
| ```**kwargs``` |  | Remaining keyword arguments are passed to `self.minio.list_objects_v2()` |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| `list[Object]` | List of bucket files |  |

### bucket.list_filename(return_type='array', contains='', recursive=True, **kwargs)

Lists filenames from Data Store's bucket.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| return_type | str | Type of return you want, defaults to `array` |  |
| contains | str | Filter filenames list with filename containing the value, defaults to '' |  |
| recursive | bool | DetermineS if you want to list all folders as well, defaults to True |  |
| `**kwargs` |   | Remaining keyword arguments are passed to `self.minio.list_objects_v2()` |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| `[str]` or `str` |  | List of bucket files either in `array` or in a string separated by comma |

### bucket.get(file_name, **kwargs)

Gets raw file content from a Data Store bucket.

```python
from forepaas.dwh import connect

ds = connect('data_store')
bucket = ds.get_bucket('my_bucket')
bucket.get('folder/file_name.csv')
data = bucket.get('file_name.csv')
for d in data.stream(32*1024):
	print(d)
```

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| file_name | str | File name you want to get from bucket |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| `urllib3.response.HTTPResponse` | Response from Data Store request |  |

### bucket.fget(object_name, file_path, **kwargs)

Gets an object from Datastore's bucket to local path.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| object_name | str | Object name you want to get from bucket |  |
| file_path | str | File path (path/filename) on the local filesystem to save the file |  |
| `**kwargs` |  | Remaining keyword arguments are passed to `self.minio.fget_object()` |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| Object | Object stat info from the server |  |

### bucket.put(object_name, data, int length, **kwargs)

Puts an object to Data Store's bucket.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| object_name | str | Name of the object to upload |  |
| data | `io.RawIOBase` | Data to upload to minio |  |
| length | int | Data length |  |
| `**kwargs` |  | Remaining keyword arguments are passed to `self.minio.put_object()` |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| str | Object etag computed by the server |  |

### bucket.fput(object_name, file_path, **kwargs)

Puts a file to Data Store's bucket.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| object_name | str | Destination name of the object to upload |  |
| file_path | str | Path on the local filesystem from which file will be read |  |
| `**kwargs` |  | Remaining keyword arguments are passed to `self.minio.fput_object()` |  |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| str | Object etag computed by the server |  |

### bucket.put_request(url, path, data={}, method='GET', headers={}, **kwargs)

Gets an object from an HTTP request and upload it to Datastore's bucket

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| url | str | URL to get the file from |  |
| path | str | Where to upload the file in Datastore's bucket, defaults to '' |  |
| data | dict | Dictionary, list of tuples, bytes, or file-like object to send in the body of the request. |  |
| method | str | Method used by request to get file, defaults to 'GET' |  |
| headers | dict | Headers send in request, defaults to {} |  |

### bucket.delete(path, **kwargs)

Deletes multiple/single file in Data Store's bucket

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| path | `str` or `[str]` | File(s) path  to remove |  |
| `**kwargs` |  | Remaining keyword arguments are passed to `self.minio.remove_object(s)` |  |

### bucket.stat(path, **kwargs)

Gets stats for a file in Datastore's bucket.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| path | `str` or `[str]` | File(s) path to get stats from |
| `**kwargs` |  | Remaining keyword arguments are passed to `self.minio.stat_object()` |  |

### bucket.fcopy_to(new_bucket, object_name, object_source, **kwargs)

Copies file from bucket to a new bucket in Data Store.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| new_bucket | str | Name of the bucket for new object. |  |
| object_name | str | Name of the new object. |  |
| object_source | str | Name of the object to be copied. |  |
| `**kwargs` |  | Remaining keyword arguments are passed to self.minio.copy_object |  |

## Additional methods

The ForePaaS Datastore is built on [Minio](https://min.io/) technology. Please refer to the [Minio Technical Documentation](https://docs.min.io/docs/python-client-api-reference.html) for more information on the advanced settings of the SDK functions.

## Go further

Join our [community of users](/links/community).