---
title: Object Storage - Getting started with Object Storage
excerpt: This guide is designed to familiarise you with the management of your containers/objects
updated: 2024-06-11
---

## Objective

This guide is designed to familiarise you with the management of your containers/objects.

## Requirements

- A [Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- An [S3 user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) already created

## Instructions

### Using AWS CLI

#### Installation

Enter the following command:

```bash
user@host:~$ pip3 install awscli
```

> [!primary]
>
> - Install the groff package if you want to use command line help.
>

#### Collect Credentials

- You will need your user's Access key* and *Secret key*. You can access this information in the ‘S3 users’ tab in your Control Panel.
- You will also need your *url_endpoint*. If you have already created your bucket, you can access this information from the `My containers` tab, then in the details of your bucket. Otherwise, follow this [guide](/pages/storage_and_backup/object_storage/s3_location).

#### Configuration

You can either use the interactive configuration to generate the configuration files or manually create them.

> [!primary]
>
> To use the interactive configuration, run the following command:
> `aws configure`
>

The configuration file format in the aws client is as follows:

```bash
user@host:~$ cat ~/.aws/credentials

[default]
aws_access_key_id = <access_key>
aws_secret_access_key = <secret_key>

user@host:~$ cat ~/.aws/config

[profile default]
region = <region_in_lowercase>
endpoint_url = <url_endpoint>
s3 =
  signature_version = s3v4
```

Here are the configuration values that you can specifically set:

| Variable | Type | Value | Definition |
|------|:------|:------|:------|
| max_competitor_requests | Integer | **Default:** 10 | The maximum number of simultaneous requests. |
| max_queue_size | Integer | **Default:** 1000 | The maximum number of tasks in the task queue. |
| multipart_threshold | Integer<br>String | **Default:** 8MB | The size threshold that the CLI uses for multipart transfers of individual files. |
| multipart_chunksize | Integer<br>String | **Default:** 8MB<br>**Minimum for uploads:** 5MB | When using multipart transfers, this is the bit size that the CLI uses for multipart transfers of individual files. |
| max_bandwidth | Integer | **Default:** None | The maximum bandwidth that will be used to load and download data to and from your buckets. |
| verify_ssl | Boolean | **Default:** true | Enable / Disable SSL certificate verification |

For a list of endpoints by region and storage class, refer to [this page](/pages/storage_and_backup/object_storage/s3_location).

#### Usage

> [!primary]
>
> If you have more than one profile, add `--profile <profile>` to the command line.
>

**Creating a bucket**

```bash
aws s3 mb s3://<bucket_name>
aws --profile default s3 mb s3://<bucket_name>
```

**Listing your buckets**

```bash
aws s3 ls
```

**Uploading your files as objects in your bucket**

```bash
aws s3 cp /datas/test1 s3://<bucket_name>
```

> [!primary]
>
> The `aws s3 cp` command will use STANDARD as default storage class for uploading objects.
> To store objects in the High Performance tier, use the `aws s3api put-object` command instead, as `aws s3 cp` does not support the EXPRESS_ONEZONE storage class which is used to map the High Performance storage tier.
> To learn more about the storage class mapping between OVHcloud storage tiers and AWS storage classes, you can check our documentation [here](/pages/storage_and_backup/object_storage/s3_location).
>

```bash
# upload an object to High Performance tier
aws s3api put-object --bucket <bucket_name> --key <object_name> --body /datas/test1 --storage-class EXPRESS_ONEZONE
```


**By default, objects are named after files, but can be renamed**

```bash
aws s3 cp /datas/test1 s3://<bucket_name>/other-filename
```

**Downloading an object from a bucket**

```bash
aws s3 cp s3://<bucket_name>/test1 .
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

> [!primary]
>
> A bucket can only be deleted if it is empty.
>

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

**Deleting objects and buckets with versioning enabled**

If versioning is enabled, a simple delete operation on your objects will not permanently remove them.

In order to permanently delete an object, you must specify a version id:

```bash
aws s3api delete-object --bucket <NAME> --key <KEY> --version-id <VERSION_ID>
```

To list all objects and all version ID, you can use the following command:

```bash
aws s3api list-object-versions --bucket <NAME>
```

With the previous delete-object command, you will have to iterate over all your object versions. Alternatively, you can use the following one-liner to empty your bucket:

```bash
aws s3api delete-objects --bucket <NAME> --delete "$(aws s3api list-object-versions --bucket <NAME> --query='{Objects: Versions[].{Key:Key,VersionId:VersionId}}')"
```

> [!primary]
>
> If your bucket has Object Lock enabled, you will not be able to permanently delete your objects. See our [documentation](/pages/storage_and_backup/object_storage/s3_managing_object_lock) to learn more about Object Lock.
> If you use Object Lock in GOVERNANCE mode and have the permission to bypass GOVERNANCE mode, you will have to add the `--bypass-governance-retention` option to your delete commands.
>

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

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
