---
title: Object Storage Swift - Synchronise Synology NAS with Object Storage
excerpt: Find here how to synchronise a Synology NAS with Object Storage
updated: 2021-10-27
---


## Objective
[Synology DiskStation Manager 6.0](https://www.synology.com/en-global/dsm/6.0beta){.external} provides a tool for synchronisation with different cloud solutions.

This is compatible with the OVHcloud Public Cloud Object Storage and lets you back up your data and access it from any location. This guide explains how to configure DiskStation Manager 6.0 so that you can synchronise your NAS files and your Object Storage.


## Prerequisites

- [Create an Object Storage container](/pages/cloud/storage/object_storage/pcs_create_container)
- [Configure an Openstack user](/pages/platform/public-cloud/create_and_delete_a_user#creating-an-openstack-user)


## Instructions

### DiskStation Manager 6.0 configuration

> [!warning]
>
> Synology solutions such as DiskStation or Hyperbackup are not compatible with the Public Cloud Archive solution.
>

#### Retrieve your OpenStack credentials

To sync your NAS Synology, you need your OpenStack credentials.

You can retrieve them by downloading the OpenRC file using the first part of the following guide:

[Setting OpenStack environment variables](/pages/platform/public-cloud/loading_openstack_environment_variables#step-1-retrieve-the-variables)

#### Configuring the synchronisation point with Cloud Sync

Once you have your credentials, you can log in to your NAS and take the following steps:

- Launch the Cloud Sync application:

![public-cloud](images/3791.png){.thumbnail}

- Select OpenStack Swift as a Cloud Provider

![public-cloud](images/3788.png){.thumbnail}

- Enter your OpenStack credentials:

![public-cloud](images/3792.png){.thumbnail}

You can find this information in the OpenRC file which you downloaded in the previous step.

- Configure the folder to synchronise

![public-cloud](images/3790.png){.thumbnail}

> [!alert]
>
> This guide is based on DiskStation Manager 6.0 Beta, the configuration process may change.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
