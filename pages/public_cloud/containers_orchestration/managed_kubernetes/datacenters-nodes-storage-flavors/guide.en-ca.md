---
title: Available datacenters, worker nodes and persistent storage flavors
excerpt: ''
updated: 2024-06-06
---

## Available datacenters, worker nodes and persistent storage flavors

### Available regions / Datacenters available

A Managed Kubernetes Service deploys a Kubernetes Master within a given OVHcloud datacenter.
All its worker nodes and persistent volumes are then deployed by the cloud controller in the same region.

Currently the service is available in all OVHcloud Public Cloud geographies.
Note that projects with older regions (such as SBG1 or GRA1 for example) will be invited to transparently activate the latest regions in this zone to benefit from Managed Kubernetes Service.

OVHcloud US customers can also deploy the service in both our East and West American datacenters.

### Available worker nodes flavors

When adding a worker node, Managed Kubernetes Service will deploy a managed Public Cloud instance in the same region/datacenter. The worker nodes types correspond to the standard OVHcloud Public Cloud catalog offered in this region and are billed at standard price.

We currently support several types of instances with guaranteed and constant resources.

Here is a comparative table of flavours available by region :

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
For more information, please refer to the following page: [OVHcloud Public Cloud instances](https://www.ovhcloud.com/en-ca/public-cloud/prices/)

Note that we are both compatible with the standard and flex variations (Flex offering the same disk size for each flavor).
Note however that Managed Kubernetes Service does not currently offer worker nodes resize.  

Using our API, you shall use the flavor name such as `b2-7` as parameter of the POST `/cloud/project/{serviceName}/kube/{kubeId}/node` endpoint.  
This is detailed in the [quickstart with OVH API](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world-ovh-api) guide.

GPU (`T1-*`) instances are now supported! If you want to know [how to deploy GPU applications on Kubernetes Managed Service](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-gpu-application), please read our tutorial.

### Available persistent Storage Classes

When adding a persistent volume though Kubernetes API (or `kubectl`), it will actually be deployed using Public Cloud additional disks (Cinder Volumes). We support the following Storage Classes:

* `csi-cinder-high-speed` compliant with Managed Kubernetes Service after `1.18.*` release
* `csi-cinder-classic` compliant with Managed Kubernetes Service after `1.18.*` release

All these `Storage Classes` are based on Cinder, the OpenStack block storage service. The difference between them is the associated physical storage device, and the fact that `csi-cinder-high-speed` uses SSD, while `csi-cinder-classic` uses traditional spinning disks. This is detailed in the [Persistent Volumes ](/pages/public_cloud/containers_orchestration/managed_kubernetes/persistent-volumes-on-ovh-managed-kubernetes) guide.

We will support future classes as soon they are made available in OVHcloud Public Cloud.
