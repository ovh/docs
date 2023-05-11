---
title: Object Storage - Hosting a static website in a S3 bucket
excerpt: Learn how to configure a S3 bucket to host a static website
updated: 2023-05-11
---

## Objective

**This guides explains how to create, configure and activate a static website hosted in a S3 bucket.**

## Requirements

- A S3 bucket with an ACL public-read
- Your static resources (HTML, CSS, images, js, etc.)

## Instructions

### Step 1: Uploading website resources

In S3, a bucket is a flat container of objects. It does not provide any hierarchical organization as the file system on your computer does. However, you can create a logical hierarchy by using object key names that imply a folder structure.

**Example**:

- `index.html` Object is the root of the bucket
- `doc/page1.html` Object is in a subfolder

> [!warning]
>
> - HTML pages must be uploaded with text/html as their ContentType
> - CSS files must be uploaded with text/css as their ContentType
> - Make your bucket content publicly available, i.e all resources must have ACL "public-read"

### Step 2: Setting the website configuration for a bucket

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

### Step 3: Testing the endpoint

Once the website configuration has been successfully uploaded, you can test the endpoint in your web browser.
The default endpoint will depend of the region of your bucket.

```sh
http://{bucket-name}.s3-website.{region}.{storage_class}.cloud.ovh.net
```

Where `storage_class` is:

- "io" if you are using a standard bucket
- "perf" if you are using a high perf bucket

> [!primary]
> If you want to use a custom endpoint, you will have to provide your own domain name.
> Find more information on OVHcloud domain name offers on the [OVHcloud website](https://www.ovhcloud.com/en-gb/domains/)

> [!warning]
> - Make sure the region you are hosting your bucket in supports the storage class you choose. You can check the list of supported storage classes by regions [here](/pages/cloud/storage/object_storage/s3_location).
> - By default, OVHcloud S3 Object Storage website endpoints do not support HTTPS. In order to enable HTTPS, you can use OVHcloud Load Balancer to proxy your website. For more information, see the Go further section of this guide.


## Go further

[Enable HTTPS on a S3 static website using a custom fqdn](/pages/cloud/storage/object_storage/s3_website_https)

Join our community of users on <https://community.ovh.com/en/>.
