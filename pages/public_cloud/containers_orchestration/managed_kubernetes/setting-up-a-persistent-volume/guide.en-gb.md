---
title: Setting-up a Persistent Volume on OVHcloud Managed Kubernetes
excerpt: 'Find out how to create Persistent Volume Claim (PVC) and Persistent Volumes (PV), attach a Pod to a PVC, change PV reclaim policy and delete created objects'
updated: 2024-08-14
---

In this tutorial we are going to guide you through a simple example of setting-up a [Persistent Volume (PV)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) on your OVHcloud Managed Kubernetes Service.

You will create a `Persistent Volume Claim` (PVC), that will automatically create a `Persistent Volume` (PV) that will automatically create an associated Public Cloud __Block Storage__ volume.<br>
Then you will create a `Pod` attached to the PVC.

![Schema](images/schema.png){.thumbnail}

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world).

It also supposes you have read our [Persistent Volumes on OVHcloud Managed Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/persistent-volumes-on-ovh-managed-kubernetes) guide.

> [!warning]
> When a __Persistent Volumes__ resource is created inside a Managed Kubernetes cluster, an associated Public Cloud __Block Storage__ volume is automatically created with it.
> This volume is hourly charged and will appear in your Public Cloud project. For more information, please refer to the following documentation: [Volume Block Storage price](https://www.ovhcloud.com/en-gb/public-cloud/prices/#storage)

## Persistent Volumes (PV) and Persistent Volume Claims (PVC)

As the [official documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) states:

- A `PersistentVolume` (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource.  
- A `PersistentVolumeClaim` (PVC) is a request for storage by a user. It is similar to a pod. Pods consume node resources and PVCs consume PV resources. Pods can request specific levels of resources (CPU and Memory). Claims can request specific size and access modes (e.g., they can be mounted once as read/write or many times as read-only).

Or, if you prefer an analogy, **PVC are to PV like pods are to nodes**.

PVC consume abstract storage resources (the PVs) as Pods consume node resources.

## So you want some persistent storage on your cluster

Let's say you need some persistent storage on your cluster, some kind of network storage for OVHcloud Managed Kubernetes Service that currently means a storage based on [Cinder](https://docs.openstack.org/cinder/latest/){.external}. In Kubernetes terms you will need two objects:  a `PersistentVolumeClaim` and its associated `PersistentVolume`.

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

And apply it to your cluster:

```bash
kubectl apply -f test-pvc.yaml
```

Then you can see the PVC and the associated PV using `kubectl`:

```bash
kubectl get pvc
kubectl get pv | grep "test-pvc"
```

```console
$ kubectl apply -f test-pvc.yaml
persistentvolumeclaim/test-pvc created

$ kubectl get pvc
NAME       STATUS   VOLUME                                                                   CAPACITY   ACCESS MODES   STORAGECLASS            AGE
test-pvc   Bound    ovh-managed-kubernetes-dmhe43-pvc-ac9493f5-e65f-41ee-a7fa-45d42fc37fe3   10Gi       RWO            csi-cinder-high-speed   4m5s

$ kubectl get pv | grep "test-pvc"
ovh-managed-kubernetes-dmhe43-pvc-ac9493f5-e65f-41ee-a7fa-45d42fc37fe3   10Gi       RWO            Delete           Bound      default/test-pvc                               csi-cinder-high-speed            4m55s
```

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
    - mountPath: "/usr/share/nginx/html"
      name: test-volume
  volumes:
  - name: test-volume
    persistentVolumeClaim:
      claimName: test-pvc
```

Apply it to the cluster:

```bash
kubectl apply -f test-pvc-pod.yaml
```

Check that everything is working correctly:

```bash
kubectl describe pod test-pvc-pod
```

You should obtain a result like this:

```console
$ kubectl apply -f test-pvc-pod.yaml
pod/test-pvc-pod created

$ kubectl describe pod test-pvc-pod
Name:         test-pvc-pod
Namespace:    default
Priority:     0
Node:         nodepool-f636da5d-3d0d-481d-aa-node-f4d042/141.94.167.92
Start Time:   Mon, 28 Nov 2022 09:58:09 +0100
Labels:       <none>
Annotations:  <none>
Status:       Pending
IP:
IPs:          <none>
Containers:
  myfrontend:
    Container ID:
    Image:          nginx
    Image ID:
    Port:           <none>
    Host Port:      <none>
    State:          Waiting
      Reason:       ContainerCreating
    Ready:          False
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /usr/share/nginx/html from test-volume (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-vgx5h (ro)
Conditions:
  Type              Status
  Initialized       True
  Ready             False
  ContainersReady   False
  PodScheduled      True
Volumes:
  test-volume:
    Type:       PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
    ClaimName:  test-pvc
    ReadOnly:   false
  kube-api-access-vgx5h:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  7s    default-scheduler  Successfully assigned default/test-pvc-pod to nodepool-f636da5d-3d0d-481d-aa-node-f4d042
```

## Storage Classes

We currently support three [Storage Classes](https://kubernetes.io/docs/concepts/storage/storage-classes/) on OVHcloud Managed Kubernetes:

* `csi-cinder-high-speed-gen2` storage class is based on hardware that includes SSD disks with NVMe interfaces. The performance allocation is progressive and linear (30 IOPS allocated per GB and 0.5MB/s allocated per GB) with a maximum of 20k IOPS and 1GB/s per volume. The IOPS and bandwidth performance will increase as  scale up the storage space.
* `csi-cinder-high-speed` performance is fixed. You will get up to 3,000 IOPS per volume, regardless of the volume size. 
* `csi-cinder-classic` uses traditional spinning disks (200 IOPS guaranteed, Up to 64 MB/s per volume). 

All these `Storage Classes` are based on Cinder, the OpenStack block storage service. The difference between them is the associated physical storage device. They are distributed transparently, on three physical local replicas.

High Speed performance is theoretically best for volumes up to 100GB. Above 100GB per volume, you will get enhanced performance with a High Speed Gen2 volume.

```console
$ kubectl get sc
NAME                              PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
csi-cinder-classic                cinder.csi.openstack.org   Delete          Immediate           true                   12d
csi-cinder-high-speed (default)   cinder.csi.openstack.org   Delete          Immediate           true                   12d
csi-cinder-high-speed-gen2        cinder.csi.openstack.org   Delete          Immediate           true                   5h11m
```

When you create a Persistent Volume Claim on your Kubernetes cluster, we provision the Cinder storage into your account. This storage is charged according to the OVH [flexible cloud storage prices](https://www.ovh.com/world/public-cloud/storage/additional-disks/){.external}.

Since Kubernetes 1.11, support for expanding PersistentVolumeClaims (PVCs) is enabled by default, and it works on Cinder volumes. In order to learn how to resize them, please refer to the [Resizing Persistent Volumes](/pages/public_cloud/containers_orchestration/managed_kubernetes/resizing-persistent-volumes) tutorial. Kubernetes PVCs resizing only allows to expand volumes, not to decrease them.

## Access Modes

The way a PV can be mounted on a host depends on the capabilities of the resource provider. Each PV gets its own set of access modes describing that specific PV’s capabilities:

* `ReadWriteOnce`: the PV can be mounted as read-write by a single node
* `ReadOnlyMany`: the PV can be mounted read-only by many nodes
* `ReadWriteMany`: the PV can be mounted as read-write by many nodes

Our storage resource, Cinder, doesn't allow to mount a PV on several nodes at the same time, so you need to use the `ReadWriteOnce` access mode.

## Reclaim policies

When you are done with a volume, you can delete the PVC, to liberate the resource. At that instant you have an unbounded PV object on your cluster, and its fate depends on the reclaim policy you have chosen in your PVC.

There are 2 possible reclaim policies:

* `Retain`: When the PVC is deleted, the PV still exists. The volume is considered *released*, but it is not yet available because the previous data remains on the volume. If you want to delete it, you must do it manually.

* `Delete`: when the PVC is deleted, the PV and the associated storage in the external infrastructure (i.e. the Cinder storage in our case) are both deleted.

For every [Storage Class](https://kubernetes.io/docs/concepts/storage/storage-classes/){.external} there is a  reclaim policy set by default, that can be changed for individual instances of PV.  On our Cinder based storage classes, **the reclaim policy by default is `Delete`**, as you can verify:

```bash
kubectl get pv
```

```console
$ kubectl get pv
NAME                                       CAPACITY  ACCESS MODES  RECLAIM POLICY  STATUS  CLAIM             STORAGECLASS           AGE
ovh-managed-kubernetes-btw8lc-pvc-LONG-ID  10Gi      RWO           Delete          Bound   default/test-pvc  csi-cinder-high-speed  15s
```

## Delete a PVC (and associated PV)

Thanks to the `Delete` reclaim policy, if you delete the PVC, the associated PV is also deleted:

```bash
kubectl delete pod test-pvc-pod
kubectl delete pvc test-pvc
kubectl get pvc
kubectl get pv | grep "test-pvc"
```

```console
$ kubectl delete po test-pvc-pod
pod "test-pvc-pod" deleted

$ kubectl delete pvc test-pvc
persistentvolumeclaim "test-pvc" deleted

$ kubectl get pvc
No resources found.

$ kubectl get pv | grep "test-pvc"
No resources found.
```

> [!warning]
>
> If you created a pod attached to a PVC and you want to delete the PVC, please note that the PVC can't be terminated while the pod is still on. 
> So please delete the pod first, then delete the PVC.

### Changing the reclaim policy

To illustrate how to change the reclaim policy, let's begin by creating a new PVC using the `test-pvc.yaml` file:

```bash
kubectl apply -f test-pvc.yaml
```

List the PV and get its name:

```bash
kubectl get pv | grep "test-pvc"
```

And patch it to change its reclaim policy:

```bash
kubectl patch pv <your-pv-name> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
```

Where `<your-pv-name>` is the name of your chosen PersistentVolume.

Now you can verify that the PV has the right policy:

```bash
kubectl get pv | grep "test-pvc"
```

```console
$ kubectl apply -f test-pvc.yaml
persistentvolumeclaim/test-pvc created

$ kubectl get pv | grep "test-pvc"
NAME                                      CAPACITY  ACCESS MODES  RECLAIM POLICY  STATUS  CLAIM             STORAGECLASS           AGE
ovh-managed-kubernetes-btw8lc-pvc-LONG-ID 10Gi      RWO           Delete          Bound   default/test-pvc  csi-cinder-high-speed  19s

$ kubectl patch pv ovh-managed-kubernetes-btw8lc-pvc-LONG-ID -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
persistentvolume/ovh-managed-kubernetes-btw8lc-pvc-LONG-ID patched

$ kubectl get pv | grep "test-pvc"
NAME                                       CAPACITY  ACCESS MODES  RECLAIM POLICY  STATUS  CLAIM             STORAGECLASS           AGE
ovh-managed-kubernetes-btw8lc-pvc-LONG-ID  10Gi      RWO           Retain          Bound   default/test-pvc  csi-cinder-high-speed  19s
```

In the preceding output, you can see that the volume bound to PVC `default/test-pvc` has reclaim policy `Retain`.  
It will not be automatically deleted when a user deletes PVC `default/test-pvc`

## Go further

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our community of users on <https://community.ovh.com/en/>.