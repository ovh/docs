---
title: Customising IP allocation on an OVHcloud Managed Kubernetes cluster
excerpt: "Find out how to configure the IP allocation policy for your pods and services on an OVHcloud Managed Kubernetes cluster with Standard plan"
updated: 2026-03-17
---

## Objective

**This guide details how to customise the IP ranges used for the pods and services in your OVHcloud Managed Kubernetes cluster with Standard plan.**

## Requirements

- An [OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes) cluster

## Limits

The customisation of the pods and services IP allocation policy is not possible on clusters with the Free plan.

You cannot modify the IP allocation policy of a running cluster. It must be set at cluster creation or when resetting the cluster, which erases all data.

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

Keep the following rules in mind for these parameters:

- `podsIpv4Cidr` and `servicesIpv4Cidr` **must not** collide with each other, nor with the OpenStack subnets on the same VLAN in your project.
- The subnets **must** be chosen in the [private network blocks](https://en.wikipedia.org/wiki/List_of_reserved_IP_addresses).
- The minimal size allowed for the `podsIpv4Cidr` and the `servicesIpv4Cidr` subnets is `/16`.

Each node in the cluster is assigned a `/24` subnet inside `podsIpv4Cidr`; choosing a `/16` limits the cluster to 256 nodes.

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

To set a custom IP allocation policy on pods and/or services, you can use the following example:

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

Once the cluster is created, use this call to verify the IP allocation policy:

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

To set a custom IP allocation policy on pods and/or services, you can use the following example:

```json
{
  "ipAllocationPolicy": {
    "podsIpv4Cidr": "172.16.0.0/12",
    "servicesIpv4Cidr": "10.100.0.0/16"
  }
}
```

Once the cluster is reset, use this call to verify the IP allocation policy:

> [!api]
>
> @api {v1} /cloud/project/{serviceName}/kube GET /cloud/project/{serviceName}/kube
>

## Go further

[Known limits of OVHcloud Managed Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/known-limits)

[First steps with the OVHcloud API](/pages/manage_and_operate/api/first-steps)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
