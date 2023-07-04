---
title: 'Transfer an instance backup from one Public cloud project to another'
excerpt: 'Find out how to transfer an instance backup from one Public cloud project to another'
updated: 2023-06-28
---

## Objective

A situation may arise where you need to move an [Instance backup](pages/platform/public-cloud/save_an_instance) or a [Volume backup](pages/platform/public-cloud/volume-backup) from one Public cloud project to another, because you would prefer to move to a newly available project.

With Openstack (and especially with glance), it is possible to share an image between projects, even if they don't belong to the same account.

This feature offers many possibilities, but it also has its risks. It is therefore important to understand what it is all about.

For example, if we want to move an image from Project A to Project B (in the same or different account), the following rules apply:

- The image remains physically attached to Project A. Project B has only "access authorization" to this image.

- If Project A removes access to the image (removes acl, image deletion, project is deleted for unpaid invoices etc...), the instances running from this image on Project B may not work anymore due to migration or rebuild issues. Etc.

It is therefore important to keep this in mind before engaging in this setup.

For more information, please consult the [Official Openstack documention](https://docs.openstack.org/image-guide/share-images.html){.external}.

**This guide will show you how to transfer an Instance backup from one Public cloud project to another while preserving the configuration and state of the Instance.**

## Requirements

Before following these steps, it is recommended that you first complete this guide:

* [Prepare the environment to use the OpenStack API](../prepare_the_environment_for_using_the_openstack_api/)

You will also need the following:

* a [Public Cloud Instance](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
* administrative (root) access to your instance/operating system via SSH

> [!primary]
>
> The commands in this guide are based on `OPENSTACK` and `GLANCE` APIs.
>

## Instructions

### Using Glance

#### Share an Image

First, establish an SSH connection to your instance/OS and then run the following command to list your existing images:

```bash
$ glance image-list

| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | pfsense |
```

> [!warning]
> 
> In order to be shared, an image must first be set to "shared" visibility.
>

```bash
$ glance image-update --visibility shared <Image_UUID>
```

Once done, the image can now be shared between two projects.

### Add a project to an Image

The next step is to add the UUID of a different project as a member of the image. In our example below, we add the UUID of "Project B".


```bash
$ glance member-create <Image_UUID> <UUID_Project_B>
+--------------------------------------+--------------------------------------+---------+
| Image ID | Member ID | Status |
+--------------------------------------+--------------------------------------+---------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+--------------------------------------+---------+
```

Once this is done, check the request on project B:

```bash
$ glance member-list <Image_UUID>
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+----------------------------------+----------+
```

If the sharing request is in `pending` status, you have to accept it:

```bash
$ glance member-update 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba <UUID_Project_B> accepted
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | accepted |
+--------------------------------------+----------------------------------+----------+
```

Once completed, check that you can see and access the image:

```bash
$ glance image-show 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+------------------+----------------------------------------------------------------------------------+
| Property | Value |
+------------------+----------------------------------------------------------------------------------+
| checksum | 1b19c9e5bdd36b9010de0164dd8b245e |
| container_format | bare |
| created_at | 2018-05-08T15:38:50Z |
| direct_url | swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| disk_format | raw |
| id | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| locations | [{"url": "swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba", |
| | "metadata": {}}] |
| min_disk | 0 |
| min_ram | 0 |
| name | pfsense |
| owner | 35c9ee22e5c84c1097a5652b0abcbab3 |
| protected | False |
| size | 10737418240 |
| status | active |
| tags | [] |
| updated_at | 2018-05-08T15:53:57Z |
| virtual_size | Not available |
| visibility | private |
+------------------+----------------------------------------------------------------------------------+
```

On Project A, you can:

#### Verify all the members of an Image

```bash
$ glance member-list --image-id <image>
+--------------------------------------+--------------------------------------+----------+
| Image ID                             | Member ID                            | Status   |
+--------------------------------------+--------------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project C>                          | pending  |
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project B>                          | accepted |
+--------------------------------------+--------------------------------------+----------+
```

#### Delete a member of an Image/unshare an Image

```bash
$ glance member-delete <image> <UUID_Project_To_Delete>
```

### Using Openstack 

#### Share an Image

First, establish an SSH connection to your instance/OS and then run the following command to list your existing images:

```bash
$ openstack image list --private
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | pfsense |
```


> [!warning]
> 
> In order to be shared, an image must first be set to "shared" visibility.
>

```bash
$ openstack image set --shared <Image_UUID>
```

### Add a project to an Image

The next step is to add the UUID of a different project as a member of the image. In our example below, we add the UUID of "Project B".

```bash
$ openstack image add project 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba <UUID_Project_B>
+------------+--------------------------------------+
| Field      | Value                                |
+------------+--------------------------------------+
| created_at | 2020-01-27T13:26:52Z                 |
| image_id   | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| member_id  | <UUID_Project_B>                      |
| schema     | /v2/schemas/member                   |
| status     | pending                              |
| updated_at | 2020-01-30T15:18:00Z                 |
+------------+--------------------------------------+
```

Once this is done, check the request on project B:


```bash
$ openstack image member list <Image_UUID>
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+----------------------------------+----------+
```


If the sharing request is in `pending` status, you have to accept it:

```bash
$ openstack image set --accept 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | eff99684d8294dbe8c2d4dd7407073f1 | accepted |
+--------------------------------------+----------------------------------+----------+
```

Once completed, check that you can see and access the Image:

```bash
$ openstack image show 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                  |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 1b19c9e5bdd36b9010de0164dd8b245e                                                                                                                                                       |
| container_format | bare                                                                                                                                                                                   |
| created_at       | 2018-05-08T15:38:50Z                                                                                                                                                                   |
| disk_format      | raw                                                                                                                                                                                    |
| file             | /v2/images/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba/file                                                                                                                                   |
| id               | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba                                                                                                                                                   |
| min_disk         | 0                                                                                                                                                                                      |
| min_ram          | 0                                                                                                                                                                                      |
| name             | pfsense                                                                                                                                                                                |
| owner            | 35c9ee22e5c84c1097a5652b0abcbab3                                                                                                                                                       |
| properties       | direct_url='swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', locations='[{'url': 'swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', 'metadata': {}}]' |
| protected        | False                                                                                                                                                                                  |
| schema           | /v2/schemas/image                                                                                                                                                                      |
| size             | 10737418240                                                                                                                                                                            |
| status           | active                                                                                                                                                                                 |
| tags             |                                                                                                                                                                                        |
| updated_at       | 2018-05-08T15:53:57Z                                                                                                                                                                   |
| virtual_size     | None                                                                                                                                                                                   |
| visibility       | private                                                                                                                                                                                |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

On Project A, you can:

#### Verify all the members of an Image

```bash
$ openstack image member list 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project C>                      | pending  |
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project B>                      | accepted |
+--------------------------------------+----------------------------------+----------+
```

#### Delete a member of an Image/unshare an Image

```bash
$ openstack image remove project <image> <UUID_Project_To_Delete>
```

## Go further

[Transfer an instance backup from one datacentre to another](/pages/platform/public-cloud/transfer_instance_backup_from_one_datacentre_to_another).

Join our community of users on <https://community.ovh.com/en/>.