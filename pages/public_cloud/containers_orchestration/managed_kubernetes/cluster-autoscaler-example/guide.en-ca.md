---
title: Cluster autoscaler example
updated: 2024-03-15
---

OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. 

During the day-to-day life of your cluster, you may want to dynamically adjust the size of your cluster to accommodate to your workloads. The cluster autoscaler simplifies the task by scaling up or down your OVHcloud Managed Kubernetes cluster to meet the demand of your workloads. 

## Before you begin

This tutorial assumes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world).

It also assumes that you have read the [Using the cluster autoscaler](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-cluster-autoscaler) guide.

## Enabling the autoscaling on the node pool

The easiest way to enable the autoscaler is using the Kubernetes API, for example using `kubectl`.

As explained in the [How nodes and node pools work](/pages/public_cloud/containers_orchestration/managed_kubernetes/managing-nodes) guide, in your OVHcloud Managed Kubernetes cluster, nodes are grouped in node pools (groups of nodes sharing the same configuration).

Autoscale is configured on a node pool basis, i.e. you don't enable autoscaling on a full cluster, you enable it for one or more of your node pools.

You can activate the autoscaler on several node pools, each of which can have a different type of instance as well as different min and max nodes number limits.

> [!primary]
>
> In order to avoid unexpected expenses, you should be careful to not enable autoscaling on monthly-billed node pools. However, you are still allowed to do so if you know what you are doing.
> 
> A common configuration is to use non-autoscaled, monthly-billed node pools as base for your static workload, and autoscaled, hourly-billed node pools with smaller flavors for your dynamic workload. 

> [!primary]
>
> The source code of the following example is available in the public Github repository [public-cloud-examples](https://github.com/ovh/public-cloud-examples/tree/main/containers-orchestration/managed-kubernetes/autoscaler)

When you create your cluster, you can bootstrap a default node pool in it, and you can add others in the Public Cloud section of the [OVHcloud Control Panel](/links/manager) or directly [using the Kubernetes API](/pages/public_cloud/containers_orchestration/managed_kubernetes/managing-nodes).


## Deploying a test workload

Let's assume that you have created an MKS cluster with a node pool with its minimum set to 1 and its maximum set to 3.

In order to test the autoscaler, we offer you to install a *Python heavy CPU load* Deployment that deploys several instances of *Python CPU load* pods. The *Python CPU load* pod's goal is to consume all the CPU allocated to it. It's a CPU intensive operation but it uses a minimal amount of memory.

Create a `cpu-load.yaml` manifest for the *python-cpu-load* deployment:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: python-cpu-load
spec:
  selector:
    matchLabels:
      run: python-cpu-load
  replicas: 3
  template:
    metadata:
      labels:
        run: python-cpu-load
    spec:
      containers:
      - name: python-cpu-load
        image: ovhcom/python-cpu-load:1.0.0
        resources:
          limits:
            cpu: 300m
            memory: 30Mi
          requests:
            cpu: 150m
            memory: 15Mi       
```

As you can see, we will begin by deploying 3 replicas of the pod. Each replica consumes 150m CPU (0.150 CPUs), and we are using D2-4 instances, with 2000m CPU (2 CPU cores). In the tutorial we will increase the number of replicas to 12 then to 24, to see how the autoscaler grows up the node pool to 2 then to 3 nodes.

Deploy the *CPU load* deployment:

```bash
kubectl create ns cluster-autoscaler
kubectl apply -f cpu-load.yml -n cluster-autoscaler
```

In my example cluster, we deploy the simple workload, and we verify that we still have only one node in the cluster.

```console
$ kubectl create ns cluster-autoscaler
namespace cluster-autoscaler created

$ kubectl apply -f cpu-load.yml -n cluster-autoscaler
deployment.apps/python-cpu-load created

$ kubectl get pods -n cluster-autoscaler
NAME                               READY   STATUS              RESTARTS   AGE
python-cpu-load-59bfff47f4-9lgnq   0/1     ContainerCreating   0          7s
python-cpu-load-59bfff47f4-d6trc   0/1     ContainerCreating   0          7s
python-cpu-load-59bfff47f4-vzq2g   0/1     ContainerCreating   0          7s

# And after a moment, the three pods are running.
$ kubectl get pods -n cluster-autoscaler
NAME                               READY   STATUS    RESTARTS   AGE
python-cpu-load-59bfff47f4-9lgnq   1/1     Running   0          10s
python-cpu-load-59bfff47f4-d6trc   1/1     Running   0          8s
python-cpu-load-59bfff47f4-vzq2g   1/1     Running   0          6s

$ kubectl get nodepools
NAME            FLAVOR   AUTOSCALED   MONTHLYBILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX  
nodepool-d2-4   d2-4     true         false           false          1         1         1            1           0     10   
```

## Scaling up the workload

Now we can set the `relicas` number to 12, that should be enough to activate the scaling up of the node pool.

```bash
kubectl scale --replicas=12 deploy/python-cpu-load -n cluster-autoscaler
```

```console
$ kubectl scale --replicas=12 deploy/python-cpu-load -n cluster-autoscaler
deployment.apps/python-cpu-load scaled

$ kubectl get pods -n cluster-autoscaler
NAME                               READY   STATUS    RESTARTS   AGE
python-cpu-load-59bfff47f4-9lgnq   1/1     Running   0          3m54s
python-cpu-load-59bfff47f4-c9ttt   1/1     Running   0          15s
python-cpu-load-59bfff47f4-d6trc   1/1     Running   0          3m52s
python-cpu-load-59bfff47f4-m4vcw   0/1     Pending   0          15s
python-cpu-load-59bfff47f4-md69d   0/1     Pending   0          15s
python-cpu-load-59bfff47f4-n8fgl   1/1     Running   0          15s
python-cpu-load-59bfff47f4-nbwqd   1/1     Running   0          15s
python-cpu-load-59bfff47f4-nbxcj   0/1     Pending   0          15s
python-cpu-load-59bfff47f4-rbstz   0/1     Pending   0          15s
python-cpu-load-59bfff47f4-tczf2   1/1     Running   0          15s
python-cpu-load-59bfff47f4-vzq2g   1/1     Running   0          3m50s
python-cpu-load-59bfff47f4-xqd72   1/1     Running   0          15s
```

As you can see then with `kubectl get nodepools`, the autoscaler detects capacity has been reached and asks for a new node:

```console
$ kubectl get nodepools

NAME            FLAVOR   AUTOSCALED   MONTHLYBILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX  
nodepool-d2-4   d2-4     true         false           false          2         1         1            1           0     10   
```

And in a few moments, the new node is created and active, and all the pods are running:

```console
$ kubectl get nodepools
NAME            FLAVOR   AUTOSCALED   MONTHLYBILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX  
nodepool-d2-4   d2-4     true         false           false          2         2         2            2           0     10 

$ kubectl get pods -n cluster-autoscaler
NAME                               READY   STATUS    RESTARTS   AGE
python-cpu-load-59bfff47f4-74pgq   1/1     Running   0          114s
python-cpu-load-59bfff47f4-9lgnq   1/1     Running   0          12m
python-cpu-load-59bfff47f4-d6trc   1/1     Running   0          12m
python-cpu-load-59bfff47f4-m4vcw   1/1     Running   0          9m13s
python-cpu-load-59bfff47f4-md69d   1/1     Running   0          9m13s
python-cpu-load-59bfff47f4-n8fgl   1/1     Running   0          9m13s
python-cpu-load-59bfff47f4-nbwqd   1/1     Running   0          9m13s
python-cpu-load-59bfff47f4-nbxcj   1/1     Running   0          9m13s
python-cpu-load-59bfff47f4-rbstz   1/1     Running   0          9m13s
python-cpu-load-59bfff47f4-tczf2   1/1     Running   0          9m13s
python-cpu-load-59bfff47f4-vzq2g   1/1     Running   0          12m
python-cpu-load-59bfff47f4-xqd72   1/1     Running   0          9m13s
```

The scaling-up works as intended!

If now we ask the deployment to have 24 replicas:

```bash
kubectl scale --replicas=24 deploy/python-cpu-load -n cluster-autoscaler
```

The autoscaler will detect nodes in `Pending` and add a third node:

```console
$ kubectl scale --replicas=24 deploy/python-cpu-load -n cluster-autoscaler
deployment.apps/python-cpu-load scaled

$ kubectl get pods -n cluster-autoscaler
NAME                               READY   STATUS    RESTARTS   AGE
python-cpu-load-59bfff47f4-62ftv   0/1     Pending   0          36s
python-cpu-load-59bfff47f4-6lfp8   0/1     Pending   0          36s
python-cpu-load-59bfff47f4-6rqdf   1/1     Running   0          36s
python-cpu-load-59bfff47f4-74pgq   1/1     Running   0          3m12s
python-cpu-load-59bfff47f4-9lgnq   1/1     Running   0          14m
python-cpu-load-59bfff47f4-cb7w6   0/1     Pending   0          36s
python-cpu-load-59bfff47f4-d6trc   1/1     Running   0          14m
python-cpu-load-59bfff47f4-g6pql   1/1     Running   0          36s
python-cpu-load-59bfff47f4-hvvnx   0/1     Pending   0          36s
python-cpu-load-59bfff47f4-l65r9   1/1     Running   0          36s
python-cpu-load-59bfff47f4-lbpd2   0/1     Pending   0          36s
python-cpu-load-59bfff47f4-lsj7t   1/1     Running   0          36s
python-cpu-load-59bfff47f4-lx9xb   1/1     Running   0          36s
python-cpu-load-59bfff47f4-m4vcw   1/1     Running   0          10m
python-cpu-load-59bfff47f4-md69d   1/1     Running   0          10m
python-cpu-load-59bfff47f4-mjsvs   0/1     Pending   0          36s
python-cpu-load-59bfff47f4-n8fgl   1/1     Running   0          10m
python-cpu-load-59bfff47f4-nbwqd   1/1     Running   0          10m
python-cpu-load-59bfff47f4-nbxcj   1/1     Running   0          10m
python-cpu-load-59bfff47f4-rbstz   1/1     Running   0          10m
python-cpu-load-59bfff47f4-tczf2   1/1     Running   0          10m
python-cpu-load-59bfff47f4-vzq2g   1/1     Running   0          14m
python-cpu-load-59bfff47f4-xqd72   1/1     Running   0          10m
python-cpu-load-59bfff47f4-xt5tk   0/1     Pending   0          36s

$ kubectl get nodepools
NAME           FLAVOR   AUTOSCALED   MONTHLYBILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX
nodepool-d24   d2-4     true         false           false          3         2         2            2           0     10 

$ kubectl get nodepools
NAME           FLAVOR   AUTOSCALED   MONTHLYBILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX
nodepool-d24   d2-4     true         false           false          3         3         3            3           0     10 

$ kubectl get pods -n cluster-autoscaler
NAME                               READY   STATUS    RESTARTS   AGE
python-cpu-load-59bfff47f4-62ftv   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-6lfp8   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-6rqdf   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-74pgq   1/1     Running   0          8m57s
python-cpu-load-59bfff47f4-9lgnq   1/1     Running   0          19m
python-cpu-load-59bfff47f4-cb7w6   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-d6trc   1/1     Running   0          19m
python-cpu-load-59bfff47f4-g6pql   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-hvvnx   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-l65r9   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-lbpd2   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-lsj7t   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-lx9xb   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-m4vcw   1/1     Running   0          16m
python-cpu-load-59bfff47f4-md69d   1/1     Running   0          16m
python-cpu-load-59bfff47f4-mjsvs   1/1     Running   0          6m21s
python-cpu-load-59bfff47f4-n8fgl   1/1     Running   0          16m
python-cpu-load-59bfff47f4-nbwqd   1/1     Running   0          16m
python-cpu-load-59bfff47f4-nbxcj   1/1     Running   0          16m
python-cpu-load-59bfff47f4-rbstz   1/1     Running   0          16m
python-cpu-load-59bfff47f4-tczf2   1/1     Running   0          16m
python-cpu-load-59bfff47f4-vzq2g   1/1     Running   0          19m
python-cpu-load-59bfff47f4-xqd72   1/1     Running   0          16m
python-cpu-load-59bfff47f4-xt5tk   1/1     Running   0          6m21s
```

## Scaling down

Let's scale down the deployment again to go back to 3 replicas:

```bash
kubectl scale --replicas=3 deploy/python-cpu-load -n cluster-autoscaler
```

In a few moments, only three pods will remain:

```console
$ kubectl scale --replicas=3 deploy/python-cpu-load -n cluster-autoscaler
deployment.apps/python-cpu-load scaled

$ kubectl get pods -n cluster-autoscaler
NAME                               READY   STATUS    RESTARTS   AGE
python-cpu-load-59bfff47f4-6lfp8   1/1     Running   0          8m42s
python-cpu-load-59bfff47f4-cb7w6   1/1     Running   0          8m42s
python-cpu-load-59bfff47f4-lbpd2   1/1     Running   0          8m42s
```

The autoscaler will detect that the nodes are under the value `scale-down-utilization-threshold` parameter (the node utilization level, defined as sum of requested resources divided by capacity, below which a node can be considered for  scale down, [by default 0.5](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-cluster-autoscaler)), and marks the nodes 2 and 3 as unneeded. 

After some minutes according to the value of `scale-down-unneeded-time` (parameter that sets how long a node should be unneeded before it is eligible for scale down, [10 minutes by default](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-cluster-autoscaler)), the node will be deleted and the cluster will be scaled down.

After 10 minutes we are back to 2 nodes:

```console
$ kubectl get nodepools
NAME           FLAVOR   AUTOSCALED   MONTHLYBILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX
nodepool-d24   d2-4     true         false           false          2         2         2            2           1     10 
```

And 10 minutes later, we have only one node:

```console
$ kubectl get nodepools
NAME           FLAVOR   AUTOSCALED   MONTHLYBILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX
nodepool-d24   d2-4     true         false           false          1         1         1            1           1     10 
```

## Cleaning up

To clean up your cluster, simply delete your `python-cpu-load` deployment:

```bash
 kubectl delete -f cpu-load.yml -n cluster-autoscaler 
```

```console
$ kubectl delete -f cpu-load.yml -n cluster-autoscaler
deployment.apps "python-cpu-load" deleted
```

## Conclusion

In this tutorial we have seen how to enable the autoscaler on a node pool on your OVHcloud Managed Kubernetes cluster, and how to use an example workload to test how it works.

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovh.com/public-cloud/kubernetes/).

Otherwise to skip it and learn more about using your Kubernetes cluster the practical way, we invite you to look at our [tutorials](/products/public-cloud-containers-orchestration-managed-kubernetes-k8s).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](https://community.ovh.com/en/).
