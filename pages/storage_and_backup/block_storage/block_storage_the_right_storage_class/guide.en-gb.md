---
title: Choosing the Right Block Storage Class
excerpt: Discover how to choose the right OVHcloud Block Storage class. Compare performance, pricing, and use cases to optimize your storage for both cost and efficiency.
updated: 2025-12-15
---

## Objective

This guide helps you understand the different OVHcloud Block Storage classes and choose the one that best fits your needs. You will learn about performance levels, pricing considerations, and recommended use cases to make informed storage decisions.

## Block Storage Overview

Block Storage is a high-performance, flexible, and reliable solution for critical workloads. Attach volumes directly to your instances, scale capacity from 10 GB to 12 TB, and choose the right class: Regional Classic, Classic, or High Speed to match your performance and availability needs. Ideal for databases, VMs, and containerized applications, with features like snapshots, backups, and encryption.

## Block Storage Classes

Our **Block Storage classes** are designed to meet different requirements for your workloads, including performance, availability, and resiliency. Choose the right class to optimize speed, redundancy, and cost for your applications.

### Regional Classic Volume

The **Regional Classic Volume** class provides high availability by automatically replicating data across three availability zones within a region (3-AZ). Volumes are backed by NVMe over Fabric storage for fast, consistent and reliable access.

To ensure service continuity even in the event of an AZ failure, this class also supports [Multi-Attach](/pages/public_cloud/compute/classic_block_multi_az_limitations), allowing multiple instances located in different availability zones to simultaneously attach and use the same volume.

This class is suitable for workloads requiring high availability and resilience, such as critical databases and distributed applications.

### Classic Volume

The **Classic Volume** class is ideal for everyday application needs, including databases, virtual machines, and backups. Data is replicated within a single availability zone (1-AZ) or Local Zone, with guaranteed NVMe performance.

This class is suitable for standard workloads where low-latency and reliability are important, but multi-zone replication is not required.

### High Speed Volume

The **High Speed Volume** class comes in two generations, offering different performance profiles:

- Gen 1: Up to 3,000 IOPS and 128 MB/s – suitable for general high-speed workloads.
- Gen 2: 30 IOPS/GB (max 20,000 IOPS) and 0.5 MB/s per GB (max 512 MB/s) – recommended for intensive applications requiring maximum I/O and throughput.

Choose Gen 1 for standard high-speed use cases, and Gen 2 for heavy workloads like analytics, large databases, or high-performance computing.

### Comparison Table

| Storage Class | Use Cases | Performance | Supported Regions | Availability SLA | Replication | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **High Speed Volume** | High-performance workloads, analytics, large databases | **Gen 1**: Up to 3,000 IOPS, 128 MB/s <br><br> **Gen 2**: 30 IOPS/GB (max 20,000 IOPS), 0.5 MB/s per GB (max 512 MB/s) | 3-AZ, 1-AZ, Local Zones | 99.9% | Zonal | Optimized NVMe, scalable performance |
| **Regional Classic Volume** | Critical applications, distributed systems | 500 IOPS guaranteed, 64 MB/s | 3-AZ | 99.99% | Multi-zone | NVMe over Fabric, high availability |
| **Classic Volume** | Everyday workloads, VMs, backups | 500 IOPS guaranteed, 64 MB/s | 1-AZ, Local Zones | 99.9% | Zonal | NVMe over Fabric, standard performance |

### Additional details

#### Minimum storage duration

For Block Storage, there is no minimum storage duration: you can attach or delete volumes at any time without extra charges. You are billed only for the actual usage of the volume during the period it exists.

#### Backup and snapshot fees

While standard volume usage is billed per GB/month, [snapshots](/pages/public_cloud/compute/creating_a_volume_snapshot) stored on **Block Storage** and [backups](/pages/public_cloud/compute/volume-backup) stored on **Object Storage** may incur additional storage costs. Snapshots allow you to capture the state of a volume at a given time, and backups enable data protection and recovery.

#### Lifecycle and resizing

Block Storage volumes are fully flexible: you can [increase their size](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk) at any time, extend partitions, and attach volumes to different instances. These operations are handled at the volume level, allowing you to optimize storage capacity and performance without downtime.

#### Encrypted Volumes

Each Block Storage volume type is also available in an encrypted version (LUKS), depending on the region. These encrypted variants ensure data confidentiality without impacting performance.

> [!primary]
> Please note that Regional Classic Volume class and volumes in Local Zones do not support LUKS encryption.

Encrypted volumes can be created directly from the OVHcloud Control Panel or via CLI/API tools by specifying the volume type with the suffix `-luks` (for example, classic-luks or highspeed-luks). This provides an easy and secure way to protect sensitive data while leveraging the same performance and features as standard volumes.

> [!primary]
> Encrypted volumes have no impact on performance.

## Use Cases

Block Storage supports a wide variety of workloads thanks to its performance, flexibility, and resilience. Common use cases include:

- **Databases**: MySQL, PostgreSQL, and other relational databases benefit from low-latency and high-throughput access.
- **Virtual machines & containerized applications**: Persistent storage for VMs and containers with high reliability and fast access.
- **Analytics & AI workloads**: High Speed Volumes provide maximum IOPS and throughput for data-intensive applications.
- **Backup & disaster recovery**: Easily create snapshots and backups for critical data, ensuring fast recovery and protection.

## Zone and regional Considerations

Block Storage volumes can be deployed with different availability options depending on your requirements:

- **Regional Classic Volume (3-AZ)**: Data is replicated across three availability zones in the same region, providing high resilience and SLA of 99.99%. Ideal for critical, highly available applications. For more information, see our guide "[Proper Usage and Limitations of Classic Multi-Attach Block Storage in 3AZ Regions](/pages/public_cloud/compute/classic_block_multi_az_limitations)".
- **Classic & High Speed Volume (1-AZ or Local Zone)**: Data is replicated within a single zone. These options provide low-latency access and high performance, suitable for workloads that do not require multi-zone redundancy.
- **Local Zones**: For applications needing ultra-low latency in a specific geographic location, Local Zones allow you to keep storage close to compute resources.

> [!success]
> Choosing the right deployment option ensures optimal performance, redundancy, and cost efficiency based on your workload and geographic requirements.

## Go further

[Creating and configuring an additional disk on an instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Change your Block Storage volume type](/pages/public_cloud/compute/switch_volume_type)

If you need training or technical assistance to implement our solutions, please contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalised analysis of your project from our Professional Services team.

Join our [community of users](/links/community).