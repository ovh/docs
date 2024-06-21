---
title: Object Storage - FAQ (EN)
excerpt: "Frequently Asked Questions on the Object Storage solution"
updated: 2024-06-21
---

## General questions

### What is OVHcloud Object Storage?

Object Storage is a family of storage solutions offering high-performance, scalable and secure storage spaces.

Object storage solutions allow static files (videos, images, web files, etc.) to be stored in an unlimited space via a public access point called the "endpoint", so that they can be used from an application or made accessible on the web. These storage spaces are accessed through a standard S3 API interface for the S3 Object Storage classes and Swift for the SWIFT Object Storage classes.

### In what use case should an object storage solution be used?

Object Storage is adapted to store unstructured data in an unlimited volume and time, for use cases such as websites, e-commerce platforms, video streaming, image libraries, analytics, backups, archives.

### What is the difference between S3 object storage classes and SWIFT object storage classes?

The Object Storage S3 storage classes are largely compatible with the S3 protocol and benefit from a recent, high-performance design and good bandwidth. This solution is regularly updated, and has new features.

The SWIFT storage classes are from older generations and no longer benefit from further developments. They are accessible through the OpenStack SWIFT protocol.

### How do I know which storage class is right for me?

OVHcloud offers 3 S3 storage classes:

- **High Performance** for your latency and bandwidth intensive applications.
- **Standard** for your high-volume storage for which you are looking for a better price/performance ratio, such as websites, image-sharing libraries or backups.
- **Cold Archive** for your archives.

Find the description of the storage classes on [this page](https://www.ovhcloud.com/de/public-cloud/storage/).

### What features are available for S3 storage classes?

The S3 Object storage classes benefit from [enhanced features to better manage your data](https://www.ovhcloud.com/de/public-cloud/object-storage/#features).

New features are coming soon, so please check out our [public GitHub roadmap](https://github.com/orgs/ovh/projects/16/?card_filter_query=label%3A%22object+storage%22).

### Which S3 APIs are compatible with S3 Object Storage classes?

S3 object storage classes offer a wide range of S3 API support. All compatible APIs are described in our [S3 compatibility guide](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

### Which tools are compatible with S3 Object Storage?

Most of the tools on the market that are compatible with standard S3 storage are compatible with OVHcloud S3 Object Storage.

### Can S3 Object Storage work with my back-up management tools?

Yes, S3 Object Storage is largely compatible with S3 APIs and can be integrated with market tools such as [Veeam](/pages/storage_and_backup/object_storage/s3_veeam), [Owncloud](/pages/storage_and_backup/object_storage/s3_owncloud), [Nextcloud](/pages/storage_and_backup/object_storage/s3_nextcloud).

### How is the service billed?

Object Storage is billed according to the storage space used, with a granularity of 1GB. To ensure readability, the price is displayed per GB/month, but the billing granularity is per GB/hour, considering that there are on average 720 hours in a month. View pricing on [this page](https://www.ovhcloud.com/de/public-cloud/prices/).

## Access & Security

### Which APIs should I use to access storage solutions?

We designed S3 storage classes to be **compatible with the S3** API, considered a benchmark in the object storage market. You can use Object Storage with most data management tools via endpoints defined by region.

Get your S3 access keys and access the various storage classes via the command line using AWS-CLI, s3cmd or other commands.

The list of endpoints is available in the following guide: [Object Storage endpoints and geo-availability](/pages/storage_and_backup/object_storage/s3_location).

### Can you access the service with a private network (vRack)?

Object Storage endpoints are available via the public network. The object storage class is not available on the private network.

### Can I manage multiple user profiles?

You can manage multiple user profiles with S3 Policies. Read our [Identity and Access Management](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) guide.

### How do I configure access rights by object or bucket?

Access rights can be configured per user profile and per object. Read our [Identity and Access Management](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) guide.

It is not yet possible to configure access rights per bucket.

### Can I encrypt my data?

Using server-side encryption with client-provided encryption keys (SSE-C) allows you to define your own encryption keys.

When you updload an object, S3 Object Storage uses the encryption key you provide to apply AES-256 encryption to your data. When you download an object, you must provide the same encryption key as part of your request. S3 Object Storage first checks that the encryption key you provided matches, then decrypts the object before returning the object data to you.

You can find more information in the following guide: [Encrypt your server-side objects with SSE-C](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c).

### How do I protect my backups?

We recommend protecting your backups with immutability, a feature available via the S3 Object Lock API. This feature is not available for the Cold Archive storage class.

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

Prices are set and displayed on [the OVHcloud website](https://www.ovhcloud.com/de/public-cloud/prices/#439).

An OVHcloud server is a server operated for an OVHcloud service, such as a server from the Bare Metal Cloud, Public Cloud or Hosted Private Cloud ranges (Dedicated Server / VPS / Public Cloud / Hosted Private Cloud / So You Start / Kimsufi).

Incoming internal traffic is the data downloaded from an OVHcloud server to an OVHcloud server.

Outgoing internal traffic is data downloaded from an OVHcloud server to an OVHcloud server.

Incoming public traffic is the data uploaded from the internet to an OVHcloud server.

Outgoing public traffic is the data downloaded from an OVHcloud server to the internet.

## Availability

### What level of availability can I achieve with Object Storage?

When the service is unavailable or experiences issues for which OVHcloud may be held responsible, you can contact OVHcloud teams and open a support ticket from your OVHcloud Control Panel.

OVHcloud is committed to ensuring the service levels related to service availability, as described in the [terms and conditions viewable online](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/7daede7-Conditions_particulieres_OVH_Stack-IE-16.0.pdf).

## Uploading/downloading data

### How do I replicate my data from one region to another?

You can choose to synchronize your data from one region to another using rClone. Browse our guides for the Object Storage solution you have chosen:

- [Use S3 Object Storage with rClone](/pages/storage_and_backup/object_storage/s3_rclone)
- [Use Swift Object Storage with rclone](/pages/storage_and_backup/object_storage/pcs_sync_rclone_object_storage)

### Is it possible to manage data lifecycles?

Lifecycle options are not yet available. Please follow our [public GitHub roadmap](https://github.com/orgs/ovh/projects/16/?card_filter_query=label%3A%22object+storage%22) to be informed of their release.

## Performance

### How do I upload large volumes of data?

To upload large volumes of data, we recommend that you parallelize the connections (*multithread upload*). Multiple requests are in progress in parallel, and the bandwidth is multiplied (1 Gbps per connection). You can find more details on the methodology in the following guide: [Optimize the sending of your files to S3 Object Storage](/pages/storage_and_backup/object_storage/s3_optimise_the_sending_of_your_files).

More generally, there are several methods that allow you to maximize your upload and download performance on our Object Storage. You can know more about those optimizations in the following guide: [Object Storage - Optimising Performance](/pages/storage_and_backup/object_storage/s3_performance_optimization).

### What is the performance difference between the High Performance and Standard Performance storage classes?

The High Performance class is adapted to AI or analytics use cases, it is built to bring performance through its design and the use of NVMe SSD disks. It is adapted to use cases that require high read/write speeds on high volumes of data. Performance tests are available on the Cloud Mercato website: 

- [OVHcloud High performance Object Storage benchmark](https://projector.cloud-mercato.com/projects/ovh-high-perf-object-storage-benchmark){.external}
- [OVHcloud Standard Object Storage benchmark](https://projector.cloud-mercato.com/projects/ovhcloud-standard-object-storage-benchmark){.external}

### What is the available bandwidth for upload and download?

The maximum bandwidth is 1 Gbps per connection.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
