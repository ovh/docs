---
title: Taint, cordon and drain specific Nodes and Nodes Pools
slug: taint-drain-node-pools
excerpt: 'Find out how to do some operations on specific Nodes and Nodes Pools, like taint, drain and cordon, on OVHcloud Managed Kubernetes'
section: Tutorials
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

**Last updated 22 December 2021.**

## Objective

We previously show you how to deploy your applications to specific `Nodes` and `Nodes Pools`, with `labels` and `NodeAffinity` Kubernetes concepts. In this new tutorial we will show you how to do some common operations on `Nodes` and `Nodes Pools` like `taint`, `cordon` and `drain`, on your OVHcloud Managed Kubernetes Service.

Thanks to the Node Pool's labels propagation to Nodes, you will:

- create a Managed Kubernetes cluster
- create a node pool
- create another node pool, with a different configuration and with autoscaling activated
- taint a node
- cordon a node
- drain a node

## Why?

A node is a virtual (VM) or physical machine.

Your applications, your workloads will run on Pods, and Pods are running on Nodes.

But sometimes, Kubernetes scheduler can't deploy a Pod on a Node, for several reasons:
- Node is not ready
- Nos is unreachable
- Out of disk
- Network unaivalable
- …

For these uses cases, and others ones, you can do operations on Nodes. And thanks to the Node Pool's labels propagation to Nodes, you can target only Nodes about a particular Node Pool.

## Requirements

- a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Cluster creation

Follow the [cluster creation](../label-nodeaffinity-node-pools/#cluster-creation) step by step guide.

### Second node pool creation

Now, your Kubernetes cluster is up and running. You can see it in your OVHcloud Control Panel.

![Select your cluster](images/create-a-nodepool-1.png){.thumbnail}

Click on your cluster, then on `Node pools`{.action} tab.

We will create our second Node pool.
Click on `Add a node pool`{.action} button.

Then enter a name for your second node pool, `second-node-pool` for example.

![Name your second node pool](images/create-a-nodepool-2.png){.thumbnail}

Select a flavor for your new node pool, we can choose "B2-7" like our other node pool.

![Select a flavor for your second node pool](images/create-a-nodepool-3.png){.thumbnail}

In the next step, define the size of our second node pool.
This time, we can enable the `Autoscaling`{.action} feature.
Define the minimum and maximum pool size in that case, 3 in minimum and 10 in maximum, for example.

> [!primary]
> By enabling anti-affinity, current and future nodes will be launched on different hypervisors (physical servers), guaranteeing higher fault tolerance.
> 

![Define a size and autoscaling for your second node pool](images/create-a-nodepool-4.png){.thumbnail}

And then, choose `Hourly` billing mode for this second node pool.

![Billing mode](images/create-a-nodepool-5.png){.thumbnail}

The node pool creation is now in progress. It should be available within a few minutes in your OVHcloud Control Panel.

The second node pool will be first in `Installing` status.
Wait until its status changes to `OK`.

![Status Installing](images/create-a-nodepool-6.png){.thumbnail}

![Status OK](images/create-a-nodepool-7.png){.thumbnail}

### Check everything is correctly configured

To do some operations on your Nodes, through `kubectl` CLI, we invite you to follow our guide to [configuring default settings](https://docs.ovh.com/gb/en/kubernetes/configuring-kubectl/).

When you can access to the cluster through `kubectl` command, let's display our node pools:

```bash
$ kubectl get nodepool
NAME                                            FLAVOR   AUTO SCALED   MONTHLY BILLED   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
nodepool-9680a2e9-3e58-48c7-b447-69f5a05c1828   b2-7     false         false            false           3         3         3            3           0     100   23h
second-node-pool                                b2-7     true          false            false           3         3         3            3           3     10    6m54s
```

Our two node pools exist and we can see the different configuration and autoscaling mode.

Let's display our nodes. You should have 3 nodes running in our first node pool and 3 nodes in our "second-node-pool" node pool:

```bash
$ kubectl get nodes
NAME                                         STATUS   ROLES    AGE     VERSION
nodepool-9680a2e9-3e58-48c7-b4-node-874105   Ready    <none>   23h     v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-b5c9e2   Ready    <none>   23h     v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-c65648   Ready    <none>   23h     v1.22.2
second-node-pool-node-1e8015                 Ready    <none>   3m44s   v1.22.2
second-node-pool-node-86c98b                 Ready    <none>   4m10s   v1.22.2
second-node-pool-node-fba5bf                 Ready    <none>   4m10s   v1.22.2
```

### Cordon a Node

Cordon a node means make the node unschedulable. This means that this node cannot accommodate any more pods as long as it is marked as `Unschedulable`. 

![Cordon a Node](images/cordon.png)

Instead of cordon each node manually:

```bash
kubectl cordon my-node
```

You can cordon all the nodes in a node pool. We will show you how to cordon all nodes for `second-node-pool` for example thanks to `label`.

```bash
kubectl cordon -l "nodepool=second-node-pool"
```

In my example here the result I got:

<pre class="console"><code>$ kubectl cordon -l "nodepool=second-node-pool"
node/second-node-pool-node-1e8015 cordoned
node/second-node-pool-node-86c98b cordoned
node/second-node-pool-node-fba5bf cordoned

$ kubectl get nodes
NAME                                         STATUS                     ROLES    AGE     VERSION
nodepool-9680a2e9-3e58-48c7-b4-node-874105   Ready                      <none>   23h     v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-b5c9e2   Ready                      <none>   23h     v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-c65648   Ready                      <none>   23h     v1.22.2
second-node-pool-node-1e8015                 Ready,SchedulingDisabled   <none>   9m13s   v1.22.2
second-node-pool-node-86c98b                 Ready,SchedulingDisabled   <none>   9m39s   v1.22.2
second-node-pool-node-fba5bf                 Ready,SchedulingDisabled   <none>   9m39s   v1.22.2
</code></pre>

All the nodes in `second-node-pool` are now marked as `Unschedulable`.
This means you can't deploy Pods on these nodes, on this node pool.

### UnCordon a Node

You can also undo your action with `uncordon` command.

```bash
kubectl uncordon -l "nodepool=second-node-pool"
```

In my example:

<pre class="console"><code>$ kubectl uncordon -l "nodepool=second-node-pool"
node/second-node-pool-node-1e8015 uncordoned
node/second-node-pool-node-86c98b uncordoned
node/second-node-pool-node-fba5bf uncordoned

$ kubectl get nodes
NAME                                         STATUS   ROLES    AGE   VERSION
nodepool-9680a2e9-3e58-48c7-b4-node-874105   Ready    <none>   23h   v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-b5c9e2   Ready    <none>   23h   v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-c65648   Ready    <none>   23h   v1.22.2
second-node-pool-node-1e8015                 Ready    <none>   27m   v1.22.2
second-node-pool-node-86c98b                 Ready    <none>   27m   v1.22.2
second-node-pool-node-fba5bf                 Ready    <none>   27m   v1.22.2
</code></pre>

Nodes are in `Ready` state again.

### Drain a Node

You can use `kubectl drain` command to safely evict all of your pods from a node before you perform maintenance on the node or reduce the number of nodes for example. Safe evictions allow the pod's containers to gracefully terminate and will respect the `PodDisruptionBudgets` you have specified (if relevant).

![Drain a Node](images/drain.png)

You can drain all the nodes for `second-node-pool` thanks to `label`.

```bash
kubectl drain -l "nodepool=second-node-pool"
```

In my example:

<pre class="console"><code>$ kubectl drain -l "nodepool=second-node-pool"

node/second-node-pool-node-1e8015 cordoned
node/second-node-pool-node-86c98b cordoned
node/second-node-pool-node-fba5bf cordoned

There are pending nodes to be drained:
 second-node-pool-node-1e8015
 second-node-pool-node-86c98b
 second-node-pool-node-fba5bf
error: cannot delete DaemonSet-managed Pods (use --ignore-daemonsets to ignore): kube-system/canal-9tc54, kube-system/kube-proxy-7l7h9, kube-system/wormhole-lxknc

$ kubectl get nodes
NAME                                         STATUS                     ROLES    AGE    VERSION
nodepool-9680a2e9-3e58-48c7-b4-node-874105   Ready                      <none>   25h    v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-b5c9e2   Ready                      <none>   25h    v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-c65648   Ready                      <none>   25h    v1.22.2
second-node-pool-node-1e8015                 Ready,SchedulingDisabled   <none>   118m   v1.22.2
second-node-pool-node-86c98b                 Ready,SchedulingDisabled   <none>   119m   v1.22.2
second-node-pool-node-fba5bf                 Ready,SchedulingDisabled   <none>   119m   v1.22.2
</code></pre>

As you can see, Kubernetes can't remove `DaemonSet` objects so in order to not have this error message, ou can add the `--ignore-daemonsets` option:

```bash
kubectl drain -l "nodepool=second-node-pool" --ignore-daemonsets
```

Now you can do whatever you want on Nodes or on this node pool and after that you can uncordon the Nodes of the node pool, to come back as before the drain:

```bash
kubectl uncordon -l "nodepool=second-node-pool"
```

Nodes are again in `Ready` state.

<pre class="console"><code>$ kubectl uncordon -l "nodepool=second-node-pool"

kunode/second-node-pool-node-1e8015 uncordoned
node/second-node-pool-node-86c98b uncordoned
bnode/second-node-pool-node-fba5bf uncordoned

$ kubectl get nodes
NAME                                         STATUS   ROLES    AGE    VERSION
nodepool-9680a2e9-3e58-48c7-b4-node-874105   Ready    <none>   25h    v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-b5c9e2   Ready    <none>   25h    v1.22.2
nodepool-9680a2e9-3e58-48c7-b4-node-c65648   Ready    <none>   25h    v1.22.2
second-node-pool-node-1e8015                 Ready    <none>   122m   v1.22.2
second-node-pool-node-86c98b                 Ready    <none>   123m   v1.22.2
second-node-pool-node-fba5bf                 Ready    <none>   123m   v1.22.2
</code></pre>

### Taint a Node

Node taints are `key:value` pairs associated with an effect.
Multiple taints can be setted in the same Node.

![Taint a Node](images/taint.png)

* With `NoSchedule` taint, pods that don’t tolerate the taint can’t be schedule on the node.
* With `PreferNoSchedule` taint, Kubernetes avoid scheduled Pods that don’t tolerate the taint.
* With `NoExecute` taint, Pods are evicted from the Node if they are already running, else they can’t be scheduling.

You can add a taint in all the nodes for `second-node-pool` thanks to `label`.

Pause a node, don’t accept new workloads on it:

```bash
kubectl taint node -l "nodepool=second-node-pool" my-key=my-value:NoSchedule
```

And you can display the taints for all nodes:

```bash
kubectl get nodes  -o=jsonpath='{range .items[*]}{.metadata.name}{"\n"}{.spec.taints}{"\n"}{end}'
```

In my example:

<pre class="console"><code>$ kubectl taint node -l "nodepool=second-node-pool" my-key=my-value:NoSchedule
node/second-node-pool-node-1e8015 tainted
node/second-node-pool-node-86c98b tainted
node/second-node-pool-node-fba5bf tainted

$ kubectl get nodes  -o=jsonpath='{range .items[*]}{.metadata.name}{"\n"}{.spec.taints}{"\n"}{end}'
nodepool-9680a2e9-3e58-48c7-b4-node-874105
nodepool-9680a2e9-3e58-48c7-b4-node-b5c9e2
nodepool-9680a2e9-3e58-48c7-b4-node-c65648
second-node-pool-node-1e8015
[{"effect":"NoSchedule","key":"my-key","value":"my-value"}]
second-node-pool-node-86c98b
[{"effect":"NoSchedule","key":"my-key","value":"my-value"}]
second-node-pool-node-fba5bf
[{"effect":"NoSchedule","key":"my-key","value":"my-value"}]
</code></pre>

You can Unpause a node:

```bash
kubectl taint node -l "nodepool=second-node-pool" my-key=my-value:NoSchedule my-key:NoSchedule-
```

In my example:

<pre class="console"><code>$ kubectl taint node -l "nodepool=second-node-pool" my-key:NoSchedule-
node/second-node-pool-node-1e8015 untainted
node/second-node-pool-node-86c98b untainted
node/second-node-pool-node-fba5bf untainted
</code></pre>

### Taint a Node and create a pod only on these tainted Nodes

Another useful feature could be to taint a Node and to deploy an application only on particular nodes. 
For example you can dedicate a set of nodes for exclusive use by a particular set of users or define a subset of nodes with specialized hardware.

In order to do that you can taint `second-node-pool` nodes with a particular key and value `flavor=b2-7` for example:

```bash
kubectl taint node -l "nodepool=second-node-pool" flavor=b2-7:NoSchedule
```

In my example:
<pre class="console"><code>$ kubectl taint node -l "nodepool=second-node-pool" flavor=b2-7:NoSchedule
node/second-node-pool-node-1e8015 tainted
node/second-node-pool-node-86c98b tainted
node/second-node-pool-node-fba5bf tainted

$ kubectl get nodes  -o=jsonpath='{range .items[*]}{.metadata.name}{"\n"}{.spec.taints}{"\n"}{end}'
nodepool-9680a2e9-3e58-48c7-b4-node-874105
nodepool-9680a2e9-3e58-48c7-b4-node-b5c9e2
nodepool-9680a2e9-3e58-48c7-b4-node-c65648
second-node-pool-node-1e8015
[{"effect":"NoSchedule","key":"flavor","value":"b2-7"}]
second-node-pool-node-86c98b
[{"effect":"NoSchedule","key":"flavor","value":"b2-7"}]
second-node-pool-node-fba5bf
[{"effect":"NoSchedule","key":"flavor","value":"b2-7"}]
</code></pre>

And then you can create a Pod that can be scheduled only on Nodes who have the taint `flavor=b2-7:NoSchedule`.

Create a `my-pod.yaml` YAML manifest file with the following content:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: hello-world
    image: ovhplatform/hello
    ports:
    - containerPort: 80
  tolerations:
  - key: "flavor"
    value: "b2-7"
    effect: "NoSchedule"
```

Then deploy it:

```bash
kubectl apply -f my-pod.yaml
```

And check your new Pod is running in a `second-node-pool`'s Node:

```bash
kubectl get po -o wide
```

In my example:
<pre class="console"><code>$ kubectl apply -f my-pod.yaml
pod/my-pod created

$ kubectl get po -o wide
NAME     READY   STATUS    RESTARTS   AGE   IP         NODE                           NOMINATED NODE   READINESS GATES
my-pod   1/1     Running   0          4s    10.2.3.2   second-node-pool-node-86c98b   <none>           <none>
</code></pre>

Thanks to the `-o wide` option, you can verify that your Pod is running on `second-node-pool-node-86c98b` node.

## Where do we go from here?

In this tutorial you saw how to do some operations on Nodes, taint, drain, cordon, uncordon and how to deploy Pods on particular nodes in your OVHcloud Managed Kubernetes cluster.

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes documentation site](../).

Join our [community of users](https://community.ovh.com/en/).
