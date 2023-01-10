---
title: Managed Kubernetes objects (services, deployments, pods...)
excerpt: ''
slug: managed-kubernetes-objects
section: Technical resources
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/managed-kubernetes-objects/'
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

**Last updated 24th February, 2022.**

We list here the Kubernetes objects you can find running in an OVHcloud Managed Kubernetes.

These objects are created either at the cluster or at the `node` creation, and they allow the cluster operation and management.

> [!warning]
> Please refrain from deleting or otherwise altering them!


### Namespaces

There are several existing `namespaces` running in your cluster:

- `default`: namespace by default
- `kube-node-lease`: for heartbeat Node's lease object
- `kube-public`: reserved mainly for cluster usage & in case of specific resources which should be publicly available
- `kube-system`: for objects created by Kubernetes

The following listed resources are running in theses `namespaces`.

### Services

There are several management `services` running in your cluster:

- `kubernetes`
- `kube-dns`
- `metrics-server`
- `wormhole`

In my example cluster, I get:

<pre class="console"><code>$ kubectl get services --all-namespaces
NAMESPACE     NAME                        TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                  AGE
default       kubernetes                  ClusterIP      10.3.0.1       <none>           443/TCP                  14d
kube-system   kube-dns                    ClusterIP      10.3.0.10      <none>           53/UDP,53/TCP,9153/TCP   14d
kube-system   metrics-server              ClusterIP      10.3.224.150   <none>           443/TCP                  14d
kube-system   wormhole                    ClusterIP      10.3.0.2       <none>           443/TCP                  14d
</code></pre>


### Deployments

To implement these services, you will find several `deployment` objects:

- `coredns`
- `kube-dns-autoscaler`
- `metrics-server`

In my example cluster, I get:

<pre class="console"><code>$ kubectl get deployments --all-namespaces
NAMESPACE     NAME                        READY   UP-TO-DATE   AVAILABLE   AGE
kube-system   coredns                     2/2     2            2           14d
kube-system   kube-dns-autoscaler         1/1     1            1           14d
kube-system   metrics-server              1/1     1            1           14d
</code></pre>


### Daemon sets

There are also several `daemonsets` to define the pods that will be deployed in every node:

- `canal`
- `kube-proxy`
- `wormhole`

In my example cluster, with 5 nodes, I get:

<pre class="console"><code>$ kubectl get daemonsets --all-namespaces
NAMESPACE     NAME         DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                 AGE
kube-system   canal        3         3         3       3            3           beta.kubernetes.io/os=linux   14d
kube-system   kube-proxy   3         3         3       3            3           <none>                        14d
kube-system   wormhole     3         3         3       3            3           <none>                        14d
</code></pre>


### Replica sets

There are also several `replicasets` to define the pods that will run on several instances:

- `coredns-*`
- `kube-dns-autoscaler-*`
- `metrics-server-*`

In my example cluster, I get:

<pre class="console"><code>$ kubectl get replicaset --all-namespaces
NAMESPACE     NAME                                   DESIRED   CURRENT   READY   AGE
kube-system   coredns-77b9fbd56                      2         2         2       14d
kube-system   kube-dns-autoscaler-ddf4c7d5b          1         1         1       14d
kube-system   metrics-server-66bb5cd998              1         1         1       14d
</code></pre>


### Pods

You will find one instance of the following pods running in every node of your cluster:

- `canal`
- `kube-proxy`
- `wormhole`

You will also find one global instance of:

- `kube-dns-autoscaler`
- `metrics-server`

And several instances of:

- `coredns`

In my example cluster, with 3 nodes, I get:

<pre class="console"><code>$ kubectl get pods --all-namespaces
NAMESPACE     NAME                                         READY   STATUS    RESTARTS      AGE
kube-system   canal-lcmmw                                  2/2     Running   2 (14d ago)   14d
kube-system   canal-ljcfj                                  2/2     Running   2 (14d ago)   14d
kube-system   canal-x56p5                                  2/2     Running   1 (14d ago)   14d
kube-system   coredns-77b9fbd56-4s8mb                      1/1     Running   0             14d
kube-system   coredns-77b9fbd56-fslpn                      1/1     Running   0             14d
kube-system   kube-dns-autoscaler-ddf4c7d5b-chzvs          1/1     Running   0             14d
kube-system   kube-proxy-5qs2t                             1/1     Running   0             14d
kube-system   kube-proxy-qb8h9                             1/1     Running   0             14d
kube-system   kube-proxy-xws7j                             1/1     Running   0             14d
kube-system   metrics-server-66bb5cd998-rs46p              1/1     Running   0             14d
kube-system   wormhole-7cbmc                               1/1     Running   0             14d
kube-system   wormhole-7dt6x                               1/1     Running   0             14d
kube-system   wormhole-vh7pk                               1/1     Running   0             14d
</code></pre>
