---
title: Available datacenters, worker nodes and persistent storage flavors
excerpt: ''
slug: datacenters-nodes-storage-flavors
section: Technical resources
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/datacenters-nodes-storage-flavors/'
---

**Last updated February 16th, 2022.**

## Available datacenters, worker nodes and persistent storage flavors

### Available regions / Datacenters available

A Managed Kubernetes Service deploys a Kubernetes Master within a given OVHcloud datacenter.  
All its worker nodes and persistent volumes are then deployed by the cloud controller in the same region.

Currently the service is available in all OVHcloud Public Cloud geographies.
Note that projects with older regions (such as SBG1 or GRA1 for example) will be invited to transparently activate the latest regions in this zone to benefit from Managed Kubernetes Service.

OVHcloud US customers can also deploy the service in both our East and West American datacenters. 

### Available worker nodes flavors

When adding a worker node, Managed Kubernetes Service will deploy a managed Public Cloud instance in the same region/datacenter. The worker nodes types correspond to the standard OVHcloud Public Cloud catalog offered in this region and are billed at standard price.

We currently support several types of instances with guaranteed and constant resources:

* GENERAL PURPOSE (`B2-*`)
* CPU ORIENTED (`C2-*`)
* RAM ORIENTED (`R2-*`)
* GPU ORIENTED (`T1-*`)
* DISCOVERY (`D2-4` and `D2-8` only)
* IOPS ORIENTED (`Id1-*`)

Each family offers contains different flavors, consisting of a five amount of vCores, RAM and local storage.  
For more information, please refer to the following page: [OVHcloud Public Cloud instances](https://www.ovhcloud.com/pt/public-cloud/prices/)

Note that we are both compatible with the standard and flex variations (Flex offering the same disk size for each flavor).
Note however that Managed Kubernetes Service does not currently offer worker nodes resize.  

Using our API, you shall use the flavor name such as `b2-7` as parameter of the POST `/cloud/project/{serviceName}/kube/{kubeId}/node` endpoint.  
This is detailed in the [quickstart with OVH API](../deploying-hello-world-ovh-api/) guide.

GPU (`T1-*`) instances are now supported! If you want to know [how to deploy GPU applications on Kubernetes Managed Service](../deploying-gpu-application), please read our tutorial.

### Available persistent Storage Classes

When adding a persistent volume though Kubernetes API (or `kubectl`), it will actually be deployed using Public Cloud additional disks (Cinder Volumes). We support the following Storage Classes:

* `csi-cinder-high-speed` compliant with Managed Kubernetes Service after `1.18.*` release
* `csi-cinder-classic` compliant with Managed Kubernetes Service after `1.18.*` release

All these `Storage Classes` are based on Cinder, the OpenStack block storage service. The difference between them is the associated physical storage device, and the fact that `csi-cinder-high-speed` uses SSD, while `csi-cinder-classic` uses traditional spinning disks. This is detailed in the [Persistent Volumes ](../ovh-kubernetes-persistent-volumes/) guide.

We will support future classes as soon they are made available in OVHcloud Public Cloud.
