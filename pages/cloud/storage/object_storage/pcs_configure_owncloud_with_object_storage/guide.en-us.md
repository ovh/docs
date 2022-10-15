---
title: Object Storage Swift - Configure ownCloud with Object Storage
excerpt: Configure ownCloud with Object Storage
slug: pcs/configure-owncloud-with-object-storage
section: OpenStack Swift Storage Class Specifics
order: 170
---

**Last updated 20th May 2022**

## Objective

[ownCloud](https://owncloud.org/) is an online storage and file management application.
This solution offers several features, including synchronisation between multiple devices. You can also add external storage such as OpenStack Object Storage.

**This guide explains how to configure your ownCloud with Object Storage.**


## Requirements

- The OpenRC file, obtained from the [OVHcloud Control Panel](https://docs.ovh.com/us/en/public-cloud/creation-and-deletion-of-openstack-user/) or [Horizon](https://docs.ovh.com/us/en/public-cloud/horizon/)
- [Storage space](https://docs.ovh.com/us/en/storage/pcs/create-container/) dedicated to ownCloud


## Instructions

### Installation

Firstly you have to install ownCloud:

```bash
root@instance:~$ apt install owncloud
```

> [!primary]
>
> Make sure that the repository you use contains the latest version of ownCloud. 
>

To function, OwnCloud must have a MySQL database. If you do not already have one, install it by running this command:

```bash
root@instance:~$ apt install mysql-server
```

### Configuration

To configure the database that will be used by ownCloud, log in to your MySQL server with the root password defined when the server was installed:


```bash
root@instance:~$ mysql -u root -p
```

At this point, you can create a new user and a database dedicated to ownCloud:

```sql
***** Create user *****
mysql> CREATE USER 'owncloud'@'localhost' IDENTIFIED BY 'P@ssw0rd';

***** Create database *****
mysql> CREATE DATABASE `owncloud` ;

***** Grant all privileges on "ownCloud" to the "owncloud" database *****
mysql> GRANT ALL PRIVILEGES ON `owncloud` . * TO 'owncloud'@'localhost';
```

Log in to ownCloud on your browser by entering: `http://serverIP/owncloud`:

![ownCloud](images/img_3325.jpg){.thumbnail}

In this interface:

- Create an administrator account.
- Enter the data directory (optional, if you just want to use the Object Storage, you can leave the default one).
- Enter your database credentials.


After confirming the operation, you can access your OwnCloud interface and activate the application that allows you to add an external storage support.

To do so, click on `File`{.action} on the top left and select `Applications`{.action}:

![ownCloud](images/img_3327.jpg){.thumbnail}

Then enable the `External storage support`{.action} application from the `Disabled` applications menu.

![ownCloud](images/img_3328.jpg){.thumbnail}

Having done so, configure this application by clicking on your username at the top right and selecting `Admin`{.action}:

![ownCloud](images/img_3326.jpg){.thumbnail}

In the `External storage` menu, select `Add storage`{.action} and `OpenStack Object Storage`{.action}:

![ownCloud](images/img_3329.jpg){.thumbnail}

Enter the details from your OpenRC file:

- Your Horizon username which corresponds to the  "OS_USERNAME" field in the OpenRC file
- The name of your container which you previously created for ownCloud
- The region that your container is in: "OS_REGION_NAME"
- The tenant name, corresponding to the "OS_TENANT_NAME" field
- Your Horizon password
- The service name corresponding to "Swift"
- The endpoint address, corresponding to the "OS_AUTH_URL" field or "https://auth.cloud.ovh.net/v3"


The "API key" and the "Maximum waiting time" are optional.

> [!primary]
>
> The container that you have created must be entirely dedicated to ownCloud because the application will use metadata.
>
> Once you've entered all the information and checked that it is correct, the red box in front of your folder name will turn green and will be available in the `External storage` section of your homepage:
>


![ownCloud](images/img_3330.jpg){.thumbnail}


## Go further
 
Join our community of users on <https://community.ovh.com/en/>.