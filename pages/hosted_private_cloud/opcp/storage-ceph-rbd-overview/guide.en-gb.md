---
title: "OPCP - Ceph RBD Block Storage - Performance, Resilience and Scalability with OpenStack"
excerpt: "Discover OVHcloud OPCP's Ceph RBD Block Storage: performance, high availability and advanced features for your OpenStack environments"
updated: 2025-11-12
---

> [!primary]
>
> Please note that this information may change prior to General Availability (GA). Our current estimate for GA is **March 2026**. We will make every effort to keep you informed of any updates, but we recommend checking this guide regularly for the latest information. Thank you for your understanding.
>

## Objective

This guide presents the Block Storage architecture implemented in **OPCP**, based on OpenStack. It explains how persistent storage for virtual machines (VMs) is ensured by **Ceph RADOS Block Device** (RBD), an open-source, distributed and highly scalable solution designed to meet the needs of modern enterprises.

The objective is to show how this storage layer guarantees performance, resilience and scalability, allowing teams to focus on application development and deployment without being limited by the infrastructure.

## 1. Performance and Scalability: Designed to evolve

Unlike traditional storage solutions, the Ceph infrastructure distributes data and workloads across all physical nodes in the cluster.

This approach eliminates bottlenecks and allows for linear scalability suitable for demanding environments.

| Feature                       | Customer Benefit |
| ---------------------------- | ---------------- |
| Distributed I/O              | **Elimination of bottlenecks:** read and write operations are simultaneously distributed across many devices. This distribution ensures **high throughput** and **low and constant latency**, essential for critical applications and databases. |
| Horizontal scalability       | **Growth without interruption:** increasing storage capacity is simply achieved by adding standard servers to the cluster. The system automatically integrates the new hardware and rebalances the data in the background, **without causing any downtime**. |
| Dynamic provisioning         | **Optimized efficiency:** volumes are allocated instantly but only use physical space when data is actually written. This approach significantly improves the **utilization and efficiency** of the physical storage pool. |

## 2. Resilience and data protection

The fundamental architecture of Ceph is designed to offer **maximum fault tolerance**, ensuring that hardware failures do not cause service interruptions or data loss.

**Automatic replication (High availability):**

- Each piece of data is automatically copied and stored on multiple distinct disks and physical servers (typically 3 copies).
- In the event of a disk or server failure, virtual machines continue to operate normally, accessing the remaining copies without interruption.

**Self-healing:**

- When a device fails, Ceph immediately detects the anomaly and replicates the lost data onto the remaining healthy devices.
- This process automatically restores the **defined data protection level**.

**No single point of failure:**

- The system operates without a central controller or proprietary hardware component, ensuring **real redundancy** and **maximum availability** for cloud services.

## 3. Technical specifications and limitations

This section details the main technical features and compatibility requirements for users deploying applications on the OVHcloud OPCP platform.

### A. Compatibility and access

| Element                        | Detail              | Description                                                                                                                                 |
| ------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Storage type                   | Block storage       | Presented to the VM as a standard SCSI or virtio block device, equivalent to a physical disk for optimal performance.                      |
| POSIX compatibility            | Yes (via guest OS)  | Ceph RBD provides the raw block device; the guest OS file system (XFS, ext4, NTFS, etc.) ensures POSIX compliance.                          |
| Network file system            | No                  | It is not a shared NFS or SMB. Each volume is dedicated to a single VM at a time for maximum performance.                                 |

### B. Limitations and sizing

| Metric                                  | Value/Default | Notes                                                                                                                                                          |
| ----------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Maximum volume size                       | 16 TB             | Limit to ensure optimal performance and ease of management under OpenStack. Custom pools can support larger sizes on request. |
| Minimum volume size                       | 1 GB              | Smallest deployable volume unit via Cinder.                                                                                                             |
| Volume availability                       | Instant           | Volume allocation and attachment are done immediately via the OpenStack API or dashboard.                                                     |

### C. Performance and quality of service (QoS)

The platform offers several **performance levels** via Cinder volume types (Storage Classes), with guaranteed I/O limits enforced by the Ceph RBD QoS system:

| Storage class            | IOPS          | Throughput | Use case                                                                                   |
| ------------------------ | ------------- | -------- | --------------------------------------------------------------------------------------------- |
| Distributed storage (Standard) | 1 000 / 1 000 | 100 MB/s | General VMs, web servers, test and development environments.                          |
| Distributed storage (High)     | 3 000 / 3 000 | 200 MB/s | Databases, analytics engines, high-traffic or latency-sensitive applications. |
| Distributed storage (Insane)   | 7 500 / 7 500 | 300 MB/s | Extreme workloads, critical transactional systems, deep learning infrastructure.      |

> [!primary]
>
> **Note:** these thresholds are enforced by the Ceph QoS system. Volumes may sometimes exceed these limits if system resources allow, but the guarantees ensure predictable performance, even during high demand periods.
>

### 4. Advanced data management features

The **Ceph RBD** backend offers advanced tools for volume lifecycle management, simplifying and accelerating operations for cloud users.

- **Instant snapshots:** Creation of **space-efficient point-in-time copies** of any volume, allowing for quick rollback or the creation of new environments in seconds.
- **Fast cloning (Copy-on-Write):** Rapid provisioning of new **read/write volumes** from snapshots or existing images. The **CoW (Copy-on-Write)** technology saves disk space and accelerates VM deployment.
- **Hot volume resizing:** Increasing the size of a volume attached to a running VM, **without shutting down or restarting the VM.**
- **Support for live migration:** The distributed storage allows for non-disruptive migration of active virtual machines between compute nodes.
- **Boot from volume:** Direct launch of a VM from a Cinder volume, ensuring that the root disk immediately benefits from **all the high availability and advanced features of Ceph RBD.**
- **Disaster recovery ready (RBD Mirroring):** The underlying Ceph architecture supports **asynchronous volume mirroring** to a remote Ceph cluster, offering a robust solution for **Disaster Recovery Planning (DRP)**.

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).
