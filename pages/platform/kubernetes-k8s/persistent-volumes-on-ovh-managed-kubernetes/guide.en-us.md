---
title: Persistent Volumes on OVHcloud Managed Kubernetes
slug: ovh-kubernetes-persistent-volumes
excerpt: 'Find out how to setup and manage Persistent Volumes on OVHcloud Managed Kubernetes'
section: Getting started
---

**Last updated March 27<sup>th</sup>, 2020.**

## Persistent Volumes

Before going further, let's review how Kubernetes deals with data storage.  
There are currently two kinds of storage available with Kubernetes: Volumes and Persistent Volumes.

Kubernetes __Volumes__ exist only while the container pod exists, and are deleted when it is deleted.  
As a result, Kubernetes Volumes are only useful for storing temporary data.

Kubernetes __Persistent Volumes__ allow us to work with non-volatile data in Kubernetes. Persistent Volumes are not tied to the pod lifecycle, or to a a single pod. Pods can claim Persistent Volumes, thus making the data available to them.

> [!warning]
> You must be wondering how Persistent Volumes are compatible with the rule that *containers should be stateless* – one of the most important principles of best practice for containers. It's important to note that as the Kubernetes ecosystem has matured, and persistent storage solutions have emerged, this rule is no longer universally applicable.
>

What are the use cases for Persistent Volumes in Kubernetes?  
Well, the most common application is databases. Database data, by definition, is meant to be persistent, and not linked to a specific pod, so Persistent Volumes are needed to deploy them in Kubernetes.

When deploying a database in Kubernetes, we follow these steps:

* Create and configure a pod for the database engine
* Attach a Persistent Volume to the pod using a Persistent Volume Claim
* Mount the claimed volume in the pod

In order to use a Persistent Volume on a Kubernetes cluster, you must create a Persistent Volume Claim. Persistent Volume Claims are requests to provision a Persistent Volume of a specific type and configuration. The different kinds of persistent storage are defined by cluster admins, using Storage Classes.

When you need a Persistent Volume, you create a Persistent Volume Claim, and choose a Storage Class from those made available by the cluster administrators. Depending on the Storage Class, an actual infrastructure volume storage device is provisioned into your account and a Persistent Volume is created on this physical device. The Persistent Volume is a sort of virtual storage instance over the infrastructure virtual storage.

![persistent-volumes](images/working-with-persistent-volumes-01.png){.thumbnail}

## Persistent Volumes on OVHcloud Managed Kubernetes

We currently support four Storage Classes on OVHcloud Managed Kubernetes: `cinder-classic`, `cinder-high-speed`, `csi-cinder-classic` and `csi-cinder-high-speed`.  
All of them are based on [Cinder](https://docs.openstack.org/cinder/latest/){.external}, the OpenStack Block Storage service.  

The difference between them is the associated physical storage device. The `cinder-high-speed` and `csi-cinder-high-speed` use SSD, while `cinder-classic` and `csi-cinder-classic` use traditional spinning disks. Both are distributed transparently, on three physical local replicas.

When you create a Persistent Volume Claim on your Kubernetes cluster, we provision the Cinder storage into your account. This storage is charged according to the OVH [Flexible Cloud Block Storage Policy](https://www.ovhcloud.com/en/public-cloud/block-storage/){.external}.

Since Kubernetes 1.11, support for expanding `PersistentVolumeClaims` (PVCs) is enabled by default, and it works on Cinder volumes. In order to learn how to resize them, please refer to the [Resizing Persistent Volumes](../resizing-persistent-volumes/) tutorial. Kubernetes PVCs resizing only allows to expand volumes, nor to decrease them.
