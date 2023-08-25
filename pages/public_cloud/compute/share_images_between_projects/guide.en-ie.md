---
title: Sharing images between Public Cloud projects
excerpt: Find out how to share images between Public Cloud projects using OpenStack
updated: 2023-07-27
---

## Objective

A situation may arise where you need to share an [Instance backup](/pages/public_cloud/compute/save_an_instance) image or a [Volume backup](/pages/public_cloud/compute/volume-backup) image between several Public Cloud projects.

With OpenStack, it is possible to share an image between projects, even if they don't belong to the same account.

This feature offers many possibilities, but it also has its risks. It is therefore important to understand how it works.

For example, if we want to share an image from Project A with Project B (in the same or different account), the following rules apply:

- The image remains physically attached to Project A. Project B only has "access authorization" to this image.
- If Project A removes access to the image (like ACL, image deletion or if the project is deleted for unpaid invoices, etc.), the instances running from this image on Project B may not work anymore due to migration or rebuild issues.

It is therefore important to keep this in mind before engaging in this setup.

For more information, please consult the [Official OpenStack documentation](https://docs.openstack.org/image-guide/share-images.html){.external}.

**This guide will show you how to share images between one or more projects while preserving the configuration and state of the image.**

## Requirements

Before following these steps, it is recommended that you first read this guide:

- [Prepare the environment to use the OpenStack API](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)

You will also need the following:

- a [Public Cloud Instance](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account
- an [OpenStack user](/pages/public_cloud/compute/create_and_delete_a_user/)

> [!primary]
>
> This guide references the use of the [OpenStack command-line client](https://docs.openstack.org/python-openstackclient/latest/){.external}.
>

## Instructions

### Share an Image

First, run the following command to list your existing images:

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

### Add a project to an image

The next step is to add the UUID of a different project as a member of the image. In our example below, we add the UUID of "Project B" to the image.

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

Once completed, check that you can see and access the image:

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

### Verify all the members of an image

```bash
$ openstack image member list 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project C>                      | pending  |
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project B>                      | accepted |
+--------------------------------------+----------------------------------+----------+
```

### Delete a member of an image or unshare an image

```bash
$ openstack image remove project <image> <UUID_Project_To_Delete>
```

## Go further

[Transfer an instance backup from one datacentre to another](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).

Join our community of users on <https://community.ovh.com/en/>.