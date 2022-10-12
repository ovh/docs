---
title: Object Storage Swift - Optimised method for uploading files to Object Storage
slug: pcs/optimised-method-for-uploading-files-to-object-storage
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1951
order: 130
---

**Last updated 27th October 2021**

## Objective

When you want to upload large files to Object Storage (including videos or disk images for example), you can use the Swift OpenStack client in order to optimise the file transfer by breaking down the files.

**This guide explains how you can use this feature to upload your files to Object Storage more quickly.**

## Prerequisites

- [Prepare the environment to use the OpenStack API](https://docs.ovh.com/au/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/) with the python-swiftclient client
- [Setting OpenStack environment variables](https://docs.ovh.com/au/en/public-cloud/set-openstack-environment-variables/)

## Instructions

Swift OpenStack lets you store files of any size by breaking them down into several segments.

When a Swift client is used to upload a file, the Swift proxy server determines the correct storage node responsible for the data (based on a hash of the object name).
Therefore, it is highly likely that the segments will be stored in several storage nodes, which means you can write your data at a higher speed.

As a result you can upload a 10 GB file in 100 X 100 MB segments:


```bash
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```

|Argument|Description|
|---|---|
|--segment-size|Segment size in bytes|
|--segment-threads|Number of segments|


You can measure the upload speed using iftop.

## Go further

Join our community of users on <https://community.ovh.com/en/>.