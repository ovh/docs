---
title: Local Zone Compute - Features, Capabilities and Limitations
excerpt: Find out the current features, capabilities and limitations of Local Zones for Public Cloud
updated: 2026-01-16
---

## Objective

Local Zones are an extension of [regions](/links/public-cloud/regions-pci) that bring OVHcloud services closer to specific locations, offering reduced latency and improved performances for applications.

Local Zones are strategically placed in proximity to areas with high user demand. Their main goal is to minimize the time it takes to transfer data between the user and the cloud, in order to make services faster and more responsive, and meet data residency requirements.

Find more information on our [dedicated Local Zone Compute page](/links/public-cloud/local-zones).

**Explore the features and capabilities of current and future Local Zones instances.**

## Available features

| Public Cloud Services | Product                    | Local Zone Availability | Limitations |
| --------------------- | -------------------------- | ------------------------ | ----------- |
| Compute               | Instances                  | Yes | The suspend (shelve) action is not supported in Local Zones |
|                       | Metal instances            | No | |
|                       | GPU                        | No | |
|                       | Instance backup            | Yes | |
|                       | Distant backup             | No | |
|                       | Backup Workflow management | Yes | |
|                       | Image Linux                | Yes | |
|                       | Images Windows             | No | |
|                       | Upload your own image      | Yes | Image size limited to 25 GB maximum |
| Network               | Load Balancer              | No | |
|                       | Gateway                    | No | |
|                       | Floating IP                | No | |
|                       | Additional IP              | No | |
|                       | Private Network with vRack | No | Local Zones are not compatible with vRack. Private networks are limited to the same Local Zone only. DHCP is supported on Local Private Networks. |
| Storage               | Object Storage             | Yes | 1. User policies not supported. all access keys within a project can access all buckets across all Local Zones. <br> 2. Only Standard storage class supported. <br> 3. S3<sup>1</sup> features not supported: S3 tags, Legal Hold, SSE-OMK, S3 replication, Server access logging. |
|                       | Block Storage              | Yes | No encryption support. Classic volumes cannot be multi-attached. Classic volumes limited to 250 IOPS (vs 500 IOPS in 1AZ and 3AZ regions). Maximum size 4 TB (vs 12 TB). |
|                       | File Storage               | No | |
| Container             | Managed Kubernetes Service | No | |
|                       | Managed Rancher Service    | No | |
|                       | Managed Private Registry   | No | |
| DBaas                 | DBaas                      | No | |
|                       | Analytics                  | No | |
| AI                    | AI                         | No | |

## Capabilities and limitations

All instance features which are not yet available in Local Zones will be implemented in the next months. Our goal is to support the entire feature set that is already available in global regions as soon as possible.

### SMTP Server

Instances in the Local Zone cannot contact SMTP servers.

## Go further

- [Object Storage - Local Zones specifications](/pages/storage_and_backup/object_storage/s3_local_zones_limitations)

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.