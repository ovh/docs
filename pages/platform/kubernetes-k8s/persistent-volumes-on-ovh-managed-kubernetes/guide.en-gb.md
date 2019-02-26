---
title: Persistent Volumes on OVH Managed Kubernetes
slug: ovh-kubernetes-persistent-volumes
excerpt: 'Find out how to setup and manage Persistent Volumes on OVH Managed Kubernetes'
section: Getting started
---

**Last updated 29th January, 2019.**

## Persistent Volumes

Before going further, let's review how Kubernetes deals with data storage. There are currently two kinds of storage available with Kubernetes: Volumes and Persistent Volumes. 

Kubernetes Volumes exist only while the container pod exists, and are deleted when it is deleted. As a result, Kubernetes Volumes are only useful for storing temporary data.

Kubernetes Persistent Volumes allow us to work with non-volatile data in Kubernetes. Persistent Volumes are not tied to the pod lifecycle, or to a a single pod. Pods can claim Persistent Volumes, thus making the data available to them. 

> [!warning]
> You must be wondering how Persistent Volumes are compatible with the rule that *containers should be stateless* – one of the most important principles of best practice for containers. It's important to note that as the Kubernetes ecosystem has matured, and persistent storage solutions have emerged, this rule is no longer universally applicable. 
>

What are the use cases for Persistent Volumes in Kubernetes? Well, the most common application is databases. Database data, by definition, is meant to be persistent, and not linked to a specific pod, so Persistent Volumes are needed to deploy them in Kubernetes. When deploying a database in Kubernetes, we follow these steps:

- Create and configure a pod for the database engine
- Attach a Persistent Volume to the pod using a Persistent Volume Claim
- Mount the claimed volume in the pod

In order to use a Persistent Volume on a Kubernetes cluster, you must create a Persistent Volume Claim. Persistent Volume Claims are requests to provision a Persistent Volume of a specific type and configuration. The different kinds of persistent storage are defined by cluster admins, using Storage Classes.

When you need a Persistent Volume, you create a Persistent Volume Claim, and choose a Storage Class from those made available by the cluster administrators. Depending on the Storage Class, an actual infrastructure volume storage device is provisioned into your account and a Persistent Volume is created on this physical device. The Persistent Volume is a sort of virtual storage instance over the infrastructure virtual storage.

![persistent-volumes](images/working-with-persistent-volumes-01.png){.thumbnail}

## Persistent Volumes on OVH Managed Kubernetes

We currently support two Storage Classes on OVH Managed Kubernetes: *cinder-high-speed* and *cinder-classic*, both based on [Cinder](https://docs.openstack.org/cinder/latest/){.external}, the OpenStack Block Storage service. The difference between them is the associated physical storage device. *cinder-high-speed* uses SSD, while *cinder-classic* uses traditional spinning disks. Both are distributed transparently, on three physical local replicas.

When you create a Persistent Volume Claim on your Kubernetes cluster, we provision the Cinder storage into your account. This storage is charged according to the OVH [flexible cloud storage prices](https://www.ovh.com/world/public-cloud/storage/additional-disks/).

At the present time, Cinder volumes aren't resizable. We are developing this feature, and will announce it once it is ready.