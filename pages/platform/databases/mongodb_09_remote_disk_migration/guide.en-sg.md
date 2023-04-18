---
title: MongoDB - Remote disk migration information
excerpt: Everything you need to know about the remote disk migration 
updated: 2023-02-09
---

**Last updated 9<sup>th</sup> February 2023**

## Objective

This guide gives you more information about the disk migration planned from the 13th to the 26th of March. You will be able to learn more about why and how we operate this change. You also will find out what are the impact on your MongoDB service.

## Requirements

- Nothing is required from you, everything is handled by the OVHcloud operations team.

## Background

Starting Tuesday 7th of Febuary, all MongoDB services are created with [block storage technology](https://www.ovhcloud.com/en-sg/public-cloud/block-storage/). This means your data will be stored on a remote disk instead of the local SSD of the VM. This change only impacts new services. Existing services are still using their local disk until we migrate it. This migration will take place between the 13th and the 26th of March. 

## Why are we changing the storage technology ?

### Flexibility

One of the main reasons we are moving away from local SSD disk is to allow more flexibility in disk size. Many customers are asking for more flexibility in disk size and decoupling compute and storage. Remote disk bring this flexibility, you will soon be able to accurately select your disk size, without having to upgrade your computation power.

### Homogeneity

MongoDB is the only Public Cloud Database engine storing data on local SSD, making the whole offer heterogeneous. This migration comes in line with our goal to make the whole offer as coherent as possible.

## What are the changes ?

### Disk technology

As mentioned above, OVHcloud was previously using local SSD of the VM in order to store the data held by the MongoDB engine. We will now use remote disk using [block storage technology](https://www.ovhcloud.com/en-sg/public-cloud/block-storage/). We will use `High Speed` technology. You will be able to check the technology used in the storage properties of your service, from the OVHcloud Control Panel.

### Disk space

This migration also means we will change the disk space available to store data. For the same price you will have access to more effective storage. You can find below the comparison between what you currently have access to and what you will have access to after the migration, depending on the service flavor.

| Flavor  | Local SSD (before migration) | Remote disk (after migration) |
|---------|------------------------------|-------------------------------|
| db1-2   |              25GB            |               40GB            |
| db1-4   |              50GB            |               80GB            |
| db1-7   |              50GB            |              160GB            |
| db1-15  |              100GB           |              320GB            |
| db1-30  |              200GB           |              640GB            |
| db1-60  |              400GB           |              1280GB           |
| db1-120 |              800GB           |              2560GB           |

On top of that, prior to the migration the displayed disk space is shared with the system, meaning it would not be equal to the effective disk space available for data storage. With remote disk, the displayed space amount is the effective disk space available for data storage.

## Migration

### Migration imeline

- 2023/02/07 : All new services are remote disk only.
- From 2023/02/08 to 2023/02/12 : An email is sent to the owners of impacted services.
- From 2023/02/08 to 2023/02/12 : A migration maintenance task available to the customer.
- From 2023/03/13 to 2023/03/26 : Migration of services. To get the exact date of your migration, check the maintenances task of your service.

On migration day, an email will be sent to the concerned customers to inform them about the successful migration.

### Migration steps

The migration of your service will be done in 6 major steps:

1. Stopping MongoDB process
2. Attaching a remote disk to the existing VM
3. Setup and encryption of the new remote disk
4. Copying data from local SSD to the remote disk
5. Starting MongoDB process
6. Mailing to warn your service has been successfully migrated

For `Business` and `Enterprise` plans, nodes are migrated one after the other, allowing your application to still have access to the data.
However, `Essential` plans are composed of only one node, meaning a service interruption is to be expected.

## FAQ

#### Is a service interruption expected?

It depends of the plan you are using:

- `Business` and `Enterprise` : You will not experience a service interruption. We are going to migrate your data one node at a time, making it seamless for the app connected to your MongoDB.
- `Essentials` : You will experience a service interruption during a few minutes, corresponding to the time it takes to migrate your data from the local storage to the remote one.

#### Is data loss expected?

No, all your data will be copied to the new storage without any loss.

#### Will data encryption at rest change?

No, we will still be using [LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) to encrypt your data at rest.

#### Will there be performance changes?

Maybe. The new storage does not have the same performance as using the local SSD disk of the VM. The overall performance of your database is dependent on many parameters, mainly but not limited to your workload type and the specification of the hardware running your database. With this change in disk technology, we are changing a part of the hardware running the database, so you might see performance change when using your database.

#### How to know if my service is impacted?

If your service has been created before the 7th of Febuary 2023, your service uses local disk storage and will be migrated. You can also check the type of storage your service is using, reading your service's storage properties in the OVHcloud Control Panel. The value `local SSD` means you have not been migrated yet and you will have a scheduled maintenance for the migration.

#### Does the price change?

No, the price will still be the same for more effective storage.

#### What should I do?

Nothing. Everything is handled by the OVHcloud operations team. Your service will be migrated without you noticing anything. 

#### Will I lose effective disk space?

No, you will actually gain effective disk space. 

#### When will my service be migrated?

All concerned services are going to be migrated between the 13th and the 26th of March. You can find out the exact time of migration in you service's maintenance window in the OVHcloud Control Panel. You can also follow the migration via the [OVHcloud status page of the migration](https://public-cloud.status-ovhcloud.com/incidents/4wbsn6c6ys85).

#### Can I change the migration date?

Yes, you can manualy trigger the maintenance to a more convinient time for you.

#### Can I refuse the migration?

No, this migration is mandatory.

#### Can I still order local SSD services?

No, since the 7th of febuary 2023 only remote disk storage is available with MongoDB services and in general with Public Cloud Databases.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.
Are you on Discord? Connect to our channel at [https://discord.gg/ovhcloud](https://discord.gg/ovhcloud) and interact directly with the team that builds our databases service!
