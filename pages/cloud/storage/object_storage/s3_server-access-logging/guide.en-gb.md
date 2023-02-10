## Objective


## Requirements

- A bucket
- A user with the required access rights on the bucket
- Have installed and configured aws-cli

See our [Getting started with S3 Object Storage](https://docs.ovh.com/gb/en/storage/object-storage/s3/getting-started-with-object-storage/) guide.

## Instruction

Create a bucket
```
$ aws --profile my-profile s3 mb "s3://my-bucket"
make_bucket: my-bucket
```
Create logs bucket
```
$ aws --profile my-profile s3 mb "s3://my-bucket-logs"
make_bucket: my-bucket-logs
```

Configure logs acl on bucket
```
$ aws --profile my-profile s3api put-bucket-acl --bucket my-bucket-logs --grant-write URI=http://acs.amazonaws.com/groups/s3/LogDelivery --grant-read-acp URI=http://acs.amazonaws.com/groups/s3/LogDelivery
```

Check logs acl on bucket
```
$ aws --profile my-profile s3api get-bucket-acl --bucket my-bucket-logs
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

Enable bucket logging
```
$ #aws --profile my-profile s3api put-bucket-logging --bucket my-bucket --bucket-logging-status file://logging.json
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

Check bucket logging
```
$ aws --profile my-profile s3api get-bucket-logging --bucket my-bucket
{
    "LoggingEnabled": {
        "TargetBucket": "my-bucket-logs",
        "TargetGrants": [],
        "TargetPrefix": "test/"
    }
}
```

After about 1hour of time check logs
```                           
$ aws --profile my-profile s3 ls "s3://my-bucket-logs" --recursive
2023-01-10 17:39:42       1861 test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
2023-01-10 17:42:39        369 test/2023-01-10-16-12-38-4623ACA1FDEF492DBCD30385DAB48E1D
2023-01-10 17:42:39       1485 test/2023-01-10-16-12-38-FEE333087AD64973ABF6B62B10ECBF20
```
Download log
```
$ aws --profile my-profile s3 cp "s3://my-bucket-logs/test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261" .
download: s3://my-bucket-logs/test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261 to ./2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
```

View log
```
$ cat ./2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:06:28 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f tx46d5e8a45e5e4bb3975fc-0063bd7ef4 REST.PUT.LOGGING_STATUS - "PUT /?logging HTTP/1.0" 200 - - 200 113 0 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:06:47 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f txd467757a5fac478b9132e-0063bd7f07 REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 11 9 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:08:20 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f txa4de5d9245774d5699835-0063bd7f64 REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 9 7 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:24:49 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f tx452b0b609b6d441ab0cef-0063bd833f REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 2320 2319 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:26:02 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f tx5b60d66c1d5b4a049674b-0063bd838a REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 18 16 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
```

Get object acl
```
$ aws --profile my-profile s3api get-object-acl --bucket my-bucket-logs --key test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
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

Disable server-access-logging
```
$ cat Documents/logging_disable.json
{}
$ aws --profile my-profile s3api put-bucket-logging --bucket my-bucket --bucket-logging-status file://Documents/logging_disable.json
```
