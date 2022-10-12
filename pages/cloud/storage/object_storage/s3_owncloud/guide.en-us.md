---
title: Object Storage - Use S3 Object Storage with Owncloud
slug: s3/owncloud
excerpt: Learn how to set up storage in Owncloud to use a S3 Object Storage bucket
section: Configure Object Storage with your solutions
order: 170
---

**Last updated on 3rd January 2022**

## Objective

Owncloud is a suite of client-server software for creating and using file hosting services.

**This guide explains how to set up storage in Owncloud to use a S3 Object Storage bucket.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en/directory/) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- A bucket
- A user with the required access rights on the bucket
- Your S3 credentials (access_key and secret_access_key)

See our [Getting started with S3 Object Storage](https://docs.ovh.com/us/en/storage/s3/getting-started-with-s3/) guide.

## Instructions

If needed, install the `External Storage: S3` plugin from the `Market`{.action}.

![Owncloud open Market](images/HighPerf-Owncloud-20211209131331778.png){.thumbnail}

Search for the `External Storage: S3` plugin.

![Owncloud plugin External Storage S3](images/HighPerf-Owncloud-20211209131556714.png){.thumbnail}

And `install`{.action} it.

![Owncloud install plugin](images/HighPerf-Owncloud-20211209131648711.png){.thumbnail}

Go to the `Settings`{.action}.

![Owncloud open Settings](images/HighPerf-Owncloud-20211209131942821.png){.thumbnail}

Then :

1. in `Storage`{.action}
2. enable `Enable external storage`{.action}
3. name your folder
4. add an `Amazon S3 compatible storage (SDK v3)`{.action}

![Owncloud create AWS S3 storage](images/HighPerf-Owncloud-20211209143008822.png){.thumbnail}

Fill in the following information:

1. Enter the name of your bucket
2. Set the host as: `s3.<region_in_lowercase>.perf.cloud.ovh.net`
3. Set the port to 443
4. Specify the region
5. Activate SSL
6. Enter your access key
7. Enter your secret key

![Owncloud complete AWS S3 storage](images/HighPerf-Owncloud-20211209133630272.png){.thumbnail}

Go to `Files`{.action}.

![Owncloud open Files](images/HighPerf-Owncloud-20211209133730832.png){.thumbnail}

Then in `External storage`{.action}.

![Owncloud Files External Storage](images/HighPerf-Owncloud-2021120913382299.png){.thumbnail}

The result should be similar to this:

![Owncloud Bucket listing](images/HighPerf-Owncloud-20211209140757288.png){.thumbnail}

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
