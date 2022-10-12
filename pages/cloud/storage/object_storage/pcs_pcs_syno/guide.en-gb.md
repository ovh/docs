---
title: Object Storage Swift - Synchronise Synology NAS with Object Storage
slug: pcs/pcs-syno
excerpt: Find here how to synchronise a Synology NAS with Object Storage
section: OpenStack Swift Storage Class Specifics
order: 150
---

**Last updated 27th October 2021**

## Objective

[Synology DiskStation Manager 6.0](https://www.synology.com/en-global/dsm/6.0beta){.external} provides a tool for synchronisation with different cloud solutions.

This is compatible with the OVHcloud Public Cloud Object Storage and lets you back up your data and access it from any location. This guide explains how to configure DiskStation Manager 6.0 so that you can synchronise your NAS files and your Object Storage.


## Prerequisites

- [Create an Object Storage container](https://docs.ovh.com/gb/en/storage/pcs/create-container/)
- [Configure an Openstack user](https://docs.ovh.com/gb/en/public-cloud/creation-and-deletion-of-openstack-user/#creating-an-openstack-user)


## Instructions

### DiskStation Manager 6.0 configuration

> [!warning]
>
> Synology solutions such as DiskStation or Hyperbackup are not compatible with the Public Cloud Archive solution.
>

#### Retrieve your OpenStack credentials

To sync your NAS Synology, you need your OpenStack credentials.

You can retrieve them by downloading the OpenRC file using the first part of the following guide:

[Setting OpenStack environment variables](https://docs.ovh.com/gb/en/public-cloud/set-openstack-environment-variables/#step-1-retrieve-the-variables)

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
