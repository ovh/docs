---
title: Object Storage - S3 Object Storage mit S3cmd (EN)
slug: s3/s3cmd
excerpt: Learn how to configure S3cmd to manage your buckets and objects
section: Tutorials
order: 130
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/s3/s3cmd/'
---

**Last updated on 3rd January 2022**

## Objective

S3cmd is a free command line tool and client for managing data in storage spaces that use the S3 protocol, such as S3 Object Storage, Google Cloud Storage or DreamHost DreamObjects.

**This guide explains how to configure S3cmd to manage your buckets and objects.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en/directory/) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- A bucket
- A user with the required access rights on the bucket
- Your S3 credentials (access_key and secret_access_key).

See our [Getting started with S3 Object Storage](https://docs.ovh.com/de/storage/s3/getting-started-with-s3/) guide.

## Instructions

To configure s3cmd, run the following command:

```bash
$ s3cmd --configure

Enter new values or accept defaults in brackets with Enter.
Refer to user manual for detailed description of all options.

Access key and Secret key are your identifiers for Amazon S3. Leave them empty for using the env variables.
Access Key: `<access_key>`
Secret Key: `<secret_key>`
Default Region [US]: `<region_in_lowercase>`

Use "s3.amazonaws.com" for S3 Endpoint and not modify it to the target Amazon S3.
S3 Endpoint [s3.amazonaws.com]: `s3.<region_in_lowercase>.perf.cloud.ovh.net`

Use "%(bucket)s.s3.amazonaws.com" to the target Amazon S3. "%(bucket)s" and "%(location)s" vars can be used
if the target S3 system supports dns based buckets.
DNS-style bucket+hostname:port template for accessing a bucket [%(bucket)s.s3.amazonaws.com]: `<bucket>.s3.<region_in_lowercase>.perf.cloud.ovh.net`

Encryption password is used to protect your files from reading
by unauthorized persons while in transfer to S3
Encryption password: `<passphrase>`      
Path to GPG program [/usr/bin/gpg]:
When using secure HTTPS protocol all communication with Amazon S3
servers is protected from 3rd party eavesdropping. This method is
slower than plain HTTP, and can only be proxied with Python 2.7 or newer
Use HTTPS protocol [Yes]:

On some networks all internet access must go through a HTTP proxy.
Try setting it here if you can\'t connect to S3 directly
HTTP Proxy server name:


New settings:
  Access Key: ACCESS_KEY
  Secret Key: SECRET_KEY
  Default Region: sbg
  S3 Endpoint: s3.sbg.perf.cloud.ovh.net
  DNS-style bucket+hostname:port template for accessing a bucket: hp-bucket.s3.sbg.perf.cloud.ovh.net
  Encryption password: passphrase
  Path to GPG program: /usr/bin/gpg
  Use HTTPS protocol: True
  HTTP Proxy server name:
  HTTP Proxy server port: 0

Test access with supplied credentials? [Y/n]
Please wait, attempting to list all buckets...
Success. Your access key and secret key worked fine :-)

Now verifying that encryption works...
Success. Encryption and decryption worked fine :-)

Save settings? [y/N] y
Configuration saved to '/home/user/.s3cfg'  
```

S3cmd is now ready to be used.

**Command examples**

List all buckets:

```bash
$ s3cmd ls
```

Create a new bucket:

```bash
$ s3cmd mb s3://BUCKET
```

List the contents of a bucket:

```bash
$ s3cmd ls s3://BUCKET[/PREFIX]
```

Synchronise /home/user/documents to a bucket
```bash
$ s3cmd sync /home/user/documents s3://BUCKET[/PREFIX]
```

Copy a file /home/user/file.txt into a bucket:

```bash
$ s3cmd put FILE [FILE...] s3://BUCKET[/PREFIX]
```

Download a file file.txt from a bucket:

```bash
$ s3cmd get s3://BUCKET/OBJECT LOCAL_FILE
```

You will find a detailed documentation of the possible actions on the [official S3cmd documentation](https://s3tools.org/usage){.external}.

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
