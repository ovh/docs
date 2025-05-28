---
title: Proper Usage and Limitations of Classic Multi-Attach Block Storage in 3AZ Regions
excerpt: 'Learn how to safely use Classic Multi-Attach Block Storage in 3AZ regions, understand its limitations, and avoid data corruption'
updated: 2025-05-06
---

## Introduction

Classic Multi-Attach 3AZ is a regional multi-zone volume type, available exclusively in Public Cloud regions with three Availability Zones (3AZ). This volume type allows a single volume to be attached simultaneously to multiple instances within the same region, enabling increased resilience and high availability for critical applications.

This feature is designed specifically for active/active or active/passive use cases, where multiple instances need coordinated access to shared data.

To better understand the underlying architecture for multi-zone deployments using regional Block Storage, refer to the following [documentation](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture#2az-with-regional-block-storage).

> [!warning]
>
> It is the user's responsibility to ensure that a cluster-aware file system is used with Classic Multi-Attach volumes.
>
> Failure to do so can result in data corruption.
> 
> Use only file systems designed for shared access, such as GFS2 or OCFS2.
>
> Standard file systems (e.g., XFS, EXT4, NTFS) are not supported unless proper fencing mechanisms are in place.
>

## Usage

Creating and attaching a Classic Multi-Attach volume follows the same process as described in the [OVHcloud documentation on volume creation](/pages/public_cloud/compute/starting_with_managing_volumes_openstack_api). The key difference is that the volume type is "classic-multiattach", not just "classic".

If the volume type is omitted during creation, OpenStack will default to "classic-multiattach" (similar to how "classic" is set by default in regular regions).

In the OVHcloud Control Panel, simply select the classic volume available in the 3AZ region.

![classic 3az block volume](images/create_volume_type.png){.thumbnail}

##  Considerations

When working with Classic Multi-Attach in 3AZ regions, the following points should be taken into account:

- Classic 3AZ Multi-Attach volumes can be attached to up to 16 instances simultaneously within the same region.
- The multi-attach feature is only available with this specific volume type and exclusively in 3AZ regions, such as the Paris region.
- Using cluster-aware file systems is required, but may result in performance degradation depending on the workload and configuration.

## Limitations

Classic Multi-Attach volumes come with specific limitations that should be considered before deployment:

- Volume retyping is not supported while the volume is in use — switching from a multiattach-capable type to a non-multiattach-capable type (or vice-versa) is not allowed.
- Encryption is not available for multiattach-capable volumes.

## Go further

Join our [community of users](/links/community).