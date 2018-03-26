---
title: Optimised method for uploading files to Object Storage
excerpt: Optimised method for uploading files to Object Storage
slug: optimised_method_for_uploading_files_to_object_storage
section: Object Storage
legacy_guide_number: g1951
---


## 
When you want to upload large files to Object Storage (including videos or disk images for example), you can use the Swift OpenStack client in order to optimise the file transfer by breaking down the files. 
This guide explains how you can use this feature to upload your files to Object Storage more quickly.


## Prerequisites

- [Prepare the environment to use the OpenStack API]({legacy}1851) with the python-swiftclient client
- Set OpenStack environment variables




## 
Swift OpenStack lets you store files of any size by breaking them down into several segments. 

When a Swift client is used to upload a file, the Swift proxy server determines the correct storage node responsible for the data (based on a hash of the object name).
Therefore, it is highly likely that the segments will be stored in several storage nodes, which means you can write your data at a higher speed. 

As a result you can upload a 10 GB file in 100 X 100 MB segments:


```
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```


|Argument|Description|
|---|---|
|--segment-size|Segment size in bytes|
|--segment-threads|Number of segments|


You can measure the upload speed using iftop.


## 
 

