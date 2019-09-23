
---
title: Managed Kubernetes objects (pods, deployments, services...)
excerpt: ''
slug: managed-kubernetes-objects
section: Technical resources
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

**Last updated September 21<sup>st</sup>, 2019.**

We list here the  Kubernetes objects you can find running in an OVH Managed Kubernetes.

These objects are created either at the cluster or at the node creation, and they allow the cluster operation and management.
Please refrain from deleting or otherwise altering them.


### Services

There are several management `services` running in your cluster:

- `kubernetes`
- `kube-dns`
- `metrics-server`
- `wormhole`

In my example cluster, I get:

<pre class="console"><code>$ kubectl get services --all-namespaces
NAMESPACE     NAME             TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)         AGE
default       kubernetes       ClusterIP   10.3.0.1     $lt;none>        443/TCP         17d
kube-system   kube-dns         ClusterIP   10.3.0.10    $lt;none>        53/UDP,53/TCP   17d
kube-system   metrics-server   ClusterIP   10.3.41.98   $lt;none>        443/TCP         17d
kube-system   wormhole         ClusterIP   10.3.0.2     $lt;none>        443/TCP         17d</code></pre>


### Deployments

To implement these services, you will find several `deployment` objects:

- `kube-dns`
- `metrics-server`
- `wormhole`

In my example cluster, I get:

<pre class="console"><code>$ kubectl get deployments --all-namespaces
NAMESPACE     NAME                  READY   UP-TO-DATE   AVAILABLE   AGE
kube-system   kube-dns              2/2     2            2           17d
kube-system   kube-dns-autoscaler   1/1     1            1           17d
kube-system   metrics-server        1/1     1            1           17d</code></pre>


### Daemon sets

There are also several `daemonsets` to define the pods that will be deployed in every node:

- `canal`
- `proxy`
- `wormhole`

In my example cluster, with 5 nodes, I get:

<pre class="console"><code>$ kubectl get daemonsets --all-namespaces
NAMESPACE     NAME         DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                 AGE
kube-system   canal        5         5         5       5            5           beta.kubernetes.io/os=linux   17d
kube-system   kube-proxy   5         5         5       5            5           &lt;none>                        17d
kube-system   wormhole     5         5         5       5            5           &lt;none>                        17d</code></pre>


### Replica sets

There are also several `replicasets` to define the pods that will run on several instances:

- `metrics-server`
- `kube-dns-autoscaler`
- `kube-dns`

In my example cluster, I get:

<pre class="console"><code>$ kubectl get replicaset --all-namespaces
NAMESPACE     NAME                             DESIRED   CURRENT   READY   AGE
kube-system   kube-dns-autoscaler-54fc5469d8   1         1         1       17d
kube-system   kube-dns-dfcc979bf               2         2         2       17d
kube-system   metrics-server-9ffb558           1         1         1       17d</code></pre>


### Pods

You will find one instance of the following pods running in every node of your cluster:

- `canal`
- `proxy`
- `wormhole`

You will also find one global instance of:

- `metrics-server`
- `kube-dns-autoscaler`

And several instances of:

- `kube-dns`

In my example cluster, with 5 nodes, I get:

<pre class="console"><code>$ kubectl get pods --all-namespaces
NAMESPACE     NAME                                   READY   STATUS    RESTARTS   AGE
kube-system   canal-25dtz                            2/2     Running   1          17d
kube-system   canal-25vkd                            2/2     Running   0          17d
kube-system   canal-t9v6p                            2/2     Running   0          17d
kube-system   canal-xplff                            2/2     Running   0          17d
kube-system   canal-zs9zn                            2/2     Running   0          17d
kube-system   kube-dns-autoscaler-54fc5469d8-qrs6g   1/1     Running   0          17d
kube-system   kube-dns-dfcc979bf-6jkzt               3/3     Running   0          9d
kube-system   kube-dns-dfcc979bf-xr27d               3/3     Running   0          17d
kube-system   kube-proxy-26hgs                       1/1     Running   0          17d
kube-system   kube-proxy-5xftt                       1/1     Running   0          17d
kube-system   kube-proxy-k2x96                       1/1     Running   0          17d
kube-system   kube-proxy-p8747                       1/1     Running   0          17d
kube-system   kube-proxy-pj4bp                       1/1     Running   0          17d
kube-system   metrics-server-9ffb558-wtcll           1/1     Running   0          17d
kube-system   wormhole-gl64h                         1/1     Running   0          17d
kube-system   wormhole-jd7v5                         1/1     Running   0          17d
kube-system   wormhole-lbxw4                         1/1     Running   0          17d
kube-system   wormhole-zbsmx                         1/1     Running   0          17d
kube-system   wormhole-ztphr                         1/1     Running   0          17d</code></pre>


