---
title: Persistent Volumes on OVHcloud Managed Kubernetes Service
excerpt: 'Learn how to create Persistent Volume Claims (PVCs) and Persistent Volumes (PVs), attach a Pod to a PVC, modify the PV reclaim policy, and delete the created objects.'
updated: 2025-09-29
---

This tutorial goes through the setup of a [Persistent Volume (PV)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) on an OVHcloud Managed Kubernetes Service.

In order to provision a volume, a `Persistent Volume Claim` (PVC) is required. This will automatically create a `Persistent Volume` (PV) associated to a Public Cloud __Block Storage__ volume.<br>

The Block Storage volume then becomes available for any pod that claims it via a PVC.

![Schema](images/schema.png){.thumbnail}

## Requirements

A running MKS cluster, see the [OVHcloud Managed Kubernetes Service Quickstart](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world) guide for more information.

> [!warning]
> When a __Persistent Volumes__ resource is created inside a Managed Kubernetes cluster, an associated Public Cloud __Block Storage__ volume is automatically created with it.
> This volume is hourly charged and will appear in your Public Cloud project. For more information, please refer to the following documentation: [Volume Block Storage price](https://www.ovhcloud.com/en-gb/public-cloud/prices/#storage)

## Persistent Volumes (PV) and Persistent Volume Claims (PVC)

As the [official documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) states:

- A `PersistentVolume` (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource.
- A `PersistentVolumeClaim` (PVC) is a request for storage by a user. It is similar to a pod. Pods consume node resources and PVCs consume PV resources. Pods can request specific levels of resources (CPU and Memory). Claims can request specific size and access modes (e.g., they can be mounted once as read/write or many times as read-only).

## Create a PVC

The following `test-pvc.yaml` example reserves a `10Gi` volume, with the `csi-cinder-high-speed` storage class:

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

To create it on a cluster:

```bash
kubectl apply -f test-pvc.yaml
```

To check that the PersistentVolumeClaim (pvc) and its associated PersistenVolume (pv) were created:

```bash
kubectl get pvc
kubectl get pv | grep "test-pvc"
```

Sample output:

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

This sample pod mounts the provisioned volume via its PVC:

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

To create it on a cluster:

```bash
kubectl apply -f test-pvc-pod.yaml
```

To check that the pod mounted the volume and started successfully:

```bash
kubectl describe pod test-pvc-pod
```

Sample output:

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

Storage classes point to a particular storage technology used to provision a volume. This storage class is given in the `PersistentVolumeClaim` definition. See the [official documentation](https://kubernetes.io/docs/concepts/storage/storage-classes/) for more information.

The following storage classes are currently supported on OVHcloud Managed Kubernetes:

* `csi-cinder-high-speed-gen2` storage class is based on hardware that includes SSD disks with NVMe interfaces. The performance allocation is progressive and linear (30 IOPS allocated per GB and 0.5MB/s allocated per GB) with a maximum of 20k IOPS and 1GB/s per volume. The IOPS and bandwidth performance will increase as  scale up the storage space.
* `csi-cinder-high-speed` performance is fixed. You will get up to 3,000 IOPS per volume, regardless of the volume size.
* `csi-cinder-classic` uses traditional spinning disks (200 IOPS guaranteed, Up to 64 MB/s per volume). (Not supported yet on [MKS Standard plan](/pages/public_cloud/containers_orchestration/managed_kubernetes/premium#storage-classes)).
* `*-luks` storage classes add a layer of encryption on top of the storage class. It is only available in specific regions: see the [related GitHub issue](https://github.com/ovh/public-cloud-roadmap/issues/307) for more information.

All these `Storage Classes` are based on Cinder, the OpenStack block storage service. The difference between them is the associated physical storage device. They are distributed transparently, on three physical local replicas.

`csi-cinder-high-speed` is recommended for volumes up to 100GB. Above 100GB per volume, enhanced performance is achieved with `csi-cinder-high-speed-gen2` volumes.

>> > [!warning]
>> >
>> > Creating a **-luks** volume automatically generates a dedicated key.
>> >
>> > Do not modify or delete this key if it is linked to a Block Storage volume. Doing so would make the data on that volume and all its snapshots permanently unrecoverable.
>> >

```console
$ kubectl get storageclass
NAME                              PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
csi-cinder-high-speed (default)   cinder.csi.openstack.org   Delete          WaitForFirstConsumer   true                   11d
csi-cinder-high-speed-gen-2       cinder.csi.openstack.org   Delete          WaitForFirstConsumer   true                   11d
csi-cinder-high-speed-gen2-luks   cinder.csi.openstack.org   Delete          WaitForFirstConsumer   true                   11d
csi-cinder-high-speed-luks        cinder.csi.openstack.org   Delete          WaitForFirstConsumer   true                   11d
```

When you create a Persistent Volume Claim on your Kubernetes cluster, we provision the Cinder storage into your account. This storage is charged according to the OVH [flexible cloud storage prices](https://www.ovh.com/world/public-cloud/storage/additional-disks/).

Since Kubernetes 1.11, support for expanding PersistentVolumeClaims (PVCs) is enabled by default, and it works on Cinder volumes. In order to learn how to resize them, please refer to the [Resizing Persistent Volumes](/pages/public_cloud/containers_orchestration/managed_kubernetes/resizing-persistent-volumes) tutorial. Kubernetes PVCs resizing only allows to expand volumes, not to decrease them.

## Access Modes

The way a PV can be mounted on a host depends on the capabilities of the resource provider. Each PV gets its own set of access modes describing that specific PV’s capabilities:

* `ReadWriteOnce`: the PV can be mounted as read-write by a single node
* `ReadOnlyMany`: the PV can be mounted read-only by many nodes
* `ReadWriteMany`: the PV can be mounted as read-write by many nodes

The default MKS storage classes don't allow mounting a PV on several nodes: only the `ReadWriteOnce` access mode is supported at the moment.

Additional `ReadWriteMany` storage classes can be configured to have this capability:

* The [Enterprise Filesystem Service](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-multi-attach-persistent-volumes-with-ovh-efs) offers a managed shared filesystem consumed via NFS.
* The [OVHcloud Cloud Disk Array](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-multi-attach-persistent-volumes-with-ovh-cloud-disk-array) offers a managed shared filesystem consumed via CephFS.

## Reclaim policies

The behaviour of a volume when a PVC is deleted is configured using a reclaim policy. This policy is configured at the `StorageClass` level.

All storage classes installed by default on MKS currently set the `RetainPolicy` to `Delete`: **when a PVC is deleted, the PV and its associated Public Cloud volume are deleted too**.

To control this behaviour at the `PersistentVolume` level, the `persistentVolumeReclaimPolicy` attribute can be set in the PV Spec. See the [official documentation](https://kubernetes.io/docs/tasks/administer-cluster/change-pv-reclaim-policy/) for more information. A different value such as `Retain` can be set to prevent the volume from being deleted.

### Example: Deleting a PVC and associated resources

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

### Example: Deleting a PVC while keeping its associated resources

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

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our community of users on <https://community.ovh.com/en/>.