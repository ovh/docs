---
title:  Managing nodes with the NodePools CRD
excerpt: 'Find out how to manage nodes with the NodePools CRD'
updated: 2023-05-11
---

## Objective

OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. This guide will cover one of the first steps after ordering a cluster: managing nodes and node pools, using the NodePools CRD.

In this guide, we are assuming you're using the `NodePools` CRD via `kubectl` to manage your Kubernetes cluster. If you are using a different method, like the [OVHcloud Cloud Manager](/links/manager), please refer to the relevant documentation: [Managing nodes and node pools](/pages/public_cloud/containers_orchestration/managed_kubernetes/managing-nodes) guide.

## Requirements

- An OVHcloud Managed Kubernetes cluster
- The [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/){.external} command-line tool. You can find the [detailed installation instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl/){.external} for this tool on Kubernetes' official site.

## Nodes and node pools

In your OVHcloud Managed Kubernetes cluster, nodes are grouped in node pools (group of nodes sharing the same configuration).

When you create your cluster, it's created with a default node pool. Then, you can modify the size of this node pool, or add additional node pools of different sizes and types.

In this guide we explain how to do some basic operations with nodes and node pools using the `NodePools` CRD: adding nodes to an existing node pool, creating a new node pool, etc.

## NodePools CRD

Kubernetes [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) are extensions of the Kubernetes API. Like the default Kubernetes resources, the Custom Resources are endpoints in the Kubernetes API that store  collections of API objects of a certain kind. Custom Resources allows to easily extend Kubernetes by adding new features and behaviors.

The simplest way to add a Custom Resource to Kubernetes is to define a [`CustomResourceDefinition` (CRD)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#customresourcedefinitions) with the resource schema.

One of our targets in developing the node pools for OVHcloud Managed Kubernetes was to give our users the capability to fully manage node pools (and by extension nodes themselves) from within Kubernetes, so the logical way to do it was to propose them as Custom Resources in your Kubernetes cluster, by developing the `NodePools` CRD.

To verify that the `NodePools` CRD in available in your cluster, do:

```bash
kubectl get crd
```

You get the list of installed CRDs and inside it the `nodepools.kube.cloud.ovh.com`

```console
$ kubectl get crd
NAME                                             CREATED AT
...
ingresses.networking.internal.knative.dev              2023-01-03T07:25:05Z
ipamblocks.crd.projectcalico.org                       2022-09-22T07:00:52Z
ipamconfigs.crd.projectcalico.org                      2022-09-22T07:00:52Z
ipamhandles.crd.projectcalico.org                      2022-09-22T07:00:53Z
ippools.crd.projectcalico.org                          2022-09-22T07:00:53Z
ipreservations.crd.projectcalico.org                   2022-09-22T07:00:53Z
kubecontrollersconfigurations.crd.projectcalico.org    2022-09-22T07:00:53Z
metrics.autoscaling.internal.knative.dev               2023-01-03T07:25:05Z
networkpolicies.crd.projectcalico.org                  2022-09-22T07:00:53Z
networksets.crd.projectcalico.org                      2022-09-22T07:00:53Z
nodefeaturerules.nfd.k8s-sigs.io                       2023-04-25T07:59:58Z
nodefeatures.nfd.k8s-sigs.io                           2023-04-25T07:59:58Z
<b style="color: yellow">nodepools.kube.cloud.ovh.com                           2022-09-22T06:59:43Z</b>
podautoscalers.autoscaling.internal.knative.dev        2023-01-03T07:25:05Z
podmonitors.monitoring.coreos.com                      2023-04-26T09:19:12Z
podvolumebackups.velero.io                             2022-10-04T06:56:54Z
podvolumerestores.velero.io                            2022-10-04T06:56:54Z
probes.monitoring.coreos.com                           2023-04-26T09:19:12Z
...
```

You can get the details of the `NodePools` CRD by doing:

```bash
kubectl describe crd nodepools.kube.cloud.ovh.com
```

The most interesting part is the spec of the CRD, describing the `NodePool` object and its properties:

```yaml
spec:
  description: NodePoolSpec defines the desired state of NodePool
  properties:
    antiAffinity:
      type: boolean
      description: If true, all nodes present in the pool will be spawned on different hosts (or hypervisors).
    autoscale:
      type: boolean
      description: Represents whether the pool should be autoscaled.
    autoscaling:
      description:  Represents the autoscaling customization of a node pool.
      nullable:     true
      properties:
        scaleDownUnneededTimeSeconds:
          description:  Represents how long a node should be unneeded before it is eligible for scale down.
          format:       int32
          minimum:      0
          nullable:     true
          type:         integer
        scaleDownUnreadyTimeSeconds:
          description:  Represents how long an unready node should be unneeded before it is eligible for scale down.
          format:       int32
          minimum:      0
          nullable:     true
          type:         integer
        scaleDownUtilizationThreshold:
          description:  Represents the ratio of used resources (CPU & RAM) over allocatable resources below which a node is eligible for scale down Kubebuilder does not handle float, this must be a string.
          nullable:     true
          type:         string
      type:             object
    desiredNodes:
      description: Represents number of nodes wanted in the pool.
      format: int32
      maximum: 100
      minimum: 0
      type: integer
    flavor:
      description: Represents the flavor nodes wanted in the pool.
      type: string
    maxNodes:
      description: Represents the maximum number of nodes which should be
        present in the pool.
      format: int32
      maximum: 100
      minimum: 0
      type: integer
    minNodes:
      description: Represents the minimum number of nodes which should be
        present in the pool.
      format: int32
      maximum: 100
      minimum: 0
      type: integer
    monthlyBilled:
      type: boolean
      description: If true, all nodes present in the pool will be billed each month (not hourly).
  required:
  - desiredNodes
  - flavor
  type: object
```

After creation:

- The `desiredNodes` can be edited and the node pool will automatically be resized to accommodate this new value. 
- `minNodes`, `maxNodes`, `autoscale` and `autoscaling` can also be edited at any time.
- /!\ `flavor`, `name` and `antiAffinity` are not editable.

Be aware that `maxNodes` is set by default to 5 when `antiAffinity` is enabled.

To configure cluster autoscaling based on node pools, follow documentations [Configuring the cluster autoscaler](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-cluster-autoscaler) and [Cluster autoscaler example](/pages/public_cloud/containers_orchestration/managed_kubernetes/cluster-autoscaler-example).
To customers developing they own autoscaling scripts, we strongly encourage you to define `minNodes` and `maxNodes`.

## Listing node pools

To list node pools, you can use:

```bash
kubectl get nodepools
```

In my case I have one node pool in my cluster, called `my-node-pool`, with 2 B2-7 nodes:

```console
$ kubectl get nodepools
NAME            FLAVOR   AUTOSCALED   MONTHLY BILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
nodepool-b2-7   b2-7     false        true             true           2         2         2            2           0     5     14d
```

You can see the state of the node pool, how many nodes you want in the pool (`DESIRED`), how many actually are (`CURRENT`), how many of them are up-to-date (`UP-TO-DATE`) and how many are available to be used (`AVAILABLE`).

## Create a node pool

To create a new node pool, you simply need to create a new node pool manifest.

Copy the next YAML manifest in a `new-nodepool.yaml` file:

```yaml
apiVersion: kube.cloud.ovh.com/v1alpha1
kind: NodePool
metadata:
  name: my-new-node-pool
spec:
  antiAffinity: false
  autoscale: false
  autoscaling:
    scaleDownUnneededTimeSeconds: 600
    scaleDownUnreadyTimeSeconds: 1200
    scaleDownUtilizationThreshold: "0.5"
  desiredNodes: 3
  flavor: b2-7
  maxNodes: 100
  minNodes: 0
  monthlyBilled: false
```

> [!primary]
>
> `antiAffinity`, `flavor` and `name` fields will not be editable after creation.
> You cannot change the `monthlyBilled` field from true to false.

Then apply it to your cluster:

```bash
kubectl apply -f new-nodepool.yaml
```

Your new node pool will be created:

```console
$ kubectl apply -f new-nodepool.yaml
nodepool.kube.cloud.ovh.com/my-new-node-pool created

$ kubectl get nodepools
NAME               FLAVOR   AUTOSCALED   MONTHLY BILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
my-new-node-pool   b2-7     false        false            false          3                                            0     100   3s
nodepool-b2-7      b2-7     false        true             true           2         2         2            2           0     5     14d
```

At the beginning the new node pool is empty, but if you wait a few seconds, you will see how the nodes are progressively created and made available (one after another)...

```console
$ kubectl get nodepools
NAME               FLAVOR   AUTOSCALED   MONTHLY BILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
my-new-node-pool   b2-7     false        false            false          3         3         3                        0     100   3s
nodepool-b2-7      b2-7     false        true             true           2         2         2            2           0     5     14d
```

## Editing the node pool size

To upsize or downsize your node pool, you can simply edit the YAML file and re-apply it.
For example, raise the `desiredNodes` to 5 in `new-nodepool.yaml` and apply the file:

```console
$ kubectl apply -f new-nodepool.yaml
nodepool.kube.cloud.ovh.com/my-new-node-pool configured

> [!primary]
>
> `antiaffinity`, `flavor` and `name` fields can't be edited.

$ kubectl get nodepools
NAME               FLAVOR   AUTOSCALED   MONTHLY BILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
my-new-node-pool   b2-7     false        false            false          5         3         3                        0     100   3s
nodepool-b2-7      b2-7     false        true             true           2         2         2            2           0     5     14d
```

The `DESIRED` number of nodes has changed, and the two additional nodes will be created.

Then, after some minutes:

```console
$ kubectl get nodepools
NAME               FLAVOR   AUTOSCALED   MONTHLY BILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
my-new-node-pool   b2-7     false        false            false          5         5         5            3           0     100   3s
nodepool-b2-7      b2-7     false        true             true           2         2         2            2           0     5     14d

$ kubectl get nodepools
NAME               FLAVOR   AUTOSCALED   MONTHLY BILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
my-new-node-pool   b2-7     false        false            false          5         5         5            5           0     100   3s
nodepool-b2-7      b2-7     false        true             true           2         2         2            2           0     5     14d
```

You can also use `kubectl scale —replicas=X` to change the number of desired nodes. For example, let's resize it back to 2 nodes:

```bash
kubectl scale --replicas=2 nodepool my-new-node-pool
```

```console
$ kubectl scale --replicas=2 nodepool my-new-node-pool
nodepool.kube.cloud.ovh.com/my-new-node-pool scaled

$ kubectl get nodepools
NAME               FLAVOR   AUTOSCALED   MONTHLY BILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
my-new-node-pool   b2-7     false        false            false          2         5         5            5           0     100   3s
nodepool-b2-7      b2-7     false        true             true           2         2         2            2           0     5     14d
```

Then, after some minutes:

```console
$ kubectl get nodepools
NAME               FLAVOR   AUTOSCALED   MONTHLY BILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
my-new-node-pool   b2-7     false        false            false          2         2         2            2           0     100   3s
nodepool-b2-7      b2-7     false        true             true           2         2         2            2           0     5     14d
```

## Deleting a node pool

You can simply use `kubectl` to delete a node pool, as any other Kubernetes resource:

```bash
kubectl delete nodepool my-new-node-pool
```

After executing this command, Kubernetes will change the state of the nodes to `Ready,SchedulingDisabled`. After a little time, Nodes will be deleted.

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovh.com/public-cloud/kubernetes/).

Otherwise to skip it and push to deploy your first application on your Kubernetes cluster, we invite you to follow our guide to [deploying an application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-an-application).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](https://community.ovh.com/en/).
