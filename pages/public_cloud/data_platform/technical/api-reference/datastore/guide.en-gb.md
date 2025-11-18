---
title: "API Reference: Buckets"
updated: 2025-02-15
---

## Objective

The ForePaaS Buckets are fully compatible with **AWS S3** client.
To interact with them, you will need to [generate an API key and Secret key in your Identity Access Manager](/pages/public_cloud/data_platform/getting-further/generate-api-key) from a **ForePaaS Directory** account.

* [Using AWS CLI](/pages/public_cloud/data_platform/technical/api-reference/datastore#using-aws-cli)
* [Using Rclone](/pages/public_cloud/data_platform/technical/api-reference/datastore#using-rclone)
* [Using NodeJS](/pages/public_cloud/data_platform/technical/api-reference/datastore#using-nodejs)
* [Using Python](/pages/public_cloud/data_platform/technical/api-reference/datastore#using-python)

## Using AWS CLI

> [!primary]
> In the base URLs in the code snippets below, you will need to replace `my-dataplant` with your [Project's subdomain](/pages/public_cloud/data_platform/product/project/config-ids#project-subdomain).

1. Install the AWS CLI client from  https://aws.amazon.com/cli/
2. Configure the AWS CLI, it is suggested to use [named profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html).
```bash
$ aws configure --profile mydataplant
AWS Access Key ID [None]: your_access_key
AWS Secret Access Key [None]: your_secret_key
Default region name [None]: forepaas
Default output format [None]:
```
3. Enable *AWS Signature Version 4* for MinIO server.
```bash
aws configure set s3.signature_version s3v4 --profile mydataplant
```
4. A few command examples (replacing `my-dataplant` with your [Project's subdomain](/pages/public_cloud/data_platform/product/project/config-ids#project-subdomain)):

```bash
# list your buckets
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 ls

# list contents inside bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 ls s3://mybucket

# make a bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 mb s3://mybucket

# add an object to a bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 cp my-file.csv s3://mybucket

# delete an object from a bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 rm s3://mybucket/my-file.csv

# remove a bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 rb s3://mybucket

```

> [!primary]
> To manage entrypoint URL inside a named profile, you may look at this documentation page: [configure entry point URL per profile](https://github.com/wbingli/awscli-plugin-endpoint).

## Using Rclone

> [!primary]
> In the base URLs in the code snippets below, you will need to replace `my-dataplant` with your [Project's subdomain](/pages/public_cloud/data_platform/product/project/config-ids#project-subdomain).

1. Install [rclone](https://rclone.org/) from https://rclone.org/downloads/
2. Configure rclone (replacing `my-dataplant` with your [Project's subdomain](/pages/public_cloud/data_platform/product/project/config-ids#project-subdomain)).
```bash
rclone config create my-dataplant s3 provider Minio region forepaas env_auth false
rclone config update my-dataplant endpoint https://my-dataplant.forepaas.io/datastore
rclone config update my-dataplant access_key_id YOUR_ACCESS_KEY
rclone config update my-dataplant secret_access_key YOUR_SECRET_KEY
```
3. Check rclone's config file location if needed
```bash
rclone config file
```
4. Check your configuration
```bash
rclone config show my-dataplant
[my-dataplant]
type = s3
provider = Minio
region = forepaas
env_auth = false
endpoint = https://my-datplant.forepaas.io/datastore
access_key_id = YOUR_ACCESS_KEY
secret_access_key = YOUR_SECRET_KEY
```
5. Some simple commands (please refer to rclone documentation for more details):

```bash
# listing buckets
rclone lsd my-dataplant:

# create a bucket
rclone mkdir my-dataplant:test-rclone

# generate a local docs for test purpuse
rclone gendocs docs

# copy ./docs/ to test-rclone
rclone copy docs my-dataplant:test-rclone/docs
# what is the size of a bucket or a path ?
rclone size my-dataplant:test-rclone
Total objects: 69
Total size: 239.570 kBytes (245320 Bytes)

# displays a tree
rclone tree my-dataplant:test-rclone
# move files in bucket
rclone move my-dataplant:test-rclone/docs/commands my-dataplant:test-rclone/commands

# syncing source to destination
rclone sync --dry-run docs my-dataplant:test-rclone/docs

# listing files in a human redable way
rclone lsl my-dataplant:test-rclone
# listing files with format options
rclone lsf  --format "tsp" --recursive my-dataplant:test-rclone

# deleting files greater than 1k
rclone --min-size 1k lsl my-dataplant:test-rclone/commands
rclone --dry-run --min-size 1k delete my-dataplant:test-rclone/commands
rclone --min-size 1k delete my-dataplant:test-rclone/commands
# copy files in ./commands
rclone copy my-dataplant:test-rclone/commands commands
# delete an entire path
rclone delete my-dataplant:test-rclone/commands/
```

## Using NodeJS

> [!primary]
> In the base URLs in the code snippets below, you will need to replace `[DATAPLANT_NAME]` with your [Project's subdomain](/pages/public_cloud/data_platform/product/project/config-ids#project-subdomain).

```sh
# Add aws-sdk to your application with the following command
yarn add aws-sdk
# Or
npm i -s aws-sdk
```

```js
const AWS = require('aws-sdk')
const fs = require('fs')

// Modify those values for your environment
let accessKey = '[ACCESS_KEY]'
let secretKey = '[SECRET_KEY]'
let endpoint = 'https://[DATAPLANT_NAME].forepaas.io'
let bucket = '[BUCKET_NAME]'
let region = 'forepaas'

// Constructs a service object. This object has one method for each API operation.
const dataStoreClient = new AWS.S3({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
  endpoint: `${endpoint}/datastore`,
  region: region,
  signatureVersion: 'v4',
  s3ForcePathStyle: true
})

////////////////////////////////
// Adds an object to a bucket //
////////////////////////////////
let uploadStream = fs.createReadStream('./file.csv')
dataStoreClient.putObject({
  Bucket: bucket,
  Key: 'file.csv',
  Body: uploadStream
}, (err) => {
  if (err) console.error(err)
  else console.info('File uploaded')
})

/////////////////////////////////////
// Retrieves objects from a bucket //
/////////////////////////////////////
let downloadStream = fs.createWriteStream('./file_downloaded.csv')
dataStoreClient.getObject({
    Bucket: bucket,
    Key: 'file.csv'
  })
  .createReadStream()
  .on('error', (err) => {
    console.error(err)
  })
  .pipe(downloadStream)
  .on('close', () => {
    console.info('File downloaded')
  })

/////////////////////////////////////
// Returns some or all (up to 1000) of the objects in a bucket.
/////////////////////////////////////
dataStoreClient.listObjects({
  Bucket: bucket
}, (err, data) => {
  if (data && data.Contents) {
    data.Contents.forEach(file => {
      console.info(`${file.Key} (${file.Size} bytes)`)
    })
  }
})
```

## Using Python

> [!primary]
> In the base URLs in the code snippets below, you will need to replace `[DATAPLANT_NAME]` with your [Project's subdomain](/pages/public_cloud/data_platform/product/project/config-ids#project-subdomain).

```sh
# Install boto3 with the following command:
pip install boto3
```

```python
import boto3
from botocore.client import Config

# Modify those values for your environment
dataplant_url = 'https://[DATAPLANT_NAME].forepaas.io'
access_key = '[ACCESS_KEY]'
secret_key = '[SECRET_KEY]'
bucket = '[BUCKET_NAME]'
region = 'forepaas'

# Constructs a service object. This object has one method for each API operation.
datastore = boto3.client(
  's3',
  endpoint_url='{dataplant}/datastore'.format(dataplant=dataplant_url),
  aws_access_key_id=access_key,
  aws_secret_access_key=secret_key,
  config=Config(signature_version='s3v4'),
  region_name=region
)

# Adds an object to a bucket
datastore.upload_file(
  Bucket=bucket,
  Filename='./file.csv',
  Key='file.csv')

# Retrieves objects from a bucket
datastore.download_file(
  Bucket=bucket,
  Filename='./file_downloaded.csv',
  Key='file.csv')

# Returns some or all (up to 1000) of the objects in a bucket.
# You can use the request parameters as selection criteria to return a subset of the objects in a bucket.
if datastore.list_objects(Bucket=bucket):
  for file in datastore.list_objects(Bucket=bucket)['Contents']:
    print('{name} ({size} bytes)'.format(name=file['Key'], size=file['Size']))
```

## Go further

Join our [community of users](/links/community).