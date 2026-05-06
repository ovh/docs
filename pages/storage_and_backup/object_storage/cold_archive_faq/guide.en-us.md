---
title: Cold Archive - FAQ
excerpt: Frequently Asked Questions on the Cold Archive solution
updated: 2026-01-19
---

## Clarification on Cold Archive options

### What are the two ways of consuming Cold Archive?

The two ways of consuming Cold Archive are:

- **Cold Archive v1, a standalone bucket-granular Cold Archive solution (legacy offering)**, and 
- **Cold Archive v2, an Object Storage class/tier that allows archiving individual objects within a container**.

Although there are two underlying ways of consuming Cold Archive, we continue to refer to the solution as 'Cold Archive' in all customer-facing materials, including the product page and customer experience, without explicitly mentioning 'v1' or 'v2'. 

### What is Cold Archive v1?

Cold Archive v1 is a standalone, bucket-granular Cold Archive solution **introduced in 2023** that **archives entire buckets** onto physical tapes. This method is still available for customers that were using it before November 2025, but it will no longer be available for new customers through the OVHcloud Control Panel with no impact on existing customers. APIs will continue to work and data will of course remain secure and available at any moment: we only modify the way users will access and manage objects.

### What is Cold Archive v2?

Starting **November 2025**, Cold Archive v2 was introduced as an Object Storage class/tier that **allows archiving individual objects within an S3<sup>1</sup>-compatible bucket**. This feature is now directly available in the Object Storage dashboard, where you can upload objects in the Cold Archive class or use lifecycle transitions to move data to the Cold Archive class. As of today, Cold Archive v2 is only available from the Paris 3-AZ region (eu-west-par). Know more about Object Storage geoavailability on [this page](/pages/storage_and_backup/object_storage/s3_location).

### What are the main differences between Cold Archive v1 and v2?

The main difference is that Cold Archive v1 archives **entire buckets**, while Cold Archive v2 allows **archiving individual objects** within a container. 
From a restoration perspective, the granularity is also different: on one hand with Cold Archive v1, restoration is done for the entire bucket (details [here](/pages/storage_and_backup/object_storage/cold_archive_overview)), whereas for Cold Archive v2, the restoration is available for individual objects (details [here](/pages/storage_and_backup/object_storage/s3_restoring_objects)).

#### Summary - Cold Archive v1 and Cold Archive v2

| Topic | Cold Archive v1 | Cold Archive v2 |
| ------ | ------ | ------ |
| Presentation | standalone, bucket-granular Cold Archive solution introduced in 2023 that archives entire buckets onto physical tapes | new Object Storage class/tier that allows archiving individual objects within an S3-compatible bucket |
| Granularity | bucket level: whole bucket is archived/restored | object level: individual objects can be archived/restored |
| Availability | accessible through rbx-archive region only | currently eu-west-par (Paris, FR) only |
| S3 features compatibility | limited, details can be found [here](/pages/storage_and_backup/object_storage/cold_archive_getting_started) | full (asynchronous replication, lifecycle management, versioning, object lock and many more) |
| Billing details | Standard Object Storage temporary storage - early deletion fees (180-day minimum storage duration) - restoration fees - minimum 1 TiB per bucket - see [pricing](/links/public-cloud/prices-old-prices) | early deletion fees (180-day minimum storage duration) - restoration fees - see [pricing](/links/public-cloud/prices) |
| Status | no longer available for new customers since November 2025 - long term support for existing customers | available in eu-west-par (Paris, FR) since November 2025 |

### Is Cold Archive v1 still available for new customers?

Since  November 2025, Cold Archive v1 is no longer available for new customers through the OVHcloud Control Panel despite still in production for existing customers.
In other words, prior to November 2025, if a Public Cloud project had at least one Cold Archive container, the Cold Archive entry in the OVHcloud Control Panel remains available. 
Finally, APIs continue to work and data will of course remain secure and available at any moment: we only modify the way users will access and manage objects.

### How do I access Cold Archive v2?

Cold Archive v2 is directly available in the Object Storage dashboard for a given Object Storage general-purpose bucket, where you can upload objects in the Cold Archive class or use lifecycle transitions to move data to the Cold Archive class.
**As of today, Cold Archive v2 is only available from the Paris 3-AZ region (eu-west-par).**

Users can also manage their Cold Archive objects using S3 or OVHcloud APIs. Find more details in the [Object Storage getting started guide](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).

### What are the benefits of using Cold Archive v2 over v1?

Cold Archive v2 provides more flexibility and granularity, allowing you to archive individual objects within a container, rather than entire buckets. 

### Can I migrate my existing Cold Archive v1 buckets to Cold Archive v2?

No, as the archiving process is different and managed through a different granularity, migration from Cold Archive v1 to Cold Archive v2 is not possible.

### Are there any differences in pricing between Cold Archive v1 and v2?

Yes. First of all, on both options, early deletion fee (associated to a 180-day minimum storage duration) and retrieval/restoration fee are applied. However, data storage and retrieval fees are different on Cold Archive v1 and v2. For official prices, see [this page](/links/public-cloud/prices).

## General Information

### Which use cases are suitable for the Cold Archive storage service?

The Cold Archive storage class is an Object Storage service adapted for long-term storage. It is suitable for the following use cases:

- Long-term storage for legal reasons.
- Strengthening resilience plans, implementing a 3+2+1 strategy.
- Large storage of video/photo media.

This storage class, easily accessible via S3-compatible API, is recommended if your data is stored for more than 6 months without any particular need for restoration (less than one restoration per year).

Its design is highly resilient (4 datacentres), low cost, sustainable (the lifespan of a *tape* is 16 years). However, you will need to wait 48 hours for a request to restore your data.

Find an overview of the solution on [this page](/pages/storage_and_backup/object_storage/cold_archive_overview).

### How do I use the service for the first time?

To use the service, you will need to meet the following requirements:

- You must have a [Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) in your OVHcloud account. 
- You must be logged in to your [OVHcloud Control Panel](/links/manager).
- You must have created an [Object Storage user](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).

### What features are available with the Cold Archive storage class?

All the features of our Object Storage storage classes are supported by Cold Archive (both v1 and v2). You can find the list of functions on [this page](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

Few operations are available specifically for this storage class: archiving (on Cold Archive v1), restoring (on Cold Archive v1 and v2), container status (on Cold Archive v1 and v2), deleting the archive (on Cold Archive v1).

## Cold Archive v1 (legacy offering) - Archiving and restoration

### How do I download the data into a container?

You create a container, better known as a bucket, in Object Storage Standard.

Please use the endpoint corresponding to this service: [https://s3.rbx-archive.io.cloud.ovh.net/](https://s3.rbx-archive.io.cloud.ovh.net/).

After it is created, a bucket is in read/write state.

You can then upload files to this container via the S3-compatible API, CLI or SDK.

### How do I archive a container?

You archive the container from the OVHcloud Control Panel, via the S3-compatible API, CLI or SDK.

In the OVHcloud Control Panel, the action is carried out by activating the `Archive`{.action} button.

After this request, the bucket is not yet archived. Archiving to tape will take some time. From this command until a restore, the bucket cannot accept any read or write requests on the objects (listing objects is always allowed).

The API commands are described in [our documentation](/pages/storage_and_backup/object_storage/cold_archive_getting_started).

### How do I restore an archive?

You can restore an archive to make the data available for reading in the original Object Storage container. This action does not delete the archive on the tapes.

In the user interface, click `Restore an archive`{.action}.

After this request, the bucket is in `restoring` status for the time it takes to restore. This can last up to 48 hours.

Once the restoration is complete, the container is in status `restored`. Access to objects will be read-only (write is not allowed). Objects are available for reading for 30 days. After this period, the container is again in the `archived` status and the objects are no longer accessible for reading.

### How do I delete an archive?

In the user interface, you delete your archive by selecting the `Empty archive`{.action} buttons.

After this request, the objects in the bucket are not yet deleted.<br>
Deleting objects will take some time.<br>
Once the objects have been deleted, the bucket can be deleted by selecting `Delete container`{.action}.

> [!alert]
> This command deletes everything on tapes and can not be canceled.

You can find the API command description in our guide on [Getting started with Cold Archive](/pages/storage_and_backup/object_storage/cold_archive_getting_started).

### How do I view the contents of my archive?

The metadata is available in read mode and not billed. You can view them at any point in the lifecycle, even when the container is archived.

### Is there a volume limitation? 

A container cannot be archived if it exceeds the size of 100 TB.

We have no limit on the number of objects. Having a lot of small objects will impact archiving/recovery time.

For an equivalent volume, a bucket with many small objects will take longer to archive/restore than a bucket with large objects.

### How long does it take to archive and restore a container?

The time it takes to archive and restore depends on the volume of data and the number of objects.

The restore time depends on the volume of data and the number of objects.

For a volume of a few TB, this may take a few minutes or a few hours.

This is why the SLA is at 48h although in reality the time can sometimes be much shorter.

## Data volume download

### Can I archive my data from another cloud provider?

Yes, you can use the Cold Archive storage class to archive your data which has been backed-up with another cloud provider.

For example, you install a server and set Rclone to synchronize your files from an Object Storage (third-party cloud provider) to OVHcloud Object Storage, following this guide: [Object Storage - Use Object Storage with Rclone](/pages/storage_and_backup/object_storage/s3_rclone).

### How do I download large volumes?

The Object Storage service is designed to receive a high volume of data.

Since the connection is limited to 1Gbps, you must define a multipart download with 10 connections in parallel.

To download 8PB for example, it will take around 15 days with an available bandwidth of 5Gbps.

### Is it possible to receive a physical copy of the archive?

We do not offer this service. Archives are stored in *off-line* magnetic tapes, available in libraries located in 4 datacentres based in France, and dedicated to archive storage.

## Billing

### How is the Cold Archive service billed?

Billing is done on a volume basis in GiB per hour.

#### Legacy offering aka Cold Archive v1
During the download phase, your storage volumes are billed at the price of the **Object Storage - Standard** class.

After archiving the container (*put-archive*), your data volumes are billed at the price of the **Cold Archive** storage class.

Billing stops when the archive is deleted (*delete-ovh-archive*).

A 7% discount is applied for a data volume greater than 3 PB.

The minimum amount billed for archiving is 1 TiB. Even if the total volumetry of the bucket is below 1 TiB, it will be billed for 1 TiB.

#### Cold Archive v2

When uploading objects in the Cold Archive class/tier, objects are billed at the Cold Archive rate available on [this page](/links/public-cloud/prices).
Cold Archive v2 is billed from the first Byte.

### Is there a minimum storage duration?

Yes, it refers to the minimum amount of time that an object must be stored in a particular storage class. The minimum storage duration for Cold Archive is 180 days. 

In case of early deletion,using `delete-ovh-archive`{.action} on Cold Archive v1 or `delete-object`{action} requests on Cold Archive v2, a pro-rated fee equal to the remaining days is applied. On Cold Archive v2, be careful with non-versioned buckets, if the object is overwritten, this will be considered as a deletion of the current object version and the pro-rated fee will be applied too.

### Billing examples for Cold Archive v1 (legacy offering)

*For both examples we will use monthly pricing estimations but please note that Object Storage is billed according to the storage space used, with a granularity of 1GiB. To ensure readability, the price is displayed per GiB/month, but the billing granularity is per GiB/hour.*

#### Use case 1

- Data volume: 10 TiB. 
- I upload my data to Standard Object Storage (temporary Object Storage).
- 7 days after uploading my data, I start the archiving process (*put-archive*).
- After 8 months I delete my archive.
- Billing: 
    - (€7 x 7/30 + €1.3 x 21/30) x 10 TiB = €25 for the first month
    - then for 7 months: 1.3 € x 10 TiB = 13 € /month

#### Use case 2 with early deletion (before 180 days)

- Data volume: 10 TiB. 
- I upload my data to Standard Object Storage (temporary Object Storage).
- 7 days after uploading my data, I start the archiving process (*put-archive*).
- After 4 months I delete my archive.
- Billing: 
    - (€7 x 7/30 + €1.3 x 21/30) x 10 TiB = €25 for the first month
    - the following months: 1.3 € x 10 TiB = 13 € /month
    - the last month (month 4, i.e. 2 months before the end of the commitment period): €1.3 x 10 TiB = €13 + 2 months x €1.3 x 10 TiB = €39

### What is the bandwidth pricing?

Ingress and egress are free at OVHcloud with our Object Storage services.

## Durability

### Why did OVHcloud choose magnetic tape as its storage medium?

Magnetic tapes are built to last for several decades (unlike an average of five years for modern disks). Cartridges do not consume power except during read and write phases. This saves more than 95% of power compared to a similar array.

### What is the tape management policy?

OVHcloud offers a managed service. OVHcloud takes care of the replacement of magnetic tapes when they reach the end of their lifecycle or generation.

## Security

### Can I protect my data in transit?

To protect data against theft, the connection between a third-party object storage (*from*) and OVHcloud Object Storage (*to*) is encrypted and protected by https.

In addition, we recommend that you encrypt your data before sending it. You can use multiple available encryption options described [here](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c).

### Is data encrypted?

Yes, data is encrypted at the source on the Object Storage server.

## Identity and role management on Cold Archive v1

### What roles can be set to control access to Object Storage?

You have 4 levels of credentials:

- The admin user (commonly known as *NIC admin*) 
- The billing user (commonly known as *NIC billing*)
- The OpenStack user
- An Object Storage user

| ID | Role |
| --- | --- |
| NIC admin | Administrator<br>Billing |
| NIC billing | Billing |
| NIC technical | Administrator |
| OpenStack user | (1) Administrator<br>(2) Object Storage |
| Object Storage user (Object Storage credentials) | 4 roles<br>(1) Administrator<br>(2) Read only<br>(3) Read<br>(4) Deny<br><br>Only the administrator role has access to tiering actions (archive, delete, restore) |

## Resilience

### What is the resilience level of the data? 

The Cold Archive storage service is designed around 4 datacentres located more than 100 km from each other in France.

The redundancy of the data is done thanks to an Erasure Coding mechanism. Data can be recovered after the complete loss of one datacentre and a hardware failure in a second datacentre, providing an unparalleled level of resilience on the market.

### What is the SLA of the service?

The service’s SLA is available on [this page](/links/terms-conditions-contracts).

On Cold Archive v1 (legacy offering), it corresponds to the availability SLA of the Object Storage service (RBX-archive endpoint) and the associated features (S3-compatible API and tiering).

## Go further

Discover our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide comments, and interact directly with the team that designs our storage and backup services.

Join our [community of users](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
