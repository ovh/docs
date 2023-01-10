---
title: Configuring the cluster autoscaler
slug: configuring-cluster-autoscaler
excerpt: ''
section: User guides
order: 7
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/configuring-cluster-autoscaler/'
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Last updated May 17<sup>th</sup>, 2022.**

## Objective

OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them.

During the day-to-day life of your cluster, you may want to dynamically adjust the size of your cluster to accommodate to your workloads. The cluster autoscaler simplifies the task by scaling up or down your OVHcloud Managed Kubernetes cluster to meet the demand of your workloads.

This guide follows up the [Using the cluster autoscaler](../using-cluster-autoscaler) guide, and it will cover a description of the cluster autoscaler configuration.

## Requirements

- An OVHcloud Managed Kubernetes cluster
- A basic understanding of [how the cluster autoscaler works and how to enable it](../using-cluster-autoscaler)

## Instructions

### Cluster autoscaler configuration

When the autoscaler is enabled on a node pool, it uses a default configuration.

Here you have a description of the parameters used in the autoscaler configuration, and their default value:

| Setting	| Description |	Default value |
| ------- | ----------- | ------------- |
| scan-interval	| How often cluster is reevaluated for scale up or down	| 10 seconds |
| scale-down-delay-after-add	| How long after scale up that scale down evaluation resumes	| 10 minutes |
| scale-down-delay-after-delete	| How long after node deletion that scale down evaluation resumes	| scan-interval |
| scale-down-delay-after-failure	| How long after scale down failure that scale down evaluation resumes	| 3 minutes |
| scale-down-unneeded-time	| How long a node should be unneeded before it is eligible for scale down	| 10 minutes |
| scale-down-unready-time	| How long an unready node should be unneeded before it is eligible for scale down	| 20 minutes |
| scale-down-utilization-threshold	| Node utilization level, defined as sum of requested resources divided by capacity, below which a node can be considered for scale down	| 0.5 |
| max-graceful-termination-sec	| Maximum number of seconds the cluster autoscaler waits for pod termination when trying to scale down a node	| 600 seconds |
| balance-similar-node-groups	| Detects node pools with the same instance type and the same set of labels and balances the number of nodes between them	| false |
| expander	| Type of node pool expander to be used in scale up. Possible values: most-pods, random, least-waste, priority	| random |
| skip-nodes-with-local-storage	| If true cluster autoscaler will never delete nodes with pods with local storage, for example, EmptyDir or HostPath	| false |
| skip-nodes-with-system-pods	| If true cluster autoscaler will never delete nodes with pods from kube-system (except for DaemonSet or mirror pods)	| false |
| max-empty-bulk-delete	| Maximum number of empty nodes that can be deleted at the same time	| 10 nodes |
| new-pod-scale-up-delay	| For scenarios like burst/batch scale where you don't want the cluster autoscaler to act before the kubernetes scheduler could schedule all the pods, you can tell the CA to ignore unscheduled pods before they're a certain age.	| 0 seconds |
| max-total-unready-percentage	| Maximum percentage of unready nodes in the cluster. After this percentage is exceeded, the CA halts operations	| 45% |
| max-node-provision-time	| Maximum time the autoscaler waits for a node to be provisioned	| 15 minutes |
| ok-total-unready-count	| Number of allowed unready nodes, irrespective of max-total-unready-percentage	| 3 node |

You can get more information on those parameters on the [Kubernetes autoscaler documentation](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md).

If you consider we should reevaluate the default value and/or prioritize the possible customization of one of those parameters, you are welcome to create an issue on our [Public roadmap](https://github.com/ovh/public-cloud-roadmap/projects/1).

### Configuring the autoscaler

The easiest way to enable the autoscaler is using the Kubernetes API, for example using `kubectl`.

#### Using Kubernetes API

When the autoscaler is enabled on a node pool, it uses a [default configuration](https://docs.ovh.com/es/kubernetes/configuring-cluster-autoscaler/#cluster-autoscaler-configuration).

To list node pools, you can use:

```bash
kubectl get nodepools
```

You can change several parameters values through kubectl command:

```bash
kubectl patch nodepool <your_nodepool_name> --type="merge" --patch='{"spec": {"autoscaling": {"scaleDownUnneededTimeSeconds": <a_value>, "scaleDownUnreadyTimeSeconds": <another_value>, "scaleDownUtilizationThreshold": "<and_another_one>"}}}'
```

In my example cluster:
<pre class="console"><code>$ kubectl get nodepool nodepool-b2-7 -o json | jq .spec
{
  "antiAffinity": false,
  "autoscale": true,
  "autoscaling": {
    "scaleDownUnneededTimeSeconds": 600,
    "scaleDownUnreadyTimeSeconds": 1200,
    "scaleDownUtilizationThreshold": "0.5"
  },
  "desiredNodes": 3,
  "flavor": "b2-7",
  "maxNodes": 100,
  "minNodes": 0,
  "monthlyBilled": false
}
</code></pre>

<pre class="console"><code>$ kubectl patch nodepool nodepool-b2-7 --type="merge" --patch='{"spec": {"autoscaling": {"scaleDownUnneededTimeSeconds": 900, "scaleDownUnreadyTimeSeconds": 1500, "scaleDownUtilizationThreshold": "0.7"}}}'
nodepool.kube.cloud.ovh.com/nodepool-b2-7 patched
</code></pre>

<pre class="console"><code>$ kubectl get nodepool nodepool-b2-7 -o json | jq .spec
{
  "antiAffinity": false,
  "autoscale": true,
  "autoscaling": {
    "scaleDownUnneededTimeSeconds": 900,
    "scaleDownUnreadyTimeSeconds": 1500,
    "scaleDownUtilizationThreshold": "0.7"
  },
  "desiredNodes": 3,
  "flavor": "b2-7",
  "maxNodes": 100,
  "minNodes": 0,
  "monthlyBilled": false
}
</code></pre>

For the moment, only these following parameters are editable:

- autoscale
- autoscaling
- desiredNodes
- minNodes
- maxNodes

If you consider that we should prioritize the possible customization of other autoscaling parameters, you are welcome to create an issue on our [Public roadmap](https://github.com/ovh/public-cloud-roadmap/projects/1).

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovh.com/public-cloud/kubernetes/).

Otherwise to skip it and learn more about using your Kubernetes cluster the practical way, we invite you to look at our  [tutorials](../) .

Join our [community of users](https://community.ovh.com/en/).
