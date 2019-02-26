---
title: Available datacenters, worker nodes and persistent storage flavors
excerpt: ''
slug: datacenters-nodes-storage-flavors
section: Technical resources
---

**Last updated 25th February, 2019.**

## Available datacenters, worker nodes and persistent storage flavors

### Available regions/Datacenters available

A Managed Kubernetes Service deploys a Kubernetes Master within a given OVH datacenter. All its worker nodes and persistent volumes are then deployed by the cloud controller in the same region.
Currently only GRA (Western Europe) is available. All your compute and storage resources will then be spawned in the "GRA5" region of the associated public cloud project.
During 2019, we will offer you the possibly to choose one of multiple OVH Public Cloud datacenters at cluster creation.

### Available worker nodes flavors 

When adding a worker node, Managed Kubernetes Service will deploy a managed Public Cloud instance in the same region/datacenter. The worker nodes types correspond to the standard OVH Public Cloud catalog offered in this region and are billed at standard price.

We currently support 3 types of instances with guaranteed and constant resources : GENERAL PURPOSE (`B2-*`), CPU ORIENTED (`C2-*`) and RAM ORIENTED (`R2-*`). Each family offers contains 5 different flavors, consisting of a five amount of vCores, RAM and local storage.

Note that we are both compatible with the standard and flex variations (Flex offering the same disk size for each flavor). Note however that Managed Kubernetes Service does not currently offer worker nodes resize. Using our API, you shall use the flavor name such as "b2-7" as parameter of the POST `/kube/{serviceName}/publiccloud/node` endpoint. This is detailed in the [quickstart with OVH API](../deploying-hello-world-ovh-api/) guide.

Sandbox (`S1-*`) instances are not supported, because they do not offer totally constant ressources and this behaviour may prevent perfect working of our managed services, especially pod autoscaling.

GPU (`T1-*`) instances are note yet supported, because they require specific software components for Docker to leverage the GPU. We will support those in the future.

### Available persistent Storage Classes

When adding a persistent volume though Kubernetes API (or kubeCTL), it will actually be deployed using Public Cloud additional disks (Cinder Volumes). We support two Storage Classes, `cinder-high-speed` and `cinder-classic`, both based on Cinder, the OpenStack block storage service. The difference between them is the associated physical storage device, `cinder-high-speed` uses SSD, while `cinder-classic` uses traditional spinning disks.
This is detailed in the [Persistent Volumes ](../ovh-kubernetes-persistent-volumes/) guide.

We will support future classes as soon they are made available in OVH Public Cloud.
