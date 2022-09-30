---
title: Getting started with CLI
slug: s3/getting-started-with-cli
excerpt:
section: Object Storage S3 High Performance
order: 020
---

**Last updated September 27<sup>th</sup> 2022**

## Objective

This guide is designed to familiarise you with the management of your containers/objects.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
- An [S3 user](https://docs.ovh.com/asia/en/storage/s3/identity-and-access-management/) already created

## Instructions

### Using AWS CLI

#### Installation

Enter the following command:

```bash
user@host:~$ pip3 install awscli awscli-plugin-endpoint
```

> [!primary]
>
> - awscli-plugin-endpoint is optional
> - Install the groff package if you want to use command line help.
>

#### Collect Credentials

- You will need your user's Access key* and *Secret key*. You can access this information in the ‘S3 users’ tab in your Control Panel.
- You will also need your *url_endpoint*. If you have already created your bucket, you can access this information from the `My containers` tab, then in the details of your bucket. Otherwise, follow this [guide](https://docs.ovh.com/asia/en/storage/s3/location).

#### Configuration

Configure the aws client as follows:

```bash
user@host:~$ cat ~/.aws/credentials

[default]
aws_access_key_id = <access_key>
aws_secret_access_key = <secret_key>

user@host:~$ cat ~/.aws/config

# If you have not installed awscli-plugin-endpoint, delete the next two lines
[plugins]
endpoint = awscli_plugin_endpoint

[profile default]
region = <region_in_lowercase>
s3 =
  endpoint_url = <url_endpoint>
  signature_version = s3v4
s3api =
  endpoint_url = <url_endpoint>
```

> [!primary]
>
> You can also use interactive configuration by running the following command:
> `aws --configure`
>

Here are the configuration values that you can specifically set:

| Variable | Type | Value | Definition |
|------|:------|:------|:------|
| max_competitor_requests | Integer | **Default:** 10 | The maximum number of simultaneous requests. |
| max_queue_size | Integer | **Default:** 1000 | The maximum number of tasks in the task queue. |
| multipart_threshold | Integer<br>String | **Default:** 8MB | The size threshold that the CLI uses for multipart transfers of individual files. |
| multipart_chunksize | Integer<br>String | **Default:** 8MB<br>**Minimum for uploads:** 5MB | When using multipart transfers, this is the bit size that the CLI uses for multipart transfers of individual files. |
| max_bandwidth | Integer | **Default:** None | The maximum bandwidth that will be used to load and download data to and from your buckets. |
| verify_ssl | Boolean | **Default:** true | Enable / Disable SSL certificate verification |

#### Usage

> [!primary]
>
> If you have not installed `awscli-plugin-endpoint`, you must add `--endpoint-url https://s3.<region_in_lowercase>.perf.cloud.ovh.net` to the command line.
>

> [!primary]
>
> If you have more than one profile, add `--profile <profile>` to the command line.
>

**Creating a bucket**

```bash
aws s3 mb s3://<bucket_name>
aws --endpoint-url https://s3.<region_in_lowercase>.perf.cloud.ovh.net --profile default s3 mb s3://<bucket_name>
```

**Listing your buckets**

```bash
aws s3 ls
```

**Uploading your files as objects in your bucket**

```bash
aws s3 cp /datas/test1 s3://<bucket_name>
```

**By default, objects are named after files, but can be renamed**

```bash
aws s3 cp /datas/test1 s3://<bucket_name>/other-filename
```

**Downloading an object from a bucket**

```bash
aws s3 cp s3://<bucket_name>/test1.
```

**Uploading an object from one bucket to another bucket**

```bash
aws s3 cp s3://<bucket_name>/test1 s3://<bucket_name_2
```

**Downloading or uploading an entire bucket to the host/bucket**

```bash
aws s3 cp s3://<bucket_name> . --recursive
aws s3 cp s3://<bucket_name> s3://<bucket_name_2> --recursive
```

**Synchronising buckets**

```bash
aws s3 sync. s3://<bucket_name>
aws s3 sync s3://<bucket_name> s3://<bucket_name_2>
```

**Deleting objects and buckets**

```bash
# Delete an object
aws s3 rm s3://<bucket_name>/test1
# Removing all objects from a bucket
aws s3 rm s3://<bucket_name> --recursive
# Delete a storage area. To delete a bucket, it must be empty.
aws s3 rb s3://<bucket_name>
# If the compartment is not removed, you can use the same command with the --force option.
# This command deletes all objects from the bucket, then deletes the bucket.
aws s3 rb s3://<bucket_name> --force
```

**Setting tags on a bucket**

```bash
aws s3api put-bucket-tagging --bucket <bucket_name> --tagging 'TagSet=[{Key=myKey,Value=myKeyValue}]'
aws s3api get-bucket-tagging --bucket <bucket_name>
```

```json
{
  "TagSet": [
    {
    "Value": "myKeyValue",
    "Key": "myKey"
    }
  ]
}
```

**Deleting tags on a bucket**

```bash
aws s3api s3api delete-bucket-tagging --bucket <bucket_name>
```

**Setting tags on an object**

```bash
aws s3api put-object-tagging --bucket <bucket_name> --key test1 --tagging 'TagSet=[{Key=myKey,Value=myKeyValue}]'
aws s3api get-bucket-tagging --bucket <bucket_name>
```

```json
{
  "TagSet": [
    {
    "Value": "myKeyValue",
    "Key": "myKey"
    }
  ]
}
```

**Deleting tags on an object**

```bash
aws s3api s3api delete-object-tagging --bucket <bucket_name> --key test1
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
