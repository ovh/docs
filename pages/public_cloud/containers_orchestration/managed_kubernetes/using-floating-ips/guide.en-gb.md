---
title: Using Floating IPs on Managed Kubernetes Service
excerpt: Find out how to enable and manage Floating IPs on worker nodes for Managed Kubernetes Service clusters
updated: 2026-02-03
---

## Objective

This guide explains how to use Floating IPs on the OVHcloud Managed Kubernetes Service (MKS) Standard plan. Floating IPs allow you to automatically assign public IP addresses to worker nodes in a node pool, enabling direct public access to nodes and leveraging node bandwidth instead of the Managed Gateway's bandwidth.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster with the **Standard plan** and some basic knowledge of how to operate it.

> [!primary]
> **Standard plan required.**
>
> Floating IPs per node are an exclusive feature of the **Managed Kubernetes Service Standard plan**. This feature is not available on the Free plan.
>
> For more information about MKS plans and their differences, see the [MKS Plans comparison guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/mks_plans).

> [!primary]
> **Regional availability.**
>
> The Standard plan with Floating IP support is available in the following regions:
>
> - **1-AZ regions**: EU-WEST-RBX (Roubaix), AP-SOUTH-MUM (Mumbai)
> - **3-AZ regions**: EU-WEST-PAR (Paris), EU-SOUTH-MIL (Milan)
>
> For a complete list of available regions by plan, see the following guide: [Regional Availability by MKS Plan](/pages/public_cloud/containers_orchestration/managed_kubernetes/datacenters-nodes-storage-flavors).

## What are Floating IPs for MKS?

Floating IPs for OVHcloud Managed Kubernetes Service allow you to automatically assign a public Floating IP address to each worker node in a node pool, including nodes managed by the autoscaler.

### Key benefits

- **Direct public access**: Each node gets its own public IP address, enabling direct external connectivity.
- **Node bandwidth usage**: Leverage the node's public bandwidth (1 Gbps, 10 Gbps, or more depending on instance flavor) instead of the Managed Gateway's bandwidth.
- **Automatic assignment**: Floating IPs are automatically assigned to nodes when the feature is enabled, including nodes created by the autoscaler.
- **Simplified architecture**: Direct node exposure without additional load balancing layers for specific use cases.

### Lifecycle management

The lifecycle of a Floating IP is tightly linked to the node it is attached to:

- **Node creation**: A Floating IP is automatically assigned when the node is created.
- **Node deletion**: The Floating IP is automatically deleted when the node is deleted.
- **Autoscaler scale down**: Floating IPs are deleted as nodes are scaled down.
- **Feature deactivation**: All Floating IPs in the node pool are deleted when the feature is disabled.

> [!warning]
> **Cluster updates and Floating IP persistence.**
>
> **Current behavior**: The cluster upgrade and patch strategy is currently **rolling upgrade**. During this process, nodes are replaced one by one, along with their associated Floating IPs. This means **Floating IPs will change** during cluster updates.
>
> **Future improvement**: A future **In Place** upgrade strategy will preserve Floating IPs during cluster updates, maintaining IP address continuity.

## Use cases

Floating IPs are particularly useful for the following scenarios:

- **High bandwidth applications**: Applications requiring direct access to node bandwidth (e.g., video streaming, large file transfers).
- **NodePort services**: Exposing services via NodePort with direct node access.
- **Bypass Gateway bandwidth**: Avoiding Managed Gateway bandwidth limitations for specific workloads.
- **Direct node access**: Scenarios requiring direct public access to nodes (monitoring, debugging, custom protocols).

## Pricing

Floating IPs are billed hourly according to OVHcloud Public Cloud pricing.

For detailed pricing information, please refer to [OVHcloud Public Cloud Prices](/links/public-cloud/prices-compute) (Floating IP section).

> [!primary]
> Floating IPs are charged per IP address per hour as long as they are assigned to a node. They are automatically deleted (and billing stops) when nodes are deleted.

## How to enable Floating IPs

You can enable Floating IPs on a node pool in three ways:

1. When creating a new cluster with a node pool.
2. When creating a new node pool in an existing cluster.
3. By updating an existing node pool.

### Method 1: Enable Floating IPs when creating a cluster

When creating a new MKS Standard cluster via the OVHcloud API, you can enable Floating IPs directly in the initial node pool configuration.

**API endpoint:**

> [!api]
>
> @api {v1} /cloud/project/ POST /cloud/project/{serviceName}/kube
>

**Example JSON payload** (partial, focusing on node pool with Floating IPs):

```json
{
  "name": "my-mks-cluster",
  "region": "EU-WEST-PAR",
  "version": "1.31",
  "plan": "STANDARD",
  "nodePools": [
    {
      "name": "my-nodepool-a",
      "flavorName": "c3-16",
      "desiredNodes": 3,
      "minNodes": 1,
      "maxNodes": 5,
      "autoscale": true,
      "attachFloatingIps": {
        "enabled": true
      },
      "availabilityZones": ["eu-west-par-a"]
    }
  ]
}
```

**Key parameter:**

- `attachFloatingIps.enabled`: Set to `true` to enable Floating IPs on the node pool.

### Method 2: Enable Floating IPs when creating a new node pool

To enable Floating IPs on a new node pool in an existing cluster, use the following API endpoint.

**API endpoint:**

> [!api]
>
> @api {v1} /cloud/project/ POST /cloud/project/{serviceName}/kube/{kubeId}/nodepool
>

**Example JSON payload:**

```json
{
  "name": "my-nodepool-with-fips",
  "flavorName": "c3-16",
  "desiredNodes": 3,
  "minNodes": 1,
  "maxNodes": 5,
  "autoscale": true,
  "attachFloatingIps": {
    "enabled": true
  },
  "availabilityZones": ["eu-west-par-a"],
  "antiAffinity": true,
  "monthlyBilled": false
}
```

### Method 3: Enable/disable Floating IPs on an existing node pool

You can enable or disable Floating IPs on an existing node pool using the PUT endpoint.

**API endpoint:**

> [!api]
>
> @api {v1} /cloud/project/ PUT /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}
>

**Example JSON payload** (to enable):

```json
{
  "attachFloatingIps": {
    "enabled": true
  }
}
```

**Example JSON payload** (to disable):

```json
{
  "attachFloatingIps": {
    "enabled": false
  }
}
```

> [!warning]
> **Disabling Floating IPs.**
>
> When you disable Floating IPs on a node pool, **all Floating IPs attached to nodes in that pool will be immediately deleted**. This will interrupt any connections relying on those public IP addresses.

### Using OVHcloud CLI

You can also manage Floating IPs using the [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli).

**Example: Creating a node pool with Floating IPs enabled.**

```bash
ovhcloud cloud kube nodepool create <cluster_id> \
  --flavor-name c3-16 \
  --desired-nodes 3 \
  --min-nodes 1 \
  --max-nodes 5 \
  --name my-nodepool-with-fips \
  --attach-floating-ips \
  --autoscale \
  --anti-affinity
```

**Example: Creating a node pool with Floating IPs using a configuration file.**

First, generate an example configuration file:

```bash
ovhcloud cloud kube nodepool create <cluster_id> --init-file ./nodepool-params.json
```

Edit the `nodepool-params.json` file to enable Floating IPs:

```json
{
  "antiAffinity": true,
  "attachFloatingIps": {
    "enabled": true
  },
  "autoscale": true,
  "availabilityZones": ["eu-west-par-a"],
  "desiredNodes": 3,
  "flavorName": "c3-16",
  "maxNodes": 5,
  "minNodes": 1,
  "name": "my-nodepool-with-fips"
}
```

Then create the node pool:

```bash
ovhcloud cloud kube nodepool create <cluster_id> --from-file ./nodepool-params.json
```

For more information about the OVHcloud CLI, see "[OVHcloud CLI - Create Node Pool](https://github.com/ovh/ovhcloud-cli/blob/main/doc/ovhcloud_cloud_kube_nodepool_create.md)".

## Verifying Floating IP assignment

### Using Kubernetes kubectl

You can verify that nodes have Floating IPs assigned by checking the node's external IP:

```bash
kubectl get nodes -o wide
```

Example output:

```console
NAME                                         STATUS   ROLES    AGE   VERSION   INTERNAL-IP   EXTERNAL-IP      OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME
nodepool-fip-node-1234                      Ready    <none>   5m    v1.31.0   10.0.1.10     203.0.113.45     Ubuntu 22.04.3 LTS   5.15.0-88-generic   containerd://1.7.2
nodepool-fip-node-5678                      Ready    <none>   5m    v1.31.0   10.0.1.11     203.0.113.46     Ubuntu 22.04.3 LTS   5.15.0-88-generic   containerd://1.7.2
nodepool-fip-node-9012                      Ready    <none>   5m    v1.31.0   10.0.1.12     203.0.113.47     Ubuntu 22.04.3 LTS   5.15.0-88-generic   containerd://1.7.2
```

The `EXTERNAL-IP` column shows the Floating IP assigned to each node.

### Using OVHcloud API

You can also query the node pool configuration via the OVHcloud API to verify that Floating IPs are enabled:

> [!api]
>
> @api {v1} /cloud/project/ GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}
>

The response will include:

```json
{
  "id": "abc123...",
  "name": "my-nodepool-with-fips",
  "attachFloatingIps": {
    "enabled": true
  },
  ...
}
```

### Using OpenStack CLI (advanced)

For advanced users, it is possible to use OpenStack CLI to list Floating IPs and their associations:

```bash
openstack floating ip list
```

For more information on managing Floating IPs with OpenStack, see the following guide: [Concepts - Additional IP or Floating IP](/pages/public_cloud/public_cloud_network_services/concepts-02-additional-ip-vs-floating-ip).

## Best practices

### Security considerations

When using Floating IPs, each node is directly exposed to the internet. Follow these security best practices:

- **Network Policies**: Implement Kubernetes Network Policies to restrict pod-to-pod traffic.
- **Security Groups**: Configure OVHcloud Security Groups to limit inbound traffic to only necessary ports.
- **Node hardening**: Ensure nodes are properly hardened and follow security best practices.
- **Monitoring**: Enable monitoring and alerting for suspicious activity on public IPs.

### Bandwidth management

- **Instance flavor selection**: Choose instance flavors with adequate bandwidth for your workload (B3, C3 and R3 flavors offer 10 Gbps bandwidth).
- **Traffic distribution**: Distribute traffic-heavy workloads across multiple nodes to avoid bottlenecks.

### Cost optimization

- **Autoscaler configuration**: Configure autoscaler appropriately to avoid unnecessary Floating IP allocation during scale-up.
- **Feature targeting**: Only enable Floating IPs on node pools that truly require direct public access.
- **Review regularly**: Periodically review Floating IP usage and disable the feature on node pools that no longer require it.

## Limitations and known issues

- **Rolling upgrades**: During cluster upgrades and patches, Floating IPs are replaced along with nodes. A future In Place upgrade strategy will address this limitation.
- **Standard plan only**: Floating IPs are exclusively available on the Standard plan.
- **Regional availability**: Currently available only in specific regions (EU-WEST-RBX, AP-SOUTH-MUM, EU-WEST-PAR, EU-SOUTH-MIL).
- **No manual IP management**: You cannot manually assign specific Floating IP addresses; they are automatically allocated by the platform.

## Go Further

- [MKS Plans comparison](/pages/public_cloud/containers_orchestration/managed_kubernetes/mks_plans): Learn more about Free vs Standard plan differences.
- [Regional availability](/pages/public_cloud/containers_orchestration/managed_kubernetes/datacenters-nodes-storage-flavors): Check available regions for each plan.
- [OVHcloud API console](https://eu.api.ovh.com/console/): Explore the full OVHcloud API.
- [Concepts - Additional IP or Floating IP](/pages/public_cloud/public_cloud_network_services/concepts-02-additional-ip-vs-floating-ip): Understand the difference between Additional IP and Floating IP.
- [OVHcloud Public Cloud prices](/links/public-cloud/prices-compute): Check Floating IP pricing.

Join our [community of users](/links/community).
