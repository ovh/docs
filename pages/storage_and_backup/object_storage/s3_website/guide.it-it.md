---
title: Object Storage - Hosting di un sito web statico in un bucket Object Storage (EN)
excerpt: Learn how to configure an Object Storage bucket to host a static website
updated: 2024-05-20
---

## Objective

**This guide explains how to create, configure and activate a static website hosted in an Object Storage bucket.**

## Requirements

- An Object Storage bucket with an ACL public-read
- Your static resources (HTML, CSS, images, js, etc.)

## Instructions

### Step 1: Uploading website resources

In Object Storage, a bucket is a flat container of objects. It does not provide any hierarchical organization as the file system on your computer does. However, you can create a logical hierarchy by using object key names that imply a folder structure.

**Example**:

- `index.html`: Object is the root of the bucket.
- `doc/page1.html`: Object is in a subfolder.

> [!warning]
>
> - HTML pages must be uploaded with text/html as their ContentType.
> - CSS files must be uploaded with text/css as their ContentType.
> - Make your bucket content publicly available, i.e all resources must have ACL "public-read".

### Step 2: Setting the permissions

The bucket hosting the website and its contents must be publicly accessible i.e with READ permission set for all users.

**Example**:

Using the predefined `PUBLIC-READ` ACL at the bucket level:

```sh
aws --profile user-aws s3api put-bucket-acl --bucket my-website --acl public-read
```

Applying the predefined `PUBLIC-READ` ACL on **all** the objects:

```sh
#!/bin/bash
declare -a output=($(aws s3api list-objects-v2 --bucket my-website --query='Contents[].Key' | jq -r '.[]'))
for value in "${output[@]}"
do
    aws s3api put-object-acl --bucket my-website --key $value --acl public-read
done
```

### Step 3: Setting the website configuration for a bucket

To activate website hosting, you will have to upload a website configuration.

**Example**:

```sh
aws --profile user-aws s3 website s3://my-website/ --index-document index.html --error-document error.html
```

Or

```sh
aws --profile user-aws s3api put-bucket-website --bucket my-website --website-configuration file://website-conf.json
```

If you use the AWS low-level commands with website-conf.json:

```sh
{
    "IndexDocument": {
        "Suffix": "index.html"
    },
    "ErrorDocument": {
        "Key": "error.html"
    }
}
```

### Step 4: Testing the endpoint

Once the website configuration has been successfully uploaded, you can test the endpoint in your web browser.
The default endpoint will depend on the region of your bucket.

```sh
http://{bucket-name}.s3-website.{region}.io.cloud.ovh.net
```


> [!primary]
> If you want to use a custom endpoint, you will have to provide your own domain name.
> Find more information on OVHcloud domain name offers on the [OVHcloud website](/links/web/domains).

> [!warning]
> - Make sure the region you are hosting your bucket in supports the storage class you choose. You can check the list of supported storage classes by regions [here](/pages/storage_and_backup/object_storage/s3_location).
> - By default, OVHcloud Object Storage website endpoints do not support HTTPS. In order to enable HTTPS, you can use OVHcloud Load Balancer to proxy your website. For more information, see the "Go further" section of this guide.

## Go further

[Enable HTTPS on a static website using a custom fqdn](/pages/storage_and_backup/object_storage/s3_website_https)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
