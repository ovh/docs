---
title: Configuring pods and services IP allocation policy on OVHcloud Managed Kubernetes (Standard plan only)
excerpt: "Find out how to configure the IP allocation policy for your pods and service on an OVHcloud Managed Kubernetes cluster with Standard plan"
updated: 2026-02-23
---

## Objective

This guide will detail how to customize the IP ranges used for the pods and services in your OVHcloud Managed Kubernetes cluster with Standard plan.

## Requirements

- An OVHcloud Managed Kubernetes cluster

## Limits

The customization of the pods and services IP allocation policy is not possible on clusters with the Free plan.

It is not possible to modify the IP allocation policy of a running cluster: either the configuration is done at the creation of the cluster or when the cluster is reset (implying the loss of all data in the cluster).

## Configuration details

Two parameters are available to control the IP allocation policy in your OVHcloud Managed Kubernetes cluster.

| Parameter          | Default value   | Function                                                           |
| ------------------ | --------------- | ------------------------------------------------------------------ |
| `podsIpv4Cidr`     | `10.240.0.0/13` | This is the subnet used to address all the pods in the cluster     |
| `servicesIpv4Cidr` | `10.3.0.0/16`   | This is the subnet used to address all the services in the cluster |

> [!primary]
>
> You can find more information about the CIDR notation here: [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
>

Here are some general rules to consider about these parameters:

- `podsIpv4Cidr` and `servicesIpv4Cidr` _must not_ collide with each other, nor with the OpenStack subnets on the same VLAN in your project
- The subnets _must_ be chosen in the [private network blocks](https://en.wikipedia.org/wiki/List_of_reserved_IP_addresses)
- The minimal size allowed for the `podsIPpv4Cidr` and the `servicesIpv4Cidr` subnets is `/16`

Please note that each node in the cluster is assigned a `/24` subnet inside the `podsIpv4Cidr`; choosing a `/16` subnet would limit the
cluster to 256 nodes.

> [!warning]
>
> Adding nodes past the limit of possible `/24` subnets in the `podsIpv4Cidr` could render your cluster unstable.
>

## Instructions using the OVHcloud API

> [!primary]
>
> You can find more information on how to use the OVHcloud API here: [First steps with the OVHcloud API](/pages/manage_and_operate/api/first-steps).
>

### Creating a new cluster with a custom IP allocation policy

Using the following call, you can create a new cluster:

> [!api]
>
> @api {v1} /cloud/project/{serviceName}/kube POST /cloud/project/{serviceName}/kube
>

To set a custom IP allocation policy on pods and or services, you can take example on the following example:

```json
{
  "name": "my-cluster-with-custom-ip",
  "nodepool": {
    "desiredNodes": 3,
    "flavorName": "b3-8",
    "name": "my-nodepool"
  },
  "region": "GRA11",
  "ipAllocationPolicy": {
    "podsIpv4Cidr": "172.16.0.0/12",
    "servicesIpv4Cidr": "10.100.0.0/16"
  }
}
```

Once the cluster is created, using this call should show you the IP allocation policy you have set:

> [!api]
>
> @api {v1} /cloud/project/{serviceName}/kube GET /cloud/project/{serviceName}/kube
>

### Resetting a cluster to change its IP allocations

> [!warning]
>
> Resetting a cluster will delete all data and workload running on the cluster.
>

Using the following call, you can reset a cluster and specify a custom IP allocation policy:

> [!api]
>
> @api {v1} /cloud/project/{serviceName}/kube/{kubeId}/reset POST /cloud/project/{serviceName}/kube/{kubeId}/reset
>

To set a custom IP allocation policy on pods and or services, you can take example on the following example:

```json
{
  "ipAllocationPolicy": {
    "podsIpv4Cidr": "172.16.0.0/12",
    "servicesIpv4Cidr": "10.100.0.0/16"
  }
}
```

Once the cluster is reset, using this call should show you the IP allocation policy you have set:

> [!api]
>
> @api {v1} /cloud/project/{serviceName}/kube GET /cloud/project/{serviceName}/kube
>
