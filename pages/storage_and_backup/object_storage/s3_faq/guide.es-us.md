---
title: Object Storage - FAQ (EN)
excerpt: "Frequently Asked Questions on the Object Storage solution"
updated: 2024-12-11
---

## General questions

### What is OVHcloud Object Storage?

Object Storage is a family of storage solutions offering high-performance, scalable and secure storage spaces.

Object storage solutions allow static files (videos, images, web files, etc.) to be stored in an unlimited space via a public access point called the "endpoint", so that they can be used from an application or made accessible on the web. These storage spaces are accessed through a standard S3 **\*** compatible API interface for the Object Storage classes and Swift for the SWIFT Object Storage classes.

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/8xXbL3Ftgwk?si=OaRx5koocA-OyRXC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### In what use case should an object storage solution be used?

Object Storage is adapted to store unstructured data in an unlimited volume and time, for use cases such as websites, e-commerce platforms, video streaming, image libraries, analytics, backups, archives.

### What is the difference between S3 compatible object storage classes and SWIFT object storage classes?

The Object Storage classes are largely compatible with the S3 protocol and benefit from a recent, high-performance design and good bandwidth. This solution is regularly updated, and has new features.

The SWIFT storage classes are from older generations and no longer benefit from further developments. They are accessible through the OpenStack SWIFT protocol.

### How do I know which storage class is right for me?

OVHcloud offers 3 S3 compatible storage classes:

- **High Performance** for your latency and bandwidth intensive applications.
- **Standard** for your high-volume storage for which you are looking for a better price/performance ratio, such as websites, image-sharing libraries or backups.
- **Cold Archive** for your archives.

Find the description of the storage classes on [this page](/links/public-cloud/storage).

### What features are available for Object Storage classes?

The S3 Object storage classes benefit from [enhanced features to better manage your data](/links/public-cloud/object-storage).

New features are coming soon, so please check out our [public GitHub roadmap](https://github.com/orgs/ovh/projects/16/?card_filter_query=label%3A%22object+storage%22).

### Which Amazon S3 APIs are compatible with Object Storage classes?

Object Storage classes offer a wide range of S3 compatible API support. All compatible APIs are described in our [Compatibility guide](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

### Which tools are compatible with Object Storage?

Most of the tools on the market that are compatible with standard Amazon S3 protocol are compatible with OVHcloud Object Storage.

### Can Object Storage work with my back-up management tools?

Yes, Object Storage is largely compatible with S3 APIs and can be integrated with market tools such as [Veeam](/pages/storage_and_backup/object_storage/s3_veeam), [Owncloud](/pages/storage_and_backup/object_storage/s3_owncloud), [Nextcloud](/pages/storage_and_backup/object_storage/s3_nextcloud).

## Billing

### How is the service billed?

Object Storage is billed according to the storage space used, with a granularity of 1GB. To ensure readability, the price is displayed per GB/month, but the billing granularity is per GB/hour. View pricing on [this page](/links/public-cloud/prices).

### Billing example for Object Storage – 1-AZ

Assuming you use an Object Storage bucket in a **1-AZ region** and store **100 GiB** of Standard class data for the **first 10 days** of October, and later **100 TiB (102 400 GB)** of Standard class data for the **last 21 days** of October. In this case, it's easy to imagine how storage in this bucket will evolve over the month.

At the end of the month of October, you will have the following GigaByte-Hours : **Total GigaByte-Hours** = [100 GB x 10 days x (24 hours/day)] + [102 400 GB x 21 days x (24 hours/day)] = 24 000 + 51 609 600 = **51 633 600 GB-Hours**

The monthly storage cost (with 0,00000972 EUR / GB-Hour) will be: 51 633 600 GB-Hours * 0,00000972 = **501.88 EUR**

The next month, in November, data volume won't change, the monthly storage cost will be calculated as below:

**November GB-Hour**: 100 * 1024 * 720 = 73 728 000 GB-hour (there are 720 hours in November).

The monthly storage cost (with 0,00000972 EUR / GB-Hour) will be: 73 728 000 * 0,00000972= **716.63 EUR**

### Billing example for Object Storage – 3-AZ (staircase pricing policy)

In a 3-AZ region, Object Storage billing is done following a staircase approach with different volume tiers. View pricing on [this page](/links/public-cloud/prices).

Assuming you use an Object Storage bucket in a **3-AZ region** and store **100 GiB** of Standard class data for the **first 10 days** of October, and later **100 TiB (102 400 GB)** of Standard class data for the **last 21 days** of October. In this case, it's still easy to imagine how storage in this bucket will evolve over the month.

At the end of the month of October, you will have the following GigaByte-Hours : **Total GigaByte-Hours** = [100 GB x 10 days x (24 hours/day)] + [102 400 GB x 21 days x (24 hours/day)] = 24 000 + 51 609 600 = **51 633 600 GB-Hours**

This usage volume will cross two different volume tiers (through the staircase pricing policy described before). The monthly storage cost will be calculated as below:

- First volume tier from **0 GB-Hours to (50 * 1024 * 730 = 37 376 000 GB-Hours)**, pricing for this tier : 0.00001917 / GB-Hour (about 14 EUR/TB/month).
- Second volume tier from **37 376 001 GB-Hours to (500 * 1024 * 730 = 373 760 000 GB-Hours)**, pricing for this tier : 0.00001712 / GB-Hour (about 12.5 EUR/TB/month).

The monthly storage cost will be: 37 376 000 * 0.00001917 + (51 633 600 - 37 376 000) * 0.00001712 = 716.49792 + 244.090112 = **960.59 EUR**

The next month, in November, data volume won't change, the monthly storage cost will be calculated as below:

**November GB-Hour**: 100 * 1024 * 720 = **73 728 000 GB-Hours** (there are 720 hours in November).

The monthly storage cost will be: 37 376 000 * 0.00001917 + (73 728 000 - 37 376 000) * 0.00001712 = 716.49792 + 622,34624 = **1338,84 EUR**

## Access & Security

### Which APIs should I use to access storage solutions?

We designed Object Storage storage classes to be **compatible with S3** API, considered a benchmark in the object storage market. You can use Object Storage with most data management tools via endpoints defined by region.

Get your S3 access keys and access the various storage classes via the command line using AWS-CLI, s3cmd or other commands.

The list of endpoints is available in the following guide: [Object Storage endpoints and geo-availability](/pages/storage_and_backup/object_storage/s3_location).

### Can you access the service with a private network (vRack)?

Object Storage endpoints are available via the public network. The object storage class is not available on the private network.

### Can I manage multiple user profiles?

You can manage multiple user profiles with Object Storage Policies. Read our [Identity and Access Management](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) guide.

### How do I configure access rights by object or bucket?

Access rights can be configured per user profile and per object. Read our [Identity and Access Management](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) guide.

It is not yet possible to configure access rights per bucket.

### Can I encrypt my data?

You can encrypt your data in two ways:

- **SSE-C (Server-Side Encryption with Customer Keys)**: You can provide and manage your own encryption keys, giving you complete control over your data security. This option is particularly well-suited to organizations with specific compliance and data security needs, as it allows for exclusive management of encryption keys.
- **SSE-OMK (Server-Side Encryption with OVHcloud-Managed Keys)**: Simplifies the encryption process by using keys managed by OVHcloud. This method is ideal for customers who want a robust encryption solution without the complexities of key management.

When you updload an object, Object Storage uses the encryption key you provide to apply AES-256 encryption to your data. When you download an object, you must provide the same encryption key as part of your request. Object Storage first checks that the encryption key you provided matches, then decrypts the object before returning the object data to you.

You can find more information in the following guide: [Encrypt your server-side objects with SSE-C or SSE-OMK](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c).

### How do I protect my backups?

We recommend protecting your backups with immutability, a feature available via the Object Lock API. This feature is not available for the Cold Archive storage class.

Object locking is a feature that allows you to store objects using a *WriteOnce, ReadMany (WORM)* model, which can be used in scenarios where it is imperative that data is not modified or deleted after it has been written.

You can find more information in our [Object Lock Immutability Management (WORM)](/pages/storage_and_backup/object_storage/s3_managing_object_lock) guide.

### How do I temporarily share access to an object via a URL?

By default, all objects are private. This means that only the owner of the objects is authorized to access them. However, objects can be shared temporarily with other people using a pre-assigned URL to grant time-limited permission to download objects, without having to reconfigure permissions.

Please note that anyone with access to the pre-assigned URL can download your item. We therefore recommend that you protect it properly.

Make sure you have the necessary permissions by using the credentials of the object owner (by default, the bucket owner).

To generate a presigned URL to share an object using the AWS CLI, you can use the `presign` command:

```bash
$ aws s3 presign s3://<bucket>/<key>
```

- Example:

```bash
$ aws s3 presign s3://gribs/grib-file
https://s3.gra.perf.cloud.ovh.net/gribs/grib-file?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5ba255c12baf43be9d00289070faf936%2F20230221%2Fgra%2Fs3%2Faws4_request&X-Amz-Date=20230221T142726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a43dc63c483d469f6f747ef041a434145b3661541e95e4334eee3a96e059e15e
```

You can also set a link expiration via the `--expire` option. The command below sets an expiration after 24 hours (the duration is in seconds):

```bash
aws s3 presign s3://<bucket>/<key> --expires-in 86400
```

## Bandwidth

### What is the bandwidth?

Bandwidth is shared and not guaranteed. We offer a maximum of 1 Gbps/connection in upload and download.

### How is bandwidth billed?

Prices are set and displayed on [the OVHcloud website](/links/public-cloud/prices-object-storage).

An OVHcloud server is a server operated for an OVHcloud service, such as a server from the Bare Metal Cloud, Public Cloud or Hosted Private Cloud ranges (Dedicated Server / VPS / Public Cloud / Hosted Private Cloud / So You Start / Kimsufi).

Incoming internal traffic is the data downloaded from an OVHcloud server to an OVHcloud server.

Outgoing internal traffic is data downloaded from an OVHcloud server to an OVHcloud server.

Incoming public traffic is the data uploaded from the internet to an OVHcloud server.

Outgoing public traffic is the data downloaded from an OVHcloud server to the internet.

Some traffic/public bandwidth limitations may exist for a given OVHcloud service and/or a given region. We recommend referring to the specific documentation of the OVHcloud service you are using for more details.

## Availability

### What level of availability can I achieve with Object Storage?

When the service is unavailable or experiences issues for which OVHcloud may be held responsible, you can contact OVHcloud teams and open a support ticket from your OVHcloud Control Panel.

OVHcloud is committed to ensuring the service levels related to service availability, as described in the [terms and conditions viewable online](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/7daede7-Conditions_particulieres_OVH_Stack-IE-16.0.pdf).

## Uploading/downloading data

### How do I replicate my data from one region to another?

You can choose to synchronize your data from one region to another using rClone. Browse our guides for the Object Storage solution you have chosen:

- [Use Object Storage with rClone](/pages/storage_and_backup/object_storage/s3_rclone)
- [Use Swift Object Storage with rclone](/pages/storage_and_backup/object_storage/pcs_sync_rclone_object_storage)

You can also use the asynchronous replication feature available on Object Storage buckets. Follow [this guide](/pages/storage_and_backup/object_storage/s3_asynchronous_replication) to get more details about this feature.

### Is it possible to manage data lifecycles?

Lifecycle options are not yet available. Please follow our [public GitHub roadmap](https://github.com/orgs/ovh/projects/16/?card_filter_query=label%3A%22object+storage%22) to be informed of their release.

## Performance

### How do I upload large volumes of data?

To upload large volumes of data, we recommend that you parallelize the connections (*multithread upload*). Multiple requests are in progress in parallel, and the bandwidth is multiplied (1 Gbps per connection). You can find more details on the methodology in the following guide: [Optimize the sending of your files to Object Storage](/pages/storage_and_backup/object_storage/s3_optimise_the_sending_of_your_files).

More generally, there are several methods that allow you to maximize your upload and download performance on our Object Storage. You can know more about those optimizations in the following guide: [Object Storage - Optimising Performance](/pages/storage_and_backup/object_storage/s3_performance_optimization).

### What is the performance difference between the High Performance and Standard Performance storage classes?

The High Performance class is adapted to AI or analytics use cases, it is built to bring performance through its design and the use of NVMe SSD disks. It is adapted to use cases that require high read/write speeds on high volumes of data. Performance tests are available on the Cloud Mercato website: 

- [OVHcloud High performance Object Storage benchmark](https://projector.cloud-mercato.com/projects/ovh-high-perf-object-storage-benchmark){.external}
- [OVHcloud Standard Object Storage benchmark](https://projector.cloud-mercato.com/projects/ovhcloud-standard-object-storage-benchmark){.external}

### What is the available bandwidth for upload and download?

The maximum bandwidth is 1 Gbps per connection.

## Go further

Join our [community of users](/links/community).

**\***: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
