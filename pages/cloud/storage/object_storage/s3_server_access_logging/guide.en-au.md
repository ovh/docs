---
title: Object Storage - Server Access Logging
slug: s3/server-access-logging
excerpt: Learn how to configure and use Server Access Logging
section: Tutorials
order: 130
updated: 2023-02-16
---

**Last updated on 16th February 2023**

## Objective

Server Access Logging provides detailed records for the requests that are made to a bucket. Server access logs are useful for many applications. For example, access log information can be useful in security and access audits.

**This guide explains how to configure and use Server Access Logging.**

## Requirements

- A bucket
- A user with the required access rights on the bucket
- Have installed and configured aws-cli

See our [Getting started with S3 Object Storage](https://docs.ovh.com/au/en/storage/object-storage/s3/getting-started-with-object-storage/) guide.

## Instruction

### Create a bucket

``` bash
$ aws --profile my-profile s3 mb "s3://my-bucket"
```

### Create a logs bucket

> [!primary]
>
> Your target bucket should not have Server Access Logging enabled. You can have logs delivered to any bucket that you own that is in the same Region as the source bucket, including the source bucket itself. However, this would cause an infinite loop of logs and is not recommended. For simpler log management, we recommend that you save access logs in a different bucket.
>

``` bash
$ aws --profile my-profile s3 mb "s3://my-bucket-logs"
```

### Configure bucket acl on logs bucket

``` bash
$ aws --profile my-profile s3api put-bucket-acl --bucket my-bucket-logs --grant-write URI=http://acs.amazonaws.com/groups/s3/LogDelivery --grant-read-acp URI=http://acs.amazonaws.com/groups/s3/LogDelivery
```

#### Check the bucket acl configuration

``` bash
$ aws --profile my-profile s3api get-bucket-acl --bucket my-bucket-logs
```

*Sample output* :

``` json
{
    "Owner": {
        "DisplayName": "1542319462669586:user-5hwhM25pPT6f",
        "ID": "1542319462669586:user-5hwhM25pPT6f"
    },
    "Grants": [
        {
            "Grantee": {
                "Type": "Group",
                "URI": "http://acs.amazonaws.com/groups/s3/LogDelivery"
            },
            "Permission": "READ_ACP"
        },
        {
            "Grantee": {
                "Type": "Group",
                "URI": "http://acs.amazonaws.com/groups/s3/LogDelivery"
            },
            "Permission": "WRITE"
        }
    ]
}
```

### Configure bucket logging parameters

Set the logging parameters for a bucket and specify permissions for who can view and modify the logging parameters.

``` bash
$ aws --profile my-profile s3api put-bucket-logging --bucket my-bucket --bucket-logging-status file://logging.json
```

`logging.json`

```json
{
  "LoggingEnabled": {
      "TargetBucket": "my-bucket-logs",
      "TargetPrefix": "test/"
   }
}
```

#### Check bucket logging parameters

``` bash
$ aws --profile my-profile s3api get-bucket-logging --bucket my-bucket
```

*Sample output* :

``` json
{
    "LoggingEnabled": {
        "TargetBucket": "my-bucket-logs",
        "TargetPrefix": "test/"
    }
}
```

### View logs

After about one hour, the first logs are available:

``` bash
$ aws --profile my-profile s3 ls "s3://my-bucket-logs" --recursive
```

*Sample output* :

``` bash
2023-01-10 17:39:42       1861 test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
2023-01-10 17:42:39        369 test/2023-01-10-16-12-38-4623ACA1FDEF492DBCD30385DAB48E1D
2023-01-10 17:42:39       1485 test/2023-01-10-16-12-38-FEE333087AD64973ABF6B62B10ECBF20
```

Download a log:

``` bash
$ aws --profile my-profile s3 cp "s3://my-bucket-logs/test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261" .
```

*Sample output* :

```bash
download: s3://my-bucket-logs/test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261 to ./2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
```

Then read it:

``` bash
$ cat ./2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
```

*Sample output* :

```bash
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:06:28 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f tx46d5e8a45e5e4bb3975fc-0063bd7ef4 REST.PUT.LOGGING_STATUS - "PUT /?logging HTTP/1.0" 200 - - 200 113 0 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:06:47 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f txd467757a5fac478b9132e-0063bd7f07 REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 11 9 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:08:20 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f txa4de5d9245774d5699835-0063bd7f64 REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 9 7 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:24:49 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f tx452b0b609b6d441ab0cef-0063bd833f REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 2320 2319 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:26:02 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f tx5b60d66c1d5b4a049674b-0063bd838a REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 18 16 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
```

The following list describes the log record fields:

- Bucket Owner: canonical user ID of the source bucket
    - PROJECT_NAME:USER_NAME
- Bucket: bucket name
- Time: time at which the request was received
    - format: [%d/%b/%Y:%H:%M:%S %z]
- Remote IP: apparent internet address of the requester
- Requester: canonical user ID of the requester
    - PROJECT_NAME:USER_NAME
- Request ID: identify each request
    - ex: txid0123456789abcdef
- Operation: operation listed here is declared
    - SOAP.operation
    - REST.HTTP_method.resource_type
    - WEBSITE.HTTP_method.resource_type
    - BATCH.DELETE.OBJECT
    - S3.action.resource_type for Lifecycle and logging
- Key: object name
- Request-URI: Request-URI part of the HTTP request message
- HTTP status: numeric HTTP status code of the response
- Error Code: Amazon S3 Error code
    - ex: NoSuchBucket
- Bytes Sent: number of response bytes sent
- Object Size: number of response bytes received?
- Total Time: number of milliseconds the request was in flight from the server's perspective
- Turn-Around Time: TTFB
- Referer: value of the HTTP Referer header
- User-Agent: value of the HTTP User-Agent header
- Version Id: object version ID
- Signature Version: signature version
    - SigV2
    - SigV4
- Authentication Type: type of request authentication used
    - AuthHeader
    - QueryString
- Host Header: endpoint used to connect to S3
    - (BUCKET.)STORAGE_DOMAIN

### Check log file acl

``` bash
$ aws --profile my-profile s3api get-object-acl --bucket my-bucket-logs --key test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
```

*Sample output* :

``` json
{
    "Owner": {
        "DisplayName": "logging_s3:.log_delivery",
        "ID": "logging_s3:.log_delivery"
    },
    "Grants": [
        {
            "Grantee": {
                "DisplayName": "logging_s3:.log_delivery",
                "ID": "logging_s3:.log_delivery",
                "Type": "CanonicalUser"
            },
            "Permission": "FULL_CONTROL"
        },
        {
            "Grantee": {
                "DisplayName": "1542319462669586:user-5hwhM25pPT6f",
                "ID": "1542319462669586:user-5hwhM25pPT6f",
                "Type": "CanonicalUser"
            },
            "Permission": "FULL_CONTROL"
        }
    ]
}
```

### Disable Server Access Logging

Create an empty configuration file:

```bash
$ cat Documents/logging_disable.json
{}
```

Then configure bucket logging parameters with this empty configuration file:

```bash
$ aws --profile my-profile s3api put-bucket-logging --bucket my-bucket --bucket-logging-status file://logging_disable.json
```

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
