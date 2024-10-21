---
title: Object Storage - Creating a bucket
excerpt: Learn how to create an S3 Object Storage bucket from the OVHcloud Control Panel
updated: 2024-10-16
---

## Objective

**Learn how to create an S3 Object Storage bucket from the OVHcloud Control Panel.**

> [!primary]
>
> - If you are interested in the **Standard object storage - SWIFT API** storage class, follow this [guide](/pages/storage_and_backup/object_storage/pcs_create_container)
> - If you are interested in the **Cloud Archive - SWIFT API** storage class, follow this [guide](/pages/storage_and_backup/object_storage/pca_create_container).
>

## Requirements

- A [Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project) in your OVHcloud account
- Access to your [OVHcloud Control Panel](/links/manager)

## Instructions

### Using the Control Panel

To create an Object Storage bucket, first log in to your [OVHcloud Control Panel](/links/manager) and open your `Public Cloud`{.action} project. Click on `Object Storage`{.action} in the navigation bar on the left and then on the `My containers`{.action} tab.

![My Dashboard containers](images/01_object_storage-bucket_listing.png)

Click `Create Object Container`{.action} and select your storage class:

![Select your solution](images/object_storage-bucke_creation_step1.png)

Select a deployment mode:

> [!primary]
>
> OVHcloud provides multiple deployment modes to meet different needs in terms of resilience, availability, and performance. Each mode is optimized for specific use cases and offers varying levels of redundancy and fault tolerance.
>

![Select a deployment mode](images/object_storage-bucke_creation_step2.png)

Select a region:

> [!primary]
>
> Regions can vary depending on the chosen deployment mode.
>

![Select a region](images/object_storage-bucke_creation_step3.png)

You must link a user to the bucket:

![Link to user](images/object_storage-bucke_creation_step4_1.png)

To do this, you can either link an existing S3 user:

![Link to user](images/object_storage-bucke_creation_step4_2.png)

You can view the user credentials by clicking on `View credentials`{.action}:

![view credentials](images/object_storage-bucke_creation_step4_3.png)

Or you can create a new S3 user:

![Create S3 user](images/object_storage-bucke_creation_step4_4.png)

At this stage, you can decide whether or not to enable **versioning**.

Versioning allows you to keep multiple variants of an object in the same bucket. This feature helps **preserve, retrieve, and restore every version of every object stored in your buckets**, making it easier to recover from unintended user actions or application failures. By default, versioning is disabled on buckets, and you must explicitly enable it. Find more information about versioning on our [dedicated guide](/pages/storage_and_backup/object_storage/s3_versioning).

![Enabling versioning](images/object_storage-bucke_creation_step5.png)

You can now decide whether or not you wish to **encrypt your data** using [SSE-S3 (server-side encryption with OVHcloud Managed Keys)](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c).

![Encryption](images/object_storage-bucke_creation_step6.png)

Finally, name your bucket:

![Container name](images/object_storage-bucke_creation_step7.png)

Congratulations, your bucket is created:

![Result](images/01_object_storage-bucket_listing.png)

### Where to find the Endpoint URL of a bucket

Click on the name of your bucket to view its details and content:

![Bucket details](images/highperf-create-container-20220928091433895.png)

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
