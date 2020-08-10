---
title: Available and planned features
excerpt: ''
slug: available-upcoming-features
section: Technical resources
---

**Last updated August 10th, 2020.**

We list here the most frequently requested OVHcloud Managed Kubernetes features that are currently available or planned in the upcoming year.

### Available features

- **Persistent Volumes** Use the integrated Cinder Volumes to host the persistent data of your stateful containerized workloads. Details in the[working with persistent volumes ](../ovh-kubernetes-persistent-volumes/) guide.
- **Load Balancer** Use the integrated External Load Balancers to expose your services on any port of a dedicated public IPv4. Details available in the [exposing your services](../using-lb/) guide.
- **New versions** : We support the last 3 stable K8s versions and offer the latest one during the quarter following its official release. We also propose managed version upgrades.
- **RBAC** Use the standard [RBAC authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/){.external} mode to distribute rights within your organization and/or assure compatibility with specific applications.
- **Pod autoscaling** Use the  [standard horizontal pod autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/){.external} to distribute dynamically your containerized workloads on a given set of worker nodes.
- **Node pools management**: Easily [resize you cluster through our UI or directly using standard Kubernetes tooling by editing a Nodepool CRD ](../node-pools-crd/) .
- **Localisation choice** : We offer you the possibility to choose one of multiple OVH Public Cloud datacenters at cluster creation. We currently propose the service in France (GRA and SBG) and Canada (BHS). We will progressively open Managed Kubernetes Service in all OVHcloud Public Cloud regions.

### Planned features

- **vRack** : Currently, all traffic between you nodes is encrypted but transit through OVH public network. We will offer private clusters in OVH private network (vRack) later in the year.
- **Integrated RWX persistent storage** : Currently, we support dynamic persistent storage with block storage, that can only be attached to a single worker node at a time. We will later offer FSaaS that will support ReadWriteMany. Note that in the meantine, you can [configure Managed Kubernetes to work with OVHcloud NAS-HA ](../Configuring-multi-attach-persistent-volumes-with-ovhcloud-nas-ha/) .
- **NodePools autoscaling (cluster autoscaler)** : Additionnaly to pod autoscaling, we will provide you the concept of node pools autoscaling, allowing your cluster to grow automatically between your user-defined limits.
- **Bare metal worker nodes** : We will integrate bare metal (physical machines) servers in the worker nodes choice. Users looking for extreme local storage IOPS performance can [use Managed Kubernetes on instances with dedicated NVMe disks](../formating-nvme-disk-on-iops-nodes/) .

and many more : feel free to open a feature request ticket though our support team.
