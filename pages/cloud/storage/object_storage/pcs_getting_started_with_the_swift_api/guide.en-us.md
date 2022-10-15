---
title: Object Storage Swift - Getting started with the Swift API
excerpt: Find out how to use the Swift API
slug: pcs/getting-started-with-the-swift-api
legacy_guide_number: g1916
section: OpenStack Swift Storage Class Specifics
order: 010
---

**Last updated 25th May 2021**

## Objective

You can use the OpenStack API to generate various scripts in order to automate your actions on the Public Cloud.

The OpenStack *swiftclient* lets you interact with and manage your containers and objects. For example, you can upload files to your containers regularly in order to back them up.

**This guide will help you get started with the OpenStack API in order to manage your object containers using the *python-swiftclient*.**


## Requirements

- Preparing the environment to [use the OpenStack API](https://docs.ovh.com/us/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/) by installing *python-swiftclient*
- Setting the [OpenStack environment variables](https://docs.ovh.com/us/en/public-cloud/set-openstack-environment-variables/)


## Instructions

> [!primary]
>
Please note that the following instructions only pertain to the command line interface of a GNU/Linux distribution, after implementing the requirements above.
>

### Swift documentation

You can retrieve the list of possible commands from the client's documentation:

```
admin@server-1:~$ swift --help
```

Here is the list of the main commands:

|Command|Description|
|---|---|
|**delete**|Deletes a container or objects within a container|
|**download**|Downloads objects from containers|
|**list**|Lists the containers for the account or the objects for a container|
|**post**|Updates meta information for the account, container, or object. If the container is not found, it will be created automatically.|
|**stat**|Displays information for the account, container, or object.|
|**upload**|Uploads specified files and directories to the given container.|
|**capabilities**|Retrieves capability of the proxy.|
|**tempurl**|Generates a temporary URL for a Swift object.|


For an explanation of a specific Swift command, add `--help` at the end of it:

```
admin@server-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional arguments:
[container] Name of container to post to.
[object] Name of object to post. Specify multiple times
for multiple objects.
[...]
```

You can also consult the Swift documentation available on the [OpenStack website](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html).

### Creating a public object container

- Create the container "container1":

```
admin@server-1:~$ swift post container1
```

- Configure the access rights to make your container public:

```
admin@server-1:~$ swift post --header "X-Container-Read: .r:*" container1
```

- Check the container configuration:

```
admin@server-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Objects: 0
Bytes: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```

### Uploading files to your container

- Upload the content of a local folder to a container:

```
admin@server-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```

A prefix will automatically be added to your files if you send an entire folder instead of a single file.

- List a container's files:

```
admin@server-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```

You can display all files with a particular prefix using the `--prefix` argument:

```
admin@server-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

If the container is configured as public, you can access the file using a URL:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```

This URL is made up of an endpoint, available from the [Horizon interface](https://docs.ovh.com/us/en/public-cloud/access_and_security_in_horizon/), the name of your container and the name of your object (including the prefix).


### Downloading files

- Download a file:

```
admin@server-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```

You can download multiple files with the same prefix, using the following command:

```
admin@server-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```

### Deleting containers or objects

- Delete a file:

```
admin@server-1:~$ swift delete container1 text1.txt

text1.txt
```

As with downloading, you can delete multiple files using the same prefix, with the following command:

```
admin@server-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

- Delete a container:

```
admin@server-1:~$ swift delete container1

text2.txt
text3.txt
```

This will delete all the files in the container.


## Go further
 
Join our community of users on <https://community.ovh.com/en/>.
