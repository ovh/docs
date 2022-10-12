---
title: Object Storage - Use S3 Object Storage with Nextcloud
slug: s3/nextcloud
excerpt: Learn how to set up storage in Nextcloud to use a S3 Object Storage bucket
section: Configure Object Storage with your solutions
order: 120
---

**Last updated on 3rd January 2022**

## Objective

Nextcloud is a suite of client-server software for creating and using file hosting services.

**This guide explains how to set up storage in Nextcloud to use a S3 Object Storage bucket.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](https://partner.ovhcloud.com/en-sg/directory/) and/or discuss the issue with our community on https://community.ovh.com/en/. OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- A bucket
- A user with the required access rights on the bucket
- Your S3 credentials (access_key and secret_access_key)

See our [Getting started with S3 Object Storage](https://docs.ovh.com/sg/en/storage/s3/getting-started-with-s3/) guide.

## Instructions

### Configuration from the graphical interface

#### Activate the *External storage support* application

Click on your profile at the top right and then on `Apps`{.action}.

![Main menu](images/HighPerf-nextcloud-20211206101650679.png){.thumbnail}

Select the `Disabled Apps`{.action} in the left panel.

Locate the **External storage support** application and click `Enable`{.action}

![Disabled Apps](images/HighPerf-nextcloud-20211206101817393.png){.thumbnail}

#### Configuration

Click on your avatar at the top right then on `Settings`{.action}.

![Main menu](images/HighPerf-nextcloud-20211206101913852.png){.thumbnail}

1. Select the `External storage`{.action} menu
2. Create an *Amazon S3* storage type.
3. Name your destination folder
4. Specify the name of your bucket
5. Set the host as: `s3.<region_in_lowercase>.perf.cloud.ovh.net`
6. Set the port to 443
7. Specify the region
8. Activate SSL
9. Enter your access key
10. Fill in your secret key
11. `Validate`{.action}

![External Storage Amazon S3 completed](images/HighPerf-nextcloud-20211206102607233.png){.thumbnail}

Open the `Files`{.action} application, select the `External storage`{.action} menu then your `bucket`{.action}.

![Files External Storage](images/HighPerf-nextcloud-20211206102749423.png){.thumbnail}

The result should be similar to this:

![Files External Storage Bucket](images/HighPerf-nextcloud-20211206102844377.png){.thumbnail}

### Configuration from the CLI

First, the **External storage support** application must be enabled:

```bash
$ php occ app:enable files_external
files_external enabled
```

Check that S3 is supported on your installation:

```bash
$ php occ files_external:backends storage amazons3
  - name: Amazon S3
  - identifier: amazons3
  - configuration:
    - bucket: text
    - hostname: text
    - port: text
    - region: text
    - use_ssl: boolean
    - use_path_style: boolean
    - legacy_auth: boolean
  - storage_class: \OCA\Files_External\Lib\Storage\AmazonS3
  - supported_authentication_backends:
    - amazons3::accesskey
  - authentication_configuration:
    - amazons3::accesskey:
      - key: text
      - secret: password
```

Mount your S3 bucket on Nextcloud as a **OVH_hp-bucket** mount point:

```bash
$ php occ files_external:create -c bucket=hp-bucket \
                                -c hostname=s3.<region_in_lowercase>.perf.cloud.ovh.net \
                                -c region=<region_in_lowercase> \
                                -c use_ssl=true \
                                -c use_path_style=false \
                                -c legacy_auth: false \
                                -c key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \
                                -c secret=yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy \
                                OVH_hp-bucket amazons3 amazons3::accesskey
Storage created with id 4
```

Validate your settings:

```bash
$ php occ files_external:verify 4
  - status: ok
  - code: 0
  - message
```

Verify and update the settings if necessary:

```bash
$ php occ files_external:list
  +----------+----------------+-----------+---------------------+-----------------+---------+------------------+-------------------+
  | Mount ID | Mount Point    | Storage   | Authentication Type | Configuration   | Options | Applicable Users | Applicable Groups |
  +----------+----------------+-----------+---------------------+-----------------+---------+------------------+-------------------+
  | 4        | /OVH_hp-bucket | Amazon S3 | Access key          | bucket: "nex.." |         | All              |                   |
  +----------+--------------+-----------+---------------------+-----------------+---------+------------------+-------------------+

```

Start indexing the new storage:

```bash
$ php occ files:scan -vvv --path /admin/files/OVH_hp-bucket
Starting scan for user 1 out of 1 (admin)
     Folder /admin/files/OVH_hp-bucket/
     Folder /admin/files/OVH_hp-bucket/home
     ...
+---------+-------+--------------+
| Folders | Files | Elapsed time |
+---------+-------+--------------+
| 3       | 13    | 00:00:04     |
+---------+-------+--------------+
```

### Set your bucket as primary storage

Edit your `config/config.php` file and add:

```php
'objectstore' => array(
        'class' => 'OC\\Files\\ObjectStore\\S3',
        'arguments' => array(
                'bucket' => 'hp-bucket',
                'autocreate' => true,
                'key'    => 'xxxxxxxxxxxxxxxxxxxx',
                'secret' => 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
                'hostname' => 's3.<region_in_lowercase>.perf.cloud.ovh.net',
                'port' => 443,
                'use_ssl' => true,
                'region' => '<region_in_lowercase>',
                'use_path_style' => false
        ),
),
```

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
