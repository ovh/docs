---
title: 'Starting with Glace API'
excerpt: 'Find out how to use Glance and the OpenStack API
slug: starting-with-glance
section: Openstack
order: 5
---

## Objective

In order to automate your operations on the Public Cloud, it is possible to use OpenStack APIs to generate different scripts. OpenStack's Glance client will allow you to interact and manage your images and backups.

For example, you can send an image of one of your virtual machines, or an image of OS cloud-ready to your project to create a new instance with it. You can also download one of your instance backups.

**This guide will help you take the OpenStack APIs into your hands to manage your images using the Python Glance client.**

## Requirements

- An image or backup (in our case it will be a Gentoo cloud image)

Please refer to the following guides:e

- [Preparing an environment for using the OpenStack API](../prepare_the_environment_for_using_the_openstack_api/){.external} and install python-glanceclient
- [Setting OpenStack environment variables](../set-openstack-environment-variables/){.external}


## Glance Documentation
It is possible to obtain a list of possible command by checking the embedded documentation:

```sh
admin@server-1:~$ glance help
```

Here are the main commands:

|image-create|Create an image|
|image-delete|Delete an image|
|image-download|Download an imoge|
!image-list!List avaialble images|

It is also possible to get information about a command by adding "help" in front of it:

```sh
admin@server-1:~$ glance help image-download
usage: glance image-download [--file <FILE>] [--progress] <IMAGE>

Download a specific image.

Positional arguments:
  <IMAGE>        Name or ID of image to download.

Optional arguments:
  --file <FILE>  Local file to save downloaded image data to. If this is not
                 specified the image data will be written to stdout.
  --progress     Show download progress bar.
```

> [!success]
>
> It is also possible to obtain the documentation about Glance on the Openstack website.
>

## Basic Operations

### Creating an image
- Upload your image to your project:

```sh
admin@server-1:~$ glance image-create --name Gentoo --disk-format qcow2 --container-formate bare --file gentoo.qcow2
```

List avaailable images:

```sh
admin@server-1:~$ glance image-list

+--------------------------------------+------------------------------------+-------------+------------------+--------------+--------+
| ID                                   | Name                               | Disk Format | Container Format | Size         | Status |
+--------------------------------------+------------------------------------+-------------+------------------+--------------+--------+
| c17f13b5-587f-4304-b550-eb939737289a | Centos 7                           | raw         | bare             | 2149580800   | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7                           | raw         | bare             | 2149580800   | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8                           | raw         | bare             | 2149580800   | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19                          | raw         | bare             | 2149580800   | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20                          | raw         | bare             | 2149580800   | active |
| d3d71235-1548-4c84-af47-9d39054be9d0 | Gentoo                             | qcow2       | bare             | 1811218432   | active |
| 8161a7b5-571b-433d-ad6b-6d7f145341d8 | Snapshot 07/01/2016                | qcow2       | bare             | 1054605312   | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04                       | raw         | bare             | 2149580800   | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04                       | raw         | bare             | 10737418240  | active |
| 0c58e90e-168e-498a-a819-26792e4c469e | Ubuntu 15.10                       | qcow2       | bare             | 309854720    | active |
| 7d983a54-d06b-488f-986c-ba0eaa98ea51 | ubuntu-14.04-rescue                | raw         | bare             | 1073741824   | active |
| bb37762b-5a82-4c2b-b72b-91ea10169941 | Windows-Server-2012-r2             | raw         | bare             | 107374182400 | active |
+--------------------------------------+------------------------------------+-------------+------------------+--------------+--------+
```

> [!success]
>
> With this complete, it is now possible to use our "Gentoo" image when creating an instance.
> 

### Downloading an image
- Downloading a backup:

```sh
admin@server-1:~$ glance image-download 8161a7b5-571b-433d-ad6b-6d7f145341d8 --file snapshot.qcow2
```

### Deleting an image
- Delete an image:

```sh
admin@server-1:~$ glace image-delete 8161a7b5-571b-433d-ad6b-6d7f145341d8
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
