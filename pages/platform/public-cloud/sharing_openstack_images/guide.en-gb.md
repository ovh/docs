---
title: 'Sharing images with other projects'
excerpt: Discover how to share an OpenStack image with other projects
updated: 2023-07-11
---

## Objective

This tutorial will explain how you can share images with multiple public cloud projects with the help of the OpenStack command-line client.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- An [OpenStack user](/pages/platform/public-cloud/create_and_delete_a_user/)
- [OpenStack command-line environment](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- The UUID of your image you wish to share
- The ID of the project you want to share the image with

## Instructions

### Sourcing your OpenStack environment

Once you have downloaded from the OVHcloud Manager the OpenStack RC file for your OpenStack user, you need to source this file before being able to use the command-line client.

```sh
source openrc.sh
```

### Setting visibility on your image

In order to share the image, we need to change the visibility of the image to "shared" state. To do this with the command-line client we would need to execute:

`openstack image set --shared <image_uuid>`{.action}

Example:
```sh
openstack image set --shared 10244e5b-60f4-403a-a0f8-a1a9119036
```

### Adding a project to the sharing list

In OpenStack we maintain an access control list (ACL) of which projects will be able to access the shared image. For this reason, we need to add the project to the list first.

`openstack image add project <image_uuid> <project_id>`{.action}

Example:
```sh
openstack image add project 10244e5b-60f4-403a-a0f8-a1a9119036 15asf56187a1587asf561bs8d89
```

The owner of the project with which you are sharing the image with, must now accept the sharing of the image which can be done with the following command-line:

`openstack image set --accept <image_uuid>`{.action}

Example:
```sh
openstack image set --accept 10244e5b-60f4-403a-a0f8-a1a9119036
```

### Removing projects from the image:

If you wish to remove a project from accessing a shared image you can do so with the following command-line:

`openstack image remove project <image_uuid> <project_id>`{.action}

Example:
```sh
openstack image remove project 10244e5b-60f4-403a-a0f8-a1a9119036 15asf56187a1587asf561bs8d89
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
