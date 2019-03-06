---
title: Available and planned features
excerpt: ''
slug: available-upcoming-features
section: Technical resources
---

**Last updated 25th February, 2019.**

We list here the most frequently requested OVH Managed Kubernetes features that are currently available or planned in the upcoming year.

### Available features

- **Persistent Volumes ** Use the integrated Cinder Volumes to host the persistent data of your stateful containerized workloads. Details in the[working with peristent volumes ](../ovh-kubernetes-persistent-volumes/) guide.
- **Load Balancer** Use the free preview of our integrated load balancer to expose your services on any port. Details available in the [exposing your services](../using-lb/) guide.
- **Pod autoscaling** Use the  [standard horizontal pod autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) to distribute dynamically your containerized workloads on a given set of worker nodes.
- **RBAC** Use the standard [RBAC authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) mode to distribute rights within your organization and/or assure compatibility with specific applications.

### Planned features

- **vRack** : Currently, all traffic between you nodes is encrypted but transit through OVH public network. We will offer private clusters in OVH private network (vRack) later in the year.
- **Nodes autoscaling** : Additionnaly to pod autoscaling, we will provide you the concept of node pools and nodes autoscaling, allowing your cluster to grow automatically between your user-defined limits.
- **Localisation choice** : During 2019, we will offer you the possibility to choose one of multiple OVH Public Cloud datacenters at Cluster creation.
- **GPU worker nodes** : We will integrate GPU public cloud flavors in the worker nodes choice.
- **New major versions ** : We will support upcoming major versions, during the quarter following their official release.

and many more : feel free to open a feature request ticket though our support team.
