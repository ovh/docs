---
title: MongoDB - Remote disk migration informations
excerpt: Everything you need to know about the remote disk migration 
slug: mongodb/remote-disk-migration
section: MongoDB - Guides
order: 090
---

**Last updated 9<sup>th</sup> Febuary 2023**

## Objective

This guide gives you more information about the disk migration planned from the 13th to the 26th of March. You will be able to learn more about why and how we operate this change. Moreover you will find out what are the impact on your MongoDB service.

## Requirements

- Nothing is required from you, everything is handled by OVHcloud operation team

## Contexte
Starting Tuesday 7th of Febuary all MongoDB services created are created with [block storage technologie](https://www.ovhcloud.com/en/public-cloud/block-storage/). Meaning your data will be stored on a remote disk instead of the local ssd of the VM. This change only impact new services, existing services are still using their local disk until we migrate it. This migration will take place between the 13th and the 26th of March. 

## Why are we changing storage technologie ?

### Flexibility
One of the main reason we are moving away from local ssd disk is to allow more flexibility in disk size. A lot of you are asking for more flexibility in disk size and decoupling compute and storage. Remote disk bring this flexibility, you will soon be able to precisely select your disk size, without having to upgrade your computation power.

### Homogeneity
MongoDB was the only public cloud database engine storing data on local ssd, making the whole offer heterogeneous. This migration come in line with our goal to make the whole offer as coherent as possible.

## What are the changes ?

### Disk technology
As said before we were previously using local ssd of the VM in order to store the data hold by the MongoDB. We will now use remote disk using [block storage technologie](https://www.ovhcloud.com/en/public-cloud/block-storage/). We will use ##High Speed## technologie. You will be able to check the technologie used in ##storage## property in the OVHcloud manager page of your service.

### Disk space
With the migration we will change the disk space available to store data. While paying the same price you will have access to more effective storage. You can find bellow the comparaison between what you currently have access to and what you will have access to after the migration depending on the service flavor.

| Flavor  | Local ssd (before migration) | Remote disk (after migration) |
|---------|------------------------------|-------------------------------|
| db1-2   |              25              |               40              |
| db1-4   |              50              |               80              |
| db1-7   |              50              |              160              |
| db1-15  |              100             |              320              |
| db1-30  |              200             |              640              |
| db1-60  |              400             |              1280             |
| db1-120 |              800             |              2560             |

Also, before the migration the displayed disk space was shared with the system, meaning it would not be equal to the effective disk space available for data storage. With remote disk, the space amount displayed is the effective disk space available for data storage.

## Migration
### Timeline
07/02 : All new service are remote disk only.
08/02 - 12/02 : Mailing the owner of impacted services.
08/02 - 12/02 : Migration maintenance task available to the customer.
13/03 - 26/03 : Migration of services, to get the exact date of your migration check the maintenances task of your service.
Migration day : You will receive a mail notifying you your service have been migrated.

### Steps
The migration of your service will be done in 6 major steps:
1. Stopping MongoDB process
2. Attaching a remote disk to the existing VM
3. Setup and encryption of the new remote disk
4. Copying data from local ssd to the remote disk
5. Starting MongoDB process
6. Mailing to warn your service has been successfully migrated

For ##business## and ##enterprise## plans, nodes are migrated one after the other allowing for your application to still have access to the data.
However, ##essential## plan are composed of only one node, meaning a service intureption is to be expected.
## FAQ

### Is there service interuption expected ?
It depends of the plan you are using. 
##business## and ##enterprise## : You will NOT experience a service interuption, we are going to migrate your data one node at a time, making it seemless for the app connected to your MongoDB.
##essentials## : You will experience a service interuption of a few minute, it correspond to the time it takes to migrate your data from the local storage to the remote one.

### Is data loss expected ?
No, all your data will be copied to the new storage without any loss.

### Is there change to at rest data encryption ?
No, we will still be using [LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) to encrypt your data at rest.

### Is there going to be a performance change ?
Maybe, the new storage does not have the same performance as using the local ssd disk of the VM. The overall performance of your database is dependant of many parameters, mainly but not limited to your workload type and the specification of the hardware running your database. With changing the disk technologie we're changing a part of the hardware running the database, thus you might see performance change when using your database.

### How to know if my service is impacted ?
If your service has been created before the 7th of febuary 2023 your service use local disk storage and will be migrated. You can also check the type of storage your service is using, you can look at the ##storage## property in the OVHcloud manager page of your service. The value ##Local SSD## would mean you have not been migrated yet, you should have a maintenace scheduled for the migration.

### Does the price change ?
No, the price will still be the same for more effective storage.

### What do I have to do ?
Nothing, everything is handled by OVHcloud operation team, your service will be migrated without you noticing anything. 

### Will I lose effective disk space ?
No, in fact you will gain effective disk space. 

### When my service will be migrated ?
All services impacted are going to be migrated between the 13th and the 26th of March. You can find out the exact time of migration in the maintenance window of your service OVHcloud manager page. You can also follow the migration via the [OVHcloud status page of the migration](https://public-cloud.status-ovhcloud.com/incidents/4wbsn6c6ys85).

### Can I change the migration date ?
Yes, you can manualy trigger the maintenance to a more convinient time for you.

### Can I block the migration ?
No, this migration is mandatory.

### Can I still order local ssd services ?
No, since the 7th of febuary 2023 only remote disk storage is available with MongoDB services and in general with public cloud databases.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.
Are you on Discord? Connect to our channel at [https://discord.gg/ovhcloud](https://discord.gg/ovhcloud) and interact directly with the team that builds our databases service!
