---
title: Setting-up a Persistent Volume OVHcloud Managed Kubernetes
slug: setting-up-a-persistent-volume
excerpt: ''
section: Tutorials
---

**Last updated January 6<sup>th,</sup> 2020.**

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #fff;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #fff;
 }
 .small {
     font-size: 0.75em;
 }
</style>

In this tutorial we are going to guide you a simple example of setting-up a [Persistent Volume (PV)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) on your OVHcloud Managed Kubernetes Service.



## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

It also supposes you have read our [Persistent Volumes on OVHcloud Managed Kubernetes](../ovh-kubernetes-persistent-volumes) guide.


## Persistent Volumes (PV) and Persistent Volume Claims (PVC)

As the [official documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) states:

> A `PersistentVolume` (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource. 
>
> A `PersistentVolumeClaim` (PVC) is a request for storage by a user. It is similar to a pod. Pods consume node resources and PVCs consume PV resources. Pods can request specific levels of resources (CPU and Memory). Claims can request specific size and access modes (e.g., can be mounted once read/write or many times read-only).

Or, if you prefer an analogy, **PVC are to PV like pods are to nodes**. PVC consume abstract storage resources (the PVs) as Pods consume node resources. 


## So you want some persistent storage on your cluster...

Let's say you need some persistent storage on your cluster, some kind of network storage (for OVHcloud Managed Kubernetes that currently means a storage based on [Cinder](https://docs.openstack.org/cinder/latest/){.external}. In Kubernetes terms you will need two objects:  a `PersistentVolumeClaim` and its associated `PersistentVolume`. 

How do you get them? You simply need to create the PVC object in your cluster. Kubernetes will see your claim and, according to its available resources, allocate a PV corresponding to your claim.


## Let's create a PVC

Copy the next YAML fragment into a `test-pvc.yaml` file:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: test-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: csi-cinder-high-speed
```

> [!warning]
> For Kubernetes clusters running in versions 1.12.x, 1.13.x and 1.14.x the storageClassName should be: cinder-high-speed.

And apply it to your cluster:

```bash
kubectl apply -f test-pvc.yaml
```

Then you can see the PVC and the associated PV using `kubectl`:


```bash
kubectl get pvc
kubectl get pv
```

<pre class="console"><code>$ kubectl apply -f test-pvc.yaml
persistentvolumeclaim/test-pvc created

$ kubectl get pvc
NAME       STATUS   VOLUME                                                                   CAPACITY   ACCESS MODES   STORAGECLASS            AGE
test-pvc   Bound    ovh-managed-kubernetes-btw8lc-pvc-8a035acf-23e9-4125-a392-119f5763edee   10Gi       RWO            csi-cinder-high-speed   5s

$ kubectl get pv
NAME                                                                     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                        STORAGECLASS            REASON   AGE
ovh-managed-kubernetes-btw8lc-pvc-8a035acf-23e9-4125-a392-119f5763edee   10Gi       RWO            Delete           Bound    default/test-pvc   csi-cinder-high-speed            15s
</code></pre>

## Using the PVC

Pods access storage by using the PVC as a volume. In the pod manifest you declare a volume and associate it to a PVC. The volume is then mounted to the host and into the pod.

For our example, let's create a `test-pvc-pod.yaml` file: that deploys a simple Nginx server using our `test-pvc` PVC as external volume:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: test-pvc-pod
spec:
  containers:
    - name: myfrontend
      image: nginx
      volumeMounts:
      - mountPath: "/var/www/html"
        name: test-volume
  volumes:
    - name: test-volume
      persistentVolumeClaim:
        claimName: test-pvc
```

And apply it to the cluster:

```bash
kubectl apply -f test-pvc-pod.yaml`
```

<pre class="console"><code>$ kubectl apply -f test-pvc-pod.yaml
pod/test-pvc-pod created
$ kubectl describe  pod test-pvc-pod
Name:               test-pvc-pod
Namespace:          default
Priority:           0
PriorityClassName:  &lt;none>
Node:               node-03/51.75.199.0
Start Time:         Mon, 06 Jan 2020 11:38:16 +0100
Labels:             &lt;none>
[...]
Volumes:
  test-volume:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  test-pvc
    ReadOnly:   false
[...]
Events:
  Type    Reason                  Age   From                     Message
  ----    ------                  ----  ----                     -------
  Normal  Scheduled               70s   default-scheduler        Successfully assigned default/test-pvc-pod to node-03
  Normal  SuccessfulAttachVolume  68s   attachdetach-controller  AttachVolume.Attach succeeded for volume "ovh-managed-kubernetes-btw8lc-pvc-8a035acf-23e9-4125-a392-119f5763edee"
  Normal  Pulling                 60s   kubelet, node-03         Pulling image "nginx"
  Normal  Pulled                  59s   kubelet, node-03         Successfully pulled image "nginx"
  Normal  Created                 59s   kubelet, node-03         Created container myfrontend
  Normal  Started                 59s   kubelet, node-03         Started container myfrontend
</code></pre>


## Storage Classes

We currently support two [Storage Classes](https://kubernetes.io/docs/concepts/storage/storage-classes/) on OVHcloud Managed Kubernetes: `csi-cinder-high-speed` and `csi-cinder-classic`, both based on [Cinder](https://docs.openstack.org/cinder/latest/){.external}, the OpenStack Block Storage service. The difference between them is the associated physical storage device. `csi-cinder-high-speed` uses SSD, while `csi-cinder-classic` uses traditional spinning disks. Both are distributed transparently, on three physical local replicas.

When you create a Persistent Volume Claim on your Kubernetes cluster, we provision the Cinder storage into your account. This storage is charged according to the OVH [flexible cloud storage prices](https://www.ovh.com/world/public-cloud/storage/additional-disks/){.external}.

Since Kubernetes 1.11, support for expanding PersistentVolumeClaims (PVCs) is enabled by default, and it works on Cinder volumes. In order to learn how to resize them, please refer to the [Resizing Persistent Volumes](../resizing-persistent-volumes/) tutorial. Kubernetes PVCs resizing only allows to expand volumes, not to decrease them.



## Access Modes 

The way a PV can be mounted on a host depends on the capabilities of the resource provider. Each PV gets its own set of access modes describing that specific PV’s capabilities:

- `ReadWriteOnce`: the PV can be mounted as read-write by a single node
- `ReadOnlyMany`: the PV can be mounted read-only by many nodes
- `ReadWriteMany`: the PV can be mounted as read-write by many nodes

Our storage resource, Cinder, doesn't allow to mount a PV on several nodes at the same time, so you need to use the `ReadWriteOnce` access mode.


## Reclaim policies

When you are done with a volume, you can delete the PVC, to liberate the resource. At that instant you have an unbounded PV object on your cluster, and its fate depends on the reclaim policy you have chosen in your PVC. 

There are 2 possible reclaim policies:

- `Retain`: When the PVC is deleted, the PV still exists. The volume is considered *released*, but it is not yet available because the previous data remains on the volume. If you want to delete it, you must do manually.

- `Delete`: when the PVC is deleted, the PV and the associated storage in the external infrastructure (i.e. the Cinder storage in our case) are both deleted.

For every [Storage Class](https://kubernetes.io/docs/concepts/storage/storage-classes/){.external} there is a  reclaim policy set by default, that can be changed for individual instances of PV.  On our Cinder based storage classes, **the reclaim policy by default is `Delete`**, as you can verify:

```bash
kubectl get pv
```

<pre class="console"><code>$ kubectl 
get pv
NAME                                                                     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                        STORAGECLASS            REASON   AGE
ovh-managed-kubernetes-btw8lc-pvc-8a035acf-23e9-4125-a392-119f5763edee   10Gi       RWO            Delete           Bound    default/test-pvc   csi-cinder-high-speed            15s
</code></pre>


If you delete the PVC, the associated PV is also deleted:


```bash
kubectl delete pvc test-pvc
kubectl get pvc
kubectl get pv
```


<pre class="console"><code>$ kubectl 
$ kubectl delete pvc test-pvc
persistentvolumeclaim "test-pvc" deleted

$ kubectl get pvc
No resources found.

$ kubectl get pv
No resources found.
</code></pre>


### Changing the reclaim policy

To illustrate how to change the reclaim policy, let's begin by creating a new PVC using the `test-pvc.yaml` file:


```bash
kubectl apply -f test-pvc.yaml
```

List the PV and get its name:


```bash
kubectl get pv
```

And patch it to change its reclaim policy:

```bash
kubectl patch pv &lt;your-pv-name> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
```

where &lt;your-pv-name> is the name of your chosen PersistentVolume.

Now you can verify that the PV has the right policy:

```bash
kubectl get pv
```

<pre class="console"><code>$ kubectl apply -f test-pvc.yaml
persistentvolumeclaim/test-pvc created
$ kubectl get pv
NAME                                                                     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM              STORAGECLASS            REASON   AGE
ovh-managed-kubernetes-btw8lc-pvc-e935df1d-7b7f-4839-bed7-43cb3bf0bb72   10Gi       RWO            Delete           Bound    default/test-pvc   csi-cinder-high-speed            19s

$ kubectl patch pv pvc-e53d180d-51a4-4237-b9b3-f6b32cce54cf -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
persistentvolume/pvc-e53d180d-51a4-4237-b9b3-f6b32cce54cf patched

$ kubectl get pv
NAME                                                                     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM              STORAGECLASS            REASON   AGE
ovh-managed-kubernetes-btw8lc-pvc-e935df1d-7b7f-4839-bed7-43cb3bf0bb72   10Gi       RWO            Retain           Bound    default/test-pvc   csi-cinder-high-speed            19s

</code></pre>

In the preceding output, you can see that the volume bound to PVC `default/test-pvc` has reclaim policy `Retain`. It will not be automatically deleted when a user deletes PVC `default/test-pvc`
