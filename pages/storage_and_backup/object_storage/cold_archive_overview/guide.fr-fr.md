---
title: Cold Archive - Overview
excerpt: Discover the service, its features, and billing
updated: 2024-06-28
---

<style>
.w-100 {
    width:100% !important;
}
</style>

## Objective

[OVHcloud Cold Archive](https://www.ovhcloud.com/en-gb/public-cloud/cold-archive/) is a storage class designed for long-term storage of rarely accessed data.

Its main characteristics are:

- Long-term retention: keeping data for more than 8 months
- Data immutability: data cannot be updated after archiving
- Durability (99.999%) and protection against bit-rot (data degradation over long periods)
- At any time, you have access to always-online metadata for consultation. You can retrieve the data on demand within 48 hours.

The hardware design is specifically crafted for this use case, providing a reliable platform with the best resilience/price ratio:

- No volume limit, up to several petabytes of data
- Based on magnetic tape storage for long duration (> 10 years) and low carbon footprint
- Within a highly resilient architecture across multiple data centers

This service is suitable for your business for the following needs:

- Regulatory and compliance archiving
- Preservation of media assets
- Storage of scientific data
- Preservation of sensitive data
- Archiving healthcare information
- Archiving financial information
- Archiving public sector information

The service allows you to focus on creating and deploying cloud applications while OVHcloud takes care of the infrastructure and service maintenance.

**This guide explains the concepts of the Cold Archive storage class.**

## Concepts

The service is fully managed by OVHcloud and accessible via the S3 API.

![Archive](images/restoring.PNG){.thumbnail}

**Operation in 5 Steps**

1. **Storage (Active):** Your data is newly stored in a bucket within the Object Storage Bucket.
2. **Archiving (In Progress):**
    - **Archiving:** Your data is being archived to tapes.
    - **Archived:** Your data is now archived to tapes, stored in long-term tape archive across dedicated data centers.
3. **Retrieval (48h) or Restoration:**
    - **Restoration:** Your data is being copied to a bucket.
    - **Restored:** Your data is available in a bucket, read-only (immutable), within the Object Storage Bucket.
4. **Move / Deletion (Flushed):** The Object Storage bucket is now empty.
5. **Deletion (Optional):** Your data is being deleted from the tapes.

![Concept Cold Archive](images/5_Steps.png){.w-100}

## Data Upload

Create an archive at the bucket level.

Archive and retrieve your data using the method of your choice:

- via CLI
- with rClone
- with market tools

The limit for a bucket is 100 TB.

## Data Lifecycle

During the lifecycle, data is placed at the Object Storage level for deposit or retrieval or stored on magnetic tape for long-term archive.

You can track the different stages of your data by the status of your bucket.

| Archive State (=bucket) | Description | Object Permissions | Duration | Data Pricing |
| --- | --- | --- | --- | --- |
| **`None`** | No Intelligent-Tiering configuration applied to the bucket yet. | All | unlimited | Standard |
| **`Archiving`** | Archiving in progress to tapes. | Listing | <48h | Archive |
| **`Archived`** | Objects archived to tapes only. | Listing | unlimited | Archive |
| **`Restoring`** | Restoring from tapes in progress. | Listing | <48h | Archive |
| **`Restored`** | Objects restored and accessible. | Read-only + Listing | 30 days | Archive |
| **`Deleting`** | Deleting objects from tapes (and disks if restored) in progress. | Listing | <48h | Archive |
| **`Flushed`** | The bucket is empty and can be safely deleted. | Listing (empty bucket) | N/A | Archive |

## Network Performance, Upload, and Retrieval

Cold Archive is a service based on Object Storage - S3 API. The performance and limitations (number of buckets, account, maximum bandwidth per connection, number of requests per second on the bucket, maximum size per object/mpu/part, etc.) are available [here](/pages/storage_and_backup/object_storage/s3_limitations).

For data upload, the maximum bandwidth is **1 Gbps per logical connection** and the number of parallel connections is **unlimited**.

The download duration depends on your internet connection.

Some examples:

- I have a 1 Gbps internet connection, I download a 1 TB archive, it will take 2.2 hours.
- I have a 5 Gbps internet connection, I download a 1 TB archive, it will take 26 minutes.
- I have a 5 Gbps internet connection, I download a 100 TB archive, it will take 1.9 days.

### Data Retrieval Time

The time to access data depends on the volume of data. For example, for a retrieval of several hundred TB, the average time is 48 hours. For a volume of a few TB, it can take from a few minutes to a few hours.

## CSR, Certifications & Compliance

### Compliance

The service is HDS and ISO 27001 certified.

### Low Carbon Footprint

Apart from read and write phases, the cartridges consume no electricity. This saves more than 95% energy compared to a similar disk array.

### Duration

Magnetic tapes are designed to last for decades (as opposed to an average of five years for modern disks).

### Security

Using server-side encryption with customer-provided encryption keys (SSE-C) allows you to set your own encryption keys.

When you upload an object, Object Storage - S3 API uses the encryption key you provide to apply AES-256 encryption to your data. When you retrieve an object, you must provide the same encryption key as part of your request. Object Storage - S3 API first verifies that the encryption key you provided matches and then decrypts the object before returning the object data to you.

### Immutability by WORM

Immutable storage is often mandatory for legal reasons and ensures that data cannot be modified or deleted after writing.

Immutable storage is a way to protect against malware and attacks.

The Cold Archive service is WORM (**W**rite **O**nce, **R**ead **M**any) by design.

### Private / Public Network

Object Storage is available via a public endpoint (public IP).

## Billing

The Cold Archive solution is billed based on the archived storage space used (on magnetic tapes) and the deposit space used (Object Storage space) with a granularity of 1 GB. To ensure readability, the price is displayed in GB/month, but the billing granularity is per GB/hour, considering there are an average of 720 hours in a month.

The minimum archiving duration is 180 days. If an archive is deleted within this commitment period, the customer will be charged an additional fee calculated as follows:
(180 days minus the number of days the service was used) x storage class price.

It is possible to start archiving a bucket with less than 1 TB of data, but the archiving action will be billed at the price of 1 TB.

Billing is done in arrears, meaning the customer is billed for the storage consumed in the past month.

## Go further

Leverage your lifecycle and learn to create buckets, archive, retrieve data, list metadata, by reading [this guide](/pages/storage_and_backup/object_storage/cold_archive_getting_started).

[All Object Storage documentation](/products/storage-object-storage).

Join our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback, and interact directly with the team building our storage and backup services.

If you need training or technical assistance for implementing our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services experts.

Engage with our [user community](/links/community).
