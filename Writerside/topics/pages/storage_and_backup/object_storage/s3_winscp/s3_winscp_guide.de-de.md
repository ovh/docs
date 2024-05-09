---
title: Object Storage - S3 Object Storage mit WinSCP nutzen (EN)
excerpt: Learn how to configure WinSCP to manage your buckets and objects
updated: 2023-10-16
---

## Objective

[WinSCP](https://winscp.net/) is an open source free SFTP client, FTP client, WebDAV client, S3 client, SCP client and file manager for Windows.

**This guide explains how to configure WinSCP to manage your buckets and objects.**

## Requirements

- A bucket
- A user with the required access rights on the bucket
- Your S3 credentials (`access_key` and `secret_access_key`)

See our [Getting started with S3 Object Storage](s3_getting_started_with_object_storage1.) guide.

## Instructions

Start WinSCP. The login dialog will appear. Fill in the fields as follows:

1\. Make sure the `New Site` node is selected.

![Login dialog](login_dialog.png)

2\. On the `New Site` node, select `Amazon S3`{.action} protocol.

![S3 file protocol](S3_file_protocol.png)

3\. Enter your endpoint (without `https://`) corresponding to your storage class and set the `Port number` field to `443`.

> [!primary]
>
> In order to identify your endpoint corresponding to your storage class, please refer to this guide: [Object Storage - Endpoints and Object Storage geoavailability](s3_location1.).
>

![Host name](hostname.png)

4\. Enter your user's `access_key`.

In order to respect best practices, please fill in only the `Access key ID` field at this stage.

![Access key](access_key.png)

5\. Save your site settings using the `Save`{.action} button.

![Save config](save_config.png)

6\. Log in using the `Login`{.action} button.

![Login](s3_winscp_images_login.png)

Then enter your `secret_access_key`.

![Secret key](secret_key.png)

7\. Once you are connected, you will see a list of your S3 buckets as *folders* in the root folder.

> [!warning]
>
> The `Create directory` command in the root folder creates a new bucket.
>

![Connected](images_connected.png)

## Go further

Join our community of Discord users: <https://discord.gg/ovhcloud>

Join our community of users on <https://community.ovh.com/en/>.
