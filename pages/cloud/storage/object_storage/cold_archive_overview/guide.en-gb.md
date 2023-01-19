---
title: Cold Archive - Overview
slug: cold-archive/overview
excerpt: Discover the service, understand the capabilities and billing
section: Cold Archive Storage Class Specifics
order: 010
---

**Last updated 17th January 2023**

## Objective

OVHcloud Cold Archive is a class of storage designed for long-term storage:

- Data storage for a period > 8 months
- Immutable archive, the data cannot be updated after being archived
- At any moment, you have access to the metadata which is always online for consultation. You can retrieve the data on demand within 48 hours when you need it.

The hardware design is specifically build for this use case, to provide a trusted platform with best resiliency/price ratio:

- Without volume limit, up to several petabytes of data
- Based on magnetic tape storage for long duration (> 10 years) and low carbon consumption
- Within a highly resilient architecture of multiple data centers 

This service is adapted for your business:

- Regulatory And Compliance Archiving
- Media Asset preservation
- Scientific Data Storage
- Sensitive data preservation
- Healthcare Information Archiving
- Financial Information Archiving
- Public Sector Information Archiving

The service allows you to focus on building and deploying cloud applications while OVHcloud takes care of the service infrastructure and maintenance.

**This guide explains the concepts of the Cold Archive class of storage.**

## Concepts 

The service is fully managed by OVHcloud and accessible through S3 API.

**3 steps operation**

1. Store your data in an Object Storage bucket first in RBX Region
2. Archive it on tapes
3. Restore your data or/and delete your archive

![Cold Archive concept](images/cold_archive_overview-20230117154349550.png){.thumbnail}

## Uploading the data

Create an archive at a bucket level.

Archive and retrieve your data with the methodology of your choice:

- by CLI
- with rClone
- with tools of the market 

The bucket limitation is 100To.

## Data lifecycle 

During the lifecycle, data is placed at Object Storage level for a deposit or retrieval or stored on magnetic tape for long duration archive.

You can track the different steps of your data by the status of your bucket 

| Archive (=bucket) status | Description | Objects permissions | Duration | Data pricing |
| --- | --- | --- | --- | --- |
| **`None`** | No Intelligent-Tiering configuration pushed on the bucket yet. | All | unlimited | Standard |
| **`Archiving`** | Archiving in progress on tapes. | Listing | <48 hrs | Archive   |
| **`Archived`** | Objects archived on tapes only. | Listing | unlimited | Archive  |
| **`Restoring`** | Restoration in progress from tapes. | Listing | <48 hrs | Archive  |
| **`Restored`** | Objects restored and accessible. | Read-only + Listing | 30 days | Archive  |
| **`Deleting`** | Objects deletion from tapes (and disks if restored) in progress. | Listing | <48 hrs | Archive  |
| **`Flushed`** | Bucket is empty and can be removed safely. | Listing (empty bucket) | NA | Archive  |

## Network, upload and retrieval performances  

Cold Archive is a service based on Object Storage - S3 API. Performance and limitations (number of containers, account, maximum bandwidth per connection, number of request per second on bucket, maximum size per object / mpu / part, etc) are available [here](https://docs.ovh.com/gb/en/storage/object-storage/s3/limitations/).

To upload your data, the maximum bandwidth is **1 Gbps per logical connection** and the number of connections that can be used in parallel is **unlimited**.

Upload duration depends on you internet connection. 

A few examples:

- I have a 1 Gbps internet connection, I upload a 1TB archive, it will take 2,2 hours.
- I have a 5 Gbps internet connection, I upload a 1TB archive, it will take 26 minutes.
- I have a 5 Gbps internet connection, I upload a 100TB archive, it will take 1,9 days.

### Time to retrieve data 

The time it takes to access data depends on its volume. For example, for a retrieval of several hundred TB, the average time is 48 hours. For a volume of a few TB, it can take a few minutes up to a few hours.

## RSE, Certifications & Compliance

### Compliance

The service will be certified HDS and ISO 27001. You can follow these certifications on our public roadmap page : <https://github.com/ovh/public-cloud-roadmap/projects/3?card_filter_query=label%3Astorage>

### Low carbon consumption

Outside the read and write phase, the cartridges do not consume electricity. This provides more than 95% power savings compared to a similar disk array. 

### Duration

Magnetic tapes are built to last for decades (as opposed to an average of five years for modern discs). 

### Security 

Using server-side encryption with customer-provided encryption keys (SSE-C) allows you to set your own encryption keys.

When you upload an object, Object Storage - S3 API uses the encryption key you provide to apply AES-256 encryption to your data. When you retrieve an object, you must provide the same encryption key as part of your request. Object Storage - S3 API first verifies that the encryption key you provided matches and then decrypts the object before returning the object data to you.

### Immutability by WORM 

Immutable storage is often mandatory for legal reasons and certification not to change or delete the data after it has been written.

Immutable storage is a means to be protected against malware and attacks.

Cold archive service is WORM (**W**rite **O**nce, **R**ead **M**any) by design.

### Private / public Network

The Object Storage is available through a public endpoint (public IP).

## Pricing 

<!--
Our price are described [here](https://www.ovhcloud.com/en-gb/public-cloud/prices/).
-->

The Cold Archive solution is invoiced according to the used archiving space (on magnetic tapes) and the used deposit space (Object Storage space) with a granularity of 1 GB. To ensure its readability, the price is displayed in GB/month , but the billing granularity is per GB/hour, considering that on average there are 720 hours in a month.

The minimum archiving period is 180 days. In the event that an archive is deleted within this commitment period, the customer will be charged an additional fee calculated as follows:
(180 days minus the number of days during which the service was used) x price of the storage class.

It is possible to start archiving a container with less than 1 TB of data, but the archiving action will be charged at the price of 1 TB.

## Go further

Operate your lifecycle and learn how to create buckets, archive, retrieve data, list metadata, reading [this guide](https://docs.ovh.com/gb/en/storage/object-storage/cold-archive/getting-started/).

[All the Object Storage documentation](https://docs.ovh.com/gb/en/storage/object-storage/).

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Storage and Backup services.

Join our community of users on <https://community.ovh.com/en/>.
