---
title: Cluster autoscaler example
slug: cluster-autoscaler-example
section: Tutorials
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/cluster-autoscaler-example/'
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

OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. 

During the day-to-day life of your cluster, you may want to dynamically adjust the size of your cluster to accommodate to your workloads. The cluster autoscaler simplifies the task by scaling up or down your OVHcloud Managed Kubernetes cluster to meet the demand of your workloads. 

## Before you begin

This tutorial assumes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

It also assumes that you have read the [Using the cluster autoscaler](../using-cluster-autoscaler/) guide.

## Enabling the autoscaling on the node pool

The easiest way to enable the autoscaler is using the Kubernetes API, for example using `kubectl`.

As explained in the [How nodes and node pools work](../managing-nodes/) guide, in your OVHcloud Managed Kubernetes cluster, nodes are grouped in node pools (groups of nodes sharing the same configuration).

Autoscale is configured on a node pool basis, i.e. you don't enable autoscaling on a full cluster, you enable it for one or more of your node pools.

You can activate the autoscaler on several node pools, each of which can have a different type of instance as well as different min and max nodes number limits.

> [!primary]
>
> In order to avoid unexpected expenses, you should be careful to not enable autoscaling on monthly-billed node pools. However, you are still allowed to do so if you know what you are doing.
> 
> A common configuration is to use non-autoscaled, monthly-billed node pools as base for your static workload, and autoscaled, hourly-billed node pools with smaller flavors for your dynamic workload. 

When you create your cluster, you can bootstrap a default node pool in it, and you can add others in the Public Cloud section of the [OVHcloud Control Panel](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovh.com%2Fmanager%2Fpublic-cloud&ovhSubsidiary=gb) or directly [using the Kubernetes API](../managing-nodes/).

To list node pools, you can use:

```bash
kubectl get nodepools
```

In my case I have one node pool in my cluster, called `nodepool-b2-7`, with 3 B2-7 nodes:

<pre class="console"><code>$ kubectl get nodepools
NAME            FLAVOR   AUTO SCALED   MONTHLY BILLED   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   [...]
nodepool-b2-7   b2-7     false         false            false           3         3         3            3           [...]
</code></pre>

As you can see, the `AUTO SCALED` field is set to `false`.  Let's see why by looking at the node pool description.

You can then get the description of the node pool in YAML format using:

```bash
kubectl get nodepools <your_nodepool_name> -o yaml
```

For my example cluster:

<pre class="console"><code>$ kubectl get nodepools nodepool-b2-7 -o yaml
apiVersion: kube.cloud.ovh.com/v1alpha1
kind: NodePool
metadata:
    [...]
  name: nodepool-b2-7
  resourceVersion: "22315717368"
  selfLink: /apis/kube.cloud.ovh.com/v1alpha1/nodepools/nodepool-b2-7
  uid: de606632-3948-46c0-ba91-e34a6de6a1aa
spec:
  antiAffinity: false
  autoscale: false
  desiredNodes: 3
  flavor: b2-7
  maxNodes: 100
  minNodes: 0
  monthlyBilled: false
  [...]
status:
  availableNodes: 3
  conditions:
    [...]
  currentNodes: 3
  observedGeneration: 2
  upToDateNodes: 3
</code></pre>

In the `spec` section you can see that the `autoscale` parameter is set to `false`. In order to enable the autoscaler, you need to patch the node pool to set this field to `true`. Set also `desiredNodes` to 1, `minNodes` to 1 and `maxNodes` to 3, to be sure that we begin only with one active node and that we can grow the node pool up to 3 nodes.

```bash
kubectl patch nodepool <your_nodepool_name> --type="merge" --patch='{"spec": {"autoscale": true, "desiredNodes": 1, "minNodes": 0, "maxNodes": 3}}'
```

As you can see in my example, patching the node pool definition enables the autoscaler:

<pre class="console"><code>$ kubectl patch nodepool nodepool-b2-7 --type="merge" --patch='{"spec": {"autoscale": true}}'
nodepool.kube.cloud.ovh.com/nodepool-b2-7 patched

$ kubectl get nodepools
NAME            FLAVOR   AUTO SCALED   [...]   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX
nodepool-b2-7   b2-7     true          [...]   false           1         1         1            1           0     3
</code></pre>

Now we can begin to deploy a test workload on the cluster.

## Deploying a test workload

In order to test the autoscaler, we propose you to install a *Prime Numbers* Deployment that deploys several instances of *Prime Numbers* pods. The *Prime Numbers* pod simply calculates prime numbers in the most performance ineffective way: by dividing every positive integer number by all the lower positive integers. It's a CPU intensive operation, but it uses a minimal amount of memory.  

> [!primary]
>
> The *Prime Numbers* pod is a small [NodeJS](https://nodejs.org/) programs. The main script, on `index.js`, is a [Express server](https://expressjs.com/) that launches a [worker thread](https://nodejs.org/api/worker_threads.html) were the prime number calculation is done outside the event loop.

Create a `prime-number.yaml` manifest for the *Prime Numbers* deployment:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prime-numbers
spec:
  selector:
    matchLabels:
      run: prime-numbers
  replicas: 3
  template:
    metadata:
      labels:
        run: prime-numbers
    spec:
      containers:
      - name: prime-numbers
        image: lostinbrittany/ovhcloud-k8s-autoscaling-demo_prime-numbers:0.0.1
        resources:
          limits:
            cpu: 300m
            memory: 30Mi
          requests:
            cpu: 150m
            memory: 15Mi
        ports:
        - containerPort: 8080        
```

As you can see, we will begin by deploying 3 replicas of the pod. Each replica consumes 150m CPU (0.150 CPUs), and we are using B2-7 instances, with 2000m CPU (2 CPU cores). In the tutorial we will increase the number of replicas to 12 then to 24, to see how the autoscaler grows up the node pool to 2 then to 3 nodes.

Deploy the *Prime Numbers* deployment:

```bash
kubectl apply -f prime-number.yaml
```

In my example cluster, we deploy the simple workload, and we verify that we still have only one node in the cluster.

<pre class="console"><code>$ kubectl apply -f manifests/prime-numbers.yaml
deployment.apps/prime-numbers created

$ kubectl get pods
NAME                             READY   STATUS              RESTARTS   AGE
prime-numbers-5ffd8d7b84-4rn58   0/1     ContainerCreating   0          7s
prime-numbers-5ffd8d7b84-lvqv7   0/1     ContainerCreating   0          7s
prime-numbers-5ffd8d7b84-wmm7r   0/1     ContainerCreating   0          7s

# And after a moment, the three pods are running.
$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
prime-numbers-5ffd8d7b84-4rn58   1/1     Running   0          92s
prime-numbers-5ffd8d7b84-lvqv7   1/1     Running   0          92s
prime-numbers-5ffd8d7b84-wmm7r   1/1     Running   0          92s

$ kubectl get nodepools
NAME            FLAVOR   AUTO SCALED   [...]   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX
nodepool-b2-7   b2-7     true          [...]   false           1         1         1            1           0     3       
</code></pre>

## Scaling up the workload

Now we can patch the *Prime Numbers* deployement to augment the replicas to 12, that should be enough to activate the scaling up of the node pool.

```bash
kubectl patch deployment prime-numbers --type="merge" --patch='{"spec": {"replicas": 12}}'
```

<pre class="console"><code>$ kubectl patch deployment prime-numbers --type="merge" --patch='{"spec": {"replicas": 12}}'
deployment.apps/prime-numbers patched

$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
prime-numbers-5ffd8d7b84-2gmgh   0/1     Pending   0          22s
prime-numbers-5ffd8d7b84-6spmf   1/1     Running   0          12m
prime-numbers-5ffd8d7b84-87xc6   1/1     Running   0          4m57s
prime-numbers-5ffd8d7b84-bv2sx   1/1     Running   0          4m57s
prime-numbers-5ffd8d7b84-gmxjc   1/1     Running   0          4m57s
prime-numbers-5ffd8d7b84-jm8mc   0/1     Pending   0          22s
prime-numbers-5ffd8d7b84-jss9r   1/1     Running   0          4m57s
prime-numbers-5ffd8d7b84-pw4f9   1/1     Running   0          22s
prime-numbers-5ffd8d7b84-sb9vz   1/1     Running   0          4m57s
prime-numbers-5ffd8d7b84-tltb8   1/1     Running   0          12m
prime-numbers-5ffd8d7b84-vbzjw   1/1     Running   0          12m
prime-numbers-5ffd8d7b84-wj9cf   0/1     Pending   0          22s
</code></pre>

As you can see then with `kubectl get nodepools`, the autoscaler detects capacity has been reached and asks for a new node:

<pre class="console"><code>
$ kubectl get nodepools
NAME            FLAVOR   AUTO SCALED   [...]   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX
nodepool-b2-7   b2-7     true          [...]   false           2         1         1            1           0     3
</code></pre>

And in a few moments, the new node is created and active, and all the pods are running:

<pre class="console"><code>
$ kubectl get nodepools
NAME            FLAVOR   AUTO SCALED   [...]   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX
nodepool-b2-7   b2-7     true          [...]   false           2         2         2            2           0     3

$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
prime-numbers-5ffd8d7b84-2gmgh   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-6spmf   1/1     Running   0          16m
prime-numbers-5ffd8d7b84-87xc6   1/1     Running   0          9m9s
prime-numbers-5ffd8d7b84-bv2sx   1/1     Running   0          9m9s
prime-numbers-5ffd8d7b84-gmxjc   1/1     Running   0          9m9s
prime-numbers-5ffd8d7b84-j9wrx   1/1     Running   0          116s
prime-numbers-5ffd8d7b84-jm8mc   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-jss9r   1/1     Running   0          9m9s
prime-numbers-5ffd8d7b84-sb9vz   1/1     Running   0          9m9s
prime-numbers-5ffd8d7b84-tltb8   1/1     Running   0          16m
prime-numbers-5ffd8d7b84-vbzjw   1/1     Running   0          16m
prime-numbers-5ffd8d7b84-wj9cf   1/1     Running   0          4m34s
</code></pre>

The scaling-up works as intended!

If now we re-patch the deployment to have 24 replicas:

```bash
kubectl patch deployment prime-numbers --type="merge" --patch='{"spec": {"replicas": 24}}'
```

The autoscaler will detect nodes in `Pending` and add a third node:

<pre class="console"><code>
$ kubectl patch deployment prime-numbers --type="merge" --patch='{"spec": {"replicas": 24}}'
deployment.apps/prime-numbers patched

~/git/docs-perso/Kubernetes$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
prime-numbers-5ffd8d7b84-2gmgh   1/1     Running   0          9m48s
prime-numbers-5ffd8d7b84-5d9hg   1/1     Running   0          37s
prime-numbers-5ffd8d7b84-6spmf   1/1     Running   0          22m
prime-numbers-5ffd8d7b84-76h5b   0/1     Pending   0          36s
prime-numbers-5ffd8d7b84-7xdqv   1/1     Running   0          36s
prime-numbers-5ffd8d7b84-86gcp   1/1     Running   0          36s
prime-numbers-5ffd8d7b84-87xc6   1/1     Running   0          14m
prime-numbers-5ffd8d7b84-8v6xr   0/1     Pending   0          36s
prime-numbers-5ffd8d7b84-8xzqm   0/1     Pending   0          36s
prime-numbers-5ffd8d7b84-bv2sx   1/1     Running   0          14m
prime-numbers-5ffd8d7b84-f6snc   0/1     Pending   0          36s
prime-numbers-5ffd8d7b84-gmxjc   1/1     Running   0          14m
prime-numbers-5ffd8d7b84-j9wrx   1/1     Running   0          7m10s
prime-numbers-5ffd8d7b84-jm8mc   1/1     Running   0          9m48s
prime-numbers-5ffd8d7b84-jss9r   1/1     Running   0          14m
prime-numbers-5ffd8d7b84-p6kb4   1/1     Running   0          36s
prime-numbers-5ffd8d7b84-qtv8k   1/1     Running   0          37s
prime-numbers-5ffd8d7b84-sb9vz   1/1     Running   0          14m
prime-numbers-5ffd8d7b84-sn296   0/1     Pending   0          36s
prime-numbers-5ffd8d7b84-tltb8   1/1     Running   0          22m
prime-numbers-5ffd8d7b84-vbzjw   1/1     Running   0          22m
prime-numbers-5ffd8d7b84-wj9cf   1/1     Running   0          9m48s
prime-numbers-5ffd8d7b84-wtlpd   0/1     Pending   0          36s
prime-numbers-5ffd8d7b84-z5h49   1/1     Running   0          37s

$ kubectl get nodepools
NAME            FLAVOR   AUTO SCALED   MONTHLY BILLED   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
nodepool-b2-7   b2-7     true          false            false           3         2         2            2           0     3     64d

 $ kubectl get nodepools
NAME            FLAVOR   AUTO SCALED   MONTHLY BILLED   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
nodepool-b2-7   b2-7     true          false            false           3         3         2            3           0     3     64d

$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
prime-numbers-5ffd8d7b84-2gmgh   1/1     Running   0          13m
prime-numbers-5ffd8d7b84-5d9hg   1/1     Running   0          4m35s
prime-numbers-5ffd8d7b84-6spmf   1/1     Running   0          26m
prime-numbers-5ffd8d7b84-76h5b   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-7xdqv   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-86gcp   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-87xc6   1/1     Running   0          18m
prime-numbers-5ffd8d7b84-8v6xr   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-8xzqm   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-bv2sx   1/1     Running   0          18m
prime-numbers-5ffd8d7b84-f6snc   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-gmxjc   1/1     Running   0          18m
prime-numbers-5ffd8d7b84-j9wrx   1/1     Running   0          11m
prime-numbers-5ffd8d7b84-jm8mc   1/1     Running   0          13m
prime-numbers-5ffd8d7b84-jss9r   1/1     Running   0          18m
prime-numbers-5ffd8d7b84-p6kb4   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-qtv8k   1/1     Running   0          4m35s
prime-numbers-5ffd8d7b84-sb9vz   1/1     Running   0          18m
prime-numbers-5ffd8d7b84-sn296   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-tltb8   1/1     Running   0          26m
prime-numbers-5ffd8d7b84-vbzjw   1/1     Running   0          26m
prime-numbers-5ffd8d7b84-wj9cf   1/1     Running   0          13m
prime-numbers-5ffd8d7b84-wtlpd   1/1     Running   0          4m34s
prime-numbers-5ffd8d7b84-z5h49   1/1     Running   0          4m35s
</code></pre>

## Scaling down

Let's patch the deployment again to go back to 3 replicas:

```bash
kubectl patch deployment prime-numbers --type="merge" --patch='{"spec": {"replicas": 3}}'
```

In a few moments, only three pods will remain:

<pre class="console"><code>
$ kubectl patch deployment prime-numbers --type="merge" --patch='{"spec": {"replicas": 3}}'
deployment.apps/prime-numbers patched

$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
prime-numbers-5ffd8d7b84-8v6xr   1/1     Running   0          8m3s
prime-numbers-5ffd8d7b84-8xzqm   1/1     Running   0          8m3s
prime-numbers-5ffd8d7b84-sn296   1/1     Running   0          8m3s
</code></pre>

The autoscaler will detect that the nodes are under the value `scale-down-utilization-threshold` parameter (the node utilization level, defined as sum of requested resources divided by capacity, below which a node can be considered for  scale down, [by default 0.5](../configuring-cluster-autoscaler/)), and marks the nodes 2 and 3 as unneeded. 

After some minutes according to the value of `scale-down-unneeded-time` (parameter that sets how long a node should be unneeded before it is eligible for scale down, [10 minutes by default](../configuring-cluster-autoscaler/)), the node will be deleted and the cluster will be scaled down.

After 10 minutes we are back to 2 nodes:

<pre class="console"><code>
$ kubectl get nodepools
NAME            FLAVOR   AUTO SCALED   MONTHLY BILLED   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
nodepool-b2-7   b2-7     true          false            false           3         2         2            2           0     3     64d
</code></pre>

And 10 minutes later, we have only one node:

<pre class="console"><code>
$ kubectl get nodepools
NAME            FLAVOR   AUTO SCALED   MONTHLY BILLED   ANTI AFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
nodepool-b2-7   b2-7     true          false            false           1         1         1            1           0     3     64d
</code></pre>

## Cleaning up

To clean up your cluster, simply delete your `prime-numbers` deployment:

```bash
kubectl delete -f manifests/prime-numbers.yaml
```

<pre class="console"><code>$ kubectl delete -f manifests/prime-numbers.yaml
deployment.apps "prime-numbers" deleted
</code></pre>

## Conclusion

In this tutorial we have seen how to enable the autoscaler on a node pool on your OVHcloud Managed Kubernetes cluster, and how to use an example workload to test how it works.

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovh.com/public-cloud/kubernetes/).

Otherwise to skip it and learn more about using your Kubernetes cluster the practical way, we invite you to look at our [tutorials](../).

Join our [community of users](https://community.ovh.com/en/).
