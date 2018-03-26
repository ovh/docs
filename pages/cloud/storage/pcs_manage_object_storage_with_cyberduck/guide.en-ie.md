---
title: Manage Object Storage with CyberDuck
excerpt: Manage Object Storage with CyberDuck
slug: manage_object_storage_with_cyberduck
section: Object Storage
legacy_guide_number: g1868
---


## 
Object Storage is a storage solution that is managed primarily through the OpenStack API.

If you're not familiar with managing storage through command lines, there are some graphics solutions that use the OpenStack API for you. CyberDuck is one of these solutions and it is easy to configure. 

This guide will explain how to configure Cyberduck to manage your Object Storage using a graphical interface based on the Openstack APIs.


## Prerequisites

- You must have access to Horizon: []({legacy}1773)
- You must have your project and user ID, which you can get by downloading the OpenRC file in the [Access and Security]({legacy}1774) menu in Horizon.




## 

- Download [Cyberduck](https://cyberduck.io/)
- Log in to a "Swift - OpenStack Object Storage" account



![](images/img_2757.jpg){.thumbnail}
Enter the following information:

- Server: auth.cloud.ovh.net (Authentication server)
- Tenant ID:Access Key : This is the Project_ID:Horizon_User_ID
- Secret Key: your Horizon user password
- More Options/Path: v2.0



- Log in



![](images/img_2756.jpg){.thumbnail}


## 

- [Getting started with the Swift API]({legacy}1916)
- [Configure ownCloud with Object Storage]({legacy}2000)




## 
 

