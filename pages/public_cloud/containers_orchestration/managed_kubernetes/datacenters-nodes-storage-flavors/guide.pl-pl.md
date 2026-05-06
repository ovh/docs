---
title: Available datacenters, worker nodes and persistent storage flavors
excerpt: ''
updated: 2026-02-03
---

## Available datacenters, worker nodes and persistent storage flavors

### Available regions / datacenters

A Managed Kubernetes Service deploys a Kubernetes Master within a given OVHcloud datacenter.
All its worker nodes and persistent volumes are then deployed by the cloud controller in the same region.

Currently the service is available in all OVHcloud Public Cloud geographies.
Note that projects with older regions (such as SBG1 or GRA1 for example) will be invited to transparently activate the latest regions in this zone to benefit from Managed Kubernetes Service.

OVHcloud US customers can also deploy the service in both our East and West American datacenters.

### Regional availability by MKS plan

OVHcloud Managed Kubernetes Service availability varies depending on your chosen plan (Free or Standard). The table below shows which regions support each plan and their deployment architecture:

| Region | Free plan | Standard plan | Deployment architecture |
|--------|-----------|---------------|-------------------------|
| **Europe** | | | |
| GRA5 (Gravelines) | ✅ | ❌ | 1-AZ |
| GRA7 (Gravelines) | ✅ | ❌ | 1-AZ |
| GRA9 (Gravelines) | ✅ | ❌ | 1-AZ |
| GRA11 (Gravelines) | ✅ | ❌ | 1-AZ |
| SBG5 (Strasbourg) | ✅ | ❌ | 1-AZ |
| DE1 (Frankfurt) | ✅ | ❌ | 1-AZ |
| UK1 (London) | ✅ | ❌ | 1-AZ |
| WAW1 (Warsaw) | ✅ | ❌ | 1-AZ |
| EU-WEST-RBX (Roubaix) | ❌ | ✅ | 1-AZ |
| EU-WEST-PAR (Paris) | ❌ | ✅ | 3-AZ |
| EU-SOUTH-MIL (Milan) | ❌ | ✅ | 3-AZ |
| **Asia Pacific** | | | |
| SGP1 (Singapore) | ✅ | ❌ | 1-AZ |
| SYD1 (Sydney) | ✅ | ❌ | 1-AZ |
| AP-SOUTH-MUM (Mumbai) | ❌ | ✅ | 1-AZ |
| **Americas** | | | |
| BHS5 (Montreal) | ✅ | ❌ | 1-AZ |
| US-WEST-OR-1 (Oregon) | ✅ | ❌ | 1-AZ |
| US-EAST-VA-1 (Virginia) | ✅ | ❌ | 1-AZ |

> [!primary]
> **Deployment architecture:**
>
> - **1-AZ (Single Availability Zone)**: Cluster deployed in a single availability zone. Suitable for development, testing, and non-critical workloads.
> - **3-AZ (Multi Availability Zones)**: Cluster deployed across three availability zones for enhanced resilience. Available exclusively on the Standard plan. Provides high availability and fault tolerance for production workloads.
>
> For more information about MKS plans and their features, see the [MKS Plans comparison guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/mks_plans).

> [!primary]
> **Standard plan exclusive features:**
>
> The Standard plan includes advanced features not available on the Free plan, such as:
>
> - **Floating IPs per node**: Automatically assign public Floating IPs to worker nodes for direct public access and node bandwidth usage. See the "[Using Floating IPs on MKS Standard](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-floating-ips)" guide for more information.
> - **Cross-AZ resilience**: Enhanced cluster availability across multiple availability zones (in 3-AZ regions).
> - **Production-grade SLA**: 99.9% SLA for 1-AZ regions, 99.99% SLA for 3-AZ regions.
> - **Dedicated etcd storage**: Up to 8GB for larger clusters.
> - **Up to 500 nodes**: Support for large-scale production deployments.

### Available worker nodes flavors

When adding a worker node, Managed Kubernetes Service will deploy a managed Public Cloud instance in the same region/datacenter. The worker nodes types correspond to the standard OVHcloud Public Cloud catalog offered in this region and are billed at standard price.

We currently support several types of instances with guaranteed and constant resources.

Here is a comparative table of flavours available by region:

| **GENERAL PURPOSE** | | | **CPU ORIENTED** | | | **RAM ORIENTED** | |
| :---: | :--- | --- | :---: | :--- | --- | :---: | :--- |
| Name | Region availibility | | Name | Region availibility | | Name | Region availibility |
| `B2-*` | All region | | `C2-*` | All region | | `R2-*` | All region |
| `B3-*` | DE1 / GRA11 / UK1 / WAW1 | | `C3-*` | DE1 / GRA11 / UK1 / WAW1 | | `R3-*` | DE1 / GRA11 / UK1 / WAW1 |

| **GPU ORIENTED** | | | **DISCOVERY** | | | **IOPS ORIENTED** | |
| :---: | :--- | --- | :---: | :--- | --- | :---: | :--- |
| Name | Region availibility | | Name | Region availibility | | Name | Region availibility |
| `A100-180` | GRA11 | | `D2-4` | All region | | `I1-*` | BHS5 / DE1 / GRA5 / GRA7 / GRA9 / GRA11 / SBG5 / UK1 / WAW1 |
| `H100-*` | GRA11 | | `D2-8` | All region | | | |
| `L4-*`   | GRA11 | | | | | | |
| `L40s-*` | GRA11 | | | | | | |
| `T1-*`   | BHS5 / GRA5 / GRA7 / GRA11 | | | | | | |
| `T2-*`   | BHS5 / DE1 / GRA5 / GRA7 / GRA9 / GRA11 / UK1 / WAW1 | | | | | | |

Each family offers contains different flavors, consisting of a five amount of vCores, RAM and local storage.  
For more information, please refer to the following page: [OVHcloud Public Cloud instances](/links/public-cloud/prices)

Note that we are both compatible with the standard and flex variations (Flex offering the same disk size for each flavor).
Note however that Managed Kubernetes Service does not currently offer worker nodes resize.  

Using our API, you shall use the flavor name such as `b2-7` as parameter of the POST `/cloud/project/{serviceName}/kube/{kubeId}/node` endpoint.  
This is detailed in the [quickstart with OVH API](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world) guide.

GPU (`T1-*`) instances are now supported! If you want to know [how to deploy GPU applications on Kubernetes Managed Service](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-gpu-application), please read our tutorial.

### Available persistent storage classes

When adding a persistent volume though Kubernetes API (or `kubectl`), it will actually be deployed using Public Cloud additional disks (Cinder Volumes). We support the following storage classes:

* `csi-cinder-high-speed-gen2` storage class is based on hardware that includes SSD disks with NVMe interfaces. The performance allocation is progressive and linear (30 IOPS allocated per GB and 0.5MB/s allocated per GB) with a maximum of 20k IOPS and 1GB/s per volume. The IOPS and bandwidth performance will increase as you scale up the storage space.
* `csi-cinder-high-speed` performance is fixed. You will get up to 3,000 IOPS per volume, regardless of the volume size.
* `csi-cinder-classic` uses traditional spinning disks (200 IOPS guaranteed, Up to 64 MB/s per volume).

All these `Storage Classes` are based on Cinder, the OpenStack block storage service. The difference between them is the associated physical storage device. They are distributed transparently, on three physical local replicas.

High Speed performance is theoretically best for volumes up to 100GB. Above 100GB per volume, you will get enhanced performance with a High Speed Gen2 volume.
This is detailed in the [Persistent Volumes](/pages/public_cloud/containers_orchestration/managed_kubernetes/setting-up-a-persistent-volume) guide.

#### LUKS encrypted storage classes

OVHcloud Managed Kubernetes also supports LUKS encrypted block storage volumes using OVHcloud Managed Keys (OMK). The following encrypted storage classes are available in supported regions:

* `csi-cinder-high-speed-gen2-luks` - Encrypted version of High Speed Gen2 (progressive performance, SSD NVMe)
* `csi-cinder-high-speed-luks` - Encrypted version of High Speed (fixed 3,000 IOPS)
* `csi-cinder-classic-luks` - Encrypted version of Classic (spinning disks, 200 IOPS)

> [!primary]
> **Regional availability**
>
> LUKS encrypted storage is currently available in the following OVHcloud Public Cloud regions:
>
> - **France**: RBX, SBG, GRA (GRA5, GRA7, GRA9, GRA11), EU-WEST-PAR
> - **Germany**: DE1
> - **Italy**: EU-SOUTH-MIL
> - **Canada**: BHS5
> - **United States**: US-WEST-OR-1, US-EAST-VA-1
>
> Additional regions will be supported in the coming months.
>
> If your cluster is deployed in a supported region but the encrypted storage classes are not yet visible, they will be automatically deployed when you update your cluster.

For more information:

- [Choosing the right Block Storage class](/pages/storage_and_backup/block_storage/block_storage_the_right_storage_class)
- [Create encrypted Persistent Volumes on OVHcloud Managed Kubernetes clusters with LUKS](https://blog.ovhcloud.com/create-encrypted-persistent-volumes-on-ovhcloud-managed-kubernetes-clusters-with-luks/) (Complete tutorial)

We will support future classes as soon they are made available in OVHcloud Public Cloud.
