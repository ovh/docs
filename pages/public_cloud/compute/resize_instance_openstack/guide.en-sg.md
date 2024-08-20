---
title: Resize a Public Cloud instance using the OpenStack CLI
excerpt: Find out how to scale up your instance resources to address an increased activity
updated: 2023-09-22
---

## Objective

As a result of increased activity, or simply to address new needs, your instance may not be able to meet this new burden due to a lack of resources. However, with OVHcloud Public Cloud, you can increase the resources available to your instance with just a few steps.

**This guide will show you how to resize your Public Cloud instance using the OpenStack CLI.**

> [!primary]
> **Limitations:**
>
> - Only upscaling is possible for classic models.
> - [Metal instances](https://www.ovhcloud.com/en-sg/public-cloud/metal-instances/) can only be resized to and from other Metal flavors.
> - *Flex* instances allow resizing to higher or lower models due to a locked single disk size.
>

## Requirements

- A [Public Cloud instance](https://www.ovhcloud.com/en-sg/public-cloud/) in your OVHcloud account
- An [OpenStack user account](/pages/public_cloud/compute/create_and_delete_a_user)
- An [OpenStack CLI ready environment](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Set OpenStack environment variables](/pages/public_cloud/compute/loading_openstack_environment_variables)


## Instructions

> [!warning]
>
> This manipulation causes the instance to be shut down for the time of the operation.
>

### Performing a backup

When performing a resize, the instance is shut down for the time of the operation. We therefore recommend that you back up your instance and stop all running processes before proceeding. For more information on how to backup your instance, read the following [guide](/pages/public_cloud/compute/save_an_instance).

### Listing servers

The first step is to list your servers in order to retrieve the name of the instance you wish to resize. In our example, we want to resize the instance named "OVHcloudinstance".

```bash
$ openstack server list
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| ID                                   | Name             | Image      | Flavor |        | Status | Networks                                    | 
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| 19298898-934b-xxxx-xxxx-xxxxxxxxxxxx | testinstance1    | Centos 7     | d2-2 |        | ACTIVE | Ext-Net=111.112.113.9, 2607:5300:xxx:xxxx::ae9                                                       
| 23ce0491-5e29-xxxx-xxxx-xxxxxxxxxxxx | testinstance2    | Ubuntu 23.04 | d2-2 |        | ACTIVE | Ext-Net=111.112.113.61, 2607:5300:xxx:xxxx::c0a                                                          
| 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx | OVHcloudinstance | Debian 12    | b2-7 |        | ACTIVE | Ext-Net=111.112.113.200, 2607:5300:xxx:xxxx::9a3                                  
+--------------------------------------+----------------------------------------------------------------+--------+----------------------------------------------+
```

### Listing flavors <a name="flavorlist"></a>

Next, you need to display the list of flavors available in your region in order to retrieve the ID of the new flavor. In our example, we want to resize our instance to a b2-30 model with ID "098889e6-d1fc-4967-baea-19fd97fd83a8".

```bash
$ openstack flavor list
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name                |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| 009ee05f-9430-4c85-b9f7-66297db22731 | win-hg-7-ssd-flex   |   7000 |   50 |         0 |     2 | True      |
| 01ef1e13-5a85-4c4b-84f4-9e9da85da51d | r2-15               |  15000 |   50 |         0 |     2 | True      |
| 01f4f140-3d51-4d94-ad26-9aa85941dc63 | win-hg-60-ssd-flex  |  60000 |   50 |         0 |    16 | True      |
| 041d0272-4db5-4c13-9861-a4e17c48fd9c | r2-60               |  60000 |  100 |         0 |     4 | True      |
| 0531d26b-e117-4cdb-9e83-c16727f4737e | c2-60               |  60000 |  400 |         0 |    16 | True      |
| 05ebb9db-d6c8-4b7a-bf38-eea519aa5262 | win-r2-120-flex     | 120000 |   50 |         0 |     8 | True      |
| 098889e6-d1fc-4967-baea-19fd97fd83a8 | b2-30               |  30000 |  200 |         0 |     8 | True      |
| 0ec183bd-d014-48ad-a71e-1233c5f5c79b | win-r2-30           |  30000 |   50 |         0 |     2 | True      |
| 1070c9d6-5bc7-45db-bab2-073bff119f22 | r2-30               |  30000 |   50 |         0 |     2 | True      |
| 108e2180-e257-4054-aa23-18b123d06ed8 | win-hg-120-ssd-flex | 120000 |   50 |         0 |    32 | True      |
| 11a77f5f-5cbe-4394-ba85-d4afb2b0bade | eg-30-flex          |  30000 |   50 |         0 |     8 | True      |
| 125a6e9e-7522-463a-a90d-121abaabf21a | win-b2-30-flex      |  30000 |   50 |         0 |     8 | True      |
| 1335874a-7ddd-453b-b655-d9bf044ef5f9 | eg-120-ssd          | 120000 |  800 |         0 |    32 | True      |
| fd80c213-d30f-4e0c-ae9d-ecdcb422fc1b | eg-7-ssd            |   7000 |  100 |         0 |     2 | True      |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
```

> [!warning]
> Please note that you cannot switch OS models when resizing an instance. A resizing can only be done from a Linux model to another Linux model or from a Windows model to another Windows model.
>

### Resizing an instance

Once you have retrieved the necessary information, you can now resize your instance:

```bash
$  openstack server resize --flavor <FLAVOR-ID> <INSTANCE-NAME>
```

To resize our "OVHcloudinstance":

```bash
$ openstack server resize --flavor 098889e6-d1fc-4967-baea-19fd97fd83a8 OVHcloudinstance
```

You can follow the process by running the following command frequently. The status should appear as `RESIZE`.

```bash
$ openstack server show OVHcloudinstance
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                               | Value                                                                                                                                                                                              |
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| id                                  | 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx                                                                                                                                                              |
| image                               | Debian 12 (31e40bc4-5b35-4c5f-96ff-37df3660dec0)                                                                                                                                                   |

| key_name                            | OVHcloud                                                                                                                                                                                               |
| name                                | OVHcloudinstance                                                                                                                                                                                     |
| status                              | RESIZE                                                                                                                                                                                             |
| tags                                |                                                                                                                                                                                                    |
| task_state                          | resize_migrating                                                                                                                                                                                   |
| updated                             | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| updated_at                          | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| vm_state                            | active           
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Scaling down an instance

> [!warning]
> This option is only available for *Flex* models.
>

In case you wish to scale down your instance, you can do this by performing the same steps mentioned [above](#flavorlist) and use a different ID in the <FLAVOR-ID> field.

## Go further

[Resize a Public Cloud instance via the OVHcloud Control Panel](/pages/public_cloud/compute/resize_instance_manager)

[Resize a Public Cloud instance via Horizon](/pages/public_cloud/compute/resize_of_an_instance)

Join our [community of users](/links/community).